const messages: Record<string, string> = {
  // Navigation
  'nav.language': 'Jezik',

  // Index / Landing Page
  'index.subtitle':
    'Wyzie je skup alata otvorenog koda za pretragu titlova i svega što uz to ide.',
  'index.cta.start': 'Počnite',
  'index.cta.store': 'Pogledajte',

  'index.card.keys.title': 'Besplatni API ključevi',
  'index.card.keys.body':
    'Preuzmite besplatni API ključ na store.wyzie.io/redeem uz brzu Gmail verifikaciju. 1.000 zahteva dnevno bez naknade. Dostupni su plaćeni planovi za veće korišćenje.',

  'index.card.ai.title': 'AI prevod',
  'index.card.ai.body':
    'Prevedite bilo koji titl na 80+ jezika po zahtevu. Prenosi se stavka po stavka tako da reprodukcija može početi za nekoliko sekundi. Dostupno na Pro ključevima.',

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
    'Wyzie Subs je besplatni API otvorenog koda za preuzimanje titlova. Postoje dva načina za slanje zahteva API-ju: korišćenjem našeg NPM paketa ili direktnim pozivanjem Wyzie API-ja. Preporučujem korišćenje našeg paketa, mada nekima tipovi mogu izgledati glomazno. Da biste koristili API, najpre morate doneti tu odluku.',
  'subs.intro.note.ai':
    'AI prevod je aktivan za Pro ključeve. Bilo koji naslov, 80+ ciljnih jezika, streamed u realnom vremenu dok prevodilac radi.',
  'subs.intro.important.apikey':
    'API ključ je obavezan za sve zahteve. Nabavite besplatni ključ na [store.wyzie.io/redeem](https://store.wyzie.io/redeem) (Gmail verifikacija, 1.000 zahteva dnevno). Za veće korišćenje dostupni su [Pro i top-up planovi](https://store.wyzie.io). Pogledajte stranicu API ključevi za detalje.',
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
    'Wyzie Worker je lagani Cloudflare Worker proxy koji ubacuje vaš API ključ na strani servera. Postavite ga na Cloudflare Workers i postavite ključ kao promenljivu okruženja NITRO_API_TOKEN. Zatim usmerite zahteve klijenta na URL vašeg workera umesto na sub.wyzie.io — worker ih prosleđuje sa vašim ključem.',
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
    'Podrazumevani izvor je opensubtitles ako nije navedeno drugačije',
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
    'Nije skrejper. AI-prevedeni SRT koji se generiše po zahtevu od najboljeg dostupnog izvornog titla. Pogledajte vodič za AI prevod za sve detalje.',
  'subs.sources.ai.content': 'Sve za šta Wyzie može pronaći SRT',
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
    'Boolean za titlove prilagođene osobama oštećenog sluha.',
  'subs.pkg.param.source':
    'Provajderi titlova za upit (all za svaki aktivni izvor).',
  'subs.pkg.param.release': 'Filtri za release/scene (prihvata listu).',
  'subs.pkg.param.filename':
    'Filtri za naziv fajla; pseudonimi file i fileName su podržani.',
  'subs.pkg.param.origin': 'Filter porekla sadržaja (npr. WEB, BLURAY, DVD).',
  'subs.pkg.param.key':
    'Vaš API ključ (obavezno). Nabavite besplatno na store.wyzie.io/redeem.',
  'subs.pkg.param.refresh':
    'Zaobiđite keš i preuzmite sveže rezultate iz izvora.',

  'subs.pkg.helpers':
    'Paket takođe dolazi sa laganim TMDB pomoćnim funkcijama: searchTmdb, getTvDetails i getSeasonDetails za brzo pronalaženje ID-ova pre pozivanja /search. Pored toga, getSources se može koristiti za preuzimanje liste trenutno aktivnih izvora titlova.',
  'subs.pkg.types.h3': 'Tipovi',
  'subs.pkg.type.search': 'Svi validni parametri koje API prepoznaje.',
  'subs.pkg.type.query':
    'Svi parametri (opcioni i obavezni) dostupni za wyzie-subs API.',
  'subs.pkg.type.subtitle':
    'Sve vraćene vrednosti iz API-ja sa njihovim odgovarajućim tipovima.',
  'subs.pkg.type.sources': 'Tip odgovora sa /sources endpointa.',
  'subs.pkg.types.end':
    'Naši tipovi su vrlo jednostavni i dobro dokumentovani. Pogledajte fajl types.ts u GitHub repozitorijumu.',
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
    'Da li preferirati titlove prilagođene osobama oštećenog sluha.',
  'subs.direct.param.encoding': 'Filter kodiranja znakova.',
  'subs.direct.param.source':
    'Provajderi titlova za upit (all upituje svaki aktivni izvor; podrazumevano opensubtitles).',
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
  'subs.direct.important.imdb':
    "Kada koristite IMDB ID, obavezno uključite prva dva znaka ('tt') na početku ID-a.",

  'subs.direct.data.h3': 'Vraćeni podaci',
  'subs.direct.data.id': 'ID fajla titla.',
  'subs.direct.data.url': 'URL do fajla titla.',
  'subs.direct.data.flagUrl': 'URL do zastave lokala jezika.',
  'subs.direct.data.format': 'Format fajla titla.',
  'subs.direct.data.encoding': 'Kodiranje znakova fajla titla.',
  'subs.direct.data.display': 'Jezik titla, napisano velikim početnim slovom.',
  'subs.direct.data.language': 'ISO 3166-2 kod jezika.',
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

  // Subs Translate Page
  'subs.translate.title': 'AI prevod titlova',
  'subs.translate.important':
    'AI prevod je **Pro funkcija**. Svaki prevod košta **100 zahteva** iz stanja vašeg ključa, naplaćuje se i na pogodak keša i na sveži prevod. Besplatni ključevi ga ne mogu koristiti.',
  'subs.translate.p1':
    'Wyzie može prevesti bilo koji titl na 80+ jezika u hodu. Prevodi se streamuju dok ih model generiše, tako da reprodukcija može početi za sekund-dva umesto da se čeka ceo fajl. Rezultati se kešuju 30 dana, tako da druga osoba koja zatraži isti prevod dobija ga trenutno.',

  'subs.translate.ways.h2': 'Dva načina korišćenja',
  'subs.translate.way1.h3': '1. Izaberite jezik iz odgovora pretrage',
  'subs.translate.way1.p1':
    'Svaki /search odgovor sada uključuje jedan dodatni unos po podržanom jeziku sa "ai": true i url koji pokazuje na /translate. Samo tretirajte AI redove kao bilo koji drugi red titla u vašem UI-ju: kada korisnik klikne na jedan, preuzmite URL.',
  'subs.translate.way1.filter':
    'Ako želite da sakrijete AI redove iz vašeg UI-ja, filtrirajte ih:',
  'subs.translate.way2.h3': '2. Direktno pozovite /translate',

  'subs.translate.param.id': 'TMDB ili IMDB ID (obavezno).',
  'subs.translate.param.target':
    'Ciljni jezik kao puni engleski naziv (npr. Spanish, Japanese, Brazilian Portuguese) (obavezno).',
  'subs.translate.param.seasonEpisode':
    'Za TV serije. Oba moraju biti prisutna zajedno.',
  'subs.translate.param.key':
    'Vaš API ključ. Koristite tk umesto toga ako ste dobili URL iz /search.',
  'subs.translate.param.tk':
    'Potpisani token koji vraća /search. Ekvivalent ključu, ali ne izlaže sirov ključ.',

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
    'Wyzie pretražuje normalne izvore za SRT titl, preferirajući engleski kada je dostupan.',
  'subs.translate.how.step2':
    'SRT se deli na delove od 50 stavki i prevodi sekvencijalno. Svaki deo se kešuje pojedinačno čim se završi.',
  'subs.translate.how.step3':
    'Izlaz se streamuje nazad stavka po stavka. Plejeri koji prihvataju SRT telo u streamingu mogu početi da prikazuju prve redove pre nego što se ostali završe.',
  'subs.translate.how.step4':
    'Kompletan prevod se kešuje u Redis-u na 30 dana, sa ključem po id, season, episode i target.',

  'subs.translate.languages.h2': 'Podržani ciljni jezici',
  'subs.translate.languages.p':
    '80+ jezika uključujući sve major evropske, azijske, afričke i bliskoistočne jezike. Prosledite engleski naziv (Spanish, ne es). Lista se takođe vraća kao ai: true redovi u bilo kom /search odgovoru, što je kanonički izvor istine.',

  'subs.translate.limitations.h2': 'Ograničenja',
  'subs.translate.limit1':
    'AI prevod zahteva SRT izvor. Naslovi gde je svaki dostupni titl .ass, .vtt ili drugi format vratiće 404 No SRT found.',
  'subs.translate.limit2':
    'Kvalitet prevoda zavisi od izvornog titla. Loše vremenski usklađen ili pogrešno otkucan izvor rezultira loše vremenski usklađenim ili pogrešno otkucanim prevodom.',
  'subs.translate.limit3':
    'Neki korisnici možda žele da u potpunosti isključe AI redove. Filtrirajte po ai === false u vašem klijentu.',
  'subs.translate.limit4':
    'Prevodi se naplaćuju i na pogodke keša. Bez obzira na to da li je sveže generisan ili isporučen iz 30-dnevnog keša, svaki /translate zahtev košta 100 zahteva.',

  // Subs API Keys Page
  'subs.keys.title': 'API ključevi',
  'subs.keys.p1':
    'Wyzie Subs zahteva API ključ za sve zahteve. Besplatni nivo pokriva većinu slučajeva upotrebe; plaćeni planovi su namenjeni intenzivnijem korišćenju.',

  'subs.keys.tiers.h2': 'Nivoi',
  'subs.keys.tier.free': 'Besplatno (Gmail obavezan)',
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
    'Unesite Gmail adresu (samo Gmail je prihvaćen za besplatni nivo).',
  'subs.keys.free.step3': 'Unesite 6-cifreni kod koji vam pošaljemo emailom.',
  'subs.keys.free.step4':
    'Dobijate API ključ koji izgleda ovako: wyzie-abc123...',
  'subs.keys.free.gmail':
    'Svaka Gmail adresa može iskoristiti samo jedan besplatni ključ. Već ste imali besplatni ključ vezan za tu adresu? Ponovna verifikacija samo vraća vaš postojeći ključ.',

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
    'Koristite [Wyzie Worker](https://github.com/wyziedevs/wyzie-worker): besplatni Cloudflare Worker proxy koji čuva vaš ključ na strani servera. Usmerite klijenta na Worker URL umesto na sub.wyzie.io.',
  'subs.keys.protect.option2':
    'Pokrenite sopstveni proxy: bilo koji backend endpoint koji dodaje ključ pre prosleđivanja na sub.wyzie.io funkcioniše. Pogledajte stranicu Uvod za primer od 10 linija.',
  'subs.keys.protect.devtools':
    'Ako se ključ pojavi u mrežnoj kartici u DevTools-u, on je izložen. Pretpostavite da je javan i zamenite ga slanjem emaila podršci.',

  'subs.keys.using.h2': 'Korišćenje vašeg ključa',
  'subs.keys.using.p': 'Dodajte &key=YOUR_KEY na svaki API zahtev:',
  'subs.keys.using.npm.h3': 'NPM paket',

  'subs.keys.limit.h2': 'Dostizanje limita',
  'subs.keys.limit.free':
    '**Besplatni nivo** iscrpljen -> API vraća 429 sa X-RateLimit-Reset i Retry-After zaglavljima. Dnevni brojač se resetuje u ponoć UTC.',
  'subs.keys.limit.paid':
    '**Plaćeno stanje** iscrpljeno -> API vraća 402. Dopunite na [store.wyzie.io/topup](https://store.wyzie.io/topup) ili aktivirajte **automatski top-up** na vašoj kontrolnoj tabli da se automatski dopunjava kada stanje pređe prag koji postavite.',

  'subs.keys.faq.h2': 'Česta pitanja',
  'subs.keys.faq.q1': 'Izgubio sam ključ. Mogu li dobiti novi?',
  'subs.keys.faq.a1':
    'Posetite [store.wyzie.io](https://store.wyzie.io) i koristite tok "zaboravljen ključ" sa vašim registrovanim emailom; ponovo ćemo vam poslati vaš postojeći ključ.',
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
  'i6shark.intro.req1': 'Go 1.20 ili noviji',
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
    '**Izvori:** OpenSubtitles, SubDL i Podnapisi, objedinjeni kroz Wyzie.',
  'plugins.index.shared.matching':
    '**Uparivanje:** Wyzie se pokreće pomoću IMDB i TMDB ID-jeva plus sezone i epizode, tako da su uparivanja precizna i za filmove i za serije.',
  'plugins.index.shared.quota':
    '**Kvota:** kada vašem ključu ponestane, dodatak prikazuje prijateljski podsetnik sa linkom ka [store.wyzie.io](https://store.wyzie.io) umesto da tiho zakaže. Dopunite ili se pretplatite i ponovo ste spremni za rad.',
  'plugins.index.shared.languages': '**Jezici:** 100+, izbor po dodatku.',
  'plugins.index.outro': 'Izaberite svoju platformu iznad da biste počeli.',

  'plugins.stremio.intro':
    'Dodatak za titlove za [Stremio](https://www.stremio.com/) sa instalacijom u jednom kliku. Objedinjuje OpenSubtitles, SubDL i Podnapisi kroz Wyzie i radi i za filmove i za serije, na svakoj platformi na kojoj Stremio radi.',
  'plugins.stremio.before':
    'Potreban vam je besplatan Wyzie API ključ. Preuzmite ga na [store.wyzie.io/redeem](https://store.wyzie.io/redeem), ili kupite Pro ključ ili se pretplatite na [store.wyzie.io](https://store.wyzie.io/#plans).',
  'plugins.stremio.install.1':
    'Otvorite [stremio.wyzie.io/configure](https://stremio.wyzie.io/configure).',
  'plugins.stremio.install.2': 'Nalepite svoj **API ključ**.',
  'plugins.stremio.install.3':
    'Opciono: unesite željene **jezike** kao ISO 639-1 kodove, razdvojene zarezima (na primer `en,es,fr`). Ostavite prazno za sve jezike.',
  'plugins.stremio.install.4':
    'Opciono: uključite titlove za **osobe oštećenog sluha** ako ih preferirate.',
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
    'Preferiraj titlove za osobe oštećenog sluha kada su dostupni.',
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
    '[Bazarr](https://www.bazarr.media/) upravlja titlovima za **Plex, Jellyfin, Emby, Sonarr i Radarr** na jednom mestu. Dodavanje Wyzie kao provajdera daje svim tim serverima pristup OpenSubtitles, SubDL i Podnapisi kroz jedan ključ.',
  'plugins.bazarr.note':
    'Ovo je preporučeni način korišćenja Wyzie sa Plex i Jellyfin. Bazarr preuzima datoteke titlova pored vaših medija, a vaš server ih automatski preuzima, tako da nije potreban poseban nativni dodatak.',
  'plugins.bazarr.before':
    'Preuzmite besplatan Wyzie API ključ na [store.wyzie.io/redeem](https://store.wyzie.io/redeem) i obezbedite pristup datotekama vaše Bazarr instalacije (tipična Docker putanja: `/opt/bazarr/bazarr/`).',
  'plugins.bazarr.install.1':
    'Kopirajte `wyzie.py` u `bazarr/subliminal_patch/providers/wyzie.py`.',
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
  'plugins.bazarr.cfg.hi': 'Preferiraj titlove za osobe oštećenog sluha.',
  'plugins.bazarr.cfg.sources':
    'Lista provajdera za upit razdvojena zarezima, ili `all`.',
  'plugins.bazarr.quota.402':
    '**402 ili 429** (prazan saldo ili dostignut dnevni limit): Bazarr beleži napomenu sa linkom ka [store.wyzie.io](https://store.wyzie.io) i ne vraća rezultate, tako da se čisto vraća na vaše druge provajdere. Ništa se ne ruši.',
  'plugins.bazarr.quota.401':
    '**401** (loš ključ): Bazarr prikazuje grešku autentifikacije kako biste znali da treba ponovo da unesete ključ.',
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
    'Preuzmite zip dodatka: `service.subtitles.wyzie-<version>.zip`. Ako imate izvorni kod, zipujte `kodi/` folder tako da zip sadrži `addon.xml` u svom korenu.',
  'plugins.kodi.zip.2':
    'U Kodi: **Settings, Add-ons, Install from zip file**, zatim izaberite zip. Ako ga Kodi blokira, prvo omogućite **Settings, System, Add-ons, Unknown sources**.',
  'plugins.kodi.zip.3':
    '**Settings, Player, Language, Default subtitle service**, zatim izaberite **Wyzie Subs**.',
  'plugins.kodi.zip.4':
    'Otvorite podešavanja Wyzie Subs dodatka i nalepite svoj **API ključ**.',
  'plugins.kodi.cfg.key': 'Vaš Wyzie ključ. Obavezno.',
  'plugins.kodi.cfg.hi': 'Preferiraj titlove za osobe oštećenog sluha.',
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
