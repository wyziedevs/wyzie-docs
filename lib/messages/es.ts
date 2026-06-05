const messages: Record<string, string> = {
  // Navigation
  'nav.language': 'Idioma',

  // Index / Landing Page
  'index.subtitle':
    'Wyzie es un conjunto de herramientas de código abierto para buscar subtítulos y todo lo relacionado.',
  'index.cta.start': 'Comenzar',
  'index.cta.store': 'Échale un Vistazo',

  'index.card.keys.title': 'Claves API Gratuitas',
  'index.card.keys.body':
    'Obtén una clave API gratuita en store.wyzie.io/redeem con una rápida verificación de Gmail. 1.000 solicitudes/día sin costo. Planes de pago disponibles para mayor uso.',

  'index.card.ai.title': 'Traducción con IA',
  'index.card.ai.body':
    'Traduce cualquier subtítulo a más de 80 idiomas bajo demanda. Transmite línea por línea para que la reproducción pueda comenzar en segundos. Disponible con claves Pro.',

  'index.card.reliable.title': 'Confiable',
  'index.card.reliable.body':
    'Nos enorgullecemos de nuestro tiempo de actividad constante, actualizaciones (casi) diarias y almacenamiento en caché rápido.',

  'index.card.simple.title': 'Simplicidad Redefinida',
  'index.card.simple.body':
    'Fácil de implementar, fácil de usar. Wyzie está diseñado para ser lo más simple posible.',

  // Donate Page
  'donate.title': 'Por Favor Dona',
  'donate.body':
    'Hola usuario, Wyzie depende en parte de donaciones (que apenas recibo) y tengo 16 años con un trabajo a tiempo parcial; a veces mi factura por mantener la API pública supera los 100 dólares al mes. No puedo seguir apoyando esto sin ayuda externa. Lo siento de verdad, pero este proyecto ha crecido más allá de lo que originalmente podía costear de mi bolsillo.',
  'donate.cta': 'Apoyar a Wyzie',

  // Subs Intro Page
  'subs.intro.title': 'Introducción a Wyzie Subs',
  'subs.intro.p1':
    'Wyzie Subs es una API de scraping de subtítulos gratuita, libre y de código abierto. Hay dos formas de hacer solicitudes a la API: usando nuestro paquete NPM o consultando directamente la API de Wyzie. Recomiendo usar nuestro paquete, aunque algunos pueden encontrar los tipos engorrosos. Para usar la API, primero debes tomar esa decisión.',
  'subs.intro.note.ai':
    'La traducción con IA está disponible para claves Pro. Cualquier título, más de 80 idiomas de destino, transmitidos mientras el traductor trabaja.',
  'subs.intro.important.apikey':
    'Se requiere una clave API para todas las solicitudes. Obtén una clave gratuita en [store.wyzie.io/redeem](https://store.wyzie.io/redeem) (verificación de Gmail, 1.000 solicitudes/día). Para mayor uso, hay [planes Pro y de recarga](https://store.wyzie.io) disponibles. Consulta la página de Claves API para más detalles.',
  'subs.intro.note.npm':
    'Recomendamos encarecidamente el paquete NPM si estás familiarizado con TypeScript o JavaScript',
  'subs.intro.btn.npm': 'Paquete NPM',
  'subs.intro.btn.direct': 'Consulta Directa',

  'subs.intro.protect.h2': 'Proteger Tu Clave API',
  'subs.intro.protect.important':
    '**Incidente real:** hemos visto desarrolladores pegar su clave directamente en el JavaScript del frontend de un sitio de streaming. En pocas horas, un tercero la extrajo del bundle de JS y la usó hasta agotar el límite diario o el saldo de pago. La cuota perdida de esta manera no es reembolsable y se considera responsabilidad del propietario de la clave según nuestros Términos.',
  'subs.intro.protect.p1':
    'Tu clave API debe mantenerse privada y **nunca** aparecer en:',
  'subs.intro.protect.item1':
    'JavaScript del navegador (cualquier cosa servida a una etiqueta script)',
  'subs.intro.protect.item2':
    'Binarios de aplicaciones móviles (Android/iOS, incluidas las ofuscadas)',
  'subs.intro.protect.item3': 'Extensiones de navegador',
  'subs.intro.protect.item4':
    'Aplicaciones de escritorio tipo Electron distribuidas a usuarios finales',
  'subs.intro.protect.item5':
    'Repositorios Git públicos, gists, sitios de pegado de texto o capturas de pantalla',
  'subs.intro.protect.p2':
    'Si la clave llega a la máquina de un usuario final, trátala como pública. Hay dos patrones seguros:',
  'subs.intro.protect.opt1.h3': 'Opción 1: Usar Wyzie Worker',
  'subs.intro.protect.opt1.p1':
    'Wyzie Worker es un proxy ligero de Cloudflare Worker que inyecta tu clave API en el servidor. Despliégalo en Cloudflare Workers y establece tu clave como la variable de entorno NITRO_API_TOKEN. Luego apunta las solicitudes de tu cliente a la URL de tu worker en lugar de sub.wyzie.io; el worker las reenvía con tu clave adjunta.',
  'subs.intro.protect.opt2.h3': 'Opción 2: Construir Tu Propio Proxy',
  'subs.intro.protect.opt2.p1':
    'Si prefieres no usar Wyzie Worker, puedes construir un proxy simple del lado del servidor en cualquier framework. La idea es la misma: tu backend recibe solicitudes de tu cliente, agrega la clave API y las reenvía a sub.wyzie.io.',

  // Subs Sources Page
  'subs.sources.title': 'Fuentes de Wyzie Subs',
  'subs.sources.p1':
    'Wyzie Subs agrega subtítulos de múltiples proveedores. La disponibilidad de las fuentes puede variar según el estado del proveedor o si una fuente está caída. Siempre estoy buscando nuevas fuentes; contáctame para sugerir una.',

  'subs.sources.using.h2': 'Usar Fuentes',
  'subs.sources.using.bullet1':
    'Usa source=all para consultar todas las fuentes habilitadas simultáneamente',
  'subs.sources.using.bullet2':
    'La fuente predeterminada es opensubtitles si no se especifica',
  'subs.sources.using.bullet3':
    'Se pueden especificar múltiples fuentes como una lista separada por comas',

  'subs.sources.api.h2': 'Endpoint de la API',
  'subs.sources.api.p1':
    'Puedes obtener mediante programación la lista de fuentes habilitadas actualmente y su nivel de plan:',
  'subs.sources.api.free':
    'fuentes que cualquier clave puede consultar, incluidas las gratuitas.',
  'subs.sources.api.paid': 'fuentes que requieren una clave Pro.',
  'subs.sources.api.allFree':
    'cuando es true, todas las fuentes habilitadas están disponibles para todas las claves y paid está vacío.',

  'subs.sources.scope.h3': 'Filtrar por clave',
  'subs.sources.scope.p1':
    'Pasa tu clave API para obtener las fuentes que esa clave puede usar realmente:',
  'subs.sources.scope.p2':
    'Esto añade campos específicos de la clave sin consumir una solicitud de tu cuota:',
  'subs.sources.scope.available':
    'fuentes que esta clave puede consultar ahora mismo.',
  'subs.sources.scope.restricted':
    'fuentes habilitadas que esta clave no puede consultar (mejora a Pro para desbloquearlas).',
  'subs.sources.scope.keyType': 'free o paid.',
  'subs.sources.scope.keyValid':
    'es false cuando la clave está malformada o no se encuentra, y null cuando la clave no pudo verificarse (en cuyo caso available y restricted se omiten).',

  'subs.sources.details.h2': 'Detalles de las Fuentes',

  'subs.sources.opensubtitles.desc':
    'La base de datos de subtítulos más grande en línea. Compatible con películas y series de TV en una amplia gama de idiomas. Usa la API REST oficial de OpenSubtitles.',
  'subs.sources.opensubtitles.content': 'Películas y series de TV',
  'subs.sources.opensubtitles.languages': 'Amplio soporte multilingüe',
  'subs.sources.opensubtitles.formats': 'SRT, ASS, SSA, VTT, SUB y más',

  'subs.sources.subdl.desc':
    'Un sitio de subtítulos impulsado por la comunidad con una amplia selección de películas y series de TV.',
  'subs.sources.subdl.content': 'Películas y series de TV',
  'subs.sources.subdl.languages': 'Amplio soporte multilingüe',
  'subs.sources.subdl.formats': 'SRT, ASS, SSA, VTT, SUB y más',

  'subs.sources.subf2m.desc':
    'Un gran repositorio de subtítulos con amplia cobertura de idiomas para películas y series de TV.',
  'subs.sources.subf2m.content': 'Películas y series de TV',
  'subs.sources.subf2m.languages': 'Amplio soporte multilingüe',
  'subs.sources.subf2m.formats': 'SRT, ASS, SSA, VTT, SUB y más',

  'subs.sources.podnapisi.desc':
    'Una de las bases de datos de subtítulos más antiguas. Colección bien curada que cubre películas y series de TV.',
  'subs.sources.podnapisi.content': 'Películas y series de TV',
  'subs.sources.podnapisi.languages': 'Amplio soporte multilingüe',
  'subs.sources.podnapisi.formats': 'SRT, ASS, SSA, VTT, SUB y más',

  'subs.sources.animetosho.desc':
    'Extrae archivos de subtítulos de anime directamente de lanzamientos de torrents indexados en AnimeTosho.',
  'subs.sources.animetosho.content': 'Anime (series de TV)',
  'subs.sources.animetosho.languages':
    'Japonés, inglés y otros según el lanzamiento',
  'subs.sources.animetosho.formats': 'ASS, SRT, SSA y otros',
  'subs.sources.animetosho.note':
    'AnimeTosho tiene programado su cierre en mayo de 2026.',

  'subs.sources.gestdown.desc':
    'Proporciona subtítulos para series de TV a través de la API de Gestdown con amplio soporte de idiomas.',
  'subs.sources.gestdown.content': 'Solo series de TV',
  'subs.sources.gestdown.languages': 'Amplio soporte multilingüe',
  'subs.sources.gestdown.formats': 'SRT, ASS y más',

  'subs.sources.jimaku.desc':
    'Extrae de jimaku.cc, un repositorio de subtítulos de anime mantenido por la comunidad. Coincide títulos usando la API de TMDB.',
  'subs.sources.jimaku.content': 'Anime (películas y series de TV)',
  'subs.sources.jimaku.languages':
    'Principalmente japonés; también inglés, chino y más según los archivos disponibles',
  'subs.sources.jimaku.formats': 'SRT, ASS, SSA, VTT, SUB y otros',

  'subs.sources.kitsunekko.desc':
    'Extrae listados de directorios de kitsunekko.net, un repositorio de subtítulos de anime dedicado. Coincide títulos usando la API de TMDB.',
  'subs.sources.kitsunekko.content': 'Anime (series de TV)',
  'subs.sources.kitsunekko.languages':
    'Directorios de subtítulos en inglés y japonés',
  'subs.sources.kitsunekko.formats': 'SRT, ASS, SSA, VTT, SUB y otros',

  'subs.sources.yify.desc':
    'Extrae de yifysubtitles.ch subtítulos identificados por IMDB ID. Solo películas.',
  'subs.sources.yify.content':
    'Solo películas (las series de TV no son compatibles)',
  'subs.sources.yify.languages':
    'Amplio soporte multilingüe (albanés, árabe, inglés, francés, español y muchos más)',
  'subs.sources.yify.formats': 'SRT (entregado dentro de un archivo ZIP)',

  'subs.sources.ajatttools.desc':
    'Obtiene subtítulos del repositorio de GitHub Ajatt-Tools/kitsunekko-mirror. Organizado por tipo de contenido. Coincide títulos usando la API de TMDB.',
  'subs.sources.ajatttools.content': 'Anime y drama (series de TV y películas)',
  'subs.sources.ajatttools.languages':
    'Principalmente japonés; también inglés, chino y otros',
  'subs.sources.ajatttools.formats': 'SRT, ASS, SSA, VTT, SUB y otros',

  'subs.sources.ai.desc':
    'No es un scraper. SRT generado bajo demanda con IA y traducido a partir del mejor subtítulo fuente disponible. Consulta la guía de Traducción con IA para todos los detalles.',
  'subs.sources.ai.content':
    'Cualquier contenido para el que Wyzie pueda encontrar un SRT',
  'subs.sources.ai.languages': 'Más de 80 idiomas de destino',
  'subs.sources.ai.formats': 'Solo SRT',

  // Subs Package Page
  'subs.pkg.title': 'Usar el Paquete NPM de Wyzie',
  'subs.pkg.p1':
    'El paquete NPM de Wyzie Subs proporciona una interfaz simple y fácil de usar para buscar y obtener subtítulos.',
  'subs.pkg.install.h2': 'Instalación',
  'subs.pkg.important':
    'Se requiere una clave API para todas las solicitudes. Obtén una clave gratuita en [store.wyzie.io/redeem](https://store.wyzie.io/redeem) y pásala mediante el parámetro key. Consulta la página de Claves API para más detalles.',
  'subs.pkg.usage.h2': 'Uso',
  'subs.pkg.params.h3': 'Parámetros',
  'subs.pkg.params.note':
    'Para más información (o si estás atascado), visita la [página principal de Wyzie Subs](https://sub.wyzie.io).',

  'subs.pkg.param.tmdb':
    'ID de TMDB de la película o serie de TV (se requiere tmdb_id o imdb_id).',
  'subs.pkg.param.imdb':
    'ID de IMDB de la película o serie de TV (se requiere imdb_id o tmdb_id).',
  'subs.pkg.param.format':
    'Formatos de archivo a devolver (p. ej., srt, ass). Acepta una lista.',
  'subs.pkg.param.season': 'Número de temporada (requiere episode).',
  'subs.pkg.param.episode': 'Número de episodio (requiere season).',
  'subs.pkg.param.language':
    'Códigos ISO 639-1 para el idioma del subtítulo. Acepta una lista.',
  'subs.pkg.param.encoding':
    'Filtro de codificación de caracteres (p. ej., utf-8, latin-1).',
  'subs.pkg.param.hi':
    'Booleano para subtítulos para personas con discapacidad auditiva.',
  'subs.pkg.param.source':
    'Proveedores de subtítulos a consultar (all para todas las fuentes habilitadas).',
  'subs.pkg.param.release': 'Filtros de lanzamiento/escena (acepta una lista).',
  'subs.pkg.param.filename':
    'Filtros de nombre de archivo; los alias file y fileName son compatibles.',
  'subs.pkg.param.origin':
    'Filtro de origen del contenido (p. ej., WEB, BLURAY, DVD).',
  'subs.pkg.param.key':
    'Tu clave API (requerida). Obtén una gratis en store.wyzie.io/redeem.',
  'subs.pkg.param.refresh':
    'Omite la caché y obtiene resultados frescos de las fuentes.',

  'subs.pkg.helpers':
    'El paquete también incluye helpers ligeros de TMDB: searchTmdb, getTvDetails y getSeasonDetails para encontrar IDs rápidamente antes de llamar a /search. Además, getSources puede usarse para obtener la lista de fuentes de subtítulos habilitadas actualmente.',
  'subs.pkg.types.h3': 'Tipos',
  'subs.pkg.type.search':
    'Todos los parámetros válidos reconocidos por la API.',
  'subs.pkg.type.query':
    'Todos los parámetros (opcionales y requeridos) disponibles para la API wyzie-subs.',
  'subs.pkg.type.subtitle':
    'Todos los valores devueltos por la API con sus respectivos tipos.',
  'subs.pkg.type.sources': 'Tipo de respuesta del endpoint /sources.',
  'subs.pkg.types.end':
    'Nuestros tipos son muy simples y están bien documentados. Consulta el archivo types.ts enlazado en el repositorio de GitHub.',
  'subs.pkg.config.h3': 'Configuración',
  'subs.pkg.config.p1':
    'Un usuario preguntó en Github si era posible configurar el nombre de host de la API y pensé que era buena idea, así que aquí está el uso. ¡Los quiero, chicos!',

  // Subs Direct Page
  'subs.direct.title': 'Consultar Wyzie Subs Directamente',
  'subs.direct.caution':
    'Recomiendo encarecidamente usar el paquete NPM ya que es más fácil y confiable.',
  'subs.direct.p1':
    'Si has decidido no usar el paquete NPM, comencemos. Solo voy a repasar los parámetros de la API y los datos que devuelve. Cómo solicitas la API depende completamente de ti.',
  'subs.direct.important':
    'Se requiere una clave API para todas las solicitudes. Obtén una clave gratuita en [store.wyzie.io/redeem](https://store.wyzie.io/redeem) e inclúyela como &key=YOUR_KEY en cada solicitud. Consulta la página de Claves API para más detalles.',

  'subs.direct.params.h3': 'Parámetros',
  'subs.direct.param.id':
    'ID de TMDB o IMDB del programa o película (requerido).',
  'subs.direct.param.seasonEpisode':
    'Temporada y episodio para búsquedas de TV. Ambos deben estar presentes juntos.',
  'subs.direct.param.language':
    'Filtro de idioma (códigos ISO 639-1). Múltiples valores separados por comas.',
  'subs.direct.param.format':
    'Formatos de subtítulos a devolver. Se permiten múltiples valores.',
  'subs.direct.param.hi':
    'Si se prefieren subtítulos para personas con discapacidad auditiva.',
  'subs.direct.param.encoding': 'Filtro de codificación de caracteres.',
  'subs.direct.param.source':
    'Proveedores de subtítulos a consultar (all consulta todas las fuentes habilitadas; por defecto opensubtitles).',
  'subs.direct.param.release':
    'Filtros de nombre de lanzamiento o escena (separados por comas).',
  'subs.direct.param.file':
    'Filtros de nombre de archivo (alias: file, filename, fileName).',
  'subs.direct.param.origin':
    'Filtro de origen del contenido, separado por comas (p. ej., WEB, BLURAY, DVD).',
  'subs.direct.param.key':
    'Tu clave API (requerida). Obtén una gratis en store.wyzie.io/redeem.',
  'subs.direct.param.refresh':
    'Omite la caché y obtiene resultados frescos. Úsalo cuando las fuentes puedan haberse actualizado.',
  'subs.direct.important.imdb':
    "Al usar un ID de IMDB, asegúrate de que los dos primeros caracteres ('tt') estén incluidos al inicio del ID.",

  'subs.direct.data.h3': 'Datos Devueltos',
  'subs.direct.data.id': 'El ID del archivo de subtítulos.',
  'subs.direct.data.url': 'La URL del archivo de subtítulos.',
  'subs.direct.data.flagUrl': 'URL a la bandera del locale del idioma.',
  'subs.direct.data.format': 'El formato del archivo de subtítulos.',
  'subs.direct.data.encoding':
    'La codificación de caracteres del archivo de subtítulos.',
  'subs.direct.data.display': 'El idioma del subtítulo, con mayúscula inicial.',
  'subs.direct.data.language': 'El código ISO 3166-2 del idioma.',
  'subs.direct.data.media':
    'El nombre del contenido multimedia al que pertenecen los subtítulos.',
  'subs.direct.data.isHearingImpaired':
    'Booleano que indica si el subtítulo es accesible para personas con discapacidad auditiva.',
  'subs.direct.data.source': 'De qué fuente se extrajo el subtítulo.',
  'subs.direct.data.release': 'Nombre de lanzamiento principal.',
  'subs.direct.data.releases':
    'Otros nombres de lanzamiento compatibles con el subtítulo.',
  'subs.direct.data.fileName':
    'Nombre de archivo original cuando está disponible.',
  'subs.direct.data.downloadCount':
    'Número de descargas en la plataforma de origen (si está disponible).',
  'subs.direct.data.origin': 'Origen del contenido (p. ej., WEB, BluRay, DVD).',
  'subs.direct.data.matchedRelease':
    'Valor de lanzamiento que coincidió con tu filtro (si se proporcionó).',
  'subs.direct.data.matchedFilter':
    'El filtro proporcionado por el usuario que coincidió (si se proporcionó).',
  'subs.direct.data.ai':
    'true si la entrada es un subtítulo traducido con IA, false para subtítulos extraídos normalmente. Úsalo como filtro del lado del cliente cuando solo quieras uno u otro.',

  // Subs Translate Page
  'subs.translate.title': 'Traducción de Subtítulos con IA',
  'subs.translate.important':
    'La traducción con IA es una **función Pro**. Cada traducción cuesta **100 solicitudes** del saldo de tu clave, cobradas tanto en un acierto de caché como en una traducción nueva. Las claves gratuitas no pueden usarla.',
  'subs.translate.p1':
    'Wyzie puede traducir cualquier subtítulo a más de 80 idiomas al instante. Las traducciones se transmiten a medida que el modelo las genera, de modo que la reproducción puede comenzar en uno o dos segundos en lugar de esperar a que se complete el archivo completo. Los resultados se almacenan en caché durante 30 días, por lo que la segunda persona que solicite la misma traducción la obtiene al instante.',

  'subs.translate.ways.h2': 'Dos Formas de Usarlo',
  'subs.translate.way1.h3':
    '1. Seleccionar un Idioma de una Respuesta de Búsqueda',
  'subs.translate.way1.p1':
    'Cada respuesta de /search ahora incluye una entrada extra por idioma compatible con "ai": true y una url que apunta a /translate. Trata las filas de IA como cualquier otra fila de subtítulos en tu interfaz: cuando el usuario haga clic en una, obtén la URL.',
  'subs.translate.way1.filter':
    'Si deseas ocultar las filas de IA de tu interfaz, fíltralas:',
  'subs.translate.way2.h3': '2. Llamar a /translate Directamente',

  'subs.translate.param.id': 'ID de TMDB o IMDB (requerido).',
  'subs.translate.param.target':
    'Idioma de destino como su nombre completo en inglés (p. ej. Spanish, Japanese, Brazilian Portuguese) (requerido).',
  'subs.translate.param.seasonEpisode':
    'Para TV. Ambos deben estar presentes juntos.',
  'subs.translate.param.key':
    'Tu clave API. Usa tk en su lugar si obtuviste la URL de /search.',
  'subs.translate.param.tk':
    'Token firmado devuelto por /search. Equivalente a key, pero no expone la clave en bruto.',

  'subs.translate.headers.p':
    'El cuerpo de la respuesta es un archivo SRT transmitido como text/plain; charset=utf-8. Cabeceras de respuesta útiles:',
  'subs.translate.header.xcache':
    'HIT-REDIS si se sirve desde caché, MISS si se genera en el momento.',
  'subs.translate.header.xsourcelang':
    'idioma del subtítulo que el traductor usó como entrada.',
  'subs.translate.header.xtargetlang': 'eco de tu parámetro target.',
  'subs.translate.header.xsourceprovider':
    'qué scraper proporcionó el subtítulo fuente.',

  'subs.translate.how.h2': 'Cómo Funciona',
  'subs.translate.how.step1':
    'Wyzie busca en las fuentes normales un subtítulo SRT, prefiriendo el inglés cuando está disponible.',
  'subs.translate.how.step2':
    'El SRT se divide en bloques de 50 pies de texto y se traduce de forma secuencial. Cada bloque se almacena en caché individualmente al completarse.',
  'subs.translate.how.step3':
    'La salida se transmite de vuelta línea a línea. Los reproductores que aceptan un cuerpo SRT en streaming pueden comenzar a mostrar las primeras líneas antes de que el resto esté listo.',
  'subs.translate.how.step4':
    'La traducción completa se almacena en caché en Redis durante 30 días, indexada por id, season, episode y target.',

  'subs.translate.languages.h2': 'Idiomas de Destino Compatibles',
  'subs.translate.languages.p':
    'Más de 80 idiomas, incluyendo todos los principales idiomas europeos, asiáticos, africanos y de Oriente Medio. Pasa el nombre en inglés (Spanish, no es). La lista también se devuelve como filas ai: true en cualquier respuesta de /search, que es la fuente de verdad canónica.',

  'subs.translate.limitations.h2': 'Limitaciones',
  'subs.translate.limit1':
    'La traducción con IA necesita una fuente SRT. Los títulos donde todos los subtítulos disponibles son .ass, .vtt u otro formato devolverán 404 No SRT found.',
  'subs.translate.limit2':
    'La calidad de la traducción depende del subtítulo fuente. Una fuente mal sincronizada o con errores tipográficos produce una traducción mal sincronizada o con errores.',
  'subs.translate.limit3':
    'Algunos usuarios pueden querer excluir las filas de IA por completo. Filtra por ai === false en tu cliente.',
  'subs.translate.limit4':
    'Las traducciones se cobran también en aciertos de caché. Ya sea generada de nuevo o servida desde la caché de 30 días, cada solicitud a /translate cuesta 100 solicitudes.',

  // Subs API Keys Page
  'subs.keys.title': 'Claves API',
  'subs.keys.p1':
    'Wyzie Subs requiere una clave API para todas las solicitudes. El nivel gratuito cubre la mayoría de los casos de uso; los planes de pago manejan un uso más intensivo.',

  'subs.keys.tiers.h2': 'Niveles',
  'subs.keys.tier.free': 'Gratuito (se requiere Gmail)',
  'subs.keys.tier.free.limit': '1.000 solicitudes / día UTC',
  'subs.keys.tier.pro': '$5 pago único',
  'subs.keys.tier.pro.limit': '400.000 solicitudes',
  'subs.keys.tier.topup': 'desde $0.0625 / 5K',
  'subs.keys.tier.topup.limit': 'Se añade a tu saldo de pago',
  'subs.keys.tiers.end':
    'Los planes Pro y las recargas no caducan. ¿Prefieres un cobro recurrente? Una suscripción de $32/mes te da 6.000.000 de solicitudes al mes (solo con tarjeta). Visita store.wyzie.io para ver precios completos y el panel de control.',

  'subs.keys.free.h2': 'Obtener una Clave Gratuita',
  'subs.keys.free.p':
    'Visita [store.wyzie.io/redeem](https://store.wyzie.io/redeem):',
  'subs.keys.free.step1': 'Resuelve un captcha rápido de Cloudflare Turnstile.',
  'subs.keys.free.step2':
    'Ingresa una dirección de Gmail (solo se acepta Gmail para el nivel gratuito).',
  'subs.keys.free.step3':
    'Ingresa el código de 6 dígitos que te enviamos por correo electrónico.',
  'subs.keys.free.step4':
    'Recibes una clave API que se ve así: wyzie-abc123...',
  'subs.keys.free.gmail':
    'Cada dirección de Gmail solo puede canjear una clave gratuita. ¿Ya tenías una clave gratuita vinculada a ese correo? Verificar de nuevo simplemente devuelve tu clave existente.',

  'subs.keys.pro.h2': 'Actualizar a Pro',
  'subs.keys.pro.p1':
    'Visita [store.wyzie.io](https://store.wyzie.io) y paga con el mismo correo que usaste para tu clave gratuita. Tu clave wyzie-... existente se actualiza directamente con 400K solicitudes de pago añadidas encima. ¿Prefieres un cobro recurrente? Una suscripción de $32/mes añade en su lugar un cupo mensual de 6.000.000 de solicitudes (solo con tarjeta).',
  'subs.keys.pro.p2':
    'Si pagas con un correo completamente nuevo (sin clave previa), se genera una nueva clave wyzie-... y se te envía por correo electrónico.',

  'subs.keys.protect.h2': 'Mantén Tu Clave Fuera del Cliente',
  'subs.keys.protect.important':
    '**Nunca incruste tu clave API en código del lado del cliente.** El JavaScript del navegador, las aplicaciones móviles, las extensiones de navegador, las aplicaciones de escritorio tipo Electron y los repositorios Git públicos se consideran todos del lado del cliente. Todo lo que envíes a un usuario final puede ser inspeccionado por él, y hemos visto casos reales en los que usuarios pegaron su clave en el frontend de un sitio de streaming, solo para que un tercero extrajera el bundle de JS y agotara el saldo de solicitudes en pocas horas. La cuota consumida de esta manera no es reembolsable.',
  'subs.keys.protect.p2':
    'Dos formas seguras de usar la clave desde una aplicación cliente:',
  'subs.keys.protect.option1':
    'Usa [Wyzie Worker](https://github.com/wyziedevs/wyzie-worker): un proxy gratuito de Cloudflare Worker que guarda tu clave en el servidor. Apunta tu cliente a la URL del Worker en lugar de sub.wyzie.io.',
  'subs.keys.protect.option2':
    'Ejecuta tu propio proxy: cualquier endpoint de backend que agregue la clave antes de reenviar a sub.wyzie.io funciona. Consulta la página de Introducción para un ejemplo de 10 líneas.',
  'subs.keys.protect.devtools':
    'Si la clave aparece en una pestaña de red en DevTools, está expuesta. Asume que es pública y rótala enviando un correo al soporte.',

  'subs.keys.using.h2': 'Usar Tu Clave',
  'subs.keys.using.p': 'Agrega &key=YOUR_KEY a cada solicitud de la API:',
  'subs.keys.using.npm.h3': 'Paquete NPM',

  'subs.keys.limit.h2': 'Al Alcanzar el Límite',
  'subs.keys.limit.free':
    '**Nivel gratuito** agotado -> La API devuelve 429 con las cabeceras X-RateLimit-Reset y Retry-After. El contador diario se restablece a medianoche UTC.',
  'subs.keys.limit.paid':
    '**Saldo de pago** agotado -> La API devuelve 402. Recarga en [store.wyzie.io/topup](https://store.wyzie.io/topup) o habilita la **recarga automática** en tu panel de control para rellenar automáticamente cuando tu saldo cruce un umbral que tú configures.',

  'subs.keys.faq.h2': 'Preguntas Frecuentes',
  'subs.keys.faq.q1': 'Perdí mi clave. ¿Puedo obtener una nueva?',
  'subs.keys.faq.a1':
    'Visita [store.wyzie.io](https://store.wyzie.io) y usa el flujo de "clave olvidada" con tu correo registrado; te reenviaremos tu clave existente.',
  'subs.keys.faq.q2': '¿Puedo usar una clave en múltiples proyectos?',
  'subs.keys.faq.a2':
    'Sí. Tu clave funciona en cualquier lugar donde llames a la API.',
  'subs.keys.faq.q3': '¿Mi clave caducará alguna vez?',
  'subs.keys.faq.a3':
    'No. Las claves gratuitas y de pago no tienen fecha de vencimiento. Las claves gratuitas tienen un límite diario; el saldo de pago persiste hasta que lo uses.',
  'subs.keys.faq.q4': '¿Es segura la recarga automática?',
  'subs.keys.faq.a4':
    'Tú estableces un límite de gasto mensual. Nunca cobramos por encima de ese límite, y la desactivación con un clic está en cada correo de confirmación y en tu panel de control.',

  // Proxy Intro Page
  'proxy.intro.title': 'Introducción a Wyzie Proxy',
  'proxy.intro.note':
    'La versión de producción de Wyzie Subs ya no usa este proxy; en su lugar usa [i6.shark](https://github.com/wyziedevs/i6.shark).',
  'proxy.intro.p1':
    'Wyzie Proxy es una poderosa API de proxy que te permite hacer solicitudes a cualquier sitio web sin restricciones de CORS u otras. Como Wyzie Proxy está hecho con Nitro, puede alojarse en cualquiera de las siguientes plataformas: AWS Amplify, Azure, Cloudflare, Netlify, Stormkit, Vercel, Zeabur.',
  'proxy.intro.btn.hosting': 'Alojamiento',
  'proxy.intro.btn.check': 'Échale un Vistazo',

  // Proxy Hosting Page
  'proxy.hosting.title': 'Alojar Wyzie Proxy',
  'proxy.hosting.p1':
    'Construir Wyzie Proxy es más fácil que respirar, gracias a Nitro. Primero, clona el repositorio de Wyzie Proxy usando:',
  'proxy.hosting.p2': 'Luego instala todos los paquetes necesarios con:',
  'proxy.hosting.p3':
    'Después de instalar todos los paquetes, puedes compilar el proxy:',
  'proxy.hosting.p4':
    'La salida se generará en la carpeta /.output/server. Si estás desplegando en Cloudflare Workers, copia y pega el archivo index.mjs al worker; de lo contrario, puedes desplegar los archivos de forma normal.',

  // i6.shark Intro Page
  'i6shark.intro.title': 'Introducción a i6.shark',
  'i6shark.intro.p1':
    'i6.shark es un servidor proxy IPv6 que te permite hacer solicitudes HTTP desde direcciones IPv6 generadas aleatoriamente en una subred /48. Este es el proxy que actualmente impulsa Wyzie Subs en producción.',
  'i6shark.intro.p2':
    'Una subred /48 tiene 1.208.925.819.614.629.174.706.176 (1,2 x 10^24) direcciones IPv6, lo que hace prácticamente imposible bloquearla mediante el bloqueo de IP tradicional. Usar una sola subred significa que quienes realmente quieran bloquearte pueden bloquear tu dirección ASN, así que ten cuidado con eso.',
  'i6shark.intro.btn.hosting': 'Alojamiento',
  'i6shark.intro.btn.github': 'GitHub',

  'i6shark.intro.features.h2': 'Características',
  'i6shark.intro.feature1':
    '**Generación Aleatoria de IPv6**: Crea direcciones IPv6 aleatorias desde tu prefijo /48 para cada solicitud',
  'i6shark.intro.feature2':
    '**Soporte Completo de Métodos HTTP**: GET, POST, PUT, DELETE y todos los demás métodos HTTP',
  'i6shark.intro.feature3':
    '**Autenticación HMAC-SHA256**: Autenticación segura de clave API usando tokens basados en user-agent',
  'i6shark.intro.feature4':
    '**Gestión Inteligente de Pool de IPs**: Rotación automática de IP con tamaño de pool configurable. Gestión inteligente del ciclo de vida de IPs. Conteo de solicitudes por IP. Limpieza de IPs no utilizadas basada en umbral de inactividad.',
  'i6shark.intro.feature5':
    '**Manejo Avanzado de Solicitudes**: Reenvío de cabeceras personalizadas. Eliminación de cabeceras de Cloudflare y CDN. Soporte para múltiples formatos de parámetros URL. Respaldo opcional a la IP predeterminada del sistema.',
  'i6shark.intro.feature6':
    '**Lista Blanca de Hosts**: Lista blanca de dominios integrada para seguridad (configurable en el código)',
  'i6shark.intro.feature7':
    '**Mantenimiento Automático**: Vaciado periódico del pool de IPs. Validación y limpieza de subredes. Optimización de pool de conexiones y keepalive.',
  'i6shark.intro.feature8':
    '**Alto Rendimiento**: Manejo concurrente de solicitudes con pool de buffers. Tiempos de espera y límites de conexión configurables. Gestión eficiente de direcciones IPv6.',
  'i6shark.intro.feature9':
    '**Modo de Depuración**: Registro detallado para solución de problemas y monitoreo',

  'i6shark.intro.requirements.h2': 'Requisitos',
  'i6shark.intro.req1': 'Go 1.20 o superior',
  'i6shark.intro.req2':
    'Sistema Linux/Unix con soporte IPv6 (preferiblemente Ubuntu)',
  'i6shark.intro.req3':
    'Privilegios de root (para enlazar el puerto 80 y manipulación de IPv6)',
  'i6shark.intro.req4':
    'Asignación de subred IPv6 /48 de tu proveedor de alojamiento',

  'i6shark.intro.providers.h2': 'Proveedores de Alojamiento',
  'i6shark.intro.providers.p1':
    'Se sabe que los siguientes proveedores ofrecen subredes IPv6 /48:',

  // i6.shark Hosting Page
  'i6shark.hosting.title': 'Alojar i6.shark',
  'i6shark.hosting.p1':
    'Configurar i6.shark requiere un VPS con una subred IPv6 /48. Una vez configurado, funciona de forma autónoma con un mantenimiento mínimo.',

  'i6shark.hosting.steps.h2': 'Pasos',
  'i6shark.hosting.step1': 'Clona el repositorio en /opt/i6.shark:',
  'i6shark.hosting.step2': 'Configura las constantes en src/consts.go:',
  'i6shark.hosting.step2.note':
    'Actualiza SharedSecret, IPv6Prefix e Interface para que coincidan con tu servidor. Las demás constantes de ajuste tienen valores predeterminados razonables y generalmente no necesitan cambios.',
  'i6shark.hosting.step3': 'Compila la aplicación:',
  'i6shark.hosting.step4': 'Crea el servicio systemd:',
  'i6shark.hosting.step5': 'Habilita e inicia el servicio:',
  'i6shark.hosting.step5.check': 'Verifica el estado:',
  'i6shark.hosting.post':
    'El servidor proxy ahora se ejecutará automáticamente al arrancar y se reiniciará si falla.',

  'i6shark.hosting.daily.h2': 'Reinicio Diario (Opcional)',
  'i6shark.hosting.daily.p':
    'Agrega un cron job para reiniciar el servidor diariamente a una hora aleatoria:',

  'i6shark.hosting.auth.h2': 'Autenticación de la API',
  'i6shark.hosting.auth.p':
    'Los tokens de API se generan usando HMAC-SHA256 con una clave secreta compartida. La entrada para la generación de claves es la cabecera user-agent. Consulta la función validateAPIToken en el código fuente para los detalles de implementación.',
};

export default messages;
