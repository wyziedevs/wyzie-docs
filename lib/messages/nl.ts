const messages: Record<string, string> = {
  // Navigation
  'nav.language': 'Language',

  // Index / Landing Page
  'index.subtitle':
    'Wyzie is een toolset voor het scrapen van ondertitels en alles daartussenin.',
  'index.cta.start': 'Aan de slag',
  'index.cta.store': 'Bekijk het',

  'index.card.keys.title': 'Gratis API-sleutels',
  'index.card.keys.body':
    'Haal een gratis API-sleutel op bij store.wyzie.io/redeem met een snelle e-mailverificatie (Gmail, Outlook, Yahoo, iCloud, Proton en andere grote aanbieders). 1.000 verzoeken/dag gratis. Betaalde abonnementen beschikbaar voor intensiever gebruik.',

  'index.card.ai.title': 'AI-vertaling',
  'index.card.ai.body':
    'Vertaal elke ondertitel op aanvraag naar 80+ talen. De SRT wordt op volgorde teruggestreamd zodra batches klaar zijn, zodat de eerste regels snel binnenkomen. Beschikbaar voor Pro-sleutels.',

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
    'Wyzie Subs is een API voor het scrapen van ondertitels met een gratis abonnement. Er zijn twee manieren om verzoeken aan de API te doen: via ons NPM-pakket of door de Wyzie API rechtstreeks op te vragen. Ik raad aan ons pakket te gebruiken, maar sommigen vinden de types omslachtig. Om de API te gebruiken, moet je eerst die keuze maken.',
  'subs.intro.important.apikey':
    'Voor alle verzoeken is een API-sleutel vereist. Haal een gratis sleutel op bij [store.wyzie.io/redeem](https://store.wyzie.io/redeem) (e-mailverificatie, 1.000 verzoeken/dag). Voor intensiever gebruik zijn [Pro- en opwaardeerplannen](https://store.wyzie.io) beschikbaar. Zie de pagina API-sleutels voor meer details.',
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
    'Wyzie Worker is een lichtgewicht Cloudflare Worker-proxy die je API-sleutel server-side injecteert. Implementeer het op Cloudflare Workers en stel twee secrets in: `NITRO_API_TOKEN` (je Wyzie API-sleutel) en `NITRO_WORKER_KEY` (een secret dat je zelf kiest). Elk verzoek aan de worker moet `Authorization: Bearer <NITRO_WORKER_KEY>` meesturen; zonder deze header antwoordt de worker met 401, en als `NITRO_WORKER_KEY` niet is ingesteld, weigert hij elk verzoek met 503. Ook de worker-sleutel moet server-side blijven, dus roep de worker aan vanuit je eigen backend, nooit vanuit browser- of app-code. De worker stuurt elk verzoek door naar sub.wyzie.io met je API-sleutel toegevoegd.',
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
    'Standaardbron is charlie als er geen is opgegeven',
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
    'Geen scraper. AI-vertaalde SRT die op aanvraag wordt gegenereerd vanuit de best beschikbare bronondertitel. Alleen voor Pro-sleutels. Zie de AI-vertalingsgids voor volledige details.',
  'subs.sources.ai.content':
    'Alles waarvoor Wyzie een tekstondertitel kan vinden',
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
  'subs.pkg.param.hi':
    'Als dit true is, worden alleen ondertitels voor slechthorenden teruggegeven. Bronnen die ondertitels voor slechthorenden niet markeren, geven niets terug.',
  'subs.pkg.param.source':
    'Ondertitelaanbieders om te bevragen op codenaam (all voor elke actieve bron die je sleutel kan gebruiken; standaard charlie).',
  'subs.pkg.param.release': 'Release/scene-filters (accepteert een lijst).',
  'subs.pkg.param.filename':
    'Bestandsnaamfilters; aliassen file en fileName worden ondersteund.',
  'subs.pkg.param.origin': 'Inhoudsoorsprongfilter (bijv. WEB, BLURAY, DVD).',
  'subs.pkg.param.key':
    'Je API-sleutel (vereist). Haal er gratis een op bij store.wyzie.io/redeem.',
  'subs.pkg.param.refresh':
    'Cache omzeilen en verse resultaten ophalen van bronnen.',

  'subs.pkg.helpers':
    "Het pakket bevat ook lichtgewicht TMDB-hulpfuncties: searchTmdb, getTvDetails en getSeasonDetails voor het snel vinden van ID's voordat je /search aanroept. getSources geeft de codenamen van de actieve bronnen terug (een bron die door zijn statuscontroles is gepauzeerd, wordt weggelaten totdat hij hersteld is), en getSourcesInfo geeft het volledige /sources-antwoord terug met de abonnementsniveaus en, als je een sleutel meegeeft, welke bronnen die sleutel kan gebruiken. withDownloadOptions voegt downloadopties (WebVTT-uitvoer, timingcorrecties, een tweede taal en meer) toe aan de url van een resultaat.",
  'subs.pkg.types.h3': 'Types',
  'subs.pkg.type.search': 'Alle geldige parameters die de API herkent.',
  'subs.pkg.type.query':
    'Alle parameters (optioneel en vereist) beschikbaar voor de wyzie-subs API.',
  'subs.pkg.type.subtitle':
    'Alle teruggegeven waarden van de API met hun respectievelijke types.',
  'subs.pkg.type.sources': 'Antwoordtype van het /sources-eindpunt.',
  'subs.pkg.type.download':
    'Opties voor withDownloadOptions: to, offset, fps, plain en (Pro) sdh, clean, dual.',
  'subs.pkg.type.sync':
    'Invoer en resultaat van syncSubtitle (Wyzie Synced, Pro-sleutels): welke ondertitel (een resultaat, de url ervan, of tmdb_id/imdb_id met language), de spraakfragmenten (speech) die detectSpeech heeft gevonden of het media-bestand, en de gesynchroniseerde downloadlink met offset, fps en confidence. Zie [Wyzie Synced](/subs/usage/synced).',
  'subs.pkg.types.end':
    'Onze types zijn heel eenvoudig en goed gedocumenteerd. Zie [src/types.ts](https://github.com/wyziedevs/wyzie-lib/blob/main/src/types.ts) in de wyzie-lib-repository.',
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
    'Als dit true is, worden alleen ondertitels voor slechthorenden teruggegeven (het is een filter, geen voorkeur). Bronnen die ondertitels voor slechthorenden niet markeren, geven niets terug.',
  'subs.direct.param.encoding': 'Tekencoderingsfilter.',
  'subs.direct.param.source':
    'Ondertitelaanbieders om te bevragen (all bevraagt elke bron die je sleutel kan gebruiken; standaard charlie).',
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
  'subs.direct.param.page':
    'Terug te geven pagina, beginnend bij 1. Wordt alleen samen met limit gebruikt.',
  'subs.direct.param.limit':
    'Resultaten per pagina (1 tot 200). Zonder deze parameter komen alle resultaten in één antwoord terug.',
  'subs.direct.important.imdb':
    "Wanneer je een IMDB-ID gebruikt, zorg er dan voor dat de eerste twee tekens ('tt') aan het begin van het ID zijn opgenomen.",

  'subs.direct.data.h3': 'Geretourneerde gegevens',
  'subs.direct.data.id': 'Het ID van het ondertitelbestand.',
  'subs.direct.data.url':
    'Downloadlink op https://sub.wyzie.io/c/... met een versleutelde tok-parameter. Elke download kost 1 verzoek; zie het gedeelte over het downloaden van ondertitels hieronder.',
  'subs.direct.data.flagUrl':
    'URL naar de vlag van de landinstelling van de taal.',
  'subs.direct.data.format': 'Het formaat van het ondertitelbestand.',
  'subs.direct.data.encoding': 'De tekencodering van het ondertitelbestand.',
  'subs.direct.data.display': 'De taal van de ondertitel, met hoofdletter.',
  'subs.direct.data.language': 'De ISO 639-1-code van de taal.',
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
  'subs.direct.download.p':
    'Elke url in een /search-antwoord verwijst naar https://sub.wyzie.io/c/... en bevat een tok-queryparameter. tok is versleuteld, zodat het je API-sleutel niet prijsgeeft, en blijft 60 dagen geldig. Gebruik de URL ongewijzigd. Een zoekopdracht kost 1 verzoek en elke download kost er 1 extra, in rekening gebracht bij de sleutel die de zoekopdracht uitvoerde. Als die sleutel een download niet kan betalen, wordt de link geweigerd:',
  'subs.direct.dl.p':
    'Voeg deze toe aan een download-URL om te wijzigen wat die teruggeeft. Ze werken bij elke download, gecached of niet, en kosten niets extra (behalve dual, zie hieronder). De antwoordheader X-Subtitle-Transforms vermeldt wat er is toegepast, met aantallen.',
  'subs.direct.dl.param.to':
    'Uitvoerformaat: `srt` of `vtt`. `vtt` speelt direct af in een `<track>`-element in de browser. Standaard: het eigen formaat van het bestand.',
  'subs.direct.dl.param.offset':
    'Verschuif elke regel met dit aantal seconden (negatief is eerder).',
  'subs.direct.dl.param.fps':
    'Corrigeer drift bij een ondertitel die voor een andere release is gemaakt: `SUBTITLE_FPS:VIDEO_FPS`, bijv. `25:23.976` voor een PAL-ondertitel bij een video met filmframerate.',
  'subs.direct.dl.param.plain':
    'Eenvoudige, nette regels: opmaakcodes zoals `{\\an8}` en `<font>` verwijderd, lege en herhaalde regels weggelaten, regels op tijdsvolgorde, kleine overlappingen ingekort.',
  'subs.direct.dl.param.sdh':
    'Verwijder tekst voor slechthorenden: `[DOOR SLAMS]`, `(sighs)`, sprekerlabels zoals `JOHN:` en ♪-songteksten.',
  'subs.direct.dl.param.clean':
    'Maskeer grove scheldwoorden, met behoud van de eerste letter (`f***`). Alleen Engelse bestanden.',
  'subs.direct.dl.param.dual':
    'Voeg onder elke regel een tweede taal (ISO 639-1-code) toe, afgestemd op de timing van dit bestand. Kost 1 extra verzoek, alleen als er een match wordt gevonden; anders komt alleen het bestand zelf terug, met `X-Dual: unavailable`.',
  'subs.direct.dl.after':
    'Opties zijn te combineren, bijv. `&to=vtt&sdh=strip&offset=-1.5`. Links bevatten al `format`, `encoding`, `id` en (voor afleveringen) `season` en `episode`: laat die zoals ze zijn. `autoUnzip=false` geeft een archief ongewijzigd terug.',
  'subs.direct.oneCall.p':
    'Met een API-sleutel geeft GET /download het ondertitelbestand zelf terug in één aanroep: het zoekt met je sleutel en dezelfde parameters als /search (language is standaard en), kiest de beste match en levert die. Dat kost 2 verzoeken, evenveel als een zoekopdracht plus een download. Downloadopties zoals to en offset worden op het bestand toegepast.',
  'subs.direct.oneCall.pick':
    'De beste match is het eerste zoekresultaat, waarbij SRT-, WebVTT- en ASS-bestanden de voorkeur krijgen tenzij je format instelt, en bestanden zonder tekst voor slechthorenden tenzij je hi=true instelt. Verfijn de keuze met release, filename, source of origin. De antwoordheaders X-Subtitle-Release, X-Subtitle-Source, X-Subtitle-Language en X-Subtitle-Url geven aan welk bestand is gekozen. De fouten zijn dezelfde als bij /search en downloadlinks.',
  'subs.direct.oneCall.keyless':
    'Zonder sleutel is de [downloadpagina](https://sub.wyzie.io/download) er om met de hand een ondertitel of twee te vinden. De links daarvan openen alleen het bestand waarvoor ze zijn gemaakt, vanaf het netwerk dat de zoekopdracht deed, en de pagina heeft limieten per uur. Gebruik voor alles wat geautomatiseerd is een sleutel.',
  'subs.direct.headers.p':
    'Elk /search-antwoord bevat een X-Total-Count-header met het totale aantal resultaten. Als je limit meegeeft, bevat het ook:',
  'subs.direct.header.xpage': 'de teruggegeven pagina.',
  'subs.direct.header.xperpage': 'de geldende limit-waarde.',
  'subs.direct.header.xtotalpages': "het totale aantal pagina's.",
  'subs.direct.headers.rate':
    'Antwoorden bevatten ook X-RateLimit-Limit, X-RateLimit-Remaining en X-RateLimit-Reset. Beschouw ze als een benadering: het gebruik wordt in korte batches met de facturering verrekend, dus ze kunnen iets achterlopen op je werkelijke gebruik.',

  // Subs Translate Page
  'subs.translate.title': 'AI-ondertitelvertaling',
  'subs.translate.important':
    'AI-vertaling is een **Pro-functie**; gratis sleutels krijgen 403 Upgrade required. Elke aanroep kost **25 verzoeken** van het saldo van je sleutel, cache-hits inbegrepen. Als een aanroep mislukt voordat er uitvoer is (geen ondertitel gevonden, een zoek- of downloadfout, of de server is overbelast), worden de 25 verzoeken automatisch terugbetaald.',
  'subs.translate.p1':
    'Wyzie kan elke ondertitel ter plekke vertalen naar 80+ talen. De vertaalde SRT wordt op volgorde teruggestreamd zodra batches klaar zijn, zodat de eerste cues snel binnenkomen in plaats van pas nadat het hele bestand klaar is. De volledige vertaling wordt 30 dagen gecached, zodat latere verzoeken voor dezelfde titel, aflevering en doeltaal vanuit de cache worden geleverd.',

  'subs.translate.ways.h2': 'Twee manieren om het te gebruiken',
  'subs.translate.way1.h3': '1. Kies een taal uit een zoekresultaat',
  'subs.translate.way1.p1':
    'Voor Pro-sleutels bevat elk /search-antwoord ook AI-vertaalrijen met "ai": true en een url die verwijst naar /translate: één per ondersteunde taal, of alleen de talen in je language=-filter. Gratis sleutels krijgen deze rijen nooit. Behandel de AI-rijen als elke andere ondertitelrij in je UI: wanneer de gebruiker er een aanklikt, haal dan de URL op.',
  'subs.translate.way1.filter':
    'Als je de AI-rijen uit je UI wilt verbergen, filter ze er dan uit:',
  'subs.translate.way2.h3': '2. Roep /translate rechtstreeks aan',

  'subs.translate.param.id': 'TMDB- of IMDB-ID (vereist).',
  'subs.translate.param.target':
    'Doeltaal (vereist): een naam uit de lijst met ondersteunde talen (bijv. Spanish, Japanese, Portuguese (Brazil)) of de bijbehorende code (bijv. es, ja, pt-BR).',
  'subs.translate.param.seasonEpisode':
    'Voor tv. Beide moeten tegelijk aanwezig zijn.',
  'subs.translate.param.key':
    'Je API-sleutel. Gebruik in plaats daarvan tk als je de URL van /search hebt gekregen.',
  'subs.translate.param.tk':
    "Versleuteld token uit de URL's van de AI-rijen in /search. Werkt als key, geeft je API-sleutel niet prijs en blijft 60 dagen geldig.",

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
    'Wyzie zoekt in de normale bronnen naar een tekstondertitel, met voorkeur voor een Engelse SRT indien beschikbaar. VTT-, ASS-, SSA- en SUB-bestanden worden eerst naar SRT geconverteerd.',
  'subs.translate.how.step2':
    'De SRT wordt opgesplitst in batches van maximaal ongeveer 3.800 tekens en vertaald met Google Translate, 4 batches tegelijk.',
  'subs.translate.how.step3':
    'Uitvoer wordt in SRT-volgorde teruggestreamd zodra batches klaar zijn, zodat de eerste cues snel binnenkomen. Spelers die een streamende SRT-body accepteren, kunnen de eerste regels tonen voordat de rest klaar is.',
  'subs.translate.how.step4':
    'De volledige vertaling wordt 30 dagen gecached in Redis, geïndexeerd op id, season, episode en target.',

  'subs.translate.languages.h2': 'Ondersteunde doeltalen',
  'subs.translate.languages.p':
    '80+ talen, inclusief alle grote Europese, Aziatische, Afrikaanse en Midden-Oosterse talen. Geef een naam uit de lijst door (Spanish, Portuguese (Brazil)) of de bijbehorende code (es, pt-BR). Voor Pro-sleutels wordt de volledige lijst ook teruggegeven als ai: true rijen in elk /search-antwoord zonder language=-filter, wat de definitieve bron van waarheid is.',

  'subs.translate.limitations.h2': 'Beperkingen',
  'subs.translate.limit1':
    'AI-vertaling heeft een tekstondertitel nodig om van uit te gaan. VTT-, ASS-, SSA- en SUB-bronnen worden eerst naar SRT geconverteerd; als er geen tekstondertitel bestaat, geeft de aanroep 404 No subtitle found terug en worden de 25 verzoeken terugbetaald.',
  'subs.translate.limit2':
    'De vertaalkwaliteit hangt af van de bronondertitel. Een slecht getimede of verkeerd getypte bron levert een slecht getimede of verkeerd getypte vertaling op.',
  'subs.translate.limit3':
    'Sommige gebruikers willen AI-rijen volledig uitsluiten. Filter op ai === false in je client.',
  'subs.translate.limit4':
    'Vertalingen worden ook bij cache-hits in rekening gebracht. Of ze nu vers worden gegenereerd of geleverd vanuit de 30-daagse cache, elke /translate-aanroep kost 25 verzoeken. Alleen aanroepen die mislukken voordat er uitvoer is, worden terugbetaald.',

  // Subs Synced Page
  'subs.synced.title': 'Wyzie Synced',
  'subs.synced.important':
    'Wyzie Synced is een **Pro-functie**: gratis sleutels krijgen 403 Paid feature. Elke geslaagde synchronisatie kost **5 verzoeken**; een synchronisatie zonder match wordt niet in rekening gebracht. Het downloaden van de gesynchroniseerde link telt daarna als elke andere download.',
  'subs.synced.p1':
    'Online gevonden ondertitels zijn vaak getimed voor een andere release dan de video die je hebt: ze beginnen een paar seconden te vroeg of te laat, of lopen naarmate de film vordert steeds verder uit de pas omdat die release op een andere framerate draait. Wyzie Synced luistert naar de audio van jouw kopie, bepaalt waar er gesproken wordt en berekent de verschuiving en framerate-correctie waarmee de ondertitel daarop aansluit. Je krijgt een normale downloadlink met de correctie toegepast (via de [downloadopties](/subs/usage/direct#download-options) offset en fps).',
  'subs.synced.web.p':
    'De makkelijkste manier: open [sub.wyzie.io/synced](https://sub.wyzie.io/synced), voer je Pro-sleutel in, kies je videobestand en de titel, en download de gesynchroniseerde ondertitel. De audio wordt in je browser geanalyseerd, dus de video wordt nooit geüpload: alleen de spraaktimings worden verstuurd. MKV, MP4, AVI en de meeste andere formaten werken, inclusief AC3-, E-AC3- en DTS-audio.',
  'subs.synced.api.p':
    'Stuur welke ondertitel je wilt (een downloadlink, of de titel zodat Wyzie de beste match kiest) en de audio: ofwel spraaktimings die je zelf hebt gedetecteerd, ofwel het audio-/videobestand zelf. POST /synced is dezelfde API.',
  'subs.synced.param.url':
    'Een downloadlink van /search (https://sub.wyzie.io/c/…). Andere downloadopties daarop (to, sdh, …) blijven behouden op de gesynchroniseerde link.',
  'subs.synced.param.id':
    'In plaats van url: TMDB- of IMDB-ID. Wyzie probeert de 5 beste tekstondertitels in die taal en geeft degene terug die het best bij je audio past.',
  'subs.synced.param.language':
    'Met id: ISO 639-1-code van de ondertiteltaal (vereist).',
  'subs.synced.param.seasonEpisode':
    'Met id, voor tv. Beide moeten tegelijk aanwezig zijn.',
  'subs.synced.param.key':
    'Je Pro-API-sleutel. Zonder deze wordt de sleutel achter de tok van url gebruikt; links van de downloadpagina zonder sleutel hebben key nodig.',
  'subs.synced.param.speech':
    "Waar er gesproken wordt: [[start, end], …] in seconden, van een willekeurige spraakactiviteitsdetector (detectSpeech van wyzie-lib, Silero VAD, webrtcvad). Een film van 2 uur is ongeveer 2.000 segmenten, zo'n 40 KB JSON.",
  'subs.synced.param.media':
    'Of het audio-/videobestand zelf: als ruwe verzoekbody (met de andere velden in de querystring), of als multipart-veld media. Tot 95 MB, dus upload voor een volledige film alleen het audiospoor.',
  'subs.synced.fields.note':
    'Velden gaan in een JSON-body, een multipart-formulier of de querystring (bij een ruwe media-body).',
  'subs.synced.response.p': 'Een 200-antwoord is JSON:',
  'subs.synced.field.url':
    'de downloadlink van de ondertitel met de timingcorrectie (offset, fps) en een verse tok voor je sleutel. Gebruik hem zoals elke url van /search: elke download kost 1 verzoek.',
  'subs.synced.field.offset':
    'seconden die na de framerate-correctie bij elke regel worden opgeteld (negatief is eerder).',
  'subs.synced.field.fps':
    'de framerate-correctie als SUBTITLE_FPS:VIDEO_FPS (bijv. "25:23.976"), of null als er geen nodig was.',
  'subs.synced.field.confidence':
    '0 tot 1: hoe duidelijk deze timing alle andere verslaat. Alles wat wordt teruggegeven, heeft de matchtest doorstaan; hoger is zekerder.',
  'subs.synced.field.inSync':
    'true als de ondertitel al overeenkwam met je kopie.',
  'subs.synced.field.subtitle':
    'welke ondertitel is gebruikt (release, fileName, format, source, …). Met url alleen het format ervan.',
  'subs.synced.errors.p':
    'Fouten zijn JSON met message en details. Geweigerde en mislukte synchronisaties worden niet in rekening gebracht.',
  'subs.synced.error.400':
    'Ontbrekende of ongeldige velden: geen ondertitel, geen audio, of speech die niet uit [start, end]-paren bestaat.',
  'subs.synced.error.401':
    'Geen sleutel, of de downloadlink in url is ongeldig of verlopen.',
  'subs.synced.error.403':
    'De sleutel is gratis (Wyzie Synced vereist Pro), ongeldig of gepauzeerd.',
  'subs.synced.error.404': 'Geen tekstondertitels in die taal voor deze titel.',
  'subs.synced.error.413':
    'Het media-bestand is groter dan 95 MB. Upload alleen het audiospoor, of stuur speech.',
  'subs.synced.error.422':
    'De ondertitel sluit bij geen enkele verschuiving of framerate aan op de audio (waarschijnlijk een andere versie of aflevering), de audio bevat te weinig spraak, of het bestand kan niet worden gedecodeerd.',
  'subs.synced.error.429':
    'De sleutel kan niet betalen: voor een synchronisatie moeten er nog minstens 5 verzoeken over zijn, en dat wordt gecontroleerd voordat het werk begint.',
  'subs.synced.error.503':
    'Bezig met het decoderen van andere uploads, of zoeken is even niet beschikbaar. Probeer het zo opnieuw, of stuur speech.',
  'subs.synced.lib.p':
    'wyzie-lib heeft detectSpeech (dezelfde detector die de site in je browser draait) en syncSubtitle:',
  'subs.synced.how.step1':
    'Spraak: de audio wordt gedecodeerd naar 8 kHz mono (bij 5.1- en 7.1-mixen alleen het centerkanaal, waar de dialoog zit), en een spraakactiviteitsdetector markeert waar er gesproken wordt: luid geluid in de spraakband dat met de lettergrepen aanzwelt en wegebt.',
  'subs.synced.how.step2':
    'Uitlijning: de weergavetijden van de ondertitel worden bij elke verschuiving binnen ±10 minuten gekruiscorreleerd met die spraak, voor de gebruikelijke framerate-verschillen (25 vs. 23.976, 25 vs. 24, 24 vs. 23.976 fps).',
  'subs.synced.how.step3':
    'Verfijning: de beste timing wordt tot op 10 ms verfijnd door de beginpunten van regels uit te lijnen met de beginpunten van spraak.',
  'subs.synced.how.step4':
    "Een timing wordt alleen teruggegeven als die ver boven elke andere verschuiving uitsteekt, zodat een ondertitel voor een andere versie of aflevering 422 Couldn't sync krijgt in plaats van een verkeerde verschuiving.",
  'subs.synced.limit1':
    'Wyzie Synced corrigeert een constante verschuiving en een verschil in framerate. Een ondertitel voor een andere versie (toegevoegde of ontbrekende scènes) is niet met één verschuiving te corrigeren en wordt geweigerd.',
  'subs.synced.limit2':
    'Er is spraak nodig: films met weinig dialoog, of audio die grotendeels uit muziek bestaat, synchroniseren mogelijk niet.',
  'subs.synced.limit3': 'Verschuivingen tot ±10 minuten worden gevonden.',

  // Subs API Keys Page
  'subs.keys.title': 'API-sleutels',
  'subs.keys.p1':
    "Wyzie Subs vereist een API-sleutel voor alle verzoeken. Een gratis abonnement dekt de meeste gebruiksscenario's; betaalde plannen verwerken intensiever gebruik.",

  'subs.keys.tiers.h2': 'Abonnementsniveaus',
  'subs.keys.tier.free': 'Gratis (e-mailverificatie)',
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
    'Voer een adres in van een grote persoonlijke e-mailaanbieder (Gmail, Outlook/Hotmail, Yahoo, iCloud, AOL, Proton en andere). Wegwerp-e-maildomeinen worden geweigerd.',
  'subs.keys.free.step3': 'Voer de 6-cijferige code in die we je e-mailen.',
  'subs.keys.free.step4':
    'Je ontvangt een API-sleutel die eruitziet als wyzie-abc123...',
  'subs.keys.free.gmail':
    'Elk e-mailadres en elk netwerk kan één gratis sleutel claimen; een tweede verzoek geeft 409 terug. Sleutel kwijt? Gebruik "Forgot key" op het [dashboard](https://store.wyzie.io/dashboard) om hem opnieuw te laten versturen.',

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
    'Gebruik [Wyzie Worker](https://github.com/wyziedevs/wyzie-worker): een gratis Cloudflare Worker-proxy die je API-sleutel bewaart als het secret `NITRO_API_TOKEN`. Elke aanroep naar de worker moet `Authorization: Bearer <NITRO_WORKER_KEY>` meesturen, een tweede secret dat je zelf instelt, dus leid je client via je eigen backend en houd ook de worker-sleutel server-side.',
  'subs.keys.protect.option2':
    'Voer je eigen proxy uit: elk backend-eindpunt dat de sleutel toevoegt voordat het wordt doorgestuurd naar sub.wyzie.io werkt. Zie de Intro-pagina voor een voorbeeld van 10 regels.',
  'subs.keys.protect.devtools':
    'Als de sleutel verschijnt in een netwerktabblad in DevTools, is deze blootgesteld. Beschouw hem als openbaar en roteer hem via je [dashboard](https://store.wyzie.io/dashboard).',

  'subs.keys.using.h2': 'Je sleutel gebruiken',
  'subs.keys.using.p': 'Voeg &key=YOUR_KEY toe aan elk API-verzoek:',
  'subs.keys.using.npm.h3': 'NPM-pakket',

  'subs.keys.limit.h2': 'De limiet bereiken',
  'subs.keys.limit.p':
    'Een zoekopdracht kost 1 verzoek en elke ondertiteldownload kost 1 verzoek, dus één keer zoeken en één bestand downloaden verbruikt er 2. AI-vertaling kost 25 verzoeken per aanroep, en een synchronisatie met Wyzie Synced 5.',
  'subs.keys.limit.free':
    '**Gratis abonnement** uitgeput -> zoekopdrachten en downloadlinks geven 429 Daily request limit reached terug, met reset_at in de JSON en een Retry-After-header. De daglimiet van 1.000 verzoeken wordt om middernacht UTC gereset.',
  'subs.keys.limit.paid':
    '**Betaald saldo** uitgeput -> zoekopdrachten en downloadlinks geven 402 terug met een opwaardeerlink in de JSON. Waardeer op bij [store.wyzie.io/topup](https://store.wyzie.io/topup) of schakel **automatisch opwaarderen** in je dashboard in om automatisch bij te vullen wanneer je saldo een door jou ingestelde drempel bereikt.',
  'subs.keys.hold.p1':
    "Sleutels die een zeer hoog volume versturen, grotendeels vanaf datacenter- of hosting-IP's, worden automatisch gepauzeerd. Een gepauzeerde sleutel krijgt bij elk verzoek 403 Key on hold, met een heractiveringslink (https://store.wyzie.io/verify) en een supportlink (https://store.wyzie.io/contact) in de JSON.",
  'subs.keys.hold.p2':
    'Om de sleutel meteen te heractiveren, verifieer je de website waarop je hem gebruikt via [store.wyzie.io/verify](https://store.wyzie.io/verify) met een DNS-TXT-record of een metatag. Een sleutel met een geverifieerde site wordt nooit meer automatisch gepauzeerd, dus drukbezochte sites kunnen zich verifiëren voordat ze ooit gepauzeerd worden.',
  'subs.keys.hold.p3':
    'Geen website, bijvoorbeeld een backendservice of een app? [Neem contact op met support](https://store.wyzie.io/contact) om de sleutel te laten heractiveren.',

  'subs.keys.files.h2': 'Wat er in de bestanden zit',
  'subs.keys.files.adfilter':
    '**Advertentiefilter** – bij elke ondertitel die via sub.wyzie.io wordt geleverd, worden advertentiecues van aanbieders verwijderd (OpenSubtitles-banners, gokreclame, regels als "watch free at ..."). SRT-cues worden opnieuw genummerd zodat er niets wordt overgeslagen. Elke aanbieder, OpenSubtitles inbegrepen, wordt via sub.wyzie.io geleverd, zodat het filter voor allemaal geldt.',
  'subs.keys.files.promo':
    '**Gratis en dev-sleutels** krijgen helemaal aan het begin van elk bestand (0–6 s) één korte cue die verwijst naar [store.wyzie.io](https://store.wyzie.io). Betaalde sleutels krijgen schone bestanden zonder cue.',

  'subs.keys.faq.h2': 'Veelgestelde vragen',
  'subs.keys.faq.q1':
    'Ik ben mijn sleutel kwijtgeraakt. Kan ik een nieuwe krijgen?',
  'subs.keys.faq.a1':
    'Open het [dashboard](https://store.wyzie.io/dashboard) en gebruik "Forgot key" met je geregistreerde e-mailadres; we sturen je bestaande sleutel opnieuw. Als je denkt dat de sleutel is uitgelekt, roteer hem dan in plaats daarvan via het dashboard.',
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
  'i6shark.intro.feature7':
    '**Automatisch onderhoud**: Periodiek doorspoelen van IP-pool. Subnetvalidatie en opruiming. Verbindingspooling en keepalive-optimalisatie.',
  'i6shark.intro.feature8':
    '**Hoge prestaties**: Gelijktijdige verzoekafhandeling met bufferpooling. Configureerbare time-outs en verbindingslimieten. Efficiënt IPv6-adresbeheer.',
  'i6shark.intro.feature9':
    '**Foutopsporingsmodus**: Gedetailleerde logboekregistratie voor probleemoplossing en monitoring',

  'i6shark.intro.requirements.h2': 'Vereisten',
  'i6shark.intro.req1': 'Go 1.22 of hoger',
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

  // Plugins
  'plugins.common.required': 'Vereist',

  'plugins.index.intro':
    'Wyzie Subs sluit rechtstreeks aan op de media-apps die je al gebruikt. Elke plug-in praat met hetzelfde `https://sub.wyzie.io/search`-eindpunt en heeft een gratis **Wyzie API-sleutel** nodig. Haal er een op bij [store.wyzie.io](https://store.wyzie.io/#plans).',
  'plugins.index.tbl.stremio.for': 'Kijken in Stremio op desktop, mobiel of tv',
  'plugins.index.tbl.stremio.install':
    'Gehoste add-on: plak je sleutel, klik op Installeren',
  'plugins.index.tbl.bazarr.for':
    'Plex-, Jellyfin-, Emby-, Sonarr-, Radarr-bibliotheken',
  'plugins.index.tbl.bazarr.install':
    'Kant-en-klare provider voor je Bazarr-instantie',
  'plugins.index.tbl.kodi.for': 'Kodi 19+, LibreELEC, CoreELEC',
  'plugins.index.tbl.kodi.install':
    'Installeer vanuit zip of de Wyzie-repository',
  'plugins.index.use.stremio':
    'Gebruik **Stremio** als je binnen de Stremio-app kijkt.',
  'plugins.index.use.bazarr':
    'Gebruik **Bazarr** als je Plex, Jellyfin of Emby draait. Bazarr downloadt ondertitelbestanden naar schijf en je mediaserver pikt ze automatisch op. Dit is ook de aanbevolen route voor Plex en Jellyfin; er is geen aparte native plug-in.',
  'plugins.index.use.kodi':
    'Gebruik **Kodi** voor een Kodi-native ondertiteldienst op Android TV, een Raspberry Pi of een home-theater-pc.',
  'plugins.index.shared.sources':
    '**Bronnen:** elke bron die je sleutel kan gebruiken (`source=all`): charlie en lima met een gratis sleutel, alle zeven met een Pro-sleutel.',
  'plugins.index.shared.matching':
    '**Matchen:** Wyzie wordt aangestuurd door IMDB- en TMDB-IDs plus seizoen en aflevering, zodat matches nauwkeurig zijn voor zowel films als series.',
  'plugins.index.shared.quota':
    '**Quotum:** wanneer je sleutel op is, toont de plug-in een vriendelijke melding met een link naar [store.wyzie.io](https://store.wyzie.io) in plaats van stilletjes te falen. Vul aan of neem een abonnement en je bent weer in bedrijf.',
  'plugins.index.shared.languages':
    '**Talen:** 100+, per plug-in selecteerbaar.',
  'plugins.index.outro':
    'Kies hierboven je platform om te beginnen. De broncode van elke plug-in staat in de [wyzie-plugins-repository](https://github.com/wyziedevs/wyzie-plugins).',

  'plugins.stremio.intro':
    'Een ondertitel-add-on met één klik voor [Stremio](https://www.stremio.com/). Het bevraagt elke Wyzie-bron die je sleutel kan gebruiken en werkt voor zowel films als series, op elk platform waarop Stremio draait.',
  'plugins.stremio.before':
    'Je hebt een gratis Wyzie API-sleutel nodig. Haal er een op bij [store.wyzie.io/redeem](https://store.wyzie.io/redeem), of koop een Pro-sleutel of neem een abonnement bij [store.wyzie.io](https://store.wyzie.io/#plans).',
  'plugins.stremio.install.1':
    'Open [stremio.wyzie.io/configure](https://stremio.wyzie.io/configure).',
  'plugins.stremio.install.2': 'Plak je **API-sleutel**.',
  'plugins.stremio.install.3':
    "Optioneel: voer je voorkeurs**talen** in als ISO 639-1-codes, gescheiden door komma's (bijvoorbeeld `en,es,fr`). Laat leeg voor alle talen.",
  'plugins.stremio.install.4':
    'Optioneel: schakel **Slechthorenden** in om alleen ondertitels voor slechthorenden te krijgen. Laat het uit om alles te zien; bronnen die ondertitels voor slechthorenden niet markeren, geven niets terug zolang het aan staat.',
  'plugins.stremio.install.5':
    'Klik op **Installeren**. Stremio opent en vraagt je om te bevestigen; accepteer en je bent klaar.',
  'plugins.stremio.install.after':
    'Je sleutel en voorkeuren zijn in de add-on gecodeerd, dus er hoeft niets anders te worden ingesteld. Open een film of aflevering en kies een ondertitel uit de lijst.',
  'plugins.stremio.cfg.key.f': 'API-sleutel',
  'plugins.stremio.cfg.key.d': 'Je Wyzie-sleutel. Vereist.',
  'plugins.stremio.cfg.langs.f': 'Talen',
  'plugins.stremio.cfg.langs.d':
    "ISO 639-1-codes, gescheiden door komma's. Leeg betekent alle talen.",
  'plugins.stremio.cfg.hi.f': 'Slechthorenden',
  'plugins.stremio.cfg.hi.d':
    'Alleen ondertitels voor slechthorenden teruggeven (stuurt hi=true). Standaard uit.',
  'plugins.stremio.cfg.note':
    'Om deze later te wijzigen, open je [stremio.wyzie.io/configure](https://stremio.wyzie.io/configure) opnieuw, pas je het aan en installeer je opnieuw.',
  'plugins.stremio.local':
    'Open vervolgens `http://127.0.0.1:7000/configure`, plak je sleutel en installeer in Stremio.',
  'plugins.stremio.quota':
    'Als je sleutel zijn limiet bereikt, toont de add-on één ondertitelvermelding met een link naar [store.wyzie.io](https://store.wyzie.io) zodat je kunt aanvullen of een abonnement nemen. Zodra je dat doet, keren de ondertitels onmiddellijk terug.',
  'plugins.stremio.ts.none':
    '**Er verschijnen geen ondertitels.** Zorg ervoor dat de titel een IMDB-ID heeft in Stremio (de meeste catalogusitems hebben dat) en dat de door jou gekozen talen daadwerkelijk ondertitels voor die titel hebben. Probeer het taalfilter te wissen om alles te zien.',
  'plugins.stremio.ts.key':
    '**Ongeldige sleutel, of er laadt niets.** Open de configuratiepagina opnieuw en plak je sleutel opnieuw; een verdwaalde spatie maakt hem kapot. Bevestig dat de sleutel werkt op [store.wyzie.io/dashboard](https://store.wyzie.io/dashboard).',
  'plugins.stremio.ts.episode':
    '**Serieaflevering matcht niet.** Wyzie matcht op seizoen en aflevering; zorg ervoor dat Stremio de juiste afleveringsvermelding afspeelt en niet een algemene seriepagina.',

  'plugins.bazarr.intro':
    '[Bazarr](https://www.bazarr.media/) beheert ondertitels voor **Plex, Jellyfin, Emby, Sonarr en Radarr** op één plek. Wyzie als provider toevoegen geeft al die servers via één sleutel toegang tot elke Wyzie-bron die je sleutel kan gebruiken.',
  'plugins.bazarr.note':
    'Dit is de aanbevolen manier om Wyzie te gebruiken met Plex en Jellyfin. Bazarr downloadt ondertitelbestanden naast je media en je server pikt ze automatisch op, dus er is geen aparte native plug-in vereist.',
  'plugins.bazarr.before':
    'Haal een gratis Wyzie API-sleutel op bij [store.wyzie.io/redeem](https://store.wyzie.io/redeem) en zorg dat je toegang hebt tot je Bazarr-installatiebestanden (typisch Docker-pad: `/opt/bazarr/bazarr/`).',
  'plugins.bazarr.install.1':
    'Download [bazarr/wyzie.py](https://github.com/wyziedevs/wyzie-plugins/blob/main/bazarr/wyzie.py) uit de [wyzie-plugins-repository](https://github.com/wyziedevs/wyzie-plugins) (of `git clone https://github.com/wyziedevs/wyzie-plugins.git`) en kopieer het naar `bazarr/subliminal_patch/providers/wyzie.py`.',
  'plugins.bazarr.install.2':
    'Bewerk `bazarr/subliminal_patch/extensions.py` en voeg `wyzie` toe aan **zowel** `provider_registry` als `provider_manager`.',
  'plugins.bazarr.install.3':
    'Bewerk `bazarr/list_subtitles.py` (of `bazarr/config.py`, afhankelijk van je versie) om de instellingen `api_key`, `prefer_hi` en `sources` beschikbaar te maken. Kopieer het patroon van een bestaande provider zoals `opensubtitlescom`.',
  'plugins.bazarr.install.4': 'Start Bazarr opnieuw.',
  'plugins.bazarr.install.5':
    'Ga naar **Settings, Providers, Wyzie**, plak je API-sleutel en sla op.',
  'plugins.bazarr.install.after':
    'Een eersteklas pull request om deze provider naar Bazarr upstream te brengen, is gepland. Tot dan is het een kant-en-klaar bestand dat je aan je eigen installatie toevoegt.',
  'plugins.bazarr.cfg.key': 'Je Wyzie-sleutel. Vereist.',
  'plugins.bazarr.cfg.hi':
    'Alleen ondertitels voor slechthorenden teruggeven (stuurt hi=true).',
  'plugins.bazarr.cfg.sources':
    "Door komma's gescheiden lijst van providers om te bevragen, of `all`.",
  'plugins.bazarr.quota.402':
    '**402 of 429** (saldo leeg of dagelijkse limiet bereikt): Bazarr logt een notitie met een link naar [store.wyzie.io](https://store.wyzie.io) en geeft geen resultaten terug, zodat het netjes terugvalt op je andere providers. Er crasht niets.',
  'plugins.bazarr.quota.401':
    '**401** (ontbrekende sleutel) of **403** (onbekende of gepauzeerde sleutel): Bazarr toont een authenticatiefout zodat je weet dat je de sleutel moet controleren of opnieuw moet invoeren.',
  'plugins.bazarr.ts.missing':
    '**Wyzie verschijnt niet in de providerlijst.** Controleer de installatiestap die `extensions.py` bewerkt opnieuw; de vermelding moet in zowel `provider_registry` als `provider_manager` staan, start daarna Bazarr opnieuw.',
  'plugins.bazarr.ts.none':
    '**Geen ondertitels gevonden.** Bevestig dat het item een IMDB-ID heeft in Bazarr en dat de talen die je hebt ingeschakeld er ondertitels voor hebben. Beperk `sources` alleen als je dat van plan bent.',
  'plugins.bazarr.ts.settings':
    '**Instellingenvelden ontbreken.** De instellingenstap is niet toegepast voor jouw Bazarr-versie; vergelijk met een werkend providerinstellingenblok en start opnieuw.',

  'plugins.kodi.intro':
    'Een ondertiteldienst voor **Kodi 19+ (Matrix en later)**, LibreELEC en CoreELEC. Het gebruikt het standaard `xbmc.subtitle.module`-uitbreidingspunt van Kodi, dus het verschijnt overal waar Kodi naar ondertitels zoekt.',
  'plugins.kodi.before':
    'Haal een gratis Wyzie API-sleutel op bij [store.wyzie.io/redeem](https://store.wyzie.io/redeem).',
  'plugins.kodi.repo.intro':
    'De repository één keer installeren laat Kodi de add-on voor je **automatisch bijwerken**.',
  'plugins.kodi.repo.1':
    'Download het repository-installatieprogramma: [**repository.wyzie.zip**](https://kodi.wyzie.io/repository.wyzie.zip).',
  'plugins.kodi.repo.2':
    'In Kodi: **Settings, Add-ons, Install from zip file**, kies daarna `repository.wyzie.zip`. Als Kodi het blokkeert, schakel dan eerst **Settings, System, Add-ons, Unknown sources** in.',
  'plugins.kodi.repo.3':
    '**Settings, Add-ons, Install from repository, Wyzie Repository, Subtitle services, Wyzie Subs, Install.**',
  'plugins.kodi.repo.4':
    '**Settings, Player, Language, Default subtitle service**, selecteer daarna **Wyzie Subs**.',
  'plugins.kodi.repo.5':
    'Open de instellingen van de Wyzie Subs-add-on en plak je **API-sleutel**.',
  'plugins.kodi.zip.intro':
    'Gebruik dit als je liever de repository niet toevoegt. Let op: een zip-installatie werkt **niet** automatisch bij.',
  'plugins.kodi.zip.1':
    'Haal de add-on-zip op: `service.subtitles.wyzie-<version>.zip`. Om hem zelf te bouwen, kloon je de [wyzie-plugins-repository](https://github.com/wyziedevs/wyzie-plugins) (`git clone https://github.com/wyziedevs/wyzie-plugins.git`) en zip je de map `kodi/` ervan, zodat de zip `addon.xml` in de root bevat.',
  'plugins.kodi.zip.2':
    'In Kodi: **Settings, Add-ons, Install from zip file**, kies daarna de zip. Als Kodi het blokkeert, schakel dan eerst **Settings, System, Add-ons, Unknown sources** in.',
  'plugins.kodi.zip.3':
    '**Settings, Player, Language, Default subtitle service**, selecteer daarna **Wyzie Subs**.',
  'plugins.kodi.zip.4':
    'Open de instellingen van de Wyzie Subs-add-on en plak je **API-sleutel**.',
  'plugins.kodi.cfg.key': 'Je Wyzie-sleutel. Vereist.',
  'plugins.kodi.cfg.hi':
    'Alleen ondertitels voor slechthorenden teruggeven (stuurt hi=true).',
  'plugins.kodi.cfg.langs':
    'Talen worden overgenomen uit de geselecteerde ondertiteltalen van Kodi en automatisch toegewezen aan ISO 639-1.',
  'plugins.kodi.matching.1':
    'Terwijl er iets speelt, geeft Kodi het IMDB-nummer, seizoen en aflevering vrij. De add-on leest die, bevraagt `sub.wyzie.io/search` en geeft overeenkomende ondertitels terug. Omdat Wyzie ID-gestuurd is (IMDB en TMDB), zijn matches nauwkeurig voor zowel films als series.',
  'plugins.kodi.matching.2':
    '**Handmatig zoeken** toont momenteel een melding en doet niets, omdat Wyzie matcht op IDs, niet op titels. Een opzoeking van titel naar ID staat op de roadmap. Laat Kodi voorlopig automatisch zoeken tijdens het afspelen.',
  'plugins.kodi.quota':
    'Een 402- of 429-respons toont een Kodi-toastmelding die je naar [store.wyzie.io](https://store.wyzie.io) verwijst om aan te vullen of een abonnement te nemen.',
  'plugins.kodi.ts.notoffered':
    '**Wyzie wordt niet aangeboden tijdens het afspelen.** Bevestig dat het is ingesteld als de **Default subtitle service** en dat het afgespeelde item een IMDB-ID heeft.',
  'plugins.kodi.ts.key':
    '**Ongeldige sleutel.** Open de add-on-instellingen opnieuw en plak je sleutel opnieuw.',
  'plugins.kodi.ts.episode':
    '**Niets voor een aflevering.** Zorg ervoor dat Kodi correcte seizoens- en afleveringsmetadata voor het bestand heeft; gescrapete bibliotheekitems werken het best.',
};

export default messages;
