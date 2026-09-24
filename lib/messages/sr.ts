const messages: Record<string, string> = {
  // Navigation
  'nav.language': 'Jezik',

  // Index / Landing Page
  'index.subtitle':
    'Wyzie je skup alata za pretragu titlova i svega što uz to ide.',
  'index.cta.start': 'Počnite',
  'index.cta.store': 'Pogledajte',

  'index.card.keys.title': 'Besplatni API ključevi',
  'index.card.keys.body':
    'Preuzmite besplatni API ključ na store.wyzie.io/redeem uz brzu verifikaciju emaila (Gmail, Outlook, Yahoo, iCloud, Proton i drugi veliki provajderi). 1.000 zahteva dnevno bez naknade. Dostupni su plaćeni planovi za veće korišćenje.',

  'index.card.ai.title': 'AI prevod',
  'index.card.ai.body':
    'Prevedite bilo koji titl na 80+ jezika po zahtevu. SRT se streamuje nazad redom kako se grupe završavaju, pa prvi redovi stižu brzo. Dostupno na Pro ključevima.',

  'index.card.reliable.title': 'Pouzdano',
  'index.card.reliable.body':
    'Ponosimo se stalnom dostupnošću i (skoro) svakodnevnim ažuriranjima, kao i brzim keširanjem.',

  'index.card.simple.title': 'Jednostavnost na novom nivou',
  'index.card.simple.body':
    'Lako za implementaciju, lako za korišćenje. Wyzie je osmišljen da bude što jednostavniji.',

  // Donate Page
  'donate.title': 'Molimo vas, donirajte',
  'donate.body':
    'Zdravo, korisniče. Wyzie se donekle oslanja na donacije (koje jedva dobijam), a ja imam 16 godina, radim honorarno i ponekad moj mesečni račun za javni API prelazi 100$. Ne mogu da nastavim da podržavam ovaj projekat bez spoljne pomoći. Iskreno mi je žao, ali ovaj projekat je narastao više nego što sam prvobitno mogao da pokrijem iz sopstvenog džepa.',
  'donate.cta': 'Podržite Wyzie',

  // Subs Intro Page
  'subs.intro.title': 'Uvod u Wyzie Subs',
  'subs.intro.p1':
    'Wyzie Subs je API za preuzimanje titlova sa besplatnim nivoom. Postoje dva načina za slanje zahteva API-ju: korišćenjem našeg NPM paketa ili direktnim pozivanjem Wyzie API-ja. Preporučujem korišćenje našeg paketa, mada nekima tipovi mogu izgledati glomazno. Da biste koristili API, najpre morate doneti tu odluku.',
  'subs.intro.note.ai':
    'AI prevod je aktivan za Pro ključeve. Bilo koji naslov, 80+ ciljnih jezika, streamuje se nazad redosledom titla kako se grupe završavaju.',
  'subs.intro.important.apikey':
    'API ključ je obavezan za sve zahteve. Nabavite besplatni ključ na [store.wyzie.io/redeem](https://store.wyzie.io/redeem) (verifikacija emaila, 1.000 zahteva dnevno). Za veće korišćenje dostupni su [Pro i top-up planovi](https://store.wyzie.io). Pogledajte stranicu API ključevi za detalje.',
  'subs.intro.note.npm':
    'Toplo preporučujemo NPM paket ako ste upoznati sa TypeScript-om ili JavaScript-om',
  'subs.intro.btn.npm': 'NPM paket',
  'subs.intro.btn.direct': 'Direktno preuzimanje',

  'subs.intro.protect.h2': 'Zaštita vašeg API ključa',
  'subs.intro.protect.important':
    '**Stvarni incident:** videli smo programere koji su nalépili svoj ključ direktno u JavaScript frontend stranice za strimovanje. U roku od nekoliko sati, nepoznata strana ga je izvukla iz JS bundle-a i koristila sve dok dnevni limit ili plaćeno stanje nije iscrpljeno. Kvota izgubljena na ovaj način nije nadoknadiva i smatra se odgovornošću vlasnika ključa prema našim Uslovima korišćenja.',
  'subs.intro.protect.p1':
    'Vaš API ključ treba da ostane privatan i da se **nikada** ne pojavi u:',
  'subs.intro.protect.item1':
    'Browser JavaScript-u (bilo čemu koji se isporučuje u script tagu)',
  'subs.intro.protect.item2':
    'Binarnim datotekama mobilnih aplikacija (Android/iOS, uključujući obfuskovane)',
  'subs.intro.protect.item3': 'Browser ekstenzijama',
  'subs.intro.protect.item4':
    'Electron / desktop aplikacijama koje se distribuiraju krajnjim korisnicima',
  'subs.intro.protect.item5':
    'Javnim Git repozitorijumima, gist-ovima, paste sajtovima ili snimcima ekrana',
  'subs.intro.protect.p2':
    'Ako ključ dospe do uređaja krajnjeg korisnika, tretujte ga kao javni. Postoje dva bezbedna pristupa:',
  'subs.intro.protect.opt1.h3': 'Opcija 1: Koristite Wyzie Worker',
  'subs.intro.protect.opt1.p1':
    'Wyzie Worker je lagani Cloudflare Worker proxy koji ubacuje vaš API ključ na strani servera. Postavite ga na Cloudflare Workers i podesite dve tajne: `NITRO_API_TOKEN` (vaš Wyzie API ključ) i `NITRO_WORKER_KEY` (tajna koju sami izaberete). Svaki zahtev ka workeru mora da pošalje `Authorization: Bearer <NITRO_WORKER_KEY>`; bez toga worker odgovara sa 401, a ako `NITRO_WORKER_KEY` nije podešen, odbija svaki zahtev sa 503. I ključ workera mora ostati na strani servera, pa worker pozivajte iz sopstvenog backenda, nikada iz koda u browseru ili aplikaciji. Worker prosleđuje svaki zahtev na sub.wyzie.io sa priloženim vašim API ključem.',
  'subs.intro.protect.opt2.h3': 'Opcija 2: Napravite sopstveni proxy',
  'subs.intro.protect.opt2.p1':
    'Ako ne želite da koristite Wyzie Worker, možete napraviti jednostavan server-side proxy u bilo kom frameworku. Ideja je ista: vaš backend prima zahteve od klijenta, dodaje API ključ i prosleđuje ih na sub.wyzie.io.',

  // Subs Sources Page
  'subs.sources.title': 'Wyzie Subs izvori',
  'subs.sources.p1':
    'Wyzie Subs agregira titlove od više provajdera. Dostupnost izvora može varirati u zavisnosti od statusa provajdera ili ako je neki izvor nedostupan. Uvek tražim nove izvore — javite se ako imate predlog.',

  'subs.sources.using.h2': 'Korišćenje izvora',
  'subs.sources.using.bullet1':
    'Koristite source=all da biste istovremeno upitali sve aktivne izvore',
  'subs.sources.using.bullet2':
    'Podrazumevani izvor je charlie ako nije navedeno drugačije',
  'subs.sources.using.bullet3':
    'Više izvora može se navesti kao lista razdvojena zarezima',

  'subs.sources.api.h2': 'API endpoint',
  'subs.sources.api.p1':
    'Možete programski preuzeti listu trenutno aktivnih izvora i njihov plan nivo:',
  'subs.sources.api.free':
    'izvori koje može pretraživati bilo koji ključ, uključujući besplatne.',
  'subs.sources.api.paid': 'izvori koji zahtevaju Pro ključ.',
  'subs.sources.api.allFree':
    'kada je true, svaki aktivni izvor je dostupan svim ključevima, a paid je prazno.',

  'subs.sources.scope.h3': 'Ograničavanje na ključ',
  'subs.sources.scope.p1':
    'Prosledite vaš API ključ da biste dobili izvore koje taj ključ zapravo može koristiti:',
  'subs.sources.scope.p2':
    'Ovo dodaje polja specifična za ključ bez trošenja zahteva iz vaše kvote:',
  'subs.sources.scope.available':
    'izvori koje ovaj ključ može pretraživati trenutno.',
  'subs.sources.scope.restricted':
    'aktivni izvori koje ovaj ključ ne može pretraživati (nadogradite na Pro da biste ih otključali).',
  'subs.sources.scope.keyType': 'besplatan ili plaćen.',
  'subs.sources.scope.keyValid':
    'je false kada je ključ neispravan ili nije pronađen, i null kada ključ nije mogao biti verifikovan (u tom slučaju available i restricted su izostavljeni).',

  'subs.sources.details.h2': 'Detalji izvora',

  'subs.sources.opensubtitles.desc':
    'Najveća baza titlova na internetu. Podržava filmove i TV serije u velikom broju jezika. Koristi zvaničan OpenSubtitles REST API.',
  'subs.sources.opensubtitles.content': 'Filmovi i TV serije',
  'subs.sources.opensubtitles.languages': 'Opsežna višejezična podrška',
  'subs.sources.opensubtitles.formats': 'SRT, ASS, SSA, VTT, SUB i još',

  'subs.sources.subdl.desc':
    'Sajt za titlove vođen od strane zajednice sa širokim izborom filmova i TV serija.',
  'subs.sources.subdl.content': 'Filmovi i TV serije',
  'subs.sources.subdl.languages': 'Opsežna višejezična podrška',
  'subs.sources.subdl.formats': 'SRT, ASS, SSA, VTT, SUB i još',

  'subs.sources.subf2m.desc':
    'Veliki repozitorijum titlova sa opsežnim pokrićem jezika za filmove i TV serije.',
  'subs.sources.subf2m.content': 'Filmovi i TV serije',
  'subs.sources.subf2m.languages': 'Opsežna višejezična podrška',
  'subs.sources.subf2m.formats': 'SRT, ASS, SSA, VTT, SUB i još',

  'subs.sources.podnapisi.desc':
    'Jedna od najstarijih baza titlova. Dobro kurirana kolekcija koja pokriva filmove i TV serije.',
  'subs.sources.podnapisi.content': 'Filmovi i TV serije',
  'subs.sources.podnapisi.languages': 'Opsežna višejezična podrška',
  'subs.sources.podnapisi.formats': 'SRT, ASS, SSA, VTT, SUB i još',

  'subs.sources.animetosho.desc':
    'Skrejpuje anime titlove direktno iz torrent izdanja indeksiranih na AnimeTosho.',
  'subs.sources.animetosho.content': 'Anime (TV serije)',
  'subs.sources.animetosho.languages':
    'Japanski, engleski i drugi u zavisnosti od izdanja',
  'subs.sources.animetosho.formats': 'ASS, SRT, SSA i drugi',
  'subs.sources.animetosho.note': 'AnimeTosho je planirao gašenje u maju 2026.',

  'subs.sources.gestdown.desc':
    'Pruža titlove za TV serije putem Gestdown API-ja sa opsežnom jezičkom podrškom.',
  'subs.sources.gestdown.content': 'Samo TV serije',
  'subs.sources.gestdown.languages': 'Opsežna višejezična podrška',
  'subs.sources.gestdown.formats': 'SRT, ASS i još',

  'subs.sources.jimaku.desc':
    'Skrejpuje jimaku.cc, repozitorijum anime titlova koji održava zajednica. Naslovi se podudaraju korišćenjem TMDB API-ja.',
  'subs.sources.jimaku.content': 'Anime (filmovi i TV serije)',
  'subs.sources.jimaku.languages':
    'Pretežno japanski; takođe engleski, kineski i drugi u zavisnosti od dostupnih fajlova',
  'subs.sources.jimaku.formats': 'SRT, ASS, SSA, VTT, SUB i drugi',

  'subs.sources.kitsunekko.desc':
    'Skrejpuje listinge direktorijuma sa kitsunekko.net, namenskog repozitorijuma anime titlova. Naslovi se podudaraju korišćenjem TMDB API-ja.',
  'subs.sources.kitsunekko.content': 'Anime (TV serije)',
  'subs.sources.kitsunekko.languages':
    'Direktorijumi sa engleskim i japanskim titlovima',
  'subs.sources.kitsunekko.formats': 'SRT, ASS, SSA, VTT, SUB i drugi',

  'subs.sources.yify.desc':
    'Skrejpuje yifysubtitles.ch za titlove podudarene po IMDB ID-u. Samo filmovi.',
  'subs.sources.yify.content': 'Samo filmovi (TV serije nisu podržane)',
  'subs.sources.yify.languages':
    'Opsežna višejezična podrška (albanski, arapski, engleski, francuski, španski i mnogi drugi)',
  'subs.sources.yify.formats': 'SRT (isporučen unutar ZIP arhive)',

  'subs.sources.ajatttools.desc':
    'Preuzima titlove iz GitHub repozitorijuma Ajatt-Tools/kitsunekko-mirror. Organizovano po tipu medija. Naslovi se podudaraju korišćenjem TMDB API-ja.',
  'subs.sources.ajatttools.content': 'Anime i drame (TV serije i filmovi)',
  'subs.sources.ajatttools.languages':
    'Pretežno japanski; takođe engleski, kineski i drugi',
  'subs.sources.ajatttools.formats': 'SRT, ASS, SSA, VTT, SUB i drugi',

  'subs.sources.ai.desc':
    'Nije skrejper. AI-prevedeni SRT koji se generiše po zahtevu od najboljeg dostupnog izvornog titla. Samo Pro ključevi. Pogledajte vodič za AI prevod za sve detalje.',
  'subs.sources.ai.content': 'Sve za šta Wyzie može pronaći tekstualni titl',
  'subs.sources.ai.languages': '80+ ciljnih jezika',
  'subs.sources.ai.formats': 'Samo SRT',

  // Subs Package Page
  'subs.pkg.title': 'Korišćenje Wyzie NPM paketa',
  'subs.pkg.p1':
    'Wyzie Subs NPM paket pruža jednostavan i lak interfejs za pretragu i preuzimanje titlova.',
  'subs.pkg.install.h2': 'Instalacija',
  'subs.pkg.important':
    'API ključ je obavezan za sve zahteve. Nabavite besplatni ključ na [store.wyzie.io/redeem](https://store.wyzie.io/redeem) i prosledite ga putem parametra key. Pogledajte stranicu API ključevi za detalje.',
  'subs.pkg.usage.h2': 'Korišćenje',
  'subs.pkg.params.h3': 'Parametri',
  'subs.pkg.params.note':
    'Za više informacija (ili ako ste zaglavili), posetite [početnu stranicu Wyzie Subs](https://sub.wyzie.io).',

  'subs.pkg.param.tmdb':
    'TMDB ID filma ili TV serije (tmdb_id ili imdb_id je obavezno).',
  'subs.pkg.param.imdb':
    'IMDB ID filma ili TV serije (imdb_id ili tmdb_id je obavezno).',
  'subs.pkg.param.format':
    'Formati fajlova za vraćanje (npr. srt, ass). Prihvata listu.',
  'subs.pkg.param.season': 'Broj sezone (zahteva episode).',
  'subs.pkg.param.episode': 'Broj epizode (zahteva season).',
  'subs.pkg.param.language': 'ISO 639-1 kodovi za jezik titla. Prihvata listu.',
  'subs.pkg.param.encoding': 'Filter kodiranja znakova (npr. utf-8, latin-1).',
  'subs.pkg.param.hi':
    'Kada je true, vraća samo titlove za osobe oštećenog sluha. Izvori koji ne označavaju titlove za osobe oštećenog sluha ne vraćaju ništa.',
  'subs.pkg.param.source':
    'Provajderi titlova za upit, navedeni po kodnom imenu (all za svaki aktivni izvor koji vaš ključ može da koristi; podrazumevano charlie).',
  'subs.pkg.param.release': 'Filtri za release/scene (prihvata listu).',
  'subs.pkg.param.filename':
    'Filtri za naziv fajla; pseudonimi file i fileName su podržani.',
  'subs.pkg.param.origin': 'Filter porekla sadržaja (npr. WEB, BLURAY, DVD).',
  'subs.pkg.param.key':
    'Vaš API ključ (obavezno). Nabavite besplatno na store.wyzie.io/redeem.',
  'subs.pkg.param.refresh':
    'Zaobiđite keš i preuzmite sveže rezultate iz izvora.',

  'subs.pkg.helpers':
    'Paket takođe dolazi sa laganim TMDB pomoćnim funkcijama: searchTmdb, getTvDetails i getSeasonDetails za brzo pronalaženje ID-ova pre pozivanja /search. getSources vraća kodna imena aktivnih izvora (izvor koji su pauzirale provere stanja izostavlja se dok se ne oporavi), a getSourcesInfo vraća kompletan /sources odgovor sa nivoima i, ako mu prosledite ključ, izvorima koje taj ključ može da koristi. withDownloadOptions dodaje opcije preuzimanja (WebVTT izlaz, ispravke tajminga, drugi jezik i još mnogo toga) na url rezultata.',
  'subs.pkg.types.h3': 'Tipovi',
  'subs.pkg.type.search': 'Svi validni parametri koje API prepoznaje.',
  'subs.pkg.type.query':
    'Svi parametri (opcioni i obavezni) dostupni za wyzie-subs API.',
  'subs.pkg.type.subtitle':
    'Sve vraćene vrednosti iz API-ja sa njihovim odgovarajućim tipovima.',
  'subs.pkg.type.sources': 'Tip odgovora sa /sources endpointa.',
  'subs.pkg.type.download':
    'Opcije za withDownloadOptions: to, offset, fps, plain i (Pro) sdh, clean, dual.',
  'subs.pkg.type.sync':
    'Ulaz i rezultat funkcije syncSubtitle (Wyzie Synced, Pro ključevi): koji titl (rezultat, njegov url ili tmdb_id/imdb_id uz language), segmenti govora (speech) koje je pronašao detectSpeech ili media fajl, i sinhronizovani link za preuzimanje sa vrednostima offset, fps i confidence. Pogledajte [Wyzie Synced](/subs/usage/synced).',
  'subs.pkg.types.end':
    'Naši tipovi su vrlo jednostavni i dobro dokumentovani. Pogledajte [src/types.ts](https://github.com/wyziedevs/wyzie-lib/blob/main/src/types.ts) u wyzie-lib repozitorijumu.',
  'subs.pkg.config.h3': 'Konfiguracija',
  'subs.pkg.config.p1':
    'Jedan korisnik je na Githubu pitao za konfigurabilan API hostname i rekao sam sebi — pa to zvuči kao dobra ideja, pa je ispod primer korišćenja. Volim vas, ekipo!',

  // Subs Direct Page
  'subs.direct.title': 'Direktno preuzimanje Wyzie Subs',
  'subs.direct.caution':
    'Toplo preporučujem korišćenje NPM paketa jer je lakši i pouzdaniji.',
  'subs.direct.p1':
    'Ako ste odlučili da ne koristite NPM paket, počnimo. Preći ću samo preko API parametara i podataka koje API vraća. Kako ćete slati zahteve API-ju u potpunosti je na vama.',
  'subs.direct.important':
    'API ključ je obavezan za sve zahteve. Nabavite besplatni ključ na [store.wyzie.io/redeem](https://store.wyzie.io/redeem) i dodajte ga kao &key=YOUR_KEY u svaki zahtev. Pogledajte stranicu API ključevi za detalje.',

  'subs.direct.params.h3': 'Parametri',
  'subs.direct.param.id': 'TMDB ili IMDB ID serije ili filma (obavezno).',
  'subs.direct.param.seasonEpisode':
    'Sezona i epizoda za pretragu TV serija. Oba moraju biti prisutna zajedno.',
  'subs.direct.param.language':
    'Filter jezika (ISO 639-1 kodovi). Više vrednosti se razdvaja zarezima.',
  'subs.direct.param.format':
    'Formati titlova za vraćanje. Dozvoljeno je više vrednosti.',
  'subs.direct.param.hi':
    'Kada je true, vraća samo titlove za osobe oštećenog sluha (ovo je filter, a ne preferencija). Izvori koji ne označavaju titlove za osobe oštećenog sluha ne vraćaju ništa.',
  'subs.direct.param.encoding': 'Filter kodiranja znakova.',
  'subs.direct.param.source':
    'Provajderi titlova za upit (all upituje svaki izvor koji vaš ključ može da koristi; podrazumevano charlie).',
  'subs.direct.param.release':
    'Filtri za release ili scene naziv (razdvojeni zarezima).',
  'subs.direct.param.file':
    'Filtri za naziv fajla (pseudonimi: file, filename, fileName).',
  'subs.direct.param.origin':
    'Filter porekla sadržaja, razdvojen zarezima (npr. WEB, BLURAY, DVD).',
  'subs.direct.param.key':
    'Vaš API ključ (obavezno). Nabavite besplatno na store.wyzie.io/redeem.',
  'subs.direct.param.refresh':
    'Zaobiđite keš i preuzmite sveže rezultate. Koristite kada su se izvori možda ažurirali.',
  'subs.direct.param.page':
    'Stranica koja se vraća, počevši od 1. Koristi se samo zajedno sa limit.',
  'subs.direct.param.limit':
    'Broj rezultata po stranici (od 1 do 200). Bez njega se svi rezultati vraćaju u jednom odgovoru.',
  'subs.direct.important.imdb':
    "Kada koristite IMDB ID, obavezno uključite prva dva znaka ('tt') na početku ID-a.",

  'subs.direct.data.h3': 'Vraćeni podaci',
  'subs.direct.data.id': 'ID fajla titla.',
  'subs.direct.data.url':
    'Link za preuzimanje na https://sub.wyzie.io/c/... koji nosi šifrovani parametar tok. Svako preuzimanje košta 1 zahtev; pogledajte odeljak Downloading Subtitles ispod.',
  'subs.direct.data.flagUrl': 'URL do zastave lokala jezika.',
  'subs.direct.data.format': 'Format fajla titla.',
  'subs.direct.data.encoding': 'Kodiranje znakova fajla titla.',
  'subs.direct.data.display': 'Jezik titla, napisano velikim početnim slovom.',
  'subs.direct.data.language': 'ISO 639-1 kod jezika.',
  'subs.direct.data.media': 'Naziv medija za koji su titlovi namenjeni.',
  'subs.direct.data.isHearingImpaired':
    'Boolean koji pokazuje da li je titl prilagođen osobama oštećenog sluha.',
  'subs.direct.data.source': 'Koji izvor je korišćen za preuzimanje titla.',
  'subs.direct.data.release': 'Primarni naziv reliza.',
  'subs.direct.data.releases': 'Drugi nazivi reliza kompatibilni sa titlom.',
  'subs.direct.data.fileName': 'Originalni naziv fajla kada je dostupan.',
  'subs.direct.data.downloadCount':
    'Broj preuzimanja na izvornoj platformi (ako je dostupno).',
  'subs.direct.data.origin': 'Poreklo sadržaja (npr. WEB, BluRay, DVD).',
  'subs.direct.data.matchedRelease':
    'Vrednost reliza koja se podudarila sa vašim filterom (ako je naveden).',
  'subs.direct.data.matchedFilter':
    'Filter koji je naveo korisnik i koji se podudarao (ako je naveden).',
  'subs.direct.data.ai':
    'true ako je unos AI-prevedeni titl, false za normalne skrejpovane titlove. Koristite kao filter na strani klijenta kada želite samo jednu od dve opcije.',
  'subs.direct.download.p':
    'Svaki url u /search odgovoru pokazuje na https://sub.wyzie.io/c/... i nosi query parametar tok. tok je šifrovan, pa ne otkriva vaš API ključ, i važi 60 dana. Koristite URL onakav kakav jeste. Pretraga košta 1 zahtev, a svako preuzimanje još 1, što se naplaćuje ključu kojim je pretraga izvršena. Kada taj ključ ne može da plati preuzimanje, link se odbija:',
  'subs.direct.dl.p':
    'Dodajte ih na URL za preuzimanje da biste promenili ono što vraća. Rade na svakom preuzimanju, iz keša ili ne, i ne koštaju ništa dodatno (osim dual, ispod). Zaglavlje odgovora X-Subtitle-Transforms navodi šta je primenjeno i koliko puta.',
  'subs.direct.dl.param.to':
    'Izlazni format: `srt` ili `vtt`. `vtt` se reprodukuje direktno u `<track>` elementu browsera. Podrazumevano: izvorni format fajla.',
  'subs.direct.dl.param.offset':
    'Pomera svaki red za zadati broj sekundi (negativna vrednost znači ranije).',
  'subs.direct.dl.param.fps':
    'Ispravlja postepeno razilaženje titla napravljenog za drugi reliz: `SUBTITLE_FPS:VIDEO_FPS`, npr. `25:23.976` za PAL titl na videu sa filmskom brzinom kadrova.',
  'subs.direct.dl.param.plain':
    'Čisti, uredni redovi: uklanjaju se kodovi stilizovanja kao što su `{\\an8}` i `<font>`, izbacuju prazni i ponovljeni redovi, redovi se ređaju hronološki, a mala preklapanja se skraćuju.',
  'subs.direct.dl.param.sdh':
    'Uklanja tekst za osobe oštećenog sluha: `[DOOR SLAMS]`, `(sighs)`, oznake govornika kao što je `JOHN:` i ♪ tekstove pesama.',
  'subs.direct.dl.param.clean':
    'Maskira teže psovke, uz zadržavanje prvog slova (`f***`). Samo za fajlove na engleskom.',
  'subs.direct.dl.param.dual':
    'Dodaje drugi jezik (ISO 639-1 kod) ispod svakog reda, usklađen sa tajmingom ovog fajla. Košta 1 dodatni zahtev, i to samo kada se pronađe podudaranje; u suprotnom se fajl vraća sam, sa `X-Dual: unavailable`.',
  'subs.direct.dl.after':
    'Opcije se mogu kombinovati, npr. `&to=vtt&sdh=strip&offset=-1.5`. Linkovi već sadrže `format`, `encoding`, `id` i (za epizode) `season` i `episode`: ostavite ih onakve kakvi jesu. `autoUnzip=false` vraća arhivu u izvornom obliku.',
  'subs.direct.headers.p':
    'Svaki /search odgovor sadrži zaglavlje X-Total-Count sa ukupnim brojem rezultata. Kada prosledite limit, sadrži i:',
  'subs.direct.header.xpage': 'vraćena stranica.',
  'subs.direct.header.xperpage': 'limit koji se primenjuje.',
  'subs.direct.header.xtotalpages': 'ukupan broj stranica.',
  'subs.direct.headers.rate':
    'Odgovori sadrže i X-RateLimit-Limit, X-RateLimit-Remaining i X-RateLimit-Reset. Smatrajte ih približnim: potrošnja se sa naplatom usklađuje u kratkim serijama, pa mogu malo kasniti za vašom stvarnom potrošnjom.',

  // Subs Translate Page
  'subs.translate.title': 'AI prevod titlova',
  'subs.translate.important':
    'AI prevod je **Pro funkcija**; besplatni ključevi dobijaju 403 Upgrade required. Svaki poziv košta **100 zahteva** iz stanja vašeg ključa, uključujući i pogotke keša. Ako poziv ne uspe pre bilo kakvog izlaza (titl nije pronađen, pretraga ili preuzimanje nisu uspeli ili je server zauzet), tih 100 zahteva vam se automatski vraća.',
  'subs.translate.p1':
    'Wyzie može prevesti bilo koji titl na 80+ jezika u hodu. Prevedeni SRT se streamuje nazad redom kako se grupe završavaju, pa prve stavke stižu brzo, umesto tek kada ceo fajl bude gotov. Kompletan prevod se kešuje 30 dana, pa se kasniji zahtevi za isti naslov, epizodu i ciljni jezik isporučuju iz keša.',

  'subs.translate.ways.h2': 'Dva načina korišćenja',
  'subs.translate.way1.h3': '1. Izaberite jezik iz odgovora pretrage',
  'subs.translate.way1.p1':
    'Za Pro ključeve, svaki /search odgovor uključuje i redove AI prevoda sa "ai": true i url koji pokazuje na /translate: po jedan za svaki podržani jezik, ili samo za jezike iz vašeg language= filtera. Besplatni ključevi nikada ne dobijaju ove redove. Tretirajte AI redove kao bilo koji drugi red titla u vašem UI-ju: kada korisnik klikne na jedan, preuzmite URL.',
  'subs.translate.way1.filter':
    'Ako želite da sakrijete AI redove iz vašeg UI-ja, filtrirajte ih:',
  'subs.translate.way2.h3': '2. Direktno pozovite /translate',

  'subs.translate.param.id': 'TMDB ili IMDB ID (obavezno).',
  'subs.translate.param.target':
    'Ciljni jezik (obavezno): naziv sa liste podržanih jezika (npr. Spanish, Japanese, Portuguese (Brazil)) ili njegov kod (npr. es, ja, pt-BR).',
  'subs.translate.param.seasonEpisode':
    'Za TV serije. Oba moraju biti prisutna zajedno.',
  'subs.translate.param.key':
    'Vaš API ključ. Koristite tk umesto toga ako ste dobili URL iz /search.',
  'subs.translate.param.tk':
    'Šifrovani token iz URL-ova AI redova u /search. Radi kao key, ne otkriva vaš API ključ i važi 60 dana.',

  'subs.translate.headers.p':
    'Telo odgovora je SRT fajl streamovan kao text/plain; charset=utf-8. Korisni zaglavlja odgovora:',
  'subs.translate.header.xcache':
    'HIT-REDIS ako se isporučuje iz keša, MISS ako je sveže generisan.',
  'subs.translate.header.xsourcelang':
    'jezik titla koji je prevodilac koristio kao ulaz.',
  'subs.translate.header.xtargetlang': 'eho vašeg target parametra.',
  'subs.translate.header.xsourceprovider':
    'koji skrejper je obezbedio izvorni titl.',

  'subs.translate.how.h2': 'Kako funkcioniše',
  'subs.translate.how.step1':
    'Wyzie pretražuje normalne izvore za tekstualni titl, preferirajući engleski SRT kada je dostupan. VTT, ASS, SSA i SUB fajlovi se najpre konvertuju u SRT.',
  'subs.translate.how.step2':
    'SRT se deli na grupe od najviše oko 3.800 znakova i prevodi pomoću Google Translate-a, po 4 grupe istovremeno.',
  'subs.translate.how.step3':
    'Izlaz se streamuje nazad redosledom SRT-a kako se grupe završavaju, pa prve stavke stižu brzo. Plejeri koji prihvataju SRT telo u streamingu mogu početi da prikazuju prve redove pre nego što se ostali završe.',
  'subs.translate.how.step4':
    'Kompletan prevod se kešuje u Redis-u na 30 dana, sa ključem po id, season, episode i target.',

  'subs.translate.languages.h2': 'Podržani ciljni jezici',
  'subs.translate.languages.p':
    '80+ jezika uključujući sve glavne evropske, azijske, afričke i bliskoistočne jezike. Prosledite naziv sa liste (Spanish, Portuguese (Brazil)) ili njegov kod (es, pt-BR). Za Pro ključeve, kompletna lista se vraća i kao ai: true redovi u svakom /search odgovoru bez language= filtera, što je kanonički izvor istine.',

  'subs.translate.limitations.h2': 'Ograničenja',
  'subs.translate.limit1':
    'AI prevodu je potreban tekstualni titl kao polazna tačka. VTT, ASS, SSA i SUB izvori se najpre konvertuju u SRT; ako tekstualni titl ne postoji, poziv vraća 404 No subtitle found i tih 100 zahteva vam se vraća.',
  'subs.translate.limit2':
    'Kvalitet prevoda zavisi od izvornog titla. Loše vremenski usklađen ili pogrešno otkucan izvor rezultira loše vremenski usklađenim ili pogrešno otkucanim prevodom.',
  'subs.translate.limit3':
    'Neki korisnici možda žele da u potpunosti isključe AI redove. Filtrirajte po ai === false u vašem klijentu.',
  'subs.translate.limit4':
    'Prevodi se naplaćuju i na pogodke keša. Bez obzira na to da li je sveže generisan ili isporučen iz 30-dnevnog keša, svaki /translate poziv košta 100 zahteva. Zahtevi se vraćaju samo za pozive koji ne uspeju pre bilo kakvog izlaza.',

  // Subs Synced Page
  'subs.synced.title': 'Wyzie Synced',
  'subs.synced.important':
    'Wyzie Synced je **Pro funkcija**: besplatni ključevi dobijaju 403 Paid feature. Svaka uspešna sinhronizacija košta **1 zahtev**; sinhronizacija koja ne pronađe podudaranje se ne naplaćuje. Preuzimanje sinhronizovanog linka se zatim računa kao i svako drugo preuzimanje.',
  'subs.synced.p1':
    'Titlovi pronađeni na internetu često su vremenski usklađeni za drugi reliz, a ne za video koji imate: počinju nekoliko sekundi ranije ili kasnije, ili se sve više razilaze kako film odmiče jer taj reliz ima drugačiju brzinu kadrova. Wyzie Synced sluša zvuk vaše kopije, pronalazi delove u kojima ljudi govore i izračunava pomak i ispravku brzine kadrova koji usklađuju titl sa njim. Dobijate običan link za preuzimanje sa primenjenom ispravkom (to su [opcije preuzimanja](/subs/usage/direct#download-options) offset i fps).',
  'subs.synced.web.p':
    'Najlakši način: otvorite [sub.wyzie.io/synced](https://sub.wyzie.io/synced), unesite svoj Pro ključ, izaberite video fajl i naslov, i preuzmite sinhronizovani titl. Zvuk se analizira u vašem browseru, tako da se video nikada ne otprema: šalju se samo vremena govora. Podržani su MKV, MP4, AVI i većina drugih formata, uključujući AC3, E-AC3 i DTS zvuk.',
  'subs.synced.api.p':
    'Pošaljite koji titl želite (link za preuzimanje ili naslov, pa da Wyzie izabere najbolje podudaranje) i zvuk: ili vremena govora koja ste sami detektovali, ili sam audio/video fajl.',
  'subs.synced.param.url':
    'Link za preuzimanje iz /search (https://sub.wyzie.io/c/…). Ostale opcije preuzimanja na njemu (to, sdh, …) zadržavaju se na sinhronizovanom linku.',
  'subs.synced.param.id':
    'Umesto url: TMDB ili IMDB ID. Wyzie isprobava 5 najboljih tekstualnih titlova na tom jeziku i vraća onaj koji najbolje odgovara vašem zvuku.',
  'subs.synced.param.language': 'Uz id: ISO 639-1 kod jezika titla (obavezno).',
  'subs.synced.param.seasonEpisode':
    'Uz id, za TV serije. Oba moraju biti prisutna zajedno.',
  'subs.synced.param.key':
    'Vaš Pro API ključ. Bez njega se koristi ključ na koji se odnosi tok iz url-a; linkovi sa stranice za preuzimanje bez ključa zahtevaju key.',
  'subs.synced.param.speech':
    'Delovi u kojima ljudi govore: [[start, end], …] u sekundama, iz bilo kog detektora glasovne aktivnosti (detectSpeech iz wyzie-lib, Silero VAD, webrtcvad). Film od 2 sata ima otprilike 2.000 segmenata, oko 40 KB JSON-a.',
  'subs.synced.param.media':
    'Ili sam audio/video fajl: kao sirovo telo zahteva (sa ostalim poljima u query stringu) ili kao multipart polje media. Do 95 MB, pa za ceo film otpremite samo audio zapis.',
  'subs.synced.fields.note':
    'Polja se šalju u JSON telu, multipart formi ili query stringu (uz sirovo media telo).',
  'subs.synced.response.p': 'Odgovor 200 je JSON:',
  'subs.synced.field.url':
    'link za preuzimanje titla sa ispravkom tajminga (offset, fps) i novim tok tokenom za vaš ključ. Koristite ga kao bilo koji url iz /search: svako preuzimanje košta 1 zahtev.',
  'subs.synced.field.offset':
    'sekunde dodate svakom redu nakon ispravke brzine kadrova (negativna vrednost znači ranije).',
  'subs.synced.field.fps':
    'ispravka brzine kadrova u obliku SUBTITLE_FPS:VIDEO_FPS (npr. "25:23.976"), ili null kada ispravka nije bila potrebna.',
  'subs.synced.field.confidence':
    'od 0 do 1: koliko jasno ovaj tajming nadmašuje sve ostale. Sve što je vraćeno prošlo je test podudaranja; veća vrednost znači veću sigurnost.',
  'subs.synced.field.inSync':
    'true kada je titl već bio usklađen sa vašom kopijom.',
  'subs.synced.field.subtitle':
    'koji je titl korišćen (release, fileName, format, source, …). Uz url, samo njegov format.',
  'subs.synced.errors.p':
    'Greške su JSON sa poljima message i details. Odbijene i neuspele sinhronizacije se ne naplaćuju.',
  'subs.synced.error.400':
    'Nedostajuća ili neispravna polja: nema titla, nema zvuka ili speech nije u obliku parova [start, end].',
  'subs.synced.error.401':
    'Nema ključa ili je link za preuzimanje prosleđen u url neispravan ili istekao.',
  'subs.synced.error.403':
    'Ključ je besplatan (Wyzie Synced zahteva Pro), neispravan ili pauziran.',
  'subs.synced.error.404':
    'Za taj naslov nema tekstualnih titlova na tom jeziku.',
  'subs.synced.error.413':
    'Fajl u polju media je veći od 95 MB. Otpremite samo audio zapis ili pošaljite speech.',
  'subs.synced.error.422':
    'Titl se ne poklapa sa zvukom ni pri jednom pomaku ni brzini kadrova (verovatno je u pitanju druga verzija filma ili epizoda), zvuk sadrži premalo govora ili fajl ne može da se dekodira.',
  'subs.synced.error.429':
    'Ključ ne može da plati zahtev, kao i kod svakog drugog poziva.',
  'subs.synced.error.503':
    'Server je zauzet dekodiranjem drugih otpremljenih fajlova ili je pretraga nakratko nedostupna. Pokušajte ponovo uskoro ili pošaljite speech.',
  'subs.synced.lib.p':
    'wyzie-lib sadrži detectSpeech (isti detektor koji sajt pokreće u vašem browseru) i syncSubtitle:',
  'subs.synced.how.step1':
    'Govor: zvuk se dekodira u 8 kHz mono (za 5.1 i 7.1 miksove samo centralni kanal, gde se nalazi dijalog), a detektor glasovne aktivnosti označava delove u kojima ljudi govore: glasan zvuk u opsegu govora koji raste i opada sa slogovima.',
  'subs.synced.how.step2':
    'Poravnanje: vremena prikaza titla unakrsno se koreliraju sa tim govorom za svaki pomak unutar ±10 minuta, za uobičajena neslaganja brzine kadrova (25 naspram 23,976, 25 naspram 24, 24 naspram 23,976 fps).',
  'subs.synced.how.step3':
    'Preciziranje: najbolji tajming se precizira na 10 ms usklađivanjem početaka redova sa počecima govora.',
  'subs.synced.how.step4':
    "Tajming se vraća samo kada se jasno izdvaja iznad svih ostalih pomaka, pa titl za drugu verziju filma ili epizodu dobija 422 Couldn't sync umesto pogrešnog pomeranja.",
  'subs.synced.limit1':
    'Wyzie Synced ispravlja konstantan pomak i razliku u brzini kadrova. Titl za drugu verziju filma (sa dodatim ili izbačenim scenama) ne može se ispraviti jednim pomeranjem i biva odbijen.',
  'subs.synced.limit2':
    'Potreban mu je govor: filmovi sa malo dijaloga ili zvuk koji je uglavnom muzika možda se neće sinhronizovati.',
  'subs.synced.limit3': 'Pronalaze se pomaci do ±10 minuta.',

  // Subs API Keys Page
  'subs.keys.title': 'API ključevi',
  'subs.keys.p1':
    'Wyzie Subs zahteva API ključ za sve zahteve. Besplatni nivo pokriva većinu slučajeva upotrebe; plaćeni planovi su namenjeni intenzivnijem korišćenju.',

  'subs.keys.tiers.h2': 'Nivoi',
  'subs.keys.tier.free': 'Besplatno (verifikacija emaila)',
  'subs.keys.tier.free.limit': '1.000 zahteva / UTC dan',
  'subs.keys.tier.pro': '5$ jednokratno',
  'subs.keys.tier.pro.limit': '400.000 zahteva',
  'subs.keys.tier.topup': 'od 0,0625$ / 5K',
  'subs.keys.tier.topup.limit': 'Dodaje se na vaše plaćeno stanje',
  'subs.keys.tiers.end':
    'Pro i top-up ne ističu. Više volite ponavljajuće plaćanje? Pretplata od 32$/mesečno daje 6.000.000 zahteva/mesečno (samo kartica). Pogledajte store.wyzie.io za kompletno određivanje cena i kontrolnu tablu.',

  'subs.keys.free.h2': 'Dobijanje besplatnog ključa',
  'subs.keys.free.p':
    'Posetite [store.wyzie.io/redeem](https://store.wyzie.io/redeem):',
  'subs.keys.free.step1': 'Rešite brzi Cloudflare Turnstile captcha.',
  'subs.keys.free.step2':
    'Unesite adresu nekog od velikih provajdera ličnog emaila (Gmail, Outlook/Hotmail, Yahoo, iCloud, AOL, Proton i drugi). Domeni jednokratnih email adresa se odbijaju.',
  'subs.keys.free.step3': 'Unesite 6-cifreni kod koji vam pošaljemo emailom.',
  'subs.keys.free.step4':
    'Dobijate API ključ koji izgleda ovako: wyzie-abc123...',
  'subs.keys.free.gmail':
    'Svaka email adresa i svaka mreža mogu dobiti po jedan besplatni ključ; drugi zahtev vraća 409. Izgubili ste ključ? Koristite "Forgot key" (zaboravljen ključ) na [kontrolnoj tabli](https://store.wyzie.io/dashboard) da bi vam bio ponovo poslat.',

  'subs.keys.pro.h2': 'Nadogradnja na Pro',
  'subs.keys.pro.p1':
    'Posetite [store.wyzie.io](https://store.wyzie.io) i kupite sa istim emailom koji ste koristili za besplatni ključ. Vaš postojeći wyzie-... ključ se nadograđuje na licu mesta sa 400K plaćenih zahteva dodatih na vrh. Više volite ponavljajuće plaćanje? Pretplata od 32$/mesečno umesto toga dodaje mesečnu kvotu od 6.000.000 zahteva (samo kartica).',
  'subs.keys.pro.p2':
    'Ako kupite sa potpuno novim emailom (bez prethodnog ključa), generiše se novi wyzie-... ključ i šalje vam se emailom.',

  'subs.keys.protect.h2': 'Čuvajte ključ dalje od klijenta',
  'subs.keys.protect.important':
    '**Nikada ne ugrađujte vaš API ključ u kod na strani klijenta.** Browser JavaScript, mobilne aplikacije, browser ekstenzije, Electron desktop aplikacije i javni Git repozitorijumi smatraju se stranama klijenta. Sve što isporučujete krajnjem korisniku može biti pregledano od strane njega, a videli smo stvarne slučajeve u kojima su korisnici nalépili ključ u frontend stranice za strimovanje, samo da bi treće lice skrejpovalo JS bundle i ispraznilo stanje zahteva za nekoliko sati. Kvota potrošena na ovaj način nije nadoknadiva.',
  'subs.keys.protect.p2':
    'Dva bezbedna načina za korišćenje ključa iz klijentske aplikacije:',
  'subs.keys.protect.option1':
    'Koristite [Wyzie Worker](https://github.com/wyziedevs/wyzie-worker): besplatni Cloudflare Worker proxy koji čuva vaš API ključ kao tajnu `NITRO_API_TOKEN`. Svaki poziv ka njemu mora da pošalje `Authorization: Bearer <NITRO_WORKER_KEY>`, drugu tajnu koju sami podešavate, pa klijenta usmerite kroz sopstveni backend i ključ workera takođe držite na strani servera.',
  'subs.keys.protect.option2':
    'Pokrenite sopstveni proxy: bilo koji backend endpoint koji dodaje ključ pre prosleđivanja na sub.wyzie.io funkcioniše. Pogledajte stranicu Uvod za primer od 10 linija.',
  'subs.keys.protect.devtools':
    'Ako se ključ pojavi u mrežnoj kartici u DevTools-u, on je izložen. Pretpostavite da je javan i zamenite ga na vašoj [kontrolnoj tabli](https://store.wyzie.io/dashboard).',

  'subs.keys.using.h2': 'Korišćenje vašeg ključa',
  'subs.keys.using.p': 'Dodajte &key=YOUR_KEY na svaki API zahtev:',
  'subs.keys.using.npm.h3': 'NPM paket',

  'subs.keys.limit.h2': 'Dostizanje limita',
  'subs.keys.limit.p':
    'Pretraga košta 1 zahtev i svako preuzimanje titla košta 1 zahtev, pa jedna pretraga i preuzimanje jednog fajla troše 2. AI prevod košta 100 zahteva po pozivu.',
  'subs.keys.limit.free':
    '**Besplatni nivo** iscrpljen -> pretrage i linkovi za preuzimanje vraćaju 429 Daily request limit reached, sa reset_at u JSON-u i zaglavljem Retry-After. Dnevni limit od 1.000 zahteva resetuje se u ponoć UTC.',
  'subs.keys.limit.paid':
    '**Plaćeno stanje** iscrpljeno -> pretrage i linkovi za preuzimanje vraćaju 402 sa linkom za dopunu u JSON-u. Dopunite na [store.wyzie.io/topup](https://store.wyzie.io/topup) ili aktivirajte **automatski top-up** na vašoj kontrolnoj tabli da se automatski dopunjava kada stanje pređe prag koji postavite.',
  'subs.keys.hold.p1':
    'Ključevi koji šalju veoma veliki obim zahteva, uglavnom sa IP adresa data centara ili hosting provajdera, automatski se pauziraju. Pauziran ključ dobija 403 Key on hold na svaki zahtev, sa linkom za ponovno aktiviranje (https://store.wyzie.io/verify) i linkom za podršku (https://store.wyzie.io/contact) u JSON-u.',
  'subs.keys.hold.p2':
    'Da biste odmah ponovo aktivirali ključ, verifikujte sajt na kom ga koristite na [store.wyzie.io/verify](https://store.wyzie.io/verify) pomoću DNS TXT zapisa ili meta taga. Ključ sa verifikovanim sajtom se više nikada ne pauzira automatski, pa posećeni sajtovi mogu da se verifikuju i pre nego što ikada budu pauzirani.',
  'subs.keys.hold.p3':
    'Nemate sajt, na primer koristite backend servis ili aplikaciju? [Kontaktirajte podršku](https://store.wyzie.io/contact) da bi vam ključ bio ponovo aktiviran.',

  'subs.keys.files.h2': 'Šta se nalazi u fajlovima',
  'subs.keys.files.adfilter':
    '**Filtriranje reklama** – iz svakog titla koji se isporučuje preko sub.wyzie.io uklanjaju se reklamne stavke provajdera (OpenSubtitles baneri, reklame za klađenje, redovi tipa "watch free at ..."). SRT stavke se prenumerišu tako da se ništa ne preskače. Svaki provajder, uključujući OpenSubtitles, isporučuje se preko sub.wyzie.io, pa se filter primenjuje na sve njih.',
  'subs.keys.files.promo':
    '**Besplatni i dev ključevi** dobijaju jednu kratku stavku na samom početku svakog fajla (0–6 s) koja upućuje na [store.wyzie.io](https://store.wyzie.io). Plaćeni ključevi dobijaju čiste fajlove bez te stavke.',

  'subs.keys.faq.h2': 'Česta pitanja',
  'subs.keys.faq.q1': 'Izgubio sam ključ. Mogu li dobiti novi?',
  'subs.keys.faq.a1':
    'Otvorite [kontrolnu tablu](https://store.wyzie.io/dashboard) i koristite "Forgot key" (zaboravljen ključ) sa vašim registrovanim emailom; ponovo ćemo vam poslati vaš postojeći ključ. Ako mislite da je ključ procureo, umesto toga ga zamenite na kontrolnoj tabli.',
  'subs.keys.faq.q2': 'Mogu li koristiti jedan ključ u više projekata?',
  'subs.keys.faq.a2': 'Da. Vaš ključ funkcioniše bilo gde gde pozivate API.',
  'subs.keys.faq.q3': 'Da li će moj ključ ikada isteći?',
  'subs.keys.faq.a3':
    'Ne. Besplatni i plaćeni ključevi nemaju rok isteka. Besplatni ključevi imaju dnevni limit; plaćeno stanje traje dok ga ne potrošite.',
  'subs.keys.faq.q4': 'Da li je automatski top-up bezbedan?',
  'subs.keys.faq.a4':
    'Vi postavljate mesečni limit potrošnje. Mi nikada ne naplaćujemo više od toga, a jednoklikovano onemogućavanje je u svakom emailu potvrde i na vašoj kontrolnoj tabli.',

  // Proxy Intro Page
  'proxy.intro.title': 'Uvod u Wyzie Proxy',
  'proxy.intro.note':
    'Produkciona verzija Wyzie Subs više ne koristi ovaj proxy, već umesto toga koristi [i6.shark](https://github.com/wyziedevs/i6.shark).',
  'proxy.intro.p1':
    'Wyzie Proxy je moćan proxy API koji vam omogućava da pravite zahteve prema bilo kom sajtu bez CORS ili drugih ograničenja. Pošto je Wyzie Proxy napravljen sa Nitro, može se hostovati na sledećim platformama: AWS Amplify, Azure, Cloudflare, Netlify, Stormkit, Vercel, Zeabur.',
  'proxy.intro.btn.hosting': 'Hostovanje',
  'proxy.intro.btn.check': 'Pogledajte',

  // Proxy Hosting Page
  'proxy.hosting.title': 'Hostovanje Wyzie Proxy-ja',
  'proxy.hosting.p1':
    'Izgradnja Wyzie Proxy-ja je lakša nego disanje, zahvaljujući Nitro-u. Najpre klonirajte repozitorijum Wyzie Proxy-ja koristeći:',
  'proxy.hosting.p2': 'Zatim instalirajte sve potrebne pakete sa:',
  'proxy.hosting.p3':
    'Nakon što su svi paketi instalirani, možete izgraditi proxy:',
  'proxy.hosting.p4':
    'Izlaz će biti generisan u folderu /.output/server. Ako postavljate na Cloudflare Workers, kopirajte i nalepite fajl index.mjs u worker; inače, fajlove možete postaviti normalno.',

  // i6.shark Intro Page
  'i6shark.intro.title': 'Uvod u i6.shark',
  'i6shark.intro.p1':
    'i6.shark je IPv6 proxy server koji vam omogućava da pravite HTTP zahteve sa nasumično generisanih IPv6 adresa u /48 podmreži. Ovo je proxy koji trenutno pokreće Wyzie Subs u produkciji.',
  'i6shark.intro.p2':
    '/48 podmreža ima 1.208.925.819.614.629.174.706.176 (1,2 x 10^24) IPv6 adresa, što je čini praktično nemogućom za blokiranje tradicionalnim IP banom. Korišćenje jedne podmreže znači da oni koji zaista žele da vas blokiraju mogu blokirati vašu ASN adresu, pa budite oprezni s tim.',
  'i6shark.intro.btn.hosting': 'Hostovanje',
  'i6shark.intro.btn.github': 'GitHub',

  'i6shark.intro.features.h2': 'Funkcionalnosti',
  'i6shark.intro.feature1':
    '**Nasumično generisanje IPv6**: Kreira nasumične IPv6 adrese iz vašeg /48 prefiksa za svaki zahtev',
  'i6shark.intro.feature2':
    '**Puna podrška za HTTP metode**: GET, POST, PUT, DELETE i sve ostale HTTP metode',
  'i6shark.intro.feature3':
    '**HMAC-SHA256 autentifikacija**: Bezbedna autentifikacija API ključa koristeći tokene zasnovane na user-agent-u',
  'i6shark.intro.feature4':
    '**Inteligentno upravljanje IP skupom**: Automatska rotacija IP adresa sa podesivom veličinom skupa. Pametno upravljanje životnim ciklusom IP adresa. Brojanje zahteva po IP adresi. Čišćenje nekorišćenih IP adresa na osnovu praga neaktivnosti.',
  'i6shark.intro.feature5':
    '**Napredno rukovanje zahtevima**: Prosleđivanje prilagođenih zaglavlja. Uklanjanje Cloudflare i CDN zaglavlja. Podrška za više formata URL parametara. Opcionalni povratak na podrazumevanu sistemsku IP adresu.',
  'i6shark.intro.feature6':
    '**Lista dozvoljenih hostova**: Ugrađena lista dozvoljenih domena za bezbednost (podesiva u kodu)',
  'i6shark.intro.feature7':
    '**Automatsko održavanje**: Periodično pražnjenje IP skupa. Validacija i čišćenje podmreže. Optimizacija connection pooling-a i keepalive-a.',
  'i6shark.intro.feature8':
    '**Visoke performanse**: Istovremeno rukovanje zahtevima sa buffer pooling-om. Podesivi timeout-i i limiti konekcija. Efikasno upravljanje IPv6 adresama.',
  'i6shark.intro.feature9':
    '**Debug režim**: Detaljno logovanje za rešavanje problema i praćenje',

  'i6shark.intro.requirements.h2': 'Zahtevi',
  'i6shark.intro.req1': 'Go 1.22 ili noviji',
  'i6shark.intro.req2':
    'Linux/Unix sistem sa IPv6 podrškom (preporučeno Ubuntu)',
  'i6shark.intro.req3':
    'Root privilegije (za vezivanje porta 80 i manipulaciju IPv6)',
  'i6shark.intro.req4':
    'Alokacija IPv6 /48 podmreže od vašeg hosting provajdera',

  'i6shark.intro.providers.h2': 'Hosting provajderi',
  'i6shark.intro.providers.p1':
    'Sledeći provajderi su poznati po tome što nude /48 IPv6 podmreže:',

  // i6.shark Hosting Page
  'i6shark.hosting.title': 'Hostovanje i6.shark',
  'i6shark.hosting.p1':
    'Postavljanje i6.shark-a zahteva VPS sa /48 IPv6 podmrežom. Jednom konfigurisan, radi autonomno uz minimalno održavanje.',

  'i6shark.hosting.steps.h2': 'Koraci',
  'i6shark.hosting.step1': 'Klonirajte repozitorijum u /opt/i6.shark:',
  'i6shark.hosting.step2': 'Konfigurišite konstante u src/consts.go:',
  'i6shark.hosting.step2.note':
    'Ažurirajte SharedSecret, IPv6Prefix i Interface da odgovaraju vašem serveru. Preostale konstante za podešavanje imaju razumne podrazumevane vrednosti i obično ne zahtevaju izmene.',
  'i6shark.hosting.step3': 'Izgradite aplikaciju:',
  'i6shark.hosting.step4': 'Kreirajte systemd servis:',
  'i6shark.hosting.step5': 'Omogućite i pokrenite servis:',
  'i6shark.hosting.step5.check': 'Proverite status:',
  'i6shark.hosting.post':
    'Proxy server će sada automatski raditi pri pokretanju i restartovati se ako se sruši.',

  'i6shark.hosting.daily.h2': 'Dnevni restart (opciono)',
  'i6shark.hosting.daily.p':
    'Dodajte cron zadatak za dnevni restart servera u nasumično vreme:',

  'i6shark.hosting.auth.h2': 'API autentifikacija',
  'i6shark.hosting.auth.p':
    'API tokeni se generišu korišćenjem HMAC-SHA256 sa deljenim tajnim ključem. Ulaz za generisanje ključa je user-agent zaglavlje. Pogledajte funkciju validateAPIToken u izvornom kodu za detalje implementacije.',

  // Plugins
  'plugins.common.required': 'Obavezno',

  'plugins.index.intro':
    'Wyzie Subs se direktno povezuje sa medijskim aplikacijama koje već koristite. Svaki dodatak komunicira sa istim `https://sub.wyzie.io/search` endpointom i zahteva besplatan **Wyzie API ključ**. Preuzmite ga na [store.wyzie.io](https://store.wyzie.io/#plans).',
  'plugins.index.tbl.stremio.for':
    'Gledanje u Stremio na računaru, mobilnom uređaju ili TV-u',
  'plugins.index.tbl.stremio.install':
    'Hostovani dodatak: nalepite svoj ključ, kliknite Instaliraj',
  'plugins.index.tbl.bazarr.for':
    'Plex, Jellyfin, Emby, Sonarr, Radarr biblioteke',
  'plugins.index.tbl.bazarr.install':
    'Drop-in provajder za vašu Bazarr instancu',
  'plugins.index.tbl.kodi.for': 'Kodi 19+, LibreELEC, CoreELEC',
  'plugins.index.tbl.kodi.install':
    'Instalirajte iz zip-a ili Wyzie repozitorijuma',
  'plugins.index.use.stremio':
    'Koristite **Stremio** ako gledate unutar Stremio aplikacije.',
  'plugins.index.use.bazarr':
    'Koristite **Bazarr** ako koristite Plex, Jellyfin ili Emby. Bazarr preuzima datoteke titlova na disk, a vaš medijski server ih automatski preuzima. Ovo je takođe preporučeni put za Plex i Jellyfin; ne postoji poseban nativni dodatak.',
  'plugins.index.use.kodi':
    'Koristite **Kodi** za Kodi-nativni servis titlova na Android TV-u, Raspberry Pi-ju ili kućnom bioskopu (HTPC).',
  'plugins.index.shared.sources':
    '**Izvori:** svaki izvor koji vaš ključ može da koristi (`source=all`): charlie i lima uz besplatni ključ, svih sedam uz Pro ključ.',
  'plugins.index.shared.matching':
    '**Uparivanje:** Wyzie se pokreće pomoću IMDB i TMDB ID-jeva plus sezone i epizode, tako da su uparivanja precizna i za filmove i za serije.',
  'plugins.index.shared.quota':
    '**Kvota:** kada vašem ključu ponestane, dodatak prikazuje prijateljski podsetnik sa linkom ka [store.wyzie.io](https://store.wyzie.io) umesto da tiho zakaže. Dopunite ili se pretplatite i ponovo ste spremni za rad.',
  'plugins.index.shared.languages': '**Jezici:** 100+, izbor po dodatku.',
  'plugins.index.outro':
    'Izaberite svoju platformu iznad da biste počeli. Izvorni kod svakog dodatka nalazi se u [wyzie-plugins repozitorijumu](https://github.com/wyziedevs/wyzie-plugins).',

  'plugins.stremio.intro':
    'Dodatak za titlove za [Stremio](https://www.stremio.com/) sa instalacijom u jednom kliku. Pretražuje svaki Wyzie izvor koji vaš ključ može da koristi i radi i za filmove i za serije, na svakoj platformi na kojoj Stremio radi.',
  'plugins.stremio.before':
    'Potreban vam je besplatan Wyzie API ključ. Preuzmite ga na [store.wyzie.io/redeem](https://store.wyzie.io/redeem), ili kupite Pro ključ ili se pretplatite na [store.wyzie.io](https://store.wyzie.io/#plans).',
  'plugins.stremio.install.1':
    'Otvorite [stremio.wyzie.io/configure](https://stremio.wyzie.io/configure).',
  'plugins.stremio.install.2': 'Nalepite svoj **API ključ**.',
  'plugins.stremio.install.3':
    'Opciono: unesite željene **jezike** kao ISO 639-1 kodove, razdvojene zarezima (na primer `en,es,fr`). Ostavite prazno za sve jezike.',
  'plugins.stremio.install.4':
    'Opciono: uključite opciju **osobe oštećenog sluha** da biste dobijali samo titlove za osobe oštećenog sluha. Ostavite je isključenu da biste videli sve; dok je uključena, izvori koji ne označavaju titlove za osobe oštećenog sluha ne vraćaju ništa.',
  'plugins.stremio.install.5':
    'Kliknite **Instaliraj**. Stremio se otvara i traži da potvrdite; prihvatite i gotovi ste.',
  'plugins.stremio.install.after':
    'Vaš ključ i podešavanja su kodirani u dodatak, tako da nema ničeg drugog za podešavanje. Otvorite bilo koji film ili epizodu i izaberite titl sa liste.',
  'plugins.stremio.cfg.key.f': 'API ključ',
  'plugins.stremio.cfg.key.d': 'Vaš Wyzie ključ. Obavezno.',
  'plugins.stremio.cfg.langs.f': 'Jezici',
  'plugins.stremio.cfg.langs.d':
    'ISO 639-1 kodovi, razdvojeni zarezima. Prazno znači svi jezici.',
  'plugins.stremio.cfg.hi.f': 'Osobe oštećenog sluha',
  'plugins.stremio.cfg.hi.d':
    'Vraćaj samo titlove za osobe oštećenog sluha (šalje hi=true). Podrazumevano isključeno.',
  'plugins.stremio.cfg.note':
    'Da biste kasnije promenili bilo šta od ovoga, ponovo otvorite [stremio.wyzie.io/configure](https://stremio.wyzie.io/configure), prilagodite i ponovo instalirajte.',
  'plugins.stremio.local':
    'Zatim otvorite `http://127.0.0.1:7000/configure`, nalepite svoj ključ i instalirajte u Stremio.',
  'plugins.stremio.quota':
    'Ako vaš ključ dostigne svoj limit, dodatak prikazuje jednu stavku titla sa linkom ka [store.wyzie.io](https://store.wyzie.io) kako biste mogli da dopunite ili se pretplatite. Kada to uradite, titlovi se odmah vraćaju.',
  'plugins.stremio.ts.none':
    '**Nema titlova.** Uverite se da naslov ima IMDB ID u Stremio (većina stavki kataloga ima) i da izabrani jezici zaista imaju titlove za taj naslov. Pokušajte da obrišete filter jezika da biste videli sve.',
  'plugins.stremio.ts.key':
    '**Nevažeći ključ ili se ništa ne učitava.** Ponovo otvorite stranicu za podešavanje i ponovo nalepite svoj ključ; suvišan razmak ga kvari. Potvrdite da ključ radi na [store.wyzie.io/dashboard](https://store.wyzie.io/dashboard).',
  'plugins.stremio.ts.episode':
    '**Epizoda serije se ne uparuje.** Wyzie uparuje po sezoni i epizodi; uverite se da Stremio reprodukuje ispravnu stavku epizode, a ne generičku stranicu serije.',

  'plugins.bazarr.intro':
    '[Bazarr](https://www.bazarr.media/) upravlja titlovima za **Plex, Jellyfin, Emby, Sonarr i Radarr** na jednom mestu. Dodavanje Wyzie kao provajdera daje svim tim serverima pristup svakom Wyzie izvoru koji vaš ključ može da koristi, kroz jedan ključ.',
  'plugins.bazarr.note':
    'Ovo je preporučeni način korišćenja Wyzie sa Plex i Jellyfin. Bazarr preuzima datoteke titlova pored vaših medija, a vaš server ih automatski preuzima, tako da nije potreban poseban nativni dodatak.',
  'plugins.bazarr.before':
    'Preuzmite besplatan Wyzie API ključ na [store.wyzie.io/redeem](https://store.wyzie.io/redeem) i obezbedite pristup datotekama vaše Bazarr instalacije (tipična Docker putanja: `/opt/bazarr/bazarr/`).',
  'plugins.bazarr.install.1':
    'Preuzmite [bazarr/wyzie.py](https://github.com/wyziedevs/wyzie-plugins/blob/main/bazarr/wyzie.py) iz [wyzie-plugins repozitorijuma](https://github.com/wyziedevs/wyzie-plugins) (ili `git clone https://github.com/wyziedevs/wyzie-plugins.git`) i kopirajte ga u `bazarr/subliminal_patch/providers/wyzie.py`.',
  'plugins.bazarr.install.2':
    'Izmenite `bazarr/subliminal_patch/extensions.py` i dodajte `wyzie` u **oba** `provider_registry` i `provider_manager`.',
  'plugins.bazarr.install.3':
    'Izmenite `bazarr/list_subtitles.py` (ili `bazarr/config.py`, u zavisnosti od vaše verzije) da biste izložili podešavanja `api_key`, `prefer_hi` i `sources`. Kopirajte obrazac iz postojećeg provajdera kao što je `opensubtitlescom`.',
  'plugins.bazarr.install.4': 'Restartujte Bazarr.',
  'plugins.bazarr.install.5':
    'Idite na **Settings, Providers, Wyzie**, nalepite svoj API ključ i sačuvajte.',
  'plugins.bazarr.install.after':
    'Planiran je prvoklasan pull request koji ovog provajdera uvodi uzvodno u Bazarr. Do tada je to drop-in datoteka koju dodajete u sopstvenu instalaciju.',
  'plugins.bazarr.cfg.key': 'Vaš Wyzie ključ. Obavezno.',
  'plugins.bazarr.cfg.hi':
    'Vraćaj samo titlove za osobe oštećenog sluha (šalje hi=true).',
  'plugins.bazarr.cfg.sources':
    'Lista provajdera za upit razdvojena zarezima, ili `all`.',
  'plugins.bazarr.quota.402':
    '**402 ili 429** (prazan saldo ili dostignut dnevni limit): Bazarr beleži napomenu sa linkom ka [store.wyzie.io](https://store.wyzie.io) i ne vraća rezultate, tako da se čisto vraća na vaše druge provajdere. Ništa se ne ruši.',
  'plugins.bazarr.quota.401':
    '**401** (ključ nedostaje) ili **403** (nepoznat ključ ili pauziran ključ): Bazarr prikazuje grešku autentifikacije kako biste znali da treba da proverite ili ponovo unesete ključ.',
  'plugins.bazarr.ts.missing':
    '**Wyzie se ne pojavljuje na listi provajdera.** Ponovo proverite korak instalacije koji izmenjuje `extensions.py`; stavka mora biti u oba `provider_registry` i `provider_manager`, zatim restartujte Bazarr.',
  'plugins.bazarr.ts.none':
    '**Nisu pronađeni titlovi.** Potvrdite da stavka ima IMDB ID u Bazarr i da jezici koje ste omogućili imaju titlove za nju. Sužavajte `sources` samo ako to namerno želite.',
  'plugins.bazarr.ts.settings':
    '**Polja podešavanja nedostaju.** Korak podešavanja nije primenjen za vašu verziju Bazarr; uporedite sa blokom podešavanja provajdera koji radi i restartujte.',

  'plugins.kodi.intro':
    'Servis titlova za **Kodi 19+ (Matrix i noviji)**, LibreELEC i CoreELEC. Koristi standardnu Kodi tačku proširenja `xbmc.subtitle.module`, tako da se pojavljuje svuda gde Kodi traži titlove.',
  'plugins.kodi.before':
    'Preuzmite besplatan Wyzie API ključ na [store.wyzie.io/redeem](https://store.wyzie.io/redeem).',
  'plugins.kodi.repo.intro':
    'Jednokratna instalacija repozitorijuma omogućava Kodi da za vas **automatski ažurira** dodatak.',
  'plugins.kodi.repo.1':
    'Preuzmite instalater repozitorijuma: [**repository.wyzie.zip**](https://kodi.wyzie.io/repository.wyzie.zip).',
  'plugins.kodi.repo.2':
    'U Kodi: **Settings, Add-ons, Install from zip file**, zatim izaberite `repository.wyzie.zip`. Ako ga Kodi blokira, prvo omogućite **Settings, System, Add-ons, Unknown sources**.',
  'plugins.kodi.repo.3':
    '**Settings, Add-ons, Install from repository, Wyzie Repository, Subtitle services, Wyzie Subs, Install.**',
  'plugins.kodi.repo.4':
    '**Settings, Player, Language, Default subtitle service**, zatim izaberite **Wyzie Subs**.',
  'plugins.kodi.repo.5':
    'Otvorite podešavanja Wyzie Subs dodatka i nalepite svoj **API ključ**.',
  'plugins.kodi.zip.intro':
    'Koristite ovo ako radije ne biste dodavali repozitorijum. Napomena: zip instalacija se **ne** ažurira automatski.',
  'plugins.kodi.zip.1':
    'Preuzmite zip dodatka: `service.subtitles.wyzie-<version>.zip`. Da biste ga sami napravili, klonirajte [wyzie-plugins repozitorijum](https://github.com/wyziedevs/wyzie-plugins) (`git clone https://github.com/wyziedevs/wyzie-plugins.git`) i zipujte njegov `kodi/` folder tako da zip sadrži `addon.xml` u svom korenu.',
  'plugins.kodi.zip.2':
    'U Kodi: **Settings, Add-ons, Install from zip file**, zatim izaberite zip. Ako ga Kodi blokira, prvo omogućite **Settings, System, Add-ons, Unknown sources**.',
  'plugins.kodi.zip.3':
    '**Settings, Player, Language, Default subtitle service**, zatim izaberite **Wyzie Subs**.',
  'plugins.kodi.zip.4':
    'Otvorite podešavanja Wyzie Subs dodatka i nalepite svoj **API ključ**.',
  'plugins.kodi.cfg.key': 'Vaš Wyzie ključ. Obavezno.',
  'plugins.kodi.cfg.hi':
    'Vraćaj samo titlove za osobe oštećenog sluha (šalje hi=true).',
  'plugins.kodi.cfg.langs':
    'Jezici se preuzimaju iz Kodi izabranih jezika titlova i automatski mapiraju na ISO 639-1.',
  'plugins.kodi.matching.1':
    'Dok se nešto reprodukuje, Kodi izlaže IMDB broj, sezonu i epizodu. Dodatak ih čita, šalje upit na `sub.wyzie.io/search` i vraća odgovarajuće titlove. Pošto je Wyzie pokretan ID-jevima (IMDB i TMDB), uparivanja su tačna i za filmove i za serije.',
  'plugins.kodi.matching.2':
    '**Ručna pretraga** trenutno prikazuje obaveštenje i ne radi ništa, jer Wyzie uparuje po ID-jevima, a ne po naslovima. Pretraga naslov-u-ID je na planu razvoja. Za sada, pustite Kodi da pretražuje automatski tokom reprodukcije.',
  'plugins.kodi.quota':
    'Odgovor 402 ili 429 prikazuje Kodi toast obaveštenje koje vas upućuje na [store.wyzie.io](https://store.wyzie.io) da dopunite ili se pretplatite.',
  'plugins.kodi.ts.notoffered':
    '**Wyzie se ne nudi tokom reprodukcije.** Potvrdite da je postavljen kao **Default subtitle service** i da reprodukovana stavka ima IMDB ID.',
  'plugins.kodi.ts.key':
    '**Nevažeći ključ.** Ponovo otvorite podešavanja dodatka i ponovo nalepite svoj ključ.',
  'plugins.kodi.ts.episode':
    '**Ništa za epizodu.** Uverite se da Kodi ima ispravne metapodatke o sezoni i epizodi za datoteku; skenirane stavke biblioteke najbolje funkcionišu.',
};

export default messages;
