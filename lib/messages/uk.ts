const messages: Record<string, string> = {
  // Navigation
  'nav.language': 'Мова',

  // Index / Landing Page
  'index.subtitle':
    "Wyzie — це відкритий набір інструментів для пошуку субтитрів та всього, що з цим пов'язано.",
  'index.cta.start': 'Розпочати',
  'index.cta.store': 'Переглянути',

  'index.card.keys.title': 'Безкоштовні API-ключі',
  'index.card.keys.body':
    'Отримайте безкоштовний API-ключ на store.wyzie.io/redeem після швидкої верифікації через Gmail. 1 000 запитів на день без оплати. Доступні платні плани для більшого обсягу.',

  'index.card.ai.title': 'AI-переклад',
  'index.card.ai.body':
    'Перекладайте будь-які субтитри більш ніж на 80 мов на вимогу. Передача відбувається репліка за реплікою, тож відтворення може розпочатись за лічені секунди. Доступно на Pro-ключах.',

  'index.card.reliable.title': 'Надійність',
  'index.card.reliable.body':
    'Ми пишаємося стабільним аптаймом, (майже) щоденними оновленнями та швидким кешуванням.',

  'index.card.simple.title': 'Простота на новому рівні',
  'index.card.simple.body':
    'Легко інтегрувати, легко використовувати. Wyzie спроектовано максимально простим.',

  // Donate Page
  'donate.title': 'Будь ласка, підтримайте нас',
  'donate.body':
    'Привіт! Wyzie значною мірою залежить від донатів (яких я майже не отримую). Мені 16 років, я маю роботу на неповний день, і іноді рахунок за підтримку публічного API перевищує 100$ на місяць. Я не можу продовжувати це без сторонньої допомоги. Щиро вибачаюсь, але проєкт виріс за межі того, що я міг фінансувати самостійно.',
  'donate.cta': 'Підтримати Wyzie',

  // Subs Intro Page
  'subs.intro.title': 'Знайомство з Wyzie Subs',
  'subs.intro.p1':
    'Wyzie Subs — це вільний та відкритий API для парсингу субтитрів. Існує два способи робити запити до API: через наш NPM-пакет або напряму звертаючись до Wyzie API. Я рекомендую використовувати наш пакет, але деяким може здатися, що типи занадто громіздкі. Перш ніж почати, потрібно зробити цей вибір.',
  'subs.intro.note.ai':
    'AI-переклад доступний для Pro-ключів. Будь-який заголовок, понад 80 цільових мов, з потоковою передачею в процесі перекладу.',
  'subs.intro.important.apikey':
    'Для всіх запитів потрібен API-ключ. Отримайте безкоштовний ключ на [store.wyzie.io/redeem](https://store.wyzie.io/redeem) (верифікація Gmail, 1 000 запитів на день). Для більшого обсягу доступні [Pro та поповнення](https://store.wyzie.io). Подробиці — на сторінці API-ключів.',
  'subs.intro.note.npm':
    'Ми наполегливо рекомендуємо NPM-пакет, якщо ви знайомі з TypeScript або JavaScript',
  'subs.intro.btn.npm': 'NPM-пакет',
  'subs.intro.btn.direct': 'Прямий запит',

  'subs.intro.protect.h2': 'Захист вашого API-ключа',
  'subs.intro.protect.important':
    '**Реальний інцидент:** ми бачили, як розробники вставляли свій ключ безпосередньо у фронтенд-JavaScript стрімінгових сайтів. Протягом кількох годин стороння особа витягла його з JS-бандлу й використовувала до вичерпання денного ліміту або платного балансу. Витрачена таким чином квота не повертається і вважається відповідальністю власника ключа згідно з нашими Умовами.',
  'subs.intro.protect.p1':
    "Ваш API-ключ має бути приватним і **ніколи** не з'являтись у:",
  'subs.intro.protect.item1':
    'Браузерному JavaScript (будь-що, що подається через тег script)',
  'subs.intro.protect.item2':
    'Бінарних файлах мобільних додатків (Android/iOS, включно з обфускованими)',
  'subs.intro.protect.item3': 'Розширеннях браузера',
  'subs.intro.protect.item4':
    'Застосунках Electron / десктопних додатках, що розповсюджуються серед кінцевих користувачів',
  'subs.intro.protect.item5':
    'Публічних Git-репозиторіях, гістах, сайтах для вставки тексту або скриншотах',
  'subs.intro.protect.p2':
    'Якщо ключ потрапив на машину кінцевого користувача — вважайте його публічним. Існує два безпечних підходи:',
  'subs.intro.protect.opt1.h3': 'Варіант 1: використовуйте Wyzie Worker',
  'subs.intro.protect.opt1.p1':
    'Wyzie Worker — це легкий проксі на Cloudflare Worker, що вставляє ваш API-ключ на стороні сервера. Розгорніть його в Cloudflare Workers і вкажіть ключ як змінну середовища NITRO_API_TOKEN. Потім спрямовуйте клієнтські запити на URL вашого воркера замість sub.wyzie.io — воркер пересилає їх з вашим ключем.',
  'subs.intro.protect.opt2.h3': 'Варіант 2: створіть власний проксі',
  'subs.intro.protect.opt2.p1':
    'Якщо ви не хочете використовувати Wyzie Worker, можна створити простий серверний проксі на будь-якому фреймворку. Ідея та сама: ваш бекенд отримує запити від клієнта, додає API-ключ і пересилає їх на sub.wyzie.io.',

  // Subs Sources Page
  'subs.sources.title': 'Джерела Wyzie Subs',
  'subs.sources.p1':
    'Wyzie Subs агрегує субтитри з кількох провайдерів. Доступність джерел може варіюватись залежно від стану провайдера або якщо джерело недоступне. Я завжди шукаю нові джерела — пишіть, щоб запропонувати своє.',

  'subs.sources.using.h2': 'Використання джерел',
  'subs.sources.using.bullet1':
    'Використовуйте source=all для запиту всіх увімкнених джерел одночасно',
  'subs.sources.using.bullet2':
    'Джерело за замовчуванням — opensubtitles, якщо не вказано інше',
  'subs.sources.using.bullet3': 'Можна вказати кілька джерел через кому',

  'subs.sources.api.h2': 'API-ендпоінт',
  'subs.sources.api.p1':
    'Ви можете програмно отримати список наразі увімкнених джерел та їх рівень плану:',
  'subs.sources.api.free':
    'джерела, доступні будь-якому ключу, включно з безкоштовними.',
  'subs.sources.api.paid': 'джерела, що потребують Pro-ключа.',
  'subs.sources.api.allFree':
    'якщо true, усі увімкнені джерела доступні всім ключам, а paid порожній.',

  'subs.sources.scope.h3': 'Фільтрація за ключем',
  'subs.sources.scope.p1':
    'Передайте ваш API-ключ, щоб отримати джерела, доступні саме цьому ключу:',
  'subs.sources.scope.p2':
    'Це додає специфічні для ключа поля, не витрачаючи запит з вашої квоти:',
  'subs.sources.scope.available':
    'джерела, які цей ключ може запитувати прямо зараз.',
  'subs.sources.scope.restricted':
    'увімкнені джерела, недоступні цьому ключу (оновіться до Pro, щоб розблокувати).',
  'subs.sources.scope.keyType': 'free або paid.',
  'subs.sources.scope.keyValid':
    'false, якщо ключ некоректний або не знайдений, і null, якщо ключ не вдалося перевірити (в такому разі available і restricted відсутні).',

  'subs.sources.details.h2': 'Деталі джерел',

  'subs.sources.opensubtitles.desc':
    'Найбільша онлайн-база субтитрів. Підтримує фільми та серіали широким діапазоном мов. Використовує офіційний OpenSubtitles REST API.',
  'subs.sources.opensubtitles.content': 'Фільми та серіали',
  'subs.sources.opensubtitles.languages': 'Широка підтримка мов',
  'subs.sources.opensubtitles.formats': 'SRT, ASS, SSA, VTT, SUB та інші',

  'subs.sources.subdl.desc':
    'Субтитровий сайт, що підтримується спільнотою, з широким вибором фільмів і серіалів.',
  'subs.sources.subdl.content': 'Фільми та серіали',
  'subs.sources.subdl.languages': 'Широка підтримка мов',
  'subs.sources.subdl.formats': 'SRT, ASS, SSA, VTT, SUB та інші',

  'subs.sources.subf2m.desc':
    'Великий репозиторій субтитрів із широким охопленням мов для фільмів і серіалів.',
  'subs.sources.subf2m.content': 'Фільми та серіали',
  'subs.sources.subf2m.languages': 'Широка підтримка мов',
  'subs.sources.subf2m.formats': 'SRT, ASS, SSA, VTT, SUB та інші',

  'subs.sources.podnapisi.desc':
    'Одна з найстаріших баз субтитрів. Ретельно підібрана колекція фільмів і серіалів.',
  'subs.sources.podnapisi.content': 'Фільми та серіали',
  'subs.sources.podnapisi.languages': 'Широка підтримка мов',
  'subs.sources.podnapisi.formats': 'SRT, ASS, SSA, VTT, SUB та інші',

  'subs.sources.animetosho.desc':
    'Парсить вкладення субтитрів до аніме безпосередньо з торент-релізів, індексованих на AnimeTosho.',
  'subs.sources.animetosho.content': 'Аніме (серіали)',
  'subs.sources.animetosho.languages':
    'Японська, англійська та інші залежно від релізу',
  'subs.sources.animetosho.formats': 'ASS, SRT, SSA та інші',
  'subs.sources.animetosho.note':
    'AnimeTosho планує припинити роботу у травні 2026 року.',

  'subs.sources.gestdown.desc':
    'Надає субтитри для серіалів через Gestdown API з широкою підтримкою мов.',
  'subs.sources.gestdown.content': 'Лише серіали',
  'subs.sources.gestdown.languages': 'Широка підтримка мов',
  'subs.sources.gestdown.formats': 'SRT, ASS та інші',

  'subs.sources.jimaku.desc':
    'Парсить jimaku.cc — репозиторій субтитрів до аніме, що підтримується спільнотою. Зіставляє назви через TMDB API.',
  'subs.sources.jimaku.content': 'Аніме (фільми та серіали)',
  'subs.sources.jimaku.languages':
    'Переважно японська; також англійська, китайська та інші залежно від доступних файлів',
  'subs.sources.jimaku.formats': 'SRT, ASS, SSA, VTT, SUB та інші',

  'subs.sources.kitsunekko.desc':
    'Парсить каталоги з kitsunekko.net — спеціалізованого репозиторію субтитрів до аніме. Зіставляє назви через TMDB API.',
  'subs.sources.kitsunekko.content': 'Аніме (серіали)',
  'subs.sources.kitsunekko.languages':
    'Каталоги субтитрів англійською та японською',
  'subs.sources.kitsunekko.formats': 'SRT, ASS, SSA, VTT, SUB та інші',

  'subs.sources.yify.desc':
    'Парсить yifysubtitles.ch для субтитрів, знайдених за IMDB ID. Лише фільми.',
  'subs.sources.yify.content': 'Лише фільми (серіали не підтримуються)',
  'subs.sources.yify.languages':
    'Широка підтримка мов (албанська, арабська, англійська, французька, іспанська та багато інших)',
  'subs.sources.yify.formats': 'SRT (у ZIP-архіві)',

  'subs.sources.ajatttools.desc':
    'Отримує субтитри з GitHub-репозиторію Ajatt-Tools/kitsunekko-mirror. Організовано за типом медіа. Зіставляє назви через TMDB API.',
  'subs.sources.ajatttools.content': 'Аніме та дорами (серіали та фільми)',
  'subs.sources.ajatttools.languages':
    'Переважно японська; також англійська, китайська та інші',
  'subs.sources.ajatttools.formats': 'SRT, ASS, SSA, VTT, SUB та інші',

  'subs.sources.ai.desc':
    'Не є парсером. SRT, перекладений за допомогою AI на вимогу з найкращого доступного джерела субтитрів. Детальніше — в посібнику з AI-перекладу.',
  'subs.sources.ai.content': 'Будь-що, для чого Wyzie знаходить SRT',
  'subs.sources.ai.languages': 'Понад 80 цільових мов',
  'subs.sources.ai.formats': 'Лише SRT',

  // Subs Package Page
  'subs.pkg.title': 'Використання NPM-пакету Wyzie',
  'subs.pkg.p1':
    'NPM-пакет Wyzie Subs надає простий та зручний інтерфейс для пошуку та отримання субтитрів.',
  'subs.pkg.install.h2': 'Встановлення',
  'subs.pkg.important':
    'Для всіх запитів потрібен API-ключ. Отримайте безкоштовний ключ на [store.wyzie.io/redeem](https://store.wyzie.io/redeem) і передавайте його через параметр key. Подробиці — на сторінці API-ключів.',
  'subs.pkg.usage.h2': 'Використання',
  'subs.pkg.params.h3': 'Параметри',
  'subs.pkg.params.note':
    'Для отримання додаткової інформації (або якщо ви застрягли) відвідайте [головну сторінку Wyzie Subs](https://sub.wyzie.io).',

  'subs.pkg.param.tmdb':
    'TMDB ID фільму або серіалу (потрібен tmdb_id або imdb_id).',
  'subs.pkg.param.imdb':
    'IMDB ID фільму або серіалу (потрібен imdb_id або tmdb_id).',
  'subs.pkg.param.format':
    'Формати файлів для повернення (наприклад, srt, ass). Приймає список.',
  'subs.pkg.param.season': 'Номер сезону (потребує episode).',
  'subs.pkg.param.episode': 'Номер епізоду (потребує season).',
  'subs.pkg.param.language':
    'Коди ISO 639-1 для мови субтитрів. Приймає список.',
  'subs.pkg.param.encoding':
    'Фільтр кодування символів (наприклад, utf-8, latin-1).',
  'subs.pkg.param.hi':
    'Булеве значення для субтитрів для глухих і слабочуючих.',
  'subs.pkg.param.source':
    'Провайдери субтитрів для запиту (all для кожного увімкненого джерела).',
  'subs.pkg.param.release': 'Фільтри релізу/сцени (приймає список).',
  'subs.pkg.param.filename':
    'Фільтри імені файлу; підтримуються аліаси file і fileName.',
  'subs.pkg.param.origin':
    'Фільтр походження контенту (наприклад, WEB, BLURAY, DVD).',
  'subs.pkg.param.key':
    "Ваш API-ключ (обов'язково). Отримайте безкоштовний на store.wyzie.io/redeem.",
  'subs.pkg.param.refresh': 'Обійти кеш і отримати свіжі результати з джерел.',

  'subs.pkg.helpers':
    'Пакет також постачається з легкими TMDB-хелперами: searchTmdb, getTvDetails та getSeasonDetails для швидкого пошуку ID перед зверненням до /search. Крім того, getSources можна використовувати для отримання списку наразі увімкнених джерел субтитрів.',
  'subs.pkg.types.h3': 'Типи',
  'subs.pkg.type.search': 'Усі дійсні параметри, що розпізнаються API.',
  'subs.pkg.type.query':
    "Усі параметри (необов'язкові та обов'язкові), доступні для wyzie-subs API.",
  'subs.pkg.type.subtitle':
    'Усі значення, що повертаються API, з відповідними типами.',
  'subs.pkg.type.sources': 'Тип відповіді з ендпоінту /sources.',
  'subs.pkg.types.end':
    'Наші типи дуже прості й добре задокументовані. Перегляньте файл types.ts у GitHub-репозиторії.',
  'subs.pkg.config.h3': 'Конфігурація',
  'subs.pkg.config.p1':
    'Один користувач попросив на Github додати можливість налаштування хоста API, і я подумав: слушна ідея! Нижче наведено приклад використання. Дякую всім вам!',

  // Subs Direct Page
  'subs.direct.title': 'Прямий запит до Wyzie Subs',
  'subs.direct.caution':
    'Я наполегливо рекомендую використовувати NPM-пакет — він простіший і надійніший.',
  'subs.direct.p1':
    'Якщо ви вирішили не використовувати NPM-пакет — почнімо. Я розгляну лише параметри API та дані, що повертаються API. Спосіб звернення до API повністю залежить від вас.',
  'subs.direct.important':
    'Для всіх запитів потрібен API-ключ. Отримайте безкоштовний ключ на [store.wyzie.io/redeem](https://store.wyzie.io/redeem) і додавайте його як &key=YOUR_KEY до кожного запиту. Подробиці — на сторінці API-ключів.',

  'subs.direct.params.h3': 'Параметри',
  'subs.direct.param.id': "TMDB або IMDB ID серіалу або фільму (обов'язково).",
  'subs.direct.param.seasonEpisode':
    'Сезон та епізод для пошуку по серіалах. Обидва мають бути вказані разом.',
  'subs.direct.param.language':
    'Фільтр мови (коди ISO 639-1). Кілька значень розділяються комою.',
  'subs.direct.param.format':
    'Формати субтитрів для повернення. Допускається кілька значень.',
  'subs.direct.param.hi':
    'Чи надавати перевагу субтитрам для глухих і слабочуючих.',
  'subs.direct.param.encoding': 'Фільтр кодування символів.',
  'subs.direct.param.source':
    'Провайдери субтитрів для запиту (all запитує кожне увімкнене джерело; за замовчуванням opensubtitles).',
  'subs.direct.param.release': 'Фільтри назви релізу або сцени (через кому).',
  'subs.direct.param.file':
    'Фільтри імені файлу (аліаси: file, filename, fileName).',
  'subs.direct.param.origin':
    'Фільтр походження контенту через кому (наприклад, WEB, BLURAY, DVD).',
  'subs.direct.param.key':
    "Ваш API-ключ (обов'язково). Отримайте безкоштовний на store.wyzie.io/redeem.",
  'subs.direct.param.refresh':
    'Обійти кеш і отримати свіжі результати. Використовуйте, якщо джерела могли оновитись.',
  'subs.direct.important.imdb':
    "При використанні IMDB ID переконайтесь, що перші два символи ('tt') включені на початку ID.",

  'subs.direct.data.h3': 'Дані, що повертаються',
  'subs.direct.data.id': 'ID файлу субтитрів.',
  'subs.direct.data.url': 'URL до файлу субтитрів.',
  'subs.direct.data.flagUrl': 'URL прапора локалі мови.',
  'subs.direct.data.format': 'Формат файлу субтитрів.',
  'subs.direct.data.encoding': 'Кодування символів файлу субтитрів.',
  'subs.direct.data.display': 'Мова субтитрів із великої літери.',
  'subs.direct.data.language': 'Код ISO 3166-2 мови.',
  'subs.direct.data.media': 'Назва медіа, до якого належать субтитри.',
  'subs.direct.data.isHearingImpaired':
    'Булеве значення, що вказує, чи субтитри доступні для глухих і слабочуючих.',
  'subs.direct.data.source': 'Джерело, з якого були отримані субтитри.',
  'subs.direct.data.release': 'Основна назва релізу.',
  'subs.direct.data.releases': 'Інші назви релізів, сумісних із субтитрами.',
  'subs.direct.data.fileName': "Оригінальне ім'я файлу, якщо доступне.",
  'subs.direct.data.downloadCount':
    'Кількість завантажень на платформі-джерелі (якщо доступно).',
  'subs.direct.data.origin':
    'Походження контенту (наприклад, WEB, BluRay, DVD).',
  'subs.direct.data.matchedRelease':
    'Значення релізу, що відповідало вашому фільтру (якщо вказано).',
  'subs.direct.data.matchedFilter':
    'Фільтр, наданий користувачем, що спрацював (якщо вказано).',
  'subs.direct.data.ai':
    'true, якщо субтитри перекладені за допомогою AI, false для звичайних парсингових субтитрів. Використовуйте як фільтр на стороні клієнта, якщо потрібен лише один тип.',

  // Subs Translate Page
  'subs.translate.title': 'AI-переклад субтитрів',
  'subs.translate.important':
    'AI-переклад — це **Pro-функція**. Кожен переклад коштує **100 запитів** з балансу вашого ключа, стягується як при кеш-попаданні, так і при свіжому перекладі. Безкоштовні ключі не можуть його використовувати.',
  'subs.translate.p1':
    'Wyzie може перекласти будь-які субтитри більш ніж на 80 мов у режимі реального часу. Переклади передаються потоково в міру їх генерації, тож відтворення може розпочатись за секунду-дві, не чекаючи всього файлу. Результати кешуються на 30 днів, тому другий запитувач того самого перекладу отримує його миттєво.',

  'subs.translate.ways.h2': 'Два способи використання',
  'subs.translate.way1.h3': '1. Обрати мову з відповіді пошуку',
  'subs.translate.way1.p1':
    'Кожна відповідь /search тепер містить додатковий запис для кожної підтримуваної мови з "ai": true і url, що вказує на /translate. Просто обробляйте рядки AI як будь-який інший рядок субтитрів у вашому інтерфейсі: коли користувач натискає на один, отримайте URL.',
  'subs.translate.way1.filter':
    'Якщо ви хочете приховати рядки AI з інтерфейсу, відфільтруйте їх:',
  'subs.translate.way2.h3': '2. Викликати /translate напряму',

  'subs.translate.param.id': "TMDB або IMDB ID (обов'язково).",
  'subs.translate.param.target':
    "Цільова мова її повною англійською назвою (наприклад, Spanish, Japanese, Brazilian Portuguese) (обов'язково).",
  'subs.translate.param.seasonEpisode':
    'Для серіалів. Обидва мають бути вказані разом.',
  'subs.translate.param.key':
    'Ваш API-ключ. Використовуйте tk замість нього, якщо ви отримали URL з /search.',
  'subs.translate.param.tk':
    'Підписаний токен, повернутий /search. Еквівалент key, але не розкриває сирий ключ.',

  'subs.translate.headers.p':
    'Тіло відповіді — це SRT-файл, переданий потоково як text/plain; charset=utf-8. Корисні заголовки відповіді:',
  'subs.translate.header.xcache':
    'HIT-REDIS, якщо подано з кешу, MISS — якщо згенеровано заново.',
  'subs.translate.header.xsourcelang':
    'мова субтитрів, використаних перекладачем як вхідні дані.',
  'subs.translate.header.xtargetlang': 'відображення вашого параметра target.',
  'subs.translate.header.xsourceprovider':
    'який парсер надав вихідні субтитри.',

  'subs.translate.how.h2': 'Як це працює',
  'subs.translate.how.step1':
    'Wyzie шукає SRT-субтитри у звичайних джерелах, надаючи перевагу англійській мові, коли вона доступна.',
  'subs.translate.how.step2':
    'SRT розбивається на фрагменти по 50 реплік і перекладається послідовно. Кожен фрагмент кешується окремо після завершення.',
  'subs.translate.how.step3':
    'Вихідні дані передаються вам потоково репліка за реплікою. Плеєри, що приймають потоковий SRT-файл, можуть починати показувати перші рядки до того, як решта буде готова.',
  'subs.translate.how.step4':
    'Повний переклад кешується в Redis на 30 днів з ключем за id, season, episode та target.',

  'subs.translate.languages.h2': 'Підтримувані цільові мови',
  'subs.translate.languages.p':
    'Понад 80 мов, включно з усіма основними європейськими, азійськими, африканськими та близькосхідними мовами. Передавайте англійську назву (Spanish, а не es). Список також повертається як рядки ai: true в будь-якій відповіді /search — це канонічне джерело правди.',

  'subs.translate.limitations.h2': 'Обмеження',
  'subs.translate.limit1':
    'AI-перекладу потрібне SRT-джерело. Назви, де кожен доступний субтитр у форматі .ass, .vtt або іншому, повернуть 404 No SRT found.',
  'subs.translate.limit2':
    'Якість перекладу залежить від вихідних субтитрів. Погано синхронізоване або з помилками джерело дасть такий самий переклад.',
  'subs.translate.limit3':
    'Деякі користувачі можуть захотіти повністю відключити AI-рядки. Фільтруйте за ai === false на стороні клієнта.',
  'subs.translate.limit4':
    'Переклади тарифікуються і при попаданні в кеш. Незалежно від того, генерується заново чи береться з 30-денного кешу, кожен запит /translate коштує 100 запитів.',

  // Subs API Keys Page
  'subs.keys.title': 'API-ключі',
  'subs.keys.p1':
    'Wyzie Subs вимагає API-ключ для всіх запитів. Безкоштовний рівень покриває більшість випадків; платні плани розраховані на більше навантаження.',

  'subs.keys.tiers.h2': 'Рівні',
  'subs.keys.tier.free': 'Безкоштовний (потрібен Gmail)',
  'subs.keys.tier.free.limit': '1 000 запитів / UTC-день',
  'subs.keys.tier.pro': '$5 одноразово',
  'subs.keys.tier.pro.limit': '400 000 запитів',
  'subs.keys.tier.topup': 'від $0.0625 / 5K',
  'subs.keys.tier.topup.limit': 'Додається до вашого платного балансу',
  'subs.keys.tiers.end':
    'Pro та поповнення не мають терміну дії. Бажаєте регулярні платежі? Підписка за $32/місяць надає 6 000 000 запитів на місяць (лише картка). Повна тарифікація та панель управління — на store.wyzie.io.',

  'subs.keys.free.h2': 'Отримання безкоштовного ключа',
  'subs.keys.free.p':
    'Відвідайте [store.wyzie.io/redeem](https://store.wyzie.io/redeem):',
  'subs.keys.free.step1': 'Пройдіть швидку капчу Cloudflare Turnstile.',
  'subs.keys.free.step2':
    'Введіть адресу Gmail (для безкоштовного рівня приймається лише Gmail).',
  'subs.keys.free.step3': 'Введіть 6-значний код, надісланий на вашу пошту.',
  'subs.keys.free.step4': 'Ви отримаєте API-ключ у вигляді wyzie-abc123...',
  'subs.keys.free.gmail':
    "Кожна адреса Gmail може отримати лише один безкоштовний ключ. Якщо у вас вже є безкоштовний ключ, прив'язаний до цього email? Повторна верифікація просто поверне ваш існуючий ключ.",

  'subs.keys.pro.h2': 'Оновлення до Pro',
  'subs.keys.pro.p1':
    'Відвідайте [store.wyzie.io](https://store.wyzie.io) і оформіть покупку з тією самою email, що використовувалась для безкоштовного ключа. Ваш існуючий ключ wyzie-... буде оновлено на місці з додаванням 400K платних запитів. Бажаєте регулярні платежі? Натомість підписка за $32/місяць додає місячний ліміт у 6 000 000 запитів (лише картка).',
  'subs.keys.pro.p2':
    'Якщо ви оформите покупку з нової email (без попереднього ключа), буде згенеровано новий ключ wyzie-... і надіслано вам на пошту.',

  'subs.keys.protect.h2': 'Тримайте ключ подалі від клієнта',
  'subs.keys.protect.important':
    '**Ніколи не вбудовуйте ваш API-ключ у клієнтський код.** Браузерний JavaScript, мобільні додатки, розширення браузера, десктопні додатки у стилі Electron і публічні Git-репозиторії — все це вважається клієнтською стороною. Все, що ви надсилаєте кінцевому користувачу, може бути ним перевірено, і ми бачили реальні випадки, коли користувачі вставляли ключ у фронтенд стрімінгового сайту, і стороння особа витягала його з JS-бандлу, вичерпуючи баланс запитів за лічені години. Витрачена таким чином квота не повертається.',
  'subs.keys.protect.p2':
    'Два безпечних способи використовувати ключ з клієнтського додатку:',
  'subs.keys.protect.option1':
    'Використовуйте [Wyzie Worker](https://github.com/wyziedevs/wyzie-worker): безкоштовний проксі Cloudflare Worker, що зберігає ваш ключ на стороні сервера. Спрямуйте клієнт на URL воркера замість sub.wyzie.io.',
  'subs.keys.protect.option2':
    'Запустіть власний проксі: будь-який бекенд-ендпоінт, що додає ключ перед пересиланням на sub.wyzie.io. Дивіться сторінку Intro для прикладу на 10 рядків.',
  'subs.keys.protect.devtools':
    "Якщо ключ з'являється на вкладці мережі у DevTools — він відкритий. Вважайте його публічним і ротуйте, надіславши листа в підтримку.",

  'subs.keys.using.h2': 'Використання вашого ключа',
  'subs.keys.using.p': 'Додавайте &key=YOUR_KEY до кожного API-запиту:',
  'subs.keys.using.npm.h3': 'NPM-пакет',

  'subs.keys.limit.h2': 'Вичерпання ліміту',
  'subs.keys.limit.free':
    '**Безкоштовний рівень** вичерпано -> API повертає 429 із заголовками X-RateLimit-Reset і Retry-After. Добовий лічильник скидається опівночі UTC.',
  'subs.keys.limit.paid':
    '**Платний баланс** вичерпано -> API повертає 402. Поповніть на [store.wyzie.io/topup](https://store.wyzie.io/topup) або увімкніть **автопоповнення** в панелі управління, щоб автоматично поповнювати баланс при досягненні встановленого порогу.',

  'subs.keys.faq.h2': 'Часті запитання',
  'subs.keys.faq.q1': 'Я загубив ключ. Чи можу отримати новий?',
  'subs.keys.faq.a1':
    'Відвідайте [store.wyzie.io](https://store.wyzie.io) і скористайтесь функцією «забутий ключ» з вашою зареєстрованою email — ми повторно надішлемо ваш існуючий ключ.',
  'subs.keys.faq.q2': 'Чи можу я використовувати один ключ у кількох проєктах?',
  'subs.keys.faq.a2': 'Так. Ваш ключ працює скрізь, де ви звертаєтесь до API.',
  'subs.keys.faq.q3': 'Чи закінчується термін дії ключа?',
  'subs.keys.faq.a3':
    'Ні. Безкоштовні та платні ключі не мають терміну дії. Безкоштовні ключі мають добовий ліміт; платний баланс зберігається до його використання.',
  'subs.keys.faq.q4': 'Чи безпечне автопоповнення?',
  'subs.keys.faq.a4':
    'Ви встановлюєте місячний ліміт витрат. Ми ніколи не стягуємо більше, а вимкнути одним кліком можна з будь-якого листа-підтвердження або з панелі управління.',

  // Proxy Intro Page
  'proxy.intro.title': 'Знайомство з Wyzie Proxy',
  'proxy.intro.note':
    'Продакшн-версія Wyzie Subs більше не використовує цей проксі, натомість використовується [i6.shark](https://github.com/wyziedevs/i6.shark).',
  'proxy.intro.p1':
    'Wyzie Proxy — це потужний проксі API, що дозволяє робити запити до будь-якого сайту без CORS та інших обмежень. Оскільки Wyzie Proxy створено на Nitro, його можна розмістити на будь-якій із наступних платформ: AWS Amplify, Azure, Cloudflare, Netlify, Stormkit, Vercel, Zeabur.',
  'proxy.intro.btn.hosting': 'Хостинг',
  'proxy.intro.btn.check': 'Переглянути',

  // Proxy Hosting Page
  'proxy.hosting.title': 'Хостинг Wyzie Proxy',
  'proxy.hosting.p1':
    'Побудувати Wyzie Proxy простіше простого — завдяки Nitro. Спочатку клонуйте репозиторій Wyzie Proxy за допомогою:',
  'proxy.hosting.p2': 'Потім встановіть усі необхідні пакети за допомогою:',
  'proxy.hosting.p3': 'Після встановлення всіх пакетів можна зібрати проксі:',
  'proxy.hosting.p4':
    'Вихідні файли будуть згенеровані в папці /.output/server. Якщо ви розгортаєте на Cloudflare Workers, скопіюйте файл index.mjs до воркера; в іншому випадку розгорніть файли у звичайний спосіб.',

  // i6.shark Intro Page
  'i6shark.intro.title': 'Знайомство з i6.shark',
  'i6shark.intro.p1':
    'i6.shark — це IPv6-проксі-сервер, що дозволяє робити HTTP-запити з випадково згенерованих IPv6-адрес у /48 subnet. Це проксі, що наразі живить Wyzie Subs у продакшні.',
  'i6shark.intro.p2':
    '/48 subnet містить 1 208 925 819 614 629 174 706 176 (1.2 x 10^24) IPv6-адрес, що робить блокування традиційним баном IP практично неможливим. Використання одного підмережі означає, що ті, хто справді захоче вас заблокувати, можуть заблокувати вашу ASN-адресу, тому будьте обережні.',
  'i6shark.intro.btn.hosting': 'Хостинг',
  'i6shark.intro.btn.github': 'GitHub',

  'i6shark.intro.features.h2': 'Можливості',
  'i6shark.intro.feature1':
    '**Генерація випадкових IPv6**: створює випадкові IPv6-адреси з вашого /48 префіксу для кожного запиту',
  'i6shark.intro.feature2':
    '**Повна підтримка HTTP-методів**: GET, POST, PUT, DELETE та всі інші HTTP-методи',
  'i6shark.intro.feature3':
    '**Аутентифікація HMAC-SHA256**: безпечна автентифікація API-ключа за допомогою токенів на основі user-agent',
  'i6shark.intro.feature4':
    '**Інтелектуальне управління пулом IP**: автоматична ротація IP з налаштовуваним розміром пулу. Розумне управління життєвим циклом IP. Підрахунок запитів на кожен IP. Очищення невикористаних IP на основі порогу неактивності.',
  'i6shark.intro.feature5':
    "**Розширена обробка запитів**: пересилання кастомних заголовків. Видалення заголовків Cloudflare та CDN. Підтримка кількох форматів параметрів URL. Необов'язковий відкат на системний IP за замовчуванням.",
  'i6shark.intro.feature6':
    '**Білий список хостів**: вбудований білий список доменів для безпеки (налаштовується в коді)',
  'i6shark.intro.feature7':
    "**Автоматичне обслуговування**: періодичне очищення пулу IP. Валідація та очищення підмережі. Оптимізація пулу з'єднань та keepalive.",
  'i6shark.intro.feature8':
    "**Висока продуктивність**: конкурентна обробка запитів з буферним пулінгом. Налаштовувані тайм-аути та ліміти з'єднань. Ефективне управління IPv6-адресами.",
  'i6shark.intro.feature9':
    '**Режим налагодження**: детальне логування для усунення несправностей та моніторингу',

  'i6shark.intro.requirements.h2': 'Вимоги',
  'i6shark.intro.req1': 'Go 1.20 або вище',
  'i6shark.intro.req2': 'Система Linux/Unix з підтримкою IPv6 (бажано Ubuntu)',
  'i6shark.intro.req3':
    "Права root (для прив'язки до порту 80 та роботи з IPv6)",
  'i6shark.intro.req4':
    'Виділення IPv6 /48 subnet від вашого хостинг-провайдера',

  'i6shark.intro.providers.h2': 'Хостинг-провайдери',
  'i6shark.intro.providers.p1':
    'Наступні провайдери відомі тим, що пропонують /48 IPv6 subnet:',

  // i6.shark Hosting Page
  'i6shark.hosting.title': 'Хостинг i6.shark',
  'i6shark.hosting.p1':
    'Налаштування i6.shark потребує VPS із /48 IPv6 subnet. Після налаштування він працює автономно з мінімальним обслуговуванням.',

  'i6shark.hosting.steps.h2': 'Кроки',
  'i6shark.hosting.step1': 'Клонуйте репозиторій до /opt/i6.shark:',
  'i6shark.hosting.step2': 'Налаштуйте константи у src/consts.go:',
  'i6shark.hosting.step2.note':
    'Оновіть SharedSecret, IPv6Prefix та Interface відповідно до вашого сервера. Решта констант налаштування мають розумні значення за замовчуванням і зазвичай не потребують змін.',
  'i6shark.hosting.step3': 'Зберіть застосунок:',
  'i6shark.hosting.step4': 'Створіть systemd-сервіс:',
  'i6shark.hosting.step5': 'Увімкніть та запустіть сервіс:',
  'i6shark.hosting.step5.check': 'Перевірте статус:',
  'i6shark.hosting.post':
    'Проксі-сервер тепер буде автоматично запускатись при завантаженні системи та перезапускатись при збоях.',

  'i6shark.hosting.daily.h2': "Щоденний перезапуск (необов'язково)",
  'i6shark.hosting.daily.p':
    'Додайте завдання cron для перезапуску сервера щодня у випадковий час:',

  'i6shark.hosting.auth.h2': 'Автентифікація API',
  'i6shark.hosting.auth.p':
    'API-токени генеруються за допомогою HMAC-SHA256 зі спільним секретним ключем. Вхідними даними для генерації ключа є заголовок user-agent. Деталі реалізації — у функції validateAPIToken у вихідному коді.',

  // Plugins
  'plugins.common.required': "Обов'язково",

  'plugins.index.intro':
    'Wyzie Subs підключається безпосередньо до медіадодатків, якими ви вже користуєтесь. Кожен плагін звертається до того самого ендпоінту `https://sub.wyzie.io/search` і потребує безкоштовного **ключа API Wyzie**. Отримайте його на [store.wyzie.io](https://store.wyzie.io/#plans).',
  'plugins.index.tbl.stremio.for':
    'Перегляд у Stremio на комп’ютері, мобільному пристрої або ТВ',
  'plugins.index.tbl.stremio.install':
    'Розміщений додаток: вставте свій ключ, натисніть Install',
  'plugins.index.tbl.bazarr.for':
    'Бібліотеки Plex, Jellyfin, Emby, Sonarr, Radarr',
  'plugins.index.tbl.bazarr.install':
    'Готовий провайдер для вашого екземпляра Bazarr',
  'plugins.index.tbl.kodi.for': 'Kodi 19+, LibreELEC, CoreELEC',
  'plugins.index.tbl.kodi.install': 'Встановлення із zip або репозиторію Wyzie',
  'plugins.index.use.stremio':
    'Використовуйте **Stremio**, якщо ви дивитесь у додатку Stremio.',
  'plugins.index.use.bazarr':
    'Використовуйте **Bazarr**, якщо у вас Plex, Jellyfin або Emby. Bazarr завантажує файли субтитрів на диск, а ваш медіасервер підхоплює їх автоматично. Це також рекомендований шлях для Plex і Jellyfin; окремого нативного плагіна немає.',
  'plugins.index.use.kodi':
    'Використовуйте **Kodi** для нативного для Kodi сервісу субтитрів на Android TV, Raspberry Pi або домашньому медіацентрі.',
  'plugins.index.shared.sources':
    '**Джерела:** OpenSubtitles, SubDL і Podnapisi, агреговані через Wyzie.',
  'plugins.index.shared.matching':
    '**Зіставлення:** Wyzie працює на основі ідентифікаторів IMDB і TMDB, а також сезону й епізоду, тож збіги точні як для фільмів, так і для серіалів.',
  'plugins.index.shared.quota':
    '**Квота:** коли ваш ключ вичерпується, плагін показує дружнє повідомлення з посиланням на [store.wyzie.io](https://store.wyzie.io) замість мовчазного збою. Поповніть рахунок або оформіть підписку — і ви знову в строю.',
  'plugins.index.shared.languages':
    '**Мови:** 100+, можна обирати в кожному плагіні.',
  'plugins.index.outro': 'Оберіть свою платформу вище, щоб почати.',

  'plugins.stremio.intro':
    'Додаток субтитрів в один клік для [Stremio](https://www.stremio.com/). Він агрегує OpenSubtitles, SubDL і Podnapisi через Wyzie та працює як для фільмів, так і для серіалів на всіх платформах, де працює Stremio.',
  'plugins.stremio.before':
    'Вам потрібен безкоштовний ключ API Wyzie. Отримайте його на [store.wyzie.io/redeem](https://store.wyzie.io/redeem) або придбайте Pro-ключ чи оформіть підписку на [store.wyzie.io](https://store.wyzie.io/#plans).',
  'plugins.stremio.install.1':
    'Відкрийте [stremio.wyzie.io/configure](https://stremio.wyzie.io/configure).',
  'plugins.stremio.install.2': 'Вставте свій **ключ API**.',
  'plugins.stremio.install.3':
    'Необов’язково: вкажіть бажані **мови** як коди ISO 639-1 через кому (наприклад, `en,es,fr`). Залиште порожнім для всіх мов.',
  'plugins.stremio.install.4':
    'Необов’язково: увімкніть субтитри для **людей із вадами слуху**, якщо віддаєте їм перевагу.',
  'plugins.stremio.install.5':
    'Натисніть **Install**. Stremio відкриється й попросить підтвердження; прийміть — і готово.',
  'plugins.stremio.install.after':
    'Ваш ключ і налаштування закодовані в додатку, тож більше нічого налаштовувати не потрібно. Відкрийте будь-який фільм або епізод і виберіть субтитри зі списку.',
  'plugins.stremio.cfg.key.f': 'Ключ API',
  'plugins.stremio.cfg.key.d': "Ваш ключ Wyzie. Обов'язково.",
  'plugins.stremio.cfg.langs.f': 'Мови',
  'plugins.stremio.cfg.langs.d':
    'Коди ISO 639-1 через кому. Порожнє означає всі мови.',
  'plugins.stremio.cfg.hi.f': 'Для людей із вадами слуху',
  'plugins.stremio.cfg.hi.d':
    'Віддавати перевагу субтитрам для людей із вадами слуху, коли вони доступні.',
  'plugins.stremio.cfg.note':
    'Щоб змінити будь-що з цього пізніше, знову відкрийте [stremio.wyzie.io/configure](https://stremio.wyzie.io/configure), внесіть зміни та перевстановіть.',
  'plugins.stremio.local':
    'Потім відкрийте `http://127.0.0.1:7000/configure`, вставте свій ключ і встановіть у Stremio.',
  'plugins.stremio.quota':
    'Якщо ваш ключ досягає ліміту, додаток показує один запис субтитрів із посиланням на [store.wyzie.io](https://store.wyzie.io), щоб ви могли поповнити рахунок або оформити підписку. Щойно ви це зробите, субтитри повертаються одразу.',
  'plugins.stremio.ts.none':
    '**Субтитри не з’являються.** Переконайтесь, що в назви є ідентифікатор IMDB у Stremio (у більшості елементів каталогу він є) і що для обраних вами мов дійсно є субтитри для цієї назви. Спробуйте очистити фільтр мов, щоб побачити все.',
  'plugins.stremio.ts.key':
    '**Недійсний ключ або нічого не завантажується.** Знову відкрийте сторінку налаштування й повторно вставте свій ключ; зайвий пробіл його ламає. Перевірте, що ключ працює, на [store.wyzie.io/dashboard](https://store.wyzie.io/dashboard).',
  'plugins.stremio.ts.episode':
    '**Епізод серіалу не збігається.** Wyzie зіставляє за сезоном і епізодом; переконайтесь, що Stremio відтворює правильний запис епізоду, а не загальну сторінку серіалу.',

  'plugins.bazarr.intro':
    '[Bazarr](https://www.bazarr.media/) керує субтитрами для **Plex, Jellyfin, Emby, Sonarr і Radarr** в одному місці. Додавання Wyzie як провайдера дає всім цим серверам доступ до OpenSubtitles, SubDL і Podnapisi через один ключ.',
  'plugins.bazarr.note':
    'Це рекомендований спосіб використання Wyzie з Plex і Jellyfin. Bazarr завантажує файли субтитрів поруч із вашими медіа, а ваш сервер підхоплює їх автоматично, тож окремий нативний плагін не потрібен.',
  'plugins.bazarr.before':
    'Отримайте безкоштовний ключ API Wyzie на [store.wyzie.io/redeem](https://store.wyzie.io/redeem) і майте доступ до файлів встановлення Bazarr (типовий шлях Docker: `/opt/bazarr/bazarr/`).',
  'plugins.bazarr.install.1':
    'Скопіюйте `wyzie.py` у `bazarr/subliminal_patch/providers/wyzie.py`.',
  'plugins.bazarr.install.2':
    'Відредагуйте `bazarr/subliminal_patch/extensions.py` і додайте `wyzie` **до обох** `provider_registry` і `provider_manager`.',
  'plugins.bazarr.install.3':
    'Відредагуйте `bazarr/list_subtitles.py` (або `bazarr/config.py`, залежно від вашої версії), щоб відкрити налаштування `api_key`, `prefer_hi` і `sources`. Скопіюйте шаблон з наявного провайдера, наприклад `opensubtitlescom`.',
  'plugins.bazarr.install.4': 'Перезапустіть Bazarr.',
  'plugins.bazarr.install.5':
    'Перейдіть до **Settings, Providers, Wyzie**, вставте свій ключ API та збережіть.',
  'plugins.bazarr.install.after':
    'Заплановано повноцінний pull request для додавання цього провайдера в апстрим Bazarr. До того часу це готовий файл, який ви додаєте до власного встановлення.',
  'plugins.bazarr.cfg.key': "Ваш ключ Wyzie. Обов'язково.",
  'plugins.bazarr.cfg.hi':
    'Віддавати перевагу субтитрам для людей із вадами слуху.',
  'plugins.bazarr.cfg.sources':
    'Список провайдерів для запиту через кому або `all`.',
  'plugins.bazarr.quota.402':
    '**402 або 429** (баланс вичерпано або досягнуто денного ліміту): Bazarr записує в журнал нотатку з посиланням на [store.wyzie.io](https://store.wyzie.io) і не повертає результатів, тож він коректно переходить до ваших інших провайдерів. Нічого не падає.',
  'plugins.bazarr.quota.401':
    '**401** (неправильний ключ): Bazarr показує помилку автентифікації, тож ви знаєте, що ключ треба ввести повторно.',
  'plugins.bazarr.ts.missing':
    '**Wyzie не з’являється у списку провайдерів.** Перевірте крок встановлення, що редагує `extensions.py`; запис має бути в обох `provider_registry` і `provider_manager`, після чого перезапустіть Bazarr.',
  'plugins.bazarr.ts.none':
    '**Субтитри не знайдено.** Переконайтесь, що елемент має ідентифікатор IMDB у Bazarr і що для увімкнених вами мов є субтитри для нього. Звужуйте `sources` лише якщо ви цього справді хочете.',
  'plugins.bazarr.ts.settings':
    '**Поля налаштувань відсутні.** Крок налаштування не застосовано для вашої версії Bazarr; порівняйте з робочим блоком налаштувань провайдера та перезапустіть.',

  'plugins.kodi.intro':
    'Сервіс субтитрів для **Kodi 19+ (Matrix і новіших)**, LibreELEC і CoreELEC. Він використовує стандартну точку розширення Kodi `xbmc.subtitle.module`, тож з’являється скрізь, де Kodi шукає субтитри.',
  'plugins.kodi.before':
    'Отримайте безкоштовний ключ API Wyzie на [store.wyzie.io/redeem](https://store.wyzie.io/redeem).',
  'plugins.kodi.repo.intro':
    'Одноразове встановлення репозиторію дозволяє Kodi **автоматично оновлювати** додаток за вас.',
  'plugins.kodi.repo.1':
    'Завантажте інсталятор репозиторію: [**repository.wyzie.zip**](https://kodi.wyzie.io/repository.wyzie.zip).',
  'plugins.kodi.repo.2':
    'У Kodi: **Settings, Add-ons, Install from zip file**, потім виберіть `repository.wyzie.zip`. Якщо Kodi блокує його, спершу увімкніть **Settings, System, Add-ons, Unknown sources**.',
  'plugins.kodi.repo.3':
    '**Settings, Add-ons, Install from repository, Wyzie Repository, Subtitle services, Wyzie Subs, Install.**',
  'plugins.kodi.repo.4':
    '**Settings, Player, Language, Default subtitle service**, потім виберіть **Wyzie Subs**.',
  'plugins.kodi.repo.5':
    'Відкрийте налаштування додатка Wyzie Subs і вставте свій **ключ API**.',
  'plugins.kodi.zip.intro':
    'Скористайтесь цим, якщо не хочете додавати репозиторій. Зверніть увагу: встановлення із zip **не** оновлюється автоматично.',
  'plugins.kodi.zip.1':
    'Отримайте zip додатка: `service.subtitles.wyzie-<version>.zip`. Якщо у вас є вихідний код, заархівуйте теку `kodi/` так, щоб у zip-архіві `addon.xml` був у його корені.',
  'plugins.kodi.zip.2':
    'У Kodi: **Settings, Add-ons, Install from zip file**, потім виберіть zip. Якщо Kodi блокує його, спершу увімкніть **Settings, System, Add-ons, Unknown sources**.',
  'plugins.kodi.zip.3':
    '**Settings, Player, Language, Default subtitle service**, потім виберіть **Wyzie Subs**.',
  'plugins.kodi.zip.4':
    'Відкрийте налаштування додатка Wyzie Subs і вставте свій **ключ API**.',
  'plugins.kodi.cfg.key': "Ваш ключ Wyzie. Обов'язково.",
  'plugins.kodi.cfg.hi':
    'Віддавати перевагу субтитрам для людей із вадами слуху.',
  'plugins.kodi.cfg.langs':
    'Мови беруться з обраних у Kodi мов субтитрів і автоматично зіставляються з ISO 639-1.',
  'plugins.kodi.matching.1':
    'Під час відтворення Kodi надає номер IMDB, сезон і епізод. Додаток зчитує їх, надсилає запит до `sub.wyzie.io/search` і повертає відповідні субтитри. Оскільки Wyzie працює на основі ідентифікаторів (IMDB і TMDB), збіги точні як для фільмів, так і для серіалів.',
  'plugins.kodi.matching.2':
    '**Ручний пошук** наразі показує сповіщення й нічого не робить, бо Wyzie зіставляє за ідентифікаторами, а не за назвами. Пошук ідентифікатора за назвою є в планах. Поки що дозвольте Kodi шукати автоматично під час відтворення.',
  'plugins.kodi.quota':
    'Відповідь 402 або 429 показує спливне сповіщення Kodi, яке вказує вам на [store.wyzie.io](https://store.wyzie.io) для поповнення рахунку або оформлення підписки.',
  'plugins.kodi.ts.notoffered':
    '**Wyzie не пропонується під час відтворення.** Переконайтесь, що його встановлено як **Default subtitle service** і що елемент, який відтворюється, має ідентифікатор IMDB.',
  'plugins.kodi.ts.key':
    '**Недійсний ключ.** Знову відкрийте налаштування додатка й повторно вставте свій ключ.',
  'plugins.kodi.ts.episode':
    '**Нічого для епізоду.** Переконайтесь, що Kodi має правильні метадані сезону та епізоду для файлу; найкраще працюють елементи бібліотеки, отримані скрапером.',
};

export default messages;
