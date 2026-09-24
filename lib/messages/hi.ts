const messages: Record<string, string> = {
  // Navigation
  'nav.language': 'भाषा',

  // Index / Landing Page
  'index.subtitle':
    'Wyzie एक ओपन-सोर्स टूलसेट है जो सबटाइटल स्क्रैप करने और इससे जुड़ी हर चीज़ के लिए बनाया गया है।',
  'index.cta.start': 'शुरू करें',
  'index.cta.store': 'देखें',

  'index.card.keys.title': 'मुफ्त API Keys',
  'index.card.keys.body':
    'store.wyzie.io/redeem पर त्वरित Gmail वेरिफिकेशन के साथ मुफ्त API key प्राप्त करें। बिना किसी शुल्क के 1,000 requests/दिन। अधिक उपयोग के लिए Paid प्लान उपलब्ध हैं।',

  'index.card.ai.title': 'AI अनुवाद',
  'index.card.ai.body':
    'किसी भी सबटाइटल को मांग पर 80+ भाषाओं में अनुवाद करें। cue by cue स्ट्रीम करता है ताकि प्लेबैक कुछ ही सेकंड में शुरू हो सके। Pro keys पर उपलब्ध है।',

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
    'Wyzie Subs एक मुफ्त और मुक्त ओपन-सबटाइटल्स स्क्रैपिंग API है। API पर request करने के दो तरीके हैं: हमारे NPM पैकेज का उपयोग करना या सीधे Wyzie API को फेच करना। मैं हमारे पैकेज का उपयोग करने की सलाह देता हूँ, लेकिन कुछ लोगों को types बोझिल लग सकते हैं। API का उपयोग करने के लिए, आपको पहले यह निर्णय लेना होगा।',
  'subs.intro.note.ai':
    'AI अनुवाद Pro keys के लिए लाइव है। कोई भी शीर्षक, 80+ लक्षित भाषाएं, अनुवादक के काम करते समय स्ट्रीम किया जाता है।',
  'subs.intro.important.apikey':
    'सभी requests के लिए API key आवश्यक है। [store.wyzie.io/redeem](https://store.wyzie.io/redeem) पर मुफ्त key प्राप्त करें (Gmail वेरिफिकेशन, 1,000 requests/दिन)। अधिक उपयोग के लिए, [Pro और top-up प्लान](https://store.wyzie.io) उपलब्ध हैं। विवरण के लिए API Keys पृष्ठ देखें।',
  'subs.intro.note.npm':
    'यदि आप TypeScript या JavaScript से परिचित हैं तो हम दृढ़ता से NPM पैकेज की सलाह देते हैं',
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
    'Wyzie Worker एक हल्का Cloudflare Worker प्रॉक्सी है जो आपकी API key को server-side पर inject करता है। इसे Cloudflare Workers पर deploy करें और अपनी key को NITRO_API_TOKEN environment variable के रूप में सेट करें। फिर अपने client requests को sub.wyzie.io के बजाय अपने worker URL पर point करें - worker आपकी key को संलग्न करके उन्हें forward करता है।',
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
    'यह कोई scraper नहीं है। सबसे अच्छे उपलब्ध स्रोत सबटाइटल से मांग पर AI-translated SRT उत्पन्न होता है। पूरी जानकारी के लिए AI अनुवाद गाइड देखें।',
  'subs.sources.ai.content': 'कुछ भी जिसके लिए Wyzie SRT खोज सके',
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
  'subs.pkg.param.hi': 'सुनने में अक्षम सबटाइटल के लिए Boolean।',
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
    'हमारे types बहुत सरल और अच्छी तरह से documented हैं। GitHub repository में linked types.ts फ़ाइल देखें।',
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
    'सुनने में अक्षम सबटाइटल को प्राथमिकता देना है या नहीं।',
  'subs.direct.param.encoding': 'Character encoding filter।',
  'subs.direct.param.source':
    'Query करने के लिए सबटाइटल providers (all हर सक्षम स्रोत को query करता है; डिफ़ॉल्ट charlie)।',
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
  'subs.direct.data.url': 'सबटाइटल फ़ाइल का URL।',
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
    '/search response का हर url https://sub.wyzie.io/c/... की ओर point करता है और उसमें एक tok query parameter होता है। tok encrypted होता है, इसलिए यह आपकी API key को उजागर नहीं करता, और यह 60 दिनों तक valid रहता है। URL को जैसा है वैसा ही उपयोग करें। एक search पर 1 request खर्च होती है और हर download पर 1 और, जो उस key पर bill होती है जिसने search चलाया था। जब वह key किसी download का भुगतान नहीं कर सकती, तो link अस्वीकार कर दिया जाता है:',
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
    'AI अनुवाद एक **Pro फीचर** है। प्रत्येक अनुवाद आपकी key के balance से **100 requests** खर्च करता है, cache hit पर भी और ताज़े अनुवाद पर भी। मुफ्त keys इसका उपयोग नहीं कर सकतीं।',
  'subs.translate.p1':
    'Wyzie किसी भी सबटाइटल को तुरंत 80+ भाषाओं में अनुवाद कर सकता है। अनुवाद model के उत्पन्न करते समय वापस stream होते हैं, इसलिए पूरी फ़ाइल का इंतजार करने के बजाय प्लेबैक एक या दो सेकंड के भीतर शुरू हो सकती है। परिणाम 30 दिनों के लिए cache किए जाते हैं, इसलिए दूसरा व्यक्ति जो उसी अनुवाद के लिए पूछता है उसे तुरंत मिलता है।',

  'subs.translate.ways.h2': 'इसे उपयोग करने के दो तरीके',
  'subs.translate.way1.h3': '1. Search Response से एक भाषा चुनें',
  'subs.translate.way1.p1':
    'हर /search response में अब प्रत्येक समर्थित भाषा के लिए एक अतिरिक्त entry शामिल है जिसमें "ai": true और एक url है जो /translate पर point करता है। बस AI rows को अपने UI में किसी अन्य सबटाइटल row की तरह treat करें: जब उपयोगकर्ता किसी पर click करे, URL fetch करें।',
  'subs.translate.way1.filter':
    'यदि आप AI rows को अपने UI से छुपाना चाहते हैं, तो उन्हें filter करें:',
  'subs.translate.way2.h3': '2. /translate को सीधे Call करें',

  'subs.translate.param.id': 'TMDB या IMDB ID (आवश्यक)।',
  'subs.translate.param.target':
    'लक्षित भाषा उसके पूरे English नाम के रूप में (जैसे Spanish, Japanese, Brazilian Portuguese) (आवश्यक)।',
  'subs.translate.param.seasonEpisode':
    'TV के लिए। दोनों एक साथ मौजूद होने चाहिए।',
  'subs.translate.param.key':
    'आपकी API key। यदि आपको URL /search से मिला है तो इसके बजाय tk उपयोग करें।',
  'subs.translate.param.tk':
    '/search द्वारा वापस किया गया signed token। key के समकक्ष, लेकिन raw key को expose नहीं करता।',

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
    'Wyzie सामान्य स्रोतों में SRT सबटाइटल खोजता है, उपलब्ध होने पर English को प्राथमिकता देता है।',
  'subs.translate.how.step2':
    'SRT को 50 cues के chunks में विभाजित किया जाता है और क्रमिक रूप से अनुवाद किया जाता है। प्रत्येक chunk को पूरा होने पर अलग-अलग cache किया जाता है।',
  'subs.translate.how.step3':
    'Output आपको cue-by-cue वापस stream होता है। Players जो streaming SRT body को accept करते हैं, शेष पूरा होने से पहले पहली lines दिखाना शुरू कर सकते हैं।',
  'subs.translate.how.step4':
    'पूर्ण अनुवाद 30 दिनों के लिए Redis में cache किया जाता है, id, season, episode, और target द्वारा keyed।',

  'subs.translate.languages.h2': 'समर्थित लक्षित भाषाएं',
  'subs.translate.languages.p':
    '80+ भाषाएं जिनमें सभी प्रमुख European, Asian, African, और Middle Eastern भाषाएं शामिल हैं। English नाम pass करें (Spanish, es नहीं)। सूची किसी भी /search response में ai: true rows के रूप में भी वापस आती है, जो सत्य का canonical स्रोत है।',

  'subs.translate.limitations.h2': 'सीमाएं',
  'subs.translate.limit1':
    'AI अनुवाद के लिए SRT स्रोत की आवश्यकता है। ऐसे शीर्षक जहां हर उपलब्ध सबटाइटल .ass, .vtt, या किसी अन्य format में है, 404 No SRT found वापस करेंगे।',
  'subs.translate.limit2':
    'अनुवाद की गुणवत्ता स्रोत सबटाइटल पर निर्भर करती है। खराब-timed या mistyped स्रोत एक खराब-timed या mistyped अनुवाद उत्पन्न करता है।',
  'subs.translate.limit3':
    'कुछ उपयोगकर्ता AI rows से पूरी तरह बाहर निकलना चाह सकते हैं। अपने client में ai === false पर filter करें।',
  'subs.translate.limit4':
    'अनुवाद cache hits पर भी बिल होते हैं। चाहे ताज़ा generated हो या 30-दिन के cache से serve हो, प्रत्येक /translate request 100 requests खर्च करती है।',

  // Subs Synced Page
  'subs.synced.title': 'Wyzie Synced',
  'subs.synced.important':
    'Wyzie Synced एक **Pro फीचर** है: मुफ्त keys को 403 Paid feature मिलता है। हर सफल sync पर **1 request** खर्च होती है; जिस sync को कोई match नहीं मिलता, उसका charge नहीं लगता। इसके बाद synced link को download करना किसी भी अन्य download की तरह गिना जाता है।',
  'subs.synced.p1':
    'Online मिलने वाले सबटाइटल अक्सर आपके video से अलग किसी release के लिए timed होते हैं: वे कुछ सेकंड पहले या देर से शुरू होते हैं, या फिल्म आगे बढ़ने के साथ और ज़्यादा खिसकते जाते हैं क्योंकि वह release किसी दूसरे frame rate पर चलता है। Wyzie Synced आपकी copy का audio सुनता है, पता लगाता है कि लोग कहाँ बोल रहे हैं, और वह offset और frame-rate सुधार निकालता है जो सबटाइटल को उसके साथ मिला दे। आपको सुधार लागू किया हुआ एक सामान्य download link मिलता है (offset और fps [download options](/subs/usage/direct#download-options))।',
  'subs.synced.web.p':
    'सबसे आसान तरीका: [sub.wyzie.io/synced](https://sub.wyzie.io/synced) खोलें, अपनी Pro key दर्ज करें, अपनी video फ़ाइल और शीर्षक चुनें, और synced सबटाइटल download करें। Audio का विश्लेषण आपके browser में ही होता है, इसलिए video कभी upload नहीं होता: केवल speech timings भेजी जाती हैं। MKV, MP4, AVI और अधिकांश अन्य formats काम करते हैं, जिनमें AC3, E-AC3 और DTS audio भी शामिल हैं।',
  'subs.synced.api.p':
    'बताएं कि आपको कौन सा सबटाइटल चाहिए (एक download link, या शीर्षक ताकि Wyzie सबसे अच्छा match चुन सके) और audio भेजें: या तो आपके द्वारा खुद detect की गई speech timings, या स्वयं audio/video फ़ाइल।',
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
    'या स्वयं audio/video फ़ाइल: raw request body के रूप में (बाकी fields query string में), या multipart field media के रूप में। अधिकतम 95 MB, इसलिए पूरी फिल्म के लिए केवल audio track upload करें।',
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
    'कोई key नहीं, या url का download link अमान्य या expired है।',
  'subs.synced.error.403':
    'Key मुफ्त है (Wyzie Synced के लिए Pro आवश्यक है), अमान्य है, या hold पर है।',
  'subs.synced.error.404':
    'उस शीर्षक के लिए उस भाषा में कोई text सबटाइटल नहीं है।',
  'subs.synced.error.413':
    'media फ़ाइल 95 MB से बड़ी है। केवल audio track upload करें, या speech भेजें।',
  'subs.synced.error.422':
    'सबटाइटल किसी भी offset या frame rate पर audio से मेल नहीं खाता (शायद कोई दूसरा cut या episode है), audio में बहुत कम speech है, या फ़ाइल decode नहीं हो सकती।',
  'subs.synced.error.429':
    'Key request का भुगतान नहीं कर सकती, ठीक किसी भी अन्य call की तरह।',
  'subs.synced.error.503':
    'अन्य uploads को decode करने में व्यस्त है, या search कुछ समय के लिए अनुपलब्ध है। थोड़ी देर बाद फिर से प्रयास करें, या speech भेजें।',
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

  // Subs API Keys Page
  'subs.keys.title': 'API Keys',
  'subs.keys.p1':
    'Wyzie Subs को सभी requests के लिए API key की आवश्यकता है। एक मुफ्त tier अधिकांश use cases को cover करती है; paid plans भारी उपयोग को संभालते हैं।',

  'subs.keys.tiers.h2': 'Tiers',
  'subs.keys.tier.free': 'मुफ्त (Gmail आवश्यक)',
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
    'एक Gmail पता दर्ज करें (मुफ्त tier के लिए केवल Gmail स्वीकार किया जाता है)।',
  'subs.keys.free.step3': 'वह 6-अंकीय कोड दर्ज करें जो हम आपको email करते हैं।',
  'subs.keys.free.step4':
    'आपको wyzie-abc123... जैसी दिखने वाली API key मिलती है',
  'subs.keys.free.gmail':
    'प्रत्येक Gmail पता केवल एक मुफ्त key redeem कर सकता है। पहले से उस email से जुड़ी मुफ्त key थी? फिर से verify करने पर बस आपकी मौजूदा key वापस मिलती है।',

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
    '[Wyzie Worker](https://github.com/wyziedevs/wyzie-worker) का उपयोग करें: एक मुफ्त Cloudflare Worker proxy जो आपकी key को server-side रखता है। अपने client को sub.wyzie.io के बजाय Worker URL पर point करें।',
  'subs.keys.protect.option2':
    'अपना खुद का proxy चलाएं: कोई भी backend endpoint जो sub.wyzie.io पर forward करने से पहले key जोड़ता है, काम करता है। 10-line उदाहरण के लिए Intro पृष्ठ देखें।',
  'subs.keys.protect.devtools':
    'यदि key DevTools में network tab में दिखती है, तो वह exposed है। मान लें यह public है और support को email करके इसे rotate करें।',

  'subs.keys.using.h2': 'अपनी Key का उपयोग करना',
  'subs.keys.using.p': 'हर API request में &key=YOUR_KEY जोड़ें:',
  'subs.keys.using.npm.h3': 'NPM पैकेज',

  'subs.keys.limit.h2': 'सीमा तक पहुँचना',
  'subs.keys.limit.p':
    'एक search पर 1 request खर्च होती है और हर सबटाइटल download पर 1 request, इसलिए एक बार search करके एक फ़ाइल download करने में 2 खर्च होती हैं। AI अनुवाद में प्रति call 100 requests खर्च होती हैं।',
  'subs.keys.limit.free':
    '**मुफ्त tier** समाप्त -> API X-RateLimit-Reset और Retry-After headers के साथ 429 वापस करती है। दैनिक counter UTC midnight पर reset होता है।',
  'subs.keys.limit.paid':
    '**Paid balance** समाप्त -> API 402 वापस करती है। [store.wyzie.io/topup](https://store.wyzie.io/topup) पर top up करें या अपने dashboard में **auto top-up** सक्षम करें ताकि जब आपका balance आपकी निर्धारित threshold से नीचे जाए तो स्वचालित रूप से refill हो।',
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
    '[store.wyzie.io](https://store.wyzie.io) पर जाएं और अपने registered email के साथ "forgot key" flow का उपयोग करें; हम आपकी मौजूदा key फिर से भेजेंगे।',
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
    '**Full HTTP Method Support**: GET, POST, PUT, DELETE, और अन्य सभी HTTP methods',
  'i6shark.intro.feature3':
    '**HMAC-SHA256 Authentication**: user-agent आधारित tokens का उपयोग करके सुरक्षित API key authentication',
  'i6shark.intro.feature4':
    '**Intelligent IP Pool Management**: configurable pool size के साथ automatic IP rotation। Smart IP lifecycle management। प्रति-IP request counting। inactivity threshold के आधार पर unused IP cleanup।',
  'i6shark.intro.feature5':
    '**Advanced Request Handling**: Custom header forwarding। Cloudflare और CDN header stripping। एकाधिक URL parameter formats का समर्थन। system default IP पर optional fallback।',
  'i6shark.intro.feature6':
    '**Host Whitelisting**: सुरक्षा के लिए Built-in domain whitelist (code में configurable)',
  'i6shark.intro.feature7':
    '**Automatic Maintenance**: Periodic IP pool flushing। Subnet validation और cleanup। Connection pooling और keepalive optimization।',
  'i6shark.intro.feature8':
    '**High Performance**: buffer pooling के साथ Concurrent request handling। Configurable timeouts और connection limits। Efficient IPv6 address management।',
  'i6shark.intro.feature9':
    '**Debug Mode**: troubleshooting और monitoring के लिए Detailed logging',

  'i6shark.intro.requirements.h2': 'आवश्यकताएं',
  'i6shark.intro.req1': 'Go 1.20 या उच्चतर',
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
    'SharedSecret, IPv6Prefix, और Interface को अपने server से match करने के लिए update करें। शेष tuning constants के sensible defaults हैं और आमतौर पर बदलाव की आवश्यकता नहीं होती।',
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
    'API tokens एक shared secret key के साथ HMAC-SHA256 का उपयोग करके generate होते हैं। key generation के लिए input user-agent header है। implementation details के लिए source code में validateAPIToken function देखें।',

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
    '**Sources:** OpenSubtitles, SubDL, और Podnapisi, Wyzie के माध्यम से aggregate किए गए।',
  'plugins.index.shared.matching':
    '**Matching:** Wyzie IMDB और TMDB IDs के साथ-साथ season और episode द्वारा संचालित होता है, इसलिए movies और series दोनों के लिए matches सटीक होते हैं।',
  'plugins.index.shared.quota':
    '**Quota:** जब आपकी key खत्म हो जाती है, तो plugin चुपचाप fail होने के बजाय [store.wyzie.io](https://store.wyzie.io) से link करने वाला एक मित्रवत संकेत दिखाता है। Top up करें या subscribe करें और आप फिर से काम पर लौट आते हैं।',
  'plugins.index.shared.languages':
    '**Languages:** 100+, प्रति plugin चुनने योग्य।',
  'plugins.index.outro': 'शुरू करने के लिए ऊपर अपना platform चुनें।',

  'plugins.stremio.intro':
    '[Stremio](https://www.stremio.com/) के लिए एक one-click subtitle add-on। यह OpenSubtitles, SubDL, और Podnapisi को Wyzie के माध्यम से aggregate करता है और movies तथा series दोनों के लिए, हर उस platform पर काम करता है जहाँ Stremio चलता है।',
  'plugins.stremio.before':
    'आपको एक मुफ़्त Wyzie API key चाहिए। एक [store.wyzie.io/redeem](https://store.wyzie.io/redeem) पर प्राप्त करें, या [store.wyzie.io](https://store.wyzie.io/#plans) पर Pro key खरीदें या subscribe करें।',
  'plugins.stremio.install.1':
    '[stremio.wyzie.io/configure](https://stremio.wyzie.io/configure) खोलें।',
  'plugins.stremio.install.2': 'अपनी **API key** paste करें।',
  'plugins.stremio.install.3':
    'वैकल्पिक: अपनी पसंदीदा **languages** को ISO 639-1 codes के रूप में, comma से अलग करके दर्ज करें (उदाहरण के लिए `en,es,fr`)। सभी languages के लिए खाली छोड़ें।',
  'plugins.stremio.install.4':
    'वैकल्पिक: अगर आप **hearing-impaired** subtitles पसंद करते हैं तो उन्हें toggle करें।',
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
    'उपलब्ध होने पर hearing-impaired subtitles को प्राथमिकता दें।',
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
    '[Bazarr](https://www.bazarr.media/) **Plex, Jellyfin, Emby, Sonarr, और Radarr** के लिए subtitles को एक ही जगह प्रबंधित करता है। Wyzie को provider के रूप में जोड़ने से उन सभी servers को एक ही key के माध्यम से OpenSubtitles, SubDL, और Podnapisi तक पहुँच मिल जाती है।',
  'plugins.bazarr.note':
    'यह Plex और Jellyfin के साथ Wyzie का उपयोग करने का अनुशंसित तरीका है। Bazarr subtitle files को आपके media के बगल में download करता है, और आपका server उन्हें स्वचालित रूप से उठा लेता है, इसलिए किसी अलग native plugin की आवश्यकता नहीं है।',
  'plugins.bazarr.before':
    '[store.wyzie.io/redeem](https://store.wyzie.io/redeem) पर एक मुफ़्त Wyzie API key प्राप्त करें, और अपनी Bazarr install files तक पहुँच रखें (विशिष्ट Docker path: `/opt/bazarr/bazarr/`)।',
  'plugins.bazarr.install.1':
    '`wyzie.py` को `bazarr/subliminal_patch/providers/wyzie.py` में copy करें।',
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
  'plugins.bazarr.cfg.hi': 'hearing-impaired subtitles को प्राथमिकता दें।',
  'plugins.bazarr.cfg.sources':
    'query करने के लिए providers की comma से अलग सूची, या `all`।',
  'plugins.bazarr.quota.402':
    '**402 या 429** (balance खाली या दैनिक सीमा पूरी): Bazarr [store.wyzie.io](https://store.wyzie.io) के link के साथ एक note log करता है और कोई परिणाम नहीं लौटाता, इसलिए यह साफ़-सुथरे ढंग से आपके अन्य providers पर fall back हो जाता है। कुछ भी crash नहीं होता।',
  'plugins.bazarr.quota.401':
    '**401** (खराब key): Bazarr एक authentication error दिखाता है ताकि आपको पता चले कि key फिर से दर्ज करनी है।',
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
    'add-on zip प्राप्त करें: `service.subtitles.wyzie-<version>.zip`। अगर आपके पास source है, तो `kodi/` folder को zip करें ताकि zip में अपनी root पर `addon.xml` हो।',
  'plugins.kodi.zip.2':
    'Kodi में: **Settings, Add-ons, Install from zip file**, फिर zip चुनें। अगर Kodi इसे block करता है, तो पहले **Settings, System, Add-ons, Unknown sources** enable करें।',
  'plugins.kodi.zip.3':
    '**Settings, Player, Language, Default subtitle service**, फिर **Wyzie Subs** चुनें।',
  'plugins.kodi.zip.4':
    'Wyzie Subs add-on settings खोलें और अपनी **API key** paste करें।',
  'plugins.kodi.cfg.key': 'आपकी Wyzie key. आवश्यक।',
  'plugins.kodi.cfg.hi': 'hearing-impaired subtitles को प्राथमिकता दें।',
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
