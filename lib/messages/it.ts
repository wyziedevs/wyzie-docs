const messages: Record<string, string> = {
  // Navigation
  'nav.language': 'Lingua',

  // Index / Landing Page
  'index.subtitle':
    'Wyzie è un insieme di strumenti per il recupero di sottotitoli e tutto ciò che ne deriva.',
  'index.cta.start': 'Inizia',
  'index.cta.store': "Dai un'occhiata",

  'index.card.keys.title': 'Chiavi API Gratuite',
  'index.card.keys.body':
    'Ottieni una chiave API gratuita su store.wyzie.io/redeem con una rapida verifica via email (Gmail, Outlook, Yahoo, iCloud, Proton e altri provider principali). 1.000 richieste/giorno senza costi. Piani a pagamento disponibili per utilizzi più intensi.',

  'index.card.ai.title': 'Traduzione AI',
  'index.card.ai.body':
    "Traduci qualsiasi sottotitolo in 80+ lingue su richiesta. L'SRT viene trasmesso in ordine man mano che i blocchi vengono completati, così le prime righe arrivano rapidamente. Disponibile con chiavi Pro.",

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
    "Wyzie Subs è un'API per il recupero di sottotitoli con un livello gratuito. Ci sono due modi per fare richieste all'API: usando il nostro pacchetto NPM o recuperando direttamente l'API di Wyzie. Consiglio di usare il nostro pacchetto, ma alcuni potrebbero trovare i tipi scomodi. Per utilizzare l'API, devi prima prendere questa decisione.",
  'subs.intro.important.apikey':
    'Una chiave API è richiesta per tutte le richieste. Ottieni una chiave gratuita su [store.wyzie.io/redeem](https://store.wyzie.io/redeem) (verifica via email, 1.000 richieste/giorno). Per utilizzi più intensi, sono disponibili [piani Pro e ricariche](https://store.wyzie.io). Consulta la pagina Chiavi API per i dettagli.',
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
    "Wyzie Worker è un proxy Cloudflare Worker leggero che inietta la tua chiave API lato server. Distribuiscilo su Cloudflare Workers e imposta due segreti: `NITRO_API_TOKEN` (la tua chiave API Wyzie) e `NITRO_WORKER_KEY` (un segreto a tua scelta). Ogni richiesta al worker deve inviare `Authorization: Bearer <NITRO_WORKER_KEY>`; senza di esso il worker risponde 401, e se `NITRO_WORKER_KEY` non è impostato rifiuta ogni richiesta con 503. Anche la chiave del worker deve restare lato server, quindi chiama il worker dal tuo backend, mai dal codice del browser o dell'app. Il worker inoltra ogni richiesta a sub.wyzie.io con la tua chiave API allegata.",
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
    'La fonte predefinita è charlie se non specificata',
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
    "Non è uno scraper. SRT tradotto dall'AI generato su richiesta dalla migliore fonte di sottotitoli disponibile. Solo chiavi Pro. Consulta la guida alla Traduzione AI per tutti i dettagli.",
  'subs.sources.ai.content':
    'Qualsiasi cosa per cui Wyzie riesca a trovare un sottotitolo testuale',
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
  'subs.pkg.param.hi':
    'Quando è true, restituisce solo i sottotitoli per non udenti. Le fonti che non contrassegnano i sottotitoli per non udenti non restituiscono nulla.',
  'subs.pkg.param.source':
    'Provider di sottotitoli da interrogare per nome in codice (all per ogni fonte attiva che la tua chiave può usare; predefinito charlie).',
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
    "Il pacchetto include anche helper TMDB leggeri: searchTmdb, getTvDetails e getSeasonDetails per trovare rapidamente gli ID prima di interrogare /search. getSources restituisce i nomi in codice delle fonti attive (una fonte messa in pausa dai controlli di stato viene esclusa finché non torna operativa), e getSourcesInfo restituisce la risposta completa di /sources con i livelli e, se passi una chiave, quali fonti quella chiave può usare. withDownloadOptions aggiunge opzioni di download (output WebVTT, correzioni dei tempi, una seconda lingua e altro) all'url di un risultato.",
  'subs.pkg.types.h3': 'Tipi',
  'subs.pkg.type.search': "Tutti i parametri validi riconosciuti dall'API.",
  'subs.pkg.type.query':
    "Tutti i parametri (opzionali e obbligatori) disponibili per l'API wyzie-subs.",
  'subs.pkg.type.subtitle':
    "Tutti i valori restituiti dall'API con i rispettivi tipi.",
  'subs.pkg.type.sources': "Tipo di risposta dall'endpoint /sources.",
  'subs.pkg.type.download':
    'Opzioni per withDownloadOptions: to, offset, fps, plain e (Pro) sdh, clean, dual.',
  'subs.pkg.type.sync':
    'Input e risultato di syncSubtitle (Wyzie Synced, chiavi Pro): quale sottotitolo (un risultato, il suo url, oppure tmdb_id/imdb_id con language), i segmenti di parlato speech trovati da detectSpeech o il file media, e il link di download sincronizzato con i relativi offset, fps e confidence. Consulta [Wyzie Synced](/subs/usage/synced).',
  'subs.pkg.types.end':
    'I nostri tipi sono molto semplici e ben documentati. Consulta [src/types.ts](https://github.com/wyziedevs/wyzie-lib/blob/main/src/types.ts) nel repository wyzie-lib.',
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
  'subs.direct.param.hi':
    'Quando è true, restituisce solo i sottotitoli per non udenti (è un filtro, non una preferenza). Le fonti che non contrassegnano i sottotitoli per non udenti non restituiscono nulla.',
  'subs.direct.param.encoding': 'Filtro per codifica dei caratteri.',
  'subs.direct.param.source':
    'Provider di sottotitoli da interrogare (all interroga ogni fonte che la tua chiave può usare; predefinito charlie).',
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
  'subs.direct.param.page':
    'Pagina da restituire, a partire da 1. Si usa solo insieme a limit.',
  'subs.direct.param.limit':
    "Risultati per pagina (da 1 a 200). Senza questo parametro, tutti i risultati vengono restituiti in un'unica risposta.",
  'subs.direct.important.imdb':
    "Quando usi un ID IMDB, assicurati che i primi due caratteri ('tt') siano inclusi all'inizio dell'ID.",

  'subs.direct.data.h3': 'Dati Restituiti',
  'subs.direct.data.id': "L'ID del file dei sottotitoli.",
  'subs.direct.data.url':
    'Link di download su https://sub.wyzie.io/c/... che contiene un parametro tok cifrato. Ogni download costa 1 richiesta; vedi la sezione sul download dei sottotitoli più sotto.',
  'subs.direct.data.flagUrl':
    'URL alla bandiera della localizzazione della lingua.',
  'subs.direct.data.format': 'Il formato del file dei sottotitoli.',
  'subs.direct.data.encoding':
    'La codifica dei caratteri del file dei sottotitoli.',
  'subs.direct.data.display': 'La lingua del sottotitolo, in maiuscolo.',
  'subs.direct.data.language': 'Il codice ISO 639-1 della lingua.',
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
  'subs.direct.download.p':
    "Ogni url in una risposta /search punta a https://sub.wyzie.io/c/... e contiene un parametro di query tok. Il parametro tok è cifrato, quindi non rivela la tua chiave API, e resta valido per 60 giorni. Usa l'URL così com'è. Una ricerca costa 1 richiesta e ogni download ne costa 1 in più, tutto addebitato alla chiave che ha eseguito la ricerca. Quando quella chiave non può pagare un download, il link viene rifiutato:",
  'subs.direct.dl.p':
    "Aggiungi questi parametri a un URL di download per modificare ciò che restituisce. Funzionano su ogni download, in cache o no, e non costano nulla in più (tranne dual, vedi sotto). L'header di risposta X-Subtitle-Transforms elenca ciò che è stato applicato, con i relativi conteggi.",
  'subs.direct.dl.param.to':
    'Formato di output: `srt` o `vtt`. `vtt` si riproduce direttamente in un elemento `<track>` del browser. Predefinito: il formato originale del file.',
  'subs.direct.dl.param.offset':
    'Sposta ogni riga di questo numero di secondi (un valore negativo la anticipa).',
  'subs.direct.dl.param.fps':
    "Corregge la deriva di un sottotitolo creato per un'altra release: `SUBTITLE_FPS:VIDEO_FPS`, es. `25:23.976` per un sottotitolo PAL su un video a frame rate cinematografico.",
  'subs.direct.dl.param.plain':
    'Righe semplici e pulite: codici di stile come `{\\an8}` e `<font>` rimossi, righe vuote e ripetute eliminate, righe in ordine cronologico, piccole sovrapposizioni tagliate.',
  'subs.direct.dl.param.sdh':
    'Rimuove il testo per non udenti: `[DOOR SLAMS]`, `(sighs)`, le etichette di chi parla come `JOHN:` e i testi delle canzoni ♪.',
  'subs.direct.dl.param.clean':
    'Maschera le volgarità più pesanti, mantenendo la prima lettera (`f***`). Solo file in inglese.',
  'subs.direct.dl.param.dual':
    'Aggiunge una seconda lingua (codice ISO 639-1) sotto ogni riga, allineata ai tempi di questo file. Costa 1 richiesta in più, solo quando viene trovata una corrispondenza; altrimenti il file viene restituito da solo con `X-Dual: unavailable`.',
  'subs.direct.dl.after':
    "Le opzioni si combinano, es. `&to=vtt&sdh=strip&offset=-1.5`. I link contengono già `format`, `encoding`, `id` e (per gli episodi) `season` ed `episode`: lasciali come sono. `autoUnzip=false` restituisce un archivio così com'è.",
  'subs.direct.oneCall.p':
    'Con una chiave API, GET /download restituisce direttamente il file dei sottotitoli in una sola chiamata: cerca con la tua chiave e gli stessi parametri di /search (language è en per impostazione predefinita), sceglie la corrispondenza migliore e la restituisce. Costa 2 richieste, come una ricerca più un download. Le opzioni di download come to e offset si applicano al file.',
  'subs.direct.oneCall.pick':
    'La corrispondenza migliore è il primo risultato di ricerca, con preferenza per i file SRT, WebVTT e ASS a meno che tu non imposti format, e per i file senza testo per non udenti a meno che tu non imposti hi=true. Restringi la scelta con release, filename, source o origin. Gli header di risposta X-Subtitle-Release, X-Subtitle-Source, X-Subtitle-Language e X-Subtitle-Url indicano quale file è stato scelto. Gli errori sono gli stessi di /search e dei link di download.',
  'subs.direct.oneCall.keyless':
    'Senza chiave, la [pagina di download](https://sub.wyzie.io/download) serve a trovare uno o due sottotitoli a mano. I suoi link aprono solo il file per cui sono stati creati, dalla rete che ha effettuato la ricerca, e la pagina ha limiti orari. Per qualsiasi uso automatizzato, usa una chiave.',
  'subs.direct.headers.p':
    'Ogni risposta /search include un header X-Total-Count con il numero totale di risultati. Quando passi limit, include anche:',
  'subs.direct.header.xpage': 'la pagina restituita.',
  'subs.direct.header.xperpage': 'il valore di limit in vigore.',
  'subs.direct.header.xtotalpages': 'il numero totale di pagine.',
  'subs.direct.headers.rate':
    "Le risposte contengono anche X-RateLimit-Limit, X-RateLimit-Remaining e X-RateLimit-Reset. Considerali approssimativi: l'utilizzo viene registrato nella fatturazione a piccoli blocchi, quindi possono essere leggermente in ritardo rispetto al tuo utilizzo reale.",

  // Subs Translate Page
  'subs.translate.title': 'Traduzione AI dei Sottotitoli',
  'subs.translate.important':
    'La traduzione AI è una **funzionalità Pro**: le chiavi gratuite ricevono 403 Upgrade required. Ogni chiamata costa **25 richieste** dal saldo della tua chiave, risposte dalla cache incluse. Se una chiamata fallisce prima di produrre output (nessun sottotitolo trovato, un errore di ricerca o di download, oppure il server è occupato), le 25 richieste vengono rimborsate automaticamente.',
  'subs.translate.p1':
    "Wyzie può tradurre qualsiasi sottotitolo in 80+ lingue al volo. L'SRT tradotto viene trasmesso in ordine man mano che i blocchi vengono completati, così i primi cue arrivano rapidamente invece che dopo il completamento dell'intero file. La traduzione completa viene memorizzata nella cache per 30 giorni, quindi le richieste successive per lo stesso titolo, episodio e lingua di destinazione vengono servite dalla cache.",

  'subs.translate.ways.h2': 'Due Modi per Usarla',
  'subs.translate.way1.h3': '1. Scegli una Lingua da una Risposta di Ricerca',
  'subs.translate.way1.p1':
    'Per le chiavi Pro, ogni risposta /search include anche righe di traduzione AI con "ai": true e un url che punta a /translate: una per ogni lingua supportata, oppure solo le lingue del tuo filtro language=. Le chiavi gratuite non ricevono mai queste righe. Tratta le righe AI come qualsiasi altra riga di sottotitoli nella tua UI: quando l\'utente fa clic su una, recupera l\'URL.',
  'subs.translate.way1.filter':
    'Se vuoi nascondere le righe AI dalla tua UI, filtrile:',
  'subs.translate.way2.h3': '2. Chiama /translate Direttamente',

  'subs.translate.param.id': 'ID TMDB o IMDB (obbligatorio).',
  'subs.translate.param.target':
    "Lingua di destinazione (obbligatoria): un nome dall'elenco supportato (ad esempio Spanish, Japanese, Portuguese (Brazil)) oppure il suo codice (ad esempio es, ja, pt-BR).",
  'subs.translate.param.seasonEpisode':
    'Per la TV. Entrambi devono essere presenti insieme.',
  'subs.translate.param.key':
    "La tua chiave API. Usa tk al suo posto se hai ottenuto l'URL da /search.",
  'subs.translate.param.tk':
    'Token cifrato presente negli URL delle righe AI di /search. Funziona come key, non rivela la tua chiave API e resta valido per 60 giorni.',

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
    'Wyzie cerca nelle fonti normali un sottotitolo testuale, preferendo un SRT in inglese quando disponibile. I file VTT, ASS, SSA e SUB vengono prima convertiti in SRT.',
  'subs.translate.how.step2':
    "L'SRT viene diviso in blocchi fino a circa 3.800 caratteri e tradotto con Google Translate, 4 blocchi alla volta.",
  'subs.translate.how.step3':
    "L'output viene trasmesso nell'ordine dell'SRT man mano che i blocchi vengono completati, così i primi cue arrivano rapidamente. I player che accettano un corpo SRT in streaming possono iniziare a mostrare le prime righe prima che il resto sia terminato.",
  'subs.translate.how.step4':
    'La traduzione completa viene memorizzata nella cache in Redis per 30 giorni, indicizzata per id, stagione, episodio e destinazione.',

  'subs.translate.languages.h2': 'Lingue di Destinazione Supportate',
  'subs.translate.languages.p':
    "80+ lingue incluse tutte le principali lingue europee, asiatiche, africane e del Medio Oriente. Passa un nome dall'elenco (Spanish, Portuguese (Brazil)) oppure il suo codice (es, pt-BR). Per le chiavi Pro, l'elenco completo è restituito anche come righe ai: true in qualsiasi risposta /search senza filtro language=, che è la fonte autorevole.",

  'subs.translate.limitations.h2': 'Limitazioni',
  'subs.translate.limit1':
    'La traduzione AI necessita di un sottotitolo testuale da cui partire. Le fonti VTT, ASS, SSA e SUB vengono prima convertite in SRT; se non esiste alcun sottotitolo testuale, la chiamata restituisce 404 No subtitle found e le 25 richieste vengono rimborsate.',
  'subs.translate.limit2':
    'La qualità della traduzione dipende dal sottotitolo sorgente. Una fonte con tempi sbagliati o errori di battitura produce una traduzione con gli stessi problemi.',
  'subs.translate.limit3':
    'Alcuni utenti potrebbero voler escludere completamente le righe AI. Filtra su ai === false nel tuo client.',
  'subs.translate.limit4':
    'Le traduzioni vengono addebitate anche sulle risposte dalla cache. Che siano generate di fresco o servite dalla cache di 30 giorni, ogni chiamata /translate costa 25 richieste. Vengono rimborsate solo le chiamate che falliscono prima di produrre output.',

  // Subs Synced Page
  'subs.synced.title': 'Wyzie Synced',
  'subs.synced.important':
    'Wyzie Synced è una **funzionalità Pro**: le chiavi gratuite ricevono 403 Paid feature. Ogni sincronizzazione riuscita costa **5 richieste**; una sincronizzazione che non trova corrispondenze non viene addebitata. Il download del link sincronizzato conta poi come qualsiasi altro download.',
  'subs.synced.p1':
    "I sottotitoli trovati online sono spesso sincronizzati per una release diversa dal video che hai: iniziano qualche secondo prima o dopo, oppure si sfasano sempre di più con l'avanzare del film perché quella release ha un frame rate diverso. Wyzie Synced ascolta l'audio della tua copia, trova i punti in cui si parla e calcola l'offset e la correzione del frame rate che allineano il sottotitolo all'audio. Ottieni un normale link di download con la correzione applicata (le [opzioni di download](/subs/usage/direct#download-options) offset e fps).",
  'subs.synced.web.p':
    "Il modo più semplice: apri [sub.wyzie.io/synced](https://sub.wyzie.io/synced), inserisci la tua chiave Pro, scegli il file video e il titolo, e scarica il sottotitolo sincronizzato. L'audio viene analizzato nel tuo browser, quindi il video non viene mai caricato: vengono inviati solo i tempi del parlato. Funzionano MKV, MP4, AVI e la maggior parte degli altri formati, incluso l'audio AC3, E-AC3 e DTS.",
  'subs.synced.api.p':
    "Invia il sottotitolo che vuoi (un link di download, oppure il titolo per lasciare che Wyzie scelga la corrispondenza migliore) e l'audio: o i tempi del parlato che hai rilevato tu, o il file audio/video stesso. POST /synced è la stessa API.",
  'subs.synced.param.url':
    'Un link di download da /search (https://sub.wyzie.io/c/…). Le altre opzioni di download presenti (to, sdh, …) vengono mantenute sul link sincronizzato.',
  'subs.synced.param.id':
    'In alternativa a url: ID TMDB o IMDB. Wyzie prova i primi 5 sottotitoli testuali in quella lingua e restituisce quello che si adatta meglio al tuo audio.',
  'subs.synced.param.language':
    'Con id: codice ISO 639-1 della lingua del sottotitolo (obbligatorio).',
  'subs.synced.param.seasonEpisode':
    'Con id, per la TV. Entrambi devono essere presenti insieme.',
  'subs.synced.param.key':
    'La tua chiave API Pro. Senza, viene usata la chiave legata al tok di url; i link della pagina di download senza chiave richiedono key.',
  'subs.synced.param.speech':
    'I punti in cui si parla: [[start, end], …] in secondi, da qualsiasi rilevatore di attività vocale (detectSpeech di wyzie-lib, Silero VAD, webrtcvad). Un film di 2 ore corrisponde a circa 2.000 segmenti, pari a circa 40 KB di JSON.',
  'subs.synced.param.media':
    'Oppure il file audio/video stesso: come corpo grezzo della richiesta (con gli altri campi nella query string), o come campo multipart media. Fino a 95 MB, quindi per un film intero carica solo la traccia audio.',
  'subs.synced.fields.note':
    'I campi vanno in un corpo JSON, in un form multipart o nella query string (con un corpo media grezzo).',
  'subs.synced.response.p': 'Una risposta 200 è un JSON:',
  'subs.synced.field.url':
    'il link di download del sottotitolo con la correzione dei tempi (offset, fps) e un nuovo tok per la tua chiave. Usalo come qualsiasi url di /search: ogni download costa 1 richiesta.',
  'subs.synced.field.offset':
    'secondi aggiunti a ogni riga dopo la correzione del frame rate (un valore negativo la anticipa).',
  'subs.synced.field.fps':
    'la correzione del frame rate nel formato SUBTITLE_FPS:VIDEO_FPS (es. "25:23.976"), oppure null se non era necessaria.',
  'subs.synced.field.confidence':
    'da 0 a 1: quanto nettamente questo allineamento prevale su tutti gli altri. Tutto ciò che viene restituito ha superato il test di corrispondenza; più è alto, maggiore è la certezza.',
  'subs.synced.field.inSync':
    'true se il sottotitolo corrispondeva già alla tua copia.',
  'subs.synced.field.subtitle':
    'quale sottotitolo è stato usato (release, fileName, format, source, …). Con url, solo il suo format.',
  'subs.synced.errors.p':
    'Gli errori sono in JSON con message e details. Le sincronizzazioni rifiutate o non riuscite non vengono addebitate.',
  'subs.synced.error.400':
    'Campi mancanti o non validi: nessun sottotitolo, nessun audio, oppure speech non composto da coppie [start, end].',
  'subs.synced.error.401':
    'Nessuna chiave, oppure il link di download in url non è valido o è scaduto.',
  'subs.synced.error.403':
    'La chiave è gratuita (Wyzie Synced richiede Pro), non valida o in pausa.',
  'subs.synced.error.404':
    'Nessun sottotitolo testuale in quella lingua per il titolo.',
  'subs.synced.error.413':
    'Il file media supera i 95 MB. Carica solo la traccia audio, oppure invia speech.',
  'subs.synced.error.422':
    "Il sottotitolo non si allinea all'audio con nessun offset né frame rate (probabilmente è di un altro montaggio o di un altro episodio), l'audio contiene troppo poco parlato, oppure il file non può essere decodificato.",
  'subs.synced.error.429':
    'La chiave non può pagare: una sincronizzazione richiede almeno 5 richieste rimanenti, verificate prima di iniziare qualsiasi lavoro.',
  'subs.synced.error.503':
    'Il server è occupato a decodificare altri upload, oppure la ricerca è temporaneamente non disponibile. Riprova tra poco, oppure invia speech.',
  'subs.synced.lib.p':
    'wyzie-lib include detectSpeech (lo stesso rilevatore che il sito esegue nel tuo browser) e syncSubtitle:',
  'subs.synced.how.step1':
    "Parlato: l'audio viene decodificato in mono a 8 kHz (solo il canale centrale per i mix 5.1 e 7.1, dove si trovano i dialoghi), e un rilevatore di attività vocale segna i punti in cui si parla: suono forte, nella banda della voce, che sale e scende con le sillabe.",
  'subs.synced.how.step2':
    'Allineamento: i tempi a schermo del sottotitolo vengono sottoposti a cross-correlazione con quel parlato per ogni offset entro ±10 minuti, per le differenze di frame rate più comuni (25 vs 23.976, 25 vs 24, 24 vs 23.976 fps).',
  'subs.synced.how.step3':
    "Rifinitura: il miglior allineamento viene affinato a 10 ms facendo coincidere l'inizio delle righe con l'inizio del parlato.",
  'subs.synced.how.step4':
    "Un allineamento viene restituito solo quando supera nettamente ogni altro offset, così un sottotitolo di un altro montaggio o episodio riceve 422 Couldn't sync invece di uno spostamento sbagliato.",
  'subs.synced.limit1':
    'Wyzie Synced corregge un offset costante e una differenza di frame rate. Un sottotitolo per un montaggio diverso (scene aggiunte o mancanti) non può essere corretto con un unico spostamento, e viene rifiutato.',
  'subs.synced.limit2':
    'Serve il parlato: i film con pochi dialoghi, o con un audio prevalentemente musicale, potrebbero non sincronizzarsi.',
  'subs.synced.limit3': 'Vengono rilevati offset fino a ±10 minuti.',

  // Subs API Keys Page
  'subs.keys.title': 'Chiavi API',
  'subs.keys.p1':
    "Wyzie Subs richiede una chiave API per tutte le richieste. Il livello gratuito copre la maggior parte dei casi d'uso; i piani a pagamento gestiscono utilizzi più intensi.",

  'subs.keys.tiers.h2': 'Livelli',
  'subs.keys.tier.free': 'Gratuito (verifica via email)',
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
    'Inserisci un indirizzo di uno dei principali provider di email personale (Gmail, Outlook/Hotmail, Yahoo, iCloud, AOL, Proton e altri). I domini email usa e getta vengono rifiutati.',
  'subs.keys.free.step3':
    'Inserisci il codice a 6 cifre che ti inviamo via email.',
  'subs.keys.free.step4':
    'Ricevi una chiave API che assomiglia a wyzie-abc123...',
  'subs.keys.free.gmail':
    'Ogni indirizzo email e ogni rete possono ottenere una sola chiave gratuita; una seconda richiesta restituisce 409. Hai perso la tua chiave? Usa "Forgot key" nel [pannello di controllo](https://store.wyzie.io/dashboard) per fartela reinviare.',

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
    'Usa [Wyzie Worker](https://github.com/wyziedevs/wyzie-worker): un proxy Cloudflare Worker gratuito che conserva la tua chiave API come segreto `NITRO_API_TOKEN`. Ogni chiamata al proxy deve inviare `Authorization: Bearer <NITRO_WORKER_KEY>`, un secondo segreto che imposti tu, quindi fai passare il tuo client attraverso il tuo backend e mantieni anche la chiave del worker lato server.',
  'subs.keys.protect.option2':
    'Esegui il tuo proxy: qualsiasi endpoint backend che aggiunge la chiave prima di inoltrarla a sub.wyzie.io funziona. Consulta la pagina Intro per un esempio di 10 righe.',
  'subs.keys.protect.devtools':
    'Se la chiave appare nella scheda di rete in DevTools, è esposta. Considerala pubblica e ruotala dal tuo [pannello di controllo](https://store.wyzie.io/dashboard).',

  'subs.keys.using.h2': 'Usare la Tua Chiave',
  'subs.keys.using.p': 'Aggiungi &key=YOUR_KEY a ogni richiesta API:',
  'subs.keys.using.npm.h3': 'Pacchetto NPM',

  'subs.keys.limit.h2': 'Raggiungere il Limite',
  'subs.keys.limit.p':
    'Una ricerca costa 1 richiesta e ogni download di sottotitoli costa 1 richiesta, quindi cercare una volta e scaricare un file ne consuma 2. La traduzione AI costa 25 richieste per chiamata, e una sincronizzazione Wyzie Synced 5.',
  'subs.keys.limit.free':
    '**Livello gratuito** esaurito -> le ricerche e i link di download restituiscono 429 Daily request limit reached, con reset_at nel JSON e un header Retry-After. Il limite giornaliero di 1.000 richieste si azzera a mezzanotte UTC.',
  'subs.keys.limit.paid':
    '**Saldo a pagamento** esaurito -> le ricerche e i link di download restituiscono 402 con un link di ricarica nel JSON. Ricarica su [store.wyzie.io/topup](https://store.wyzie.io/topup) oppure abilita la **ricarica automatica** nel tuo pannello di controllo per rifornire automaticamente quando il saldo scende sotto una soglia che imposti tu.',
  'subs.keys.hold.p1':
    'Le chiavi che inviano volumi molto elevati, principalmente da IP di datacenter o di hosting, vengono messe in pausa automaticamente. Una chiave in pausa riceve 403 Key on hold su ogni richiesta, con un link di riattivazione (https://store.wyzie.io/verify) e un link al supporto (https://store.wyzie.io/contact) nel JSON.',
  'subs.keys.hold.p2':
    'Per riattivare subito la chiave, verifica il sito web su cui la usi tramite [store.wyzie.io/verify](https://store.wyzie.io/verify) con un record DNS TXT o un meta tag. Una chiave con un sito verificato non viene mai più messa in pausa automaticamente, quindi i siti molto trafficati possono effettuare la verifica prima ancora di essere messi in pausa.',
  'subs.keys.hold.p3':
    "Nessun sito web, ad esempio un servizio backend o un'app? [Contatta il supporto](https://store.wyzie.io/contact) per far riattivare la chiave.",

  'subs.keys.files.h2': "Cosa C'è nei File",
  'subs.keys.files.adfilter':
    '**Filtro pubblicità** – da ogni sottotitolo servito tramite sub.wyzie.io vengono rimossi i cue pubblicitari dei provider (banner di OpenSubtitles, promozioni di scommesse, righe "watch free at ..."). I cue SRT vengono rinumerati in modo che non ci siano salti. Ogni provider, OpenSubtitles incluso, viene servito tramite sub.wyzie.io, quindi il filtro si applica a tutti.',
  'subs.keys.files.promo':
    "**Le chiavi gratuite e di sviluppo** ricevono un breve cue proprio all'inizio di ogni file (0–6 s) che rimanda a [store.wyzie.io](https://store.wyzie.io). Le chiavi a pagamento ricevono file puliti, senza cue.",

  'subs.keys.faq.h2': 'FAQ',
  'subs.keys.faq.q1': 'Ho perso la mia chiave. Posso ottenerne una nuova?',
  'subs.keys.faq.a1':
    'Apri il [pannello di controllo](https://store.wyzie.io/dashboard) e usa "Forgot key" con la tua email registrata; ti reinvieremo la tua chiave esistente. Se pensi che la chiave sia trapelata, ruotala invece dal pannello di controllo.',
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
  'i6shark.intro.feature7':
    '**Manutenzione Automatica**: Svuotamento periodico del pool IP. Validazione e pulizia della subnet. Pooling delle connessioni e ottimizzazione keepalive.',
  'i6shark.intro.feature8':
    '**Alta Prestazione**: Gestione delle richieste concorrenti con pooling del buffer. Timeout e limiti di connessione configurabili. Gestione efficiente degli indirizzi IPv6.',
  'i6shark.intro.feature9':
    '**Modalità Debug**: Registrazione dettagliata per il troubleshooting e il monitoraggio',

  'i6shark.intro.requirements.h2': 'Requisiti',
  'i6shark.intro.req1': 'Go 1.22 o superiore',
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

  // Plugins
  'plugins.common.required': 'Obbligatorio',

  'plugins.index.intro':
    'Wyzie Subs si collega direttamente alle app multimediali che già usi. Ogni plugin comunica con lo stesso endpoint `https://sub.wyzie.io/search` e necessita di una **chiave API Wyzie** gratuita. Ottienine una su [store.wyzie.io](https://store.wyzie.io/#plans).',
  'plugins.index.tbl.stremio.for':
    'Guardare in Stremio su desktop, mobile o TV',
  'plugins.index.tbl.stremio.install':
    'Add-on ospitato: incolla la tua chiave, clicca Installa',
  'plugins.index.tbl.bazarr.for':
    'Librerie Plex, Jellyfin, Emby, Sonarr, Radarr',
  'plugins.index.tbl.bazarr.install':
    'Provider pronto all’uso per la tua istanza Bazarr',
  'plugins.index.tbl.kodi.for': 'Kodi 19+, LibreELEC, CoreELEC',
  'plugins.index.tbl.kodi.install': 'Installa da zip o dal repository Wyzie',
  'plugins.index.use.stremio':
    'Usa **Stremio** se guardi dentro l’app Stremio.',
  'plugins.index.use.bazarr':
    'Usa **Bazarr** se utilizzi Plex, Jellyfin o Emby. Bazarr scarica i file dei sottotitoli su disco e il tuo media server li rileva automaticamente. Questo è anche il percorso consigliato per Plex e Jellyfin; non esiste un plugin nativo separato.',
  'plugins.index.use.kodi':
    'Usa **Kodi** per un servizio di sottotitoli nativo di Kodi su Android TV, un Raspberry Pi o un PC home theatre.',
  'plugins.index.shared.sources':
    '**Fonti:** ogni fonte che la tua chiave può usare (`source=all`): charlie e lima con una chiave gratuita, tutte e sette con una chiave Pro.',
  'plugins.index.shared.matching':
    '**Corrispondenza:** Wyzie è guidato dagli ID IMDB e TMDB più stagione ed episodio, quindi le corrispondenze sono precise sia per i film che per le serie.',
  'plugins.index.shared.quota':
    '**Quota:** quando la tua chiave si esaurisce, il plugin mostra un messaggio cordiale con un link a [store.wyzie.io](https://store.wyzie.io) invece di fallire silenziosamente. Ricarica o abbonati e sei di nuovo operativo.',
  'plugins.index.shared.languages':
    '**Lingue:** oltre 100, selezionabili per ogni plugin.',
  'plugins.index.outro':
    'Scegli la tua piattaforma qui sopra per iniziare. Il codice sorgente di ogni plugin si trova nel [repository wyzie-plugins](https://github.com/wyziedevs/wyzie-plugins).',

  'plugins.stremio.intro':
    'Un add-on per sottotitoli con installazione a un clic per [Stremio](https://www.stremio.com/). Interroga ogni fonte Wyzie che la tua chiave può usare e funziona sia per film che per serie, su ogni piattaforma su cui gira Stremio.',
  'plugins.stremio.before':
    'Ti serve una chiave API Wyzie gratuita. Ottienine una su [store.wyzie.io/redeem](https://store.wyzie.io/redeem), oppure acquista una chiave Pro o abbonati su [store.wyzie.io](https://store.wyzie.io/#plans).',
  'plugins.stremio.install.1':
    'Apri [stremio.wyzie.io/configure](https://stremio.wyzie.io/configure).',
  'plugins.stremio.install.2': 'Incolla la tua **chiave API**.',
  'plugins.stremio.install.3':
    'Facoltativo: inserisci le tue **lingue** preferite come codici ISO 639-1, separati da virgola (ad esempio `en,es,fr`). Lascia vuoto per tutte le lingue.',
  'plugins.stremio.install.4':
    'Facoltativo: attiva l’opzione **non udenti** per ottenere solo i sottotitoli per non udenti. Lasciala disattivata per vedere tutto; le fonti che non contrassegnano i sottotitoli per non udenti non restituiscono nulla mentre è attiva.',
  'plugins.stremio.install.5':
    'Clicca **Installa**. Stremio si apre e ti chiede conferma; accetta e hai finito.',
  'plugins.stremio.install.after':
    'La tua chiave e le tue preferenze sono codificate nell’add-on, quindi non c’è altro da configurare. Apri un film o un episodio qualsiasi e scegli un sottotitolo dalla lista.',
  'plugins.stremio.cfg.key.f': 'Chiave API',
  'plugins.stremio.cfg.key.d': 'La tua chiave Wyzie. Obbligatoria.',
  'plugins.stremio.cfg.langs.f': 'Lingue',
  'plugins.stremio.cfg.langs.d':
    'Codici ISO 639-1, separati da virgola. Vuoto significa tutte le lingue.',
  'plugins.stremio.cfg.hi.f': 'Non udenti',
  'plugins.stremio.cfg.hi.d':
    'Restituisce solo i sottotitoli per non udenti (invia hi=true). Disattivato per impostazione predefinita.',
  'plugins.stremio.cfg.note':
    'Per modificare uno di questi in seguito, riapri [stremio.wyzie.io/configure](https://stremio.wyzie.io/configure), regola e reinstalla.',
  'plugins.stremio.local':
    'Poi apri `http://127.0.0.1:7000/configure`, incolla la tua chiave e installa in Stremio.',
  'plugins.stremio.quota':
    'Se la tua chiave raggiunge il limite, l’add-on mostra una singola voce di sottotitolo con un link a [store.wyzie.io](https://store.wyzie.io) così puoi ricaricare o abbonarti. Una volta fatto, i sottotitoli tornano immediatamente.',
  'plugins.stremio.ts.none':
    '**Non compare nessun sottotitolo.** Assicurati che il titolo abbia un ID IMDB in Stremio (la maggior parte degli elementi del catalogo lo ha) e che le lingue scelte abbiano effettivamente sottotitoli per quel titolo. Prova a rimuovere il filtro lingua per vedere tutto.',
  'plugins.stremio.ts.key':
    '**Chiave non valida, o non si carica nulla.** Riapri la pagina di configurazione e reincolla la tua chiave; uno spazio di troppo la rende inutilizzabile. Verifica che la chiave funzioni su [store.wyzie.io/dashboard](https://store.wyzie.io/dashboard).',
  'plugins.stremio.ts.episode':
    '**L’episodio della serie non corrisponde.** Wyzie effettua la corrispondenza su stagione ed episodio; assicurati che Stremio stia riproducendo la voce dell’episodio corretto, non una pagina generica della serie.',

  'plugins.bazarr.intro':
    '[Bazarr](https://www.bazarr.media/) gestisce i sottotitoli per **Plex, Jellyfin, Emby, Sonarr e Radarr** in un unico posto. Aggiungere Wyzie come provider dà a tutti questi server accesso a ogni fonte Wyzie che la tua chiave può usare, tramite un’unica chiave.',
  'plugins.bazarr.note':
    'Questo è il modo consigliato per usare Wyzie con Plex e Jellyfin. Bazarr scarica i file dei sottotitoli accanto ai tuoi media e il tuo server li rileva automaticamente, quindi non è richiesto alcun plugin nativo separato.',
  'plugins.bazarr.before':
    'Ottieni una chiave API Wyzie gratuita su [store.wyzie.io/redeem](https://store.wyzie.io/redeem) e assicurati di avere accesso ai file di installazione di Bazarr (percorso Docker tipico: `/opt/bazarr/bazarr/`).',
  'plugins.bazarr.install.1':
    'Scarica [bazarr/wyzie.py](https://github.com/wyziedevs/wyzie-plugins/blob/main/bazarr/wyzie.py) dal [repository wyzie-plugins](https://github.com/wyziedevs/wyzie-plugins) (oppure `git clone https://github.com/wyziedevs/wyzie-plugins.git`) e copialo in `bazarr/subliminal_patch/providers/wyzie.py`.',
  'plugins.bazarr.install.2':
    'Modifica `bazarr/subliminal_patch/extensions.py` e aggiungi `wyzie` a **entrambi** `provider_registry` e `provider_manager`.',
  'plugins.bazarr.install.3':
    'Modifica `bazarr/list_subtitles.py` (o `bazarr/config.py`, a seconda della tua versione) per esporre le impostazioni `api_key`, `prefer_hi` e `sources`. Copia lo schema da un provider esistente come `opensubtitlescom`.',
  'plugins.bazarr.install.4': 'Riavvia Bazarr.',
  'plugins.bazarr.install.5':
    'Vai su **Impostazioni, Provider, Wyzie**, incolla la tua chiave API e salva.',
  'plugins.bazarr.install.after':
    'È prevista una pull request ufficiale per integrare questo provider direttamente in Bazarr. Fino ad allora è un file pronto all’uso che aggiungi alla tua installazione.',
  'plugins.bazarr.cfg.key': 'La tua chiave Wyzie. Obbligatoria.',
  'plugins.bazarr.cfg.hi':
    'Restituisce solo i sottotitoli per non udenti (invia hi=true).',
  'plugins.bazarr.cfg.sources':
    'Elenco separato da virgole dei provider da interrogare, oppure `all`.',
  'plugins.bazarr.quota.402':
    '**402 o 429** (saldo esaurito o limite giornaliero raggiunto): Bazarr registra una nota con un link a [store.wyzie.io](https://store.wyzie.io) e non restituisce risultati, quindi ricade in modo pulito sugli altri provider. Niente va in crash.',
  'plugins.bazarr.quota.401':
    '**401** (chiave mancante) o **403** (chiave sconosciuta, o chiave in pausa): Bazarr mostra un errore di autenticazione così sai di dover controllare o reinserire la chiave.',
  'plugins.bazarr.ts.missing':
    '**Wyzie non compare nella lista dei provider.** Ricontrolla il passaggio di installazione che modifica `extensions.py`; la voce deve essere sia in `provider_registry` sia in `provider_manager`, poi riavvia Bazarr.',
  'plugins.bazarr.ts.none':
    '**Nessun sottotitolo trovato.** Verifica che l’elemento abbia un ID IMDB in Bazarr e che le lingue abilitate abbiano sottotitoli per esso. Restringi `sources` solo se è tua intenzione.',
  'plugins.bazarr.ts.settings':
    '**Campi delle impostazioni mancanti.** Il passaggio delle impostazioni non è stato applicato per la tua versione di Bazarr; confronta con un blocco di impostazioni di un provider funzionante e riavvia.',

  'plugins.kodi.intro':
    'Un servizio di sottotitoli per **Kodi 19+ (Matrix e successivi)**, LibreELEC e CoreELEC. Usa il punto di estensione standard di Kodi `xbmc.subtitle.module`, quindi appare ovunque Kodi cerchi i sottotitoli.',
  'plugins.kodi.before':
    'Ottieni una chiave API Wyzie gratuita su [store.wyzie.io/redeem](https://store.wyzie.io/redeem).',
  'plugins.kodi.repo.intro':
    'Installare il repository una volta consente a Kodi di **aggiornare automaticamente** l’add-on per te.',
  'plugins.kodi.repo.1':
    'Scarica l’installer del repository: [**repository.wyzie.zip**](https://kodi.wyzie.io/repository.wyzie.zip).',
  'plugins.kodi.repo.2':
    'In Kodi: **Impostazioni, Add-on, Installa da file zip**, poi scegli `repository.wyzie.zip`. Se Kodi lo blocca, abilita prima **Impostazioni, Sistema, Add-on, Origini sconosciute**.',
  'plugins.kodi.repo.3':
    '**Impostazioni, Add-on, Installa dal repository, Wyzie Repository, Servizi sottotitoli, Wyzie Subs, Installa.**',
  'plugins.kodi.repo.4':
    '**Impostazioni, Lettore, Lingua, Servizio sottotitoli predefinito**, poi seleziona **Wyzie Subs**.',
  'plugins.kodi.repo.5':
    'Apri le impostazioni dell’add-on Wyzie Subs e incolla la tua **chiave API**.',
  'plugins.kodi.zip.intro':
    'Usa questo se preferisci non aggiungere il repository. Nota: un’installazione da zip **non** si aggiorna automaticamente.',
  'plugins.kodi.zip.1':
    'Ottieni lo zip dell’add-on: `service.subtitles.wyzie-<version>.zip`. Per crearlo tu stesso, clona il [repository wyzie-plugins](https://github.com/wyziedevs/wyzie-plugins) (`git clone https://github.com/wyziedevs/wyzie-plugins.git`) e comprimi la sua cartella `kodi/` così che lo zip contenga `addon.xml` nella sua radice.',
  'plugins.kodi.zip.2':
    'In Kodi: **Impostazioni, Add-on, Installa da file zip**, poi scegli lo zip. Se Kodi lo blocca, abilita prima **Impostazioni, Sistema, Add-on, Origini sconosciute**.',
  'plugins.kodi.zip.3':
    '**Impostazioni, Lettore, Lingua, Servizio sottotitoli predefinito**, poi seleziona **Wyzie Subs**.',
  'plugins.kodi.zip.4':
    'Apri le impostazioni dell’add-on Wyzie Subs e incolla la tua **chiave API**.',
  'plugins.kodi.cfg.key': 'La tua chiave Wyzie. Obbligatoria.',
  'plugins.kodi.cfg.hi':
    'Restituisce solo i sottotitoli per non udenti (invia hi=true).',
  'plugins.kodi.cfg.langs':
    'Le lingue sono prese dalle lingue dei sottotitoli selezionate in Kodi e mappate automaticamente su ISO 639-1.',
  'plugins.kodi.matching.1':
    'Mentre qualcosa è in riproduzione, Kodi espone il numero IMDB, la stagione e l’episodio. L’add-on li legge, interroga `sub.wyzie.io/search` e restituisce i sottotitoli corrispondenti. Poiché Wyzie è guidato dagli ID (IMDB e TMDB), le corrispondenze sono accurate sia per i film che per le serie.',
  'plugins.kodi.matching.2':
    '**La ricerca manuale** attualmente mostra una notifica e non fa nulla, perché Wyzie effettua la corrispondenza sugli ID, non sui titoli. Una ricerca da titolo a ID è in programma. Per ora, lascia che Kodi cerchi automaticamente durante la riproduzione.',
  'plugins.kodi.quota':
    'Una risposta 402 o 429 mostra una notifica toast di Kodi che ti indirizza a [store.wyzie.io](https://store.wyzie.io) per ricaricare o abbonarti.',
  'plugins.kodi.ts.notoffered':
    '**Wyzie non viene offerto durante la riproduzione.** Verifica che sia impostato come **Servizio sottotitoli predefinito** e che l’elemento in riproduzione abbia un ID IMDB.',
  'plugins.kodi.ts.key':
    '**Chiave non valida.** Riapri le impostazioni dell’add-on e reincolla la tua chiave.',
  'plugins.kodi.ts.episode':
    '**Niente per un episodio.** Assicurati che Kodi abbia i metadati corretti di stagione ed episodio per il file; gli elementi della libreria con scraping funzionano meglio.',
};

export default messages;
