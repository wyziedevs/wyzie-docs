const messages: Record<string, string> = {
  // Navigation
  'nav.language': 'भाषा',

  // Index / Landing Page
  'index.subtitle':
    'Wyzie एक टूलसेट है जो सबटाइटल स्क्रैप करने और इससे जुड़ी हर चीज़ के लिए बनाया गया है।',
  'index.cta.start': 'शुरू करें',
  'index.cta.store': 'देखें',

  'index.card.keys.title': 'मुफ्त API Keys',
  'index.card.keys.body':
    'store.wyzie.io/redeem पर त्वरित email वेरिफिकेशन (Gmail, Outlook, Yahoo, iCloud, Proton, और अन्य प्रमुख providers) के साथ मुफ्त API key प्राप्त करें। बिना किसी शुल्क के 1,000 requests/दिन। अधिक उपयोग के लिए Paid प्लान उपलब्ध हैं।',

  'index.card.ai.title': 'AI अनुवाद',
  'index.card.ai.body':
    'किसी भी सबटाइटल को मांग पर 80+ भाषाओं में अनुवाद करें। जैसे-जैसे batches पूरे होते हैं, SRT क्रम से वापस stream होता है, इसलिए पहली lines जल्दी पहुँच जाती हैं। Pro keys पर उपलब्ध है।',

  'index.card.reliable.title': 'विश्वसनीय',
  'index.card.reliable.body':
    'हम अपनी निरंतर अपटाइम और (लगभग) दैनिक अपडेट के साथ-साथ तेज़ कैशिंग पर गर्व करते हैं।',

  'index.card.simple.title': 'सरलता का नया अर्थ',
  'index.card.simple.body':
    'लागू करना आसान, उपयोग करना आसान। Wyzie को यथासंभव सरल बनाने के लिए डिज़ाइन किया गया है।',

  // Donate Page
  'donate.title': 'कृपया दान करें',
  'donate.body':
    'नमस्ते उपयोगकर्ता, Wyzie अब काफी हद तक दान पर निर्भर है (जो मुझे बहुत कम मिलते हैं) और मैं 16 साल का हूँ, पार्ट-टाइम नौकरी करता हूँ, और कभी-कभी पब्लिक API चलाने का मेरा बिल एक महीने में 100$ से अधिक हो जाता है। बाहरी मदद के बिना मैं इसे जारी नहीं रख सकता, मुझे सच में खेद है लेकिन यह प्रोजेक्ट उससे कहीं आगे बढ़ गया है जो मैं मूल रूप से अपनी जेब से सपोर्ट कर सकता था।',
  'donate.cta': 'Wyzie को सपोर्ट करें',

  // Subs Intro Page
  'subs.intro.title': 'Wyzie Subs का परिचय',
  'subs.intro.p1':
    'Wyzie Subs एक मुफ्त tier वाला सबटाइटल स्क्रैपिंग API है। API पर request करने के दो तरीके हैं: हमारे NPM पैकेज का उपयोग करना या सीधे Wyzie API को फेच करना। मैं हमारे पैकेज का उपयोग करने की सलाह देता हूँ, लेकिन कुछ लोगों को types बोझिल लग सकते हैं। API का उपयोग करने के लिए, आपको पहले यह निर्णय लेना होगा।',
  'subs.intro.important.apikey':
    'सभी requests के लिए API key आवश्यक है। [store.wyzie.io/redeem](https://store.wyzie.io/redeem) पर मुफ्त key प्राप्त करें (email वेरिफिकेशन, 1,000 requests/दिन)। अधिक उपयोग के लिए, [Pro और top-up प्लान](https://store.wyzie.io) उपलब्ध हैं। विवरण के लिए API Keys पृष्ठ देखें।',
  'subs.intro.note.npm':
    'यदि आप TypeScript या JavaScript से परिचित हैं तो हम दृढ़ता से NPM पैकेज की सलाह देते हैं',
  'subs.intro.note.status':
    'Uptime और incidents: [sub.wyzie.io/status](https://sub.wyzie.io/status) और [Status API](/subs/usage/status)। API और store से जुड़ी खबरें: [sub.wyzie.io/news](https://sub.wyzie.io/news)।',
  'subs.intro.btn.npm': 'NPM पैकेज',
  'subs.intro.btn.direct': 'सीधी फेचिंग',

  'subs.intro.protect.h2': 'अपनी API Key को सुरक्षित रखें',
  'subs.intro.protect.important':
    '**वास्तविक घटना:** हमने देखा है कि डेवलपर्स ने अपनी key को सीधे एक स्ट्रीमिंग साइट के फ्रंटेंड JavaScript में पेस्ट कर दिया। कुछ ही घंटों में, किसी असंबंधित पक्ष ने इसे JS बंडल से निकाल लिया और दैनिक सीमा या paid बैलेंस समाप्त होने तक उपयोग किया। इस तरह खोया गया quota वापस नहीं किया जाएगा और हमारी शर्तों के तहत इसे key मालिक की जिम्मेदारी माना जाता है।',
  'subs.intro.protect.p1':
    'आपकी API key निजी रहनी चाहिए और **कभी भी** इनमें नहीं दिखनी चाहिए:',
  'subs.intro.protect.item1':
    'ब्राउज़र JavaScript (कोई भी चीज़ जो script tag को serve की जाती है)',
  'subs.intro.protect.item2':
    'मोबाइल ऐप बाइनरी (Android/iOS, obfuscated वाले सहित)',
  'subs.intro.protect.item3': 'ब्राउज़र एक्सटेंशन',
  'subs.intro.protect.item4':
    'अंतिम उपयोगकर्ताओं को वितरित Electron / डेस्कटॉप ऐप',
  'subs.intro.protect.item5':
    'सार्वजनिक Git repositories, gists, paste साइटें, या स्क्रीनशॉट',
  'subs.intro.protect.p2':
    'यदि key किसी अंतिम उपयोगकर्ता की मशीन तक पहुँचती है, तो इसे सार्वजनिक मानें। दो सुरक्षित तरीके हैं:',
  'subs.intro.protect.opt1.h3': 'विकल्प 1: Wyzie Worker का उपयोग करें',
  'subs.intro.protect.opt1.p1':
    'Wyzie Worker एक हल्का Cloudflare Worker प्रॉक्सी है जो आपकी API key को server-side पर inject करता है। इसे Cloudflare Workers पर deploy करें और दो secrets सेट करें: `NITRO_API_TOKEN` (आपकी Wyzie API key) और `NITRO_WORKER_KEY` (आपके द्वारा चुना गया एक secret)। worker को भेजी जाने वाली हर request में `Authorization: Bearer <NITRO_WORKER_KEY>` होना चाहिए; इसके बिना worker 401 लौटाता है, और यदि `NITRO_WORKER_KEY` सेट नहीं है तो वह हर request को 503 के साथ अस्वीकार कर देता है। worker key को भी server-side ही रहना चाहिए, इसलिए worker को अपने खुद के backend से call करें, कभी भी browser या app code से नहीं। worker हर request को आपकी API key संलग्न करके sub.wyzie.io पर forward करता है।',
  'subs.intro.protect.opt2.h3': 'विकल्प 2: अपना खुद का प्रॉक्सी बनाएं',
  'subs.intro.protect.opt2.p1':
    'यदि आप Wyzie Worker का उपयोग नहीं करना चाहते, तो आप किसी भी फ्रेमवर्क में एक सरल server-side प्रॉक्सी बना सकते हैं। विचार वही है: आपका backend आपके client से requests प्राप्त करता है, API key जोड़ता है, और उन्हें sub.wyzie.io पर forward करता है।',

  // Subs Sources Page
  'subs.sources.title': 'Wyzie Subs के स्रोत',
  'subs.sources.p1':
    'Wyzie Subs कई providers से सबटाइटल एकत्रित करता है। provider की स्थिति या किसी स्रोत के डाउन होने के आधार पर स्रोत की उपलब्धता भिन्न हो सकती है। मैं हमेशा नए स्रोतों की तलाश में हूँ, सुझाव देने के लिए संपर्क करें।',

  'subs.sources.using.h2': 'स्रोतों का उपयोग',
  'subs.sources.using.bullet1':
    'सभी सक्षम स्रोतों को एक साथ query करने के लिए source=all का उपयोग करें',
  'subs.sources.using.bullet2':
    'यदि निर्दिष्ट नहीं किया गया तो डिफ़ॉल्ट स्रोत charlie है',
  'subs.sources.using.bullet3':
    'एकाधिक स्रोतों को comma-separated सूची के रूप में निर्दिष्ट किया जा सकता है',

  'subs.sources.api.h2': 'API Endpoint',
  'subs.sources.api.p1':
    'आप वर्तमान में सक्षम स्रोतों और उनके plan tier की सूची प्रोग्रामेटिक रूप से fetch कर सकते हैं:',
  'subs.sources.api.free':
    'वे स्रोत जो कोई भी key query कर सकती है, जिसमें मुफ्त keys भी शामिल हैं।',
  'subs.sources.api.paid': 'वे स्रोत जिनके लिए Pro key की आवश्यकता है।',
  'subs.sources.api.allFree':
    'जब true हो, तो हर सक्षम स्रोत सभी keys के लिए उपलब्ध है और paid खाली है।',

  'subs.sources.scope.h3': 'किसी key तक सीमित करना',
  'subs.sources.scope.p1':
    'वे स्रोत प्राप्त करने के लिए अपनी API key pass करें जो वह key वास्तव में उपयोग कर सकती है:',
  'subs.sources.scope.p2':
    'यह आपके quota से request खर्च किए बिना key-specific fields जोड़ता है:',
  'subs.sources.scope.available':
    'वे स्रोत जिन्हें यह key अभी query कर सकती है।',
  'subs.sources.scope.restricted':
    'सक्षम स्रोत जिन्हें यह key query नहीं कर सकती (उन्हें अनलॉक करने के लिए Pro में अपग्रेड करें)।',
  'subs.sources.scope.keyType': 'free या paid।',
  'subs.sources.scope.keyValid':
    'जब key गलत तरीके से बनी हो या नहीं मिली हो तो false है, और जब key सत्यापित नहीं की जा सकी (जिस स्थिति में available और restricted छोड़ दिए जाते हैं) तो null है।',

  'subs.sources.details.h2': 'स्रोत विवरण',

  'subs.sources.opensubtitles.desc':
    'ऑनलाइन सबसे बड़ा सबटाइटल डेटाबेस। विस्तृत भाषाओं में फिल्मों और TV शो को सपोर्ट करता है। आधिकारिक OpenSubtitles REST API का उपयोग करता है।',
  'subs.sources.opensubtitles.content': 'फिल्में और TV शो',
  'subs.sources.opensubtitles.languages': 'व्यापक बहुभाषी समर्थन',
  'subs.sources.opensubtitles.formats': 'SRT, ASS, SSA, VTT, SUB, और अधिक',

  'subs.sources.subdl.desc':
    'फिल्मों और TV शो के व्यापक चयन के साथ एक community-driven सबटाइटल साइट।',
  'subs.sources.subdl.content': 'फिल्में और TV शो',
  'subs.sources.subdl.languages': 'व्यापक बहुभाषी समर्थन',
  'subs.sources.subdl.formats': 'SRT, ASS, SSA, VTT, SUB, और अधिक',

  'subs.sources.subf2m.desc':
    'फिल्मों और TV शो के लिए व्यापक भाषा कवरेज के साथ एक बड़ा सबटाइटल repository।',
  'subs.sources.subf2m.content': 'फिल्में और TV शो',
  'subs.sources.subf2m.languages': 'व्यापक बहुभाषी समर्थन',
  'subs.sources.subf2m.formats': 'SRT, ASS, SSA, VTT, SUB, और अधिक',

  'subs.sources.podnapisi.desc':
    'सबसे पुराने सबटाइटल डेटाबेस में से एक। फिल्मों और TV शो को कवर करने वाला सुव्यवस्थित संग्रह।',
  'subs.sources.podnapisi.content': 'फिल्में और TV शो',
  'subs.sources.podnapisi.languages': 'व्यापक बहुभाषी समर्थन',
  'subs.sources.podnapisi.formats': 'SRT, ASS, SSA, VTT, SUB, और अधिक',

  'subs.sources.animetosho.desc':
    'AnimeTosho पर indexed torrent releases से सीधे anime सबटाइटल attachments स्क्रैप करता है।',
  'subs.sources.animetosho.content': 'Anime (TV शो)',
  'subs.sources.animetosho.languages':
    'Japanese, English, और release के आधार पर अन्य',
  'subs.sources.animetosho.formats': 'ASS, SRT, SSA, और अन्य',
  'subs.sources.animetosho.note': 'AnimeTosho मई 2026 में बंद होने वाला है।',

  'subs.sources.gestdown.desc':
    'व्यापक भाषा समर्थन के साथ Gestdown API के माध्यम से TV शो के लिए सबटाइटल प्रदान करता है।',
  'subs.sources.gestdown.content': 'केवल TV शो',
  'subs.sources.gestdown.languages': 'व्यापक बहुभाषी समर्थन',
  'subs.sources.gestdown.formats': 'SRT, ASS, और अधिक',

  'subs.sources.jimaku.desc':
    'jimaku.cc को स्क्रैप करता है, जो anime सबटाइटल फाइलों का एक community-maintained repository है। TMDB API का उपयोग करके शीर्षकों से मिलान करता है।',
  'subs.sources.jimaku.content': 'Anime (फिल्में और TV शो)',
  'subs.sources.jimaku.languages':
    'मुख्य रूप से Japanese; उपलब्ध फाइलों के आधार पर English, Chinese, और अधिक',
  'subs.sources.jimaku.formats': 'SRT, ASS, SSA, VTT, SUB, और अन्य',

  'subs.sources.kitsunekko.desc':
    'kitsunekko.net से directory listings स्क्रैप करता है, एक dedicated anime सबटाइटल repository। TMDB API का उपयोग करके शीर्षकों से मिलान करता है।',
  'subs.sources.kitsunekko.content': 'Anime (TV शो)',
  'subs.sources.kitsunekko.languages':
    'English और Japanese सबटाइटल directories',
  'subs.sources.kitsunekko.formats': 'SRT, ASS, SSA, VTT, SUB, और अन्य',

  'subs.sources.yify.desc':
    'IMDB ID से मिलान किए गए सबटाइटल के लिए yifysubtitles.ch स्क्रैप करता है। केवल फिल्में।',
  'subs.sources.yify.content': 'केवल फिल्में (TV शो समर्थित नहीं हैं)',
  'subs.sources.yify.languages':
    'व्यापक बहुभाषी समर्थन (Albanian, Arabic, English, French, Spanish, और कई अधिक)',
  'subs.sources.yify.formats': 'SRT (ZIP archive के अंदर delivered)',

  'subs.sources.ajatttools.desc':
    'Ajatt-Tools/kitsunekko-mirror GitHub repository से सबटाइटल fetch करता है। मीडिया प्रकार के अनुसार organized। TMDB API का उपयोग करके शीर्षकों से मिलान करता है।',
  'subs.sources.ajatttools.content': 'Anime और drama (TV शो और फिल्में)',
  'subs.sources.ajatttools.languages':
    'मुख्य रूप से Japanese; English, Chinese, और अन्य भी',
  'subs.sources.ajatttools.formats': 'SRT, ASS, SSA, VTT, SUB, और अन्य',

  'subs.sources.ai.desc':
    'यह कोई scraper नहीं है। सबसे अच्छे उपलब्ध स्रोत सबटाइटल से मांग पर AI-translated SRT उत्पन्न होता है। केवल Pro keys के लिए। पूरी जानकारी के लिए AI अनुवाद गाइड देखें।',
  'subs.sources.ai.content': 'कुछ भी जिसके लिए Wyzie कोई text सबटाइटल खोज सके',
  'subs.sources.ai.languages': '80+ लक्षित भाषाएं',
  'subs.sources.ai.formats': 'केवल SRT',

  // Subs Package Page
  'subs.pkg.title': 'Wyzie NPM पैकेज का उपयोग',
  'subs.pkg.p1':
    'Wyzie Subs NPM पैकेज सबटाइटल खोजने और fetch करने के लिए एक सरल और उपयोग में आसान इंटरफेस प्रदान करता है।',
  'subs.pkg.install.h2': 'इंस्टॉलेशन',
  'subs.pkg.important':
    'सभी requests के लिए API key आवश्यक है। [store.wyzie.io/redeem](https://store.wyzie.io/redeem) पर मुफ्त key प्राप्त करें और इसे key parameter के माध्यम से pass करें। विवरण के लिए API Keys पृष्ठ देखें।',
  'subs.pkg.usage.h2': 'उपयोग',
  'subs.pkg.params.h3': 'Parameters',
  'subs.pkg.params.note':
    'अधिक जानकारी के लिए (या यदि आप अटके हुए हैं), कृपया [Wyzie Subs homepage](https://sub.wyzie.io) पर जाएं।',

  'subs.pkg.param.tmdb':
    'फिल्म या TV शो का TMDB ID (tmdb_id या imdb_id आवश्यक है)।',
  'subs.pkg.param.imdb':
    'फिल्म या TV शो का IMDB ID (imdb_id या tmdb_id आवश्यक है)।',
  'subs.pkg.param.format':
    'वापस करने के लिए फ़ाइल formats (जैसे, srt, ass)। एक सूची स्वीकार करता है।',
  'subs.pkg.param.season': 'सीज़न नंबर (episode आवश्यक है)।',
  'subs.pkg.param.episode': 'एपिसोड नंबर (season आवश्यक है)।',
  'subs.pkg.param.language':
    'सबटाइटल भाषा के लिए ISO 639-1 कोड। एक सूची स्वीकार करता है।',
  'subs.pkg.param.encoding':
    'Character encoding filter (जैसे, utf-8, latin-1)।',
  'subs.pkg.param.hi':
    'true होने पर, केवल सुनने में अक्षम सबटाइटल वापस करता है। जो स्रोत सुनने में अक्षम सबटाइटल को चिह्नित नहीं करते, वे कुछ भी वापस नहीं करते।',
  'subs.pkg.param.source':
    'Query करने के लिए सबटाइटल providers, उनके codename से (all उन सभी live स्रोतों के लिए जिनका आपकी key उपयोग कर सकती है; डिफ़ॉल्ट charlie)।',
  'subs.pkg.param.release': 'Release/scene filters (एक सूची स्वीकार करता है)।',
  'subs.pkg.param.filename':
    'Filename filters; aliases file और fileName समर्थित हैं।',
  'subs.pkg.param.origin': 'Content origin filter (जैसे, WEB, BLURAY, DVD)।',
  'subs.pkg.param.key':
    'आपकी API key (आवश्यक)। store.wyzie.io/redeem पर एक मुफ्त पाएं।',
  'subs.pkg.param.refresh':
    'Cache को bypass करें और स्रोतों से ताज़े परिणाम fetch करें।',

  'subs.pkg.helpers':
    'पैकेज में हल्के TMDB helpers भी शामिल हैं: searchTmdb, getTvDetails, और getSeasonDetails, जो /search से पहले जल्दी IDs खोजने के लिए हैं। getSources live स्रोतों के codenames वापस करता है (जिस स्रोत को उसके health checks ने pause कर दिया हो, वह ठीक होने तक सूची से बाहर रहता है), और getSourcesInfo tiers के साथ पूरा /sources response वापस करता है, और key देने पर यह भी बताता है कि वह key किन स्रोतों का उपयोग कर सकती है। withDownloadOptions किसी परिणाम के url में download options (WebVTT output, timing सुधार, दूसरी भाषा, और अधिक) जोड़ता है।',
  'subs.pkg.types.h3': 'Types',
  'subs.pkg.type.search': 'API द्वारा पहचाने जाने वाले सभी valid parameters।',
  'subs.pkg.type.query':
    'wyzie-subs API के लिए उपलब्ध सभी parameters (वैकल्पिक और आवश्यक)।',
  'subs.pkg.type.subtitle': 'API से सभी वापसी मान उनके संबंधित types के साथ।',
  'subs.pkg.type.sources': '/sources endpoint का Response type।',
  'subs.pkg.type.download':
    'withDownloadOptions के लिए options: to, offset, fps, plain, और (Pro) sdh, clean, dual।',
  'subs.pkg.type.sync':
    'syncSubtitle (Wyzie Synced, Pro keys) का input और परिणाम: कौन सा सबटाइटल (कोई परिणाम, उसका url, या language के साथ tmdb_id/imdb_id), detectSpeech द्वारा पाया गया speech या media फ़ाइल, और synced download link, उसके offset, fps और confidence के साथ। [Wyzie Synced](/subs/usage/synced) देखें।',
  'subs.pkg.types.end':
    'हमारे types बहुत सरल और अच्छी तरह से documented हैं। wyzie-lib repository में [src/types.ts](https://github.com/wyziedevs/wyzie-lib/blob/main/src/types.ts) देखें।',
  'subs.pkg.config.h3': 'Configuration',
  'subs.pkg.config.p1':
    'Github पर एक उपयोगकर्ता ने configurable API hostname के लिए पूछा और मैं सोचा कि यह एक अच्छा विचार है, इसलिए नीचे उपयोग दिया गया है। आप सब से प्यार है!',

  // Subs Direct Page
  'subs.direct.title': 'Wyzie Subs को सीधे Fetch करना',
  'subs.direct.caution':
    'मैं दृढ़ता से NPM पैकेज का उपयोग करने की सलाह देता हूँ क्योंकि यह आसान और अधिक विश्वसनीय है।',
  'subs.direct.p1':
    'यदि आपने NPM पैकेज का उपयोग नहीं करने का निर्णय लिया है, तो चलिए शुरू करते हैं। मैं केवल API parameters और API द्वारा वापस किए गए data पर जाऊंगा। आप API को कैसे request करते हैं यह पूरी तरह आप पर निर्भर है।',
  'subs.direct.important':
    'सभी requests के लिए API key आवश्यक है। [store.wyzie.io/redeem](https://store.wyzie.io/redeem) पर मुफ्त key प्राप्त करें और इसे हर request में &key=YOUR_KEY के रूप में शामिल करें। विवरण के लिए API Keys पृष्ठ देखें।',

  'subs.direct.params.h3': 'Parameters',
  'subs.direct.param.id': 'शो या फिल्म का TMDB या IMDB ID (आवश्यक)।',
  'subs.direct.param.seasonEpisode':
    'TV searches के लिए सीज़न और एपिसोड। दोनों एक साथ मौजूद होने चाहिए।',
  'subs.direct.param.language':
    'भाषा filter (ISO 639-1 कोड)। एकाधिक मान comma-separated हैं।',
  'subs.direct.param.format':
    'वापस करने के लिए सबटाइटल formats। एकाधिक मान अनुमत हैं।',
  'subs.direct.param.hi':
    'true होने पर, केवल सुनने में अक्षम सबटाइटल वापस करता है (यह एक filter है, प्राथमिकता नहीं)। जो स्रोत सुनने में अक्षम सबटाइटल को चिह्नित नहीं करते, वे कुछ भी वापस नहीं करते।',
  'subs.direct.param.encoding': 'Character encoding filter।',
  'subs.direct.param.source':
    'Query करने के लिए सबटाइटल providers (all हर उस स्रोत को query करता है जिसका आपकी key उपयोग कर सकती है; डिफ़ॉल्ट charlie)।',
  'subs.direct.param.release':
    'Release या scene name filters (comma-separated)।',
  'subs.direct.param.file':
    'Filename filters (aliases: file, filename, fileName)।',
  'subs.direct.param.origin':
    'Content origin filter, comma-separated (जैसे, WEB, BLURAY, DVD)।',
  'subs.direct.param.key':
    'आपकी API key (आवश्यक)। store.wyzie.io/redeem पर एक मुफ्त पाएं।',
  'subs.direct.param.refresh':
    'Cache को bypass करें और ताज़े परिणाम fetch करें। तब उपयोग करें जब स्रोत अपडेट हो सकते हैं।',
  'subs.direct.param.page':
    'वापस करने के लिए page, 1 से शुरू। केवल limit के साथ उपयोग होता है।',
  'subs.direct.param.limit':
    'प्रति page परिणाम (1 से 200)। इसके बिना, सभी परिणाम एक ही response में वापस आते हैं।',
  'subs.direct.important.imdb':
    "IMDB ID का उपयोग करते समय, सुनिश्चित करें कि पहले दो अक्षर ('tt') ID की शुरुआत में शामिल हैं।",

  'subs.direct.data.h3': 'वापस किया गया Data',
  'subs.direct.data.id': 'सबटाइटल फ़ाइल का ID।',
  'subs.direct.data.url':
    'https://sub.wyzie.io/c/... पर download link, जिसमें एक encrypted tok parameter होता है। हर download पर 1 request खर्च होती है; नीचे सबटाइटल download करने वाला अनुभाग देखें।',
  'subs.direct.data.flagUrl': 'भाषा के locale के झंडे का URL।',
  'subs.direct.data.format': 'सबटाइटल फ़ाइल का format।',
  'subs.direct.data.encoding': 'सबटाइटल फ़ाइल का character encoding।',
  'subs.direct.data.display': 'सबटाइटल की भाषा, बड़े अक्षरों में।',
  'subs.direct.data.language': 'भाषा का ISO 639-1 कोड।',
  'subs.direct.data.media': 'उस मीडिया का नाम जिसके लिए सबटाइटल हैं।',
  'subs.direct.data.isHearingImpaired':
    'Boolean जो दर्शाता है कि सबटाइटल सुनने में अक्षम लोगों के लिए accessible है।',
  'subs.direct.data.source': 'कौन से स्रोत से सबटाइटल स्क्रैप किया गया था।',
  'subs.direct.data.release': 'Primary release नाम।',
  'subs.direct.data.releases': 'सबटाइटल के साथ compatible अन्य release नाम।',
  'subs.direct.data.fileName': 'उपलब्ध होने पर मूल filename।',
  'subs.direct.data.downloadCount':
    'स्रोत platform पर downloads की संख्या (यदि उपलब्ध हो)।',
  'subs.direct.data.origin': 'Content origin (जैसे, WEB, BluRay, DVD)।',
  'subs.direct.data.matchedRelease':
    'Release मान जो आपके filter से मिला (यदि प्रदान किया गया हो)।',
  'subs.direct.data.matchedFilter':
    'उपयोगकर्ता द्वारा दिया गया filter जो मिला (यदि प्रदान किया गया हो)।',
  'subs.direct.data.ai':
    'true यदि entry एक AI-translated सबटाइटल है, सामान्य scraped सबटाइटल के लिए false। इसे client-side filter के रूप में उपयोग करें जब आप केवल एक या दूसरा चाहते हों।',
  'subs.direct.download.p':
    '/search response का हर url https://sub.wyzie.io/c/... की ओर point करता है और उसमें एक tok query parameter होता है। tok encrypted होता है, इसलिए यह आपकी API key को उजागर नहीं करता, और यह 60 दिनों तक valid रहता है। हर link का अपना tok होता है जो सिर्फ़ उसी फ़ाइल को खोलता है, इसलिए URL को जैसा है वैसा ही उपयोग करें (download options जोड़ना ठीक है)। एक search पर 1 request खर्च होती है और हर download पर 1 और, जो उस key पर bill होती है जिसने search चलाया था। जब वह key किसी download का भुगतान नहीं कर सकती, तो link अस्वीकार कर दिया जाता है:',
  'subs.direct.dl.p':
    'Download URL जो वापस करता है उसे बदलने के लिए इन्हें उसमें जोड़ें। ये हर download पर काम करते हैं, चाहे वह cached हो या नहीं, और इनका कोई अतिरिक्त खर्च नहीं है (नीचे दिए dual को छोड़कर)। X-Subtitle-Transforms response header बताता है कि क्या-क्या लागू किया गया, गिनती के साथ।',
  'subs.direct.dl.param.to':
    'Output format: `srt` या `vtt`। `vtt` browser के `<track>` element में सीधे चलता है। डिफ़ॉल्ट: फ़ाइल का अपना format।',
  'subs.direct.dl.param.offset':
    'हर line को इतने सेकंड shift करें (negative मान का अर्थ है पहले)।',
  'subs.direct.dl.param.fps':
    'किसी दूसरे release के लिए बने सबटाइटल का drift ठीक करें: `SUBTITLE_FPS:VIDEO_FPS`, जैसे film-rate video पर PAL सबटाइटल के लिए `25:23.976`।',
  'subs.direct.dl.param.plain':
    'सादी, साफ़-सुथरी lines: `{\\an8}` और `<font>` जैसे styling codes हटाए जाते हैं, खाली और दोहराई गई lines हटा दी जाती हैं, lines समय के क्रम में रखी जाती हैं, और छोटे overlaps trim किए जाते हैं।',
  'subs.direct.dl.param.sdh':
    'सुनने में अक्षम लोगों के लिए text हटाएं: `[DOOR SLAMS]`, `(sighs)`, `JOHN:` जैसे speaker labels और ♪ lyrics।',
  'subs.direct.dl.param.clean':
    'तीखी गालियों को mask करें, पहला अक्षर रखते हुए (`f***`)। केवल English फ़ाइलें।',
  'subs.direct.dl.param.dual':
    'हर line के नीचे दूसरी भाषा (ISO 639-1 कोड) जोड़ें, इस फ़ाइल की timing के साथ मिलाकर। 1 अतिरिक्त request खर्च होती है, केवल तब जब कोई match मिले; अन्यथा फ़ाइल अकेले `X-Dual: unavailable` के साथ वापस आती है।',
  'subs.direct.dl.after':
    'Options को मिलाया जा सकता है, जैसे `&to=vtt&sdh=strip&offset=-1.5`। Links में पहले से `format`, `encoding`, `id` और (episodes के लिए) `season` और `episode` होते हैं: इन्हें वैसे ही रहने दें। `autoUnzip=false` किसी archive को जैसा है वैसा ही वापस करता है।',
  'subs.direct.oneCall.p':
    'API key के साथ, GET /download एक ही call में सबटाइटल फ़ाइल खुद वापस करता है: यह आपकी key और /search वाले ही parameters से search करता है (language का default en है), सबसे अच्छा match चुनता है और उसे serve करता है। इसमें 2 requests खर्च होती हैं, उतनी ही जितनी एक search और एक download में। to और offset जैसे download options फ़ाइल पर लागू होते हैं।',
  'subs.direct.oneCall.pick':
    'सबसे अच्छा match पहला search result होता है, जिसमें SRT, WebVTT और ASS फ़ाइलों को प्राथमिकता दी जाती है जब तक आप format सेट न करें, और सुनने में अक्षम लोगों वाले text के बिना फ़ाइलों को, जब तक आप hi=true सेट न करें। इसे release, filename, source या origin से सीमित करें। X-Subtitle-Release, X-Subtitle-Source, X-Subtitle-Language और X-Subtitle-Url response headers बताते हैं कि कौन सी फ़ाइल चुनी गई। Errors वही हैं जो /search और download links के लिए हैं।',
  'subs.direct.oneCall.keyless':
    'Key के बिना, [download page](https://sub.wyzie.io/download) हाथ से एक-दो सबटाइटल खोजने के लिए है। इसके links केवल वही फ़ाइल खोलते हैं जिसके लिए वे बनाए गए थे, और केवल उसी network से जिसने search किया था, और इस page पर प्रति घंटे की सीमाएँ हैं। किसी भी automated काम के लिए key का उपयोग करें।',
  'subs.direct.headers.p':
    'हर /search response में एक X-Total-Count header होता है जिसमें परिणामों की कुल संख्या होती है। जब आप limit pass करते हैं, तो इसमें ये भी शामिल होते हैं:',
  'subs.direct.header.xpage': 'वापस किया गया page।',
  'subs.direct.header.xperpage': 'लागू limit।',
  'subs.direct.header.xtotalpages': 'pages की कुल संख्या।',
  'subs.direct.headers.rate':
    'Responses में X-RateLimit-Limit, X-RateLimit-Remaining, और X-RateLimit-Reset भी होते हैं। इन्हें अनुमानित मानें: उपयोग का हिसाब billing के साथ छोटे batches में होता है, इसलिए ये आपके वास्तविक उपयोग से थोड़ा पीछे रह सकते हैं।',

  // Subs Translate Page
  'subs.translate.title': 'AI सबटाइटल अनुवाद',
  'subs.translate.important':
    'AI अनुवाद एक **Pro फीचर** है; मुफ्त keys को 403 Upgrade required मिलता है। हर call पर आपकी key के balance से **25 requests** खर्च होती हैं, cache hits सहित। यदि कोई call कोई भी output देने से पहले विफल हो जाए (कोई सबटाइटल नहीं मिला, search या download विफल हुआ, या server व्यस्त है), तो वे 25 requests स्वचालित रूप से refund कर दी जाती हैं।',
  'subs.translate.p1':
    'Wyzie किसी भी सबटाइटल को तुरंत 80+ भाषाओं में अनुवाद कर सकता है। जैसे-जैसे batches पूरे होते हैं, अनुवादित SRT क्रम से वापस stream होता है, इसलिए पहले cues पूरी फ़ाइल तैयार होने के बाद नहीं, बल्कि जल्दी पहुँच जाते हैं। पूरा अनुवाद 30 दिनों के लिए cache किया जाता है, इसलिए उसी शीर्षक, episode और लक्षित भाषा के लिए बाद की requests cache से serve होती हैं।',

  'subs.translate.ways.h2': 'इसे उपयोग करने के दो तरीके',
  'subs.translate.way1.h3': '1. Search Response से एक भाषा चुनें',
  'subs.translate.way1.p1':
    'Pro keys के लिए, हर /search response में "ai": true और /translate की ओर point करने वाले url के साथ AI अनुवाद rows भी शामिल होती हैं: हर समर्थित भाषा के लिए एक, या केवल आपके language= filter की भाषाओं के लिए। मुफ्त keys को ये rows कभी नहीं मिलतीं। AI rows को अपने UI में किसी अन्य सबटाइटल row की तरह treat करें: जब उपयोगकर्ता किसी पर click करे, URL fetch करें।',
  'subs.translate.way1.filter':
    'यदि आप AI rows को अपने UI से छुपाना चाहते हैं, तो उन्हें filter करें:',
  'subs.translate.way2.h3': '2. /translate को सीधे Call करें',

  'subs.translate.param.id': 'TMDB या IMDB ID (आवश्यक)।',
  'subs.translate.param.target':
    'लक्षित भाषा (आवश्यक): समर्थित सूची से कोई नाम (जैसे Spanish, Japanese, Portuguese (Brazil)) या उसका कोड (जैसे es, ja, pt-BR)।',
  'subs.translate.param.seasonEpisode':
    'TV के लिए। दोनों एक साथ मौजूद होने चाहिए।',
  'subs.translate.param.key':
    'आपकी API key। यदि आपको URL /search से मिला है तो इसके बजाय tk उपयोग करें।',
  'subs.translate.param.tk':
    '/search की AI row URLs से मिला encrypted token। key की तरह काम करता है, आपकी API key को उजागर नहीं करता, और 60 दिनों तक valid रहता है।',

  'subs.translate.headers.p':
    'Response body एक SRT फ़ाइल है जो text/plain; charset=utf-8 के रूप में stream होती है। उपयोगी response headers:',
  'subs.translate.header.xcache':
    'cache से serve होने पर HIT-REDIS, ताज़ा generate होने पर MISS।',
  'subs.translate.header.xsourcelang':
    'सबटाइटल की भाषा जिसे translator ने input के रूप में उपयोग किया।',
  'subs.translate.header.xtargetlang': 'आपके target param की प्रतिध्वनि।',
  'subs.translate.header.xsourceprovider':
    'कौन से scraper ने स्रोत सबटाइटल प्रदान किया।',

  'subs.translate.how.h2': 'यह कैसे काम करता है',
  'subs.translate.how.step1':
    'Wyzie सामान्य स्रोतों में text सबटाइटल खोजता है, उपलब्ध होने पर English SRT को प्राथमिकता देता है। VTT, ASS, SSA, और SUB फ़ाइलें पहले SRT में convert की जाती हैं।',
  'subs.translate.how.step2':
    'SRT को लगभग 3,800 अक्षरों तक के batches में विभाजित किया जाता है और Google Translate से अनुवाद किया जाता है, एक बार में 4 batches।',
  'subs.translate.how.step3':
    'जैसे-जैसे batches पूरे होते हैं, output SRT क्रम में वापस stream होता है, इसलिए पहले cues जल्दी पहुँच जाते हैं। Players जो streaming SRT body को accept करते हैं, शेष पूरा होने से पहले पहली lines दिखाना शुरू कर सकते हैं।',
  'subs.translate.how.step4':
    'पूर्ण अनुवाद 30 दिनों के लिए Redis में cache किया जाता है, id, season, episode, और target द्वारा keyed।',

  'subs.translate.languages.h2': 'समर्थित लक्षित भाषाएं',
  'subs.translate.languages.p':
    '80+ भाषाएं जिनमें सभी प्रमुख European, Asian, African, और Middle Eastern भाषाएं शामिल हैं। सूची से कोई नाम (Spanish, Portuguese (Brazil)) या उसका कोड (es, pt-BR) pass करें। Pro keys के लिए, पूरी सूची language= filter के बिना किसी भी /search response में ai: true rows के रूप में भी वापस आती है, जो सत्य का canonical स्रोत है।',

  'subs.translate.limitations.h2': 'सीमाएं',
  'subs.translate.limit1':
    'AI अनुवाद को शुरुआत के लिए एक text सबटाइटल की आवश्यकता है। VTT, ASS, SSA, और SUB स्रोत पहले SRT में convert किए जाते हैं; यदि कोई text सबटाइटल मौजूद नहीं है, तो call 404 No subtitle found लौटाती है और वे 25 requests refund कर दी जाती हैं।',
  'subs.translate.limit2':
    'अनुवाद की गुणवत्ता स्रोत सबटाइटल पर निर्भर करती है। खराब-timed या mistyped स्रोत एक खराब-timed या mistyped अनुवाद उत्पन्न करता है।',
  'subs.translate.limit3':
    'कुछ उपयोगकर्ता AI rows से पूरी तरह बाहर निकलना चाह सकते हैं। अपने client में ai === false पर filter करें।',
  'subs.translate.limit4':
    'अनुवाद cache hits पर भी बिल होते हैं। चाहे ताज़ा generated हो या 30-दिन के cache से serve हो, हर /translate call पर 25 requests खर्च होती हैं। केवल उन calls का refund होता है जो कोई भी output देने से पहले विफल हो जाती हैं।',

  // Subs Synced Page
  'subs.synced.title': 'Wyzie Synced',
  'subs.synced.important':
    'Wyzie Synced एक **Pro फीचर** है: मुफ्त keys को 403 Paid feature मिलता है। हर सफल sync पर **5 requests** खर्च होती हैं; जिस sync को कोई match नहीं मिलता, उसका charge नहीं लगता। इसके बाद synced link को download करना किसी भी अन्य download की तरह गिना जाता है।',
  'subs.synced.p1':
    'Online मिलने वाले सबटाइटल अक्सर आपके video से अलग किसी release के लिए timed होते हैं: वे कुछ सेकंड पहले या देर से शुरू होते हैं, या फिल्म आगे बढ़ने के साथ और ज़्यादा खिसकते जाते हैं क्योंकि वह release किसी दूसरे frame rate पर चलता है। Wyzie Synced आपकी copy का audio सुनता है, पता लगाता है कि लोग कहाँ बोल रहे हैं, और वह offset और frame-rate सुधार निकालता है जो सबटाइटल को उसके साथ मिला दे। आपको सुधार लागू किया हुआ एक सामान्य download link मिलता है (offset और fps [download options](/subs/usage/direct#download-options))।',
  'subs.synced.web.p':
    'सबसे आसान तरीका: [sub.wyzie.io/synced](https://sub.wyzie.io/synced) खोलें, अपनी Pro key दर्ज करें, अपनी video फ़ाइल और शीर्षक चुनें, और synced सबटाइटल download करें। Audio का विश्लेषण आपके browser में ही होता है, इसलिए video कभी upload नहीं होता: केवल speech timings भेजी जाती हैं। MKV, MP4, AVI और अधिकांश अन्य formats काम करते हैं, जिनमें AC3, E-AC3 और DTS audio भी शामिल हैं।',
  'subs.synced.api.p':
    'बताएं कि आपको कौन सा सबटाइटल चाहिए (एक download link, या शीर्षक ताकि Wyzie सबसे अच्छा match चुन सके) और audio भेजें: या तो आपके द्वारा खुद detect की गई speech timings, या स्वयं audio/video फ़ाइल। POST /synced भी यही API है।',
  'subs.synced.param.url':
    '/search से मिला download link (https://sub.wyzie.io/c/…)। उस पर लगे अन्य download options (to, sdh, …) synced link पर बने रहते हैं।',
  'subs.synced.param.id':
    'url के बजाय: TMDB या IMDB ID। Wyzie उस भाषा के शीर्ष 5 text सबटाइटल आज़माता है और वह वापस करता है जो आपके audio पर सबसे अच्छा बैठता है।',
  'subs.synced.param.language':
    'id के साथ: सबटाइटल भाषा का ISO 639-1 कोड (आवश्यक)।',
  'subs.synced.param.seasonEpisode':
    'id के साथ, TV के लिए। दोनों एक साथ मौजूद होने चाहिए।',
  'subs.synced.param.key':
    'आपकी Pro API key। इसके बिना, url के tok के पीछे वाली key का उपयोग होता है; बिना key वाले download page के links के लिए key आवश्यक है।',
  'subs.synced.param.speech':
    'लोग कहाँ बोलते हैं: सेकंड में [[start, end], …], किसी भी voice activity detector से (wyzie-lib का detectSpeech, Silero VAD, webrtcvad)। 2 घंटे की फिल्म में लगभग 2,000 segments होते हैं, यानी करीब 40 KB JSON।',
  'subs.synced.param.media':
    'या स्वयं audio/video फ़ाइल: raw request body के रूप में (बाकी fields query string में), या multipart field media के रूप में। अधिकतम 95 MB, इसलिए पूरी फिल्म के लिए केवल audio track upload करें। 8 MB से बड़े multipart upload के लिए key को query string में रखें: फ़ाइल पढ़ने से पहले इसकी जांच होती है।',
  'subs.synced.fields.note':
    'Fields को JSON body, multipart form, या query string (raw media body के साथ) में भेजें।',
  'subs.synced.response.p': '200 response JSON होता है:',
  'subs.synced.field.url':
    'timing सुधार (offset, fps) और आपकी key के लिए नए tok के साथ सबटाइटल का download link। इसे किसी भी /search url की तरह उपयोग करें: हर download पर 1 request खर्च होती है।',
  'subs.synced.field.offset':
    'frame-rate सुधार के बाद हर line में जोड़े गए सेकंड (negative मान का अर्थ है पहले)।',
  'subs.synced.field.fps':
    'frame-rate सुधार, SUBTITLE_FPS:VIDEO_FPS के रूप में (जैसे "25:23.976"), या null जब किसी सुधार की ज़रूरत न हो।',
  'subs.synced.field.confidence':
    '0 से 1: यह timing बाकी सभी से कितनी स्पष्ट रूप से बेहतर है। जो कुछ भी वापस आता है वह match test पास कर चुका है; मान जितना अधिक, उतना निश्चित।',
  'subs.synced.field.inSync':
    'true जब सबटाइटल पहले से ही आपकी copy से मेल खाता था।',
  'subs.synced.field.subtitle':
    'कौन सा सबटाइटल उपयोग हुआ (release, fileName, format, source, …)। url के साथ, केवल उसका format।',
  'subs.synced.errors.p':
    'Errors message और details के साथ JSON होते हैं। अस्वीकृत और विफल syncs का charge नहीं लगता।',
  'subs.synced.error.400':
    'Fields गायब या अमान्य हैं: कोई सबटाइटल नहीं, कोई audio नहीं, या ऐसा speech जो [start, end] जोड़ियों में नहीं है।',
  'subs.synced.error.401':
    'कोई key नहीं, url का download link अमान्य या expired है, या 8 MB से बड़े multipart upload की query string में key नहीं है।',
  'subs.synced.error.403':
    'Key मुफ्त है (Wyzie Synced के लिए Pro आवश्यक है), अमान्य है, या hold पर है।',
  'subs.synced.error.404':
    'उस शीर्षक के लिए उस भाषा में कोई text सबटाइटल नहीं है।',
  'subs.synced.error.413':
    'media फ़ाइल 95 MB से बड़ी है। केवल audio track upload करें, या speech भेजें।',
  'subs.synced.error.422':
    'सबटाइटल किसी भी offset या frame rate पर audio से मेल नहीं खाता (शायद कोई दूसरा cut या episode है), audio में बहुत कम speech है, या फ़ाइल decode नहीं हो सकती।',
  'subs.synced.error.429':
    'Key भुगतान नहीं कर सकती: एक sync के लिए कम से कम 5 requests बची होनी चाहिए, और यह कोई भी काम शुरू होने से पहले जांचा जाता है। या 429 Too many syncs: एक key एक घंटे में 60 syncs शुरू कर सकती है।',
  'subs.synced.error.503':
    'अन्य uploads को decode करने या पढ़ने में व्यस्त है, या search कुछ समय के लिए अनुपलब्ध है। थोड़ी देर बाद फिर से प्रयास करें, या speech भेजें।',
  'subs.synced.lib.p':
    'wyzie-lib में detectSpeech (वही detector जो साइट आपके browser में चलाती है) और syncSubtitle हैं:',
  'subs.synced.how.step1':
    'Speech: audio को 8 kHz mono में decode किया जाता है (5.1 और 7.1 mixes के लिए केवल centre channel, जहाँ संवाद होते हैं), और एक voice activity detector चिह्नित करता है कि लोग कहाँ बोलते हैं: तेज़, speech-band ध्वनि जो syllables के साथ उठती और गिरती है।',
  'subs.synced.how.step2':
    'Alignment: सबटाइटल के on-screen समय को ±10 मिनट के भीतर हर offset पर उस speech के साथ cross-correlate किया जाता है, सामान्य frame-rate mismatches के लिए (25 vs 23.976, 25 vs 24, 24 vs 23.976 fps)।',
  'subs.synced.how.step3':
    'Refinement: lines जहाँ शुरू होती हैं उसे speech के शुरू होने की जगह से मिलाकर सबसे अच्छी timing को 10 ms तक सटीक किया जाता है।',
  'subs.synced.how.step4':
    "कोई timing तभी वापस की जाती है जब वह बाकी हर offset से काफ़ी ऊपर हो, इसलिए किसी दूसरे cut या episode के सबटाइटल को गलत shift के बजाय 422 Couldn't sync मिलता है।",
  'subs.synced.limit1':
    'Wyzie Synced एक स्थिर offset और frame-rate के अंतर को ठीक करता है। किसी अलग cut (जोड़े गए या गायब scenes) के सबटाइटल को एक shift से ठीक नहीं किया जा सकता, और उसे अस्वीकार कर दिया जाता है।',
  'subs.synced.limit2':
    'इसे speech की आवश्यकता है: कम संवाद वाली फिल्में, या ज़्यादातर संगीत वाला audio, शायद sync न हो।',
  'subs.synced.limit3': '±10 मिनट तक के offsets खोजे जाते हैं।',

  // Subs Status API Page
  'subs.status.title': 'Status API',
  'subs.status.p1':
    'GET https://sub.wyzie.io/status/api वही status देता है जो [status page](https://sub.wyzie.io/status) दिखाता है, आपकी अपनी monitoring के लिए JSON के रूप में: API चल रहा है या नहीं, हर स्रोत की स्थिति, 24 घंटे, 7, 30 और 90 दिनों का uptime, दिन-ब-दिन history और हाल के incidents। कोई key नहीं चाहिए, और इसका कोई खर्च नहीं है।',
  'subs.status.note':
    'यह public है (CORS खुला) और 60 सेकंड के लिए cache होता है, इसलिए एक मिनट में एक से ज़्यादा बार poll करने पर वही जवाब मिलता है। स्रोतों को /sources की तरह उनके codename से पहचाना जाता है।',
  'subs.status.param.days':
    'हर history array में दिन-वार history के कितने दिन, सबसे नए पहले: 0 से 90 (डिफ़ॉल्ट 90)। 0 देने पर छोटे response के लिए history हटा दी जाती है।',
  'subs.status.param.format':
    'shields रिपोर्ट की जगह एक [shields.io endpoint badge](https://shields.io/badges/endpoint-badge) लौटाता है।',
  'subs.status.param.source':
    'format=shields के साथ: पूरे status की जगह एक स्रोत का badge (उसका 30-दिन का uptime, या paused)।',
  'subs.status.field.status':
    'operational (हर स्रोत checks पास कर रहा है), degraded (कोई स्रोत paused है या किसी check में fail हो रहा है) या partial_outage (आधे से ज़्यादा स्रोत paused हैं)।',
  'subs.status.field.summary':
    'यही बात एक वाक्य में, जैसे "API operational; 2 of 7 sources paused"।',
  'subs.status.field.trackingSince':
    'uptime tracking कब शुरू हुई। उससे पहले का समय नहीं गिना जाता, इसलिए जो windows और पीछे तक जाती हैं वे कम समय cover करती हैं (या null होती हैं)।',
  'subs.status.field.api':
    'खुद API: उसका uptime और history। आपको मिले किसी भी response में status हमेशा operational होता है।',
  'subs.status.field.sources':
    'हर स्रोत के लिए एक entry: tier (free या paid), movies और TV के लिए पिछले check का status, latencyMs, lastChecked और nextCheck, साथ में uptime और history।',
  'subs.status.field.state':
    'online, suspect (एक check में fail हुआ; 5 मिनट के अंदर दोबारा check होता है) या paused (लगातार दो checks में fail हुआ)। paused स्रोत में listed: false होता है: कोई check पास होने तक वह /sources और source=all से बाहर रहता है, और pausedSince बताता है कि कब से।',
  'subs.status.field.uptime':
    'हर window का वह प्रतिशत जिसमें API या स्रोत चालू था, 3 दशमलव स्थानों तक नीचे की ओर round किया गया (ताकि कोई भी downtime 100 से नीचे दिखे), या अभी data न होने पर null।',
  'subs.status.field.history':
    'हर UTC दिन के लिए एक entry: date, uptime और downMinutes (tracking शुरू होने से पहले null)।',
  'subs.status.field.incidents':
    'पिछले 30 दिनों में स्रोतों के pause, सबसे नए पहले: start, end (जारी रहने तक null) और minutes।',
  'subs.status.how.api':
    'API uptime: जब तक API चलता है, server हर मिनट एक heartbeat record करता है। बिना heartbeat वाला मिनट down गिना जाता है। यह हमारे server पर मापा जाता है, इसलिए कोई समस्या जो सिर्फ़ आपके और Cloudflare के बीच हो, यहां नहीं दिखेगी।',
  'subs.status.how.sources':
    'स्रोत uptime: हर स्रोत को हर घंटे एक असली search और download से check किया जाता है। जितने समय कोई स्रोत paused रहता है, वह down गिना जाता है, उसके पहले failed check से लेकर किसी check के पास होने तक। अकेला एक failed check नहीं गिना जाता, और न ही वह स्रोत जिसे हम हाथ से pause करते हैं।',
  'subs.status.how.tracking': 'Tracking 24 सितंबर 2026 को शुरू हुई।',
  'subs.status.badge.p':
    'अपने README या status page के लिए shields.io badge पाने के लिए ?format=shields जोड़ें:',
  'subs.status.use.p':
    'अपने app में स्रोत चुनने के लिए, /sources पहले से ही सिर्फ़ live स्रोतों की सूची देता है। Status API अपने users को यह दिखाने के लिए है कि क्या चल रहा है, खुद को alert करने के लिए, या यह तय करने के लिए कि कब retry करना है:',
  'subs.status.news.p':
    'API और store से जुड़ी घोषणाएं (नए features, ऐसे बदलाव जो आपके app पर असर डालते हैं) [sub.wyzie.io/news](https://sub.wyzie.io/news) पर पोस्ट की जाती हैं, वहां subscribe करने पर email से, या [RSS](https://sub.wyzie.io/news/feed.xml) से भी मिलती हैं।',

  // Subs API Keys Page
  'subs.keys.title': 'API Keys',
  'subs.keys.p1':
    'Wyzie Subs को सभी requests के लिए API key की आवश्यकता है। एक मुफ्त tier अधिकांश use cases को cover करती है; paid plans भारी उपयोग को संभालते हैं।',

  'subs.keys.tiers.h2': 'Tiers',
  'subs.keys.tier.free': 'मुफ्त (email वेरिफिकेशन)',
  'subs.keys.tier.free.limit': '1,000 requests / UTC दिन',
  'subs.keys.tier.pro': 'एकबारगी $5',
  'subs.keys.tier.pro.limit': '400,000 requests',
  'subs.keys.tier.topup': '$0.0625 / 5K से',
  'subs.keys.tier.topup.limit': 'आपके paid balance में जोड़ता है',
  'subs.keys.tiers.end':
    'Pro और top-ups expire नहीं होते। recurring पसंद है? $32/month subscription हर महीने 6,000,000 requests देती है (केवल card)। पूरी pricing और dashboard के लिए store.wyzie.io देखें।',

  'subs.keys.free.h2': 'मुफ्त Key प्राप्त करना',
  'subs.keys.free.p':
    '[store.wyzie.io/redeem](https://store.wyzie.io/redeem) पर जाएं:',
  'subs.keys.free.step1': 'एक त्वरित Cloudflare Turnstile captcha हल करें।',
  'subs.keys.free.step2':
    'किसी प्रमुख व्यक्तिगत email provider का पता दर्ज करें (Gmail, Outlook/Hotmail, Yahoo, iCloud, AOL, Proton, और अन्य)। अस्थायी (disposable) email domains अस्वीकार कर दिए जाते हैं।',
  'subs.keys.free.step3': 'वह 6-अंकीय कोड दर्ज करें जो हम आपको email करते हैं।',
  'subs.keys.free.step4':
    'आपको wyzie-abc123... जैसी दिखने वाली API key मिलती है',
  'subs.keys.free.gmail':
    'हर email पता और हर network केवल एक मुफ्त key claim कर सकता है; दूसरी request पर 409 वापस आता है। अपनी key खो दी? उसे फिर से भिजवाने के लिए [dashboard](https://store.wyzie.io/dashboard) पर "Forgot key" का उपयोग करें।',

  'subs.keys.pro.h2': 'Pro में अपग्रेड करना',
  'subs.keys.pro.p1':
    '[store.wyzie.io](https://store.wyzie.io) पर जाएं और उसी email से checkout करें जो आपने अपनी मुफ्त key के लिए उपयोग की थी। आपकी मौजूदा wyzie-... key को in place अपग्रेड किया जाता है और 400K paid requests ऊपर से जोड़े जाते हैं। recurring पसंद है? इसके बजाय $32/month subscription हर महीने 6,000,000-request का allowance जोड़ती है (केवल card)।',
  'subs.keys.pro.p2':
    'यदि आप एक बिल्कुल नए email से checkout करते हैं (कोई prior key नहीं), तो एक नया wyzie-... key generate किया जाता है और आपको email किया जाता है।',

  'subs.keys.protect.h2': 'अपनी Key को Client से दूर रखें',
  'subs.keys.protect.important':
    '**अपनी API key को client-side code में कभी embed न करें।** ब्राउज़र JavaScript, मोबाइल ऐप, ब्राउज़र extensions, Electron-style डेस्कटॉप ऐप, और सार्वजनिक Git repositories सभी client-side माने जाते हैं। आप जो कुछ भी किसी अंतिम उपयोगकर्ता को ship करते हैं उसे वे inspect कर सकते हैं, और हमने वास्तविक मामले देखे हैं जहां उपयोगकर्ताओं ने अपनी key को एक streaming साइट के frontend में paste किया, केवल किसी तीसरे पक्ष द्वारा JS bundle को scrape करके घंटों के भीतर request balance drain करने के लिए। इस तरह consumed quota वापस नहीं किया जाएगा।',
  'subs.keys.protect.p2': 'client app से key उपयोग करने के दो सुरक्षित तरीके:',
  'subs.keys.protect.option1':
    '[Wyzie Worker](https://github.com/wyziedevs/wyzie-worker) का उपयोग करें: एक मुफ्त Cloudflare Worker proxy जो आपकी API key को `NITRO_API_TOKEN` secret के रूप में रखता है। इसे की जाने वाली हर call में `Authorization: Bearer <NITRO_WORKER_KEY>` भेजना ज़रूरी है, जो आपके द्वारा सेट किया गया दूसरा secret है, इसलिए अपने client को अपने खुद के backend के ज़रिए route करें और worker key को भी server-side रखें।',
  'subs.keys.protect.option2':
    'अपना खुद का proxy चलाएं: कोई भी backend endpoint जो sub.wyzie.io पर forward करने से पहले key जोड़ता है, काम करता है। 10-line उदाहरण के लिए Intro पृष्ठ देखें।',
  'subs.keys.protect.devtools':
    'यदि key DevTools में network tab में दिखती है, तो वह exposed है। मान लें यह public है और इसे अपने [dashboard](https://store.wyzie.io/dashboard) से rotate करें।',

  'subs.keys.using.h2': 'अपनी Key का उपयोग करना',
  'subs.keys.using.p': 'हर API request में &key=YOUR_KEY जोड़ें:',
  'subs.keys.using.npm.h3': 'NPM पैकेज',

  'subs.keys.limit.h2': 'सीमा तक पहुँचना',
  'subs.keys.limit.p':
    'एक search पर 1 request खर्च होती है और हर सबटाइटल download पर 1 request, इसलिए एक बार search करके एक फ़ाइल download करने में 2 खर्च होती हैं। AI अनुवाद में प्रति call 25 requests खर्च होती हैं, और एक Wyzie Synced sync में 5।',
  'subs.keys.limit.free':
    '**मुफ्त tier** समाप्त -> searches और download links 429 Daily request limit reached वापस करते हैं, JSON में reset_at और एक Retry-After header के साथ। 1,000 requests की दैनिक सीमा UTC midnight पर reset होती है।',
  'subs.keys.limit.paid':
    '**Paid balance** समाप्त -> searches और download links JSON में top-up link के साथ 402 वापस करते हैं। [store.wyzie.io/topup](https://store.wyzie.io/topup) पर top up करें या अपने dashboard में **auto top-up** सक्षम करें ताकि जब आपका balance आपकी निर्धारित threshold से नीचे जाए तो स्वचालित रूप से refill हो।',
  'subs.keys.hold.p1':
    'जो keys ज़्यादातर datacenter या hosting IPs से बहुत अधिक volume भेजती हैं, उन्हें स्वचालित रूप से pause कर दिया जाता है। Pause की गई key को हर request पर 403 Key on hold मिलता है, और JSON में एक reinstate link (https://store.wyzie.io/verify) और एक support link (https://store.wyzie.io/contact) होता है।',
  'subs.keys.hold.p2':
    'Key को तुरंत reinstate करने के लिए, जिस website पर आप इसका उपयोग करते हैं उसे [store.wyzie.io/verify](https://store.wyzie.io/verify) पर DNS TXT record या meta tag से verify करें। Verified साइट वाली key फिर कभी auto-pause नहीं होती, इसलिए व्यस्त साइटें pause होने से पहले ही verify कर सकती हैं।',
  'subs.keys.hold.p3':
    'कोई website नहीं है, जैसे backend service या app? Key reinstate करवाने के लिए [support से संपर्क करें](https://store.wyzie.io/contact)।',

  'subs.keys.files.h2': 'फ़ाइलों में क्या है',
  'subs.keys.files.adfilter':
    '**विज्ञापन filtering** – sub.wyzie.io के माध्यम से serve होने वाले हर सबटाइटल से provider के विज्ञापन cues हटा दिए जाते हैं (OpenSubtitles banners, betting के प्रचार, "watch free at ..." जैसी lines)। SRT cues को फिर से number किया जाता है ताकि कुछ भी skip न हो। हर provider, OpenSubtitles सहित, sub.wyzie.io के माध्यम से serve होता है, इसलिए filter उन सभी पर लागू होता है।',
  'subs.keys.files.promo':
    '**मुफ्त और dev keys** को हर फ़ाइल की बिल्कुल शुरुआत में (0–6 s) एक छोटा cue मिलता है जो [store.wyzie.io](https://store.wyzie.io) की ओर इशारा करता है। Paid keys को बिना किसी cue के साफ़ फ़ाइलें मिलती हैं।',

  'subs.keys.faq.h2': 'FAQ',
  'subs.keys.faq.q1': 'मेरी key खो गई। क्या मुझे नई मिल सकती है?',
  'subs.keys.faq.a1':
    '[dashboard](https://store.wyzie.io/dashboard) खोलें और अपने registered email के साथ "Forgot key" का उपयोग करें; हम आपकी मौजूदा key फिर से भेजेंगे। यदि आपको लगता है कि key leak हो गई है, तो इसके बजाय उसे dashboard से rotate करें।',
  'subs.keys.faq.q2': 'क्या मैं एक key को कई projects में उपयोग कर सकता हूँ?',
  'subs.keys.faq.a2':
    'हाँ। आपकी key जहाँ भी आप API call करते हैं वहाँ काम करती है।',
  'subs.keys.faq.q3': 'क्या मेरी key कभी expire होगी?',
  'subs.keys.faq.a3':
    'नहीं। मुफ्त और paid दोनों keys की कोई expiry नहीं है। मुफ्त keys प्रति दिन capped हैं; paid balance आपके उपयोग तक बना रहता है।',
  'subs.keys.faq.q4': 'क्या auto top-up सुरक्षित है?',
  'subs.keys.faq.a4':
    'आप एक monthly spend cap सेट करते हैं। हम उससे अधिक कभी charge नहीं करते, और हर confirmation email और आपके dashboard में one-click disable उपलब्ध है।',

  // Proxy Intro Page
  'proxy.intro.title': 'Wyzie Proxy का परिचय',
  'proxy.intro.note':
    'Wyzie Subs का production version इस proxy का उपयोग नहीं करता बल्कि [i6.shark](https://github.com/wyziedevs/i6.shark) का उपयोग करता है।',
  'proxy.intro.p1':
    'Wyzie Proxy एक शक्तिशाली proxy API है जो आपको CORS या अन्य प्रतिबंधों के बिना किसी भी वेबसाइट पर requests करने की अनुमति देती है। चूंकि Wyzie Proxy Nitro के साथ बनाया गया है, इसलिए इसे निम्नलिखित में से किसी भी platform पर होस्ट किया जा सकता है: AWS Amplify, Azure, Cloudflare, Netlify, Stormkit, Vercel, Zeabur।',
  'proxy.intro.btn.hosting': 'Hosting',
  'proxy.intro.btn.check': 'देखें',

  // Proxy Hosting Page
  'proxy.hosting.title': 'Wyzie Proxy को होस्ट करना',
  'proxy.hosting.p1':
    'Wyzie Proxy को build करना Nitro की बदौलत बेहद आसान है। पहले, Wyzie Proxy का repository clone करें:',
  'proxy.hosting.p2': 'फिर, सभी आवश्यक packages install करें:',
  'proxy.hosting.p3': 'सभी packages install होने के बाद, proxy को build करें:',
  'proxy.hosting.p4':
    'Output /.output/server folder में generate होगा। यदि आप Cloudflare Workers पर deploy कर रहे हैं, तो index.mjs फ़ाइल को worker में copy-paste करें; अन्यथा, आप फाइलों को सामान्य रूप से deploy कर सकते हैं।',

  // i6.shark Intro Page
  'i6shark.intro.title': 'i6.shark का परिचय',
  'i6shark.intro.p1':
    'i6.shark एक IPv6 proxy server है जो आपको /48 subnet में randomly generated IPv6 पतों से HTTP requests करने की अनुमति देता है। यह वह proxy है जो वर्तमान में production में Wyzie Subs को power कर रहा है।',
  'i6shark.intro.p2':
    'एक /48 subnet में 1,208,925,819,614,629,174,706,176 (1.2 x 10^24) IPv6 पते होते हैं, जिससे पारंपरिक IP banning के माध्यम से इसे block करना virtually असंभव हो जाता है। एकल subnet का उपयोग करने का अर्थ है कि जो वास्तव में आपको block करना चाहते हैं वे आपके ASN पते को block कर सकते हैं, इसलिए इससे सावधान रहें।',
  'i6shark.intro.btn.hosting': 'Hosting',
  'i6shark.intro.btn.github': 'GitHub',

  'i6shark.intro.features.h2': 'विशेषताएं',
  'i6shark.intro.feature1':
    '**Random IPv6 Generation**: प्रत्येक request के लिए आपके /48 prefix से random IPv6 पते बनाता है',
  'i6shark.intro.feature2':
    '**HTTP Methods**: GET, HEAD और POST; बाकी सब पर 405 मिलता है',
  'i6shark.intro.feature3':
    '**HMAC-SHA256 Authentication**: user-agent आधारित tokens का उपयोग करके सुरक्षित API key authentication',
  'i6shark.intro.feature4':
    '**Intelligent IP Pool Management**: configurable pool size के साथ automatic IP rotation। Smart IP lifecycle management। प्रति-IP request counting। inactivity threshold के आधार पर unused IP cleanup।',
  'i6shark.intro.feature5':
    '**Safe Request Handling**: सिर्फ़ allowlist में शामिल request headers ही forward होते हैं, API token या Cloudflare और forwarding headers कभी नहीं। loopback, private, link-local और अन्य internal networks पर मौजूद destinations (server के अपने addresses सहित) DNS resolve होने के बाद और हर redirect पर (अधिकतम 5) अस्वीकार कर दिए जाते हैं। एकाधिक URL parameter formats का समर्थन। system default IP पर optional fallback।',
  'i6shark.intro.feature7':
    '**Automatic Maintenance**: Periodic IP pool flushing। Subnet validation और cleanup। Connection pooling और keepalive optimization।',
  'i6shark.intro.feature8':
    '**High Performance**: buffer pooling के साथ Concurrent request handling। Configurable timeouts और connection limits। Efficient IPv6 address management।',
  'i6shark.intro.feature9':
    '**Debug Mode**: troubleshooting और monitoring के लिए Detailed logging',

  'i6shark.intro.requirements.h2': 'आवश्यकताएं',
  'i6shark.intro.req1': 'Go 1.22 या उच्चतर',
  'i6shark.intro.req2':
    'IPv6 समर्थन के साथ Linux/Unix system (अधिमानतः Ubuntu)',
  'i6shark.intro.req3':
    'Root privileges (port 80 binding और IPv6 manipulation के लिए)',
  'i6shark.intro.req4': 'आपके hosting provider से IPv6 /48 subnet allocation',

  'i6shark.intro.providers.h2': 'Hosting Providers',
  'i6shark.intro.providers.p1':
    'निम्नलिखित providers /48 IPv6 subnets प्रदान करने के लिए जाने जाते हैं:',

  // i6.shark Hosting Page
  'i6shark.hosting.title': 'i6.shark को होस्ट करना',
  'i6shark.hosting.p1':
    'i6.shark को set up करने के लिए /48 IPv6 subnet के साथ एक VPS की आवश्यकता है। एक बार configure होने के बाद, यह न्यूनतम maintenance के साथ स्वायत्त रूप से चलता है।',

  'i6shark.hosting.steps.h2': 'चरण',
  'i6shark.hosting.step1': 'repository को /opt/i6.shark पर clone करें:',
  'i6shark.hosting.step2': 'src/consts.go में constants configure करें:',
  'i6shark.hosting.step2.note':
    'IPv6Prefix और Interface को अपने server से match करने के लिए update करें। shared secret इस फ़ाइल में नहीं, बल्कि environment में जाता है (अगला step); SharedSecret सिर्फ़ तब fallback है जब I6_SHARED_SECRET set न हो। शेष tuning constants के sensible defaults हैं और आमतौर पर बदलाव की आवश्यकता नहीं होती।',
  'i6shark.hosting.stepSecret':
    'shared secret को ऐसी environment फ़ाइल में रखें जिसे सिर्फ़ root पढ़ सके। अपने client में भी वही value इस्तेमाल करें (Wyzie Subs के लिए, I6_PROXY_SECRET):',
  'i6shark.hosting.step3': 'application build करें:',
  'i6shark.hosting.step4': 'systemd service बनाएं:',
  'i6shark.hosting.step5': 'service को enable और start करें:',
  'i6shark.hosting.step5.check': 'status जांचें:',
  'i6shark.hosting.post':
    'proxy server अब boot पर स्वचालित रूप से चलेगा और crash होने पर खुद को restart करेगा।',

  'i6shark.hosting.daily.h2': 'दैनिक Restart (वैकल्पिक)',
  'i6shark.hosting.daily.p':
    'server को random समय पर daily restart करने के लिए cron job जोड़ें:',

  'i6shark.hosting.auth.h2': 'API Authentication',
  'i6shark.hosting.auth.p':
    'API tokens shared secret (I6_SHARED_SECRET) के साथ user-agent header पर HMAC-SHA256 का उपयोग करके generate होते हैं, और API-Token header में भेजे जाते हैं, जिसे proxy कभी upstream forward नहीं करता। implementation details के लिए source code में validateAPIToken function देखें। अगर कभी secret leak हो जाए, तो नया secret set करें और service को restart करें।',

  // Plugins
  'plugins.common.required': 'आवश्यक',

  'plugins.index.intro':
    'Wyzie Subs उन media apps में सीधे जुड़ जाता है जिनका आप पहले से उपयोग करते हैं। हर plugin उसी `https://sub.wyzie.io/search` endpoint से बात करता है और एक मुफ़्त **Wyzie API key** की ज़रूरत होती है। इसे [store.wyzie.io](https://store.wyzie.io/#plans) पर प्राप्त करें।',
  'plugins.index.tbl.stremio.for':
    'desktop, mobile, या TV पर Stremio में देखना',
  'plugins.index.tbl.stremio.install':
    'Hosted add-on: अपनी key paste करें, Install पर click करें',
  'plugins.index.tbl.bazarr.for':
    'Plex, Jellyfin, Emby, Sonarr, Radarr libraries',
  'plugins.index.tbl.bazarr.install':
    'आपके Bazarr instance के लिए drop-in provider',
  'plugins.index.tbl.kodi.for': 'Kodi 19+, LibreELEC, CoreELEC',
  'plugins.index.tbl.kodi.install':
    'zip से या Wyzie repository से install करें',
  'plugins.index.use.stremio':
    'अगर आप Stremio app के अंदर देखते हैं तो **Stremio** का उपयोग करें।',
  'plugins.index.use.bazarr':
    'अगर आप Plex, Jellyfin, या Emby चलाते हैं तो **Bazarr** का उपयोग करें। Bazarr subtitle files को disk पर download करता है और आपका media server उन्हें स्वचालित रूप से उठा लेता है। यह Plex और Jellyfin के लिए भी अनुशंसित रास्ता है; कोई अलग native plugin नहीं है।',
  'plugins.index.use.kodi':
    'Android TV, Raspberry Pi, या home theatre PC पर Kodi-native subtitle service के लिए **Kodi** का उपयोग करें।',
  'plugins.index.shared.sources':
    '**Sources:** हर वह स्रोत जिसका आपकी key उपयोग कर सकती है (`source=all`): मुफ़्त key पर charlie और lima, Pro key पर सभी सात।',
  'plugins.index.shared.matching':
    '**Matching:** Wyzie IMDB और TMDB IDs के साथ-साथ season और episode द्वारा संचालित होता है, इसलिए movies और series दोनों के लिए matches सटीक होते हैं।',
  'plugins.index.shared.quota':
    '**Quota:** जब आपकी key खत्म हो जाती है, तो plugin चुपचाप fail होने के बजाय [store.wyzie.io](https://store.wyzie.io) से link करने वाला एक मित्रवत संकेत दिखाता है। Top up करें या subscribe करें और आप फिर से काम पर लौट आते हैं।',
  'plugins.index.shared.languages':
    '**Languages:** 100+, प्रति plugin चुनने योग्य।',
  'plugins.index.outro':
    'शुरू करने के लिए ऊपर अपना platform चुनें। हर plugin का source code [wyzie-plugins repository](https://github.com/wyziedevs/wyzie-plugins) में है।',

  'plugins.stremio.intro':
    '[Stremio](https://www.stremio.com/) के लिए एक one-click subtitle add-on। यह हर उस Wyzie स्रोत को query करता है जिसका आपकी key उपयोग कर सकती है, और movies तथा series दोनों के लिए, हर उस platform पर काम करता है जहाँ Stremio चलता है।',
  'plugins.stremio.before':
    'आपको एक मुफ़्त Wyzie API key चाहिए। एक [store.wyzie.io/redeem](https://store.wyzie.io/redeem) पर प्राप्त करें, या [store.wyzie.io](https://store.wyzie.io/#plans) पर Pro key खरीदें या subscribe करें।',
  'plugins.stremio.install.1':
    '[stremio.wyzie.io/configure](https://stremio.wyzie.io/configure) खोलें।',
  'plugins.stremio.install.2': 'अपनी **API key** paste करें।',
  'plugins.stremio.install.3':
    'वैकल्पिक: अपनी पसंदीदा **languages** को ISO 639-1 codes के रूप में, comma से अलग करके दर्ज करें (उदाहरण के लिए `en,es,fr`)। सभी languages के लिए खाली छोड़ें।',
  'plugins.stremio.install.4':
    'वैकल्पिक: केवल hearing-impaired subtitles पाने के लिए **hearing-impaired** चालू करें। सब कुछ देखने के लिए इसे बंद रहने दें; इसके चालू रहते, जो स्रोत hearing-impaired subtitles को चिह्नित नहीं करते, वे कुछ भी नहीं लौटाते।',
  'plugins.stremio.install.5':
    '**Install** पर click करें। Stremio खुलता है और आपसे पुष्टि करने को कहता है; स्वीकार करें, और आपका काम हो गया।',
  'plugins.stremio.install.after':
    'आपकी key और preferences add-on में encode हो जाती हैं, इसलिए और कुछ set up करने की ज़रूरत नहीं है। कोई भी movie या episode खोलें और list से एक subtitle चुनें।',
  'plugins.stremio.cfg.key.f': 'API key',
  'plugins.stremio.cfg.key.d': 'आपकी Wyzie key. आवश्यक।',
  'plugins.stremio.cfg.langs.f': 'Languages',
  'plugins.stremio.cfg.langs.d':
    'ISO 639-1 codes, comma से अलग किए गए। खाली का मतलब सभी languages।',
  'plugins.stremio.cfg.hi.f': 'Hearing-impaired',
  'plugins.stremio.cfg.hi.d':
    'केवल hearing-impaired subtitles लौटाएं (hi=true भेजता है)। डिफ़ॉल्ट रूप से बंद।',
  'plugins.stremio.cfg.note':
    'इनमें से किसी को भी बाद में बदलने के लिए, [stremio.wyzie.io/configure](https://stremio.wyzie.io/configure) फिर से खोलें, समायोजित करें, और फिर से install करें।',
  'plugins.stremio.local':
    'फिर `http://127.0.0.1:7000/configure` खोलें, अपनी key paste करें, और Stremio में install करें।',
  'plugins.stremio.quota':
    'अगर आपकी key अपनी सीमा तक पहुँच जाती है, तो add-on [store.wyzie.io](https://store.wyzie.io) से link करने वाली एक एकल subtitle entry दिखाता है ताकि आप top up या subscribe कर सकें। ऐसा करते ही, subtitles तुरंत लौट आते हैं।',
  'plugins.stremio.ts.none':
    '**कोई subtitles नहीं दिखते।** सुनिश्चित करें कि title का Stremio में एक IMDB ID हो (अधिकांश catalog items का होता है) और आपकी चुनी हुई languages में वास्तव में उस title के subtitles हों। सब कुछ देखने के लिए language filter हटाकर देखें।',
  'plugins.stremio.ts.key':
    '**अमान्य key, या कुछ load नहीं होता।** configure page फिर से खोलें और अपनी key फिर से paste करें; एक अतिरिक्त space इसे तोड़ देता है। पुष्टि करें कि key [store.wyzie.io/dashboard](https://store.wyzie.io/dashboard) पर काम करती है।',
  'plugins.stremio.ts.episode':
    '**Series episode match नहीं हो रहा।** Wyzie season और episode पर match करता है; सुनिश्चित करें कि Stremio सही episode entry चला रहा है, न कि कोई सामान्य series page।',

  'plugins.bazarr.intro':
    '[Bazarr](https://www.bazarr.media/) **Plex, Jellyfin, Emby, Sonarr, और Radarr** के लिए subtitles को एक ही जगह प्रबंधित करता है। Wyzie को provider के रूप में जोड़ने से उन सभी servers को, एक ही key के माध्यम से, हर उस Wyzie स्रोत तक पहुँच मिल जाती है जिसका आपकी key उपयोग कर सकती है।',
  'plugins.bazarr.note':
    'यह Plex और Jellyfin के साथ Wyzie का उपयोग करने का अनुशंसित तरीका है। Bazarr subtitle files को आपके media के बगल में download करता है, और आपका server उन्हें स्वचालित रूप से उठा लेता है, इसलिए किसी अलग native plugin की आवश्यकता नहीं है।',
  'plugins.bazarr.before':
    '[store.wyzie.io/redeem](https://store.wyzie.io/redeem) पर एक मुफ़्त Wyzie API key प्राप्त करें, और अपनी Bazarr install files तक पहुँच रखें (विशिष्ट Docker path: `/opt/bazarr/bazarr/`)।',
  'plugins.bazarr.install.1':
    '[wyzie-plugins repository](https://github.com/wyziedevs/wyzie-plugins) से [bazarr/wyzie.py](https://github.com/wyziedevs/wyzie-plugins/blob/main/bazarr/wyzie.py) download करें (या `git clone https://github.com/wyziedevs/wyzie-plugins.git`) और इसे `bazarr/subliminal_patch/providers/wyzie.py` में copy करें।',
  'plugins.bazarr.install.2':
    '`bazarr/subliminal_patch/extensions.py` को edit करें और **दोनों** `provider_registry` और `provider_manager` में `wyzie` जोड़ें।',
  'plugins.bazarr.install.3':
    '`api_key`, `prefer_hi`, और `sources` settings को expose करने के लिए `bazarr/list_subtitles.py` (या आपके version के आधार पर `bazarr/config.py`) को edit करें। किसी मौजूदा provider जैसे `opensubtitlescom` से pattern copy करें।',
  'plugins.bazarr.install.4': 'Bazarr को restart करें।',
  'plugins.bazarr.install.5':
    '**Settings, Providers, Wyzie** में जाएँ, अपनी API key paste करें, और save करें।',
  'plugins.bazarr.install.after':
    'इस provider को Bazarr में upstream करने वाला एक first-class pull request योजनाबद्ध है। तब तक यह एक drop-in file है जिसे आप अपने स्वयं के install में जोड़ते हैं।',
  'plugins.bazarr.cfg.key': 'आपकी Wyzie key. आवश्यक।',
  'plugins.bazarr.cfg.hi':
    'केवल hearing-impaired subtitles लौटाएं (hi=true भेजता है)।',
  'plugins.bazarr.cfg.sources':
    'query करने के लिए providers की comma से अलग सूची, या `all`।',
  'plugins.bazarr.quota.402':
    '**402 या 429** (balance खाली या दैनिक सीमा पूरी): Bazarr [store.wyzie.io](https://store.wyzie.io) के link के साथ एक note log करता है और कोई परिणाम नहीं लौटाता, इसलिए यह साफ़-सुथरे ढंग से आपके अन्य providers पर fall back हो जाता है। कुछ भी crash नहीं होता।',
  'plugins.bazarr.quota.401':
    '**401** (key गायब) या **403** (अज्ञात key, या hold पर रखी गई key): Bazarr एक authentication error दिखाता है ताकि आपको पता चले कि key जाँचनी है या फिर से दर्ज करनी है।',
  'plugins.bazarr.ts.missing':
    '**Wyzie providers सूची में नहीं दिखता।** `extensions.py` को edit करने वाले install step को फिर से जाँचें; entry `provider_registry` और `provider_manager` दोनों में होनी चाहिए, फिर Bazarr को restart करें।',
  'plugins.bazarr.ts.none':
    '**कोई subtitles नहीं मिले।** पुष्टि करें कि item का Bazarr में एक IMDB ID हो और जिन languages को आपने enable किया है उनके लिए subtitles मौजूद हों। `sources` को केवल तभी संकीर्ण करें जब आप ऐसा करना चाहते हों।',
  'plugins.bazarr.ts.settings':
    '**Settings fields गायब हैं।** आपके Bazarr version के लिए settings step लागू नहीं हुआ; किसी काम करने वाले provider settings block से तुलना करें और restart करें।',

  'plugins.kodi.intro':
    '**Kodi 19+ (Matrix और बाद के)**, LibreELEC, और CoreELEC के लिए एक subtitle service। यह Kodi के मानक `xbmc.subtitle.module` extension point का उपयोग करता है, इसलिए यह वहाँ दिखता है जहाँ भी Kodi subtitles ढूँढता है।',
  'plugins.kodi.before':
    '[store.wyzie.io/redeem](https://store.wyzie.io/redeem) पर एक मुफ़्त Wyzie API key प्राप्त करें।',
  'plugins.kodi.repo.intro':
    'repository को एक बार install करने से Kodi आपके लिए add-on को **auto-update** कर सकता है।',
  'plugins.kodi.repo.1':
    'repository installer download करें: [**repository.wyzie.zip**](https://kodi.wyzie.io/repository.wyzie.zip)।',
  'plugins.kodi.repo.2':
    'Kodi में: **Settings, Add-ons, Install from zip file**, फिर `repository.wyzie.zip` चुनें। अगर Kodi इसे block करता है, तो पहले **Settings, System, Add-ons, Unknown sources** enable करें।',
  'plugins.kodi.repo.3':
    '**Settings, Add-ons, Install from repository, Wyzie Repository, Subtitle services, Wyzie Subs, Install.**',
  'plugins.kodi.repo.4':
    '**Settings, Player, Language, Default subtitle service**, फिर **Wyzie Subs** चुनें।',
  'plugins.kodi.repo.5':
    'Wyzie Subs add-on settings खोलें और अपनी **API key** paste करें।',
  'plugins.kodi.zip.intro':
    'अगर आप repository नहीं जोड़ना चाहते तो इसका उपयोग करें। ध्यान दें: zip install **auto-update नहीं** होता।',
  'plugins.kodi.zip.1':
    'add-on zip प्राप्त करें: `service.subtitles.wyzie-<version>.zip`। इसे खुद build करने के लिए, [wyzie-plugins repository](https://github.com/wyziedevs/wyzie-plugins) को clone करें (`git clone https://github.com/wyziedevs/wyzie-plugins.git`) और उसके `kodi/` folder को zip करें ताकि zip में अपनी root पर `addon.xml` हो।',
  'plugins.kodi.zip.2':
    'Kodi में: **Settings, Add-ons, Install from zip file**, फिर zip चुनें। अगर Kodi इसे block करता है, तो पहले **Settings, System, Add-ons, Unknown sources** enable करें।',
  'plugins.kodi.zip.3':
    '**Settings, Player, Language, Default subtitle service**, फिर **Wyzie Subs** चुनें।',
  'plugins.kodi.zip.4':
    'Wyzie Subs add-on settings खोलें और अपनी **API key** paste करें।',
  'plugins.kodi.cfg.key': 'आपकी Wyzie key. आवश्यक।',
  'plugins.kodi.cfg.hi':
    'केवल hearing-impaired subtitles लौटाएं (hi=true भेजता है)।',
  'plugins.kodi.cfg.langs':
    'Languages को Kodi की चुनी हुई subtitle languages से लिया जाता है और स्वचालित रूप से ISO 639-1 में map किया जाता है।',
  'plugins.kodi.matching.1':
    'जब कुछ चल रहा होता है, Kodi IMDB number, season, और episode को expose करता है। add-on उन्हें पढ़ता है, `sub.wyzie.io/search` को query करता है, और मेल खाते subtitles लौटाता है। चूँकि Wyzie ID-संचालित है (IMDB और TMDB), movies और series दोनों के लिए matches सटीक होते हैं।',
  'plugins.kodi.matching.2':
    '**Manual search** अभी एक notification दिखाता है और कुछ नहीं करता, क्योंकि Wyzie IDs पर match करता है, titles पर नहीं। title-से-ID lookup roadmap पर है। अभी के लिए, playback के दौरान Kodi को स्वचालित रूप से search करने दें।',
  'plugins.kodi.quota':
    '402 या 429 response एक Kodi toast notification दिखाता है जो आपको top up या subscribe करने के लिए [store.wyzie.io](https://store.wyzie.io) की ओर इशारा करता है।',
  'plugins.kodi.ts.notoffered':
    '**playback के दौरान Wyzie offer नहीं होता।** पुष्टि करें कि यह **Default subtitle service** के रूप में set है और चल रहे item का एक IMDB ID हो।',
  'plugins.kodi.ts.key':
    '**अमान्य key.** add-on settings फिर से खोलें और अपनी key फिर से paste करें।',
  'plugins.kodi.ts.episode':
    '**किसी episode के लिए कुछ नहीं।** सुनिश्चित करें कि Kodi के पास file के लिए सही season और episode metadata हो; scrape की गई library items सबसे अच्छा काम करती हैं।',
};

export default messages;
