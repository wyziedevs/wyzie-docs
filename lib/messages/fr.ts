const messages: Record<string, string> = {
  // Navigation
  'nav.language': 'Language',

  // Index / Landing Page
  'index.subtitle':
    "Wyzie est un ensemble d'outils pour scraper des sous-titres et tout ce qui s'y rapporte.",
  'index.cta.start': 'Commencer',
  'index.cta.store': 'Découvrir',

  'index.card.keys.title': 'Clés API gratuites',
  'index.card.keys.body':
    "Obtenez une clé API gratuite sur store.wyzie.io/redeem avec une vérification rapide par email (Gmail, Outlook, Yahoo, iCloud, Proton et d'autres grands fournisseurs). 1 000 requêtes/jour sans frais. Des plans payants sont disponibles pour une utilisation plus intensive.",

  'index.card.ai.title': 'Traduction IA',
  'index.card.ai.body':
    "Traduisez n'importe quel sous-titre en 80+ langues à la demande. Le SRT est diffusé dans l'ordre au fur et à mesure que les lots se terminent, les premières lignes arrivent donc rapidement. Disponible sur les clés Pro.",

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
    "Wyzie Subs est une API de scraping de sous-titres avec un niveau gratuit. Il existe deux façons d'effectuer des requêtes vers l'API : en utilisant notre package NPM ou en appelant directement l'API Wyzie. Je recommande d'utiliser notre package, mais certains trouveront les types encombrants. Pour utiliser l'API, vous devez d'abord faire ce choix.",
  'subs.intro.important.apikey':
    'Une clé API est requise pour toutes les requêtes. Obtenez une clé gratuite sur [store.wyzie.io/redeem](https://store.wyzie.io/redeem) (vérification par email, 1 000 requêtes/jour). Pour une utilisation plus intensive, des [plans Pro et recharges](https://store.wyzie.io) sont disponibles. Consultez la page Clés API pour plus de détails.',
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
    "Wyzie Worker est un proxy Cloudflare Worker léger qui injecte votre clé API côté serveur. Déployez-le sur Cloudflare Workers et définissez deux secrets : `NITRO_API_TOKEN` (votre clé API Wyzie) et `NITRO_WORKER_KEY` (un secret de votre choix). Chaque requête vers le worker doit envoyer `Authorization: Bearer <NITRO_WORKER_KEY>` ; sans cet en-tête, le worker répond 401, et si `NITRO_WORKER_KEY` n'est pas défini, il refuse toutes les requêtes avec 503. La clé du worker doit elle aussi rester côté serveur : appelez donc le worker depuis votre propre backend, jamais depuis du code de navigateur ou d'application. Le worker transfère chaque requête vers sub.wyzie.io avec votre clé API jointe.",
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
    "La source par défaut est charlie si aucune n'est spécifiée",
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
    'Pas un scraper. SRT traduit par IA, généré à la demande depuis le meilleur sous-titre source disponible. Clés Pro uniquement. Consultez le guide Traduction IA pour tous les détails.',
  'subs.sources.ai.content':
    'Tout ce pour quoi Wyzie peut trouver un sous-titre texte',
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
  'subs.pkg.param.hi':
    'Si true, ne renvoie que les sous-titres pour malentendants. Les sources qui ne signalent pas les sous-titres pour malentendants ne renvoient rien.',
  'subs.pkg.param.source':
    'Fournisseurs de sous-titres à interroger, par nom de code (all pour toutes les sources actives que votre clé peut utiliser ; par défaut charlie).',
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
    "Le package inclut également des helpers TMDB légers : searchTmdb, getTvDetails et getSeasonDetails pour trouver rapidement des IDs avant d'appeler /search. getSources renvoie les noms de code des sources actives (une source mise en pause par ses contrôles de santé est exclue jusqu'à son rétablissement), et getSourcesInfo renvoie la réponse /sources complète avec les niveaux et, si vous fournissez une clé, les sources que cette clé peut utiliser. withDownloadOptions ajoute des options de téléchargement (sortie WebVTT, corrections de synchronisation, une seconde langue, et plus) à l'url d'un résultat.",
  'subs.pkg.types.h3': 'Types',
  'subs.pkg.type.search': "Tous les paramètres valides reconnus par l'API.",
  'subs.pkg.type.query':
    "Tous les paramètres (optionnels et requis) disponibles pour l'API wyzie-subs.",
  'subs.pkg.type.subtitle':
    "Toutes les valeurs retournées par l'API avec leurs types respectifs.",
  'subs.pkg.type.sources': 'Type de réponse du endpoint /sources.',
  'subs.pkg.type.download':
    'Options pour withDownloadOptions : to, offset, fps, plain et (Pro) sdh, clean, dual.',
  'subs.pkg.type.sync':
    'Entrée et résultat de syncSubtitle (Wyzie Synced, clés Pro) : quel sous-titre (un résultat, son url, ou tmdb_id/imdb_id avec language), les segments de parole speech trouvés par detectSpeech ou le fichier media, et le lien de téléchargement synchronisé avec ses offset, fps et confidence. Consultez [Wyzie Synced](/subs/usage/synced).',
  'subs.pkg.types.end':
    'Nos types sont très simples et bien documentés. Consultez [src/types.ts](https://github.com/wyziedevs/wyzie-lib/blob/main/src/types.ts) dans le dépôt wyzie-lib.',
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
    "Si true, ne renvoie que les sous-titres pour malentendants (c'est un filtre, pas une préférence). Les sources qui ne signalent pas les sous-titres pour malentendants ne renvoient rien.",
  'subs.direct.param.encoding': "Filtre d'encodage de caractères.",
  'subs.direct.param.source':
    'Fournisseurs de sous-titres à interroger (all interroge toutes les sources que votre clé peut utiliser ; par défaut charlie).',
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
  'subs.direct.param.page':
    'Page à retourner, en commençant à 1. Pris en compte uniquement avec limit.',
  'subs.direct.param.limit':
    'Résultats par page (de 1 à 200). Sans ce paramètre, tous les résultats sont retournés en une seule réponse.',
  'subs.direct.important.imdb':
    "Lors de l'utilisation d'un IMDB ID, assurez-vous que les deux premiers caractères ('tt') sont inclus au début de l'ID.",

  'subs.direct.data.h3': 'Données retournées',
  'subs.direct.data.id': "L'ID du fichier de sous-titres.",
  'subs.direct.data.url':
    'Lien de téléchargement sur https://sub.wyzie.io/c/... contenant un paramètre tok chiffré. Chaque téléchargement coûte 1 requête ; voir la section sur le téléchargement des sous-titres ci-dessous.',
  'subs.direct.data.flagUrl': 'URL du drapeau de la langue.',
  'subs.direct.data.format': 'Le format du fichier de sous-titres.',
  'subs.direct.data.encoding':
    "L'encodage de caractères du fichier de sous-titres.",
  'subs.direct.data.display': 'La langue des sous-titres, avec majuscule.',
  'subs.direct.data.language': 'Le code ISO 639-1 de la langue.',
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
  'subs.direct.download.p':
    "Chaque url d'une réponse /search pointe vers https://sub.wyzie.io/c/... et contient un paramètre d'URL tok. Le paramètre tok est chiffré, il ne révèle donc pas votre clé API, et il reste valide pendant 60 jours. Utilisez l'URL telle quelle. Une recherche coûte 1 requête et chaque téléchargement en coûte 1 de plus, facturé à la clé qui a effectué la recherche. Lorsque cette clé ne peut pas payer un téléchargement, le lien est refusé :",
  'subs.direct.dl.p':
    "Ajoutez ces paramètres à une URL de téléchargement pour modifier ce qu'elle retourne. Ils fonctionnent sur chaque téléchargement, en cache ou non, et ne coûtent rien de plus (sauf dual, ci-dessous). L'en-tête de réponse X-Subtitle-Transforms indique ce qui a été appliqué, avec les décomptes correspondants.",
  'subs.direct.dl.param.to':
    "Format de sortie : `srt` ou `vtt`. `vtt` se lit directement dans un élément `<track>` du navigateur. Par défaut : le format d'origine du fichier.",
  'subs.direct.dl.param.offset':
    "Décale chaque ligne de ce nombre de secondes (une valeur négative l'avance).",
  'subs.direct.dl.param.fps':
    "Corrige la dérive d'un sous-titre conçu pour une autre release : `SUBTITLE_FPS:VIDEO_FPS`, ex. : `25:23.976` pour un sous-titre PAL sur une vidéo à la cadence cinéma.",
  'subs.direct.dl.param.plain':
    "Lignes simples et propres : codes de style tels que `{\\an8}` et `<font>` supprimés, lignes vides et répétées retirées, lignes remises dans l'ordre chronologique, petits chevauchements rognés.",
  'subs.direct.dl.param.sdh':
    'Supprime le texte destiné aux malentendants : `[DOOR SLAMS]`, `(sighs)`, les noms de locuteurs `JOHN:` et les paroles de chansons ♪.',
  'subs.direct.dl.param.clean':
    'Masque les grossièretés les plus fortes en conservant la première lettre (`f***`). Fichiers en anglais uniquement.',
  'subs.direct.dl.param.dual':
    "Ajoute une seconde langue (code ISO 639-1) sous chaque ligne, alignée sur le minutage de ce fichier. Coûte 1 requête supplémentaire, uniquement lorsqu'une correspondance est trouvée ; sinon le fichier est renvoyé seul avec `X-Dual: unavailable`.",
  'subs.direct.dl.after':
    'Les options se combinent, ex. : `&to=vtt&sdh=strip&offset=-1.5`. Les liens contiennent déjà `format`, `encoding`, `id` et (pour les épisodes) `season` et `episode` : laissez-les tels quels. `autoUnzip=false` renvoie une archive telle quelle, sans la décompresser.',
  'subs.direct.oneCall.p':
    "Avec une clé API, GET /download renvoie directement le fichier de sous-titres en un seul appel : il effectue la recherche avec votre clé et les mêmes paramètres que /search (language vaut en par défaut), choisit la meilleure correspondance et la sert. Cela coûte 2 requêtes, autant qu'une recherche plus un téléchargement. Les options de téléchargement comme to et offset s'appliquent au fichier.",
  'subs.direct.oneCall.pick':
    'La meilleure correspondance est le premier résultat de recherche, en privilégiant les fichiers SRT, WebVTT et ASS sauf si vous définissez format, et les fichiers sans texte pour malentendants sauf si vous définissez hi=true. Affinez-la avec release, filename, source ou origin. Les en-têtes de réponse X-Subtitle-Release, X-Subtitle-Source, X-Subtitle-Language et X-Subtitle-Url indiquent quel fichier a été choisi. Les erreurs sont les mêmes que pour /search et les liens de téléchargement.',
  'subs.direct.oneCall.keyless':
    "Sans clé, la [page de téléchargement](https://sub.wyzie.io/download) permet de trouver un ou deux sous-titres à la main. Ses liens n'ouvrent que le fichier pour lequel ils ont été créés, depuis le réseau qui a effectué la recherche, et elle est soumise à des limites horaires. Pour tout usage automatisé, utilisez une clé.",
  'subs.direct.headers.p':
    'Chaque réponse /search inclut un en-tête X-Total-Count indiquant le nombre total de résultats. Lorsque vous passez limit, elle inclut également :',
  'subs.direct.header.xpage': 'la page retournée.',
  'subs.direct.header.xperpage': 'la valeur de limit appliquée.',
  'subs.direct.header.xtotalpages': 'le nombre total de pages.',
  'subs.direct.headers.rate':
    "Les réponses contiennent aussi X-RateLimit-Limit, X-RateLimit-Remaining et X-RateLimit-Reset. Considérez-les comme approximatifs : l'utilisation est comptabilisée dans la facturation par petits lots, ils peuvent donc accuser un léger retard sur votre utilisation réelle.",

  // Subs Translate Page
  'subs.translate.title': 'Traduction de sous-titres par IA',
  'subs.translate.important':
    'La traduction IA est une **fonctionnalité Pro** : les clés gratuites reçoivent 403 Upgrade required. Chaque appel coûte **25 requêtes** du solde de votre clé, cache hits compris. Si un appel échoue avant toute sortie (aucun sous-titre trouvé, échec de la recherche ou du téléchargement, ou serveur occupé), les 25 requêtes sont remboursées automatiquement.',
  'subs.translate.p1':
    "Wyzie peut traduire n'importe quel sous-titre en 80+ langues à la volée. Le SRT traduit est diffusé dans l'ordre au fur et à mesure que les lots se terminent : les cues du début arrivent ainsi rapidement, sans attendre que tout le fichier soit terminé. La traduction complète est mise en cache pendant 30 jours : les requêtes ultérieures pour le même titre, le même épisode et la même langue cible sont donc servies depuis le cache.",

  'subs.translate.ways.h2': "Deux façons de l'utiliser",
  'subs.translate.way1.h3':
    '1. Choisir une langue depuis une réponse de recherche',
  'subs.translate.way1.p1':
    "Pour les clés Pro, chaque réponse /search inclut aussi des lignes de traduction IA avec \"ai\": true et une url pointant vers /translate : une par langue prise en charge, ou uniquement les langues de votre filtre language=. Les clés gratuites ne reçoivent jamais ces lignes. Traitez les lignes IA comme n'importe quelle autre ligne de sous-titre dans votre interface : quand l'utilisateur clique sur l'une d'elles, récupérez l'URL.",
  'subs.translate.way1.filter':
    'Si vous souhaitez masquer les lignes IA de votre interface, filtrez-les :',
  'subs.translate.way2.h3': '2. Appeler /translate directement',

  'subs.translate.param.id': 'TMDB ou IMDB ID (requis).',
  'subs.translate.param.target':
    'Langue cible (requise) : un nom de la liste prise en charge (ex. Spanish, Japanese, Portuguese (Brazil)) ou son code (ex. es, ja, pt-BR).',
  'subs.translate.param.seasonEpisode':
    'Pour la TV. Les deux doivent être présents ensemble.',
  'subs.translate.param.key':
    "Votre clé API. Utilisez tk à la place si vous avez obtenu l'URL depuis /search.",
  'subs.translate.param.tk':
    'Jeton chiffré issu des URL des lignes IA de /search. Fonctionne comme key, ne révèle pas votre clé API et reste valide pendant 60 jours.',

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
    "Wyzie recherche dans les sources normales un sous-titre texte, en préférant un SRT anglais quand il est disponible. Les fichiers VTT, ASS, SSA et SUB sont d'abord convertis en SRT.",
  'subs.translate.how.step2':
    "Le SRT est découpé en lots d'environ 3 800 caractères au maximum et traduit avec Google Translate, 4 lots à la fois.",
  'subs.translate.how.step3':
    "La sortie est diffusée dans l'ordre du SRT au fur et à mesure que les lots se terminent : les cues du début arrivent ainsi rapidement. Les lecteurs acceptant un corps SRT en streaming peuvent commencer à afficher les premières lignes avant que le reste soit terminé.",
  'subs.translate.how.step4':
    'La traduction complète est mise en cache dans Redis pendant 30 jours, indexée par id, saison, épisode et langue cible.',

  'subs.translate.languages.h2': 'Langues cibles prises en charge',
  'subs.translate.languages.p':
    '80+ langues incluant toutes les principales langues européennes, asiatiques, africaines et du Moyen-Orient. Passez un nom de la liste (Spanish, Portuguese (Brazil)) ou son code (es, pt-BR). Pour les clés Pro, la liste complète est également retournée sous forme de lignes ai: true dans toute réponse /search sans filtre language=, qui est la source de vérité canonique.',

  'subs.translate.limitations.h2': 'Limitations',
  'subs.translate.limit1':
    "La traduction IA a besoin d'un sous-titre texte comme point de départ. Les sources VTT, ASS, SSA et SUB sont d'abord converties en SRT ; s'il n'existe aucun sous-titre texte, l'appel retourne 404 No subtitle found et les 25 requêtes sont remboursées.",
  'subs.translate.limit2':
    'La qualité de la traduction dépend du sous-titre source. Un source mal synchronisé ou mal tapé produit une traduction mal synchronisée ou mal tapée.',
  'subs.translate.limit3':
    'Certains utilisateurs peuvent vouloir exclure entièrement les lignes IA. Filtrez sur ai === false dans votre client.',
  'subs.translate.limit4':
    "Les traductions sont facturées aussi sur les cache hits. Qu'une traduction soit fraîchement générée ou servie depuis le cache de 30 jours, chaque appel /translate coûte 25 requêtes. Seuls les appels qui échouent avant toute sortie sont remboursés.",

  // Subs Synced Page
  'subs.synced.title': 'Wyzie Synced',
  'subs.synced.important':
    "Wyzie Synced est une **fonctionnalité Pro** : les clés gratuites reçoivent 403 Paid feature. Chaque synchronisation réussie coûte **5 requêtes** ; une synchronisation qui ne trouve aucune correspondance n'est pas facturée. Le téléchargement du lien synchronisé compte ensuite comme n'importe quel autre téléchargement.",
  'subs.synced.p1':
    "Les sous-titres trouvés en ligne sont souvent calés sur une autre release que la vidéo que vous avez : ils commencent quelques secondes trop tôt ou trop tard, ou se décalent de plus en plus au fil du film parce que cette release tourne à une autre fréquence d'images. Wyzie Synced écoute l'audio de votre copie, repère les moments où l'on parle, et calcule le décalage (offset) et la correction de fréquence d'images nécessaires pour aligner le sous-titre sur cet audio. Vous obtenez un lien de téléchargement normal avec la correction appliquée (les [options de téléchargement](/subs/usage/direct#download-options) offset et fps).",
  'subs.synced.web.p':
    "Le plus simple : ouvrez [sub.wyzie.io/synced](https://sub.wyzie.io/synced), saisissez votre clé Pro, choisissez votre fichier vidéo et le titre, puis téléchargez le sous-titre synchronisé. L'audio est analysé dans votre navigateur, la vidéo n'est donc jamais envoyée : seuls les horodatages de la parole sont transmis. MKV, MP4, AVI et la plupart des autres formats fonctionnent, y compris l'audio AC3, E-AC3 et DTS.",
  'subs.synced.api.p':
    "Envoyez le sous-titre souhaité (un lien de téléchargement, ou le titre pour laisser Wyzie choisir la meilleure correspondance) et l'audio : soit des horodatages de parole que vous avez détectés vous-même, soit le fichier audio/vidéo lui-même. POST /synced est la même API.",
  'subs.synced.param.url':
    "Un lien de téléchargement issu de /search (https://sub.wyzie.io/c/…). Les autres options de téléchargement qu'il contient (to, sdh, …) sont conservées sur le lien synchronisé.",
  'subs.synced.param.id':
    'À la place de url : TMDB ou IMDB ID. Wyzie essaie les 5 meilleurs sous-titres texte dans cette langue et retourne celui qui correspond le mieux à votre audio.',
  'subs.synced.param.language':
    'Avec id : code ISO 639-1 de la langue du sous-titre (requis).',
  'subs.synced.param.seasonEpisode':
    'Avec id, pour la TV. Les deux doivent être présents ensemble.',
  'subs.synced.param.key':
    'Votre clé API Pro. Sans elle, la clé associée au tok de url est utilisée ; les liens issus de la page de téléchargement sans clé nécessitent key.',
  'subs.synced.param.speech':
    "Les moments où l'on parle : [[start, end], …] en secondes, issus de n'importe quel détecteur d'activité vocale (detectSpeech de wyzie-lib, Silero VAD, webrtcvad). Un film de 2 heures représente environ 2 000 segments, soit à peu près 40 KB de JSON.",
  'subs.synced.param.media':
    "Ou le fichier audio/vidéo lui-même : comme corps brut de la requête (avec les autres champs dans les paramètres d'URL), ou comme champ multipart media. Jusqu'à 95 MB : pour un film complet, envoyez donc uniquement la piste audio.",
  'subs.synced.fields.note':
    "Les champs se placent dans un corps JSON, un formulaire multipart, ou dans les paramètres d'URL (avec un corps media brut).",
  'subs.synced.response.p': 'Une réponse 200 est au format JSON :',
  'subs.synced.field.url':
    "le lien de téléchargement du sous-titre avec la correction de synchronisation (offset, fps) et un nouveau tok pour votre clé. Utilisez-le comme n'importe quelle url de /search : chaque téléchargement coûte 1 requête.",
  'subs.synced.field.offset':
    "secondes ajoutées à chaque ligne après la correction de fréquence d'images (une valeur négative l'avance).",
  'subs.synced.field.fps':
    'la correction de fréquence d\'images sous la forme SUBTITLE_FPS:VIDEO_FPS (ex. : "25:23.976"), ou null si aucune n\'était nécessaire.',
  'subs.synced.field.confidence':
    'de 0 à 1 : à quel point ce calage se démarque de tous les autres. Tout résultat retourné a réussi le test de correspondance ; plus la valeur est élevée, plus le résultat est sûr.',
  'subs.synced.field.inSync':
    'true si le sous-titre correspondait déjà à votre copie.',
  'subs.synced.field.subtitle':
    'le sous-titre utilisé (release, fileName, format, source, …). Avec url, seulement son format.',
  'subs.synced.errors.p':
    'Les erreurs sont au format JSON avec message et details. Les synchronisations refusées ou échouées ne sont pas facturées.',
  'subs.synced.error.400':
    "Champs manquants ou invalides : aucun sous-titre, aucun audio, ou un speech qui n'est pas composé de paires [start, end].",
  'subs.synced.error.401':
    'Aucune clé, ou le lien de téléchargement de url est invalide ou expiré.',
  'subs.synced.error.403':
    'La clé est gratuite (Wyzie Synced nécessite Pro), invalide ou en pause.',
  'subs.synced.error.404':
    'Aucun sous-titre texte dans cette langue pour ce titre.',
  'subs.synced.error.413':
    'Le fichier media dépasse 95 MB. Envoyez uniquement la piste audio, ou envoyez speech.',
  'subs.synced.error.422':
    "Le sous-titre ne s'aligne sur l'audio à aucun décalage ni aucune fréquence d'images (probablement un autre montage ou un autre épisode), l'audio contient trop peu de parole, ou le fichier ne peut pas être décodé.",
  'subs.synced.error.429':
    "La clé ne peut pas payer : une synchronisation nécessite qu'il reste au moins 5 requêtes, ce qui est vérifié avant tout traitement.",
  'subs.synced.error.503':
    "Le serveur est occupé à décoder d'autres fichiers envoyés, ou la recherche est momentanément indisponible. Réessayez un peu plus tard, ou envoyez speech.",
  'subs.synced.lib.p':
    'wyzie-lib fournit detectSpeech (le même détecteur que celui que le site exécute dans votre navigateur) et syncSubtitle :',
  'subs.synced.how.step1':
    "Parole : l'audio est décodé en mono 8 kHz (uniquement le canal central pour les mixages 5.1 et 7.1, là où se trouvent les dialogues), et un détecteur d'activité vocale repère les moments où l'on parle : un son fort, dans la bande de fréquences de la voix, qui monte et descend au rythme des syllabes.",
  'subs.synced.how.step2':
    "Alignement : les temps d'affichage du sous-titre sont intercorrélés avec cette parole pour chaque décalage compris dans une plage de ±10 minutes, pour les écarts de fréquence d'images courants (25 vs 23.976, 25 vs 24, 24 vs 23.976 fps).",
  'subs.synced.how.step3':
    'Affinage : le meilleur calage est affiné à 10 ms près en alignant le début des lignes sur le début de la parole.',
  'subs.synced.how.step4':
    "Un calage n'est retourné que s'il se démarque nettement de tous les autres décalages : un sous-titre destiné à un autre montage ou à un autre épisode reçoit donc 422 Couldn't sync au lieu d'un décalage erroné.",
  'subs.synced.limit1':
    "Wyzie Synced corrige un décalage constant et une différence de fréquence d'images. Un sous-titre destiné à un autre montage (scènes ajoutées ou manquantes) ne peut pas être corrigé par un seul décalage, et est refusé.",
  'subs.synced.limit2':
    "Il faut de la parole : les films avec peu de dialogues, ou dont l'audio est surtout musical, peuvent ne pas se synchroniser.",
  'subs.synced.limit3': "Les décalages jusqu'à ±10 minutes sont détectés.",

  // Subs API Keys Page
  'subs.keys.title': 'Clés API',
  'subs.keys.p1':
    "Wyzie Subs nécessite une clé API pour toutes les requêtes. Un niveau gratuit couvre la plupart des cas d'usage ; les plans payants gèrent une utilisation plus intensive.",

  'subs.keys.tiers.h2': 'Niveaux',
  'subs.keys.tier.free': 'Gratuit (vérification par email)',
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
    "Entrez une adresse chez un grand fournisseur de messagerie personnelle (Gmail, Outlook/Hotmail, Yahoo, iCloud, AOL, Proton et d'autres). Les domaines d'email jetables sont refusés.",
  'subs.keys.free.step3':
    'Entrez le code à 6 chiffres que nous vous envoyons par email.',
  'subs.keys.free.step4':
    'Vous recevez une clé API qui ressemble à wyzie-abc123...',
  'subs.keys.free.gmail':
    "Chaque adresse email et chaque réseau ne peuvent obtenir qu'une seule clé gratuite ; une seconde demande retourne 409. Vous avez perdu votre clé ? Utilisez « Forgot key » sur le [tableau de bord](https://store.wyzie.io/dashboard) pour vous la faire renvoyer.",

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
    'Utilisez [Wyzie Worker](https://github.com/wyziedevs/wyzie-worker) : un proxy Cloudflare Worker gratuit qui conserve votre clé API en tant que secret `NITRO_API_TOKEN`. Chaque appel vers ce proxy doit envoyer `Authorization: Bearer <NITRO_WORKER_KEY>`, un second secret que vous définissez : faites donc passer votre client par votre propre backend et gardez aussi la clé du worker côté serveur.',
  'subs.keys.protect.option2':
    "Créez votre propre proxy : n'importe quel endpoint backend qui ajoute la clé avant de transmettre à sub.wyzie.io fonctionne. Consultez la page Introduction pour un exemple en 10 lignes.",
  'subs.keys.protect.devtools':
    'Si la clé apparaît dans un onglet réseau des DevTools, elle est exposée. Considérez-la comme publique et renouvelez-la depuis votre [tableau de bord](https://store.wyzie.io/dashboard).',

  'subs.keys.using.h2': 'Utiliser votre clé',
  'subs.keys.using.p': 'Ajoutez &key=YOUR_KEY à chaque requête API :',
  'subs.keys.using.npm.h3': 'Package NPM',

  'subs.keys.limit.h2': 'Atteindre la limite',
  'subs.keys.limit.p':
    "Une recherche coûte 1 requête et chaque téléchargement de sous-titre coûte 1 requête : une recherche suivie du téléchargement d'un fichier en consomme donc 2. La traduction IA coûte 25 requêtes par appel, et une synchronisation Wyzie Synced 5.",
  'subs.keys.limit.free':
    '**Niveau gratuit** épuisé -> les recherches et les liens de téléchargement retournent 429 Daily request limit reached, avec reset_at dans le JSON et un en-tête Retry-After. Le plafond quotidien de 1 000 requêtes se réinitialise à minuit UTC.',
  'subs.keys.limit.paid':
    '**Solde payant** épuisé -> les recherches et les liens de téléchargement retournent 402 avec un lien de recharge dans le JSON. Rechargez sur [store.wyzie.io/topup](https://store.wyzie.io/topup) ou activez la **recharge automatique** dans votre tableau de bord pour recharger automatiquement quand votre solde franchit un seuil que vous définissez.',
  'subs.keys.hold.p1':
    "Les clés qui envoient un très gros volume de requêtes, principalement depuis des IP de datacenters ou d'hébergeurs, sont automatiquement mises en pause. Une clé en pause reçoit 403 Key on hold sur chaque requête, avec un lien de réactivation (https://store.wyzie.io/verify) et un lien vers le support (https://store.wyzie.io/contact) dans le JSON.",
  'subs.keys.hold.p2':
    "Pour réactiver la clé immédiatement, vérifiez le site web sur lequel vous l'utilisez sur [store.wyzie.io/verify](https://store.wyzie.io/verify) avec un enregistrement DNS TXT ou une balise meta. Une clé associée à un site vérifié n'est plus jamais mise en pause automatiquement : les sites à fort trafic peuvent donc se faire vérifier avant même d'être mis en pause.",
  'subs.keys.hold.p3':
    'Pas de site web, par exemple pour un service backend ou une application ? [Contactez le support](https://store.wyzie.io/contact) pour faire réactiver la clé.',

  'subs.keys.files.h2': 'Ce que contiennent les fichiers',
  'subs.keys.files.adfilter':
    "**Filtrage des publicités** – chaque sous-titre servi via sub.wyzie.io est débarrassé des cues publicitaires des fournisseurs (bannières OpenSubtitles, promotions de paris en ligne, lignes « watch free at ... »). La numérotation des cues SRT est recalculée pour éviter tout saut. Tous les fournisseurs, OpenSubtitles compris, sont servis via sub.wyzie.io, le filtre s'applique donc à tous.",
  'subs.keys.files.promo':
    '**Les clés gratuites et de développement** reçoivent une courte ligne tout au début de chaque fichier (0–6 s) renvoyant vers [store.wyzie.io](https://store.wyzie.io). Les clés payantes reçoivent des fichiers propres, sans cette ligne.',

  'subs.keys.faq.h2': 'FAQ',
  'subs.keys.faq.q1': "J'ai perdu ma clé. Puis-je en obtenir une nouvelle ?",
  'subs.keys.faq.a1':
    'Ouvrez le [tableau de bord](https://store.wyzie.io/dashboard) et utilisez « Forgot key » avec votre email enregistré ; nous vous renverrons votre clé existante. Si vous pensez que la clé a fuité, renouvelez-la plutôt depuis le tableau de bord.',
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
  'i6shark.intro.feature7':
    "**Maintenance automatique** : Vidage périodique du pool d'IP. Validation et nettoyage des sous-réseaux. Mise en pool de connexions et optimisation keepalive.",
  'i6shark.intro.feature8':
    "**Haute performance** : Gestion des requêtes concurrentes avec mise en pool de buffers. Délais d'attente et limites de connexion configurables. Gestion efficace des adresses IPv6.",
  'i6shark.intro.feature9':
    '**Mode débogage** : Journalisation détaillée pour le dépannage et la surveillance',

  'i6shark.intro.requirements.h2': 'Prérequis',
  'i6shark.intro.req1': 'Go 1.22 ou supérieur',
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
    '**Sources :** toutes les sources que votre clé peut utiliser (`source=all`) : charlie et lima avec une clé gratuite, les sept avec une clé Pro.',
  'plugins.index.shared.matching':
    "**Correspondance :** Wyzie repose sur les identifiants IMDB et TMDB ainsi que la saison et l'épisode, de sorte que les correspondances sont précises pour les films comme pour les séries.",
  'plugins.index.shared.quota':
    "**Quota :** lorsque votre clé est épuisée, le plugin affiche une invite conviviale renvoyant vers [store.wyzie.io](https://store.wyzie.io) au lieu d'échouer silencieusement. Rechargez ou abonnez-vous et vous êtes de nouveau opérationnel.",
  'plugins.index.shared.languages':
    '**Langues :** 100+, sélectionnables par plugin.',
  'plugins.index.outro':
    'Choisissez votre plateforme ci-dessus pour commencer. Le code source de chaque plugin se trouve dans le [dépôt wyzie-plugins](https://github.com/wyziedevs/wyzie-plugins).',

  'plugins.stremio.intro':
    "Un add-on de sous-titres en un clic pour [Stremio](https://www.stremio.com/). Il interroge toutes les sources Wyzie que votre clé peut utiliser et fonctionne pour les films comme pour les séries, sur toutes les plateformes où Stremio s'exécute.",
  'plugins.stremio.before':
    "Vous avez besoin d'une clé API Wyzie gratuite. Obtenez-en une sur [store.wyzie.io/redeem](https://store.wyzie.io/redeem), ou achetez une clé Pro ou abonnez-vous sur [store.wyzie.io](https://store.wyzie.io/#plans).",
  'plugins.stremio.install.1':
    'Ouvrez [stremio.wyzie.io/configure](https://stremio.wyzie.io/configure).',
  'plugins.stremio.install.2': 'Collez votre **clé API**.',
  'plugins.stremio.install.3':
    'Optionnel : saisissez vos **langues** préférées sous forme de codes ISO 639-1, séparés par des virgules (par exemple `en,es,fr`). Laissez vide pour toutes les langues.',
  'plugins.stremio.install.4':
    "Optionnel : activez l'option **malentendants** pour n'obtenir que les sous-titres pour malentendants. Laissez-la désactivée pour tout voir ; les sources qui ne signalent pas les sous-titres pour malentendants ne renvoient rien tant qu'elle est activée.",
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
    'Ne renvoyer que les sous-titres pour malentendants (envoie hi=true). Désactivé par défaut.',
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
    '[Bazarr](https://www.bazarr.media/) gère les sous-titres pour **Plex, Jellyfin, Emby, Sonarr et Radarr** au même endroit. Ajouter Wyzie comme fournisseur donne à tous ces serveurs accès à toutes les sources Wyzie que votre clé peut utiliser, via une seule clé.',
  'plugins.bazarr.note':
    "C'est la manière recommandée d'utiliser Wyzie avec Plex et Jellyfin. Bazarr télécharge les fichiers de sous-titres à côté de vos médias, et votre serveur les récupère automatiquement, donc aucun plugin natif distinct n'est requis.",
  'plugins.bazarr.before':
    "Obtenez une clé API Wyzie gratuite sur [store.wyzie.io/redeem](https://store.wyzie.io/redeem), et ayez accès aux fichiers d'installation de votre Bazarr (chemin Docker typique : `/opt/bazarr/bazarr/`).",
  'plugins.bazarr.install.1':
    'Téléchargez [bazarr/wyzie.py](https://github.com/wyziedevs/wyzie-plugins/blob/main/bazarr/wyzie.py) depuis le [dépôt wyzie-plugins](https://github.com/wyziedevs/wyzie-plugins) (ou `git clone https://github.com/wyziedevs/wyzie-plugins.git`) et copiez-le vers `bazarr/subliminal_patch/providers/wyzie.py`.',
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
  'plugins.bazarr.cfg.hi':
    'Ne renvoyer que les sous-titres pour malentendants (envoie hi=true).',
  'plugins.bazarr.cfg.sources':
    'Liste de fournisseurs à interroger, séparés par des virgules, ou `all`.',
  'plugins.bazarr.quota.402':
    "**402 ou 429** (solde vide ou plafond journalier atteint) : Bazarr consigne une note avec un lien vers [store.wyzie.io](https://store.wyzie.io) et ne renvoie aucun résultat, de sorte qu'il bascule proprement vers vos autres fournisseurs. Rien ne plante.",
  'plugins.bazarr.quota.401':
    "**401** (clé manquante) ou **403** (clé inconnue, ou clé en pause) : Bazarr remonte une erreur d'authentification afin que vous sachiez devoir vérifier ou ressaisir la clé.",
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
    "Récupérez le zip de l'add-on : `service.subtitles.wyzie-<version>.zip`. Pour le créer vous-même, clonez le [dépôt wyzie-plugins](https://github.com/wyziedevs/wyzie-plugins) (`git clone https://github.com/wyziedevs/wyzie-plugins.git`) et compressez son dossier `kodi/` de sorte que le zip contienne `addon.xml` à sa racine.",
  'plugins.kodi.zip.2':
    "Dans Kodi : **Settings, Add-ons, Install from zip file**, puis choisissez le zip. Si Kodi le bloque, activez d'abord **Settings, System, Add-ons, Unknown sources**.",
  'plugins.kodi.zip.3':
    '**Settings, Player, Language, Default subtitle service**, puis sélectionnez **Wyzie Subs**.',
  'plugins.kodi.zip.4':
    "Ouvrez les réglages de l'add-on Wyzie Subs et collez votre **clé API**.",
  'plugins.kodi.cfg.key': 'Votre clé Wyzie. Requise.',
  'plugins.kodi.cfg.hi':
    'Ne renvoyer que les sous-titres pour malentendants (envoie hi=true).',
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
