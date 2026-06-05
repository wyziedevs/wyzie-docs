const messages: Record<string, string> = {
  // Navigation
  'nav.language': 'Dil',

  // Index / Landing Page
  'index.subtitle':
    'Wyzie, altyazı aramak ve benzeri işlemler için açık kaynaklı bir araç setidir.',
  'index.cta.start': 'Başlarken',
  'index.cta.store': 'İncele',

  'index.card.keys.title': 'Ücretsiz API Anahtarları',
  'index.card.keys.body':
    'store.wyzie.io/redeem adresinden hızlı bir Gmail doğrulamasıyla ücretsiz API anahtarı alın. Günde 1.000 istek ücretsiz. Daha yüksek kullanım için ücretli planlar mevcuttur.',

  'index.card.ai.title': 'AI Çevirisi',
  'index.card.ai.body':
    "Herhangi bir altyazıyı talep üzerine 80'den fazla dile çevirin. Oynatma saniyeler içinde başlayabilsin diye ipucu ipucu yayınlar. Pro anahtarlarda mevcuttur.",

  'index.card.reliable.title': 'Güvenilir',
  'index.card.reliable.body':
    'Tutarlı çalışma süremiz, (neredeyse) günlük güncellemelerimiz ve hızlı önbelleklememizle gurur duyuyoruz.',

  'index.card.simple.title': 'Sadeliği Yeniden Tanımlandı',
  'index.card.simple.body':
    'Uygulaması kolay, kullanımı kolay. Wyzie mümkün olduğunca basit olacak şekilde tasarlanmıştır.',

  // Donate Page
  'donate.title': 'Lütfen Bağış Yapın',
  'donate.body':
    "Merhaba, Wyzie artık büyük ölçüde bağışlara bağımlı (ki bunları çok az alıyorum) ve ben 16 yaşındayım, yarı zamanlı çalışıyorum; bazen genel API'yi çalıştırmanın faturası aylık 100$'ı aşıyor. Dış yardım almazsam buna devam edemem, gerçekten üzgünüm ama bu proje başlangıçta kendi cebimden karşılayabileceğimin çok ötesine geçti.",
  'donate.cta': "Wyzie'yi Destekle",

  // Subs Intro Page
  'subs.intro.title': "Wyzie Subs'a Giriş",
  'subs.intro.p1':
    "Wyzie Subs, ücretsiz ve özgür bir açık altyazı kazıma API'sidir. API'ye istek yapmanın iki yolu vardır: NPM paketimizi kullanmak veya Wyzie API'sini doğrudan çağırmak. Paketi kullanmanızı öneririm, ancak bazıları türleri zahmetli bulabilir. API'yi kullanmak için önce bu kararı vermeniz gerekir.",
  'subs.intro.note.ai':
    "AI Çevirisi Pro anahtarlar için yayındadır. Herhangi bir başlık, 80'den fazla hedef dil, çevirmen çalışırken akış halinde döner.",
  'subs.intro.important.apikey':
    'Tüm istekler için bir API anahtarı gereklidir. [store.wyzie.io/redeem](https://store.wyzie.io/redeem) adresinden ücretsiz anahtar alın (Gmail doğrulaması, günde 1.000 istek). Daha yüksek kullanım için [Pro ve üst doldurma planları](https://store.wyzie.io) mevcuttur. Ayrıntılar için API Anahtarları sayfasına bakın.',
  'subs.intro.note.npm':
    "TypeScript veya JavaScript'e aşinaysanız NPM paketini şiddetle tavsiye ederiz",
  'subs.intro.btn.npm': 'NPM Paketi',
  'subs.intro.btn.direct': 'Doğrudan Çekme',

  'subs.intro.protect.h2': 'API Anahtarınızı Koruma',
  'subs.intro.protect.important':
    "**Gerçek olay:** Geliştiricilerin anahtarlarını doğrudan bir yayın sitesinin ön yüz JavaScript'ine yapıştırdığını gördük. Saatler içinde ilgisiz bir taraf anahtarı JS paketinden kazıdı ve günlük limit ya da ücretli bakiye tükenene kadar kullandı. Bu şekilde harcanan kota iade edilmez ve Şartlarımız kapsamında anahtar sahibinin sorumluluğu olarak değerlendirilir.",
  'subs.intro.protect.p1':
    'API anahtarınız özel tutulmalı ve **asla** şunlarda yer almamalıdır:',
  'subs.intro.protect.item1':
    "Tarayıcı JavaScript'i (bir script etiketine sunulan her şey)",
  'subs.intro.protect.item2':
    'Mobil uygulama ikilileri (Android/iOS, karmaşıklaştırılmış olanlar dahil)',
  'subs.intro.protect.item3': 'Tarayıcı uzantıları',
  'subs.intro.protect.item4':
    'Son kullanıcılara dağıtılan Electron / masaüstü uygulamalar',
  'subs.intro.protect.item5':
    "Genel Git depoları, gist'ler, yapıştırma siteleri veya ekran görüntüleri",
  'subs.intro.protect.p2':
    'Anahtar bir son kullanıcının makinesine ulaşırsa, onu genel kabul edin. İki güvenli yöntem vardır:',
  'subs.intro.protect.opt1.h3': 'Seçenek 1: Wyzie Worker Kullanın',
  'subs.intro.protect.opt1.p1':
    "Wyzie Worker, API anahtarınızı sunucu tarafında enjekte eden hafif bir Cloudflare Worker proxy'sidir. Cloudflare Workers'a dağıtın ve anahtarınızı NITRO_API_TOKEN ortam değişkeni olarak ayarlayın. Ardından istemci isteklerinizi sub.wyzie.io yerine worker URL'nize yönlendirin; worker istekleri anahtarınızı ekleyerek iletir.",
  'subs.intro.protect.opt2.h3': "Seçenek 2: Kendi Proxy'nizi Oluşturun",
  'subs.intro.protect.opt2.p1':
    "Wyzie Worker kullanmak istemiyorsanız herhangi bir çerçevede basit bir sunucu taraflı proxy oluşturabilirsiniz. Fikir aynıdır: arka ucunuz istemcinizdeki istekleri alır, API anahtarını ekler ve sub.wyzie.io'ya iletir.",

  // Subs Sources Page
  'subs.sources.title': 'Wyzie Subs Kaynakları',
  'subs.sources.p1':
    'Wyzie Subs, birden fazla sağlayıcıdan altyazıları bir araya getirir. Kaynak kullanılabilirliği, sağlayıcı durumuna veya bir kaynağın çökmesine bağlı olarak değişebilir. Her zaman yeni kaynaklar arıyorum, öneri için ulaşın.',

  'subs.sources.using.h2': 'Kaynakları Kullanma',
  'subs.sources.using.bullet1':
    'Tüm etkin kaynakları aynı anda sorgulamak için source=all kullanın',
  'subs.sources.using.bullet2':
    "Belirtilmezse varsayılan kaynak opensubtitles'tır",
  'subs.sources.using.bullet3':
    'Birden fazla kaynak virgülle ayrılmış liste olarak belirtilebilir',

  'subs.sources.api.h2': 'API Uç Noktası',
  'subs.sources.api.p1':
    'Şu anda etkin olan kaynakların listesini ve plan katmanlarını programatik olarak alabilirsiniz:',
  'subs.sources.api.free':
    'ücretsiz anahtarlar dahil her anahtarın sorgulayabileceği kaynaklar.',
  'subs.sources.api.paid': 'Pro anahtar gerektiren kaynaklar.',
  'subs.sources.api.allFree':
    'true olduğunda, tüm etkin kaynaklar tüm anahtarlar için kullanılabilir ve paid boştur.',

  'subs.sources.scope.h3': 'Anahtara göre kapsam belirleme',
  'subs.sources.scope.p1':
    'Bu anahtarın gerçekte kullanabileceği kaynakları öğrenmek için API anahtarınızı geçin:',
  'subs.sources.scope.p2':
    'Bu, kotanızdan istek harcamadan anahtara özel alanlar ekler:',
  'subs.sources.scope.available':
    'bu anahtarın şu anda sorgulayabileceği kaynaklar.',
  'subs.sources.scope.restricted':
    "bu anahtarın sorgulayamadığı etkin kaynaklar (kilidini açmak için Pro'ya yükseltin).",
  'subs.sources.scope.keyType': 'ücretsiz veya ücretli.',
  'subs.sources.scope.keyValid':
    'anahtar hatalı biçimlendirilmiş veya bulunamadığında false, anahtar doğrulanamadığında null olur (bu durumda available ve restricted atlanır).',

  'subs.sources.details.h2': 'Kaynak Ayrıntıları',

  'subs.sources.opensubtitles.desc':
    "Çevrimiçi en büyük altyazı veritabanı. Geniş bir dil yelpazesinde film ve TV dizilerini destekler. Resmi OpenSubtitles REST API'sini kullanır.",
  'subs.sources.opensubtitles.content': 'Filmler ve TV dizileri',
  'subs.sources.opensubtitles.languages': 'Kapsamlı çok dilli destek',
  'subs.sources.opensubtitles.formats':
    'SRT, ASS, SSA, VTT, SUB ve daha fazlası',

  'subs.sources.subdl.desc':
    'Geniş film ve TV dizisi seçkisiyle topluluk tarafından yönetilen bir altyazı sitesi.',
  'subs.sources.subdl.content': 'Filmler ve TV dizileri',
  'subs.sources.subdl.languages': 'Kapsamlı çok dilli destek',
  'subs.sources.subdl.formats': 'SRT, ASS, SSA, VTT, SUB ve daha fazlası',

  'subs.sources.subf2m.desc':
    'Filmler ve TV dizileri için kapsamlı dil desteğine sahip büyük bir altyazı deposu.',
  'subs.sources.subf2m.content': 'Filmler ve TV dizileri',
  'subs.sources.subf2m.languages': 'Kapsamlı çok dilli destek',
  'subs.sources.subf2m.formats': 'SRT, ASS, SSA, VTT, SUB ve daha fazlası',

  'subs.sources.podnapisi.desc':
    'En eski altyazı veritabanlarından biri. Film ve TV dizilerini kapsayan iyi küratörlü bir koleksiyon.',
  'subs.sources.podnapisi.content': 'Filmler ve TV dizileri',
  'subs.sources.podnapisi.languages': 'Kapsamlı çok dilli destek',
  'subs.sources.podnapisi.formats': 'SRT, ASS, SSA, VTT, SUB ve daha fazlası',

  'subs.sources.animetosho.desc':
    "AnimeTosho'da indekslenen torrent sürümlerinden doğrudan anime altyazı eklerini kazır.",
  'subs.sources.animetosho.content': 'Anime (TV dizileri)',
  'subs.sources.animetosho.languages':
    'Japonca, İngilizce ve sürüme bağlı diğer diller',
  'subs.sources.animetosho.formats': 'ASS, SRT, SSA ve diğerleri',
  'subs.sources.animetosho.note':
    "AnimeTosho Mayıs 2026'da kapanmaya planlanmaktadır.",

  'subs.sources.gestdown.desc':
    'Gestdown API aracılığıyla geniş dil desteğiyle TV dizileri için altyazı sağlar.',
  'subs.sources.gestdown.content': 'Yalnızca TV dizileri',
  'subs.sources.gestdown.languages': 'Kapsamlı çok dilli destek',
  'subs.sources.gestdown.formats': 'SRT, ASS ve daha fazlası',

  'subs.sources.jimaku.desc':
    "Topluluk tarafından yönetilen bir anime altyazı dosyaları deposu olan jimaku.cc'yi kazır. Başlıkları TMDB API kullanarak eşleştirir.",
  'subs.sources.jimaku.content': 'Anime (filmler ve TV dizileri)',
  'subs.sources.jimaku.languages':
    'Ağırlıklı olarak Japonca; mevcut dosyalara bağlı olarak İngilizce, Çince ve daha fazlası',
  'subs.sources.jimaku.formats': 'SRT, ASS, SSA, VTT, SUB ve diğerleri',

  'subs.sources.kitsunekko.desc':
    "Özel bir anime altyazı deposu olan kitsunekko.net'ten dizin listelerini kazır. Başlıkları TMDB API kullanarak eşleştirir.",
  'subs.sources.kitsunekko.content': 'Anime (TV dizileri)',
  'subs.sources.kitsunekko.languages': 'İngilizce ve Japonca altyazı dizinleri',
  'subs.sources.kitsunekko.formats': 'SRT, ASS, SSA, VTT, SUB ve diğerleri',

  'subs.sources.yify.desc':
    "IMDB ID ile eşleştirilen altyazılar için yifysubtitles.ch'yi kazır. Yalnızca filmler.",
  'subs.sources.yify.content': 'Yalnızca filmler (TV dizileri desteklenmez)',
  'subs.sources.yify.languages':
    'Kapsamlı çok dilli destek (Arnavutça, Arapça, İngilizce, Fransızca, İspanyolca ve çok daha fazlası)',
  'subs.sources.yify.formats': 'SRT (ZIP arşivi içinde teslim edilir)',

  'subs.sources.ajatttools.desc':
    'Ajatt-Tools/kitsunekko-mirror GitHub deposundan altyazıları çeker. Medya türüne göre düzenlenmiştir. Başlıkları TMDB API kullanarak eşleştirir.',
  'subs.sources.ajatttools.content': 'Anime ve drama (TV dizileri ve filmler)',
  'subs.sources.ajatttools.languages':
    'Ağırlıklı olarak Japonca; İngilizce, Çince ve diğerleri de dahil',
  'subs.sources.ajatttools.formats': 'SRT, ASS, SSA, VTT, SUB ve diğerleri',

  'subs.sources.ai.desc':
    'Bir kazıyıcı değil. Mevcut en iyi kaynak altyazıdan talep üzerine oluşturulan AI çevirisi SRT. Tüm ayrıntılar için AI Çevirisi kılavuzuna bakın.',
  'subs.sources.ai.content': "Wyzie'nin SRT bulabildiği her şey",
  'subs.sources.ai.languages': "80'den fazla hedef dil",
  'subs.sources.ai.formats': 'Yalnızca SRT',

  // Subs Package Page
  'subs.pkg.title': 'Wyzie NPM Paketini Kullanma',
  'subs.pkg.p1':
    'Wyzie Subs NPM paketi, altyazı aramak ve çekmek için basit ve kullanımı kolay bir arayüz sağlar.',
  'subs.pkg.install.h2': 'Kurulum',
  'subs.pkg.important':
    'Tüm istekler için bir API anahtarı gereklidir. [store.wyzie.io/redeem](https://store.wyzie.io/redeem) adresinden ücretsiz anahtar alın ve key parametresiyle geçin. Ayrıntılar için API Anahtarları sayfasına bakın.',
  'subs.pkg.usage.h2': 'Kullanım',
  'subs.pkg.params.h3': 'Parametreler',
  'subs.pkg.params.note':
    'Daha fazla bilgi için (veya takılırsanız) lütfen [Wyzie Subs ana sayfasını](https://sub.wyzie.io) ziyaret edin.',

  'subs.pkg.param.tmdb':
    "Film veya TV dizisinin TMDB ID'si (tmdb_id veya imdb_id gereklidir).",
  'subs.pkg.param.imdb':
    "Film veya TV dizisinin IMDB ID'si (imdb_id veya tmdb_id gereklidir).",
  'subs.pkg.param.format':
    'Döndürülecek dosya biçimleri (örn. srt, ass). Liste kabul eder.',
  'subs.pkg.param.season': 'Sezon numarası (episode gerektirir).',
  'subs.pkg.param.episode': 'Bölüm numarası (season gerektirir).',
  'subs.pkg.param.language':
    'Altyazı dili için ISO 639-1 kodları. Liste kabul eder.',
  'subs.pkg.param.encoding': 'Karakter kodlama filtresi (örn. utf-8, latin-1).',
  'subs.pkg.param.hi': 'İşitme engelli altyazılar için boolean.',
  'subs.pkg.param.source':
    'Sorgulanacak altyazı sağlayıcıları (tüm etkin kaynaklar için all).',
  'subs.pkg.param.release': 'Sürüm/sahne filtreleri (liste kabul eder).',
  'subs.pkg.param.filename':
    'Dosya adı filtreleri; file ve fileName takma adları desteklenir.',
  'subs.pkg.param.origin': 'İçerik kaynak filtresi (örn. WEB, BLURAY, DVD).',
  'subs.pkg.param.key':
    'API anahtarınız (gerekli). store.wyzie.io/redeem adresinden ücretsiz alın.',
  'subs.pkg.param.refresh':
    'Önbelleği atla ve kaynaklardan taze sonuçlar getir.',

  'subs.pkg.helpers':
    "Paket ayrıca hafif TMDB yardımcıları da içerir: /search'e gitmeden önce ID'leri hızlıca bulmak için searchTmdb, getTvDetails ve getSeasonDetails. Ayrıca getSources, şu anda etkin altyazı kaynaklarının listesini çekmek için kullanılabilir.",
  'subs.pkg.types.h3': 'Türler',
  'subs.pkg.type.search': 'API tarafından tanınan tüm geçerli parametreler.',
  'subs.pkg.type.query':
    'wyzie-subs API için mevcut tüm parametreler (isteğe bağlı ve zorunlu).',
  'subs.pkg.type.subtitle':
    "API'den dönen tüm değerler ve bunlara karşılık gelen türler.",
  'subs.pkg.type.sources': '/sources uç noktasından dönen yanıt türü.',
  'subs.pkg.types.end':
    'Türlerimiz çok basit ve iyi belgelenmiştir. GitHub deposunda bağlantılı types.ts dosyasına göz atın.',
  'subs.pkg.config.h3': 'Yapılandırma',
  'subs.pkg.config.p1':
    "Github'da bir kullanıcı yapılandırılabilir API ana bilgisayar adı istedi ve ben de 'vay canına, bu iyi bir fikir gibi görünüyor' dedim, bu yüzden aşağıda kullanım var. Sizi seviyorum arkadaşlar!",

  // Subs Direct Page
  'subs.direct.title': "Wyzie Subs'ı Doğrudan Çekme",
  'subs.direct.caution':
    'NPM paketini kullanmanızı şiddetle tavsiye ederim çünkü daha kolay ve güvenilirdir.',
  'subs.direct.p1':
    "NPM paketini kullanmamaya karar verdiyseniz, haydi başlayalım. Yalnızca API parametrelerini ve API'nin döndürdüğü verileri inceleyeceğim. API'ye nasıl istek yapacağınız tamamen size kalmış.",
  'subs.direct.important':
    'Tüm istekler için bir API anahtarı gereklidir. [store.wyzie.io/redeem](https://store.wyzie.io/redeem) adresinden ücretsiz anahtar alın ve her istekte &key=YOUR_KEY olarak ekleyin. Ayrıntılar için API Anahtarları sayfasına bakın.',

  'subs.direct.params.h3': 'Parametreler',
  'subs.direct.param.id': "Dizi veya filmin TMDB ya da IMDB ID'si (gerekli).",
  'subs.direct.param.seasonEpisode':
    'TV aramaları için sezon ve bölüm. Her ikisi de birlikte bulunmalıdır.',
  'subs.direct.param.language':
    'Dil filtresi (ISO 639-1 kodları). Birden fazla değer virgülle ayrılır.',
  'subs.direct.param.format':
    'Döndürülecek altyazı biçimleri. Birden fazla değere izin verilir.',
  'subs.direct.param.hi':
    'İşitme engelli altyazıların tercih edilip edilmeyeceği.',
  'subs.direct.param.encoding': 'Karakter kodlama filtresi.',
  'subs.direct.param.source':
    'Sorgulanacak altyazı sağlayıcıları (all her etkin kaynağı sorgular; varsayılan opensubtitles).',
  'subs.direct.param.release':
    'Sürüm veya sahne adı filtreleri (virgülle ayrılmış).',
  'subs.direct.param.file':
    'Dosya adı filtreleri (takma adlar: file, filename, fileName).',
  'subs.direct.param.origin':
    'İçerik kaynak filtresi, virgülle ayrılmış (örn. WEB, BLURAY, DVD).',
  'subs.direct.param.key':
    'API anahtarınız (gerekli). store.wyzie.io/redeem adresinden ücretsiz alın.',
  'subs.direct.param.refresh':
    'Önbelleği atla ve taze sonuçlar getir. Kaynakların güncellenmiş olabileceği durumlarda kullanın.',
  'subs.direct.important.imdb':
    "IMDB ID kullanırken, ID'nin başında ilk iki karakterin ('tt') bulunduğundan emin olun.",

  'subs.direct.data.h3': 'Dönen Veriler',
  'subs.direct.data.id': "Altyazı dosyasının ID'si.",
  'subs.direct.data.url': "Altyazı dosyasının URL'si.",
  'subs.direct.data.flagUrl': "Dilin yerel bayrağının URL'si.",
  'subs.direct.data.format': 'Altyazı dosyasının biçimi.',
  'subs.direct.data.encoding': 'Altyazı dosyasının karakter kodlaması.',
  'subs.direct.data.display': 'Altyazının dili, büyük harfle.',
  'subs.direct.data.language': 'Dilin ISO 3166-2 kodu.',
  'subs.direct.data.media': 'Altyazıların ait olduğu medyanın adı.',
  'subs.direct.data.isHearingImpaired':
    'Altyazının işitme engelliler için erişilebilir olup olmadığını gösteren boolean.',
  'subs.direct.data.source': 'Altyazının hangi kaynaktan kazındığı.',
  'subs.direct.data.release': 'Birincil sürüm adı.',
  'subs.direct.data.releases': 'Altyazıyla uyumlu diğer sürüm adları.',
  'subs.direct.data.fileName': 'Mevcut olduğunda orijinal dosya adı.',
  'subs.direct.data.downloadCount':
    'Kaynak platformdaki indirme sayısı (varsa).',
  'subs.direct.data.origin': 'İçerik kaynağı (örn. WEB, BluRay, DVD).',
  'subs.direct.data.matchedRelease':
    'Filtrenizle eşleşen sürüm değeri (sağlandıysa).',
  'subs.direct.data.matchedFilter':
    'Eşleşen kullanıcı tarafından sağlanan filtre (sağlandıysa).',
  'subs.direct.data.ai':
    'Giriş AI çevirisi bir altyazıysa true, normal kazınmış altyazılar için false. Yalnızca birini veya diğerini istediğinizde istemci taraflı filtre olarak kullanın.',

  // Subs Translate Page
  'subs.translate.title': 'AI Altyazı Çevirisi',
  'subs.translate.important':
    'AI çevirisi bir **Pro özelliğidir**. Her çeviri, önbellek isabeti dahil anahtarınızın bakiyesinden **100 istek** harcar. Ücretsiz anahtarlar bunu kullanamazlar.',
  'subs.translate.p1':
    "Wyzie herhangi bir altyazıyı anında 80'den fazla dile çevirebilir. Çeviriler model ürettikçe akış halinde döner, bu yüzden oynatma dosyanın tamamını beklemek yerine bir-iki saniye içinde başlayabilir. Sonuçlar 30 gün boyunca önbelleklenir; böylece aynı çeviriyi isteyen ikinci kişi anında alır.",

  'subs.translate.ways.h2': 'Kullanmanın İki Yolu',
  'subs.translate.way1.h3': '1. Arama Yanıtından Bir Dil Seçin',
  'subs.translate.way1.p1':
    'Her /search yanıtı artık desteklenen her dil için "ai": true olan ve /translate\'e işaret eden bir url içeren bir ekstra giriş içermektedir. AI satırlarını kullanıcı arayüzünüzdeki diğer altyazı satırları gibi değerlendirin: kullanıcı birini tıkladığında URL\'yi çekin.',
  'subs.translate.way1.filter':
    'AI satırlarını kullanıcı arayüzünüzden gizlemek istiyorsanız filtreleyin:',
  'subs.translate.way2.h3': "2. /translate'i Doğrudan Çağırın",

  'subs.translate.param.id': "TMDB veya IMDB ID'si (gerekli).",
  'subs.translate.param.target':
    'Tam İngilizce adıyla hedef dil (örn. Spanish, Japanese, Brazilian Portuguese) (gerekli).',
  'subs.translate.param.seasonEpisode':
    'TV için. Her ikisi de birlikte bulunmalıdır.',
  'subs.translate.param.key':
    "API anahtarınız. URL'yi /search'ten aldıysanız bunun yerine tk kullanın.",
  'subs.translate.param.tk':
    "/search tarafından döndürülen imzalı token. key'e eşdeğerdir, ancak ham anahtarı açığa çıkarmaz.",

  'subs.translate.headers.p':
    'Yanıt gövdesi, text/plain; charset=utf-8 olarak akışla iletilen bir SRT dosyasıdır. Yararlı yanıt başlıkları:',
  'subs.translate.header.xcache':
    'Önbellekten sunuluyorsa HIT-REDIS, taze oluşturuluyorsa MISS.',
  'subs.translate.header.xsourcelang':
    'çevirmenin girdi olarak kullandığı altyazının dili.',
  'subs.translate.header.xtargetlang': 'hedef parametrenizin yankısı.',
  'subs.translate.header.xsourceprovider':
    'kaynak altyazıyı hangi kazıyıcının sağladığı.',

  'subs.translate.how.h2': 'Nasıl Çalışır',
  'subs.translate.how.step1':
    'Wyzie, mevcut olduğunda İngilizceyi tercih ederek normal kaynaklarda SRT altyazısı arar.',
  'subs.translate.how.step2':
    "SRT, 50'şer ipucundan oluşan parçalara bölünür ve sırayla çevrilir. Her parça tamamlanınca ayrı ayrı önbelleklenir.",
  'subs.translate.how.step3':
    'Çıktı size ipucu ipucu akış halinde gönderilir. Akışlı SRT gövdesini kabul eden oynatıcılar, geri kalanlar tamamlanmadan ilk satırları göstermeye başlayabilir.',
  'subs.translate.how.step4':
    "Tam çeviri, id, season, episode ve target ile anahtarlanarak Redis'te 30 gün boyunca önbelleklenir.",

  'subs.translate.languages.h2': 'Desteklenen Hedef Diller',
  'subs.translate.languages.p':
    "Başlıca Avrupa, Asya, Afrika ve Orta Doğu dilleri dahil 80'den fazla dil. İngilizce adı geçin (Spanish, es değil). Liste ayrıca herhangi bir /search yanıtında ai: true satırları olarak da döner; bu, doğruluk kaynağıdır.",

  'subs.translate.limitations.h2': 'Sınırlamalar',
  'subs.translate.limit1':
    'AI çevirisi için SRT kaynağı gerekir. Mevcut her altyazının .ass, .vtt veya başka bir biçimde olduğu başlıklar 404 No SRT found döndürür.',
  'subs.translate.limit2':
    'Çeviri kalitesi kaynak altyazıya bağlıdır. Kötü zamanlanmış veya yanlış yazılmış bir kaynak, kötü zamanlanmış veya yanlış yazılmış bir çeviri üretir.',
  'subs.translate.limit3':
    'Bazı kullanıcılar AI satırlarını tamamen devre dışı bırakmak isteyebilir. İstemcinizde ai === false ile filtreleyin.',
  'subs.translate.limit4':
    'Çeviriler önbellek isabetlerinde de faturalandırılır. Taze oluşturulmuş veya 30 günlük önbellekten sunulmuş olsun, her /translate isteği 100 istek harcar.',

  // Subs API Keys Page
  'subs.keys.title': 'API Anahtarları',
  'subs.keys.p1':
    'Wyzie Subs, tüm istekler için bir API anahtarı gerektirir. Ücretsiz katman çoğu kullanım senaryosunu karşılar; ücretli planlar daha ağır kullanım için uygundur.',

  'subs.keys.tiers.h2': 'Katmanlar',
  'subs.keys.tier.free': 'Ücretsiz (Gmail gerekli)',
  'subs.keys.tier.free.limit': '1.000 istek / UTC günü',
  'subs.keys.tier.pro': '5$ tek seferlik',
  'subs.keys.tier.pro.limit': '400.000 istek',
  'subs.keys.tier.topup': "5.000 için 0,0625$'dan",
  'subs.keys.tier.topup.limit': 'Ücretli bakiyenize eklenir',
  'subs.keys.tiers.end':
    "Pro ve üst doldurmalar sona ermez. Yinelenen ödemeyi mi tercih edersiniz? Aylık 32$'lık bir abonelik ayda 6.000.000 istek sağlar (yalnızca kart). Tam fiyatlandırma ve kontrol paneli için store.wyzie.io'ya bakın.",

  'subs.keys.free.h2': 'Ücretsiz Anahtar Alma',
  'subs.keys.free.p':
    '[store.wyzie.io/redeem](https://store.wyzie.io/redeem) adresini ziyaret edin:',
  'subs.keys.free.step1': 'Hızlı bir Cloudflare Turnstile captcha çözün.',
  'subs.keys.free.step2':
    'Bir Gmail adresi girin (ücretsiz katman için yalnızca Gmail kabul edilir).',
  'subs.keys.free.step3': 'Size e-posta ile gönderdiğimiz 6 haneli kodu girin.',
  'subs.keys.free.step4':
    'wyzie-abc123... gibi görünen bir API anahtarı alırsınız.',
  'subs.keys.free.gmail':
    'Her Gmail adresi yalnızca bir ücretsiz anahtar alabilir. O e-postaya bağlı zaten bir ücretsiz anahtarınız var mı? Tekrar doğrulama yapmak mevcut anahtarınızı döndürür.',

  'subs.keys.pro.h2': "Pro'ya Yükseltme",
  'subs.keys.pro.p1':
    "[store.wyzie.io](https://store.wyzie.io) adresini ziyaret edin ve ücretsiz anahtarınız için kullandığınız e-postayla ödeme yapın. Mevcut wyzie-... anahtarınız, üzerine 400.000 ücretli istek eklenerek yerinde yükseltilir. Yinelenen ödemeyi mi tercih edersiniz? Bunun yerine aylık 32$'lık bir abonelik, aylık 6.000.000 isteklik bir kota ekler (yalnızca kart).",
  'subs.keys.pro.p2':
    'Önceki anahtarı olmayan yeni bir e-postayla ödeme yaparsanız, taze bir wyzie-... anahtarı oluşturulur ve size e-postayla gönderilir.',

  'subs.keys.protect.h2': 'Anahtarınızı İstemciden Uzak Tutun',
  'subs.keys.protect.important':
    "**API anahtarınızı asla istemci taraflı koda yerleştirmeyin.** Tarayıcı JavaScript'i, mobil uygulamalar, tarayıcı uzantıları, Electron tarzı masaüstü uygulamaları ve genel Git depoları istemci taraflı kabul edilir. Bir son kullanıcıya gönderdiğiniz her şey onlar tarafından incelenebilir; kullanıcıların anahtarlarını bir yayın sitesinin ön yüzüne yapıştırıp üçüncü bir tarafın JS paketini kazıyarak saatler içinde istek bakiyesini tükettiği gerçek vakalar gördük. Bu şekilde harcanan kota iade edilmez.",
  'subs.keys.protect.p2':
    'Bir istemci uygulamasından anahtarı kullanmanın iki güvenli yolu:',
  'subs.keys.protect.option1':
    "[Wyzie Worker](https://github.com/wyziedevs/wyzie-worker) kullanın: anahtarınızı sunucu tarafında tutan ücretsiz bir Cloudflare Worker proxy'si. İstemcinizi sub.wyzie.io yerine Worker URL'sine yönlendirin.",
  'subs.keys.protect.option2':
    "Kendi proxy'nizi çalıştırın: sub.wyzie.io'ya iletmeden önce anahtarı ekleyen herhangi bir arka uç uç noktası çalışır. 10 satırlık bir örnek için Giriş sayfasına bakın.",
  'subs.keys.protect.devtools':
    "Anahtar DevTools'daki ağ sekmesinde görünüyorsa açığa çıkmış demektir. Genel kabul edin ve destek ekibine e-posta göndererek değiştirin.",

  'subs.keys.using.h2': 'Anahtarınızı Kullanma',
  'subs.keys.using.p': 'Her API isteğine &key=YOUR_KEY ekleyin:',
  'subs.keys.using.npm.h3': 'NPM Paketi',

  'subs.keys.limit.h2': 'Limite Ulaşma',
  'subs.keys.limit.free':
    '**Ücretsiz katman** tükendi -> API, X-RateLimit-Reset ve Retry-After başlıklarıyla 429 döndürür. Günlük sayaç UTC gece yarısı sıfırlanır.',
  'subs.keys.limit.paid':
    "**Ücretli bakiye** tükendi -> API 402 döndürür. [store.wyzie.io/topup](https://store.wyzie.io/topup) adresinden üst doldurun veya belirlediğiniz bir eşiği aştığında bakiyenizi otomatik doldurmak için kontrol panelinizde **otomatik üst doldurma**'yı etkinleştirin.",

  'subs.keys.faq.h2': 'SSS',
  'subs.keys.faq.q1': 'Anahtarımı kaybettim. Yeni bir tane alabilir miyim?',
  'subs.keys.faq.a1':
    '[store.wyzie.io](https://store.wyzie.io) adresini ziyaret edin ve kayıtlı e-postanızla "anahtarımı unuttum" akışını kullanın; mevcut anahtarınızı yeniden göndereceğiz.',
  'subs.keys.faq.q2': 'Bir anahtarı birden fazla projede kullanabilir miyim?',
  'subs.keys.faq.a2':
    "Evet. Anahtarınız API'yi çağırdığınız her yerde çalışır.",
  'subs.keys.faq.q3': 'Anahtarım hiç sona erer mi?',
  'subs.keys.faq.a3':
    'Hayır. Hem ücretsiz hem de ücretli anahtarların son kullanma tarihi yoktur. Ücretsiz anahtarlar günlük sınırlıdır; ücretli bakiye kullanana kadar kalır.',
  'subs.keys.faq.q4': 'Otomatik üst doldurma güvenli midir?',
  'subs.keys.faq.a4':
    'Aylık harcama sınırı belirlersiniz. Bunun üzerinde asla ücret almayız; tek tıkla devre dışı bırakma her onay e-postasında ve kontrol panelinizde mevcuttur.',

  // Proxy Intro Page
  'proxy.intro.title': "Wyzie Proxy'ye Giriş",
  'proxy.intro.note':
    "Wyzie Subs'ın üretim sürümü artık bu proxy'yi kullanmıyor, bunun yerine [i6.shark](https://github.com/wyziedevs/i6.shark) kullanıyor.",
  'proxy.intro.p1':
    "Wyzie Proxy, CORS veya diğer kısıtlamalar olmadan herhangi bir web sitesine istek yapmanıza olanak tanıyan güçlü bir proxy API'sidir. Wyzie Proxy Nitro ile yapıldığından aşağıdaki platformlardan herhangi birinde barındırılabilir: AWS Amplify, Azure, Cloudflare, Netlify, Stormkit, Vercel, Zeabur.",
  'proxy.intro.btn.hosting': 'Barındırma',
  'proxy.intro.btn.check': 'İncele',

  // Proxy Hosting Page
  'proxy.hosting.title': "Wyzie Proxy'yi Barındırma",
  'proxy.hosting.p1':
    "Nitro sayesinde Wyzie Proxy'yi derlemek nefes almak kadar kolaydır. Önce aşağıdaki komutla Wyzie Proxy deposunu klonlayın:",
  'proxy.hosting.p2': 'Ardından gerekli tüm paketleri şununla yükleyin:',
  'proxy.hosting.p3':
    "Tüm paketler yüklendikten sonra proxy'yi derleyebilirsiniz:",
  'proxy.hosting.p4':
    "Çıktı /.output/server klasöründe oluşturulur. Cloudflare Workers'a dağıtıyorsanız index.mjs dosyasını worker'a kopyalayıp yapıştırın; aksi takdirde dosyaları normal şekilde dağıtabilirsiniz.",

  // i6.shark Intro Page
  'i6shark.intro.title': "i6.shark'a Giriş",
  'i6shark.intro.p1':
    "i6.shark, /48 subnet içindeki rastgele oluşturulan IPv6 adreslerinden HTTP istekleri yapmanıza olanak tanıyan bir IPv6 proxy sunucusudur. Bu, şu anda Wyzie Subs'ı üretimde destekleyen proxy'dir.",
  'i6shark.intro.p2':
    'Bir /48 subnet, 1.208.925.819.614.629.174.706.176 (1,2 x 10^24) IPv6 adresine sahiptir; bu da geleneksel IP engelleme yoluyla engellenmesini neredeyse imkânsız kılar. Tek bir subnet kullanmak, sizi gerçekten engellemek isteyenlerin ASN adresinizi engelleyebileceği anlamına gelir, bu yüzden dikkatli olun.',
  'i6shark.intro.btn.hosting': 'Barındırma',
  'i6shark.intro.btn.github': 'GitHub',

  'i6shark.intro.features.h2': 'Özellikler',
  'i6shark.intro.feature1':
    '**Rastgele IPv6 Oluşturma**: Her istek için /48 ön ekinizden rastgele IPv6 adresleri oluşturur',
  'i6shark.intro.feature2':
    '**Tam HTTP Yöntemi Desteği**: GET, POST, PUT, DELETE ve diğer tüm HTTP yöntemleri',
  'i6shark.intro.feature3':
    "**HMAC-SHA256 Kimlik Doğrulaması**: Kullanıcı aracısı tabanlı token'lar kullanılarak güvenli API anahtarı kimlik doğrulaması",
  'i6shark.intro.feature4':
    '**Akıllı IP Havuzu Yönetimi**: Yapılandırılabilir havuz boyutuyla otomatik IP rotasyonu. Akıllı IP yaşam döngüsü yönetimi. IP başına istek sayımı. Etkinlik dışı kalma eşiğine göre kullanılmayan IP temizliği.',
  'i6shark.intro.feature5':
    "**Gelişmiş İstek İşleme**: Özel başlık yönlendirme. Cloudflare ve CDN başlık temizliği. Birden fazla URL parametre biçimi desteği. Sistem varsayılan IP'ye isteğe bağlı yedek.",
  'i6shark.intro.feature6':
    '**Ana Bilgisayar Beyaz Listesi**: Güvenlik için yerleşik alan adı beyaz listesi (kod içinde yapılandırılabilir)',
  'i6shark.intro.feature7':
    '**Otomatik Bakım**: Periyodik IP havuzu temizleme. Subnet doğrulama ve temizlik. Bağlantı havuzlama ve keepalive optimizasyonu.',
  'i6shark.intro.feature8':
    '**Yüksek Performans**: Arabellek havuzlamasıyla eş zamanlı istek işleme. Yapılandırılabilir zaman aşımları ve bağlantı limitleri. Verimli IPv6 adres yönetimi.',
  'i6shark.intro.feature9':
    '**Hata Ayıklama Modu**: Sorun giderme ve izleme için ayrıntılı günlükleme',

  'i6shark.intro.requirements.h2': 'Gereksinimler',
  'i6shark.intro.req1': 'Go 1.20 veya üstü',
  'i6shark.intro.req2':
    'IPv6 desteğine sahip Linux/Unix sistemi (tercihen Ubuntu)',
  'i6shark.intro.req3':
    'Kök ayrıcalıkları (80 numaralı port bağlama ve IPv6 manipülasyonu için)',
  'i6shark.intro.req4': 'Barındırma sağlayıcınızdan IPv6 /48 subnet tahsisi',

  'i6shark.intro.providers.h2': 'Barındırma Sağlayıcıları',
  'i6shark.intro.providers.p1':
    'Aşağıdaki sağlayıcıların /48 IPv6 subnet sunduğu bilinmektedir:',

  // i6.shark Hosting Page
  'i6shark.hosting.title': "i6.shark'ı Barındırma",
  'i6shark.hosting.p1':
    "i6.shark kurulumu, /48 IPv6 subnet'e sahip bir VPS gerektirir. Yapılandırıldıktan sonra minimum bakımla özerk olarak çalışır.",

  'i6shark.hosting.steps.h2': 'Adımlar',
  'i6shark.hosting.step1': "Depoyu /opt/i6.shark'a klonlayın:",
  'i6shark.hosting.step2': 'src/consts.go içindeki sabitleri yapılandırın:',
  'i6shark.hosting.step2.note':
    "SharedSecret, IPv6Prefix ve Interface'i sunucunuzla eşleşecek şekilde güncelleyin. Kalan ayar sabitleri makul varsayılanlara sahiptir ve genellikle değiştirilmesi gerekmez.",
  'i6shark.hosting.step3': 'Uygulamayı derleyin:',
  'i6shark.hosting.step4': 'systemd servisini oluşturun:',
  'i6shark.hosting.step5': 'Servisi etkinleştirin ve başlatın:',
  'i6shark.hosting.step5.check': 'Durumu kontrol edin:',
  'i6shark.hosting.post':
    'Proxy sunucusu artık önyüklemede otomatik olarak çalışacak ve çökerse kendini yeniden başlatacaktır.',

  'i6shark.hosting.daily.h2': 'Günlük Yeniden Başlatma (İsteğe Bağlı)',
  'i6shark.hosting.daily.p':
    'Sunucuyu her gün rastgele bir zamanda yeniden başlatmak için bir cron görevi ekleyin:',

  'i6shark.hosting.auth.h2': 'API Kimlik Doğrulaması',
  'i6shark.hosting.auth.p':
    "API token'ları, paylaşılan gizli anahtar kullanılarak HMAC-SHA256 ile oluşturulur. Anahtar oluşturma girdisi user-agent başlığıdır. Uygulama ayrıntıları için kaynak kodundaki validateAPIToken fonksiyonuna bakın.",
};

export default messages;
