const messages: Record<string, string> = {
  // Navigation
  'nav.language': 'Język',

  // Index / Landing Page
  'index.subtitle':
    'Wyzie to otwartoźródłowy zestaw narzędzi do pobierania napisów i wszystkiego, co się z tym wiąże.',
  'index.cta.start': 'Zacznij',
  'index.cta.store': 'Sprawdź to',

  'index.card.keys.title': 'Darmowe klucze API',
  'index.card.keys.body':
    'Pobierz darmowy klucz API na store.wyzie.io/redeem przy szybkiej weryfikacji przez Gmail. 1 000 żądań dziennie bez opłat. Dostępne są płatne plany dla wyższego zużycia.',

  'index.card.ai.title': 'Tłumaczenie AI',
  'index.card.ai.body':
    'Przetłumacz dowolne napisy na ponad 80 języków na żądanie. Strumieniuje wskazówkę po wskazówce, dzięki czemu odtwarzanie może rozpocząć się w kilka sekund. Dostępne dla kluczy Pro.',

  'index.card.reliable.title': 'Niezawodność',
  'index.card.reliable.body':
    'Jesteśmy dumni z naszej stałej dostępności i (prawie) codziennych aktualizacji, a także szybkiego buforowania.',

  'index.card.simple.title': 'Prostota na nowo zdefiniowana',
  'index.card.simple.body':
    'Łatwe we wdrożeniu, łatwe w użyciu. Wyzie jest zaprojektowane tak, aby być jak najprostsze.',

  // Donate Page
  'donate.title': 'Proszę o wsparcie',
  'donate.body':
    'Cześć użytkowniku, Wyzie w pewnym sensie opiera się teraz na darowiznach (których prawie nie otrzymuję), a ja mam 16 lat i pracuję w niepełnym wymiarze godzin, i czasami mój rachunek za utrzymanie publicznego API przekracza 100 dolarów miesięcznie. Nie mogę kontynuować tego projektu bez zewnętrznej pomocy. Bardzo mi przykro, ale ten projekt rozrósł się poza to, co pierwotnie mogłem finansować z własnej kieszeni.',
  'donate.cta': 'Wesprzyj Wyzie',

  // Subs Intro Page
  'subs.intro.title': 'Wprowadzenie do Wyzie Subs',
  'subs.intro.p1':
    'Wyzie Subs to darmowe i wolne (libre) API do pobierania napisów z otwartych źródeł. Istnieją dwa sposoby wykonywania żądań do API: przy użyciu naszego pakietu NPM lub przez bezpośrednie odpytywanie samego API Wyzie. Zalecam użycie naszego pakietu, choć niektórzy mogą uznać typy za uciążliwe. Aby korzystać z API, musisz najpierw podjąć tę decyzję.',
  'subs.intro.note.ai':
    'Tłumaczenie AI jest dostępne na żywo dla kluczy Pro. Dowolny tytuł, ponad 80 języków docelowych, strumieniowane w trakcie pracy tłumacza.',
  'subs.intro.important.apikey':
    'Klucz API jest wymagany dla wszystkich żądań. Pobierz darmowy klucz na [store.wyzie.io/redeem](https://store.wyzie.io/redeem) (weryfikacja Gmail, 1 000 żądań dziennie). Dla wyższego zużycia dostępne są [plany Pro i doładowania](https://store.wyzie.io). Szczegóły znajdziesz na stronie Klucze API.',
  'subs.intro.note.npm':
    'Zdecydowanie zalecamy pakiet NPM, jeśli znasz TypeScript lub JavaScript',
  'subs.intro.btn.npm': 'Pakiet NPM',
  'subs.intro.btn.direct': 'Bezpośrednie pobieranie',

  'subs.intro.protect.h2': 'Ochrona klucza API',
  'subs.intro.protect.important':
    '**Prawdziwy incydent:** widzieliśmy deweloperów, którzy wklejali swój klucz bezpośrednio do kodu JavaScript frontendu serwisu streamingowego. W ciągu kilku godzin niezwiązana osoba wydobyła go z pakietu JS i korzystała z niego, aż do wyczerpania dziennego limitu lub salda płatnego. Quota utracona w ten sposób nie podlega zwrotowi i zgodnie z naszymi Warunkami jest traktowana jako odpowiedzialność właściciela klucza.',
  'subs.intro.protect.p1':
    'Twój klucz API powinien być prywatny i **nigdy** nie pojawiać się w:',
  'subs.intro.protect.item1':
    'Przeglądarkowym kodzie JavaScript (cokolwiek serwowane jest do tagu skryptu)',
  'subs.intro.protect.item2':
    'Binarnych plikach aplikacji mobilnych (Android/iOS, w tym tych zaciemnionych)',
  'subs.intro.protect.item3': 'Rozszerzeniach przeglądarki',
  'subs.intro.protect.item4':
    'Aplikacjach desktopowych w stylu Electron dystrybuowanych do użytkowników końcowych',
  'subs.intro.protect.item5':
    'Publicznych repozytoriach Git, gistach, serwisach do wklejania tekstu lub zrzutach ekranu',
  'subs.intro.protect.p2':
    'Jeśli klucz trafi na urządzenie użytkownika końcowego, traktuj go jako publiczny. Istnieją dwa bezpieczne wzorce:',
  'subs.intro.protect.opt1.h3': 'Opcja 1: Użyj Wyzie Worker',
  'subs.intro.protect.opt1.p1':
    'Wyzie Worker to lekki proxy Cloudflare Worker, który wstrzykuje Twój klucz API po stronie serwera. Wdróż go do Cloudflare Workers i ustaw swój klucz jako zmienną środowiskową NITRO_API_TOKEN. Następnie skieruj żądania klienta na adres URL swojego workera zamiast sub.wyzie.io — worker przekazuje je z dołączonym kluczem.',
  'subs.intro.protect.opt2.h3': 'Opcja 2: Zbuduj własne proxy',
  'subs.intro.protect.opt2.p1':
    'Jeśli wolisz nie korzystać z Wyzie Worker, możesz zbudować proste proxy po stronie serwera w dowolnym frameworku. Idea jest taka sama: Twój backend odbiera żądania od klienta, dołącza klucz API i przekazuje je do sub.wyzie.io.',

  // Subs Sources Page
  'subs.sources.title': 'Źródła Wyzie Subs',
  'subs.sources.p1':
    'Wyzie Subs agreguje napisy z wielu dostawców. Dostępność źródeł może się różnić w zależności od stanu dostawcy lub gdy źródło jest niedostępne. Zawsze szukam nowych źródeł — skontaktuj się, aby zaproponować jedno.',

  'subs.sources.using.h2': 'Korzystanie ze źródeł',
  'subs.sources.using.bullet1':
    'Użyj source=all, aby odpytać wszystkie włączone źródła jednocześnie',
  'subs.sources.using.bullet2':
    'Domyślnym źródłem jest opensubtitles, jeśli nie podano innego',
  'subs.sources.using.bullet3':
    'Można podać wiele źródeł jako listę rozdzieloną przecinkami',

  'subs.sources.api.h2': 'Punkt końcowy API',
  'subs.sources.api.p1':
    'Możesz programowo pobrać listę aktualnie włączonych źródeł i ich poziom planu:',
  'subs.sources.api.free':
    'źródła, które może odpytywać każdy klucz, w tym darmowe.',
  'subs.sources.api.paid': 'źródła wymagające klucza Pro.',
  'subs.sources.api.allFree':
    'gdy true, każde włączone źródło jest dostępne dla wszystkich kluczy, a paid jest puste.',

  'subs.sources.scope.h3': 'Ograniczenie do klucza',
  'subs.sources.scope.p1':
    'Podaj swój klucz API, aby uzyskać źródła, których ten klucz faktycznie może używać:',
  'subs.sources.scope.p2':
    'Dodaje to pola specyficzne dla klucza bez zużywania żądania z Twojej limitu:',
  'subs.sources.scope.available':
    'źródła, które ten klucz może teraz odpytywać.',
  'subs.sources.scope.restricted':
    'włączone źródła, których ten klucz nie może odpytywać (przejdź na Pro, aby je odblokować).',
  'subs.sources.scope.keyType': 'free (darmowy) lub paid (płatny).',
  'subs.sources.scope.keyValid':
    'false, gdy klucz jest nieprawidłowy lub nie został znaleziony, i null, gdy nie można było zweryfikować klucza (w takim przypadku available i restricted są pominięte).',

  'subs.sources.details.h2': 'Szczegóły źródeł',

  'subs.sources.opensubtitles.desc':
    'Największa baza napisów online. Obsługuje filmy i seriale telewizyjne w szerokim zakresie języków. Używa oficjalnego REST API OpenSubtitles.',
  'subs.sources.opensubtitles.content': 'Filmy i seriale',
  'subs.sources.opensubtitles.languages': 'Rozbudowana obsługa wielu języków',
  'subs.sources.opensubtitles.formats': 'SRT, ASS, SSA, VTT, SUB i inne',

  'subs.sources.subdl.desc':
    'Serwis napisów tworzony przez społeczność z szerokim wyborem filmów i seriali.',
  'subs.sources.subdl.content': 'Filmy i seriale',
  'subs.sources.subdl.languages': 'Rozbudowana obsługa wielu języków',
  'subs.sources.subdl.formats': 'SRT, ASS, SSA, VTT, SUB i inne',

  'subs.sources.subf2m.desc':
    'Duże repozytorium napisów z rozbudowaną obsługą językową dla filmów i seriali.',
  'subs.sources.subf2m.content': 'Filmy i seriale',
  'subs.sources.subf2m.languages': 'Rozbudowana obsługa wielu języków',
  'subs.sources.subf2m.formats': 'SRT, ASS, SSA, VTT, SUB i inne',

  'subs.sources.podnapisi.desc':
    'Jedna z najstarszych baz napisów. Starannie utrzymana kolekcja obejmująca filmy i seriale.',
  'subs.sources.podnapisi.content': 'Filmy i seriale',
  'subs.sources.podnapisi.languages': 'Rozbudowana obsługa wielu języków',
  'subs.sources.podnapisi.formats': 'SRT, ASS, SSA, VTT, SUB i inne',

  'subs.sources.animetosho.desc':
    'Pobiera załączniki z napisami do anime bezpośrednio z wydań torrentowych zindeksowanych na AnimeTosho.',
  'subs.sources.animetosho.content': 'Anime (seriale)',
  'subs.sources.animetosho.languages':
    'Japoński, angielski i inne w zależności od wydania',
  'subs.sources.animetosho.formats': 'ASS, SRT, SSA i inne',
  'subs.sources.animetosho.note': 'AnimeTosho ma zostać zamknięte w maju 2026.',

  'subs.sources.gestdown.desc':
    'Dostarcza napisy do seriali poprzez API Gestdown z szeroką obsługą języków.',
  'subs.sources.gestdown.content': 'Tylko seriale',
  'subs.sources.gestdown.languages': 'Rozbudowana obsługa wielu języków',
  'subs.sources.gestdown.formats': 'SRT, ASS i inne',

  'subs.sources.jimaku.desc':
    'Pobiera dane z jimaku.cc, utrzymywanego przez społeczność repozytorium plików z napisami do anime. Dopasowuje tytuły za pomocą API TMDB.',
  'subs.sources.jimaku.content': 'Anime (filmy i seriale)',
  'subs.sources.jimaku.languages':
    'Głównie japoński; również angielski, chiński i inne w zależności od dostępnych plików',
  'subs.sources.jimaku.formats': 'SRT, ASS, SSA, VTT, SUB i inne',

  'subs.sources.kitsunekko.desc':
    'Pobiera listingi katalogów z kitsunekko.net, dedykowanego repozytorium napisów anime. Dopasowuje tytuły za pomocą API TMDB.',
  'subs.sources.kitsunekko.content': 'Anime (seriale)',
  'subs.sources.kitsunekko.languages':
    'Angielskie i japońskie katalogi napisów',
  'subs.sources.kitsunekko.formats': 'SRT, ASS, SSA, VTT, SUB i inne',

  'subs.sources.yify.desc':
    'Pobiera napisy z yifysubtitles.ch dopasowane po IMDB ID. Tylko filmy.',
  'subs.sources.yify.content': 'Tylko filmy (seriale nie są obsługiwane)',
  'subs.sources.yify.languages':
    'Rozbudowana obsługa wielu języków (albański, arabski, angielski, francuski, hiszpański i wiele innych)',
  'subs.sources.yify.formats': 'SRT (dostarczane w archiwum ZIP)',

  'subs.sources.ajatttools.desc':
    'Pobiera napisy z repozytorium GitHub Ajatt-Tools/kitsunekko-mirror. Zorganizowane według typu mediów. Dopasowuje tytuły za pomocą API TMDB.',
  'subs.sources.ajatttools.content': 'Anime i dramaty (seriale i filmy)',
  'subs.sources.ajatttools.languages':
    'Głównie japoński; również angielski, chiński i inne',
  'subs.sources.ajatttools.formats': 'SRT, ASS, SSA, VTT, SUB i inne',

  'subs.sources.ai.desc':
    'Nie jest scrapem. SRT przetłumaczony przez AI generowany na żądanie z najlepszego dostępnego źródłowego napisu. Zobacz przewodnik po tłumaczeniu AI, aby uzyskać pełne informacje.',
  'subs.sources.ai.content': 'Wszystko, do czego Wyzie może znaleźć SRT',
  'subs.sources.ai.languages': 'Ponad 80 języków docelowych',
  'subs.sources.ai.formats': 'Tylko SRT',

  // Subs Package Page
  'subs.pkg.title': 'Korzystanie z pakietu NPM Wyzie',
  'subs.pkg.p1':
    'Pakiet NPM Wyzie Subs zapewnia prosty i łatwy w użyciu interfejs do wyszukiwania i pobierania napisów.',
  'subs.pkg.install.h2': 'Instalacja',
  'subs.pkg.important':
    'Klucz API jest wymagany dla wszystkich żądań. Pobierz darmowy klucz na [store.wyzie.io/redeem](https://store.wyzie.io/redeem) i przekaż go za pomocą parametru key. Szczegóły znajdziesz na stronie Klucze API.',
  'subs.pkg.usage.h2': 'Użycie',
  'subs.pkg.params.h3': 'Parametry',
  'subs.pkg.params.note':
    'Aby uzyskać więcej informacji (lub jeśli utknąłeś), odwiedź [stronę główną Wyzie Subs](https://sub.wyzie.io).',

  'subs.pkg.param.tmdb':
    'TMDB ID filmu lub serialu (wymagane tmdb_id lub imdb_id).',
  'subs.pkg.param.imdb':
    'IMDB ID filmu lub serialu (wymagane imdb_id lub tmdb_id).',
  'subs.pkg.param.format':
    'Formaty plików do zwrócenia (np. srt, ass). Przyjmuje listę.',
  'subs.pkg.param.season': 'Numer sezonu (wymaga episode).',
  'subs.pkg.param.episode': 'Numer odcinka (wymaga season).',
  'subs.pkg.param.language': 'Kody ISO 639-1 języka napisów. Przyjmuje listę.',
  'subs.pkg.param.encoding': 'Filtr kodowania znaków (np. utf-8, latin-1).',
  'subs.pkg.param.hi': 'Wartość logiczna dla napisów dla osób niesłyszących.',
  'subs.pkg.param.source':
    'Dostawcy napisów do odpytania (all dla każdego włączonego źródła).',
  'subs.pkg.param.release': 'Filtry wydania/sceny (przyjmuje listę).',
  'subs.pkg.param.filename':
    'Filtry nazw plików; obsługiwane są aliasy file i fileName.',
  'subs.pkg.param.origin': 'Filtr pochodzenia treści (np. WEB, BLURAY, DVD).',
  'subs.pkg.param.key':
    'Twój klucz API (wymagany). Pobierz bezpłatnie na store.wyzie.io/redeem.',
  'subs.pkg.param.refresh': 'Pomiń cache i pobierz świeże wyniki ze źródeł.',

  'subs.pkg.helpers':
    'Pakiet zawiera również lekkie helpery TMDB: searchTmdb, getTvDetails i getSeasonDetails do szybkiego znajdowania ID przed odpytaniem /search. Ponadto getSources może być użyte do pobrania listy aktualnie włączonych źródeł napisów.',
  'subs.pkg.types.h3': 'Typy',
  'subs.pkg.type.search':
    'Wszystkie prawidłowe parametry rozpoznawane przez API.',
  'subs.pkg.type.query':
    'Wszystkie parametry (opcjonalne i wymagane) dostępne dla API wyzie-subs.',
  'subs.pkg.type.subtitle':
    'Wszystkie wartości zwrócone przez API wraz z ich odpowiednimi typami.',
  'subs.pkg.type.sources': 'Typ odpowiedzi z punktu końcowego /sources.',
  'subs.pkg.types.end':
    'Nasze typy są bardzo proste i dobrze udokumentowane. Sprawdź plik types.ts zlinkowany w repozytorium GitHub.',
  'subs.pkg.config.h3': 'Konfiguracja',
  'subs.pkg.config.p1':
    'Jeden użytkownik zapytał na Github o konfigurowalną nazwę hosta API i pomyślałem, że to świetny pomysł, więc poniżej znajdziesz sposób użycia. Kocham was, chłopaki!',

  // Subs Direct Page
  'subs.direct.title': 'Bezpośrednie pobieranie Wyzie Subs',
  'subs.direct.caution':
    'Zdecydowanie zalecam użycie pakietu NPM, ponieważ jest łatwiejszy i bardziej niezawodny.',
  'subs.direct.p1':
    'Jeśli zdecydowałeś się nie używać pakietu NPM, zaczynajmy. Omówię tylko parametry API i dane zwracane przez API. Sposób, w jaki odpytujesz API, zależy wyłącznie od Ciebie.',
  'subs.direct.important':
    'Klucz API jest wymagany dla wszystkich żądań. Pobierz darmowy klucz na [store.wyzie.io/redeem](https://store.wyzie.io/redeem) i dołącz go jako &key=YOUR_KEY do każdego żądania. Szczegóły znajdziesz na stronie Klucze API.',

  'subs.direct.params.h3': 'Parametry',
  'subs.direct.param.id': 'TMDB lub IMDB ID serialu lub filmu (wymagane).',
  'subs.direct.param.seasonEpisode':
    'Sezon i odcinek dla wyszukiwań TV. Oba muszą być podane razem.',
  'subs.direct.param.language':
    'Filtr języka (kody ISO 639-1). Wiele wartości rozdzielonych przecinkami.',
  'subs.direct.param.format':
    'Formaty napisów do zwrócenia. Dozwolone wiele wartości.',
  'subs.direct.param.hi': 'Czy preferować napisy dla osób niesłyszących.',
  'subs.direct.param.encoding': 'Filtr kodowania znaków.',
  'subs.direct.param.source':
    'Dostawcy napisów do odpytania (all odpytuje każde włączone źródło; domyślnie opensubtitles).',
  'subs.direct.param.release':
    'Filtry nazwy wydania lub sceny (rozdzielone przecinkami).',
  'subs.direct.param.file':
    'Filtry nazw plików (aliasy: file, filename, fileName).',
  'subs.direct.param.origin':
    'Filtr pochodzenia treści, rozdzielony przecinkami (np. WEB, BLURAY, DVD).',
  'subs.direct.param.key':
    'Twój klucz API (wymagany). Pobierz bezpłatnie na store.wyzie.io/redeem.',
  'subs.direct.param.refresh':
    'Pomiń cache i pobierz świeże wyniki. Użyj, gdy źródła mogły zostać zaktualizowane.',
  'subs.direct.important.imdb':
    "Gdy używasz IMDB ID, upewnij się, że pierwsze dwa znaki ('tt') są zawarte na początku ID.",

  'subs.direct.data.h3': 'Zwracane dane',
  'subs.direct.data.id': 'ID pliku napisów.',
  'subs.direct.data.url': 'URL do pliku napisów.',
  'subs.direct.data.flagUrl': 'URL flagi lokalizacji języka.',
  'subs.direct.data.format': 'Format pliku napisów.',
  'subs.direct.data.encoding': 'Kodowanie znaków pliku napisów.',
  'subs.direct.data.display': 'Język napisów, zapisany wielką literą.',
  'subs.direct.data.language': 'Kod ISO 3166-2 języka.',
  'subs.direct.data.media': 'Nazwa mediów, do których odnoszą się napisy.',
  'subs.direct.data.isHearingImpaired':
    'Wartość logiczna wskazująca, czy napisy są dostosowane dla osób niesłyszących.',
  'subs.direct.data.source': 'Z którego źródła zostały pobrane napisy.',
  'subs.direct.data.release': 'Podstawowa nazwa wydania.',
  'subs.direct.data.releases': 'Inne nazwy wydań kompatybilnych z napisami.',
  'subs.direct.data.fileName': 'Oryginalna nazwa pliku, jeśli dostępna.',
  'subs.direct.data.downloadCount':
    'Liczba pobrań na platformie źródłowej (jeśli dostępna).',
  'subs.direct.data.origin': 'Pochodzenie treści (np. WEB, BluRay, DVD).',
  'subs.direct.data.matchedRelease':
    'Wartość wydania, która pasowała do Twojego filtra (jeśli podano).',
  'subs.direct.data.matchedFilter':
    'Filtr podany przez użytkownika, który pasował (jeśli podano).',
  'subs.direct.data.ai':
    'true, jeśli wpis jest napisem przetłumaczonym przez AI, false dla zwykłych pobranych napisów. Użyj jako filtra po stronie klienta, gdy chcesz tylko jednego lub drugiego.',

  // Subs Translate Page
  'subs.translate.title': 'Tłumaczenie napisów przez AI',
  'subs.translate.important':
    'Tłumaczenie AI to **funkcja Pro**. Każde tłumaczenie kosztuje **100 żądań** z salda Twojego klucza, naliczanych zarówno przy trafieniu w cache, jak i przy świeżym tłumaczeniu. Darmowe klucze nie mogą jej używać.',
  'subs.translate.p1':
    'Wyzie może przetłumaczyć dowolne napisy na ponad 80 języków w locie. Tłumaczenia są strumieniowane w trakcie generowania przez model, dzięki czemu odtwarzanie może rozpocząć się w ciągu sekundy lub dwóch zamiast czekania na cały plik. Wyniki są buforowane przez 30 dni, więc druga osoba, która poprosi o to samo tłumaczenie, otrzymuje je natychmiast.',

  'subs.translate.ways.h2': 'Dwa sposoby użycia',
  'subs.translate.way1.h3': '1. Wybierz język z odpowiedzi wyszukiwania',
  'subs.translate.way1.p1':
    'Każda odpowiedź /search zawiera teraz jeden dodatkowy wpis na obsługiwany język z "ai": true i adresem URL wskazującym na /translate. Traktuj wiersze AI jak każdy inny wiersz napisów w swoim interfejsie: gdy użytkownik kliknie jeden z nich, pobierz URL.',
  'subs.translate.way1.filter':
    'Jeśli chcesz ukryć wiersze AI ze swojego interfejsu, przefiltruj je:',
  'subs.translate.way2.h3': '2. Wywołaj /translate bezpośrednio',

  'subs.translate.param.id': 'TMDB lub IMDB ID (wymagane).',
  'subs.translate.param.target':
    'Język docelowy jako pełna angielska nazwa (np. Spanish, Japanese, Brazilian Portuguese) (wymagane).',
  'subs.translate.param.seasonEpisode': 'Dla TV. Oba muszą być podane razem.',
  'subs.translate.param.key':
    'Twój klucz API. Użyj tk zamiast tego, jeśli URL otrzymałeś z /search.',
  'subs.translate.param.tk':
    'Podpisany token zwrócony przez /search. Równoważny key, ale nie ujawnia surowego klucza.',

  'subs.translate.headers.p':
    'Treść odpowiedzi to plik SRT strumieniowany jako text/plain; charset=utf-8. Przydatne nagłówki odpowiedzi:',
  'subs.translate.header.xcache':
    'HIT-REDIS, jeśli serwowane z cache, MISS jeśli generowane na nowo.',
  'subs.translate.header.xsourcelang':
    'język napisu użytego przez tłumacza jako dane wejściowe.',
  'subs.translate.header.xtargetlang': 'echo Twojego parametru target.',
  'subs.translate.header.xsourceprovider':
    'który scraper dostarczył źródłowy napis.',

  'subs.translate.how.h2': 'Jak to działa',
  'subs.translate.how.step1':
    'Wyzie przeszukuje normalne źródła w poszukiwaniu napisu SRT, preferując angielski, gdy jest dostępny.',
  'subs.translate.how.step2':
    'SRT jest dzielony na fragmenty po 50 wskazówek i tłumaczony sekwencyjnie. Każdy fragment jest buforowany indywidualnie po ukończeniu.',
  'subs.translate.how.step3':
    'Wynik jest strumieniowany do Ciebie wskazówka po wskazówce. Odtwarzacze obsługujące strumieniowanie treści SRT mogą zacząć wyświetlać pierwsze linie, zanim reszta zostanie ukończona.',
  'subs.translate.how.step4':
    'Kompletne tłumaczenie jest buforowane w Redis przez 30 dni, z kluczem na podstawie id, season, episode i target.',

  'subs.translate.languages.h2': 'Obsługiwane języki docelowe',
  'subs.translate.languages.p':
    'Ponad 80 języków, w tym wszystkie główne języki europejskie, azjatyckie, afrykańskie i bliskowschodnie. Podaj angielską nazwę (Spanish, nie es). Lista jest również zwracana jako wiersze ai: true w każdej odpowiedzi /search, co jest kanonicznym źródłem prawdy.',

  'subs.translate.limitations.h2': 'Ograniczenia',
  'subs.translate.limit1':
    'Tłumaczenie AI wymaga źródła SRT. Tytuły, dla których każdy dostępny napis ma format .ass, .vtt lub inny, zwrócą błąd 404 No SRT found.',
  'subs.translate.limit2':
    'Jakość tłumaczenia zależy od źródłowego napisu. Źle zsynchronizowany lub zawierający błędy źródłowy napis skutkuje źle zsynchronizowanym lub zawierającym błędy tłumaczeniem.',
  'subs.translate.limit3':
    'Niektórzy użytkownicy mogą chcieć całkowicie zrezygnować z wierszy AI. Filtruj według ai === false po stronie klienta.',
  'subs.translate.limit4':
    'Tłumaczenia są naliczane również przy trafieniach w cache. Niezależnie od tego, czy są generowane na nowo, czy serwowane z 30-dniowego cache, każde żądanie /translate kosztuje 100 żądań.',

  // Subs API Keys Page
  'subs.keys.title': 'Klucze API',
  'subs.keys.p1':
    'Wyzie Subs wymaga klucza API dla wszystkich żądań. Darmowy poziom pokrywa większość przypadków użycia; płatne plany obsługują intensywniejsze korzystanie.',

  'subs.keys.tiers.h2': 'Poziomy',
  'subs.keys.tier.free': 'Darmowy (wymagany Gmail)',
  'subs.keys.tier.free.limit': '1 000 żądań / dzień UTC',
  'subs.keys.tier.pro': '5 USD jednorazowo',
  'subs.keys.tier.pro.limit': '400 000 żądań',
  'subs.keys.tier.topup': 'od 0,0625 USD / 5K',
  'subs.keys.tier.topup.limit': 'Dodaje do Twojego płatnego salda',
  'subs.keys.tiers.end':
    'Plany Pro i doładowania nie wygasają. Wolisz cykliczność? Subskrypcja za 32 USD/miesiąc daje 6 000 000 żądań/miesiąc (tylko karta). Pełne cenniki i panel sterowania znajdziesz na store.wyzie.io.',

  'subs.keys.free.h2': 'Uzyskanie darmowego klucza',
  'subs.keys.free.p':
    'Odwiedź [store.wyzie.io/redeem](https://store.wyzie.io/redeem):',
  'subs.keys.free.step1': 'Rozwiąż szybką captchę Cloudflare Turnstile.',
  'subs.keys.free.step2':
    'Podaj adres Gmail (tylko Gmail jest akceptowany dla darmowego poziomu).',
  'subs.keys.free.step3': 'Wprowadź 6-cyfrowy kod, który wyślemy e-mailem.',
  'subs.keys.free.step4':
    'Otrzymujesz klucz API wyglądający jak wyzie-abc123...',
  'subs.keys.free.gmail':
    'Każdy adres Gmail może wymienić tylko jeden darmowy klucz. Masz już darmowy klucz powiązany z tym e-mailem? Weryfikacja ponownie po prostu zwróci Twój istniejący klucz.',

  'subs.keys.pro.h2': 'Ulepszanie do Pro',
  'subs.keys.pro.p1':
    'Odwiedź [store.wyzie.io](https://store.wyzie.io) i dokonaj zakupu używając tego samego e-maila, którego użyłeś dla darmowego klucza. Twój istniejący klucz wyzie-... zostaje ulepszony w miejscu z dodanymi 400K płatnymi żądaniami. Wolisz cykliczność? Subskrypcja za 32 USD/miesiąc dodaje zamiast tego miesięczny limit 6 000 000 żądań (tylko karta).',
  'subs.keys.pro.p2':
    'Jeśli dokonujesz zakupu z zupełnie nowym e-mailem (bez poprzedniego klucza), generowany jest nowy klucz wyzie-... i wysyłany do Ciebie e-mailem.',

  'subs.keys.protect.h2': 'Chroń swój klucz przed klientem',
  'subs.keys.protect.important':
    '**Nigdy nie osadzaj klucza API w kodzie po stronie klienta.** Przeglądarkowy JavaScript, aplikacje mobilne, rozszerzenia przeglądarki, aplikacje desktopowe w stylu Electron i publiczne repozytoria Git są uważane za kod po stronie klienta. Wszystko, co wysyłasz do użytkownika końcowego, może być przez niego sprawdzone, i widzieliśmy prawdziwe przypadki, w których użytkownicy wklejali swój klucz do frontendu serwisu streamingowego, po czym osoba trzecia wydobyła go z pakietu JS i wyczerpała saldo żądań w ciągu kilku godzin. Quota zużyta w ten sposób nie podlega zwrotowi.',
  'subs.keys.protect.p2':
    'Dwa bezpieczne sposoby korzystania z klucza z aplikacji klienckiej:',
  'subs.keys.protect.option1':
    'Użyj [Wyzie Worker](https://github.com/wyziedevs/wyzie-worker): darmowego proxy Cloudflare Worker, które przechowuje Twój klucz po stronie serwera. Skieruj klienta na adres URL Workera zamiast sub.wyzie.io.',
  'subs.keys.protect.option2':
    'Uruchom własne proxy: każdy backendowy punkt końcowy, który dołącza klucz przed przekazaniem do sub.wyzie.io, zadziała. Zobacz stronę Intro, aby zobaczyć przykład w 10 liniach.',
  'subs.keys.protect.devtools':
    'Jeśli klucz pojawia się w zakładce sieci w DevTools, jest ujawniony. Traktuj go jako publiczny i zmień go, kontaktując się ze wsparciem.',

  'subs.keys.using.h2': 'Korzystanie z klucza',
  'subs.keys.using.p': 'Dołącz &key=YOUR_KEY do każdego żądania API:',
  'subs.keys.using.npm.h3': 'Pakiet NPM',

  'subs.keys.limit.h2': 'Osiągnięcie limitu',
  'subs.keys.limit.free':
    '**Darmowy poziom** wyczerpany -> API zwraca 429 z nagłówkami X-RateLimit-Reset i Retry-After. Dzienny licznik resetuje się o północy UTC.',
  'subs.keys.limit.paid':
    '**Płatne saldo** wyczerpane -> API zwraca 402. Doładuj na [store.wyzie.io/topup](https://store.wyzie.io/topup) lub włącz **automatyczne doładowanie** w swoim panelu, aby uzupełniać automatycznie, gdy saldo przekroczy ustalony przez Ciebie próg.',

  'subs.keys.faq.h2': 'FAQ',
  'subs.keys.faq.q1': 'Zgubiłem swój klucz. Czy mogę otrzymać nowy?',
  'subs.keys.faq.a1':
    'Odwiedź [store.wyzie.io](https://store.wyzie.io) i skorzystaj z przepływu "zapomnianego klucza" ze swoim zarejestrowanym e-mailem; wyślemy ponownie Twój istniejący klucz.',
  'subs.keys.faq.q2': 'Czy mogę używać jednego klucza w wielu projektach?',
  'subs.keys.faq.a2':
    'Tak. Twój klucz działa wszędzie tam, gdzie wywołujesz API.',
  'subs.keys.faq.q3': 'Czy mój klucz kiedyś wygaśnie?',
  'subs.keys.faq.a3':
    'Nie. Zarówno darmowe, jak i płatne klucze nie mają daty ważności. Darmowe klucze mają dzienny limit; płatne saldo trwa do jego wykorzystania.',
  'subs.keys.faq.q4': 'Czy automatyczne doładowanie jest bezpieczne?',
  'subs.keys.faq.a4':
    'Ustalasz miesięczny limit wydatków. Nigdy nie pobieramy więcej niż ten limit, a jednym kliknięciem możesz wyłączyć funkcję w każdym e-mailu z potwierdzeniem oraz w swoim panelu.',

  // Proxy Intro Page
  'proxy.intro.title': 'Wprowadzenie do Wyzie Proxy',
  'proxy.intro.note':
    'Produkcyjna wersja Wyzie Subs nie używa już tego proxy — zamiast tego korzysta z [i6.shark](https://github.com/wyziedevs/i6.shark).',
  'proxy.intro.p1':
    'Wyzie Proxy to potężne API proxy, które umożliwia wykonywanie żądań do dowolnej witryny bez CORS lub innych ograniczeń. Ponieważ Wyzie Proxy jest zbudowane z Nitro, może być hostowane na dowolnej z następujących platform: AWS Amplify, Azure, Cloudflare, Netlify, Stormkit, Vercel, Zeabur.',
  'proxy.intro.btn.hosting': 'Hosting',
  'proxy.intro.btn.check': 'Sprawdź to',

  // Proxy Hosting Page
  'proxy.hosting.title': 'Hosting Wyzie Proxy',
  'proxy.hosting.p1':
    'Budowanie Wyzie Proxy jest prostsze niż oddychanie, dzięki Nitro. Najpierw sklonuj repozytorium Wyzie Proxy za pomocą:',
  'proxy.hosting.p2':
    'Następnie zainstaluj wszystkie niezbędne pakiety za pomocą:',
  'proxy.hosting.p3':
    'Po zainstalowaniu wszystkich pakietów możesz zbudować proxy:',
  'proxy.hosting.p4':
    'Wynik zostanie wygenerowany w folderze /.output/server. Jeśli wdrażasz do Cloudflare Workers, skopiuj i wklej plik index.mjs do workera; w przeciwnym razie możesz wdrożyć pliki normalnie.',

  // i6.shark Intro Page
  'i6shark.intro.title': 'Wprowadzenie do i6.shark',
  'i6shark.intro.p1':
    'i6.shark to serwer proxy IPv6, który umożliwia wykonywanie żądań HTTP z losowo generowanych adresów IPv6 w podsieci /48. To jest proxy aktualnie działające w produkcji Wyzie Subs.',
  'i6shark.intro.p2':
    'Podsieć /48 ma 1 208 925 819 614 629 174 706 176 (1,2 x 10^24) adresów IPv6, co sprawia, że zablokowanie jej przez tradycyjne blokowanie IP jest praktycznie niemożliwe. Używanie jednej podsieci oznacza, że ci, którzy naprawdę chcą Cię zablokować, mogą zablokować Twój adres ASN, więc bądź ostrożny.',
  'i6shark.intro.btn.hosting': 'Hosting',
  'i6shark.intro.btn.github': 'GitHub',

  'i6shark.intro.features.h2': 'Funkcje',
  'i6shark.intro.feature1':
    '**Losowe generowanie IPv6**: Tworzy losowe adresy IPv6 z Twojego prefiksu /48 dla każdego żądania',
  'i6shark.intro.feature2':
    '**Pełna obsługa metod HTTP**: GET, POST, PUT, DELETE i wszystkie inne metody HTTP',
  'i6shark.intro.feature3':
    '**Uwierzytelnianie HMAC-SHA256**: Bezpieczne uwierzytelnianie klucza API przy użyciu tokenów opartych na user-agent',
  'i6shark.intro.feature4':
    '**Inteligentne zarządzanie pulą IP**: Automatyczna rotacja IP z konfigurowalnym rozmiarem puli. Inteligentne zarządzanie cyklem życia IP. Licznik żądań na IP. Czyszczenie nieużywanych IP na podstawie progu nieaktywności.',
  'i6shark.intro.feature5':
    '**Zaawansowana obsługa żądań**: Przekazywanie niestandardowych nagłówków. Usuwanie nagłówków Cloudflare i CDN. Obsługa wielu formatów parametrów URL. Opcjonalny fallback do systemowego domyślnego IP.',
  'i6shark.intro.feature6':
    '**Lista dozwolonych hostów**: Wbudowana lista dozwolonych domen dla bezpieczeństwa (konfigurowalna w kodzie)',
  'i6shark.intro.feature7':
    '**Automatyczna konserwacja**: Periodyczne opróżnianie puli IP. Walidacja i czyszczenie podsieci. Optymalizacja buforowania połączeń i keepalive.',
  'i6shark.intro.feature8':
    '**Wysoka wydajność**: Równoległe obsługiwanie żądań z buforowaniem pamięci. Konfigurowalne limity czasu i połączeń. Wydajne zarządzanie adresami IPv6.',
  'i6shark.intro.feature9':
    '**Tryb debugowania**: Szczegółowe logowanie do rozwiązywania problemów i monitorowania',

  'i6shark.intro.requirements.h2': 'Wymagania',
  'i6shark.intro.req1': 'Go 1.20 lub nowszy',
  'i6shark.intro.req2': 'System Linux/Unix z obsługą IPv6 (najlepiej Ubuntu)',
  'i6shark.intro.req3':
    'Uprawnienia roota (do wiązania portu 80 i manipulacji IPv6)',
  'i6shark.intro.req4':
    'Przydzielona podsieć IPv6 /48 od Twojego dostawcy hostingu',

  'i6shark.intro.providers.h2': 'Dostawcy hostingu',
  'i6shark.intro.providers.p1':
    'Następujący dostawcy są znani z oferowania podsieci IPv6 /48:',

  // i6.shark Hosting Page
  'i6shark.hosting.title': 'Hosting i6.shark',
  'i6shark.hosting.p1':
    'Konfiguracja i6.shark wymaga VPS z podsieci IPv6 /48. Po skonfigurowaniu działa autonomicznie przy minimalnej konserwacji.',

  'i6shark.hosting.steps.h2': 'Kroki',
  'i6shark.hosting.step1': 'Sklonuj repozytorium do /opt/i6.shark:',
  'i6shark.hosting.step2': 'Skonfiguruj stałe w src/consts.go:',
  'i6shark.hosting.step2.note':
    'Zaktualizuj SharedSecret, IPv6Prefix i Interface, aby pasowały do Twojego serwera. Pozostałe stałe konfiguracyjne mają rozsądne wartości domyślne i zazwyczaj nie wymagają zmian.',
  'i6shark.hosting.step3': 'Zbuduj aplikację:',
  'i6shark.hosting.step4': 'Utwórz usługę systemd:',
  'i6shark.hosting.step5': 'Włącz i uruchom usługę:',
  'i6shark.hosting.step5.check': 'Sprawdź status:',
  'i6shark.hosting.post':
    'Serwer proxy będzie teraz uruchamiał się automatycznie po starcie systemu i restartował się w przypadku awarii.',

  'i6shark.hosting.daily.h2': 'Dzienny restart (opcjonalnie)',
  'i6shark.hosting.daily.p':
    'Dodaj zadanie cron, aby restartować serwer codziennie o losowej godzinie:',

  'i6shark.hosting.auth.h2': 'Uwierzytelnianie API',
  'i6shark.hosting.auth.p':
    'Tokeny API są generowane przy użyciu HMAC-SHA256 ze współdzielonym kluczem tajnym. Dane wejściowe do generowania klucza to nagłówek user-agent. Szczegóły implementacji znajdziesz w funkcji validateAPIToken w kodzie źródłowym.',

  // Plugins
  'plugins.common.required': 'Wymagane',

  'plugins.index.intro':
    'Wyzie Subs integruje się bezpośrednio z aplikacjami multimedialnymi, których już używasz. Każda wtyczka korzysta z tego samego punktu końcowego `https://sub.wyzie.io/search` i wymaga darmowego **klucza API Wyzie**. Pobierz go na [store.wyzie.io](https://store.wyzie.io/#plans).',
  'plugins.index.tbl.stremio.for':
    'Oglądanie w Stremio na komputerze, telefonie lub telewizorze',
  'plugins.index.tbl.stremio.install':
    'Hostowany dodatek: wklej swój klucz, kliknij Zainstaluj',
  'plugins.index.tbl.bazarr.for':
    'Biblioteki Plex, Jellyfin, Emby, Sonarr, Radarr',
  'plugins.index.tbl.bazarr.install':
    'Gotowy dostawca dla Twojej instancji Bazarr',
  'plugins.index.tbl.kodi.for': 'Kodi 19+, LibreELEC, CoreELEC',
  'plugins.index.tbl.kodi.install':
    'Zainstaluj z pliku zip lub z repozytorium Wyzie',
  'plugins.index.use.stremio':
    'Użyj **Stremio**, jeśli oglądasz w aplikacji Stremio.',
  'plugins.index.use.bazarr':
    'Użyj **Bazarr**, jeśli korzystasz z Plex, Jellyfin lub Emby. Bazarr pobiera pliki napisów na dysk, a Twój serwer multimedialny automatycznie je wykrywa. Jest to również zalecana metoda dla Plex i Jellyfin; nie ma osobnej natywnej wtyczki.',
  'plugins.index.use.kodi':
    'Użyj **Kodi**, aby uzyskać natywną dla Kodi usługę napisów na Android TV, Raspberry Pi lub komputerze kina domowego.',
  'plugins.index.shared.sources':
    '**Źródła:** OpenSubtitles, SubDL i Podnapisi, agregowane przez Wyzie.',
  'plugins.index.shared.matching':
    '**Dopasowywanie:** Wyzie działa w oparciu o identyfikatory IMDB i TMDB oraz sezon i odcinek, dzięki czemu dopasowania są precyzyjne zarówno dla filmów, jak i seriali.',
  'plugins.index.shared.quota':
    '**Limit:** gdy Twój klucz się wyczerpie, wtyczka wyświetla przyjazny komunikat z odnośnikiem do [store.wyzie.io](https://store.wyzie.io) zamiast po cichu zawieść. Doładuj lub wykup subskrypcję, a wrócisz do działania.',
  'plugins.index.shared.languages':
    '**Języki:** ponad 100, wybieranych w każdej wtyczce.',
  'plugins.index.outro': 'Wybierz powyżej swoją platformę, aby zacząć.',

  'plugins.stremio.intro':
    'Dodatek napisów dla [Stremio](https://www.stremio.com/) instalowany jednym kliknięciem. Agreguje OpenSubtitles, SubDL i Podnapisi przez Wyzie oraz działa zarówno dla filmów, jak i seriali, na każdej platformie, na której działa Stremio.',
  'plugins.stremio.before':
    'Potrzebujesz darmowego klucza API Wyzie. Pobierz go na [store.wyzie.io/redeem](https://store.wyzie.io/redeem) albo kup klucz Pro lub wykup subskrypcję na [store.wyzie.io](https://store.wyzie.io/#plans).',
  'plugins.stremio.install.1':
    'Otwórz [stremio.wyzie.io/configure](https://stremio.wyzie.io/configure).',
  'plugins.stremio.install.2': 'Wklej swój **klucz API**.',
  'plugins.stremio.install.3':
    'Opcjonalnie: wpisz preferowane **języki** jako kody ISO 639-1, oddzielone przecinkami (na przykład `en,es,fr`). Pozostaw puste, aby uwzględnić wszystkie języki.',
  'plugins.stremio.install.4':
    'Opcjonalnie: włącz napisy dla **niesłyszących**, jeśli je preferujesz.',
  'plugins.stremio.install.5':
    'Kliknij **Zainstaluj**. Stremio otworzy się i poprosi o potwierdzenie; zaakceptuj i gotowe.',
  'plugins.stremio.install.after':
    'Twój klucz i preferencje są zakodowane w dodatku, więc nie ma nic więcej do skonfigurowania. Otwórz dowolny film lub odcinek i wybierz napisy z listy.',
  'plugins.stremio.cfg.key.f': 'Klucz API',
  'plugins.stremio.cfg.key.d': 'Twój klucz Wyzie. Wymagany.',
  'plugins.stremio.cfg.langs.f': 'Języki',
  'plugins.stremio.cfg.langs.d':
    'Kody ISO 639-1, oddzielone przecinkami. Puste oznacza wszystkie języki.',
  'plugins.stremio.cfg.hi.f': 'Dla niesłyszących',
  'plugins.stremio.cfg.hi.d':
    'Preferuj napisy dla niesłyszących, gdy są dostępne.',
  'plugins.stremio.cfg.note':
    'Aby zmienić którekolwiek z tych ustawień później, otwórz ponownie [stremio.wyzie.io/configure](https://stremio.wyzie.io/configure), dostosuj i zainstaluj ponownie.',
  'plugins.stremio.local':
    'Następnie otwórz `http://127.0.0.1:7000/configure`, wklej swój klucz i zainstaluj w Stremio.',
  'plugins.stremio.quota':
    'Jeśli Twój klucz osiągnie swój limit, dodatek wyświetli pojedynczy wpis napisów z odnośnikiem do [store.wyzie.io](https://store.wyzie.io), abyś mógł doładować lub wykupić subskrypcję. Gdy to zrobisz, napisy wrócą natychmiast.',
  'plugins.stremio.ts.none':
    '**Brak napisów.** Upewnij się, że tytuł ma identyfikator IMDB w Stremio (większość pozycji katalogu go ma) oraz że wybrane przez Ciebie języki faktycznie mają napisy dla tego tytułu. Spróbuj wyczyścić filtr języków, aby zobaczyć wszystko.',
  'plugins.stremio.ts.key':
    '**Nieprawidłowy klucz lub nic się nie ładuje.** Otwórz ponownie stronę konfiguracji i wklej klucz ponownie; przypadkowa spacja go uszkadza. Sprawdź, czy klucz działa na [store.wyzie.io/dashboard](https://store.wyzie.io/dashboard).',
  'plugins.stremio.ts.episode':
    '**Odcinek serialu nie pasuje.** Wyzie dopasowuje na podstawie sezonu i odcinka; upewnij się, że Stremio odtwarza właściwy wpis odcinka, a nie ogólną stronę serialu.',

  'plugins.bazarr.intro':
    '[Bazarr](https://www.bazarr.media/) zarządza napisami dla **Plex, Jellyfin, Emby, Sonarr i Radarr** w jednym miejscu. Dodanie Wyzie jako dostawcy daje wszystkim tym serwerom dostęp do OpenSubtitles, SubDL i Podnapisi za pomocą jednego klucza.',
  'plugins.bazarr.note':
    'Jest to zalecany sposób korzystania z Wyzie z Plex i Jellyfin. Bazarr pobiera pliki napisów obok Twoich multimediów, a Twój serwer automatycznie je wykrywa, więc nie jest wymagana osobna natywna wtyczka.',
  'plugins.bazarr.before':
    'Pobierz darmowy klucz API Wyzie na [store.wyzie.io/redeem](https://store.wyzie.io/redeem) i zapewnij sobie dostęp do plików instalacyjnych Bazarr (typowa ścieżka Docker: `/opt/bazarr/bazarr/`).',
  'plugins.bazarr.install.1':
    'Skopiuj `wyzie.py` do `bazarr/subliminal_patch/providers/wyzie.py`.',
  'plugins.bazarr.install.2':
    'Edytuj `bazarr/subliminal_patch/extensions.py` i dodaj `wyzie` do **obu** `provider_registry` i `provider_manager`.',
  'plugins.bazarr.install.3':
    'Edytuj `bazarr/list_subtitles.py` (lub `bazarr/config.py`, w zależności od Twojej wersji), aby udostępnić ustawienia `api_key`, `prefer_hi` i `sources`. Skopiuj wzorzec z istniejącego dostawcy, takiego jak `opensubtitlescom`.',
  'plugins.bazarr.install.4': 'Uruchom ponownie Bazarr.',
  'plugins.bazarr.install.5':
    'Przejdź do **Ustawienia, Dostawcy, Wyzie**, wklej swój klucz API i zapisz.',
  'plugins.bazarr.install.after':
    'Planowany jest pełnoprawny pull request integrujący tego dostawcę bezpośrednio z Bazarr. Do tego czasu jest to gotowy plik, który dodajesz do własnej instalacji.',
  'plugins.bazarr.cfg.key': 'Twój klucz Wyzie. Wymagany.',
  'plugins.bazarr.cfg.hi': 'Preferuj napisy dla niesłyszących.',
  'plugins.bazarr.cfg.sources':
    'Lista dostawców do odpytania oddzielona przecinkami lub `all`.',
  'plugins.bazarr.quota.402':
    '**402 lub 429** (saldo wyczerpane lub osiągnięto dzienny limit): Bazarr zapisuje w logach notatkę z odnośnikiem do [store.wyzie.io](https://store.wyzie.io) i nie zwraca wyników, więc czysto przechodzi do innych dostawców. Nic się nie zawiesza.',
  'plugins.bazarr.quota.401':
    '**401** (zły klucz): Bazarr zgłasza błąd uwierzytelniania, dzięki czemu wiesz, że trzeba ponownie wpisać klucz.',
  'plugins.bazarr.ts.missing':
    '**Wyzie nie pojawia się na liście dostawców.** Sprawdź ponownie krok instalacji edytujący `extensions.py`; wpis musi znajdować się zarówno w `provider_registry`, jak i `provider_manager`, a następnie uruchom ponownie Bazarr.',
  'plugins.bazarr.ts.none':
    '**Nie znaleziono napisów.** Upewnij się, że pozycja ma identyfikator IMDB w Bazarr oraz że włączone przez Ciebie języki mają dla niej napisy. Zawężaj `sources` tylko wtedy, gdy zamierzasz to zrobić.',
  'plugins.bazarr.ts.settings':
    '**Brak pól ustawień.** Krok ustawień nie został zastosowany dla Twojej wersji Bazarr; porównaj z blokiem ustawień działającego dostawcy i uruchom ponownie.',

  'plugins.kodi.intro':
    'Usługa napisów dla **Kodi 19+ (Matrix i nowsze)**, LibreELEC i CoreELEC. Korzysta ze standardowego punktu rozszerzeń Kodi `xbmc.subtitle.module`, więc pojawia się wszędzie tam, gdzie Kodi szuka napisów.',
  'plugins.kodi.before':
    'Pobierz darmowy klucz API Wyzie na [store.wyzie.io/redeem](https://store.wyzie.io/redeem).',
  'plugins.kodi.repo.intro':
    'Jednorazowa instalacja repozytorium pozwala Kodi **automatycznie aktualizować** dodatek za Ciebie.',
  'plugins.kodi.repo.1':
    'Pobierz instalator repozytorium: [**repository.wyzie.zip**](https://kodi.wyzie.io/repository.wyzie.zip).',
  'plugins.kodi.repo.2':
    'W Kodi: **Ustawienia, Dodatki, Zainstaluj z pliku zip**, a następnie wybierz `repository.wyzie.zip`. Jeśli Kodi to zablokuje, najpierw włącz **Ustawienia, System, Dodatki, Nieznane źródła**.',
  'plugins.kodi.repo.3':
    '**Ustawienia, Dodatki, Zainstaluj z repozytorium, Wyzie Repository, Usługi napisów, Wyzie Subs, Zainstaluj.**',
  'plugins.kodi.repo.4':
    '**Ustawienia, Odtwarzacz, Język, Domyślna usługa napisów**, a następnie wybierz **Wyzie Subs**.',
  'plugins.kodi.repo.5':
    'Otwórz ustawienia dodatku Wyzie Subs i wklej swój **klucz API**.',
  'plugins.kodi.zip.intro':
    'Użyj tego, jeśli wolisz nie dodawać repozytorium. Uwaga: instalacja z pliku zip **nie** aktualizuje się automatycznie.',
  'plugins.kodi.zip.1':
    'Pobierz plik zip dodatku: `service.subtitles.wyzie-<version>.zip`. Jeśli masz kod źródłowy, spakuj folder `kodi/` do zip tak, aby zip zawierał `addon.xml` w swoim katalogu głównym.',
  'plugins.kodi.zip.2':
    'W Kodi: **Ustawienia, Dodatki, Zainstaluj z pliku zip**, a następnie wybierz plik zip. Jeśli Kodi to zablokuje, najpierw włącz **Ustawienia, System, Dodatki, Nieznane źródła**.',
  'plugins.kodi.zip.3':
    '**Ustawienia, Odtwarzacz, Język, Domyślna usługa napisów**, a następnie wybierz **Wyzie Subs**.',
  'plugins.kodi.zip.4':
    'Otwórz ustawienia dodatku Wyzie Subs i wklej swój **klucz API**.',
  'plugins.kodi.cfg.key': 'Twój klucz Wyzie. Wymagany.',
  'plugins.kodi.cfg.hi': 'Preferuj napisy dla niesłyszących.',
  'plugins.kodi.cfg.langs':
    'Języki są pobierane z wybranych w Kodi języków napisów i automatycznie mapowane na ISO 639-1.',
  'plugins.kodi.matching.1':
    'Podczas odtwarzania Kodi udostępnia numer IMDB, sezon i odcinek. Dodatek odczytuje te dane, odpytuje `sub.wyzie.io/search` i zwraca pasujące napisy. Ponieważ Wyzie działa w oparciu o identyfikatory (IMDB i TMDB), dopasowania są dokładne zarówno dla filmów, jak i seriali.',
  'plugins.kodi.matching.2':
    '**Ręczne wyszukiwanie** obecnie wyświetla powiadomienie i nic nie robi, ponieważ Wyzie dopasowuje na podstawie identyfikatorów, a nie tytułów. Wyszukiwanie tytuł-do-identyfikatora jest w planach. Na razie pozwól, aby Kodi wyszukiwało automatycznie podczas odtwarzania.',
  'plugins.kodi.quota':
    'Odpowiedź 402 lub 429 wyświetla powiadomienie typu toast w Kodi, kierujące Cię na [store.wyzie.io](https://store.wyzie.io) w celu doładowania lub wykupienia subskrypcji.',
  'plugins.kodi.ts.notoffered':
    '**Wyzie nie jest oferowane podczas odtwarzania.** Upewnij się, że jest ustawione jako **Domyślna usługa napisów** oraz że odtwarzana pozycja ma identyfikator IMDB.',
  'plugins.kodi.ts.key':
    '**Nieprawidłowy klucz.** Otwórz ponownie ustawienia dodatku i wklej klucz ponownie.',
  'plugins.kodi.ts.episode':
    '**Brak wyników dla odcinka.** Upewnij się, że Kodi ma poprawne metadane sezonu i odcinka dla pliku; najlepiej działają pozycje pobrane do biblioteki przez scraper.',
};

export default messages;
