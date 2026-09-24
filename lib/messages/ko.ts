const messages: Record<string, string> = {
  // Navigation
  'nav.language': '언어',

  // Index / Landing Page
  'index.subtitle':
    'Wyzie는 자막 스크래핑 및 관련 작업을 위한 도구 모음입니다.',
  'index.cta.start': '시작하기',
  'index.cta.store': '확인하기',

  'index.card.keys.title': '무료 API 키',
  'index.card.keys.body':
    'store.wyzie.io/redeem에서 간단한 이메일 인증 (Gmail, Outlook, Yahoo, iCloud, Proton 및 기타 주요 제공업체)으로 무료 API 키를 받으세요. 하루 1,000회 요청을 무료로 사용할 수 있습니다. 더 많은 사용량을 위한 유료 플랜도 제공됩니다.',

  'index.card.ai.title': 'AI 번역',
  'index.card.ai.body':
    '원하는 자막을 80개 이상의 언어로 즉시 번역합니다. SRT는 배치가 완료되는 대로 순서대로 스트리밍되므로 첫 줄이 빠르게 도착합니다. Pro 키에서 사용 가능합니다.',

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
    'Wyzie Subs는 무료 등급을 제공하는 자막 스크래핑 API입니다. API에 요청하는 방법은 두 가지입니다: NPM 패키지를 사용하거나 Wyzie API를 직접 호출하는 것입니다. 패키지 사용을 권장하지만, 타입이 번거롭다고 느끼는 분도 있을 수 있습니다. API를 사용하기 전에 먼저 방법을 결정해야 합니다.',
  'subs.intro.note.ai':
    'AI 번역이 Pro 키에 대해 제공됩니다. 모든 제목, 80개 이상의 대상 언어, 배치가 완료되는 대로 자막 순서대로 스트리밍.',
  'subs.intro.important.apikey':
    '모든 요청에는 API 키가 필요합니다. [store.wyzie.io/redeem](https://store.wyzie.io/redeem)에서 무료 키를 받으세요 (이메일 인증, 하루 1,000회 요청). 더 많은 사용량이 필요하다면 [Pro 및 충전 플랜](https://store.wyzie.io)을 이용하세요. 자세한 내용은 API 키 페이지를 참고하세요.',
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
    'Wyzie Worker는 API 키를 서버 측에서 주입하는 경량 Cloudflare Worker 프록시입니다. Cloudflare Workers에 배포하고 두 개의 시크릿을 설정하세요: `NITRO_API_TOKEN` (Wyzie API 키), `NITRO_WORKER_KEY` (직접 정한 시크릿). 워커로 보내는 모든 요청에는 `Authorization: Bearer <NITRO_WORKER_KEY>`가 포함되어야 합니다. 없으면 워커가 401로 응답하며, `NITRO_WORKER_KEY`가 설정되지 않은 경우에는 모든 요청을 503으로 거부합니다. 워커 키 역시 서버 측에 보관해야 하므로, 워커는 브라우저나 앱 코드가 아닌 반드시 자체 백엔드에서 호출하세요. 워커는 API 키를 첨부하여 각 요청을 sub.wyzie.io로 전달합니다.',
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
  'subs.sources.using.bullet2': '지정하지 않으면 기본 소스는 charlie입니다',
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
    '스크래퍼가 아닙니다. 이용 가능한 최상의 소스 자막을 기반으로 온디맨드로 AI 번역된 SRT를 생성합니다. Pro 키 전용입니다. 자세한 내용은 AI 번역 가이드를 참고하세요.',
  'subs.sources.ai.content': 'Wyzie가 텍스트 자막을 찾을 수 있는 모든 콘텐츠',
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
  'subs.pkg.param.hi':
    'true이면 청각 장애인 자막만 반환합니다. 청각 장애인 자막을 구분해 표시하지 않는 소스는 아무것도 반환하지 않습니다.',
  'subs.pkg.param.source':
    '코드명으로 지정하는 쿼리할 자막 제공자 (all이면 키가 사용할 수 있는 가동 중인 모든 소스 조회; 기본값은 charlie).',
  'subs.pkg.param.release': '릴리스/씬 필터 (목록을 허용합니다).',
  'subs.pkg.param.filename': '파일명 필터; file 및 fileName 별칭이 지원됩니다.',
  'subs.pkg.param.origin': '콘텐츠 출처 필터 (예: WEB, BLURAY, DVD).',
  'subs.pkg.param.key':
    'API 키 (필수). store.wyzie.io/redeem에서 무료로 받으세요.',
  'subs.pkg.param.refresh':
    '캐시를 우회하고 소스에서 새로운 결과를 가져옵니다.',

  'subs.pkg.helpers':
    '패키지에는 경량 TMDB 헬퍼도 포함됩니다: /search 호출 전 ID를 빠르게 찾기 위한 searchTmdb, getTvDetails, getSeasonDetails. getSources는 가동 중인 소스의 코드명을 반환하며 (상태 점검으로 일시 중지된 소스는 복구될 때까지 제외됩니다), getSourcesInfo는 등급 정보가 포함된 전체 /sources 응답을 반환하고, 키를 전달하면 해당 키가 사용할 수 있는 소스도 함께 반환합니다. withDownloadOptions는 결과의 url에 다운로드 옵션 (WebVTT 출력, 타이밍 보정, 두 번째 언어 등)을 추가합니다.',
  'subs.pkg.types.h3': '타입',
  'subs.pkg.type.search': 'API가 인식하는 모든 유효한 파라미터.',
  'subs.pkg.type.query':
    'wyzie-subs API에서 사용 가능한 모든 파라미터 (선택 및 필수).',
  'subs.pkg.type.subtitle': 'API에서 반환되는 모든 값과 해당 타입.',
  'subs.pkg.type.sources': '/sources 엔드포인트의 응답 타입.',
  'subs.pkg.type.download':
    'withDownloadOptions의 옵션: to, offset, fps, plain, 그리고 Pro 전용 sdh, clean, dual.',
  'subs.pkg.type.sync':
    'syncSubtitle의 입력과 결과 (Wyzie Synced, Pro 키): 사용할 자막 (검색 결과, 그 url, 또는 tmdb_id/imdb_id와 language), detectSpeech가 찾은 speech 또는 media 파일, 그리고 offset, fps, confidence가 포함된 동기화된 다운로드 링크. [Wyzie Synced](/subs/usage/synced)를 참고하세요.',
  'subs.pkg.types.end':
    '타입은 매우 간결하고 잘 문서화되어 있습니다. wyzie-lib 저장소의 [src/types.ts](https://github.com/wyziedevs/wyzie-lib/blob/main/src/types.ts)를 참고하세요.',
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
  'subs.direct.param.hi':
    'true이면 청각 장애인 자막만 반환합니다 (선호 설정이 아니라 필터입니다). 청각 장애인 자막을 구분해 표시하지 않는 소스는 아무것도 반환하지 않습니다.',
  'subs.direct.param.encoding': '문자 인코딩 필터.',
  'subs.direct.param.source':
    '쿼리할 자막 제공자 (all이면 키가 사용할 수 있는 모든 소스 조회; 기본값은 charlie).',
  'subs.direct.param.release': '릴리스 또는 씬 이름 필터 (쉼표로 구분).',
  'subs.direct.param.file': '파일명 필터 (별칭: file, filename, fileName).',
  'subs.direct.param.origin':
    '콘텐츠 출처 필터, 쉼표로 구분 (예: WEB, BLURAY, DVD).',
  'subs.direct.param.key':
    'API 키 (필수). store.wyzie.io/redeem에서 무료로 받으세요.',
  'subs.direct.param.refresh':
    '캐시를 우회하고 새로운 결과를 가져옵니다. 소스가 업데이트되었을 가능성이 있을 때 사용하세요.',
  'subs.direct.param.page':
    '반환할 페이지 (1부터 시작). limit과 함께 사용할 때만 적용됩니다.',
  'subs.direct.param.limit':
    '페이지당 결과 수 (1~200). 지정하지 않으면 모든 결과가 하나의 응답으로 반환됩니다.',
  'subs.direct.important.imdb':
    "IMDB ID를 사용할 때는 ID 앞에 처음 두 문자('tt')가 포함되어 있는지 확인하세요.",

  'subs.direct.data.h3': '반환 데이터',
  'subs.direct.data.id': '자막 파일의 ID.',
  'subs.direct.data.url':
    '암호화된 tok 파라미터가 포함된 https://sub.wyzie.io/c/... 다운로드 링크. 다운로드마다 1회 요청이 차감됩니다. 아래의 자막 다운로드 섹션을 참고하세요.',
  'subs.direct.data.flagUrl': '언어 로케일 국기 이미지의 URL.',
  'subs.direct.data.format': '자막 파일의 형식.',
  'subs.direct.data.encoding': '자막 파일의 문자 인코딩.',
  'subs.direct.data.display': '자막 언어명 (대문자로 시작).',
  'subs.direct.data.language': '언어의 ISO 639-1 코드.',
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
  'subs.direct.download.p':
    '/search 응답의 모든 url은 https://sub.wyzie.io/c/... 주소를 가리키며 tok 쿼리 파라미터를 포함합니다. tok은 암호화되어 있어 API 키를 노출하지 않으며, 60일 동안 유효합니다. URL을 그대로 사용하세요. 검색은 1회 요청, 각 다운로드는 추가로 1회 요청이 차감되며, 검색을 실행한 키에 청구됩니다. 해당 키로 다운로드 비용을 지불할 수 없으면 링크가 거부됩니다:',
  'subs.direct.dl.p':
    '다운로드 URL에 다음 옵션을 추가하면 반환되는 내용을 바꿀 수 있습니다. 캐시 여부와 관계없이 모든 다운로드에서 작동하며, 추가 비용이 들지 않습니다 (아래 dual 제외). X-Subtitle-Transforms 응답 헤더에 적용된 항목과 그 횟수가 표시됩니다.',
  'subs.direct.dl.param.to':
    '출력 형식: `srt` 또는 `vtt`. `vtt`는 브라우저 `<track>` 요소에서 바로 재생됩니다. 기본값: 파일의 원래 형식.',
  'subs.direct.dl.param.offset':
    '모든 줄을 지정한 초만큼 이동합니다 (음수이면 앞당겨집니다).',
  'subs.direct.dl.param.fps':
    '다른 릴리스용으로 만들어진 자막에서 점점 벌어지는 싱크를 보정합니다: `SUBTITLE_FPS:VIDEO_FPS` (예: 필름 프레임 레이트 영상에 PAL 자막을 맞추는 경우 `25:23.976`).',
  'subs.direct.dl.param.plain':
    '깔끔한 일반 텍스트 줄: `{\\an8}`, `<font>` 같은 스타일 코드를 제거하고, 빈 줄과 반복되는 줄을 삭제하며, 줄을 시간순으로 정렬하고, 작은 겹침을 잘라냅니다.',
  'subs.direct.dl.param.sdh':
    '청각 장애인용 텍스트를 제거합니다: `[DOOR SLAMS]`, `(sighs)`, `JOHN:` 같은 화자 표시, ♪ 가사.',
  'subs.direct.dl.param.clean':
    '심한 욕설을 첫 글자만 남기고 가립니다 (`f***`). 영어 파일에만 적용됩니다.',
  'subs.direct.dl.param.dual':
    '각 줄 아래에 두 번째 언어 (ISO 639-1 코드)를 이 파일의 타이밍에 맞춰 추가합니다. 일치하는 자막을 찾은 경우에만 1회 요청이 추가로 차감되며, 찾지 못하면 `X-Dual: unavailable`과 함께 원래 파일만 반환됩니다.',
  'subs.direct.dl.after':
    '옵션은 조합할 수 있습니다 (예: `&to=vtt&sdh=strip&offset=-1.5`). 링크에는 이미 `format`, `encoding`, `id`, 그리고 (에피소드의 경우) `season`과 `episode`가 포함되어 있으니 그대로 두세요. `autoUnzip=false`를 사용하면 아카이브가 그대로 반환됩니다.',
  'subs.direct.headers.p':
    '모든 /search 응답에는 전체 결과 수를 나타내는 X-Total-Count 헤더가 포함됩니다. limit을 전달하면 다음도 포함됩니다:',
  'subs.direct.header.xpage': '반환된 페이지.',
  'subs.direct.header.xperpage': '적용된 limit 값.',
  'subs.direct.header.xtotalpages': '전체 페이지 수.',
  'subs.direct.headers.rate':
    '응답에는 X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset도 포함됩니다. 이 값은 근사치로 취급하세요: 사용량은 짧은 배치 단위로 청구와 정산되므로 실제 사용량보다 약간 늦게 반영될 수 있습니다.',

  // Subs Translate Page
  'subs.translate.title': 'AI 자막 번역',
  'subs.translate.important':
    'AI 번역은 **Pro 기능**입니다. 무료 키는 403 Upgrade required를 받습니다. 호출 한 번에 키 잔액에서 **100회 요청**이 차감되며, 캐시 적중 시에도 마찬가지입니다. 출력이 나오기 전에 호출이 실패하면 (자막을 찾지 못함, 검색 또는 다운로드 실패, 서버 혼잡) 100회 요청이 자동으로 환불됩니다.',
  'subs.translate.p1':
    'Wyzie는 어떤 자막이든 80개 이상의 언어로 즉시 번역할 수 있습니다. 번역된 SRT는 배치가 완료되는 대로 순서대로 스트리밍되므로, 전체 파일이 끝날 때까지 기다리지 않고 첫 큐가 빠르게 도착합니다. 완성된 번역은 30일 동안 캐시되므로, 이후 동일한 제목, 에피소드, 대상 언어에 대한 요청은 캐시에서 제공됩니다.',

  'subs.translate.ways.h2': '두 가지 사용 방법',
  'subs.translate.way1.h3': '1. 검색 응답에서 언어 선택하기',
  'subs.translate.way1.p1':
    'Pro 키의 경우 모든 /search 응답에 "ai": true가 설정되고 /translate를 가리키는 url이 포함된 AI 번역 행도 포함됩니다: 지원되는 언어마다 하나씩, 또는 language= 필터에 지정한 언어만 포함됩니다. 무료 키에는 이러한 행이 절대 포함되지 않습니다. UI에서 AI 행을 다른 자막 행과 동일하게 처리하세요: 사용자가 클릭하면 해당 URL을 가져오면 됩니다.',
  'subs.translate.way1.filter': 'UI에서 AI 행을 숨기려면 필터링하세요:',
  'subs.translate.way2.h3': '2. /translate 직접 호출하기',

  'subs.translate.param.id': 'TMDB 또는 IMDB ID (필수).',
  'subs.translate.param.target':
    '대상 언어 (필수): 지원 목록에 있는 이름 (예: Spanish, Japanese, Portuguese (Brazil)) 또는 해당 코드 (예: es, ja, pt-BR).',
  'subs.translate.param.seasonEpisode': 'TV용. 두 값 모두 함께 있어야 합니다.',
  'subs.translate.param.key':
    'API 키. /search에서 URL을 가져온 경우 대신 tk를 사용하세요.',
  'subs.translate.param.tk':
    '/search의 AI 행 URL에 포함된 암호화된 토큰. key처럼 작동하며, API 키를 노출하지 않고, 60일 동안 유효합니다.',

  'subs.translate.headers.p':
    '응답 본문은 text/plain; charset=utf-8로 스트리밍되는 SRT 파일입니다. 유용한 응답 헤더:',
  'subs.translate.header.xcache':
    '캐시에서 제공되면 HIT-REDIS, 새로 생성되면 MISS.',
  'subs.translate.header.xsourcelang': '번역기가 입력으로 사용한 자막의 언어.',
  'subs.translate.header.xtargetlang': 'target 파라미터의 에코.',
  'subs.translate.header.xsourceprovider': '소스 자막을 제공한 스크래퍼.',

  'subs.translate.how.h2': '작동 방식',
  'subs.translate.how.step1':
    'Wyzie가 일반 소스에서 텍스트 자막을 검색하며, 이용 가능한 경우 영어 SRT를 우선합니다. VTT, ASS, SSA, SUB 파일은 먼저 SRT로 변환됩니다.',
  'subs.translate.how.step2':
    'SRT는 최대 약 3,800자 단위의 배치로 분할되어 Google Translate로 한 번에 4개 배치씩 번역됩니다.',
  'subs.translate.how.step3':
    '출력은 배치가 완료되는 대로 SRT 순서대로 스트리밍되므로 첫 큐가 빠르게 도착합니다. 스트리밍 SRT 본문을 허용하는 플레이어는 나머지가 완료되기 전에 첫 번째 줄부터 표시를 시작할 수 있습니다.',
  'subs.translate.how.step4':
    '완성된 번역은 id, season, episode, target을 키로 하여 30일 동안 Redis에 캐시됩니다.',

  'subs.translate.languages.h2': '지원 대상 언어',
  'subs.translate.languages.p':
    '주요 유럽어, 아시아어, 아프리카어, 중동 언어를 포함한 80개 이상의 언어. 목록에 있는 이름 (Spanish, Portuguese (Brazil)) 또는 해당 코드 (es, pt-BR)로 전달하세요. Pro 키의 경우 language= 필터가 없는 모든 /search 응답에서 전체 목록이 ai: true 행으로도 반환되며, 이것이 정식 기준입니다.',

  'subs.translate.limitations.h2': '제한 사항',
  'subs.translate.limit1':
    'AI 번역에는 시작점이 될 텍스트 자막이 필요합니다. VTT, ASS, SSA, SUB 소스는 먼저 SRT로 변환되며, 텍스트 자막이 없으면 호출이 404 No subtitle found를 반환하고 100회 요청이 환불됩니다.',
  'subs.translate.limit2':
    '번역 품질은 소스 자막에 따라 달라집니다. 타이밍이 맞지 않거나 오타가 있는 소스는 번역도 동일한 문제를 가집니다.',
  'subs.translate.limit3':
    '일부 사용자는 AI 행을 완전히 제외하고 싶을 수 있습니다. 클라이언트에서 ai === false로 필터링하세요.',
  'subs.translate.limit4':
    '번역은 캐시 적중 시에도 요금이 부과됩니다. 새로 생성되든 30일 캐시에서 제공되든 /translate 호출 한 번에 100회 요청이 차감됩니다. 출력이 나오기 전에 실패한 호출만 환불됩니다.',

  // Subs Synced Page
  'subs.synced.title': 'Wyzie Synced',
  'subs.synced.important':
    'Wyzie Synced는 **Pro 기능**입니다. 무료 키는 403 Paid feature를 받습니다. 동기화에 성공할 때마다 **1회 요청**이 차감되며, 일치 항목을 찾지 못한 동기화는 차감되지 않습니다. 이후 동기화된 링크를 다운로드하면 다른 다운로드와 동일하게 계산됩니다.',
  'subs.synced.p1':
    '온라인에서 찾은 자막은 가지고 있는 영상과 다른 릴리스에 맞춰 타이밍이 잡혀 있는 경우가 많습니다: 몇 초 일찍 또는 늦게 시작하거나, 해당 릴리스의 프레임 레이트가 달라 영화가 진행될수록 점점 더 어긋납니다. Wyzie Synced는 여러분이 가진 영상의 오디오를 듣고 사람이 말하는 구간을 찾아, 자막을 그에 맞추는 오프셋과 프레임 레이트 보정값을 계산합니다. 보정이 적용된 일반 다운로드 링크를 받게 됩니다 (offset 및 fps [다운로드 옵션](/subs/usage/direct#download-options)).',
  'subs.synced.web.p':
    '가장 쉬운 방법: [sub.wyzie.io/synced](https://sub.wyzie.io/synced)를 열고, Pro 키를 입력한 뒤, 영상 파일과 제목을 선택하고 동기화된 자막을 다운로드하세요. 오디오는 브라우저에서 분석되므로 영상은 업로드되지 않습니다: 발화 타이밍만 전송됩니다. MKV, MP4, AVI를 비롯한 대부분의 형식이 지원되며, AC3, E-AC3, DTS 오디오도 지원됩니다.',
  'subs.synced.api.p':
    '원하는 자막 (다운로드 링크, 또는 Wyzie가 가장 잘 맞는 자막을 고르도록 할 제목)과 오디오를 보내세요. 오디오는 직접 감지한 발화 타이밍이나 오디오/비디오 파일 자체 중 하나입니다.',
  'subs.synced.param.url':
    '/search에서 받은 다운로드 링크 (https://sub.wyzie.io/c/…). 링크에 붙어 있는 다른 다운로드 옵션 (to, sdh 등)은 동기화된 링크에도 유지됩니다.',
  'subs.synced.param.id':
    'url 대신 사용하는 TMDB 또는 IMDB ID. Wyzie가 해당 언어의 상위 5개 텍스트 자막을 시도해 오디오에 가장 잘 맞는 것을 반환합니다.',
  'subs.synced.param.language':
    'id와 함께 사용: 자막 언어의 ISO 639-1 코드 (필수).',
  'subs.synced.param.seasonEpisode':
    'id와 함께, TV용. 두 값 모두 함께 있어야 합니다.',
  'subs.synced.param.key':
    'Pro API 키. 생략하면 url의 tok에 연결된 키가 사용됩니다. 키 없이 이용하는 다운로드 페이지의 링크에는 key가 필요합니다.',
  'subs.synced.param.speech':
    '사람이 말하는 구간: 초 단위의 [[start, end], …]. 어떤 음성 활동 감지기 (wyzie-lib의 detectSpeech, Silero VAD, webrtcvad)의 결과든 사용할 수 있습니다. 2시간짜리 영화는 약 2,000개 구간, JSON으로 약 40 KB입니다.',
  'subs.synced.param.media':
    '또는 오디오/비디오 파일 자체: 원시 요청 본문으로 보내거나 (이 경우 다른 필드는 쿼리 문자열에 넣습니다), multipart 필드 media로 보냅니다. 최대 95 MB이므로 영화 전체라면 오디오 트랙만 업로드하세요.',
  'subs.synced.fields.note':
    '필드는 JSON 본문, multipart 폼, 또는 쿼리 문자열 (원시 media 본문을 보내는 경우)에 넣습니다.',
  'subs.synced.response.p': '200 응답은 JSON입니다:',
  'subs.synced.field.url':
    '타이밍 보정 (offset, fps)과 키용 새 tok이 포함된 자막 다운로드 링크. 다른 /search url과 동일하게 사용하세요: 다운로드마다 1회 요청이 차감됩니다.',
  'subs.synced.field.offset':
    '프레임 레이트 보정 후 모든 줄에 더해지는 초 (음수이면 앞당겨짐).',
  'subs.synced.field.fps':
    'SUBTITLE_FPS:VIDEO_FPS 형식의 프레임 레이트 보정값 (예: "25:23.976"). 보정이 필요 없었으면 null.',
  'subs.synced.field.confidence':
    '0~1: 이 타이밍이 다른 모든 후보보다 얼마나 뚜렷하게 앞서는지 나타냅니다. 반환된 결과는 모두 일치 검사를 통과한 것이며, 값이 높을수록 더 확실합니다.',
  'subs.synced.field.inSync': '자막이 이미 가지고 있는 영상과 일치했으면 true.',
  'subs.synced.field.subtitle':
    '사용된 자막 (release, fileName, format, source 등). url을 사용한 경우 format만 포함됩니다.',
  'subs.synced.errors.p':
    '오류는 message와 details가 포함된 JSON으로 반환됩니다. 거부되거나 실패한 동기화는 차감되지 않습니다.',
  'subs.synced.error.400':
    '필드가 누락되었거나 잘못되었습니다: 자막이나 오디오가 없거나, speech가 [start, end] 쌍 형식이 아닙니다.',
  'subs.synced.error.401':
    '키가 없거나, url의 다운로드 링크가 잘못되었거나 만료되었습니다.',
  'subs.synced.error.403':
    '키가 무료 키이거나 (Wyzie Synced는 Pro 필요), 잘못되었거나, 일시 중지 상태입니다.',
  'subs.synced.error.404': '해당 제목에 그 언어의 텍스트 자막이 없습니다.',
  'subs.synced.error.413':
    'media 파일이 95 MB를 초과합니다. 오디오 트랙만 업로드하거나 speech를 보내세요.',
  'subs.synced.error.422':
    '어떤 오프셋이나 프레임 레이트에서도 자막이 오디오와 맞지 않거나 (다른 편집본이나 에피소드일 가능성이 높음), 오디오에 발화가 너무 적거나, 파일을 디코딩할 수 없습니다.',
  'subs.synced.error.429':
    '다른 호출과 마찬가지로, 키로 요청 비용을 지불할 수 없습니다.',
  'subs.synced.error.503':
    '다른 업로드를 디코딩하느라 바쁘거나, 검색을 잠시 사용할 수 없습니다. 잠시 후 다시 시도하거나 speech를 보내세요.',
  'subs.synced.lib.p':
    'wyzie-lib에는 detectSpeech (사이트가 브라우저에서 실행하는 것과 동일한 감지기)와 syncSubtitle이 있습니다:',
  'subs.synced.how.step1':
    '발화 감지: 오디오를 8 kHz 모노로 디코딩하고 (5.1 및 7.1 믹스에서는 대사가 담긴 센터 채널만 사용), 음성 활동 감지기가 사람이 말하는 구간을 표시합니다: 음절에 따라 오르내리는, 음성 대역의 큰 소리입니다.',
  'subs.synced.how.step2':
    '정렬: 일반적인 프레임 레이트 불일치 (25 대 23.976, 25 대 24, 24 대 23.976 fps) 각각에 대해, ±10분 이내의 모든 오프셋에서 자막의 화면 표시 시간과 해당 발화의 교차 상관을 계산합니다.',
  'subs.synced.how.step3':
    '세부 조정: 각 줄이 시작하는 지점을 발화가 시작하는 지점에 맞춰, 최적의 타이밍을 10 ms 단위까지 다듬습니다.',
  'subs.synced.how.step4':
    "타이밍은 다른 모든 오프셋보다 월등히 두드러질 때만 반환되므로, 다른 편집본이나 에피소드용 자막은 잘못 이동되는 대신 422 Couldn't sync를 받습니다.",
  'subs.synced.limit1':
    'Wyzie Synced는 일정한 오프셋과 프레임 레이트 차이를 보정합니다. 다른 편집본 (장면이 추가되거나 빠진 버전)용 자막은 한 번의 이동으로 보정할 수 없으므로 거부됩니다.',
  'subs.synced.limit2':
    '발화가 필요합니다: 대사가 적은 영화나 대부분이 음악인 오디오는 동기화되지 않을 수 있습니다.',
  'subs.synced.limit3': '최대 ±10분까지의 오프셋을 찾을 수 있습니다.',

  // Subs API Keys Page
  'subs.keys.title': 'API 키',
  'subs.keys.p1':
    'Wyzie Subs는 모든 요청에 API 키가 필요합니다. 무료 등급으로 대부분의 사용 사례를 처리할 수 있으며, 유료 플랜은 더 많은 사용량을 처리합니다.',

  'subs.keys.tiers.h2': '등급',
  'subs.keys.tier.free': '무료 (이메일 인증)',
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
    '주요 개인 이메일 제공업체 (Gmail, Outlook/Hotmail, Yahoo, iCloud, AOL, Proton 등)의 주소를 입력하세요. 일회용 이메일 도메인은 거부됩니다.',
  'subs.keys.free.step3': '이메일로 발송된 6자리 코드를 입력하세요.',
  'subs.keys.free.step4': 'wyzie-abc123... 형식의 API 키를 받게 됩니다.',
  'subs.keys.free.gmail':
    '이메일 주소와 네트워크마다 무료 키를 하나만 받을 수 있으며, 두 번째 요청은 409를 반환합니다. 키를 잃어버렸나요? [대시보드](https://store.wyzie.io/dashboard)에서 "Forgot key" 버튼을 사용하면 키를 다시 보내 드립니다.',

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
    '[Wyzie Worker](https://github.com/wyziedevs/wyzie-worker) 사용: API 키를 `NITRO_API_TOKEN` 시크릿으로 보관하는 무료 Cloudflare Worker 프록시입니다. Worker에 대한 모든 호출은 직접 설정하는 두 번째 시크릿을 담은 `Authorization: Bearer <NITRO_WORKER_KEY>`를 보내야 하므로, 클라이언트가 자체 백엔드를 거치도록 하고 워커 키도 서버 측에 보관하세요.',
  'subs.keys.protect.option2':
    '직접 프록시 구축: sub.wyzie.io로 전달하기 전에 키를 추가하는 백엔드 엔드포인트면 됩니다. 10줄 예시는 소개 페이지를 참고하세요.',
  'subs.keys.protect.devtools':
    'DevTools의 네트워크 탭에 키가 표시되면 노출된 것입니다. 공개된 것으로 간주하고 [대시보드](https://store.wyzie.io/dashboard)에서 키를 교체하세요.',

  'subs.keys.using.h2': '키 사용하기',
  'subs.keys.using.p': '모든 API 요청에 &key=YOUR_KEY를 추가하세요:',
  'subs.keys.using.npm.h3': 'NPM 패키지',

  'subs.keys.limit.h2': '한도 초과 시',
  'subs.keys.limit.p':
    '검색은 1회 요청, 자막 다운로드는 건당 1회 요청이 차감되므로, 한 번 검색하고 파일 하나를 다운로드하면 2회를 사용합니다. AI 번역은 호출당 100회 요청이 차감됩니다.',
  'subs.keys.limit.free':
    '**무료 등급** 소진 -> 검색 및 다운로드 링크가 429 Daily request limit reached를 반환하며, JSON에 reset_at이 포함되고 Retry-After 헤더가 함께 전송됩니다. 하루 1,000회 요청 한도는 UTC 자정에 초기화됩니다.',
  'subs.keys.limit.paid':
    '**유료 잔액** 소진 -> 검색 및 다운로드 링크가 402를 반환하며, JSON에 충전 링크가 포함됩니다. [store.wyzie.io/topup](https://store.wyzie.io/topup)에서 충전하거나, 대시보드에서 **자동 충전**을 활성화하면 잔액이 설정한 임계값 아래로 떨어질 때 자동으로 충전됩니다.',
  'subs.keys.hold.p1':
    '주로 데이터센터나 호스팅 IP에서 매우 많은 양의 요청을 보내는 키는 자동으로 일시 중지됩니다. 일시 중지된 키는 모든 요청에서 403 Key on hold를 받으며, JSON에는 복구 링크 (https://store.wyzie.io/verify)와 지원 링크 (https://store.wyzie.io/contact)가 포함됩니다.',
  'subs.keys.hold.p2':
    '키를 즉시 복구하려면 키를 사용하는 웹사이트를 [store.wyzie.io/verify](https://store.wyzie.io/verify)에서 DNS TXT 레코드 또는 meta 태그로 인증하세요. 인증된 사이트가 있는 키는 다시는 자동으로 일시 중지되지 않으므로, 트래픽이 많은 사이트는 일시 중지되기 전에 미리 인증해 둘 수 있습니다.',
  'subs.keys.hold.p3':
    '백엔드 서비스나 앱처럼 웹사이트가 없나요? [지원팀에 문의](https://store.wyzie.io/contact)하여 키를 복구하세요.',

  'subs.keys.files.h2': '파일에 포함되는 내용',
  'subs.keys.files.adfilter':
    '**광고 필터링**: sub.wyzie.io를 통해 제공되는 모든 자막에서 제공자의 광고 큐 (OpenSubtitles 배너, 도박 홍보, "...에서 무료 시청" 같은 줄)가 제거됩니다. SRT 큐는 번호가 다시 매겨지므로 건너뛰는 번호가 없습니다. OpenSubtitles를 포함한 모든 제공자가 sub.wyzie.io를 통해 제공되므로 필터는 모든 제공자에 적용됩니다.',
  'subs.keys.files.promo':
    '**무료 및 개발용 키**는 각 파일의 맨 처음 (0–6 s)에 [store.wyzie.io](https://store.wyzie.io)를 안내하는 짧은 큐 하나가 들어갑니다. 유료 키는 큐가 없는 깨끗한 파일을 받습니다.',

  'subs.keys.faq.h2': '자주 묻는 질문',
  'subs.keys.faq.q1': '키를 잃어버렸습니다. 새 키를 받을 수 있나요?',
  'subs.keys.faq.a1':
    '[대시보드](https://store.wyzie.io/dashboard)를 열고 등록된 이메일로 "Forgot key" 버튼을 이용하면 기존 키를 재발송해 드립니다. 키가 유출되었다고 생각되면 대신 대시보드에서 키를 교체하세요.',
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
  'i6shark.intro.req1': 'Go 1.22 이상',
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

  // Plugins
  'plugins.common.required': '필수',

  'plugins.index.intro':
    'Wyzie Subs는 이미 사용 중인 미디어 앱에 바로 연동됩니다. 모든 플러그인은 동일한 `https://sub.wyzie.io/search` 엔드포인트와 통신하며 무료 **Wyzie API 키**가 필요합니다. [store.wyzie.io](https://store.wyzie.io/#plans)에서 받으세요.',
  'plugins.index.tbl.stremio.for':
    '데스크톱, 모바일 또는 TV의 Stremio에서 시청',
  'plugins.index.tbl.stremio.install':
    '호스팅 애드온: 키를 붙여넣고 설치를 클릭',
  'plugins.index.tbl.bazarr.for':
    'Plex, Jellyfin, Emby, Sonarr, Radarr 라이브러리',
  'plugins.index.tbl.bazarr.install': 'Bazarr 인스턴스를 위한 드롭인 공급자',
  'plugins.index.tbl.kodi.for': 'Kodi 19+, LibreELEC, CoreELEC',
  'plugins.index.tbl.kodi.install': 'zip 또는 Wyzie 저장소에서 설치',
  'plugins.index.use.stremio':
    'Stremio 앱에서 시청한다면 **Stremio**를 사용하세요.',
  'plugins.index.use.bazarr':
    'Plex, Jellyfin 또는 Emby를 사용한다면 **Bazarr**를 사용하세요. Bazarr는 자막 파일을 디스크에 다운로드하고 미디어 서버가 자동으로 이를 인식합니다. 이는 Plex와 Jellyfin에 권장되는 방법이기도 하며, 별도의 네이티브 플러그인은 없습니다.',
  'plugins.index.use.kodi':
    'Android TV, Raspberry Pi 또는 홈시어터 PC에서 Kodi 네이티브 자막 서비스를 원한다면 **Kodi**를 사용하세요.',
  'plugins.index.shared.sources':
    '**소스:** 키가 사용할 수 있는 모든 소스(`source=all`): 무료 키는 charlie와 lima, Pro 키는 7개 전체.',
  'plugins.index.shared.matching':
    '**매칭:** Wyzie는 IMDB 및 TMDB ID와 시즌 및 에피소드를 기반으로 작동하므로 영화와 시리즈 모두에 대해 정확하게 매칭됩니다.',
  'plugins.index.shared.quota':
    '**할당량:** 키가 소진되면 플러그인이 조용히 실패하는 대신 [store.wyzie.io](https://store.wyzie.io)로 연결되는 안내 메시지를 표시합니다. 충전하거나 구독하면 다시 사용할 수 있습니다.',
  'plugins.index.shared.languages':
    '**언어:** 100개 이상, 플러그인별로 선택 가능.',
  'plugins.index.outro':
    '시작하려면 위에서 플랫폼을 선택하세요. 모든 플러그인의 소스 코드는 [wyzie-plugins 저장소](https://github.com/wyziedevs/wyzie-plugins)에 있습니다.',

  'plugins.stremio.intro':
    '[Stremio](https://www.stremio.com/)를 위한 원클릭 자막 애드온입니다. 키가 사용할 수 있는 모든 Wyzie 소스를 쿼리하며, Stremio가 실행되는 모든 플랫폼에서 영화와 시리즈 모두에 대해 작동합니다.',
  'plugins.stremio.before':
    '무료 Wyzie API 키가 필요합니다. [store.wyzie.io/redeem](https://store.wyzie.io/redeem)에서 받거나, [store.wyzie.io](https://store.wyzie.io/#plans)에서 Pro 키를 구매하거나 구독하세요.',
  'plugins.stremio.install.1':
    '[stremio.wyzie.io/configure](https://stremio.wyzie.io/configure)를 엽니다.',
  'plugins.stremio.install.2': '**API 키**를 붙여넣습니다.',
  'plugins.stremio.install.3':
    '선택 사항: 선호하는 **언어**를 ISO 639-1 코드로 쉼표로 구분하여 입력합니다(예: `en,es,fr`). 모든 언어를 사용하려면 비워 두세요.',
  'plugins.stremio.install.4':
    '선택 사항: 청각 장애인용 자막만 받으려면 **청각 장애인용**을 켭니다. 모든 자막을 보려면 꺼 두세요. 켜져 있는 동안에는 청각 장애인용 자막을 구분해 표시하지 않는 소스가 아무것도 반환하지 않습니다.',
  'plugins.stremio.install.5':
    '**설치**를 클릭합니다. Stremio가 열리고 확인을 요청하면 수락하면 완료됩니다.',
  'plugins.stremio.install.after':
    '키와 환경설정이 애드온에 인코딩되므로 따로 설정할 것이 없습니다. 아무 영화나 에피소드를 열고 목록에서 자막을 선택하세요.',
  'plugins.stremio.cfg.key.f': 'API 키',
  'plugins.stremio.cfg.key.d': 'Wyzie 키입니다. 필수입니다.',
  'plugins.stremio.cfg.langs.f': '언어',
  'plugins.stremio.cfg.langs.d':
    'ISO 639-1 코드, 쉼표로 구분. 비워 두면 모든 언어를 의미합니다.',
  'plugins.stremio.cfg.hi.f': '청각 장애인용',
  'plugins.stremio.cfg.hi.d':
    '청각 장애인용 자막만 반환합니다(hi=true 전송). 기본값은 꺼짐입니다.',
  'plugins.stremio.cfg.note':
    '나중에 변경하려면 [stremio.wyzie.io/configure](https://stremio.wyzie.io/configure)를 다시 열고 조정한 후 재설치하세요.',
  'plugins.stremio.local':
    '그런 다음 `http://127.0.0.1:7000/configure`를 열고 키를 붙여넣어 Stremio에 설치하세요.',
  'plugins.stremio.quota':
    '키가 한도에 도달하면 애드온이 [store.wyzie.io](https://store.wyzie.io)로 연결되는 단일 자막 항목을 표시하여 충전하거나 구독할 수 있습니다. 그렇게 하면 자막이 즉시 다시 나타납니다.',
  'plugins.stremio.ts.none':
    '**자막이 나타나지 않습니다.** 해당 제목이 Stremio에 IMDB ID를 가지고 있는지(대부분의 카탈로그 항목은 가지고 있음), 그리고 선택한 언어에 실제로 해당 제목의 자막이 있는지 확인하세요. 언어 필터를 지우고 모두 표시해 보세요.',
  'plugins.stremio.ts.key':
    '**잘못된 키이거나 아무것도 로드되지 않습니다.** 구성 페이지를 다시 열고 키를 다시 붙여넣으세요. 공백 하나가 키를 망칠 수 있습니다. [store.wyzie.io/dashboard](https://store.wyzie.io/dashboard)에서 키가 작동하는지 확인하세요.',
  'plugins.stremio.ts.episode':
    '**시리즈 에피소드가 매칭되지 않습니다.** Wyzie는 시즌과 에피소드로 매칭합니다. Stremio가 일반 시리즈 페이지가 아닌 올바른 에피소드 항목을 재생하고 있는지 확인하세요.',

  'plugins.bazarr.intro':
    '[Bazarr](https://www.bazarr.media/)는 **Plex, Jellyfin, Emby, Sonarr, Radarr**의 자막을 한곳에서 관리합니다. Wyzie를 공급자로 추가하면 이 모든 서버가 단일 키를 통해 해당 키로 사용할 수 있는 모든 Wyzie 소스에 액세스할 수 있습니다.',
  'plugins.bazarr.note':
    'Plex 및 Jellyfin과 함께 Wyzie를 사용하는 권장 방법입니다. Bazarr가 미디어 옆에 자막 파일을 다운로드하면 서버가 자동으로 이를 인식하므로 별도의 네이티브 플러그인이 필요하지 않습니다.',
  'plugins.bazarr.before':
    '[store.wyzie.io/redeem](https://store.wyzie.io/redeem)에서 무료 Wyzie API 키를 받고, Bazarr 설치 파일(일반적인 Docker 경로: `/opt/bazarr/bazarr/`)에 액세스할 수 있어야 합니다.',
  'plugins.bazarr.install.1':
    '[wyzie-plugins 저장소](https://github.com/wyziedevs/wyzie-plugins)에서 [bazarr/wyzie.py](https://github.com/wyziedevs/wyzie-plugins/blob/main/bazarr/wyzie.py)를 다운로드하고(또는 `git clone https://github.com/wyziedevs/wyzie-plugins.git`) `bazarr/subliminal_patch/providers/wyzie.py`로 복사합니다.',
  'plugins.bazarr.install.2':
    '`bazarr/subliminal_patch/extensions.py`를 편집하여 `provider_registry`와 `provider_manager` **양쪽** 모두에 `wyzie`를 추가합니다.',
  'plugins.bazarr.install.3':
    '`bazarr/list_subtitles.py`(또는 버전에 따라 `bazarr/config.py`)를 편집하여 `api_key`, `prefer_hi`, `sources` 설정을 노출합니다. `opensubtitlescom`과 같은 기존 공급자의 패턴을 복사하세요.',
  'plugins.bazarr.install.4': 'Bazarr를 재시작합니다.',
  'plugins.bazarr.install.5':
    '**Settings, Providers, Wyzie**로 이동하여 API 키를 붙여넣고 저장합니다.',
  'plugins.bazarr.install.after':
    '이 공급자를 Bazarr에 업스트림으로 반영하는 정식 풀 리퀘스트가 계획되어 있습니다. 그때까지는 직접 설치에 추가하는 드롭인 파일입니다.',
  'plugins.bazarr.cfg.key': 'Wyzie 키입니다. 필수입니다.',
  'plugins.bazarr.cfg.hi': '청각 장애인용 자막만 반환합니다(hi=true 전송).',
  'plugins.bazarr.cfg.sources':
    '쿼리할 공급자의 쉼표로 구분된 목록 또는 `all`.',
  'plugins.bazarr.quota.402':
    '**402 또는 429**(잔액 소진 또는 일일 한도 도달): Bazarr가 [store.wyzie.io](https://store.wyzie.io) 링크가 포함된 메모를 기록하고 결과를 반환하지 않으므로 다른 공급자로 깔끔하게 폴백됩니다. 아무것도 충돌하지 않습니다.',
  'plugins.bazarr.quota.401':
    '**401**(키 누락) 또는 **403**(알 수 없는 키 또는 일시 중지된 키): Bazarr가 인증 오류를 표시하므로 키를 확인하거나 다시 입력해야 함을 알 수 있습니다.',
  'plugins.bazarr.ts.missing':
    '**Wyzie가 공급자 목록에 나타나지 않습니다.** `extensions.py`를 편집하는 설치 단계를 다시 확인하세요. 항목은 `provider_registry`와 `provider_manager` 양쪽 모두에 있어야 하며, 그런 다음 Bazarr를 재시작하세요.',
  'plugins.bazarr.ts.none':
    '**자막을 찾을 수 없습니다.** 항목이 Bazarr에 IMDB ID를 가지고 있는지, 그리고 활성화한 언어에 해당 항목의 자막이 있는지 확인하세요. 의도하는 경우에만 `sources`를 좁히세요.',
  'plugins.bazarr.ts.settings':
    '**설정 필드가 없습니다.** 설정 단계가 사용 중인 Bazarr 버전에 적용되지 않았습니다. 작동하는 공급자 설정 블록과 비교하고 재시작하세요.',

  'plugins.kodi.intro':
    '**Kodi 19+(Matrix 이상)**, LibreELEC, CoreELEC를 위한 자막 서비스입니다. Kodi의 표준 `xbmc.subtitle.module` 확장 지점을 사용하므로 Kodi가 자막을 찾는 모든 곳에 표시됩니다.',
  'plugins.kodi.before':
    '[store.wyzie.io/redeem](https://store.wyzie.io/redeem)에서 무료 Wyzie API 키를 받으세요.',
  'plugins.kodi.repo.intro':
    '저장소를 한 번 설치하면 Kodi가 애드온을 **자동 업데이트**해 줍니다.',
  'plugins.kodi.repo.1':
    '저장소 설치 프로그램을 다운로드하세요: [**repository.wyzie.zip**](https://kodi.wyzie.io/repository.wyzie.zip).',
  'plugins.kodi.repo.2':
    'Kodi에서: **Settings, Add-ons, Install from zip file**, 그런 다음 `repository.wyzie.zip`을 선택합니다. Kodi가 차단하면 먼저 **Settings, System, Add-ons, Unknown sources**를 활성화하세요.',
  'plugins.kodi.repo.3':
    '**Settings, Add-ons, Install from repository, Wyzie Repository, Subtitle services, Wyzie Subs, Install.**',
  'plugins.kodi.repo.4':
    '**Settings, Player, Language, Default subtitle service**, 그런 다음 **Wyzie Subs**를 선택합니다.',
  'plugins.kodi.repo.5':
    'Wyzie Subs 애드온 설정을 열고 **API 키**를 붙여넣습니다.',
  'plugins.kodi.zip.intro':
    '저장소를 추가하지 않으려면 이것을 사용하세요. 참고: zip 설치는 **자동 업데이트되지 않습니다**.',
  'plugins.kodi.zip.1':
    '애드온 zip을 가져옵니다: `service.subtitles.wyzie-<version>.zip`. 직접 빌드하려면 [wyzie-plugins 저장소](https://github.com/wyziedevs/wyzie-plugins)를 클론하고(`git clone https://github.com/wyziedevs/wyzie-plugins.git`) zip의 루트에 `addon.xml`이 포함되도록 해당 `kodi/` 폴더를 압축하세요.',
  'plugins.kodi.zip.2':
    'Kodi에서: **Settings, Add-ons, Install from zip file**, 그런 다음 zip을 선택합니다. Kodi가 차단하면 먼저 **Settings, System, Add-ons, Unknown sources**를 활성화하세요.',
  'plugins.kodi.zip.3':
    '**Settings, Player, Language, Default subtitle service**, 그런 다음 **Wyzie Subs**를 선택합니다.',
  'plugins.kodi.zip.4':
    'Wyzie Subs 애드온 설정을 열고 **API 키**를 붙여넣습니다.',
  'plugins.kodi.cfg.key': 'Wyzie 키입니다. 필수입니다.',
  'plugins.kodi.cfg.hi': '청각 장애인용 자막만 반환합니다(hi=true 전송).',
  'plugins.kodi.cfg.langs':
    '언어는 Kodi에서 선택한 자막 언어에서 가져와 자동으로 ISO 639-1로 매핑됩니다.',
  'plugins.kodi.matching.1':
    '무언가가 재생되는 동안 Kodi는 IMDB 번호, 시즌, 에피소드를 노출합니다. 애드온은 이를 읽어 `sub.wyzie.io/search`를 쿼리하고 일치하는 자막을 반환합니다. Wyzie는 ID 기반(IMDB 및 TMDB)이므로 영화와 시리즈 모두에 대해 정확하게 매칭됩니다.',
  'plugins.kodi.matching.2':
    '**수동 검색**은 현재 알림을 표시하고 아무 작업도 하지 않습니다. Wyzie가 제목이 아닌 ID로 매칭하기 때문입니다. 제목-ID 조회는 로드맵에 있습니다. 지금은 재생 중에 Kodi가 자동으로 검색하도록 두세요.',
  'plugins.kodi.quota':
    '402 또는 429 응답은 충전하거나 구독할 수 있도록 [store.wyzie.io](https://store.wyzie.io)를 가리키는 Kodi 토스트 알림을 표시합니다.',
  'plugins.kodi.ts.notoffered':
    '**재생 중에 Wyzie가 제공되지 않습니다.** **Default subtitle service**로 설정되어 있는지, 그리고 재생 중인 항목에 IMDB ID가 있는지 확인하세요.',
  'plugins.kodi.ts.key':
    '**잘못된 키입니다.** 애드온 설정을 다시 열고 키를 다시 붙여넣으세요.',
  'plugins.kodi.ts.episode':
    '**에피소드에 대해 아무것도 없습니다.** Kodi에 해당 파일의 올바른 시즌 및 에피소드 메타데이터가 있는지 확인하세요. 스크랩된 라이브러리 항목이 가장 잘 작동합니다.',
};

export default messages;
