const messages: Record<string, string> = {
  // Navigation
  'nav.language': 'Language',

  // Index / Landing Page
  'index.subtitle':
    'Wyzie is een open-source toolset voor het scrapen van ondertitels en alles daartussenin.',
  'index.cta.start': 'Aan de slag',
  'index.cta.store': 'Bekijk het',

  'index.card.keys.title': 'Gratis API-sleutels',
  'index.card.keys.body':
    'Haal een gratis API-sleutel op bij store.wyzie.io/redeem met een snelle Gmail-verificatie. 1.000 verzoeken/dag gratis. Betaalde abonnementen beschikbaar voor intensiever gebruik.',

  'index.card.ai.title': 'AI-vertaling',
  'index.card.ai.body':
    'Vertaal elke ondertitel naar 80+ talen op aanvraag. Streamt cue voor cue zodat het afspelen binnen enkele seconden kan beginnen. Beschikbaar voor Pro-sleutels.',

  'index.card.reliable.title': 'Betrouwbaar',
  'index.card.reliable.body':
    'We zijn trots op onze consistente uptime en (bijna) dagelijkse updates, evenals snelle caching.',

  'index.card.simple.title': 'Eenvoud Hergedefinieerd',
  'index.card.simple.body':
    'Eenvoudig te implementeren, eenvoudig te gebruiken. Wyzie is ontworpen om zo eenvoudig mogelijk te zijn.',

  // Donate Page
  'donate.title': 'Doneer Alstublieft',
  'donate.body':
    'Hallo gebruiker, Wyzie vertrouwt op dit moment enigszins op donaties (die ik nauwelijks ontvang) en ik ben 16 met een bijbaan. Soms overschrijdt mijn rekening voor het draaien van de publieke API de $100 per maand. Ik kan dit niet blijven ondersteunen zonder externe hulp. Het spijt me oprecht, maar dit project is gegroeid buiten wat ik oorspronkelijk uit eigen zak kon ondersteunen.',
  'donate.cta': 'Wyzie steunen',

  // Subs Intro Page
  'subs.intro.title': 'Introductie tot Wyzie Subs',
  'subs.intro.p1':
    'Wyzie Subs is een gratis en libre open-subtitles scraping API. Er zijn twee manieren om verzoeken aan de API te doen: via ons NPM-pakket of door de Wyzie API rechtstreeks op te vragen. Ik raad aan ons pakket te gebruiken, maar sommigen vinden de types omslachtig. Om de API te gebruiken, moet je eerst die keuze maken.',
  'subs.intro.note.ai':
    'AI-vertaling is live voor Pro-sleutels. Elke titel, 80+ doeltalen, gestreamd terwijl de vertaler bezig is.',
  'subs.intro.important.apikey':
    'Voor alle verzoeken is een API-sleutel vereist. Haal een gratis sleutel op bij [store.wyzie.io/redeem](https://store.wyzie.io/redeem) (Gmail-verificatie, 1.000 verzoeken/dag). Voor intensiever gebruik zijn [Pro- en opwaardeerplannen](https://store.wyzie.io) beschikbaar. Zie de pagina API-sleutels voor meer details.',
  'subs.intro.note.npm':
    'We raden het NPM-pakket sterk aan als je bekend bent met TypeScript of JavaScript',
  'subs.intro.btn.npm': 'NPM-pakket',
  'subs.intro.btn.direct': 'Rechtstreeks ophalen',

  'subs.intro.protect.h2': 'Je API-sleutel beschermen',
  'subs.intro.protect.important':
    '**Echte incident:** we hebben gezien dat ontwikkelaars hun sleutel direct in de frontend-JavaScript van een streamingsite plakten. Binnen enkele uren had een derde partij de sleutel uit de JS-bundel geschraapt en gebruikt totdat de daglimiet of het betaalde saldo was uitgeput. Op deze manier verloren quota worden niet terugbetaald en worden behandeld als de verantwoordelijkheid van de sleuteleigenaar onder onze Gebruiksvoorwaarden.',
  'subs.intro.protect.p1':
    'Je API-sleutel moet privé blijven en mag **nooit** voorkomen in:',
  'subs.intro.protect.item1':
    'Browser-JavaScript (alles dat aan een script-tag wordt aangeleverd)',
  'subs.intro.protect.item2':
    'Binaire bestanden van mobiele apps (Android/iOS, inclusief geobfusceerde versies)',
  'subs.intro.protect.item3': 'Browserextensies',
  'subs.intro.protect.item4':
    'Electron / desktop-apps die aan eindgebruikers worden verspreid',
  'subs.intro.protect.item5':
    'Openbare Git-repositories, gists, paste-sites of schermafbeeldingen',
  'subs.intro.protect.p2':
    'Als de sleutel de machine van een eindgebruiker bereikt, behandel hem dan als openbaar. Er zijn twee veilige opties:',
  'subs.intro.protect.opt1.h3': 'Optie 1: Wyzie Worker gebruiken',
  'subs.intro.protect.opt1.p1':
    'Wyzie Worker is een lichtgewicht Cloudflare Worker-proxy die je API-sleutel server-side injecteert. Implementeer het op Cloudflare Workers en stel je sleutel in als de omgevingsvariabele NITRO_API_TOKEN. Richt je clientverzoeken vervolgens op je worker-URL in plaats van sub.wyzie.io — de worker stuurt ze door met je sleutel toegevoegd.',
  'subs.intro.protect.opt2.h3': 'Optie 2: Bouw je eigen proxy',
  'subs.intro.protect.opt2.p1':
    'Als je Wyzie Worker liever niet gebruikt, kun je een eenvoudige server-side proxy bouwen in elk framework. Het idee is hetzelfde: je backend ontvangt verzoeken van je client, voegt de API-sleutel toe en stuurt ze door naar sub.wyzie.io.',

  // Subs Sources Page
  'subs.sources.title': 'Wyzie Subs Bronnen',
  'subs.sources.p1':
    'Wyzie Subs aggregeert ondertitels van meerdere aanbieders. De beschikbaarheid van bronnen kan variëren afhankelijk van de status van de aanbieder of als een bron niet beschikbaar is. Ik ben altijd op zoek naar nieuwe bronnen — neem contact op om er een voor te stellen.',

  'subs.sources.using.h2': 'Bronnen gebruiken',
  'subs.sources.using.bullet1':
    'Gebruik source=all om alle ingeschakelde bronnen tegelijkertijd te bevragen',
  'subs.sources.using.bullet2':
    'Standaardbron is opensubtitles als er geen is opgegeven',
  'subs.sources.using.bullet3':
    "Meerdere bronnen kunnen worden opgegeven als een door komma's gescheiden lijst",

  'subs.sources.api.h2': 'API-eindpunt',
  'subs.sources.api.p1':
    'Je kunt programmatisch de lijst met momenteel ingeschakelde bronnen en hun abonnementsniveau ophalen:',
  'subs.sources.api.free':
    'bronnen die elke sleutel kan bevragen, inclusief gratis sleutels.',
  'subs.sources.api.paid': 'bronnen waarvoor een Pro-sleutel nodig is.',
  'subs.sources.api.allFree':
    'als dit true is, is elke ingeschakelde bron beschikbaar voor alle sleutels en is paid leeg.',

  'subs.sources.scope.h3': 'Beperken tot een sleutel',
  'subs.sources.scope.p1':
    'Geef je API-sleutel mee om de bronnen te zien die die sleutel daadwerkelijk kan gebruiken:',
  'subs.sources.scope.p2':
    'Dit voegt sleutelspecifieke velden toe zonder een verzoek van je quotum te verbruiken:',
  'subs.sources.scope.available': 'bronnen die deze sleutel nu kan bevragen.',
  'subs.sources.scope.restricted':
    'ingeschakelde bronnen die deze sleutel niet kan bevragen (upgrade naar Pro om ze te ontgrendelen).',
  'subs.sources.scope.keyType': 'free of paid.',
  'subs.sources.scope.keyValid':
    'is false als de sleutel ongeldig is of niet gevonden wordt, en null als de sleutel niet geverifieerd kon worden (in dat geval worden available en restricted weggelaten).',

  'subs.sources.details.h2': 'Brondetails',

  'subs.sources.opensubtitles.desc':
    'De grootste ondertiteldatabase online. Ondersteunt films en tv-series in een breed scala aan talen. Maakt gebruik van de officiële OpenSubtitles REST API.',
  'subs.sources.opensubtitles.content': 'Films & tv-series',
  'subs.sources.opensubtitles.languages':
    'Uitgebreide meertalige ondersteuning',
  'subs.sources.opensubtitles.formats': 'SRT, ASS, SSA, VTT, SUB, en meer',

  'subs.sources.subdl.desc':
    'Een door de gemeenschap gedreven ondertitelsite met een breed aanbod van films en tv-series.',
  'subs.sources.subdl.content': 'Films & tv-series',
  'subs.sources.subdl.languages': 'Uitgebreide meertalige ondersteuning',
  'subs.sources.subdl.formats': 'SRT, ASS, SSA, VTT, SUB, en meer',

  'subs.sources.subf2m.desc':
    'Een grote ondertitelrepository met uitgebreide taalondersteuning voor films en tv-series.',
  'subs.sources.subf2m.content': 'Films & tv-series',
  'subs.sources.subf2m.languages': 'Uitgebreide meertalige ondersteuning',
  'subs.sources.subf2m.formats': 'SRT, ASS, SSA, VTT, SUB, en meer',

  'subs.sources.podnapisi.desc':
    'Een van de oudste ondertiteldatabases. Goed samengestelde collectie met films en tv-series.',
  'subs.sources.podnapisi.content': 'Films & tv-series',
  'subs.sources.podnapisi.languages': 'Uitgebreide meertalige ondersteuning',
  'subs.sources.podnapisi.formats': 'SRT, ASS, SSA, VTT, SUB, en meer',

  'subs.sources.animetosho.desc':
    'Scrapt anime-ondertitelbijlagen rechtstreeks van torrent-releases geïndexeerd op AnimeTosho.',
  'subs.sources.animetosho.content': 'Anime (tv-series)',
  'subs.sources.animetosho.languages':
    'Japans, Engels en andere afhankelijk van de release',
  'subs.sources.animetosho.formats': 'ASS, SRT, SSA, en andere',
  'subs.sources.animetosho.note':
    'AnimeTosho staat gepland om in mei 2026 te sluiten.',

  'subs.sources.gestdown.desc':
    'Biedt ondertitels voor tv-series via de Gestdown API met brede taalondersteuning.',
  'subs.sources.gestdown.content': 'Alleen tv-series',
  'subs.sources.gestdown.languages': 'Uitgebreide meertalige ondersteuning',
  'subs.sources.gestdown.formats': 'SRT, ASS, en meer',

  'subs.sources.jimaku.desc':
    'Scrapt jimaku.cc, een door de gemeenschap onderhouden repository van anime-ondertitelbestanden. Vergelijkt titels via de TMDB API.',
  'subs.sources.jimaku.content': 'Anime (films & tv-series)',
  'subs.sources.jimaku.languages':
    'Voornamelijk Japans; ook Engels, Chinees en meer afhankelijk van beschikbare bestanden',
  'subs.sources.jimaku.formats': 'SRT, ASS, SSA, VTT, SUB, en andere',

  'subs.sources.kitsunekko.desc':
    'Scrapt directorylijsten van kitsunekko.net, een speciale anime-ondertitelrepository. Vergelijkt titels via de TMDB API.',
  'subs.sources.kitsunekko.content': 'Anime (tv-series)',
  'subs.sources.kitsunekko.languages': 'Engelse en Japanse ondertitelmappen',
  'subs.sources.kitsunekko.formats': 'SRT, ASS, SSA, VTT, SUB, en andere',

  'subs.sources.yify.desc':
    'Scrapt yifysubtitles.ch voor ondertitels gekoppeld aan IMDB-ID. Alleen films.',
  'subs.sources.yify.content':
    'Alleen films (tv-series worden niet ondersteund)',
  'subs.sources.yify.languages':
    'Uitgebreide meertalige ondersteuning (Albanees, Arabisch, Engels, Frans, Spaans en veel meer)',
  'subs.sources.yify.formats': 'SRT (geleverd in een ZIP-archief)',

  'subs.sources.ajatttools.desc':
    'Haalt ondertitels op uit de Ajatt-Tools/kitsunekko-mirror GitHub-repository. Georganiseerd op mediatype. Vergelijkt titels via de TMDB API.',
  'subs.sources.ajatttools.content': 'Anime & drama (tv-series en films)',
  'subs.sources.ajatttools.languages':
    'Voornamelijk Japans; ook Engels, Chinees en andere',
  'subs.sources.ajatttools.formats': 'SRT, ASS, SSA, VTT, SUB, en andere',

  'subs.sources.ai.desc':
    'Geen scraper. AI-vertaalde SRT die op aanvraag wordt gegenereerd vanuit de best beschikbare bronondertitel. Zie de AI-vertalingsgids voor volledige details.',
  'subs.sources.ai.content': 'Alles waarvoor Wyzie een SRT kan vinden',
  'subs.sources.ai.languages': '80+ doeltalen',
  'subs.sources.ai.formats': 'Alleen SRT',

  // Subs Package Page
  'subs.pkg.title': 'Het Wyzie NPM-pakket gebruiken',
  'subs.pkg.p1':
    'Het Wyzie Subs NPM-pakket biedt een eenvoudige en gebruiksvriendelijke interface voor het zoeken en ophalen van ondertitels.',
  'subs.pkg.install.h2': 'Installatie',
  'subs.pkg.important':
    'Voor alle verzoeken is een API-sleutel vereist. Haal een gratis sleutel op bij [store.wyzie.io/redeem](https://store.wyzie.io/redeem) en geef deze mee via de key-parameter. Zie de pagina API-sleutels voor meer details.',
  'subs.pkg.usage.h2': 'Gebruik',
  'subs.pkg.params.h3': 'Parameters',
  'subs.pkg.params.note':
    'Voor meer informatie (of als je vastloopt), bezoek de [Wyzie Subs-homepage](https://sub.wyzie.io).',

  'subs.pkg.param.tmdb':
    'TMDB-ID van de film of tv-serie (tmdb_id of imdb_id is vereist).',
  'subs.pkg.param.imdb':
    'IMDB-ID van de film of tv-serie (imdb_id of tmdb_id is vereist).',
  'subs.pkg.param.format':
    'Bestandsformaten om terug te geven (bijv. srt, ass). Accepteert een lijst.',
  'subs.pkg.param.season': 'Seizoennummer (vereist episode).',
  'subs.pkg.param.episode': 'Afleveringsnummer (vereist season).',
  'subs.pkg.param.language':
    'ISO 639-1-codes voor de ondertiteltaal. Accepteert een lijst.',
  'subs.pkg.param.encoding': 'Tekencoderingsfilter (bijv. utf-8, latin-1).',
  'subs.pkg.param.hi': 'Boolean voor ondertitels voor slechthorenden.',
  'subs.pkg.param.source':
    'Ondertitelaanbieders om te bevragen (all voor elke ingeschakelde bron).',
  'subs.pkg.param.release': 'Release/scene-filters (accepteert een lijst).',
  'subs.pkg.param.filename':
    'Bestandsnaamfilters; aliassen file en fileName worden ondersteund.',
  'subs.pkg.param.origin': 'Inhoudsoorsprongfilter (bijv. WEB, BLURAY, DVD).',
  'subs.pkg.param.key':
    'Je API-sleutel (vereist). Haal er gratis een op bij store.wyzie.io/redeem.',
  'subs.pkg.param.refresh':
    'Cache omzeilen en verse resultaten ophalen van bronnen.',

  'subs.pkg.helpers':
    "Het pakket bevat ook lichtgewicht TMDB-hulpfuncties: searchTmdb, getTvDetails en getSeasonDetails voor het snel vinden van ID's voordat je /search aanroept. Daarnaast kan getSources worden gebruikt om de lijst met momenteel ingeschakelde ondertitelbronnen op te halen.",
  'subs.pkg.types.h3': 'Types',
  'subs.pkg.type.search': 'Alle geldige parameters die de API herkent.',
  'subs.pkg.type.query':
    'Alle parameters (optioneel en vereist) beschikbaar voor de wyzie-subs API.',
  'subs.pkg.type.subtitle':
    'Alle teruggegeven waarden van de API met hun respectievelijke types.',
  'subs.pkg.type.sources': 'Antwoordtype van het /sources-eindpunt.',
  'subs.pkg.types.end':
    'Onze types zijn heel eenvoudig en goed gedocumenteerd. Bekijk het types.ts-bestand dat is gelinkt in de GitHub-repository.',
  'subs.pkg.config.h3': 'Configuratie',
  'subs.pkg.config.p1':
    'Een gebruiker vroeg op Github om een configureerbare API-hostnaam en ik dacht: dat klinkt als een goed idee, dus hieronder staat het gebruik. Liefde voor jullie allemaal!',

  // Subs Direct Page
  'subs.direct.title': 'Wyzie Subs rechtstreeks ophalen',
  'subs.direct.caution':
    'Ik raad sterk aan het NPM-pakket te gebruiken omdat het eenvoudiger en betrouwbaarder is.',
  'subs.direct.p1':
    'Als je besloten hebt het NPM-pakket niet te gebruiken, laten we dan aan de slag gaan. Ik zal alleen de API-parameters en de geretourneerde gegevens behandelen. Hoe je de API aanroept, is geheel aan jou.',
  'subs.direct.important':
    'Voor alle verzoeken is een API-sleutel vereist. Haal een gratis sleutel op bij [store.wyzie.io/redeem](https://store.wyzie.io/redeem) en voeg deze toe als &key=YOUR_KEY bij elk verzoek. Zie de pagina API-sleutels voor meer details.',

  'subs.direct.params.h3': 'Parameters',
  'subs.direct.param.id': 'TMDB- of IMDB-ID van de serie of film (vereist).',
  'subs.direct.param.seasonEpisode':
    'Seizoen en aflevering voor tv-zoekopdrachten. Beide moeten tegelijk aanwezig zijn.',
  'subs.direct.param.language':
    "Taalfilter (ISO 639-1-codes). Meerdere waarden worden gescheiden door komma's.",
  'subs.direct.param.format':
    'Ondertitelformaten om terug te geven. Meerdere waarden toegestaan.',
  'subs.direct.param.hi':
    'Of de voorkeur gegeven moet worden aan ondertitels voor slechthorenden.',
  'subs.direct.param.encoding': 'Tekencoderingsfilter.',
  'subs.direct.param.source':
    'Ondertitelaanbieders om te bevragen (all bevraagt elke ingeschakelde bron; standaard opensubtitles).',
  'subs.direct.param.release':
    'Release- of scenenaamfilters (kommagescheiden).',
  'subs.direct.param.file':
    'Bestandsnaamfilters (aliassen: file, filename, fileName).',
  'subs.direct.param.origin':
    'Inhoudsoorsprongfilter, kommagescheiden (bijv. WEB, BLURAY, DVD).',
  'subs.direct.param.key':
    'Je API-sleutel (vereist). Haal er gratis een op bij store.wyzie.io/redeem.',
  'subs.direct.param.refresh':
    'Cache omzeilen en verse resultaten ophalen. Gebruik dit wanneer bronnen mogelijk zijn bijgewerkt.',
  'subs.direct.important.imdb':
    "Wanneer je een IMDB-ID gebruikt, zorg er dan voor dat de eerste twee tekens ('tt') aan het begin van het ID zijn opgenomen.",

  'subs.direct.data.h3': 'Geretourneerde gegevens',
  'subs.direct.data.id': 'Het ID van het ondertitelbestand.',
  'subs.direct.data.url': 'De URL naar het ondertitelbestand.',
  'subs.direct.data.flagUrl':
    'URL naar de vlag van de landinstelling van de taal.',
  'subs.direct.data.format': 'Het formaat van het ondertitelbestand.',
  'subs.direct.data.encoding': 'De tekencodering van het ondertitelbestand.',
  'subs.direct.data.display': 'De taal van de ondertitel, met hoofdletter.',
  'subs.direct.data.language': 'De ISO 3166-2-code van de taal.',
  'subs.direct.data.media':
    'De naam van de media waarvoor de ondertitels zijn.',
  'subs.direct.data.isHearingImpaired':
    'Boolean die aangeeft of de ondertitel toegankelijk is voor slechthorenden.',
  'subs.direct.data.source': 'Welke bron de ondertitel heeft gescrapt.',
  'subs.direct.data.release': 'Primaire releasenaam.',
  'subs.direct.data.releases':
    'Andere releasenamen die compatibel zijn met de ondertitel.',
  'subs.direct.data.fileName':
    'Oorspronkelijke bestandsnaam indien beschikbaar.',
  'subs.direct.data.downloadCount':
    'Aantal downloads op het bronplatform (indien beschikbaar).',
  'subs.direct.data.origin': 'Inhoudsoorsprong (bijv. WEB, BluRay, DVD).',
  'subs.direct.data.matchedRelease':
    'Releasewaarde die overeenkwam met je filter (indien opgegeven).',
  'subs.direct.data.matchedFilter':
    'Het door de gebruiker opgegeven filter dat overeenkwam (indien opgegeven).',
  'subs.direct.data.ai':
    'true als het item een AI-vertaalde ondertitel is, false voor normale gescrapte ondertitels. Gebruik het als een filter aan de clientzijde als je alleen het een of het ander wilt.',

  // Subs Translate Page
  'subs.translate.title': 'AI-ondertitelvertaling',
  'subs.translate.important':
    'AI-vertaling is een **Pro-functie**. Elke vertaling kost **100 verzoeken** van het saldo van je sleutel, ook bij een cache-hit. Gratis sleutels kunnen dit niet gebruiken.',
  'subs.translate.p1':
    'Wyzie kan elke ondertitel ter plekke vertalen naar 80+ talen. Vertalingen worden gestreamd terwijl het model ze produceert, zodat het afspelen kan beginnen binnen een seconde of twee in plaats van te wachten op het volledige bestand. Resultaten worden 30 dagen gecached, zodat de tweede persoon die om dezelfde vertaling vraagt deze onmiddellijk krijgt.',

  'subs.translate.ways.h2': 'Twee manieren om het te gebruiken',
  'subs.translate.way1.h3': '1. Kies een taal uit een zoekresultaat',
  'subs.translate.way1.p1':
    'Elk /search-antwoord bevat nu één extra item per ondersteunde taal met "ai": true en een url die verwijst naar /translate. Behandel de AI-rijen gewoon als elk ander ondertitelrij in je UI: wanneer de gebruiker er op klikt, haal dan de URL op.',
  'subs.translate.way1.filter':
    'Als je de AI-rijen uit je UI wilt verbergen, filter ze er dan uit:',
  'subs.translate.way2.h3': '2. Roep /translate rechtstreeks aan',

  'subs.translate.param.id': 'TMDB- of IMDB-ID (vereist).',
  'subs.translate.param.target':
    'Doeltaal als volledige Engelse naam (bijv. Spanish, Japanese, Brazilian Portuguese) (vereist).',
  'subs.translate.param.seasonEpisode':
    'Voor tv. Beide moeten tegelijk aanwezig zijn.',
  'subs.translate.param.key':
    'Je API-sleutel. Gebruik in plaats daarvan tk als je de URL van /search hebt gekregen.',
  'subs.translate.param.tk':
    'Ondertekend token teruggegeven door /search. Equivalent aan key, maar geeft de ruwe sleutel niet bloot.',

  'subs.translate.headers.p':
    'De antwoordtekst is een SRT-bestand gestreamd als text/plain; charset=utf-8. Nuttige antwoordheaders:',
  'subs.translate.header.xcache':
    'HIT-REDIS als geleverd vanuit cache, MISS als vers gegenereerd.',
  'subs.translate.header.xsourcelang':
    'taal van de ondertitel die de vertaler als invoer heeft gebruikt.',
  'subs.translate.header.xtargetlang': 'echo van je target-parameter.',
  'subs.translate.header.xsourceprovider':
    'welke scraper de bronondertitel heeft geleverd.',

  'subs.translate.how.h2': 'Hoe het werkt',
  'subs.translate.how.step1':
    'Wyzie zoekt in normale bronnen naar een SRT-ondertitel, met voorkeur voor Engels indien beschikbaar.',
  'subs.translate.how.step2':
    'De SRT wordt opgesplitst in blokken van 50 cues en sequentieel vertaald. Elk blok wordt afzonderlijk gecached zodra het klaar is.',
  'subs.translate.how.step3':
    'Uitvoer wordt cue voor cue naar je gestreamd. Spelers die een streamende SRT-body accepteren, kunnen de eerste regels tonen voordat de rest klaar is.',
  'subs.translate.how.step4':
    'De volledige vertaling wordt 30 dagen gecached in Redis, geïndexeerd op id, season, episode en target.',

  'subs.translate.languages.h2': 'Ondersteunde doeltalen',
  'subs.translate.languages.p':
    '80+ talen inclusief alle grote Europese, Aziatische, Afrikaanse en Midden-Oosterse talen. Geef de Engelse naam door (Spanish, niet es). De lijst wordt ook teruggegeven als ai: true rijen in elk /search-antwoord, wat de definitieve bron van waarheid is.',

  'subs.translate.limitations.h2': 'Beperkingen',
  'subs.translate.limit1':
    'AI-vertaling heeft een SRT-bron nodig. Titels waarbij elke beschikbare ondertitel .ass, .vtt of een ander formaat is, geven 404 No SRT found terug.',
  'subs.translate.limit2':
    'De vertaalkwaliteit hangt af van de bronondertitel. Een slecht getimede of verkeerd getypte bron levert een slecht getimede of verkeerd getypte vertaling op.',
  'subs.translate.limit3':
    'Sommige gebruikers willen AI-rijen volledig uitsluiten. Filter op ai === false in je client.',
  'subs.translate.limit4':
    'Vertalingen worden ook bij cache-hits in rekening gebracht. Of ze nu vers worden gegenereerd of geleverd vanuit de 30-daagse cache, elk /translate-verzoek kost 100 verzoeken.',

  // Subs API Keys Page
  'subs.keys.title': 'API-sleutels',
  'subs.keys.p1':
    "Wyzie Subs vereist een API-sleutel voor alle verzoeken. Een gratis abonnement dekt de meeste gebruiksscenario's; betaalde plannen verwerken intensiever gebruik.",

  'subs.keys.tiers.h2': 'Abonnementsniveaus',
  'subs.keys.tier.free': 'Gratis (Gmail vereist)',
  'subs.keys.tier.free.limit': '1.000 verzoeken / UTC-dag',
  'subs.keys.tier.pro': '$5 eenmalig',
  'subs.keys.tier.pro.limit': '400.000 verzoeken',
  'subs.keys.tier.topup': 'vanaf $0,0625 / 5K',
  'subs.keys.tier.topup.limit': 'Voegt toe aan je betaalde saldo',
  'subs.keys.tiers.end':
    'Pro en opwaarderingen verlopen niet. Liever doorlopend? Een abonnement van $32/maand geeft 6.000.000 verzoeken/maand (alleen kaart). Zie store.wyzie.io voor volledige prijsinformatie en het dashboard.',

  'subs.keys.free.h2': 'Een gratis sleutel ophalen',
  'subs.keys.free.p':
    'Bezoek [store.wyzie.io/redeem](https://store.wyzie.io/redeem):',
  'subs.keys.free.step1': 'Los een snelle Cloudflare Turnstile-captcha op.',
  'subs.keys.free.step2':
    'Voer een Gmail-adres in (alleen Gmail wordt geaccepteerd voor het gratis abonnement).',
  'subs.keys.free.step3': 'Voer de 6-cijferige code in die we je e-mailen.',
  'subs.keys.free.step4':
    'Je ontvangt een API-sleutel die eruitziet als wyzie-abc123...',
  'subs.keys.free.gmail':
    'Elk Gmail-adres kan slechts één gratis sleutel inwisselen. Had je al een gratis sleutel gekoppeld aan dat e-mailadres? Opnieuw verifiëren geeft gewoon je bestaande sleutel terug.',

  'subs.keys.pro.h2': 'Upgraden naar Pro',
  'subs.keys.pro.p1':
    'Bezoek [store.wyzie.io](https://store.wyzie.io) en reken af met hetzelfde e-mailadres dat je voor je gratis sleutel hebt gebruikt. Je bestaande wyzie-...-sleutel wordt ter plekke geüpgraded met 400K betaalde verzoeken erbij. Liever doorlopend? Een abonnement van $32/maand voegt in plaats daarvan een maandelijks tegoed van 6.000.000 verzoeken toe (alleen kaart).',
  'subs.keys.pro.p2':
    'Als je afrekent met een gloednieuw e-mailadres (zonder eerdere sleutel), wordt een nieuwe wyzie-...-sleutel gegenereerd en naar je gemaild.',

  'subs.keys.protect.h2': 'Houd je sleutel uit de client',
  'subs.keys.protect.important':
    '**Sla je API-sleutel nooit op in client-side code.** Browser-JavaScript, mobiele apps, browserextensies, Electron-stijl desktop-apps en openbare Git-repositories worden allemaal als client-side beschouwd. Alles wat je naar een eindgebruiker stuurt, kan door hen worden geïnspecteerd, en we hebben echte gevallen gezien waarbij gebruikers hun sleutel in de frontend van een streamingsite plakten, alleen om een derde partij de JS-bundel te laten scrapen en het verzoeksaldo binnen uren uit te putten. Op deze manier verbruikt quotum wordt niet terugbetaald.',
  'subs.keys.protect.p2':
    'Twee veilige manieren om de sleutel vanuit een client-app te gebruiken:',
  'subs.keys.protect.option1':
    'Gebruik [Wyzie Worker](https://github.com/wyziedevs/wyzie-worker): een gratis Cloudflare Worker-proxy die je sleutel server-side bewaart. Richt je client op de Worker-URL in plaats van sub.wyzie.io.',
  'subs.keys.protect.option2':
    'Voer je eigen proxy uit: elk backend-eindpunt dat de sleutel toevoegt voordat het wordt doorgestuurd naar sub.wyzie.io werkt. Zie de Intro-pagina voor een voorbeeld van 10 regels.',
  'subs.keys.protect.devtools':
    'Als de sleutel verschijnt in een netwerktabblad in DevTools, is deze blootgesteld. Beschouw hem als openbaar en roteer hem door contact op te nemen met support.',

  'subs.keys.using.h2': 'Je sleutel gebruiken',
  'subs.keys.using.p': 'Voeg &key=YOUR_KEY toe aan elk API-verzoek:',
  'subs.keys.using.npm.h3': 'NPM-pakket',

  'subs.keys.limit.h2': 'De limiet bereiken',
  'subs.keys.limit.free':
    '**Gratis abonnement** uitgeput -> API geeft 429 terug met X-RateLimit-Reset- en Retry-After-headers. Dagteller reset om middernacht UTC.',
  'subs.keys.limit.paid':
    '**Betaald saldo** uitgeput -> API geeft 402 terug. Waardeer op bij [store.wyzie.io/topup](https://store.wyzie.io/topup) of schakel **automatisch opwaarderen** in je dashboard in om automatisch bij te vullen wanneer je saldo een door jou ingestelde drempel bereikt.',

  'subs.keys.faq.h2': 'Veelgestelde vragen',
  'subs.keys.faq.q1':
    'Ik ben mijn sleutel kwijtgeraakt. Kan ik een nieuwe krijgen?',
  'subs.keys.faq.a1':
    'Bezoek [store.wyzie.io](https://store.wyzie.io) en gebruik de "vergeten sleutel"-procedure met je geregistreerde e-mailadres; we sturen je bestaande sleutel opnieuw.',
  'subs.keys.faq.q2': 'Kan ik één sleutel gebruiken in meerdere projecten?',
  'subs.keys.faq.a2': 'Ja. Je sleutel werkt overal waar je de API aanroept.',
  'subs.keys.faq.q3': 'Verloopt mijn sleutel ooit?',
  'subs.keys.faq.a3':
    'Nee. Zowel gratis als betaalde sleutels hebben geen vervaldatum. Gratis sleutels zijn beperkt per dag; betaald saldo blijft bestaan totdat je het gebruikt.',
  'subs.keys.faq.q4': 'Is automatisch opwaarderen veilig?',
  'subs.keys.faq.a4':
    'Je stelt een maandelijkse bestedingslimiet in. We brengen nooit meer in rekening dan dat, en uitschakelen met één klik is mogelijk in elke bevestigingsmail en je dashboard.',

  // Proxy Intro Page
  'proxy.intro.title': 'Introductie tot Wyzie Proxy',
  'proxy.intro.note':
    'De productieversie van Wyzie Subs maakt geen gebruik meer van deze proxy; in plaats daarvan wordt [i6.shark](https://github.com/wyziedevs/i6.shark) gebruikt.',
  'proxy.intro.p1':
    'Wyzie Proxy is een krachtige proxy-API waarmee je verzoeken kunt doen aan elke website zonder CORS of andere beperkingen. Omdat Wyzie Proxy is gemaakt met Nitro, kan het worden gehost op elk van de volgende platforms: AWS Amplify, Azure, Cloudflare, Netlify, Stormkit, Vercel, Zeabur.',
  'proxy.intro.btn.hosting': 'Hosting',
  'proxy.intro.btn.check': 'Bekijk het',

  // Proxy Hosting Page
  'proxy.hosting.title': 'Wyzie Proxy hosten',
  'proxy.hosting.p1':
    'Wyzie Proxy bouwen is eenvoudiger dan ademen, dankzij Nitro. Kloon eerst de repository van Wyzie Proxy met:',
  'proxy.hosting.p2': 'Installeer vervolgens alle benodigde pakketten met:',
  'proxy.hosting.p3':
    'Nadat alle pakketten zijn geïnstalleerd, kun je de proxy bouwen:',
  'proxy.hosting.p4':
    'De uitvoer wordt gegenereerd in de map /.output/server. Als je implementeert op Cloudflare Workers, kopieer en plak dan het index.mjs-bestand naar de worker; anders kun je de bestanden normaal implementeren.',

  // i6.shark Intro Page
  'i6shark.intro.title': 'Introductie tot i6.shark',
  'i6shark.intro.p1':
    'i6.shark is een IPv6-proxyserver waarmee je HTTP-verzoeken kunt doen vanuit willekeurig gegenereerde IPv6-adressen in een /48 subnet. Dit is de proxy die momenteel Wyzie Subs in productie aandrijft.',
  'i6shark.intro.p2':
    'Een /48 subnet heeft 1.208.925.819.614.629.174.706.176 (1,2 x 10^24) IPv6-adressen, waardoor het vrijwel onmogelijk is om te blokkeren via traditioneel IP-blokkeren. Het gebruik van één subnet betekent dat degenen die je echt willen blokkeren je ASN-adres kunnen blokkeren, dus wees daar voorzichtig mee.',
  'i6shark.intro.btn.hosting': 'Hosting',
  'i6shark.intro.btn.github': 'GitHub',

  'i6shark.intro.features.h2': 'Functies',
  'i6shark.intro.feature1':
    '**Willekeurige IPv6-generatie**: Maakt willekeurige IPv6-adressen aan vanuit je /48-prefix voor elk verzoek',
  'i6shark.intro.feature2':
    '**Volledige HTTP-methodeondersteuning**: GET, POST, PUT, DELETE en alle andere HTTP-methoden',
  'i6shark.intro.feature3':
    '**HMAC-SHA256-authenticatie**: Veilige API-sleutelauthenticatie met op user-agent gebaseerde tokens',
  'i6shark.intro.feature4':
    "**Intelligent IP-poolbeheer**: Automatische IP-rotatie met configureerbare poolgrootte. Slim IP-levenscyclusbeheer. Verzoektelling per IP. Opruimen van ongebruikte IP's op basis van inactiviteitsdrempel.",
  'i6shark.intro.feature5':
    '**Geavanceerde verzoekafhandeling**: Doorsturen van aangepaste headers. Cloudflare- en CDN-header-verwijdering. Ondersteuning voor meerdere URL-parameterformaten. Optionele terugval naar standaard systeem-IP.',
  'i6shark.intro.feature6':
    '**Host-whitelisting**: Ingebouwde domeinwitte lijst voor beveiliging (configureerbaar in code)',
  'i6shark.intro.feature7':
    '**Automatisch onderhoud**: Periodiek doorspoelen van IP-pool. Subnetvalidatie en opruiming. Verbindingspooling en keepalive-optimalisatie.',
  'i6shark.intro.feature8':
    '**Hoge prestaties**: Gelijktijdige verzoekafhandeling met bufferpooling. Configureerbare time-outs en verbindingslimieten. Efficiënt IPv6-adresbeheer.',
  'i6shark.intro.feature9':
    '**Foutopsporingsmodus**: Gedetailleerde logboekregistratie voor probleemoplossing en monitoring',

  'i6shark.intro.requirements.h2': 'Vereisten',
  'i6shark.intro.req1': 'Go 1.20 of hoger',
  'i6shark.intro.req2':
    'Linux/Unix-systeem met IPv6-ondersteuning (bij voorkeur Ubuntu)',
  'i6shark.intro.req3':
    'Rootrechten (voor poort 80-binding en IPv6-manipulatie)',
  'i6shark.intro.req4': 'IPv6 /48 subnettoewijzing van je hostingprovider',

  'i6shark.intro.providers.h2': 'Hostingproviders',
  'i6shark.intro.providers.p1':
    'De volgende providers staan erom bekend /48 IPv6-subnetten aan te bieden:',

  // i6.shark Hosting Page
  'i6shark.hosting.title': 'i6.shark hosten',
  'i6shark.hosting.p1':
    'Het instellen van i6.shark vereist een VPS met een /48 IPv6-subnet. Eenmaal geconfigureerd, draait het autonoom met minimaal onderhoud.',

  'i6shark.hosting.steps.h2': 'Stappen',
  'i6shark.hosting.step1': 'Kloon de repository naar /opt/i6.shark:',
  'i6shark.hosting.step2': 'Configureer constanten in src/consts.go:',
  'i6shark.hosting.step2.note':
    'Werk SharedSecret, IPv6Prefix en Interface bij zodat ze overeenkomen met je server. De overige afstemconstanten hebben verstandige standaardwaarden en hoeven doorgaans niet te worden gewijzigd.',
  'i6shark.hosting.step3': 'Bouw de applicatie:',
  'i6shark.hosting.step4': 'Maak de systemd-service aan:',
  'i6shark.hosting.step5': 'Schakel de service in en start hem:',
  'i6shark.hosting.step5.check': 'Controleer de status:',
  'i6shark.hosting.post':
    'De proxyserver draait nu automatisch bij het opstarten en herstart zichzelf als hij crasht.',

  'i6shark.hosting.daily.h2': 'Dagelijkse herstart (optioneel)',
  'i6shark.hosting.daily.p':
    'Voeg een cron-taak toe om de server dagelijks op een willekeurig tijdstip te herstarten:',

  'i6shark.hosting.auth.h2': 'API-authenticatie',
  'i6shark.hosting.auth.p':
    'API-tokens worden gegenereerd met HMAC-SHA256 met een gedeelde geheime sleutel. De invoer voor sleutelgeneratie is de user-agent-header. Zie de validateAPIToken-functie in de broncode voor implementatiedetails.',
};

export default messages;
