const messages: Record<string, string> = {
  // Navigation
  'nav.language': '言語',

  // Index / Landing Page
  'index.subtitle':
    'Wyzie は字幕のスクレイピングとその周辺機能のためのオープンソースツールセットです。',
  'index.cta.start': 'はじめる',
  'index.cta.store': 'ストアを見る',

  'index.card.keys.title': '無料 API キー',
  'index.card.keys.body':
    'store.wyzie.io/redeem で Gmail 認証を行うだけで無料の API キーを取得できます。1日 1,000 リクエストを無料でご利用いただけます。より高い使用量には有料プランもご用意しています。',

  'index.card.ai.title': 'AI 翻訳',
  'index.card.ai.body':
    '任意の字幕を 80 以上の言語にオンデマンドで翻訳できます。キューごとにストリーミングされるため、数秒で再生を開始できます。Pro キーでご利用いただけます。',

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
    'Wyzie Subs は、フリーかつリブレなオープン字幕スクレイピング API です。API へのリクエストには 2 つの方法があります。NPM パッケージを使用するか、Wyzie API を直接フェッチするかです。パッケージの使用を推奨しますが、型が煩わしいと感じる方もいるかもしれません。API を使用する前に、どちらの方法を使うか決めておく必要があります。',
  'subs.intro.note.ai':
    'AI 翻訳は Pro キー向けに提供中です。あらゆるタイトルに対応し、80 以上の言語をターゲットに、翻訳の進行に合わせてストリーミングで返します。',
  'subs.intro.important.apikey':
    'すべてのリクエストには API キーが必要です。[store.wyzie.io/redeem](https://store.wyzie.io/redeem) で無料キーを取得してください（Gmail 認証、1日 1,000 リクエスト）。より高い使用量には [Pro およびトップアッププラン](https://store.wyzie.io) もご利用いただけます。詳細は API キーのページをご覧ください。',
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
    'Wyzie Worker は軽量な Cloudflare Worker プロキシで、サーバーサイドで API キーを注入します。Cloudflare Workers にデプロイし、NITRO_API_TOKEN 環境変数にキーを設定してください。その後、クライアントのリクエスト先を sub.wyzie.io の代わりにワーカーの URL に向けると、ワーカーがキーを付加してリクエストを転送します。',
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
    '指定がない場合のデフォルトソースは opensubtitles です',
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
    'スクレイパーではありません。利用可能な最良のソース字幕からオンデマンドで AI 翻訳した SRT を生成します。詳細は AI 翻訳ガイドをご覧ください。',
  'subs.sources.ai.content': 'Wyzie が SRT を見つけられるものすべて',
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
  'subs.pkg.param.hi': '聴覚障害者向け字幕を示すブール値。',
  'subs.pkg.param.source':
    'クエリする字幕プロバイダー（all ですべての有効なソースを対象）。',
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
    'このパッケージには軽量な TMDB ヘルパーも同梱されています：/search を呼び出す前に ID をすばやく見つけるための searchTmdb、getTvDetails、getSeasonDetails です。また、getSources を使用して現在有効な字幕ソースの一覧を取得することもできます。',
  'subs.pkg.types.h3': '型定義',
  'subs.pkg.type.search': 'API が認識するすべての有効なパラメータ。',
  'subs.pkg.type.query':
    'wyzie-subs API で使用可能なすべてのパラメータ（任意および必須）。',
  'subs.pkg.type.subtitle': 'API から返されるすべての値とその型。',
  'subs.pkg.type.sources': '/sources エンドポイントのレスポンス型。',
  'subs.pkg.types.end':
    '型定義は非常にシンプルで充実したドキュメントが付いています。GitHub リポジトリにリンクされている types.ts ファイルをご確認ください。',
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
  'subs.direct.param.hi': '聴覚障害者向け字幕を優先するかどうか。',
  'subs.direct.param.encoding': '文字エンコードフィルター。',
  'subs.direct.param.source':
    'クエリする字幕プロバイダー（all ですべての有効なソースをクエリ。デフォルトは opensubtitles）。',
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
  'subs.direct.important.imdb':
    "IMDB ID を使用する場合、ID の先頭に最初の 2 文字（'tt'）が含まれていることを確認してください。",

  'subs.direct.data.h3': '返されるデータ',
  'subs.direct.data.id': '字幕ファイルの ID。',
  'subs.direct.data.url': '字幕ファイルの URL。',
  'subs.direct.data.flagUrl': '言語のロケールのフラグの URL。',
  'subs.direct.data.format': '字幕ファイルの形式。',
  'subs.direct.data.encoding': '字幕ファイルの文字エンコード。',
  'subs.direct.data.display': '字幕の言語名（先頭大文字）。',
  'subs.direct.data.language': '言語の ISO 3166-2 コード。',
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

  // Subs Translate Page
  'subs.translate.title': 'AI 字幕翻訳',
  'subs.translate.important':
    'AI 翻訳は **Pro 機能**です。翻訳ごとにキーの残高から **100 リクエスト**が消費され、キャッシュヒット時も同様に課金されます。無料キーでは使用できません。',
  'subs.translate.p1':
    'Wyzie はあらゆる字幕を 80 以上の言語にオンザフライで翻訳できます。翻訳はモデルの生成に合わせてストリーミングで返されるため、ファイル全体を待つことなく 1〜2 秒以内に再生を開始できます。結果は 30 日間キャッシュされるため、同じ翻訳を 2 人目に要求した人は即座に取得できます。',

  'subs.translate.ways.h2': '2 つの使い方',
  'subs.translate.way1.h3': '1. 検索レスポンスから言語を選ぶ',
  'subs.translate.way1.p1':
    'すべての /search レスポンスには、サポートされている各言語に対して "ai": true と /translate を指すURLを持つ追加エントリが含まれるようになりました。UI で AI 行を通常の字幕行と同様に扱うだけです。ユーザーがクリックしたら URL をフェッチしてください。',
  'subs.translate.way1.filter':
    'UI から AI 行を非表示にしたい場合はフィルタリングしてください：',
  'subs.translate.way2.h3': '2. /translate を直接呼び出す',

  'subs.translate.param.id': 'TMDB または IMDB ID（必須）。',
  'subs.translate.param.target':
    'ターゲット言語の英語名（例：Spanish、Japanese、Brazilian Portuguese）（必須）。',
  'subs.translate.param.seasonEpisode':
    'テレビ番組用。両方同時に指定する必要があります。',
  'subs.translate.param.key':
    'API キー。/search から URL を取得した場合は tk を使用してください。',
  'subs.translate.param.tk':
    '/search が返す署名付きトークン。key と同等ですが、生のキーを公開しません。',

  'subs.translate.headers.p':
    'レスポンスボディは text/plain; charset=utf-8 としてストリーミングされる SRT ファイルです。有用なレスポンスヘッダー：',
  'subs.translate.header.xcache':
    'キャッシュから提供された場合は HIT-REDIS、新たに生成された場合は MISS。',
  'subs.translate.header.xsourcelang': '翻訳者が入力として使用した字幕の言語。',
  'subs.translate.header.xtargetlang': 'target パラメータのエコー。',
  'subs.translate.header.xsourceprovider': 'ソース字幕を提供したスクレイパー。',

  'subs.translate.how.h2': '仕組み',
  'subs.translate.how.step1':
    'Wyzie が通常のソースから SRT 字幕を検索し、利用可能な場合は英語を優先します。',
  'subs.translate.how.step2':
    'SRT を 50 キューのチャンクに分割し、順次翻訳します。各チャンクは完了した時点で個別にキャッシュされます。',
  'subs.translate.how.step3':
    '出力はキューごとにストリーミングで返されます。ストリーミング SRT ボディを受け付けるプレイヤーは、残りが完了する前に最初の行を表示し始めることができます。',
  'subs.translate.how.step4':
    '完全な翻訳は id、season、episode、target をキーとして Redis に 30 日間キャッシュされます。',

  'subs.translate.languages.h2': 'サポートされているターゲット言語',
  'subs.translate.languages.p':
    '主要なヨーロッパ語、アジア語、アフリカ語、中東言語を含む 80 以上の言語。英語名で指定してください（es ではなく Spanish）。リストはすべての /search レスポンスで ai: true 行としても返されており、それが正式な情報源です。',

  'subs.translate.limitations.h2': '制限事項',
  'subs.translate.limit1':
    'AI 翻訳には SRT ソースが必要です。利用可能な字幕がすべて .ass、.vtt などの形式のタイトルは 404 No SRT found を返します。',
  'subs.translate.limit2':
    '翻訳品質はソース字幕に依存します。タイミングが悪いまたは誤字のあるソースは、同様にタイミングが悪いまたは誤字のある翻訳を生成します。',
  'subs.translate.limit3':
    'AI 行を完全に除外したいユーザーもいるかもしれません。クライアントで ai === false でフィルタリングしてください。',
  'subs.translate.limit4':
    '翻訳はキャッシュヒット時も課金されます。新たに生成された場合でも 30 日間のキャッシュから提供された場合でも、各 /translate リクエストは 100 リクエストを消費します。',

  // Subs API Keys Page
  'subs.keys.title': 'API キー',
  'subs.keys.p1':
    'Wyzie Subs はすべてのリクエストに API キーが必要です。無料ティアでほとんどのユースケースに対応しています。より大量の使用には有料プランをご利用ください。',

  'subs.keys.tiers.h2': 'ティア',
  'subs.keys.tier.free': '無料（Gmail 必須）',
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
    'Gmail アドレスを入力してください（無料ティアでは Gmail のみ対応）。',
  'subs.keys.free.step3':
    'メールで送られてくる 6 桁のコードを入力してください。',
  'subs.keys.free.step4':
    'wyzie-abc123... のような形式の API キーが発行されます。',
  'subs.keys.free.gmail':
    '各 Gmail アドレスで無料キーを受け取れるのは 1 回だけです。そのメールアドレスにすでに無料キーが紐付いている場合は、再度認証すると既存のキーが返されます。',

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
    '[Wyzie Worker](https://github.com/wyziedevs/wyzie-worker) を使用する：サーバーサイドでキーを保持する無料の Cloudflare Worker プロキシです。クライアントを sub.wyzie.io の代わりに Worker URL に向けてください。',
  'subs.keys.protect.option2':
    '独自のプロキシを実行する：sub.wyzie.io に転送する前にキーを付加するバックエンドエンドポイントであれば何でも機能します。10 行のサンプルは入門ページをご覧ください。',
  'subs.keys.protect.devtools':
    'DevTools のネットワークタブにキーが表示される場合、そのキーは公開されています。公開されているとみなし、サポートにメールしてローテーションしてください。',

  'subs.keys.using.h2': 'キーの使い方',
  'subs.keys.using.p':
    'すべての API リクエストに &key=YOUR_KEY を追加してください：',
  'subs.keys.using.npm.h3': 'NPM パッケージ',

  'subs.keys.limit.h2': '制限に達した場合',
  'subs.keys.limit.free':
    '**無料ティア**が枯渇した場合 -> API は X-RateLimit-Reset および Retry-After ヘッダーとともに 429 を返します。日次カウンターは UTC 深夜にリセットされます。',
  'subs.keys.limit.paid':
    '**有料残高**が枯渇した場合 -> API は 402 を返します。[store.wyzie.io/topup](https://store.wyzie.io/topup) でトップアップするか、ダッシュボードで **自動トップアップ** を有効にして残高が設定したしきい値を下回ったときに自動的に補充されるようにしてください。',

  'subs.keys.faq.h2': 'よくある質問',
  'subs.keys.faq.q1': 'キーを紛失しました。新しいキーをもらえますか？',
  'subs.keys.faq.a1':
    '[store.wyzie.io](https://store.wyzie.io) にアクセスし、登録メールアドレスで「キーを忘れた」フローを使用してください。既存のキーを再送します。',
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
  'i6shark.intro.feature6':
    '**ホストホワイトリスト**: セキュリティのためのビルトインドメインホワイトリスト（コードで設定可能）',
  'i6shark.intro.feature7':
    '**自動メンテナンス**: 定期的な IP プールフラッシュ。サブネットの検証とクリーンアップ。接続プーリングとキープアライブ最適化。',
  'i6shark.intro.feature8':
    '**高パフォーマンス**: バッファプーリングによる並行リクエスト処理。設定可能なタイムアウトと接続制限。効率的な IPv6 アドレス管理。',
  'i6shark.intro.feature9':
    '**デバッグモード**: トラブルシューティングとモニタリングのための詳細なログ記録',

  'i6shark.intro.requirements.h2': '要件',
  'i6shark.intro.req1': 'Go 1.20 以上',
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
};

export default messages;
