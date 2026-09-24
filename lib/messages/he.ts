const messages: Record<string, string> = {
  // Navigation
  'nav.language': 'שפה',

  // Index / Landing Page
  'index.subtitle': 'Wyzie היא ערכת כלים לאיסוף כתוביות וכל מה שביניהן.',
  'index.cta.start': 'התחל עכשיו',
  'index.cta.store': 'בדוק את זה',

  'index.card.keys.title': 'מפתחות API חינמיים',
  'index.card.keys.body':
    'קבל מפתח API חינמי בכתובת store.wyzie.io/redeem עם אימות מייל מהיר (Gmail, Outlook, Yahoo, iCloud, Proton וספקים מרכזיים אחרים). 1,000 בקשות ביום ללא עלות. תוכניות בתשלום זמינות לשימוש אינטנסיבי יותר.',

  'index.card.ai.title': 'תרגום בינה מלאכותית',
  'index.card.ai.body':
    'תרגם כל כתובית ליותר מ-80 שפות לפי דרישה. קובץ ה-SRT מוזרם בחזרה לפי הסדר ככל שהאצוות מסתיימות, כך שהשורות הראשונות מגיעות במהירות. זמין במפתחות Pro.',

  'index.card.reliable.title': 'אמין',
  'index.card.reliable.body':
    'אנו גאים בזמינות הרציפה שלנו ובעדכונים (כמעט) יומיים, כמו גם במטמון מהיר.',

  'index.card.simple.title': 'פשטות מחודשת',
  'index.card.simple.body':
    'קל ליישום, קל לשימוש. Wyzie תוכנן להיות פשוט ככל האפשר.',

  // Donate Page
  'donate.title': 'אנא תרמו',
  'donate.body':
    'שלום משתמש, Wyzie מסתמך כעת על תרומות (שאני בקושי מקבל) ואני בן 16 עם עבודה חלקית, ולפעמים החשבון שלי להפעלת ה-API הציבורי עולה על 100$ בחודש. אני לא יכול להמשיך לתמוך בזה ללא עזרה חיצונית, אני מתנצל באמת, אבל הפרויקט הזה גדל מעבר למה שיכולתי לתמוך בו מכיסי.',
  'donate.cta': 'תמוך ב-Wyzie',

  // Subs Intro Page
  'subs.intro.title': 'מבוא ל-Wyzie Subs',
  'subs.intro.p1':
    'Wyzie Subs הוא API לאיסוף כתוביות עם רמה חינמית. ישנן שתי דרכים לשלוח בקשות ל-API: באמצעות חבילת ה-NPM שלנו או ישירות מה-Wyzie API עצמו. אני ממליץ להשתמש בחבילה שלנו, אך חלק עשויים למצוא את הטיפוסים מסורבלים. על מנת להשתמש ב-API, עליך לקבל את ההחלטה הזו תחילה.',
  'subs.intro.important.apikey':
    'נדרש מפתח API לכל הבקשות. קבל מפתח חינמי בכתובת [store.wyzie.io/redeem](https://store.wyzie.io/redeem) (אימות מייל, 1,000 בקשות ביום). לשימוש אינטנסיבי יותר, זמינות [תוכניות Pro ותוספות](https://store.wyzie.io). ראה את דף מפתחות API לפרטים.',
  'subs.intro.note.npm':
    'אנו ממליצים בחום על חבילת ה-NPM אם אתה מכיר TypeScript או JavaScript',
  'subs.intro.btn.npm': 'חבילת NPM',
  'subs.intro.btn.direct': 'שליפה ישירה',

  'subs.intro.protect.h2': 'הגנה על מפתח ה-API שלך',
  'subs.intro.protect.important':
    '**אירוע אמיתי:** ראינו מפתחים שהדביקו את מפתחם ישירות ב-JavaScript הצד-לקוח של אתר סטרימינג. תוך שעות, גורם לא קשור חילץ אותו מחבילת ה-JS והשתמש בו עד שמגבלת היום היומית או יתרת התשלום הוצתה. מכסה שאבדה בדרך זו אינה ניתנת להחזר ונחשבת כאחריות בעל המפתח לפי התנאים שלנו.',
  'subs.intro.protect.p1':
    'מפתח ה-API שלך צריך להישמר פרטי ו**לעולם** לא להופיע ב:',
  'subs.intro.protect.item1': 'JavaScript בדפדפן (כל דבר שמוגש לתג סקריפט)',
  'subs.intro.protect.item2':
    'קבצים בינאריים של אפליקציות מובייל (Android/iOS, כולל מוצפנים)',
  'subs.intro.protect.item3': 'תוספים לדפדפן',
  'subs.intro.protect.item4':
    'אפליקציות Electron / שולחן עבודה המופצות למשתמשי קצה',
  'subs.intro.protect.item5':
    'מאגרי Git ציבוריים, gists, אתרי הדבקה, או צילומי מסך',
  'subs.intro.protect.p2':
    'אם המפתח מגיע למכונה של משתמש קצה, התייחס אליו כציבורי. ישנן שתי דרכים בטוחות:',
  'subs.intro.protect.opt1.h3': 'אפשרות 1: השתמש ב-Wyzie Worker',
  'subs.intro.protect.opt1.p1':
    'Wyzie Worker הוא פרוקסי Cloudflare Worker קל שמזריק את מפתח ה-API שלך בצד השרת. פרוס אותו ל-Cloudflare Workers והגדר שני סודות: `NITRO_API_TOKEN` (מפתח ה-API שלך ב-Wyzie) ו-`NITRO_WORKER_KEY` (סוד שאתה בוחר). כל בקשה ל-Worker חייבת לשלוח `Authorization: Bearer <NITRO_WORKER_KEY>`; בלעדיו ה-Worker עונה 401, ואם `NITRO_WORKER_KEY` אינו מוגדר הוא דוחה כל בקשה עם 503. גם מפתח ה-Worker חייב להישאר בצד השרת, לכן קרא ל-Worker מה-backend שלך, ולעולם לא מקוד בדפדפן או באפליקציה. ה-Worker מעביר כל בקשה ל-sub.wyzie.io עם מפתח ה-API שלך מצורף.',
  'subs.intro.protect.opt2.h3': 'אפשרות 2: בנה פרוקסי משלך',
  'subs.intro.protect.opt2.p1':
    'אם אינך רוצה להשתמש ב-Wyzie Worker, תוכל לבנות פרוקסי פשוט בצד השרת בכל framework. הרעיון זהה: הצד השרתי שלך מקבל בקשות מהלקוח שלך, מוסיף את מפתח ה-API, ומעביר אותן ל-sub.wyzie.io.',

  // Subs Sources Page
  'subs.sources.title': 'מקורות Wyzie Subs',
  'subs.sources.p1':
    'Wyzie Subs מצבר כתוביות ממספר ספקים. זמינות המקורות עשויה להשתנות בהתאם לסטטוס הספק או אם מקור מושבת. אני תמיד מחפש מקורות חדשים - צרו קשר להצעת מקור.',

  'subs.sources.using.h2': 'שימוש במקורות',
  'subs.sources.using.bullet1':
    'השתמש ב-source=all לשאילתת כל המקורות המופעלים בו-זמנית',
  'subs.sources.using.bullet2': 'מקור ברירת המחדל הוא charlie אם לא צוין',
  'subs.sources.using.bullet3': 'ניתן לציין מספר מקורות כרשימה מופרדת בפסיקים',

  'subs.sources.api.h2': 'נקודת קצה של API',
  'subs.sources.api.p1':
    'ניתן לשלוף תוכנתית את רשימת המקורות המופעלים כעת ורמת התוכנית שלהם:',
  'subs.sources.api.free': 'מקורות שכל מפתח יכול לשאול, כולל מפתחות חינמיים.',
  'subs.sources.api.paid': 'מקורות הדורשים מפתח Pro.',
  'subs.sources.api.allFree':
    'כאשר true, כל מקור מופעל זמין לכל המפתחות ו-paid ריק.',

  'subs.sources.scope.h3': 'צמצום למפתח ספציפי',
  'subs.sources.scope.p1':
    'העבר את מפתח ה-API שלך כדי לקבל את המקורות שהמפתח הזה יכול בפועל להשתמש בהם:',
  'subs.sources.scope.p2':
    'פעולה זו מוסיפה שדות ספציפיים למפתח מבלי לצרוך בקשה מהמכסה שלך:',
  'subs.sources.scope.available': 'מקורות שמפתח זה יכול לשאול כעת.',
  'subs.sources.scope.restricted':
    'מקורות מופעלים שמפתח זה אינו יכול לשאול (שדרג ל-Pro כדי לפתוח אותם).',
  'subs.sources.scope.keyType': 'חינמי או בתשלום.',
  'subs.sources.scope.keyValid':
    'הוא false כאשר המפתח פגום או לא נמצא, ו-null כאשר לא ניתן היה לאמת את המפתח (במקרה זה available ו-restricted מושמטים).',

  'subs.sources.details.h2': 'פרטי מקורות',

  'subs.sources.opensubtitles.desc':
    'מסד הנתונים הגדול ביותר לכתוביות ברשת. תומך בסרטים ותוכניות טלוויזיה במגוון רחב של שפות. משתמש ב-OpenSubtitles REST API הרשמי.',
  'subs.sources.opensubtitles.content': 'סרטים ותוכניות טלוויזיה',
  'subs.sources.opensubtitles.languages': 'תמיכה רב-לשונית נרחבת',
  'subs.sources.opensubtitles.formats': 'SRT, ASS, SSA, VTT, SUB ועוד',

  'subs.sources.subdl.desc':
    'אתר כתוביות מונע על ידי הקהילה עם מבחר רחב של סרטים ותוכניות טלוויזיה.',
  'subs.sources.subdl.content': 'סרטים ותוכניות טלוויזיה',
  'subs.sources.subdl.languages': 'תמיכה רב-לשונית נרחבת',
  'subs.sources.subdl.formats': 'SRT, ASS, SSA, VTT, SUB ועוד',

  'subs.sources.subf2m.desc':
    'מאגר כתוביות גדול עם כיסוי שפות נרחב לסרטים ותוכניות טלוויזיה.',
  'subs.sources.subf2m.content': 'סרטים ותוכניות טלוויזיה',
  'subs.sources.subf2m.languages': 'תמיכה רב-לשונית נרחבת',
  'subs.sources.subf2m.formats': 'SRT, ASS, SSA, VTT, SUB ועוד',

  'subs.sources.podnapisi.desc':
    'אחד ממסדי הנתונים הוותיקים ביותר לכתוביות. אוסף מאורגן היטב המכסה סרטים ותוכניות טלוויזיה.',
  'subs.sources.podnapisi.content': 'סרטים ותוכניות טלוויזיה',
  'subs.sources.podnapisi.languages': 'תמיכה רב-לשונית נרחבת',
  'subs.sources.podnapisi.formats': 'SRT, ASS, SSA, VTT, SUB ועוד',

  'subs.sources.animetosho.desc':
    'מאסף קבצי כתוביות אנימה ישירות משחרורי טורנט המאונדקסים ב-AnimeTosho.',
  'subs.sources.animetosho.content': 'אנימה (תוכניות טלוויזיה)',
  'subs.sources.animetosho.languages': 'יפנית, אנגלית ואחרות בהתאם לשחרור',
  'subs.sources.animetosho.formats': 'ASS, SRT, SSA ואחרים',
  'subs.sources.animetosho.note': 'AnimeTosho מתוכנן להיסגר במאי 2026.',

  'subs.sources.gestdown.desc':
    'מספק כתוביות לתוכניות טלוויזיה דרך Gestdown API עם תמיכה רחבה בשפות.',
  'subs.sources.gestdown.content': 'תוכניות טלוויזיה בלבד',
  'subs.sources.gestdown.languages': 'תמיכה רב-לשונית נרחבת',
  'subs.sources.gestdown.formats': 'SRT, ASS ועוד',

  'subs.sources.jimaku.desc':
    'מאסף מ-jimaku.cc, מאגר כתוביות אנימה המתוחזק על ידי הקהילה. מתאים כותרות באמצעות TMDB API.',
  'subs.sources.jimaku.content': 'אנימה (סרטים ותוכניות טלוויזיה)',
  'subs.sources.jimaku.languages':
    'בעיקר יפנית; גם אנגלית, סינית ועוד בהתאם לקבצים הזמינים',
  'subs.sources.jimaku.formats': 'SRT, ASS, SSA, VTT, SUB ואחרים',

  'subs.sources.kitsunekko.desc':
    'מאסף רשימות ספריות מ-kitsunekko.net, מאגר כתוביות אנימה ייעודי. מתאים כותרות באמצעות TMDB API.',
  'subs.sources.kitsunekko.content': 'אנימה (תוכניות טלוויזיה)',
  'subs.sources.kitsunekko.languages': 'ספריות כתוביות באנגלית ויפנית',
  'subs.sources.kitsunekko.formats': 'SRT, ASS, SSA, VTT, SUB ואחרים',

  'subs.sources.yify.desc':
    'מאסף מ-yifysubtitles.ch כתוביות שמותאמות לפי IMDB ID. סרטים בלבד.',
  'subs.sources.yify.content': 'סרטים בלבד (תוכניות טלוויזיה אינן נתמכות)',
  'subs.sources.yify.languages':
    'תמיכה רב-לשונית נרחבת (אלבנית, ערבית, אנגלית, צרפתית, ספרדית ועוד רבות)',
  'subs.sources.yify.formats': 'SRT (מוגש בתוך ארכיון ZIP)',

  'subs.sources.ajatttools.desc':
    'שולף כתוביות ממאגר GitHub של Ajatt-Tools/kitsunekko-mirror. מאורגן לפי סוג מדיה. מתאים כותרות באמצעות TMDB API.',
  'subs.sources.ajatttools.content': 'אנימה ודרמה (תוכניות טלוויזיה וסרטים)',
  'subs.sources.ajatttools.languages': 'בעיקר יפנית; גם אנגלית, סינית ואחרות',
  'subs.sources.ajatttools.formats': 'SRT, ASS, SSA, VTT, SUB ואחרים',

  'subs.sources.ai.desc':
    'לא מאסף. SRT מתורגם על ידי בינה מלאכותית ונוצר לפי דרישה מכתוביית המקור הטובה ביותר הזמינה. מפתחות Pro בלבד. ראה את מדריך תרגום הבינה המלאכותית לפרטים מלאים.',
  'subs.sources.ai.content': 'כל דבר ש-Wyzie יכול למצוא עבורו כתובית טקסט',
  'subs.sources.ai.languages': 'יותר מ-80 שפות יעד',
  'subs.sources.ai.formats': 'SRT בלבד',

  // Subs Package Page
  'subs.pkg.title': 'שימוש בחבילת ה-NPM של Wyzie',
  'subs.pkg.p1':
    'חבילת ה-NPM של Wyzie Subs מספקת ממשק פשוט וקל לשימוש לחיפוש ושליפת כתוביות.',
  'subs.pkg.install.h2': 'התקנה',
  'subs.pkg.important':
    'נדרש מפתח API לכל הבקשות. קבל מפתח חינמי בכתובת [store.wyzie.io/redeem](https://store.wyzie.io/redeem) והעבר אותו דרך פרמטר ה-key. ראה את דף מפתחות API לפרטים.',
  'subs.pkg.usage.h2': 'שימוש',
  'subs.pkg.params.h3': 'פרמטרים',
  'subs.pkg.params.note':
    'למידע נוסף (או אם נתקעת), אנא בקר ב-[דף הבית של Wyzie Subs](https://sub.wyzie.io).',

  'subs.pkg.param.tmdb':
    'TMDB ID של הסרט או תוכנית הטלוויזיה (נדרש tmdb_id או imdb_id).',
  'subs.pkg.param.imdb':
    'IMDB ID של הסרט או תוכנית הטלוויזיה (נדרש imdb_id או tmdb_id).',
  'subs.pkg.param.format':
    'פורמטי קבצים להחזרה (לדוגמה, srt, ass). מקבל רשימה.',
  'subs.pkg.param.season': 'מספר עונה (דורש episode).',
  'subs.pkg.param.episode': 'מספר פרק (דורש season).',
  'subs.pkg.param.language': 'קודי ISO 639-1 לשפת הכתובית. מקבל רשימה.',
  'subs.pkg.param.encoding': 'פילטר קידוד תווים (לדוגמה, utf-8, latin-1).',
  'subs.pkg.param.hi':
    'כאשר true, מוחזרות רק כתוביות לכבדי שמיעה. מקורות שאינם מסמנים כתוביות לכבדי שמיעה אינם מחזירים דבר.',
  'subs.pkg.param.source':
    'ספקי כתוביות לשאילתה לפי שם קוד (all לכל מקור פעיל שהמפתח שלך יכול להשתמש בו; ברירת מחדל charlie).',
  'subs.pkg.param.release': 'פילטרי שחרור/scene (מקבל רשימה).',
  'subs.pkg.param.filename': 'פילטרי שם קובץ; כינויים file ו-fileName נתמכים.',
  'subs.pkg.param.origin': 'פילטר מקור תוכן (לדוגמה, WEB, BLURAY, DVD).',
  'subs.pkg.param.key':
    'מפתח ה-API שלך (נדרש). קבל אחד חינם בכתובת store.wyzie.io/redeem.',
  'subs.pkg.param.refresh': 'עקוף מטמון ושלוף תוצאות רעננות מהמקורות.',

  'subs.pkg.helpers':
    'החבילה כוללת גם עוזרי TMDB קלים: searchTmdb, getTvDetails ו-getSeasonDetails למציאת מזהים מהירה לפני פנייה ל-/search. getSources מחזיר את שמות הקוד של המקורות הפעילים (מקור שהושהה על ידי בדיקות התקינות שלו מושמט עד שהוא מתאושש), ו-getSourcesInfo מחזיר את תגובת /sources המלאה עם הרמות, ובנוסף, כאשר מועבר מפתח, את המקורות שהמפתח הזה יכול להשתמש בהם. withDownloadOptions מוסיף אפשרויות הורדה (פלט WebVTT, תיקוני תזמון, שפה שנייה ועוד) ל-url של תוצאה.',
  'subs.pkg.types.h3': 'טיפוסים',
  'subs.pkg.type.search': 'כל הפרמטרים החוקיים שה-API מזהה.',
  'subs.pkg.type.query':
    'כל הפרמטרים (אופציונליים וחובה) הזמינים עבור wyzie-subs API.',
  'subs.pkg.type.subtitle':
    'כל הערכים המוחזרים מה-API עם הטיפוסים המתאימים להם.',
  'subs.pkg.type.sources': 'סוג התגובה מנקודת הקצה /sources.',
  'subs.pkg.type.download':
    'אפשרויות עבור withDownloadOptions: to, offset, fps ו-plain, וכן sdh, clean ו-dual (Pro).',
  'subs.pkg.type.sync':
    'הקלט והתוצאה של syncSubtitle (Wyzie Synced, מפתחות Pro): איזו כתובית (תוצאה, ה-url שלה, או tmdb_id/imdb_id יחד עם language), מקטעי הדיבור (speech) ש-detectSpeech מצא או קובץ המדיה (media), וקישור ההורדה המסונכרן עם ה-offset, ה-fps וה-confidence שלו. ראה [Wyzie Synced](/subs/usage/synced).',
  'subs.pkg.types.end':
    'הטיפוסים שלנו פשוטים מאוד ומתועדים היטב. עיין ב-[src/types.ts](https://github.com/wyziedevs/wyzie-lib/blob/main/src/types.ts) במאגר wyzie-lib.',
  'subs.pkg.config.h3': 'תצורה',
  'subs.pkg.config.p1':
    'משתמש אחד שאל ב-Github על שם מארח API שניתן להגדרה ואני הייתי כמו בחיים שזה נשמע כמו רעיון טוב אז להלן השימוש. אוהב אתכם חברים!',

  // Subs Direct Page
  'subs.direct.title': 'שליפה ישירה של Wyzie Subs',
  'subs.direct.caution':
    'אני ממליץ בחום להשתמש בחבילת ה-NPM שכן היא קלה יותר ואמינה יותר.',
  'subs.direct.p1':
    'אם החלטת שלא להשתמש בחבילת ה-NPM, אז בואו נתחיל. אעבור רק על פרמטרי ה-API ועל הנתונים שה-API מחזיר. כיצד אתה שולח בקשות ל-API תלוי לגמרי בך.',
  'subs.direct.important':
    'נדרש מפתח API לכל הבקשות. קבל מפתח חינמי בכתובת [store.wyzie.io/redeem](https://store.wyzie.io/redeem) וכלול אותו כ-&key=YOUR_KEY בכל בקשה. ראה את דף מפתחות API לפרטים.',

  'subs.direct.params.h3': 'פרמטרים',
  'subs.direct.param.id': 'TMDB או IMDB ID של התוכנית או הסרט (נדרש).',
  'subs.direct.param.seasonEpisode':
    'עונה ופרק לחיפושי טלוויזיה. שניהם חייבים להיות נוכחים יחד.',
  'subs.direct.param.language':
    'פילטר שפה (קודי ISO 639-1). ערכים מרובים מופרדים בפסיקים.',
  'subs.direct.param.format': 'פורמטי כתוביות להחזרה. ערכים מרובים מותרים.',
  'subs.direct.param.hi':
    'כאשר true, מוחזרות רק כתוביות לכבדי שמיעה (זהו פילטר, לא העדפה). מקורות שאינם מסמנים כתוביות לכבדי שמיעה אינם מחזירים דבר.',
  'subs.direct.param.encoding': 'פילטר קידוד תווים.',
  'subs.direct.param.source':
    'ספקי כתוביות לשאילתה (all שואל כל מקור שהמפתח שלך יכול להשתמש בו; ברירת מחדל charlie).',
  'subs.direct.param.release': 'פילטרי שחרור או שם scene (מופרד בפסיקים).',
  'subs.direct.param.file':
    'פילטרי שם קובץ (כינויים: file, filename, fileName).',
  'subs.direct.param.origin':
    'פילטר מקור תוכן, מופרד בפסיקים (לדוגמה, WEB, BLURAY, DVD).',
  'subs.direct.param.key':
    'מפתח ה-API שלך (נדרש). קבל אחד חינם בכתובת store.wyzie.io/redeem.',
  'subs.direct.param.refresh':
    'עקוף מטמון ושלוף תוצאות רעננות. השתמש כאשר מקורות עשויים להתעדכן.',
  'subs.direct.param.page': 'הדף שיוחזר, החל מ-1. משמש רק יחד עם limit.',
  'subs.direct.param.limit':
    'תוצאות לכל דף (1 עד 200). בלעדיו, כל התוצאות מוחזרות בתגובה אחת.',
  'subs.direct.important.imdb':
    "בעת שימוש ב-IMDB ID, וודא שהתווים הראשונים ('tt') כלולים בתחילת המזהה.",

  'subs.direct.data.h3': 'נתונים מוחזרים',
  'subs.direct.data.id': 'ה-ID של קובץ הכתובית.',
  'subs.direct.data.url':
    'קישור הורדה ב-https://sub.wyzie.io/c/... הנושא פרמטר tok מוצפן. כל הורדה עולה 1 בקשה; ראה את הסעיף על הורדת כתוביות להלן.',
  'subs.direct.data.flagUrl': 'URL לדגל של אזור השפה.',
  'subs.direct.data.format': 'הפורמט של קובץ הכתובית.',
  'subs.direct.data.encoding': 'קידוד התווים של קובץ הכתובית.',
  'subs.direct.data.display': 'שפת הכתובית, עם אות ראשונה גדולה.',
  'subs.direct.data.language': 'קוד ISO 639-1 של השפה.',
  'subs.direct.data.media': 'שם המדיה שהכתוביות שייכות לה.',
  'subs.direct.data.isHearingImpaired':
    'ערך Boolean המייצג אם הכתובית נגישה לכבדי שמיעה.',
  'subs.direct.data.source': 'מאיזה מקור נאספה הכתובית.',
  'subs.direct.data.release': 'שם השחרור הראשי.',
  'subs.direct.data.releases': 'שמות שחרור אחרים התואמים לכתובית.',
  'subs.direct.data.fileName': 'שם הקובץ המקורי כאשר זמין.',
  'subs.direct.data.downloadCount': 'מספר הורדות בפלטפורמת המקור (אם זמין).',
  'subs.direct.data.origin': 'מקור התוכן (לדוגמה, WEB, BluRay, DVD).',
  'subs.direct.data.matchedRelease': 'ערך השחרור שתאם לפילטר שלך (אם סופק).',
  'subs.direct.data.matchedFilter': 'הפילטר שסיפק המשתמש שתאם (אם סופק).',
  'subs.direct.data.ai':
    'true אם הרשומה היא כתובית מתורגמת על ידי בינה מלאכותית, false לכתוביות נאספות רגילות. השתמש בזה כפילטר צד-לקוח כאשר אתה רוצה רק אחד מהשניים.',
  'subs.direct.download.p':
    'כל url בתגובת /search מצביע ל-https://sub.wyzie.io/c/... ונושא פרמטר שאילתה tok. ה-tok מוצפן, כך שאינו חושף את מפתח ה-API שלך, והוא נשאר תקף למשך 60 יום. השתמש ב-URL כפי שהוא. חיפוש עולה 1 בקשה וכל הורדה עולה 1 נוספת, שמחויבת למפתח שביצע את החיפוש. כאשר מפתח זה אינו יכול לשלם עבור הורדה, הקישור נדחה:',
  'subs.direct.dl.p':
    'הוסף אותן ל-URL של הורדה כדי לשנות את מה שהוא מחזיר. הן פועלות על כל הורדה, מהמטמון או לא, ואינן עולות דבר נוסף (מלבד dual, להלן). כותרת התגובה X-Subtitle-Transforms מפרטת מה הוחל, כולל ספירות.',
  'subs.direct.dl.param.to':
    'פורמט פלט: `srt` או `vtt`. `vtt` מתנגן ישירות באלמנט `<track>` בדפדפן. ברירת מחדל: הפורמט המקורי של הקובץ.',
  'subs.direct.dl.param.offset':
    'מזיז כל שורה במספר זה של שניות (ערך שלילי מקדים).',
  'subs.direct.dl.param.fps':
    'מתקן סחיפה בכתובית שנוצרה לשחרור אחר: `SUBTITLE_FPS:VIDEO_FPS`, לדוגמה `25:23.976` לכתובית PAL על וידאו בקצב פריימים קולנועי.',
  'subs.direct.dl.param.plain':
    'שורות פשוטות ומסודרות: קודי עיצוב כגון `{\\an8}` ו-`<font>` מוסרים, שורות ריקות וחוזרות מושמטות, השורות מסודרות לפי זמן, וחפיפות קטנות נחתכות.',
  'subs.direct.dl.param.sdh':
    'מסיר טקסט לכבדי שמיעה: `[DOOR SLAMS]`, `(sighs)`, תוויות דוברים כמו `JOHN:` ומילות שירים עם ♪.',
  'subs.direct.dl.param.clean':
    'מסתיר קללות בוטות, תוך השארת האות הראשונה (`f***`). קבצים באנגלית בלבד.',
  'subs.direct.dl.param.dual':
    'מוסיף שפה שנייה (קוד ISO 639-1) מתחת לכל שורה, מיושרת לתזמון של קובץ זה. עולה 1 בקשה נוספת, רק כאשר נמצאה התאמה; אחרת הקובץ מוחזר לבדו עם `X-Dual: unavailable`.',
  'subs.direct.dl.after':
    'ניתן לשלב אפשרויות, לדוגמה `&to=vtt&sdh=strip&offset=-1.5`. הקישורים כבר נושאים את `format`, `encoding` ו-`id`, ובפרקים גם את `season` ו-`episode`: השאר אותם כמו שהם. `autoUnzip=false` מחזיר ארכיון כפי שהוא.',
  'subs.direct.oneCall.p':
    'עם מפתח API, נקודת הקצה GET /download מחזירה את קובץ הכתובית עצמו בקריאה אחת: היא מחפשת עם המפתח שלך ועם אותם פרמטרים כמו /search (ברירת המחדל של language היא en), בוחרת את ההתאמה הטובה ביותר ומגישה אותה. זה עולה 2 בקשות, כמו חיפוש ועוד הורדה. אפשרויות הורדה כמו to ו-offset חלות על הקובץ.',
  'subs.direct.oneCall.pick':
    'ההתאמה הטובה ביותר היא תוצאת החיפוש הראשונה, עם העדפה לקובצי SRT, WebVTT ו-ASS אלא אם הגדרת format, ולקבצים ללא טקסט לכבדי שמיעה אלא אם הגדרת hi=true. ניתן לצמצם את הבחירה באמצעות release, filename, source או origin. כותרות התגובה X-Subtitle-Release, X-Subtitle-Source, X-Subtitle-Language ו-X-Subtitle-Url מציינות איזה קובץ נבחר. השגיאות זהות לאלו של /search ושל קישורי ההורדה.',
  'subs.direct.oneCall.keyless':
    'ללא מפתח, [דף ההורדה](https://sub.wyzie.io/download) נועד למציאת כתובית או שתיים באופן ידני. הקישורים שלו פותחים רק את הקובץ שעבורו נוצרו, ורק מהרשת שביצעה את החיפוש, ויש לו מגבלות שעתיות. לכל דבר אוטומטי, השתמש במפתח.',
  'subs.direct.headers.p':
    'כל תגובת /search כוללת כותרת X-Total-Count עם המספר הכולל של התוצאות. כאשר אתה מעביר limit, היא כוללת גם:',
  'subs.direct.header.xpage': 'הדף שהוחזר.',
  'subs.direct.header.xperpage': 'ערך ה-limit שבתוקף.',
  'subs.direct.header.xtotalpages': 'המספר הכולל של הדפים.',
  'subs.direct.headers.rate':
    'התגובות נושאות גם את X-RateLimit-Limit, X-RateLimit-Remaining ו-X-RateLimit-Reset. התייחס אליהן כמשוערות: השימוש מתקזז מול החיוב באצוות קצרות, כך שהן עשויות לפגר מעט אחרי השימוש האמיתי שלך.',

  // Subs Translate Page
  'subs.translate.title': 'תרגום כתוביות בבינה מלאכותית',
  'subs.translate.important':
    'תרגום בינה מלאכותית הוא **תכונת Pro**; מפתחות חינמיים מקבלים 403 Upgrade required. כל קריאה עולה **25 בקשות** מיתרת המפתח שלך, כולל פגיעות במטמון. אם קריאה נכשלת לפני שנוצר פלט כלשהו (לא נמצאה כתובית, כשל בחיפוש או בהורדה, או שהשרת עמוס), 25 הבקשות מוחזרות אוטומטית.',
  'subs.translate.p1':
    'Wyzie יכול לתרגם כל כתובית ליותר מ-80 שפות בזמן אמת. קובץ ה-SRT המתורגם מוזרם בחזרה לפי הסדר ככל שהאצוות מסתיימות, כך שקטעי הכתובית הראשונים מגיעים במהירות במקום רק לאחר שכל הקובץ הושלם. התרגום המלא נשמר במטמון למשך 30 יום, כך שבקשות מאוחרות יותר עבור אותו כותר, פרק ושפת יעד מוגשות מהמטמון.',

  'subs.translate.ways.h2': 'שתי דרכים להשתמש בזה',
  'subs.translate.way1.h3': '1. בחר שפה מתגובת חיפוש',
  'subs.translate.way1.p1':
    'עבור מפתחות Pro, כל תגובת /search כוללת גם שורות תרגום בינה מלאכותית עם "ai": true ו-url שמצביע ל-/translate: אחת לכל שפה נתמכת, או רק עבור השפות שבפילטר language= שלך. מפתחות חינמיים לעולם אינם מקבלים שורות אלה. התייחס לשורות ה-AI כמו לכל שורת כתובית אחרת בממשק שלך: כאשר המשתמש לוחץ על אחת מהן, שלוף את ה-URL.',
  'subs.translate.way1.filter':
    'אם אתה רוצה להסתיר את שורות ה-AI מהממשק שלך, סנן אותן:',
  'subs.translate.way2.h3': '2. קרא ל-/translate ישירות',

  'subs.translate.param.id': 'TMDB או IMDB ID (נדרש).',
  'subs.translate.param.target':
    'שפת היעד (נדרש): שם מהרשימה הנתמכת (לדוגמה Spanish, Japanese, Portuguese (Brazil)) או הקוד שלה (לדוגמה es, ja, pt-BR).',
  'subs.translate.param.seasonEpisode':
    'לטלוויזיה. שניהם חייבים להיות נוכחים יחד.',
  'subs.translate.param.key':
    'מפתח ה-API שלך. השתמש ב-tk במקום זה אם קיבלת את ה-URL מ-/search.',
  'subs.translate.param.tk':
    'אסימון מוצפן מכתובות ה-URL של שורות ה-AI ב-/search. פועל כמו key, אינו חושף את מפתח ה-API שלך, ונשאר תקף למשך 60 יום.',

  'subs.translate.headers.p':
    'גוף התגובה הוא קובץ SRT מוזרם כ-text/plain; charset=utf-8. כותרות תגובה שימושיות:',
  'subs.translate.header.xcache':
    'HIT-REDIS אם הוגש מהמטמון, MISS אם נוצר חדש.',
  'subs.translate.header.xsourcelang': 'שפת הכתובית שהמתרגם השתמש בה כקלט.',
  'subs.translate.header.xtargetlang': 'הד של פרמטר target שלך.',
  'subs.translate.header.xsourceprovider': 'איזה מאסף סיפק את כתובית המקור.',

  'subs.translate.how.h2': 'כיצד זה עובד',
  'subs.translate.how.step1':
    'Wyzie מחפש במקורות הרגילים כתובית טקסט, ומעדיף SRT באנגלית כאשר זמין. קובצי VTT, ASS, SSA ו-SUB מומרים תחילה ל-SRT.',
  'subs.translate.how.step2':
    'ה-SRT מחולק לאצוות של עד כ-3,800 תווים ומתורגם באמצעות Google Translate, 4 אצוות בכל פעם.',
  'subs.translate.how.step3':
    'הפלט מוזרם בחזרה לפי סדר ה-SRT ככל שהאצוות מסתיימות, כך שקטעי הכתובית הראשונים מגיעים במהירות. נגנים שמקבלים גוף SRT מוזרם יכולים להתחיל להציג את השורות הראשונות לפני שהשאר מסתיים.',
  'subs.translate.how.step4':
    'התרגום המלא נשמר במטמון ב-Redis למשך 30 יום, עם מפתח לפי id, season, episode ו-target.',

  'subs.translate.languages.h2': 'שפות יעד נתמכות',
  'subs.translate.languages.p':
    'יותר מ-80 שפות כולל כל השפות האירופיות, אסיאתיות, אפריקאיות והמזרח תיכוניות הגדולות. העבר שם מהרשימה (Spanish, Portuguese (Brazil)) או את הקוד שלו (es, pt-BR). עבור מפתחות Pro, הרשימה המלאה מוחזרת גם כשורות ai: true בכל תגובת /search ללא פילטר language=, והיא מקור האמת הקנוני.',

  'subs.translate.limitations.h2': 'מגבלות',
  'subs.translate.limit1':
    'תרגום בינה מלאכותית זקוק לכתובית טקסט כנקודת מוצא. מקורות VTT, ASS, SSA ו-SUB מומרים תחילה ל-SRT; אם אין כתובית טקסט כלל, הקריאה מחזירה 404 No subtitle found ו-25 הבקשות מוחזרות.',
  'subs.translate.limit2':
    'איכות התרגום תלויה בכתובית המקור. מקור עם תזמון גרוע או שגיאות כתיב מייצר תרגום עם תזמון גרוע או שגיאות כתיב.',
  'subs.translate.limit3':
    'חלק מהמשתמשים עשויים לרצות לסנן לחלוטין שורות AI. סנן על ai === false בלקוח שלך.',
  'subs.translate.limit4':
    'תרגומים מחויבים גם על פגיעות במטמון. בין אם נוצר חדש או הוגש מהמטמון בן 30 הימים, כל קריאת /translate עולה 25 בקשות. רק על קריאות שנכשלות לפני שנוצר פלט כלשהו ניתן החזר.',

  // Subs Synced Page
  'subs.synced.title': 'Wyzie Synced',
  'subs.synced.important':
    'Wyzie Synced הוא **תכונת Pro**: מפתחות חינמיים מקבלים 403 Paid feature. כל סנכרון מוצלח עולה **5 בקשות**; סנכרון שלא מוצא התאמה אינו מחויב. הורדת הקישור המסונכרן נספרת לאחר מכן כמו כל הורדה אחרת.',
  'subs.synced.p1':
    'כתוביות שנמצאות ברשת מתוזמנות לעתים קרובות לשחרור שונה מהווידאו שיש לך: הן מתחילות כמה שניות מוקדם או מאוחר מדי, או סוטות יותר ויותר ככל שהסרט מתקדם כי השחרור ההוא רץ בקצב פריימים אחר. Wyzie Synced מאזין לאודיו של העותק שלך, מוצא היכן אנשים מדברים, ומחשב את ההיסט ואת תיקון קצב הפריימים שמיישרים את הכתובית אליו. אתה מקבל קישור הורדה רגיל עם התיקון מוחל (באמצעות [אפשרויות ההורדה](/subs/usage/direct#download-options) offset ו-fps).',
  'subs.synced.web.p':
    'הדרך הקלה ביותר: פתח את [sub.wyzie.io/synced](https://sub.wyzie.io/synced), הזן את מפתח ה-Pro שלך, בחר את קובץ הווידאו ואת הכותר, והורד את הכתובית המסונכרנת. האודיו מנותח בדפדפן שלך, כך שהווידאו לעולם אינו מועלה: רק תזמוני הדיבור נשלחים. MKV, MP4, AVI ורוב הפורמטים האחרים נתמכים, כולל אודיו AC3, E-AC3 ו-DTS.',
  'subs.synced.api.p':
    'שלח איזו כתובית אתה רוצה (קישור הורדה, או הכותר כדי ש-Wyzie יבחר את ההתאמה הטובה ביותר) ואת האודיו: או תזמוני דיבור שזיהית בעצמך, או את קובץ האודיו/וידאו עצמו. POST /synced הוא אותו API.',
  'subs.synced.param.url':
    'קישור הורדה מ-/search (https://sub.wyzie.io/c/…). אפשרויות הורדה אחרות שעליו (to, sdh, …) נשמרות בקישור המסונכרן.',
  'subs.synced.param.id':
    'במקום url: TMDB או IMDB ID. Wyzie מנסה את 5 כתוביות הטקסט המובילות בשפה זו ומחזיר את זו שמתאימה הכי טוב לאודיו שלך.',
  'subs.synced.param.language': 'עם id: קוד ISO 639-1 של שפת הכתובית (נדרש).',
  'subs.synced.param.seasonEpisode':
    'עם id, לטלוויזיה. שניהם חייבים להיות נוכחים יחד.',
  'subs.synced.param.key':
    'מפתח ה-API מסוג Pro שלך. בלעדיו, נעשה שימוש במפתח שמאחורי ה-tok של ה-url; קישורים מדף ההורדה ללא מפתח דורשים key.',
  'subs.synced.param.speech':
    'היכן אנשים מדברים: [[start, end], …] בשניות, מכל גלאי פעילות קולית (detectSpeech של wyzie-lib, Silero VAD, webrtcvad). סרט באורך 2 שעות הוא בערך 2,000 מקטעים, כ-40 KB של JSON.',
  'subs.synced.param.media':
    'או קובץ האודיו/וידאו עצמו: כגוף בקשה גולמי (עם שאר השדות במחרוזת השאילתה), או כשדה ה-multipart בשם media. עד 95 MB, כך שעבור סרט מלא העלה את רצועת האודיו בלבד.',
  'subs.synced.fields.note':
    'השדות נשלחים בגוף JSON, בטופס multipart, או במחרוזת השאילתה (עם גוף media גולמי).',
  'subs.synced.response.p': 'תגובת 200 היא JSON:',
  'subs.synced.field.url':
    'קישור ההורדה של הכתובית עם תיקון התזמון (offset, fps) ו-tok חדש עבור המפתח שלך. השתמש בו כמו בכל url של /search: כל הורדה עולה 1 בקשה.',
  'subs.synced.field.offset':
    'שניות שמתווספות לכל שורה אחרי תיקון קצב הפריימים (ערך שלילי מקדים).',
  'subs.synced.field.fps':
    'תיקון קצב הפריימים בתבנית SUBTITLE_FPS:VIDEO_FPS (לדוגמה "25:23.976"), או null כאשר לא נדרש תיקון.',
  'subs.synced.field.confidence':
    '0 עד 1: עד כמה בבירור התזמון הזה עדיף על כל האחרים. כל מה שמוחזר עבר את מבחן ההתאמה; ערך גבוה יותר פירושו ודאות רבה יותר.',
  'subs.synced.field.inSync': 'true כאשר הכתובית כבר תאמה לעותק שלך.',
  'subs.synced.field.subtitle':
    'איזו כתובית שימשה (release, fileName, format, source, …). כאשר נשלח url, רק ה-format שלה.',
  'subs.synced.errors.p':
    'שגיאות מוחזרות כ-JSON עם message ו-details. סנכרונים שנדחו או נכשלו אינם מחויבים.',
  'subs.synced.error.400':
    'שדות חסרים או לא תקינים: אין כתובית, אין אודיו, או speech שאינו זוגות של [start, end].',
  'subs.synced.error.401':
    'אין מפתח, או שקישור ההורדה ב-url אינו תקף או שפג תוקפו.',
  'subs.synced.error.403':
    'המפתח חינמי (Wyzie Synced דורש Pro), לא תקף, או מושהה.',
  'subs.synced.error.404': 'אין כתוביות טקסט בשפה זו עבור הכותר.',
  'subs.synced.error.413':
    'קובץ המדיה גדול מ-95 MB. העלה את רצועת האודיו בלבד, או שלח speech.',
  'subs.synced.error.422':
    'הכתובית אינה מתיישרת עם האודיו בשום היסט או קצב פריימים (כנראה גרסת עריכה או פרק אחרים), יש באודיו מעט מדי דיבור, או שלא ניתן לפענח את הקובץ.',
  'subs.synced.error.429':
    'המפתח אינו יכול לשלם: סנכרון דורש שיישארו לפחות 5 בקשות, וזה נבדק לפני שמתחילה עבודה כלשהי.',
  'subs.synced.error.503':
    'השרת עסוק בפענוח העלאות אחרות, או שהחיפוש אינו זמין לזמן קצר. נסה שוב בעוד רגע, או שלח speech.',
  'subs.synced.lib.p':
    'wyzie-lib כולל את detectSpeech (אותו גלאי שהאתר מריץ בדפדפן שלך) ואת syncSubtitle:',
  'subs.synced.how.step1':
    'דיבור: האודיו מפוענח למונו ב-8 kHz (הערוץ המרכזי בלבד במיקסים של 5.1 ו-7.1, שם נמצאים הדיאלוגים), וגלאי פעילות קולית מסמן היכן אנשים מדברים: צליל חזק בתחום תדרי הדיבור שעולה ויורד עם ההברות.',
  'subs.synced.how.step2':
    'יישור: זמני ההופעה של הכתובית על המסך עוברים קורלציה צולבת עם הדיבור הזה בכל היסט בטווח של ±10 דקות, עבור אי-ההתאמות הנפוצות בקצב הפריימים (25 מול 23.976, 25 מול 24, 24 מול 23.976 fps).',
  'subs.synced.how.step3':
    'עידון: התזמון הטוב ביותר מעודן לדיוק של 10 ms על ידי יישור נקודות תחילת השורות עם נקודות תחילת הדיבור.',
  'subs.synced.how.step4':
    "תזמון מוחזר רק כאשר הוא בולט הרבה מעל כל היסט אחר, כך שכתובית של גרסת עריכה או פרק אחרים מקבלת 422 Couldn't sync במקום הזזה שגויה.",
  'subs.synced.limit1':
    'Wyzie Synced מתקן היסט קבוע והבדל בקצב הפריימים. כתובית של גרסת עריכה שונה (סצנות שנוספו או חסרות) אינה ניתנת לתיקון בהזזה אחת, ולכן נדחית.',
  'subs.synced.limit2':
    'הוא זקוק לדיבור: ייתכן שסרטים עם מעט דיאלוג, או אודיו שרובו מוזיקה, לא יסתנכרנו.',
  'subs.synced.limit3': 'נמצאים היסטים של עד ±10 דקות.',

  // Subs API Keys Page
  'subs.keys.title': 'מפתחות API',
  'subs.keys.p1':
    'Wyzie Subs דורש מפתח API לכל הבקשות. רמה חינמית מכסה את רוב מקרי השימוש; תוכניות בתשלום מטפלות בשימוש כבד יותר.',

  'subs.keys.tiers.h2': 'רמות',
  'subs.keys.tier.free': 'חינמי (אימות מייל)',
  'subs.keys.tier.free.limit': '1,000 בקשות / יום UTC',
  'subs.keys.tier.pro': '$5 חד-פעמי',
  'subs.keys.tier.pro.limit': '400,000 בקשות',
  'subs.keys.tier.topup': 'מ-$0.0625 / 5K',
  'subs.keys.tier.topup.limit': 'מתווסף ליתרה בתשלום שלך',
  'subs.keys.tiers.end':
    'Pro ותוספות לא פוקעות. מעדיף תשלום חוזר? מנוי של $32/חודש מעניק 6,000,000 בקשות/חודש (כרטיס אשראי בלבד). ראה store.wyzie.io לתמחור מלא ולוח הבקרה.',

  'subs.keys.free.h2': 'קבלת מפתח חינמי',
  'subs.keys.free.p':
    'בקר בכתובת [store.wyzie.io/redeem](https://store.wyzie.io/redeem):',
  'subs.keys.free.step1': 'פתור Cloudflare Turnstile captcha מהיר.',
  'subs.keys.free.step2':
    'הזן כתובת של ספק מייל אישי מרכזי (Gmail, Outlook/Hotmail, Yahoo, iCloud, AOL, Proton ואחרים). דומיינים של מייל חד-פעמי נדחים.',
  'subs.keys.free.step3': 'הזן את הקוד בן 6 הספרות ששלחנו לך במייל.',
  'subs.keys.free.step4': 'תקבל מפתח API שנראה כך: wyzie-abc123...',
  'subs.keys.free.gmail':
    'כל כתובת מייל וכל רשת יכולות לממש מפתח חינמי אחד; בקשה שנייה מחזירה 409. איבדת את המפתח? השתמש בכפתור "Forgot key" (שכחתי מפתח) ב[לוח הבקרה](https://store.wyzie.io/dashboard) כדי שיישלח אליך שוב.',

  'subs.keys.pro.h2': 'שדרוג ל-Pro',
  'subs.keys.pro.p1':
    'בקר בכתובת [store.wyzie.io](https://store.wyzie.io) ובצע קנייה עם אותו מייל ששימש למפתח החינמי שלך. המפתח הקיים wyzie-... שלך משודרג במקומו עם 400K בקשות בתשלום שנוספות מעליו. מעדיף תשלום חוזר? מנוי של $32/חודש מוסיף במקום זאת מכסה חודשית של 6,000,000 בקשות (כרטיס אשראי בלבד).',
  'subs.keys.pro.p2':
    'אם תבצע קנייה עם מייל חדש לחלוטין (ללא מפתח קודם), ייווצר מפתח wyzie-... חדש וישלח אליך במייל.',

  'subs.keys.protect.h2': 'שמור את המפתח שלך מחוץ ללקוח',
  'subs.keys.protect.important':
    '**לעולם אל תטמיע את מפתח ה-API שלך בקוד צד-לקוח.** JavaScript בדפדפן, אפליקציות מובייל, תוספי דפדפן, אפליקציות שולחן עבודה מסוג Electron, ומאגרי Git ציבוריים - כולם נחשבים כצד-לקוח. כל דבר שאתה שולח למשתמש קצה יכול להיבדק על ידיו, וראינו מקרים אמיתיים שבהם משתמשים הדביקו את המפתח שלהם בחזית אתר סטרימינג, רק כדי שגורם שלישי יחלץ את חבילת ה-JS וידלל את יתרת הבקשות תוך שעות. מכסה שנצרכה בדרך זו אינה ניתנת להחזר.',
  'subs.keys.protect.p2': 'שתי דרכים בטוחות להשתמש במפתח מאפליקציית לקוח:',
  'subs.keys.protect.option1':
    'השתמש ב-[Wyzie Worker](https://github.com/wyziedevs/wyzie-worker): פרוקסי Cloudflare Worker חינמי שמחזיק את מפתח ה-API שלך כסוד `NITRO_API_TOKEN`. כל קריאה אליו חייבת לשלוח `Authorization: Bearer <NITRO_WORKER_KEY>`, סוד שני שאתה מגדיר, לכן נתב את הלקוח שלך דרך ה-backend שלך ושמור גם את מפתח ה-Worker בצד השרת.',
  'subs.keys.protect.option2':
    'הפעל פרוקסי משלך: כל נקודת קצה בצד השרת שמוסיפה את המפתח לפני העברה ל-sub.wyzie.io עובדת. ראה את דף ההיכרות לדוגמת 10 שורות.',
  'subs.keys.protect.devtools':
    'אם המפתח מופיע בכרטיסיית רשת ב-DevTools, הוא חשוף. הנח שהוא ציבורי וסובב אותו מ[לוח הבקרה](https://store.wyzie.io/dashboard) שלך.',

  'subs.keys.using.h2': 'שימוש במפתח שלך',
  'subs.keys.using.p': 'הוסף &key=YOUR_KEY לכל בקשת API:',
  'subs.keys.using.npm.h3': 'חבילת NPM',

  'subs.keys.limit.h2': 'הגעה למגבלה',
  'subs.keys.limit.p':
    'חיפוש עולה 1 בקשה וכל הורדת כתובית עולה 1 בקשה, כך שחיפוש אחד והורדת קובץ אחד צורכים 2. תרגום בינה מלאכותית עולה 25 בקשות לכל קריאה, וסנכרון של Wyzie Synced עולה 5.',
  'subs.keys.limit.free':
    '**רמה חינמית** נוצלה -> חיפושים וקישורי הורדה מחזירים 429 Daily request limit reached, עם reset_at ב-JSON וכותרת Retry-After. התקרה היומית של 1,000 בקשות מתאפסת בחצות UTC.',
  'subs.keys.limit.paid':
    '**יתרה בתשלום** מוצתה -> חיפושים וקישורי הורדה מחזירים 402 עם קישור להוספת יתרה ב-JSON. הוסף יתרה בכתובת [store.wyzie.io/topup](https://store.wyzie.io/topup) או הפעל **תוספת אוטומטית** בלוח הבקרה שלך לטעינה מחדש אוטומטית כאשר היתרה שלך חוצה סף שאתה מגדיר.',
  'subs.keys.hold.p1':
    'מפתחות ששולחים נפח גבוה מאוד, בעיקר מכתובות IP של מרכזי נתונים או אחסון, מושהים אוטומטית. מפתח מושהה מקבל 403 Key on hold בכל בקשה, עם קישור לשחזור (https://store.wyzie.io/verify) וקישור לתמיכה (https://store.wyzie.io/contact) ב-JSON.',
  'subs.keys.hold.p2':
    'כדי לשחזר את המפתח מיד, אמת את האתר שבו אתה משתמש בו בכתובת [store.wyzie.io/verify](https://store.wyzie.io/verify) עם רשומת DNS TXT או תג meta. מפתח עם אתר מאומת לעולם לא יושהה אוטומטית שוב, כך שאתרים עמוסים יכולים לאמת עוד לפני שהם מושהים אי פעם.',
  'subs.keys.hold.p3':
    'אין אתר, למשל שירות backend או אפליקציה? [צור קשר עם התמיכה](https://store.wyzie.io/contact) כדי לשחזר את המפתח.',

  'subs.keys.files.h2': 'מה יש בקבצים',
  'subs.keys.files.adfilter':
    '**סינון פרסומות** – מכל כתובית המוגשת דרך sub.wyzie.io מוסרים קטעי הפרסום של הספקים (באנרים של OpenSubtitles, פרסומות הימורים, שורות "watch free at ..."). קטעי ה-SRT ממוספרים מחדש כך ששום דבר לא מדלג. כל ספק, כולל OpenSubtitles, מוגש דרך sub.wyzie.io כך שהסינון חל על כולם.',
  'subs.keys.files.promo':
    '**מפתחות חינמיים ומפתחות פיתוח** מקבלים קטע כתובית קצר אחד ממש בתחילת כל קובץ (0–6 s) המפנה ל-[store.wyzie.io](https://store.wyzie.io). מפתחות בתשלום מקבלים קבצים נקיים ללא קטע כזה.',

  'subs.keys.faq.h2': 'שאלות נפוצות',
  'subs.keys.faq.q1': 'איבדתי את המפתח שלי. אפשר לקבל חדש?',
  'subs.keys.faq.a1':
    'פתח את [לוח הבקרה](https://store.wyzie.io/dashboard) והשתמש בכפתור "Forgot key" (שכחתי מפתח) עם המייל הרשום שלך; נשלח מחדש את המפתח הקיים שלך. אם אתה חושב שהמפתח דלף, סובב אותו מלוח הבקרה במקום זאת.',
  'subs.keys.faq.q2': 'האם אפשר להשתמש במפתח אחד במספר פרויקטים?',
  'subs.keys.faq.a2': 'כן. המפתח שלך עובד בכל מקום שבו אתה קורא ל-API.',
  'subs.keys.faq.q3': 'האם המפתח שלי יפוג אי פעם?',
  'subs.keys.faq.a3':
    'לא. מפתחות חינמיים ובתשלום כאחד אינם פוקעים. מפתחות חינמיים מוגבלים ליום; יתרה בתשלום נשמרת עד שאתה משתמש בה.',
  'subs.keys.faq.q4': 'האם תוספת אוטומטית בטוחה?',
  'subs.keys.faq.a4':
    'אתה מגדיר תקרת הוצאה חודשית. אנחנו לעולם לא מחייבים מעבר לכך, וכיבוי בלחיצה אחת נמצא בכל מייל אישור ובלוח הבקרה שלך.',

  // Proxy Intro Page
  'proxy.intro.title': 'מבוא ל-Wyzie Proxy',
  'proxy.intro.note':
    'גרסת הייצור של Wyzie Subs אינה משתמשת עוד בפרוקסי זה, אלא ב-[i6.shark](https://github.com/wyziedevs/i6.shark).',
  'proxy.intro.p1':
    'Wyzie Proxy הוא API פרוקסי עוצמתי המאפשר לך לשלוח בקשות לכל אתר ללא CORS או הגבלות אחרות. מכיוון ש-Wyzie Proxy בנוי עם Nitro, ניתן לאחסן אותו בכל אחת מהפלטפורמות הבאות: AWS Amplify, Azure, Cloudflare, Netlify, Stormkit, Vercel, Zeabur.',
  'proxy.intro.btn.hosting': 'אחסון',
  'proxy.intro.btn.check': 'בדוק את זה',

  // Proxy Hosting Page
  'proxy.hosting.title': 'אחסון Wyzie Proxy',
  'proxy.hosting.p1':
    'בנייה של Wyzie Proxy קלה יותר מנשימה, הודות ל-Nitro. ראשית, שכפל את המאגר של Wyzie Proxy באמצעות:',
  'proxy.hosting.p2': 'לאחר מכן, התקן את כל החבילות הנחוצות עם:',
  'proxy.hosting.p3': 'לאחר התקנת כל החבילות, ניתן לבנות את הפרוקסי:',
  'proxy.hosting.p4':
    'הפלט ייווצר בתיקיית /.output/server. אם אתה פורס ל-Cloudflare Workers, העתק והדבק את קובץ index.mjs לעובד; אחרת, ניתן לפרוס את הקבצים כרגיל.',

  // i6.shark Intro Page
  'i6shark.intro.title': 'מבוא ל-i6.shark',
  'i6shark.intro.p1':
    'i6.shark הוא שרת פרוקסי IPv6 המאפשר לך לשלוח בקשות HTTP מכתובות IPv6 שנוצרות באופן אקראי ב-/48 subnet. זהו הפרוקסי המפעיל כעת את Wyzie Subs בסביבת ייצור.',
  'i6shark.intro.p2':
    'ל-/48 subnet יש 1,208,925,819,614,629,174,706,176 (1.2 x 10^24) כתובות IPv6, מה שהופך אותו לבלתי ניתן כמעט לחסימה דרך בלוק IP מסורתי. שימוש ב-subnet בודד משמעותו שמי שרוצה ממש לחסום אותך יכול לחסום את כתובת ה-ASN שלך, אז היזהר עם זה.',
  'i6shark.intro.btn.hosting': 'אחסון',
  'i6shark.intro.btn.github': 'GitHub',

  'i6shark.intro.features.h2': 'תכונות',
  'i6shark.intro.feature1':
    '**יצירת IPv6 אקראית**: יוצר כתובות IPv6 אקראיות מקידומת ה-/48 שלך לכל בקשה',
  'i6shark.intro.feature2':
    '**תמיכה מלאה בשיטות HTTP**: GET, POST, PUT, DELETE וכל שיטות ה-HTTP האחרות',
  'i6shark.intro.feature3':
    '**אימות HMAC-SHA256**: אימות מפתח API מאובטח באמצעות אסימונים מבוססי user-agent',
  'i6shark.intro.feature4':
    '**ניהול בריכת IP חכם**: סיבוב IP אוטומטי עם גודל בריכה הניתן להגדרה. ניהול מחזור חיים חכם של IP. ספירת בקשות לכל IP. ניקוי IP שאינו בשימוש בהתבסס על סף חוסר פעילות.',
  'i6shark.intro.feature5':
    '**טיפול מתקדם בבקשות**: העברת כותרות מותאמות אישית. הסרת כותרות Cloudflare ו-CDN. תמיכה בפורמטים מרובים של פרמטרי URL. חזרה אופציונלית ל-IP ברירת המחדל של המערכת.',
  'i6shark.intro.feature7':
    '**תחזוקה אוטומטית**: שטיפה תקופתית של בריכת ה-IP. אימות וניקוי subnet. אגירת חיבורים ואופטימיזציית keepalive.',
  'i6shark.intro.feature8':
    '**ביצועים גבוהים**: טיפול בו-זמני בבקשות עם אגירת buffer. פסקי זמן ומגבלות חיבור הניתנים להגדרה. ניהול יעיל של כתובות IPv6.',
  'i6shark.intro.feature9': '**מצב דיבאג**: רישום מפורט לפתרון בעיות וניטור',

  'i6shark.intro.requirements.h2': 'דרישות',
  'i6shark.intro.req1': 'Go 1.22 ומעלה',
  'i6shark.intro.req2': 'מערכת Linux/Unix עם תמיכת IPv6 (רצוי Ubuntu)',
  'i6shark.intro.req3': 'הרשאות root (לקישור פורט 80 ולתפעול IPv6)',
  'i6shark.intro.req4': 'הקצאת /48 IPv6 subnet מספק האחסון שלך',

  'i6shark.intro.providers.h2': 'ספקי אחסון',
  'i6shark.intro.providers.p1': 'הספקים הבאים ידועים כמציעים /48 IPv6 subnets:',

  // i6.shark Hosting Page
  'i6shark.hosting.title': 'אחסון i6.shark',
  'i6shark.hosting.p1':
    'הגדרת i6.shark דורשת VPS עם /48 IPv6 subnet. לאחר ההגדרה, הוא פועל באופן אוטונומי עם תחזוקה מינימלית.',

  'i6shark.hosting.steps.h2': 'שלבים',
  'i6shark.hosting.step1': 'שכפל את המאגר לתיקייה /opt/i6.shark:',
  'i6shark.hosting.step2': 'הגדר קבועים ב-src/consts.go:',
  'i6shark.hosting.step2.note':
    'עדכן את SharedSecret, IPv6Prefix ו-Interface כך שיתאימו לשרת שלך. לקבועי הכוונון הנותרים יש ברירות מחדל סבירות ובדרך כלל אין צורך לשנות אותם.',
  'i6shark.hosting.step3': 'בנה את האפליקציה:',
  'i6shark.hosting.step4': 'צור את שירות ה-systemd:',
  'i6shark.hosting.step5': 'הפעל והתחל את השירות:',
  'i6shark.hosting.step5.check': 'בדוק את הסטטוס:',
  'i6shark.hosting.post':
    'שרת הפרוקסי יפעל כעת אוטומטית עם האתחול ויפעיל את עצמו מחדש אם יקרוס.',

  'i6shark.hosting.daily.h2': 'הפעלה מחדש יומית (אופציונלי)',
  'i6shark.hosting.daily.p':
    'הוסף עבודת cron להפעלה מחדש יומית של השרת בשעה אקראית:',

  'i6shark.hosting.auth.h2': 'אימות API',
  'i6shark.hosting.auth.p':
    'אסימוני API נוצרים באמצעות HMAC-SHA256 עם מפתח סוד משותף. הקלט ליצירת המפתח הוא כותרת ה-user-agent. ראה את הפונקציה validateAPIToken בקוד המקור לפרטי מימוש.',

  // Plugins
  'plugins.common.required': 'נדרש',

  'plugins.index.intro':
    'Wyzie Subs מתחבר ישירות לאפליקציות המדיה שכבר אתם משתמשים בהן. כל תוסף מדבר עם אותה נקודת קצה `https://sub.wyzie.io/search` וזקוק ל-**מפתח API של Wyzie** חינמי. השיגו אחד בכתובת [store.wyzie.io](https://store.wyzie.io/#plans).',
  'plugins.index.tbl.stremio.for': 'צפייה ב-Stremio במחשב, בנייד או בטלוויזיה',
  'plugins.index.tbl.stremio.install':
    'תוסף מתארח: הדביקו את המפתח שלכם, לחצו על התקנה',
  'plugins.index.tbl.bazarr.for': 'ספריות Plex, Jellyfin, Emby, Sonarr, Radarr',
  'plugins.index.tbl.bazarr.install': 'ספק מוכן לשילוב במופע ה-Bazarr שלכם',
  'plugins.index.tbl.kodi.for': 'Kodi 19+, LibreELEC, CoreELEC',
  'plugins.index.tbl.kodi.install': 'התקנה מקובץ zip או ממאגר Wyzie',
  'plugins.index.use.stremio':
    'השתמשו ב-**Stremio** אם אתם צופים בתוך אפליקציית Stremio.',
  'plugins.index.use.bazarr':
    'השתמשו ב-**Bazarr** אם אתם מריצים Plex, Jellyfin או Emby. Bazarr מוריד קובצי כתוביות לדיסק ושרת המדיה שלכם קולט אותם אוטומטית. זוהי גם הדרך המומלצת עבור Plex ו-Jellyfin; אין תוסף מקורי נפרד.',
  'plugins.index.use.kodi':
    'השתמשו ב-**Kodi** לשירות כתוביות מקורי של Kodi ב-Android TV, ב-Raspberry Pi או במחשב קולנוע ביתי.',
  'plugins.index.shared.sources':
    '**מקורות:** כל מקור שהמפתח שלכם יכול להשתמש בו (`source=all`): charlie ו-lima במפתח חינמי, כל השבעה במפתח Pro.',
  'plugins.index.shared.matching':
    '**התאמה:** Wyzie מונע על ידי מזהי IMDB ו-TMDB בתוספת עונה ופרק, כך שההתאמות מדויקות הן לסרטים והן לסדרות.',
  'plugins.index.shared.quota':
    '**מכסה:** כשהמפתח שלכם נגמר, התוסף מציג הודעה ידידותית עם קישור ל-[store.wyzie.io](https://store.wyzie.io) במקום להיכשל בשקט. טענו מחדש או הירשמו וחזרתם לעניינים.',
  'plugins.index.shared.languages':
    '**שפות:** יותר מ-100, ניתנות לבחירה לכל תוסף.',
  'plugins.index.outro':
    'בחרו את הפלטפורמה שלכם למעלה כדי להתחיל. קוד המקור של כל תוסף נמצא ב[מאגר wyzie-plugins](https://github.com/wyziedevs/wyzie-plugins).',

  'plugins.stremio.intro':
    'תוסף כתוביות בלחיצה אחת עבור [Stremio](https://www.stremio.com/). הוא שואל כל מקור של Wyzie שהמפתח שלכם יכול להשתמש בו ועובד הן לסרטים והן לסדרות, בכל פלטפורמה ש-Stremio רץ עליה.',
  'plugins.stremio.before':
    'אתם זקוקים למפתח API חינמי של Wyzie. השיגו אחד בכתובת [store.wyzie.io/redeem](https://store.wyzie.io/redeem), או קנו מפתח Pro או הירשמו בכתובת [store.wyzie.io](https://store.wyzie.io/#plans).',
  'plugins.stremio.install.1':
    'פתחו את [stremio.wyzie.io/configure](https://stremio.wyzie.io/configure).',
  'plugins.stremio.install.2': 'הדביקו את **מפתח ה-API** שלכם.',
  'plugins.stremio.install.3':
    'אופציונלי: הזינו את ה-**שפות** המועדפות עליכם כקודי ISO 639-1, מופרדים בפסיקים (לדוגמה `en,es,fr`). השאירו ריק לכל השפות.',
  'plugins.stremio.install.4':
    'אופציונלי: הפעילו את האפשרות **כבדי שמיעה** כדי לקבל רק כתוביות לכבדי שמיעה. השאירו אותה כבויה כדי לראות הכול; מקורות שאינם מסמנים כתוביות לכבדי שמיעה אינם מחזירים דבר כשהיא מופעלת.',
  'plugins.stremio.install.5':
    'לחצו על **התקנה**. Stremio נפתח ומבקש מכם לאשר; אשרו, וסיימתם.',
  'plugins.stremio.install.after':
    'המפתח וההעדפות שלכם מקודדים לתוך התוסף, כך שאין דבר נוסף להגדיר. פתחו כל סרט או פרק ובחרו כתובית מהרשימה.',
  'plugins.stremio.cfg.key.f': 'מפתח API',
  'plugins.stremio.cfg.key.d': 'מפתח ה-Wyzie שלכם. נדרש.',
  'plugins.stremio.cfg.langs.f': 'שפות',
  'plugins.stremio.cfg.langs.d':
    'קודי ISO 639-1, מופרדים בפסיקים. ריק משמעו כל השפות.',
  'plugins.stremio.cfg.hi.f': 'כבדי שמיעה',
  'plugins.stremio.cfg.hi.d':
    'מחזיר רק כתוביות לכבדי שמיעה (שולח hi=true). כבוי כברירת מחדל.',
  'plugins.stremio.cfg.note':
    'כדי לשנות כל אחד מאלה מאוחר יותר, פתחו מחדש את [stremio.wyzie.io/configure](https://stremio.wyzie.io/configure), התאימו, והתקינו מחדש.',
  'plugins.stremio.local':
    'לאחר מכן פתחו את `http://127.0.0.1:7000/configure`, הדביקו את המפתח שלכם, והתקינו ל-Stremio.',
  'plugins.stremio.quota':
    'אם המפתח שלכם מגיע למגבלה שלו, התוסף מציג ערך כתובית בודד עם קישור ל-[store.wyzie.io](https://store.wyzie.io) כדי שתוכלו לטעון מחדש או להירשם. ברגע שתעשו זאת, הכתוביות חוזרות מיד.',
  'plugins.stremio.ts.none':
    '**לא מופיעות כתוביות.** ודאו שלכותר יש מזהה IMDB ב-Stremio (לרוב פריטי הקטלוג יש) ושלשפות שבחרתם יש בפועל כתוביות לכותר זה. נסו לנקות את מסנן השפות כדי לראות הכול.',
  'plugins.stremio.ts.key':
    '**מפתח לא תקין, או ששום דבר לא נטען.** פתחו מחדש את עמוד ההגדרה והדביקו שוב את המפתח שלכם; רווח תועה שובר אותו. ודאו שהמפתח עובד בכתובת [store.wyzie.io/dashboard](https://store.wyzie.io/dashboard).',
  'plugins.stremio.ts.episode':
    '**פרק סדרה לא מותאם.** Wyzie מתאים לפי עונה ופרק; ודאו ש-Stremio מנגן את ערך הפרק הנכון, ולא עמוד סדרה כללי.',

  'plugins.bazarr.intro':
    '[Bazarr](https://www.bazarr.media/) מנהל כתוביות עבור **Plex, Jellyfin, Emby, Sonarr ו-Radarr** במקום אחד. הוספת Wyzie כספק מעניקה לכל השרתים האלה גישה לכל מקור של Wyzie שהמפתח שלכם יכול להשתמש בו, דרך מפתח יחיד.',
  'plugins.bazarr.note':
    'זוהי הדרך המומלצת להשתמש ב-Wyzie עם Plex ו-Jellyfin. Bazarr מוריד קובצי כתוביות לצד המדיה שלכם, והשרת שלכם קולט אותם אוטומטית, כך שאין צורך בתוסף מקורי נפרד.',
  'plugins.bazarr.before':
    'השיגו מפתח API חינמי של Wyzie בכתובת [store.wyzie.io/redeem](https://store.wyzie.io/redeem), ודאגו שיש לכם גישה לקובצי ההתקנה של Bazarr (נתיב Docker טיפוסי: `/opt/bazarr/bazarr/`).',
  'plugins.bazarr.install.1':
    'הורידו את [bazarr/wyzie.py](https://github.com/wyziedevs/wyzie-plugins/blob/main/bazarr/wyzie.py) מ[מאגר wyzie-plugins](https://github.com/wyziedevs/wyzie-plugins) (או `git clone https://github.com/wyziedevs/wyzie-plugins.git`) והעתיקו אותו אל `bazarr/subliminal_patch/providers/wyzie.py`.',
  'plugins.bazarr.install.2':
    'ערכו את `bazarr/subliminal_patch/extensions.py` והוסיפו את `wyzie` ל-**שניהם** `provider_registry` ו-`provider_manager`.',
  'plugins.bazarr.install.3':
    'ערכו את `bazarr/list_subtitles.py` (או `bazarr/config.py`, בהתאם לגרסה שלכם) כדי לחשוף את ההגדרות `api_key`, `prefer_hi` ו-`sources`. העתיקו את התבנית מספק קיים כמו `opensubtitlescom`.',
  'plugins.bazarr.install.4': 'הפעילו מחדש את Bazarr.',
  'plugins.bazarr.install.5':
    'עברו אל **Settings, Providers, Wyzie**, הדביקו את מפתח ה-API שלכם, ושמרו.',
  'plugins.bazarr.install.after':
    'מתוכננת בקשת משיכה מהשורה הראשונה שתשלב ספק זה במעלה הזרם לתוך Bazarr. עד אז זהו קובץ מוכן לשילוב שאתם מוסיפים להתקנה שלכם.',
  'plugins.bazarr.cfg.key': 'מפתח ה-Wyzie שלכם. נדרש.',
  'plugins.bazarr.cfg.hi': 'מחזיר רק כתוביות לכבדי שמיעה (שולח hi=true).',
  'plugins.bazarr.cfg.sources':
    'רשימה מופרדת בפסיקים של ספקים לתשאול, או `all`.',
  'plugins.bazarr.quota.402':
    '**402 או 429** (יתרה ריקה או הגעה למכסה היומית): Bazarr רושם הערה עם קישור ל-[store.wyzie.io](https://store.wyzie.io) ולא מחזיר תוצאות, כך שהוא נסוג בנקיות לספקים האחרים שלכם. שום דבר לא קורס.',
  'plugins.bazarr.quota.401':
    '**401** (מפתח חסר) או **403** (מפתח לא מוכר, או מפתח מושהה): Bazarr מציג שגיאת אימות כך שתדעו לבדוק את המפתח או להזין אותו מחדש.',
  'plugins.bazarr.ts.missing':
    '**Wyzie לא מופיע ברשימת הספקים.** בדקו מחדש את שלב ההתקנה שעורך את `extensions.py`; הערך חייב להיות בשניהם `provider_registry` ו-`provider_manager`, ולאחר מכן הפעילו מחדש את Bazarr.',
  'plugins.bazarr.ts.none':
    '**לא נמצאו כתוביות.** ודאו שלפריט יש מזהה IMDB ב-Bazarr ושלשפות שהפעלתם יש כתוביות עבורו. צמצמו את `sources` רק אם אתם מתכוונים לכך.',
  'plugins.bazarr.ts.settings':
    '**שדות הגדרות חסרים.** שלב ההגדרות לא הוחל עבור גרסת ה-Bazarr שלכם; השוו מול בלוק הגדרות של ספק עובד והפעילו מחדש.',

  'plugins.kodi.intro':
    'שירות כתוביות עבור **Kodi 19+ (Matrix ואילך)**, LibreELEC ו-CoreELEC. הוא משתמש בנקודת ההרחבה הסטנדרטית `xbmc.subtitle.module` של Kodi, כך שהוא מופיע בכל מקום שבו Kodi מחפש כתוביות.',
  'plugins.kodi.before':
    'השיגו מפתח API חינמי של Wyzie בכתובת [store.wyzie.io/redeem](https://store.wyzie.io/redeem).',
  'plugins.kodi.repo.intro':
    'התקנת המאגר פעם אחת מאפשרת ל-Kodi **לעדכן אוטומטית** את התוסף עבורכם.',
  'plugins.kodi.repo.1':
    'הורידו את מתקין המאגר: [**repository.wyzie.zip**](https://kodi.wyzie.io/repository.wyzie.zip).',
  'plugins.kodi.repo.2':
    'ב-Kodi: **Settings, Add-ons, Install from zip file**, ולאחר מכן בחרו `repository.wyzie.zip`. אם Kodi חוסם זאת, הפעילו תחילה **Settings, System, Add-ons, Unknown sources**.',
  'plugins.kodi.repo.3':
    '**Settings, Add-ons, Install from repository, Wyzie Repository, Subtitle services, Wyzie Subs, Install.**',
  'plugins.kodi.repo.4':
    '**Settings, Player, Language, Default subtitle service**, ולאחר מכן בחרו **Wyzie Subs**.',
  'plugins.kodi.repo.5':
    'פתחו את הגדרות התוסף Wyzie Subs והדביקו את **מפתח ה-API** שלכם.',
  'plugins.kodi.zip.intro':
    'השתמשו בזה אם אתם מעדיפים לא להוסיף את המאגר. שימו לב: התקנת zip **אינה** מתעדכנת אוטומטית.',
  'plugins.kodi.zip.1':
    'השיגו את ה-zip של התוסף: `service.subtitles.wyzie-<version>.zip`. כדי לבנות אותו בעצמכם, שכפלו את [מאגר wyzie-plugins](https://github.com/wyziedevs/wyzie-plugins) (`git clone https://github.com/wyziedevs/wyzie-plugins.git`) וארזו את התיקייה `kodi/` שלו כך שה-zip יכיל את `addon.xml` בשורש שלו.',
  'plugins.kodi.zip.2':
    'ב-Kodi: **Settings, Add-ons, Install from zip file**, ולאחר מכן בחרו את ה-zip. אם Kodi חוסם זאת, הפעילו תחילה **Settings, System, Add-ons, Unknown sources**.',
  'plugins.kodi.zip.3':
    '**Settings, Player, Language, Default subtitle service**, ולאחר מכן בחרו **Wyzie Subs**.',
  'plugins.kodi.zip.4':
    'פתחו את הגדרות התוסף Wyzie Subs והדביקו את **מפתח ה-API** שלכם.',
  'plugins.kodi.cfg.key': 'מפתח ה-Wyzie שלכם. נדרש.',
  'plugins.kodi.cfg.hi': 'מחזיר רק כתוביות לכבדי שמיעה (שולח hi=true).',
  'plugins.kodi.cfg.langs':
    'השפות נלקחות משפות הכתוביות שנבחרו ב-Kodi וממופות אוטומטית ל-ISO 639-1.',
  'plugins.kodi.matching.1':
    'בזמן שמשהו מתנגן, Kodi חושף את מספר ה-IMDB, העונה והפרק. התוסף קורא אותם, מתשאל את `sub.wyzie.io/search`, ומחזיר כתוביות מתאימות. מכיוון ש-Wyzie מונע מזהים (IMDB ו-TMDB), ההתאמות מדויקות הן לסרטים והן לסדרות.',
  'plugins.kodi.matching.2':
    '**חיפוש ידני** מציג כרגע התראה ואינו עושה דבר, מכיוון ש-Wyzie מתאים לפי מזהים, לא כותרים. חיפוש מכותר למזהה נמצא במפת הדרכים. בינתיים, תנו ל-Kodi לחפש אוטומטית במהלך ההפעלה.',
  'plugins.kodi.quota':
    'תגובת 402 או 429 מציגה התראת toast של Kodi המפנה אתכם ל-[store.wyzie.io](https://store.wyzie.io) כדי לטעון מחדש או להירשם.',
  'plugins.kodi.ts.notoffered':
    '**Wyzie אינו מוצע במהלך ההפעלה.** ודאו שהוא מוגדר כ-**Default subtitle service** ושלפריט המתנגן יש מזהה IMDB.',
  'plugins.kodi.ts.key':
    '**מפתח לא תקין.** פתחו מחדש את הגדרות התוסף והדביקו שוב את המפתח שלכם.',
  'plugins.kodi.ts.episode':
    '**שום דבר עבור פרק.** ודאו של-Kodi יש מטא-נתונים נכונים של עונה ופרק עבור הקובץ; פריטי ספרייה שנגרדו עובדים הכי טוב.',
};

export default messages;
