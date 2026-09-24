const messages: Record<string, string> = {
  // Navigation
  'nav.language': 'Sprache',

  // Index / Landing Page
  'index.subtitle':
    'Wyzie ist ein Toolset zum Scrapen von Untertiteln und allem, was dazwischen liegt.',
  'index.cta.start': 'Jetzt starten',
  'index.cta.store': 'Schau es dir an',

  'index.card.keys.title': 'Kostenlose API-Keys',
  'index.card.keys.body':
    'Hol dir einen kostenlosen API-Key auf store.wyzie.io/redeem mit einer kurzen E-Mail-Verifizierung (Gmail, Outlook, Yahoo, iCloud, Proton und andere große Anbieter). 1.000 Anfragen/Tag ohne Kosten. Bezahlpläne für höhere Nutzung verfügbar.',

  'index.card.ai.title': 'KI-Übersetzung',
  'index.card.ai.body':
    'Übersetze jeden Untertitel auf Abruf in 80+ Sprachen. Das SRT wird in der richtigen Reihenfolge zurückgestreamt, sobald Blöcke fertig sind, sodass die ersten Zeilen schnell ankommen. Verfügbar für Pro-Keys.',

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
    'Wyzie Subs ist eine API zum Scrapen von Untertiteln mit einem kostenlosen Tarif. Es gibt zwei Möglichkeiten, Anfragen an die API zu stellen: über unser NPM-Paket oder durch direktes Abrufen der Wyzie API. Ich empfehle die Verwendung unseres Pakets, aber manche finden die Typen umständlich. Um die API nutzen zu können, musst du diese Entscheidung zunächst treffen.',
  'subs.intro.important.apikey':
    'Für alle Anfragen ist ein API-Key erforderlich. Erhalte einen kostenlosen Key auf [store.wyzie.io/redeem](https://store.wyzie.io/redeem) (E-Mail-Verifizierung, 1.000 Anfragen/Tag). Für höhere Nutzung sind [Pro- und Aufladepläne](https://store.wyzie.io) verfügbar. Siehe die API-Keys-Seite für Details.',
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
    'Wyzie Worker ist ein schlanker Cloudflare Worker-Proxy, der deinen API-Key serverseitig injiziert. Deploye ihn auf Cloudflare Workers und setze zwei Secrets: `NITRO_API_TOKEN` (dein Wyzie API-Key) und `NITRO_WORKER_KEY` (ein Secret deiner Wahl). Jede Anfrage an den Worker muss `Authorization: Bearer <NITRO_WORKER_KEY>` senden; ohne diesen Header antwortet der Worker mit 401, und wenn `NITRO_WORKER_KEY` nicht gesetzt ist, lehnt er jede Anfrage mit 503 ab. Auch der Worker-Key muss serverseitig bleiben, rufe den Worker also von deinem eigenen Backend auf, niemals aus Browser- oder App-Code. Der Worker leitet jede Anfrage mit deinem angehängten API-Key an sub.wyzie.io weiter.',
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
    'Standardquelle ist charlie, wenn keine angegeben ist',
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
    'Kein Scraper. KI-übersetztes SRT, das auf Anfrage aus dem besten verfügbaren Quell-Untertitel generiert wird. Nur für Pro-Keys. Vollständige Details im KI-Übersetzungs-Leitfaden.',
  'subs.sources.ai.content':
    'Alles, wofür Wyzie einen Text-Untertitel finden kann',
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
  'subs.pkg.param.hi':
    'Wenn true, werden nur Untertitel für Hörgeschädigte zurückgegeben. Quellen, die Untertitel für Hörgeschädigte nicht kennzeichnen, liefern nichts.',
  'subs.pkg.param.source':
    'Abzufragende Untertitelanbieter nach Codename (all für jede aktive Quelle, die dein Key nutzen kann; Standard charlie).',
  'subs.pkg.param.release': 'Release-/Scene-Filter (akzeptiert eine Liste).',
  'subs.pkg.param.filename':
    'Dateinamenfilter; die Aliase file und fileName werden unterstützt.',
  'subs.pkg.param.origin': 'Inhaltsherkunftsfilter (z. B. WEB, BLURAY, DVD).',
  'subs.pkg.param.key':
    'Dein API-Key (erforderlich). Hol dir einen kostenlos auf store.wyzie.io/redeem.',
  'subs.pkg.param.refresh':
    'Cache umgehen und frische Ergebnisse von den Quellen abrufen.',

  'subs.pkg.helpers':
    'Das Paket enthält auch schlanke TMDB-Helfer: searchTmdb, getTvDetails und getSeasonDetails zum schnellen Finden von IDs vor dem Aufruf von /search. getSources gibt die Codenamen der aktiven Quellen zurück (eine Quelle, die von ihren Health-Checks pausiert wurde, fehlt, bis sie sich erholt hat), und getSourcesInfo gibt die vollständige /sources-Antwort mit den Tarifstufen zurück sowie, wenn ein Key übergeben wird, welche Quellen dieser Key nutzen kann. withDownloadOptions fügt der url eines Ergebnisses Download-Optionen hinzu (WebVTT-Ausgabe, Timing-Korrekturen, eine zweite Sprache und mehr).',
  'subs.pkg.types.h3': 'Typen',
  'subs.pkg.type.search':
    'Alle gültigen Parameter, die von der API erkannt werden.',
  'subs.pkg.type.query':
    'Alle verfügbaren Parameter (optional und erforderlich) für die wyzie-subs API.',
  'subs.pkg.type.subtitle':
    'Alle zurückgegebenen Werte der API mit ihren jeweiligen Typen.',
  'subs.pkg.type.sources': 'Antworttyp des /sources-Endpunkts.',
  'subs.pkg.type.download':
    'Optionen für withDownloadOptions: to, offset, fps, plain und (Pro) sdh, clean, dual.',
  'subs.pkg.type.sync':
    'Eingabe und Ergebnis von syncSubtitle (Wyzie Synced, Pro-Keys): welcher Untertitel (ein Ergebnis, dessen url oder tmdb_id/imdb_id mit language), die Sprachabschnitte (speech), die detectSpeech gefunden hat, oder die media-Datei sowie der synchronisierte Download-Link mit offset, fps und confidence. Siehe [Wyzie Synced](/subs/usage/synced).',
  'subs.pkg.types.end':
    'Unsere Typen sind sehr einfach und gut dokumentiert. Siehe [src/types.ts](https://github.com/wyziedevs/wyzie-lib/blob/main/src/types.ts) im wyzie-lib-Repository.',
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
    'Wenn true, werden nur Untertitel für Hörgeschädigte zurückgegeben (es ist ein Filter, keine Präferenz). Quellen, die Untertitel für Hörgeschädigte nicht kennzeichnen, liefern nichts.',
  'subs.direct.param.encoding': 'Zeichenkodierungsfilter.',
  'subs.direct.param.source':
    'Abzufragende Untertitelanbieter (all fragt jede Quelle ab, die dein Key nutzen kann; Standard charlie).',
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
  'subs.direct.param.page':
    'Zurückzugebende Seite, beginnend bei 1. Wird nur zusammen mit limit verwendet.',
  'subs.direct.param.limit':
    'Ergebnisse pro Seite (1 bis 200). Ohne diesen Parameter kommen alle Ergebnisse in einer einzigen Antwort zurück.',
  'subs.direct.important.imdb':
    "Bei Verwendung einer IMDB ID stelle sicher, dass die ersten zwei Zeichen ('tt') am Anfang der ID enthalten sind.",

  'subs.direct.data.h3': 'Zurückgegebene Daten',
  'subs.direct.data.id': 'Die ID der Untertiteldatei.',
  'subs.direct.data.url':
    'Download-Link auf https://sub.wyzie.io/c/... mit einem verschlüsselten tok-Parameter. Jeder Download kostet 1 Anfrage; siehe den Abschnitt zum Herunterladen von Untertiteln weiter unten.',
  'subs.direct.data.flagUrl': 'URL zur Flagge des Sprachgebiets.',
  'subs.direct.data.format': 'Das Format der Untertiteldatei.',
  'subs.direct.data.encoding': 'Die Zeichenkodierung der Untertiteldatei.',
  'subs.direct.data.display': 'Die Sprache des Untertitels, großgeschrieben.',
  'subs.direct.data.language': 'Der ISO 639-1-Code der Sprache.',
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
  'subs.direct.download.p':
    'Jede url in einer /search-Antwort zeigt auf https://sub.wyzie.io/c/... und trägt einen tok-Query-Parameter. tok ist verschlüsselt, gibt deinen API-Key also nicht preis, und bleibt 60 Tage lang gültig. Verwende die URL unverändert. Eine Suche kostet 1 Anfrage und jeder Download 1 weitere, abgerechnet über den Key, der die Suche ausgeführt hat. Wenn dieser Key einen Download nicht bezahlen kann, wird der Link abgelehnt:',
  'subs.direct.dl.p':
    'Hänge diese an eine Download-URL an, um zu ändern, was sie zurückgibt. Sie funktionieren bei jedem Download, ob gecacht oder nicht, und kosten nichts extra (außer dual, siehe unten). Der Antwort-Header X-Subtitle-Transforms listet auf, was angewendet wurde, jeweils mit Anzahl.',
  'subs.direct.dl.param.to':
    'Ausgabeformat: `srt` oder `vtt`. `vtt` lässt sich direkt in einem `<track>`-Element im Browser abspielen. Standard: das ursprüngliche Format der Datei.',
  'subs.direct.dl.param.offset':
    'Verschiebt jede Zeile um diese Anzahl Sekunden (negativ = früher).',
  'subs.direct.dl.param.fps':
    'Korrigiert den Drift eines Untertitels, der für ein anderes Release erstellt wurde: `SUBTITLE_FPS:VIDEO_FPS`, z. B. `25:23.976` für einen PAL-Untertitel auf einem Video mit Kinobildrate.',
  'subs.direct.dl.param.plain':
    'Schlichte, aufgeräumte Zeilen: Stilcodes wie `{\\an8}` und `<font>` werden entfernt, leere und doppelte Zeilen verworfen, Zeilen zeitlich sortiert und kleine Überlappungen gekürzt.',
  'subs.direct.dl.param.sdh':
    'Entfernt Text für Hörgeschädigte: `[DOOR SLAMS]`, `(sighs)`, Sprecherangaben wie `JOHN:` und ♪-Liedtexte.',
  'subs.direct.dl.param.clean':
    'Maskiert starke Schimpfwörter, wobei der erste Buchstabe erhalten bleibt (`f***`). Nur englische Dateien.',
  'subs.direct.dl.param.dual':
    'Fügt unter jeder Zeile eine zweite Sprache (ISO 639-1-Code) hinzu, abgestimmt auf das Timing dieser Datei. Kostet 1 zusätzliche Anfrage, aber nur, wenn eine Entsprechung gefunden wird; andernfalls kommt die Datei allein mit `X-Dual: unavailable` zurück.',
  'subs.direct.dl.after':
    'Optionen lassen sich kombinieren, z. B. `&to=vtt&sdh=strip&offset=-1.5`. Links enthalten bereits `format`, `encoding`, `id` und (bei Episoden) `season` und `episode`: Lass diese unverändert. `autoUnzip=false` gibt ein Archiv unverändert zurück.',
  'subs.direct.oneCall.p':
    'Mit einem API-Key liefert GET /download die Untertiteldatei selbst in einem einzigen Aufruf: Es sucht mit deinem Key und denselben Parametern wie /search (language ist standardmäßig en), wählt den am besten passenden Treffer und liefert ihn aus. Das kostet 2 Anfragen, genauso viel wie eine Suche plus ein Download. Download-Optionen wie to und offset werden auf die Datei angewendet.',
  'subs.direct.oneCall.pick':
    'Der beste Treffer ist das erste Suchergebnis, wobei SRT-, WebVTT- und ASS-Dateien bevorzugt werden, sofern du nicht format setzt, und Dateien ohne Hinweise für Hörgeschädigte, sofern du nicht hi=true setzt. Eingrenzen kannst du ihn mit release, filename, source oder origin. Die Antwort-Header X-Subtitle-Release, X-Subtitle-Source, X-Subtitle-Language und X-Subtitle-Url zeigen, welche Datei gewählt wurde. Die Fehler sind dieselben wie bei /search und bei Download-Links.',
  'subs.direct.oneCall.keyless':
    'Ohne Key ist die [Download-Seite](https://sub.wyzie.io/download) dafür da, ein oder zwei Untertitel von Hand zu finden. Ihre Links öffnen nur die Datei, für die sie erstellt wurden, und nur aus dem Netzwerk, von dem aus gesucht wurde, und sie hat stündliche Limits. Für alles Automatisierte verwende einen Key.',
  'subs.direct.headers.p':
    'Jede /search-Antwort enthält einen X-Total-Count-Header mit der Gesamtzahl der Ergebnisse. Wenn du limit übergibst, enthält sie außerdem:',
  'subs.direct.header.xpage': 'Die zurückgegebene Seite.',
  'subs.direct.header.xperpage': 'Der geltende limit-Wert.',
  'subs.direct.header.xtotalpages': 'Die Gesamtzahl der Seiten.',
  'subs.direct.headers.rate':
    'Antworten enthalten außerdem X-RateLimit-Limit, X-RateLimit-Remaining und X-RateLimit-Reset. Betrachte diese Werte als Näherung: Die Nutzung wird in kurzen Abständen gebündelt mit der Abrechnung abgeglichen, daher können sie deiner tatsächlichen Nutzung leicht hinterherhinken.',

  // Subs Translate Page
  'subs.translate.title': 'KI-Untertitelübersetzung',
  'subs.translate.important':
    'KI-Übersetzung ist ein **Pro-Feature**; kostenlose Keys erhalten 403 Upgrade required. Jeder Aufruf kostet **25 Anfragen** aus dem Guthaben deines Keys, auch bei Cache-Treffern. Wenn ein Aufruf fehlschlägt, bevor irgendeine Ausgabe erfolgt ist (kein Untertitel gefunden, ein Such- oder Downloadfehler oder der Server ist ausgelastet), werden die 25 Anfragen automatisch erstattet.',
  'subs.translate.p1':
    'Wyzie kann jeden Untertitel spontan in 80+ Sprachen übersetzen. Das übersetzte SRT wird in der richtigen Reihenfolge zurückgestreamt, sobald Blöcke fertig sind, sodass die ersten Cues schnell ankommen und nicht erst, wenn die ganze Datei fertig ist. Die vollständige Übersetzung wird 30 Tage lang gecacht, sodass spätere Anfragen für denselben Titel, dieselbe Episode und dieselbe Zielsprache aus dem Cache bereitgestellt werden.',

  'subs.translate.ways.h2': 'Zwei Nutzungsmöglichkeiten',
  'subs.translate.way1.h3': '1. Eine Sprache aus einer Suchantwort auswählen',
  'subs.translate.way1.p1':
    'Bei Pro-Keys enthält jede /search-Antwort außerdem KI-Übersetzungszeilen mit "ai": true und einer url, die auf /translate zeigt: eine pro unterstützter Sprache oder nur für die Sprachen in deinem language=-Filter. Kostenlose Keys erhalten diese Zeilen nie. Behandle die KI-Zeilen wie jede andere Untertitelzeile in deiner Oberfläche: Wenn der Nutzer auf eine klickt, rufe die URL ab.',
  'subs.translate.way1.filter':
    'Wenn du die KI-Zeilen aus deiner Oberfläche ausblenden möchtest, filtere sie heraus:',
  'subs.translate.way2.h3': '2. /translate direkt aufrufen',

  'subs.translate.param.id': 'TMDB- oder IMDB-ID (erforderlich).',
  'subs.translate.param.target':
    'Zielsprache (erforderlich): ein Name aus der Liste der unterstützten Sprachen (z. B. Spanish, Japanese, Portuguese (Brazil)) oder dessen Code (z. B. es, ja, pt-BR).',
  'subs.translate.param.seasonEpisode':
    'Für TV. Beide müssen zusammen angegeben werden.',
  'subs.translate.param.key':
    'Dein API-Key. Verwende stattdessen tk, wenn du die URL von /search erhalten hast.',
  'subs.translate.param.tk':
    'Verschlüsseltes Token aus den URLs der KI-Zeilen in /search. Funktioniert wie key, gibt deinen API-Key nicht preis und bleibt 60 Tage lang gültig.',

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
    'Wyzie durchsucht die normalen Quellen nach einem Text-Untertitel und bevorzugt dabei ein englisches SRT, wenn verfügbar. VTT-, ASS-, SSA- und SUB-Dateien werden zuerst in SRT umgewandelt.',
  'subs.translate.how.step2':
    'Das SRT wird in Blöcke von bis zu etwa 3.800 Zeichen aufgeteilt und mit Google Translate übersetzt, jeweils 4 Blöcke gleichzeitig.',
  'subs.translate.how.step3':
    'Die Ausgabe wird in SRT-Reihenfolge zurückgestreamt, sobald Blöcke fertig sind, sodass die ersten Cues schnell ankommen. Player, die einen Streaming-SRT-Body akzeptieren, können mit der Anzeige der ersten Zeilen beginnen, bevor der Rest fertig ist.',
  'subs.translate.how.step4':
    'Die vollständige Übersetzung wird 30 Tage in Redis gecacht, mit id, season, episode und target als Schlüssel.',

  'subs.translate.languages.h2': 'Unterstützte Zielsprachen',
  'subs.translate.languages.p':
    '80+ Sprachen, einschließlich aller wichtigen europäischen, asiatischen, afrikanischen und nahöstlichen Sprachen. Übergib einen Namen aus der Liste (Spanish, Portuguese (Brazil)) oder dessen Code (es, pt-BR). Bei Pro-Keys wird die vollständige Liste außerdem als ai: true-Zeilen in jeder /search-Antwort ohne language=-Filter zurückgegeben, was die maßgebliche Quelle der Wahrheit ist.',

  'subs.translate.limitations.h2': 'Einschränkungen',
  'subs.translate.limit1':
    'KI-Übersetzung benötigt einen Text-Untertitel als Ausgangspunkt. VTT-, ASS-, SSA- und SUB-Quellen werden zuerst in SRT umgewandelt; wenn kein Text-Untertitel existiert, gibt der Aufruf 404 No subtitle found zurück und die 25 Anfragen werden erstattet.',
  'subs.translate.limit2':
    'Die Übersetzungsqualität hängt vom Quell-Untertitel ab. Ein schlecht zeitlich abgestimmter oder falsch getippter Quell-Untertitel erzeugt eine schlecht abgestimmte oder falsch getippte Übersetzung.',
  'subs.translate.limit3':
    'Manche Nutzer möchten KI-Zeilen ganz ausblenden. Filtere in deinem Client nach ai === false.',
  'subs.translate.limit4':
    'Übersetzungen werden auch bei Cache-Treffern berechnet. Ob frisch generiert oder aus dem 30-Tage-Cache bereitgestellt – jeder /translate-Aufruf kostet 25 Anfragen. Nur Aufrufe, die vor jeglicher Ausgabe fehlschlagen, werden erstattet.',

  // Subs Synced Page
  'subs.synced.title': 'Wyzie Synced',
  'subs.synced.important':
    'Wyzie Synced ist ein **Pro-Feature**: Kostenlose Keys erhalten 403 Paid feature. Jede erfolgreiche Synchronisierung kostet **5 Anfragen**; eine Synchronisierung ohne Treffer wird nicht berechnet. Der Download des synchronisierten Links zählt anschließend wie jeder andere Download.',
  'subs.synced.p1':
    'Online gefundene Untertitel sind oft für ein anderes Release getimt als das Video, das du hast: Sie beginnen ein paar Sekunden zu früh oder zu spät oder driften im Laufe des Films immer weiter ab, weil dieses Release mit einer anderen Bildrate läuft. Wyzie Synced hört sich die Tonspur deiner Kopie an, erkennt, wo gesprochen wird, und ermittelt den Versatz und die Bildratenkorrektur, die den Untertitel darauf abstimmen. Du erhältst einen normalen Download-Link mit angewendeter Korrektur (über die [Download-Optionen](/subs/usage/direct#download-options) offset und fps).',
  'subs.synced.web.p':
    'Am einfachsten: Öffne [sub.wyzie.io/synced](https://sub.wyzie.io/synced), gib deinen Pro-Key ein, wähle deine Videodatei und den Titel aus und lade den synchronisierten Untertitel herunter. Der Ton wird in deinem Browser analysiert, das Video wird also nie hochgeladen: Übertragen werden nur die Sprach-Timings. MKV, MP4, AVI und die meisten anderen Formate funktionieren, auch mit AC3-, E-AC3- und DTS-Ton.',
  'subs.synced.api.p':
    'Sende, welchen Untertitel du möchtest (einen Download-Link oder den Titel, damit Wyzie den am besten passenden auswählt), und den Ton: entweder selbst ermittelte Sprach-Timings oder die Audio-/Videodatei selbst. POST /synced ist dieselbe API.',
  'subs.synced.param.url':
    'Ein Download-Link aus /search (https://sub.wyzie.io/c/…). Weitere Download-Optionen darin (to, sdh, …) bleiben im synchronisierten Link erhalten.',
  'subs.synced.param.id':
    'Anstelle von url: TMDB- oder IMDB-ID. Wyzie probiert die 5 besten Text-Untertitel in dieser Sprache aus und gibt den zurück, der am besten zu deinem Ton passt.',
  'subs.synced.param.language':
    'Mit id: ISO 639-1-Code der Untertitelsprache (erforderlich).',
  'subs.synced.param.seasonEpisode':
    'Mit id, für TV. Beide müssen zusammen angegeben werden.',
  'subs.synced.param.key':
    'Dein Pro-API-Key. Ohne ihn wird der Key hinter dem tok der url verwendet; Links von der Download-Seite ohne Key müssen key angeben.',
  'subs.synced.param.speech':
    'Wo gesprochen wird: [[start, end], …] in Sekunden, von einer beliebigen Sprachaktivitätserkennung (detectSpeech aus wyzie-lib, Silero VAD, webrtcvad). Ein 2-stündiger Film ergibt etwa 2.000 Segmente, rund 40 KB JSON.',
  'subs.synced.param.media':
    'Oder die Audio-/Videodatei selbst: als roher Request-Body (mit den übrigen Feldern im Query-String) oder als Multipart-Feld media. Bis zu 95 MB, lade für einen ganzen Film also nur die Tonspur hoch.',
  'subs.synced.fields.note':
    'Felder kommen in einen JSON-Body, ein Multipart-Formular oder den Query-String (bei einem rohen media-Body).',
  'subs.synced.response.p': 'Eine 200-Antwort ist JSON:',
  'subs.synced.field.url':
    'Der Download-Link des Untertitels mit der Timing-Korrektur (offset, fps) und einem frischen tok für deinen Key. Verwende ihn wie jede url aus /search: Jeder Download kostet 1 Anfrage.',
  'subs.synced.field.offset':
    'Sekunden, die nach der Bildratenkorrektur zu jeder Zeile addiert werden (negativ = früher).',
  'subs.synced.field.fps':
    'Die Bildratenkorrektur als SUBTITLE_FPS:VIDEO_FPS (z. B. "25:23.976") oder null, wenn keine nötig war.',
  'subs.synced.field.confidence':
    '0 bis 1: wie deutlich dieses Timing alle anderen übertrifft. Alles, was zurückgegeben wird, hat den Abgleichtest bestanden; höher bedeutet sicherer.',
  'subs.synced.field.inSync':
    'true, wenn der Untertitel bereits zu deiner Kopie gepasst hat.',
  'subs.synced.field.subtitle':
    'Welcher Untertitel verwendet wurde (release, fileName, format, source, …). Mit url nur dessen format.',
  'subs.synced.errors.p':
    'Fehler sind JSON mit message und details. Abgelehnte und fehlgeschlagene Synchronisierungen werden nicht berechnet.',
  'subs.synced.error.400':
    'Fehlende oder ungültige Felder: kein Untertitel, kein Ton oder speech, das nicht aus [start, end]-Paaren besteht.',
  'subs.synced.error.401':
    'Kein Key, oder der Download-Link in url ist ungültig oder abgelaufen.',
  'subs.synced.error.403':
    'Der Key ist kostenlos (Wyzie Synced erfordert Pro), ungültig oder pausiert.',
  'subs.synced.error.404':
    'Keine Text-Untertitel in dieser Sprache für den Titel.',
  'subs.synced.error.413':
    'Die media-Datei ist größer als 95 MB. Lade nur die Tonspur hoch oder sende speech.',
  'subs.synced.error.422':
    'Der Untertitel passt bei keinem Versatz und keiner Bildrate zum Ton (wahrscheinlich eine andere Schnittfassung oder Episode), der Ton enthält zu wenig Sprache, oder die Datei kann nicht dekodiert werden.',
  'subs.synced.error.429':
    'Der Key kann nicht bezahlen: Für eine Synchronisierung müssen noch mindestens 5 Anfragen übrig sein; das wird geprüft, bevor die Arbeit beginnt.',
  'subs.synced.error.503':
    'Mit dem Dekodieren anderer Uploads ausgelastet, oder die Suche ist kurzzeitig nicht verfügbar. Versuche es gleich noch einmal oder sende speech.',
  'subs.synced.lib.p':
    'wyzie-lib bietet detectSpeech (derselbe Detektor, den die Website in deinem Browser ausführt) und syncSubtitle:',
  'subs.synced.how.step1':
    'Sprache: Der Ton wird zu 8 kHz Mono dekodiert (bei 5.1- und 7.1-Mixen nur der Center-Kanal, auf dem die Dialoge liegen), und eine Sprachaktivitätserkennung markiert, wo gesprochen wird: lauter Klang im Sprachfrequenzband, der mit den Silben an- und abschwillt.',
  'subs.synced.how.step2':
    'Ausrichtung: Die Einblendzeiten des Untertitels werden bei jedem Versatz innerhalb von ±10 Minuten mit dieser Sprache kreuzkorreliert, und zwar für die üblichen Bildraten-Abweichungen (25 vs. 23.976, 25 vs. 24, 24 vs. 23.976 fps).',
  'subs.synced.how.step3':
    'Verfeinerung: Das beste Timing wird auf 10 ms genau verfeinert, indem die Zeilenanfänge an den Sprachanfängen ausgerichtet werden.',
  'subs.synced.how.step4':
    "Ein Timing wird nur zurückgegeben, wenn es sich deutlich von allen anderen Versätzen abhebt, sodass ein Untertitel für eine andere Schnittfassung oder Episode 422 Couldn't sync statt einer falschen Verschiebung erhält.",
  'subs.synced.limit1':
    'Wyzie Synced korrigiert einen konstanten Versatz und einen Bildratenunterschied. Ein Untertitel für eine andere Schnittfassung (zusätzliche oder fehlende Szenen) lässt sich nicht durch eine einzige Verschiebung korrigieren und wird abgelehnt.',
  'subs.synced.limit2':
    'Es braucht Sprache: Filme mit wenig Dialog oder Ton, der größtenteils aus Musik besteht, lassen sich möglicherweise nicht synchronisieren.',
  'subs.synced.limit3': 'Versätze von bis zu ±10 Minuten werden gefunden.',

  // Subs API Keys Page
  'subs.keys.title': 'API-Keys',
  'subs.keys.p1':
    'Wyzie Subs benötigt einen API-Key für alle Anfragen. Ein kostenloser Tarif deckt die meisten Anwendungsfälle ab; Bezahlpläne sind für intensivere Nutzung verfügbar.',

  'subs.keys.tiers.h2': 'Tarife',
  'subs.keys.tier.free': 'Kostenlos (E-Mail-Verifizierung)',
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
    'Gib eine Adresse eines großen privaten E-Mail-Anbieters ein (Gmail, Outlook/Hotmail, Yahoo, iCloud, AOL, Proton und andere). Wegwerf-E-Mail-Domains werden abgelehnt.',
  'subs.keys.free.step3':
    'Gib den 6-stelligen Code ein, den wir dir per E-Mail senden.',
  'subs.keys.free.step4':
    'Du erhältst einen API-Key, der wie wyzie-abc123... aussieht.',
  'subs.keys.free.gmail':
    'Pro E-Mail-Adresse und pro Netzwerk kann ein kostenloser Key beansprucht werden; eine zweite Anfrage gibt 409 zurück. Key verloren? Nutze "Forgot key" im [Dashboard](https://store.wyzie.io/dashboard), um ihn dir erneut zusenden zu lassen.',

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
    'Verwende [Wyzie Worker](https://github.com/wyziedevs/wyzie-worker): einen kostenlosen Cloudflare Worker-Proxy, der deinen API-Key als Secret `NITRO_API_TOKEN` hält. Jeder Aufruf an ihn muss `Authorization: Bearer <NITRO_WORKER_KEY>` senden, ein zweites Secret, das du festlegst; leite deinen Client also über dein eigenes Backend und halte auch den Worker-Key serverseitig.',
  'subs.keys.protect.option2':
    'Betreibe deinen eigenen Proxy: jeder Backend-Endpunkt, der den Key vor der Weiterleitung an sub.wyzie.io anhängt, funktioniert. Siehe die Einführungsseite für ein 10-Zeilen-Beispiel.',
  'subs.keys.protect.devtools':
    'Wenn der Key in einem Netzwerk-Tab in den DevTools erscheint, ist er exponiert. Gehe davon aus, dass er öffentlich ist, und rotiere ihn über dein [Dashboard](https://store.wyzie.io/dashboard).',

  'subs.keys.using.h2': 'Deinen Key verwenden',
  'subs.keys.using.p': 'Hänge &key=YOUR_KEY an jede API-Anfrage an:',
  'subs.keys.using.npm.h3': 'NPM-Paket',

  'subs.keys.limit.h2': 'Das Limit erreichen',
  'subs.keys.limit.p':
    'Eine Suche kostet 1 Anfrage und jeder Untertitel-Download kostet 1 Anfrage, eine Suche mit anschließendem Download einer Datei verbraucht also 2. KI-Übersetzung kostet 25 Anfragen pro Aufruf, eine Synchronisierung mit Wyzie Synced 5.',
  'subs.keys.limit.free':
    '**Kostenloses Kontingent** aufgebraucht -> Suchen und Download-Links geben 429 Daily request limit reached zurück, mit reset_at im JSON und einem Retry-After-Header. Das Tageslimit von 1.000 Anfragen wird um UTC-Mitternacht zurückgesetzt.',
  'subs.keys.limit.paid':
    '**Bezahltes Guthaben** erschöpft -> Suchen und Download-Links geben 402 mit einem Aufladelink im JSON zurück. Lade auf [store.wyzie.io/topup](https://store.wyzie.io/topup) auf oder aktiviere die **automatische Aufladung** in deinem Dashboard, um automatisch aufzufüllen, wenn dein Guthaben einen von dir festgelegten Schwellenwert unterschreitet.',
  'subs.keys.hold.p1':
    'Keys, die ein sehr hohes Volumen überwiegend von Rechenzentrums- oder Hosting-IPs senden, werden automatisch pausiert. Ein pausierter Key erhält bei jeder Anfrage 403 Key on hold, mit einem Link zur Reaktivierung (https://store.wyzie.io/verify) und einem Support-Link (https://store.wyzie.io/contact) im JSON.',
  'subs.keys.hold.p2':
    'Um den Key sofort zu reaktivieren, verifiziere die Website, auf der du ihn verwendest, unter [store.wyzie.io/verify](https://store.wyzie.io/verify) mit einem DNS-TXT-Eintrag oder einem Meta-Tag. Ein Key mit verifizierter Website wird nie wieder automatisch pausiert, stark frequentierte Websites können sich also verifizieren, bevor sie überhaupt pausiert werden.',
  'subs.keys.hold.p3':
    'Keine Website, zum Beispiel bei einem Backend-Dienst oder einer App? [Kontaktiere den Support](https://store.wyzie.io/contact), um den Key reaktivieren zu lassen.',

  'subs.keys.files.h2': 'Was in den Dateien steckt',
  'subs.keys.files.adfilter':
    '**Werbefilter** – bei jedem über sub.wyzie.io ausgelieferten Untertitel werden die Werbe-Cues der Anbieter entfernt (OpenSubtitles-Banner, Wettwerbung, Zeilen wie "watch free at ..."). SRT-Cues werden neu nummeriert, damit nichts übersprungen wird. Jeder Anbieter, einschließlich OpenSubtitles, wird über sub.wyzie.io ausgeliefert, sodass der Filter für alle gilt.',
  'subs.keys.files.promo':
    '**Kostenlose und Dev-Keys** erhalten ganz am Anfang jeder Datei (0–6 s) einen kurzen Cue, der auf [store.wyzie.io](https://store.wyzie.io) verweist. Bezahlte Keys erhalten saubere Dateien ohne Cue.',

  'subs.keys.faq.h2': 'FAQ',
  'subs.keys.faq.q1':
    'Ich habe meinen Key verloren. Kann ich einen neuen bekommen?',
  'subs.keys.faq.a1':
    'Öffne das [Dashboard](https://store.wyzie.io/dashboard) und nutze "Forgot key" mit deiner registrierten E-Mail-Adresse; wir senden dir deinen bestehenden Key erneut zu. Wenn du glaubst, dass der Key geleakt wurde, rotiere ihn stattdessen über das Dashboard.',
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
  'i6shark.intro.feature7':
    '**Automatische Wartung**: Regelmäßiges Leeren des IP-Pools. Subnetz-Validierung und -Bereinigung. Connection Pooling und Keepalive-Optimierung.',
  'i6shark.intro.feature8':
    '**Hohe Leistung**: Gleichzeitige Anfragenverarbeitung mit Buffer-Pooling. Konfigurierbare Timeouts und Verbindungslimits. Effizientes IPv6-Adress-Management.',
  'i6shark.intro.feature9':
    '**Debug-Modus**: Detailliertes Logging zur Fehlersuche und Überwachung',

  'i6shark.intro.requirements.h2': 'Anforderungen',
  'i6shark.intro.req1': 'Go 1.22 oder höher',
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
    '**Quellen:** jede Quelle, die dein Key nutzen kann (`source=all`): charlie und lima mit einem kostenlosen Key, alle sieben mit einem Pro-Key.',
  'plugins.index.shared.matching':
    '**Zuordnung:** Wyzie wird über IMDB- und TMDB-IDs sowie Staffel und Episode gesteuert, sodass die Treffer sowohl für Filme als auch für Serien präzise sind.',
  'plugins.index.shared.quota':
    '**Kontingent:** Wenn dein Key aufgebraucht ist, zeigt das Plugin eine freundliche Aufforderung mit Link zu [store.wyzie.io](https://store.wyzie.io), anstatt stillschweigend zu versagen. Lade auf oder abonniere, und du bist wieder dabei.',
  'plugins.index.shared.languages':
    '**Sprachen:** 100+, pro Plugin auswählbar.',
  'plugins.index.outro':
    'Wähle oben deine Plattform aus, um loszulegen. Der Quellcode aller Plugins liegt im [wyzie-plugins-Repository](https://github.com/wyziedevs/wyzie-plugins).',

  'plugins.stremio.intro':
    'Ein Ein-Klick-Untertitel-Add-on für [Stremio](https://www.stremio.com/). Es fragt jede Wyzie-Quelle ab, die dein Key nutzen kann, und funktioniert sowohl für Filme als auch für Serien, auf jeder Plattform, auf der Stremio läuft.',
  'plugins.stremio.before':
    'Du benötigst einen kostenlosen Wyzie API-Key. Hol dir einen unter [store.wyzie.io/redeem](https://store.wyzie.io/redeem), oder kaufe einen Pro-Key bzw. abonniere unter [store.wyzie.io](https://store.wyzie.io/#plans).',
  'plugins.stremio.install.1':
    'Öffne [stremio.wyzie.io/configure](https://stremio.wyzie.io/configure).',
  'plugins.stremio.install.2': 'Füge deinen **API-Key** ein.',
  'plugins.stremio.install.3':
    'Optional: Gib deine bevorzugten **Sprachen** als ISO 639-1-Codes ein, durch Kommas getrennt (zum Beispiel `en,es,fr`). Leer lassen für alle Sprachen.',
  'plugins.stremio.install.4':
    'Optional: Schalte **Hörgeschädigt** ein, um nur Untertitel für Hörgeschädigte zu erhalten. Lass es aus, um alles zu sehen; Quellen, die Untertitel für Hörgeschädigte nicht kennzeichnen, liefern nichts, solange es aktiviert ist.',
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
    'Nur Untertitel für Hörgeschädigte zurückgeben (sendet hi=true). Standardmäßig aus.',
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
    '[Bazarr](https://www.bazarr.media/) verwaltet Untertitel für **Plex, Jellyfin, Emby, Sonarr und Radarr** an einem Ort. Wenn du Wyzie als Provider hinzufügst, erhalten all diese Server über einen einzigen Key Zugriff auf jede Wyzie-Quelle, die dein Key nutzen kann.',
  'plugins.bazarr.note':
    'Dies ist der empfohlene Weg, um Wyzie mit Plex und Jellyfin zu nutzen. Bazarr lädt Untertiteldateien neben deine Medien, und dein Server übernimmt sie automatisch, sodass kein separates natives Plugin erforderlich ist.',
  'plugins.bazarr.before':
    'Hol dir einen kostenlosen Wyzie API-Key unter [store.wyzie.io/redeem](https://store.wyzie.io/redeem) und stelle sicher, dass du Zugriff auf deine Bazarr-Installationsdateien hast (typischer Docker-Pfad: `/opt/bazarr/bazarr/`).',
  'plugins.bazarr.install.1':
    'Lade [bazarr/wyzie.py](https://github.com/wyziedevs/wyzie-plugins/blob/main/bazarr/wyzie.py) aus dem [wyzie-plugins-Repository](https://github.com/wyziedevs/wyzie-plugins) herunter (oder `git clone https://github.com/wyziedevs/wyzie-plugins.git`) und kopiere es nach `bazarr/subliminal_patch/providers/wyzie.py`.',
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
  'plugins.bazarr.cfg.hi':
    'Nur Untertitel für Hörgeschädigte zurückgeben (sendet hi=true).',
  'plugins.bazarr.cfg.sources':
    'Durch Kommas getrennte Liste der abzufragenden Provider, oder `all`.',
  'plugins.bazarr.quota.402':
    '**402 oder 429** (Guthaben leer oder Tageslimit erreicht): Bazarr protokolliert einen Hinweis mit einem Link zu [store.wyzie.io](https://store.wyzie.io) und liefert keine Ergebnisse, sodass es sauber auf deine anderen Provider zurückfällt. Nichts stürzt ab.',
  'plugins.bazarr.quota.401':
    '**401** (fehlender Key) oder **403** (unbekannter oder pausierter Key): Bazarr zeigt einen Authentifizierungsfehler an, damit du weißt, dass du den Key prüfen oder erneut eingeben musst.',
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
    'Hol dir die Add-on-Zip: `service.subtitles.wyzie-<version>.zip`. Um sie selbst zu bauen, klone das [wyzie-plugins-Repository](https://github.com/wyziedevs/wyzie-plugins) (`git clone https://github.com/wyziedevs/wyzie-plugins.git`) und packe dessen Ordner `kodi/` in eine Zip, sodass die Zip `addon.xml` in ihrem Wurzelverzeichnis enthält.',
  'plugins.kodi.zip.2':
    'In Kodi: **Einstellungen, Add-ons, Aus Zip-Datei installieren**, wähle dann die Zip. Wenn Kodi es blockiert, aktiviere zuerst **Einstellungen, System, Add-ons, Unbekannte Quellen**.',
  'plugins.kodi.zip.3':
    '**Einstellungen, Player, Sprache, Standard-Untertiteldienst**, wähle dann **Wyzie Subs**.',
  'plugins.kodi.zip.4':
    'Öffne die Add-on-Einstellungen von Wyzie Subs und füge deinen **API-Key** ein.',
  'plugins.kodi.cfg.key': 'Dein Wyzie-Key. Erforderlich.',
  'plugins.kodi.cfg.hi':
    'Nur Untertitel für Hörgeschädigte zurückgeben (sendet hi=true).',
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
