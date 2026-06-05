const messages: Record<string, string> = {
  // Navigation
  'nav.language': 'Language',

  // Index / Landing Page
  'index.subtitle':
    "Wyzie est un ensemble d'outils open source pour scraper des sous-titres et tout ce qui s'y rapporte.",
  'index.cta.start': 'Commencer',
  'index.cta.store': 'Découvrir',

  'index.card.keys.title': 'Clés API gratuites',
  'index.card.keys.body':
    'Obtenez une clé API gratuite sur store.wyzie.io/redeem avec une vérification Gmail rapide. 1 000 requêtes/jour sans frais. Des plans payants sont disponibles pour une utilisation plus intensive.',

  'index.card.ai.title': 'Traduction IA',
  'index.card.ai.body':
    "Traduisez n'importe quel sous-titre en 80+ langues à la demande. La diffusion se fait cue par cue, la lecture peut donc commencer en quelques secondes. Disponible sur les clés Pro.",

  'index.card.reliable.title': 'Fiable',
  'index.card.reliable.body':
    'Nous sommes fiers de notre disponibilité constante, de nos mises à jour (presque) quotidiennes et de notre mise en cache rapide.',

  'index.card.simple.title': 'La simplicité réinventée',
  'index.card.simple.body':
    'Facile à intégrer, facile à utiliser. Wyzie est conçu pour être aussi simple que possible.',

  // Donate Page
  'donate.title': 'Merci de faire un don',
  'donate.body':
    "Bonjour, Wyzie repose désormais en grande partie sur les dons (que je reçois à peine) et j'ai 16 ans avec un emploi à temps partiel. Parfois, ma facture pour faire fonctionner l'API publique dépasse 100 $ par mois. Je ne peux pas continuer à assurer ce service sans aide extérieure. Je suis vraiment désolé, mais ce projet a dépassé ce que je pouvais financer de ma poche.",
  'donate.cta': 'Soutenir Wyzie',

  // Subs Intro Page
  'subs.intro.title': 'Introduction à Wyzie Subs',
  'subs.intro.p1':
    "Wyzie Subs est une API de scraping de sous-titres libre et gratuite. Il existe deux façons d'effectuer des requêtes vers l'API : en utilisant notre package NPM ou en appelant directement l'API Wyzie. Je recommande d'utiliser notre package, mais certains trouveront les types encombrants. Pour utiliser l'API, vous devez d'abord faire ce choix.",
  'subs.intro.note.ai':
    "La traduction IA est disponible pour les clés Pro. N'importe quel titre, 80+ langues cibles, diffusé au fur et à mesure de la traduction.",
  'subs.intro.important.apikey':
    'Une clé API est requise pour toutes les requêtes. Obtenez une clé gratuite sur [store.wyzie.io/redeem](https://store.wyzie.io/redeem) (vérification Gmail, 1 000 requêtes/jour). Pour une utilisation plus intensive, des [plans Pro et recharges](https://store.wyzie.io) sont disponibles. Consultez la page Clés API pour plus de détails.',
  'subs.intro.note.npm':
    'Nous recommandons vivement le package NPM si vous êtes familier avec TypeScript ou JavaScript',
  'subs.intro.btn.npm': 'Package NPM',
  'subs.intro.btn.direct': 'Appel direct',

  'subs.intro.protect.h2': 'Protéger votre clé API',
  'subs.intro.protect.important':
    "**Incident réel :** nous avons vu des développeurs coller leur clé directement dans le JavaScript frontend d'un site de streaming. En quelques heures, une tierce partie l'a extraite du bundle JS et l'a utilisée jusqu'à épuisement de la limite quotidienne ou du solde payant. Le quota perdu de cette façon n'est pas remboursable et est considéré comme la responsabilité du propriétaire de la clé selon nos Conditions d'utilisation.",
  'subs.intro.protect.p1':
    'Votre clé API doit rester privée et ne doit **jamais** apparaître dans :',
  'subs.intro.protect.item1':
    'Le JavaScript du navigateur (tout ce qui est servi via une balise script)',
  'subs.intro.protect.item2':
    "Les binaires d'applications mobiles (Android/iOS, y compris les versions obfusquées)",
  'subs.intro.protect.item3': 'Les extensions de navigateur',
  'subs.intro.protect.item4':
    'Les applications Electron / bureau distribuées aux utilisateurs finaux',
  'subs.intro.protect.item5':
    "Les dépôts Git publics, gists, sites de partage ou captures d'écran",
  'subs.intro.protect.p2':
    "Si la clé atteint la machine d'un utilisateur final, considérez-la comme publique. Il existe deux méthodes sécurisées :",
  'subs.intro.protect.opt1.h3': 'Option 1 : Utiliser Wyzie Worker',
  'subs.intro.protect.opt1.p1':
    "Wyzie Worker est un proxy Cloudflare Worker léger qui injecte votre clé API côté serveur. Déployez-le sur Cloudflare Workers et définissez votre clé comme variable d'environnement NITRO_API_TOKEN. Pointez ensuite vos requêtes client vers l'URL de votre worker plutôt que vers sub.wyzie.io — le worker les transfère avec votre clé jointe.",
  'subs.intro.protect.opt2.h3': 'Option 2 : Créer votre propre proxy',
  'subs.intro.protect.opt2.p1':
    "Si vous préférez ne pas utiliser Wyzie Worker, vous pouvez créer un proxy côté serveur simple dans n'importe quel framework. L'idée est la même : votre backend reçoit les requêtes de votre client, y ajoute la clé API, et les transfère vers sub.wyzie.io.",

  // Subs Sources Page
  'subs.sources.title': 'Sources Wyzie Subs',
  'subs.sources.p1':
    "Wyzie Subs agrège des sous-titres provenant de plusieurs fournisseurs. La disponibilité des sources peut varier selon l'état du fournisseur ou si une source est hors ligne. Je suis toujours à la recherche de nouvelles sources, n'hésitez pas à en suggérer une.",

  'subs.sources.using.h2': 'Utiliser les sources',
  'subs.sources.using.bullet1':
    'Utilisez source=all pour interroger toutes les sources activées simultanément',
  'subs.sources.using.bullet2':
    "La source par défaut est opensubtitles si aucune n'est spécifiée",
  'subs.sources.using.bullet3':
    'Plusieurs sources peuvent être spécifiées sous forme de liste séparée par des virgules',

  'subs.sources.api.h2': 'Endpoint API',
  'subs.sources.api.p1':
    'Vous pouvez récupérer par programme la liste des sources actuellement activées et leur niveau de plan :',
  'subs.sources.api.free':
    'sources accessibles par toutes les clés, y compris les clés gratuites.',
  'subs.sources.api.paid': 'sources nécessitant une clé Pro.',
  'subs.sources.api.allFree':
    'si true, toutes les sources activées sont accessibles à toutes les clés et paid est vide.',

  'subs.sources.scope.h3': 'Portée par clé',
  'subs.sources.scope.p1':
    'Passez votre clé API pour obtenir les sources que cette clé peut réellement utiliser :',
  'subs.sources.scope.p2':
    'Cela ajoute des champs spécifiques à la clé sans consommer une requête de votre quota :',
  'subs.sources.scope.available':
    'sources que cette clé peut interroger maintenant.',
  'subs.sources.scope.restricted':
    'sources activées que cette clé ne peut pas interroger (passez en Pro pour les débloquer).',
  'subs.sources.scope.keyType': 'free ou paid.',
  'subs.sources.scope.keyValid':
    "est false si la clé est malformée ou introuvable, et null si la clé n'a pas pu être vérifiée (auquel cas available et restricted sont omis).",

  'subs.sources.details.h2': 'Détails des sources',

  'subs.sources.opensubtitles.desc':
    "La plus grande base de données de sous-titres en ligne. Prend en charge les films et séries TV dans un large éventail de langues. Utilise l'API REST officielle d'OpenSubtitles.",
  'subs.sources.opensubtitles.content': 'Films & séries TV',
  'subs.sources.opensubtitles.languages': 'Support multilingue étendu',
  'subs.sources.opensubtitles.formats': 'SRT, ASS, SSA, VTT, SUB, et plus',

  'subs.sources.subdl.desc':
    'Un site de sous-titres communautaire avec une large sélection de films et de séries TV.',
  'subs.sources.subdl.content': 'Films & séries TV',
  'subs.sources.subdl.languages': 'Support multilingue étendu',
  'subs.sources.subdl.formats': 'SRT, ASS, SSA, VTT, SUB, et plus',

  'subs.sources.subf2m.desc':
    'Un grand dépôt de sous-titres avec une couverture linguistique étendue pour les films et les séries TV.',
  'subs.sources.subf2m.content': 'Films & séries TV',
  'subs.sources.subf2m.languages': 'Support multilingue étendu',
  'subs.sources.subf2m.formats': 'SRT, ASS, SSA, VTT, SUB, et plus',

  'subs.sources.podnapisi.desc':
    "L'une des plus anciennes bases de données de sous-titres. Une collection bien organisée couvrant films et séries TV.",
  'subs.sources.podnapisi.content': 'Films & séries TV',
  'subs.sources.podnapisi.languages': 'Support multilingue étendu',
  'subs.sources.podnapisi.formats': 'SRT, ASS, SSA, VTT, SUB, et plus',

  'subs.sources.animetosho.desc':
    "Scrape les pièces jointes de sous-titres d'anime directement depuis les releases de torrents indexées sur AnimeTosho.",
  'subs.sources.animetosho.content': 'Anime (séries TV)',
  'subs.sources.animetosho.languages':
    "Japonais, anglais, et d'autres selon la release",
  'subs.sources.animetosho.formats': 'ASS, SRT, SSA, et autres',
  'subs.sources.animetosho.note':
    'AnimeTosho est prévu pour fermer en mai 2026.',

  'subs.sources.gestdown.desc':
    "Fournit des sous-titres pour les séries TV via l'API Gestdown avec un large support linguistique.",
  'subs.sources.gestdown.content': 'Séries TV uniquement',
  'subs.sources.gestdown.languages': 'Support multilingue étendu',
  'subs.sources.gestdown.formats': 'SRT, ASS, et plus',

  'subs.sources.jimaku.desc':
    "Scrape jimaku.cc, un dépôt communautaire de fichiers de sous-titres anime. Associe les titres via l'API TMDB.",
  'subs.sources.jimaku.content': 'Anime (films & séries TV)',
  'subs.sources.jimaku.languages':
    'Principalement japonais ; aussi anglais, chinois, et plus selon les fichiers disponibles',
  'subs.sources.jimaku.formats': 'SRT, ASS, SSA, VTT, SUB, et autres',

  'subs.sources.kitsunekko.desc':
    "Scrape les listes de répertoires de kitsunekko.net, un dépôt dédié aux sous-titres anime. Associe les titres via l'API TMDB.",
  'subs.sources.kitsunekko.content': 'Anime (séries TV)',
  'subs.sources.kitsunekko.languages':
    'Répertoires de sous-titres en anglais et japonais',
  'subs.sources.kitsunekko.formats': 'SRT, ASS, SSA, VTT, SUB, et autres',

  'subs.sources.yify.desc':
    'Scrape yifysubtitles.ch pour des sous-titres associés par IMDB ID. Films uniquement.',
  'subs.sources.yify.content':
    'Films uniquement (les séries TV ne sont pas prises en charge)',
  'subs.sources.yify.languages':
    "Support multilingue étendu (albanais, arabe, anglais, français, espagnol, et bien d'autres)",
  'subs.sources.yify.formats': 'SRT (livré dans une archive ZIP)',

  'subs.sources.ajatttools.desc':
    "Récupère des sous-titres depuis le dépôt GitHub Ajatt-Tools/kitsunekko-mirror. Organisé par type de média. Associe les titres via l'API TMDB.",
  'subs.sources.ajatttools.content': 'Anime & drama (séries TV et films)',
  'subs.sources.ajatttools.languages':
    'Principalement japonais ; aussi anglais, chinois, et autres',
  'subs.sources.ajatttools.formats': 'SRT, ASS, SSA, VTT, SUB, et autres',

  'subs.sources.ai.desc':
    'Pas un scraper. SRT traduit par IA, généré à la demande depuis le meilleur sous-titre source disponible. Consultez le guide Traduction IA pour tous les détails.',
  'subs.sources.ai.content': 'Tout ce pour quoi Wyzie peut trouver un SRT',
  'subs.sources.ai.languages': '80+ langues cibles',
  'subs.sources.ai.formats': 'SRT uniquement',

  // Subs Package Page
  'subs.pkg.title': 'Utiliser le package NPM Wyzie',
  'subs.pkg.p1':
    'Le package NPM Wyzie Subs fournit une interface simple et facile à utiliser pour rechercher et récupérer des sous-titres.',
  'subs.pkg.install.h2': 'Installation',
  'subs.pkg.important':
    'Une clé API est requise pour toutes les requêtes. Obtenez une clé gratuite sur [store.wyzie.io/redeem](https://store.wyzie.io/redeem) et passez-la via le paramètre key. Consultez la page Clés API pour plus de détails.',
  'subs.pkg.usage.h2': 'Utilisation',
  'subs.pkg.params.h3': 'Paramètres',
  'subs.pkg.params.note':
    "Pour plus d'informations (ou si vous êtes bloqué), consultez la [page d'accueil Wyzie Subs](https://sub.wyzie.io).",

  'subs.pkg.param.tmdb':
    'TMDB ID du film ou de la série TV (tmdb_id ou imdb_id est requis).',
  'subs.pkg.param.imdb':
    'IMDB ID du film ou de la série TV (imdb_id ou tmdb_id est requis).',
  'subs.pkg.param.format':
    'Formats de fichiers à retourner (ex. : srt, ass). Accepte une liste.',
  'subs.pkg.param.season': 'Numéro de saison (nécessite episode).',
  'subs.pkg.param.episode': "Numéro d'épisode (nécessite season).",
  'subs.pkg.param.language':
    'Codes ISO 639-1 pour la langue des sous-titres. Accepte une liste.',
  'subs.pkg.param.encoding':
    "Filtre d'encodage de caractères (ex. : utf-8, latin-1).",
  'subs.pkg.param.hi': 'Booléen pour les sous-titres malentendants.',
  'subs.pkg.param.source':
    'Fournisseurs de sous-titres à interroger (all pour toutes les sources activées).',
  'subs.pkg.param.release': 'Filtres de release/scène (accepte une liste).',
  'subs.pkg.param.filename':
    'Filtres de nom de fichier ; les alias file et fileName sont pris en charge.',
  'subs.pkg.param.origin':
    "Filtre d'origine du contenu (ex. : WEB, BLURAY, DVD).",
  'subs.pkg.param.key':
    'Votre clé API (requise). Obtenez-en une gratuitement sur store.wyzie.io/redeem.',
  'subs.pkg.param.refresh':
    'Contourne le cache et récupère des résultats frais depuis les sources.',

  'subs.pkg.helpers':
    "Le package inclut également des helpers TMDB légers : searchTmdb, getTvDetails et getSeasonDetails pour trouver rapidement des IDs avant d'appeler /search. De plus, getSources peut être utilisé pour récupérer la liste des sources de sous-titres actuellement activées.",
  'subs.pkg.types.h3': 'Types',
  'subs.pkg.type.search': "Tous les paramètres valides reconnus par l'API.",
  'subs.pkg.type.query':
    "Tous les paramètres (optionnels et requis) disponibles pour l'API wyzie-subs.",
  'subs.pkg.type.subtitle':
    "Toutes les valeurs retournées par l'API avec leurs types respectifs.",
  'subs.pkg.type.sources': 'Type de réponse du endpoint /sources.',
  'subs.pkg.types.end':
    'Nos types sont très simples et bien documentés. Consultez le fichier types.ts lié dans le dépôt GitHub.',
  'subs.pkg.config.h3': 'Configuration',
  'subs.pkg.config.p1':
    "Un utilisateur m'a demandé sur Github un nom d'hôte API configurable et je me suis dit que c'était une bonne idée, donc voici l'utilisation ci-dessous. Je vous adore !",

  // Subs Direct Page
  'subs.direct.title': 'Appel direct à Wyzie Subs',
  'subs.direct.caution':
    "Je recommande vivement d'utiliser le package NPM car il est plus simple et plus fiable.",
  'subs.direct.p1':
    "Si vous avez décidé de ne pas utiliser le package NPM, alors commençons. Je ne couvrirai que les paramètres de l'API et les données retournées. La façon dont vous appelez l'API vous appartient entièrement.",
  'subs.direct.important':
    'Une clé API est requise pour toutes les requêtes. Obtenez une clé gratuite sur [store.wyzie.io/redeem](https://store.wyzie.io/redeem) et incluez-la sous la forme &key=YOUR_KEY dans chaque requête. Consultez la page Clés API pour plus de détails.',

  'subs.direct.params.h3': 'Paramètres',
  'subs.direct.param.id': 'TMDB ou IMDB ID de la série ou du film (requis).',
  'subs.direct.param.seasonEpisode':
    'Saison et épisode pour les recherches TV. Les deux doivent être présents ensemble.',
  'subs.direct.param.language':
    'Filtre de langue (codes ISO 639-1). Plusieurs valeurs séparées par des virgules.',
  'subs.direct.param.format':
    'Formats de sous-titres à retourner. Plusieurs valeurs autorisées.',
  'subs.direct.param.hi':
    "Indique s'il faut préférer les sous-titres malentendants.",
  'subs.direct.param.encoding': "Filtre d'encodage de caractères.",
  'subs.direct.param.source':
    'Fournisseurs de sous-titres à interroger (all interroge toutes les sources activées ; par défaut opensubtitles).',
  'subs.direct.param.release':
    'Filtres de release ou de scène (séparés par des virgules).',
  'subs.direct.param.file':
    'Filtres de nom de fichier (alias : file, filename, fileName).',
  'subs.direct.param.origin':
    "Filtre d'origine du contenu, séparé par des virgules (ex. : WEB, BLURAY, DVD).",
  'subs.direct.param.key':
    'Votre clé API (requise). Obtenez-en une gratuitement sur store.wyzie.io/redeem.',
  'subs.direct.param.refresh':
    'Contourne le cache et récupère des résultats frais. À utiliser quand les sources peuvent avoir été mises à jour.',
  'subs.direct.important.imdb':
    "Lors de l'utilisation d'un IMDB ID, assurez-vous que les deux premiers caractères ('tt') sont inclus au début de l'ID.",

  'subs.direct.data.h3': 'Données retournées',
  'subs.direct.data.id': "L'ID du fichier de sous-titres.",
  'subs.direct.data.url': "L'URL du fichier de sous-titres.",
  'subs.direct.data.flagUrl': 'URL du drapeau de la langue.',
  'subs.direct.data.format': 'Le format du fichier de sous-titres.',
  'subs.direct.data.encoding':
    "L'encodage de caractères du fichier de sous-titres.",
  'subs.direct.data.display': 'La langue des sous-titres, avec majuscule.',
  'subs.direct.data.language': 'Le code ISO 3166-2 de la langue.',
  'subs.direct.data.media':
    'Le nom du média auquel les sous-titres correspondent.',
  'subs.direct.data.isHearingImpaired':
    'Booléen indiquant si le sous-titre est accessible aux malentendants.',
  'subs.direct.data.source':
    'La source depuis laquelle le sous-titre a été scrapé.',
  'subs.direct.data.release': 'Nom de release principal.',
  'subs.direct.data.releases':
    'Autres noms de release compatibles avec le sous-titre.',
  'subs.direct.data.fileName': 'Nom de fichier original si disponible.',
  'subs.direct.data.downloadCount':
    'Nombre de téléchargements sur la plateforme source (si disponible).',
  'subs.direct.data.origin': 'Origine du contenu (ex. : WEB, BluRay, DVD).',
  'subs.direct.data.matchedRelease':
    'Valeur de release correspondant à votre filtre (si fourni).',
  'subs.direct.data.matchedFilter':
    "Le filtre fourni par l'utilisateur qui a correspondu (si fourni).",
  'subs.direct.data.ai':
    "true si l'entrée est un sous-titre traduit par IA, false pour les sous-titres scrapés normalement. Utilisez-le comme filtre côté client quand vous ne souhaitez que l'un ou l'autre.",

  // Subs Translate Page
  'subs.translate.title': 'Traduction de sous-titres par IA',
  'subs.translate.important':
    "La traduction IA est une **fonctionnalité Pro**. Chaque traduction coûte **100 requêtes** du solde de votre clé, facturées aussi bien sur un cache hit que sur une traduction fraîche. Les clés gratuites ne peuvent pas l'utiliser.",
  'subs.translate.p1':
    "Wyzie peut traduire n'importe quel sous-titre en 80+ langues à la volée. Les traductions sont diffusées au fur et à mesure que le modèle les produit, la lecture peut donc commencer en une seconde ou deux sans attendre tout le fichier. Les résultats sont mis en cache pendant 30 jours, ainsi la deuxième personne qui demande la même traduction la reçoit instantanément.",

  'subs.translate.ways.h2': "Deux façons de l'utiliser",
  'subs.translate.way1.h3':
    '1. Choisir une langue depuis une réponse de recherche',
  'subs.translate.way1.p1':
    "Chaque réponse /search inclut désormais une entrée supplémentaire par langue prise en charge avec \"ai\": true et une url pointant vers /translate. Traitez simplement les lignes IA comme n'importe quelle autre ligne de sous-titre dans votre interface : quand l'utilisateur clique sur l'une d'elles, récupérez l'URL.",
  'subs.translate.way1.filter':
    'Si vous souhaitez masquer les lignes IA de votre interface, filtrez-les :',
  'subs.translate.way2.h3': '2. Appeler /translate directement',

  'subs.translate.param.id': 'TMDB ou IMDB ID (requis).',
  'subs.translate.param.target':
    'Langue cible sous son nom complet en anglais (ex. Spanish, Japanese, Brazilian Portuguese) (requis).',
  'subs.translate.param.seasonEpisode':
    'Pour la TV. Les deux doivent être présents ensemble.',
  'subs.translate.param.key':
    "Votre clé API. Utilisez tk à la place si vous avez obtenu l'URL depuis /search.",
  'subs.translate.param.tk':
    "Jeton signé retourné par /search. Équivalent à key, mais n'expose pas la clé brute.",

  'subs.translate.headers.p':
    'Le corps de la réponse est un fichier SRT diffusé en text/plain; charset=utf-8. En-têtes de réponse utiles :',
  'subs.translate.header.xcache':
    'HIT-REDIS si servi depuis le cache, MISS si généré frais.',
  'subs.translate.header.xsourcelang':
    'langue du sous-titre utilisé comme entrée par le traducteur.',
  'subs.translate.header.xtargetlang': 'écho de votre paramètre target.',
  'subs.translate.header.xsourceprovider':
    'quel scraper a fourni le sous-titre source.',

  'subs.translate.how.h2': 'Comment ça fonctionne',
  'subs.translate.how.step1':
    "Wyzie recherche dans les sources normales un sous-titre SRT, en préférant l'anglais quand disponible.",
  'subs.translate.how.step2':
    "Le SRT est découpé en morceaux de 50 cues et traduit séquentiellement. Chaque morceau est mis en cache individuellement à mesure qu'il se termine.",
  'subs.translate.how.step3':
    'La sortie vous est diffusée cue par cue. Les lecteurs acceptant un corps SRT en streaming peuvent commencer à afficher les premières lignes avant que le reste soit terminé.',
  'subs.translate.how.step4':
    'La traduction complète est mise en cache dans Redis pendant 30 jours, indexée par id, saison, épisode et langue cible.',

  'subs.translate.languages.h2': 'Langues cibles prises en charge',
  'subs.translate.languages.p':
    '80+ langues incluant toutes les principales langues européennes, asiatiques, africaines et du Moyen-Orient. Passez le nom en anglais (Spanish, pas es). La liste est également retournée sous forme de lignes ai: true dans toute réponse /search, qui est la source de vérité canonique.',

  'subs.translate.limitations.h2': 'Limitations',
  'subs.translate.limit1':
    'La traduction IA nécessite une source SRT. Les titres pour lesquels chaque sous-titre disponible est en .ass, .vtt ou autre format retourneront 404 No SRT found.',
  'subs.translate.limit2':
    'La qualité de la traduction dépend du sous-titre source. Un source mal synchronisé ou mal tapé produit une traduction mal synchronisée ou mal tapée.',
  'subs.translate.limit3':
    'Certains utilisateurs peuvent vouloir exclure entièrement les lignes IA. Filtrez sur ai === false dans votre client.',
  'subs.translate.limit4':
    "Les traductions sont facturées aussi sur les cache hits. Qu'elle soit fraîchement générée ou servie depuis le cache de 30 jours, chaque requête /translate coûte 100 requêtes.",

  // Subs API Keys Page
  'subs.keys.title': 'Clés API',
  'subs.keys.p1':
    "Wyzie Subs nécessite une clé API pour toutes les requêtes. Un niveau gratuit couvre la plupart des cas d'usage ; les plans payants gèrent une utilisation plus intensive.",

  'subs.keys.tiers.h2': 'Niveaux',
  'subs.keys.tier.free': 'Gratuit (Gmail requis)',
  'subs.keys.tier.free.limit': '1 000 requêtes / jour UTC',
  'subs.keys.tier.pro': '5 $ unique',
  'subs.keys.tier.pro.limit': '400 000 requêtes',
  'subs.keys.tier.topup': 'à partir de 0,0625 $ / 5K',
  'subs.keys.tier.topup.limit': "S'ajoute à votre solde payant",
  'subs.keys.tiers.end':
    "Les plans Pro et recharges n'expirent pas. Vous préférez un paiement récurrent ? Un abonnement à 32 $/mois offre 6 000 000 de requêtes/mois (carte uniquement). Consultez store.wyzie.io pour la tarification complète et le tableau de bord.",

  'subs.keys.free.h2': 'Obtenir une clé gratuite',
  'subs.keys.free.p':
    'Visitez [store.wyzie.io/redeem](https://store.wyzie.io/redeem) :',
  'subs.keys.free.step1': 'Résolvez un captcha Cloudflare Turnstile rapide.',
  'subs.keys.free.step2':
    'Entrez une adresse Gmail (seul Gmail est accepté pour le niveau gratuit).',
  'subs.keys.free.step3':
    'Entrez le code à 6 chiffres que nous vous envoyons par email.',
  'subs.keys.free.step4':
    'Vous recevez une clé API qui ressemble à wyzie-abc123...',
  'subs.keys.free.gmail':
    "Chaque adresse Gmail ne peut obtenir qu'une seule clé gratuite. Vous aviez déjà une clé gratuite liée à cet email ? La vérification vous retourne simplement votre clé existante.",

  'subs.keys.pro.h2': 'Passer en Pro',
  'subs.keys.pro.p1':
    'Visitez [store.wyzie.io](https://store.wyzie.io) et finalisez votre achat avec le même email que celui utilisé pour votre clé gratuite. Votre clé wyzie-... existante est mise à niveau sur place avec 400K requêtes payantes ajoutées. Vous préférez un paiement récurrent ? Un abonnement à 32 $/mois ajoute plutôt un quota mensuel de 6 000 000 de requêtes (carte uniquement).',
  'subs.keys.pro.p2':
    'Si vous finalisez votre achat avec un tout nouvel email (sans clé préalable), une nouvelle clé wyzie-... est générée et vous est envoyée par email.',

  'subs.keys.protect.h2': 'Gardez votre clé hors du client',
  'subs.keys.protect.important':
    "**N'intégrez jamais votre clé API dans du code côté client.** Le JavaScript du navigateur, les applications mobiles, les extensions de navigateur, les applications bureau de type Electron, et les dépôts Git publics sont tous considérés comme côté client. Tout ce que vous envoyez à un utilisateur final peut être inspecté par lui, et nous avons vu de vrais cas où des utilisateurs ont collé leur clé dans le frontend d'un site de streaming, pour qu'une tierce partie scrape le bundle JS et épuise le solde de requêtes en quelques heures. Le quota consommé de cette façon n'est pas remboursable.",
  'subs.keys.protect.p2':
    "Deux façons sécurisées d'utiliser la clé depuis une application client :",
  'subs.keys.protect.option1':
    "Utilisez [Wyzie Worker](https://github.com/wyziedevs/wyzie-worker) : un proxy Cloudflare Worker gratuit qui conserve votre clé côté serveur. Pointez votre client vers l'URL du Worker plutôt que sub.wyzie.io.",
  'subs.keys.protect.option2':
    "Créez votre propre proxy : n'importe quel endpoint backend qui ajoute la clé avant de transmettre à sub.wyzie.io fonctionne. Consultez la page Introduction pour un exemple en 10 lignes.",
  'subs.keys.protect.devtools':
    'Si la clé apparaît dans un onglet réseau des DevTools, elle est exposée. Considérez-la comme publique et renouvelez-la en contactant le support.',

  'subs.keys.using.h2': 'Utiliser votre clé',
  'subs.keys.using.p': 'Ajoutez &key=YOUR_KEY à chaque requête API :',
  'subs.keys.using.npm.h3': 'Package NPM',

  'subs.keys.limit.h2': 'Atteindre la limite',
  'subs.keys.limit.free':
    "**Niveau gratuit** épuisé -> L'API retourne 429 avec les en-têtes X-RateLimit-Reset et Retry-After. Le compteur quotidien se réinitialise à minuit UTC.",
  'subs.keys.limit.paid':
    "**Solde payant** épuisé -> L'API retourne 402. Rechargez sur [store.wyzie.io/topup](https://store.wyzie.io/topup) ou activez la **recharge automatique** dans votre tableau de bord pour recharger automatiquement quand votre solde franchit un seuil que vous définissez.",

  'subs.keys.faq.h2': 'FAQ',
  'subs.keys.faq.q1': "J'ai perdu ma clé. Puis-je en obtenir une nouvelle ?",
  'subs.keys.faq.a1':
    'Visitez [store.wyzie.io](https://store.wyzie.io) et utilisez le flux « clé oubliée » avec votre email enregistré ; nous vous renverrons votre clé existante.',
  'subs.keys.faq.q2': 'Puis-je utiliser une seule clé dans plusieurs projets ?',
  'subs.keys.faq.a2':
    "Oui. Votre clé fonctionne partout où vous appelez l'API.",
  'subs.keys.faq.q3': 'Ma clé expire-t-elle un jour ?',
  'subs.keys.faq.a3':
    "Non. Les clés gratuites et payantes n'expirent pas. Les clés gratuites sont limitées par jour ; le solde payant persiste jusqu'à ce que vous l'utilisiez.",
  'subs.keys.faq.q4': 'La recharge automatique est-elle sûre ?',
  'subs.keys.faq.a4':
    'Vous définissez un plafond de dépenses mensuel. Nous ne facturons jamais au-delà, et la désactivation en un clic est présente dans chaque email de confirmation ainsi que dans votre tableau de bord.',

  // Proxy Intro Page
  'proxy.intro.title': 'Introduction à Wyzie Proxy',
  'proxy.intro.note':
    "La version de production de Wyzie Subs n'utilise plus ce proxy, mais utilise plutôt [i6.shark](https://github.com/wyziedevs/i6.shark).",
  'proxy.intro.p1':
    "Wyzie Proxy est une puissante API proxy qui vous permet d'effectuer des requêtes vers n'importe quel site web sans restrictions CORS ni autres. Comme Wyzie Proxy est développé avec Nitro, il peut être hébergé sur l'une des plateformes suivantes : AWS Amplify, Azure, Cloudflare, Netlify, Stormkit, Vercel, Zeabur.",
  'proxy.intro.btn.hosting': 'Hébergement',
  'proxy.intro.btn.check': 'Découvrir',

  // Proxy Hosting Page
  'proxy.hosting.title': 'Héberger Wyzie Proxy',
  'proxy.hosting.p1':
    "Construire Wyzie Proxy est plus facile que de respirer, grâce à Nitro. D'abord, clonez le dépôt de Wyzie Proxy avec :",
  'proxy.hosting.p2': 'Ensuite, installez tous les packages nécessaires avec :',
  'proxy.hosting.p3':
    'Une fois tous les packages installés, vous pouvez construire le proxy :',
  'proxy.hosting.p4':
    'La sortie sera générée dans le dossier /.output/server. Si vous déployez sur Cloudflare Workers, copiez et collez le fichier index.mjs dans le worker ; sinon, vous pouvez déployer les fichiers normalement.',

  // i6.shark Intro Page
  'i6shark.intro.title': 'Introduction à i6.shark',
  'i6shark.intro.p1':
    "i6.shark est un serveur proxy IPv6 qui vous permet d'effectuer des requêtes HTTP depuis des adresses IPv6 générées aléatoirement dans un sous-réseau /48. C'est le proxy qui alimente actuellement Wyzie Subs en production.",
  'i6shark.intro.p2':
    "Un sous-réseau /48 contient 1 208 925 819 614 629 174 706 176 (1,2 x 10^24) adresses IPv6, rendant le blocage par liste noire d'IP traditionnelle pratiquement impossible. L'utilisation d'un seul sous-réseau signifie que ceux qui veulent vraiment vous bloquer peuvent bloquer votre adresse ASN, alors soyez prudent.",
  'i6shark.intro.btn.hosting': 'Hébergement',
  'i6shark.intro.btn.github': 'GitHub',

  'i6shark.intro.features.h2': 'Fonctionnalités',
  'i6shark.intro.feature1':
    "**Génération d'IPv6 aléatoire** : Crée des adresses IPv6 aléatoires depuis votre préfixe /48 pour chaque requête",
  'i6shark.intro.feature2':
    '**Support complet des méthodes HTTP** : GET, POST, PUT, DELETE et toutes les autres méthodes HTTP',
  'i6shark.intro.feature3':
    '**Authentification HMAC-SHA256** : Authentification sécurisée par clé API via des jetons basés sur le user-agent',
  'i6shark.intro.feature4':
    "**Gestion intelligente du pool d'IP** : Rotation automatique d'IP avec taille de pool configurable. Gestion intelligente du cycle de vie des IP. Comptage des requêtes par IP. Nettoyage des IP inutilisées selon un seuil d'inactivité.",
  'i6shark.intro.feature5':
    "**Traitement avancé des requêtes** : Transfert d'en-têtes personnalisés. Suppression des en-têtes Cloudflare et CDN. Support de multiples formats de paramètres URL. Repli optionnel sur l'IP système par défaut.",
  'i6shark.intro.feature6':
    '**Liste blanche de domaines** : Liste blanche intégrée pour la sécurité (configurable dans le code)',
  'i6shark.intro.feature7':
    "**Maintenance automatique** : Vidage périodique du pool d'IP. Validation et nettoyage des sous-réseaux. Mise en pool de connexions et optimisation keepalive.",
  'i6shark.intro.feature8':
    "**Haute performance** : Gestion des requêtes concurrentes avec mise en pool de buffers. Délais d'attente et limites de connexion configurables. Gestion efficace des adresses IPv6.",
  'i6shark.intro.feature9':
    '**Mode débogage** : Journalisation détaillée pour le dépannage et la surveillance',

  'i6shark.intro.requirements.h2': 'Prérequis',
  'i6shark.intro.req1': 'Go 1.20 ou supérieur',
  'i6shark.intro.req2':
    'Système Linux/Unix avec support IPv6 (de préférence Ubuntu)',
  'i6shark.intro.req3':
    'Privilèges root (pour la liaison sur le port 80 et la manipulation IPv6)',
  'i6shark.intro.req4':
    "Allocation de sous-réseau IPv6 /48 par votre fournisseur d'hébergement",

  'i6shark.intro.providers.h2': "Fournisseurs d'hébergement",
  'i6shark.intro.providers.p1':
    'Les fournisseurs suivants sont connus pour proposer des sous-réseaux IPv6 /48 :',

  // i6.shark Hosting Page
  'i6shark.hosting.title': 'Héberger i6.shark',
  'i6shark.hosting.p1':
    "La configuration d'i6.shark nécessite un VPS avec un sous-réseau IPv6 /48. Une fois configuré, il fonctionne de manière autonome avec une maintenance minimale.",

  'i6shark.hosting.steps.h2': 'Étapes',
  'i6shark.hosting.step1': 'Clonez le dépôt vers /opt/i6.shark :',
  'i6shark.hosting.step2': 'Configurez les constantes dans src/consts.go :',
  'i6shark.hosting.step2.note':
    'Mettez à jour SharedSecret, IPv6Prefix et Interface pour correspondre à votre serveur. Les autres constantes de réglage ont des valeurs par défaut sensées et ne nécessitent généralement pas de modifications.',
  'i6shark.hosting.step3': "Compilez l'application :",
  'i6shark.hosting.step4': 'Créez le service systemd :',
  'i6shark.hosting.step5': 'Activez et démarrez le service :',
  'i6shark.hosting.step5.check': "Vérifiez l'état :",
  'i6shark.hosting.post':
    "Le serveur proxy s'exécutera désormais automatiquement au démarrage et redémarrera de lui-même en cas de crash.",

  'i6shark.hosting.daily.h2': 'Redémarrage quotidien (optionnel)',
  'i6shark.hosting.daily.p':
    'Ajoutez une tâche cron pour redémarrer le serveur quotidiennement à une heure aléatoire :',

  'i6shark.hosting.auth.h2': 'Authentification API',
  'i6shark.hosting.auth.p':
    "Les jetons API sont générés via HMAC-SHA256 avec une clé secrète partagée. L'entrée pour la génération de clé est l'en-tête user-agent. Consultez la fonction validateAPIToken dans le code source pour les détails d'implémentation.",

  // Plugins
  'plugins.common.required': 'Requis',

  'plugins.index.intro':
    "Wyzie Subs s'intègre directement aux applications multimédias que vous utilisez déjà. Chaque plugin communique avec le même point de terminaison `https://sub.wyzie.io/search` et nécessite une **clé API Wyzie** gratuite. Obtenez-en une sur [store.wyzie.io](https://store.wyzie.io/#plans).",
  'plugins.index.tbl.stremio.for':
    'Regarder dans Stremio sur ordinateur, mobile ou TV',
  'plugins.index.tbl.stremio.install':
    'Add-on hébergé : collez votre clé, cliquez sur Installer',
  'plugins.index.tbl.bazarr.for':
    'Bibliothèques Plex, Jellyfin, Emby, Sonarr, Radarr',
  'plugins.index.tbl.bazarr.install':
    "Fournisseur prêt à l'emploi pour votre instance Bazarr",
  'plugins.index.tbl.kodi.for': 'Kodi 19+, LibreELEC, CoreELEC',
  'plugins.index.tbl.kodi.install': 'Installer depuis un zip ou le dépôt Wyzie',
  'plugins.index.use.stremio':
    "Utilisez **Stremio** si vous regardez dans l'application Stremio.",
  'plugins.index.use.bazarr':
    "Utilisez **Bazarr** si vous utilisez Plex, Jellyfin ou Emby. Bazarr télécharge les fichiers de sous-titres sur le disque et votre serveur multimédia les récupère automatiquement. C'est également la voie recommandée pour Plex et Jellyfin ; il n'existe pas de plugin natif distinct.",
  'plugins.index.use.kodi':
    'Utilisez **Kodi** pour un service de sous-titres natif Kodi sur Android TV, un Raspberry Pi ou un PC home cinéma.',
  'plugins.index.shared.sources':
    '**Sources :** OpenSubtitles, SubDL et Podnapisi, agrégés via Wyzie.',
  'plugins.index.shared.matching':
    "**Correspondance :** Wyzie repose sur les identifiants IMDB et TMDB ainsi que la saison et l'épisode, de sorte que les correspondances sont précises pour les films comme pour les séries.",
  'plugins.index.shared.quota':
    "**Quota :** lorsque votre clé est épuisée, le plugin affiche une invite conviviale renvoyant vers [store.wyzie.io](https://store.wyzie.io) au lieu d'échouer silencieusement. Rechargez ou abonnez-vous et vous êtes de nouveau opérationnel.",
  'plugins.index.shared.languages':
    '**Langues :** 100+, sélectionnables par plugin.',
  'plugins.index.outro':
    'Choisissez votre plateforme ci-dessus pour commencer.',

  'plugins.stremio.intro':
    "Un add-on de sous-titres en un clic pour [Stremio](https://www.stremio.com/). Il agrège OpenSubtitles, SubDL et Podnapisi via Wyzie et fonctionne pour les films comme pour les séries, sur toutes les plateformes où Stremio s'exécute.",
  'plugins.stremio.before':
    "Vous avez besoin d'une clé API Wyzie gratuite. Obtenez-en une sur [store.wyzie.io/redeem](https://store.wyzie.io/redeem), ou achetez une clé Pro ou abonnez-vous sur [store.wyzie.io](https://store.wyzie.io/#plans).",
  'plugins.stremio.install.1':
    'Ouvrez [stremio.wyzie.io/configure](https://stremio.wyzie.io/configure).',
  'plugins.stremio.install.2': 'Collez votre **clé API**.',
  'plugins.stremio.install.3':
    'Optionnel : saisissez vos **langues** préférées sous forme de codes ISO 639-1, séparés par des virgules (par exemple `en,es,fr`). Laissez vide pour toutes les langues.',
  'plugins.stremio.install.4':
    'Optionnel : activez les sous-titres pour **malentendants** si vous les préférez.',
  'plugins.stremio.install.5':
    "Cliquez sur **Installer**. Stremio s'ouvre et vous demande de confirmer ; acceptez, et c'est terminé.",
  'plugins.stremio.install.after':
    "Votre clé et vos préférences sont encodées dans l'add-on, il n'y a donc rien d'autre à configurer. Ouvrez n'importe quel film ou épisode et choisissez un sous-titre dans la liste.",
  'plugins.stremio.cfg.key.f': 'Clé API',
  'plugins.stremio.cfg.key.d': 'Votre clé Wyzie. Requise.',
  'plugins.stremio.cfg.langs.f': 'Langues',
  'plugins.stremio.cfg.langs.d':
    'Codes ISO 639-1, séparés par des virgules. Vide signifie toutes les langues.',
  'plugins.stremio.cfg.hi.f': 'Malentendants',
  'plugins.stremio.cfg.hi.d':
    'Préférer les sous-titres pour malentendants lorsque disponibles.',
  'plugins.stremio.cfg.note':
    "Pour modifier l'un de ces réglages plus tard, rouvrez [stremio.wyzie.io/configure](https://stremio.wyzie.io/configure), ajustez et réinstallez.",
  'plugins.stremio.local':
    'Ouvrez ensuite `http://127.0.0.1:7000/configure`, collez votre clé et installez dans Stremio.',
  'plugins.stremio.quota':
    "Si votre clé atteint sa limite, l'add-on affiche une seule entrée de sous-titre renvoyant vers [store.wyzie.io](https://store.wyzie.io) afin que vous puissiez recharger ou vous abonner. Une fois que c'est fait, les sous-titres reviennent immédiatement.",
  'plugins.stremio.ts.none':
    "**Aucun sous-titre n'apparaît.** Assurez-vous que le titre possède un identifiant IMDB dans Stremio (la plupart des éléments du catalogue en ont un) et que les langues que vous avez choisies disposent bien de sous-titres pour ce titre. Essayez d'effacer le filtre de langue pour tout afficher.",
  'plugins.stremio.ts.key':
    '**Clé invalide, ou rien ne se charge.** Rouvrez la page de configuration et recollez votre clé ; un espace parasite la casse. Vérifiez que la clé fonctionne sur [store.wyzie.io/dashboard](https://store.wyzie.io/dashboard).',
  'plugins.stremio.ts.episode':
    "**L'épisode d'une série ne correspond pas.** Wyzie effectue la correspondance sur la saison et l'épisode ; assurez-vous que Stremio lit la bonne entrée d'épisode, et non une page de série générique.",

  'plugins.bazarr.intro':
    '[Bazarr](https://www.bazarr.media/) gère les sous-titres pour **Plex, Jellyfin, Emby, Sonarr et Radarr** au même endroit. Ajouter Wyzie comme fournisseur donne à tous ces serveurs accès à OpenSubtitles, SubDL et Podnapisi via une seule clé.',
  'plugins.bazarr.note':
    "C'est la manière recommandée d'utiliser Wyzie avec Plex et Jellyfin. Bazarr télécharge les fichiers de sous-titres à côté de vos médias, et votre serveur les récupère automatiquement, donc aucun plugin natif distinct n'est requis.",
  'plugins.bazarr.before':
    "Obtenez une clé API Wyzie gratuite sur [store.wyzie.io/redeem](https://store.wyzie.io/redeem), et ayez accès aux fichiers d'installation de votre Bazarr (chemin Docker typique : `/opt/bazarr/bazarr/`).",
  'plugins.bazarr.install.1':
    'Copiez `wyzie.py` vers `bazarr/subliminal_patch/providers/wyzie.py`.',
  'plugins.bazarr.install.2':
    'Modifiez `bazarr/subliminal_patch/extensions.py` et ajoutez `wyzie` à la fois dans `provider_registry` **et** `provider_manager`.',
  'plugins.bazarr.install.3':
    "Modifiez `bazarr/list_subtitles.py` (ou `bazarr/config.py`, selon votre version) pour exposer les réglages `api_key`, `prefer_hi` et `sources`. Copiez le modèle d'un fournisseur existant tel que `opensubtitlescom`.",
  'plugins.bazarr.install.4': 'Redémarrez Bazarr.',
  'plugins.bazarr.install.5':
    'Allez dans **Settings, Providers, Wyzie**, collez votre clé API et enregistrez.',
  'plugins.bazarr.install.after':
    "Une pull request de premier ordre pour intégrer ce fournisseur en amont dans Bazarr est prévue. En attendant, il s'agit d'un fichier prêt à l'emploi que vous ajoutez à votre propre installation.",
  'plugins.bazarr.cfg.key': 'Votre clé Wyzie. Requise.',
  'plugins.bazarr.cfg.hi': 'Préférer les sous-titres pour malentendants.',
  'plugins.bazarr.cfg.sources':
    'Liste de fournisseurs à interroger, séparés par des virgules, ou `all`.',
  'plugins.bazarr.quota.402':
    "**402 ou 429** (solde vide ou plafond journalier atteint) : Bazarr consigne une note avec un lien vers [store.wyzie.io](https://store.wyzie.io) et ne renvoie aucun résultat, de sorte qu'il bascule proprement vers vos autres fournisseurs. Rien ne plante.",
  'plugins.bazarr.quota.401':
    "**401** (mauvaise clé) : Bazarr remonte une erreur d'authentification afin que vous sachiez devoir ressaisir la clé.",
  'plugins.bazarr.ts.missing':
    "**Wyzie n'apparaît pas dans la liste des fournisseurs.** Revérifiez l'étape d'installation qui modifie `extensions.py` ; l'entrée doit figurer à la fois dans `provider_registry` et `provider_manager`, puis redémarrez Bazarr.",
  'plugins.bazarr.ts.none':
    "**Aucun sous-titre trouvé.** Confirmez que l'élément possède un identifiant IMDB dans Bazarr et que les langues que vous avez activées disposent de sous-titres pour celui-ci. Ne restreignez `sources` que si c'est votre intention.",
  'plugins.bazarr.ts.settings':
    "**Champs de réglages manquants.** L'étape de réglages n'a pas été appliquée pour votre version de Bazarr ; comparez avec un bloc de réglages d'un fournisseur fonctionnel et redémarrez.",

  'plugins.kodi.intro':
    "Un service de sous-titres pour **Kodi 19+ (Matrix et ultérieur)**, LibreELEC et CoreELEC. Il utilise le point d'extension standard `xbmc.subtitle.module` de Kodi, il apparaît donc partout où Kodi cherche des sous-titres.",
  'plugins.kodi.before':
    'Obtenez une clé API Wyzie gratuite sur [store.wyzie.io/redeem](https://store.wyzie.io/redeem).',
  'plugins.kodi.repo.intro':
    "Installer le dépôt une fois permet à Kodi de **mettre à jour automatiquement** l'add-on pour vous.",
  'plugins.kodi.repo.1':
    "Téléchargez le programme d'installation du dépôt : [**repository.wyzie.zip**](https://kodi.wyzie.io/repository.wyzie.zip).",
  'plugins.kodi.repo.2':
    "Dans Kodi : **Settings, Add-ons, Install from zip file**, puis choisissez `repository.wyzie.zip`. Si Kodi le bloque, activez d'abord **Settings, System, Add-ons, Unknown sources**.",
  'plugins.kodi.repo.3':
    '**Settings, Add-ons, Install from repository, Wyzie Repository, Subtitle services, Wyzie Subs, Install.**',
  'plugins.kodi.repo.4':
    '**Settings, Player, Language, Default subtitle service**, puis sélectionnez **Wyzie Subs**.',
  'plugins.kodi.repo.5':
    "Ouvrez les réglages de l'add-on Wyzie Subs et collez votre **clé API**.",
  'plugins.kodi.zip.intro':
    'Utilisez ceci si vous préférez ne pas ajouter le dépôt. Remarque : une installation par zip ne se met **pas** à jour automatiquement.',
  'plugins.kodi.zip.1':
    "Récupérez le zip de l'add-on : `service.subtitles.wyzie-<version>.zip`. Si vous avez les sources, compressez le dossier `kodi/` de sorte que le zip contienne `addon.xml` à sa racine.",
  'plugins.kodi.zip.2':
    "Dans Kodi : **Settings, Add-ons, Install from zip file**, puis choisissez le zip. Si Kodi le bloque, activez d'abord **Settings, System, Add-ons, Unknown sources**.",
  'plugins.kodi.zip.3':
    '**Settings, Player, Language, Default subtitle service**, puis sélectionnez **Wyzie Subs**.',
  'plugins.kodi.zip.4':
    "Ouvrez les réglages de l'add-on Wyzie Subs et collez votre **clé API**.",
  'plugins.kodi.cfg.key': 'Votre clé Wyzie. Requise.',
  'plugins.kodi.cfg.hi': 'Préférer les sous-titres pour malentendants.',
  'plugins.kodi.cfg.langs':
    "Les langues sont reprises des langues de sous-titres sélectionnées dans Kodi et mappées automatiquement vers l'ISO 639-1.",
  'plugins.kodi.matching.1':
    "Pendant la lecture, Kodi expose le numéro IMDB, la saison et l'épisode. L'add-on les lit, interroge `sub.wyzie.io/search` et renvoie les sous-titres correspondants. Comme Wyzie repose sur les identifiants (IMDB et TMDB), les correspondances sont précises pour les films comme pour les séries.",
  'plugins.kodi.matching.2':
    "La **recherche manuelle** affiche actuellement une notification et ne fait rien, car Wyzie effectue la correspondance sur les identifiants, et non sur les titres. Une recherche titre-vers-identifiant est prévue dans la feuille de route. Pour l'instant, laissez Kodi rechercher automatiquement pendant la lecture.",
  'plugins.kodi.quota':
    'Une réponse 402 ou 429 affiche une notification toast Kodi vous renvoyant vers [store.wyzie.io](https://store.wyzie.io) pour recharger ou vous abonner.',
  'plugins.kodi.ts.notoffered':
    "**Wyzie n'est pas proposé pendant la lecture.** Confirmez qu'il est défini comme **Default subtitle service** et que l'élément en cours de lecture possède un identifiant IMDB.",
  'plugins.kodi.ts.key':
    "**Clé invalide.** Rouvrez les réglages de l'add-on et recollez votre clé.",
  'plugins.kodi.ts.episode':
    "**Rien pour un épisode.** Assurez-vous que Kodi dispose des métadonnées correctes de saison et d'épisode pour le fichier ; les éléments de bibliothèque scrapés fonctionnent le mieux.",
};

export default messages;
