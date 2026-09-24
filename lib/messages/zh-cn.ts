const messages: Record<string, string> = {
  // Navigation
  'nav.language': '语言',

  // Index / Landing Page
  'index.subtitle': 'Wyzie 是一套工具集，用于抓取字幕及相关功能。',
  'index.cta.start': '快速开始',
  'index.cta.store': '立即查看',

  'index.card.keys.title': '免费 API 密钥',
  'index.card.keys.body':
    '在 store.wyzie.io/redeem 通过快速邮箱验证即可获取免费 API 密钥（支持 Gmail、Outlook、Yahoo、iCloud、Proton 等主流邮箱服务商）。每天 1,000 次请求，完全免费。如需更高用量，也提供付费方案。',

  'index.card.ai.title': 'AI 翻译',
  'index.card.ai.body':
    '按需将任意字幕翻译成 80 余种语言。SRT 会随各批次完成按顺序流式返回，因此最前面的几行很快就能到达。仅限 Pro 密钥使用。',

  'index.card.reliable.title': '稳定可靠',
  'index.card.reliable.body':
    '我们以持续的正常运行时间、（几乎）每日更新以及快速缓存为傲。',

  'index.card.simple.title': '极致简洁',
  'index.card.simple.body':
    '易于接入，易于使用。Wyzie 的设计理念就是尽可能简单。',

  // Donate Page
  'donate.title': '请捐助我们',
  'donate.body':
    '你好，用户。Wyzie 现在在很大程度上依赖捐款（而我几乎收不到捐款），我今年 16 岁，还在做兼职，有时运行公共 API 的账单每月超过 100 美元。如果没有外部支持，我真的无法继续下去。非常抱歉，但这个项目已经发展到超出我个人能力所能支撑的范围了。',
  'donate.cta': '支持 Wyzie',

  // Subs Intro Page
  'subs.intro.title': 'Wyzie Subs 简介',
  'subs.intro.p1':
    'Wyzie Subs 是一个提供免费版的字幕抓取 API。向 API 发起请求有两种方式：使用我们的 NPM 包，或直接请求 Wyzie API。我推荐使用我们的包，但有些人可能觉得类型定义比较繁琐。在使用 API 之前，请先做出这个选择。',
  'subs.intro.note.ai':
    'AI 翻译已对 Pro 密钥上线。任意标题，80 余种目标语言，随各批次完成按字幕顺序流式返回。',
  'subs.intro.important.apikey':
    '所有请求都需要 API 密钥。请在 [store.wyzie.io/redeem](https://store.wyzie.io/redeem) 获取免费密钥（邮箱验证，每天 1,000 次请求）。如需更高用量，可选择 [Pro 方案及补充包](https://store.wyzie.io)。详情请参阅 API 密钥页面。',
  'subs.intro.note.npm':
    '如果你熟悉 TypeScript 或 JavaScript，我们强烈推荐使用 NPM 包',
  'subs.intro.btn.npm': 'NPM 包',
  'subs.intro.btn.direct': '直接请求',

  'subs.intro.protect.h2': '保护你的 API 密钥',
  'subs.intro.protect.important':
    '**真实案例：**我们曾见过开发者将密钥直接粘贴到流媒体网站的前端 JavaScript 中。数小时内，第三方从 JS 包中抓取了该密钥，并一直使用直到每日限额或付费余额耗尽。以这种方式损失的配额不予退还，根据我们的服务条款，视为密钥所有者的责任。',
  'subs.intro.protect.p1':
    '你的 API 密钥应当保密，**绝对不能**出现在以下位置：',
  'subs.intro.protect.item1':
    '浏览器 JavaScript（任何通过 script 标签提供的内容）',
  'subs.intro.protect.item2':
    '移动应用程序二进制文件（Android/iOS，包括混淆后的版本）',
  'subs.intro.protect.item3': '浏览器扩展',
  'subs.intro.protect.item4': '分发给终端用户的 Electron / 桌面应用',
  'subs.intro.protect.item5': '公开的 Git 仓库、代码片段网站、粘贴站或截图',
  'subs.intro.protect.p2':
    '如果密钥到达了终端用户的机器，请将其视为公开信息。有两种安全使用方式：',
  'subs.intro.protect.opt1.h3': '方式一：使用 Wyzie Worker',
  'subs.intro.protect.opt1.p1':
    'Wyzie Worker 是一个轻量级 Cloudflare Worker 代理，可在服务端注入你的 API 密钥。将其部署到 Cloudflare Workers，并设置两个机密变量：`NITRO_API_TOKEN`（你的 Wyzie API 密钥）和 `NITRO_WORKER_KEY`（由你自行选定的机密值）。发往 Worker 的每个请求都必须携带 `Authorization: Bearer <NITRO_WORKER_KEY>`；缺少该请求头时 Worker 会返回 401，而如果未设置 `NITRO_WORKER_KEY`，Worker 会以 503 拒绝所有请求。Worker 密钥同样必须保留在服务端，因此请从你自己的后端调用 Worker，切勿在浏览器或应用代码中调用。Worker 会将每个请求转发到 sub.wyzie.io，并附带你的 API 密钥。',
  'subs.intro.protect.opt2.h3': '方式二：自建代理',
  'subs.intro.protect.opt2.p1':
    '如果你不想使用 Wyzie Worker，可以在任意框架中构建一个简单的服务端代理。原理相同：你的后端接收客户端请求，附加 API 密钥后转发到 sub.wyzie.io。',

  // Subs Sources Page
  'subs.sources.title': 'Wyzie Subs 字幕来源',
  'subs.sources.p1':
    'Wyzie Subs 聚合了来自多个提供商的字幕。来源的可用性可能因提供商状态或某个来源下线而有所不同。我一直在寻找新的来源，欢迎联系我进行推荐。',

  'subs.sources.using.h2': '使用来源',
  'subs.sources.using.bullet1': '使用 source=all 可同时查询所有已启用的来源',
  'subs.sources.using.bullet2': '未指定时默认来源为 charlie',
  'subs.sources.using.bullet3': '可以逗号分隔列表的形式指定多个来源',

  'subs.sources.api.h2': 'API 端点',
  'subs.sources.api.p1':
    '你可以通过编程方式获取当前已启用的来源列表及其方案等级：',
  'subs.sources.api.free': '所有密钥（包括免费密钥）均可查询的来源。',
  'subs.sources.api.paid': '需要 Pro 密钥才能查询的来源。',
  'subs.sources.api.allFree':
    '为 true 时，所有已启用来源对所有密钥开放，paid 字段为空。',

  'subs.sources.scope.h3': '按密钥筛选',
  'subs.sources.scope.p1': '传入你的 API 密钥，获取该密钥实际可用的来源：',
  'subs.sources.scope.p2': '这会添加特定于密钥的字段，且不消耗你的配额：',
  'subs.sources.scope.available': '该密钥当前可查询的来源。',
  'subs.sources.scope.restricted':
    '该密钥无法查询的已启用来源（升级至 Pro 即可解锁）。',
  'subs.sources.scope.keyType': 'free 或 paid。',
  'subs.sources.scope.keyValid':
    '当密钥格式错误或未找到时为 false，无法验证时为 null（此时 available 和 restricted 字段被省略）。',

  'subs.sources.details.h2': '来源详情',

  'subs.sources.opensubtitles.desc':
    '全球最大的字幕数据库，支持多种语言的电影和电视剧，使用官方 OpenSubtitles REST API。',
  'subs.sources.opensubtitles.content': '电影与电视剧',
  'subs.sources.opensubtitles.languages': '广泛的多语言支持',
  'subs.sources.opensubtitles.formats': 'SRT、ASS、SSA、VTT、SUB 等格式',

  'subs.sources.subdl.desc':
    '一个社区驱动的字幕网站，提供丰富的电影和电视剧字幕。',
  'subs.sources.subdl.content': '电影与电视剧',
  'subs.sources.subdl.languages': '广泛的多语言支持',
  'subs.sources.subdl.formats': 'SRT、ASS、SSA、VTT、SUB 等格式',

  'subs.sources.subf2m.desc':
    '大型字幕资源库，为电影和电视剧提供广泛的语言覆盖。',
  'subs.sources.subf2m.content': '电影与电视剧',
  'subs.sources.subf2m.languages': '广泛的多语言支持',
  'subs.sources.subf2m.formats': 'SRT、ASS、SSA、VTT、SUB 等格式',

  'subs.sources.podnapisi.desc':
    '历史最悠久的字幕数据库之一，精心整理了电影和电视剧的字幕合集。',
  'subs.sources.podnapisi.content': '电影与电视剧',
  'subs.sources.podnapisi.languages': '广泛的多语言支持',
  'subs.sources.podnapisi.formats': 'SRT、ASS、SSA、VTT、SUB 等格式',

  'subs.sources.animetosho.desc':
    '直接从 AnimeTosho 上索引的种子发布版本中抓取动漫字幕附件。',
  'subs.sources.animetosho.content': '动漫（电视剧）',
  'subs.sources.animetosho.languages': '日语、英语及其他语言，取决于发布版本',
  'subs.sources.animetosho.formats': 'ASS、SRT、SSA 及其他格式',
  'subs.sources.animetosho.note': 'AnimeTosho 计划于 2026 年 5 月关闭。',

  'subs.sources.gestdown.desc':
    '通过 Gestdown API 提供电视剧字幕，支持多种语言。',
  'subs.sources.gestdown.content': '仅限电视剧',
  'subs.sources.gestdown.languages': '广泛的多语言支持',
  'subs.sources.gestdown.formats': 'SRT、ASS 等格式',

  'subs.sources.jimaku.desc':
    '抓取 jimaku.cc，这是一个由社区维护的动漫字幕文件仓库，使用 TMDB API 匹配标题。',
  'subs.sources.jimaku.content': '动漫（电影与电视剧）',
  'subs.sources.jimaku.languages':
    '以日语为主，也包含英语、中文及更多语言，取决于可用文件',
  'subs.sources.jimaku.formats': 'SRT、ASS、SSA、VTT、SUB 等格式',

  'subs.sources.kitsunekko.desc':
    '抓取 kitsunekko.net 的目录列表，这是一个专注于动漫字幕的仓库，使用 TMDB API 匹配标题。',
  'subs.sources.kitsunekko.content': '动漫（电视剧）',
  'subs.sources.kitsunekko.languages': '英语和日语字幕目录',
  'subs.sources.kitsunekko.formats': 'SRT、ASS、SSA、VTT、SUB 等格式',

  'subs.sources.yify.desc':
    '通过 IMDB ID 匹配，从 yifysubtitles.ch 抓取字幕。仅支持电影。',
  'subs.sources.yify.content': '仅限电影（不支持电视剧）',
  'subs.sources.yify.languages':
    '广泛的多语言支持（阿尔巴尼亚语、阿拉伯语、英语、法语、西班牙语等众多语言）',
  'subs.sources.yify.formats': 'SRT（以 ZIP 压缩包形式提供）',

  'subs.sources.ajatttools.desc':
    '从 Ajatt-Tools/kitsunekko-mirror GitHub 仓库获取字幕，按媒体类型组织，使用 TMDB API 匹配标题。',
  'subs.sources.ajatttools.content': '动漫与日剧（电视剧和电影）',
  'subs.sources.ajatttools.languages': '以日语为主，也包含英语、中文及其他语言',
  'subs.sources.ajatttools.formats': 'SRT、ASS、SSA、VTT、SUB 等格式',

  'subs.sources.ai.desc':
    '非抓取器。按需从最佳可用来源字幕生成 AI 翻译的 SRT 文件。仅限 Pro 密钥。完整详情请参阅 AI 翻译指南。',
  'subs.sources.ai.content': '任何 Wyzie 能找到文本字幕的内容',
  'subs.sources.ai.languages': '80 余种目标语言',
  'subs.sources.ai.formats': '仅限 SRT',

  // Subs Package Page
  'subs.pkg.title': '使用 Wyzie NPM 包',
  'subs.pkg.p1': 'Wyzie Subs NPM 包提供了简单易用的接口，用于搜索和获取字幕。',
  'subs.pkg.install.h2': '安装',
  'subs.pkg.important':
    '所有请求都需要 API 密钥。请在 [store.wyzie.io/redeem](https://store.wyzie.io/redeem) 获取免费密钥，并通过 key 参数传入。详情请参阅 API 密钥页面。',
  'subs.pkg.usage.h2': '使用方法',
  'subs.pkg.params.h3': '参数',
  'subs.pkg.params.note':
    '如需了解更多信息（或遇到问题），请访问 [Wyzie Subs 主页](https://sub.wyzie.io)。',

  'subs.pkg.param.tmdb':
    '电影或电视剧的 TMDB ID（tmdb_id 或 imdb_id 必须提供其一）。',
  'subs.pkg.param.imdb':
    '电影或电视剧的 IMDB ID（imdb_id 或 tmdb_id 必须提供其一）。',
  'subs.pkg.param.format': '要返回的文件格式（例如 srt、ass），支持列表。',
  'subs.pkg.param.season': '季数（需同时提供 episode）。',
  'subs.pkg.param.episode': '集数（需同时提供 season）。',
  'subs.pkg.param.language': '字幕语言的 ISO 639-1 代码，支持列表。',
  'subs.pkg.param.encoding': '字符编码过滤器（例如 utf-8、latin-1）。',
  'subs.pkg.param.hi':
    '为 true 时，仅返回听障字幕。不标记听障字幕的来源将不返回任何结果。',
  'subs.pkg.param.source':
    '按代号指定要查询的字幕提供商（all 表示你的密钥可用的所有在线来源；默认为 charlie）。',
  'subs.pkg.param.release': '发布版本/场景过滤器（支持列表）。',
  'subs.pkg.param.filename': '文件名过滤器，支持别名 file 和 fileName。',
  'subs.pkg.param.origin': '内容来源过滤器（例如 WEB、BLURAY、DVD）。',
  'subs.pkg.param.key':
    '你的 API 密钥（必填）。在 store.wyzie.io/redeem 免费获取。',
  'subs.pkg.param.refresh': '绕过缓存，从来源获取最新结果。',

  'subs.pkg.helpers':
    '该包还附带轻量级 TMDB 辅助函数：searchTmdb、getTvDetails 和 getSeasonDetails，可在请求 /search 前快速查找 ID。getSources 返回在线来源的代号（因健康检查而暂停的来源在恢复之前不会列出），getSourcesInfo 返回包含方案等级的完整 /sources 响应，传入密钥时还会返回该密钥可用的来源。withDownloadOptions 可为结果的 url 添加下载选项（WebVTT 输出、时间轴修正、第二语言等）。',
  'subs.pkg.types.h3': '类型',
  'subs.pkg.type.search': 'API 支持的所有有效参数。',
  'subs.pkg.type.query': 'wyzie-subs API 的所有参数（可选和必填）。',
  'subs.pkg.type.subtitle': 'API 返回的所有字段及其对应类型。',
  'subs.pkg.type.sources': '/sources 端点的响应类型。',
  'subs.pkg.type.download':
    'withDownloadOptions 的选项：to、offset、fps、plain，以及 Pro 专属的 sdh、clean、dual。',
  'subs.pkg.type.sync':
    'syncSubtitle 的输入和结果（Wyzie Synced，需 Pro 密钥）：要使用的字幕（某个结果、其 url，或 tmdb_id/imdb_id 加 language）、detectSpeech 检测到的 speech 或 media 文件，以及同步后的下载链接及其 offset、fps 和 confidence。请参阅 [Wyzie Synced](/subs/usage/synced)。',
  'subs.pkg.types.end':
    '我们的类型定义非常简洁且文档齐全。请参阅 wyzie-lib 仓库中的 [src/types.ts](https://github.com/wyziedevs/wyzie-lib/blob/main/src/types.ts)。',
  'subs.pkg.config.h3': '配置',
  'subs.pkg.config.p1':
    '有用户在 Github 上询问能否配置 API 主机名，我觉得这个主意不错，所以下面是使用方法。感谢大家！',

  // Subs Direct Page
  'subs.direct.title': '直接请求 Wyzie Subs',
  'subs.direct.caution': '我强烈推荐使用 NPM 包，它更简便、更可靠。',
  'subs.direct.p1':
    '如果你决定不使用 NPM 包，那我们就开始吧。我只会介绍 API 参数和 API 返回的数据。如何请求 API 完全由你决定。',
  'subs.direct.important':
    '所有请求都需要 API 密钥。请在 [store.wyzie.io/redeem](https://store.wyzie.io/redeem) 获取免费密钥，并在每次请求中以 &key=YOUR_KEY 的形式附加。详情请参阅 API 密钥页面。',

  'subs.direct.params.h3': '参数',
  'subs.direct.param.id': '节目或电影的 TMDB 或 IMDB ID（必填）。',
  'subs.direct.param.seasonEpisode':
    '用于电视剧搜索的季数和集数，两者必须同时提供。',
  'subs.direct.param.language':
    '语言过滤器（ISO 639-1 代码），多个值以逗号分隔。',
  'subs.direct.param.format': '要返回的字幕格式，支持多个值。',
  'subs.direct.param.hi':
    '为 true 时，仅返回听障字幕（这是过滤条件，而非偏好设置）。不标记听障字幕的来源将不返回任何结果。',
  'subs.direct.param.encoding': '字符编码过滤器。',
  'subs.direct.param.source':
    '要查询的字幕提供商（all 表示查询你的密钥可用的所有来源；默认为 charlie）。',
  'subs.direct.param.release': '发布版本或场景名称过滤器（逗号分隔）。',
  'subs.direct.param.file': '文件名过滤器（别名：file、filename、fileName）。',
  'subs.direct.param.origin':
    '内容来源过滤器，逗号分隔（例如 WEB、BLURAY、DVD）。',
  'subs.direct.param.key':
    '你的 API 密钥（必填）。在 store.wyzie.io/redeem 免费获取。',
  'subs.direct.param.refresh':
    '绕过缓存获取最新结果，适用于来源可能已更新的情况。',
  'subs.direct.param.page':
    '要返回的页码，从 1 开始。仅在与 limit 一起使用时生效。',
  'subs.direct.param.limit':
    '每页结果数（1 到 200）。不传入时，所有结果会在同一个响应中返回。',
  'subs.direct.important.imdb':
    "使用 IMDB ID 时，请确保 ID 开头包含前两个字符（'tt'）。",

  'subs.direct.data.h3': '返回数据',
  'subs.direct.data.id': '字幕文件的 ID。',
  'subs.direct.data.url':
    '位于 https://sub.wyzie.io/c/... 的下载链接，带有加密的 tok 参数。每次下载消耗 1 次请求；详见下文「下载字幕」一节。',
  'subs.direct.data.flagUrl': '语言区域国旗图片的 URL。',
  'subs.direct.data.format': '字幕文件的格式。',
  'subs.direct.data.encoding': '字幕文件的字符编码。',
  'subs.direct.data.display': '字幕语言名称（首字母大写）。',
  'subs.direct.data.language': '语言的 ISO 639-1 代码。',
  'subs.direct.data.media': '该字幕对应的媒体名称。',
  'subs.direct.data.isHearingImpaired': '布尔值，表示该字幕是否适合听障人士。',
  'subs.direct.data.source': '字幕的抓取来源。',
  'subs.direct.data.release': '主要发布版本名称。',
  'subs.direct.data.releases': '与该字幕兼容的其他发布版本名称。',
  'subs.direct.data.fileName': '可用时的原始文件名。',
  'subs.direct.data.downloadCount': '在来源平台上的下载次数（如有）。',
  'subs.direct.data.origin': '内容来源（例如 WEB、BluRay、DVD）。',
  'subs.direct.data.matchedRelease':
    '与你的过滤器匹配的发布版本值（如已提供）。',
  'subs.direct.data.matchedFilter': '匹配的用户自定义过滤器（如已提供）。',
  'subs.direct.data.ai':
    '若为 AI 翻译字幕则为 true，普通抓取字幕则为 false。当你只需要其中一种时，可在客户端用此字段进行过滤。',
  'subs.direct.download.p':
    '/search 响应中的每个 url 都指向 https://sub.wyzie.io/c/...，并带有 tok 查询参数。tok 经过加密，因此不会暴露你的 API 密钥，有效期为 60 天。请原样使用该 URL。每次搜索消耗 1 次请求，每次下载另外消耗 1 次，均计入执行该搜索的密钥。当该密钥无法支付下载费用时，链接会被拒绝：',
  'subs.direct.dl.p':
    '将这些参数添加到下载 URL 中，即可改变返回的内容。它们适用于每次下载（无论是否命中缓存），且不额外收费（下文的 dual 除外）。X-Subtitle-Transforms 响应头会列出实际应用的处理及相应数量。',
  'subs.direct.dl.param.to':
    '输出格式：`srt` 或 `vtt`。`vtt` 可直接在浏览器的 `<track>` 元素中播放。默认：文件原本的格式。',
  'subs.direct.dl.param.offset': '将每行字幕平移指定的秒数（负数表示提前）。',
  'subs.direct.dl.param.fps':
    '修正为其他发布版本制作的字幕产生的时间漂移：`SUBTITLE_FPS:VIDEO_FPS`，例如 PAL 字幕配电影帧率的视频时使用 `25:23.976`。',
  'subs.direct.dl.param.plain':
    '输出简洁整齐的字幕行：移除 `{\\an8}` 和 `<font>` 等样式代码，删除空行和重复行，按时间顺序排列，并修剪轻微的重叠。',
  'subs.direct.dl.param.sdh':
    '移除为听障人士添加的文本：`[DOOR SLAMS]`、`(sighs)`、`JOHN:` 等说话人标签以及 ♪ 歌词。',
  'subs.direct.dl.param.clean':
    '屏蔽严重的脏话，仅保留首字母（`f***`）。仅适用于英语文件。',
  'subs.direct.dl.param.dual':
    '在每行字幕下方添加第二种语言（ISO 639-1 代码），并与本文件的时间轴对齐。仅在找到匹配字幕时额外消耗 1 次请求；否则只返回原文件，并附带 `X-Dual: unavailable`。',
  'subs.direct.dl.after':
    '选项可以组合使用，例如 `&to=vtt&sdh=strip&offset=-1.5`。链接中已带有 `format`、`encoding`、`id` 以及（剧集的）`season` 和 `episode`：请保持这些参数不变。`autoUnzip=false` 会原样返回压缩包。',
  'subs.direct.headers.p':
    '每个 /search 响应都包含 X-Total-Count 响应头，表示结果总数。当你传入 limit 时，还会包含：',
  'subs.direct.header.xpage': '返回的页码。',
  'subs.direct.header.xperpage': '当前生效的 limit。',
  'subs.direct.header.xtotalpages': '总页数。',
  'subs.direct.headers.rate':
    '响应还会携带 X-RateLimit-Limit、X-RateLimit-Remaining 和 X-RateLimit-Reset 响应头。请将其视为近似值：用量会以短批次与计费系统结算，因此这些值可能略微滞后于你的实际用量。',

  // Subs Translate Page
  'subs.translate.title': 'AI 字幕翻译',
  'subs.translate.important':
    'AI 翻译是 **Pro 专属功能**；免费密钥会收到 403 Upgrade required。每次调用从你的密钥余额中消耗 **100 次请求**，命中缓存也照常计费。如果调用在产生任何输出之前就失败（未找到字幕、搜索或下载失败，或服务器繁忙），这 100 次请求会自动退还。',
  'subs.translate.p1':
    'Wyzie 可以即时将任意字幕翻译成 80 余种语言。翻译后的 SRT 会随各批次完成按顺序流式返回，因此最前面的字幕条目很快就能到达，而不必等整个文件完成。完整的翻译结果会缓存 30 天，之后对同一标题、剧集和目标语言的请求将直接由缓存提供。',

  'subs.translate.ways.h2': '两种使用方式',
  'subs.translate.way1.h3': '1. 从搜索响应中选择语言',
  'subs.translate.way1.p1':
    '对于 Pro 密钥，每个 /search 响应还会包含 "ai": true 的 AI 翻译条目，其 url 指向 /translate：每种支持的语言各一条，或仅包含你的 language= 过滤器中的语言。免费密钥永远不会获得这些条目。在 UI 中像对待其他字幕条目一样处理 AI 条目：用户点击后请求该 URL 即可。',
  'subs.translate.way1.filter':
    '如果你希望在 UI 中隐藏 AI 条目，可将其过滤掉：',
  'subs.translate.way2.h3': '2. 直接调用 /translate',

  'subs.translate.param.id': 'TMDB 或 IMDB ID（必填）。',
  'subs.translate.param.target':
    '目标语言（必填）：支持列表中的名称（例如 Spanish、Japanese、Portuguese (Brazil)）或其代码（例如 es、ja、pt-BR）。',
  'subs.translate.param.seasonEpisode': '用于电视剧，两者必须同时提供。',
  'subs.translate.param.key':
    '你的 API 密钥。如果 URL 来自 /search，请改用 tk。',
  'subs.translate.param.tk':
    '来自 /search 中 AI 条目 URL 的加密令牌。作用等同于 key，不会暴露你的 API 密钥，有效期为 60 天。',

  'subs.translate.headers.p':
    '响应体为以 text/plain; charset=utf-8 流式传输的 SRT 文件。常用响应头：',
  'subs.translate.header.xcache': '命中缓存时为 HIT-REDIS，全新生成时为 MISS。',
  'subs.translate.header.xsourcelang': '翻译器使用的源字幕语言。',
  'subs.translate.header.xtargetlang': '你的 target 参数的回显。',
  'subs.translate.header.xsourceprovider': '提供源字幕的抓取器。',

  'subs.translate.how.h2': '工作原理',
  'subs.translate.how.step1':
    'Wyzie 从普通来源搜索文本字幕，优先选择英语 SRT（如有）。VTT、ASS、SSA 和 SUB 文件会先转换为 SRT。',
  'subs.translate.how.step2':
    'SRT 被分割为每批最多约 3,800 个字符，并使用 Google Translate 翻译，每次同时处理 4 批。',
  'subs.translate.how.step3':
    '输出会随各批次完成按 SRT 顺序流式返回，因此最前面的字幕条目很快就能到达。支持流式 SRT 的播放器可在其余内容完成之前就开始显示第一行。',
  'subs.translate.how.step4':
    '完整翻译结果以 id、season、episode 和 target 为键缓存在 Redis 中，有效期 30 天。',

  'subs.translate.languages.h2': '支持的目标语言',
  'subs.translate.languages.p':
    '80 余种语言，涵盖所有主要欧洲、亚洲、非洲和中东语言。请传入列表中的名称（Spanish、Portuguese (Brazil)）或其代码（es、pt-BR）。对于 Pro 密钥，完整列表也会以 ai: true 条目的形式出现在任何未使用 language= 过滤器的 /search 响应中，那是规范的参考来源。',

  'subs.translate.limitations.h2': '限制',
  'subs.translate.limit1':
    'AI 翻译需要以文本字幕为起点。VTT、ASS、SSA 和 SUB 来源会先转换为 SRT；如果不存在任何文本字幕，调用将返回 404 No subtitle found，并退还这 100 次请求。',
  'subs.translate.limit2':
    '翻译质量取决于源字幕的质量。时间轴不准确或有错别字的源字幕会产生同样有问题的翻译。',
  'subs.translate.limit3':
    '部分用户可能希望完全屏蔽 AI 条目，可在客户端过滤 ai === false。',
  'subs.translate.limit4':
    '缓存命中也会计费。无论是全新生成还是从 30 天缓存中提供，每次 /translate 调用均消耗 100 次请求。只有在产生任何输出之前就失败的调用才会退还请求。',

  // Subs Synced Page
  'subs.synced.title': 'Wyzie Synced',
  'subs.synced.important':
    'Wyzie Synced 是 **Pro 专属功能**：免费密钥会收到 403 Paid feature。每次成功同步消耗 **1 次请求**；未找到匹配的同步不计费。之后下载同步后的链接时，与其他下载一样计费。',
  'subs.synced.p1':
    '网上找到的字幕，时间轴往往是按照与你手中视频不同的发布版本制作的：字幕会提前或延后几秒出现，或者由于该版本的帧率不同，随着影片播放偏差越来越大。Wyzie Synced 会分析你这份视频的音频，找出有人说话的位置，并计算出让字幕与之对齐所需的偏移量和帧率修正。你会得到一个已应用该修正的普通下载链接（即 offset 和 fps [下载选项](/subs/usage/direct#download-options)）。',
  'subs.synced.web.p':
    '最简单的方式：打开 [sub.wyzie.io/synced](https://sub.wyzie.io/synced)，输入你的 Pro 密钥，选择视频文件和对应标题，然后下载同步后的字幕。音频在你的浏览器中分析，因此视频永远不会被上传：只会发送语音的时间信息。支持 MKV、MP4、AVI 及大多数其他格式，包括 AC3、E-AC3 和 DTS 音频。',
  'subs.synced.api.p':
    '发送你想要的字幕（一个下载链接，或者标题，由 Wyzie 挑选最佳匹配）以及音频：可以是你自己检测出的语音时间段，也可以是音频/视频文件本身。',
  'subs.synced.param.url':
    '来自 /search 的下载链接（https://sub.wyzie.io/c/…）。链接上已有的其他下载选项（to、sdh、…）会保留在同步后的链接中。',
  'subs.synced.param.id':
    '替代 url：TMDB 或 IMDB ID。Wyzie 会尝试该语言排名前 5 的文本字幕，并返回与你的音频最匹配的那一个。',
  'subs.synced.param.language':
    '与 id 一起使用：字幕语言的 ISO 639-1 代码（必填）。',
  'subs.synced.param.seasonEpisode': '与 id 一起用于电视剧，两者必须同时提供。',
  'subs.synced.param.key':
    '你的 Pro API 密钥。不提供时，将使用 url 中 tok 所对应的密钥；来自免密钥下载页面的链接则必须提供 key。',
  'subs.synced.param.speech':
    '有人说话的时间段：以秒为单位的 [[start, end], …]，可由任意语音活动检测器生成（wyzie-lib 的 detectSpeech、Silero VAD、webrtcvad）。一部 2 小时的电影大约有 2,000 个片段，约 40 KB 的 JSON。',
  'subs.synced.param.media':
    '或者直接提供音频/视频文件本身：作为原始请求体（其他字段放在查询字符串中），或作为 multipart 字段 media。最大 95 MB，因此对于完整的电影，请只上传音轨。',
  'subs.synced.fields.note':
    '字段可以放在 JSON 请求体、multipart 表单或查询字符串中（配合原始 media 请求体）。',
  'subs.synced.response.p': '200 响应为 JSON 格式：',
  'subs.synced.field.url':
    '已应用时间轴修正（offset、fps）的字幕下载链接，并带有为你的密钥新生成的 tok。像使用任何 /search 返回的 url 一样使用它：每次下载消耗 1 次请求。',
  'subs.synced.field.offset':
    '帧率修正之后为每行字幕增加的秒数（负数表示提前）。',
  'subs.synced.field.fps':
    '以 SUBTITLE_FPS:VIDEO_FPS 形式表示的帧率修正（例如 "25:23.976"），无需修正时为 null。',
  'subs.synced.field.confidence':
    '0 到 1：该时间轴优于其他所有候选的明显程度。凡是返回的结果都已通过匹配检验；数值越高越可靠。',
  'subs.synced.field.inSync': '字幕原本就与你的视频对齐时为 true。',
  'subs.synced.field.subtitle':
    '所使用的字幕（release、fileName、format、source、…）。使用 url 时，仅包含其 format。',
  'subs.synced.errors.p':
    '错误以 JSON 格式返回，包含 message 和 details。被拒绝和失败的同步不计费。',
  'subs.synced.error.400':
    '字段缺失或无效：未指定字幕、没有音频，或 speech 不是由 [start, end] 数对组成。',
  'subs.synced.error.401': '未提供密钥，或 url 中的下载链接无效或已过期。',
  'subs.synced.error.403':
    '密钥为免费密钥（Wyzie Synced 需要 Pro）、无效或已被暂停。',
  'subs.synced.error.404': '该标题没有该语言的文本字幕。',
  'subs.synced.error.413':
    'media 文件超过 95 MB。请只上传音轨，或改为发送 speech。',
  'subs.synced.error.422':
    '在任何偏移量或帧率下，字幕都无法与音频对齐（可能是其他剪辑版本或其他剧集），音频中的语音太少，或文件无法解码。',
  'subs.synced.error.429': '与其他任何调用一样，密钥无法支付该请求的费用。',
  'subs.synced.error.503':
    '正忙于解码其他上传的文件，或搜索暂时不可用。请稍后重试，或改为发送 speech。',
  'subs.synced.lib.p':
    'wyzie-lib 提供 detectSpeech（与网站在你浏览器中运行的检测器相同）和 syncSubtitle：',
  'subs.synced.how.step1':
    '语音：音频被解码为 8 kHz 单声道（对于 5.1 和 7.1 混音，只取对白所在的中置声道），然后由语音活动检测器标记出有人说话的位置：即响亮、处于语音频段、并随音节起伏的声音。',
  'subs.synced.how.step2':
    '对齐：在 ±10 分钟范围内的每个偏移量上，将字幕的显示时间与这些语音进行互相关计算，并覆盖常见的帧率不匹配情况（25 与 23.976、25 与 24、24 与 23.976 fps）。',
  'subs.synced.how.step3':
    '精调：通过将字幕行的起始位置与语音的起始位置对齐，把最佳时间轴精确到 10 ms。',
  'subs.synced.how.step4':
    "只有当某个时间轴远远优于其他所有偏移量时才会返回，因此针对其他剪辑版本或剧集的字幕会得到 422 Couldn't sync，而不是错误的平移。",
  'subs.synced.limit1':
    'Wyzie Synced 可修正固定的偏移和帧率差异。针对不同剪辑版本（增加或缺少场景）的字幕无法通过单一平移修正，会被拒绝。',
  'subs.synced.limit2':
    '它依赖语音：对白很少的影片或以音乐为主的音频可能无法同步。',
  'subs.synced.limit3': '可检测的偏移最多为 ±10 分钟。',

  // Subs API Keys Page
  'subs.keys.title': 'API 密钥',
  'subs.keys.p1':
    'Wyzie Subs 的所有请求均需要 API 密钥。免费版满足大多数使用场景；付费方案适合更高用量需求。',

  'subs.keys.tiers.h2': '方案等级',
  'subs.keys.tier.free': '免费（邮箱验证）',
  'subs.keys.tier.free.limit': '1,000 次请求 / UTC 每天',
  'subs.keys.tier.pro': '$5 一次性付款',
  'subs.keys.tier.pro.limit': '400,000 次请求',
  'subs.keys.tier.topup': '从 $0.0625 起 / 每 5K 次',
  'subs.keys.tier.topup.limit': '追加到你的付费余额',
  'subs.keys.tiers.end':
    'Pro 和补充包永不过期。更喜欢按月订阅？$32/月的订阅每月提供 6,000,000 次请求（仅限银行卡）。完整定价和控制台请访问 store.wyzie.io。',

  'subs.keys.free.h2': '获取免费密钥',
  'subs.keys.free.p':
    '访问 [store.wyzie.io/redeem](https://store.wyzie.io/redeem)：',
  'subs.keys.free.step1': '完成一个快速的 Cloudflare Turnstile 验证码。',
  'subs.keys.free.step2':
    '输入主流个人邮箱服务商的邮箱地址（Gmail、Outlook/Hotmail、Yahoo、iCloud、AOL、Proton 等）。一次性邮箱域名会被拒绝。',
  'subs.keys.free.step3': '输入我们发送到你邮箱的 6 位验证码。',
  'subs.keys.free.step4': '你将收到一个形如 wyzie-abc123... 的 API 密钥。',
  'subs.keys.free.gmail':
    '每个邮箱地址和每个网络只能申领一个免费密钥；再次申请会返回 409。密钥丢失了？在[控制台](https://store.wyzie.io/dashboard)使用「Forgot key」（忘记密钥）即可重新发送。',

  'subs.keys.pro.h2': '升级至 Pro',
  'subs.keys.pro.p1':
    '访问 [store.wyzie.io](https://store.wyzie.io)，使用你申请免费密钥时所用的邮箱结账。你现有的 wyzie-... 密钥将在原地升级，并追加 400K 次付费请求。更喜欢按月订阅？$32/月的订阅会改为每月提供 6,000,000 次请求的额度（仅限银行卡）。',
  'subs.keys.pro.p2':
    '如果你使用全新邮箱（未关联任何密钥）结账，系统会生成一个新的 wyzie-... 密钥并发送至你的邮箱。',

  'subs.keys.protect.h2': '不要将密钥暴露在客户端',
  'subs.keys.protect.important':
    '**切勿将 API 密钥嵌入客户端代码。** 浏览器 JavaScript、移动应用、浏览器扩展、Electron 风格的桌面应用以及公开的 Git 仓库均属于客户端范畴。任何分发给终端用户的内容都可能被其检查。我们曾见过真实案例：用户将密钥粘贴到流媒体网站的前端，结果第三方从 JS 包中抓取了密钥，并在数小时内将请求余额消耗殆尽。以这种方式消耗的配额不予退还。',
  'subs.keys.protect.p2': '在客户端应用中安全使用密钥的两种方式：',
  'subs.keys.protect.option1':
    '使用 [Wyzie Worker](https://github.com/wyziedevs/wyzie-worker)：一个免费的 Cloudflare Worker 代理，以 `NITRO_API_TOKEN` 机密变量的形式保存你的 API 密钥。每次调用它都必须发送 `Authorization: Bearer <NITRO_WORKER_KEY>`（即你设置的第二个机密变量），因此请让客户端经由你自己的后端进行调用，并同样将 Worker 密钥保留在服务端。',
  'subs.keys.protect.option2':
    '运行你自己的代理：任何在转发请求至 sub.wyzie.io 前附加密钥的后端端点均可。参见入门页面中的 10 行示例。',
  'subs.keys.protect.devtools':
    '如果密钥出现在 DevTools 的网络选项卡中，则说明它已经暴露。请将其视为公开信息，并在你的[控制台](https://store.wyzie.io/dashboard)中轮换密钥。',

  'subs.keys.using.h2': '使用你的密钥',
  'subs.keys.using.p': '在每次 API 请求中附加 &key=YOUR_KEY：',
  'subs.keys.using.npm.h3': 'NPM 包',

  'subs.keys.limit.h2': '达到限额',
  'subs.keys.limit.p':
    '每次搜索消耗 1 次请求，每次字幕下载消耗 1 次请求，因此搜索一次并下载一个文件共消耗 2 次。AI 翻译每次调用消耗 100 次请求。',
  'subs.keys.limit.free':
    '**免费版**耗尽 -> 搜索和下载链接返回 429 Daily request limit reached，JSON 中包含 reset_at，并附带 Retry-After 响应头。每日 1,000 次请求的上限在 UTC 午夜重置。',
  'subs.keys.limit.paid':
    '**付费余额**耗尽 -> 搜索和下载链接返回 402，JSON 中附带补充链接。在 [store.wyzie.io/topup](https://store.wyzie.io/topup) 手动补充，或在控制台开启**自动补充**，当余额低于你设定的阈值时自动充值。',
  'subs.keys.hold.p1':
    '主要从数据中心或托管服务 IP 发送极大请求量的密钥会被自动暂停。被暂停的密钥在每次请求时都会收到 403 Key on hold，JSON 中包含恢复链接（https://store.wyzie.io/verify）和客服链接（https://store.wyzie.io/contact）。',
  'subs.keys.hold.p2':
    '如需立即恢复密钥，请在 [store.wyzie.io/verify](https://store.wyzie.io/verify) 通过 DNS TXT 记录或 meta 标签验证你使用该密钥的网站。拥有已验证网站的密钥将不会再被自动暂停，因此流量大的网站可以在被暂停之前提前验证。',
  'subs.keys.hold.p3':
    '没有网站，例如后端服务或应用？请[联系客服](https://store.wyzie.io/contact)以恢复密钥。',

  'subs.keys.files.h2': '文件中包含的内容',
  'subs.keys.files.adfilter':
    '**广告过滤** – 通过 sub.wyzie.io 提供的每个字幕都会去除提供商的广告字幕条目（OpenSubtitles 横幅、博彩推广、「在 ... 免费观看」之类的行）。SRT 字幕条目会重新编号，因此不会出现跳号。所有提供商（包括 OpenSubtitles）都通过 sub.wyzie.io 提供，因此过滤适用于所有提供商。',
  'subs.keys.files.promo':
    '**免费密钥和开发密钥**获取的每个文件，在最开头（0–6 s）都会带有一条指向 [store.wyzie.io](https://store.wyzie.io) 的简短字幕条目。付费密钥获得的是不含该条目的干净文件。',

  'subs.keys.faq.h2': '常见问题',
  'subs.keys.faq.q1': '我丢失了密钥，能重新获取吗？',
  'subs.keys.faq.a1':
    '打开[控制台](https://store.wyzie.io/dashboard)，使用注册邮箱通过「Forgot key」（忘记密钥）找回，我们会将你现有的密钥重新发送给你。如果你认为密钥已泄露，请改为在控制台中轮换密钥。',
  'subs.keys.faq.q2': '可以在多个项目中使用同一个密钥吗？',
  'subs.keys.faq.a2': '可以，你的密钥在任何调用 API 的地方都有效。',
  'subs.keys.faq.q3': '密钥会过期吗？',
  'subs.keys.faq.a3':
    '不会。免费密钥和付费密钥均无过期时间。免费密钥每日有用量上限；付费余额在用完之前一直有效。',
  'subs.keys.faq.q4': '自动补充安全吗？',
  'subs.keys.faq.a4':
    '你可以设置每月消费上限，我们绝不会超额收费。每封确认邮件和你的控制台中均提供一键禁用选项。',

  // Proxy Intro Page
  'proxy.intro.title': 'Wyzie Proxy 简介',
  'proxy.intro.note':
    'Wyzie Subs 的生产版本不再使用此代理，目前使用 [i6.shark](https://github.com/wyziedevs/i6.shark)。',
  'proxy.intro.p1':
    'Wyzie Proxy 是一个强大的代理 API，允许你向任何网站发起请求，无需担心 CORS 或其他限制。由于 Wyzie Proxy 基于 Nitro 构建，它可以托管在以下任意平台：AWS Amplify、Azure、Cloudflare、Netlify、Stormkit、Vercel、Zeabur。',
  'proxy.intro.btn.hosting': '托管',
  'proxy.intro.btn.check': '立即查看',

  // Proxy Hosting Page
  'proxy.hosting.title': '托管 Wyzie Proxy',
  'proxy.hosting.p1':
    '得益于 Nitro，构建 Wyzie Proxy 轻而易举。首先，使用以下命令克隆 Wyzie Proxy 仓库：',
  'proxy.hosting.p2': '然后，安装所有必要的依赖包：',
  'proxy.hosting.p3': '所有依赖包安装完成后，你可以构建代理：',
  'proxy.hosting.p4':
    '输出文件将生成在 /.output/server 文件夹中。如果你要部署到 Cloudflare Workers，请将 index.mjs 文件复制粘贴到 Worker 中；否则，可按正常方式部署这些文件。',

  // i6.shark Intro Page
  'i6shark.intro.title': 'i6.shark 简介',
  'i6shark.intro.p1':
    'i6.shark 是一个 IPv6 代理服务器，允许你从 /48 子网中随机生成的 IPv6 地址发起 HTTP 请求。这是目前在生产环境中为 Wyzie Subs 提供支持的代理。',
  'i6shark.intro.p2':
    '一个 /48 子网拥有 1,208,925,819,614,629,174,706,176（1.2 x 10^24）个 IPv6 地址，使得通过传统 IP 封禁来阻止几乎成为不可能。但使用单一子网意味着真正想封锁你的人可以封锁你的 ASN 地址，请注意这一点。',
  'i6shark.intro.btn.hosting': '托管',
  'i6shark.intro.btn.github': 'GitHub',

  'i6shark.intro.features.h2': '功能特性',
  'i6shark.intro.feature1':
    '**随机 IPv6 生成**：为每次请求从你的 /48 前缀中创建随机 IPv6 地址',
  'i6shark.intro.feature2':
    '**完整 HTTP 方法支持**：GET、POST、PUT、DELETE 及所有其他 HTTP 方法',
  'i6shark.intro.feature3':
    '**HMAC-SHA256 认证**：使用基于 User-Agent 令牌的安全 API 密钥认证',
  'i6shark.intro.feature4':
    '**智能 IP 池管理**：可配置池大小的自动 IP 轮换。智能 IP 生命周期管理。每个 IP 的请求计数。基于不活跃阈值的闲置 IP 清理。',
  'i6shark.intro.feature5':
    '**高级请求处理**：自定义请求头转发。Cloudflare 及 CDN 请求头剥离。支持多种 URL 参数格式。可选回退到系统默认 IP。',
  'i6shark.intro.feature6':
    '**主机白名单**：内置域名白名单以提升安全性（可在代码中配置）',
  'i6shark.intro.feature7':
    '**自动维护**：定期清空 IP 池。子网验证与清理。连接池与长连接优化。',
  'i6shark.intro.feature8':
    '**高性能**：带缓冲池的并发请求处理。可配置的超时和连接限制。高效的 IPv6 地址管理。',
  'i6shark.intro.feature9': '**调试模式**：详细日志，便于故障排查和监控',

  'i6shark.intro.requirements.h2': '系统要求',
  'i6shark.intro.req1': 'Go 1.22 或更高版本',
  'i6shark.intro.req2': '支持 IPv6 的 Linux/Unix 系统（推荐 Ubuntu）',
  'i6shark.intro.req3': 'Root 权限（用于绑定 80 端口及 IPv6 操作）',
  'i6shark.intro.req4': '来自托管服务商的 IPv6 /48 子网分配',

  'i6shark.intro.providers.h2': '托管服务商',
  'i6shark.intro.providers.p1': '以下服务商已知可提供 /48 IPv6 子网：',

  // i6.shark Hosting Page
  'i6shark.hosting.title': '托管 i6.shark',
  'i6shark.hosting.p1':
    '搭建 i6.shark 需要一台具有 /48 IPv6 子网的 VPS。配置完成后，它将以最低维护成本自主运行。',

  'i6shark.hosting.steps.h2': '步骤',
  'i6shark.hosting.step1': '将仓库克隆到 /opt/i6.shark：',
  'i6shark.hosting.step2': '在 src/consts.go 中配置常量：',
  'i6shark.hosting.step2.note':
    '根据你的服务器情况更新 SharedSecret、IPv6Prefix 和 Interface。其余调优常量有合理的默认值，通常无需修改。',
  'i6shark.hosting.step3': '构建应用：',
  'i6shark.hosting.step4': '创建 systemd 服务：',
  'i6shark.hosting.step5': '启用并启动服务：',
  'i6shark.hosting.step5.check': '检查状态：',
  'i6shark.hosting.post':
    '代理服务器现在将在开机时自动运行，并在崩溃时自动重启。',

  'i6shark.hosting.daily.h2': '每日重启（可选）',
  'i6shark.hosting.daily.p': '添加一个 cron 任务，在每天随机时间重启服务器：',

  'i6shark.hosting.auth.h2': 'API 认证',
  'i6shark.hosting.auth.p':
    'API 令牌使用 HMAC-SHA256 算法和共享密钥生成，密钥生成的输入为 User-Agent 请求头。实现细节请参阅源代码中的 validateAPIToken 函数。',

  // Plugins
  'plugins.common.required': '必填',

  'plugins.index.intro':
    'Wyzie Subs 可直接接入你已经在用的媒体应用。每个插件都连接同一个 `https://sub.wyzie.io/search` 接口，并需要一个免费的 **Wyzie API 密钥**。请在 [store.wyzie.io](https://store.wyzie.io/#plans) 获取。',
  'plugins.index.tbl.stremio.for': '在桌面端、移动端或电视上使用 Stremio 观看',
  'plugins.index.tbl.stremio.install': '托管式插件：粘贴密钥，点击安装',
  'plugins.index.tbl.bazarr.for': 'Plex、Jellyfin、Emby、Sonarr、Radarr 媒体库',
  'plugins.index.tbl.bazarr.install': '可直接接入你的 Bazarr 实例的提供方',
  'plugins.index.tbl.kodi.for': 'Kodi 19+、LibreELEC、CoreELEC',
  'plugins.index.tbl.kodi.install': '从 zip 文件或 Wyzie 仓库安装',
  'plugins.index.use.stremio':
    '如果你在 Stremio 应用内观看，请使用 **Stremio**。',
  'plugins.index.use.bazarr':
    '如果你使用 Plex、Jellyfin 或 Emby，请使用 **Bazarr**。Bazarr 会将字幕文件下载到磁盘，你的媒体服务器会自动识别。这也是 Plex 和 Jellyfin 的推荐方式；没有单独的原生插件。',
  'plugins.index.use.kodi':
    '在 Android TV、树莓派或家庭影院电脑上需要 Kodi 原生字幕服务时，请使用 **Kodi**。',
  'plugins.index.shared.sources':
    '**字幕来源：**你的密钥可用的所有来源（`source=all`）：免费密钥为 charlie 和 lima，Pro 密钥为全部七个来源。',
  'plugins.index.shared.matching':
    '**匹配方式：** Wyzie 基于 IMDB 和 TMDB ID 以及季和集来驱动，因此电影和剧集都能精准匹配。',
  'plugins.index.shared.quota':
    '**配额：** 当你的密钥用尽时，插件会显示一个友好的提示，并链接到 [store.wyzie.io](https://store.wyzie.io)，而不是悄无声息地失败。充值或订阅后即可恢复使用。',
  'plugins.index.shared.languages':
    '**语言：** 100 多种，可在每个插件中分别选择。',
  'plugins.index.outro':
    '在上方选择你的平台即可开始。所有插件的源代码都在 [wyzie-plugins 仓库](https://github.com/wyziedevs/wyzie-plugins)中。',

  'plugins.stremio.intro':
    '一款一键安装的 [Stremio](https://www.stremio.com/) 字幕插件。它会查询你的密钥可用的所有 Wyzie 来源，适用于电影和剧集，并支持 Stremio 运行的所有平台。',
  'plugins.stremio.before':
    '你需要一个免费的 Wyzie API 密钥。在 [store.wyzie.io/redeem](https://store.wyzie.io/redeem) 获取，或在 [store.wyzie.io](https://store.wyzie.io/#plans) 购买 Pro 密钥或订阅。',
  'plugins.stremio.install.1':
    '打开 [stremio.wyzie.io/configure](https://stremio.wyzie.io/configure)。',
  'plugins.stremio.install.2': '粘贴你的 **API 密钥**。',
  'plugins.stremio.install.3':
    '可选：以 ISO 639-1 代码输入你偏好的**语言**，用逗号分隔（例如 `en,es,fr`）。留空表示所有语言。',
  'plugins.stremio.install.4':
    '可选：开启**听障**选项，以仅获取听障字幕。保持关闭则显示全部字幕；开启时，不标记听障字幕的来源将不返回任何结果。',
  'plugins.stremio.install.5':
    '点击**安装**。Stremio 会打开并要求你确认；接受后即完成。',
  'plugins.stremio.install.after':
    '你的密钥和偏好设置已编码到插件中，因此无需进行其他设置。打开任意电影或剧集，从列表中选择一条字幕即可。',
  'plugins.stremio.cfg.key.f': 'API 密钥',
  'plugins.stremio.cfg.key.d': '你的 Wyzie 密钥。必填。',
  'plugins.stremio.cfg.langs.f': '语言',
  'plugins.stremio.cfg.langs.d':
    'ISO 639-1 代码，用逗号分隔。留空表示所有语言。',
  'plugins.stremio.cfg.hi.f': '听障',
  'plugins.stremio.cfg.hi.d': '仅返回听障字幕（发送 hi=true）。默认关闭。',
  'plugins.stremio.cfg.note':
    '若要在之后更改其中任何设置，请重新打开 [stremio.wyzie.io/configure](https://stremio.wyzie.io/configure)，调整后重新安装。',
  'plugins.stremio.local':
    '然后打开 `http://127.0.0.1:7000/configure`，粘贴你的密钥，并安装到 Stremio。',
  'plugins.stremio.quota':
    '如果你的密钥达到上限，插件会显示一条字幕条目，链接到 [store.wyzie.io](https://store.wyzie.io)，方便你充值或订阅。完成后字幕会立即恢复。',
  'plugins.stremio.ts.none':
    '**没有出现任何字幕。** 请确认该影片在 Stremio 中有 IMDB ID（大多数目录项都有），并且你选择的语言确实有该影片的字幕。可尝试清除语言筛选以查看全部。',
  'plugins.stremio.ts.key':
    '**密钥无效，或什么都加载不出来。** 重新打开配置页面并重新粘贴你的密钥；多余的空格会导致失效。在 [store.wyzie.io/dashboard](https://store.wyzie.io/dashboard) 确认密钥是否有效。',
  'plugins.stremio.ts.episode':
    '**剧集无法匹配。** Wyzie 基于季和集进行匹配；请确认 Stremio 正在播放正确的剧集条目，而不是通用的剧集页面。',

  'plugins.bazarr.intro':
    '[Bazarr](https://www.bazarr.media/) 可在一处管理 **Plex、Jellyfin、Emby、Sonarr 和 Radarr** 的字幕。将 Wyzie 添加为提供方后，所有这些服务器都能通过同一个密钥，访问该密钥可用的全部 Wyzie 来源。',
  'plugins.bazarr.note':
    '这是在 Plex 和 Jellyfin 上使用 Wyzie 的推荐方式。Bazarr 会将字幕文件下载到你的媒体旁边，你的服务器会自动识别，因此无需单独的原生插件。',
  'plugins.bazarr.before':
    '在 [store.wyzie.io/redeem](https://store.wyzie.io/redeem) 获取免费的 Wyzie API 密钥，并确保你能访问 Bazarr 的安装文件（典型 Docker 路径：`/opt/bazarr/bazarr/`）。',
  'plugins.bazarr.install.1':
    '从 [wyzie-plugins 仓库](https://github.com/wyziedevs/wyzie-plugins)下载 [bazarr/wyzie.py](https://github.com/wyziedevs/wyzie-plugins/blob/main/bazarr/wyzie.py)（或执行 `git clone https://github.com/wyziedevs/wyzie-plugins.git`），并将其复制到 `bazarr/subliminal_patch/providers/wyzie.py`。',
  'plugins.bazarr.install.2':
    '编辑 `bazarr/subliminal_patch/extensions.py`，并将 `wyzie` 添加到 `provider_registry` 和 `provider_manager` **两者**中。',
  'plugins.bazarr.install.3':
    '编辑 `bazarr/list_subtitles.py`（或 `bazarr/config.py`，取决于你的版本），以暴露 `api_key`、`prefer_hi` 和 `sources` 设置。可参照现有提供方（如 `opensubtitlescom`）的写法。',
  'plugins.bazarr.install.4': '重启 Bazarr。',
  'plugins.bazarr.install.5':
    '进入**设置、提供方、Wyzie**，粘贴你的 API 密钥并保存。',
  'plugins.bazarr.install.after':
    '已计划提交一个一流的 pull request，将此提供方上游合并到 Bazarr。在此之前，它是一个可直接添加到你自己安装中的文件。',
  'plugins.bazarr.cfg.key': '你的 Wyzie 密钥。必填。',
  'plugins.bazarr.cfg.hi': '仅返回听障字幕（发送 hi=true）。',
  'plugins.bazarr.cfg.sources': '要查询的提供方列表，用逗号分隔，或填 `all`。',
  'plugins.bazarr.quota.402':
    '**402 或 429**（余额耗尽或达到每日上限）：Bazarr 会记录一条带有 [store.wyzie.io](https://store.wyzie.io) 链接的提示并返回空结果，因此会干净地回退到你的其他提供方。不会崩溃。',
  'plugins.bazarr.quota.401':
    '**401**（缺少密钥）或 **403**（未知密钥，或密钥被暂停）：Bazarr 会显示一个认证错误，让你知道需要检查或重新输入密钥。',
  'plugins.bazarr.ts.missing':
    '**Wyzie 没有出现在提供方列表中。** 请重新检查编辑 `extensions.py` 的安装步骤；该条目必须同时存在于 `provider_registry` 和 `provider_manager` 中，然后重启 Bazarr。',
  'plugins.bazarr.ts.none':
    '**未找到字幕。** 请确认该项目在 Bazarr 中有 IMDB ID，并且你启用的语言有对应的字幕。除非你有意为之，否则不要缩小 `sources` 范围。',
  'plugins.bazarr.ts.settings':
    '**设置字段缺失。** 设置步骤未应用于你的 Bazarr 版本；请与一个可正常工作的提供方设置块进行对比，然后重启。',

  'plugins.kodi.intro':
    '一款面向 **Kodi 19+（Matrix 及更高版本）**、LibreELEC 和 CoreELEC 的字幕服务。它使用 Kodi 标准的 `xbmc.subtitle.module` 扩展点，因此会在 Kodi 查找字幕的任何位置出现。',
  'plugins.kodi.before':
    '在 [store.wyzie.io/redeem](https://store.wyzie.io/redeem) 获取免费的 Wyzie API 密钥。',
  'plugins.kodi.repo.intro':
    '安装一次仓库后，Kodi 即可为你**自动更新**该插件。',
  'plugins.kodi.repo.1':
    '下载仓库安装包：[**repository.wyzie.zip**](https://kodi.wyzie.io/repository.wyzie.zip)。',
  'plugins.kodi.repo.2':
    '在 Kodi 中：**设置、插件、从 zip 文件安装**，然后选择 `repository.wyzie.zip`。如果 Kodi 阻止了它，请先启用**设置、系统、插件、未知来源**。',
  'plugins.kodi.repo.3':
    '**设置、插件、从仓库安装、Wyzie Repository、字幕服务、Wyzie Subs、安装。**',
  'plugins.kodi.repo.4':
    '**设置、播放器、语言、默认字幕服务**，然后选择 **Wyzie Subs**。',
  'plugins.kodi.repo.5': '打开 Wyzie Subs 插件设置并粘贴你的 **API 密钥**。',
  'plugins.kodi.zip.intro':
    '如果你不想添加仓库，可使用此方式。注意：zip 安装**不会**自动更新。',
  'plugins.kodi.zip.1':
    '获取插件 zip：`service.subtitles.wyzie-<version>.zip`。如需自行构建，请克隆 [wyzie-plugins 仓库](https://github.com/wyziedevs/wyzie-plugins)（`git clone https://github.com/wyziedevs/wyzie-plugins.git`），并将其中的 `kodi/` 文件夹压缩成 zip，使其根目录包含 `addon.xml`。',
  'plugins.kodi.zip.2':
    '在 Kodi 中：**设置、插件、从 zip 文件安装**，然后选择该 zip。如果 Kodi 阻止了它，请先启用**设置、系统、插件、未知来源**。',
  'plugins.kodi.zip.3':
    '**设置、播放器、语言、默认字幕服务**，然后选择 **Wyzie Subs**。',
  'plugins.kodi.zip.4': '打开 Wyzie Subs 插件设置并粘贴你的 **API 密钥**。',
  'plugins.kodi.cfg.key': '你的 Wyzie 密钥。必填。',
  'plugins.kodi.cfg.hi': '仅返回听障字幕（发送 hi=true）。',
  'plugins.kodi.cfg.langs':
    '语言取自 Kodi 所选的字幕语言，并自动映射为 ISO 639-1。',
  'plugins.kodi.matching.1':
    '在播放内容时，Kodi 会暴露 IMDB 编号、季和集。插件会读取这些信息，查询 `sub.wyzie.io/search`，并返回匹配的字幕。由于 Wyzie 以 ID 驱动（IMDB 和 TMDB），因此电影和剧集都能准确匹配。',
  'plugins.kodi.matching.2':
    '**手动搜索**目前会显示一条通知但不执行任何操作，因为 Wyzie 基于 ID 而非标题进行匹配。标题到 ID 的查找已列入路线图。目前请让 Kodi 在播放期间自动搜索。',
  'plugins.kodi.quota':
    '402 或 429 响应会显示一条 Kodi 弹出通知，指引你前往 [store.wyzie.io](https://store.wyzie.io) 充值或订阅。',
  'plugins.kodi.ts.notoffered':
    '**播放期间未提供 Wyzie。** 请确认它已被设为**默认字幕服务**，并且正在播放的项目有 IMDB ID。',
  'plugins.kodi.ts.key': '**密钥无效。** 重新打开插件设置并重新粘贴你的密钥。',
  'plugins.kodi.ts.episode':
    '**剧集没有任何字幕。** 请确认 Kodi 为该文件提供了正确的季和集元数据；经过刮削的媒体库项目效果最佳。',
};

export default messages;
