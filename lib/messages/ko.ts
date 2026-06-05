const messages: Record<string, string> = {
  // Navigation
  'nav.language': '언어',

  // Index / Landing Page
  'index.subtitle':
    'Wyzie는 자막 스크래핑 및 관련 작업을 위한 오픈 소스 도구 모음입니다.',
  'index.cta.start': '시작하기',
  'index.cta.store': '확인하기',

  'index.card.keys.title': '무료 API 키',
  'index.card.keys.body':
    'store.wyzie.io/redeem에서 간단한 Gmail 인증으로 무료 API 키를 받으세요. 하루 1,000회 요청을 무료로 사용할 수 있습니다. 더 많은 사용량을 위한 유료 플랜도 제공됩니다.',

  'index.card.ai.title': 'AI 번역',
  'index.card.ai.body':
    '원하는 자막을 80개 이상의 언어로 즉시 번역합니다. 번역 작업 중에도 큐 단위로 스트리밍되어 몇 초 만에 재생을 시작할 수 있습니다. Pro 키에서 사용 가능합니다.',

  'index.card.reliable.title': '안정성',
  'index.card.reliable.body':
    '일관된 서비스 가동률과 (거의) 매일 이루어지는 업데이트, 빠른 캐싱을 자랑합니다.',

  'index.card.simple.title': '간결함의 재정의',
  'index.card.simple.body':
    '구현하기 쉽고 사용하기 쉽습니다. Wyzie는 최대한 단순하게 설계되었습니다.',

  // Donate Page
  'donate.title': '후원해 주세요',
  'donate.body':
    '안녕하세요, Wyzie는 현재 후원에 많이 의존하고 있지만 후원이 거의 없는 상황입니다. 저는 16살이고 아르바이트를 하고 있으며, 공개 API 운영 비용이 월 100달러를 초과할 때도 있습니다. 외부 도움 없이는 계속 운영하기 어렵습니다. 정말 죄송하지만, 이 프로젝트는 제가 개인적으로 감당할 수 있는 수준을 넘어 성장했습니다.',
  'donate.cta': 'Wyzie 후원하기',

  // Subs Intro Page
  'subs.intro.title': 'Wyzie Subs 소개',
  'subs.intro.p1':
    'Wyzie Subs는 무료 오픈 소스 자막 스크래핑 API입니다. API에 요청하는 방법은 두 가지입니다: NPM 패키지를 사용하거나 Wyzie API를 직접 호출하는 것입니다. 패키지 사용을 권장하지만, 타입이 번거롭다고 느끼는 분도 있을 수 있습니다. API를 사용하기 전에 먼저 방법을 결정해야 합니다.',
  'subs.intro.note.ai':
    'AI 번역이 Pro 키에 대해 제공됩니다. 모든 제목, 80개 이상의 대상 언어, 번역 작업 중 실시간 스트리밍.',
  'subs.intro.important.apikey':
    '모든 요청에는 API 키가 필요합니다. [store.wyzie.io/redeem](https://store.wyzie.io/redeem)에서 무료 키를 받으세요 (Gmail 인증, 하루 1,000회 요청). 더 많은 사용량이 필요하다면 [Pro 및 충전 플랜](https://store.wyzie.io)을 이용하세요. 자세한 내용은 API 키 페이지를 참고하세요.',
  'subs.intro.note.npm':
    'TypeScript 또는 JavaScript에 익숙하다면 NPM 패키지 사용을 강력히 권장합니다',
  'subs.intro.btn.npm': 'NPM 패키지',
  'subs.intro.btn.direct': '직접 호출',

  'subs.intro.protect.h2': 'API 키 보호하기',
  'subs.intro.protect.important':
    '**실제 사례:** 개발자가 스트리밍 사이트의 프론트엔드 JavaScript에 키를 직접 붙여넣는 경우를 목격했습니다. 몇 시간 만에 제3자가 JS 번들에서 키를 스크래핑하여 일일 한도 또는 유료 잔액이 소진될 때까지 사용했습니다. 이렇게 소진된 쿼터는 환불되지 않으며, 당사 이용약관상 키 소유자의 책임으로 처리됩니다.',
  'subs.intro.protect.p1':
    'API 키는 비공개로 유지해야 하며, 다음 위치에는 **절대** 노출해서는 안 됩니다:',
  'subs.intro.protect.item1':
    '브라우저 JavaScript (스크립트 태그로 제공되는 모든 것)',
  'subs.intro.protect.item2':
    '모바일 앱 바이너리 (Android/iOS, 난독화된 것 포함)',
  'subs.intro.protect.item3': '브라우저 확장 프로그램',
  'subs.intro.protect.item4': '최종 사용자에게 배포되는 Electron / 데스크톱 앱',
  'subs.intro.protect.item5':
    '공개 Git 저장소, gist, 페이스트 사이트, 또는 스크린샷',
  'subs.intro.protect.p2':
    '키가 최종 사용자의 기기에 도달하면 공개된 것으로 간주하세요. 안전한 방법은 두 가지입니다:',
  'subs.intro.protect.opt1.h3': '옵션 1: Wyzie Worker 사용',
  'subs.intro.protect.opt1.p1':
    'Wyzie Worker는 API 키를 서버 측에서 주입하는 경량 Cloudflare Worker 프록시입니다. Cloudflare Workers에 배포하고 키를 NITRO_API_TOKEN 환경 변수로 설정하세요. 그런 다음 클라이언트 요청을 sub.wyzie.io 대신 워커 URL로 보내면 워커가 키를 첨부하여 요청을 전달합니다.',
  'subs.intro.protect.opt2.h3': '옵션 2: 직접 프록시 구축',
  'subs.intro.protect.opt2.p1':
    'Wyzie Worker를 사용하고 싶지 않다면 원하는 프레임워크로 간단한 서버 측 프록시를 구축할 수 있습니다. 개념은 동일합니다: 백엔드가 클라이언트의 요청을 받아 API 키를 추가한 뒤 sub.wyzie.io로 전달합니다.',

  // Subs Sources Page
  'subs.sources.title': 'Wyzie Subs 소스',
  'subs.sources.p1':
    'Wyzie Subs는 여러 제공자로부터 자막을 집계합니다. 제공자 상태 또는 소스 다운에 따라 소스 가용성이 달라질 수 있습니다. 항상 새로운 소스를 찾고 있으니 제안해 주세요.',

  'subs.sources.using.h2': '소스 사용 방법',
  'subs.sources.using.bullet1':
    'source=all을 사용하면 활성화된 모든 소스를 동시에 쿼리합니다',
  'subs.sources.using.bullet2':
    '지정하지 않으면 기본 소스는 opensubtitles입니다',
  'subs.sources.using.bullet3':
    '여러 소스를 쉼표로 구분된 목록으로 지정할 수 있습니다',

  'subs.sources.api.h2': 'API 엔드포인트',
  'subs.sources.api.p1':
    '현재 활성화된 소스 목록과 플랜 등급을 프로그래밍 방식으로 가져올 수 있습니다:',
  'subs.sources.api.free':
    '무료 키를 포함한 모든 키가 쿼리할 수 있는 소스입니다.',
  'subs.sources.api.paid': 'Pro 키가 필요한 소스입니다.',
  'subs.sources.api.allFree':
    'true이면 활성화된 모든 소스를 모든 키에서 사용할 수 있으며 paid는 비어 있습니다.',

  'subs.sources.scope.h3': '키별 범위 지정',
  'subs.sources.scope.p1':
    'API 키를 전달하면 해당 키가 실제로 사용할 수 있는 소스를 확인할 수 있습니다:',
  'subs.sources.scope.p2':
    '이 요청은 쿼터에서 요청을 소비하지 않고 키별 필드를 추가로 반환합니다:',
  'subs.sources.scope.available': '이 키가 현재 쿼리할 수 있는 소스입니다.',
  'subs.sources.scope.restricted':
    '이 키가 쿼리할 수 없는 활성화된 소스입니다 (Pro로 업그레이드하면 잠금 해제됩니다).',
  'subs.sources.scope.keyType': 'free 또는 paid.',
  'subs.sources.scope.keyValid':
    '키 형식이 잘못되었거나 찾을 수 없는 경우 false이며, 키를 확인할 수 없는 경우(이 때 available과 restricted는 생략됩니다) null입니다.',

  'subs.sources.details.h2': '소스 상세 정보',

  'subs.sources.opensubtitles.desc':
    '온라인 최대 규모의 자막 데이터베이스입니다. 다양한 언어로 영화와 TV 프로그램을 지원합니다. 공식 OpenSubtitles REST API를 사용합니다.',
  'subs.sources.opensubtitles.content': '영화 및 TV 프로그램',
  'subs.sources.opensubtitles.languages': '광범위한 다국어 지원',
  'subs.sources.opensubtitles.formats': 'SRT, ASS, SSA, VTT, SUB 등',

  'subs.sources.subdl.desc':
    '영화와 TV 프로그램을 폭넓게 제공하는 커뮤니티 기반 자막 사이트입니다.',
  'subs.sources.subdl.content': '영화 및 TV 프로그램',
  'subs.sources.subdl.languages': '광범위한 다국어 지원',
  'subs.sources.subdl.formats': 'SRT, ASS, SSA, VTT, SUB 등',

  'subs.sources.subf2m.desc':
    '영화와 TV 프로그램에 대한 광범위한 언어 지원을 갖춘 대형 자막 저장소입니다.',
  'subs.sources.subf2m.content': '영화 및 TV 프로그램',
  'subs.sources.subf2m.languages': '광범위한 다국어 지원',
  'subs.sources.subf2m.formats': 'SRT, ASS, SSA, VTT, SUB 등',

  'subs.sources.podnapisi.desc':
    '가장 오래된 자막 데이터베이스 중 하나입니다. 영화와 TV 프로그램을 잘 정리된 컬렉션으로 제공합니다.',
  'subs.sources.podnapisi.content': '영화 및 TV 프로그램',
  'subs.sources.podnapisi.languages': '광범위한 다국어 지원',
  'subs.sources.podnapisi.formats': 'SRT, ASS, SSA, VTT, SUB 등',

  'subs.sources.animetosho.desc':
    'AnimeTosho에 색인된 토렌트 릴리스에서 애니메이션 자막 첨부 파일을 직접 스크래핑합니다.',
  'subs.sources.animetosho.content': '애니메이션 (TV 프로그램)',
  'subs.sources.animetosho.languages': '일본어, 영어, 릴리스에 따라 기타 언어',
  'subs.sources.animetosho.formats': 'ASS, SRT, SSA 등',
  'subs.sources.animetosho.note':
    'AnimeTosho는 2026년 5월에 서비스 종료 예정입니다.',

  'subs.sources.gestdown.desc':
    'Gestdown API를 통해 다양한 언어를 지원하는 TV 프로그램 자막을 제공합니다.',
  'subs.sources.gestdown.content': 'TV 프로그램 전용',
  'subs.sources.gestdown.languages': '광범위한 다국어 지원',
  'subs.sources.gestdown.formats': 'SRT, ASS 등',

  'subs.sources.jimaku.desc':
    '커뮤니티가 관리하는 애니메이션 자막 파일 저장소인 jimaku.cc를 스크래핑합니다. TMDB API를 사용하여 제목을 매칭합니다.',
  'subs.sources.jimaku.content': '애니메이션 (영화 및 TV 프로그램)',
  'subs.sources.jimaku.languages':
    '주로 일본어; 이용 가능한 파일에 따라 영어, 중국어 등도 제공',
  'subs.sources.jimaku.formats': 'SRT, ASS, SSA, VTT, SUB 등',

  'subs.sources.kitsunekko.desc':
    '전용 애니메이션 자막 저장소인 kitsunekko.net의 디렉터리 목록을 스크래핑합니다. TMDB API를 사용하여 제목을 매칭합니다.',
  'subs.sources.kitsunekko.content': '애니메이션 (TV 프로그램)',
  'subs.sources.kitsunekko.languages': '영어 및 일본어 자막 디렉터리',
  'subs.sources.kitsunekko.formats': 'SRT, ASS, SSA, VTT, SUB 등',

  'subs.sources.yify.desc':
    'IMDB ID로 매칭된 자막을 yifysubtitles.ch에서 스크래핑합니다. 영화 전용입니다.',
  'subs.sources.yify.content': '영화 전용 (TV 프로그램은 지원되지 않음)',
  'subs.sources.yify.languages':
    '광범위한 다국어 지원 (알바니아어, 아랍어, 영어, 프랑스어, 스페인어 등 다수)',
  'subs.sources.yify.formats': 'SRT (ZIP 아카이브 내 제공)',

  'subs.sources.ajatttools.desc':
    'Ajatt-Tools/kitsunekko-mirror GitHub 저장소에서 자막을 가져옵니다. 미디어 유형별로 정리되어 있습니다. TMDB API를 사용하여 제목을 매칭합니다.',
  'subs.sources.ajatttools.content':
    '애니메이션 및 드라마 (TV 프로그램 및 영화)',
  'subs.sources.ajatttools.languages': '주로 일본어; 영어, 중국어 등도 제공',
  'subs.sources.ajatttools.formats': 'SRT, ASS, SSA, VTT, SUB 등',

  'subs.sources.ai.desc':
    '스크래퍼가 아닙니다. 이용 가능한 최상의 소스 자막을 기반으로 온디맨드로 AI 번역된 SRT를 생성합니다. 자세한 내용은 AI 번역 가이드를 참고하세요.',
  'subs.sources.ai.content': 'Wyzie가 SRT를 찾을 수 있는 모든 콘텐츠',
  'subs.sources.ai.languages': '80개 이상의 대상 언어',
  'subs.sources.ai.formats': 'SRT 전용',

  // Subs Package Page
  'subs.pkg.title': 'Wyzie NPM 패키지 사용하기',
  'subs.pkg.p1':
    'Wyzie Subs NPM 패키지는 자막을 검색하고 가져오는 간단하고 사용하기 쉬운 인터페이스를 제공합니다.',
  'subs.pkg.install.h2': '설치',
  'subs.pkg.important':
    '모든 요청에는 API 키가 필요합니다. [store.wyzie.io/redeem](https://store.wyzie.io/redeem)에서 무료 키를 받아 key 파라미터로 전달하세요. 자세한 내용은 API 키 페이지를 참고하세요.',
  'subs.pkg.usage.h2': '사용 방법',
  'subs.pkg.params.h3': '파라미터',
  'subs.pkg.params.note':
    '더 많은 정보가 필요하거나 막히셨다면 [Wyzie Subs 홈페이지](https://sub.wyzie.io)를 방문하세요.',

  'subs.pkg.param.tmdb':
    '영화 또는 TV 프로그램의 TMDB ID (tmdb_id 또는 imdb_id 중 하나는 필수).',
  'subs.pkg.param.imdb':
    '영화 또는 TV 프로그램의 IMDB ID (imdb_id 또는 tmdb_id 중 하나는 필수).',
  'subs.pkg.param.format':
    '반환할 파일 형식 (예: srt, ass). 목록을 허용합니다.',
  'subs.pkg.param.season': '시즌 번호 (episode 필요).',
  'subs.pkg.param.episode': '에피소드 번호 (season 필요).',
  'subs.pkg.param.language': '자막 언어의 ISO 639-1 코드. 목록을 허용합니다.',
  'subs.pkg.param.encoding': '문자 인코딩 필터 (예: utf-8, latin-1).',
  'subs.pkg.param.hi': '청각 장애인 자막 여부를 나타내는 불리언.',
  'subs.pkg.param.source':
    '쿼리할 자막 제공자 (all이면 활성화된 모든 소스 조회).',
  'subs.pkg.param.release': '릴리스/씬 필터 (목록을 허용합니다).',
  'subs.pkg.param.filename': '파일명 필터; file 및 fileName 별칭이 지원됩니다.',
  'subs.pkg.param.origin': '콘텐츠 출처 필터 (예: WEB, BLURAY, DVD).',
  'subs.pkg.param.key':
    'API 키 (필수). store.wyzie.io/redeem에서 무료로 받으세요.',
  'subs.pkg.param.refresh':
    '캐시를 우회하고 소스에서 새로운 결과를 가져옵니다.',

  'subs.pkg.helpers':
    '패키지에는 경량 TMDB 헬퍼도 포함됩니다: /search 호출 전 ID를 빠르게 찾기 위한 searchTmdb, getTvDetails, getSeasonDetails. 또한 getSources를 사용하면 현재 활성화된 자막 소스 목록을 가져올 수 있습니다.',
  'subs.pkg.types.h3': '타입',
  'subs.pkg.type.search': 'API가 인식하는 모든 유효한 파라미터.',
  'subs.pkg.type.query':
    'wyzie-subs API에서 사용 가능한 모든 파라미터 (선택 및 필수).',
  'subs.pkg.type.subtitle': 'API에서 반환되는 모든 값과 해당 타입.',
  'subs.pkg.type.sources': '/sources 엔드포인트의 응답 타입.',
  'subs.pkg.types.end':
    '타입은 매우 간결하고 잘 문서화되어 있습니다. GitHub 저장소에 링크된 types.ts 파일을 확인하세요.',
  'subs.pkg.config.h3': '설정',
  'subs.pkg.config.p1':
    '어떤 사용자가 Github에서 API 호스트명 설정 기능을 요청했는데 좋은 생각 같아서 추가했습니다. 아래에 사용 방법이 있습니다. 여러분을 사랑합니다!',

  // Subs Direct Page
  'subs.direct.title': 'Wyzie Subs 직접 호출하기',
  'subs.direct.caution':
    '더 쉽고 안정적인 NPM 패키지 사용을 강력히 권장합니다.',
  'subs.direct.p1':
    'NPM 패키지를 사용하지 않기로 결정했다면 시작해 봅시다. API 파라미터와 API가 반환하는 데이터만 설명합니다. API를 요청하는 방법은 전적으로 여러분에게 달려 있습니다.',
  'subs.direct.important':
    '모든 요청에는 API 키가 필요합니다. [store.wyzie.io/redeem](https://store.wyzie.io/redeem)에서 무료 키를 받아 모든 요청에 &key=YOUR_KEY로 포함하세요. 자세한 내용은 API 키 페이지를 참고하세요.',

  'subs.direct.params.h3': '파라미터',
  'subs.direct.param.id': '프로그램 또는 영화의 TMDB 또는 IMDB ID (필수).',
  'subs.direct.param.seasonEpisode':
    'TV 검색을 위한 시즌 및 에피소드. 두 값 모두 함께 있어야 합니다.',
  'subs.direct.param.language':
    '언어 필터 (ISO 639-1 코드). 여러 값은 쉼표로 구분합니다.',
  'subs.direct.param.format': '반환할 자막 형식. 여러 값을 허용합니다.',
  'subs.direct.param.hi': '청각 장애인 자막 선호 여부.',
  'subs.direct.param.encoding': '문자 인코딩 필터.',
  'subs.direct.param.source':
    '쿼리할 자막 제공자 (all이면 활성화된 모든 소스 조회; 기본값은 opensubtitles).',
  'subs.direct.param.release': '릴리스 또는 씬 이름 필터 (쉼표로 구분).',
  'subs.direct.param.file': '파일명 필터 (별칭: file, filename, fileName).',
  'subs.direct.param.origin':
    '콘텐츠 출처 필터, 쉼표로 구분 (예: WEB, BLURAY, DVD).',
  'subs.direct.param.key':
    'API 키 (필수). store.wyzie.io/redeem에서 무료로 받으세요.',
  'subs.direct.param.refresh':
    '캐시를 우회하고 새로운 결과를 가져옵니다. 소스가 업데이트되었을 가능성이 있을 때 사용하세요.',
  'subs.direct.important.imdb':
    "IMDB ID를 사용할 때는 ID 앞에 처음 두 문자('tt')가 포함되어 있는지 확인하세요.",

  'subs.direct.data.h3': '반환 데이터',
  'subs.direct.data.id': '자막 파일의 ID.',
  'subs.direct.data.url': '자막 파일의 URL.',
  'subs.direct.data.flagUrl': '언어 로케일 국기 이미지의 URL.',
  'subs.direct.data.format': '자막 파일의 형식.',
  'subs.direct.data.encoding': '자막 파일의 문자 인코딩.',
  'subs.direct.data.display': '자막 언어명 (대문자로 시작).',
  'subs.direct.data.language': '언어의 ISO 3166-2 코드.',
  'subs.direct.data.media': '자막이 속한 미디어의 이름.',
  'subs.direct.data.isHearingImpaired':
    '청각 장애인 접근 가능 자막 여부를 나타내는 불리언.',
  'subs.direct.data.source': '자막이 스크래핑된 소스.',
  'subs.direct.data.release': '기본 릴리스 이름.',
  'subs.direct.data.releases': '자막과 호환되는 다른 릴리스 이름.',
  'subs.direct.data.fileName': '이용 가능한 경우 원본 파일명.',
  'subs.direct.data.downloadCount':
    '소스 플랫폼에서의 다운로드 횟수 (이용 가능한 경우).',
  'subs.direct.data.origin': '콘텐츠 출처 (예: WEB, BluRay, DVD).',
  'subs.direct.data.matchedRelease':
    '필터와 매칭된 릴리스 값 (필터가 제공된 경우).',
  'subs.direct.data.matchedFilter':
    '매칭된 사용자 지정 필터 (필터가 제공된 경우).',
  'subs.direct.data.ai':
    'AI 번역 자막이면 true, 일반 스크래핑 자막이면 false. 어느 한 쪽만 원할 때 클라이언트 측 필터로 사용하세요.',

  // Subs Translate Page
  'subs.translate.title': 'AI 자막 번역',
  'subs.translate.important':
    'AI 번역은 **Pro 기능**입니다. 번역 한 번에 키 잔액에서 **100회 요청**이 차감되며, 캐시 적중 시에도 동일하게 차감됩니다. 무료 키는 사용할 수 없습니다.',
  'subs.translate.p1':
    'Wyzie는 어떤 자막이든 80개 이상의 언어로 즉시 번역할 수 있습니다. 번역 결과는 모델이 처리하는 동안 스트리밍되므로, 전체 파일을 기다리지 않고 1~2초 내에 재생을 시작할 수 있습니다. 결과는 30일 동안 캐시되므로, 동일한 번역을 두 번째로 요청하면 즉시 제공됩니다.',

  'subs.translate.ways.h2': '두 가지 사용 방법',
  'subs.translate.way1.h3': '1. 검색 응답에서 언어 선택하기',
  'subs.translate.way1.p1':
    '모든 /search 응답에는 지원되는 각 언어별로 "ai": true가 설정되고 /translate를 가리키는 url이 포함된 추가 항목이 포함됩니다. UI에서 AI 행을 다른 자막 행과 동일하게 처리하면 됩니다: 사용자가 클릭하면 해당 URL을 가져오세요.',
  'subs.translate.way1.filter': 'UI에서 AI 행을 숨기려면 필터링하세요:',
  'subs.translate.way2.h3': '2. /translate 직접 호출하기',

  'subs.translate.param.id': 'TMDB 또는 IMDB ID (필수).',
  'subs.translate.param.target':
    '영어 전체 이름으로 표기된 대상 언어 (예: Spanish, Japanese, Brazilian Portuguese) (필수).',
  'subs.translate.param.seasonEpisode': 'TV용. 두 값 모두 함께 있어야 합니다.',
  'subs.translate.param.key':
    'API 키. /search에서 URL을 가져온 경우 대신 tk를 사용하세요.',
  'subs.translate.param.tk':
    '/search가 반환하는 서명된 토큰. key와 동일하지만 원시 키를 노출하지 않습니다.',

  'subs.translate.headers.p':
    '응답 본문은 text/plain; charset=utf-8로 스트리밍되는 SRT 파일입니다. 유용한 응답 헤더:',
  'subs.translate.header.xcache':
    '캐시에서 제공되면 HIT-REDIS, 새로 생성되면 MISS.',
  'subs.translate.header.xsourcelang': '번역기가 입력으로 사용한 자막의 언어.',
  'subs.translate.header.xtargetlang': 'target 파라미터의 에코.',
  'subs.translate.header.xsourceprovider': '소스 자막을 제공한 스크래퍼.',

  'subs.translate.how.h2': '작동 방식',
  'subs.translate.how.step1':
    'Wyzie가 일반 소스에서 SRT 자막을 검색하며, 이용 가능한 경우 영어를 선호합니다.',
  'subs.translate.how.step2':
    'SRT는 50개 큐 단위의 청크로 분할되어 순차적으로 번역됩니다. 각 청크는 완료되는 즉시 개별적으로 캐시됩니다.',
  'subs.translate.how.step3':
    '출력은 큐 단위로 스트리밍됩니다. 스트리밍 SRT 본문을 허용하는 플레이어는 나머지가 완료되기 전에 첫 번째 줄부터 표시를 시작할 수 있습니다.',
  'subs.translate.how.step4':
    '완성된 번역은 id, season, episode, target을 키로 하여 30일 동안 Redis에 캐시됩니다.',

  'subs.translate.languages.h2': '지원 대상 언어',
  'subs.translate.languages.p':
    '주요 유럽어, 아시아어, 아프리카어, 중동 언어를 포함한 80개 이상의 언어. 영어 이름으로 전달하세요 (es가 아닌 Spanish). 목록은 모든 /search 응답에서 ai: true 행으로도 반환되며, 이것이 정식 기준입니다.',

  'subs.translate.limitations.h2': '제한 사항',
  'subs.translate.limit1':
    'AI 번역에는 SRT 소스가 필요합니다. 이용 가능한 자막이 모두 .ass, .vtt 또는 다른 형식인 경우 404 No SRT found가 반환됩니다.',
  'subs.translate.limit2':
    '번역 품질은 소스 자막에 따라 달라집니다. 타이밍이 맞지 않거나 오타가 있는 소스는 번역도 동일한 문제를 가집니다.',
  'subs.translate.limit3':
    '일부 사용자는 AI 행을 완전히 제외하고 싶을 수 있습니다. 클라이언트에서 ai === false로 필터링하세요.',
  'subs.translate.limit4':
    '번역은 캐시 적중 시에도 요금이 부과됩니다. 새로 생성되든 30일 캐시에서 제공되든 /translate 요청 한 번에 100회 요청이 차감됩니다.',

  // Subs API Keys Page
  'subs.keys.title': 'API 키',
  'subs.keys.p1':
    'Wyzie Subs는 모든 요청에 API 키가 필요합니다. 무료 등급으로 대부분의 사용 사례를 처리할 수 있으며, 유료 플랜은 더 많은 사용량을 처리합니다.',

  'subs.keys.tiers.h2': '등급',
  'subs.keys.tier.free': '무료 (Gmail 필요)',
  'subs.keys.tier.free.limit': '하루 1,000회 요청 / UTC 기준',
  'subs.keys.tier.pro': '$5 일회성',
  'subs.keys.tier.pro.limit': '400,000회 요청',
  'subs.keys.tier.topup': '$0.0625부터 / 5K',
  'subs.keys.tier.topup.limit': '유료 잔액에 추가됩니다',
  'subs.keys.tiers.end':
    'Pro 및 충전은 만료되지 않습니다. 정기 결제를 원하시나요? 월 $32 구독으로 매월 6,000,000회 요청을 사용할 수 있습니다 (카드 전용). 전체 가격 및 대시보드는 store.wyzie.io를 참고하세요.',

  'subs.keys.free.h2': '무료 키 받기',
  'subs.keys.free.p':
    '[store.wyzie.io/redeem](https://store.wyzie.io/redeem)을 방문하세요:',
  'subs.keys.free.step1': 'Cloudflare Turnstile 캡차를 빠르게 풀어주세요.',
  'subs.keys.free.step2':
    'Gmail 주소를 입력하세요 (무료 등급에서는 Gmail만 허용됩니다).',
  'subs.keys.free.step3': '이메일로 발송된 6자리 코드를 입력하세요.',
  'subs.keys.free.step4': 'wyzie-abc123... 형식의 API 키를 받게 됩니다.',
  'subs.keys.free.gmail':
    '각 Gmail 주소는 무료 키를 한 번만 발급받을 수 있습니다. 해당 이메일에 이미 연결된 무료 키가 있다면, 재인증 시 기존 키가 반환됩니다.',

  'subs.keys.pro.h2': 'Pro로 업그레이드하기',
  'subs.keys.pro.p1':
    '[store.wyzie.io](https://store.wyzie.io)를 방문하여 무료 키를 받을 때 사용한 이메일로 결제하세요. 기존 wyzie-... 키가 그대로 업그레이드되며 400K 유료 요청이 추가됩니다. 정기 결제를 원하시나요? 대신 월 $32 구독으로 매월 6,000,000회 요청 할당량이 추가됩니다 (카드 전용).',
  'subs.keys.pro.p2':
    '기존 키가 없는 새 이메일로 결제하면 새 wyzie-... 키가 생성되어 이메일로 발송됩니다.',

  'subs.keys.protect.h2': '키를 클라이언트에 노출하지 마세요',
  'subs.keys.protect.important':
    '**API 키를 클라이언트 측 코드에 절대 포함하지 마세요.** 브라우저 JavaScript, 모바일 앱, 브라우저 확장 프로그램, Electron 스타일 데스크톱 앱, 공개 Git 저장소는 모두 클라이언트 측으로 간주됩니다. 최종 사용자에게 배포하는 모든 것은 검사될 수 있으며, 사용자가 스트리밍 사이트의 프론트엔드에 키를 붙여넣었다가 제3자가 JS 번들을 스크래핑하여 몇 시간 만에 요청 잔액을 모두 소진한 실제 사례가 있습니다. 이렇게 소비된 쿼터는 환불되지 않습니다.',
  'subs.keys.protect.p2':
    '클라이언트 앱에서 키를 안전하게 사용하는 두 가지 방법:',
  'subs.keys.protect.option1':
    '[Wyzie Worker](https://github.com/wyziedevs/wyzie-worker) 사용: 키를 서버 측에 보관하는 무료 Cloudflare Worker 프록시입니다. 클라이언트가 sub.wyzie.io 대신 Worker URL을 가리키도록 설정하세요.',
  'subs.keys.protect.option2':
    '직접 프록시 구축: sub.wyzie.io로 전달하기 전에 키를 추가하는 백엔드 엔드포인트면 됩니다. 10줄 예시는 소개 페이지를 참고하세요.',
  'subs.keys.protect.devtools':
    'DevTools의 네트워크 탭에 키가 표시되면 노출된 것입니다. 공개된 것으로 간주하고 support에 이메일을 보내 키를 교체하세요.',

  'subs.keys.using.h2': '키 사용하기',
  'subs.keys.using.p': '모든 API 요청에 &key=YOUR_KEY를 추가하세요:',
  'subs.keys.using.npm.h3': 'NPM 패키지',

  'subs.keys.limit.h2': '한도 초과 시',
  'subs.keys.limit.free':
    '**무료 등급** 소진 -> API가 X-RateLimit-Reset 및 Retry-After 헤더와 함께 429를 반환합니다. 일일 카운터는 UTC 자정에 초기화됩니다.',
  'subs.keys.limit.paid':
    '**유료 잔액** 소진 -> API가 402를 반환합니다. [store.wyzie.io/topup](https://store.wyzie.io/topup)에서 충전하거나, 대시보드에서 **자동 충전**을 활성화하면 잔액이 설정한 임계값 아래로 떨어질 때 자동으로 충전됩니다.',

  'subs.keys.faq.h2': '자주 묻는 질문',
  'subs.keys.faq.q1': '키를 잃어버렸습니다. 새 키를 받을 수 있나요?',
  'subs.keys.faq.a1':
    '[store.wyzie.io](https://store.wyzie.io)를 방문하여 등록된 이메일로 "키 분실" 절차를 이용하면 기존 키를 재발송해 드립니다.',
  'subs.keys.faq.q2': '하나의 키를 여러 프로젝트에서 사용할 수 있나요?',
  'subs.keys.faq.a2': '네. API를 호출하는 어디서든 키를 사용할 수 있습니다.',
  'subs.keys.faq.q3': '키가 만료되나요?',
  'subs.keys.faq.a3':
    '아니요. 무료 및 유료 키 모두 만료되지 않습니다. 무료 키는 하루 한도가 있으며, 유료 잔액은 사용할 때까지 유지됩니다.',
  'subs.keys.faq.q4': '자동 충전은 안전한가요?',
  'subs.keys.faq.a4':
    '월 지출 한도를 설정할 수 있습니다. 그 한도를 초과하여 청구하지 않으며, 모든 확인 이메일과 대시보드에서 원클릭으로 비활성화할 수 있습니다.',

  // Proxy Intro Page
  'proxy.intro.title': 'Wyzie Proxy 소개',
  'proxy.intro.note':
    'Wyzie Subs 프로덕션 버전은 더 이상 이 프록시를 사용하지 않으며, 대신 [i6.shark](https://github.com/wyziedevs/i6.shark)를 사용합니다.',
  'proxy.intro.p1':
    'Wyzie Proxy는 CORS 또는 기타 제한 없이 모든 웹사이트에 요청을 보낼 수 있는 강력한 프록시 API입니다. Wyzie Proxy는 Nitro로 제작되었기 때문에 다음 플랫폼 어디에서나 호스팅할 수 있습니다: AWS Amplify, Azure, Cloudflare, Netlify, Stormkit, Vercel, Zeabur.',
  'proxy.intro.btn.hosting': '호스팅',
  'proxy.intro.btn.check': '확인하기',

  // Proxy Hosting Page
  'proxy.hosting.title': 'Wyzie Proxy 호스팅하기',
  'proxy.hosting.p1':
    'Nitro 덕분에 Wyzie Proxy 빌드는 매우 간단합니다. 먼저 다음 명령어로 Wyzie Proxy 저장소를 클론하세요:',
  'proxy.hosting.p2': '그런 다음 필요한 모든 패키지를 설치하세요:',
  'proxy.hosting.p3': '모든 패키지가 설치되면 프록시를 빌드할 수 있습니다:',
  'proxy.hosting.p4':
    '출력 결과는 /.output/server 폴더에 생성됩니다. Cloudflare Workers에 배포하는 경우 index.mjs 파일을 워커에 복사하여 붙여넣으세요. 그 외의 경우 파일을 일반적인 방법으로 배포하면 됩니다.',

  // i6.shark Intro Page
  'i6shark.intro.title': 'i6.shark 소개',
  'i6shark.intro.p1':
    'i6.shark는 /48 서브넷에서 무작위로 생성된 IPv6 주소로 HTTP 요청을 보낼 수 있는 IPv6 프록시 서버입니다. 현재 프로덕션에서 Wyzie Subs를 구동하는 프록시입니다.',
  'i6shark.intro.p2':
    '/48 서브넷에는 1,208,925,819,614,629,174,706,176개 (1.2 x 10^24)의 IPv6 주소가 있어 전통적인 IP 차단으로는 사실상 차단이 불가능합니다. 단일 서브넷을 사용하면 정말로 차단을 원하는 측이 ASN 주소를 차단할 수 있으므로 주의가 필요합니다.',
  'i6shark.intro.btn.hosting': '호스팅',
  'i6shark.intro.btn.github': 'GitHub',

  'i6shark.intro.features.h2': '기능',
  'i6shark.intro.feature1':
    '**무작위 IPv6 생성**: 각 요청마다 /48 프리픽스에서 무작위 IPv6 주소를 생성합니다',
  'i6shark.intro.feature2':
    '**전체 HTTP 메서드 지원**: GET, POST, PUT, DELETE 및 모든 기타 HTTP 메서드',
  'i6shark.intro.feature3':
    '**HMAC-SHA256 인증**: user-agent 기반 토큰을 사용한 안전한 API 키 인증',
  'i6shark.intro.feature4':
    '**지능형 IP 풀 관리**: 설정 가능한 풀 크기로 자동 IP 로테이션. 스마트 IP 수명 주기 관리. IP별 요청 수 계산. 비활성 임계값 기반 미사용 IP 정리.',
  'i6shark.intro.feature5':
    '**고급 요청 처리**: 커스텀 헤더 전달. Cloudflare 및 CDN 헤더 제거. 여러 URL 파라미터 형식 지원. 시스템 기본 IP로의 선택적 폴백.',
  'i6shark.intro.feature6':
    '**호스트 화이트리스팅**: 보안을 위한 내장 도메인 화이트리스트 (코드에서 설정 가능)',
  'i6shark.intro.feature7':
    '**자동 유지 관리**: 주기적인 IP 풀 플러싱. 서브넷 검증 및 정리. 연결 풀링 및 keepalive 최적화.',
  'i6shark.intro.feature8':
    '**고성능**: 버퍼 풀링을 통한 동시 요청 처리. 설정 가능한 타임아웃 및 연결 제한. 효율적인 IPv6 주소 관리.',
  'i6shark.intro.feature9':
    '**디버그 모드**: 문제 해결 및 모니터링을 위한 상세 로깅',

  'i6shark.intro.requirements.h2': '요구 사항',
  'i6shark.intro.req1': 'Go 1.20 이상',
  'i6shark.intro.req2': 'IPv6를 지원하는 Linux/Unix 시스템 (Ubuntu 권장)',
  'i6shark.intro.req3': '루트 권한 (포트 80 바인딩 및 IPv6 조작을 위해)',
  'i6shark.intro.req4': '호스팅 제공업체로부터의 IPv6 /48 서브넷 할당',

  'i6shark.intro.providers.h2': '호스팅 제공업체',
  'i6shark.intro.providers.p1':
    '다음 제공업체는 /48 IPv6 서브넷을 제공하는 것으로 알려져 있습니다:',

  // i6.shark Hosting Page
  'i6shark.hosting.title': 'i6.shark 호스팅하기',
  'i6shark.hosting.p1':
    'i6.shark 설정에는 /48 IPv6 서브넷이 있는 VPS가 필요합니다. 설정이 완료되면 최소한의 유지 관리로 자율적으로 실행됩니다.',

  'i6shark.hosting.steps.h2': '단계',
  'i6shark.hosting.step1': '저장소를 /opt/i6.shark에 클론하세요:',
  'i6shark.hosting.step2': 'src/consts.go에서 상수를 설정하세요:',
  'i6shark.hosting.step2.note':
    '서버에 맞게 SharedSecret, IPv6Prefix, Interface를 업데이트하세요. 나머지 튜닝 상수는 기본값이 적절하게 설정되어 있어 일반적으로 변경할 필요가 없습니다.',
  'i6shark.hosting.step3': '애플리케이션을 빌드하세요:',
  'i6shark.hosting.step4': 'systemd 서비스를 생성하세요:',
  'i6shark.hosting.step5': '서비스를 활성화하고 시작하세요:',
  'i6shark.hosting.step5.check': '상태를 확인하세요:',
  'i6shark.hosting.post':
    '프록시 서버는 이제 부팅 시 자동으로 실행되며 충돌 시 자동으로 재시작됩니다.',

  'i6shark.hosting.daily.h2': '일일 재시작 (선택 사항)',
  'i6shark.hosting.daily.p':
    '무작위 시간에 서버를 매일 재시작하는 크론 작업을 추가하세요:',

  'i6shark.hosting.auth.h2': 'API 인증',
  'i6shark.hosting.auth.p':
    'API 토큰은 공유 비밀 키를 사용하여 HMAC-SHA256으로 생성됩니다. 키 생성의 입력값은 user-agent 헤더입니다. 구현 세부 사항은 소스 코드의 validateAPIToken 함수를 참고하세요.',
};

export default messages;
