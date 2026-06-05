const messages: Record<string, string> = {
  // Navigation
  'nav.language': 'Ngôn ngữ',

  // Index / Landing Page
  'index.subtitle':
    'Wyzie là một bộ công cụ mã nguồn mở để tìm kiếm phụ đề và nhiều chức năng khác.',
  'index.cta.start': 'Bắt đầu',
  'index.cta.store': 'Xem ngay',

  'index.card.keys.title': 'API Keys miễn phí',
  'index.card.keys.body':
    'Lấy API key miễn phí tại store.wyzie.io/redeem với xác minh Gmail nhanh chóng. 1.000 yêu cầu/ngày hoàn toàn miễn phí. Có các gói trả phí cho nhu cầu sử dụng nhiều hơn.',

  'index.card.ai.title': 'Dịch thuật AI',
  'index.card.ai.body':
    'Dịch bất kỳ phụ đề nào sang hơn 80 ngôn ngữ theo yêu cầu. Phát trực tuyến từng cue để có thể bắt đầu phát lại trong vài giây. Có sẵn trên các key Pro.',

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
    'Wyzie Subs là một API tìm kiếm phụ đề mã nguồn mở và miễn phí. Có hai cách để gửi yêu cầu tới API: sử dụng gói NPM của chúng tôi hoặc trực tiếp gọi Wyzie API. Tôi khuyến nghị dùng gói của chúng tôi, nhưng một số người có thể thấy các kiểu dữ liệu hơi phức tạp. Để sử dụng API, trước tiên bạn cần đưa ra quyết định đó.',
  'subs.intro.note.ai':
    'Dịch thuật AI đã hoạt động cho các key Pro. Bất kỳ tiêu đề nào, hơn 80 ngôn ngữ đích, phát trực tuyến trong khi dịch.',
  'subs.intro.important.apikey':
    'API key là bắt buộc cho tất cả các yêu cầu. Lấy key miễn phí tại [store.wyzie.io/redeem](https://store.wyzie.io/redeem) (xác minh Gmail, 1.000 yêu cầu/ngày). Để sử dụng nhiều hơn, [các gói Pro và nạp thêm](https://store.wyzie.io) đã có sẵn. Xem trang API Keys để biết chi tiết.',
  'subs.intro.note.npm':
    'Chúng tôi khuyến nghị mạnh mẽ sử dụng gói NPM nếu bạn quen thuộc với TypeScript hoặc JavaScript',
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
    'Wyzie Worker là một proxy Cloudflare Worker nhẹ, tự động gắn API key của bạn ở phía máy chủ. Triển khai nó lên Cloudflare Workers và đặt key của bạn làm biến môi trường NITRO_API_TOKEN. Sau đó trỏ các yêu cầu từ client vào URL worker của bạn thay vì sub.wyzie.io — worker sẽ chuyển tiếp chúng kèm theo key của bạn.',
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
  'subs.sources.using.bullet2':
    'Nguồn mặc định là opensubtitles nếu không chỉ định',
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
    'Không phải bộ scraper. SRT được dịch bằng AI theo yêu cầu từ phụ đề nguồn tốt nhất có sẵn. Xem hướng dẫn Dịch thuật AI để biết chi tiết đầy đủ.',
  'subs.sources.ai.content': 'Bất cứ thứ gì Wyzie có thể tìm thấy SRT',
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
  'subs.pkg.param.hi': 'Boolean cho phụ đề dành cho người khiếm thính.',
  'subs.pkg.param.source':
    'Nhà cung cấp phụ đề cần truy vấn (all cho tất cả các nguồn đang kích hoạt).',
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
    'Gói cũng đi kèm các helper TMDB nhẹ: searchTmdb, getTvDetails, và getSeasonDetails để nhanh chóng tìm ID trước khi gọi /search. Ngoài ra, getSources có thể được dùng để lấy danh sách các nguồn phụ đề đang kích hoạt.',
  'subs.pkg.types.h3': 'Kiểu dữ liệu',
  'subs.pkg.type.search': 'Tất cả các tham số hợp lệ được API nhận dạng.',
  'subs.pkg.type.query':
    'Tất cả các tham số (tùy chọn và bắt buộc) có sẵn cho wyzie-subs API.',
  'subs.pkg.type.subtitle':
    'Tất cả các giá trị được trả về từ API với các kiểu dữ liệu tương ứng.',
  'subs.pkg.type.sources': 'Kiểu dữ liệu phản hồi từ endpoint /sources.',
  'subs.pkg.types.end':
    'Các kiểu dữ liệu của chúng tôi rất đơn giản và được ghi chép đầy đủ. Xem file types.ts được liên kết trong kho GitHub.',
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
    'Có ưu tiên phụ đề dành cho người khiếm thính hay không.',
  'subs.direct.param.encoding': 'Bộ lọc mã hóa ký tự.',
  'subs.direct.param.source':
    'Nhà cung cấp phụ đề cần truy vấn (all truy vấn tất cả các nguồn đang kích hoạt; mặc định là opensubtitles).',
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
  'subs.direct.important.imdb':
    "Khi sử dụng IMDB ID, hãy đảm bảo rằng hai ký tự đầu ('tt') được bao gồm ở đầu ID.",

  'subs.direct.data.h3': 'Dữ liệu được trả về',
  'subs.direct.data.id': 'ID của file phụ đề.',
  'subs.direct.data.url': 'URL đến file phụ đề.',
  'subs.direct.data.flagUrl': 'URL đến cờ quốc gia của ngôn ngữ.',
  'subs.direct.data.format': 'Định dạng của file phụ đề.',
  'subs.direct.data.encoding': 'Mã hóa ký tự của file phụ đề.',
  'subs.direct.data.display': 'Ngôn ngữ của phụ đề, viết hoa chữ đầu.',
  'subs.direct.data.language': 'Mã ISO 3166-2 của ngôn ngữ.',
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

  // Subs Translate Page
  'subs.translate.title': 'Dịch thuật phụ đề bằng AI',
  'subs.translate.important':
    'Dịch thuật AI là **tính năng Pro**. Mỗi lần dịch tốn **100 yêu cầu** từ số dư của key, tính cả khi lấy từ bộ nhớ đệm lẫn dịch mới. Key miễn phí không thể sử dụng tính năng này.',
  'subs.translate.p1':
    'Wyzie có thể dịch bất kỳ phụ đề nào sang hơn 80 ngôn ngữ ngay lập tức. Bản dịch được phát trực tuyến trong khi mô hình xử lý, nên có thể bắt đầu phát lại chỉ trong một hoặc hai giây thay vì chờ cả file. Kết quả được lưu đệm 30 ngày, vì vậy người thứ hai yêu cầu cùng một bản dịch sẽ nhận ngay lập tức.',

  'subs.translate.ways.h2': 'Hai cách sử dụng',
  'subs.translate.way1.h3': '1. Chọn ngôn ngữ từ kết quả tìm kiếm',
  'subs.translate.way1.p1':
    'Mỗi phản hồi /search hiện bao gồm một mục bổ sung cho mỗi ngôn ngữ được hỗ trợ với "ai": true và url trỏ đến /translate. Chỉ cần xử lý các hàng AI như bất kỳ hàng phụ đề nào khác trong giao diện của bạn: khi người dùng nhấp vào một hàng, hãy lấy URL đó.',
  'subs.translate.way1.filter':
    'Nếu bạn muốn ẩn các hàng AI khỏi giao diện, hãy lọc chúng ra:',
  'subs.translate.way2.h3': '2. Gọi /translate trực tiếp',

  'subs.translate.param.id': 'TMDB hoặc IMDB ID (bắt buộc).',
  'subs.translate.param.target':
    'Ngôn ngữ đích theo tên tiếng Anh đầy đủ (ví dụ: Spanish, Japanese, Brazilian Portuguese) (bắt buộc).',
  'subs.translate.param.seasonEpisode':
    'Dành cho TV. Cả hai phải có mặt cùng nhau.',
  'subs.translate.param.key':
    'API key của bạn. Dùng tk thay thế nếu bạn lấy URL từ /search.',
  'subs.translate.param.tk':
    'Token đã ký được trả về bởi /search. Tương đương với key, nhưng không lộ key thô.',

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
    'Wyzie tìm kiếm các nguồn thông thường để lấy phụ đề SRT, ưu tiên tiếng Anh khi có sẵn.',
  'subs.translate.how.step2':
    'SRT được chia thành các đoạn 50 cue và dịch tuần tự. Mỗi đoạn được lưu đệm riêng lẻ khi hoàn thành.',
  'subs.translate.how.step3':
    'Đầu ra được phát trực tuyến lại cho bạn theo từng cue. Các trình phát chấp nhận nội dung SRT phát trực tuyến có thể bắt đầu hiển thị những dòng đầu tiên trước khi phần còn lại hoàn thành.',
  'subs.translate.how.step4':
    'Bản dịch hoàn chỉnh được lưu đệm trong Redis 30 ngày, được lập chỉ mục bởi id, season, episode, và target.',

  'subs.translate.languages.h2': 'Các ngôn ngữ đích được hỗ trợ',
  'subs.translate.languages.p':
    'Hơn 80 ngôn ngữ bao gồm tất cả các ngôn ngữ chính của châu Âu, châu Á, châu Phi và Trung Đông. Truyền tên tiếng Anh (Spanish, không phải es). Danh sách cũng được trả về dưới dạng các hàng ai: true trong bất kỳ phản hồi /search nào, đây là nguồn thông tin chính xác nhất.',

  'subs.translate.limitations.h2': 'Giới hạn',
  'subs.translate.limit1':
    'Dịch thuật AI cần nguồn SRT. Các tiêu đề mà mọi phụ đề có sẵn đều là .ass, .vtt, hoặc định dạng khác sẽ trả về lỗi 404 No SRT found.',
  'subs.translate.limit2':
    'Chất lượng dịch phụ thuộc vào phụ đề nguồn. Một nguồn có thời gian kém hoặc lỗi đánh máy sẽ tạo ra bản dịch có thời gian kém hoặc lỗi đánh máy tương tự.',
  'subs.translate.limit3':
    'Một số người dùng có thể muốn loại bỏ hoàn toàn các hàng AI. Lọc theo ai === false trong client của bạn.',
  'subs.translate.limit4':
    'Các bản dịch cũng được tính phí khi lấy từ bộ nhớ đệm. Dù được tạo mới hay lấy từ bộ nhớ đệm 30 ngày, mỗi yêu cầu /translate tốn 100 yêu cầu.',

  // Subs API Keys Page
  'subs.keys.title': 'API Keys',
  'subs.keys.p1':
    'Wyzie Subs yêu cầu API key cho tất cả các yêu cầu. Gói miễn phí đáp ứng hầu hết các trường hợp sử dụng; các gói trả phí xử lý nhu cầu sử dụng nặng hơn.',

  'subs.keys.tiers.h2': 'Các gói',
  'subs.keys.tier.free': 'Miễn phí (cần Gmail)',
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
    'Nhập địa chỉ Gmail (chỉ Gmail được chấp nhận cho gói miễn phí).',
  'subs.keys.free.step3': 'Nhập mã 6 chữ số chúng tôi gửi qua email.',
  'subs.keys.free.step4':
    'Bạn nhận được API key trông giống như wyzie-abc123...',
  'subs.keys.free.gmail':
    'Mỗi địa chỉ Gmail chỉ có thể đổi một key miễn phí. Đã có key miễn phí gắn với email đó? Xác minh lại chỉ trả về key hiện có của bạn.',

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
    'Dùng [Wyzie Worker](https://github.com/wyziedevs/wyzie-worker): một proxy Cloudflare Worker miễn phí giữ key của bạn ở phía máy chủ. Trỏ client của bạn vào URL Worker thay vì sub.wyzie.io.',
  'subs.keys.protect.option2':
    'Chạy proxy của riêng bạn: bất kỳ endpoint backend nào thêm key trước khi chuyển tiếp đến sub.wyzie.io đều hoạt động. Xem trang Giới thiệu để có ví dụ 10 dòng.',
  'subs.keys.protect.devtools':
    'Nếu key xuất hiện trong tab network trong DevTools, nó đã bị lộ. Hãy coi nó là công khai và thay thế bằng cách gửi email đến bộ phận hỗ trợ.',

  'subs.keys.using.h2': 'Sử dụng key của bạn',
  'subs.keys.using.p': 'Thêm &key=YOUR_KEY vào mọi yêu cầu API:',
  'subs.keys.using.npm.h3': 'Gói NPM',

  'subs.keys.limit.h2': 'Đạt giới hạn',
  'subs.keys.limit.free':
    '**Gói miễn phí** đã hết -> API trả về 429 với header X-RateLimit-Reset và Retry-After. Bộ đếm hàng ngày được đặt lại vào lúc nửa đêm UTC.',
  'subs.keys.limit.paid':
    '**Số dư trả phí** đã hết -> API trả về 402. Nạp thêm tại [store.wyzie.io/topup](https://store.wyzie.io/topup) hoặc bật **tự động nạp thêm** trong bảng điều khiển để tự động nạp khi số dư vượt qua ngưỡng bạn đặt.',

  'subs.keys.faq.h2': 'Câu hỏi thường gặp',
  'subs.keys.faq.q1': 'Tôi mất key. Có thể lấy lại không?',
  'subs.keys.faq.a1':
    'Truy cập [store.wyzie.io](https://store.wyzie.io) và dùng luồng "quên key" với email đã đăng ký; chúng tôi sẽ gửi lại key hiện có của bạn.',
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
    '**Hỗ trợ đầy đủ các phương thức HTTP**: GET, POST, PUT, DELETE, và tất cả các phương thức HTTP khác',
  'i6shark.intro.feature3':
    '**Xác thực HMAC-SHA256**: Xác thực API key an toàn sử dụng token dựa trên user-agent',
  'i6shark.intro.feature4':
    '**Quản lý nhóm IP thông minh**: Xoay vòng IP tự động với kích thước nhóm có thể cấu hình. Quản lý vòng đời IP thông minh. Đếm yêu cầu theo từng IP. Dọn dẹp IP không sử dụng dựa trên ngưỡng không hoạt động.',
  'i6shark.intro.feature5':
    '**Xử lý yêu cầu nâng cao**: Chuyển tiếp header tùy chỉnh. Loại bỏ header Cloudflare và CDN. Hỗ trợ nhiều định dạng tham số URL. Dự phòng tùy chọn về IP mặc định của hệ thống.',
  'i6shark.intro.feature6':
    '**Danh sách trắng host**: Danh sách trắng domain tích hợp để bảo mật (có thể cấu hình trong code)',
  'i6shark.intro.feature7':
    '**Bảo trì tự động**: Xả nhóm IP định kỳ. Xác thực và dọn dẹp subnet. Tối ưu hóa kết nối pooling và keepalive.',
  'i6shark.intro.feature8':
    '**Hiệu suất cao**: Xử lý yêu cầu đồng thời với buffer pooling. Thời gian chờ và giới hạn kết nối có thể cấu hình. Quản lý địa chỉ IPv6 hiệu quả.',
  'i6shark.intro.feature9':
    '**Chế độ gỡ lỗi**: Ghi nhật ký chi tiết để khắc phục sự cố và giám sát',

  'i6shark.intro.requirements.h2': 'Yêu cầu',
  'i6shark.intro.req1': 'Go 1.20 trở lên',
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
    'Cập nhật SharedSecret, IPv6Prefix, và Interface để phù hợp với máy chủ của bạn. Các hằng số tinh chỉnh còn lại có giá trị mặc định hợp lý và thường không cần thay đổi.',
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
    'Token API được tạo bằng HMAC-SHA256 với khóa bí mật chia sẻ. Đầu vào để tạo khóa là header user-agent. Xem hàm validateAPIToken trong mã nguồn để biết chi tiết triển khai.',
};

export default messages;
