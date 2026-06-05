const messages: Record<string, string> = {
  // Navigation
  'nav.language': 'Lingua',

  // Index / Landing Page
  'index.subtitle':
    'Wyzie è un insieme di strumenti open-source per il recupero di sottotitoli e tutto ciò che ne deriva.',
  'index.cta.start': 'Inizia',
  'index.cta.store': "Dai un'occhiata",

  'index.card.keys.title': 'Chiavi API Gratuite',
  'index.card.keys.body':
    'Ottieni una chiave API gratuita su store.wyzie.io/redeem con una rapida verifica Gmail. 1.000 richieste/giorno senza costi. Piani a pagamento disponibili per utilizzi più intensi.',

  'index.card.ai.title': 'Traduzione AI',
  'index.card.ai.body':
    'Traduci qualsiasi sottotitolo in 80+ lingue su richiesta. Trasmette cue per cue così la riproduzione può iniziare in pochi secondi. Disponibile con chiavi Pro.',

  'index.card.reliable.title': 'Affidabile',
  'index.card.reliable.body':
    'Andiamo fieri del nostro uptime costante e degli aggiornamenti (quasi) giornalieri, oltre che della cache veloce.',

  'index.card.simple.title': 'Semplicità Ridefinita',
  'index.card.simple.body':
    'Facile da implementare, facile da usare. Wyzie è progettato per essere il più semplice possibile.',

  // Donate Page
  'donate.title': 'Per favore Dona',
  'donate.body':
    "Ciao utente, Wyzie dipende in parte dalle donazioni (che ricevo raramente) e io ho 16 anni con un lavoro part-time, e a volte il costo per gestire l'API pubblica supera i 100$ al mese. Non posso continuare a supportare questo progetto senza aiuto esterno, me ne scuso sinceramente, ma questo progetto è cresciuto oltre quello che originariamente potevo sostenere di tasca mia.",
  'donate.cta': 'Supporta Wyzie',

  // Subs Intro Page
  'subs.intro.title': 'Introduzione a Wyzie Subs',
  'subs.intro.p1':
    "Wyzie Subs è un'API gratuita e libera per il recupero di sottotitoli open-source. Ci sono due modi per fare richieste all'API: usando il nostro pacchetto NPM o recuperando direttamente l'API di Wyzie. Consiglio di usare il nostro pacchetto, ma alcuni potrebbero trovare i tipi scomodi. Per utilizzare l'API, devi prima prendere questa decisione.",
  'subs.intro.note.ai':
    'La Traduzione AI è attiva per le chiavi Pro. Qualsiasi titolo, 80+ lingue di destinazione, trasmessa mentre il traduttore lavora.',
  'subs.intro.important.apikey':
    'Una chiave API è richiesta per tutte le richieste. Ottieni una chiave gratuita su [store.wyzie.io/redeem](https://store.wyzie.io/redeem) (verifica Gmail, 1.000 richieste/giorno). Per utilizzi più intensi, sono disponibili [piani Pro e ricariche](https://store.wyzie.io). Consulta la pagina Chiavi API per i dettagli.',
  'subs.intro.note.npm':
    'Consigliamo vivamente il pacchetto NPM se hai familiarità con TypeScript o JavaScript',
  'subs.intro.btn.npm': 'Pacchetto NPM',
  'subs.intro.btn.direct': 'Recupero Diretto',

  'subs.intro.protect.h2': 'Proteggere la Tua Chiave API',
  'subs.intro.protect.important':
    "**Episodio reale:** abbiamo visto sviluppatori incollare la propria chiave direttamente nel JavaScript frontend di un sito di streaming. Nel giro di ore, una parte estranea l'ha estratta dal bundle JS e l'ha usata fino ad esaurire il limite giornaliero o il saldo a pagamento. La quota persa in questo modo non è rimborsabile ed è trattata come responsabilità del proprietario della chiave secondo i nostri Termini.",
  'subs.intro.protect.p1':
    'La tua chiave API deve essere mantenuta privata e **mai** apparire in:',
  'subs.intro.protect.item1':
    'JavaScript del browser (qualsiasi cosa servita a un tag script)',
  'subs.intro.protect.item2':
    'Binari di app mobile (Android/iOS, incluse quelle offuscate)',
  'subs.intro.protect.item3': 'Estensioni del browser',
  'subs.intro.protect.item4':
    'App Electron / desktop distribuite agli utenti finali',
  'subs.intro.protect.item5':
    'Repository Git pubblici, gist, siti di incolla o screenshot',
  'subs.intro.protect.p2':
    'Se la chiave raggiunge il dispositivo di un utente finale, trattala come pubblica. Esistono due approcci sicuri:',
  'subs.intro.protect.opt1.h3': 'Opzione 1: Usa Wyzie Worker',
  'subs.intro.protect.opt1.p1':
    "Wyzie Worker è un proxy Cloudflare Worker leggero che inietta la tua chiave API lato server. Distribuiscilo su Cloudflare Workers e imposta la tua chiave come variabile d'ambiente NITRO_API_TOKEN. Poi punta le richieste del tuo client all'URL del worker invece di sub.wyzie.io — il worker le inoltra con la tua chiave allegata.",
  'subs.intro.protect.opt2.h3': 'Opzione 2: Costruisci il Tuo Proxy',
  'subs.intro.protect.opt2.p1':
    "Se preferisci non usare Wyzie Worker, puoi costruire un semplice proxy lato server in qualsiasi framework. L'idea è la stessa: il tuo backend riceve le richieste dal client, aggiunge la chiave API e le inoltra a sub.wyzie.io.",

  // Subs Sources Page
  'subs.sources.title': 'Fonti di Wyzie Subs',
  'subs.sources.p1':
    'Wyzie Subs aggrega sottotitoli da più provider. La disponibilità delle fonti può variare a seconda dello stato del provider o se una fonte è inattiva. Sono sempre alla ricerca di nuove fonti, contattami per suggerirne una.',

  'subs.sources.using.h2': 'Utilizzo delle Fonti',
  'subs.sources.using.bullet1':
    'Usa source=all per interrogare tutte le fonti abilitate simultaneamente',
  'subs.sources.using.bullet2':
    'La fonte predefinita è opensubtitles se non specificata',
  'subs.sources.using.bullet3':
    'Più fonti possono essere specificate come elenco separato da virgole',

  'subs.sources.api.h2': 'Endpoint API',
  'subs.sources.api.p1':
    "Puoi recuperare programmaticamente l'elenco delle fonti attualmente abilitate e il loro livello di piano:",
  'subs.sources.api.free':
    'fonti che qualsiasi chiave può interrogare, incluse le chiavi gratuite.',
  'subs.sources.api.paid': 'fonti che richiedono una chiave Pro.',
  'subs.sources.api.allFree':
    'quando è true, ogni fonte abilitata è disponibile per tutte le chiavi e paid è vuoto.',

  'subs.sources.scope.h3': 'Limitare a una chiave',
  'subs.sources.scope.p1':
    'Passa la tua chiave API per ottenere le fonti che quella chiave può effettivamente usare:',
  'subs.sources.scope.p2':
    'Questo aggiunge campi specifici della chiave senza consumare una richiesta dalla tua quota:',
  'subs.sources.scope.available':
    'fonti che questa chiave può interrogare adesso.',
  'subs.sources.scope.restricted':
    'fonti abilitate che questa chiave non può interrogare (passa a Pro per sbloccarle).',
  'subs.sources.scope.keyType': 'gratuito o a pagamento.',
  'subs.sources.scope.keyValid':
    'è false quando la chiave è malformata o non trovata, e null quando la chiave non ha potuto essere verificata (nel qual caso available e restricted sono omessi).',

  'subs.sources.details.h2': 'Dettagli delle Fonti',

  'subs.sources.opensubtitles.desc':
    "Il più grande database di sottotitoli online. Supporta film e serie TV in un'ampia gamma di lingue. Usa l'API REST ufficiale di OpenSubtitles.",
  'subs.sources.opensubtitles.content': 'Film e serie TV',
  'subs.sources.opensubtitles.languages': 'Ampio supporto multilingue',
  'subs.sources.opensubtitles.formats': 'SRT, ASS, SSA, VTT, SUB e altri',

  'subs.sources.subdl.desc':
    "Un sito di sottotitoli gestito dalla community con un'ampia selezione di film e serie TV.",
  'subs.sources.subdl.content': 'Film e serie TV',
  'subs.sources.subdl.languages': 'Ampio supporto multilingue',
  'subs.sources.subdl.formats': 'SRT, ASS, SSA, VTT, SUB e altri',

  'subs.sources.subf2m.desc':
    "Un grande repository di sottotitoli con un'estesa copertura linguistica per film e serie TV.",
  'subs.sources.subf2m.content': 'Film e serie TV',
  'subs.sources.subf2m.languages': 'Ampio supporto multilingue',
  'subs.sources.subf2m.formats': 'SRT, ASS, SSA, VTT, SUB e altri',

  'subs.sources.podnapisi.desc':
    'Uno dei database di sottotitoli più antichi. Collezione ben curata che copre film e serie TV.',
  'subs.sources.podnapisi.content': 'Film e serie TV',
  'subs.sources.podnapisi.languages': 'Ampio supporto multilingue',
  'subs.sources.podnapisi.formats': 'SRT, ASS, SSA, VTT, SUB e altri',

  'subs.sources.animetosho.desc':
    'Recupera allegati di sottotitoli anime direttamente dai rilasci torrent indicizzati su AnimeTosho.',
  'subs.sources.animetosho.content': 'Anime (serie TV)',
  'subs.sources.animetosho.languages':
    'Giapponese, inglese e altri a seconda del rilascio',
  'subs.sources.animetosho.formats': 'ASS, SRT, SSA e altri',
  'subs.sources.animetosho.note':
    'AnimeTosho è programmato per chiudere a maggio 2026.',

  'subs.sources.gestdown.desc':
    "Fornisce sottotitoli per serie TV tramite l'API Gestdown con ampio supporto linguistico.",
  'subs.sources.gestdown.content': 'Solo serie TV',
  'subs.sources.gestdown.languages': 'Ampio supporto multilingue',
  'subs.sources.gestdown.formats': 'SRT, ASS e altri',

  'subs.sources.jimaku.desc':
    "Recupera da jimaku.cc, un repository di file di sottotitoli anime gestito dalla community. Abbina i titoli usando l'API TMDB.",
  'subs.sources.jimaku.content': 'Anime (film e serie TV)',
  'subs.sources.jimaku.languages':
    'Principalmente giapponese; anche inglese, cinese e altri a seconda dei file disponibili',
  'subs.sources.jimaku.formats': 'SRT, ASS, SSA, VTT, SUB e altri',

  'subs.sources.kitsunekko.desc':
    "Recupera gli elenchi di directory da kitsunekko.net, un repository dedicato ai sottotitoli anime. Abbina i titoli usando l'API TMDB.",
  'subs.sources.kitsunekko.content': 'Anime (serie TV)',
  'subs.sources.kitsunekko.languages':
    'Directory di sottotitoli in inglese e giapponese',
  'subs.sources.kitsunekko.formats': 'SRT, ASS, SSA, VTT, SUB e altri',

  'subs.sources.yify.desc':
    'Recupera da yifysubtitles.ch i sottotitoli abbinati per IMDB ID. Solo film.',
  'subs.sources.yify.content': 'Solo film (le serie TV non sono supportate)',
  'subs.sources.yify.languages':
    'Ampio supporto multilingue (albanese, arabo, inglese, francese, spagnolo e molti altri)',
  'subs.sources.yify.formats':
    "SRT (consegnato all'interno di un archivio ZIP)",

  'subs.sources.ajatttools.desc':
    "Recupera sottotitoli dal repository GitHub Ajatt-Tools/kitsunekko-mirror. Organizzato per tipo di media. Abbina i titoli usando l'API TMDB.",
  'subs.sources.ajatttools.content': 'Anime e drama (serie TV e film)',
  'subs.sources.ajatttools.languages':
    'Principalmente giapponese; anche inglese, cinese e altri',
  'subs.sources.ajatttools.formats': 'SRT, ASS, SSA, VTT, SUB e altri',

  'subs.sources.ai.desc':
    "Non è uno scraper. SRT tradotto dall'AI generato su richiesta dalla migliore fonte di sottotitoli disponibile. Consulta la guida alla Traduzione AI per tutti i dettagli.",
  'subs.sources.ai.content':
    'Qualsiasi cosa per cui Wyzie riesca a trovare un SRT',
  'subs.sources.ai.languages': '80+ lingue di destinazione',
  'subs.sources.ai.formats': 'Solo SRT',

  // Subs Package Page
  'subs.pkg.title': 'Usare il Pacchetto NPM di Wyzie',
  'subs.pkg.p1':
    "Il pacchetto NPM di Wyzie Subs fornisce un'interfaccia semplice e facile da usare per cercare e recuperare sottotitoli.",
  'subs.pkg.install.h2': 'Installazione',
  'subs.pkg.important':
    'Una chiave API è richiesta per tutte le richieste. Ottieni una chiave gratuita su [store.wyzie.io/redeem](https://store.wyzie.io/redeem) e passala tramite il parametro key. Consulta la pagina Chiavi API per i dettagli.',
  'subs.pkg.usage.h2': 'Utilizzo',
  'subs.pkg.params.h3': 'Parametri',
  'subs.pkg.params.note':
    'Per ulteriori informazioni (o se sei bloccato), visita la [homepage di Wyzie Subs](https://sub.wyzie.io).',

  'subs.pkg.param.tmdb':
    'ID TMDB del film o della serie TV (tmdb_id o imdb_id è obbligatorio).',
  'subs.pkg.param.imdb':
    'ID IMDB del film o della serie TV (imdb_id o tmdb_id è obbligatorio).',
  'subs.pkg.param.format':
    'Formati di file da restituire (es., srt, ass). Accetta un elenco.',
  'subs.pkg.param.season': 'Numero di stagione (richiede episode).',
  'subs.pkg.param.episode': 'Numero di episodio (richiede season).',
  'subs.pkg.param.language':
    'Codici ISO 639-1 per la lingua dei sottotitoli. Accetta un elenco.',
  'subs.pkg.param.encoding':
    'Filtro per codifica dei caratteri (es., utf-8, latin-1).',
  'subs.pkg.param.hi': 'Booleano per sottotitoli per non udenti.',
  'subs.pkg.param.source':
    'Provider di sottotitoli da interrogare (all per ogni fonte abilitata).',
  'subs.pkg.param.release': 'Filtri per release/scene (accetta un elenco).',
  'subs.pkg.param.filename':
    'Filtri per nome file; gli alias file e fileName sono supportati.',
  'subs.pkg.param.origin':
    'Filtro per origine del contenuto (es., WEB, BLURAY, DVD).',
  'subs.pkg.param.key':
    'La tua chiave API (obbligatoria). Ottienine una gratuita su store.wyzie.io/redeem.',
  'subs.pkg.param.refresh':
    'Ignora la cache e recupera risultati freschi dalle fonti.',

  'subs.pkg.helpers':
    "Il pacchetto include anche helper TMDB leggeri: searchTmdb, getTvDetails e getSeasonDetails per trovare rapidamente gli ID prima di interrogare /search. Inoltre, getSources può essere usato per recuperare l'elenco delle fonti di sottotitoli attualmente abilitate.",
  'subs.pkg.types.h3': 'Tipi',
  'subs.pkg.type.search': "Tutti i parametri validi riconosciuti dall'API.",
  'subs.pkg.type.query':
    "Tutti i parametri (opzionali e obbligatori) disponibili per l'API wyzie-subs.",
  'subs.pkg.type.subtitle':
    "Tutti i valori restituiti dall'API con i rispettivi tipi.",
  'subs.pkg.type.sources': "Tipo di risposta dall'endpoint /sources.",
  'subs.pkg.types.end':
    "I nostri tipi sono molto semplici e ben documentati. Dai un'occhiata al file types.ts collegato nel repository GitHub.",
  'subs.pkg.config.h3': 'Configurazione',
  'subs.pkg.config.p1':
    "Un utente ha chiesto su Github un hostname API configurabile e mi sono detto che era una buona idea, quindi qui sotto c'è l'utilizzo. Vi voglio bene!",

  // Subs Direct Page
  'subs.direct.title': 'Recupero Diretto di Wyzie Subs',
  'subs.direct.caution':
    'Consiglio vivamente di usare il pacchetto NPM in quanto è più facile e affidabile.',
  'subs.direct.p1':
    "Se hai deciso di non usare il pacchetto NPM, iniziamo. Tratterò solo i parametri API e i dati restituiti dall'API. Il modo in cui effettui le richieste all'API dipende interamente da te.",
  'subs.direct.important':
    'Una chiave API è richiesta per tutte le richieste. Ottieni una chiave gratuita su [store.wyzie.io/redeem](https://store.wyzie.io/redeem) e includila come &key=YOUR_KEY in ogni richiesta. Consulta la pagina Chiavi API per i dettagli.',

  'subs.direct.params.h3': 'Parametri',
  'subs.direct.param.id':
    'ID TMDB o IMDB del programma o del film (obbligatorio).',
  'subs.direct.param.seasonEpisode':
    'Stagione ed episodio per ricerche TV. Entrambi devono essere presenti insieme.',
  'subs.direct.param.language':
    'Filtro per lingua (codici ISO 639-1). Più valori separati da virgola.',
  'subs.direct.param.format':
    'Formati di sottotitoli da restituire. Più valori consentiti.',
  'subs.direct.param.hi': 'Se preferire i sottotitoli per non udenti.',
  'subs.direct.param.encoding': 'Filtro per codifica dei caratteri.',
  'subs.direct.param.source':
    'Provider di sottotitoli da interrogare (all interroga ogni fonte abilitata; predefinito opensubtitles).',
  'subs.direct.param.release':
    'Filtri per release o nome scene (separati da virgola).',
  'subs.direct.param.file':
    'Filtri per nome file (alias: file, filename, fileName).',
  'subs.direct.param.origin':
    'Filtro per origine del contenuto, separato da virgola (es., WEB, BLURAY, DVD).',
  'subs.direct.param.key':
    'La tua chiave API (obbligatoria). Ottienine una gratuita su store.wyzie.io/redeem.',
  'subs.direct.param.refresh':
    'Ignora la cache e recupera risultati freschi. Usa quando le fonti potrebbero essersi aggiornate.',
  'subs.direct.important.imdb':
    "Quando usi un ID IMDB, assicurati che i primi due caratteri ('tt') siano inclusi all'inizio dell'ID.",

  'subs.direct.data.h3': 'Dati Restituiti',
  'subs.direct.data.id': "L'ID del file dei sottotitoli.",
  'subs.direct.data.url': "L'URL del file dei sottotitoli.",
  'subs.direct.data.flagUrl':
    'URL alla bandiera della localizzazione della lingua.',
  'subs.direct.data.format': 'Il formato del file dei sottotitoli.',
  'subs.direct.data.encoding':
    'La codifica dei caratteri del file dei sottotitoli.',
  'subs.direct.data.display': 'La lingua del sottotitolo, in maiuscolo.',
  'subs.direct.data.language': 'Il codice ISO 3166-2 della lingua.',
  'subs.direct.data.media': 'Il nome del media per cui sono i sottotitoli.',
  'subs.direct.data.isHearingImpaired':
    'Booleano che indica se il sottotitolo è accessibile ai non udenti.',
  'subs.direct.data.source':
    'Da quale fonte è stato recuperato il sottotitolo.',
  'subs.direct.data.release': 'Nome della release principale.',
  'subs.direct.data.releases':
    'Altri nomi di release compatibili con il sottotitolo.',
  'subs.direct.data.fileName': 'Nome file originale quando disponibile.',
  'subs.direct.data.downloadCount':
    'Numero di download sulla piattaforma sorgente (se disponibile).',
  'subs.direct.data.origin': 'Origine del contenuto (es., WEB, BluRay, DVD).',
  'subs.direct.data.matchedRelease':
    'Valore della release che ha corrisposto al tuo filtro (se fornito).',
  'subs.direct.data.matchedFilter':
    "Il filtro fornito dall'utente che ha corrisposto (se fornito).",
  'subs.direct.data.ai':
    "true se la voce è un sottotitolo tradotto dall'AI, false per i sottotitoli normali recuperati. Usalo come filtro lato client quando vuoi solo uno o l'altro.",

  // Subs Translate Page
  'subs.translate.title': 'Traduzione AI dei Sottotitoli',
  'subs.translate.important':
    'La traduzione AI è una **funzionalità Pro**. Ogni traduzione costa **100 richieste** dal saldo della tua chiave, addebitato sia per una risposta dalla cache che per una traduzione nuova. Le chiavi gratuite non possono usarla.',
  'subs.translate.p1':
    "Wyzie può tradurre qualsiasi sottotitolo in 80+ lingue al volo. Le traduzioni vengono trasmesse mentre il modello le produce, così la riproduzione può iniziare in uno o due secondi invece di attendere l'intero file. I risultati vengono memorizzati nella cache per 30 giorni, quindi la seconda persona che richiede la stessa traduzione la riceve istantaneamente.",

  'subs.translate.ways.h2': 'Due Modi per Usarla',
  'subs.translate.way1.h3': '1. Scegli una Lingua da una Risposta di Ricerca',
  'subs.translate.way1.p1':
    'Ogni risposta /search include ora una voce extra per ogni lingua supportata con "ai": true e un url che punta a /translate. Tratta le righe AI come qualsiasi altra riga di sottotitoli nella tua UI: quando l\'utente fa clic su una, recupera l\'URL.',
  'subs.translate.way1.filter':
    'Se vuoi nascondere le righe AI dalla tua UI, filtrile:',
  'subs.translate.way2.h3': '2. Chiama /translate Direttamente',

  'subs.translate.param.id': 'ID TMDB o IMDB (obbligatorio).',
  'subs.translate.param.target':
    'Lingua di destinazione come nome completo in inglese (es. Spanish, Japanese, Brazilian Portuguese) (obbligatorio).',
  'subs.translate.param.seasonEpisode':
    'Per la TV. Entrambi devono essere presenti insieme.',
  'subs.translate.param.key':
    "La tua chiave API. Usa tk al suo posto se hai ottenuto l'URL da /search.",
  'subs.translate.param.tk':
    'Token firmato restituito da /search. Equivalente a key, ma non espone la chiave grezza.',

  'subs.translate.headers.p':
    'Il corpo della risposta è un file SRT trasmesso come text/plain; charset=utf-8. Header di risposta utili:',
  'subs.translate.header.xcache':
    'HIT-REDIS se servito dalla cache, MISS se generato nuovo.',
  'subs.translate.header.xsourcelang':
    'lingua del sottotitolo usata dal traduttore come input.',
  'subs.translate.header.xtargetlang': 'eco del tuo parametro target.',
  'subs.translate.header.xsourceprovider':
    'quale scraper ha fornito il sottotitolo sorgente.',

  'subs.translate.how.h2': 'Come Funziona',
  'subs.translate.how.step1':
    "Wyzie cerca nelle fonti normali un sottotitolo SRT, preferendo l'inglese quando disponibile.",
  'subs.translate.how.step2':
    "L'SRT viene diviso in blocchi di 50 cue e tradotto sequenzialmente. Ogni blocco viene memorizzato nella cache individualmente man mano che viene completato.",
  'subs.translate.how.step3':
    "L'output viene trasmesso a te cue per cue. I player che accettano un corpo SRT in streaming possono iniziare a mostrare le prime righe prima che il resto sia terminato.",
  'subs.translate.how.step4':
    'La traduzione completa viene memorizzata nella cache in Redis per 30 giorni, indicizzata per id, stagione, episodio e destinazione.',

  'subs.translate.languages.h2': 'Lingue di Destinazione Supportate',
  'subs.translate.languages.p':
    "80+ lingue incluse tutte le principali lingue europee, asiatiche, africane e del Medio Oriente. Passa il nome in inglese (Spanish, non es). L'elenco è restituito anche come righe ai: true in qualsiasi risposta /search, che è la fonte autorevole.",

  'subs.translate.limitations.h2': 'Limitazioni',
  'subs.translate.limit1':
    'La traduzione AI necessita di una fonte SRT. I titoli per cui ogni sottotitolo disponibile è in formato .ass, .vtt o altro restituiranno 404 Nessun SRT trovato.',
  'subs.translate.limit2':
    'La qualità della traduzione dipende dal sottotitolo sorgente. Una fonte con tempi sbagliati o errori di battitura produce una traduzione con gli stessi problemi.',
  'subs.translate.limit3':
    'Alcuni utenti potrebbero voler escludere completamente le righe AI. Filtra su ai === false nel tuo client.',
  'subs.translate.limit4':
    'Le traduzioni vengono addebitate anche sulle risposte dalla cache. Che siano generate di fresco o servite dalla cache di 30 giorni, ogni richiesta /translate costa 100 richieste.',

  // Subs API Keys Page
  'subs.keys.title': 'Chiavi API',
  'subs.keys.p1':
    "Wyzie Subs richiede una chiave API per tutte le richieste. Il livello gratuito copre la maggior parte dei casi d'uso; i piani a pagamento gestiscono utilizzi più intensi.",

  'subs.keys.tiers.h2': 'Livelli',
  'subs.keys.tier.free': 'Gratuito (Gmail richiesta)',
  'subs.keys.tier.free.limit': '1.000 richieste / giorno UTC',
  'subs.keys.tier.pro': '$5 una tantum',
  'subs.keys.tier.pro.limit': '400.000 richieste',
  'subs.keys.tier.topup': 'da $0.0625 / 5K',
  'subs.keys.tier.topup.limit': 'Si aggiunge al tuo saldo a pagamento',
  'subs.keys.tiers.end':
    'Pro e ricariche non scadono. Preferisci un pagamento ricorrente? Un abbonamento da $32/mese offre 6.000.000 di richieste al mese (solo carta). Consulta store.wyzie.io per i prezzi completi e il pannello di controllo.',

  'subs.keys.free.h2': 'Ottenere una Chiave Gratuita',
  'subs.keys.free.p':
    'Visita [store.wyzie.io/redeem](https://store.wyzie.io/redeem):',
  'subs.keys.free.step1': 'Risolvi un rapido captcha Cloudflare Turnstile.',
  'subs.keys.free.step2':
    'Inserisci un indirizzo Gmail (solo Gmail è accettato per il livello gratuito).',
  'subs.keys.free.step3':
    'Inserisci il codice a 6 cifre che ti inviamo via email.',
  'subs.keys.free.step4':
    'Ricevi una chiave API che assomiglia a wyzie-abc123...',
  'subs.keys.free.gmail':
    'Ogni indirizzo Gmail può riscattare solo una chiave gratuita. Hai già una chiave gratuita collegata a quella email? La nuova verifica restituisce semplicemente la tua chiave esistente.',

  'subs.keys.pro.h2': 'Passare a Pro',
  'subs.keys.pro.p1':
    "Visita [store.wyzie.io](https://store.wyzie.io) e acquista con la stessa email usata per la tua chiave gratuita. La tua chiave wyzie-... esistente viene aggiornata in loco con 400K richieste a pagamento aggiunte in cima. Preferisci un pagamento ricorrente? Un abbonamento da $32/mese aggiunge invece un'assegnazione mensile di 6.000.000 di richieste (solo carta).",
  'subs.keys.pro.p2':
    'Se acquisti con una nuova email (senza chiave precedente), viene generata una nuova chiave wyzie-... e inviata via email.',

  'subs.keys.protect.h2': 'Tieni la Tua Chiave Lontana dal Client',
  'subs.keys.protect.important':
    '**Non incorporare mai la tua chiave API nel codice lato client.** JavaScript del browser, app mobile, estensioni del browser, app desktop in stile Electron e repository Git pubblici sono tutti considerati lato client. Qualsiasi cosa distribuisci a un utente finale può essere ispezionata da lui, e abbiamo visto casi reali in cui gli utenti hanno incollato la propria chiave nel frontend di un sito di streaming, solo per far sì che una terza parte estraesse il bundle JS e prosciugasse il saldo delle richieste in poche ore. La quota consumata in questo modo non è rimborsabile.',
  'subs.keys.protect.p2':
    "Due modi sicuri per usare la chiave da un'app client:",
  'subs.keys.protect.option1':
    "Usa [Wyzie Worker](https://github.com/wyziedevs/wyzie-worker): un proxy Cloudflare Worker gratuito che mantiene la tua chiave lato server. Punta il tuo client all'URL del Worker invece di sub.wyzie.io.",
  'subs.keys.protect.option2':
    'Esegui il tuo proxy: qualsiasi endpoint backend che aggiunge la chiave prima di inoltrarla a sub.wyzie.io funziona. Consulta la pagina Intro per un esempio di 10 righe.',
  'subs.keys.protect.devtools':
    "Se la chiave appare nella scheda di rete in DevTools, è esposta. Considerala pubblica e ruotala inviando un'email al supporto.",

  'subs.keys.using.h2': 'Usare la Tua Chiave',
  'subs.keys.using.p': 'Aggiungi &key=YOUR_KEY a ogni richiesta API:',
  'subs.keys.using.npm.h3': 'Pacchetto NPM',

  'subs.keys.limit.h2': 'Raggiungere il Limite',
  'subs.keys.limit.free':
    "**Livello gratuito** esaurito -> L'API restituisce 429 con gli header X-RateLimit-Reset e Retry-After. Il contatore giornaliero si azzera a mezzanotte UTC.",
  'subs.keys.limit.paid':
    "**Saldo a pagamento** esaurito -> L'API restituisce 402. Ricarica su [store.wyzie.io/topup](https://store.wyzie.io/topup) oppure abilita la **ricarica automatica** nel tuo pannello di controllo per rifornire automaticamente quando il saldo scende sotto una soglia che imposti tu.",

  'subs.keys.faq.h2': 'FAQ',
  'subs.keys.faq.q1': 'Ho perso la mia chiave. Posso ottenerne una nuova?',
  'subs.keys.faq.a1':
    'Visita [store.wyzie.io](https://store.wyzie.io) e usa il flusso "chiave dimenticata" con la tua email registrata; ti reinvieremo la tua chiave esistente.',
  'subs.keys.faq.q2': 'Posso usare una chiave in più progetti?',
  'subs.keys.faq.a2': "Sì. La tua chiave funziona ovunque chiami l'API.",
  'subs.keys.faq.q3': 'La mia chiave scadrà mai?',
  'subs.keys.faq.a3':
    'No. Le chiavi gratuite e a pagamento non hanno scadenza. Le chiavi gratuite hanno un limite giornaliero; il saldo a pagamento persiste fino a quando non lo usi.',
  'subs.keys.faq.q4': 'La ricarica automatica è sicura?',
  'subs.keys.faq.a4':
    'Imposti un limite di spesa mensile. Non addebitiamo mai oltre tale limite, e la disabilitazione con un clic è presente in ogni email di conferma e nel tuo pannello di controllo.',

  // Proxy Intro Page
  'proxy.intro.title': 'Introduzione a Wyzie Proxy',
  'proxy.intro.note':
    'La versione di produzione di Wyzie Subs non usa più questo proxy, ma utilizza invece [i6.shark](https://github.com/wyziedevs/i6.shark).',
  'proxy.intro.p1':
    "Wyzie Proxy è un'API proxy potente che ti permette di fare richieste a qualsiasi sito web senza restrizioni CORS o altre. Poiché Wyzie Proxy è costruito con Nitro, può essere ospitato su una delle seguenti piattaforme: AWS Amplify, Azure, Cloudflare, Netlify, Stormkit, Vercel, Zeabur.",
  'proxy.intro.btn.hosting': 'Hosting',
  'proxy.intro.btn.check': "Dai un'occhiata",

  // Proxy Hosting Page
  'proxy.hosting.title': 'Ospitare Wyzie Proxy',
  'proxy.hosting.p1':
    'Compilare Wyzie Proxy è più facile che respirare, grazie a Nitro. Prima, clona il repository di Wyzie Proxy usando:',
  'proxy.hosting.p2': 'Poi, installa tutti i pacchetti necessari con:',
  'proxy.hosting.p3':
    'Dopo che tutti i pacchetti sono installati, puoi compilare il proxy:',
  'proxy.hosting.p4':
    "L'output verrà generato nella cartella /.output/server. Se stai distribuendo su Cloudflare Workers, copia e incolla il file index.mjs nel worker; altrimenti, puoi distribuire i file normalmente.",

  // i6.shark Intro Page
  'i6shark.intro.title': 'Introduzione a i6.shark',
  'i6shark.intro.p1':
    'i6.shark è un server proxy IPv6 che ti permette di fare richieste HTTP da indirizzi IPv6 generati casualmente in una subnet /48. Questo è il proxy che attualmente alimenta Wyzie Subs in produzione.',
  'i6shark.intro.p2':
    'Una subnet /48 ha 1.208.925.819.614.629.174.706.176 (1,2 x 10^24) indirizzi IPv6, rendendola virtualmente impossibile da bloccare tramite il tradizionale ban degli IP. Usare una singola subnet significa che chi vuole davvero bloccarti può bloccare il tuo indirizzo ASN, quindi fai attenzione.',
  'i6shark.intro.btn.hosting': 'Hosting',
  'i6shark.intro.btn.github': 'GitHub',

  'i6shark.intro.features.h2': 'Funzionalità',
  'i6shark.intro.feature1':
    '**Generazione IPv6 Casuale**: Crea indirizzi IPv6 casuali dal tuo prefisso /48 per ogni richiesta',
  'i6shark.intro.feature2':
    '**Supporto Completo dei Metodi HTTP**: GET, POST, PUT, DELETE e tutti gli altri metodi HTTP',
  'i6shark.intro.feature3':
    '**Autenticazione HMAC-SHA256**: Autenticazione sicura della chiave API tramite token basati su user-agent',
  'i6shark.intro.feature4':
    '**Gestione Intelligente del Pool IP**: Rotazione automatica degli IP con dimensione del pool configurabile. Gestione intelligente del ciclo di vita degli IP. Conteggio delle richieste per IP. Pulizia degli IP inutilizzati basata sulla soglia di inattività.',
  'i6shark.intro.feature5':
    "**Gestione Avanzata delle Richieste**: Inoltro di header personalizzati. Rimozione degli header Cloudflare e CDN. Supporto per più formati di parametri URL. Fallback opzionale all'IP di sistema predefinito.",
  'i6shark.intro.feature6':
    '**Whitelist degli Host**: Whitelist di domini integrata per la sicurezza (configurabile nel codice)',
  'i6shark.intro.feature7':
    '**Manutenzione Automatica**: Svuotamento periodico del pool IP. Validazione e pulizia della subnet. Pooling delle connessioni e ottimizzazione keepalive.',
  'i6shark.intro.feature8':
    '**Alta Prestazione**: Gestione delle richieste concorrenti con pooling del buffer. Timeout e limiti di connessione configurabili. Gestione efficiente degli indirizzi IPv6.',
  'i6shark.intro.feature9':
    '**Modalità Debug**: Registrazione dettagliata per il troubleshooting e il monitoraggio',

  'i6shark.intro.requirements.h2': 'Requisiti',
  'i6shark.intro.req1': 'Go 1.20 o superiore',
  'i6shark.intro.req2':
    'Sistema Linux/Unix con supporto IPv6 (preferibilmente Ubuntu)',
  'i6shark.intro.req3':
    'Privilegi di root (per il binding sulla porta 80 e la manipolazione IPv6)',
  'i6shark.intro.req4':
    'Allocazione di subnet IPv6 /48 dal tuo provider di hosting',

  'i6shark.intro.providers.h2': 'Provider di Hosting',
  'i6shark.intro.providers.p1':
    'I seguenti provider sono noti per offrire subnet IPv6 /48:',

  // i6.shark Hosting Page
  'i6shark.hosting.title': 'Ospitare i6.shark',
  'i6shark.hosting.p1':
    'Configurare i6.shark richiede un VPS con una subnet IPv6 /48. Una volta configurato, funziona autonomamente con manutenzione minima.',

  'i6shark.hosting.steps.h2': 'Passaggi',
  'i6shark.hosting.step1': 'Clona il repository in /opt/i6.shark:',
  'i6shark.hosting.step2': 'Configura le costanti in src/consts.go:',
  'i6shark.hosting.step2.note':
    'Aggiorna SharedSecret, IPv6Prefix e Interface per corrispondere al tuo server. Le costanti di regolazione rimanenti hanno valori predefiniti sensati e in genere non richiedono modifiche.',
  'i6shark.hosting.step3': "Compila l'applicazione:",
  'i6shark.hosting.step4': 'Crea il servizio systemd:',
  'i6shark.hosting.step5': 'Abilita e avvia il servizio:',
  'i6shark.hosting.step5.check': 'Controlla lo stato:',
  'i6shark.hosting.post':
    "Il server proxy ora si avvierà automaticamente all'avvio e si riavvierà da solo in caso di crash.",

  'i6shark.hosting.daily.h2': 'Riavvio Giornaliero (Opzionale)',
  'i6shark.hosting.daily.p':
    'Aggiungi un cron job per riavviare il server ogni giorno a un orario casuale:',

  'i6shark.hosting.auth.h2': 'Autenticazione API',
  'i6shark.hosting.auth.p':
    "I token API vengono generati usando HMAC-SHA256 con una chiave segreta condivisa. L'input per la generazione della chiave è l'header user-agent. Consulta la funzione validateAPIToken nel codice sorgente per i dettagli di implementazione.",
};

export default messages;
