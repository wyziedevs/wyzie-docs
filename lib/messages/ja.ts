const messages: Record<string, string> = {
  // Navigation
  'nav.language': '言語',

  // Index / Landing Page
  'index.subtitle':
    'Wyzie は字幕のスクレイピングとその周辺機能のためのツールセットです。',
  'index.cta.start': 'はじめる',
  'index.cta.store': 'ストアを見る',

  'index.card.keys.title': '無料 API キー',
  'index.card.keys.body':
    'store.wyzie.io/redeem で簡単なメール認証（Gmail、Outlook、Yahoo、iCloud、Proton などの主要プロバイダーに対応）を行うだけで無料の API キーを取得できます。1日 1,000 リクエストを無料でご利用いただけます。より高い使用量には有料プランもご用意しています。',

  'index.card.ai.title': 'AI 翻訳',
  'index.card.ai.body':
    '任意の字幕を 80 以上の言語にオンデマンドで翻訳できます。SRT はバッチが完了するたびに順番どおりストリーミングで返されるため、最初の行がすぐに届きます。Pro キーでご利用いただけます。',

  'index.card.reliable.title': '信頼性',
  'index.card.reliable.body':
    '安定した稼働時間と（ほぼ）毎日のアップデート、そして高速なキャッシュを誇りとしています。',

  'index.card.simple.title': '究極のシンプルさ',
  'index.card.simple.body':
    '実装も使用も簡単です。Wyzie はできる限りシンプルに設計されています。',

  // Donate Page
  'donate.title': 'ご支援をお願いします',
  'donate.body':
    'こんにちは、Wyzie は現在ほとんど寄付に頼っています（ほとんど集まっていませんが）。私は 16 歳でアルバイトをしており、公開 API の運用費が月に 100 ドルを超えることもあります。外部の支援がなければこのプロジェクトを継続することが難しく、本当に申し訳ないのですが、このプロジェクトは当初私が自費で賄える範囲を超えて成長してしまいました。',
  'donate.cta': 'Wyzie を支援する',

  // Subs Intro Page
  'subs.intro.title': 'Wyzie Subs 入門',
  'subs.intro.p1':
    'Wyzie Subs は、無料ティアのある字幕スクレイピング API です。API へのリクエストには 2 つの方法があります。NPM パッケージを使用するか、Wyzie API を直接フェッチするかです。パッケージの使用を推奨しますが、型が煩わしいと感じる方もいるかもしれません。API を使用する前に、どちらの方法を使うか決めておく必要があります。',
  'subs.intro.important.apikey':
    'すべてのリクエストには API キーが必要です。[store.wyzie.io/redeem](https://store.wyzie.io/redeem) で無料キーを取得してください（メール認証、1日 1,000 リクエスト）。より高い使用量には [Pro およびトップアッププラン](https://store.wyzie.io) もご利用いただけます。詳細は API キーのページをご覧ください。',
  'subs.intro.note.npm':
    'TypeScript または JavaScript に慣れている方には NPM パッケージを強くお勧めします',
  'subs.intro.btn.npm': 'NPM パッケージ',
  'subs.intro.btn.direct': '直接フェッチ',

  'subs.intro.protect.h2': 'API キーを守る',
  'subs.intro.protect.important':
    '**実際の事例：** 開発者がストリーミングサイトのフロントエンド JavaScript にキーを直接貼り付けているケースが確認されています。数時間以内に無関係な第三者が JS バンドルからキーを取得し、1 日の上限または有料残高が尽きるまで使用されました。このようにして消費されたクォータは返金されず、利用規約に基づきキー所有者の責任として扱われます。',
  'subs.intro.protect.p1':
    'API キーは非公開にし、**絶対に**以下に含めないでください：',
  'subs.intro.protect.item1':
    'ブラウザの JavaScript（script タグで配信されるもの）',
  'subs.intro.protect.item2':
    'モバイルアプリのバイナリ（Android/iOS、難読化されたものも含む）',
  'subs.intro.protect.item3': 'ブラウザ拡張機能',
  'subs.intro.protect.item4':
    'エンドユーザーに配布される Electron / デスクトップアプリ',
  'subs.intro.protect.item5':
    '公開 Git リポジトリ、gist、貼り付けサイト、スクリーンショット',
  'subs.intro.protect.p2':
    'キーがエンドユーザーの端末に到達した場合は、公開されたものとして扱ってください。安全なパターンが 2 つあります：',
  'subs.intro.protect.opt1.h3': 'オプション 1：Wyzie Worker を使用する',
  'subs.intro.protect.opt1.p1':
    'Wyzie Worker は軽量な Cloudflare Worker プロキシで、サーバーサイドで API キーを注入します。Cloudflare Workers にデプロイし、2 つのシークレットを設定してください：`NITRO_API_TOKEN`（Wyzie の API キー）と `NITRO_WORKER_KEY`（自分で決めたシークレット）です。ワーカーへのすべてのリクエストでは `Authorization: Bearer <NITRO_WORKER_KEY>` を送信する必要があります。これがないとワーカーは 401 を返し、`NITRO_WORKER_KEY` が設定されていない場合はすべてのリクエストを 503 で拒否します。ワーカーキーもサーバーサイドに保持する必要があるため、ワーカーはブラウザやアプリのコードからではなく、必ず自前のバックエンドから呼び出してください。ワーカーは各リクエストに API キーを付加して sub.wyzie.io に転送します。',
  'subs.intro.protect.opt2.h3': 'オプション 2：独自のプロキシを構築する',
  'subs.intro.protect.opt2.p1':
    'Wyzie Worker を使用したくない場合は、任意のフレームワークでシンプルなサーバーサイドプロキシを構築できます。考え方は同じです。バックエンドがクライアントからリクエストを受け取り、API キーを付加して sub.wyzie.io に転送します。',

  // Subs Sources Page
  'subs.sources.title': 'Wyzie Subs のソース',
  'subs.sources.p1':
    'Wyzie Subs は複数のプロバイダーから字幕を集約します。ソースの利用可否はプロバイダーの状態やソースのダウン状況により変わる場合があります。新しいソースを常に探していますので、提案があればお気軽にご連絡ください。',

  'subs.sources.using.h2': 'ソースの使い方',
  'subs.sources.using.bullet1':
    'source=all を使用するとすべての有効なソースに同時にクエリを実行します',
  'subs.sources.using.bullet2':
    '指定がない場合のデフォルトソースは charlie です',
  'subs.sources.using.bullet3':
    '複数のソースをカンマ区切りのリストで指定できます',

  'subs.sources.api.h2': 'API エンドポイント',
  'subs.sources.api.p1':
    '現在有効なソースの一覧とそのプランティアをプログラムで取得できます：',
  'subs.sources.api.free': '無料キーを含むすべてのキーがクエリできるソース。',
  'subs.sources.api.paid': 'Pro キーが必要なソース。',
  'subs.sources.api.allFree':
    'true の場合、すべての有効なソースがすべてのキーで利用可能で、paid は空になります。',

  'subs.sources.scope.h3': 'キーへのスコープ設定',
  'subs.sources.scope.p1':
    'API キーを渡すと、そのキーで実際に使用できるソースを取得できます：',
  'subs.sources.scope.p2':
    'これにより、クォータからリクエストを消費せずにキー固有のフィールドが追加されます：',
  'subs.sources.scope.available': 'このキーが現在クエリできるソース。',
  'subs.sources.scope.restricted':
    'このキーがクエリできない有効なソース（アンロックするには Pro にアップグレードしてください）。',
  'subs.sources.scope.keyType': 'free または paid。',
  'subs.sources.scope.keyValid':
    'キーの形式が正しくないか見つからない場合は false、キーを確認できなかった場合は null（この場合 available と restricted は省略されます）。',

  'subs.sources.details.h2': 'ソースの詳細',

  'subs.sources.opensubtitles.desc':
    'オンライン最大の字幕データベース。幅広い言語の映画およびテレビ番組をサポートしています。公式の OpenSubtitles REST API を使用しています。',
  'subs.sources.opensubtitles.content': '映画・テレビ番組',
  'subs.sources.opensubtitles.languages': '幅広い多言語サポート',
  'subs.sources.opensubtitles.formats': 'SRT、ASS、SSA、VTT、SUB など',

  'subs.sources.subdl.desc':
    '映画やテレビ番組を幅広く取り揃えたコミュニティ主導の字幕サイト。',
  'subs.sources.subdl.content': '映画・テレビ番組',
  'subs.sources.subdl.languages': '幅広い多言語サポート',
  'subs.sources.subdl.formats': 'SRT、ASS、SSA、VTT、SUB など',

  'subs.sources.subf2m.desc':
    '映画やテレビ番組の広範な言語カバレッジを持つ大規模な字幕リポジトリ。',
  'subs.sources.subf2m.content': '映画・テレビ番組',
  'subs.sources.subf2m.languages': '幅広い多言語サポート',
  'subs.sources.subf2m.formats': 'SRT、ASS、SSA、VTT、SUB など',

  'subs.sources.podnapisi.desc':
    '最も古い字幕データベースの一つ。映画やテレビ番組を網羅した充実したコレクション。',
  'subs.sources.podnapisi.content': '映画・テレビ番組',
  'subs.sources.podnapisi.languages': '幅広い多言語サポート',
  'subs.sources.podnapisi.formats': 'SRT、ASS、SSA、VTT、SUB など',

  'subs.sources.animetosho.desc':
    'AnimeTosho にインデックスされたトレントリリースからアニメ字幕の添付ファイルを直接スクレイピングします。',
  'subs.sources.animetosho.content': 'アニメ（テレビ番組）',
  'subs.sources.animetosho.languages':
    '日本語、英語、およびリリースによってはその他の言語',
  'subs.sources.animetosho.formats': 'ASS、SRT、SSA など',
  'subs.sources.animetosho.note':
    'AnimeTosho は 2026 年 5 月にサービス終了予定です。',

  'subs.sources.gestdown.desc':
    '幅広い言語サポートを備えた Gestdown API を通じてテレビ番組の字幕を提供します。',
  'subs.sources.gestdown.content': 'テレビ番組のみ',
  'subs.sources.gestdown.languages': '幅広い多言語サポート',
  'subs.sources.gestdown.formats': 'SRT、ASS など',

  'subs.sources.jimaku.desc':
    'コミュニティが管理するアニメ字幕ファイルのリポジトリ jimaku.cc をスクレイピングします。TMDB API を使用してタイトルを照合します。',
  'subs.sources.jimaku.content': 'アニメ（映画・テレビ番組）',
  'subs.sources.jimaku.languages':
    '主に日本語。利用可能なファイルによっては英語、中国語なども',
  'subs.sources.jimaku.formats': 'SRT、ASS、SSA、VTT、SUB など',

  'subs.sources.kitsunekko.desc':
    'アニメ専用字幕リポジトリ kitsunekko.net のディレクトリ一覧をスクレイピングします。TMDB API を使用してタイトルを照合します。',
  'subs.sources.kitsunekko.content': 'アニメ（テレビ番組）',
  'subs.sources.kitsunekko.languages': '英語および日本語の字幕ディレクトリ',
  'subs.sources.kitsunekko.formats': 'SRT、ASS、SSA、VTT、SUB など',

  'subs.sources.yify.desc':
    'IMDB ID で照合した字幕を yifysubtitles.ch からスクレイピングします。映画のみ対応。',
  'subs.sources.yify.content': '映画のみ（テレビ番組は非対応）',
  'subs.sources.yify.languages':
    '幅広い多言語サポート（アルバニア語、アラビア語、英語、フランス語、スペイン語など）',
  'subs.sources.yify.formats': 'SRT（ZIP アーカイブ内に格納）',

  'subs.sources.ajatttools.desc':
    'Ajatt-Tools/kitsunekko-mirror GitHub リポジトリから字幕を取得します。メディアタイプ別に整理されています。TMDB API を使用してタイトルを照合します。',
  'subs.sources.ajatttools.content': 'アニメ・ドラマ（テレビ番組・映画）',
  'subs.sources.ajatttools.languages': '主に日本語。英語、中国語なども含む',
  'subs.sources.ajatttools.formats': 'SRT、ASS、SSA、VTT、SUB など',

  'subs.sources.ai.desc':
    'スクレイパーではありません。利用可能な最良のソース字幕からオンデマンドで AI 翻訳した SRT を生成します。Pro キー専用です。詳細は AI 翻訳ガイドをご覧ください。',
  'subs.sources.ai.content': 'Wyzie がテキスト字幕を見つけられるものすべて',
  'subs.sources.ai.languages': '80 以上の言語',
  'subs.sources.ai.formats': 'SRT のみ',

  // Subs Package Page
  'subs.pkg.title': 'Wyzie NPM パッケージの使い方',
  'subs.pkg.p1':
    'Wyzie Subs NPM パッケージは、字幕の検索と取得のためのシンプルで使いやすいインターフェースを提供します。',
  'subs.pkg.install.h2': 'インストール',
  'subs.pkg.important':
    'すべてのリクエストには API キーが必要です。[store.wyzie.io/redeem](https://store.wyzie.io/redeem) で無料キーを取得し、key パラメータで渡してください。詳細は API キーのページをご覧ください。',
  'subs.pkg.usage.h2': '使い方',
  'subs.pkg.params.h3': 'パラメータ',
  'subs.pkg.params.note':
    '詳細（または困ったときは）は [Wyzie Subs ホームページ](https://sub.wyzie.io) をご覧ください。',

  'subs.pkg.param.tmdb':
    '映画またはテレビ番組の TMDB ID（tmdb_id または imdb_id のいずれかが必須）。',
  'subs.pkg.param.imdb':
    '映画またはテレビ番組の IMDB ID（imdb_id または tmdb_id のいずれかが必須）。',
  'subs.pkg.param.format':
    '返すファイル形式（例：srt、ass）。リストを受け付けます。',
  'subs.pkg.param.season': 'シーズン番号（episode が必要）。',
  'subs.pkg.param.episode': 'エピソード番号（season が必要）。',
  'subs.pkg.param.language':
    '字幕言語の ISO 639-1 コード。リストを受け付けます。',
  'subs.pkg.param.encoding': '文字エンコードフィルター（例：utf-8、latin-1）。',
  'subs.pkg.param.hi':
    'true の場合、聴覚障害者向け字幕のみを返します。聴覚障害者向け字幕にフラグを付けていないソースは何も返しません。',
  'subs.pkg.param.source':
    'クエリする字幕プロバイダーのコードネーム（all でキーが使用できる稼働中のすべてのソースを対象。デフォルトは charlie）。',
  'subs.pkg.param.release':
    'リリース/シーンフィルター（リストを受け付けます）。',
  'subs.pkg.param.filename':
    'ファイル名フィルター。file および fileName のエイリアスもサポートされています。',
  'subs.pkg.param.origin':
    'コンテンツ配信元フィルター（例：WEB、BLURAY、DVD）。',
  'subs.pkg.param.key':
    'API キー（必須）。store.wyzie.io/redeem で無料取得できます。',
  'subs.pkg.param.refresh':
    'キャッシュをバイパスしてソースから新しい結果を取得します。',

  'subs.pkg.helpers':
    'このパッケージには軽量な TMDB ヘルパーも同梱されています：/search を呼び出す前に ID をすばやく見つけるための searchTmdb、getTvDetails、getSeasonDetails です。getSources は稼働中のソースのコードネームを返し（ヘルスチェックによって一時停止されたソースは、復旧するまで除外されます）、getSourcesInfo はティアを含む /sources の完全なレスポンスを返します。キーを渡すと、そのキーが使用できるソースも返します。withDownloadOptions は、結果の url にダウンロードオプション（WebVTT 出力、タイミング補正、2 つ目の言語など）を追加します。',
  'subs.pkg.types.h3': '型定義',
  'subs.pkg.type.search': 'API が認識するすべての有効なパラメータ。',
  'subs.pkg.type.query':
    'wyzie-subs API で使用可能なすべてのパラメータ（任意および必須）。',
  'subs.pkg.type.subtitle': 'API から返されるすべての値とその型。',
  'subs.pkg.type.sources': '/sources エンドポイントのレスポンス型。',
  'subs.pkg.type.download':
    'withDownloadOptions のオプション：to、offset、fps、plain、および Pro 専用の sdh、clean、dual。',
  'subs.pkg.type.sync':
    'syncSubtitle の入力と結果（Wyzie Synced、Pro キー）：使用する字幕（検索結果、その url、または tmdb_id/imdb_id と language）、detectSpeech が検出した speech または media ファイル、そして offset、fps、confidence を含む同期済みのダウンロードリンク。詳細は [Wyzie Synced](/subs/usage/synced) をご覧ください。',
  'subs.pkg.types.end':
    '型定義は非常にシンプルで充実したドキュメントが付いています。wyzie-lib リポジトリの [src/types.ts](https://github.com/wyziedevs/wyzie-lib/blob/main/src/types.ts) をご覧ください。',
  'subs.pkg.config.h3': '設定',
  'subs.pkg.config.p1':
    'あるユーザーが GitHub で設定可能な API ホスト名についてリクエストしてくれて、「それいいアイデアだ」と思ったので、以下に使い方を示します。みんな愛してるよ！',

  // Subs Direct Page
  'subs.direct.title': 'Wyzie Subs を直接フェッチする',
  'subs.direct.caution':
    'NPM パッケージの方が簡単で信頼性が高いため、強くお勧めします。',
  'subs.direct.p1':
    'NPM パッケージを使用しないと決めた場合は、さっそく始めましょう。ここでは API パラメータと API が返すデータのみを説明します。API へのリクエスト方法は完全にお任せします。',
  'subs.direct.important':
    'すべてのリクエストには API キーが必要です。[store.wyzie.io/redeem](https://store.wyzie.io/redeem) で無料キーを取得し、すべてのリクエストに &key=YOUR_KEY として含めてください。詳細は API キーのページをご覧ください。',

  'subs.direct.params.h3': 'パラメータ',
  'subs.direct.param.id': '番組または映画の TMDB または IMDB ID（必須）。',
  'subs.direct.param.seasonEpisode':
    'テレビ検索のシーズンおよびエピソード。両方同時に指定する必要があります。',
  'subs.direct.param.language':
    '言語フィルター（ISO 639-1 コード）。複数の値はカンマ区切り。',
  'subs.direct.param.format': '返す字幕形式。複数の値を指定できます。',
  'subs.direct.param.hi':
    'true の場合、聴覚障害者向け字幕のみを返します（優先指定ではなくフィルターです）。聴覚障害者向け字幕にフラグを付けていないソースは何も返しません。',
  'subs.direct.param.encoding': '文字エンコードフィルター。',
  'subs.direct.param.source':
    'クエリする字幕プロバイダー（all でキーが使用できるすべてのソースをクエリ。デフォルトは charlie）。',
  'subs.direct.param.release':
    'リリースまたはシーン名フィルター（カンマ区切り）。',
  'subs.direct.param.file':
    'ファイル名フィルター（エイリアス：file、filename、fileName）。',
  'subs.direct.param.origin':
    'コンテンツ配信元フィルター、カンマ区切り（例：WEB、BLURAY、DVD）。',
  'subs.direct.param.key':
    'API キー（必須）。store.wyzie.io/redeem で無料取得できます。',
  'subs.direct.param.refresh':
    'キャッシュをバイパスして新しい結果を取得します。ソースが更新された可能性がある場合に使用します。',
  'subs.direct.param.page':
    '返すページ（1 から開始）。limit と併用した場合のみ使用されます。',
  'subs.direct.param.limit':
    '1 ページあたりの結果数（1〜200）。指定しない場合、すべての結果が 1 つのレスポンスで返されます。',
  'subs.direct.important.imdb':
    "IMDB ID を使用する場合、ID の先頭に最初の 2 文字（'tt'）が含まれていることを確認してください。",

  'subs.direct.data.h3': '返されるデータ',
  'subs.direct.data.id': '字幕ファイルの ID。',
  'subs.direct.data.url':
    '暗号化された tok パラメータが付いた https://sub.wyzie.io/c/... のダウンロードリンク。ダウンロードごとに 1 リクエストを消費します。詳しくは下記の字幕のダウンロードの項をご覧ください。',
  'subs.direct.data.flagUrl': '言語のロケールのフラグの URL。',
  'subs.direct.data.format': '字幕ファイルの形式。',
  'subs.direct.data.encoding': '字幕ファイルの文字エンコード。',
  'subs.direct.data.display': '字幕の言語名（先頭大文字）。',
  'subs.direct.data.language': '言語の ISO 639-1 コード。',
  'subs.direct.data.media': '字幕が対応するメディアの名前。',
  'subs.direct.data.isHearingImpaired':
    '字幕が聴覚障害者向けかどうかを示すブール値。',
  'subs.direct.data.source': '字幕がスクレイピングされたソース。',
  'subs.direct.data.release': '主要なリリース名。',
  'subs.direct.data.releases': '字幕と互換性のあるその他のリリース名。',
  'subs.direct.data.fileName': '利用可能な場合の元のファイル名。',
  'subs.direct.data.downloadCount':
    'ソースプラットフォームでのダウンロード数（利用可能な場合）。',
  'subs.direct.data.origin': 'コンテンツの配信元（例：WEB、BluRay、DVD）。',
  'subs.direct.data.matchedRelease':
    'フィルターに一致したリリース値（指定された場合）。',
  'subs.direct.data.matchedFilter':
    '一致したユーザー指定のフィルター（指定された場合）。',
  'subs.direct.data.ai':
    'AI 翻訳字幕の場合は true、通常のスクレイピング字幕の場合は false。どちらか一方のみが必要な場合のクライアントサイドフィルターとして使用できます。',
  'subs.direct.download.p':
    '/search レスポンスに含まれるすべての url は https://sub.wyzie.io/c/... を指し、tok クエリパラメータが付いています。tok は暗号化されているため API キーが露出することはなく、60 日間有効です。URL はそのまま使用してください。検索には 1 リクエスト、各ダウンロードにはさらに 1 リクエストかかり、検索を実行したキーに課金されます。そのキーでダウンロード分を支払えない場合、リンクは拒否されます：',
  'subs.direct.dl.p':
    'ダウンロード URL にこれらを追加すると、返される内容を変更できます。キャッシュの有無にかかわらずすべてのダウンロードで機能し、追加コストはかかりません（下記の dual を除く）。X-Subtitle-Transforms レスポンスヘッダーには、適用された処理が件数とともに一覧表示されます。',
  'subs.direct.dl.param.to':
    '出力形式：`srt` または `vtt`。`vtt` はブラウザの `<track>` 要素で直接再生できます。デフォルト：ファイル本来の形式。',
  'subs.direct.dl.param.offset':
    'すべての行を指定した秒数だけずらします（負の値で早めます）。',
  'subs.direct.dl.param.fps':
    '別のリリース向けに作られた字幕の、徐々に大きくなるずれを補正します：`SUBTITLE_FPS:VIDEO_FPS`（例：フィルムレートの動画に PAL の字幕を合わせる場合は `25:23.976`）。',
  'subs.direct.dl.param.plain':
    'プレーンで整った行にします：`{\\an8}` や `<font>` などのスタイルコードを除去し、空行と重複行を削除し、行を時間順に並べ、わずかな重なりを切り詰めます。',
  'subs.direct.dl.param.sdh':
    '聴覚障害者向けのテキストを除去します：`[DOOR SLAMS]`、`(sighs)`、`JOHN:` などの話者ラベル、♪ の歌詞。',
  'subs.direct.dl.param.clean':
    '強い卑語を、頭文字だけ残して伏せ字にします（`f***`）。英語のファイルのみ対応。',
  'subs.direct.dl.param.dual':
    '各行の下に 2 つ目の言語（ISO 639-1 コード）を、このファイルのタイミングに合わせて追加します。一致する字幕が見つかった場合のみ、1 リクエストが追加で消費されます。見つからない場合は、`X-Dual: unavailable` とともに元のファイルだけが返されます。',
  'subs.direct.dl.after':
    'オプションは組み合わせて使用できます（例：`&to=vtt&sdh=strip&offset=-1.5`）。リンクにはすでに `format`、`encoding`、`id`、および（エピソードの場合）`season` と `episode` が含まれているので、これらはそのままにしてください。`autoUnzip=false` を指定すると、アーカイブがそのまま返されます。',
  'subs.direct.oneCall.p':
    'API キーがあれば、GET /download は 1 回の呼び出しで字幕ファイルそのものを返します。キーと /search と同じパラメータで検索し（language のデフォルトは en）、最も一致するものを選んで返します。消費するのは 2 リクエストで、検索 1 回とダウンロード 1 回の合計と同じです。to や offset などのダウンロードオプションはファイルに適用されます。',
  'subs.direct.oneCall.pick':
    '最も一致するものとは最初の検索結果のことで、format を指定しない限り SRT、WebVTT、ASS ファイルが優先され、hi=true を指定しない限り聴覚障害者向けテキストを含まないファイルが優先されます。release、filename、source、origin で絞り込めます。どのファイルが選ばれたかは、X-Subtitle-Release、X-Subtitle-Source、X-Subtitle-Language、X-Subtitle-Url レスポンスヘッダーでわかります。エラーは /search およびダウンロードリンクと同じです。',
  'subs.direct.oneCall.keyless':
    'キーがない場合は、[ダウンロードページ](https://sub.wyzie.io/download)で字幕を 1、2 件手作業で探せます。そのリンクは作成対象のファイルしか開けず、検索を行ったネットワークからのみ利用でき、ページには 1 時間あたりの制限があります。自動化する場合は、キーを使用してください。',
  'subs.direct.headers.p':
    'すべての /search レスポンスには、結果の総数を示す X-Total-Count ヘッダーが含まれます。limit を渡した場合は、以下も含まれます：',
  'subs.direct.header.xpage': '返されたページ。',
  'subs.direct.header.xperpage': '適用されている limit。',
  'subs.direct.header.xtotalpages': 'ページの総数。',
  'subs.direct.headers.rate':
    'レスポンスには X-RateLimit-Limit、X-RateLimit-Remaining、X-RateLimit-Reset も含まれます。これらは概算値として扱ってください。使用量は短いバッチ単位で課金と照合されるため、実際の使用量よりわずかに遅れて反映されることがあります。',

  // Subs Translate Page
  'subs.translate.title': 'AI 字幕翻訳',
  'subs.translate.important':
    'AI 翻訳は **Pro 機能**です。無料キーでは 403 Upgrade required が返されます。呼び出しごとにキーの残高から **25 リクエスト**が消費され、キャッシュヒット時も同様です。何も出力される前に呼び出しが失敗した場合（字幕が見つからない、検索またはダウンロードの失敗、サーバーの混雑）、25 リクエストは自動的に返金されます。',
  'subs.translate.p1':
    'Wyzie はあらゆる字幕を 80 以上の言語にオンザフライで翻訳できます。翻訳された SRT はバッチが完了するたびに順番どおりストリーミングで返されるため、ファイル全体の完了を待たずに最初のキューがすぐに届きます。完全な翻訳は 30 日間キャッシュされるため、同じタイトル、エピソード、ターゲット言語に対するその後のリクエストはキャッシュから提供されます。',

  'subs.translate.ways.h2': '2 つの使い方',
  'subs.translate.way1.h3': '1. 検索レスポンスから言語を選ぶ',
  'subs.translate.way1.p1':
    'Pro キーの場合、すべての /search レスポンスには、"ai": true と /translate を指す url を持つ AI 翻訳行も含まれます。サポートされている言語ごとに 1 行、または language= フィルターで指定した言語の分だけです。無料キーにはこれらの行は一切含まれません。UI では AI 行を他の字幕行と同様に扱ってください。ユーザーがクリックしたら URL をフェッチします。',
  'subs.translate.way1.filter':
    'UI から AI 行を非表示にしたい場合はフィルタリングしてください：',
  'subs.translate.way2.h3': '2. /translate を直接呼び出す',

  'subs.translate.param.id': 'TMDB または IMDB ID（必須）。',
  'subs.translate.param.target':
    'ターゲット言語（必須）：サポート対象リストにある言語名（例：Spanish、Japanese、Portuguese (Brazil)）またはそのコード（例：es、ja、pt-BR）。',
  'subs.translate.param.seasonEpisode':
    'テレビ番組用。両方同時に指定する必要があります。',
  'subs.translate.param.key':
    'API キー。/search から URL を取得した場合は tk を使用してください。',
  'subs.translate.param.tk':
    '/search の AI 行の URL に含まれる暗号化トークン。key と同様に機能し、API キーを露出せず、60 日間有効です。',

  'subs.translate.headers.p':
    'レスポンスボディは text/plain; charset=utf-8 としてストリーミングされる SRT ファイルです。有用なレスポンスヘッダー：',
  'subs.translate.header.xcache':
    'キャッシュから提供された場合は HIT-REDIS、新たに生成された場合は MISS。',
  'subs.translate.header.xsourcelang': '翻訳者が入力として使用した字幕の言語。',
  'subs.translate.header.xtargetlang': 'target パラメータのエコー。',
  'subs.translate.header.xsourceprovider': 'ソース字幕を提供したスクレイパー。',

  'subs.translate.how.h2': '仕組み',
  'subs.translate.how.step1':
    'Wyzie が通常のソースからテキスト字幕を検索し、利用可能な場合は英語の SRT を優先します。VTT、ASS、SSA、SUB ファイルは先に SRT に変換されます。',
  'subs.translate.how.step2':
    'SRT は最大約 3,800 文字のバッチに分割され、Google Translate で一度に 4 バッチずつ翻訳されます。',
  'subs.translate.how.step3':
    '出力はバッチが完了するたびに SRT の順番どおりストリーミングで返されるため、最初のキューがすぐに届きます。ストリーミング SRT ボディを受け付けるプレイヤーは、残りが完了する前に最初の行を表示し始めることができます。',
  'subs.translate.how.step4':
    '完全な翻訳は id、season、episode、target をキーとして Redis に 30 日間キャッシュされます。',

  'subs.translate.languages.h2': 'サポートされているターゲット言語',
  'subs.translate.languages.p':
    '主要なヨーロッパ語、アジア語、アフリカ語、中東言語を含む 80 以上の言語。リストにある言語名（Spanish、Portuguese (Brazil)）またはそのコード（es、pt-BR）で指定してください。Pro キーの場合、language= フィルターなしのすべての /search レスポンスで完全なリストが ai: true 行としても返されており、それが正式な情報源です。',

  'subs.translate.limitations.h2': '制限事項',
  'subs.translate.limit1':
    'AI 翻訳には元になるテキスト字幕が必要です。VTT、ASS、SSA、SUB のソースは先に SRT に変換されます。テキスト字幕が存在しない場合、呼び出しは 404 No subtitle found を返し、25 リクエストは返金されます。',
  'subs.translate.limit2':
    '翻訳品質はソース字幕に依存します。タイミングが悪いまたは誤字のあるソースは、同様にタイミングが悪いまたは誤字のある翻訳を生成します。',
  'subs.translate.limit3':
    'AI 行を完全に除外したいユーザーもいるかもしれません。クライアントで ai === false でフィルタリングしてください。',
  'subs.translate.limit4':
    '翻訳はキャッシュヒット時も課金されます。新たに生成された場合でも 30 日間のキャッシュから提供された場合でも、各 /translate 呼び出しは 25 リクエストを消費します。返金されるのは、何も出力される前に失敗した呼び出しのみです。',

  // Subs Synced Page
  'subs.synced.title': 'Wyzie Synced',
  'subs.synced.important':
    'Wyzie Synced は **Pro 機能**です。無料キーでは 403 Paid feature が返されます。同期が成功するごとに **5 リクエスト**が消費され、一致が見つからなかった同期は課金されません。その後、同期済みリンクのダウンロードは他のダウンロードと同様にカウントされます。',
  'subs.synced.p1':
    'オンラインで見つかる字幕は、手元の動画とは別のリリースに合わせてタイミングが作られていることがよくあります。数秒早く、または遅く始まったり、そのリリースのフレームレートが異なるために、映画が進むにつれてずれが大きくなったりします。Wyzie Synced は手元の動画の音声を聞き取って人が話している箇所を見つけ、字幕をそれに合わせるためのオフセットとフレームレートの補正を算出します。補正が適用された通常のダウンロードリンク（offset と fps の[ダウンロードオプション](/subs/usage/direct#download-options)）が得られます。',
  'subs.synced.web.p':
    '最も簡単な方法：[sub.wyzie.io/synced](https://sub.wyzie.io/synced) を開き、Pro キーを入力し、動画ファイルとタイトルを選んで、同期済みの字幕をダウンロードします。音声はブラウザ内で解析されるため、動画がアップロードされることはありません。送信されるのは発話のタイミングだけです。MKV、MP4、AVI をはじめほとんどの形式に対応しており、AC3、E-AC3、DTS の音声も扱えます。',
  'subs.synced.api.p':
    '使用する字幕（ダウンロードリンク、または Wyzie に最適なものを選ばせる場合はタイトル）と音声を送信します。音声には、自分で検出した発話タイミングか、音声/動画ファイルそのもののいずれかを指定します。POST /synced も同じ API です。',
  'subs.synced.param.url':
    '/search から取得したダウンロードリンク（https://sub.wyzie.io/c/…）。リンクに付いている他のダウンロードオプション（to、sdh など）は、同期済みリンクにも引き継がれます。',
  'subs.synced.param.id':
    'url の代わりに使う TMDB または IMDB ID。Wyzie はその言語の上位 5 件のテキスト字幕を試し、音声に最もよく合うものを返します。',
  'subs.synced.param.language':
    'id と併用：字幕言語の ISO 639-1 コード（必須）。',
  'subs.synced.param.seasonEpisode':
    'id と併用、テレビ番組用。両方同時に指定する必要があります。',
  'subs.synced.param.key':
    'Pro API キー。省略した場合は、url の tok に紐付いたキーが使用されます。キー不要のダウンロードページから取得したリンクには key が必要です。',
  'subs.synced.param.speech':
    '人が話している区間：秒単位の [[start, end], …]。任意の音声区間検出器（wyzie-lib の detectSpeech、Silero VAD、webrtcvad）の出力を使用できます。2 時間の映画でおよそ 2,000 セグメント、JSON で約 40 KB になります。',
  'subs.synced.param.media':
    'または音声/動画ファイルそのもの：生のリクエストボディとして（その他のフィールドはクエリ文字列で指定）、または multipart フィールド media として送信します。上限は 95 MB なので、映画全体の場合は音声トラックだけをアップロードしてください。',
  'subs.synced.fields.note':
    'フィールドは JSON ボディ、multipart フォーム、またはクエリ文字列（生の media ボディを送る場合）で指定します。',
  'subs.synced.response.p': '200 レスポンスは JSON です：',
  'subs.synced.field.url':
    'タイミング補正（offset、fps）と、キー用の新しい tok が付いた字幕のダウンロードリンク。他の /search の url と同じように使用します。各ダウンロードで 1 リクエストを消費します。',
  'subs.synced.field.offset':
    'フレームレート補正の後、すべての行に加算される秒数（負の値は早める方向）。',
  'subs.synced.field.fps':
    'SUBTITLE_FPS:VIDEO_FPS 形式のフレームレート補正（例："25:23.976"）。補正が不要だった場合は null。',
  'subs.synced.field.confidence':
    '0〜1：このタイミングが他のすべての候補をどれだけ明確に上回っているかを示します。返される結果はすべて一致判定に合格しており、値が高いほど確実です。',
  'subs.synced.field.inSync':
    '字幕がすでに手元の動画と一致していた場合は true。',
  'subs.synced.field.subtitle':
    '使用された字幕（release、fileName、format、source など）。url を指定した場合は format のみ。',
  'subs.synced.errors.p':
    'エラーは message と details を含む JSON で返されます。拒否された同期や失敗した同期は課金されません。',
  'subs.synced.error.400':
    'フィールドが欠落しているか無効です：字幕の指定がない、音声がない、または speech が [start, end] のペアになっていません。',
  'subs.synced.error.401':
    'キーがない、または url のダウンロードリンクが無効か期限切れです。',
  'subs.synced.error.403':
    'キーが無料キー（Wyzie Synced には Pro が必要）、無効、または一時停止中です。',
  'subs.synced.error.404':
    'そのタイトルには、指定した言語のテキスト字幕がありません。',
  'subs.synced.error.413':
    'media ファイルが 95 MB を超えています。音声トラックだけをアップロードするか、speech を送信してください。',
  'subs.synced.error.422':
    'どのオフセットやフレームレートでも字幕が音声と一致しない（別の編集版やエピソードの可能性が高い）、音声に含まれる発話が少なすぎる、またはファイルをデコードできません。',
  'subs.synced.error.429':
    'キーで支払えません。同期には少なくとも 5 リクエストの残りが必要で、処理を始める前に確認されます。',
  'subs.synced.error.503':
    '他のアップロードのデコードで混雑しているか、検索が一時的に利用できません。しばらくしてから再試行するか、speech を送信してください。',
  'subs.synced.lib.p':
    'wyzie-lib には detectSpeech（サイトがブラウザ内で実行しているのと同じ検出器）と syncSubtitle があります：',
  'subs.synced.how.step1':
    '発話検出：音声は 8 kHz モノラルにデコードされ（5.1 および 7.1 ミックスでは、セリフが収められたセンターチャンネルのみ）、音声区間検出器が人の話している箇所をマークします。ここでいう発話とは、音節に合わせて上下する、音声帯域の大きな音のことです。',
  'subs.synced.how.step2':
    '位置合わせ：一般的なフレームレートの不一致（25 と 23.976、25 と 24、24 と 23.976 fps）それぞれについて、±10 分以内のすべてのオフセットで、字幕の表示時間とその発話との相互相関をとります。',
  'subs.synced.how.step3':
    '微調整：各行の開始位置を発話の開始位置に合わせることで、最適なタイミングを 10 ms の精度まで高めます。',
  'subs.synced.how.step4':
    "タイミングは、他のどのオフセットよりも突出して優れている場合にのみ返されます。そのため、別の編集版やエピソード用の字幕には、誤ったずらしではなく 422 Couldn't sync が返されます。",
  'subs.synced.limit1':
    'Wyzie Synced が補正するのは、一定のオフセットとフレームレートの違いです。別の編集版（シーンの追加や欠落があるもの）用の字幕は 1 回のずらしでは補正できないため、拒否されます。',
  'subs.synced.limit2':
    '発話が必要です。セリフの少ない映画や、大部分が音楽の音声は同期できない場合があります。',
  'subs.synced.limit3': '検出できるオフセットは最大 ±10 分です。',

  // Subs API Keys Page
  'subs.keys.title': 'API キー',
  'subs.keys.p1':
    'Wyzie Subs はすべてのリクエストに API キーが必要です。無料ティアでほとんどのユースケースに対応しています。より大量の使用には有料プランをご利用ください。',

  'subs.keys.tiers.h2': 'ティア',
  'subs.keys.tier.free': '無料（メール認証）',
  'subs.keys.tier.free.limit': '1,000 リクエスト / UTC 日',
  'subs.keys.tier.pro': '$5 一回払い',
  'subs.keys.tier.pro.limit': '400,000 リクエスト',
  'subs.keys.tier.topup': '$0.0625 / 5K から',
  'subs.keys.tier.topup.limit': '有料残高に追加されます',
  'subs.keys.tiers.end':
    'Pro とトップアップに有効期限はありません。継続課金がお好みですか？月額 $32 のサブスクリプションで毎月 6,000,000 リクエストをご利用いただけます（カード決済のみ）。完全な料金とダッシュボードは store.wyzie.io をご覧ください。',

  'subs.keys.free.h2': '無料キーの取得方法',
  'subs.keys.free.p':
    '[store.wyzie.io/redeem](https://store.wyzie.io/redeem) にアクセスしてください：',
  'subs.keys.free.step1': 'Cloudflare Turnstile キャプチャを解いてください。',
  'subs.keys.free.step2':
    '主要な個人向けメールプロバイダー（Gmail、Outlook/Hotmail、Yahoo、iCloud、AOL、Proton など）のアドレスを入力してください。使い捨てメールのドメインは拒否されます。',
  'subs.keys.free.step3':
    'メールで送られてくる 6 桁のコードを入力してください。',
  'subs.keys.free.step4':
    'wyzie-abc123... のような形式の API キーが発行されます。',
  'subs.keys.free.gmail':
    '無料キーは、メールアドレスごと、ネットワークごとに 1 つまで取得できます。2 回目のリクエストには 409 が返されます。キーを紛失しましたか？[ダッシュボード](https://store.wyzie.io/dashboard)の「Forgot key」ボタンからキーを再送できます。',

  'subs.keys.pro.h2': 'Pro へのアップグレード',
  'subs.keys.pro.p1':
    '[store.wyzie.io](https://store.wyzie.io) にアクセスし、無料キーと同じメールアドレスでチェックアウトしてください。既存の wyzie-... キーはそのままアップグレードされ、400K の有料リクエストが上乗せされます。継続課金がお好みですか？その代わりに、月額 $32 のサブスクリプションで毎月 6,000,000 リクエストの枠が追加されます（カード決済のみ）。',
  'subs.keys.pro.p2':
    '新しいメールアドレス（既存のキーなし）でチェックアウトすると、新しい wyzie-... キーが生成されてメールで送られてきます。',

  'subs.keys.protect.h2': 'クライアントにキーを含めない',
  'subs.keys.protect.important':
    '**API キーをクライアントサイドのコードに埋め込まないでください。** ブラウザの JavaScript、モバイルアプリ、ブラウザ拡張機能、Electron スタイルのデスクトップアプリ、公開 Git リポジトリはすべてクライアントサイドと見なされます。エンドユーザーに配布するものはすべて検査される可能性があり、ユーザーがストリーミングサイトのフロントエンドにキーを貼り付け、第三者が JS バンドルをスクレイピングして数時間以内にリクエスト残高を使い果たした実際の事例があります。このようにして消費されたクォータは返金されません。',
  'subs.keys.protect.p2':
    'クライアントアプリからキーを使用する 2 つの安全な方法：',
  'subs.keys.protect.option1':
    '[Wyzie Worker](https://github.com/wyziedevs/wyzie-worker) を使用する：API キーを `NITRO_API_TOKEN` シークレットとして保持する無料の Cloudflare Worker プロキシです。Worker へのすべての呼び出しでは、自分で設定する 2 つ目のシークレットを含む `Authorization: Bearer <NITRO_WORKER_KEY>` を送信する必要があります。そのため、クライアントは自前のバックエンドを経由させ、ワーカーキーもサーバーサイドに保持してください。',
  'subs.keys.protect.option2':
    '独自のプロキシを実行する：sub.wyzie.io に転送する前にキーを付加するバックエンドエンドポイントであれば何でも機能します。10 行のサンプルは入門ページをご覧ください。',
  'subs.keys.protect.devtools':
    'DevTools のネットワークタブにキーが表示される場合、そのキーは公開されています。公開されているとみなし、[ダッシュボード](https://store.wyzie.io/dashboard)からローテーションしてください。',

  'subs.keys.using.h2': 'キーの使い方',
  'subs.keys.using.p':
    'すべての API リクエストに &key=YOUR_KEY を追加してください：',
  'subs.keys.using.npm.h3': 'NPM パッケージ',

  'subs.keys.limit.h2': '制限に達した場合',
  'subs.keys.limit.p':
    '検索は 1 リクエスト、字幕のダウンロードは 1 回ごとに 1 リクエストを消費するため、1 回検索して 1 ファイルをダウンロードすると 2 リクエストを使用します。AI 翻訳は 1 回の呼び出しにつき 25 リクエスト、Wyzie Synced の同期は 1 回につき 5 リクエストを消費します。',
  'subs.keys.limit.free':
    '**無料ティア**が枯渇した場合 -> 検索とダウンロードリンクは 429 Daily request limit reached を返し、JSON には reset_at が含まれ、Retry-After ヘッダーも付与されます。1日 1,000 リクエストの上限は UTC 午前 0 時にリセットされます。',
  'subs.keys.limit.paid':
    '**有料残高**が枯渇した場合 -> 検索とダウンロードリンクは 402 を返し、JSON にはトップアップ用のリンクが含まれます。[store.wyzie.io/topup](https://store.wyzie.io/topup) でトップアップするか、ダッシュボードで **自動トップアップ** を有効にして残高が設定したしきい値を下回ったときに自動的に補充されるようにしてください。',
  'subs.keys.hold.p1':
    '主にデータセンターやホスティングの IP から非常に大量のリクエストを送信するキーは、自動的に一時停止されます。一時停止されたキーはすべてのリクエストで 403 Key on hold を受け取り、JSON には復旧用リンク（https://store.wyzie.io/verify）とサポートリンク（https://store.wyzie.io/contact）が含まれます。',
  'subs.keys.hold.p2':
    'キーをすぐに復旧するには、キーを使用しているウェブサイトを [store.wyzie.io/verify](https://store.wyzie.io/verify) で DNS TXT レコードまたは meta タグを使って認証してください。認証済みのサイトがあるキーは二度と自動停止されないため、トラフィックの多いサイトは、一時停止される前にあらかじめ認証しておくことができます。',
  'subs.keys.hold.p3':
    'バックエンドサービスやアプリなど、ウェブサイトがない場合は、[サポートに連絡](https://store.wyzie.io/contact)してキーを復旧してもらってください。',

  'subs.keys.files.h2': 'ファイルの内容',
  'subs.keys.files.adfilter':
    '**広告フィルタリング**：sub.wyzie.io を通じて配信されるすべての字幕から、プロバイダーの広告キュー（OpenSubtitles のバナー、賭博サイトの宣伝、「... で無料視聴」といった行）が除去されます。SRT のキューは番号が振り直されるため、欠番は生じません。OpenSubtitles を含むすべてのプロバイダーが sub.wyzie.io を通じて配信されるため、フィルターはそのすべてに適用されます。',
  'subs.keys.files.promo':
    '**無料キーと開発用キー**では、各ファイルの冒頭（0–6 s）に [store.wyzie.io](https://store.wyzie.io) を案内する短いキューが 1 つ挿入されます。有料キーには、キューのないクリーンなファイルが提供されます。',

  'subs.keys.faq.h2': 'よくある質問',
  'subs.keys.faq.q1': 'キーを紛失しました。新しいキーをもらえますか？',
  'subs.keys.faq.a1':
    '[ダッシュボード](https://store.wyzie.io/dashboard)を開き、登録メールアドレスで「Forgot key」ボタンを使用してください。既存のキーを再送します。キーが漏洩したと思われる場合は、代わりにダッシュボードからローテーションしてください。',
  'subs.keys.faq.q2': '1 つのキーを複数のプロジェクトで使用できますか？',
  'subs.keys.faq.a2':
    'はい。キーは API を呼び出す場所であればどこでも使用できます。',
  'subs.keys.faq.q3': 'キーに有効期限はありますか？',
  'subs.keys.faq.a3':
    'いいえ。無料キーも有料キーも有効期限はありません。無料キーは日次で上限がありますが、有料残高は使い切るまで持続します。',
  'subs.keys.faq.q4': '自動トップアップは安全ですか？',
  'subs.keys.faq.a4':
    '月間の上限金額を設定できます。その金額を超えて課金されることはなく、確認メールとダッシュボードからワンクリックで無効にできます。',

  // Proxy Intro Page
  'proxy.intro.title': 'Wyzie Proxy 入門',
  'proxy.intro.note':
    'Wyzie Subs の本番バージョンはこのプロキシを使用せず、代わりに [i6.shark](https://github.com/wyziedevs/i6.shark) を使用しています。',
  'proxy.intro.p1':
    'Wyzie Proxy は CORS やその他の制限なしに任意のウェブサイトへのリクエストを可能にする強力なプロキシ API です。Wyzie Proxy は Nitro で作られているため、AWS Amplify、Azure、Cloudflare、Netlify、Stormkit、Vercel、Zeabur などのプラットフォームでホストできます。',
  'proxy.intro.btn.hosting': 'ホスティング',
  'proxy.intro.btn.check': '確認する',

  // Proxy Hosting Page
  'proxy.hosting.title': 'Wyzie Proxy のホスティング',
  'proxy.hosting.p1':
    'Wyzie Proxy のビルドは Nitro のおかげで息をするよりも簡単です。まず、Wyzie Proxy のリポジトリをクローンしてください：',
  'proxy.hosting.p2': '次に、必要なパッケージをすべてインストールします：',
  'proxy.hosting.p3':
    'すべてのパッケージがインストールされたら、プロキシをビルドできます：',
  'proxy.hosting.p4':
    '出力は /.output/server フォルダーに生成されます。Cloudflare Workers にデプロイする場合は、index.mjs ファイルをワーカーにコピー＆ペーストしてください。それ以外の場合は通常通りファイルをデプロイできます。',

  // i6.shark Intro Page
  'i6shark.intro.title': 'i6.shark 入門',
  'i6shark.intro.p1':
    'i6.shark は /48 サブネット内のランダムに生成された IPv6 アドレスから HTTP リクエストを送信できる IPv6 プロキシサーバーです。これは現在 Wyzie Subs の本番環境で稼働しているプロキシです。',
  'i6shark.intro.p2':
    '/48 サブネットには 1,208,925,819,614,629,174,706,176（1.2 x 10^24）個の IPv6 アドレスがあり、従来の IP バンによるブロックは事実上不可能です。単一のサブネットを使用するということは、本当にブロックしたい人はあなたの ASN アドレスをブロックできるということですので、注意してください。',
  'i6shark.intro.btn.hosting': 'ホスティング',
  'i6shark.intro.btn.github': 'GitHub',

  'i6shark.intro.features.h2': '機能',
  'i6shark.intro.feature1':
    '**ランダム IPv6 生成**: /48 プレフィックスからリクエストごとにランダムな IPv6 アドレスを作成',
  'i6shark.intro.feature2':
    '**完全な HTTP メソッドサポート**: GET、POST、PUT、DELETE、その他すべての HTTP メソッド',
  'i6shark.intro.feature3':
    '**HMAC-SHA256 認証**: ユーザーエージェントベースのトークンを使用した安全な API キー認証',
  'i6shark.intro.feature4':
    '**インテリジェントな IP プール管理**: 設定可能なプールサイズによる自動 IP ローテーション。スマートな IP ライフサイクル管理。IP ごとのリクエスト数カウント。非アクティブしきい値に基づく未使用 IP のクリーンアップ。',
  'i6shark.intro.feature5':
    '**高度なリクエスト処理**: カスタムヘッダー転送。Cloudflare および CDN ヘッダーの除去。複数の URL パラメータ形式のサポート。システムデフォルト IP へのオプションのフォールバック。',
  'i6shark.intro.feature7':
    '**自動メンテナンス**: 定期的な IP プールフラッシュ。サブネットの検証とクリーンアップ。接続プーリングとキープアライブ最適化。',
  'i6shark.intro.feature8':
    '**高パフォーマンス**: バッファプーリングによる並行リクエスト処理。設定可能なタイムアウトと接続制限。効率的な IPv6 アドレス管理。',
  'i6shark.intro.feature9':
    '**デバッグモード**: トラブルシューティングとモニタリングのための詳細なログ記録',

  'i6shark.intro.requirements.h2': '要件',
  'i6shark.intro.req1': 'Go 1.22 以上',
  'i6shark.intro.req2':
    'IPv6 をサポートする Linux/Unix システム（Ubuntu 推奨）',
  'i6shark.intro.req3': 'ルート権限（ポート 80 のバインドと IPv6 操作に必要）',
  'i6shark.intro.req4':
    'ホスティングプロバイダーからの IPv6 /48 サブネット割り当て',

  'i6shark.intro.providers.h2': 'ホスティングプロバイダー',
  'i6shark.intro.providers.p1':
    '以下のプロバイダーは /48 IPv6 サブネットを提供することが知られています：',

  // i6.shark Hosting Page
  'i6shark.hosting.title': 'i6.shark のホスティング',
  'i6shark.hosting.p1':
    'i6.shark のセットアップには /48 IPv6 サブネットを持つ VPS が必要です。設定が完了すれば、最小限のメンテナンスで自律的に動作します。',

  'i6shark.hosting.steps.h2': '手順',
  'i6shark.hosting.step1':
    'リポジトリを /opt/i6.shark にクローンしてください：',
  'i6shark.hosting.step2': 'src/consts.go の定数を設定してください：',
  'i6shark.hosting.step2.note':
    'SharedSecret、IPv6Prefix、Interface をサーバーに合わせて更新してください。残りのチューニング定数はデフォルト値で問題なく、通常変更は不要です。',
  'i6shark.hosting.step3': 'アプリケーションをビルドしてください：',
  'i6shark.hosting.step4': 'systemd サービスを作成してください：',
  'i6shark.hosting.step5': 'サービスを有効化して起動してください：',
  'i6shark.hosting.step5.check': 'ステータスを確認してください：',
  'i6shark.hosting.post':
    'プロキシサーバーは起動時に自動的に実行され、クラッシュした場合は自動的に再起動します。',

  'i6shark.hosting.daily.h2': '毎日の再起動（オプション）',
  'i6shark.hosting.daily.p':
    '毎日ランダムな時刻にサーバーを再起動する cron ジョブを追加してください：',

  'i6shark.hosting.auth.h2': 'API 認証',
  'i6shark.hosting.auth.p':
    'API トークンは共有秘密鍵を使用した HMAC-SHA256 で生成されます。キー生成の入力はユーザーエージェントヘッダーです。実装の詳細はソースコードの validateAPIToken 関数をご覧ください。',

  // Plugins
  'plugins.common.required': '必須',

  'plugins.index.intro':
    'Wyzie Subs は、お使いのメディアアプリにそのまま組み込めます。すべてのプラグインは同じ `https://sub.wyzie.io/search` エンドポイントと通信し、無料の **Wyzie API キー** が必要です。[store.wyzie.io](https://store.wyzie.io/#plans) で取得してください。',
  'plugins.index.tbl.stremio.for':
    'デスクトップ、モバイル、または TV の Stremio で視聴する場合',
  'plugins.index.tbl.stremio.install':
    'ホスト型アドオン：キーを貼り付けて Install をクリック',
  'plugins.index.tbl.bazarr.for':
    'Plex、Jellyfin、Emby、Sonarr、Radarr のライブラリ',
  'plugins.index.tbl.bazarr.install':
    'お使いの Bazarr インスタンスにそのまま追加できるプロバイダー',
  'plugins.index.tbl.kodi.for': 'Kodi 19+、LibreELEC、CoreELEC',
  'plugins.index.tbl.kodi.install':
    'zip または Wyzie リポジトリからインストール',
  'plugins.index.use.stremio':
    'Stremio アプリ内で視聴する場合は **Stremio** をお使いください。',
  'plugins.index.use.bazarr':
    'Plex、Jellyfin、または Emby を使用している場合は **Bazarr** をお使いください。Bazarr は字幕ファイルをディスクにダウンロードし、メディアサーバーが自動的にそれを取り込みます。これは Plex と Jellyfin で推奨される方法でもあります。別途専用のネイティブプラグインはありません。',
  'plugins.index.use.kodi':
    'Android TV、Raspberry Pi、またはホームシアター PC 上で Kodi ネイティブの字幕サービスを利用するには **Kodi** をお使いください。',
  'plugins.index.shared.sources':
    '**ソース：** キーで使用できるすべてのソース（`source=all`）。無料キーでは charlie と lima、Pro キーでは 7 つすべてです。',
  'plugins.index.shared.matching':
    '**マッチング：** Wyzie は IMDB および TMDB の ID とシーズン・エピソードで動作するため、映画でもシリーズでも正確にマッチします。',
  'plugins.index.shared.quota':
    '**クォータ：** キーを使い切ると、プラグインは無言で失敗する代わりに [store.wyzie.io](https://store.wyzie.io) へのリンク付きの分かりやすいメッセージを表示します。チャージまたはサブスクライブすればすぐに再開できます。',
  'plugins.index.shared.languages':
    '**言語：** 100 以上、プラグインごとに選択可能です。',
  'plugins.index.outro':
    '始めるには上からプラットフォームを選んでください。すべてのプラグインのソースコードは [wyzie-plugins リポジトリ](https://github.com/wyziedevs/wyzie-plugins) にあります。',

  'plugins.stremio.intro':
    '[Stremio](https://www.stremio.com/) 向けのワンクリック字幕アドオンです。キーで使用できるすべての Wyzie ソースにクエリし、映画とシリーズの両方に対応、Stremio が動作するあらゆるプラットフォームで利用できます。',
  'plugins.stremio.before':
    '無料の Wyzie API キーが必要です。[store.wyzie.io/redeem](https://store.wyzie.io/redeem) で取得するか、[store.wyzie.io](https://store.wyzie.io/#plans) で Pro キーを購入またはサブスクライブしてください。',
  'plugins.stremio.install.1':
    '[stremio.wyzie.io/configure](https://stremio.wyzie.io/configure) を開きます。',
  'plugins.stremio.install.2': '**API キー** を貼り付けます。',
  'plugins.stremio.install.3':
    '任意：希望する **言語** を ISO 639-1 コードでカンマ区切りで入力します（例：`en,es,fr`）。すべての言語にする場合は空欄のままにします。',
  'plugins.stremio.install.4':
    '任意：聴覚障害者向け字幕のみを取得するには **聴覚障害者向け** をオンにします。すべてを表示するにはオフのままにしてください。オンの間は、聴覚障害者向け字幕にフラグを付けていないソースからは何も返されません。',
  'plugins.stremio.install.5':
    '**Install** をクリックします。Stremio が開いて確認を求めるので、承認すれば完了です。',
  'plugins.stremio.install.after':
    'キーと設定はアドオンにエンコードされるため、他に設定する必要はありません。任意の映画やエピソードを開き、リストから字幕を選んでください。',
  'plugins.stremio.cfg.key.f': 'API キー',
  'plugins.stremio.cfg.key.d': 'あなたの Wyzie キー。必須です。',
  'plugins.stremio.cfg.langs.f': '言語',
  'plugins.stremio.cfg.langs.d':
    'ISO 639-1 コードをカンマ区切りで指定します。空欄はすべての言語を意味します。',
  'plugins.stremio.cfg.hi.f': '聴覚障害者向け',
  'plugins.stremio.cfg.hi.d':
    '聴覚障害者向け字幕のみを返します（hi=true を送信）。デフォルトはオフです。',
  'plugins.stremio.cfg.note':
    '後でこれらを変更するには、[stremio.wyzie.io/configure](https://stremio.wyzie.io/configure) を再度開いて調整し、再インストールしてください。',
  'plugins.stremio.local':
    'その後 `http://127.0.0.1:7000/configure` を開いてキーを貼り付け、Stremio にインストールしてください。',
  'plugins.stremio.quota':
    'キーが上限に達すると、アドオンは [store.wyzie.io](https://store.wyzie.io) へのリンク付きの字幕エントリを1つ表示し、チャージまたはサブスクライブできるようにします。実行するとすぐに字幕が戻ります。',
  'plugins.stremio.ts.none':
    '**字幕が表示されない。** そのタイトルが Stremio に IMDB ID を持っていること（ほとんどのカタログ項目は持っています）、選択した言語に実際にそのタイトルの字幕があることを確認してください。すべてを見るには言語フィルターをクリアしてみてください。',
  'plugins.stremio.ts.key':
    '**キーが無効、または何も読み込まれない。** configure ページを再度開いてキーを貼り直してください。余分なスペースが入ると壊れます。キーが [store.wyzie.io/dashboard](https://store.wyzie.io/dashboard) で動作することを確認してください。',
  'plugins.stremio.ts.episode':
    '**シリーズのエピソードがマッチしない。** Wyzie はシーズンとエピソードでマッチします。Stremio が一般的なシリーズページではなく正しいエピソード項目を再生していることを確認してください。',

  'plugins.bazarr.intro':
    '[Bazarr](https://www.bazarr.media/) は **Plex、Jellyfin、Emby、Sonarr、Radarr** の字幕を一元管理します。Wyzie をプロバイダーとして追加すると、それらすべてのサーバーが単一のキーを通じて、そのキーで使用できるすべての Wyzie ソースにアクセスできるようになります。',
  'plugins.bazarr.note':
    'これは Plex と Jellyfin で Wyzie を使用する推奨方法です。Bazarr は字幕ファイルをメディアの隣にダウンロードし、サーバーが自動的にそれを取り込むため、別途ネイティブプラグインは必要ありません。',
  'plugins.bazarr.before':
    '[store.wyzie.io/redeem](https://store.wyzie.io/redeem) で無料の Wyzie API キーを取得し、Bazarr のインストールファイルにアクセスできるようにしてください（一般的な Docker パス：`/opt/bazarr/bazarr/`）。',
  'plugins.bazarr.install.1':
    '[wyzie-plugins リポジトリ](https://github.com/wyziedevs/wyzie-plugins) から [bazarr/wyzie.py](https://github.com/wyziedevs/wyzie-plugins/blob/main/bazarr/wyzie.py) をダウンロードし（または `git clone https://github.com/wyziedevs/wyzie-plugins.git` を実行し）、`bazarr/subliminal_patch/providers/wyzie.py` にコピーします。',
  'plugins.bazarr.install.2':
    '`bazarr/subliminal_patch/extensions.py` を編集し、`provider_registry` と `provider_manager` の **両方** に `wyzie` を追加します。',
  'plugins.bazarr.install.3':
    '`bazarr/list_subtitles.py`（バージョンによっては `bazarr/config.py`）を編集して `api_key`、`prefer_hi`、`sources` の設定を公開します。`opensubtitlescom` などの既存プロバイダーのパターンをコピーしてください。',
  'plugins.bazarr.install.4': 'Bazarr を再起動します。',
  'plugins.bazarr.install.5':
    '**Settings, Providers, Wyzie** に移動し、API キーを貼り付けて保存します。',
  'plugins.bazarr.install.after':
    'このプロバイダーを Bazarr 本体へ取り込む正式なプルリクエストが計画されています。それまでは、自分のインストールに追加するドロップイン形式のファイルです。',
  'plugins.bazarr.cfg.key': 'あなたの Wyzie キー。必須です。',
  'plugins.bazarr.cfg.hi':
    '聴覚障害者向け字幕のみを返します（hi=true を送信）。',
  'plugins.bazarr.cfg.sources':
    'クエリするプロバイダーのカンマ区切りリスト、または `all`。',
  'plugins.bazarr.quota.402':
    '**402 または 429**（残高切れまたは日次上限到達）：Bazarr は [store.wyzie.io](https://store.wyzie.io) へのリンク付きのメモをログに記録し、結果を返さないため、他のプロバイダーへきれいにフォールバックします。クラッシュはしません。',
  'plugins.bazarr.quota.401':
    '**401**（キーがない）または **403**（不明なキー、または一時停止中のキー）：Bazarr は認証エラーを表示するので、キーを確認または再入力すべきだと分かります。',
  'plugins.bazarr.ts.missing':
    '**Wyzie がプロバイダーリストに表示されない。** `extensions.py` を編集するインストール手順を再確認してください。エントリは `provider_registry` と `provider_manager` の両方になければなりません。その後 Bazarr を再起動してください。',
  'plugins.bazarr.ts.none':
    '**字幕が見つからない。** その項目が Bazarr に IMDB ID を持っていること、有効にした言語にその字幕があることを確認してください。意図がある場合のみ `sources` を絞り込んでください。',
  'plugins.bazarr.ts.settings':
    '**設定フィールドが見当たらない。** 設定手順がお使いの Bazarr バージョンに適用されていません。動作するプロバイダーの設定ブロックと比較して、再起動してください。',

  'plugins.kodi.intro':
    '**Kodi 19+（Matrix 以降）**、LibreELEC、CoreELEC 向けの字幕サービスです。Kodi 標準の `xbmc.subtitle.module` 拡張ポイントを使用するため、Kodi が字幕を探すあらゆる場所に表示されます。',
  'plugins.kodi.before':
    '[store.wyzie.io/redeem](https://store.wyzie.io/redeem) で無料の Wyzie API キーを取得してください。',
  'plugins.kodi.repo.intro':
    'リポジトリを一度インストールすると、Kodi がアドオンを **自動更新** してくれます。',
  'plugins.kodi.repo.1':
    'リポジトリインストーラーをダウンロードします：[**repository.wyzie.zip**](https://kodi.wyzie.io/repository.wyzie.zip)。',
  'plugins.kodi.repo.2':
    'Kodi で：**Settings, Add-ons, Install from zip file** を選び、`repository.wyzie.zip` を選択します。Kodi がブロックする場合は、先に **Settings, System, Add-ons, Unknown sources** を有効にしてください。',
  'plugins.kodi.repo.3':
    '**Settings, Add-ons, Install from repository, Wyzie Repository, Subtitle services, Wyzie Subs, Install。**',
  'plugins.kodi.repo.4':
    '**Settings, Player, Language, Default subtitle service** を開き、**Wyzie Subs** を選択します。',
  'plugins.kodi.repo.5':
    'Wyzie Subs アドオンの設定を開き、**API キー** を貼り付けます。',
  'plugins.kodi.zip.intro':
    'リポジトリを追加したくない場合はこちらを使ってください。注意：zip インストールは **自動更新されません**。',
  'plugins.kodi.zip.1':
    'アドオンの zip を入手します：`service.subtitles.wyzie-<version>.zip`。自分でビルドする場合は、[wyzie-plugins リポジトリ](https://github.com/wyziedevs/wyzie-plugins) をクローンし（`git clone https://github.com/wyziedevs/wyzie-plugins.git`）、その `kodi/` フォルダーを zip にして、zip のルートに `addon.xml` が含まれるようにします。',
  'plugins.kodi.zip.2':
    'Kodi で：**Settings, Add-ons, Install from zip file** を選び、その zip を選択します。Kodi がブロックする場合は、先に **Settings, System, Add-ons, Unknown sources** を有効にしてください。',
  'plugins.kodi.zip.3':
    '**Settings, Player, Language, Default subtitle service** を開き、**Wyzie Subs** を選択します。',
  'plugins.kodi.zip.4':
    'Wyzie Subs アドオンの設定を開き、**API キー** を貼り付けます。',
  'plugins.kodi.cfg.key': 'あなたの Wyzie キー。必須です。',
  'plugins.kodi.cfg.hi': '聴覚障害者向け字幕のみを返します（hi=true を送信）。',
  'plugins.kodi.cfg.langs':
    '言語は Kodi で選択された字幕言語から取得され、自動的に ISO 639-1 にマッピングされます。',
  'plugins.kodi.matching.1':
    '再生中、Kodi は IMDB 番号、シーズン、エピソードを公開します。アドオンはそれらを読み取って `sub.wyzie.io/search` に問い合わせ、マッチする字幕を返します。Wyzie は ID 駆動（IMDB と TMDB）なので、映画でもシリーズでも正確にマッチします。',
  'plugins.kodi.matching.2':
    '**手動検索** は現在、通知を表示するだけで何もしません。Wyzie はタイトルではなく ID でマッチするためです。タイトルから ID への変換はロードマップにあります。当面は、再生中に Kodi が自動検索するに任せてください。',
  'plugins.kodi.quota':
    '402 または 429 のレスポンスが返ると、チャージまたはサブスクライブのために [store.wyzie.io](https://store.wyzie.io) を指す Kodi のトースト通知が表示されます。',
  'plugins.kodi.ts.notoffered':
    '**再生中に Wyzie が表示されない。** **Default subtitle service** として設定されていること、再生中の項目が IMDB ID を持っていることを確認してください。',
  'plugins.kodi.ts.key':
    '**キーが無効。** アドオンの設定を再度開いてキーを貼り直してください。',
  'plugins.kodi.ts.episode':
    '**エピソードに対して何も出ない。** Kodi がそのファイルの正しいシーズン・エピソードのメタデータを持っていることを確認してください。スクレイプされたライブラリ項目が最も適しています。',
};

export default messages;
