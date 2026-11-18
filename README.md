<p align="right"><a href="README.en.md">English</a></p>

<p align="center">
  <img src="./assets/readme/hero.svg" width="100%" alt="乐队唱片封面 — 26 张 AI 意境风专辑封面：右侧是一张黑胶唱片从黑色封套里滑出一半">
</p>

<p align="center">
  <a href="https://holynova.github.io/band-album-covers/">▶ 在线看封面</a>
  ·
  <a href="https://github.com/holynova/band-album-covers">GitHub 仓库</a>
</p>

乐队唱片封面是 26 张 AI 意境风专辑封面的展示站：从《乐队的夏天》三季里挑出名字最有画面感的乐队，再加上 6 支大牌乐队，一队一张，大师摄影式的意境封面——含蓄，不直白。每张封面都有一句画面描述，点开看大图，还能下载原图。

## 截图

<p align="center">
  <img src="./assets/readme/screenshot-grid.png" width="640" alt="封面墙：全部 26 张封面按季筛选，首排是刺猬、猴子军团、皇后皮箱、鹿先森">
  <br>
  <img src="./assets/readme/screenshot-lightbox.png" width="640" alt="大图浏览：刺猬封面全屏展示，空舞台一束追光，配一句画面描述与 1/26 计数">
</p>

## 封面清单

| 分组 | 数量 | 乐队 |
| --- | --- | --- |
| 第一季 | 12 | 刺猬、猴子军团、皇后皮箱、鹿先森、海龟先生、反光镜、盘尼西林、面孔、葡萄不愤怒、熊猫眼、宇宙人、MLK 麋鹿王国 |
| 第二季 | 5 | 霓虹花园、白皮书、岛屿心情、旋转保龄、木马 |
| 第三季 | 3 | 橘子海、八仙饭店、柏林护士 |
| 大牌乐队 | 6 | 黑豹、唐朝、新裤子、二手玫瑰、五条人、达达乐队 |

每张封面的画面都紧扣队名做意境，不直给：刺猬是"空舞台，一束追光，刺猬的剪影和长长的影子"；新裤子是"天台晾衣绳，风吹起一条牛仔裤的裤腿"；五条人是"退潮滩涂，五条人字形水痕向海延伸"。

## 功能

- **按季筛选**：全部 / 第一季 / 第二季 / 第三季 / 大牌乐队，按钮上直接显示各组数量。
- **大图浏览**：点任意封面全屏查看，左右切换、键盘方向键也可翻页。
- **下载原图**：大图界面可下载当前封面的 WebP 原图。
- **一句描述**：每张封面配一句画面描述，写在 `data.js` 里，与图片同名对应。

## 本地运行

纯静态站，直接打开 `index.html` 即可；或起一个静态服务器：

```bash
python3 -m http.server 8000
# 打开 http://localhost:8000
```

新增封面：在 `data.js` 的 `COVERS` 数组追加一条，并在 `covers/` 目录放入同名 `.webp` 文件。

## 技术

- 零构建、零依赖：单个 `index.html` + `data.js` + `covers/`，无外部请求。
- 26 张封面均为 WebP 格式，共约 5.8 MB。

```
index.html          入口：封面墙 / 季筛选 / 大图浏览 / 下载
data.js             26 条封面数据：id / 队名 / 季 / 一句描述
covers/             26 张 WebP 封面原图（与 data.js 的 id 同名）
```
