const messages: Record<string, string> = {
  // Navigation
  'nav.language': 'اللغة',

  // Index / Landing Page
  'index.subtitle':
    'Wyzie هي مجموعة أدوات مفتوحة المصدر لاستخراج الترجمات وكل ما يتعلق بها.',
  'index.cta.start': 'ابدأ الآن',
  'index.cta.store': 'اطلع عليه',

  'index.card.keys.title': 'مفاتيح API مجانية',
  'index.card.keys.body':
    'احصل على مفتاح API مجاني في store.wyzie.io/redeem مع التحقق السريع عبر Gmail. 1,000 طلب/يوم مجاناً. خطط مدفوعة متاحة للاستخدام الأكثر.',

  'index.card.ai.title': 'ترجمة بالذكاء الاصطناعي',
  'index.card.ai.body':
    'ترجم أي ترجمة إلى أكثر من 80 لغة عند الطلب. تُبث الترجمة قيداً بقيد حتى يمكن بدء التشغيل في ثوانٍ. متاحة لمفاتيح Pro.',

  'index.card.reliable.title': 'موثوقية عالية',
  'index.card.reliable.body':
    'نفخر بوقت تشغيل ثابت وتحديثات (شبه) يومية إضافة إلى تخزين مؤقت سريع.',

  'index.card.simple.title': 'البساطة في أبهى صورها',
  'index.card.simple.body':
    'سهل التطبيق، سهل الاستخدام. صُمّمت Wyzie لتكون بسيطة قدر الإمكان.',

  // Donate Page
  'donate.title': 'يُرجى التبرع',
  'donate.body':
    'مرحباً أيها المستخدم، يعتمد Wyzie الآن على التبرعات (التي نادراً ما أحصل عليها) وأنا في الـ 16 من عمري مع وظيفة بدوام جزئي، وأحياناً تتجاوز فاتورة تشغيل API العام الشهر 100 دولار. لا أستطيع الاستمرار في دعم هذا المشروع دون مساعدة خارجية، وأنا آسف حقاً، لكن هذا المشروع نما أكثر مما كان بإمكاني تحمّله من جيبي الخاص.',
  'donate.cta': 'ادعم Wyzie',

  // Subs Intro Page
  'subs.intro.title': 'مقدمة إلى Wyzie Subs',
  'subs.intro.p1':
    'Wyzie Subs هي واجهة برمجية مجانية ومفتوحة المصدر لاستخراج الترجمات. هناك طريقتان لتقديم الطلبات إلى API: استخدام حزمة NPM الخاصة بنا أو جلب واجهة Wyzie API مباشرةً. أنصح باستخدام حزمتنا، غير أن بعضهم قد يجد الأنواع مُرهِقة. لاستخدام API، يجب عليك أولاً اتخاذ هذا القرار.',
  'subs.intro.note.ai':
    'ترجمة الذكاء الاصطناعي متاحة الآن لمفاتيح Pro. أي عنوان، أكثر من 80 لغة هدف، تُبث أثناء عمل المترجم.',
  'subs.intro.important.apikey':
    'مفتاح API مطلوب لجميع الطلبات. احصل على مفتاح مجاني في [store.wyzie.io/redeem](https://store.wyzie.io/redeem) (التحقق عبر Gmail، 1,000 طلب/يوم). للاستخدام الأكثر، تتوفر [خطط Pro والشحن](https://store.wyzie.io). راجع صفحة مفاتيح API للتفاصيل.',
  'subs.intro.note.npm':
    'نوصي بشدة باستخدام حزمة NPM إذا كنت على دراية بـ TypeScript أو JavaScript',
  'subs.intro.btn.npm': 'حزمة NPM',
  'subs.intro.btn.direct': 'الجلب المباشر',

  'subs.intro.protect.h2': 'حماية مفتاح API الخاص بك',
  'subs.intro.protect.important':
    '**حادثة حقيقية:** رأينا مطورين يلصقون مفتاحهم مباشرةً في JavaScript الواجهة الأمامية لموقع بث. في غضون ساعات، استخرجه طرف غير مرتبط من حزمة JS واستخدمه حتى استنفاد الحصة اليومية أو الرصيد المدفوع. الحصة المُهدرة بهذه الطريقة غير قابلة للاسترداد وتُعدّ مسؤولية صاحب المفتاح وفق شروطنا.',
  'subs.intro.protect.p1': 'يجب الحفاظ على مفتاح API خاصاً و**عدم** ظهوره في:',
  'subs.intro.protect.item1':
    'JavaScript في المتصفح (أي شيء يُقدَّم لوسم script)',
  'subs.intro.protect.item2':
    'ملفات ثنائية لتطبيقات الجوال (Android/iOS، بما فيها المُشفَّرة)',
  'subs.intro.protect.item3': 'إضافات المتصفح',
  'subs.intro.protect.item4':
    'تطبيقات Electron / سطح المكتب الموزَّعة للمستخدمين النهائيين',
  'subs.intro.protect.item5':
    'مستودعات Git العامة، والـ gists، ومواقع اللصق، أو لقطات الشاشة',
  'subs.intro.protect.p2':
    'إذا وصل المفتاح إلى جهاز المستخدم النهائي، اعتبره عاماً. هناك نمطان آمنان:',
  'subs.intro.protect.opt1.h3': 'الخيار 1: استخدام Wyzie Worker',
  'subs.intro.protect.opt1.p1':
    'Wyzie Worker هو وسيط خفيف الوزن على Cloudflare Worker يُضيف مفتاح API الخاص بك على جانب الخادم. انشره على Cloudflare Workers واضبط مفتاحك كمتغير بيئة NITRO_API_TOKEN. ثم وجّه طلبات العميل إلى رابط Worker الخاص بك بدلاً من sub.wyzie.io - يُعيد الـ Worker توجيهها مع إرفاق مفتاحك.',
  'subs.intro.protect.opt2.h3': 'الخيار 2: بناء وسيطك الخاص',
  'subs.intro.protect.opt2.p1':
    'إذا كنت تفضّل عدم استخدام Wyzie Worker، يمكنك بناء وسيط بسيط على جانب الخادم بأي إطار عمل. الفكرة ذاتها: يستقبل خادمك الطلبات من العميل، يُضيف مفتاح API، ويُعيد توجيهها إلى sub.wyzie.io.',

  // Subs Sources Page
  'subs.sources.title': 'مصادر Wyzie Subs',
  'subs.sources.p1':
    'يجمع Wyzie Subs الترجمات من مزودين متعددين. قد تتفاوت توفرية المصادر تبعاً لحالة المزود أو توقف أي مصدر. أبحث دائماً عن مصادر جديدة، تواصل معي لاقتراح أحدها.',

  'subs.sources.using.h2': 'استخدام المصادر',
  'subs.sources.using.bullet1':
    'استخدم source=all للاستعلام عن جميع المصادر الممكّنة في آن واحد',
  'subs.sources.using.bullet2':
    'المصدر الافتراضي هو opensubtitles إذا لم يُحدَّد غيره',
  'subs.sources.using.bullet3': 'يمكن تحديد مصادر متعددة كقائمة مفصولة بفواصل',

  'subs.sources.api.h2': 'نقطة نهاية API',
  'subs.sources.api.p1':
    'يمكنك جلب قائمة المصادر الممكّنة حالياً ومستوى خطتها برمجياً:',
  'subs.sources.api.free':
    'المصادر التي يمكن لأي مفتاح الاستعلام عنها، بما في ذلك المفاتيح المجانية.',
  'subs.sources.api.paid': 'المصادر التي تتطلب مفتاح Pro.',
  'subs.sources.api.allFree':
    'عندما تكون true، تكون كل المصادر الممكّنة متاحة لجميع المفاتيح ويكون paid فارغاً.',

  'subs.sources.scope.h3': 'التحديد لمفتاح معيّن',
  'subs.sources.scope.p1':
    'مرّر مفتاح API الخاص بك للحصول على المصادر التي يمكن لهذا المفتاح استخدامها فعلياً:',
  'subs.sources.scope.p2':
    'يُضيف هذا حقولاً خاصة بالمفتاح دون استهلاك طلب من حصتك:',
  'subs.sources.scope.available':
    'المصادر التي يمكن لهذا المفتاح الاستعلام عنها الآن.',
  'subs.sources.scope.restricted':
    'المصادر الممكّنة التي لا يمكن لهذا المفتاح الاستعلام عنها (قم بالترقية إلى Pro لإتاحتها).',
  'subs.sources.scope.keyType': 'مجاني أو مدفوع.',
  'subs.sources.scope.keyValid':
    'تكون false عندما يكون المفتاح مشوّهاً أو غير موجود، وnull عندما تعذّر التحقق منه (في هذه الحالة يُحذف available وrestricted).',

  'subs.sources.details.h2': 'تفاصيل المصادر',

  'subs.sources.opensubtitles.desc':
    'أكبر قاعدة بيانات ترجمات على الإنترنت. تدعم الأفلام والمسلسلات التلفزيونية بمجموعة واسعة من اللغات. تستخدم واجهة OpenSubtitles REST API الرسمية.',
  'subs.sources.opensubtitles.content': 'الأفلام والمسلسلات التلفزيونية',
  'subs.sources.opensubtitles.languages': 'دعم متعدد اللغات شامل',
  'subs.sources.opensubtitles.formats': 'SRT، ASS، SSA، VTT، SUB، وغيرها',

  'subs.sources.subdl.desc':
    'موقع ترجمات يعتمد على المجتمع مع مجموعة واسعة من الأفلام والمسلسلات التلفزيونية.',
  'subs.sources.subdl.content': 'الأفلام والمسلسلات التلفزيونية',
  'subs.sources.subdl.languages': 'دعم متعدد اللغات شامل',
  'subs.sources.subdl.formats': 'SRT، ASS، SSA، VTT، SUB، وغيرها',

  'subs.sources.subf2m.desc':
    'مستودع ترجمات كبير مع تغطية لغوية شاملة للأفلام والمسلسلات التلفزيونية.',
  'subs.sources.subf2m.content': 'الأفلام والمسلسلات التلفزيونية',
  'subs.sources.subf2m.languages': 'دعم متعدد اللغات شامل',
  'subs.sources.subf2m.formats': 'SRT، ASS، SSA، VTT، SUB، وغيرها',

  'subs.sources.podnapisi.desc':
    'إحدى أقدم قواعد بيانات الترجمات. مجموعة منسّقة بعناية تغطي الأفلام والمسلسلات التلفزيونية.',
  'subs.sources.podnapisi.content': 'الأفلام والمسلسلات التلفزيونية',
  'subs.sources.podnapisi.languages': 'دعم متعدد اللغات شامل',
  'subs.sources.podnapisi.formats': 'SRT، ASS، SSA، VTT، SUB، وغيرها',

  'subs.sources.animetosho.desc':
    'يستخرج مرفقات ترجمات الأنيمي مباشرةً من إصدارات التورنت المفهرسة على AnimeTosho.',
  'subs.sources.animetosho.content': 'الأنيمي (مسلسلات تلفزيونية)',
  'subs.sources.animetosho.languages':
    'اليابانية والإنجليزية وغيرهما تبعاً للإصدار',
  'subs.sources.animetosho.formats': 'ASS، SRT، SSA، وغيرها',
  'subs.sources.animetosho.note': 'AnimeTosho مقرر إغلاقه في مايو 2026.',

  'subs.sources.gestdown.desc':
    'يوفر ترجمات للمسلسلات التلفزيونية عبر Gestdown API مع دعم لغوي واسع.',
  'subs.sources.gestdown.content': 'المسلسلات التلفزيونية فقط',
  'subs.sources.gestdown.languages': 'دعم متعدد اللغات شامل',
  'subs.sources.gestdown.formats': 'SRT، ASS، وغيرها',

  'subs.sources.jimaku.desc':
    'يستخرج من jimaku.cc، وهو مستودع ترجمات أنيمي يديره المجتمع. يطابق العناوين باستخدام TMDB API.',
  'subs.sources.jimaku.content': 'الأنيمي (أفلام ومسلسلات تلفزيونية)',
  'subs.sources.jimaku.languages':
    'اليابانية بشكل أساسي؛ وأيضاً الإنجليزية والصينية وغيرها تبعاً للملفات المتاحة',
  'subs.sources.jimaku.formats': 'SRT، ASS، SSA، VTT، SUB، وغيرها',

  'subs.sources.kitsunekko.desc':
    'يستخرج قوائم المجلدات من kitsunekko.net، وهو مستودع ترجمات أنيمي متخصص. يطابق العناوين باستخدام TMDB API.',
  'subs.sources.kitsunekko.content': 'الأنيمي (مسلسلات تلفزيونية)',
  'subs.sources.kitsunekko.languages': 'مجلدات ترجمات إنجليزية ويابانية',
  'subs.sources.kitsunekko.formats': 'SRT، ASS، SSA، VTT، SUB، وغيرها',

  'subs.sources.yify.desc':
    'يستخرج من yifysubtitles.ch الترجمات المطابقة بواسطة معرّف IMDB. للأفلام فقط.',
  'subs.sources.yify.content': 'الأفلام فقط (المسلسلات التلفزيونية غير مدعومة)',
  'subs.sources.yify.languages':
    'دعم متعدد اللغات شامل (الألبانية، العربية، الإنجليزية، الفرنسية، الإسبانية، وغيرها الكثير)',
  'subs.sources.yify.formats': 'SRT (مُسلَّمة داخل أرشيف ZIP)',

  'subs.sources.ajatttools.desc':
    'يجلب الترجمات من مستودع GitHub الخاص بـ Ajatt-Tools/kitsunekko-mirror. منظّم حسب نوع الوسائط. يطابق العناوين باستخدام TMDB API.',
  'subs.sources.ajatttools.content':
    'الأنيمي والدراما (مسلسلات تلفزيونية وأفلام)',
  'subs.sources.ajatttools.languages':
    'اليابانية بشكل أساسي؛ وأيضاً الإنجليزية والصينية وغيرها',
  'subs.sources.ajatttools.formats': 'SRT، ASS، SSA، VTT، SUB، وغيرها',

  'subs.sources.ai.desc':
    'ليس أداة استخراج. SRT مُترجَم بالذكاء الاصطناعي يُولَّد عند الطلب من أفضل ترجمة مصدر متاحة. راجع دليل ترجمة الذكاء الاصطناعي للتفاصيل الكاملة.',
  'subs.sources.ai.content': 'أي محتوى يمكن لـ Wyzie العثور على SRT له',
  'subs.sources.ai.languages': 'أكثر من 80 لغة هدف',
  'subs.sources.ai.formats': 'SRT فقط',

  // Subs Package Page
  'subs.pkg.title': 'استخدام حزمة Wyzie NPM',
  'subs.pkg.p1':
    'توفر حزمة Wyzie Subs NPM واجهة بسيطة وسهلة الاستخدام للبحث عن الترجمات وجلبها.',
  'subs.pkg.install.h2': 'التثبيت',
  'subs.pkg.important':
    'مفتاح API مطلوب لجميع الطلبات. احصل على مفتاح مجاني في [store.wyzie.io/redeem](https://store.wyzie.io/redeem) ومرّره عبر المعامل key. راجع صفحة مفاتيح API للتفاصيل.',
  'subs.pkg.usage.h2': 'الاستخدام',
  'subs.pkg.params.h3': 'المعاملات',
  'subs.pkg.params.note':
    'لمزيد من المعلومات (أو إذا واجهتك صعوبة)، يُرجى زيارة [الصفحة الرئيسية لـ Wyzie Subs](https://sub.wyzie.io).',

  'subs.pkg.param.tmdb':
    'معرّف TMDB للفيلم أو المسلسل التلفزيوني (tmdb_id أو imdb_id مطلوب).',
  'subs.pkg.param.imdb':
    'معرّف IMDB للفيلم أو المسلسل التلفزيوني (imdb_id أو tmdb_id مطلوب).',
  'subs.pkg.param.format':
    'صيغ الملفات المراد إرجاعها (مثل srt، ass). يقبل قائمة.',
  'subs.pkg.param.season': 'رقم الموسم (يتطلب الحلقة).',
  'subs.pkg.param.episode': 'رقم الحلقة (يتطلب الموسم).',
  'subs.pkg.param.language': 'رموز ISO 639-1 للغة الترجمة. يقبل قائمة.',
  'subs.pkg.param.encoding': 'فلتر ترميز الأحرف (مثل utf-8، latin-1).',
  'subs.pkg.param.hi': 'قيمة منطقية لترجمات ضعاف السمع.',
  'subs.pkg.param.source':
    'مزودو الترجمات للاستعلام عنهم (all لكل المصادر الممكّنة).',
  'subs.pkg.param.release': 'فلاتر الإصدار/المشهد (تقبل قائمة).',
  'subs.pkg.param.filename':
    'فلاتر اسم الملف؛ يُدعم الاسمان المستعاران file وfileName.',
  'subs.pkg.param.origin': 'فلتر أصل المحتوى (مثل WEB، BLURAY، DVD).',
  'subs.pkg.param.key':
    'مفتاح API الخاص بك (مطلوب). احصل على واحد مجاناً في store.wyzie.io/redeem.',
  'subs.pkg.param.refresh':
    'تجاوز الذاكرة المؤقتة وجلب نتائج جديدة من المصادر.',

  'subs.pkg.helpers':
    'تشحن الحزمة أيضاً مساعدات TMDB خفيفة الوزن: searchTmdb وgetTvDetails وgetSeasonDetails للعثور السريع على المعرّفات قبل الوصول إلى /search. بالإضافة إلى ذلك، يمكن استخدام getSources لجلب قائمة مصادر الترجمات الممكّنة حالياً.',
  'subs.pkg.types.h3': 'الأنواع',
  'subs.pkg.type.search': 'جميع المعاملات الصالحة التي تتعرف عليها API.',
  'subs.pkg.type.query':
    'جميع المعاملات (الاختيارية والمطلوبة) المتاحة لـ wyzie-subs API.',
  'subs.pkg.type.subtitle': 'جميع القيم المُرجَعة من API مع أنواعها.',
  'subs.pkg.type.sources': 'نوع الاستجابة من نقطة النهاية /sources.',
  'subs.pkg.types.end':
    'أنواعنا بسيطة جداً وموثّقة توثيقاً جيداً. اطلع على ملف types.ts المرتبط في مستودع GitHub.',
  'subs.pkg.config.h3': 'الإعداد',
  'subs.pkg.config.p1':
    'طلب مني أحد المستخدمين على Github اسم مضيف API قابل للتكوين، وكنت مثل: يا صاحبي، هذه فكرة جيدة! فالاستخدام أدناه. أحبكم يا رفاق!',

  // Subs Direct Page
  'subs.direct.title': 'جلب Wyzie Subs مباشرةً',
  'subs.direct.caution':
    'أنصح بشدة باستخدام حزمة NPM لأنها أسهل وأكثر موثوقية.',
  'subs.direct.p1':
    'إذا قررت عدم استخدام حزمة NPM، فلنبدأ. سأستعرض فقط معاملات API والبيانات التي تُرجعها API. كيفية استدعاء API تعود إليك بالكامل.',
  'subs.direct.important':
    'مفتاح API مطلوب لجميع الطلبات. احصل على مفتاح مجاني في [store.wyzie.io/redeem](https://store.wyzie.io/redeem) وأدرجه كـ &key=YOUR_KEY في كل طلب. راجع صفحة مفاتيح API للتفاصيل.',

  'subs.direct.params.h3': 'المعاملات',
  'subs.direct.param.id': 'معرّف TMDB أو IMDB للعرض أو الفيلم (مطلوب).',
  'subs.direct.param.seasonEpisode':
    'الموسم والحلقة لعمليات البحث في المسلسلات. يجب أن يكونا معاً.',
  'subs.direct.param.language':
    'فلتر اللغة (رموز ISO 639-1). القيم المتعددة مفصولة بفواصل.',
  'subs.direct.param.format': 'صيغ الترجمة المراد إرجاعها. تُقبل قيم متعددة.',
  'subs.direct.param.hi': 'تحديد ما إذا كان يُفضَّل ترجمات ضعاف السمع.',
  'subs.direct.param.encoding': 'فلتر ترميز الأحرف.',
  'subs.direct.param.source':
    'مزودو الترجمات للاستعلام عنهم (all يستعلم كل المصادر الممكّنة؛ الافتراضي opensubtitles).',
  'subs.direct.param.release': 'فلاتر اسم الإصدار أو المشهد (مفصولة بفواصل).',
  'subs.direct.param.file':
    'فلاتر اسم الملف (الأسماء المستعارة: file، filename، fileName).',
  'subs.direct.param.origin':
    'فلتر أصل المحتوى، مفصول بفواصل (مثل WEB، BLURAY، DVD).',
  'subs.direct.param.key':
    'مفتاح API الخاص بك (مطلوب). احصل على واحد مجاناً في store.wyzie.io/redeem.',
  'subs.direct.param.refresh':
    'تجاوز الذاكرة المؤقتة وجلب نتائج جديدة. استخدمه عندما قد تكون المصادر قد تحدّثت.',
  'subs.direct.important.imdb':
    "عند استخدام معرّف IMDB، تأكد من تضمين الحرفين الأولين ('tt') في بداية المعرّف.",

  'subs.direct.data.h3': 'البيانات المُرجَعة',
  'subs.direct.data.id': 'معرّف ملف الترجمة.',
  'subs.direct.data.url': 'الرابط إلى ملف الترجمة.',
  'subs.direct.data.flagUrl': 'رابط علم اللغة المحلية.',
  'subs.direct.data.format': 'صيغة ملف الترجمة.',
  'subs.direct.data.encoding': 'ترميز الأحرف لملف الترجمة.',
  'subs.direct.data.display': 'لغة الترجمة، بحرف كبير.',
  'subs.direct.data.language': 'رمز ISO 3166-2 للغة.',
  'subs.direct.data.media': 'اسم الوسيط الذي تخص الترجمة له.',
  'subs.direct.data.isHearingImpaired':
    'قيمة منطقية تشير إلى ما إذا كانت الترجمة متاحة لضعاف السمع.',
  'subs.direct.data.source': 'المصدر الذي جُلبت منه الترجمة.',
  'subs.direct.data.release': 'اسم الإصدار الأساسي.',
  'subs.direct.data.releases': 'أسماء إصدارات أخرى متوافقة مع الترجمة.',
  'subs.direct.data.fileName': 'اسم الملف الأصلي عند توفره.',
  'subs.direct.data.downloadCount': 'عدد التنزيلات على منصة المصدر (إن توفّر).',
  'subs.direct.data.origin': 'أصل المحتوى (مثل WEB، BluRay، DVD).',
  'subs.direct.data.matchedRelease':
    'قيمة الإصدار التي تطابقت مع فلترك (إن أُدرج).',
  'subs.direct.data.matchedFilter':
    'الفلتر الذي أدخله المستخدم والذي تطابق (إن أُدرج).',
  'subs.direct.data.ai':
    'true إذا كانت الترجمة مُترجَمة بالذكاء الاصطناعي، وfalse للترجمات العادية المُستخرجة. استخدمها كفلتر على جانب العميل عندما تريد نوعاً واحداً فقط.',

  // Subs Translate Page
  'subs.translate.title': 'ترجمة الترجمات بالذكاء الاصطناعي',
  'subs.translate.important':
    'ترجمة الذكاء الاصطناعي **ميزة Pro**. تكلف كل ترجمة **100 طلب** من رصيد مفتاحك، تُحسب على الاستجابة من الذاكرة المؤقتة أيضاً وعلى الترجمة الجديدة. المفاتيح المجانية لا يمكنها استخدامها.',
  'subs.translate.p1':
    'يمكن لـ Wyzie ترجمة أي ترجمة إلى أكثر من 80 لغة بشكل فوري. تُبث الترجمات عودةً أثناء إنتاج النموذج لها، بحيث يمكن بدء التشغيل في ثانية أو ثانيتين بدلاً من انتظار الملف بأكمله. تُخزَّن النتائج مؤقتاً لمدة 30 يوماً، لذا يحصل الشخص الثاني الذي يطلب الترجمة ذاتها عليها على الفور.',

  'subs.translate.ways.h2': 'طريقتان للاستخدام',
  'subs.translate.way1.h3': '1. اختر لغة من استجابة البحث',
  'subs.translate.way1.p1':
    'تتضمن الآن كل استجابة /search إدخالاً إضافياً لكل لغة مدعومة بـ "ai": true ورابطاً يُشير إلى /translate. فقط تعامل مع صفوف AI كأي صف ترجمة آخر في واجهتك: عندما يضغط المستخدم على أحدها، اجلب الرابط.',
  'subs.translate.way1.filter': 'إذا أردت إخفاء صفوف AI من واجهتك، صفّها:',
  'subs.translate.way2.h3': '2. استدعاء /translate مباشرةً',

  'subs.translate.param.id': 'معرّف TMDB أو IMDB (مطلوب).',
  'subs.translate.param.target':
    'اللغة الهدف باسمها الإنجليزي الكامل (مثل Spanish، Japanese، Brazilian Portuguese) (مطلوب).',
  'subs.translate.param.seasonEpisode':
    'للمسلسلات التلفزيونية. يجب أن يكونا معاً.',
  'subs.translate.param.key':
    'مفتاح API الخاص بك. استخدم tk بدلاً منه إذا حصلت على الرابط من /search.',
  'subs.translate.param.tk':
    'رمز موقّع تُرجعه /search. مكافئ لـ key، لكنه لا يكشف المفتاح الخام.',

  'subs.translate.headers.p':
    'جسم الاستجابة هو ملف SRT مبثوث بصيغة text/plain; charset=utf-8. ترويسات استجابة مفيدة:',
  'subs.translate.header.xcache':
    'HIT-REDIS إذا جُلب من الذاكرة المؤقتة، وMISS إذا وُلِّد من جديد.',
  'subs.translate.header.xsourcelang':
    'لغة الترجمة التي استخدمها المترجم كمدخل.',
  'subs.translate.header.xtargetlang': 'صدى معامل target الخاص بك.',
  'subs.translate.header.xsourceprovider':
    'أي أداة استخراج قدّمت الترجمة المصدر.',

  'subs.translate.how.h2': 'كيف تعمل',
  'subs.translate.how.step1':
    'يبحث Wyzie في المصادر العادية عن ترجمة SRT، ويفضّل الإنجليزية عند توفرها.',
  'subs.translate.how.step2':
    'يُقسَّم SRT إلى مجموعات من 50 قيداً ويُترجَم بالتسلسل. تُخزَّن كل مجموعة بشكل فردي فور اكتمالها.',
  'subs.translate.how.step3':
    'يُبثّ الناتج إليك قيداً بقيد. يمكن للمشغّلات التي تقبل جسم SRT مبثوثاً عرض الأسطر الأولى قبل اكتمال البقية.',
  'subs.translate.how.step4':
    'تُخزَّن الترجمة الكاملة في Redis لمدة 30 يوماً، مفهرسةً بـ id والموسم والحلقة والهدف.',

  'subs.translate.languages.h2': 'اللغات الهدف المدعومة',
  'subs.translate.languages.p':
    'أكثر من 80 لغة تشمل جميع اللغات الأوروبية والآسيوية والأفريقية والشرق أوسطية الرئيسية. مرّر الاسم الإنجليزي (Spanish، وليس es). تُرجَع القائمة أيضاً كصفوف ai: true في أي استجابة /search، وهي المصدر الرسمي للحقيقة.',

  'subs.translate.limitations.h2': 'القيود',
  'subs.translate.limit1':
    'تحتاج ترجمة الذكاء الاصطناعي إلى مصدر SRT. العناوين التي تكون كل ترجماتها المتاحة بصيغة .ass أو .vtt أو غيرها ستُرجع 404 No SRT found.',
  'subs.translate.limit2':
    'تعتمد جودة الترجمة على الترجمة المصدر. يُنتج المصدر ذو التوقيت السيء أو الأخطاء الإملائية ترجمةً سيئة التوقيت أو بها أخطاء.',
  'subs.translate.limit3':
    'قد يرغب بعض المستخدمين في إخفاء صفوف AI كلياً. صفّ على ai === false في عميلك.',
  'subs.translate.limit4':
    'تُحسب الترجمات على استجابات الذاكرة المؤقتة أيضاً. سواء وُلِّدت حديثاً أو جُلبت من الذاكرة المؤقتة لمدة 30 يوماً، يكلف كل طلب /translate 100 طلب.',

  // Subs API Keys Page
  'subs.keys.title': 'مفاتيح API',
  'subs.keys.p1':
    'يتطلب Wyzie Subs مفتاح API لجميع الطلبات. تغطي الفئة المجانية معظم حالات الاستخدام؛ تتعامل الخطط المدفوعة مع الاستخدام الأكثر.',

  'subs.keys.tiers.h2': 'الفئات',
  'subs.keys.tier.free': 'مجاني (يتطلب Gmail)',
  'subs.keys.tier.free.limit': '1,000 طلب / يوم بتوقيت UTC',
  'subs.keys.tier.pro': '5 دولارات دفعة واحدة',
  'subs.keys.tier.pro.limit': '400,000 طلب',
  'subs.keys.tier.topup': 'من 0.0625 دولار / 5 آلاف',
  'subs.keys.tier.topup.limit': 'يُضاف إلى رصيدك المدفوع',
  'subs.keys.tiers.end':
    'خطط Pro والشحن لا تنتهي صلاحيتها. تفضّل الدفع المتكرر؟ اشتراك بقيمة 32 دولاراً/شهر يمنحك 6,000,000 طلب/شهر (بالبطاقة فقط). راجع store.wyzie.io للأسعار الكاملة ولوحة التحكم.',

  'subs.keys.free.h2': 'الحصول على مفتاح مجاني',
  'subs.keys.free.p':
    'زر [store.wyzie.io/redeem](https://store.wyzie.io/redeem):',
  'subs.keys.free.step1': 'حلّ اختبار Cloudflare Turnstile السريع.',
  'subs.keys.free.step2': 'أدخل عنوان Gmail (يُقبل Gmail فقط للفئة المجانية).',
  'subs.keys.free.step3':
    'أدخل الرمز المكوّن من 6 أرقام الذي أرسلناه إليك بالبريد الإلكتروني.',
  'subs.keys.free.step4': 'ستحصل على مفتاح API يبدو مثل wyzie-abc123...',
  'subs.keys.free.gmail':
    'يمكن لكل عنوان Gmail استرداد مفتاح مجاني واحد فقط. هل كان لديك مفتاح مجاني مرتبط بهذا البريد الإلكتروني؟ التحقق مرة أخرى يُعيد فقط مفتاحك الحالي.',

  'subs.keys.pro.h2': 'الترقية إلى Pro',
  'subs.keys.pro.p1':
    'زر [store.wyzie.io](https://store.wyzie.io) وأتمّ الشراء بنفس البريد الإلكتروني الذي استخدمته للمفتاح المجاني. يُرقَّى مفتاحك الحالي wyzie-... في مكانه مع إضافة 400 ألف طلب مدفوع. تفضّل الدفع المتكرر؟ بدلاً من ذلك، يضيف اشتراك بقيمة 32 دولاراً/شهر مخصصاً شهرياً قدره 6,000,000 طلب (بالبطاقة فقط).',
  'subs.keys.pro.p2':
    'إذا أتممت الشراء بعنوان بريد إلكتروني جديد تماماً (دون مفتاح سابق)، يُولَّد مفتاح wyzie-... جديد ويُرسل إليك بالبريد الإلكتروني.',

  'subs.keys.protect.h2': 'احتفظ بمفتاحك بعيداً عن العميل',
  'subs.keys.protect.important':
    '**لا تضمّ مفتاح API أبداً في كود جانب العميل.** تُعدّ JavaScript في المتصفح، وتطبيقات الجوال، وإضافات المتصفح، وتطبيقات سطح المكتب بأسلوب Electron، ومستودعات Git العامة كلها جانب عميل. أي شيء تُشحنه إلى مستخدم نهائي يمكنه فحصه، وقد رأينا حالات حقيقية حيث لصق مستخدمون مفتاحهم في الواجهة الأمامية لموقع بث، ليستخرجه طرف ثالث من حزمة JS ويستنفد رصيد الطلبات في غضون ساعات. الحصة المُستهلكة بهذه الطريقة غير قابلة للاسترداد.',
  'subs.keys.protect.p2': 'طريقتان آمنتان لاستخدام المفتاح من تطبيق عميل:',
  'subs.keys.protect.option1':
    'استخدم [Wyzie Worker](https://github.com/wyziedevs/wyzie-worker): وسيط Cloudflare Worker مجاني يحتفظ بمفتاحك على جانب الخادم. وجّه عميلك إلى رابط Worker بدلاً من sub.wyzie.io.',
  'subs.keys.protect.option2':
    'شغّل وسيطك الخاص: أي نقطة نهاية في الخادم تُضيف المفتاح قبل إعادة التوجيه إلى sub.wyzie.io تعمل. راجع صفحة المقدمة للاطلاع على مثال من 10 أسطر.',
  'subs.keys.protect.devtools':
    'إذا ظهر المفتاح في علامة تبويب الشبكة في DevTools، فهو مكشوف. اعتبره عاماً وقم بتدويره عبر مراسلة الدعم.',

  'subs.keys.using.h2': 'استخدام مفتاحك',
  'subs.keys.using.p': 'أضف &key=YOUR_KEY إلى كل طلب API:',
  'subs.keys.using.npm.h3': 'حزمة NPM',

  'subs.keys.limit.h2': 'الوصول إلى الحد',
  'subs.keys.limit.free':
    '**الفئة المجانية** مُستنفَدة -> تُرجع API الخطأ 429 مع ترويسات X-RateLimit-Reset وRetry-After. يُعاد ضبط العداد اليومي عند منتصف الليل بتوقيت UTC.',
  'subs.keys.limit.paid':
    '**الرصيد المدفوع** مُستنفَد -> تُرجع API الخطأ 402. اشحن في [store.wyzie.io/topup](https://store.wyzie.io/topup) أو فعّل **الشحن التلقائي** في لوحة التحكم للشحن تلقائياً عندما يعبر رصيدك عتبةً تحددها.',

  'subs.keys.faq.h2': 'الأسئلة الشائعة',
  'subs.keys.faq.q1': 'فقدت مفتاحي. هل يمكنني الحصول على مفتاح جديد؟',
  'subs.keys.faq.a1':
    'زر [store.wyzie.io](https://store.wyzie.io) واستخدم تدفق "نسيت المفتاح" ببريدك الإلكتروني المسجّل؛ سنُعيد إرسال مفتاحك الحالي.',
  'subs.keys.faq.q2': 'هل يمكنني استخدام مفتاح واحد في مشاريع متعددة؟',
  'subs.keys.faq.a2': 'نعم. مفتاحك يعمل في أي مكان تستدعي فيه API.',
  'subs.keys.faq.q3': 'هل سينتهي صلاحية مفتاحي؟',
  'subs.keys.faq.a3':
    'لا. المفاتيح المجانية والمدفوعة كلاهما لا تنتهي صلاحيتهما. المفاتيح المجانية محدودة يومياً؛ الرصيد المدفوع يستمر حتى تستخدمه.',
  'subs.keys.faq.q4': 'هل الشحن التلقائي آمن؟',
  'subs.keys.faq.a4':
    'تحدد حداً للإنفاق الشهري. لن نتجاوزه أبداً، وزر تعطيل بنقرة واحدة موجود في كل بريد إلكتروني للتأكيد وفي لوحة التحكم.',

  // Proxy Intro Page
  'proxy.intro.title': 'مقدمة إلى Wyzie Proxy',
  'proxy.intro.note':
    'النسخة الإنتاجية من Wyzie Subs لم تعد تستخدم هذا الوسيط وتعتمد بدلاً منه على [i6.shark](https://github.com/wyziedevs/i6.shark).',
  'proxy.intro.p1':
    'Wyzie Proxy هي واجهة API وسيط قوية تتيح لك تقديم طلبات إلى أي موقع دون قيود CORS أو غيرها. بما أن Wyzie Proxy مبني بـ Nitro، يمكن استضافته على أي من المنصات التالية: AWS Amplify، Azure، Cloudflare، Netlify، Stormkit، Vercel، Zeabur.',
  'proxy.intro.btn.hosting': 'الاستضافة',
  'proxy.intro.btn.check': 'اطلع عليه',

  // Proxy Hosting Page
  'proxy.hosting.title': 'استضافة Wyzie Proxy',
  'proxy.hosting.p1':
    'بناء Wyzie Proxy أسهل من التنفس، بفضل Nitro. أولاً، انسخ مستودع Wyzie Proxy باستخدام:',
  'proxy.hosting.p2': 'ثم قم بتثبيت جميع الحزم اللازمة بـ:',
  'proxy.hosting.p3': 'بعد تثبيت جميع الحزم، يمكنك بناء الوسيط:',
  'proxy.hosting.p4':
    'سيُولَّد الناتج في مجلد /.output/server. إذا كنت تنشر على Cloudflare Workers، انسخ ملف index.mjs والصقه في الـ Worker؛ وإلا يمكنك نشر الملفات بالطريقة المعتادة.',

  // i6.shark Intro Page
  'i6shark.intro.title': 'مقدمة إلى i6.shark',
  'i6shark.intro.p1':
    'i6.shark هو خادم وسيط IPv6 يتيح لك تقديم طلبات HTTP من عناوين IPv6 مُولَّدة عشوائياً في شبكة /48 subnet. هذا هو الوسيط الذي يشغّل Wyzie Subs حالياً في الإنتاج.',
  'i6shark.intro.p2':
    'تحتوي شبكة /48 subnet على 1,208,925,819,614,629,174,706,176 (1.2 × 10^24) عنوان IPv6، مما يجعل حجبها عبر حظر IP التقليدي شبه مستحيل. استخدام شبكة فرعية واحدة يعني أن من يريد حجبك بالفعل يمكنه حجب عنوان ASN الخاص بك، فكن حذراً في هذا الشأن.',
  'i6shark.intro.btn.hosting': 'الاستضافة',
  'i6shark.intro.btn.github': 'GitHub',

  'i6shark.intro.features.h2': 'المميزات',
  'i6shark.intro.feature1':
    '**توليد IPv6 عشوائي**: ينشئ عناوين IPv6 عشوائية من بادئة /48 الخاصة بك لكل طلب',
  'i6shark.intro.feature2':
    '**دعم كامل لأساليب HTTP**: GET، POST، PUT، DELETE، وجميع أساليب HTTP الأخرى',
  'i6shark.intro.feature3':
    '**مصادقة HMAC-SHA256**: مصادقة آمنة لمفاتيح API باستخدام رموز مبنية على وكيل المستخدم',
  'i6shark.intro.feature4':
    '**إدارة ذكية لمجموعة IP**: تدوير تلقائي للـ IP مع حجم مجموعة قابل للتهيئة. إدارة ذكية لدورة حياة IP. احتساب الطلبات لكل IP. تنظيف عناوين IP غير المستخدمة بناءً على حدّ الخمول.',
  'i6shark.intro.feature5':
    '**معالجة متقدمة للطلبات**: إعادة توجيه الترويسات المخصصة. إزالة ترويسات Cloudflare وشبكات توصيل المحتوى. دعم صيغ متعددة لمعاملات URL. احتياطي اختياري إلى IP النظام الافتراضي.',
  'i6shark.intro.feature6':
    '**قائمة بيضاء للمضيفين**: قائمة بيضاء للنطاقات مدمجة للأمان (قابلة للتهيئة في الكود)',
  'i6shark.intro.feature7':
    '**صيانة تلقائية**: مسح دوري لمجموعة IP. التحقق من صحة الشبكة الفرعية وتنظيفها. تجميع الاتصالات وتحسين الاستمرارية.',
  'i6shark.intro.feature8':
    '**أداء عالٍ**: معالجة متزامنة للطلبات مع تجميع المخازن المؤقتة. مهل وحدود اتصال قابلة للتهيئة. إدارة فعّالة لعناوين IPv6.',
  'i6shark.intro.feature9':
    '**وضع تصحيح الأخطاء**: تسجيل مفصّل للاستكشاف والمراقبة',

  'i6shark.intro.requirements.h2': 'المتطلبات',
  'i6shark.intro.req1': 'Go 1.20 أو أحدث',
  'i6shark.intro.req2': 'نظام Linux/Unix مع دعم IPv6 (يُفضَّل Ubuntu)',
  'i6shark.intro.req3': 'صلاحيات الجذر (لربط المنفذ 80 والتعامل مع IPv6)',
  'i6shark.intro.req4': 'تخصيص شبكة فرعية IPv6 /48 من مزود الاستضافة',

  'i6shark.intro.providers.h2': 'مزودو الاستضافة',
  'i6shark.intro.providers.p1':
    'المزودون التاليون معروف عنهم تقديم شبكات /48 IPv6 الفرعية:',

  // i6.shark Hosting Page
  'i6shark.hosting.title': 'استضافة i6.shark',
  'i6shark.hosting.p1':
    'يتطلب إعداد i6.shark خادم VPS مع شبكة /48 IPv6 الفرعية. بعد الإعداد، يعمل باستقلالية مع الحد الأدنى من الصيانة.',

  'i6shark.hosting.steps.h2': 'الخطوات',
  'i6shark.hosting.step1': 'استنسخ المستودع إلى /opt/i6.shark:',
  'i6shark.hosting.step2': 'اضبط الثوابت في src/consts.go:',
  'i6shark.hosting.step2.note':
    'حدّث SharedSecret وIPv6Prefix وInterface لتتناسب مع خادمك. بقية ثوابت الضبط الدقيق لها قيم افتراضية معقولة ولا تحتاج عادةً إلى تغيير.',
  'i6shark.hosting.step3': 'ابنِ التطبيق:',
  'i6shark.hosting.step4': 'أنشئ خدمة systemd:',
  'i6shark.hosting.step5': 'فعّل الخدمة وابدأها:',
  'i6shark.hosting.step5.check': 'تحقق من الحالة:',
  'i6shark.hosting.post':
    'سيعمل الآن خادم الوسيط تلقائياً عند التشغيل ويُعيد تشغيل نفسه في حال توقّفه.',

  'i6shark.hosting.daily.h2': 'إعادة التشغيل اليومية (اختياري)',
  'i6shark.hosting.daily.p':
    'أضف مهمة cron لإعادة تشغيل الخادم يومياً في وقت عشوائي:',

  'i6shark.hosting.auth.h2': 'مصادقة API',
  'i6shark.hosting.auth.p':
    'تُولَّد رموز API باستخدام HMAC-SHA256 مع مفتاح سري مشترك. مدخل توليد المفتاح هو ترويسة وكيل المستخدم. راجع دالة validateAPIToken في الكود المصدري لتفاصيل التنفيذ.',

  // Plugins
  'plugins.common.required': 'مطلوب',

  'plugins.index.intro':
    'تتكامل Wyzie Subs مباشرةً مع تطبيقات الوسائط التي تستخدمها بالفعل. كل إضافة تتواصل مع نفس نقطة النهاية `https://sub.wyzie.io/search` وتحتاج إلى **مفتاح Wyzie API** مجاني. احصل على واحد من [store.wyzie.io](https://store.wyzie.io/#plans).',
  'plugins.index.tbl.stremio.for':
    'المشاهدة في Stremio على سطح المكتب أو الهاتف أو التلفزيون',
  'plugins.index.tbl.stremio.install':
    'إضافة مستضافة: الصق مفتاحك، ثم انقر تثبيت',
  'plugins.index.tbl.bazarr.for': 'مكتبات Plex وJellyfin وEmby وSonarr وRadarr',
  'plugins.index.tbl.bazarr.install':
    'موفّر جاهز للاستخدام في نسخة Bazarr الخاصة بك',
  'plugins.index.tbl.kodi.for': 'Kodi 19+ وLibreELEC وCoreELEC',
  'plugins.index.tbl.kodi.install': 'التثبيت من ملف مضغوط أو من مستودع Wyzie',
  'plugins.index.use.stremio':
    'استخدم **Stremio** إذا كنت تشاهد داخل تطبيق Stremio.',
  'plugins.index.use.bazarr':
    'استخدم **Bazarr** إذا كنت تشغّل Plex أو Jellyfin أو Emby. يقوم Bazarr بتنزيل ملفات الترجمة إلى القرص ويلتقطها خادم الوسائط الخاص بك تلقائياً. هذا أيضاً المسار الموصى به لـ Plex وJellyfin؛ ولا توجد إضافة أصلية منفصلة.',
  'plugins.index.use.kodi':
    'استخدم **Kodi** للحصول على خدمة ترجمة أصلية لـ Kodi على Android TV أو Raspberry Pi أو حاسوب المسرح المنزلي.',
  'plugins.index.shared.sources':
    '**المصادر:** OpenSubtitles وSubDL وPodnapisi، مجمَّعة عبر Wyzie.',
  'plugins.index.shared.matching':
    '**المطابقة:** تعتمد Wyzie على معرّفات IMDB وTMDB بالإضافة إلى الموسم والحلقة، لذا تكون المطابقات دقيقة لكل من الأفلام والمسلسلات.',
  'plugins.index.shared.quota':
    '**الحصة:** عندما ينفد رصيد مفتاحك، تعرض الإضافة رسالة ودّية مع رابط إلى [store.wyzie.io](https://store.wyzie.io) بدلاً من الفشل بصمت. أعِد الشحن أو اشترك وستعود للعمل.',
  'plugins.index.shared.languages':
    '**اللغات:** أكثر من 100، قابلة للاختيار لكل إضافة.',
  'plugins.index.outro': 'اختر منصّتك أعلاه للبدء.',

  'plugins.stremio.intro':
    'إضافة ترجمة بنقرة واحدة لـ [Stremio](https://www.stremio.com/). تجمع OpenSubtitles وSubDL وPodnapisi عبر Wyzie وتعمل لكل من الأفلام والمسلسلات، على كل منصة يعمل عليها Stremio.',
  'plugins.stremio.before':
    'تحتاج إلى مفتاح Wyzie API مجاني. احصل على واحد من [store.wyzie.io/redeem](https://store.wyzie.io/redeem)، أو اشترِ مفتاح Pro أو اشترك من [store.wyzie.io](https://store.wyzie.io/#plans).',
  'plugins.stremio.install.1':
    'افتح [stremio.wyzie.io/configure](https://stremio.wyzie.io/configure).',
  'plugins.stremio.install.2': 'الصق **مفتاح API** الخاص بك.',
  'plugins.stremio.install.3':
    'اختياري: أدخل **اللغات** المفضّلة لديك كرموز ISO 639-1، مفصولة بفواصل (على سبيل المثال `en,es,fr`). اتركه فارغاً لجميع اللغات.',
  'plugins.stremio.install.4':
    'اختياري: فعّل ترجمات **ضعاف السمع** إذا كنت تفضّلها.',
  'plugins.stremio.install.5':
    'انقر **تثبيت**. سيفتح Stremio ويطلب منك التأكيد؛ وافِق، وبذلك تكون قد انتهيت.',
  'plugins.stremio.install.after':
    'يُرمَّز مفتاحك وتفضيلاتك داخل الإضافة، لذا لا يوجد شيء آخر لإعداده. افتح أي فيلم أو حلقة واختر ترجمة من القائمة.',
  'plugins.stremio.cfg.key.f': 'مفتاح API',
  'plugins.stremio.cfg.key.d': 'مفتاح Wyzie الخاص بك. مطلوب.',
  'plugins.stremio.cfg.langs.f': 'اللغات',
  'plugins.stremio.cfg.langs.d':
    'رموز ISO 639-1، مفصولة بفواصل. الفراغ يعني جميع اللغات.',
  'plugins.stremio.cfg.hi.f': 'ضعاف السمع',
  'plugins.stremio.cfg.hi.d': 'تفضيل ترجمات ضعاف السمع عند توفّرها.',
  'plugins.stremio.cfg.note':
    'لتغيير أيٍّ من هذه لاحقاً، أعِد فتح [stremio.wyzie.io/configure](https://stremio.wyzie.io/configure)، وعدّل، ثم أعِد التثبيت.',
  'plugins.stremio.local':
    'ثم افتح `http://127.0.0.1:7000/configure`، والصق مفتاحك، وثبّت في Stremio.',
  'plugins.stremio.quota':
    'إذا بلغ مفتاحك حدّه، تعرض الإضافة مدخل ترجمة واحداً يرتبط بـ [store.wyzie.io](https://store.wyzie.io) لتتمكن من إعادة الشحن أو الاشتراك. وبمجرد فعل ذلك، تعود الترجمات فوراً.',
  'plugins.stremio.ts.none':
    '**لا تظهر أي ترجمات.** تأكد من أن العنوان يحمل معرّف IMDB في Stremio (معظم عناصر الكتالوج تحمله) وأن اللغات التي اخترتها لديها فعلاً ترجمات لذلك العنوان. جرّب إزالة مرشّح اللغة لرؤية كل شيء.',
  'plugins.stremio.ts.key':
    '**مفتاح غير صالح، أو لا يتم تحميل أي شيء.** أعِد فتح صفحة الإعداد وأعِد لصق مفتاحك؛ فالمسافة الزائدة تُفسده. تأكد من أن المفتاح يعمل من [store.wyzie.io/dashboard](https://store.wyzie.io/dashboard).',
  'plugins.stremio.ts.episode':
    '**حلقة مسلسل لا تتطابق.** تطابق Wyzie على أساس الموسم والحلقة؛ تأكد من أن Stremio يشغّل مدخل الحلقة الصحيح، وليس صفحة مسلسل عامة.',

  'plugins.bazarr.intro':
    'يدير [Bazarr](https://www.bazarr.media/) الترجمات لـ **Plex وJellyfin وEmby وSonarr وRadarr** في مكان واحد. إضافة Wyzie كموفّر تمنح كل تلك الخوادم الوصول إلى OpenSubtitles وSubDL وPodnapisi عبر مفتاح واحد.',
  'plugins.bazarr.note':
    'هذه هي الطريقة الموصى بها لاستخدام Wyzie مع Plex وJellyfin. يقوم Bazarr بتنزيل ملفات الترجمة بجوار وسائطك، ويلتقطها خادمك تلقائياً، لذا لا حاجة إلى إضافة أصلية منفصلة.',
  'plugins.bazarr.before':
    'احصل على مفتاح Wyzie API مجاني من [store.wyzie.io/redeem](https://store.wyzie.io/redeem)، وتأكد من امتلاكك صلاحية الوصول إلى ملفات تثبيت Bazarr (المسار النموذجي في Docker: `/opt/bazarr/bazarr/`).',
  'plugins.bazarr.install.1':
    'انسخ `wyzie.py` إلى `bazarr/subliminal_patch/providers/wyzie.py`.',
  'plugins.bazarr.install.2':
    'عدّل `bazarr/subliminal_patch/extensions.py` وأضف `wyzie` إلى **كلٍّ** من `provider_registry` و`provider_manager`.',
  'plugins.bazarr.install.3':
    'عدّل `bazarr/list_subtitles.py` (أو `bazarr/config.py`، حسب إصدارك) لإظهار إعدادات `api_key` و`prefer_hi` و`sources`. انسخ النمط من موفّر موجود مثل `opensubtitlescom`.',
  'plugins.bazarr.install.4': 'أعِد تشغيل Bazarr.',
  'plugins.bazarr.install.5':
    'انتقل إلى **الإعدادات، الموفّرون، Wyzie**، والصق مفتاح API الخاص بك، ثم احفظ.',
  'plugins.bazarr.install.after':
    'هناك خطة لتقديم طلب سحب رسمي لدمج هذا الموفّر في Bazarr رسمياً. حتى ذلك الحين، يبقى ملفاً جاهزاً تضيفه إلى نسختك الخاصة.',
  'plugins.bazarr.cfg.key': 'مفتاح Wyzie الخاص بك. مطلوب.',
  'plugins.bazarr.cfg.hi': 'تفضيل ترجمات ضعاف السمع.',
  'plugins.bazarr.cfg.sources':
    'قائمة موفّرين مفصولة بفواصل للاستعلام منها، أو `all`.',
  'plugins.bazarr.quota.402':
    '**402 أو 429** (نفاد الرصيد أو بلوغ الحد اليومي): يسجّل Bazarr ملاحظة مع رابط إلى [store.wyzie.io](https://store.wyzie.io) ولا يعيد أي نتائج، فيتراجع بسلاسة إلى موفّريك الآخرين. لا شيء ينهار.',
  'plugins.bazarr.quota.401':
    '**401** (مفتاح خاطئ): يُظهر Bazarr خطأ مصادقة لتعرف أن عليك إعادة إدخال المفتاح.',
  'plugins.bazarr.ts.missing':
    '**لا تظهر Wyzie في قائمة الموفّرين.** أعِد فحص خطوة التثبيت التي تعدّل `extensions.py`؛ يجب أن يكون المدخل في كلٍّ من `provider_registry` و`provider_manager`، ثم أعِد تشغيل Bazarr.',
  'plugins.bazarr.ts.none':
    '**لم يتم العثور على ترجمات.** تأكد من أن العنصر يحمل معرّف IMDB في Bazarr وأن اللغات التي فعّلتها لديها ترجمات له. لا تُضيّق `sources` إلا إذا كنت تقصد ذلك.',
  'plugins.bazarr.ts.settings':
    '**حقول الإعدادات مفقودة.** لم تُطبَّق خطوة الإعدادات لإصدار Bazarr لديك؛ قارِن مع كتلة إعدادات موفّر يعمل ثم أعِد التشغيل.',

  'plugins.kodi.intro':
    'خدمة ترجمة لـ **Kodi 19+ (Matrix وما بعده)** وLibreELEC وCoreELEC. تستخدم نقطة الامتداد القياسية `xbmc.subtitle.module` في Kodi، لذا تظهر أينما يبحث Kodi عن ترجمات.',
  'plugins.kodi.before':
    'احصل على مفتاح Wyzie API مجاني من [store.wyzie.io/redeem](https://store.wyzie.io/redeem).',
  'plugins.kodi.repo.intro':
    'تثبيت المستودع مرة واحدة يتيح لـ Kodi **التحديث التلقائي** للإضافة نيابةً عنك.',
  'plugins.kodi.repo.1':
    'نزّل مثبّت المستودع: [**repository.wyzie.zip**](https://kodi.wyzie.io/repository.wyzie.zip).',
  'plugins.kodi.repo.2':
    'في Kodi: **الإعدادات، الإضافات، التثبيت من ملف مضغوط**، ثم اختر `repository.wyzie.zip`. إذا منعه Kodi، فعّل **الإعدادات، النظام، الإضافات، مصادر غير معروفة** أولاً.',
  'plugins.kodi.repo.3':
    '**الإعدادات، الإضافات، التثبيت من المستودع، Wyzie Repository، خدمات الترجمة، Wyzie Subs، تثبيت.**',
  'plugins.kodi.repo.4':
    '**الإعدادات، المشغّل، اللغة، خدمة الترجمة الافتراضية**، ثم اختر **Wyzie Subs**.',
  'plugins.kodi.repo.5':
    'افتح إعدادات إضافة Wyzie Subs والصق **مفتاح API** الخاص بك.',
  'plugins.kodi.zip.intro':
    'استخدم هذا إذا كنت تفضّل عدم إضافة المستودع. ملاحظة: التثبيت من ملف مضغوط **لا** يتم تحديثه تلقائياً.',
  'plugins.kodi.zip.1':
    'احصل على ملف الإضافة المضغوط: `service.subtitles.wyzie-<version>.zip`. إذا كان لديك الكود المصدري، اضغط مجلد `kodi/` بحيث يحتوي الملف المضغوط على `addon.xml` في جذره.',
  'plugins.kodi.zip.2':
    'في Kodi: **الإعدادات، الإضافات، التثبيت من ملف مضغوط**، ثم اختر الملف المضغوط. إذا منعه Kodi، فعّل **الإعدادات، النظام، الإضافات، مصادر غير معروفة** أولاً.',
  'plugins.kodi.zip.3':
    '**الإعدادات، المشغّل، اللغة، خدمة الترجمة الافتراضية**، ثم اختر **Wyzie Subs**.',
  'plugins.kodi.zip.4':
    'افتح إعدادات إضافة Wyzie Subs والصق **مفتاح API** الخاص بك.',
  'plugins.kodi.cfg.key': 'مفتاح Wyzie الخاص بك. مطلوب.',
  'plugins.kodi.cfg.hi': 'تفضيل ترجمات ضعاف السمع.',
  'plugins.kodi.cfg.langs':
    'تُؤخذ اللغات من لغات الترجمة المختارة في Kodi وتُربط بـ ISO 639-1 تلقائياً.',
  'plugins.kodi.matching.1':
    'أثناء تشغيل شيء ما، يكشف Kodi عن رقم IMDB والموسم والحلقة. تقرأ الإضافة تلك القيم، وتستعلم من `sub.wyzie.io/search`، وتعيد الترجمات المطابقة. ولأن Wyzie تعتمد على المعرّفات (IMDB وTMDB)، تكون المطابقات دقيقة لكل من الأفلام والمسلسلات.',
  'plugins.kodi.matching.2':
    '**البحث اليدوي** يعرض حالياً إشعاراً ولا يفعل شيئاً، لأن Wyzie تطابق على المعرّفات وليس العناوين. وهناك خطة لإضافة بحث من العنوان إلى المعرّف في خارطة الطريق. في الوقت الحالي، دع Kodi يبحث تلقائياً أثناء التشغيل.',
  'plugins.kodi.quota':
    'تُظهر استجابة 402 أو 429 إشعار Kodi منبثقاً يوجّهك إلى [store.wyzie.io](https://store.wyzie.io) لإعادة الشحن أو الاشتراك.',
  'plugins.kodi.ts.notoffered':
    '**لا تُعرض Wyzie أثناء التشغيل.** تأكد من تعيينها كـ **خدمة الترجمة الافتراضية** وأن العنصر قيد التشغيل يحمل معرّف IMDB.',
  'plugins.kodi.ts.key':
    '**مفتاح غير صالح.** أعِد فتح إعدادات الإضافة وأعِد لصق مفتاحك.',
  'plugins.kodi.ts.episode':
    '**لا شيء لحلقة ما.** تأكد من أن Kodi يملك بيانات وصفية صحيحة للموسم والحلقة للملف؛ عناصر المكتبة المُجمَّعة بالكاشط تعمل بشكل أفضل.',
};

export default messages;
