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
    'यदि निर्दिष्ट नहीं किया गया तो डिफ़ॉल्ट स्रोत opensubtitles है',
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
    'Query करने के लिए सबटाइटल providers (हर सक्षम स्रोत के लिए all)।',
  'subs.pkg.param.release': 'Release/scene filters (एक सूची स्वीकार करता है)।',
  'subs.pkg.param.filename':
    'Filename filters; aliases file और fileName समर्थित हैं।',
  'subs.pkg.param.origin': 'Content origin filter (जैसे, WEB, BLURAY, DVD)।',
  'subs.pkg.param.key':
    'आपकी API key (आवश्यक)। store.wyzie.io/redeem पर एक मुफ्त पाएं।',
  'subs.pkg.param.refresh':
    'Cache को bypass करें और स्रोतों से ताज़े परिणाम fetch करें।',

  'subs.pkg.helpers':
    'पैकेज में हल्के TMDB helpers भी शामिल हैं: searchTmdb, getTvDetails, और getSeasonDetails जो /search से पहले IDs खोजने के लिए हैं। इसके अतिरिक्त, getSources का उपयोग वर्तमान में सक्षम सबटाइटल स्रोतों की सूची fetch करने के लिए किया जा सकता है।',
  'subs.pkg.types.h3': 'Types',
  'subs.pkg.type.search': 'API द्वारा पहचाने जाने वाले सभी valid parameters।',
  'subs.pkg.type.query':
    'wyzie-subs API के लिए उपलब्ध सभी parameters (वैकल्पिक और आवश्यक)।',
  'subs.pkg.type.subtitle': 'API से सभी वापसी मान उनके संबंधित types के साथ।',
  'subs.pkg.type.sources': '/sources endpoint का Response type।',
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
    'Query करने के लिए सबटाइटल providers (all हर सक्षम स्रोत को query करता है; डिफ़ॉल्ट opensubtitles)।',
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
  'subs.direct.important.imdb':
    "IMDB ID का उपयोग करते समय, सुनिश्चित करें कि पहले दो अक्षर ('tt') ID की शुरुआत में शामिल हैं।",

  'subs.direct.data.h3': 'वापस किया गया Data',
  'subs.direct.data.id': 'सबटाइटल फ़ाइल का ID।',
  'subs.direct.data.url': 'सबटाइटल फ़ाइल का URL।',
  'subs.direct.data.flagUrl': 'भाषा के locale के झंडे का URL।',
  'subs.direct.data.format': 'सबटाइटल फ़ाइल का format।',
  'subs.direct.data.encoding': 'सबटाइटल फ़ाइल का character encoding।',
  'subs.direct.data.display': 'सबटाइटल की भाषा, बड़े अक्षरों में।',
  'subs.direct.data.language': 'भाषा का ISO 3166-2 कोड।',
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
  'subs.keys.limit.free':
    '**मुफ्त tier** समाप्त -> API X-RateLimit-Reset और Retry-After headers के साथ 429 वापस करती है। दैनिक counter UTC midnight पर reset होता है।',
  'subs.keys.limit.paid':
    '**Paid balance** समाप्त -> API 402 वापस करती है। [store.wyzie.io/topup](https://store.wyzie.io/topup) पर top up करें या अपने dashboard में **auto top-up** सक्षम करें ताकि जब आपका balance आपकी निर्धारित threshold से नीचे जाए तो स्वचालित रूप से refill हो।',

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
};

export default messages;
