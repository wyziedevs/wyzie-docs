const messages: Record<string, string> = {
  // Navigation
  'nav.language': 'שפה',

  // Index / Landing Page
  'index.subtitle':
    'Wyzie היא ערכת כלים בקוד פתוח לאיסוף כתוביות וכל מה שביניהן.',
  'index.cta.start': 'התחל עכשיו',
  'index.cta.store': 'בדוק את זה',

  'index.card.keys.title': 'מפתחות API חינמיים',
  'index.card.keys.body':
    'קבל מפתח API חינמי בכתובת store.wyzie.io/redeem עם אימות Gmail מהיר. 1,000 בקשות ביום ללא עלות. תוכניות בתשלום זמינות לשימוש אינטנסיבי יותר.',

  'index.card.ai.title': 'תרגום בינה מלאכותית',
  'index.card.ai.body':
    'תרגם כל כתובית ליותר מ-80 שפות לפי דרישה. מזרים רמז אחר רמז כך שהניגון יכול להתחיל תוך שניות. זמין במפתחות Pro.',

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
    'Wyzie Subs הוא API חינמי וחופשי לאיסוף כתוביות בקוד פתוח. ישנן שתי דרכים לשלוח בקשות ל-API: באמצעות חבילת ה-NPM שלנו או ישירות מה-Wyzie API עצמו. אני ממליץ להשתמש בחבילה שלנו, אך חלק עשויים למצוא את הטיפוסים מסורבלים. על מנת להשתמש ב-API, עליך לקבל את ההחלטה הזו תחילה.',
  'subs.intro.note.ai':
    'תרגום בינה מלאכותית זמין עבור מפתחות Pro. כל כותרת, יותר מ-80 שפות יעד, מוזרם בזמן שהמתרגם עובד.',
  'subs.intro.important.apikey':
    'נדרש מפתח API לכל הבקשות. קבל מפתח חינמי בכתובת [store.wyzie.io/redeem](https://store.wyzie.io/redeem) (אימות Gmail, 1,000 בקשות ביום). לשימוש אינטנסיבי יותר, זמינות [תוכניות Pro ותוספות](https://store.wyzie.io). ראה את דף מפתחות API לפרטים.',
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
    'Wyzie Worker הוא פרוקסי Cloudflare Worker קל שמזריק את מפתח ה-API שלך בצד השרת. פרוס אותו ל-Cloudflare Workers והגדר את המפתח שלך כמשתנה הסביבה NITRO_API_TOKEN. לאחר מכן הפנה את בקשות הלקוח שלך לכתובת ה-Worker שלך במקום sub.wyzie.io - ה-Worker מעביר אותן עם המפתח שלך מצורף.',
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
  'subs.sources.using.bullet2': 'מקור ברירת המחדל הוא opensubtitles אם לא צוין',
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
    'לא מאסף. SRT מתורגם על ידי בינה מלאכותית ונוצר לפי דרישה מכתוביית המקור הטובה ביותר הזמינה. ראה את מדריך תרגום הבינה המלאכותית לפרטים מלאים.',
  'subs.sources.ai.content': 'כל דבר ש-Wyzie יכול למצוא עבורו SRT',
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
  'subs.pkg.param.hi': 'ערך Boolean לכתוביות לכבדי שמיעה.',
  'subs.pkg.param.source': 'ספקי כתוביות לשאילתה (all לכל מקור מופעל).',
  'subs.pkg.param.release': 'פילטרי שחרור/scene (מקבל רשימה).',
  'subs.pkg.param.filename': 'פילטרי שם קובץ; כינויים file ו-fileName נתמכים.',
  'subs.pkg.param.origin': 'פילטר מקור תוכן (לדוגמה, WEB, BLURAY, DVD).',
  'subs.pkg.param.key':
    'מפתח ה-API שלך (נדרש). קבל אחד חינם בכתובת store.wyzie.io/redeem.',
  'subs.pkg.param.refresh': 'עקוף מטמון ושלוף תוצאות רעננות מהמקורות.',

  'subs.pkg.helpers':
    'החבילה כוללת גם עוזרי TMDB קלים: searchTmdb, getTvDetails ו-getSeasonDetails למציאת מזהים מהירה לפני פנייה ל-/search. בנוסף, ניתן להשתמש ב-getSources לשליפת רשימת מקורות הכתוביות המופעלים כעת.',
  'subs.pkg.types.h3': 'טיפוסים',
  'subs.pkg.type.search': 'כל הפרמטרים החוקיים שה-API מזהה.',
  'subs.pkg.type.query':
    'כל הפרמטרים (אופציונליים וחובה) הזמינים עבור wyzie-subs API.',
  'subs.pkg.type.subtitle':
    'כל הערכים המוחזרים מה-API עם הטיפוסים המתאימים להם.',
  'subs.pkg.type.sources': 'סוג התגובה מנקודת הקצה /sources.',
  'subs.pkg.types.end':
    'הטיפוסים שלנו פשוטים מאוד ומתועדים היטב. עיין בקובץ types.ts המקושר במאגר GitHub.',
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
  'subs.direct.param.hi': 'האם להעדיף כתוביות לכבדי שמיעה.',
  'subs.direct.param.encoding': 'פילטר קידוד תווים.',
  'subs.direct.param.source':
    'ספקי כתוביות לשאילתה (all שואל כל מקור מופעל; ברירת מחדל opensubtitles).',
  'subs.direct.param.release': 'פילטרי שחרור או שם scene (מופרד בפסיקים).',
  'subs.direct.param.file':
    'פילטרי שם קובץ (כינויים: file, filename, fileName).',
  'subs.direct.param.origin':
    'פילטר מקור תוכן, מופרד בפסיקים (לדוגמה, WEB, BLURAY, DVD).',
  'subs.direct.param.key':
    'מפתח ה-API שלך (נדרש). קבל אחד חינם בכתובת store.wyzie.io/redeem.',
  'subs.direct.param.refresh':
    'עקוף מטמון ושלוף תוצאות רעננות. השתמש כאשר מקורות עשויים להתעדכן.',
  'subs.direct.important.imdb':
    "בעת שימוש ב-IMDB ID, וודא שהתווים הראשונים ('tt') כלולים בתחילת המזהה.",

  'subs.direct.data.h3': 'נתונים מוחזרים',
  'subs.direct.data.id': 'ה-ID של קובץ הכתובית.',
  'subs.direct.data.url': 'ה-URL לקובץ הכתובית.',
  'subs.direct.data.flagUrl': 'URL לדגל של אזור השפה.',
  'subs.direct.data.format': 'הפורמט של קובץ הכתובית.',
  'subs.direct.data.encoding': 'קידוד התווים של קובץ הכתובית.',
  'subs.direct.data.display': 'שפת הכתובית, עם אות ראשונה גדולה.',
  'subs.direct.data.language': 'קוד ISO 3166-2 של השפה.',
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

  // Subs Translate Page
  'subs.translate.title': 'תרגום כתוביות בבינה מלאכותית',
  'subs.translate.important':
    'תרגום בינה מלאכותית הוא **תכונת Pro**. כל תרגום עולה **100 בקשות** מיתרת המפתח שלך, מחויב גם על פגיעה במטמון וגם על תרגום חדש. מפתחות חינמיים אינם יכולים להשתמש בזה.',
  'subs.translate.p1':
    'Wyzie יכול לתרגם כל כתובית ליותר מ-80 שפות בזמן אמת. התרגומים מוזרמים בזמן שהמודל מייצר אותם, כך שהניגון יכול להתחיל תוך שנייה או שתיים במקום להמתין לכל הקובץ. התוצאות נשמרות במטמון למשך 30 יום, כך שהאדם השני שמבקש את אותו תרגום מקבל אותו באופן מיידי.',

  'subs.translate.ways.h2': 'שתי דרכים להשתמש בזה',
  'subs.translate.way1.h3': '1. בחר שפה מתגובת חיפוש',
  'subs.translate.way1.p1':
    'כל תגובת /search כוללת כעת רשומה נוספת אחת לכל שפה נתמכת עם "ai": true ו-url שמצביע ל-/translate. פשוט התייחס לשורות ה-AI כמו לכל שורת כתובית אחרת בממשק שלך: כאשר המשתמש לוחץ על אחת מהן, שלוף את ה-URL.',
  'subs.translate.way1.filter':
    'אם אתה רוצה להסתיר את שורות ה-AI מהממשק שלך, סנן אותן:',
  'subs.translate.way2.h3': '2. קרא ל-/translate ישירות',

  'subs.translate.param.id': 'TMDB או IMDB ID (נדרש).',
  'subs.translate.param.target':
    'שפת היעד בשמה המלא באנגלית (לדוגמה Spanish, Japanese, Brazilian Portuguese) (נדרש).',
  'subs.translate.param.seasonEpisode':
    'לטלוויזיה. שניהם חייבים להיות נוכחים יחד.',
  'subs.translate.param.key':
    'מפתח ה-API שלך. השתמש ב-tk במקום זה אם קיבלת את ה-URL מ-/search.',
  'subs.translate.param.tk':
    'אסימון חתום שמוחזר על ידי /search. שקול ל-key, אך לא חושף את המפתח הגולמי.',

  'subs.translate.headers.p':
    'גוף התגובה הוא קובץ SRT מוזרם כ-text/plain; charset=utf-8. כותרות תגובה שימושיות:',
  'subs.translate.header.xcache':
    'HIT-REDIS אם הוגש מהמטמון, MISS אם נוצר חדש.',
  'subs.translate.header.xsourcelang': 'שפת הכתובית שהמתרגם השתמש בה כקלט.',
  'subs.translate.header.xtargetlang': 'הד של פרמטר target שלך.',
  'subs.translate.header.xsourceprovider': 'איזה מאסף סיפק את כתובית המקור.',

  'subs.translate.how.h2': 'כיצד זה עובד',
  'subs.translate.how.step1':
    'Wyzie מחפש במקורות הרגילים כתובית SRT, מעדיף אנגלית כאשר זמינה.',
  'subs.translate.how.step2':
    'ה-SRT מחולק לחלקים של 50 רמזים ומתורגם באופן רציף. כל חלק נשמר במטמון בנפרד כשהוא מסתיים.',
  'subs.translate.how.step3':
    'הפלט מוזרם אליך רמז אחר רמז. נגנים שמקבלים גוף SRT מוזרם יכולים להתחיל להציג את השורות הראשונות לפני שהשאר מסתיים.',
  'subs.translate.how.step4':
    'התרגום המלא נשמר במטמון ב-Redis למשך 30 יום, עם מפתח לפי id, season, episode ו-target.',

  'subs.translate.languages.h2': 'שפות יעד נתמכות',
  'subs.translate.languages.p':
    'יותר מ-80 שפות כולל כל השפות האירופיות, אסיאתיות, אפריקאיות והמזרח תיכוניות הגדולות. העבר את השם באנגלית (Spanish, ולא es). הרשימה מוחזרת גם כשורות ai: true בכל תגובת /search, שהיא מקור האמת הקנוני.',

  'subs.translate.limitations.h2': 'מגבלות',
  'subs.translate.limit1':
    'תרגום בינה מלאכותית דורש מקור SRT. כותרות שבהן כל כתובית זמינה היא .ass, .vtt או פורמט אחר יחזירו 404 No SRT found.',
  'subs.translate.limit2':
    'איכות התרגום תלויה בכתובית המקור. מקור עם תזמון גרוע או שגיאות כתיב מייצר תרגום עם תזמון גרוע או שגיאות כתיב.',
  'subs.translate.limit3':
    'חלק מהמשתמשים עשויים לרצות לסנן לחלוטין שורות AI. סנן על ai === false בלקוח שלך.',
  'subs.translate.limit4':
    'תרגומים מחויבים גם על פגיעות במטמון. בין אם נוצר חדש או הוגש מהמטמון בן 30 הימים, כל בקשת /translate עולה 100 בקשות.',

  // Subs API Keys Page
  'subs.keys.title': 'מפתחות API',
  'subs.keys.p1':
    'Wyzie Subs דורש מפתח API לכל הבקשות. רמה חינמית מכסה את רוב מקרי השימוש; תוכניות בתשלום מטפלות בשימוש כבד יותר.',

  'subs.keys.tiers.h2': 'רמות',
  'subs.keys.tier.free': 'חינמי (נדרש Gmail)',
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
  'subs.keys.free.step2': 'הזן כתובת Gmail (רק Gmail מתקבל לרמה החינמית).',
  'subs.keys.free.step3': 'הזן את הקוד בן 6 הספרות ששלחנו לך במייל.',
  'subs.keys.free.step4': 'תקבל מפתח API שנראה כך: wyzie-abc123...',
  'subs.keys.free.gmail':
    'כל כתובת Gmail יכולה לממש מפתח חינמי אחד בלבד. כבר היה לך מפתח חינמי קשור לאותו מייל? אימות מחדש פשוט מחזיר את המפתח הקיים שלך.',

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
    'השתמש ב-[Wyzie Worker](https://github.com/wyziedevs/wyzie-worker): פרוקסי Cloudflare Worker חינמי שמחזיק את המפתח שלך בצד השרת. הצבע את הלקוח שלך לכתובת ה-Worker במקום sub.wyzie.io.',
  'subs.keys.protect.option2':
    'הפעל פרוקסי משלך: כל נקודת קצה בצד השרת שמוסיפה את המפתח לפני העברה ל-sub.wyzie.io עובדת. ראה את דף ההיכרות לדוגמת 10 שורות.',
  'subs.keys.protect.devtools':
    'אם המפתח מופיע בכרטיסיית רשת ב-DevTools, הוא חשוף. הנח שהוא ציבורי וסובב אותו על ידי שליחת מייל לתמיכה.',

  'subs.keys.using.h2': 'שימוש במפתח שלך',
  'subs.keys.using.p': 'הוסף &key=YOUR_KEY לכל בקשת API:',
  'subs.keys.using.npm.h3': 'חבילת NPM',

  'subs.keys.limit.h2': 'הגעה למגבלה',
  'subs.keys.limit.free':
    '**רמה חינמית** נוצלה -> ה-API מחזיר 429 עם כותרות X-RateLimit-Reset ו-Retry-After. מונה יומי מתאפס בחצות UTC.',
  'subs.keys.limit.paid':
    '**יתרה בתשלום** מוצתה -> ה-API מחזיר 402. הוסף יתרה בכתובת [store.wyzie.io/topup](https://store.wyzie.io/topup) או הפעל **תוספת אוטומטית** בלוח הבקרה שלך לטעינה מחדש אוטומטית כאשר היתרה שלך חוצה סף שאתה מגדיר.',

  'subs.keys.faq.h2': 'שאלות נפוצות',
  'subs.keys.faq.q1': 'איבדתי את המפתח שלי. אפשר לקבל חדש?',
  'subs.keys.faq.a1':
    'בקר בכתובת [store.wyzie.io](https://store.wyzie.io) והשתמש בתהליך "שכחתי מפתח" עם המייל הרשום שלך; נשלח מחדש את המפתח הקיים שלך.',
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
  'i6shark.intro.feature6':
    '**רשימת היתרים של מארח**: רשימת היתרים מובנית של דומיינים לאבטחה (ניתנת להגדרה בקוד)',
  'i6shark.intro.feature7':
    '**תחזוקה אוטומטית**: שטיפה תקופתית של בריכת ה-IP. אימות וניקוי subnet. אגירת חיבורים ואופטימיזציית keepalive.',
  'i6shark.intro.feature8':
    '**ביצועים גבוהים**: טיפול בו-זמני בבקשות עם אגירת buffer. פסקי זמן ומגבלות חיבור הניתנים להגדרה. ניהול יעיל של כתובות IPv6.',
  'i6shark.intro.feature9': '**מצב דיבאג**: רישום מפורט לפתרון בעיות וניטור',

  'i6shark.intro.requirements.h2': 'דרישות',
  'i6shark.intro.req1': 'Go 1.20 ומעלה',
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
};

export default messages;
