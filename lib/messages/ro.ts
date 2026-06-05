const messages: Record<string, string> = {
  // Navigation
  'nav.language': 'Limbă',

  // Index / Landing Page
  'index.subtitle':
    'Wyzie este un set de instrumente open-source pentru extragerea subtitlurilor și tot ce implică aceasta.',
  'index.cta.start': 'Începe',
  'index.cta.store': 'Vezi Magazinul',

  'index.card.keys.title': 'Chei API Gratuite',
  'index.card.keys.body':
    'Obține o cheie API gratuită la store.wyzie.io/redeem cu o verificare rapidă Gmail. 1.000 de cereri/zi fără costuri. Planuri plătite disponibile pentru utilizare mai intensă.',

  'index.card.ai.title': 'Traducere AI',
  'index.card.ai.body':
    'Traduce orice subtitlu în 80+ limbi la cerere. Transmite indiciu cu indiciu, astfel încât redarea poate începe în câteva secunde. Disponibil pe cheile Pro.',

  'index.card.reliable.title': 'De Încredere',
  'index.card.reliable.body':
    'Ne mândrim cu disponibilitatea constantă și actualizările (aproape) zilnice, precum și cu memorarea rapidă în cache.',

  'index.card.simple.title': 'Simplitate Redefinită',
  'index.card.simple.body':
    'Ușor de implementat, ușor de utilizat. Wyzie este conceput să fie cât mai simplu posibil.',

  // Donate Page
  'donate.title': 'Te Rugăm să Donezi',
  'donate.body':
    'Bună utilizatorule, Wyzie se bazează acum pe donații (pe care abia le primesc) și am 16 ani cu un job part-time, iar uneori factura mea pentru rularea API-ului public depășește 100$ pe lună. Nu pot continua să susțin acest proiect dacă nu primesc ajutor extern. Îmi pare cu adevărat rău, dar acest proiect a crescut dincolo de ceea ce puteam susține inițial din buzunarul meu.',
  'donate.cta': 'Susține Wyzie',

  // Subs Intro Page
  'subs.intro.title': 'Introducere în Wyzie Subs',
  'subs.intro.p1':
    'Wyzie Subs este un API gratuit și liber pentru extragerea subtitlurilor open-source. Există două moduri de a face cereri către API: folosind pachetul nostru NPM sau accesând direct API-ul Wyzie. Recomand utilizarea pachetului nostru, dar unii pot găsi tipurile incomode. Pentru a folosi API-ul, trebuie mai întâi să iei această decizie.',
  'subs.intro.note.ai':
    'Traducerea AI este activă pentru cheile Pro. Orice titlu, 80+ limbi țintă, transmis pe măsură ce traducătorul lucrează.',
  'subs.intro.important.apikey':
    'O cheie API este necesară pentru toate cererile. Obține o cheie gratuită la [store.wyzie.io/redeem](https://store.wyzie.io/redeem) (verificare Gmail, 1.000 de cereri/zi). Pentru utilizare mai intensă, sunt disponibile [planuri Pro și reîncărcare](https://store.wyzie.io). Vezi pagina Chei API pentru detalii.',
  'subs.intro.note.npm':
    'Recomandăm cu tărie pachetul NPM dacă ești familiarizat cu TypeScript sau JavaScript',
  'subs.intro.btn.npm': 'Pachet NPM',
  'subs.intro.btn.direct': 'Accesare Directă',

  'subs.intro.protect.h2': 'Protejarea Cheii Tale API',
  'subs.intro.protect.important':
    '**Incident real:** am văzut dezvoltatori care și-au lipit cheia direct în JavaScript-ul frontend al unui site de streaming. În câteva ore, o parte neimplicată a extras-o din bundle-ul JS și a folosit-o până la epuizarea limitei zilnice sau a soldului plătit. Cota pierdută astfel nu este rambursabilă și este tratată ca responsabilitate a proprietarului cheii conform Termenilor noștri.',
  'subs.intro.protect.p1':
    'Cheia ta API trebuie păstrată privată și **niciodată** să nu apară în:',
  'subs.intro.protect.item1':
    'JavaScript de browser (orice servit unui script tag)',
  'subs.intro.protect.item2':
    'Binare de aplicații mobile (Android/iOS, inclusiv cele obfuscate)',
  'subs.intro.protect.item3': 'Extensii de browser',
  'subs.intro.protect.item4':
    'Aplicații Electron / desktop distribuite utilizatorilor finali',
  'subs.intro.protect.item5':
    'Depozite Git publice, gist-uri, site-uri de paste sau capturi de ecran',
  'subs.intro.protect.p2':
    'Dacă cheia ajunge pe mașina unui utilizator final, tratează-o ca publică. Există două modele sigure:',
  'subs.intro.protect.opt1.h3': 'Opțiunea 1: Folosește Wyzie Worker',
  'subs.intro.protect.opt1.p1':
    'Wyzie Worker este un proxy Cloudflare Worker ușor care injectează cheia ta API pe server. Deployează-l pe Cloudflare Workers și setează cheia ca variabilă de mediu NITRO_API_TOKEN. Apoi îndreaptă cererile clientului tău către URL-ul worker-ului în loc de sub.wyzie.io - worker-ul le transmite cu cheia ta atașată.',
  'subs.intro.protect.opt2.h3': 'Opțiunea 2: Construiește Propriul Tău Proxy',
  'subs.intro.protect.opt2.p1':
    'Dacă preferi să nu folosești Wyzie Worker, poți construi un proxy server simplu în orice framework. Ideea este aceeași: backend-ul tău primește cereri de la client, adaugă cheia API și le transmite către sub.wyzie.io.',

  // Subs Sources Page
  'subs.sources.title': 'Surse Wyzie Subs',
  'subs.sources.p1':
    'Wyzie Subs agregează subtitluri de la mai mulți furnizori. Disponibilitatea surselor poate varia în funcție de starea furnizorului sau dacă o sursă este indisponibilă. Sunt mereu în căutare de surse noi - contactează-mă pentru a sugera una.',

  'subs.sources.using.h2': 'Utilizarea Surselor',
  'subs.sources.using.bullet1':
    'Folosește source=all pentru a interoga toate sursele activate simultan',
  'subs.sources.using.bullet2':
    'Sursa implicită este opensubtitles dacă nu este specificată',
  'subs.sources.using.bullet3':
    'Mai multe surse pot fi specificate ca o listă separată prin virgulă',

  'subs.sources.api.h2': 'Endpoint API',
  'subs.sources.api.p1':
    'Poți obține programatic lista surselor activate în prezent și nivelul lor de plan:',
  'subs.sources.api.free':
    'surse pe care orice cheie le poate interoga, inclusiv cheile gratuite.',
  'subs.sources.api.paid': 'surse care necesită o cheie Pro.',
  'subs.sources.api.allFree':
    'când este true, fiecare sursă activată este disponibilă tuturor cheilor și paid este gol.',

  'subs.sources.scope.h3': 'Limitarea la o cheie',
  'subs.sources.scope.p1':
    'Transmite cheia ta API pentru a obține sursele pe care acea cheie le poate folosi efectiv:',
  'subs.sources.scope.p2':
    'Aceasta adaugă câmpuri specifice cheii fără a consuma o cerere din cota ta:',
  'subs.sources.scope.available':
    'surse pe care această cheie le poate interoga acum.',
  'subs.sources.scope.restricted':
    'surse activate pe care această cheie nu le poate interoga (upgradează la Pro pentru a le debloca).',
  'subs.sources.scope.keyType': 'gratuit sau plătit.',
  'subs.sources.scope.keyValid':
    'este false când cheia este malformată sau nu a fost găsită, și null când cheia nu a putut fi verificată (caz în care available și restricted sunt omise).',

  'subs.sources.details.h2': 'Detalii Surse',

  'subs.sources.opensubtitles.desc':
    'Cea mai mare bază de date de subtitluri online. Suportă filme și seriale TV într-o gamă largă de limbi. Folosește API-ul REST oficial OpenSubtitles.',
  'subs.sources.opensubtitles.content': 'Filme & seriale TV',
  'subs.sources.opensubtitles.languages': 'Suport multilingv extins',
  'subs.sources.opensubtitles.formats': 'SRT, ASS, SSA, VTT, SUB și altele',

  'subs.sources.subdl.desc':
    'Un site de subtitluri condus de comunitate cu o selecție largă de filme și seriale TV.',
  'subs.sources.subdl.content': 'Filme & seriale TV',
  'subs.sources.subdl.languages': 'Suport multilingv extins',
  'subs.sources.subdl.formats': 'SRT, ASS, SSA, VTT, SUB și altele',

  'subs.sources.subf2m.desc':
    'Un depozit mare de subtitluri cu acoperire extinsă de limbi pentru filme și seriale TV.',
  'subs.sources.subf2m.content': 'Filme & seriale TV',
  'subs.sources.subf2m.languages': 'Suport multilingv extins',
  'subs.sources.subf2m.formats': 'SRT, ASS, SSA, VTT, SUB și altele',

  'subs.sources.podnapisi.desc':
    'Una dintre cele mai vechi baze de date de subtitluri. Colecție bine curatoriată care acoperă filme și seriale TV.',
  'subs.sources.podnapisi.content': 'Filme & seriale TV',
  'subs.sources.podnapisi.languages': 'Suport multilingv extins',
  'subs.sources.podnapisi.formats': 'SRT, ASS, SSA, VTT, SUB și altele',

  'subs.sources.animetosho.desc':
    'Extrage atașamentele de subtitluri anime direct din release-urile torrent indexate pe AnimeTosho.',
  'subs.sources.animetosho.content': 'Anime (seriale TV)',
  'subs.sources.animetosho.languages':
    'Japoneză, engleză și altele în funcție de release',
  'subs.sources.animetosho.formats': 'ASS, SRT, SSA și altele',
  'subs.sources.animetosho.note':
    'AnimeTosho este programat să se închidă în mai 2026.',

  'subs.sources.gestdown.desc':
    'Furnizează subtitluri pentru seriale TV prin API-ul Gestdown cu suport extins pentru limbi.',
  'subs.sources.gestdown.content': 'Numai seriale TV',
  'subs.sources.gestdown.languages': 'Suport multilingv extins',
  'subs.sources.gestdown.formats': 'SRT, ASS și altele',

  'subs.sources.jimaku.desc':
    'Extrage de pe jimaku.cc, un depozit de fișiere de subtitluri anime întreținut de comunitate. Potrivește titluri folosind API-ul TMDB.',
  'subs.sources.jimaku.content': 'Anime (filme & seriale TV)',
  'subs.sources.jimaku.languages':
    'În principal japoneză; de asemenea engleză, chineză și altele în funcție de fișierele disponibile',
  'subs.sources.jimaku.formats': 'SRT, ASS, SSA, VTT, SUB și altele',

  'subs.sources.kitsunekko.desc':
    'Extrage listele de directoare de pe kitsunekko.net, un depozit dedicat de subtitluri anime. Potrivește titluri folosind API-ul TMDB.',
  'subs.sources.kitsunekko.content': 'Anime (seriale TV)',
  'subs.sources.kitsunekko.languages':
    'Directoare de subtitluri în engleză și japoneză',
  'subs.sources.kitsunekko.formats': 'SRT, ASS, SSA, VTT, SUB și altele',

  'subs.sources.yify.desc':
    'Extrage de pe yifysubtitles.ch subtitluri potrivite după ID IMDB. Numai filme.',
  'subs.sources.yify.content': 'Numai filme (serialele TV nu sunt suportate)',
  'subs.sources.yify.languages':
    'Suport multilingv extins (albaneză, arabă, engleză, franceză, spaniolă și multe altele)',
  'subs.sources.yify.formats': 'SRT (livrat într-o arhivă ZIP)',

  'subs.sources.ajatttools.desc':
    'Obține subtitluri din depozitul GitHub Ajatt-Tools/kitsunekko-mirror. Organizat pe tip de media. Potrivește titluri folosind API-ul TMDB.',
  'subs.sources.ajatttools.content': 'Anime & drame (seriale TV și filme)',
  'subs.sources.ajatttools.languages':
    'În principal japoneză; de asemenea engleză, chineză și altele',
  'subs.sources.ajatttools.formats': 'SRT, ASS, SSA, VTT, SUB și altele',

  'subs.sources.ai.desc':
    'Nu este un scraper. SRT tradus de AI generat la cerere din cel mai bun subtitlu sursă disponibil. Vezi ghidul Traducere AI pentru detalii complete.',
  'subs.sources.ai.content': 'Orice poate găsi Wyzie un SRT pentru',
  'subs.sources.ai.languages': '80+ limbi țintă',
  'subs.sources.ai.formats': 'Numai SRT',

  // Subs Package Page
  'subs.pkg.title': 'Utilizarea Pachetului NPM Wyzie',
  'subs.pkg.p1':
    'Pachetul NPM Wyzie Subs oferă o interfață simplă și ușor de utilizat pentru căutarea și obținerea subtitlurilor.',
  'subs.pkg.install.h2': 'Instalare',
  'subs.pkg.important':
    'O cheie API este necesară pentru toate cererile. Obține o cheie gratuită la [store.wyzie.io/redeem](https://store.wyzie.io/redeem) și transmite-o prin parametrul key. Vezi pagina Chei API pentru detalii.',
  'subs.pkg.usage.h2': 'Utilizare',
  'subs.pkg.params.h3': 'Parametri',
  'subs.pkg.params.note':
    'Pentru mai multe informații (sau dacă ești blocat), vizitează [pagina principală Wyzie Subs](https://sub.wyzie.io).',

  'subs.pkg.param.tmdb':
    'ID TMDB al filmului sau serialului TV (tmdb_id sau imdb_id este obligatoriu).',
  'subs.pkg.param.imdb':
    'ID IMDB al filmului sau serialului TV (imdb_id sau tmdb_id este obligatoriu).',
  'subs.pkg.param.format':
    'Formate de fișier de returnat (ex., srt, ass). Acceptă o listă.',
  'subs.pkg.param.season': 'Numărul sezonului (necesită episode).',
  'subs.pkg.param.episode': 'Numărul episodului (necesită season).',
  'subs.pkg.param.language':
    'Coduri ISO 639-1 pentru limba subtitlului. Acceptă o listă.',
  'subs.pkg.param.encoding':
    'Filtru de codificare a caracterelor (ex., utf-8, latin-1).',
  'subs.pkg.param.hi':
    'Boolean pentru subtitluri pentru persoane cu deficiențe de auz.',
  'subs.pkg.param.source':
    'Furnizori de subtitluri de interogat (all pentru fiecare sursă activată).',
  'subs.pkg.param.release': 'Filtre release/scene (acceptă o listă).',
  'subs.pkg.param.filename':
    'Filtre pentru numele fișierului; aliasurile file și fileName sunt suportate.',
  'subs.pkg.param.origin':
    'Filtru de origine a conținutului (ex., WEB, BLURAY, DVD).',
  'subs.pkg.param.key':
    'Cheia ta API (obligatorie). Obține una gratuită la store.wyzie.io/redeem.',
  'subs.pkg.param.refresh':
    'Ocolește cache-ul și obține rezultate proaspete din surse.',

  'subs.pkg.helpers':
    'Pachetul include de asemenea ajutoare TMDB ușoare: searchTmdb, getTvDetails și getSeasonDetails pentru găsirea rapidă a ID-urilor înainte de a accesa /search. În plus, getSources poate fi folosit pentru a obține lista surselor de subtitluri activate în prezent.',
  'subs.pkg.types.h3': 'Tipuri',
  'subs.pkg.type.search': 'Toți parametrii valizi recunoscuți de API.',
  'subs.pkg.type.query':
    'Toți parametrii (opționali și obligatorii) disponibili pentru API-ul wyzie-subs.',
  'subs.pkg.type.subtitle':
    'Toate valorile returnate de API cu tipurile lor respective.',
  'subs.pkg.type.sources': 'Tipul de răspuns de la endpoint-ul /sources.',
  'subs.pkg.types.end':
    'Tipurile noastre sunt foarte simple și bine documentate. Consultă fișierul types.ts legat în depozitul GitHub.',
  'subs.pkg.config.h3': 'Configurare',
  'subs.pkg.config.p1':
    'Un utilizator a cerut pe Github un hostname API configurabil și m-am gândit că sună a idee bună, deci mai jos este utilizarea. Vă iubesc băieți!',

  // Subs Direct Page
  'subs.direct.title': 'Accesarea Directă a Wyzie Subs',
  'subs.direct.caution':
    'Recomand cu tărie utilizarea pachetului NPM deoarece este mai ușor și mai fiabil.',
  'subs.direct.p1':
    'Dacă ai decis să nu folosești pachetul NPM, atunci să începem. Voi trece doar prin parametrii API și datele returnate de API. Cum faci cereri către API depinde în întregime de tine.',
  'subs.direct.important':
    'O cheie API este necesară pentru toate cererile. Obține o cheie gratuită la [store.wyzie.io/redeem](https://store.wyzie.io/redeem) și include-o ca &key=YOUR_KEY în fiecare cerere. Vezi pagina Chei API pentru detalii.',

  'subs.direct.params.h3': 'Parametri',
  'subs.direct.param.id':
    'ID TMDB sau IMDB al serialului sau filmului (obligatoriu).',
  'subs.direct.param.seasonEpisode':
    'Sezon și episod pentru căutări TV. Ambele trebuie să fie prezente împreună.',
  'subs.direct.param.language':
    'Filtru de limbă (coduri ISO 639-1). Valorile multiple sunt separate prin virgulă.',
  'subs.direct.param.format':
    'Formate de subtitlu de returnat. Sunt permise mai multe valori.',
  'subs.direct.param.hi':
    'Dacă să se prefere subtitluri pentru persoane cu deficiențe de auz.',
  'subs.direct.param.encoding': 'Filtru de codificare a caracterelor.',
  'subs.direct.param.source':
    'Furnizori de subtitluri de interogat (all interoghează fiecare sursă activată; implicit opensubtitles).',
  'subs.direct.param.release':
    'Filtre pentru release sau numele scenei (separate prin virgulă).',
  'subs.direct.param.file':
    'Filtre pentru numele fișierului (aliasuri: file, filename, fileName).',
  'subs.direct.param.origin':
    'Filtru de origine a conținutului, separat prin virgulă (ex., WEB, BLURAY, DVD).',
  'subs.direct.param.key':
    'Cheia ta API (obligatorie). Obține una gratuită la store.wyzie.io/redeem.',
  'subs.direct.param.refresh':
    'Ocolește cache-ul și obține rezultate proaspete. Folosește când sursele s-ar putea fi actualizat.',
  'subs.direct.important.imdb':
    "Când folosești un ID IMDB, asigură-te că primele două caractere ('tt') sunt incluse la începutul ID-ului.",

  'subs.direct.data.h3': 'Date Returnate',
  'subs.direct.data.id': 'ID-ul fișierului de subtitlu.',
  'subs.direct.data.url': 'URL-ul fișierului de subtitlu.',
  'subs.direct.data.flagUrl': 'URL la steagul localității limbii.',
  'subs.direct.data.format': 'Formatul fișierului de subtitlu.',
  'subs.direct.data.encoding':
    'Codificarea caracterelor fișierului de subtitlu.',
  'subs.direct.data.display': 'Limba subtitlului, cu majusculă.',
  'subs.direct.data.language': 'Codul ISO 3166-2 al limbii.',
  'subs.direct.data.media': 'Numele media pentru care sunt subtitlurile.',
  'subs.direct.data.isHearingImpaired':
    'Boolean care indică dacă subtitlul este accesibil persoanelor cu deficiențe de auz.',
  'subs.direct.data.source': 'Din ce sursă a fost extras subtitlul.',
  'subs.direct.data.release': 'Numele principal al release-ului.',
  'subs.direct.data.releases': 'Alte nume de release compatibile cu subtitlul.',
  'subs.direct.data.fileName':
    'Numele original al fișierului când este disponibil.',
  'subs.direct.data.downloadCount':
    'Numărul de descărcări pe platforma sursă (dacă este disponibil).',
  'subs.direct.data.origin': 'Originea conținutului (ex., WEB, BluRay, DVD).',
  'subs.direct.data.matchedRelease':
    'Valoarea release-ului care a corespuns filtrului tău (dacă a fost furnizat).',
  'subs.direct.data.matchedFilter':
    'Filtrul furnizat de utilizator care a corespuns (dacă a fost furnizat).',
  'subs.direct.data.ai':
    'true dacă intrarea este un subtitlu tradus de AI, false pentru subtitluri normale extrase. Folosește-l ca filtru pe partea clientului când vrei doar unul sau celălalt.',

  // Subs Translate Page
  'subs.translate.title': 'Traducere AI a Subtitlurilor',
  'subs.translate.important':
    'Traducerea AI este o **funcție Pro**. Fiecare traducere costă **100 de cereri** din soldul cheii tale, taxat atât la un cache hit cât și la o traducere proaspătă. Cheile gratuite nu o pot folosi.',
  'subs.translate.p1':
    'Wyzie poate traduce orice subtitlu în 80+ limbi din mers. Traducerile sunt transmise pe măsură ce modelul le produce, astfel încât redarea poate începe în una-două secunde în loc să aștepți întregul fișier. Rezultatele sunt stocate în cache timp de 30 de zile, astfel că a doua persoană care cere aceeași traducere o primește instant.',

  'subs.translate.ways.h2': 'Două Moduri de Utilizare',
  'subs.translate.way1.h3': '1. Alege o Limbă din Răspunsul de Căutare',
  'subs.translate.way1.p1':
    'Fiecare răspuns /search include acum o intrare suplimentară per limbă suportată cu "ai": true și un url care indică spre /translate. Tratează rândurile AI ca orice alt rând de subtitlu în interfața ta: când utilizatorul face click pe unul, obține URL-ul.',
  'subs.translate.way1.filter':
    'Dacă vrei să ascunzi rândurile AI din interfața ta, filtrează-le:',
  'subs.translate.way2.h3': '2. Apelează /translate Direct',

  'subs.translate.param.id': 'ID TMDB sau IMDB (obligatoriu).',
  'subs.translate.param.target':
    'Limba țintă ca nume complet în engleză (ex. Spanish, Japanese, Brazilian Portuguese) (obligatoriu).',
  'subs.translate.param.seasonEpisode':
    'Pentru TV. Ambele trebuie să fie prezente împreună.',
  'subs.translate.param.key':
    'Cheia ta API. Folosește tk în schimb dacă ai primit URL-ul din /search.',
  'subs.translate.param.tk':
    'Token semnat returnat de /search. Echivalent cu key, dar nu expune cheia brută.',

  'subs.translate.headers.p':
    'Corpul răspunsului este un fișier SRT transmis ca text/plain; charset=utf-8. Antete utile de răspuns:',
  'subs.translate.header.xcache':
    'HIT-REDIS dacă este servit din cache, MISS dacă este generat proaspăt.',
  'subs.translate.header.xsourcelang':
    'limba subtitlului pe care l-a folosit traducătorul ca intrare.',
  'subs.translate.header.xtargetlang': 'ecou al parametrului tău target.',
  'subs.translate.header.xsourceprovider':
    'ce scraper a furnizat subtitlul sursă.',

  'subs.translate.how.h2': 'Cum Funcționează',
  'subs.translate.how.step1':
    'Wyzie caută în sursele normale un subtitlu SRT, preferând engleza când este disponibilă.',
  'subs.translate.how.step2':
    'SRT-ul este împărțit în fragmente de 50 de indicii și tradus secvențial. Fiecare fragment este stocat individual în cache pe măsură ce se finalizează.',
  'subs.translate.how.step3':
    'Ieșirea este transmisă înapoi indiciu cu indiciu. Playerele care acceptă un corp SRT în streaming pot începe să afișeze primele rânduri înainte ca restul să fie gata.',
  'subs.translate.how.step4':
    'Traducerea completă este stocată în cache în Redis timp de 30 de zile, indexată după id, season, episode și target.',

  'subs.translate.languages.h2': 'Limbi Țintă Suportate',
  'subs.translate.languages.p':
    '80+ limbi incluzând toate limbile europene, asiatice, africane și din Orientul Mijlociu majore. Transmite numele în engleză (Spanish, nu es). Lista este returnată și ca rânduri ai: true în orice răspuns /search, care este sursa canonică a adevărului.',

  'subs.translate.limitations.h2': 'Limitări',
  'subs.translate.limit1':
    'Traducerea AI necesită o sursă SRT. Titlurile pentru care fiecare subtitlu disponibil este .ass, .vtt sau alt format vor returna 404 No SRT found.',
  'subs.translate.limit2':
    'Calitatea traducerii depinde de subtitlul sursă. O sursă slab sincronizată sau cu erori de scriere produce o traducere slab sincronizată sau cu erori de scriere.',
  'subs.translate.limit3':
    'Unii utilizatori pot dori să excludă complet rândurile AI. Filtrează după ai === false în clientul tău.',
  'subs.translate.limit4':
    'Traducerile sunt facturate și la cache hit. Indiferent dacă sunt generate proaspăt sau servite din cache-ul de 30 de zile, fiecare cerere /translate costă 100 de cereri.',

  // Subs API Keys Page
  'subs.keys.title': 'Chei API',
  'subs.keys.p1':
    'Wyzie Subs necesită o cheie API pentru toate cererile. Un nivel gratuit acoperă majoritatea cazurilor de utilizare; planurile plătite gestionează utilizarea mai intensă.',

  'subs.keys.tiers.h2': 'Niveluri',
  'subs.keys.tier.free': 'Gratuit (Gmail necesar)',
  'subs.keys.tier.free.limit': '1.000 de cereri / zi UTC',
  'subs.keys.tier.pro': '$5 o singură dată',
  'subs.keys.tier.pro.limit': '400.000 de cereri',
  'subs.keys.tier.topup': 'de la $0,0625 / 5K',
  'subs.keys.tier.topup.limit': 'Se adaugă la soldul tău plătit',
  'subs.keys.tiers.end':
    'Pro și reîncărcările nu expiră. Preferi un abonament recurent? Un abonament de $32/lună îți oferă 6.000.000 de cereri/lună (numai card). Vezi store.wyzie.io pentru prețuri complete și tabloul de bord.',

  'subs.keys.free.h2': 'Obținerea unei Chei Gratuite',
  'subs.keys.free.p':
    'Vizitează [store.wyzie.io/redeem](https://store.wyzie.io/redeem):',
  'subs.keys.free.step1': 'Rezolvă un captcha Cloudflare Turnstile rapid.',
  'subs.keys.free.step2':
    'Introdu o adresă Gmail (numai Gmail este acceptat pentru nivelul gratuit).',
  'subs.keys.free.step3':
    'Introdu codul de 6 cifre pe care ți-l trimitem pe email.',
  'subs.keys.free.step4': 'Primești o cheie API care arată ca wyzie-abc123...',
  'subs.keys.free.gmail':
    'Fiecare adresă Gmail poate răscumpăra o singură cheie gratuită. Ai avut deja o cheie gratuită legată de acel email? Verificarea din nou îți returnează pur și simplu cheia existentă.',

  'subs.keys.pro.h2': 'Upgrade la Pro',
  'subs.keys.pro.p1':
    'Vizitează [store.wyzie.io](https://store.wyzie.io) și finalizează comanda cu același email pe care l-ai folosit pentru cheia ta gratuită. Cheia ta existentă wyzie-... este upgradată pe loc cu 400K cereri plătite adăugate. Preferi un abonament recurent? Un abonament de $32/lună adaugă în schimb o alocație lunară de 6.000.000 de cereri (numai card).',
  'subs.keys.pro.p2':
    'Dacă finalizezi comanda cu un email nou (fără cheie anterioară), o cheie nouă wyzie-... este generată și trimisă pe email.',

  'subs.keys.protect.h2': 'Păstrează Cheia Departe de Client',
  'subs.keys.protect.important':
    '**Nu încorpora niciodată cheia API în codul de pe partea clientului.** JavaScript de browser, aplicații mobile, extensii de browser, aplicații desktop de tip Electron și depozite Git publice sunt toate considerate client-side. Orice trimiți unui utilizator final poate fi inspectat de acesta, și am văzut cazuri reale unde utilizatorii și-au lipit cheia în frontend-ul unui site de streaming, doar pentru ca o terță parte să extragă bundle-ul JS și să epuizeze soldul de cereri în câteva ore. Cota consumată astfel nu este rambursabilă.',
  'subs.keys.protect.p2':
    'Două moduri sigure de a folosi cheia dintr-o aplicație client:',
  'subs.keys.protect.option1':
    'Folosește [Wyzie Worker](https://github.com/wyziedevs/wyzie-worker): un proxy Cloudflare Worker gratuit care ține cheia ta pe server. Îndreaptă clientul tău către URL-ul Worker în loc de sub.wyzie.io.',
  'subs.keys.protect.option2':
    'Rulează propriul tău proxy: orice endpoint backend care adaugă cheia înainte de a transmite către sub.wyzie.io funcționează. Vezi pagina Intro pentru un exemplu de 10 rânduri.',
  'subs.keys.protect.devtools':
    'Dacă cheia apare într-un tab de rețea în DevTools, este expusă. Consideră-o publică și rotește-o trimițând un email la suport.',

  'subs.keys.using.h2': 'Utilizarea Cheii Tale',
  'subs.keys.using.p': 'Adaugă &key=YOUR_KEY la fiecare cerere API:',
  'subs.keys.using.npm.h3': 'Pachet NPM',

  'subs.keys.limit.h2': 'Atingerea Limitei',
  'subs.keys.limit.free':
    '**Nivelul gratuit** epuizat -> API returnează 429 cu antetele X-RateLimit-Reset și Retry-After. Contorul zilnic se resetează la miezul nopții UTC.',
  'subs.keys.limit.paid':
    '**Soldul plătit** epuizat -> API returnează 402. Reîncarcă la [store.wyzie.io/topup](https://store.wyzie.io/topup) sau activează **reîncărcarea automată** în tabloul tău de bord pentru a reumple automat când soldul tău trece sub un prag pe care îl setezi.',

  'subs.keys.faq.h2': 'Întrebări Frecvente',
  'subs.keys.faq.q1': 'Mi-am pierdut cheia. Pot obține una nouă?',
  'subs.keys.faq.a1':
    'Vizitează [store.wyzie.io](https://store.wyzie.io) și folosește fluxul "cheie uitată" cu emailul tău înregistrat; îți vom retrimite cheia existentă.',
  'subs.keys.faq.q2': 'Pot folosi o cheie în mai multe proiecte?',
  'subs.keys.faq.a2': 'Da. Cheia ta funcționează oriunde apelezi API-ul.',
  'subs.keys.faq.q3': 'Cheia mea va expira vreodată?',
  'subs.keys.faq.a3':
    'Nu. Atât cheile gratuite cât și cele plătite nu au dată de expirare. Cheile gratuite sunt limitate pe zi; soldul plătit persistă până îl folosești.',
  'subs.keys.faq.q4': 'Este reîncărcarea automată sigură?',
  'subs.keys.faq.a4':
    'Stabilești un plafon lunar de cheltuieli. Nu taxăm niciodată peste acela, iar dezactivarea cu un singur click este în fiecare email de confirmare și în tabloul tău de bord.',

  // Proxy Intro Page
  'proxy.intro.title': 'Introducere în Wyzie Proxy',
  'proxy.intro.note':
    'Versiunea de producție a Wyzie Subs nu mai folosește acest proxy, utilizând în schimb [i6.shark](https://github.com/wyziedevs/i6.shark).',
  'proxy.intro.p1':
    'Wyzie Proxy este un API proxy puternic care îți permite să faci cereri către orice site web fără restricții CORS sau alte restricții. Deoarece Wyzie Proxy este creat cu Nitro, poate fi găzduit pe oricare dintre platformele următoare: AWS Amplify, Azure, Cloudflare, Netlify, Stormkit, Vercel, Zeabur.',
  'proxy.intro.btn.hosting': 'Găzduire',
  'proxy.intro.btn.check': 'Vezi Proiectul',

  // Proxy Hosting Page
  'proxy.hosting.title': 'Găzduirea Wyzie Proxy',
  'proxy.hosting.p1':
    'Construirea Wyzie Proxy este mai ușoară decât respiratul, datorită Nitro. Mai întâi, clonează depozitul Wyzie Proxy folosind:',
  'proxy.hosting.p2': 'Apoi, instalează toate pachetele necesare cu:',
  'proxy.hosting.p3':
    'După ce toate pachetele sunt instalate, poți construi proxy-ul:',
  'proxy.hosting.p4':
    'Ieșirea va fi generată în folderul /.output/server. Dacă faci deploy pe Cloudflare Workers, copiază și lipește fișierul index.mjs în worker; altfel, poți face deploy fișierelor în mod normal.',

  // i6.shark Intro Page
  'i6shark.intro.title': 'Introducere în i6.shark',
  'i6shark.intro.p1':
    'i6.shark este un server proxy IPv6 care îți permite să faci cereri HTTP din adrese IPv6 generate aleatoriu într-un subnet /48. Acesta este proxy-ul care alimentează în prezent Wyzie Subs în producție.',
  'i6shark.intro.p2':
    'Un subnet /48 are 1.208.925.819.614.629.174.706.176 (1,2 x 10^24) adrese IPv6, făcând practic imposibilă blocarea prin banarea tradițională a IP-urilor. Folosirea unui singur subnet înseamnă că cei care chiar vor să te blocheze pot bloca adresa ta ASN, deci fii atent cu asta.',
  'i6shark.intro.btn.hosting': 'Găzduire',
  'i6shark.intro.btn.github': 'GitHub',

  'i6shark.intro.features.h2': 'Caracteristici',
  'i6shark.intro.feature1':
    '**Generare Aleatoare de IPv6**: Creează adrese IPv6 aleatorii din prefixul tău /48 pentru fiecare cerere',
  'i6shark.intro.feature2':
    '**Suport Complet pentru Metode HTTP**: GET, POST, PUT, DELETE și toate celelalte metode HTTP',
  'i6shark.intro.feature3':
    '**Autentificare HMAC-SHA256**: Autentificare securizată cu cheie API folosind tokenuri bazate pe user-agent',
  'i6shark.intro.feature4':
    '**Gestionare Inteligentă a Pool-ului de IP-uri**: Rotație automată a IP-urilor cu dimensiune de pool configurabilă. Gestionare inteligentă a ciclului de viață al IP-urilor. Numărarea cererilor per IP. Curățarea IP-urilor neutilizate bazată pe pragul de inactivitate.',
  'i6shark.intro.feature5':
    '**Gestionare Avansată a Cererilor**: Redirecționare personalizată a antetelor. Eliminarea antetelor Cloudflare și CDN. Suport pentru mai multe formate de parametri URL. Fallback opțional la IP-ul implicit al sistemului.',
  'i6shark.intro.feature6':
    '**Lista Albă de Gazde**: Listă albă de domenii integrată pentru securitate (configurabilă în cod)',
  'i6shark.intro.feature7':
    '**Întreținere Automată**: Golire periodică a pool-ului de IP-uri. Validarea și curățarea subnetului. Optimizarea pool-ului de conexiuni și keepalive.',
  'i6shark.intro.feature8':
    '**Performanță Ridicată**: Gestionarea cererilor concurente cu buffer pooling. Timeout-uri configurabile și limite de conexiuni. Gestionare eficientă a adreselor IPv6.',
  'i6shark.intro.feature9':
    '**Modul Debug**: Jurnalizare detaliată pentru depanare și monitorizare',

  'i6shark.intro.requirements.h2': 'Cerințe',
  'i6shark.intro.req1': 'Go 1.20 sau mai nou',
  'i6shark.intro.req2': 'Sistem Linux/Unix cu suport IPv6 (preferabil Ubuntu)',
  'i6shark.intro.req3':
    'Privilegii root (pentru legarea portului 80 și manipularea IPv6)',
  'i6shark.intro.req4':
    'Alocare subnet IPv6 /48 de la furnizorul tău de găzduire',

  'i6shark.intro.providers.h2': 'Furnizori de Găzduire',
  'i6shark.intro.providers.p1':
    'Următorii furnizori sunt cunoscuți că oferă subnete IPv6 /48:',

  // i6.shark Hosting Page
  'i6shark.hosting.title': 'Găzduirea i6.shark',
  'i6shark.hosting.p1':
    'Configurarea i6.shark necesită un VPS cu un subnet IPv6 /48. Odată configurat, rulează autonom cu întreținere minimă.',

  'i6shark.hosting.steps.h2': 'Pași',
  'i6shark.hosting.step1': 'Clonează depozitul în /opt/i6.shark:',
  'i6shark.hosting.step2': 'Configurează constantele în src/consts.go:',
  'i6shark.hosting.step2.note':
    'Actualizează SharedSecret, IPv6Prefix și Interface pentru a corespunde serverului tău. Constantele rămase de ajustare au valori implicite sensibile și de obicei nu necesită modificări.',
  'i6shark.hosting.step3': 'Construiește aplicația:',
  'i6shark.hosting.step4': 'Creează serviciul systemd:',
  'i6shark.hosting.step5': 'Activează și pornește serviciul:',
  'i6shark.hosting.step5.check': 'Verifică starea:',
  'i6shark.hosting.post':
    'Serverul proxy va rula acum automat la pornire și se va reporni dacă se blochează.',

  'i6shark.hosting.daily.h2': 'Repornire Zilnică (Opțional)',
  'i6shark.hosting.daily.p':
    'Adaugă un job cron pentru a reporni serverul zilnic la o oră aleatorie:',

  'i6shark.hosting.auth.h2': 'Autentificare API',
  'i6shark.hosting.auth.p':
    'Tokenurile API sunt generate folosind HMAC-SHA256 cu o cheie secretă partajată. Intrarea pentru generarea cheii este antetul user-agent. Vezi funcția validateAPIToken din codul sursă pentru detalii de implementare.',

  // Plugins
  'plugins.common.required': 'Necesar',

  'plugins.index.intro':
    'Wyzie Subs se conectează direct la aplicațiile media pe care le folosești deja. Fiecare plugin comunică cu același endpoint `https://sub.wyzie.io/search` și are nevoie de o **cheie API Wyzie** gratuită. Obține una la [store.wyzie.io](https://store.wyzie.io/#plans).',
  'plugins.index.tbl.stremio.for':
    'Vizionezi în Stremio pe desktop, mobil sau TV',
  'plugins.index.tbl.stremio.install':
    'Add-on găzduit: lipește cheia, apasă Install',
  'plugins.index.tbl.bazarr.for':
    'Biblioteci Plex, Jellyfin, Emby, Sonarr, Radarr',
  'plugins.index.tbl.bazarr.install':
    'Provider drop-in pentru instanța ta Bazarr',
  'plugins.index.tbl.kodi.for': 'Kodi 19+, LibreELEC, CoreELEC',
  'plugins.index.tbl.kodi.install':
    'Instalează din zip sau din depozitul Wyzie',
  'plugins.index.use.stremio':
    'Folosește **Stremio** dacă vizionezi în aplicația Stremio.',
  'plugins.index.use.bazarr':
    'Folosește **Bazarr** dacă rulezi Plex, Jellyfin sau Emby. Bazarr descarcă fișierele de subtitrare pe disc, iar serverul tău media le preia automat. Aceasta este și calea recomandată pentru Plex și Jellyfin; nu există un plugin nativ separat.',
  'plugins.index.use.kodi':
    'Folosește **Kodi** pentru un serviciu de subtitrări nativ Kodi pe Android TV, un Raspberry Pi sau un PC home theatre.',
  'plugins.index.shared.sources':
    '**Surse:** OpenSubtitles, SubDL și Podnapisi, agregate prin Wyzie.',
  'plugins.index.shared.matching':
    '**Potrivire:** Wyzie este ghidat de ID-uri IMDB și TMDB plus sezon și episod, așa că potrivirile sunt precise atât pentru filme, cât și pentru seriale.',
  'plugins.index.shared.quota':
    '**Cotă:** când cheia ta se epuizează, pluginul afișează un mesaj prietenos care trimite către [store.wyzie.io](https://store.wyzie.io) în loc să eșueze în tăcere. Reîncarcă sau abonează-te și ești din nou în activitate.',
  'plugins.index.shared.languages':
    '**Limbi:** peste 100, selectabile pentru fiecare plugin.',
  'plugins.index.outro': 'Alege platforma ta de mai sus pentru a începe.',

  'plugins.stremio.intro':
    'Un add-on de subtitrări cu un singur clic pentru [Stremio](https://www.stremio.com/). Agregă OpenSubtitles, SubDL și Podnapisi prin Wyzie și funcționează atât pentru filme, cât și pentru seriale, pe fiecare platformă pe care rulează Stremio.',
  'plugins.stremio.before':
    'Ai nevoie de o cheie API Wyzie gratuită. Obține una la [store.wyzie.io/redeem](https://store.wyzie.io/redeem), sau cumpără o cheie Pro ori abonează-te la [store.wyzie.io](https://store.wyzie.io/#plans).',
  'plugins.stremio.install.1':
    'Deschide [stremio.wyzie.io/configure](https://stremio.wyzie.io/configure).',
  'plugins.stremio.install.2': 'Lipește **cheia API**.',
  'plugins.stremio.install.3':
    'Opțional: introdu **limbile** preferate ca coduri ISO 639-1, separate prin virgulă (de exemplu `en,es,fr`). Lasă gol pentru toate limbile.',
  'plugins.stremio.install.4':
    'Opțional: activează subtitrările pentru **persoane cu deficiențe de auz** dacă le preferi.',
  'plugins.stremio.install.5':
    'Apasă **Install**. Stremio se deschide și îți cere să confirmi; acceptă și ai terminat.',
  'plugins.stremio.install.after':
    'Cheia și preferințele tale sunt codificate în add-on, deci nu mai e nimic altceva de configurat. Deschide orice film sau episod și alege o subtitrare din listă.',
  'plugins.stremio.cfg.key.f': 'Cheie API',
  'plugins.stremio.cfg.key.d': 'Cheia ta Wyzie. Necesară.',
  'plugins.stremio.cfg.langs.f': 'Limbi',
  'plugins.stremio.cfg.langs.d':
    'Coduri ISO 639-1, separate prin virgulă. Gol înseamnă toate limbile.',
  'plugins.stremio.cfg.hi.f': 'Deficiențe de auz',
  'plugins.stremio.cfg.hi.d':
    'Preferă subtitrările pentru persoane cu deficiențe de auz când sunt disponibile.',
  'plugins.stremio.cfg.note':
    'Pentru a schimba oricare dintre acestea ulterior, redeschide [stremio.wyzie.io/configure](https://stremio.wyzie.io/configure), ajustează și reinstalează.',
  'plugins.stremio.local':
    'Apoi deschide `http://127.0.0.1:7000/configure`, lipește cheia și instalează în Stremio.',
  'plugins.stremio.quota':
    'Dacă cheia ta atinge limita, add-on-ul afișează o singură intrare de subtitrare care trimite către [store.wyzie.io](https://store.wyzie.io) ca să poți reîncărca sau abona. După ce o faci, subtitrările revin imediat.',
  'plugins.stremio.ts.none':
    '**Nu apar subtitrări.** Asigură-te că titlul are un ID IMDB în Stremio (majoritatea elementelor din catalog au) și că limbile alese chiar au subtitrări pentru acel titlu. Încearcă să elimini filtrul de limbă ca să vezi tot.',
  'plugins.stremio.ts.key':
    '**Cheie invalidă, sau nu se încarcă nimic.** Redeschide pagina de configurare și relipește cheia; un spațiu rătăcit o strică. Confirmă că cheia funcționează la [store.wyzie.io/dashboard](https://store.wyzie.io/dashboard).',
  'plugins.stremio.ts.episode':
    '**Episodul serialului nu se potrivește.** Wyzie se potrivește pe sezon și episod; asigură-te că Stremio redă intrarea corectă a episodului, nu o pagină generică a serialului.',

  'plugins.bazarr.intro':
    '[Bazarr](https://www.bazarr.media/) gestionează subtitrările pentru **Plex, Jellyfin, Emby, Sonarr și Radarr** într-un singur loc. Adăugarea Wyzie ca provider oferă tuturor acelor servere acces la OpenSubtitles, SubDL și Podnapisi printr-o singură cheie.',
  'plugins.bazarr.note':
    'Aceasta este modalitatea recomandată de a folosi Wyzie cu Plex și Jellyfin. Bazarr descarcă fișierele de subtitrare lângă media ta, iar serverul tău le preia automat, deci nu este necesar un plugin nativ separat.',
  'plugins.bazarr.before':
    'Obține o cheie API Wyzie gratuită la [store.wyzie.io/redeem](https://store.wyzie.io/redeem) și asigură-te că ai acces la fișierele instalării tale Bazarr (cale Docker tipică: `/opt/bazarr/bazarr/`).',
  'plugins.bazarr.install.1':
    'Copiază `wyzie.py` în `bazarr/subliminal_patch/providers/wyzie.py`.',
  'plugins.bazarr.install.2':
    'Editează `bazarr/subliminal_patch/extensions.py` și adaugă `wyzie` în **ambele** `provider_registry` și `provider_manager`.',
  'plugins.bazarr.install.3':
    'Editează `bazarr/list_subtitles.py` (sau `bazarr/config.py`, în funcție de versiunea ta) pentru a expune setările `api_key`, `prefer_hi` și `sources`. Copiază modelul de la un provider existent precum `opensubtitlescom`.',
  'plugins.bazarr.install.4': 'Repornește Bazarr.',
  'plugins.bazarr.install.5':
    'Mergi la **Settings, Providers, Wyzie**, lipește cheia API și salvează.',
  'plugins.bazarr.install.after':
    'Este planificat un pull request de calitate care să integreze acest provider în Bazarr. Până atunci, este un fișier drop-in pe care îl adaugi la propria instalare.',
  'plugins.bazarr.cfg.key': 'Cheia ta Wyzie. Necesară.',
  'plugins.bazarr.cfg.hi':
    'Preferă subtitrările pentru persoane cu deficiențe de auz.',
  'plugins.bazarr.cfg.sources':
    'Listă de provideri de interogat, separați prin virgulă, sau `all`.',
  'plugins.bazarr.quota.402':
    '**402 sau 429** (sold epuizat sau plafon zilnic atins): Bazarr înregistrează o notă cu un link către [store.wyzie.io](https://store.wyzie.io) și nu returnează rezultate, astfel încât revine curat la ceilalți provideri ai tăi. Nimic nu se blochează.',
  'plugins.bazarr.quota.401':
    '**401** (cheie greșită): Bazarr afișează o eroare de autentificare ca să știi să reintroduci cheia.',
  'plugins.bazarr.ts.missing':
    '**Wyzie nu apare în lista de provideri.** Reverifică pasul de instalare care editează `extensions.py`; intrarea trebuie să fie atât în `provider_registry`, cât și în `provider_manager`, apoi repornește Bazarr.',
  'plugins.bazarr.ts.none':
    '**Nu s-au găsit subtitrări.** Confirmă că elementul are un ID IMDB în Bazarr și că limbile pe care le-ai activat au subtitrări pentru el. Restrânge `sources` doar dacă intenționezi acest lucru.',
  'plugins.bazarr.ts.settings':
    '**Câmpurile de setări lipsesc.** Pasul de setări nu a fost aplicat pentru versiunea ta de Bazarr; compară cu un bloc de setări de provider funcțional și repornește.',

  'plugins.kodi.intro':
    'Un serviciu de subtitrări pentru **Kodi 19+ (Matrix și mai recent)**, LibreELEC și CoreELEC. Folosește punctul de extensie standard al Kodi `xbmc.subtitle.module`, așa că apare oriunde Kodi caută subtitrări.',
  'plugins.kodi.before':
    'Obține o cheie API Wyzie gratuită la [store.wyzie.io/redeem](https://store.wyzie.io/redeem).',
  'plugins.kodi.repo.intro':
    'Instalarea depozitului o singură dată permite Kodi să **actualizeze automat** add-on-ul pentru tine.',
  'plugins.kodi.repo.1':
    'Descarcă instalatorul depozitului: [**repository.wyzie.zip**](https://kodi.wyzie.io/repository.wyzie.zip).',
  'plugins.kodi.repo.2':
    'În Kodi: **Settings, Add-ons, Install from zip file**, apoi alege `repository.wyzie.zip`. Dacă Kodi îl blochează, activează mai întâi **Settings, System, Add-ons, Unknown sources**.',
  'plugins.kodi.repo.3':
    '**Settings, Add-ons, Install from repository, Wyzie Repository, Subtitle services, Wyzie Subs, Install.**',
  'plugins.kodi.repo.4':
    '**Settings, Player, Language, Default subtitle service**, apoi selectează **Wyzie Subs**.',
  'plugins.kodi.repo.5':
    'Deschide setările add-on-ului Wyzie Subs și lipește **cheia API**.',
  'plugins.kodi.zip.intro':
    'Folosește aceasta dacă preferi să nu adaugi depozitul. Notă: o instalare din zip **nu** se actualizează automat.',
  'plugins.kodi.zip.1':
    'Obține zip-ul add-on-ului: `service.subtitles.wyzie-<version>.zip`. Dacă ai sursa, arhivează folderul `kodi/` astfel încât zip-ul să conțină `addon.xml` la rădăcina sa.',
  'plugins.kodi.zip.2':
    'În Kodi: **Settings, Add-ons, Install from zip file**, apoi alege zip-ul. Dacă Kodi îl blochează, activează mai întâi **Settings, System, Add-ons, Unknown sources**.',
  'plugins.kodi.zip.3':
    '**Settings, Player, Language, Default subtitle service**, apoi selectează **Wyzie Subs**.',
  'plugins.kodi.zip.4':
    'Deschide setările add-on-ului Wyzie Subs și lipește **cheia API**.',
  'plugins.kodi.cfg.key': 'Cheia ta Wyzie. Necesară.',
  'plugins.kodi.cfg.hi':
    'Preferă subtitrările pentru persoane cu deficiențe de auz.',
  'plugins.kodi.cfg.langs':
    'Limbile sunt preluate din limbile de subtitrare selectate în Kodi și mapate automat la ISO 639-1.',
  'plugins.kodi.matching.1':
    'În timp ce se redă ceva, Kodi expune numărul IMDB, sezonul și episodul. Add-on-ul le citește, interoghează `sub.wyzie.io/search` și returnează subtitrările potrivite. Deoarece Wyzie este ghidat de ID-uri (IMDB și TMDB), potrivirile sunt precise atât pentru filme, cât și pentru seriale.',
  'plugins.kodi.matching.2':
    '**Căutarea manuală** afișează în prezent o notificare și nu face nimic, deoarece Wyzie se potrivește pe ID-uri, nu pe titluri. O căutare titlu-către-ID este pe foaia de parcurs. Deocamdată, lasă Kodi să caute automat în timpul redării.',
  'plugins.kodi.quota':
    'Un răspuns 402 sau 429 afișează o notificare toast Kodi care te îndreaptă către [store.wyzie.io](https://store.wyzie.io) pentru a reîncărca sau a te abona.',
  'plugins.kodi.ts.notoffered':
    '**Wyzie nu este oferit în timpul redării.** Confirmă că este setat ca **Default subtitle service** și că elementul redat are un ID IMDB.',
  'plugins.kodi.ts.key':
    '**Cheie invalidă.** Redeschide setările add-on-ului și relipește cheia.',
  'plugins.kodi.ts.episode':
    '**Nimic pentru un episod.** Asigură-te că Kodi are metadate corecte de sezon și episod pentru fișier; elementele din bibliotecă obținute prin scraping funcționează cel mai bine.',
};

export default messages;
