(() => {
  'use strict';
  const products = window.MARKET_PRODUCTS;
  const categories = window.MARKET_CATEGORIES;
  const translations = window.MARKET_TRANSLATIONS;
  const config = window.MARKET_CONFIG;
  const $ = (selector) => document.querySelector(selector);
  const $$ = (selector) => [...document.querySelectorAll(selector)];
  const storage = {
    get(key) { try { return localStorage.getItem(key); } catch { return null; } },
    set(key, value) { try { localStorage.setItem(key, value); return true; } catch { return false; } },
  };
  let saved = [];
  try {
    const parsed = JSON.parse(storage.get('haijia-wishlist-v1') || '[]');
    if (Array.isArray(parsed)) saved = parsed.filter(id => products.some(p => p.id === id));
  } catch { /* A damaged saved list should never stop the market from opening. */ }
  let bag = {};
  try {
    const parsed = JSON.parse(storage.get('haijia-bag-v1') || '{}');
    if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) {
      for (const p of products) {
        const quantity = parsed[p.id];
        if (Number.isInteger(quantity) && quantity > 0 && quantity <= 99) bag[p.id] = quantity;
      }
    }
  } catch { /* Ignore invalid saved selections. Prices always come from the catalog. */ }
  const state = {
    lang: storage.get('haijia-language') === 'en' ? 'en' : 'zh',
    category: 'all', query: '', wishlistOnly: false, visible: 8,
    saved: new Set(saved), currentProduct: null, imageIndex: 0,
    bag, paymentMethod: 'wechat', paymentCodeVisible: false,
  };
  const icon = (name) => `<svg class="icon" aria-hidden="true"><use href="#i-${name}"/></svg>`;
  const t = key => translations[state.lang][key] || key;
  const text = value => value[state.lang];
  const categoryOf = id => categories.find(c => c.id === id);
  let toastTimer;
  let lastFocused;
  let checkoutOrigin;
  const hasPrice = p => Number.isSafeInteger(p.priceCents) && p.priceCents > 0;
  const money = cents => new Intl.NumberFormat(state.lang === 'zh' ? 'zh-CN' : 'en-US', { style: 'currency', currency: 'CNY', currencyDisplay: 'narrowSymbol' }).format(cents / 100);
  const priceText = p => hasPrice(p) ? money(p.priceCents) : t('pricePending');

  function showToast(message) {
    const toast = $('#toast');
    toast.textContent = message;
    toast.classList.add('visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('visible'), 3300);
  }

  function renderCategories() {
    $('#category-filters').innerHTML = categories.map(category => {
      const count = products.filter(p => category.id === 'all' || p.category === category.id).length;
      return `<button type="button" class="category-button" data-category="${category.id}" aria-pressed="${state.category === category.id}">${icon(category.icon)}<span>${category[state.lang]}</span><span class="category-count">${count}</span></button>`;
    }).join('');
  }

  function filteredProducts() {
    const terms = state.query.trim().toLocaleLowerCase().split(/\s+/).filter(Boolean);
    return products.filter(p => {
      const category = categoryOf(p.category);
      const haystack = [p.name.zh, p.name.en, p.subtitle.zh, p.subtitle.en, p.keywords, category.zh, category.en].join(' ').toLocaleLowerCase();
      return (state.category === 'all' || state.category === p.category)
        && (!state.wishlistOnly || state.saved.has(p.id))
        && terms.every(term => haystack.includes(term));
    });
  }

  function renderProducts() {
    const filtered = filteredProducts();
    const displayed = filtered.slice(0, state.visible);
    $('#product-grid').innerHTML = displayed.map((p, index) => {
      const isSaved = state.saved.has(p.id);
      return `<article class="product-card" style="animation-delay:${Math.min(index, 7) * 25}ms">
        <div class="product-image-wrap" style="--image-position:${p.position}">
          <button type="button" class="product-open" data-product="${p.id}" aria-label="${t('viewDetails')}: ${text(p.name)}"><img src="assets/images/${p.images[0]}-thumb.webp" alt="${text(p.name)}" loading="lazy" decoding="async" width="640" height="800"><span class="image-open-label">${t('viewDetails')} ↗</span></button>
          ${p.tag ? `<span class="product-tag">${text(p.tag)}</span>` : ''}
          <button type="button" class="favorite-button" data-favorite="${p.id}" aria-label="${isSaved ? t('removeWish') : t('addWish')}: ${text(p.name)}" aria-pressed="${isSaved}">${icon('heart')}</button>
        </div>
        <div class="product-info"><span class="product-kind">${categoryOf(p.category)[state.lang]}</span><h3 style="margin:0"><button type="button" class="product-title" data-product="${p.id}">${text(p.name)}</button></h3><p class="product-subtitle" lang="en">${text(p.subtitle)}</p><button class="product-detail-arrow" type="button" data-product="${p.id}" aria-label="${t('viewDetails')}: ${text(p.name)}">↗</button></div>
        <div class="product-purchase"><span class="product-price ${hasPrice(p) ? 'priced' : ''}">${priceText(p)}</span><button type="button" class="card-add-bag" data-add-bag="${p.id}" aria-label="${t('addBag')}: ${text(p.name)}">${icon('basket')}<span>+</span></button></div>
      </article>`;
    }).join('');
    const countText = state.lang === 'zh'
      ? `${state.wishlistOnly ? '我的心愿单 · ' : ''}共 ${filtered.length} 件好物${displayed.length < filtered.length ? ` · 已展示 ${displayed.length} 件` : ''}`
      : `${state.wishlistOnly ? 'My wishlist · ' : ''}${filtered.length} ${filtered.length === 1 ? 'gift' : 'gifts'}${displayed.length < filtered.length ? ` · Showing ${displayed.length}` : ''}`;
    $('#results-count').textContent = countText;
    $('#wishlist-count').textContent = state.saved.size;
    $('#wishlist-toggle').setAttribute('aria-pressed', String(state.wishlistOnly));
    $('#wishlist-toggle').setAttribute('aria-label', `${t('wishlist')} (${state.saved.size})`);
    $('#empty-state').hidden = filtered.length > 0;
    const emptyWishlist = state.wishlistOnly && state.saved.size === 0;
    $('#empty-title').textContent = t(emptyWishlist ? 'emptyWishTitle' : 'emptySearchTitle');
    $('#empty-description').textContent = t(emptyWishlist ? 'emptyWishBody' : 'emptySearchBody');
    $('#load-more').hidden = displayed.length >= filtered.length;
    $('#collection-end').hidden = filtered.length === 0 || displayed.length < filtered.length;
    $('#clear-filters').hidden = state.category === 'all' && !state.query && !state.wishlistOnly;
    $('#search-clear').hidden = !state.query;
  }

  function resetFilters() {
    state.category = 'all';
    state.query = '';
    state.wishlistOnly = false;
    state.visible = 8;
    $('#search-input').value = '';
    renderCategories();
    renderProducts();
  }

  function toggleFavorite(id, origin) {
    if (!products.some(p => p.id === id)) return;
    const wasSaved = state.saved.has(id);
    wasSaved ? state.saved.delete(id) : state.saved.add(id);
    const persisted = storage.set('haijia-wishlist-v1', JSON.stringify([...state.saved]));
    renderProducts();
    if (state.currentProduct) renderSaveButton();
    if (origin?.matches('[data-favorite]')) {
      const nextFocus = $(`[data-favorite="${id}"]`) || $('#wishlist-toggle');
      nextFocus.focus({ preventScroll: true });
    }
    showToast(persisted ? t(wasSaved ? 'removedToast' : 'addedToast') : t('storageToast'));
  }

  function renderSaveButton() {
    const isSaved = state.saved.has(state.currentProduct.id);
    const button = $('#dialog-save');
    button.classList.toggle('saved', isSaved);
    button.setAttribute('aria-pressed', String(isSaved));
    button.innerHTML = `${icon(isSaved ? 'check' : 'heart')}<span>${t(isSaved ? 'savedWish' : 'addWish')}</span>`;
  }

  function renderGallery() {
    const p = state.currentProduct;
    $('#dialog-image').src = `assets/images/${p.images[state.imageIndex]}.webp`;
    $('#dialog-image').alt = `${text(p.name)} — ${state.imageIndex + 1} / ${p.images.length}`;
    $('#gallery-count').textContent = `${state.imageIndex + 1} / ${p.images.length}`;
    $('#gallery-count').hidden = p.images.length < 2;
    $('#gallery-prev').hidden = p.images.length < 2;
    $('#gallery-next').hidden = p.images.length < 2;
    $('#gallery-thumbs').hidden = p.images.length < 2;
    $('#gallery-thumbs').innerHTML = p.images.map((image, i) => `<button type="button" data-image="${i}" aria-pressed="${state.imageIndex === i}" aria-label="${state.lang === 'zh' ? '查看照片' : 'View photo'} ${i + 1}"><img src="assets/images/${image}-thumb.webp" alt=""></button>`).join('');
  }

  function renderDialog() {
    const p = state.currentProduct;
    $('#dialog-category').textContent = categoryOf(p.category)[state.lang];
    $('#dialog-title').textContent = text(p.name);
    $('#dialog-subtitle').textContent = text(p.subtitle);
    $('#dialog-description').textContent = text(p.description);
    $('#dialog-price').textContent = priceText(p);
    renderBagFeedback();
    renderGallery();
    renderSaveButton();
  }

  function openProduct(id, origin) {
    const p = products.find(product => product.id === id);
    if (!p) return;
    state.currentProduct = p;
    state.imageIndex = 0;
    lastFocused = origin;
    renderDialog();
    $('#product-dialog').showModal();
    $('#product-dialog').scrollTop = 0;
    $('#dialog-close').focus({ preventScroll: true });
  }

  function changeImage(delta) {
    const p = state.currentProduct;
    state.imageIndex = (state.imageIndex + delta + p.images.length) % p.images.length;
    renderGallery();
  }

  function setLanguage(lang) {
    state.lang = lang;
    storage.set('haijia-language', lang);
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    document.title = t('title');
    $('meta[name="description"]').content = t('metaDescription');
    $$('[data-i18n]').forEach(el => { el.innerHTML = t(el.dataset.i18n); });
    $$('[data-label]').forEach(el => el.setAttribute('aria-label', t(el.dataset.label)));
    $$('[data-alt]').forEach(el => { el.alt = t(el.dataset.alt); });
    $$('[data-placeholder]').forEach(el => { el.placeholder = t(el.dataset.placeholder); });
    $$('[data-lang]').forEach(el => el.setAttribute('aria-pressed', String(el.dataset.lang === lang)));
    $('#event-date').textContent = config.date[lang] || t('pending');
    $('#event-location').textContent = config.location[lang] || t('pending');
    renderCategories();
    renderProducts();
    renderCheckout();
    if (state.currentProduct) renderDialog();
  }

  document.addEventListener('click', event => {
    const addToBag = event.target.closest('[data-add-bag]');
    if (addToBag) return addBagItem(addToBag.dataset.addBag);
    const bagChange = event.target.closest('[data-bag-change]');
    if (bagChange) return changeBagQuantity(bagChange.dataset.id, bagChange.dataset.bagChange);
    const payment = event.target.closest('[data-payment]');
    if (payment && ['wechat', 'alipay'].includes(payment.dataset.payment)) {
      state.paymentMethod = payment.dataset.payment;
      state.paymentCodeVisible = false;
      return renderCheckout();
    }
    const favorite = event.target.closest('[data-favorite]');
    if (favorite) return toggleFavorite(favorite.dataset.favorite, favorite);
    const product = event.target.closest('[data-product]');
    if (product) return openProduct(product.dataset.product, product);
    const category = event.target.closest('[data-category]');
    if (category) {
      state.category = category.dataset.category;
      state.visible = 8;
      $$('.category-button').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.category === state.category)));
      return renderProducts();
    }
    const language = event.target.closest('[data-lang]');
    if (language) return setLanguage(language.dataset.lang);
    const image = event.target.closest('[data-image]');
    if (image) {
      state.imageIndex = Number(image.dataset.image);
      renderGallery();
      $(`[data-image="${state.imageIndex}"]`).focus({ preventScroll: true });
    }
  });

  $('#wishlist-toggle').addEventListener('click', () => {
    state.wishlistOnly = !state.wishlistOnly;
    state.category = 'all';
    state.query = '';
    state.visible = products.length;
    $('#search-input').value = '';
    renderCategories();
    renderProducts();
    $('#market').scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
  });
  $('#search-form').addEventListener('submit', e => e.preventDefault());
  $('#search-input').addEventListener('input', event => {
    state.query = event.target.value;
    state.visible = products.length;
    renderProducts();
  });
  $('#search-clear').addEventListener('click', () => {
    state.query = '';
    $('#search-input').value = '';
    renderProducts();
    $('#search-input').focus();
  });
  $('#clear-filters').addEventListener('click', resetFilters);
  $('#empty-reset').addEventListener('click', resetFilters);
  $('#load-more').addEventListener('click', () => {
    const previousCount = state.visible;
    state.visible = products.length;
    renderProducts();
    $$('.product-open')[previousCount]?.focus({ preventScroll: true });
  });
  $('#dialog-close').addEventListener('click', () => $('#product-dialog').close());
  $('#product-dialog').addEventListener('click', event => {
    if (event.target !== $('#product-dialog')) return;
    const rect = event.target.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) event.target.close();
  });
  $('#product-dialog').addEventListener('close', () => {
    const productId = state.currentProduct?.id;
    state.currentProduct = null;
    const fallback = $(`[data-product="${productId}"]`) || $('#wishlist-toggle');
    (lastFocused?.isConnected ? lastFocused : fallback).focus({ preventScroll: true });
  });
  $('#product-dialog').addEventListener('keydown', event => {
    if (event.key === 'ArrowLeft') { event.preventDefault(); changeImage(-1); }
    if (event.key === 'ArrowRight') { event.preventDefault(); changeImage(1); }
  });
  $('#dialog-save').addEventListener('click', () => toggleFavorite(state.currentProduct.id));
  $('#gallery-prev').addEventListener('click', () => changeImage(-1));
  $('#gallery-next').addEventListener('click', () => changeImage(1));

  function bagSummary() {
    const items = products.filter(p => state.bag[p.id]);
    const quantity = items.reduce((sum, p) => sum + state.bag[p.id], 0);
    const total = items.reduce((sum, p) => sum + (hasPrice(p) ? p.priceCents * state.bag[p.id] : 0), 0);
    const priced = items.length > 0 && items.every(hasPrice) && Number.isSafeInteger(total) && total > 0;
    return { items, quantity, total, priced };
  }

  function paymentDetails() {
    const method = config.payments?.[state.paymentMethod];
    const payee = method?.payee?.[state.lang] || method?.payee?.zh || method?.payee?.en || '';
    const source = method?.qrImage || '';
    // Only allow local assets; never accept a QR/link from URL parameters or local storage.
    const validImage = /^assets\/[\w/-]+\.(png|jpe?g|webp)$/i.test(source) && !source.split('/').includes('..');
    return { payee, source, ready: Boolean(payee.trim() && validImage) };
  }

  function renderCheckout() {
    const summary = bagSummary();
    const payment = paymentDetails();
    const ready = summary.priced && payment.ready;
    $('#bag-count').textContent = summary.quantity;
    $('#bag-toggle').setAttribute('aria-label', `${t('bagLabel')} (${summary.quantity})`);
    $('#bag-empty').hidden = summary.items.length > 0;
    $('#checkout-content').hidden = summary.items.length === 0;
    $('#bag-item-count').textContent = state.lang === 'zh' ? `${summary.quantity} 件好物` : `${summary.quantity} ${summary.quantity === 1 ? 'gift' : 'gifts'}`;
    $('#bag-items').innerHTML = summary.items.map(p => `<article class="bag-item">
      <img src="assets/images/${p.images[0]}-thumb.webp" alt="${text(p.name)}" width="72" height="82">
      <div class="bag-item-info"><h4>${text(p.name)}</h4><p>${t('unitPrice')} · ${priceText(p)}</p><div class="bag-item-controls"><div class="quantity-control"><button type="button" data-bag-change="minus" data-id="${p.id}" aria-label="${t('decreaseQuantity')}: ${text(p.name)}" ${state.bag[p.id] === 1 ? 'disabled' : ''}>−</button><span>${state.bag[p.id]}</span><button type="button" data-bag-change="plus" data-id="${p.id}" aria-label="${t('increaseQuantity')}: ${text(p.name)}" ${state.bag[p.id] === 99 ? 'disabled' : ''}>+</button></div><button type="button" class="remove-bag-item" data-bag-change="remove" data-id="${p.id}" aria-label="${t('removeItem')}: ${text(p.name)}">${t('removeItem')}</button></div></div>
      <span class="bag-item-total">${hasPrice(p) ? money(p.priceCents * state.bag[p.id]) : t('totalPending')}</span>
    </article>`).join('');
    $('#checkout-total').textContent = summary.priced ? money(summary.total) : t('totalPending');
    $('#checkout-status').textContent = t(!summary.priced ? 'unpricedStatus' : !payment.ready ? 'paymentNotReady' : 'paymentReady');
    $$('[data-payment]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.payment === state.paymentMethod)));
    $('#payment-unavailable').hidden = ready;
    $('#show-payment-code').disabled = !ready;
    $('#show-payment-code').hidden = ready && state.paymentCodeVisible;
    $('#payment-code-panel').hidden = !(ready && state.paymentCodeVisible);
    if (ready && state.paymentCodeVisible) {
      $('#payment-payee').textContent = payment.payee;
      $('#payment-amount').textContent = money(summary.total);
      const image = $('#payment-code-image');
      const sameSource = image.getAttribute('src') === payment.source;
      if (!sameSource) {
        image.hidden = false;
        $('#payment-code-error').hidden = true;
        $('#payment-code-download').hidden = true;
        image.src = payment.source;
      }
      $('#payment-code-download').href = payment.source;
    } else {
      $('#payment-code-image').removeAttribute('src');
      $('#payment-code-download').removeAttribute('href');
      $('#payment-payee').textContent = '';
      $('#payment-amount').textContent = '';
    }
  }

  function persistBag() {
    state.paymentCodeVisible = false;
    const saved = storage.set('haijia-bag-v1', JSON.stringify(state.bag));
    renderCheckout();
    renderBagFeedback();
    return saved;
  }

  function addBagItem(id) {
    if (!products.some(p => p.id === id)) return;
    const quantity = state.bag[id] || 0;
    if (quantity >= 99) return showToast(t('bagLimit'));
    state.bag[id] = quantity + 1;
    const persisted = persistBag();
    showToast(t(persisted ? 'addedBag' : 'bagStorageError'));
  }

  function changeBagQuantity(id, action) {
    if (!state.bag[id]) return;
    if (action === 'remove') delete state.bag[id];
    else if (action === 'minus') state.bag[id] = Math.max(1, state.bag[id] - 1);
    else if (action === 'plus') state.bag[id] = Math.min(99, state.bag[id] + 1);
    else return;
    if (!persistBag()) showToast(t('bagStorageError'));
    const target = $(`[data-bag-change="${action}"][data-id="${id}"]:not(:disabled)`)
      || $(`[data-bag-change="plus"][data-id="${id}"]:not(:disabled)`)
      || $('#checkout-close');
    target.focus({ preventScroll: true });
  }

  function renderBagFeedback() {
    const quantity = state.currentProduct ? state.bag[state.currentProduct.id] || 0 : 0;
    $('#detail-bag-feedback').hidden = quantity === 0;
    $('#dialog-bag-feedback').textContent = state.lang === 'zh' ? `已选 ${quantity} 件` : `${quantity} in your bag`;
  }

  function openCheckout(origin) {
    checkoutOrigin = origin;
    state.paymentCodeVisible = false;
    renderCheckout();
    $('#checkout-dialog').showModal();
    $('#checkout-dialog').scrollTop = 0;
    $('#checkout-close').focus({ preventScroll: true });
  }
  $('#bag-toggle').addEventListener('click', event => openCheckout(event.currentTarget));
  $('#dialog-view-bag').addEventListener('click', () => {
    $('#product-dialog').addEventListener('close', () => openCheckout($('#bag-toggle')), { once: true });
    $('#product-dialog').close();
  });
  $('#checkout-close').addEventListener('click', () => $('#checkout-dialog').close());
  $('#checkout-dialog').addEventListener('close', () => {
    state.paymentCodeVisible = false;
    renderCheckout();
    checkoutOrigin?.focus({ preventScroll: true });
  });
  $('#bag-explore').addEventListener('click', () => {
    $('#checkout-dialog').close();
    $('#market').scrollIntoView();
  });
  $('#dialog-add-bag').addEventListener('click', () => addBagItem(state.currentProduct.id));
  $('#show-payment-code').addEventListener('click', () => {
    if (!bagSummary().priced || !paymentDetails().ready) return;
    state.paymentCodeVisible = true;
    renderCheckout();
    $('#payment-code-panel').scrollIntoView({ block: 'nearest' });
  });
  $('#payment-code-image').addEventListener('load', () => {
    $('#payment-code-image').hidden = false;
    $('#payment-code-error').hidden = true;
    $('#payment-code-download').hidden = false;
  });
  $('#payment-code-image').addEventListener('error', () => {
    if (!$('#payment-code-image').hasAttribute('src')) return;
    $('#payment-code-image').hidden = true;
    $('#payment-code-download').hidden = true;
    $('#payment-code-error').hidden = false;
  });
  $('#poster-open').addEventListener('click', () => $('#poster-dialog').showModal());
  $('#poster-close').addEventListener('click', () => $('#poster-dialog').close());
  for (const id of ['poster-dialog', 'checkout-dialog']) {
    $(`#${id}`).addEventListener('click', event => {
      if (event.target !== event.currentTarget) return;
      const rect = event.currentTarget.getBoundingClientRect();
      if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) event.currentTarget.close();
    });
  }

  const sectionObserver = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (entry.isIntersecting) $$('.desktop-nav a').forEach(a => a.classList.toggle('active', a.hash === `#${entry.target.id}`));
    }
  }, { rootMargin: '-15% 0px -55% 0px', threshold: 0 });
  ['market', 'charity', 'visit'].forEach(id => sectionObserver.observe($(`#${id}`)));
  setLanguage(state.lang);
})();
