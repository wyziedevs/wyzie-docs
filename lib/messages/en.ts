const messages: Record<string, string> = {
  // Navigation
  'nav.language': 'Language',

  // Index / Landing Page
  'index.subtitle':
    'Wyzie is a toolset for scraping subtitles and anything in between.',
  'index.cta.start': 'Get Started',
  'index.cta.store': 'Check it Out',

  'index.card.keys.title': 'Free API Keys',
  'index.card.keys.body':
    'Grab a free API key at store.wyzie.io/redeem with a quick email verification (Gmail, Outlook, Yahoo, iCloud, Proton, and other major providers). 1,000 requests/day at no cost. Paid plans available for higher usage.',

  'index.card.ai.title': 'AI Translation',
  'index.card.ai.body':
    'Translate any subtitle into 80+ languages on demand. The SRT streams back in order as batches finish, so the first lines arrive quickly. Available on Pro keys.',

  'index.card.reliable.title': 'Reliable',
  'index.card.reliable.body':
    'We pride ourselves on our consistent uptime and (almost) daily updates as well as fast caching.',

  'index.card.simple.title': 'Simplicity Redefined',
  'index.card.simple.body':
    'Easy to implement, easy to use. Wyzie is designed to be as simple as possible.',

  // Donate Page
  'donate.title': 'Please Donate',
  'donate.body':
    "Hello user, Wyzie is kind of relying on donations now (which I barely get) and I am 16 with a part time job and sometimes my bill for running the public API exceeds 100$ a month. I can't continue to support this if i don't get external help, I am truly sorry but this project has grown beyond what I originally could support out of my pocket.",
  'donate.cta': 'Support Wyzie',

  // Subs Intro Page
  'subs.intro.title': 'Intro to Wyzie Subs',
  'subs.intro.p1':
    'Wyzie Subs is a subtitle scraping API with a free tier. There are two ways to make requests to the API: using our NPM package or directly fetching the Wyzie API itself. I recommend using our package, but some may find the types cumbersome. In order to use the API, you must first make that decision.',
  'subs.intro.note.ai':
    'AI Translation is live for Pro keys. Any title, 80+ target languages, streamed back in subtitle order as batches finish.',
  'subs.intro.important.apikey':
    'An API key is required for all requests. Get a free key at [store.wyzie.io/redeem](https://store.wyzie.io/redeem) (email verification, 1,000 requests/day). For higher usage, [Pro and top-up plans](https://store.wyzie.io) are available. See the API Keys page for details.',
  'subs.intro.note.npm':
    'We strongly recommend the NPM package if you are familiar with TypeScript or JavaScript',
  'subs.intro.btn.npm': 'NPM Package',
  'subs.intro.btn.direct': 'Direct Fetching',

  'subs.intro.protect.h2': 'Protecting Your API Key',
  'subs.intro.protect.important':
    "**Real incident:** we have seen developers paste their key directly into a streaming site's frontend JavaScript. Within hours, an unrelated party scraped it out of the JS bundle and used it until the daily limit or paid balance was exhausted. Quota lost this way is not refundable and is treated as the key owner's responsibility under our Terms.",
  'subs.intro.protect.p1':
    'Your API key should be kept private and **never** appear in:',
  'subs.intro.protect.item1':
    'Browser JavaScript (anything served to a script tag)',
  'subs.intro.protect.item2':
    'Mobile app binaries (Android/iOS, including obfuscated ones)',
  'subs.intro.protect.item3': 'Browser extensions',
  'subs.intro.protect.item4':
    'Electron / desktop apps distributed to end users',
  'subs.intro.protect.item5':
    'Public Git repositories, gists, paste sites, or screenshots',
  'subs.intro.protect.p2':
    "If the key reaches an end user's machine, treat it as public. There are two safe patterns:",
  'subs.intro.protect.opt1.h3': 'Option 1: Use Wyzie Worker',
  'subs.intro.protect.opt1.p1':
    'Wyzie Worker is a lightweight Cloudflare Worker proxy that injects your API key server-side. Deploy it to Cloudflare Workers and set two secrets: `NITRO_API_TOKEN` (your Wyzie API key) and `NITRO_WORKER_KEY` (a secret you choose). Every request to the worker must send `Authorization: Bearer <NITRO_WORKER_KEY>`; without it the worker answers 401, and if `NITRO_WORKER_KEY` is not set it refuses every request with 503. The worker key must stay server-side too, so call the worker from your own backend, never from browser or app code. The worker forwards each request to sub.wyzie.io with your API key attached.',
  'subs.intro.protect.opt2.h3': 'Option 2: Build Your Own Proxy',
  'subs.intro.protect.opt2.p1':
    "If you'd rather not use Wyzie Worker, you can build a simple server-side proxy in any framework. The idea is the same: your backend receives requests from your client, appends the API key, and forwards them to sub.wyzie.io.",

  // Subs Sources Page
  'subs.sources.title': 'Wyzie Subs Sources',
  'subs.sources.p1':
    'Wyzie Subs aggregates subtitles from multiple providers. Source availability can vary depending on provider status or if a source is down. I am always looking for new sources reach out to suggest one.',

  'subs.sources.using.h2': 'Using Sources',
  'subs.sources.using.bullet1':
    'Use source=all to query all enabled sources simultaneously',
  'subs.sources.using.bullet2': 'Default source is charlie if not specified',
  'subs.sources.using.bullet3':
    'Multiple sources can be specified as a comma-separated list',

  'subs.sources.api.h2': 'API Endpoint',
  'subs.sources.api.p1':
    'You can programmatically fetch the list of currently enabled sources and their plan tier:',
  'subs.sources.api.free': 'sources any key can query, including free keys.',
  'subs.sources.api.paid': 'sources that require a Pro key.',
  'subs.sources.api.allFree':
    'when true, every enabled source is available to all keys and paid is empty.',

  'subs.sources.scope.h3': 'Scoping to a key',
  'subs.sources.scope.p1':
    'Pass your API key to get the sources that key can actually use:',
  'subs.sources.scope.p2':
    'This adds key-specific fields without consuming a request from your quota:',
  'subs.sources.scope.available': 'sources this key can query right now.',
  'subs.sources.scope.restricted':
    'enabled sources this key cannot query (upgrade to Pro to unlock them).',
  'subs.sources.scope.keyType': 'free or paid.',
  'subs.sources.scope.keyValid':
    'is false when the key is malformed or not found, and null when the key could not be verified (in which case available and restricted are omitted).',

  'subs.sources.details.h2': 'Source Details',

  'subs.sources.opensubtitles.desc':
    'The largest subtitle database online. Supports movies and TV shows across a wide range of languages. Uses the official OpenSubtitles REST API.',
  'subs.sources.opensubtitles.content': 'Movies & TV shows',
  'subs.sources.opensubtitles.languages': 'Extensive multilingual support',
  'subs.sources.opensubtitles.formats': 'SRT, ASS, SSA, VTT, SUB, and more',

  'subs.sources.subdl.desc':
    'A community-driven subtitle site with a broad selection of movies and TV shows.',
  'subs.sources.subdl.content': 'Movies & TV shows',
  'subs.sources.subdl.languages': 'Extensive multilingual support',
  'subs.sources.subdl.formats': 'SRT, ASS, SSA, VTT, SUB, and more',

  'subs.sources.subf2m.desc':
    'A large subtitle repository with extensive language coverage for movies and TV shows.',
  'subs.sources.subf2m.content': 'Movies & TV shows',
  'subs.sources.subf2m.languages': 'Extensive multilingual support',
  'subs.sources.subf2m.formats': 'SRT, ASS, SSA, VTT, SUB, and more',

  'subs.sources.podnapisi.desc':
    'One of the oldest subtitle databases. Well-curated collection covering movies and TV shows.',
  'subs.sources.podnapisi.content': 'Movies & TV shows',
  'subs.sources.podnapisi.languages': 'Extensive multilingual support',
  'subs.sources.podnapisi.formats': 'SRT, ASS, SSA, VTT, SUB, and more',

  'subs.sources.animetosho.desc':
    'Scrapes anime subtitle attachments directly from torrent releases indexed on AnimeTosho.',
  'subs.sources.animetosho.content': 'Anime (TV shows)',
  'subs.sources.animetosho.languages':
    'Japanese, English, and others depending on the release',
  'subs.sources.animetosho.formats': 'ASS, SRT, SSA, and others',
  'subs.sources.animetosho.note':
    'AnimeTosho is scheduled to shut down in May 2026.',

  'subs.sources.gestdown.desc':
    'Provides subtitles for TV shows via the Gestdown API with broad language support.',
  'subs.sources.gestdown.content': 'TV shows only',
  'subs.sources.gestdown.languages': 'Extensive multilingual support',
  'subs.sources.gestdown.formats': 'SRT, ASS, and more',

  'subs.sources.jimaku.desc':
    'Scrapes jimaku.cc, a community-maintained repository of anime subtitle files. Matches titles using the TMDB API.',
  'subs.sources.jimaku.content': 'Anime (movies & TV shows)',
  'subs.sources.jimaku.languages':
    'Primarily Japanese; also English, Chinese, and more depending on available files',
  'subs.sources.jimaku.formats': 'SRT, ASS, SSA, VTT, SUB, and others',

  'subs.sources.kitsunekko.desc':
    'Scrapes directory listings from kitsunekko.net, a dedicated anime subtitle repository. Matches titles using the TMDB API.',
  'subs.sources.kitsunekko.content': 'Anime (TV shows)',
  'subs.sources.kitsunekko.languages':
    'English and Japanese subtitle directories',
  'subs.sources.kitsunekko.formats': 'SRT, ASS, SSA, VTT, SUB, and others',

  'subs.sources.yify.desc':
    'Scrapes yifysubtitles.ch for subtitles matched by IMDB ID. Movies only.',
  'subs.sources.yify.content': 'Movies only (TV shows are not supported)',
  'subs.sources.yify.languages':
    'Extensive multilingual support (Albanian, Arabic, English, French, Spanish, and many more)',
  'subs.sources.yify.formats': 'SRT (delivered inside a ZIP archive)',

  'subs.sources.ajatttools.desc':
    'Fetches subtitles from the Ajatt-Tools/kitsunekko-mirror GitHub repository. Organized by media type. Matches titles using the TMDB API.',
  'subs.sources.ajatttools.content': 'Anime & drama (TV shows and movies)',
  'subs.sources.ajatttools.languages':
    'Primarily Japanese; also English, Chinese, and others',
  'subs.sources.ajatttools.formats': 'SRT, ASS, SSA, VTT, SUB, and others',

  'subs.sources.ai.desc':
    'Not a scraper. AI-translated SRT generated on demand from the best available source subtitle. Pro keys only. See the AI Translation guide for full details.',
  'subs.sources.ai.content': 'Anything Wyzie can find a text subtitle for',
  'subs.sources.ai.languages': '80+ target languages',
  'subs.sources.ai.formats': 'SRT only',

  // Subs Package Page
  'subs.pkg.title': 'Using the Wyzie NPM Package',
  'subs.pkg.p1':
    'The Wyzie Subs NPM package provides a simple and easy-to-use interface for searching and fetching subtitles.',
  'subs.pkg.install.h2': 'Installation',
  'subs.pkg.important':
    'An API key is required for all requests. Get a free key at [store.wyzie.io/redeem](https://store.wyzie.io/redeem) and pass it via the key parameter. See the API Keys page for details.',
  'subs.pkg.usage.h2': 'Usage',
  'subs.pkg.params.h3': 'Parameters',
  'subs.pkg.params.note':
    'For more information (or if you are stuck), please visit the [Wyzie Subs homepage](https://sub.wyzie.io).',

  'subs.pkg.param.tmdb':
    'TMDB ID of the movie or TV show (tmdb_id or imdb_id is required).',
  'subs.pkg.param.imdb':
    'IMDB ID of the movie or TV show (imdb_id or tmdb_id is required).',
  'subs.pkg.param.format':
    'File formats to return (e.g., srt, ass). Accepts a list.',
  'subs.pkg.param.season': 'Season number (requires episode).',
  'subs.pkg.param.episode': 'Episode number (requires season).',
  'subs.pkg.param.language':
    'ISO 639-1 codes for subtitle language. Accepts a list.',
  'subs.pkg.param.encoding':
    'Character encoding filter (e.g., utf-8, latin-1).',
  'subs.pkg.param.hi':
    'When true, returns only hearing-impaired subtitles. Sources that do not flag hearing-impaired subtitles return nothing.',
  'subs.pkg.param.source':
    'Subtitle providers to query by codename (all for every live source your key can use; default charlie).',
  'subs.pkg.param.release': 'Release/scene filters (accepts a list).',
  'subs.pkg.param.filename':
    'Filename filters; aliases file and fileName are supported.',
  'subs.pkg.param.origin': 'Content origin filter (e.g., WEB, BLURAY, DVD).',
  'subs.pkg.param.key':
    'Your API key (required). Get one free at store.wyzie.io/redeem.',
  'subs.pkg.param.refresh':
    'Bypass cache and fetch fresh results from sources.',

  'subs.pkg.helpers':
    "The package also ships lightweight TMDB helpers: searchTmdb, getTvDetails, and getSeasonDetails for quickly finding IDs before hitting /search. getSources returns the codenames of the live sources (a source paused by its health checks is left out until it recovers), and getSourcesInfo returns the full /sources response with tiers, and, given a key, which sources that key can use. withDownloadOptions adds download options (WebVTT output, timing fixes, a second language, and more) to a result's url.",
  'subs.pkg.types.h3': 'Types',
  'subs.pkg.type.search': 'All valid parameters recognized by the API.',
  'subs.pkg.type.query':
    'All parameters (optional and required) available for the wyzie-subs API.',
  'subs.pkg.type.subtitle':
    'All returned values from the API with their respective types.',
  'subs.pkg.type.sources': 'Response type from the /sources endpoint.',
  'subs.pkg.type.download':
    'Options for withDownloadOptions: to, offset, fps, plain, and (Pro) sdh, clean, dual.',
  'subs.pkg.types.end':
    'Our types are very simple and well-documented. See [src/types.ts](https://github.com/wyziedevs/wyzie-lib/blob/main/src/types.ts) in the wyzie-lib repository.',
  'subs.pkg.config.h3': 'Configuration',
  'subs.pkg.config.p1':
    'One user asked on Github for a configurable API hostname and I was like bruh that sounds like a good idea so below is the usage. Love ya guys!',

  // Subs Direct Page
  'subs.direct.title': 'Directly Fetching Wyzie Subs',
  'subs.direct.caution':
    'I strongly recommend using the NPM package as it is easier and more reliable.',
  'subs.direct.p1':
    "If you have decided against using the NPM package, then let's get started. I will only be going over API parameters and data returned by the API. How you request the API is entirely up to you.",
  'subs.direct.important':
    'An API key is required for all requests. Get a free key at [store.wyzie.io/redeem](https://store.wyzie.io/redeem) and include it as &key=YOUR_KEY in every request. See the API Keys page for details.',

  'subs.direct.params.h3': 'Parameters',
  'subs.direct.param.id': 'TMDB or IMDB ID of the show or movie (required).',
  'subs.direct.param.seasonEpisode':
    'Season and episode for TV searches. Both must be present together.',
  'subs.direct.param.language':
    'Language filter (ISO 639-1 codes). Multiple values are comma-separated.',
  'subs.direct.param.format':
    'Subtitle formats to return. Multiple values allowed.',
  'subs.direct.param.hi':
    'When true, returns only hearing-impaired subtitles (it is a filter, not a preference). Sources that do not flag hearing-impaired subtitles return nothing.',
  'subs.direct.param.encoding': 'Character encoding filter.',
  'subs.direct.param.source':
    'Subtitle providers to query (all queries every source your key can use; default charlie).',
  'subs.direct.param.release':
    'Release or scene name filters (comma-separated).',
  'subs.direct.param.file':
    'Filename filters (aliases: file, filename, fileName).',
  'subs.direct.param.origin':
    'Content origin filter, comma-separated (e.g., WEB, BLURAY, DVD).',
  'subs.direct.param.key':
    'Your API key (required). Get one free at store.wyzie.io/redeem.',
  'subs.direct.param.refresh':
    'Bypass cache and fetch fresh results. Use when sources may have updated.',
  'subs.direct.param.page':
    'Page to return, starting at 1. Only used together with limit.',
  'subs.direct.param.limit':
    'Results per page (1 to 200). Without it, every result comes back in one response.',
  'subs.direct.important.imdb':
    "When using an IMDB ID, ensure that the first two characters ('tt') are included at the beginning of the ID.",

  'subs.direct.data.h3': 'Data Returned',
  'subs.direct.data.id': 'The ID of the subtitle file.',
  'subs.direct.data.url':
    'Download link on https://sub.wyzie.io/c/... carrying an encrypted tok parameter. Each download costs 1 request; see Downloading Subtitles below.',
  'subs.direct.data.flagUrl': "URL to the flag of the language's locale.",
  'subs.direct.data.format': 'The format of the subtitle file.',
  'subs.direct.data.encoding': 'The character encoding of the subtitle file.',
  'subs.direct.data.display': 'The language of the subtitle, capitalized.',
  'subs.direct.data.language': 'The ISO 639-1 code of the language.',
  'subs.direct.data.media': 'The name of the media that the subtitles are for.',
  'subs.direct.data.isHearingImpaired':
    'Boolean representing if the subtitle is hearing impaired accessible.',
  'subs.direct.data.source': 'Which source the subtitle was scraped from.',
  'subs.direct.data.release': 'Primary release name.',
  'subs.direct.data.releases':
    'Other release names compatible with the subtitle.',
  'subs.direct.data.fileName': 'Original filename when available.',
  'subs.direct.data.downloadCount':
    'Number of downloads on the source platform (if available).',
  'subs.direct.data.origin': 'Content origin (e.g., WEB, BluRay, DVD).',
  'subs.direct.data.matchedRelease':
    'Release value that matched your filter (if provided).',
  'subs.direct.data.matchedFilter':
    'The user-supplied filter that matched (if provided).',
  'subs.direct.data.ai':
    'true if the entry is an AI-translated subtitle, false for normal scraped subtitles. Use it as a client-side filter when you only want one or the other.',
  'subs.direct.download.p':
    'Every url in a /search response points to https://sub.wyzie.io/c/... and carries a tok query parameter. tok is encrypted, so it does not reveal your API key, and it stays valid for 60 days. Use the URL as-is. A search costs 1 request and each download costs 1 more, billed to the key that ran the search. When that key cannot pay for a download, the link is refused:',
  'subs.direct.dl.p':
    'Add these to a download URL to change what it returns. They work on every download, cached or not, and cost nothing extra (except dual, below). The X-Subtitle-Transforms response header lists what was applied, with counts.',
  'subs.direct.dl.param.to':
    "Output format: `srt` or `vtt`. `vtt` plays directly in a browser `<track>` element. Default: the file's own format.",
  'subs.direct.dl.param.offset':
    'Shift every line by this many seconds (negative is earlier).',
  'subs.direct.dl.param.fps':
    'Fix drift from a subtitle made for another release: `SUBTITLE_FPS:VIDEO_FPS`, e.g. `25:23.976` for a PAL subtitle on a film-rate video.',
  'subs.direct.dl.param.plain':
    'Plain, tidy lines: styling codes such as `{\\an8}` and `<font>` removed, empty and repeated lines dropped, lines in time order, small overlaps trimmed.',
  'subs.direct.dl.param.sdh':
    'Remove hearing-impaired text: `[DOOR SLAMS]`, `(sighs)`, `JOHN:` speaker labels and ♪ lyrics.',
  'subs.direct.dl.param.clean':
    'Mask strong profanity, keeping the first letter (`f***`). English files only.',
  'subs.direct.dl.param.dual':
    "Add a second language (ISO 639-1 code) under each line, lined up with this file's timing. Costs 1 extra request, only when a match is found; otherwise the file comes back alone with `X-Dual: unavailable`.",
  'subs.direct.dl.after':
    'Options combine, e.g. `&to=vtt&sdh=strip&offset=-1.5`. Links already carry `format`, `encoding`, `id` and (for episodes) `season` and `episode`: leave those as they are. `autoUnzip=false` returns an archive as-is.',
  'subs.direct.headers.p':
    'Every /search response includes an X-Total-Count header with the total number of results. When you pass limit, it also includes:',
  'subs.direct.header.xpage': 'the page returned.',
  'subs.direct.header.xperpage': 'the limit in effect.',
  'subs.direct.header.xtotalpages': 'the total number of pages.',
  'subs.direct.headers.rate':
    'Responses also carry X-RateLimit-Limit, X-RateLimit-Remaining, and X-RateLimit-Reset. Treat them as approximate: usage is settled with billing in short batches, so they can trail your real usage slightly.',

  // Subs Translate Page
  'subs.translate.title': 'AI Subtitle Translation',
  'subs.translate.important':
    "AI translation is a **Pro feature**; free keys get 403 Upgrade required. Each call costs **100 requests** from your key's balance, cache hits included. If a call fails before any output (no subtitle found, a search or download failure, or the server is busy), the 100 requests are refunded automatically.",
  'subs.translate.p1':
    'Wyzie can translate any subtitle into 80+ languages on the fly. The translated SRT is streamed back in order as batches finish, so the first cues arrive quickly instead of after the whole file is done. The complete translation is cached for 30 days, so later requests for the same title, episode, and target language are served from the cache.',

  'subs.translate.ways.h2': 'Two Ways to Use It',
  'subs.translate.way1.h3': '1. Pick a Language From a Search Response',
  'subs.translate.way1.p1':
    'For Pro keys, every /search response also includes AI translation rows with "ai": true and a url that points at /translate: one per supported language, or only the languages in your language= filter. Free keys never get these rows. Treat the AI rows like any other subtitle row in your UI: when the user clicks one, fetch the URL.',
  'subs.translate.way1.filter':
    'If you want to hide the AI rows from your UI, filter them out:',
  'subs.translate.way2.h3': '2. Call /translate Directly',

  'subs.translate.param.id': 'TMDB or IMDB ID (required).',
  'subs.translate.param.target':
    'Target language (required): a name from the supported list (e.g. Spanish, Japanese, Portuguese (Brazil)) or its code (e.g. es, ja, pt-BR).',
  'subs.translate.param.seasonEpisode':
    'For TV. Both must be present together.',
  'subs.translate.param.key':
    'Your API key. Use tk instead if you got the URL from /search.',
  'subs.translate.param.tk':
    'Encrypted token from the AI row URLs in /search. Works like key, does not reveal your API key, and stays valid for 60 days.',

  'subs.translate.headers.p':
    'The response body is an SRT file streamed as text/plain; charset=utf-8. Useful response headers:',
  'subs.translate.header.xcache':
    'HIT-REDIS if served from cache, MISS if generated fresh.',
  'subs.translate.header.xsourcelang':
    'language of the subtitle the translator used as input.',
  'subs.translate.header.xtargetlang': 'echo of your target param.',
  'subs.translate.header.xsourceprovider':
    'which scraper supplied the source subtitle.',

  'subs.translate.how.h2': 'How It Works',
  'subs.translate.how.step1':
    'Wyzie searches the normal sources for a text subtitle, preferring an English SRT when available. VTT, ASS, SSA, and SUB files are converted to SRT first.',
  'subs.translate.how.step2':
    'The SRT is split into batches of up to about 3,800 characters and translated with Google Translate, 4 batches at a time.',
  'subs.translate.how.step3':
    'Output is streamed back in SRT order as batches finish, so the first cues arrive quickly. Players that accept a streaming SRT body can start showing the first lines before the rest are done.',
  'subs.translate.how.step4':
    'The complete translation is cached in Redis for 30 days, keyed by id, season, episode, and target.',

  'subs.translate.languages.h2': 'Supported Target Languages',
  'subs.translate.languages.p':
    '80+ languages including all major European, Asian, African, and Middle Eastern languages. Pass a name from the list (Spanish, Portuguese (Brazil)) or its code (es, pt-BR). For Pro keys, the full list is also returned as ai: true rows in any /search response without a language= filter, which is the canonical source of truth.',

  'subs.translate.limitations.h2': 'Limitations',
  'subs.translate.limit1':
    'AI translation needs a text subtitle to start from. VTT, ASS, SSA, and SUB sources are converted to SRT first; if no text subtitle exists, the call returns 404 No subtitle found and the 100 requests are refunded.',
  'subs.translate.limit2':
    'Translation quality depends on the source subtitle. A poorly-timed or mistyped source produces a poorly-timed or mistyped translation.',
  'subs.translate.limit3':
    'Some users may want to opt out of AI rows entirely. Filter on ai === false in your client.',
  'subs.translate.limit4':
    'Translations are billed on cache hits too. Whether freshly generated or served from the 30-day cache, each /translate call costs 100 requests. Only calls that fail before any output are refunded.',

  // Subs API Keys Page
  'subs.keys.title': 'API Keys',
  'subs.keys.p1':
    'Wyzie Subs requires an API key for all requests. A free tier covers most use cases; paid plans handle heavier usage.',

  'subs.keys.tiers.h2': 'Tiers',
  'subs.keys.tier.free': 'Free (email verification)',
  'subs.keys.tier.free.limit': '1,000 requests / UTC day',
  'subs.keys.tier.pro': '$5 one-time',
  'subs.keys.tier.pro.limit': '400,000 requests',
  'subs.keys.tier.topup': 'from $0.0625 / 5K',
  'subs.keys.tier.topup.limit': 'Adds to your paid balance',
  'subs.keys.tiers.end':
    "Pro and top-ups don't expire. Prefer recurring? A $32/month subscription gives 6,000,000 requests/month (card only). See store.wyzie.io for full pricing and the dashboard.",

  'subs.keys.free.h2': 'Getting a Free Key',
  'subs.keys.free.p':
    'Visit [store.wyzie.io/redeem](https://store.wyzie.io/redeem):',
  'subs.keys.free.step1': 'Solve a quick Cloudflare Turnstile captcha.',
  'subs.keys.free.step2':
    'Enter an address from a major personal email provider (Gmail, Outlook/Hotmail, Yahoo, iCloud, AOL, Proton, and others). Disposable email domains are rejected.',
  'subs.keys.free.step3': 'Enter the 6-digit code we email you.',
  'subs.keys.free.step4':
    'You receive an API key that looks like wyzie-abc123...',
  'subs.keys.free.gmail':
    'Each email address and each network can claim one free key; a second request returns 409. Lost your key? Use "Forgot key" on the [dashboard](https://store.wyzie.io/dashboard) to have it re-sent.',

  'subs.keys.pro.h2': 'Upgrading to Pro',
  'subs.keys.pro.p1':
    'Visit [store.wyzie.io](https://store.wyzie.io) and check out with the same email you used for your free key. Your existing wyzie-... key is upgraded in place with 400K paid requests added on top. Prefer recurring? A $32/month subscription adds a 6,000,000-request monthly allowance (card only) instead.',
  'subs.keys.pro.p2':
    'If you check out with a brand new email (no prior key), a fresh wyzie-... key is generated and emailed to you.',

  'subs.keys.protect.h2': 'Keep Your Key Off the Client',
  'subs.keys.protect.important':
    "**Never embed your API key in client-side code.** Browser JavaScript, mobile apps, browser extensions, Electron-style desktop apps, and public Git repositories are all considered client-side. Anything you ship to an end user can be inspected by them, and we have seen real cases where users pasted their key into a streaming site's frontend, only to have a third party scrape the JS bundle and drain the request balance within hours. Quota consumed this way is not refundable.",
  'subs.keys.protect.p2': 'Two safe ways to use the key from a client app:',
  'subs.keys.protect.option1':
    'Use [Wyzie Worker](https://github.com/wyziedevs/wyzie-worker): a free Cloudflare Worker proxy that holds your API key as the `NITRO_API_TOKEN` secret. Every call to it must send `Authorization: Bearer <NITRO_WORKER_KEY>`, a second secret you set, so route your client through your own backend and keep the worker key server-side as well.',
  'subs.keys.protect.option2':
    'Run your own proxy: any backend endpoint that appends the key before forwarding to sub.wyzie.io works. See the Intro page for a 10-line example.',
  'subs.keys.protect.devtools':
    'If the key shows up in a network tab in DevTools, it is exposed. Assume it is public and rotate it from your [dashboard](https://store.wyzie.io/dashboard).',

  'subs.keys.using.h2': 'Using Your Key',
  'subs.keys.using.p': 'Append &key=YOUR_KEY to every API request:',
  'subs.keys.using.npm.h3': 'NPM Package',

  'subs.keys.limit.h2': 'Hitting the Limit',
  'subs.keys.limit.p':
    'A search costs 1 request and each subtitle download costs 1 request, so searching once and downloading one file uses 2. AI translation costs 100 requests per call.',
  'subs.keys.limit.free':
    '**Free tier** depleted -> searches and download links return 429 Daily request limit reached, with reset_at in the JSON and a Retry-After header. The daily cap of 1,000 requests resets at UTC midnight.',
  'subs.keys.limit.paid':
    '**Paid balance** exhausted -> searches and download links return 402 with a top-up link in the JSON. Top up at [store.wyzie.io/topup](https://store.wyzie.io/topup) or enable **auto top-up** in your dashboard to refill automatically when your balance crosses a threshold you set.',
  'subs.keys.hold.p1':
    'Keys that send very high volume mostly from datacenter or hosting IPs are paused automatically. A paused key gets 403 Key on hold on every request, with a reinstate link (https://store.wyzie.io/verify) and a support link (https://store.wyzie.io/contact) in the JSON.',
  'subs.keys.hold.p2':
    'To reinstate the key right away, verify the website you use it on at [store.wyzie.io/verify](https://store.wyzie.io/verify) with a DNS TXT record or a meta tag. A key with a verified site is never auto-paused again, so busy sites can verify before they are ever paused.',
  'subs.keys.hold.p3':
    'No website, for example a backend service or an app? [Contact support](https://store.wyzie.io/contact) to get the key reinstated.',

  'subs.keys.files.h2': 'What Is in the Files',
  'subs.keys.files.adfilter':
    '**Ad filtering** – every subtitle served through sub.wyzie.io has provider advertising cues stripped (OpenSubtitles banners, betting plugs, "watch free at ..." lines). SRT cues are renumbered so nothing skips. Every provider, OpenSubtitles included, is served through sub.wyzie.io so the filter applies to all of them.',
  'subs.keys.files.promo':
    '**Free and dev keys** get one short cue at the very start of each file (0–6 s) pointing at [store.wyzie.io](https://store.wyzie.io). Paid keys receive clean files with no cue.',

  'subs.keys.faq.h2': 'FAQ',
  'subs.keys.faq.q1': 'I lost my key. Can I get a new one?',
  'subs.keys.faq.a1':
    'Open the [dashboard](https://store.wyzie.io/dashboard) and use "Forgot key" with your registered email; we\'ll re-send your existing key. If you think the key leaked, rotate it from the dashboard instead.',
  'subs.keys.faq.q2': 'Can I use one key in multiple projects?',
  'subs.keys.faq.a2': 'Yes. Your key works anywhere you call the API.',
  'subs.keys.faq.q3': 'Will my key ever expire?',
  'subs.keys.faq.a3':
    'No. Free and paid keys both have no expiry. Free keys are capped per day; paid balance persists until you use it.',
  'subs.keys.faq.q4': 'Is auto top-up safe?',
  'subs.keys.faq.a4':
    'You set a monthly spend cap. We never charge above that, and one-click disable is in every confirmation email plus your dashboard.',

  // Proxy Intro Page
  'proxy.intro.title': 'Intro to Wyzie Proxy',
  'proxy.intro.note':
    'The production version of Wyzie Subs no longer uses this proxy instead using [i6.shark](https://github.com/wyziedevs/i6.shark).',
  'proxy.intro.p1':
    'Wyzie Proxy is a powerful proxy API that allows you to make requests to any website without CORS or other restrictions. Since Wyzie Proxy is made with Nitro, it can be hosted on any of the following platforms: AWS Amplify, Azure, Cloudflare, Netlify, Stormkit, Vercel, Zeabur.',
  'proxy.intro.btn.hosting': 'Hosting',
  'proxy.intro.btn.check': 'Check it Out',

  // Proxy Hosting Page
  'proxy.hosting.title': 'Hosting Wyzie Proxy',
  'proxy.hosting.p1':
    'Building Wyzie Proxy is easier than breathing, thanks to Nitro. First, clone the repository of Wyzie Proxy using:',
  'proxy.hosting.p2': 'Then, install all the necessary packages with:',
  'proxy.hosting.p3':
    'After all packages are installed, you can build the proxy:',
  'proxy.hosting.p4':
    'The output will be generated in the /.output/server folder. If you are deploying to Cloudflare Workers, copy and paste the index.mjs file to the worker; otherwise, you can deploy the files as normal.',

  // i6.shark Intro Page
  'i6shark.intro.title': 'Intro to i6.shark',
  'i6shark.intro.p1':
    'i6.shark is an IPv6 proxy server that allows you to make HTTP requests from randomly generated IPv6 addresses in a /48 subnet. This is the proxy currently powering Wyzie Subs in production.',
  'i6shark.intro.p2':
    'A /48 subnet has 1,208,925,819,614,629,174,706,176 (1.2 x 10^24) IPv6 addresses, making it virtually impossible to block through traditional IP banning. Using a single subnet means those who really want to block you can block your ASN address, so be careful with that.',
  'i6shark.intro.btn.hosting': 'Hosting',
  'i6shark.intro.btn.github': 'GitHub',

  'i6shark.intro.features.h2': 'Features',
  'i6shark.intro.feature1':
    '**Random IPv6 Generation**: Creates random IPv6 addresses from your /48 prefix for each request',
  'i6shark.intro.feature2':
    '**Full HTTP Method Support**: GET, POST, PUT, DELETE, and all other HTTP methods',
  'i6shark.intro.feature3':
    '**HMAC-SHA256 Authentication**: Secure API key authentication using user-agent based tokens',
  'i6shark.intro.feature4':
    '**Intelligent IP Pool Management**: Automatic IP rotation with configurable pool size. Smart IP lifecycle management. Per-IP request counting. Unused IP cleanup based on inactivity threshold.',
  'i6shark.intro.feature5':
    '**Advanced Request Handling**: Custom header forwarding. Cloudflare and CDN header stripping. Support for multiple URL parameter formats. Optional fallback to system default IP.',
  'i6shark.intro.feature7':
    '**Automatic Maintenance**: Periodic IP pool flushing. Subnet validation and cleanup. Connection pooling and keepalive optimization.',
  'i6shark.intro.feature8':
    '**High Performance**: Concurrent request handling with buffer pooling. Configurable timeouts and connection limits. Efficient IPv6 address management.',
  'i6shark.intro.feature9':
    '**Debug Mode**: Detailed logging for troubleshooting and monitoring',

  'i6shark.intro.requirements.h2': 'Requirements',
  'i6shark.intro.req1': 'Go 1.22 or higher',
  'i6shark.intro.req2':
    'Linux/Unix system with IPv6 support (preferably Ubuntu)',
  'i6shark.intro.req3':
    'Root privileges (for port 80 binding and IPv6 manipulation)',
  'i6shark.intro.req4': 'IPv6 /48 subnet allocation from your hosting provider',

  'i6shark.intro.providers.h2': 'Hosting Providers',
  'i6shark.intro.providers.p1':
    'The following providers are known to offer /48 IPv6 subnets:',

  // i6.shark Hosting Page
  'i6shark.hosting.title': 'Hosting i6.shark',
  'i6shark.hosting.p1':
    'Setting up i6.shark requires a VPS with a /48 IPv6 subnet. Once configured, it runs autonomously with minimal maintenance.',

  'i6shark.hosting.steps.h2': 'Steps',
  'i6shark.hosting.step1': 'Clone the repository to /opt/i6.shark:',
  'i6shark.hosting.step2': 'Configure constants in src/consts.go:',
  'i6shark.hosting.step2.note':
    "Update SharedSecret, IPv6Prefix, and Interface to match your server. The remaining tuning constants have sensible defaults and typically don't need changes.",
  'i6shark.hosting.step3': 'Build the application:',
  'i6shark.hosting.step4': 'Create the systemd service:',
  'i6shark.hosting.step5': 'Enable and start the service:',
  'i6shark.hosting.step5.check': 'Check the status:',
  'i6shark.hosting.post':
    'The proxy server will now run automatically on boot and restart itself if it crashes.',

  'i6shark.hosting.daily.h2': 'Daily Restart (Optional)',
  'i6shark.hosting.daily.p':
    'Add a cron job to restart the server daily at a random time:',

  'i6shark.hosting.auth.h2': 'API Authentication',
  'i6shark.hosting.auth.p':
    'API tokens are generated using HMAC-SHA256 with a shared secret key. The input for key generation is the user-agent header. See the validateAPIToken function in the source code for implementation details.',

  // Plugins
  'plugins.common.required': 'Required',

  'plugins.index.intro':
    'Wyzie Subs plugs straight into the media apps you already use. Every plugin talks to the same `https://sub.wyzie.io/search` endpoint and needs a free **Wyzie API key**. Grab one at [store.wyzie.io](https://store.wyzie.io/#plans).',
  'plugins.index.tbl.stremio.for':
    'Watching in Stremio on desktop, mobile, or TV',
  'plugins.index.tbl.stremio.install':
    'Hosted add-on: paste your key, click Install',
  'plugins.index.tbl.bazarr.for':
    'Plex, Jellyfin, Emby, Sonarr, Radarr libraries',
  'plugins.index.tbl.bazarr.install':
    'Drop-in provider for your Bazarr instance',
  'plugins.index.tbl.kodi.for': 'Kodi 19+, LibreELEC, CoreELEC',
  'plugins.index.tbl.kodi.install': 'Install from zip or the Wyzie repository',
  'plugins.index.use.stremio':
    'Use **Stremio** if you watch inside the Stremio app.',
  'plugins.index.use.bazarr':
    'Use **Bazarr** if you run Plex, Jellyfin, or Emby. Bazarr downloads subtitle files to disk and your media server picks them up automatically. This is also the recommended path for Plex and Jellyfin; there is no separate native plugin.',
  'plugins.index.use.kodi':
    'Use **Kodi** for a Kodi-native subtitle service on Android TV, a Raspberry Pi, or a home theatre PC.',
  'plugins.index.shared.sources':
    '**Sources:** every source your key can use (`source=all`): charlie and lima on a free key, all seven on a Pro key.',
  'plugins.index.shared.matching':
    '**Matching:** Wyzie is driven by IMDB and TMDB IDs plus season and episode, so matches are precise for both movies and series.',
  'plugins.index.shared.quota':
    '**Quota:** when your key runs out, the plugin shows a friendly prompt linking to [store.wyzie.io](https://store.wyzie.io) instead of failing silently. Top up or subscribe and you are back in business.',
  'plugins.index.shared.languages':
    '**Languages:** 100+, selectable per plugin.',
  'plugins.index.outro':
    'Pick your platform above to get started. The source code for every plugin is in the [wyzie-plugins repository](https://github.com/wyziedevs/wyzie-plugins).',

  'plugins.stremio.intro':
    'A one-click subtitle add-on for [Stremio](https://www.stremio.com/). It queries every Wyzie source your key can use and works for both movies and series, on every platform Stremio runs on.',
  'plugins.stremio.before':
    'You need a free Wyzie API key. Get one at [store.wyzie.io/redeem](https://store.wyzie.io/redeem), or buy a Pro key or subscribe at [store.wyzie.io](https://store.wyzie.io/#plans).',
  'plugins.stremio.install.1':
    'Open [stremio.wyzie.io/configure](https://stremio.wyzie.io/configure).',
  'plugins.stremio.install.2': 'Paste your **API key**.',
  'plugins.stremio.install.3':
    'Optional: enter your preferred **languages** as ISO 639-1 codes, comma-separated (for example `en,es,fr`). Leave empty for all languages.',
  'plugins.stremio.install.4':
    'Optional: turn on **hearing-impaired** to get only hearing-impaired subtitles. Leave it off to see everything; sources that do not flag hearing-impaired subtitles return nothing while it is on.',
  'plugins.stremio.install.5':
    'Click **Install**. Stremio opens and asks you to confirm; accept, and you are done.',
  'plugins.stremio.install.after':
    'Your key and preferences are encoded into the add-on, so there is nothing else to set up. Open any movie or episode and pick a subtitle from the list.',
  'plugins.stremio.cfg.key.f': 'API key',
  'plugins.stremio.cfg.key.d': 'Your Wyzie key. Required.',
  'plugins.stremio.cfg.langs.f': 'Languages',
  'plugins.stremio.cfg.langs.d':
    'ISO 639-1 codes, comma-separated. Empty means all languages.',
  'plugins.stremio.cfg.hi.f': 'Hearing-impaired',
  'plugins.stremio.cfg.hi.d':
    'Return only hearing-impaired subtitles (sends hi=true). Off by default.',
  'plugins.stremio.cfg.note':
    'To change any of these later, re-open [stremio.wyzie.io/configure](https://stremio.wyzie.io/configure), adjust, and re-install.',
  'plugins.stremio.local':
    'Then open `http://127.0.0.1:7000/configure`, paste your key, and install into Stremio.',
  'plugins.stremio.quota':
    'If your key hits its limit, the add-on shows a single subtitle entry linking to [store.wyzie.io](https://store.wyzie.io) so you can top up or subscribe. Once you do, subtitles return immediately.',
  'plugins.stremio.ts.none':
    '**No subtitles appear.** Make sure the title has an IMDB ID in Stremio (most catalog items do) and that your chosen languages actually have subtitles for that title. Try clearing the language filter to see everything.',
  'plugins.stremio.ts.key':
    '**Invalid key, or nothing loads.** Re-open the configure page and re-paste your key; a stray space breaks it. Confirm the key works at [store.wyzie.io/dashboard](https://store.wyzie.io/dashboard).',
  'plugins.stremio.ts.episode':
    '**Series episode not matching.** Wyzie matches on season and episode; make sure Stremio is playing the correct episode entry, not a generic series page.',

  'plugins.bazarr.intro':
    '[Bazarr](https://www.bazarr.media/) manages subtitles for **Plex, Jellyfin, Emby, Sonarr, and Radarr** in one place. Adding Wyzie as a provider gives all of those servers access to every Wyzie source your key can use, through a single key.',
  'plugins.bazarr.note':
    'This is the recommended way to use Wyzie with Plex and Jellyfin. Bazarr downloads subtitle files next to your media, and your server picks them up automatically, so no separate native plugin is required.',
  'plugins.bazarr.before':
    'Get a free Wyzie API key at [store.wyzie.io/redeem](https://store.wyzie.io/redeem), and have access to your Bazarr install files (typical Docker path: `/opt/bazarr/bazarr/`).',
  'plugins.bazarr.install.1':
    'Download [bazarr/wyzie.py](https://github.com/wyziedevs/wyzie-plugins/blob/main/bazarr/wyzie.py) from the [wyzie-plugins repository](https://github.com/wyziedevs/wyzie-plugins) (or `git clone https://github.com/wyziedevs/wyzie-plugins.git`) and copy it to `bazarr/subliminal_patch/providers/wyzie.py`.',
  'plugins.bazarr.install.2':
    'Edit `bazarr/subliminal_patch/extensions.py` and add `wyzie` to **both** `provider_registry` and `provider_manager`.',
  'plugins.bazarr.install.3':
    'Edit `bazarr/list_subtitles.py` (or `bazarr/config.py`, depending on your version) to expose the `api_key`, `prefer_hi`, and `sources` settings. Copy the pattern from an existing provider such as `opensubtitlescom`.',
  'plugins.bazarr.install.4': 'Restart Bazarr.',
  'plugins.bazarr.install.5':
    'Go to **Settings, Providers, Wyzie**, paste your API key, and save.',
  'plugins.bazarr.install.after':
    'A first-class pull request upstreaming this provider into Bazarr is planned. Until then it is a drop-in file you add to your own install.',
  'plugins.bazarr.cfg.key': 'Your Wyzie key. Required.',
  'plugins.bazarr.cfg.hi':
    'Only return hearing-impaired subtitles (sends hi=true).',
  'plugins.bazarr.cfg.sources':
    'Comma-separated list of providers to query, or `all`.',
  'plugins.bazarr.quota.402':
    '**402 or 429** (balance empty or daily cap hit): Bazarr logs a note with a link to [store.wyzie.io](https://store.wyzie.io) and returns no results, so it cleanly falls back to your other providers. Nothing crashes.',
  'plugins.bazarr.quota.401':
    '**401** (missing key) or **403** (unknown key, or a key on hold): Bazarr surfaces an authentication error so you know to check or re-enter the key.',
  'plugins.bazarr.ts.missing':
    '**Wyzie does not appear in the providers list.** Re-check the install step that edits `extensions.py`; the entry must be in both `provider_registry` and `provider_manager`, then restart Bazarr.',
  'plugins.bazarr.ts.none':
    '**No subtitles found.** Confirm the item has an IMDB ID in Bazarr and that the languages you have enabled have subtitles for it. Only narrow `sources` if you intend to.',
  'plugins.bazarr.ts.settings':
    '**Settings fields missing.** The settings step was not applied for your Bazarr version; compare against a working provider settings block and restart.',

  'plugins.kodi.intro':
    "A subtitle service for **Kodi 19+ (Matrix and later)**, LibreELEC, and CoreELEC. It uses Kodi's standard `xbmc.subtitle.module` extension point, so it shows up wherever Kodi looks for subtitles.",
  'plugins.kodi.before':
    'Get a free Wyzie API key at [store.wyzie.io/redeem](https://store.wyzie.io/redeem).',
  'plugins.kodi.repo.intro':
    'Installing the repository once lets Kodi **auto-update** the add-on for you.',
  'plugins.kodi.repo.1':
    'Download the repository installer: [**repository.wyzie.zip**](https://kodi.wyzie.io/repository.wyzie.zip).',
  'plugins.kodi.repo.2':
    'In Kodi: **Settings, Add-ons, Install from zip file**, then choose `repository.wyzie.zip`. If Kodi blocks it, enable **Settings, System, Add-ons, Unknown sources** first.',
  'plugins.kodi.repo.3':
    '**Settings, Add-ons, Install from repository, Wyzie Repository, Subtitle services, Wyzie Subs, Install.**',
  'plugins.kodi.repo.4':
    '**Settings, Player, Language, Default subtitle service**, then select **Wyzie Subs**.',
  'plugins.kodi.repo.5':
    'Open Wyzie Subs add-on settings and paste your **API key**.',
  'plugins.kodi.zip.intro':
    'Use this if you would rather not add the repository. Note: a zip install does **not** auto-update.',
  'plugins.kodi.zip.1':
    'Get the add-on zip: `service.subtitles.wyzie-<version>.zip`. To build it yourself, clone the [wyzie-plugins repository](https://github.com/wyziedevs/wyzie-plugins) (`git clone https://github.com/wyziedevs/wyzie-plugins.git`) and zip its `kodi/` folder so the zip contains `addon.xml` at its root.',
  'plugins.kodi.zip.2':
    'In Kodi: **Settings, Add-ons, Install from zip file**, then choose the zip. If Kodi blocks it, enable **Settings, System, Add-ons, Unknown sources** first.',
  'plugins.kodi.zip.3':
    '**Settings, Player, Language, Default subtitle service**, then select **Wyzie Subs**.',
  'plugins.kodi.zip.4':
    'Open Wyzie Subs add-on settings and paste your **API key**.',
  'plugins.kodi.cfg.key': 'Your Wyzie key. Required.',
  'plugins.kodi.cfg.hi':
    'Only return hearing-impaired subtitles (sends hi=true).',
  'plugins.kodi.cfg.langs':
    "Languages are taken from Kodi's selected subtitle languages and mapped to ISO 639-1 automatically.",
  'plugins.kodi.matching.1':
    'While something is playing, Kodi exposes the IMDB number, season, and episode. The add-on reads those, queries `sub.wyzie.io/search`, and returns matching subtitles. Because Wyzie is ID-driven (IMDB and TMDB), matches are accurate for both movies and series.',
  'plugins.kodi.matching.2':
    '**Manual search** currently shows a notification and does nothing, because Wyzie matches on IDs, not titles. A title-to-ID lookup is on the roadmap. For now, let Kodi search automatically during playback.',
  'plugins.kodi.quota':
    'A 402 or 429 response shows a Kodi toast notification pointing you at [store.wyzie.io](https://store.wyzie.io) to top up or subscribe.',
  'plugins.kodi.ts.notoffered':
    '**Wyzie is not offered during playback.** Confirm it is set as the **Default subtitle service** and that the playing item has an IMDB ID.',
  'plugins.kodi.ts.key':
    '**Invalid key.** Re-open the add-on settings and re-paste your key.',
  'plugins.kodi.ts.episode':
    '**Nothing for an episode.** Make sure Kodi has correct season and episode metadata for the file; scraped library items work best.',
};

export default messages;
