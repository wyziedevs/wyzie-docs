const messages: Record<string, string> = {
  // Navigation
  'nav.language': 'Language',

  // Index / Landing Page
  'index.subtitle':
    'Wyzie is an open-sourced toolset for scraping subtitles and anything in between.',
  'index.cta.start': 'Get Started',
  'index.cta.store': 'Check it Out',

  'index.card.keys.title': 'Free API Keys',
  'index.card.keys.body':
    'Grab a free API key at store.wyzie.io/redeem with a quick Gmail verification. 1,000 requests/day at no cost. Paid plans available for higher usage.',

  'index.card.ai.title': 'AI Translation',
  'index.card.ai.body':
    'Translate any subtitle into 80+ languages on demand. Streams cue by cue so playback can start in seconds. Available on Pro keys.',

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
    'Wyzie Subs is a free and libre open-subtitles scraping API. There are two ways to make requests to the API: using our NPM package or directly fetching the Wyzie API itself. I recommend using our package, but some may find the types cumbersome. In order to use the API, you must first make that decision.',
  'subs.intro.note.ai':
    'AI Translation is live for Pro keys. Any title, 80+ target languages, streamed back as the translator works.',
  'subs.intro.important.apikey':
    'An API key is required for all requests. Get a free key at [store.wyzie.io/redeem](https://store.wyzie.io/redeem) (Gmail verification, 1,000 requests/day). For higher usage, [Pro and top-up plans](https://store.wyzie.io) are available. See the API Keys page for details.',
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
    'Wyzie Worker is a lightweight Cloudflare Worker proxy that injects your API key server-side. Deploy it to Cloudflare Workers and set your key as the NITRO_API_TOKEN environment variable. Then point your client requests at your worker URL instead of sub.wyzie.io - the worker forwards them with your key attached.',
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
  'subs.sources.using.bullet2':
    'Default source is opensubtitles if not specified',
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
    'Not a scraper. AI-translated SRT generated on demand from the best available source subtitle. See the AI Translation guide for full details.',
  'subs.sources.ai.content': 'Anything Wyzie can find an SRT for',
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
  'subs.pkg.param.hi': 'Boolean for hearing-impaired subtitles.',
  'subs.pkg.param.source':
    'Subtitle providers to query (all for every enabled source).',
  'subs.pkg.param.release': 'Release/scene filters (accepts a list).',
  'subs.pkg.param.filename':
    'Filename filters; aliases file and fileName are supported.',
  'subs.pkg.param.origin': 'Content origin filter (e.g., WEB, BLURAY, DVD).',
  'subs.pkg.param.key':
    'Your API key (required). Get one free at store.wyzie.io/redeem.',
  'subs.pkg.param.refresh':
    'Bypass cache and fetch fresh results from sources.',

  'subs.pkg.helpers':
    'The package also ships lightweight TMDB helpers: searchTmdb, getTvDetails, and getSeasonDetails for quickly finding IDs before hitting /search. Additionally, getSources can be used to fetch the list of currently enabled subtitle sources.',
  'subs.pkg.types.h3': 'Types',
  'subs.pkg.type.search': 'All valid parameters recognized by the API.',
  'subs.pkg.type.query':
    'All parameters (optional and required) available for the wyzie-subs API.',
  'subs.pkg.type.subtitle':
    'All returned values from the API with their respective types.',
  'subs.pkg.type.sources': 'Response type from the /sources endpoint.',
  'subs.pkg.types.end':
    'Our types are very simple and well-documented. Check out the types.ts file linked in the GitHub repository.',
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
  'subs.direct.param.hi': 'Whether to prefer hearing-impaired subtitles.',
  'subs.direct.param.encoding': 'Character encoding filter.',
  'subs.direct.param.source':
    'Subtitle providers to query (all queries every enabled source; default opensubtitles).',
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
  'subs.direct.important.imdb':
    "When using an IMDB ID, ensure that the first two characters ('tt') are included at the beginning of the ID.",

  'subs.direct.data.h3': 'Data Returned',
  'subs.direct.data.id': 'The ID of the subtitle file.',
  'subs.direct.data.url': 'The URL to the subtitle file.',
  'subs.direct.data.flagUrl': "URL to the flag of the language's locale.",
  'subs.direct.data.format': 'The format of the subtitle file.',
  'subs.direct.data.encoding': 'The character encoding of the subtitle file.',
  'subs.direct.data.display': 'The language of the subtitle, capitalized.',
  'subs.direct.data.language': 'The ISO 3166-2 code of the language.',
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

  // Subs Translate Page
  'subs.translate.title': 'AI Subtitle Translation',
  'subs.translate.important':
    "AI translation is a **Pro feature**. Each translation costs **100 requests** from your key's balance, charged on a cache hit as well as a fresh translation. Free keys cannot use it.",
  'subs.translate.p1':
    'Wyzie can translate any subtitle into 80+ languages on the fly. Translations stream back as the model produces them, so playback can start within a second or two instead of waiting for the whole file. Results are cached for 30 days, so the second person who asks for the same translation gets it instantly.',

  'subs.translate.ways.h2': 'Two Ways to Use It',
  'subs.translate.way1.h3': '1. Pick a Language From a Search Response',
  'subs.translate.way1.p1':
    'Every /search response now includes one extra entry per supported language with "ai": true and a url that points at /translate. Just treat the AI rows like any other subtitle row in your UI: when the user clicks one, fetch the URL.',
  'subs.translate.way1.filter':
    'If you want to hide the AI rows from your UI, filter them out:',
  'subs.translate.way2.h3': '2. Call /translate Directly',

  'subs.translate.param.id': 'TMDB or IMDB ID (required).',
  'subs.translate.param.target':
    'Target language as its full English name (e.g. Spanish, Japanese, Brazilian Portuguese) (required).',
  'subs.translate.param.seasonEpisode':
    'For TV. Both must be present together.',
  'subs.translate.param.key':
    'Your API key. Use tk instead if you got the URL from /search.',
  'subs.translate.param.tk':
    'Signed token returned by /search. Equivalent to key, but does not expose the raw key.',

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
    'Wyzie searches normal sources for an SRT subtitle, preferring English when available.',
  'subs.translate.how.step2':
    'The SRT is split into chunks of 50 cues and translated sequentially. Each chunk is cached individually as it completes.',
  'subs.translate.how.step3':
    'Output is streamed back to you cue-by-cue. Players that accept a streaming SRT body can start showing the first lines before the rest are done.',
  'subs.translate.how.step4':
    'The complete translation is cached in Redis for 30 days, keyed by id, season, episode, and target.',

  'subs.translate.languages.h2': 'Supported Target Languages',
  'subs.translate.languages.p':
    '80+ languages including all major European, Asian, African, and Middle Eastern languages. Pass the English name (Spanish, not es). The list is also returned as ai: true rows in any /search response, which is the canonical source of truth.',

  'subs.translate.limitations.h2': 'Limitations',
  'subs.translate.limit1':
    'AI translation needs an SRT source. Titles where every available subtitle is .ass, .vtt, or another format will return 404 No SRT found.',
  'subs.translate.limit2':
    'Translation quality depends on the source subtitle. A poorly-timed or mistyped source produces a poorly-timed or mistyped translation.',
  'subs.translate.limit3':
    'Some users may want to opt out of AI rows entirely. Filter on ai === false in your client.',
  'subs.translate.limit4':
    'Translations are billed on cache hits too. Whether freshly generated or served from the 30-day cache, each /translate request costs 100 requests.',

  // Subs API Keys Page
  'subs.keys.title': 'API Keys',
  'subs.keys.p1':
    'Wyzie Subs requires an API key for all requests. A free tier covers most use cases; paid plans handle heavier usage.',

  'subs.keys.tiers.h2': 'Tiers',
  'subs.keys.tier.free': 'Free (Gmail required)',
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
    'Enter a Gmail address (only Gmail is accepted for the free tier).',
  'subs.keys.free.step3': 'Enter the 6-digit code we email you.',
  'subs.keys.free.step4':
    'You receive an API key that looks like wyzie-abc123...',
  'subs.keys.free.gmail':
    'Each Gmail address can only redeem one free key. Already had a free key tied to that email? Verifying again just returns your existing key.',

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
    'Use [Wyzie Worker](https://github.com/wyziedevs/wyzie-worker): a free Cloudflare Worker proxy that holds your key server-side. Point your client at the Worker URL instead of sub.wyzie.io.',
  'subs.keys.protect.option2':
    'Run your own proxy: any backend endpoint that appends the key before forwarding to sub.wyzie.io works. See the Intro page for a 10-line example.',
  'subs.keys.protect.devtools':
    'If the key shows up in a network tab in DevTools, it is exposed. Assume it is public and rotate it by emailing support.',

  'subs.keys.using.h2': 'Using Your Key',
  'subs.keys.using.p': 'Append &key=YOUR_KEY to every API request:',
  'subs.keys.using.npm.h3': 'NPM Package',

  'subs.keys.limit.h2': 'Hitting the Limit',
  'subs.keys.limit.free':
    '**Free tier** depleted -> API returns 429 with X-RateLimit-Reset and Retry-After headers. Daily counter resets at UTC midnight.',
  'subs.keys.limit.paid':
    '**Paid balance** exhausted -> API returns 402. Top up at [store.wyzie.io/topup](https://store.wyzie.io/topup) or enable **auto top-up** in your dashboard to refill automatically when your balance crosses a threshold you set.',

  'subs.keys.faq.h2': 'FAQ',
  'subs.keys.faq.q1': 'I lost my key. Can I get a new one?',
  'subs.keys.faq.a1':
    'Visit [store.wyzie.io](https://store.wyzie.io) and use the "forgot key" flow with your registered email; we\'ll re-send your existing key.',
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
  'i6shark.intro.feature6':
    '**Host Whitelisting**: Built-in domain whitelist for security (configurable in code)',
  'i6shark.intro.feature7':
    '**Automatic Maintenance**: Periodic IP pool flushing. Subnet validation and cleanup. Connection pooling and keepalive optimization.',
  'i6shark.intro.feature8':
    '**High Performance**: Concurrent request handling with buffer pooling. Configurable timeouts and connection limits. Efficient IPv6 address management.',
  'i6shark.intro.feature9':
    '**Debug Mode**: Detailed logging for troubleshooting and monitoring',

  'i6shark.intro.requirements.h2': 'Requirements',
  'i6shark.intro.req1': 'Go 1.20 or higher',
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
};

export default messages;
