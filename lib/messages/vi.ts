const messages: Record<string, string> = {
  // Navigation
  'nav.language': 'Ngôn ngữ',

  // Index / Landing Page
  'index.subtitle':
    'Wyzie là một bộ công cụ để tìm kiếm phụ đề và nhiều chức năng khác.',
  'index.cta.start': 'Bắt đầu',
  'index.cta.store': 'Xem ngay',

  'index.card.keys.title': 'API Keys miễn phí',
  'index.card.keys.body':
    'Lấy API key miễn phí tại store.wyzie.io/redeem với xác minh email nhanh chóng (Gmail, Outlook, Yahoo, iCloud, Proton và các nhà cung cấp lớn khác). 1.000 yêu cầu/ngày hoàn toàn miễn phí. Có các gói trả phí cho nhu cầu sử dụng nhiều hơn.',

  'index.card.ai.title': 'Dịch thuật AI',
  'index.card.ai.body':
    'Dịch bất kỳ phụ đề nào sang hơn 80 ngôn ngữ theo yêu cầu. SRT được phát trực tuyến về theo đúng thứ tự khi từng lô hoàn tất, nên những dòng đầu tiên đến rất nhanh. Có sẵn trên các key Pro.',

  'index.card.reliable.title': 'Đáng tin cậy',
  'index.card.reliable.body':
    'Chúng tôi tự hào về thời gian hoạt động ổn định, cập nhật (gần như) hàng ngày cũng như bộ nhớ đệm nhanh chóng.',

  'index.card.simple.title': 'Đơn giản theo nghĩa mới',
  'index.card.simple.body':
    'Dễ tích hợp, dễ sử dụng. Wyzie được thiết kế để đơn giản nhất có thể.',

  // Donate Page
  'donate.title': 'Hãy ủng hộ chúng tôi',
  'donate.body':
    'Xin chào, Wyzie hiện đang phụ thuộc khá nhiều vào các khoản đóng góp (mà tôi hầu như không nhận được) và tôi mới 16 tuổi với một công việc bán thời gian, đôi khi hóa đơn để duy trì API công khai vượt quá 100$ mỗi tháng. Tôi không thể tiếp tục hỗ trợ nếu không có sự giúp đỡ bên ngoài, tôi thực sự xin lỗi nhưng dự án này đã phát triển vượt quá khả năng tự chi trả ban đầu của tôi.',
  'donate.cta': 'Ủng hộ Wyzie',

  // Subs Intro Page
  'subs.intro.title': 'Giới thiệu Wyzie Subs',
  'subs.intro.p1':
    'Wyzie Subs là một API tìm kiếm phụ đề có gói miễn phí. Có hai cách để gửi yêu cầu tới API: sử dụng gói NPM của chúng tôi hoặc trực tiếp gọi Wyzie API. Tôi khuyến nghị dùng gói của chúng tôi, nhưng một số người có thể thấy các kiểu dữ liệu hơi phức tạp. Để sử dụng API, trước tiên bạn cần đưa ra quyết định đó.',
  'subs.intro.important.apikey':
    'API key là bắt buộc cho tất cả các yêu cầu. Lấy key miễn phí tại [store.wyzie.io/redeem](https://store.wyzie.io/redeem) (xác minh email, 1.000 yêu cầu/ngày). Để sử dụng nhiều hơn, [các gói Pro và nạp thêm](https://store.wyzie.io) đã có sẵn. Xem trang API Keys để biết chi tiết.',
  'subs.intro.note.npm':
    'Chúng tôi khuyến nghị mạnh mẽ sử dụng gói NPM nếu bạn quen thuộc với TypeScript hoặc JavaScript',
  'subs.intro.note.status':
    'Thời gian hoạt động và sự cố: [sub.wyzie.io/status](https://sub.wyzie.io/status) và [Status API](/subs/usage/status). Tin tức về API và cửa hàng: [sub.wyzie.io/news](https://sub.wyzie.io/news).',
  'subs.intro.btn.npm': 'Gói NPM',
  'subs.intro.btn.direct': 'Gọi trực tiếp',

  'subs.intro.protect.h2': 'Bảo vệ API Key của bạn',
  'subs.intro.protect.important':
    '**Sự cố thực tế:** chúng tôi đã thấy các nhà phát triển dán key của họ trực tiếp vào JavaScript frontend của một trang phát video. Chỉ trong vài giờ, một bên không liên quan đã lấy key đó từ JS bundle và sử dụng cho đến khi hết giới hạn hàng ngày hoặc hết số dư trả phí. Hạn mức bị mất theo cách này không được hoàn trả và được coi là trách nhiệm của chủ sở hữu key theo Điều khoản của chúng tôi.',
  'subs.intro.protect.p1':
    'API key của bạn phải được giữ bí mật và **không bao giờ** xuất hiện trong:',
  'subs.intro.protect.item1':
    'JavaScript trình duyệt (bất kỳ thứ gì được phục vụ cho thẻ script)',
  'subs.intro.protect.item2':
    'File nhị phân ứng dụng di động (Android/iOS, kể cả bản đã được làm rối mã)',
  'subs.intro.protect.item3': 'Tiện ích mở rộng trình duyệt',
  'subs.intro.protect.item4':
    'Ứng dụng Electron / desktop phân phối cho người dùng cuối',
  'subs.intro.protect.item5':
    'Kho Git công khai, gist, trang paste, hoặc ảnh chụp màn hình',
  'subs.intro.protect.p2':
    'Nếu key đến được máy của người dùng cuối, hãy coi nó là công khai. Có hai cách an toàn:',
  'subs.intro.protect.opt1.h3': 'Tùy chọn 1: Dùng Wyzie Worker',
  'subs.intro.protect.opt1.p1':
    'Wyzie Worker là một proxy Cloudflare Worker nhẹ, tự động gắn API key của bạn ở phía máy chủ. Triển khai nó lên Cloudflare Workers và đặt hai secret: `NITRO_API_TOKEN` (API key Wyzie của bạn) và `NITRO_WORKER_KEY` (một chuỗi bí mật do bạn tự chọn). Mọi yêu cầu gửi đến worker đều phải kèm `Authorization: Bearer <NITRO_WORKER_KEY>`; nếu thiếu, worker sẽ trả về 401, và nếu `NITRO_WORKER_KEY` chưa được đặt, worker sẽ từ chối mọi yêu cầu với 503. Key của worker cũng phải được giữ ở phía máy chủ, vì vậy hãy gọi worker từ backend của riêng bạn, không bao giờ từ code trình duyệt hay ứng dụng. Worker chuyển tiếp từng yêu cầu đến sub.wyzie.io kèm theo API key của bạn.',
  'subs.intro.protect.opt2.h3': 'Tùy chọn 2: Tự xây dựng proxy',
  'subs.intro.protect.opt2.p1':
    'Nếu bạn không muốn dùng Wyzie Worker, bạn có thể xây dựng một proxy phía máy chủ đơn giản bằng bất kỳ framework nào. Ý tưởng giống nhau: backend của bạn nhận yêu cầu từ client, gắn API key vào và chuyển tiếp đến sub.wyzie.io.',

  // Subs Sources Page
  'subs.sources.title': 'Nguồn dữ liệu Wyzie Subs',
  'subs.sources.p1':
    'Wyzie Subs tổng hợp phụ đề từ nhiều nhà cung cấp. Tính khả dụng của nguồn có thể thay đổi tùy theo trạng thái nhà cung cấp hoặc nếu một nguồn bị ngừng hoạt động. Tôi luôn tìm kiếm các nguồn mới — hãy liên hệ để đề xuất.',

  'subs.sources.using.h2': 'Sử dụng nguồn dữ liệu',
  'subs.sources.using.bullet1':
    'Dùng source=all để truy vấn tất cả các nguồn đang kích hoạt cùng lúc',
  'subs.sources.using.bullet2': 'Nguồn mặc định là charlie nếu không chỉ định',
  'subs.sources.using.bullet3':
    'Có thể chỉ định nhiều nguồn dưới dạng danh sách phân cách bằng dấu phẩy',

  'subs.sources.api.h2': 'API Endpoint',
  'subs.sources.api.p1':
    'Bạn có thể lấy danh sách các nguồn đang kích hoạt và cấp gói của chúng theo chương trình:',
  'subs.sources.api.free':
    'các nguồn mà bất kỳ key nào cũng có thể truy vấn, kể cả key miễn phí.',
  'subs.sources.api.paid': 'các nguồn yêu cầu key Pro.',
  'subs.sources.api.allFree':
    'khi là true, mọi nguồn đang kích hoạt đều có sẵn cho tất cả các key và paid là rỗng.',

  'subs.sources.scope.h3': 'Giới hạn theo key',
  'subs.sources.scope.p1':
    'Truyền API key của bạn để lấy các nguồn mà key đó thực sự có thể sử dụng:',
  'subs.sources.scope.p2':
    'Thao tác này thêm các trường theo key cụ thể mà không tiêu tốn yêu cầu từ hạn mức của bạn:',
  'subs.sources.scope.available':
    'các nguồn key này có thể truy vấn ngay bây giờ.',
  'subs.sources.scope.restricted':
    'các nguồn đang kích hoạt mà key này không thể truy vấn (nâng cấp lên Pro để mở khóa).',
  'subs.sources.scope.keyType': 'miễn phí hoặc trả phí.',
  'subs.sources.scope.keyValid':
    'là false khi key bị sai định dạng hoặc không tìm thấy, và null khi không thể xác minh key (trong trường hợp đó available và restricted bị bỏ qua).',

  'subs.sources.details.h2': 'Chi tiết nguồn dữ liệu',

  'subs.sources.opensubtitles.desc':
    'Cơ sở dữ liệu phụ đề lớn nhất trực tuyến. Hỗ trợ phim và chương trình TV với nhiều ngôn ngữ. Sử dụng OpenSubtitles REST API chính thức.',
  'subs.sources.opensubtitles.content': 'Phim & chương trình TV',
  'subs.sources.opensubtitles.languages': 'Hỗ trợ đa ngôn ngữ phong phú',
  'subs.sources.opensubtitles.formats':
    'SRT, ASS, SSA, VTT, SUB, và nhiều hơn nữa',

  'subs.sources.subdl.desc':
    'Trang phụ đề do cộng đồng đóng góp với lượng lớn phim và chương trình TV.',
  'subs.sources.subdl.content': 'Phim & chương trình TV',
  'subs.sources.subdl.languages': 'Hỗ trợ đa ngôn ngữ phong phú',
  'subs.sources.subdl.formats': 'SRT, ASS, SSA, VTT, SUB, và nhiều hơn nữa',

  'subs.sources.subf2m.desc':
    'Kho phụ đề lớn với phạm vi ngôn ngữ rộng cho phim và chương trình TV.',
  'subs.sources.subf2m.content': 'Phim & chương trình TV',
  'subs.sources.subf2m.languages': 'Hỗ trợ đa ngôn ngữ phong phú',
  'subs.sources.subf2m.formats': 'SRT, ASS, SSA, VTT, SUB, và nhiều hơn nữa',

  'subs.sources.podnapisi.desc':
    'Một trong những cơ sở dữ liệu phụ đề lâu đời nhất. Bộ sưu tập được tuyển chọn kỹ lưỡng bao gồm phim và chương trình TV.',
  'subs.sources.podnapisi.content': 'Phim & chương trình TV',
  'subs.sources.podnapisi.languages': 'Hỗ trợ đa ngôn ngữ phong phú',
  'subs.sources.podnapisi.formats': 'SRT, ASS, SSA, VTT, SUB, và nhiều hơn nữa',

  'subs.sources.animetosho.desc':
    'Lấy file đính kèm phụ đề anime trực tiếp từ các bản phát hành torrent được lập chỉ mục trên AnimeTosho.',
  'subs.sources.animetosho.content': 'Anime (chương trình TV)',
  'subs.sources.animetosho.languages':
    'Tiếng Nhật, tiếng Anh, và các ngôn ngữ khác tùy theo bản phát hành',
  'subs.sources.animetosho.formats': 'ASS, SRT, SSA, và nhiều hơn nữa',
  'subs.sources.animetosho.note':
    'AnimeTosho dự kiến sẽ ngừng hoạt động vào tháng 5 năm 2026.',

  'subs.sources.gestdown.desc':
    'Cung cấp phụ đề cho chương trình TV qua Gestdown API với hỗ trợ ngôn ngữ rộng rãi.',
  'subs.sources.gestdown.content': 'Chỉ chương trình TV',
  'subs.sources.gestdown.languages': 'Hỗ trợ đa ngôn ngữ phong phú',
  'subs.sources.gestdown.formats': 'SRT, ASS, và nhiều hơn nữa',

  'subs.sources.jimaku.desc':
    'Lấy dữ liệu từ jimaku.cc, một kho phụ đề anime do cộng đồng duy trì. Khớp tiêu đề bằng TMDB API.',
  'subs.sources.jimaku.content': 'Anime (phim & chương trình TV)',
  'subs.sources.jimaku.languages':
    'Chủ yếu tiếng Nhật; cũng có tiếng Anh, tiếng Trung, và nhiều hơn tùy theo file có sẵn',
  'subs.sources.jimaku.formats': 'SRT, ASS, SSA, VTT, SUB, và nhiều hơn nữa',

  'subs.sources.kitsunekko.desc':
    'Lấy danh sách thư mục từ kitsunekko.net, một kho phụ đề anime chuyên dụng. Khớp tiêu đề bằng TMDB API.',
  'subs.sources.kitsunekko.content': 'Anime (chương trình TV)',
  'subs.sources.kitsunekko.languages': 'Thư mục phụ đề tiếng Anh và tiếng Nhật',
  'subs.sources.kitsunekko.formats':
    'SRT, ASS, SSA, VTT, SUB, và nhiều hơn nữa',

  'subs.sources.yify.desc':
    'Lấy phụ đề từ yifysubtitles.ch khớp theo IMDB ID. Chỉ dành cho phim.',
  'subs.sources.yify.content': 'Chỉ phim (chương trình TV không được hỗ trợ)',
  'subs.sources.yify.languages':
    'Hỗ trợ đa ngôn ngữ phong phú (Albanian, Arabic, tiếng Anh, tiếng Pháp, tiếng Tây Ban Nha, và nhiều hơn nữa)',
  'subs.sources.yify.formats': 'SRT (được cung cấp bên trong file ZIP)',

  'subs.sources.ajatttools.desc':
    'Lấy phụ đề từ kho GitHub Ajatt-Tools/kitsunekko-mirror. Được tổ chức theo loại phương tiện. Khớp tiêu đề bằng TMDB API.',
  'subs.sources.ajatttools.content': 'Anime & drama (chương trình TV và phim)',
  'subs.sources.ajatttools.languages':
    'Chủ yếu tiếng Nhật; cũng có tiếng Anh, tiếng Trung, và các ngôn ngữ khác',
  'subs.sources.ajatttools.formats':
    'SRT, ASS, SSA, VTT, SUB, và nhiều hơn nữa',

  'subs.sources.ai.desc':
    'Không phải bộ scraper. SRT được dịch bằng AI theo yêu cầu từ phụ đề nguồn tốt nhất có sẵn. Chỉ dành cho key Pro. Xem hướng dẫn Dịch thuật AI để biết chi tiết đầy đủ.',
  'subs.sources.ai.content':
    'Bất cứ thứ gì Wyzie có thể tìm thấy phụ đề dạng văn bản',
  'subs.sources.ai.languages': 'Hơn 80 ngôn ngữ đích',
  'subs.sources.ai.formats': 'Chỉ SRT',

  // Subs Package Page
  'subs.pkg.title': 'Sử dụng gói NPM Wyzie',
  'subs.pkg.p1':
    'Gói NPM Wyzie Subs cung cấp giao diện đơn giản và dễ sử dụng để tìm kiếm và tải phụ đề.',
  'subs.pkg.install.h2': 'Cài đặt',
  'subs.pkg.important':
    'API key là bắt buộc cho tất cả các yêu cầu. Lấy key miễn phí tại [store.wyzie.io/redeem](https://store.wyzie.io/redeem) và truyền qua tham số key. Xem trang API Keys để biết chi tiết.',
  'subs.pkg.usage.h2': 'Cách dùng',
  'subs.pkg.params.h3': 'Tham số',
  'subs.pkg.params.note':
    'Để biết thêm thông tin (hoặc nếu bạn gặp khó khăn), hãy truy cập [trang chủ Wyzie Subs](https://sub.wyzie.io).',

  'subs.pkg.param.tmdb':
    'TMDB ID của phim hoặc chương trình TV (tmdb_id hoặc imdb_id là bắt buộc).',
  'subs.pkg.param.imdb':
    'IMDB ID của phim hoặc chương trình TV (imdb_id hoặc tmdb_id là bắt buộc).',
  'subs.pkg.param.format':
    'Định dạng file cần trả về (ví dụ: srt, ass). Chấp nhận danh sách.',
  'subs.pkg.param.season': 'Số mùa (yêu cầu có episode).',
  'subs.pkg.param.episode': 'Số tập (yêu cầu có season).',
  'subs.pkg.param.language':
    'Mã ISO 639-1 cho ngôn ngữ phụ đề. Chấp nhận danh sách.',
  'subs.pkg.param.encoding': 'Bộ lọc mã hóa ký tự (ví dụ: utf-8, latin-1).',
  'subs.pkg.param.hi':
    'Khi là true, chỉ trả về phụ đề dành cho người khiếm thính. Các nguồn không đánh dấu phụ đề dành cho người khiếm thính sẽ không trả về gì.',
  'subs.pkg.param.source':
    'Nhà cung cấp phụ đề cần truy vấn, theo tên mã (all cho mọi nguồn đang hoạt động mà key của bạn có thể dùng; mặc định là charlie).',
  'subs.pkg.param.release': 'Bộ lọc release/scene (chấp nhận danh sách).',
  'subs.pkg.param.filename':
    'Bộ lọc tên file; các bí danh file và fileName được hỗ trợ.',
  'subs.pkg.param.origin':
    'Bộ lọc nguồn gốc nội dung (ví dụ: WEB, BLURAY, DVD).',
  'subs.pkg.param.key':
    'API key của bạn (bắt buộc). Lấy miễn phí tại store.wyzie.io/redeem.',
  'subs.pkg.param.refresh':
    'Bỏ qua bộ nhớ đệm và lấy kết quả mới từ các nguồn.',

  'subs.pkg.helpers':
    'Gói cũng đi kèm các helper TMDB nhẹ: searchTmdb, getTvDetails, và getSeasonDetails để nhanh chóng tìm ID trước khi gọi /search. getSources trả về tên mã của các nguồn đang hoạt động (nguồn bị tạm dừng do kiểm tra tình trạng sẽ bị loại khỏi danh sách cho đến khi hoạt động trở lại), còn getSourcesInfo trả về toàn bộ phản hồi /sources kèm cấp gói, và khi được truyền key, cho biết key đó có thể dùng những nguồn nào. withDownloadOptions thêm các tùy chọn tải xuống (đầu ra WebVTT, sửa thời gian, ngôn ngữ thứ hai, và nhiều hơn nữa) vào url của một kết quả.',
  'subs.pkg.types.h3': 'Kiểu dữ liệu',
  'subs.pkg.type.search': 'Tất cả các tham số hợp lệ được API nhận dạng.',
  'subs.pkg.type.query':
    'Tất cả các tham số (tùy chọn và bắt buộc) có sẵn cho wyzie-subs API.',
  'subs.pkg.type.subtitle':
    'Tất cả các giá trị được trả về từ API với các kiểu dữ liệu tương ứng.',
  'subs.pkg.type.sources': 'Kiểu dữ liệu phản hồi từ endpoint /sources.',
  'subs.pkg.type.download':
    'Các tùy chọn cho withDownloadOptions: to, offset, fps, plain, và (chỉ Pro) sdh, clean, dual.',
  'subs.pkg.type.sync':
    'Đầu vào và kết quả của syncSubtitle (Wyzie Synced, key Pro): phụ đề nào (một kết quả, url của nó, hoặc tmdb_id/imdb_id kèm language), speech mà detectSpeech tìm được hoặc file media, và liên kết tải xuống đã đồng bộ kèm offset, fps và confidence. Xem [Wyzie Synced](/subs/usage/synced).',
  'subs.pkg.types.end':
    'Các kiểu dữ liệu của chúng tôi rất đơn giản và được ghi chép đầy đủ. Xem [src/types.ts](https://github.com/wyziedevs/wyzie-lib/blob/main/src/types.ts) trong kho wyzie-lib.',
  'subs.pkg.config.h3': 'Cấu hình',
  'subs.pkg.config.p1':
    'Một người dùng đã hỏi trên Github về hostname API có thể cấu hình được và tôi nghĩ đó là ý tưởng hay, vì vậy dưới đây là cách dùng. Cảm ơn mọi người!',

  // Subs Direct Page
  'subs.direct.title': 'Gọi trực tiếp Wyzie Subs',
  'subs.direct.caution':
    'Tôi khuyến nghị mạnh mẽ sử dụng gói NPM vì nó dễ dàng và đáng tin cậy hơn.',
  'subs.direct.p1':
    'Nếu bạn đã quyết định không dùng gói NPM, hãy bắt đầu. Tôi sẽ chỉ đề cập đến các tham số API và dữ liệu được API trả về. Cách bạn gọi API hoàn toàn tùy thuộc vào bạn.',
  'subs.direct.important':
    'API key là bắt buộc cho tất cả các yêu cầu. Lấy key miễn phí tại [store.wyzie.io/redeem](https://store.wyzie.io/redeem) và đưa vào dưới dạng &key=YOUR_KEY trong mọi yêu cầu. Xem trang API Keys để biết chi tiết.',

  'subs.direct.params.h3': 'Tham số',
  'subs.direct.param.id':
    'TMDB hoặc IMDB ID của chương trình hoặc phim (bắt buộc).',
  'subs.direct.param.seasonEpisode':
    'Mùa và tập cho tìm kiếm TV. Cả hai phải có mặt cùng nhau.',
  'subs.direct.param.language':
    'Bộ lọc ngôn ngữ (mã ISO 639-1). Nhiều giá trị được phân cách bằng dấu phẩy.',
  'subs.direct.param.format':
    'Định dạng phụ đề cần trả về. Cho phép nhiều giá trị.',
  'subs.direct.param.hi':
    'Khi là true, chỉ trả về phụ đề dành cho người khiếm thính (đây là bộ lọc, không phải tùy chọn ưu tiên). Các nguồn không đánh dấu phụ đề dành cho người khiếm thính sẽ không trả về gì.',
  'subs.direct.param.encoding': 'Bộ lọc mã hóa ký tự.',
  'subs.direct.param.source':
    'Nhà cung cấp phụ đề cần truy vấn (all truy vấn mọi nguồn mà key của bạn có thể dùng; mặc định là charlie).',
  'subs.direct.param.release':
    'Bộ lọc tên release hoặc scene (phân cách bằng dấu phẩy).',
  'subs.direct.param.file':
    'Bộ lọc tên file (bí danh: file, filename, fileName).',
  'subs.direct.param.origin':
    'Bộ lọc nguồn gốc nội dung, phân cách bằng dấu phẩy (ví dụ: WEB, BLURAY, DVD).',
  'subs.direct.param.key':
    'API key của bạn (bắt buộc). Lấy miễn phí tại store.wyzie.io/redeem.',
  'subs.direct.param.refresh':
    'Bỏ qua bộ nhớ đệm và lấy kết quả mới. Dùng khi các nguồn có thể đã cập nhật.',
  'subs.direct.param.page':
    'Trang cần trả về, bắt đầu từ 1. Chỉ được dùng cùng với limit.',
  'subs.direct.param.limit':
    'Số kết quả mỗi trang (1 đến 200). Nếu không truyền, mọi kết quả sẽ được trả về trong một phản hồi duy nhất.',
  'subs.direct.important.imdb':
    "Khi sử dụng IMDB ID, hãy đảm bảo rằng hai ký tự đầu ('tt') được bao gồm ở đầu ID.",

  'subs.direct.data.h3': 'Dữ liệu được trả về',
  'subs.direct.data.id': 'ID của file phụ đề.',
  'subs.direct.data.url':
    'Liên kết tải xuống trên https://sub.wyzie.io/c/... mang tham số tok đã được mã hóa. Mỗi lượt tải xuống tốn 1 yêu cầu; xem phần Tải xuống phụ đề bên dưới.',
  'subs.direct.data.flagUrl': 'URL đến cờ quốc gia của ngôn ngữ.',
  'subs.direct.data.format': 'Định dạng của file phụ đề.',
  'subs.direct.data.encoding': 'Mã hóa ký tự của file phụ đề.',
  'subs.direct.data.display': 'Ngôn ngữ của phụ đề, viết hoa chữ đầu.',
  'subs.direct.data.language': 'Mã ISO 639-1 của ngôn ngữ.',
  'subs.direct.data.media': 'Tên phương tiện mà phụ đề dành cho.',
  'subs.direct.data.isHearingImpaired':
    'Boolean cho biết phụ đề có dành cho người khiếm thính hay không.',
  'subs.direct.data.source': 'Nguồn mà phụ đề được lấy từ đó.',
  'subs.direct.data.release': 'Tên release chính.',
  'subs.direct.data.releases': 'Các tên release khác tương thích với phụ đề.',
  'subs.direct.data.fileName': 'Tên file gốc khi có sẵn.',
  'subs.direct.data.downloadCount':
    'Số lượt tải xuống trên nền tảng nguồn (nếu có).',
  'subs.direct.data.origin': 'Nguồn gốc nội dung (ví dụ: WEB, BluRay, DVD).',
  'subs.direct.data.matchedRelease':
    'Giá trị release khớp với bộ lọc của bạn (nếu được cung cấp).',
  'subs.direct.data.matchedFilter':
    'Bộ lọc do người dùng cung cấp đã khớp (nếu được cung cấp).',
  'subs.direct.data.ai':
    'true nếu mục là phụ đề được dịch bởi AI, false cho phụ đề được scrape bình thường. Dùng nó như bộ lọc phía client khi bạn chỉ muốn một trong hai.',
  'subs.direct.download.p':
    'Mọi url trong phản hồi /search đều trỏ đến https://sub.wyzie.io/c/... và mang tham số truy vấn tok. tok được mã hóa nên không làm lộ API key của bạn, và có hiệu lực trong 60 ngày. Mỗi liên kết có tok riêng chỉ mở được đúng file đó, nên hãy dùng URL nguyên trạng (thêm tùy chọn tải xuống thì không sao). Một lần tìm kiếm tốn 1 yêu cầu và mỗi lượt tải xuống tốn thêm 1 yêu cầu, được tính vào key đã thực hiện tìm kiếm. Khi key đó không đủ khả năng chi trả cho một lượt tải xuống, liên kết sẽ bị từ chối:',
  'subs.direct.dl.p':
    'Thêm các tham số này vào URL tải xuống để thay đổi nội dung trả về. Chúng hoạt động với mọi lượt tải xuống, dù đã được lưu đệm hay chưa, và không tốn thêm yêu cầu nào (trừ dual, xem bên dưới). Header phản hồi X-Subtitle-Transforms liệt kê những gì đã được áp dụng, kèm số lượng.',
  'subs.direct.dl.param.to':
    'Định dạng đầu ra: `srt` hoặc `vtt`. `vtt` phát trực tiếp trong phần tử `<track>` của trình duyệt. Mặc định: định dạng gốc của file.',
  'subs.direct.dl.param.offset':
    'Dịch chuyển mọi dòng theo số giây này (giá trị âm là sớm hơn).',
  'subs.direct.dl.param.fps':
    'Sửa độ trôi của phụ đề được làm cho bản phát hành khác: `SUBTITLE_FPS:VIDEO_FPS`, ví dụ `25:23.976` cho phụ đề PAL trên video có tốc độ khung hình điện ảnh.',
  'subs.direct.dl.param.plain':
    'Các dòng đơn giản, gọn gàng: loại bỏ mã định dạng như `{\\an8}` và `<font>`, bỏ dòng trống và dòng lặp lại, sắp xếp các dòng theo thứ tự thời gian, cắt bớt các chỗ chồng lấn nhỏ.',
  'subs.direct.dl.param.sdh':
    'Loại bỏ văn bản dành cho người khiếm thính: `[DOOR SLAMS]`, `(sighs)`, nhãn người nói như `JOHN:` và lời bài hát ♪.',
  'subs.direct.dl.param.clean':
    'Che các từ tục tĩu nặng, giữ lại chữ cái đầu (`f***`). Chỉ áp dụng cho file tiếng Anh.',
  'subs.direct.dl.param.dual':
    'Thêm ngôn ngữ thứ hai (mã ISO 639-1) bên dưới mỗi dòng, căn khớp với thời gian của file này. Tốn thêm 1 yêu cầu, chỉ khi tìm được bản khớp; nếu không, file được trả về một mình kèm `X-Dual: unavailable`.',
  'subs.direct.dl.after':
    'Các tùy chọn có thể kết hợp, ví dụ `&to=vtt&sdh=strip&offset=-1.5`. Liên kết đã mang sẵn `format`, `encoding`, `id` và (với tập phim) `season` và `episode`: hãy giữ nguyên các tham số đó. `autoUnzip=false` trả về file nén nguyên trạng.',
  'subs.direct.oneCall.p':
    'Với API key, GET /download trả về chính file phụ đề chỉ trong một lần gọi: nó tìm kiếm bằng key của bạn với cùng các tham số như /search (language mặc định là en), chọn bản khớp nhất và trả về. Việc này tốn 2 yêu cầu, bằng một lần tìm kiếm cộng một lượt tải xuống. Các tùy chọn tải xuống như to và offset được áp dụng cho file.',
  'subs.direct.oneCall.pick':
    'Bản khớp nhất là kết quả tìm kiếm đầu tiên, ưu tiên các file SRT, WebVTT và ASS trừ khi bạn đặt format, và các file không có văn bản dành cho người khiếm thính trừ khi bạn đặt hi=true. Thu hẹp lựa chọn bằng release, filename, source hoặc origin. Các header phản hồi X-Subtitle-Release, X-Subtitle-Source, X-Subtitle-Language và X-Subtitle-Url cho biết file nào đã được chọn. Các lỗi giống như với /search và liên kết tải xuống.',
  'subs.direct.oneCall.keyless':
    'Nếu không có key, [trang tải xuống](https://sub.wyzie.io/download) dùng để tìm thủ công một hai phụ đề. Liên kết của trang này chỉ mở được đúng file mà nó được tạo ra, từ mạng đã thực hiện tìm kiếm, và trang có giới hạn theo giờ. Với mọi việc tự động hóa, hãy dùng key.',
  'subs.direct.headers.p':
    'Mọi phản hồi /search đều bao gồm header X-Total-Count với tổng số kết quả. Khi bạn truyền limit, phản hồi cũng bao gồm:',
  'subs.direct.header.xpage': 'trang được trả về.',
  'subs.direct.header.xperpage': 'giá trị limit đang áp dụng.',
  'subs.direct.header.xtotalpages': 'tổng số trang.',
  'subs.direct.headers.rate':
    'Các phản hồi cũng mang X-RateLimit-Limit, X-RateLimit-Remaining và X-RateLimit-Reset. Hãy coi chúng là giá trị gần đúng: mức sử dụng được đối soát với hệ thống thanh toán theo các lô ngắn, nên chúng có thể chậm hơn một chút so với mức sử dụng thực tế của bạn.',

  // Subs Translate Page
  'subs.translate.title': 'Dịch thuật phụ đề bằng AI',
  'subs.translate.important':
    'Dịch thuật AI là **tính năng Pro**; key miễn phí nhận 403 Upgrade required. Mỗi lần gọi tốn **25 yêu cầu** từ số dư của key, kể cả khi lấy từ bộ nhớ đệm. Nếu một lần gọi thất bại trước khi có bất kỳ đầu ra nào (không tìm thấy phụ đề, lỗi tìm kiếm hoặc tải xuống, hoặc máy chủ đang bận), 25 yêu cầu sẽ được hoàn trả tự động.',
  'subs.translate.p1':
    'Wyzie có thể dịch bất kỳ phụ đề nào sang hơn 80 ngôn ngữ ngay lập tức. SRT đã dịch được phát trực tuyến về theo thứ tự khi từng lô hoàn tất, nên các cue đầu tiên đến rất nhanh thay vì phải đợi cả file xong. Bản dịch hoàn chỉnh được lưu đệm 30 ngày, vì vậy các yêu cầu sau đó cho cùng tiêu đề, tập và ngôn ngữ đích sẽ được phục vụ từ bộ nhớ đệm.',

  'subs.translate.ways.h2': 'Hai cách sử dụng',
  'subs.translate.way1.h3': '1. Chọn ngôn ngữ từ kết quả tìm kiếm',
  'subs.translate.way1.p1':
    'Với key Pro, mọi phản hồi /search cũng bao gồm các hàng bản dịch AI với "ai": true và url trỏ đến /translate: mỗi ngôn ngữ được hỗ trợ một hàng, hoặc chỉ các ngôn ngữ trong bộ lọc language= của bạn. Key miễn phí không bao giờ nhận được các hàng này. Hãy xử lý các hàng AI như bất kỳ hàng phụ đề nào khác trong giao diện của bạn: khi người dùng nhấp vào một hàng, hãy lấy URL đó.',
  'subs.translate.way1.filter':
    'Nếu bạn muốn ẩn các hàng AI khỏi giao diện, hãy lọc chúng ra:',
  'subs.translate.way2.h3': '2. Gọi /translate trực tiếp',

  'subs.translate.param.id': 'TMDB hoặc IMDB ID (bắt buộc).',
  'subs.translate.param.target':
    'Ngôn ngữ đích (bắt buộc): một tên trong danh sách được hỗ trợ (ví dụ: Spanish, Japanese, Portuguese (Brazil)) hoặc mã của nó (ví dụ: es, ja, pt-BR).',
  'subs.translate.param.seasonEpisode':
    'Dành cho TV. Cả hai phải có mặt cùng nhau.',
  'subs.translate.param.key':
    'API key của bạn. Dùng tk thay thế nếu bạn lấy URL từ /search.',
  'subs.translate.param.tk':
    'Token được mã hóa lấy từ URL của các hàng AI trong /search. Hoạt động giống key, không làm lộ API key của bạn và có hiệu lực trong 60 ngày.',

  'subs.translate.headers.p':
    'Phần thân phản hồi là một file SRT được phát trực tuyến dưới dạng text/plain; charset=utf-8. Các header phản hồi hữu ích:',
  'subs.translate.header.xcache':
    'HIT-REDIS nếu được lấy từ bộ nhớ đệm, MISS nếu được tạo mới.',
  'subs.translate.header.xsourcelang':
    'ngôn ngữ của phụ đề mà trình dịch đã dùng làm đầu vào.',
  'subs.translate.header.xtargetlang': 'phản chiếu tham số target của bạn.',
  'subs.translate.header.xsourceprovider':
    'bộ scraper nào đã cung cấp phụ đề nguồn.',

  'subs.translate.how.h2': 'Cách hoạt động',
  'subs.translate.how.step1':
    'Wyzie tìm kiếm các nguồn thông thường để lấy phụ đề dạng văn bản, ưu tiên SRT tiếng Anh khi có sẵn. Các file VTT, ASS, SSA và SUB được chuyển đổi sang SRT trước.',
  'subs.translate.how.step2':
    'SRT được chia thành các lô tối đa khoảng 3.800 ký tự và được dịch bằng Google Translate, mỗi lần 4 lô.',
  'subs.translate.how.step3':
    'Đầu ra được phát trực tuyến về theo thứ tự SRT khi từng lô hoàn tất, nên các cue đầu tiên đến rất nhanh. Các trình phát chấp nhận nội dung SRT phát trực tuyến có thể bắt đầu hiển thị những dòng đầu tiên trước khi phần còn lại hoàn thành.',
  'subs.translate.how.step4':
    'Bản dịch hoàn chỉnh được lưu đệm trong Redis 30 ngày, được lập chỉ mục bởi id, season, episode, và target.',

  'subs.translate.languages.h2': 'Các ngôn ngữ đích được hỗ trợ',
  'subs.translate.languages.p':
    'Hơn 80 ngôn ngữ bao gồm tất cả các ngôn ngữ chính của châu Âu, châu Á, châu Phi và Trung Đông. Truyền một tên trong danh sách (Spanish, Portuguese (Brazil)) hoặc mã của nó (es, pt-BR). Với key Pro, danh sách đầy đủ cũng được trả về dưới dạng các hàng ai: true trong bất kỳ phản hồi /search nào không có bộ lọc language=, đây là nguồn thông tin chính xác nhất.',

  'subs.translate.limitations.h2': 'Giới hạn',
  'subs.translate.limit1':
    'Dịch thuật AI cần một phụ đề dạng văn bản làm điểm xuất phát. Các nguồn VTT, ASS, SSA và SUB được chuyển đổi sang SRT trước; nếu không có phụ đề dạng văn bản nào, lệnh gọi sẽ trả về 404 No subtitle found và 25 yêu cầu được hoàn trả.',
  'subs.translate.limit2':
    'Chất lượng dịch phụ thuộc vào phụ đề nguồn. Một nguồn có thời gian kém hoặc lỗi đánh máy sẽ tạo ra bản dịch có thời gian kém hoặc lỗi đánh máy tương tự.',
  'subs.translate.limit3':
    'Một số người dùng có thể muốn loại bỏ hoàn toàn các hàng AI. Lọc theo ai === false trong client của bạn.',
  'subs.translate.limit4':
    'Các bản dịch cũng được tính phí khi lấy từ bộ nhớ đệm. Dù được tạo mới hay lấy từ bộ nhớ đệm 30 ngày, mỗi lệnh gọi /translate tốn 25 yêu cầu. Chỉ những lệnh gọi thất bại trước khi có bất kỳ đầu ra nào mới được hoàn trả.',

  // Subs Synced Page
  'subs.synced.title': 'Wyzie Synced',
  'subs.synced.important':
    'Wyzie Synced là **tính năng Pro**: key miễn phí nhận 403 Paid feature. Mỗi lần đồng bộ thành công tốn **5 yêu cầu**; lần đồng bộ không tìm thấy bản khớp sẽ không bị tính phí. Sau đó, việc tải xuống liên kết đã đồng bộ được tính như mọi lượt tải xuống khác.',
  'subs.synced.p1':
    'Phụ đề tìm thấy trên mạng thường được căn thời gian cho một bản phát hành khác với video bạn đang có: chúng bắt đầu sớm hoặc muộn vài giây, hoặc lệch dần khi phim chạy vì bản phát hành đó dùng tốc độ khung hình khác. Wyzie Synced nghe âm thanh trong bản của bạn, tìm những chỗ có người nói, và tính ra độ lệch cùng mức sửa tốc độ khung hình để khớp phụ đề với âm thanh đó. Bạn nhận được một liên kết tải xuống bình thường đã áp dụng bản sửa (các [tùy chọn tải xuống](/subs/usage/direct#download-options) offset và fps).',
  'subs.synced.web.p':
    'Cách dễ nhất: mở [sub.wyzie.io/synced](https://sub.wyzie.io/synced), nhập key Pro của bạn, chọn file video và tiêu đề, rồi tải xuống phụ đề đã đồng bộ. Âm thanh được phân tích ngay trong trình duyệt của bạn, nên video không bao giờ bị tải lên: chỉ có các mốc thời gian lời nói được gửi đi. MKV, MP4, AVI và hầu hết các định dạng khác đều dùng được, kể cả âm thanh AC3, E-AC3 và DTS.',
  'subs.synced.api.p':
    'Gửi phụ đề bạn muốn (một liên kết tải xuống, hoặc tiêu đề để Wyzie chọn bản khớp nhất) và âm thanh: hoặc là các mốc thời gian lời nói do bạn tự phát hiện, hoặc chính file âm thanh/video. POST /synced là cùng một API.',
  'subs.synced.param.url':
    'Liên kết tải xuống từ /search (https://sub.wyzie.io/c/…). Các tùy chọn tải xuống khác có trên liên kết đó (to, sdh, …) được giữ lại trên liên kết đã đồng bộ.',
  'subs.synced.param.id':
    'Thay cho url: TMDB hoặc IMDB ID. Wyzie thử 5 phụ đề dạng văn bản đứng đầu bằng ngôn ngữ đó và trả về phụ đề khớp nhất với âm thanh của bạn.',
  'subs.synced.param.language':
    'Dùng với id: mã ISO 639-1 của ngôn ngữ phụ đề (bắt buộc).',
  'subs.synced.param.seasonEpisode':
    'Dùng với id, dành cho TV. Cả hai phải có mặt cùng nhau.',
  'subs.synced.param.key':
    'API key Pro của bạn. Nếu không có, key đứng sau tok của url sẽ được dùng; liên kết lấy từ trang tải xuống không dùng key thì bắt buộc phải truyền key.',
  'subs.synced.param.speech':
    'Những chỗ có người nói: [[start, end], …] tính bằng giây, từ bất kỳ bộ phát hiện hoạt động giọng nói nào (detectSpeech của wyzie-lib, Silero VAD, webrtcvad). Một bộ phim 2 giờ có khoảng 2.000 đoạn, tương đương khoảng 40 KB JSON.',
  'subs.synced.param.media':
    'Hoặc chính file âm thanh/video: dưới dạng phần thân yêu cầu thô (các trường khác đặt trong chuỗi truy vấn), hoặc dưới dạng trường multipart media. Tối đa 95 MB, nên với một bộ phim đầy đủ, hãy chỉ tải lên track âm thanh. Với lượt tải lên multipart trên 8 MB, hãy đặt key trong chuỗi truy vấn: key được kiểm tra trước khi file được đọc.',
  'subs.synced.fields.note':
    'Các trường được đặt trong phần thân JSON, form multipart, hoặc chuỗi truy vấn (kèm phần thân media thô).',
  'subs.synced.response.p': 'Phản hồi 200 có dạng JSON:',
  'subs.synced.field.url':
    'liên kết tải xuống phụ đề đã áp dụng bản sửa thời gian (offset, fps) và một tok mới cho key của bạn. Dùng nó như bất kỳ url nào từ /search: mỗi lượt tải xuống tốn 1 yêu cầu.',
  'subs.synced.field.offset':
    'số giây được cộng vào mọi dòng sau khi sửa tốc độ khung hình (giá trị âm là sớm hơn).',
  'subs.synced.field.fps':
    'bản sửa tốc độ khung hình dưới dạng SUBTITLE_FPS:VIDEO_FPS (ví dụ "25:23.976"), hoặc null khi không cần sửa.',
  'subs.synced.field.confidence':
    '0 đến 1: mức độ rõ rệt mà kết quả thời gian này vượt trội so với mọi phương án khác. Mọi kết quả được trả về đều đã vượt qua bài kiểm tra khớp; giá trị càng cao càng chắc chắn.',
  'subs.synced.field.inSync': 'true khi phụ đề vốn đã khớp với bản của bạn.',
  'subs.synced.field.subtitle':
    'phụ đề nào đã được dùng (release, fileName, format, source, …). Khi dùng url, chỉ có format của nó.',
  'subs.synced.errors.p':
    'Lỗi được trả về dưới dạng JSON với message và details. Các lần đồng bộ bị từ chối hoặc thất bại không bị tính phí.',
  'subs.synced.error.400':
    'Thiếu trường hoặc trường không hợp lệ: không có phụ đề, không có âm thanh, hoặc speech không phải là các cặp [start, end].',
  'subs.synced.error.401':
    'Không có key, liên kết tải xuống trong url không hợp lệ hoặc đã hết hạn, hoặc lượt tải lên multipart trên 8 MB không có key trong chuỗi truy vấn.',
  'subs.synced.error.403':
    'Key là key miễn phí (Wyzie Synced cần Pro), không hợp lệ, hoặc đang bị tạm dừng.',
  'subs.synced.error.404':
    'Không có phụ đề dạng văn bản bằng ngôn ngữ đó cho tiêu đề này.',
  'subs.synced.error.413':
    'File media vượt quá 95 MB. Hãy chỉ tải lên track âm thanh, hoặc gửi speech.',
  'subs.synced.error.422':
    'Phụ đề không khớp với âm thanh ở bất kỳ độ lệch hay tốc độ khung hình nào (có thể là một phiên bản dựng hoặc một tập khác), âm thanh có quá ít lời nói, hoặc không thể giải mã file.',
  'subs.synced.error.429':
    'Key không đủ khả năng chi trả: một lần đồng bộ cần còn ít nhất 5 yêu cầu, và điều này được kiểm tra trước khi bắt đầu bất kỳ xử lý nào. Hoặc 429 Too many syncs: mỗi key có thể bắt đầu 60 lần đồng bộ mỗi giờ.',
  'subs.synced.error.503':
    'Đang bận giải mã hoặc đọc các file tải lên khác, hoặc tìm kiếm tạm thời không khả dụng. Hãy thử lại sau giây lát, hoặc gửi speech.',
  'subs.synced.lib.p':
    'wyzie-lib có detectSpeech (cùng bộ phát hiện mà trang web chạy trong trình duyệt của bạn) và syncSubtitle:',
  'subs.synced.how.step1':
    'Lời nói: âm thanh được giải mã thành mono 8 kHz (chỉ lấy kênh trung tâm với các bản mix 5.1 và 7.1, nơi chứa lời thoại), và một bộ phát hiện hoạt động giọng nói đánh dấu những chỗ có người nói: âm thanh lớn, nằm trong dải tần giọng nói, lên xuống theo từng âm tiết.',
  'subs.synced.how.step2':
    'Căn chỉnh: thời gian hiển thị trên màn hình của phụ đề được tương quan chéo với lời nói đó tại mọi độ lệch trong phạm vi ±10 phút, cho các trường hợp lệch tốc độ khung hình thường gặp (25 so với 23.976, 25 so với 24, 24 so với 23.976 fps).',
  'subs.synced.how.step3':
    'Tinh chỉnh: kết quả thời gian tốt nhất được tinh chỉnh đến 10 ms bằng cách căn điểm bắt đầu của các dòng với điểm bắt đầu của lời nói.',
  'subs.synced.how.step4':
    "Một kết quả thời gian chỉ được trả về khi nó vượt trội hẳn so với mọi độ lệch khác, nên phụ đề của một phiên bản dựng hoặc một tập khác sẽ nhận 422 Couldn't sync thay vì bị dịch chuyển sai.",
  'subs.synced.limit1':
    'Wyzie Synced sửa độ lệch cố định và chênh lệch tốc độ khung hình. Phụ đề cho một phiên bản dựng khác (có thêm hoặc thiếu cảnh) không thể sửa bằng một lần dịch chuyển duy nhất, và sẽ bị từ chối.',
  'subs.synced.limit2':
    'Cần có lời nói: phim ít lời thoại, hoặc âm thanh chủ yếu là nhạc, có thể không đồng bộ được.',
  'subs.synced.limit3': 'Có thể tìm được độ lệch lên đến ±10 phút.',

  // Subs Status API Page
  'subs.status.title': 'Status API',
  'subs.status.p1':
    'GET https://sub.wyzie.io/status/api trả về cùng trạng thái mà [trang trạng thái](https://sub.wyzie.io/status) hiển thị, dưới dạng JSON để bạn tự giám sát: API có đang hoạt động không, tình trạng của từng nguồn, thời gian hoạt động trong 24 giờ, 7, 30 và 90 ngày, lịch sử theo từng ngày và các sự cố gần đây. Không cần key và không tốn phí.',
  'subs.status.note':
    'Endpoint này công khai (CORS mở) và được lưu bộ nhớ đệm trong 60 giây, nên truy vấn nhiều hơn một lần mỗi phút sẽ nhận cùng một câu trả lời. Các nguồn được gọi theo tên mã, giống như trong /sources.',
  'subs.status.param.days':
    'Số ngày lịch sử theo ngày trong mỗi mảng history, mới nhất trước: 0 đến 90 (mặc định 90). 0 bỏ history ra để phản hồi nhỏ hơn.',
  'subs.status.param.format':
    'shields trả về một [huy hiệu endpoint của shields.io](https://shields.io/badges/endpoint-badge) thay cho báo cáo.',
  'subs.status.param.source':
    'Dùng với format=shields: huy hiệu cho một nguồn (thời gian hoạt động 30 ngày của nguồn đó, hoặc paused) thay cho trạng thái chung.',
  'subs.status.field.status':
    'operational (mọi nguồn đều vượt qua kiểm tra), degraded (một nguồn bị tạm dừng hoặc không vượt qua một lần kiểm tra) hoặc partial_outage (hơn một nửa số nguồn bị tạm dừng).',
  'subs.status.field.summary':
    'nội dung tương tự trong một câu, ví dụ "API operational; 2 of 7 sources paused".',
  'subs.status.field.trackingSince':
    'thời điểm bắt đầu theo dõi thời gian hoạt động. Khoảng thời gian trước đó không được tính, nên các khung thời gian kéo dài xa hơn sẽ bao phủ ít hơn (hoặc là null).',
  'subs.status.field.api':
    'chính API: uptime và history của nó. status luôn là operational trong phản hồi mà bạn nhận được.',
  'subs.status.field.sources':
    'mỗi nguồn một mục: tier (free hoặc paid), trạng thái của lần kiểm tra gần nhất cho phim và TV, latencyMs, lastChecked và nextCheck, cùng với uptime và history.',
  'subs.status.field.state':
    'online, suspect (không vượt qua một lần kiểm tra; được kiểm tra lại trong vòng 5 phút) hoặc paused (không vượt qua hai lần kiểm tra liên tiếp). Nguồn bị tạm dừng có listed: false: nó bị loại khỏi /sources và source=all cho đến khi vượt qua một lần kiểm tra, và pausedSince cho biết từ khi nào.',
  'subs.status.field.uptime':
    'tỷ lệ phần trăm thời gian trong mỗi khung mà API hoặc nguồn hoạt động, làm tròn xuống 3 chữ số thập phân (nên bất kỳ thời gian ngừng nào cũng hiển thị dưới 100), hoặc null khi chưa có dữ liệu.',
  'subs.status.field.history':
    'mỗi ngày UTC một mục: date, uptime và downMinutes (null trước khi bắt đầu theo dõi).',
  'subs.status.field.incidents':
    'các lần tạm dừng nguồn trong 30 ngày qua, mới nhất trước: start, end (null khi vẫn đang diễn ra) và minutes.',
  'subs.status.how.api':
    'Thời gian hoạt động của API: khi API đang chạy, máy chủ ghi lại một heartbeat mỗi phút. Một phút không có heartbeat được tính là ngừng hoạt động. Việc đo được thực hiện trên máy chủ của chúng tôi, nên sự cố chỉ xảy ra giữa bạn và Cloudflare sẽ không hiển thị ở đây.',
  'subs.status.how.sources':
    'Thời gian hoạt động của nguồn: mỗi nguồn được kiểm tra hằng giờ bằng một lượt tìm kiếm và tải xuống thật. Thời gian một nguồn bị tạm dừng được tính là ngừng hoạt động, từ lần kiểm tra thất bại đầu tiên cho đến khi có một lần kiểm tra thành công. Chỉ một lần kiểm tra thất bại thì không tính, và nguồn do chúng tôi tạm dừng thủ công cũng không tính.',
  'subs.status.how.tracking':
    'Việc theo dõi bắt đầu từ ngày 24 tháng 9 năm 2026.',
  'subs.status.badge.p':
    'Thêm ?format=shields để nhận huy hiệu shields.io cho README hoặc trang trạng thái của bạn:',
  'subs.status.use.p':
    'Để chọn nguồn trong ứng dụng của bạn, /sources đã chỉ liệt kê các nguồn đang hoạt động. Status API dùng để cho người dùng của bạn thấy những gì đang hoạt động, tự cảnh báo cho bạn hoặc quyết định khi nào nên thử lại:',
  'subs.status.news.p':
    'Các thông báo về API và cửa hàng (tính năng mới, thay đổi ảnh hưởng đến ứng dụng của bạn) được đăng tại [sub.wyzie.io/news](https://sub.wyzie.io/news), qua email nếu bạn đăng ký ở đó, hoặc qua [RSS](https://sub.wyzie.io/news/feed.xml).',

  // Subs API Keys Page
  'subs.keys.title': 'API Keys',
  'subs.keys.p1':
    'Wyzie Subs yêu cầu API key cho tất cả các yêu cầu. Gói miễn phí đáp ứng hầu hết các trường hợp sử dụng; các gói trả phí xử lý nhu cầu sử dụng nặng hơn.',

  'subs.keys.tiers.h2': 'Các gói',
  'subs.keys.tier.free': 'Miễn phí (xác minh email)',
  'subs.keys.tier.free.limit': '1.000 yêu cầu / ngày UTC',
  'subs.keys.tier.pro': '5$ một lần',
  'subs.keys.tier.pro.limit': '400.000 yêu cầu',
  'subs.keys.tier.topup': 'từ 0,0625$ / 5K',
  'subs.keys.tier.topup.limit': 'Cộng thêm vào số dư trả phí của bạn',
  'subs.keys.tiers.end':
    'Pro và nạp thêm không hết hạn. Thích định kỳ hơn? Gói đăng ký 32$/tháng cung cấp 6.000.000 yêu cầu/tháng (chỉ thẻ). Xem store.wyzie.io để biết giá đầy đủ và bảng điều khiển.',

  'subs.keys.free.h2': 'Lấy key miễn phí',
  'subs.keys.free.p':
    'Truy cập [store.wyzie.io/redeem](https://store.wyzie.io/redeem):',
  'subs.keys.free.step1': 'Giải một captcha Cloudflare Turnstile nhanh chóng.',
  'subs.keys.free.step2':
    'Nhập địa chỉ từ một nhà cung cấp email cá nhân lớn (Gmail, Outlook/Hotmail, Yahoo, iCloud, AOL, Proton và các nhà cung cấp khác). Tên miền email dùng một lần sẽ bị từ chối.',
  'subs.keys.free.step3': 'Nhập mã 6 chữ số chúng tôi gửi qua email.',
  'subs.keys.free.step4':
    'Bạn nhận được API key trông giống như wyzie-abc123...',
  'subs.keys.free.gmail':
    'Mỗi địa chỉ email và mỗi mạng chỉ có thể nhận một key miễn phí; yêu cầu lần thứ hai sẽ trả về 409. Mất key? Dùng "Forgot key" (quên key) trên [bảng điều khiển](https://store.wyzie.io/dashboard) để được gửi lại.',

  'subs.keys.pro.h2': 'Nâng cấp lên Pro',
  'subs.keys.pro.p1':
    'Truy cập [store.wyzie.io](https://store.wyzie.io) và thanh toán bằng email bạn đã dùng cho key miễn phí. Key wyzie-... hiện tại của bạn được nâng cấp trực tiếp với 400K yêu cầu trả phí được thêm vào. Thích định kỳ hơn? Thay vào đó, gói đăng ký 32$/tháng bổ sung hạn mức 6.000.000 yêu cầu mỗi tháng (chỉ thẻ).',
  'subs.keys.pro.p2':
    'Nếu bạn thanh toán bằng email hoàn toàn mới (chưa có key trước đó), một key wyzie-... mới sẽ được tạo và gửi qua email cho bạn.',

  'subs.keys.protect.h2': 'Không để key xuất hiện ở phía client',
  'subs.keys.protect.important':
    '**Không bao giờ nhúng API key vào code phía client.** JavaScript trình duyệt, ứng dụng di động, tiện ích mở rộng trình duyệt, ứng dụng desktop kiểu Electron, và kho Git công khai đều được coi là phía client. Bất cứ thứ gì bạn phân phối đến người dùng cuối đều có thể bị họ kiểm tra, và chúng tôi đã thấy các trường hợp thực tế khi người dùng dán key vào frontend của trang phát video, chỉ để bên thứ ba lấy JS bundle và dùng hết số dư yêu cầu trong vài giờ. Hạn mức bị tiêu theo cách này không được hoàn trả.',
  'subs.keys.protect.p2': 'Hai cách an toàn để sử dụng key từ ứng dụng client:',
  'subs.keys.protect.option1':
    'Dùng [Wyzie Worker](https://github.com/wyziedevs/wyzie-worker): một proxy Cloudflare Worker miễn phí giữ API key của bạn dưới dạng secret `NITRO_API_TOKEN`. Mọi lệnh gọi đến nó phải gửi `Authorization: Bearer <NITRO_WORKER_KEY>`, một secret thứ hai do bạn đặt, vì vậy hãy định tuyến client qua backend của riêng bạn và cũng giữ key của worker ở phía máy chủ.',
  'subs.keys.protect.option2':
    'Chạy proxy của riêng bạn: bất kỳ endpoint backend nào thêm key trước khi chuyển tiếp đến sub.wyzie.io đều hoạt động. Xem trang Giới thiệu để có ví dụ 10 dòng.',
  'subs.keys.protect.devtools':
    'Nếu key xuất hiện trong tab network trong DevTools, nó đã bị lộ. Hãy coi nó là công khai và thay key mới từ [bảng điều khiển](https://store.wyzie.io/dashboard) của bạn.',

  'subs.keys.using.h2': 'Sử dụng key của bạn',
  'subs.keys.using.p': 'Thêm &key=YOUR_KEY vào mọi yêu cầu API:',
  'subs.keys.using.npm.h3': 'Gói NPM',

  'subs.keys.limit.h2': 'Đạt giới hạn',
  'subs.keys.limit.p':
    'Một lần tìm kiếm tốn 1 yêu cầu và mỗi lượt tải phụ đề tốn 1 yêu cầu, vì vậy tìm kiếm một lần và tải một file sẽ dùng 2 yêu cầu. Dịch thuật AI tốn 25 yêu cầu cho mỗi lần gọi, và một lần đồng bộ Wyzie Synced tốn 5.',
  'subs.keys.limit.free':
    '**Gói miễn phí** đã hết -> tìm kiếm và liên kết tải xuống trả về 429 Daily request limit reached, kèm reset_at trong JSON và header Retry-After. Giới hạn hàng ngày 1.000 yêu cầu được đặt lại vào lúc nửa đêm UTC.',
  'subs.keys.limit.paid':
    '**Số dư trả phí** đã hết -> tìm kiếm và liên kết tải xuống trả về 402 kèm liên kết nạp thêm trong JSON. Nạp thêm tại [store.wyzie.io/topup](https://store.wyzie.io/topup) hoặc bật **tự động nạp thêm** trong bảng điều khiển để tự động nạp khi số dư vượt qua ngưỡng bạn đặt.',
  'subs.keys.hold.p1':
    'Các key gửi lưu lượng rất lớn, chủ yếu từ IP trung tâm dữ liệu hoặc hosting, sẽ tự động bị tạm dừng. Key bị tạm dừng nhận 403 Key on hold cho mọi yêu cầu, kèm liên kết khôi phục (https://store.wyzie.io/verify) và liên kết hỗ trợ (https://store.wyzie.io/contact) trong JSON.',
  'subs.keys.hold.p2':
    'Để khôi phục key ngay lập tức, hãy xác minh trang web bạn dùng key tại [store.wyzie.io/verify](https://store.wyzie.io/verify) bằng bản ghi DNS TXT hoặc thẻ meta. Key có trang web đã xác minh sẽ không bao giờ bị tự động tạm dừng nữa, vì vậy các trang có lưu lượng lớn có thể xác minh trước khi bị tạm dừng.',
  'subs.keys.hold.p3':
    'Không có trang web, ví dụ như dịch vụ backend hoặc ứng dụng? [Liên hệ hỗ trợ](https://store.wyzie.io/contact) để được khôi phục key.',

  'subs.keys.files.h2': 'Có gì trong các file',
  'subs.keys.files.adfilter':
    '**Lọc quảng cáo** – mọi phụ đề được phục vụ qua sub.wyzie.io đều được loại bỏ các cue quảng cáo của nhà cung cấp (banner OpenSubtitles, quảng cáo cá cược, các dòng kiểu "xem miễn phí tại ..."). Các cue SRT được đánh số lại nên không bị nhảy số. Mọi nhà cung cấp, kể cả OpenSubtitles, đều được phục vụ qua sub.wyzie.io nên bộ lọc áp dụng cho tất cả.',
  'subs.keys.files.promo':
    '**Key miễn phí và key dev** nhận một cue ngắn ở ngay đầu mỗi file (0–6 s) trỏ đến [store.wyzie.io](https://store.wyzie.io). Key trả phí nhận file sạch, không có cue.',

  'subs.keys.faq.h2': 'Câu hỏi thường gặp',
  'subs.keys.faq.q1': 'Tôi mất key. Có thể lấy lại không?',
  'subs.keys.faq.a1':
    'Mở [bảng điều khiển](https://store.wyzie.io/dashboard) và dùng "Forgot key" (quên key) với email đã đăng ký; chúng tôi sẽ gửi lại key hiện có của bạn. Nếu bạn nghĩ key đã bị lộ, thay vào đó hãy thay key mới từ bảng điều khiển.',
  'subs.keys.faq.q2': 'Tôi có thể dùng một key trong nhiều dự án không?',
  'subs.keys.faq.a2': 'Có. Key của bạn hoạt động ở bất kỳ đâu bạn gọi API.',
  'subs.keys.faq.q3': 'Key của tôi có hết hạn không?',
  'subs.keys.faq.a3':
    'Không. Key miễn phí và trả phí đều không có thời hạn. Key miễn phí bị giới hạn theo ngày; số dư trả phí tồn tại cho đến khi bạn dùng hết.',
  'subs.keys.faq.q4': 'Tự động nạp thêm có an toàn không?',
  'subs.keys.faq.a4':
    'Bạn đặt giới hạn chi tiêu hàng tháng. Chúng tôi không bao giờ tính phí vượt quá mức đó, và nút tắt một cú nhấp chuột có trong mọi email xác nhận cũng như bảng điều khiển của bạn.',

  // Proxy Intro Page
  'proxy.intro.title': 'Giới thiệu Wyzie Proxy',
  'proxy.intro.note':
    'Phiên bản sản xuất của Wyzie Subs không còn sử dụng proxy này mà thay bằng [i6.shark](https://github.com/wyziedevs/i6.shark).',
  'proxy.intro.p1':
    'Wyzie Proxy là một API proxy mạnh mẽ cho phép bạn thực hiện các yêu cầu đến bất kỳ trang web nào mà không bị CORS hay các hạn chế khác. Vì Wyzie Proxy được xây dựng bằng Nitro, nó có thể được lưu trữ trên bất kỳ nền tảng nào sau đây: AWS Amplify, Azure, Cloudflare, Netlify, Stormkit, Vercel, Zeabur.',
  'proxy.intro.btn.hosting': 'Lưu trữ',
  'proxy.intro.btn.check': 'Xem ngay',

  // Proxy Hosting Page
  'proxy.hosting.title': 'Lưu trữ Wyzie Proxy',
  'proxy.hosting.p1':
    'Xây dựng Wyzie Proxy dễ hơn thở nhờ Nitro. Đầu tiên, clone kho Wyzie Proxy bằng:',
  'proxy.hosting.p2': 'Sau đó, cài đặt tất cả các gói cần thiết bằng:',
  'proxy.hosting.p3':
    'Sau khi tất cả các gói được cài đặt, bạn có thể build proxy:',
  'proxy.hosting.p4':
    'Đầu ra sẽ được tạo trong thư mục /.output/server. Nếu bạn triển khai lên Cloudflare Workers, hãy sao chép file index.mjs vào worker; nếu không, bạn có thể triển khai các file như bình thường.',

  // i6.shark Intro Page
  'i6shark.intro.title': 'Giới thiệu i6.shark',
  'i6shark.intro.p1':
    'i6.shark là một máy chủ proxy IPv6 cho phép bạn thực hiện các yêu cầu HTTP từ các địa chỉ IPv6 được tạo ngẫu nhiên trong một /48 subnet. Đây là proxy hiện đang cung cấp sức mạnh cho Wyzie Subs trong môi trường sản xuất.',
  'i6shark.intro.p2':
    'Một /48 subnet có 1.208.925.819.614.629.174.706.176 (1,2 x 10^24) địa chỉ IPv6, khiến việc chặn thông qua IP banning thông thường gần như không thể. Tuy nhiên, việc dùng một subnet duy nhất có nghĩa là những ai thực sự muốn chặn bạn có thể chặn địa chỉ ASN của bạn, vì vậy hãy cẩn thận.',
  'i6shark.intro.btn.hosting': 'Lưu trữ',
  'i6shark.intro.btn.github': 'GitHub',

  'i6shark.intro.features.h2': 'Tính năng',
  'i6shark.intro.feature1':
    '**Tạo IPv6 ngẫu nhiên**: Tạo các địa chỉ IPv6 ngẫu nhiên từ tiền tố /48 của bạn cho mỗi yêu cầu',
  'i6shark.intro.feature2':
    '**Phương thức HTTP**: GET, HEAD và POST; mọi phương thức khác nhận 405',
  'i6shark.intro.feature3':
    '**Xác thực HMAC-SHA256**: Xác thực API key an toàn sử dụng token dựa trên user-agent',
  'i6shark.intro.feature4':
    '**Quản lý nhóm IP thông minh**: Xoay vòng IP tự động với kích thước nhóm có thể cấu hình. Quản lý vòng đời IP thông minh. Đếm yêu cầu theo từng IP. Dọn dẹp IP không sử dụng dựa trên ngưỡng không hoạt động.',
  'i6shark.intro.feature5':
    '**Xử lý yêu cầu an toàn**: Chỉ các header yêu cầu nằm trong danh sách cho phép mới được chuyển tiếp, không bao giờ chuyển tiếp token API hay các header của Cloudflare và header chuyển tiếp (forwarding). Các đích đến trên mạng loopback, mạng riêng, link-local và các mạng nội bộ khác (bao gồm cả địa chỉ của chính máy chủ) đều bị từ chối, sau khi phân giải DNS và ở mỗi lần chuyển hướng (tối đa 5). Hỗ trợ nhiều định dạng tham số URL. Dự phòng tùy chọn về IP mặc định của hệ thống.',
  'i6shark.intro.feature7':
    '**Bảo trì tự động**: Xả nhóm IP định kỳ. Xác thực và dọn dẹp subnet. Tối ưu hóa kết nối pooling và keepalive.',
  'i6shark.intro.feature8':
    '**Hiệu suất cao**: Xử lý yêu cầu đồng thời với buffer pooling. Thời gian chờ và giới hạn kết nối có thể cấu hình. Quản lý địa chỉ IPv6 hiệu quả.',
  'i6shark.intro.feature9':
    '**Chế độ gỡ lỗi**: Ghi nhật ký chi tiết để khắc phục sự cố và giám sát',

  'i6shark.intro.requirements.h2': 'Yêu cầu',
  'i6shark.intro.req1': 'Go 1.22 trở lên',
  'i6shark.intro.req2': 'Hệ thống Linux/Unix có hỗ trợ IPv6 (ưu tiên Ubuntu)',
  'i6shark.intro.req3': 'Quyền root (để binding cổng 80 và thao tác IPv6)',
  'i6shark.intro.req4':
    'Cấp phát IPv6 /48 subnet từ nhà cung cấp lưu trữ của bạn',

  'i6shark.intro.providers.h2': 'Nhà cung cấp lưu trữ',
  'i6shark.intro.providers.p1':
    'Các nhà cung cấp sau đây được biết là cung cấp /48 IPv6 subnet:',

  // i6.shark Hosting Page
  'i6shark.hosting.title': 'Lưu trữ i6.shark',
  'i6shark.hosting.p1':
    'Thiết lập i6.shark yêu cầu một VPS với /48 IPv6 subnet. Sau khi cấu hình xong, nó chạy tự động với ít bảo trì tối thiểu.',

  'i6shark.hosting.steps.h2': 'Các bước',
  'i6shark.hosting.step1': 'Clone kho vào /opt/i6.shark:',
  'i6shark.hosting.step2': 'Cấu hình các hằng số trong src/consts.go:',
  'i6shark.hosting.step2.note':
    'Cập nhật IPv6Prefix và Interface để phù hợp với máy chủ của bạn. Khóa bí mật chia sẻ được đặt trong biến môi trường (bước tiếp theo), không phải trong file này; SharedSecret chỉ là giá trị dự phòng khi I6_SHARED_SECRET chưa được đặt. Các hằng số tinh chỉnh còn lại có giá trị mặc định hợp lý và thường không cần thay đổi.',
  'i6shark.hosting.stepSecret':
    'Đặt khóa bí mật chia sẻ vào một file môi trường mà chỉ root mới đọc được. Dùng cùng giá trị đó trong client của bạn (với Wyzie Subs là I6_PROXY_SECRET):',
  'i6shark.hosting.step3': 'Build ứng dụng:',
  'i6shark.hosting.step4': 'Tạo dịch vụ systemd:',
  'i6shark.hosting.step5': 'Bật và khởi động dịch vụ:',
  'i6shark.hosting.step5.check': 'Kiểm tra trạng thái:',
  'i6shark.hosting.post':
    'Máy chủ proxy sẽ tự động chạy khi khởi động và tự khởi động lại nếu bị sập.',

  'i6shark.hosting.daily.h2': 'Khởi động lại hàng ngày (Tùy chọn)',
  'i6shark.hosting.daily.p':
    'Thêm một cron job để khởi động lại máy chủ hàng ngày vào một thời điểm ngẫu nhiên:',

  'i6shark.hosting.auth.h2': 'Xác thực API',
  'i6shark.hosting.auth.p':
    'Token API được tạo bằng HMAC-SHA256 với khóa bí mật chia sẻ (I6_SHARED_SECRET) trên header user-agent, và được gửi trong header API-Token, header mà proxy không bao giờ chuyển tiếp lên máy chủ đích. Xem hàm validateAPIToken trong mã nguồn để biết chi tiết triển khai. Nếu khóa bí mật bị lộ, hãy đặt một khóa mới và khởi động lại dịch vụ.',

  // Plugins
  'plugins.common.required': 'Bắt buộc',

  'plugins.index.intro':
    'Wyzie Subs kết nối trực tiếp với các ứng dụng media mà bạn đã sử dụng. Mọi plugin đều giao tiếp với cùng một endpoint `https://sub.wyzie.io/search` và cần một **khóa API Wyzie** miễn phí. Nhận khóa tại [store.wyzie.io](https://store.wyzie.io/#plans).',
  'plugins.index.tbl.stremio.for':
    'Xem trên Stremio ở máy tính, di động hoặc TV',
  'plugins.index.tbl.stremio.install':
    'Add-on được lưu trữ sẵn: dán khóa của bạn, nhấp Cài đặt',
  'plugins.index.tbl.bazarr.for':
    'Thư viện Plex, Jellyfin, Emby, Sonarr, Radarr',
  'plugins.index.tbl.bazarr.install':
    'Provider cắm-vào-chạy cho phiên bản Bazarr của bạn',
  'plugins.index.tbl.kodi.for': 'Kodi 19+, LibreELEC, CoreELEC',
  'plugins.index.tbl.kodi.install': 'Cài đặt từ tệp zip hoặc kho lưu trữ Wyzie',
  'plugins.index.use.stremio':
    'Dùng **Stremio** nếu bạn xem bên trong ứng dụng Stremio.',
  'plugins.index.use.bazarr':
    'Dùng **Bazarr** nếu bạn chạy Plex, Jellyfin hoặc Emby. Bazarr tải các tệp phụ đề về ổ đĩa và máy chủ media của bạn tự động nhận chúng. Đây cũng là cách được khuyến nghị cho Plex và Jellyfin; không có plugin gốc riêng.',
  'plugins.index.use.kodi':
    'Dùng **Kodi** để có dịch vụ phụ đề gốc của Kodi trên Android TV, Raspberry Pi hoặc máy tính rạp hát tại nhà.',
  'plugins.index.shared.sources':
    '**Nguồn:** mọi nguồn mà khóa của bạn có thể dùng (`source=all`): charlie và lima với khóa miễn phí, cả bảy nguồn với khóa Pro.',
  'plugins.index.shared.matching':
    '**Khớp:** Wyzie được điều khiển bởi ID IMDB và TMDB cùng với mùa và tập, vì vậy việc khớp chính xác cho cả phim lẻ và phim bộ.',
  'plugins.index.shared.quota':
    '**Hạn mức:** khi khóa của bạn hết, plugin sẽ hiển thị một thông báo thân thiện liên kết đến [store.wyzie.io](https://store.wyzie.io) thay vì lỗi âm thầm. Nạp thêm hoặc đăng ký và bạn có thể tiếp tục.',
  'plugins.index.shared.languages':
    '**Ngôn ngữ:** hơn 100, có thể chọn cho từng plugin.',
  'plugins.index.outro':
    'Chọn nền tảng của bạn ở trên để bắt đầu. Mã nguồn của mọi plugin đều nằm trong [kho lưu trữ wyzie-plugins](https://github.com/wyziedevs/wyzie-plugins).',

  'plugins.stremio.intro':
    'Một add-on phụ đề chỉ với một cú nhấp cho [Stremio](https://www.stremio.com/). Nó truy vấn mọi nguồn Wyzie mà khóa của bạn có thể dùng và hoạt động cho cả phim lẻ và phim bộ, trên mọi nền tảng mà Stremio chạy.',
  'plugins.stremio.before':
    'Bạn cần một khóa API Wyzie miễn phí. Nhận một khóa tại [store.wyzie.io/redeem](https://store.wyzie.io/redeem), hoặc mua khóa Pro hay đăng ký tại [store.wyzie.io](https://store.wyzie.io/#plans).',
  'plugins.stremio.install.1':
    'Mở [stremio.wyzie.io/configure](https://stremio.wyzie.io/configure).',
  'plugins.stremio.install.2': 'Dán **khóa API** của bạn.',
  'plugins.stremio.install.3':
    'Tùy chọn: nhập các **ngôn ngữ** ưa thích của bạn dưới dạng mã ISO 639-1, phân cách bằng dấu phẩy (ví dụ `en,es,fr`). Để trống cho tất cả ngôn ngữ.',
  'plugins.stremio.install.4':
    'Tùy chọn: bật **dành cho người khiếm thính** để chỉ nhận phụ đề dành cho người khiếm thính. Giữ tắt để xem tất cả; khi bật, các nguồn không đánh dấu phụ đề dành cho người khiếm thính sẽ không trả về gì.',
  'plugins.stremio.install.5':
    'Nhấp **Install**. Stremio mở ra và yêu cầu bạn xác nhận; chấp nhận, và bạn đã xong.',
  'plugins.stremio.install.after':
    'Khóa và tùy chọn của bạn được mã hóa vào add-on, nên không cần thiết lập gì thêm. Mở bất kỳ phim hay tập nào và chọn một phụ đề từ danh sách.',
  'plugins.stremio.cfg.key.f': 'Khóa API',
  'plugins.stremio.cfg.key.d': 'Khóa Wyzie của bạn. Bắt buộc.',
  'plugins.stremio.cfg.langs.f': 'Ngôn ngữ',
  'plugins.stremio.cfg.langs.d':
    'Mã ISO 639-1, phân cách bằng dấu phẩy. Để trống nghĩa là tất cả ngôn ngữ.',
  'plugins.stremio.cfg.hi.f': 'Dành cho người khiếm thính',
  'plugins.stremio.cfg.hi.d':
    'Chỉ trả về phụ đề dành cho người khiếm thính (gửi hi=true). Mặc định tắt.',
  'plugins.stremio.cfg.note':
    'Để thay đổi bất kỳ tùy chọn nào sau này, mở lại [stremio.wyzie.io/configure](https://stremio.wyzie.io/configure), điều chỉnh và cài đặt lại.',
  'plugins.stremio.local':
    'Sau đó mở `http://127.0.0.1:7000/configure`, dán khóa của bạn và cài đặt vào Stremio.',
  'plugins.stremio.quota':
    'Nếu khóa của bạn đạt giới hạn, add-on sẽ hiển thị một mục phụ đề duy nhất liên kết đến [store.wyzie.io](https://store.wyzie.io) để bạn có thể nạp thêm hoặc đăng ký. Sau khi làm vậy, phụ đề sẽ trở lại ngay lập tức.',
  'plugins.stremio.ts.none':
    '**Không có phụ đề nào xuất hiện.** Đảm bảo tựa đề có ID IMDB trong Stremio (hầu hết các mục danh mục đều có) và rằng các ngôn ngữ bạn chọn thực sự có phụ đề cho tựa đề đó. Thử xóa bộ lọc ngôn ngữ để xem tất cả.',
  'plugins.stremio.ts.key':
    '**Khóa không hợp lệ, hoặc không tải được gì.** Mở lại trang cấu hình và dán lại khóa của bạn; một khoảng trắng thừa cũng làm hỏng nó. Xác nhận khóa hoạt động tại [store.wyzie.io/dashboard](https://store.wyzie.io/dashboard).',
  'plugins.stremio.ts.episode':
    '**Tập phim bộ không khớp.** Wyzie khớp theo mùa và tập; đảm bảo Stremio đang phát đúng mục tập, không phải một trang phim bộ chung chung.',

  'plugins.bazarr.intro':
    '[Bazarr](https://www.bazarr.media/) quản lý phụ đề cho **Plex, Jellyfin, Emby, Sonarr và Radarr** ở một nơi. Thêm Wyzie làm provider giúp tất cả các máy chủ đó truy cập mọi nguồn Wyzie mà khóa của bạn có thể dùng, thông qua một khóa duy nhất.',
  'plugins.bazarr.note':
    'Đây là cách được khuyến nghị để dùng Wyzie với Plex và Jellyfin. Bazarr tải các tệp phụ đề cạnh media của bạn, và máy chủ của bạn tự động nhận chúng, nên không cần plugin gốc riêng.',
  'plugins.bazarr.before':
    'Nhận một khóa API Wyzie miễn phí tại [store.wyzie.io/redeem](https://store.wyzie.io/redeem), và có quyền truy cập vào các tệp cài đặt Bazarr của bạn (đường dẫn Docker thông thường: `/opt/bazarr/bazarr/`).',
  'plugins.bazarr.install.1':
    'Tải [bazarr/wyzie.py](https://github.com/wyziedevs/wyzie-plugins/blob/main/bazarr/wyzie.py) từ [kho lưu trữ wyzie-plugins](https://github.com/wyziedevs/wyzie-plugins) (hoặc `git clone https://github.com/wyziedevs/wyzie-plugins.git`) và sao chép nó vào `bazarr/subliminal_patch/providers/wyzie.py`.',
  'plugins.bazarr.install.2':
    'Chỉnh sửa `bazarr/subliminal_patch/extensions.py` và thêm `wyzie` vào **cả hai** `provider_registry` và `provider_manager`.',
  'plugins.bazarr.install.3':
    'Chỉnh sửa `bazarr/list_subtitles.py` (hoặc `bazarr/config.py`, tùy phiên bản của bạn) để hiển thị các cài đặt `api_key`, `prefer_hi` và `sources`. Sao chép mẫu từ một provider hiện có như `opensubtitlescom`.',
  'plugins.bazarr.install.4': 'Khởi động lại Bazarr.',
  'plugins.bazarr.install.5':
    'Vào **Settings, Providers, Wyzie**, dán khóa API của bạn và lưu.',
  'plugins.bazarr.install.after':
    'Một pull request hạng nhất để đưa provider này vào chính thức Bazarr đang được lên kế hoạch. Cho đến lúc đó, đây là một tệp cắm-vào-chạy mà bạn thêm vào bản cài đặt của riêng mình.',
  'plugins.bazarr.cfg.key': 'Khóa Wyzie của bạn. Bắt buộc.',
  'plugins.bazarr.cfg.hi':
    'Chỉ trả về phụ đề dành cho người khiếm thính (gửi hi=true).',
  'plugins.bazarr.cfg.sources':
    'Danh sách các provider cần truy vấn, phân cách bằng dấu phẩy, hoặc `all`.',
  'plugins.bazarr.quota.402':
    '**402 hoặc 429** (hết số dư hoặc đạt giới hạn hàng ngày): Bazarr ghi một ghi chú kèm liên kết đến [store.wyzie.io](https://store.wyzie.io) và không trả về kết quả, nên nó chuyển sang các provider khác của bạn một cách gọn gàng. Không có gì bị sập.',
  'plugins.bazarr.quota.401':
    '**401** (thiếu khóa) hoặc **403** (khóa không xác định, hoặc khóa đang bị tạm dừng): Bazarr hiển thị lỗi xác thực để bạn biết cần kiểm tra hoặc nhập lại khóa.',
  'plugins.bazarr.ts.missing':
    '**Wyzie không xuất hiện trong danh sách provider.** Kiểm tra lại bước cài đặt chỉnh sửa `extensions.py`; mục này phải nằm trong cả `provider_registry` và `provider_manager`, sau đó khởi động lại Bazarr.',
  'plugins.bazarr.ts.none':
    '**Không tìm thấy phụ đề nào.** Xác nhận mục có ID IMDB trong Bazarr và rằng các ngôn ngữ bạn đã bật có phụ đề cho nó. Chỉ thu hẹp `sources` nếu bạn cố ý.',
  'plugins.bazarr.ts.settings':
    '**Thiếu các trường cài đặt.** Bước cài đặt không được áp dụng cho phiên bản Bazarr của bạn; so sánh với một khối cài đặt provider đang hoạt động và khởi động lại.',

  'plugins.kodi.intro':
    'Một dịch vụ phụ đề cho **Kodi 19+ (Matrix trở lên)**, LibreELEC và CoreELEC. Nó sử dụng điểm mở rộng `xbmc.subtitle.module` tiêu chuẩn của Kodi, nên nó xuất hiện ở bất cứ đâu Kodi tìm phụ đề.',
  'plugins.kodi.before':
    'Nhận một khóa API Wyzie miễn phí tại [store.wyzie.io/redeem](https://store.wyzie.io/redeem).',
  'plugins.kodi.repo.intro':
    'Cài đặt kho lưu trữ một lần cho phép Kodi **tự động cập nhật** add-on cho bạn.',
  'plugins.kodi.repo.1':
    'Tải trình cài đặt kho lưu trữ: [**repository.wyzie.zip**](https://kodi.wyzie.io/repository.wyzie.zip).',
  'plugins.kodi.repo.2':
    'Trong Kodi: **Settings, Add-ons, Install from zip file**, sau đó chọn `repository.wyzie.zip`. Nếu Kodi chặn nó, hãy bật **Settings, System, Add-ons, Unknown sources** trước.',
  'plugins.kodi.repo.3':
    '**Settings, Add-ons, Install from repository, Wyzie Repository, Subtitle services, Wyzie Subs, Install.**',
  'plugins.kodi.repo.4':
    '**Settings, Player, Language, Default subtitle service**, sau đó chọn **Wyzie Subs**.',
  'plugins.kodi.repo.5':
    'Mở cài đặt add-on Wyzie Subs và dán **khóa API** của bạn.',
  'plugins.kodi.zip.intro':
    'Dùng cách này nếu bạn không muốn thêm kho lưu trữ. Lưu ý: cài đặt từ zip sẽ **không** tự động cập nhật.',
  'plugins.kodi.zip.1':
    'Lấy tệp zip add-on: `service.subtitles.wyzie-<version>.zip`. Để tự build, hãy clone [kho lưu trữ wyzie-plugins](https://github.com/wyziedevs/wyzie-plugins) (`git clone https://github.com/wyziedevs/wyzie-plugins.git`) rồi nén thư mục `kodi/` của nó sao cho tệp zip chứa `addon.xml` ở thư mục gốc.',
  'plugins.kodi.zip.2':
    'Trong Kodi: **Settings, Add-ons, Install from zip file**, sau đó chọn tệp zip. Nếu Kodi chặn nó, hãy bật **Settings, System, Add-ons, Unknown sources** trước.',
  'plugins.kodi.zip.3':
    '**Settings, Player, Language, Default subtitle service**, sau đó chọn **Wyzie Subs**.',
  'plugins.kodi.zip.4':
    'Mở cài đặt add-on Wyzie Subs và dán **khóa API** của bạn.',
  'plugins.kodi.cfg.key': 'Khóa Wyzie của bạn. Bắt buộc.',
  'plugins.kodi.cfg.hi':
    'Chỉ trả về phụ đề dành cho người khiếm thính (gửi hi=true).',
  'plugins.kodi.cfg.langs':
    'Ngôn ngữ được lấy từ các ngôn ngữ phụ đề đã chọn của Kodi và tự động ánh xạ sang ISO 639-1.',
  'plugins.kodi.matching.1':
    'Trong khi đang phát nội dung, Kodi cung cấp số IMDB, mùa và tập. Add-on đọc những thông tin đó, truy vấn `sub.wyzie.io/search` và trả về phụ đề khớp. Vì Wyzie được điều khiển bởi ID (IMDB và TMDB), việc khớp chính xác cho cả phim lẻ và phim bộ.',
  'plugins.kodi.matching.2':
    '**Tìm kiếm thủ công** hiện hiển thị một thông báo và không làm gì, vì Wyzie khớp theo ID, không phải tựa đề. Tra cứu từ tựa đề sang ID nằm trong lộ trình. Hiện tại, hãy để Kodi tìm kiếm tự động trong khi phát.',
  'plugins.kodi.quota':
    'Phản hồi 402 hoặc 429 sẽ hiển thị thông báo toast của Kodi hướng bạn đến [store.wyzie.io](https://store.wyzie.io) để nạp thêm hoặc đăng ký.',
  'plugins.kodi.ts.notoffered':
    '**Wyzie không được cung cấp trong khi phát.** Xác nhận nó được đặt làm **Default subtitle service** và rằng mục đang phát có ID IMDB.',
  'plugins.kodi.ts.key':
    '**Khóa không hợp lệ.** Mở lại cài đặt add-on và dán lại khóa của bạn.',
  'plugins.kodi.ts.episode':
    '**Không có gì cho một tập.** Đảm bảo Kodi có đúng metadata mùa và tập cho tệp; các mục thư viện đã được scrape hoạt động tốt nhất.',
};

export default messages;
