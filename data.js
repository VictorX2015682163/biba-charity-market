/* Event details and QR payments. Leave unconfirmed fields empty.
 * prices are integer CNY cents; null means not announced.
 * qrImage must be a real, organizer-provided local asset path. No secrets belong here.
 * QR payments require in-person verification; no automatic payment confirmation. */
window.MARKET_CONFIG = {
  "school": {
    "zh": "海嘉",
    "en": "BIBA"
  },
  "date": {
    "zh": "2026 年 12 月 1 日至 7 日",
    "en": "December 1–7, 2026"
  },
  "location": {
    "zh": "小高教学楼二层",
    "en": "2nd floor, Upper Elementary Teaching Building"
  },
  "payments": {
    "wechat": {
      "payee": {
        "zh": "CC(*纯)",
        "en": "CC(*纯)"
      },
      "qrImage": "assets/images/wechat-payment.png"
    },
    "alipay": {
      "payee": {
        "zh": "CC(*纯)",
        "en": "CC(*纯)"
      },
      "qrImage": "assets/images/alipay-payment.png"
    }
  }
};

window.MARKET_CATEGORIES = [
  {
    "id": "all",
    "icon": "grid",
    "zh": "全部好物",
    "en": "All gifts"
  },
  {
    "id": "lace",
    "icon": "spark",
    "zh": "棱边饰品",
    "en": "Tatted Jewelry"
  },
  {
    "id": "beads",
    "icon": "beads",
    "zh": "串珠手链",
    "en": "Beaded bracelets"
  },
  {
    "id": "floral",
    "icon": "flower",
    "zh": "花叶小物",
    "en": "Floral accessories"
  },
  {
    "id": "woven",
    "icon": "basket",
    "zh": "编织好物",
    "en": "Woven gifts"
  }
];

/* Display names describe the supplied photos. */
window.MARKET_PRODUCTS = [
  {
    "id": "scarlet-star",
    "category": "lace",
    "images": [
      "203"
    ],
    "position": "50% 50%",
    "name": {
      "zh": "红白圣诞星",
      "en": "Scarlet Christmas Star"
    },
    "subtitle": {
      "zh": "Scarlet Christmas Star",
      "en": "Red beads and snowy tips"
    },
    "description": {
      "zh": "五瓣红色珠纹围出一颗星，白色棱珠落在花心和五个尖角。",
      "en": "Rows of red beads form a five-pointed star, with white beads around the center and at each tip."
    },
    "keywords": "red white star scarlet christmas festive holiday 五角星 星星 圣诞 红 白 串珠 饰物",
    "priceCents": 10000
  },
  {
    "id": "christmas-basket",
    "category": "woven",
    "images": [
      "186"
    ],
    "position": "50% 43%",
    "name": {
      "zh": "圣诞红绿编织篮",
      "en": "The Christmas Basket"
    },
    "subtitle": {
      "zh": "A basket full of Christmas",
      "en": "Red & green woven details"
    },
    "tag": {
      "zh": "圣诞配色",
      "en": "Festive colors"
    },
    "description": {
      "zh": "热烈的红色，搭配一圈松绿色编织纹样。把圣诞的两种经典色彩编在一起，也把节日的好心情装进这一只小篮子。",
      "en": "Bright red meets a band of forest-green weaving. Two classic Christmas colors come together in a cheerful basket, ready for a little festive inspiration."
    },
    "keywords": "basket red green christmas 圣诞 红 绿 篮子 编织 收纳",
    "priceCents": 10000
  },
  {
    "id": "turquoise-rosette",
    "category": "lace",
    "images": [
      "202"
    ],
    "position": "50% 50%",
    "name": {
      "zh": "青碧花窗饰",
      "en": "Turquoise Rosette"
    },
    "subtitle": {
      "zh": "Turquoise Rosette",
      "en": "Aqua beads and silver-colored loops"
    },
    "description": {
      "zh": "银色线圈勾出花窗的轮廓，青绿色小珠围着中央的水滴形亮饰。",
      "en": "Aqua beads tip each silver-colored loop around a faceted, teardrop-shaped center."
    },
    "keywords": "aqua turquoise teal flower rosette teardrop 蓝 绿 青碧 花窗 水滴 花纹 小饰",
    "priceCents": 10000
  },
  {
    "id": "rose-lace",
    "category": "lace",
    "images": [
      "174",
      "178"
    ],
    "position": "50% 60%",
    "name": {
      "zh": "莓果花语棱边套组",
      "en": "Berry Blossom Tatted Set"
    },
    "subtitle": {
      "zh": "A little berry-colored wonder",
      "en": "Necklace & matching earrings"
    },
    "tag": {
      "zh": "节日心意",
      "en": "A festive touch"
    },
    "description": {
      "zh": "粉红色线条连成细密的花朵，红色小珠点缀其间。项链与耳饰呼应着同一种花纹，像把冬日里的一簇莓果悄悄收藏。",
      "en": "Delicate pink loops form a chain of flowers, dotted with tiny red beads. The necklace and earrings share a floral pattern, like a little cluster of winter berries."
    },
    "keywords": "pink red necklace earrings tatting tatted set 粉 红 项链 耳环 耳饰 棱边 套组 莓果",
    "priceCents": 10000
  },
  {
    "id": "snow-crystal",
    "category": "lace",
    "images": [
      "207"
    ],
    "position": "50% 50%",
    "name": {
      "zh": "六角雪花饰",
      "en": "Snow Crystal Motif"
    },
    "subtitle": {
      "zh": "Snow Crystal Motif",
      "en": "Six white branches with beaded tips"
    },
    "description": {
      "zh": "六瓣花心伸出雪花的枝杈，每一端都点着透亮的小珠。",
      "en": "Six branches extend from a flower-shaped center, each finished with little translucent beads."
    },
    "keywords": "snowflake crystal white star snow christmas 六角 白 雪 雪花 冬 圣诞 小饰",
    "priceCents": 10000
  },
  {
    "id": "rainbow-beads",
    "category": "beads",
    "images": [
      "187"
    ],
    "position": "50% 61%",
    "name": {
      "zh": "缤纷拾光手链",
      "en": "Rainbow Moments Bracelet"
    },
    "subtitle": {
      "zh": "A little color, a lot of joy",
      "en": "A little color, a lot of joy"
    },
    "tag": {
      "zh": "缤纷色彩",
      "en": "Colorful moments"
    },
    "description": {
      "zh": "橙、绿、蓝、紫，不同色彩的圆润珠子相遇，间隔着金色小细节。把一串亮丽的颜色戴在手腕上，也把快乐带进日常。",
      "en": "Orange, green, blue and purple beads meet golden accents. A bright mix of colors to bring a little everyday joy to your wrist."
    },
    "keywords": "rainbow colorful bracelet beads 彩色 多彩 手链 串珠 手串",
    "priceCents": 10000
  },
  {
    "id": "ivory-medallion",
    "category": "lace",
    "images": [
      "195-ivory"
    ],
    "position": "50% 50%",
    "name": {
      "zh": "暖金花章项链",
      "en": "Ivory Medallion Necklace"
    },
    "subtitle": {
      "zh": "Ivory Medallion Necklace",
      "en": "Ivory, gold and scalloped edges"
    },
    "description": {
      "zh": "浅色圆章沿着颈线展开，边缘有一圈深色小珠，暖金色的椭圆亮饰点在花心。",
      "en": "Dark beads trace ivory medallions along the neckline, with warm golden highlights in the flowers."
    },
    "keywords": "ivory cream gold medallion necklace 框 金 暖金 米白 圆章 项链",
    "priceCents": 10000
  },
  {
    "id": "flower-accessories",
    "category": "floral",
    "images": [
      "181"
    ],
    "position": "60% 48%",
    "name": {
      "zh": "花间拾趣小花饰",
      "en": "Little Garden Blooms"
    },
    "subtitle": {
      "zh": "A tiny garden to take with you",
      "en": "A tiny garden to take with you"
    },
    "tag": {
      "zh": "花样心意",
      "en": "Floral little joys"
    },
    "description": {
      "zh": "层叠的花瓣、舒展的叶片，还有点点珠光。照片里每一朵小花都有自己的配色，像一座可以随身带走的迷你花园。",
      "en": "Layered petals, delicate leaves and little pearly accents. Each flower in the collection has its own palette, like a tiny garden you can take with you."
    },
    "keywords": "flowers floral accessory hair brooch 花 花饰 发饰 胸针 叶片",
    "priceCents": 10000
  },
  {
    "id": "pearl-sprig",
    "category": "lace",
    "images": [
      "205"
    ],
    "position": "50% 50%",
    "name": {
      "zh": "雪枝珠光项链",
      "en": "Snowdrop Necklace"
    },
    "subtitle": {
      "zh": "Snowdrop Necklace",
      "en": "White openwork and pearl-like beads"
    },
    "description": {
      "zh": "白线绕成一串相连的枝叶，圆润的珠饰沿着领口排开。",
      "en": "White thread forms a row of leafy sprigs, with round, pearl-like beads spaced along the neckline."
    },
    "keywords": "snowdrop white necklace pearl bridal 冬 雪 白色 珠光 项链 颈饰",
    "priceCents": 10000
  },
  {
    "id": "garnet-bloom",
    "category": "lace",
    "images": [
      "194"
    ],
    "position": "50% 50%",
    "name": {
      "zh": "绯红花冠项链",
      "en": "Crimson Garland Necklace"
    },
    "subtitle": {
      "zh": "Crimson Garland Necklace",
      "en": "Deep red accents and bronze-colored loops"
    },
    "description": {
      "zh": "古铜色与深色小珠围起一圈花纹，绯红的亮饰点在花纹中央。",
      "en": "Bronze-colored loops and dark beads form a garland of flowers with deep red centers."
    },
    "keywords": "crimson garnet red bronze necklace 花冠 酒红 深红 古铜 复古 项链",
    "priceCents": 10000
  },
  {
    "id": "ink-medallion",
    "category": "lace",
    "images": [
      "195-ink"
    ],
    "position": "50% 50%",
    "name": {
      "zh": "墨夜花章项链",
      "en": "Midnight Medallion Necklace"
    },
    "subtitle": {
      "zh": "Midnight Medallion Necklace",
      "en": "Black beads and an openwork border"
    },
    "description": {
      "zh": "深墨色的小珠密密围成花章，下缘以镂空的环形花纹收边。",
      "en": "Closely spaced black beads form dark medallions above an openwork border."
    },
    "keywords": "black ink dark midnight medallion necklace 黑 墨色 花章 项链",
    "priceCents": 10000
  },
  {
    "id": "frost-medallion",
    "category": "lace",
    "images": [
      "195-ice"
    ],
    "position": "50% 50%",
    "name": {
      "zh": "冰蓝花章项链",
      "en": "Ice Blue Medallion Necklace"
    },
    "subtitle": {
      "zh": "Ice Blue Medallion Necklace",
      "en": "Pale blue beads and lilac accents"
    },
    "description": {
      "zh": "冰蓝色的细珠连成一排花章，圆心里的淡紫色点缀映出柔光。",
      "en": "Pale blue beads circle softly lilac centers in a row of scalloped medallions."
    },
    "keywords": "ice blue lilac pale silver medallion necklace 冰蓝 银蓝 淡紫 花章 项链",
    "priceCents": 10000
  },
  {
    "id": "dark-scallop",
    "category": "lace",
    "images": [
      "196"
    ],
    "position": "50% 50%",
    "name": {
      "zh": "墨金环纹颈饰",
      "en": "Black and Gold Collar"
    },
    "subtitle": {
      "zh": "Black and Gold Collar",
      "en": "Layered black loops with a gold-colored band"
    },
    "description": {
      "zh": "内圈的金色细节与外圈的深色环纹叠在一起，沿着领口围成扇形花边。",
      "en": "A narrow band of gold-colored accents sits inside rows of dark loops that scallop the neckline."
    },
    "keywords": "dark black gold collar necklace 黑 金 墨色 双层 环纹 颈饰 项链",
    "priceCents": 10000
  },
  {
    "id": "silver-wreath",
    "category": "lace",
    "images": [
      "204"
    ],
    "position": "50% 50%",
    "name": {
      "zh": "银白花环饰",
      "en": "Silver Wreath Motif"
    },
    "subtitle": {
      "zh": "Silver Wreath Motif",
      "en": "Silver-colored thread and a black scalloped border"
    },
    "description": {
      "zh": "银白色线结首尾相连绕成花环，纤细的黑色花边勾出内外两道轮廓。",
      "en": "Silver-colored knots form an open wreath, edged inside and out with fine black scallops."
    },
    "keywords": "silver white black wreath circle hoop motif 银 白 黑 环形 圆环 花环 饰物",
    "priceCents": 10000
  },
  {
    "id": "copper-vine",
    "category": "lace",
    "images": [
      "208"
    ],
    "position": "50% 50%",
    "name": {
      "zh": "棕金藤纹链饰",
      "en": "Bronze Vine Chain"
    },
    "subtitle": {
      "zh": "Bronze Vine Chain",
      "en": "Scrolls of brown thread and gold-colored beads"
    },
    "description": {
      "zh": "棕色线圈沿着链身交错相扣，点点金色小珠缀在藤纹两边。",
      "en": "Interlocking brown loops run along a slender chain, edged with clusters of gold-colored beads."
    },
    "keywords": "bronze gold vine chain clasp brown 金 棕 古铜 藤纹 链饰",
    "priceCents": 10000
  },
  {
    "id": "silver-lace",
    "category": "lace",
    "images": [
      "175"
    ],
    "position": "50% 58%",
    "name": {
      "zh": "冬日银光棱边套组",
      "en": "Winter Shimmer Tatted Set"
    },
    "subtitle": {
      "zh": "A quiet winter shimmer",
      "en": "Necklace & matching earrings"
    },
    "description": {
      "zh": "浅银色的花形线条与细小珠饰交织，项链和耳饰呈现轻盈的层次。柔和的颜色，像冬日落在窗边的一束光。",
      "en": "Pale silver-colored floral loops intertwine with tiny beads in a matching necklace and earring set. Soft tones echo a quiet beam of winter light."
    },
    "keywords": "silver white necklace earrings set tatting tatted 银 白 项链 耳环 棱边",
    "priceCents": 10000
  },
  {
    "id": "pastel-beads",
    "category": "beads",
    "images": [
      "184"
    ],
    "position": "50% 46%",
    "name": {
      "zh": "薄荷晴光手链",
      "en": "Mint & Blush Bracelet"
    },
    "subtitle": {
      "zh": "Soft colors, sweet moments",
      "en": "Soft colors, sweet moments"
    },
    "description": {
      "zh": "浅粉、透明与薄荷绿色交错排列，柔和的颜色中藏着轻盈的光泽。适合喜欢清新色彩的你。",
      "en": "Blush, clear and mint-green beads alternate in a soft, light-catching palette. A gentle mix for someone who loves fresh colors."
    },
    "keywords": "mint green pink pastel bracelet 绿 粉 透明 手链 串珠",
    "priceCents": 10000
  },
  {
    "id": "gold-leaf",
    "category": "floral",
    "images": [
      "179"
    ],
    "position": "50% 42%",
    "name": {
      "zh": "金色叶影小饰",
      "en": "Golden Leaf Keepsake"
    },
    "subtitle": {
      "zh": "A leaf, a little golden glow",
      "en": "Leaf-shaped decorative accessory"
    },
    "description": {
      "zh": "叶片舒展成自然的轮廓，镂空线条里缀着暖金色小珠。轻巧的细节，让一枚小小叶饰也有了季节的诗意。",
      "en": "An openwork leaf shape holds warm golden-colored beads. Delicate details lend a little seasonal poetry to this small decorative piece."
    },
    "keywords": "gold leaf floral accessory brooch 金色 叶子 叶饰 胸针 小饰",
    "priceCents": 10000
  },
  {
    "id": "woodland-beads",
    "category": "beads",
    "images": [
      "185"
    ],
    "position": "50% 57%",
    "name": {
      "zh": "森野暖色手串",
      "en": "Woodland Tones Bracelet"
    },
    "subtitle": {
      "zh": "A small moment of calm",
      "en": "Earthy colors & fresh green accents"
    },
    "description": {
      "zh": "深浅棕色圆珠，搭配清新的绿色与一抹暖橙。沉静的色调与明亮的小细节相遇，带来像森林一样的自然气息。",
      "en": "Brown-toned round beads meet fresh green and a touch of warm orange. A calm palette with bright little accents, inspired by woodland colors."
    },
    "keywords": "brown green orange bracelet wood woodland 棕色 绿 木色 森林 手链 手串",
    "priceCents": 10000
  },
  {
    "id": "golden-lace",
    "category": "lace",
    "images": [
      "176"
    ],
    "position": "50% 58%",
    "name": {
      "zh": "鎏光花影棱边套组",
      "en": "Golden Hour Tatted Set"
    },
    "subtitle": {
      "zh": "A touch of golden-hour magic",
      "en": "Necklace & matching earrings"
    },
    "description": {
      "zh": "浅色棱边花纹的边缘缀着金色与深色珠饰，中央的暖色吊坠成为视觉焦点。项链与耳饰以层层花形纹样相互呼应。",
      "en": "Golden and darker beads trace the pale tatted loops, framing a warm-toned centerpiece. Layered floral patterns connect the necklace and matching earrings."
    },
    "keywords": "gold tatting tatted necklace earrings pendant 金色 项链 吊坠 耳环 棱边",
    "priceCents": 10000
  },
  {
    "id": "blush-lace",
    "category": "lace",
    "images": [
      "177",
      "177-2"
    ],
    "position": "50% 55%",
    "name": {
      "zh": "粉樱轻语饰品套组",
      "en": "Blush Petal Jewelry Set"
    },
    "subtitle": {
      "zh": "A soft little blush of pink",
      "en": "Necklace, earrings & ring"
    },
    "description": {
      "zh": "浅粉色的细致编结串起小小光点，花形耳饰、戒指与水滴形吊坠相互呼应。柔和又细腻的一组粉色心意。",
      "en": "Fine blush-colored loops connect tiny highlights. Floral earrings, a ring and a teardrop pendant come together in a soft, delicately detailed set."
    },
    "keywords": "pink ring necklace earrings pendant tatting tatted 粉 项链 耳环 戒指 套组 棱边",
    "priceCents": 10000
  },
  {
    "id": "snow-lace",
    "category": "lace",
    "images": [
      "182"
    ],
    "position": "50% 48%",
    "name": {
      "zh": "初雪花边颈饰",
      "en": "First Snow Tatted Collar"
    },
    "subtitle": {
      "zh": "Like the first snow of winter",
      "en": "An intricate white tatted collar"
    },
    "description": {
      "zh": "白色花纹层层展开，圆润珠饰垂坠其间。立体的颈饰轮廓与细密的镂空纹样，让人想起冬日初雪。",
      "en": "White floral patterns unfold in layers with rounded bead accents. An intricate openwork collar with a silhouette reminiscent of the first winter snow."
    },
    "keywords": "white tatting tatted collar choker necklace pearl 白色 雪 花边 颈饰 项圈 项链 珍珠",
    "priceCents": 10000
  },
  {
    "id": "warm-beads",
    "category": "beads",
    "images": [
      "183"
    ],
    "position": "50% 51%",
    "name": {
      "zh": "暖冬叠戴手链",
      "en": "Warm Winter Bracelet Edit"
    },
    "subtitle": {
      "zh": "Warm colors for winter days",
      "en": "A selection of layered bracelets"
    },
    "description": {
      "zh": "暖红、浅粉与透亮色彩在手腕上相遇。照片展示了几款手链叠戴的效果，可以从中寻找属于自己的配色灵感。",
      "en": "Warm red, soft pink and clear tones come together on the wrist. The photograph shows several bracelets styled together, offering inspiration for your own color pairing."
    },
    "keywords": "red pink bracelet layered beads 红 粉 手链 叠戴 串珠 手串",
    "priceCents": 10000
  },
  {
    "id": "peach-beads",
    "category": "beads",
    "images": [
      "188"
    ],
    "position": "50% 53%",
    "name": {
      "zh": "蜜桃柔光珠串",
      "en": "Peach Glow Beads"
    },
    "subtitle": {
      "zh": "A little handful of sunshine",
      "en": "Soft peach-toned beaded pieces"
    },
    "description": {
      "zh": "柔和的蜜桃色圆珠，在阳光下透出温暖的光泽。圆润饱满的珠形，让这份小小手作多了一点甜意。",
      "en": "Soft peach-colored round beads catch a warm glow in the sunlight. Their rounded shapes give these little beaded pieces a gentle sweetness."
    },
    "keywords": "peach pink bead bracelet 蜜桃 粉 珠串 手链 串珠",
    "priceCents": 10000
  }
];

window.MARKET_TRANSLATIONS = {
  "zh": {
    "skip": "跳到好物集市",
    "announcement": "2026 海嘉 PTA 圣诞义卖 · 所有义卖收入全部捐出",
    "brand": "海嘉圣诞义卖",
    "navigation": "主导航",
    "navMarket": "逛逛义卖",
    "navStory": "手作故事",
    "navVisit": "到场指南",
    "wishlist": "心愿单",
    "heroEyebrow": "2026 · 海嘉 PTA 圣诞义卖",
    "heroLine1": "把心意，",
    "heroLine2": "变成善意。",
    "heroScript": "Little gifts. A world of good.",
    "heroDescription": "用一份手作，传递一份温暖。<br>来海嘉圣诞义卖，让每一次选购都有爱的意义。",
    "explore": "挑好物，献爱心",
    "visitLink": "查看集市指南",
    "heroNote": "义卖收入 100% 捐出",
    "heroPhotoLabel": "一篮子，圣诞心意。",
    "polaroidLeft": "小小手作，满满心意",
    "polaroidRight": "把快乐串起来",
    "heroImage": "红绿相间的手工编织篮",
    "roseImage": "粉红棱边项链与耳饰",
    "beadImage": "彩色串珠手链",
    "value1": "手作的温度",
    "value1Sub": "Made with care",
    "value2": "义卖收入全部捐出",
    "value2Sub": "100% for charity",
    "value3": "海嘉 PTA 圣诞义卖",
    "value3Sub": "BIBA PTA · 2026",
    "marketEyebrow": "GIFTS THAT GIVE BACK",
    "marketTitle": "来挑一份，心动好物<span class=\"heading-star\" aria-hidden=\"true\">✳</span>",
    "marketIntro": "每款 100 元，义卖收入将全部捐出。",
    "collectionNote": "每一份心意 · 都是一份善意",
    "categories": "好物分类",
    "searchPlaceholder": "寻找心仪好物…",
    "searchLabel": "搜索好物",
    "clearSearch": "清除搜索",
    "resetFilters": "查看全部好物 ↗",
    "resultsHint": "遇见喜欢的，点亮小爱心",
    "keepExploring": "继续逛逛集市",
    "loadMore": "发现更多好物",
    "collectionEnd": "愿你找到那份刚刚好的心意。",
    "storyEyebrow": "SMALL THINGS, BIG HEART",
    "storyTitle": "礼物的美好，<br>从一双手开始。",
    "storyBody": "一颗珠子，一缕丝线，一点奇思妙想。<br>从层层编结的棱边花纹，到色彩斑斓的串珠，<br>那些被认真对待的小细节，让礼物有了温度。",
    "storyClosing": "这个圣诞，让手作的温暖，变成支持他人的力量。",
    "storyLink": "发现手作好物",
    "storyImage": "双手正在串起暖色珠子",
    "visitEyebrow": "MEET YOU AT THE MARKET",
    "visitTitle": "圣诞义卖，见！",
    "visitIntro": "带上好奇心，来收集冬日的小确幸。",
    "dateLabel": "活动时间",
    "dateNote": "每天 8:00–17:00",
    "locationLabel": "集市地点",
    "tipLabel": "逛集市小贴士",
    "tipTitle": "先收藏，再来相遇",
    "tipNote": "心愿单会保存在当前浏览器中",
    "visitNote": "义卖收入将全部捐出。具体款式、材质与供应情况请以现场信息为准。",
    "footerWish": "把礼物带回家，让善意走得更远。",
    "backTop": "回到顶部",
    "closeDetail": "关闭详情",
    "previousImage": "上一张",
    "nextImage": "下一张",
    "detailNote": "义卖收入将全部捐出。请在摊位确认款式和数量，再打开义卖袋扫码付款。",
    "detailCaption": "展示名称根据照片拟定，具体信息请现场确认。",
    "pending": "待公布",
    "addWish": "加入心愿单",
    "removeWish": "移出心愿单",
    "savedWish": "已收藏 · 点击取消",
    "addedToast": "已加入心愿单，留住这份小心动。",
    "removedToast": "已从心愿单移除。",
    "storageToast": "当前浏览器无法保存，收藏将在关闭页面后清除。",
    "viewDetails": "查看详情",
    "emptySearchTitle": "还没有找到这份心意",
    "emptySearchBody": "试试其他关键词，或查看全部好物。",
    "emptyWishTitle": "你的圣诞心愿单，等你写下第一份心意",
    "emptyWishBody": "点击好物右上角的小爱心，把喜欢的礼物收藏起来。",
    "title": "海嘉圣诞义卖 · 2026 BIBA PTA Santa Charity Shop",
    "metaDescription": "2026 海嘉 PTA 圣诞义卖：全部义卖收入都将捐出。发现手作好物，让每一份圣诞心意变成一份善意。",
    "navCharity": "关于义卖",
    "viewPoster": "查看义卖海报大图",
    "posterAlt": "2026 海嘉 PTA Santa Charity Shop 圣诞义卖市集活动海报",
    "posterCaption": "2026 海嘉 PTA · 圣诞义卖市集",
    "posterDialogLabel": "圣诞义卖活动海报",
    "closePoster": "关闭海报",
    "charityEyebrow": "2026 BIBA PTA · SANTA CHARITY SHOP",
    "charityTitle": "把一份喜欢，<br>变成一份善意。",
    "charityBody": "这不只是一份圣诞礼物，也是一份送向远方的温暖。挑选心仪的手作，让小小的心意，汇成更多善意。",
    "donationTitle": "义卖收入，全部捐出",
    "donationBody": "每一笔义卖收入，都将用于捐赠。",
    "charityLink": "挑一份礼物，献一份爱心",
    "viewBag": "查看义卖袋",
    "bag": "义卖袋",
    "bagLabel": "义卖袋与结算",
    "addBag": "加入义卖袋",
    "addedBag": "已加入义卖袋，感谢你的爱心。",
    "bagStorageError": "已加入义卖袋，但当前浏览器无法在关闭页面后保存。",
    "bagLimit": "每款最多选择 99 件，请与现场工作人员确认供应情况。",
    "charityPrice": "义卖价格",
    "pricePending": "价格待公布",
    "totalPending": "待公布",
    "checkoutEyebrow": "A LITTLE GIFT. A WORLD OF GOOD.",
    "checkoutTitle": "我的爱心义卖袋",
    "closeCheckout": "关闭结算",
    "checkoutCharity": "本次义卖收入将 100% 捐出，感谢你的爱心。",
    "bagEmptyTitle": "把喜欢的好物，装进爱心义卖袋",
    "bagEmptyBody": "选一份礼物，让圣诞的温暖传递得更远。",
    "bagItemsLabel": "已选好物",
    "selectedGifts": "已选好物",
    "bagNote": "义卖袋保存在当前浏览器中；加入好物不代表已经下单或预留库存。",
    "totalLabel": "义卖合计",
    "paymentTitle": "扫码支付",
    "paymentMethods": "支付方式",
    "wechat": "微信支付",
    "alipay": "支付宝",
    "paymentPending": "付款暂未开放",
    "paymentPendingBody": "商品价格与收款码公布后，即可在这里扫码付款。",
    "showPaymentCode": "查看收款码",
    "payeeLabel": "收款方",
    "payExactly": "应付金额",
    "paymentCodeAlt": "义卖收款二维码",
    "savePaymentCode": "保存收款码",
    "scanInstructions": "用对应的支付应用扫码，或保存图片后从相册识别。请核对收款方，并按上方应付金额足额付款。",
    "manualCheck": "领取前请出示付款凭证。摊位工作人员核对实际到账金额，确认足额后交付商品。",
    "paymentFootnote": "所有义卖收入都将捐出。谢谢你，让善意发生。",
    "paymentCodeError": "收款码暂时无法加载，请联系现场工作人员。",
    "unpricedStatus": "所选好物尚有价格待公布，暂时无法计算合计或付款。",
    "paymentNotReady": "该支付方式的收款信息尚未公布。",
    "paymentReady": "扫码后请手动输入上方合计。摊位工作人员确认足额到账后发放商品。",
    "removeItem": "移除",
    "increaseQuantity": "增加数量",
    "decreaseQuantity": "减少数量",
    "unitPrice": "单价"
  },
  "en": {
    "skip": "Skip to the collection",
    "announcement": "2026 BIBA PTA Christmas Charity Market · All sales revenue will be donated",
    "brand": "BIBA Christmas",
    "navigation": "Main navigation",
    "navMarket": "Charity gifts",
    "navStory": "Our handmade story",
    "navVisit": "Plan your visit",
    "wishlist": "Wishlist",
    "heroEyebrow": "2026 BIBA PTA · SANTA CHARITY SHOP",
    "heroLine1": "Little gifts.",
    "heroLine2": "A world of good.",
    "heroScript": "Give a gift. Share a little kindness.",
    "heroDescription": "A handmade gift. A little warmth to share.<br>Every purchase at our Christmas charity market gives back.",
    "explore": "Shop for a good cause",
    "visitLink": "Plan your visit",
    "heroNote": "100% of sales revenue will be donated",
    "heroPhotoLabel": "A basket full of joy.",
    "polaroidLeft": "Little things, lots of love",
    "polaroidRight": "String a little joy",
    "heroImage": "A red and green handwoven Christmas basket",
    "roseImage": "A pink openwork necklace and matching earrings",
    "beadImage": "A colorful beaded bracelet",
    "value1": "Made with care",
    "value1Sub": "The handmade touch",
    "value2": "100% for charity",
    "value2Sub": "Every purchase gives back",
    "value3": "BIBA PTA Christmas",
    "value3Sub": "Together in 2026",
    "marketEyebrow": "GIFTS THAT GIVE BACK",
    "marketTitle": "Find your little festive joy<span class=\"heading-star\" aria-hidden=\"true\">✳</span>",
    "marketIntro": "Every gift is ¥100. All sales revenue will be donated.",
    "collectionNote": "Little gifts · Meaningful kindness",
    "categories": "Gift categories",
    "searchPlaceholder": "Find a little something…",
    "searchLabel": "Search gifts",
    "clearSearch": "Clear search",
    "resetFilters": "See all gifts ↗",
    "resultsHint": "Love it? Tap the little heart",
    "keepExploring": "Keep exploring",
    "loadMore": "Discover more gifts",
    "collectionEnd": "Here’s to finding that just-right little gift.",
    "storyEyebrow": "SMALL THINGS, BIG HEART",
    "storyTitle": "Every lovely gift<br>starts with a pair of hands.",
    "storyBody": "A bead, a thread, a little imagination.<br>From loops of knotted thread to colorful strings of beads,<br>it’s the thoughtful details that make a gift feel warm.",
    "storyClosing": "This Christmas, let the warmth of handmade gifts help others.",
    "storyLink": "Explore handmade gifts",
    "storyImage": "Hands carefully stringing warm-colored beads",
    "visitEyebrow": "MEET YOU AT THE MARKET",
    "visitTitle": "See you at the charity market!",
    "visitIntro": "Bring your curiosity. Find your little moments of winter joy.",
    "dateLabel": "WHEN",
    "dateNote": "Daily, 8:00 AM–5:00 PM",
    "locationLabel": "WHERE",
    "tipLabel": "A LITTLE TIP",
    "tipTitle": "Save it now. Find it there.",
    "tipNote": "Your wishlist is saved in this browser",
    "visitNote": "All sales revenue will be donated. Please confirm designs, materials and availability at the market.",
    "footerWish": "Take a gift home. Let kindness travel further.",
    "backTop": "Back to top",
    "closeDetail": "Close details",
    "previousImage": "Previous photo",
    "nextImage": "Next photo",
    "detailNote": "All sales revenue will be donated. Confirm your selection at the stall, then open your charity bag to pay by QR code.",
    "detailCaption": "Display names are inspired by the photos. Please confirm details at the market.",
    "pending": "To be announced",
    "addWish": "Add to wishlist",
    "removeWish": "Remove from wishlist",
    "savedWish": "Saved · Remove from wishlist",
    "addedToast": "Saved to your wishlist. A little joy to remember.",
    "removedToast": "Removed from your wishlist.",
    "storageToast": "This browser cannot save your wishlist after you close the page.",
    "viewDetails": "View details",
    "emptySearchTitle": "That little gift is still waiting to be found",
    "emptySearchBody": "Try another word, or explore the full collection.",
    "emptyWishTitle": "Your Christmas wishlist starts with a little love",
    "emptyWishBody": "Tap the heart on a gift to save something special for later.",
    "title": "2026 BIBA PTA Santa Charity Shop · Christmas Charity Market",
    "metaDescription": "2026 BIBA PTA Santa Charity Shop. All sales revenue will be donated. Discover handmade Christmas gifts and share a little kindness.",
    "navCharity": "Our cause",
    "viewPoster": "View the charity market poster",
    "posterAlt": "2026 BIBA PTA Santa Charity Shop Christmas charity market poster",
    "posterCaption": "2026 BIBA PTA · Santa Charity Shop",
    "posterDialogLabel": "Christmas charity market poster",
    "closePoster": "Close poster",
    "charityEyebrow": "2026 BIBA PTA · SANTA CHARITY SHOP",
    "charityTitle": "A gift you love.<br>A little good to share.",
    "charityBody": "More than a Christmas gift: a little warmth for someone else. Choose a handmade piece and turn a small gesture into shared kindness.",
    "donationTitle": "All sales revenue will be donated",
    "donationBody": "Every payment for a charity sale will go toward donations.",
    "charityLink": "Find a gift. Share some kindness.",
    "viewBag": "View charity bag",
    "bag": "Charity bag",
    "bagLabel": "Charity bag and checkout",
    "addBag": "Add to charity bag",
    "addedBag": "Added to your charity bag. Thank you for your kindness.",
    "bagStorageError": "Added to your bag, but this browser cannot save it after you close the page.",
    "bagLimit": "You can select up to 99 of each gift. Please confirm availability with the event team.",
    "charityPrice": "CHARITY PRICE",
    "pricePending": "Price to be announced",
    "totalPending": "To be announced",
    "checkoutEyebrow": "A LITTLE GIFT. A WORLD OF GOOD.",
    "checkoutTitle": "Your little bag of kindness",
    "closeCheckout": "Close checkout",
    "checkoutCharity": "100% of sales revenue will be donated. Thank you for giving.",
    "bagEmptyTitle": "Fill your charity bag with a little love",
    "bagEmptyBody": "Choose a gift and help the warmth of Christmas reach further.",
    "bagItemsLabel": "Selected gifts",
    "selectedGifts": "Your selected gifts",
    "bagNote": "Your bag is saved in this browser. Adding a gift does not place an order or reserve stock.",
    "totalLabel": "Total",
    "paymentTitle": "Scan to pay",
    "paymentMethods": "Payment methods",
    "wechat": "WeChat Pay",
    "alipay": "Alipay",
    "paymentPending": "Payments are not open yet",
    "paymentPendingBody": "Scan-to-pay will be available once prices and payment codes are published.",
    "showPaymentCode": "View payment QR code",
    "payeeLabel": "Payee",
    "payExactly": "Amount due",
    "paymentCodeAlt": "Charity sale payment QR code",
    "savePaymentCode": "Save payment code",
    "scanInstructions": "Scan in the matching app, or save the code and scan it from your photos. Check the payee and pay the full amount shown above.",
    "manualCheck": "Show your receipt at the stall. Staff will verify that the full amount was received before handing over your gifts.",
    "paymentFootnote": "All sales revenue will be donated. Thank you for making a difference.",
    "paymentCodeError": "The payment code could not be loaded. Please contact the event team.",
    "unpricedStatus": "Some selected gifts are awaiting prices. The total and payment are not available yet.",
    "paymentNotReady": "Payment details for this method have not been announced yet.",
    "paymentReady": "Enter the total above in your payment app. Staff will confirm receipt of the full amount before you collect your gifts.",
    "removeItem": "Remove",
    "increaseQuantity": "Increase quantity",
    "decreaseQuantity": "Decrease quantity",
    "unitPrice": "Unit price"
  }
};
