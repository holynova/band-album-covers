// 乐队唱片封面计划 · 数据
// 新增封面时：在 COVERS 数组追加一条，并在 covers/ 目录放入同名 webp 文件
const COVERS = [
  { id: "ciwei",          name: "刺猬",       season: "第一季", desc: "空舞台，一束追光，刺猬的剪影和长长的影子。" },
  { id: "houzijuntuan",   name: "猴子军团",   season: "第一季", desc: "浓雾弥漫的山林，猴群的剪影若隐若现。" },
  { id: "huanghoupixiang",name: "皇后皮箱",   season: "第一季", desc: "荒原中央，一只贴满旅行标签的旧皮箱。" },
  { id: "luxiansen",       name: "鹿先森",     season: "第一季", desc: "晨雾中，脖子上随意搭着一条领带的鹿。" },
  { id: "haiguixiansheng",name: "海龟先生",   season: "第一季", desc: "平静海面，背上托着绅士礼帽的海龟。" },
  { id: "fanguangjing",   name: "反光镜",     season: "第一季", desc: "车内后视镜里，一轮燃烧的落日。" },
  { id: "pannixilin",     name: "盘尼西林",   season: "第一季", desc: "纯黑背景上，药片摆成一条心电图波形。" },
  { id: "miankong",       name: "面孔",       season: "第一季", desc: "空房间的白墙上，一道人侧脸的剪影。" },
  { id: "putaobufennu",   name: "葡萄不愤怒", season: "第一季", desc: "晨雾果园，挂着水珠的葡萄，宁静安详。" },
  { id: "xiongmaoyan",    name: "熊猫眼",     season: "第一季", desc: "纯黑背景中，凝视镜头的熊猫双眼。" },
  { id: "yuzhouren",      name: "宇宙人",     season: "第一季", desc: "深夜荒漠，岩石上映着银河的宇航头盔。" },
  { id: "miluwangguo",    name: "MLK麋鹿王国", season: "第一季", desc: "风雪中，鹿角戴着小王冠的鹿王领着鹿群。" },
  { id: "nihonghuayuan",  name: "霓虹花园",   season: "第二季", desc: "雨夜，远处霓虹灯下的几株植物。" },
  { id: "juzihai",        name: "橘子海 OrangeOcean", season: "第三季", desc: "橙金色的海面，一颗孤独的橙子。" },
  { id: "baxianfandian",  name: "八仙饭店",   season: "第三季", desc: "打烊后的老馆子，八副碗筷，宴散人空。" },
  { id: "baipishu",       name: "白皮书",     season: "第二季", desc: "无垠雪原，一张白纸的一角被风掀起。" },
  { id: "daoyuxinqing",   name: "岛屿心情",   season: "第二季", desc: "海雾中，孤岛的剪影，一叶小船远去。" },
  { id: "xuanzhuanbaoling", name: "旋转保龄", season: "第二季", desc: "空荡球道，一颗旋转的保龄球拖出长长光轨。" },
  { id: "muma",           name: "木马",       season: "第二季", desc: "旧阁楼里，一匹木马的侧影，尘埃在光柱中浮动。" },
  { id: "bolinhushi",    name: "柏林护士",   season: "第三季", desc: "老医院长廊尽头，白衣背影走向光。" },
  { id: "heibao",        name: "黑豹",       season: "大牌乐队", desc: "夜色岩石上，黑豹的剪影，双眼映着微光。" },
  { id: "tangchao",      name: "唐朝",       season: "大牌乐队", desc: "大漠黄昏，城墙剪影下，一柄吉他的长影。" },
  { id: "xinkuzi",       name: "新裤子",     season: "大牌乐队", desc: "天台晾衣绳，风吹起一条牛仔裤的裤腿。" },
  { id: "ershoumeigui",  name: "二手玫瑰",   season: "大牌乐队", desc: "雪夜旧货摊，锈铁桶里的一朵红玫瑰。" },
  { id: "wutiaoren",     name: "五条人",     season: "大牌乐队", desc: "退潮滩涂，五条人字形水痕向海延伸。" },
  { id: "dadayuedui",    name: "达达乐队",   season: "大牌乐队", desc: "美术馆白墙前，几片彩色几何纸片飘落。" },
];

const SEASONS = ["全部", "第一季", "第二季", "第三季", "大牌乐队"];
