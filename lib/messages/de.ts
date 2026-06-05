const messages: Record<string, string> = {
  // Navigation
  'nav.language': 'Sprache',

  // Index / Landing Page
  'index.subtitle':
    'Wyzie ist ein Open-Source-Toolset zum Scrapen von Untertiteln und allem, was dazwischen liegt.',
  'index.cta.start': 'Jetzt starten',
  'index.cta.store': 'Schau es dir an',

  'index.card.keys.title': 'Kostenlose API-Keys',
  'index.card.keys.body':
    'Hol dir einen kostenlosen API-Key auf store.wyzie.io/redeem mit einer kurzen Gmail-Verifizierung. 1.000 Anfragen/Tag ohne Kosten. Bezahlpläne für höhere Nutzung verfügbar.',

  'index.card.ai.title': 'KI-Übersetzung',
  'index.card.ai.body':
    'Übersetze jeden Untertitel auf Abruf in 80+ Sprachen. Streamt Cue für Cue, sodass die Wiedergabe in Sekunden beginnen kann. Verfügbar für Pro-Keys.',

  'index.card.reliable.title': 'Zuverlässig',
  'index.card.reliable.body':
    'Wir sind stolz auf unsere konstante Verfügbarkeit und (fast) tägliche Updates sowie schnelles Caching.',

  'index.card.simple.title': 'Einfachheit neu definiert',
  'index.card.simple.body':
    'Einfach einzubinden, einfach zu benutzen. Wyzie ist so schlank wie möglich gestaltet.',

  // Donate Page
  'donate.title': 'Bitte spende',
  'donate.body':
    'Hallo, Wyzie ist momentan ziemlich auf Spenden angewiesen (die ich kaum bekomme), und ich bin 16 mit einem Teilzeitjob – manchmal übersteigt meine monatliche Rechnung für den Betrieb der öffentlichen API 100$. Ich kann das nicht weiter aufrechterhalten, wenn ich keine externe Hilfe bekomme. Es tut mir wirklich leid, aber dieses Projekt ist über das hinausgewachsen, was ich ursprünglich aus eigener Tasche finanzieren konnte.',
  'donate.cta': 'Wyzie unterstützen',

  // Subs Intro Page
  'subs.intro.title': 'Einführung in Wyzie Subs',
  'subs.intro.p1':
    'Wyzie Subs ist eine freie und quelloffene API zum Scrapen von Untertiteln. Es gibt zwei Möglichkeiten, Anfragen an die API zu stellen: über unser NPM-Paket oder durch direktes Abrufen der Wyzie API. Ich empfehle die Verwendung unseres Pakets, aber manche finden die Typen umständlich. Um die API nutzen zu können, musst du diese Entscheidung zunächst treffen.',
  'subs.intro.note.ai':
    'KI-Übersetzung ist für Pro-Keys live. Jeder Titel, 80+ Zielsprachen, gestreamt während der Übersetzer arbeitet.',
  'subs.intro.important.apikey':
    'Für alle Anfragen ist ein API-Key erforderlich. Erhalte einen kostenlosen Key auf [store.wyzie.io/redeem](https://store.wyzie.io/redeem) (Gmail-Verifizierung, 1.000 Anfragen/Tag). Für höhere Nutzung sind [Pro- und Aufladepläne](https://store.wyzie.io) verfügbar. Siehe die API-Keys-Seite für Details.',
  'subs.intro.note.npm':
    'Wir empfehlen das NPM-Paket dringend, wenn du mit TypeScript oder JavaScript vertraut bist',
  'subs.intro.btn.npm': 'NPM-Paket',
  'subs.intro.btn.direct': 'Direktes Abrufen',

  'subs.intro.protect.h2': 'Deinen API-Key schützen',
  'subs.intro.protect.important':
    '**Realer Vorfall:** Wir haben gesehen, wie Entwickler ihren Key direkt in das Frontend-JavaScript einer Streaming-Site eingefügt haben. Innerhalb weniger Stunden hat eine fremde Person ihn aus dem JS-Bundle extrahiert und genutzt, bis das Tageslimit oder das bezahlte Guthaben erschöpft war. Auf diese Weise verlorenes Kontingent wird nicht erstattet und liegt gemäß unseren Nutzungsbedingungen in der Verantwortung des Key-Inhabers.',
  'subs.intro.protect.p1':
    'Dein API-Key sollte privat bleiben und **niemals** erscheinen in:',
  'subs.intro.protect.item1':
    'Browser-JavaScript (alles, das an einen Script-Tag ausgeliefert wird)',
  'subs.intro.protect.item2':
    'Mobilen App-Binärdateien (Android/iOS, einschließlich obfuskierter)',
  'subs.intro.protect.item3': 'Browser-Erweiterungen',
  'subs.intro.protect.item4':
    'Electron / Desktop-Apps, die an Endnutzer verteilt werden',
  'subs.intro.protect.item5':
    'Öffentlichen Git-Repositories, Gists, Paste-Sites oder Screenshots',
  'subs.intro.protect.p2':
    'Wenn der Key das Gerät eines Endnutzers erreicht, behandle ihn als öffentlich. Es gibt zwei sichere Vorgehensweisen:',
  'subs.intro.protect.opt1.h3': 'Option 1: Wyzie Worker verwenden',
  'subs.intro.protect.opt1.p1':
    'Wyzie Worker ist ein schlanker Cloudflare Worker-Proxy, der deinen API-Key serverseitig injiziert. Deploye ihn auf Cloudflare Workers und setze deinen Key als Umgebungsvariable NITRO_API_TOKEN. Richte dann deine Client-Anfragen an deine Worker-URL statt an sub.wyzie.io – der Worker leitet sie mit deinem Key weiter.',
  'subs.intro.protect.opt2.h3': 'Option 2: Eigenen Proxy bauen',
  'subs.intro.protect.opt2.p1':
    'Wenn du Wyzie Worker nicht nutzen möchtest, kannst du in jedem Framework einen einfachen serverseitigen Proxy bauen. Das Prinzip ist dasselbe: Dein Backend empfängt Anfragen vom Client, hängt den API-Key an und leitet sie an sub.wyzie.io weiter.',

  // Subs Sources Page
  'subs.sources.title': 'Wyzie Subs Quellen',
  'subs.sources.p1':
    'Wyzie Subs aggregiert Untertitel von mehreren Anbietern. Die Verfügbarkeit der Quellen kann je nach Anbieterstatus oder Ausfällen variieren. Ich bin immer auf der Suche nach neuen Quellen – melde dich gerne, um eine vorzuschlagen.',

  'subs.sources.using.h2': 'Quellen verwenden',
  'subs.sources.using.bullet1':
    'Verwende source=all, um alle aktivierten Quellen gleichzeitig abzufragen',
  'subs.sources.using.bullet2':
    'Standardquelle ist opensubtitles, wenn keine angegeben ist',
  'subs.sources.using.bullet3':
    'Mehrere Quellen können als kommagetrennte Liste angegeben werden',

  'subs.sources.api.h2': 'API-Endpunkt',
  'subs.sources.api.p1':
    'Du kannst die Liste der aktuell aktivierten Quellen und ihre Plantierungen programmatisch abrufen:',
  'subs.sources.api.free':
    'Quellen, die jeder Key abfragen kann, einschließlich kostenloser Keys.',
  'subs.sources.api.paid': 'Quellen, die einen Pro-Key erfordern.',
  'subs.sources.api.allFree':
    'Wenn true, steht jede aktivierte Quelle allen Keys zur Verfügung und paid ist leer.',

  'subs.sources.scope.h3': 'Einschränkung auf einen Key',
  'subs.sources.scope.p1':
    'Übergib deinen API-Key, um die Quellen zu erhalten, die dieser Key tatsächlich nutzen kann:',
  'subs.sources.scope.p2':
    'Dies fügt key-spezifische Felder hinzu, ohne eine Anfrage aus deinem Kontingent zu verbrauchen:',
  'subs.sources.scope.available':
    'Quellen, die dieser Key derzeit abfragen kann.',
  'subs.sources.scope.restricted':
    'Aktivierte Quellen, die dieser Key nicht abfragen kann (auf Pro upgraden, um sie freizuschalten).',
  'subs.sources.scope.keyType': 'free oder paid.',
  'subs.sources.scope.keyValid':
    'Ist false, wenn der Key falsch formatiert oder nicht gefunden wurde, und null, wenn der Key nicht verifiziert werden konnte (in diesem Fall werden available und restricted weggelassen).',

  'subs.sources.details.h2': 'Quellendetails',

  'subs.sources.opensubtitles.desc':
    'Die größte Untertiteldatenbank im Internet. Unterstützt Filme und TV-Serien in einer breiten Palette von Sprachen. Verwendet die offizielle OpenSubtitles REST API.',
  'subs.sources.opensubtitles.content': 'Filme & TV-Serien',
  'subs.sources.opensubtitles.languages':
    'Umfangreiche mehrsprachige Unterstützung',
  'subs.sources.opensubtitles.formats': 'SRT, ASS, SSA, VTT, SUB und weitere',

  'subs.sources.subdl.desc':
    'Eine Community-getriebene Untertitelseite mit einer breiten Auswahl an Filmen und TV-Serien.',
  'subs.sources.subdl.content': 'Filme & TV-Serien',
  'subs.sources.subdl.languages': 'Umfangreiche mehrsprachige Unterstützung',
  'subs.sources.subdl.formats': 'SRT, ASS, SSA, VTT, SUB und weitere',

  'subs.sources.subf2m.desc':
    'Ein großes Untertitel-Repository mit umfangreicher Sprachabdeckung für Filme und TV-Serien.',
  'subs.sources.subf2m.content': 'Filme & TV-Serien',
  'subs.sources.subf2m.languages': 'Umfangreiche mehrsprachige Unterstützung',
  'subs.sources.subf2m.formats': 'SRT, ASS, SSA, VTT, SUB und weitere',

  'subs.sources.podnapisi.desc':
    'Eine der ältesten Untertiteldatenbanken. Gut kuratierte Sammlung mit Filmen und TV-Serien.',
  'subs.sources.podnapisi.content': 'Filme & TV-Serien',
  'subs.sources.podnapisi.languages':
    'Umfangreiche mehrsprachige Unterstützung',
  'subs.sources.podnapisi.formats': 'SRT, ASS, SSA, VTT, SUB und weitere',

  'subs.sources.animetosho.desc':
    'Scrapt Anime-Untertitel-Anhänge direkt aus Torrent-Releases, die auf AnimeTosho indexiert sind.',
  'subs.sources.animetosho.content': 'Anime (TV-Serien)',
  'subs.sources.animetosho.languages':
    'Japanisch, Englisch und andere je nach Release',
  'subs.sources.animetosho.formats': 'ASS, SRT, SSA und weitere',
  'subs.sources.animetosho.note':
    'AnimeTosho ist für Mai 2026 zur Abschaltung geplant.',

  'subs.sources.gestdown.desc':
    'Stellt Untertitel für TV-Serien über die Gestdown API mit breiter Sprachunterstützung bereit.',
  'subs.sources.gestdown.content': 'Nur TV-Serien',
  'subs.sources.gestdown.languages': 'Umfangreiche mehrsprachige Unterstützung',
  'subs.sources.gestdown.formats': 'SRT, ASS und weitere',

  'subs.sources.jimaku.desc':
    'Scrapt jimaku.cc, ein Community-gepflegtes Repository von Anime-Untertiteldateien. Stimmt Titel über die TMDB API ab.',
  'subs.sources.jimaku.content': 'Anime (Filme & TV-Serien)',
  'subs.sources.jimaku.languages':
    'Hauptsächlich Japanisch; auch Englisch, Chinesisch und weitere je nach verfügbaren Dateien',
  'subs.sources.jimaku.formats': 'SRT, ASS, SSA, VTT, SUB und weitere',

  'subs.sources.kitsunekko.desc':
    'Scrapt Verzeichnislisten von kitsunekko.net, einem dedizierten Anime-Untertitel-Repository. Stimmt Titel über die TMDB API ab.',
  'subs.sources.kitsunekko.content': 'Anime (TV-Serien)',
  'subs.sources.kitsunekko.languages':
    'Englische und japanische Untertitelverzeichnisse',
  'subs.sources.kitsunekko.formats': 'SRT, ASS, SSA, VTT, SUB und weitere',

  'subs.sources.yify.desc':
    'Scrapt yifysubtitles.ch für Untertitel, die per IMDB ID abgeglichen werden. Nur Filme.',
  'subs.sources.yify.content': 'Nur Filme (TV-Serien werden nicht unterstützt)',
  'subs.sources.yify.languages':
    'Umfangreiche mehrsprachige Unterstützung (Albanisch, Arabisch, Englisch, Französisch, Spanisch und viele weitere)',
  'subs.sources.yify.formats': 'SRT (geliefert in einem ZIP-Archiv)',

  'subs.sources.ajatttools.desc':
    'Ruft Untertitel aus dem Ajatt-Tools/kitsunekko-mirror GitHub-Repository ab. Nach Medientyp organisiert. Stimmt Titel über die TMDB API ab.',
  'subs.sources.ajatttools.content': 'Anime & Drama (TV-Serien und Filme)',
  'subs.sources.ajatttools.languages':
    'Hauptsächlich Japanisch; auch Englisch, Chinesisch und weitere',
  'subs.sources.ajatttools.formats': 'SRT, ASS, SSA, VTT, SUB und weitere',

  'subs.sources.ai.desc':
    'Kein Scraper. KI-übersetztes SRT, das auf Anfrage aus dem besten verfügbaren Quell-Untertitel generiert wird. Vollständige Details im KI-Übersetzungs-Leitfaden.',
  'subs.sources.ai.content': 'Alles, wofür Wyzie ein SRT finden kann',
  'subs.sources.ai.languages': '80+ Zielsprachen',
  'subs.sources.ai.formats': 'Nur SRT',

  // Subs Package Page
  'subs.pkg.title': 'Das Wyzie NPM-Paket verwenden',
  'subs.pkg.p1':
    'Das Wyzie Subs NPM-Paket bietet eine einfache und benutzerfreundliche Schnittstelle zum Suchen und Abrufen von Untertiteln.',
  'subs.pkg.install.h2': 'Installation',
  'subs.pkg.important':
    'Für alle Anfragen ist ein API-Key erforderlich. Hol dir einen kostenlosen Key auf [store.wyzie.io/redeem](https://store.wyzie.io/redeem) und übergib ihn über den key-Parameter. Siehe die API-Keys-Seite für Details.',
  'subs.pkg.usage.h2': 'Verwendung',
  'subs.pkg.params.h3': 'Parameter',
  'subs.pkg.params.note':
    'Für weitere Informationen (oder wenn du nicht weiterkommst), besuche bitte die [Wyzie Subs Homepage](https://sub.wyzie.io).',

  'subs.pkg.param.tmdb':
    'TMDB ID des Films oder der TV-Serie (tmdb_id oder imdb_id ist erforderlich).',
  'subs.pkg.param.imdb':
    'IMDB ID des Films oder der TV-Serie (imdb_id oder tmdb_id ist erforderlich).',
  'subs.pkg.param.format':
    'Zurückzugebende Dateiformate (z. B. srt, ass). Akzeptiert eine Liste.',
  'subs.pkg.param.season': 'Staffelnummer (erfordert episode).',
  'subs.pkg.param.episode': 'Episodennummer (erfordert season).',
  'subs.pkg.param.language':
    'ISO 639-1-Codes für die Untertitelsprache. Akzeptiert eine Liste.',
  'subs.pkg.param.encoding': 'Zeichenkodierungsfilter (z. B. utf-8, latin-1).',
  'subs.pkg.param.hi': 'Boolean für Untertitel für Hörgeschädigte.',
  'subs.pkg.param.source':
    'Abzufragende Untertitelanbieter (all für jede aktivierte Quelle).',
  'subs.pkg.param.release': 'Release-/Scene-Filter (akzeptiert eine Liste).',
  'subs.pkg.param.filename':
    'Dateinamenfilter; die Aliase file und fileName werden unterstützt.',
  'subs.pkg.param.origin': 'Inhaltsherkunftsfilter (z. B. WEB, BLURAY, DVD).',
  'subs.pkg.param.key':
    'Dein API-Key (erforderlich). Hol dir einen kostenlos auf store.wyzie.io/redeem.',
  'subs.pkg.param.refresh':
    'Cache umgehen und frische Ergebnisse von den Quellen abrufen.',

  'subs.pkg.helpers':
    'Das Paket enthält auch schlanke TMDB-Helfer: searchTmdb, getTvDetails und getSeasonDetails zum schnellen Finden von IDs vor dem Aufruf von /search. Zusätzlich kann getSources verwendet werden, um die Liste der aktuell aktivierten Untertitelquellen abzurufen.',
  'subs.pkg.types.h3': 'Typen',
  'subs.pkg.type.search':
    'Alle gültigen Parameter, die von der API erkannt werden.',
  'subs.pkg.type.query':
    'Alle verfügbaren Parameter (optional und erforderlich) für die wyzie-subs API.',
  'subs.pkg.type.subtitle':
    'Alle zurückgegebenen Werte der API mit ihren jeweiligen Typen.',
  'subs.pkg.type.sources': 'Antworttyp des /sources-Endpunkts.',
  'subs.pkg.types.end':
    'Unsere Typen sind sehr einfach und gut dokumentiert. Schau dir die types.ts-Datei im verlinkten GitHub-Repository an.',
  'subs.pkg.config.h3': 'Konfiguration',
  'subs.pkg.config.p1':
    'Ein Nutzer hat auf Github nach einem konfigurierbaren API-Hostnamen gefragt, und ich dachte: klingt eigentlich nach einer guten Idee – also hier ist die Verwendung. Danke euch, Leute!',

  // Subs Direct Page
  'subs.direct.title': 'Wyzie Subs direkt abrufen',
  'subs.direct.caution':
    'Ich empfehle dringend, das NPM-Paket zu verwenden, da es einfacher und zuverlässiger ist.',
  'subs.direct.p1':
    'Wenn du dich gegen das NPM-Paket entschieden hast, dann lass uns loslegen. Ich werde nur die API-Parameter und die von der API zurückgegebenen Daten erläutern. Wie du die API anfragst, bleibt dir überlassen.',
  'subs.direct.important':
    'Für alle Anfragen ist ein API-Key erforderlich. Hol dir einen kostenlosen Key auf [store.wyzie.io/redeem](https://store.wyzie.io/redeem) und füge ihn als &key=YOUR_KEY in jede Anfrage ein. Siehe die API-Keys-Seite für Details.',

  'subs.direct.params.h3': 'Parameter',
  'subs.direct.param.id':
    'TMDB- oder IMDB-ID der Serie oder des Films (erforderlich).',
  'subs.direct.param.seasonEpisode':
    'Staffel und Episode für TV-Suchen. Beide müssen zusammen angegeben werden.',
  'subs.direct.param.language':
    'Sprachfilter (ISO 639-1-Codes). Mehrere Werte werden kommagetrennt angegeben.',
  'subs.direct.param.format':
    'Zurückzugebende Untertitelformate. Mehrere Werte erlaubt.',
  'subs.direct.param.hi':
    'Ob Untertitel für Hörgeschädigte bevorzugt werden sollen.',
  'subs.direct.param.encoding': 'Zeichenkodierungsfilter.',
  'subs.direct.param.source':
    'Abzufragende Untertitelanbieter (all fragt jede aktivierte Quelle ab; Standard opensubtitles).',
  'subs.direct.param.release':
    'Release- oder Szenennamen-Filter (kommagetrennt).',
  'subs.direct.param.file':
    'Dateinamenfilter (Aliase: file, filename, fileName).',
  'subs.direct.param.origin':
    'Inhaltsherkunftsfilter, kommagetrennt (z. B. WEB, BLURAY, DVD).',
  'subs.direct.param.key':
    'Dein API-Key (erforderlich). Hol dir einen kostenlos auf store.wyzie.io/redeem.',
  'subs.direct.param.refresh':
    'Cache umgehen und frische Ergebnisse abrufen. Verwenden, wenn Quellen möglicherweise aktualisiert wurden.',
  'subs.direct.important.imdb':
    "Bei Verwendung einer IMDB ID stelle sicher, dass die ersten zwei Zeichen ('tt') am Anfang der ID enthalten sind.",

  'subs.direct.data.h3': 'Zurückgegebene Daten',
  'subs.direct.data.id': 'Die ID der Untertiteldatei.',
  'subs.direct.data.url': 'Die URL zur Untertiteldatei.',
  'subs.direct.data.flagUrl': 'URL zur Flagge des Sprachgebiets.',
  'subs.direct.data.format': 'Das Format der Untertiteldatei.',
  'subs.direct.data.encoding': 'Die Zeichenkodierung der Untertiteldatei.',
  'subs.direct.data.display': 'Die Sprache des Untertitels, großgeschrieben.',
  'subs.direct.data.language': 'Der ISO 3166-2-Code der Sprache.',
  'subs.direct.data.media':
    'Der Name des Mediums, für das die Untertitel sind.',
  'subs.direct.data.isHearingImpaired':
    'Boolean, der angibt, ob der Untertitel für Hörgeschädigte geeignet ist.',
  'subs.direct.data.source':
    'Aus welcher Quelle der Untertitel gescrapt wurde.',
  'subs.direct.data.release': 'Primärer Release-Name.',
  'subs.direct.data.releases':
    'Andere Release-Namen, die mit dem Untertitel kompatibel sind.',
  'subs.direct.data.fileName': 'Originaldateiname, wenn verfügbar.',
  'subs.direct.data.downloadCount':
    'Anzahl der Downloads auf der Quellplattform (falls verfügbar).',
  'subs.direct.data.origin': 'Inhaltsherkunft (z. B. WEB, BluRay, DVD).',
  'subs.direct.data.matchedRelease':
    'Release-Wert, der deinem Filter entsprochen hat (wenn angegeben).',
  'subs.direct.data.matchedFilter':
    'Der vom Benutzer angegebene Filter, der übereinstimmte (wenn angegeben).',
  'subs.direct.data.ai':
    'true, wenn der Eintrag ein KI-übersetzter Untertitel ist, false bei normalen gescrapten Untertiteln. Verwende es als clientseitigen Filter, wenn du nur eines von beidem möchtest.',

  // Subs Translate Page
  'subs.translate.title': 'KI-Untertitelübersetzung',
  'subs.translate.important':
    'KI-Übersetzung ist ein **Pro-Feature**. Jede Übersetzung kostet **100 Anfragen** aus dem Guthaben deines Keys, die sowohl bei einem Cache-Treffer als auch bei einer frischen Übersetzung berechnet werden. Kostenlose Keys können es nicht nutzen.',
  'subs.translate.p1':
    'Wyzie kann jeden Untertitel spontan in 80+ Sprachen übersetzen. Übersetzungen werden gestreamt, während das Modell sie produziert, sodass die Wiedergabe innerhalb einer oder zwei Sekunden beginnen kann, anstatt auf die gesamte Datei zu warten. Ergebnisse werden 30 Tage lang gecacht, sodass die zweite Person, die dieselbe Übersetzung anfordert, sie sofort erhält.',

  'subs.translate.ways.h2': 'Zwei Nutzungsmöglichkeiten',
  'subs.translate.way1.h3': '1. Eine Sprache aus einer Suchantwort auswählen',
  'subs.translate.way1.p1':
    'Jede /search-Antwort enthält nun einen zusätzlichen Eintrag pro unterstützter Sprache mit "ai": true und einer URL, die auf /translate zeigt. Behandle die KI-Zeilen einfach wie jede andere Untertitelzeile in deiner Oberfläche: Wenn der Nutzer darauf klickt, rufe die URL ab.',
  'subs.translate.way1.filter':
    'Wenn du die KI-Zeilen aus deiner Oberfläche ausblenden möchtest, filtere sie heraus:',
  'subs.translate.way2.h3': '2. /translate direkt aufrufen',

  'subs.translate.param.id': 'TMDB- oder IMDB-ID (erforderlich).',
  'subs.translate.param.target':
    'Zielsprache als vollständiger englischer Name (z. B. Spanish, Japanese, Brazilian Portuguese) (erforderlich).',
  'subs.translate.param.seasonEpisode':
    'Für TV. Beide müssen zusammen angegeben werden.',
  'subs.translate.param.key':
    'Dein API-Key. Verwende stattdessen tk, wenn du die URL von /search erhalten hast.',
  'subs.translate.param.tk':
    'Signiertes Token, das von /search zurückgegeben wird. Entspricht key, gibt jedoch nicht den rohen Key preis.',

  'subs.translate.headers.p':
    'Der Antworttext ist eine SRT-Datei, die als text/plain; charset=utf-8 gestreamt wird. Nützliche Antwort-Header:',
  'subs.translate.header.xcache':
    'HIT-REDIS, wenn aus dem Cache bereitgestellt, MISS, wenn frisch generiert.',
  'subs.translate.header.xsourcelang':
    'Sprache des Untertitels, den der Übersetzer als Eingabe verwendet hat.',
  'subs.translate.header.xtargetlang': 'Echo deines target-Parameters.',
  'subs.translate.header.xsourceprovider':
    'Welcher Scraper den Quell-Untertitel geliefert hat.',

  'subs.translate.how.h2': 'So funktioniert es',
  'subs.translate.how.step1':
    'Wyzie durchsucht normale Quellen nach einem SRT-Untertitel und bevorzugt dabei Englisch, wenn verfügbar.',
  'subs.translate.how.step2':
    'Das SRT wird in Blöcke von 50 Cues aufgeteilt und sequenziell übersetzt. Jeder Block wird einzeln gecacht, sobald er fertig ist.',
  'subs.translate.how.step3':
    'Die Ausgabe wird dir Cue für Cue zurückgestreamt. Player, die einen Streaming-SRT-Body akzeptieren, können mit der Anzeige der ersten Zeilen beginnen, bevor der Rest fertig ist.',
  'subs.translate.how.step4':
    'Die vollständige Übersetzung wird 30 Tage in Redis gecacht, mit id, season, episode und target als Schlüssel.',

  'subs.translate.languages.h2': 'Unterstützte Zielsprachen',
  'subs.translate.languages.p':
    '80+ Sprachen, einschließlich aller wichtigen europäischen, asiatischen, afrikanischen und nahöstlichen Sprachen. Übergib den englischen Namen (Spanish, nicht es). Die Liste wird auch als ai: true-Zeilen in jeder /search-Antwort zurückgegeben, was die maßgebliche Quelle der Wahrheit ist.',

  'subs.translate.limitations.h2': 'Einschränkungen',
  'subs.translate.limit1':
    'KI-Übersetzung benötigt eine SRT-Quelle. Titel, bei denen jeder verfügbare Untertitel .ass, .vtt oder ein anderes Format ist, geben 404 No SRT found zurück.',
  'subs.translate.limit2':
    'Die Übersetzungsqualität hängt vom Quell-Untertitel ab. Ein schlecht zeitlich abgestimmter oder falsch getippter Quell-Untertitel erzeugt eine schlecht abgestimmte oder falsch getippte Übersetzung.',
  'subs.translate.limit3':
    'Manche Nutzer möchten KI-Zeilen ganz ausblenden. Filtere in deinem Client nach ai === false.',
  'subs.translate.limit4':
    'Übersetzungen werden auch bei Cache-Treffern berechnet. Ob frisch generiert oder aus dem 30-Tage-Cache bereitgestellt – jede /translate-Anfrage kostet 100 Anfragen.',

  // Subs API Keys Page
  'subs.keys.title': 'API-Keys',
  'subs.keys.p1':
    'Wyzie Subs benötigt einen API-Key für alle Anfragen. Ein kostenloser Tarif deckt die meisten Anwendungsfälle ab; Bezahlpläne sind für intensivere Nutzung verfügbar.',

  'subs.keys.tiers.h2': 'Tarife',
  'subs.keys.tier.free': 'Kostenlos (Gmail erforderlich)',
  'subs.keys.tier.free.limit': '1.000 Anfragen / UTC-Tag',
  'subs.keys.tier.pro': '5$ einmalig',
  'subs.keys.tier.pro.limit': '400.000 Anfragen',
  'subs.keys.tier.topup': 'ab 0,0625$ / 5K',
  'subs.keys.tier.topup.limit': 'Wird zu deinem bezahlten Guthaben addiert',
  'subs.keys.tiers.end':
    'Pro und Aufladungen laufen nicht ab. Lieber wiederkehrend? Ein Abonnement für 32$/Monat bietet 6.000.000 Anfragen/Monat (nur Karte). Vollständige Preise und das Dashboard auf store.wyzie.io.',

  'subs.keys.free.h2': 'Einen kostenlosen Key erhalten',
  'subs.keys.free.p':
    'Besuche [store.wyzie.io/redeem](https://store.wyzie.io/redeem):',
  'subs.keys.free.step1': 'Löse ein kurzes Cloudflare Turnstile Captcha.',
  'subs.keys.free.step2':
    'Gib eine Gmail-Adresse ein (nur Gmail wird für den kostenlosen Tarif akzeptiert).',
  'subs.keys.free.step3':
    'Gib den 6-stelligen Code ein, den wir dir per E-Mail senden.',
  'subs.keys.free.step4':
    'Du erhältst einen API-Key, der wie wyzie-abc123... aussieht.',
  'subs.keys.free.gmail':
    'Jede Gmail-Adresse kann nur einen kostenlosen Key einlösen. Hattest du bereits einen kostenlosen Key für diese E-Mail? Eine erneute Verifizierung gibt einfach deinen bestehenden Key zurück.',

  'subs.keys.pro.h2': 'Auf Pro upgraden',
  'subs.keys.pro.p1':
    'Besuche [store.wyzie.io](https://store.wyzie.io) und kaufe mit derselben E-Mail-Adresse, die du für deinen kostenlosen Key verwendet hast. Dein bestehender wyzie-...-Key wird direkt aufgewertet, wobei 400K bezahlte Anfragen obendrauf hinzugefügt werden. Lieber wiederkehrend? Ein Abonnement für 32$/Monat fügt stattdessen ein monatliches Kontingent von 6.000.000 Anfragen hinzu (nur Karte).',
  'subs.keys.pro.p2':
    'Wenn du mit einer brandneuen E-Mail-Adresse (ohne vorherigen Key) kaufst, wird ein neuer wyzie-...-Key generiert und dir per E-Mail zugeschickt.',

  'subs.keys.protect.h2': 'Deinen Key vom Client fernhalten',
  'subs.keys.protect.important':
    '**Bette deinen API-Key niemals in clientseitigen Code ein.** Browser-JavaScript, mobile Apps, Browser-Erweiterungen, Electron-ähnliche Desktop-Apps und öffentliche Git-Repositories gelten alle als clientseitig. Alles, was du an einen Endnutzer auslieferst, kann von ihm untersucht werden – wir haben reale Fälle gesehen, in denen Nutzer ihren Key in das Frontend einer Streaming-Site eingefügt haben, nur um das Request-Guthaben innerhalb weniger Stunden durch einen Dritten, der das JS-Bundle gescrapt hatte, zu erschöpfen. Auf diese Weise verbrauchtes Kontingent wird nicht erstattet.',
  'subs.keys.protect.p2':
    'Zwei sichere Möglichkeiten, den Key aus einer Client-App zu nutzen:',
  'subs.keys.protect.option1':
    'Verwende [Wyzie Worker](https://github.com/wyziedevs/wyzie-worker): einen kostenlosen Cloudflare Worker-Proxy, der deinen Key serverseitig hält. Richte deinen Client auf die Worker-URL statt auf sub.wyzie.io.',
  'subs.keys.protect.option2':
    'Betreibe deinen eigenen Proxy: jeder Backend-Endpunkt, der den Key vor der Weiterleitung an sub.wyzie.io anhängt, funktioniert. Siehe die Einführungsseite für ein 10-Zeilen-Beispiel.',
  'subs.keys.protect.devtools':
    'Wenn der Key in einem Netzwerk-Tab in den DevTools erscheint, ist er exponiert. Gehe davon aus, dass er öffentlich ist, und rotiere ihn per E-Mail an den Support.',

  'subs.keys.using.h2': 'Deinen Key verwenden',
  'subs.keys.using.p': 'Hänge &key=YOUR_KEY an jede API-Anfrage an:',
  'subs.keys.using.npm.h3': 'NPM-Paket',

  'subs.keys.limit.h2': 'Das Limit erreichen',
  'subs.keys.limit.free':
    '**Kostenloses Kontingent** aufgebraucht -> API gibt 429 mit X-RateLimit-Reset- und Retry-After-Headern zurück. Der Tageszähler wird um UTC-Mitternacht zurückgesetzt.',
  'subs.keys.limit.paid':
    '**Bezahltes Guthaben** erschöpft -> API gibt 402 zurück. Lade auf [store.wyzie.io/topup](https://store.wyzie.io/topup) auf oder aktiviere die **automatische Aufladung** in deinem Dashboard, um automatisch aufzufüllen, wenn dein Guthaben einen von dir festgelegten Schwellenwert unterschreitet.',

  'subs.keys.faq.h2': 'FAQ',
  'subs.keys.faq.q1':
    'Ich habe meinen Key verloren. Kann ich einen neuen bekommen?',
  'subs.keys.faq.a1':
    'Besuche [store.wyzie.io](https://store.wyzie.io) und nutze den "Key vergessen"-Ablauf mit deiner registrierten E-Mail-Adresse; wir senden dir deinen bestehenden Key erneut zu.',
  'subs.keys.faq.q2': 'Kann ich einen Key in mehreren Projekten verwenden?',
  'subs.keys.faq.a2':
    'Ja. Dein Key funktioniert überall, wo du die API aufrufst.',
  'subs.keys.faq.q3': 'Läuft mein Key jemals ab?',
  'subs.keys.faq.a3':
    'Nein. Kostenlose und bezahlte Keys haben kein Ablaufdatum. Kostenlose Keys sind pro Tag begrenzt; bezahltes Guthaben bleibt bestehen, bis du es verbrauchst.',
  'subs.keys.faq.q4': 'Ist die automatische Aufladung sicher?',
  'subs.keys.faq.a4':
    'Du legst eine monatliche Ausgabenobergrenze fest. Wir berechnen nie mehr als das, und eine Einzel-Klick-Deaktivierung ist in jeder Bestätigungs-E-Mail sowie in deinem Dashboard vorhanden.',

  // Proxy Intro Page
  'proxy.intro.title': 'Einführung in Wyzie Proxy',
  'proxy.intro.note':
    'Die Produktionsversion von Wyzie Subs verwendet diesen Proxy nicht mehr, sondern nutzt stattdessen [i6.shark](https://github.com/wyziedevs/i6.shark).',
  'proxy.intro.p1':
    'Wyzie Proxy ist eine leistungsstarke Proxy-API, mit der du Anfragen an jede Website ohne CORS oder andere Einschränkungen stellen kannst. Da Wyzie Proxy mit Nitro erstellt wurde, kann es auf allen folgenden Plattformen gehostet werden: AWS Amplify, Azure, Cloudflare, Netlify, Stormkit, Vercel, Zeabur.',
  'proxy.intro.btn.hosting': 'Hosting',
  'proxy.intro.btn.check': 'Schau es dir an',

  // Proxy Hosting Page
  'proxy.hosting.title': 'Wyzie Proxy hosten',
  'proxy.hosting.p1':
    'Wyzie Proxy zu bauen ist dank Nitro einfacher als Atmen. Klone zunächst das Repository von Wyzie Proxy mit:',
  'proxy.hosting.p2': 'Installiere dann alle notwendigen Pakete mit:',
  'proxy.hosting.p3':
    'Nachdem alle Pakete installiert sind, kannst du den Proxy bauen:',
  'proxy.hosting.p4':
    'Die Ausgabe wird im Ordner /.output/server generiert. Wenn du auf Cloudflare Workers deployst, kopiere die Datei index.mjs in den Worker; andernfalls kannst du die Dateien wie gewohnt deployen.',

  // i6.shark Intro Page
  'i6shark.intro.title': 'Einführung in i6.shark',
  'i6shark.intro.p1':
    'i6.shark ist ein IPv6-Proxy-Server, mit dem du HTTP-Anfragen von zufällig generierten IPv6-Adressen in einem /48-Subnetz stellen kannst. Dies ist der Proxy, der Wyzie Subs derzeit in der Produktion antreibt.',
  'i6shark.intro.p2':
    'Ein /48-Subnetz hat 1.208.925.819.614.629.174.706.176 (1,2 x 10^24) IPv6-Adressen, was es praktisch unmöglich macht, es durch herkömmliches IP-Sperren zu blockieren. Die Verwendung eines einzelnen Subnetzes bedeutet, dass diejenigen, die dich wirklich blockieren wollen, deine ASN-Adresse blockieren können – sei also vorsichtig damit.',
  'i6shark.intro.btn.hosting': 'Hosting',
  'i6shark.intro.btn.github': 'GitHub',

  'i6shark.intro.features.h2': 'Features',
  'i6shark.intro.feature1':
    '**Zufällige IPv6-Generierung**: Erstellt zufällige IPv6-Adressen aus deinem /48-Präfix für jede Anfrage',
  'i6shark.intro.feature2':
    '**Vollständige HTTP-Methodenunterstützung**: GET, POST, PUT, DELETE und alle anderen HTTP-Methoden',
  'i6shark.intro.feature3':
    '**HMAC-SHA256-Authentifizierung**: Sichere API-Key-Authentifizierung mit User-Agent-basierten Tokens',
  'i6shark.intro.feature4':
    '**Intelligentes IP-Pool-Management**: Automatische IP-Rotation mit konfigurierbarer Pool-Größe. Intelligentes IP-Lifecycle-Management. Anfragenzählung pro IP. Bereinigung ungenutzter IPs basierend auf einem Inaktivitätsschwellenwert.',
  'i6shark.intro.feature5':
    '**Erweitertes Anfragen-Handling**: Weiterleitung benutzerdefinierter Header. Cloudflare- und CDN-Header-Stripping. Unterstützung für mehrere URL-Parameter-Formate. Optionaler Fallback auf die Standard-System-IP.',
  'i6shark.intro.feature6':
    '**Host-Whitelisting**: Eingebaute Domain-Whitelist für Sicherheit (im Code konfigurierbar)',
  'i6shark.intro.feature7':
    '**Automatische Wartung**: Regelmäßiges Leeren des IP-Pools. Subnetz-Validierung und -Bereinigung. Connection Pooling und Keepalive-Optimierung.',
  'i6shark.intro.feature8':
    '**Hohe Leistung**: Gleichzeitige Anfragenverarbeitung mit Buffer-Pooling. Konfigurierbare Timeouts und Verbindungslimits. Effizientes IPv6-Adress-Management.',
  'i6shark.intro.feature9':
    '**Debug-Modus**: Detailliertes Logging zur Fehlersuche und Überwachung',

  'i6shark.intro.requirements.h2': 'Anforderungen',
  'i6shark.intro.req1': 'Go 1.20 oder höher',
  'i6shark.intro.req2':
    'Linux/Unix-System mit IPv6-Unterstützung (vorzugsweise Ubuntu)',
  'i6shark.intro.req3':
    'Root-Rechte (für Port-80-Bindung und IPv6-Manipulation)',
  'i6shark.intro.req4': 'IPv6 /48-Subnetzzuweisung von deinem Hosting-Anbieter',

  'i6shark.intro.providers.h2': 'Hosting-Anbieter',
  'i6shark.intro.providers.p1':
    'Die folgenden Anbieter sind dafür bekannt, /48 IPv6-Subnetze anzubieten:',

  // i6.shark Hosting Page
  'i6shark.hosting.title': 'i6.shark hosten',
  'i6shark.hosting.p1':
    'Das Einrichten von i6.shark erfordert einen VPS mit einem /48 IPv6-Subnetz. Einmal konfiguriert, läuft es autonom mit minimalem Wartungsaufwand.',

  'i6shark.hosting.steps.h2': 'Schritte',
  'i6shark.hosting.step1': 'Klone das Repository nach /opt/i6.shark:',
  'i6shark.hosting.step2': 'Konfiguriere die Konstanten in src/consts.go:',
  'i6shark.hosting.step2.note':
    'Aktualisiere SharedSecret, IPv6Prefix und Interface entsprechend deines Servers. Die übrigen Abstimmungskonstanten haben sinnvolle Standardwerte und müssen in der Regel nicht geändert werden.',
  'i6shark.hosting.step3': 'Baue die Anwendung:',
  'i6shark.hosting.step4': 'Erstelle den systemd-Dienst:',
  'i6shark.hosting.step5': 'Dienst aktivieren und starten:',
  'i6shark.hosting.step5.check': 'Status prüfen:',
  'i6shark.hosting.post':
    'Der Proxy-Server wird nun automatisch beim Start ausgeführt und sich selbst neu starten, wenn er abstürzt.',

  'i6shark.hosting.daily.h2': 'Täglicher Neustart (Optional)',
  'i6shark.hosting.daily.p':
    'Füge einen Cron-Job hinzu, um den Server täglich zu einer zufälligen Zeit neu zu starten:',

  'i6shark.hosting.auth.h2': 'API-Authentifizierung',
  'i6shark.hosting.auth.p':
    'API-Tokens werden mit HMAC-SHA256 und einem gemeinsamen geheimen Schlüssel generiert. Die Eingabe für die Schlüsselgenerierung ist der User-Agent-Header. Implementierungsdetails findest du in der validateAPIToken-Funktion im Quellcode.',

  // Plugins
  'plugins.common.required': 'Erforderlich',

  'plugins.index.intro':
    'Wyzie Subs lässt sich direkt in die Medien-Apps einbinden, die du bereits nutzt. Jedes Plugin spricht denselben `https://sub.wyzie.io/search`-Endpunkt an und benötigt einen kostenlosen **Wyzie API-Key**. Hol dir einen unter [store.wyzie.io](https://store.wyzie.io/#plans).',
  'plugins.index.tbl.stremio.for':
    'Schauen in Stremio auf Desktop, Mobilgerät oder TV',
  'plugins.index.tbl.stremio.install':
    'Gehostetes Add-on: Key einfügen, auf Installieren klicken',
  'plugins.index.tbl.bazarr.for':
    'Plex-, Jellyfin-, Emby-, Sonarr-, Radarr-Bibliotheken',
  'plugins.index.tbl.bazarr.install':
    'Drop-in-Provider für deine Bazarr-Instanz',
  'plugins.index.tbl.kodi.for': 'Kodi 19+, LibreELEC, CoreELEC',
  'plugins.index.tbl.kodi.install':
    'Installation aus Zip oder dem Wyzie-Repository',
  'plugins.index.use.stremio':
    'Nutze **Stremio**, wenn du innerhalb der Stremio-App schaust.',
  'plugins.index.use.bazarr':
    'Nutze **Bazarr**, wenn du Plex, Jellyfin oder Emby verwendest. Bazarr lädt Untertiteldateien auf die Festplatte und dein Medienserver übernimmt sie automatisch. Dies ist auch der empfohlene Weg für Plex und Jellyfin; es gibt kein separates natives Plugin.',
  'plugins.index.use.kodi':
    'Nutze **Kodi** für einen Kodi-nativen Untertiteldienst auf Android TV, einem Raspberry Pi oder einem Home-Theatre-PC.',
  'plugins.index.shared.sources':
    '**Quellen:** OpenSubtitles, SubDL und Podnapisi, zusammengeführt über Wyzie.',
  'plugins.index.shared.matching':
    '**Zuordnung:** Wyzie wird über IMDB- und TMDB-IDs sowie Staffel und Episode gesteuert, sodass die Treffer sowohl für Filme als auch für Serien präzise sind.',
  'plugins.index.shared.quota':
    '**Kontingent:** Wenn dein Key aufgebraucht ist, zeigt das Plugin eine freundliche Aufforderung mit Link zu [store.wyzie.io](https://store.wyzie.io), anstatt stillschweigend zu versagen. Lade auf oder abonniere, und du bist wieder dabei.',
  'plugins.index.shared.languages':
    '**Sprachen:** 100+, pro Plugin auswählbar.',
  'plugins.index.outro': 'Wähle oben deine Plattform aus, um loszulegen.',

  'plugins.stremio.intro':
    'Ein Ein-Klick-Untertitel-Add-on für [Stremio](https://www.stremio.com/). Es führt OpenSubtitles, SubDL und Podnapisi über Wyzie zusammen und funktioniert sowohl für Filme als auch für Serien, auf jeder Plattform, auf der Stremio läuft.',
  'plugins.stremio.before':
    'Du benötigst einen kostenlosen Wyzie API-Key. Hol dir einen unter [store.wyzie.io/redeem](https://store.wyzie.io/redeem), oder kaufe einen Pro-Key bzw. abonniere unter [store.wyzie.io](https://store.wyzie.io/#plans).',
  'plugins.stremio.install.1':
    'Öffne [stremio.wyzie.io/configure](https://stremio.wyzie.io/configure).',
  'plugins.stremio.install.2': 'Füge deinen **API-Key** ein.',
  'plugins.stremio.install.3':
    'Optional: Gib deine bevorzugten **Sprachen** als ISO 639-1-Codes ein, durch Kommas getrennt (zum Beispiel `en,es,fr`). Leer lassen für alle Sprachen.',
  'plugins.stremio.install.4':
    'Optional: Schalte **Untertitel für Hörgeschädigte** ein, wenn du sie bevorzugst.',
  'plugins.stremio.install.5':
    'Klicke auf **Installieren**. Stremio öffnet sich und bittet dich um Bestätigung; akzeptiere, und du bist fertig.',
  'plugins.stremio.install.after':
    'Dein Key und deine Einstellungen sind im Add-on kodiert, sodass nichts weiter einzurichten ist. Öffne einen beliebigen Film oder eine Episode und wähle einen Untertitel aus der Liste.',
  'plugins.stremio.cfg.key.f': 'API-Key',
  'plugins.stremio.cfg.key.d': 'Dein Wyzie-Key. Erforderlich.',
  'plugins.stremio.cfg.langs.f': 'Sprachen',
  'plugins.stremio.cfg.langs.d':
    'ISO 639-1-Codes, durch Kommas getrennt. Leer bedeutet alle Sprachen.',
  'plugins.stremio.cfg.hi.f': 'Hörgeschädigt',
  'plugins.stremio.cfg.hi.d':
    'Untertitel für Hörgeschädigte bevorzugen, wenn verfügbar.',
  'plugins.stremio.cfg.note':
    'Um diese später zu ändern, öffne erneut [stremio.wyzie.io/configure](https://stremio.wyzie.io/configure), passe an und installiere neu.',
  'plugins.stremio.local':
    'Öffne dann `http://127.0.0.1:7000/configure`, füge deinen Key ein und installiere in Stremio.',
  'plugins.stremio.quota':
    'Wenn dein Key sein Limit erreicht, zeigt das Add-on einen einzelnen Untertiteleintrag mit Link zu [store.wyzie.io](https://store.wyzie.io), damit du aufladen oder abonnieren kannst. Sobald du das tust, kehren die Untertitel sofort zurück.',
  'plugins.stremio.ts.none':
    '**Es erscheinen keine Untertitel.** Stelle sicher, dass der Titel in Stremio eine IMDB-ID hat (die meisten Katalogeinträge haben das) und dass für deine gewählten Sprachen tatsächlich Untertitel für diesen Titel existieren. Versuche, den Sprachfilter zu löschen, um alles zu sehen.',
  'plugins.stremio.ts.key':
    '**Ungültiger Key oder nichts lädt.** Öffne die Konfigurationsseite erneut und füge deinen Key neu ein; ein versehentliches Leerzeichen macht ihn unbrauchbar. Bestätige, dass der Key unter [store.wyzie.io/dashboard](https://store.wyzie.io/dashboard) funktioniert.',
  'plugins.stremio.ts.episode':
    '**Serien-Episode passt nicht.** Wyzie ordnet nach Staffel und Episode zu; stelle sicher, dass Stremio den richtigen Episodeneintrag abspielt, nicht eine allgemeine Serienseite.',

  'plugins.bazarr.intro':
    '[Bazarr](https://www.bazarr.media/) verwaltet Untertitel für **Plex, Jellyfin, Emby, Sonarr und Radarr** an einem Ort. Wenn du Wyzie als Provider hinzufügst, erhalten all diese Server über einen einzigen Key Zugriff auf OpenSubtitles, SubDL und Podnapisi.',
  'plugins.bazarr.note':
    'Dies ist der empfohlene Weg, um Wyzie mit Plex und Jellyfin zu nutzen. Bazarr lädt Untertiteldateien neben deine Medien, und dein Server übernimmt sie automatisch, sodass kein separates natives Plugin erforderlich ist.',
  'plugins.bazarr.before':
    'Hol dir einen kostenlosen Wyzie API-Key unter [store.wyzie.io/redeem](https://store.wyzie.io/redeem) und stelle sicher, dass du Zugriff auf deine Bazarr-Installationsdateien hast (typischer Docker-Pfad: `/opt/bazarr/bazarr/`).',
  'plugins.bazarr.install.1':
    'Kopiere `wyzie.py` nach `bazarr/subliminal_patch/providers/wyzie.py`.',
  'plugins.bazarr.install.2':
    'Bearbeite `bazarr/subliminal_patch/extensions.py` und füge `wyzie` zu **beiden** hinzu: `provider_registry` und `provider_manager`.',
  'plugins.bazarr.install.3':
    'Bearbeite `bazarr/list_subtitles.py` (oder `bazarr/config.py`, je nach Version), um die Einstellungen `api_key`, `prefer_hi` und `sources` verfügbar zu machen. Übernimm das Muster von einem bestehenden Provider wie `opensubtitlescom`.',
  'plugins.bazarr.install.4': 'Starte Bazarr neu.',
  'plugins.bazarr.install.5':
    'Gehe zu **Einstellungen, Provider, Wyzie**, füge deinen API-Key ein und speichere.',
  'plugins.bazarr.install.after':
    'Ein erstklassiger Pull Request, der diesen Provider in Bazarr einbringt, ist geplant. Bis dahin ist es eine Drop-in-Datei, die du deiner eigenen Installation hinzufügst.',
  'plugins.bazarr.cfg.key': 'Dein Wyzie-Key. Erforderlich.',
  'plugins.bazarr.cfg.hi': 'Untertitel für Hörgeschädigte bevorzugen.',
  'plugins.bazarr.cfg.sources':
    'Durch Kommas getrennte Liste der abzufragenden Provider, oder `all`.',
  'plugins.bazarr.quota.402':
    '**402 oder 429** (Guthaben leer oder Tageslimit erreicht): Bazarr protokolliert einen Hinweis mit einem Link zu [store.wyzie.io](https://store.wyzie.io) und liefert keine Ergebnisse, sodass es sauber auf deine anderen Provider zurückfällt. Nichts stürzt ab.',
  'plugins.bazarr.quota.401':
    '**401** (falscher Key): Bazarr zeigt einen Authentifizierungsfehler an, damit du weißt, dass du den Key erneut eingeben musst.',
  'plugins.bazarr.ts.missing':
    '**Wyzie erscheint nicht in der Provider-Liste.** Überprüfe erneut den Installationsschritt, der `extensions.py` bearbeitet; der Eintrag muss sowohl in `provider_registry` als auch in `provider_manager` stehen, danach starte Bazarr neu.',
  'plugins.bazarr.ts.none':
    '**Keine Untertitel gefunden.** Bestätige, dass der Eintrag in Bazarr eine IMDB-ID hat und dass die von dir aktivierten Sprachen Untertitel dafür haben. Schränke `sources` nur ein, wenn du das beabsichtigst.',
  'plugins.bazarr.ts.settings':
    '**Einstellungsfelder fehlen.** Der Einstellungsschritt wurde für deine Bazarr-Version nicht angewendet; vergleiche mit einem funktionierenden Provider-Einstellungsblock und starte neu.',

  'plugins.kodi.intro':
    'Ein Untertiteldienst für **Kodi 19+ (Matrix und neuer)**, LibreELEC und CoreELEC. Er nutzt Kodis Standard-Erweiterungspunkt `xbmc.subtitle.module`, sodass er überall dort erscheint, wo Kodi nach Untertiteln sucht.',
  'plugins.kodi.before':
    'Hol dir einen kostenlosen Wyzie API-Key unter [store.wyzie.io/redeem](https://store.wyzie.io/redeem).',
  'plugins.kodi.repo.intro':
    'Wenn du das Repository einmal installierst, kann Kodi das Add-on für dich **automatisch aktualisieren**.',
  'plugins.kodi.repo.1':
    'Lade den Repository-Installer herunter: [**repository.wyzie.zip**](https://kodi.wyzie.io/repository.wyzie.zip).',
  'plugins.kodi.repo.2':
    'In Kodi: **Einstellungen, Add-ons, Aus Zip-Datei installieren**, wähle dann `repository.wyzie.zip`. Wenn Kodi es blockiert, aktiviere zuerst **Einstellungen, System, Add-ons, Unbekannte Quellen**.',
  'plugins.kodi.repo.3':
    '**Einstellungen, Add-ons, Aus Repository installieren, Wyzie Repository, Untertiteldienste, Wyzie Subs, Installieren.**',
  'plugins.kodi.repo.4':
    '**Einstellungen, Player, Sprache, Standard-Untertiteldienst**, wähle dann **Wyzie Subs**.',
  'plugins.kodi.repo.5':
    'Öffne die Add-on-Einstellungen von Wyzie Subs und füge deinen **API-Key** ein.',
  'plugins.kodi.zip.intro':
    'Verwende dies, wenn du das Repository lieber nicht hinzufügen möchtest. Hinweis: Eine Zip-Installation wird **nicht** automatisch aktualisiert.',
  'plugins.kodi.zip.1':
    'Hol dir die Add-on-Zip: `service.subtitles.wyzie-<version>.zip`. Wenn du den Quellcode hast, packe den Ordner `kodi/` in eine Zip, sodass die Zip `addon.xml` in ihrem Wurzelverzeichnis enthält.',
  'plugins.kodi.zip.2':
    'In Kodi: **Einstellungen, Add-ons, Aus Zip-Datei installieren**, wähle dann die Zip. Wenn Kodi es blockiert, aktiviere zuerst **Einstellungen, System, Add-ons, Unbekannte Quellen**.',
  'plugins.kodi.zip.3':
    '**Einstellungen, Player, Sprache, Standard-Untertiteldienst**, wähle dann **Wyzie Subs**.',
  'plugins.kodi.zip.4':
    'Öffne die Add-on-Einstellungen von Wyzie Subs und füge deinen **API-Key** ein.',
  'plugins.kodi.cfg.key': 'Dein Wyzie-Key. Erforderlich.',
  'plugins.kodi.cfg.hi': 'Untertitel für Hörgeschädigte bevorzugen.',
  'plugins.kodi.cfg.langs':
    'Die Sprachen werden aus Kodis ausgewählten Untertitelsprachen übernommen und automatisch auf ISO 639-1 abgebildet.',
  'plugins.kodi.matching.1':
    'Während etwas abgespielt wird, stellt Kodi die IMDB-Nummer, Staffel und Episode bereit. Das Add-on liest diese aus, fragt `sub.wyzie.io/search` ab und liefert passende Untertitel. Da Wyzie ID-gesteuert ist (IMDB und TMDB), sind die Treffer sowohl für Filme als auch für Serien genau.',
  'plugins.kodi.matching.2':
    '**Die manuelle Suche** zeigt derzeit eine Benachrichtigung an und tut nichts, weil Wyzie nach IDs zuordnet, nicht nach Titeln. Eine Titel-zu-ID-Suche steht auf der Roadmap. Lass Kodi vorerst während der Wiedergabe automatisch suchen.',
  'plugins.kodi.quota':
    'Eine 402- oder 429-Antwort zeigt eine Kodi-Toast-Benachrichtigung an, die dich zu [store.wyzie.io](https://store.wyzie.io) leitet, um aufzuladen oder zu abonnieren.',
  'plugins.kodi.ts.notoffered':
    '**Wyzie wird während der Wiedergabe nicht angeboten.** Bestätige, dass es als **Standard-Untertiteldienst** festgelegt ist und dass der abgespielte Eintrag eine IMDB-ID hat.',
  'plugins.kodi.ts.key':
    '**Ungültiger Key.** Öffne die Add-on-Einstellungen erneut und füge deinen Key neu ein.',
  'plugins.kodi.ts.episode':
    '**Nichts für eine Episode.** Stelle sicher, dass Kodi korrekte Staffel- und Episoden-Metadaten für die Datei hat; gescrapte Bibliothekseinträge funktionieren am besten.',
};

export default messages;
