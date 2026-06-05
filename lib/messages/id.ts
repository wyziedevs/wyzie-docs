const messages: Record<string, string> = {
  // Navigation
  'nav.language': 'Bahasa',

  // Index / Landing Page
  'index.subtitle':
    'Wyzie adalah seperangkat alat sumber terbuka untuk mengambil subtitle dan segala sesuatu di antaranya.',
  'index.cta.start': 'Mulai',
  'index.cta.store': 'Lihat Selengkapnya',

  'index.card.keys.title': 'API Key Gratis',
  'index.card.keys.body':
    'Dapatkan API key gratis di store.wyzie.io/redeem dengan verifikasi Gmail cepat. 1.000 permintaan/hari tanpa biaya. Paket berbayar tersedia untuk penggunaan lebih tinggi.',

  'index.card.ai.title': 'Terjemahan AI',
  'index.card.ai.body':
    'Terjemahkan subtitle apa pun ke 80+ bahasa sesuai permintaan. Mengalir per cue sehingga pemutaran dapat dimulai dalam hitungan detik. Tersedia untuk kunci Pro.',

  'index.card.reliable.title': 'Andal',
  'index.card.reliable.body':
    'Kami bangga dengan uptime yang konsisten dan pembaruan (hampir) harian serta cache yang cepat.',

  'index.card.simple.title': 'Kesederhanaan yang Didefinisikan Ulang',
  'index.card.simple.body':
    'Mudah diimplementasikan, mudah digunakan. Wyzie dirancang sesederhana mungkin.',

  // Donate Page
  'donate.title': 'Mohon Donasi',
  'donate.body':
    'Halo pengguna, Wyzie kini agak bergantung pada donasi (yang hampir tidak pernah saya dapatkan) dan saya berusia 16 tahun dengan pekerjaan paruh waktu, terkadang tagihan untuk menjalankan API publik ini melebihi $100 per bulan. Saya tidak bisa terus mendukung ini tanpa bantuan dari luar, saya benar-benar minta maaf tetapi proyek ini telah berkembang melampaui apa yang awalnya bisa saya dukung dari kantong sendiri.',
  'donate.cta': 'Dukung Wyzie',

  // Subs Intro Page
  'subs.intro.title': 'Pengantar Wyzie Subs',
  'subs.intro.p1':
    'Wyzie Subs adalah API scraping subtitle terbuka dan bebas. Ada dua cara untuk membuat permintaan ke API: menggunakan paket NPM kami atau langsung mengambil API Wyzie itu sendiri. Saya merekomendasikan menggunakan paket kami, tetapi sebagian orang mungkin merasa tipenya merepotkan. Untuk menggunakan API, Anda harus terlebih dahulu membuat keputusan tersebut.',
  'subs.intro.note.ai':
    'Terjemahan AI telah aktif untuk kunci Pro. Judul apa pun, 80+ bahasa target, dialirkan kembali saat penerjemah bekerja.',
  'subs.intro.important.apikey':
    'API key diperlukan untuk semua permintaan. Dapatkan kunci gratis di [store.wyzie.io/redeem](https://store.wyzie.io/redeem) (verifikasi Gmail, 1.000 permintaan/hari). Untuk penggunaan lebih tinggi, tersedia [paket Pro dan top-up](https://store.wyzie.io). Lihat halaman API Keys untuk detailnya.',
  'subs.intro.note.npm':
    'Kami sangat menyarankan paket NPM jika Anda familiar dengan TypeScript atau JavaScript',
  'subs.intro.btn.npm': 'Paket NPM',
  'subs.intro.btn.direct': 'Pengambilan Langsung',

  'subs.intro.protect.h2': 'Melindungi API Key Anda',
  'subs.intro.protect.important':
    '**Kejadian nyata:** kami telah melihat pengembang menempelkan kunci mereka langsung ke dalam JavaScript frontend situs streaming. Dalam hitungan jam, pihak yang tidak terkait mengambilnya dari bundel JS dan menggunakannya hingga batas harian atau saldo berbayar habis. Kuota yang hilang dengan cara ini tidak dapat dikembalikan dan dianggap sebagai tanggung jawab pemilik kunci berdasarkan Ketentuan kami.',
  'subs.intro.protect.p1':
    'API key Anda harus dijaga kerahasiaannya dan **jangan pernah** muncul di:',
  'subs.intro.protect.item1':
    'JavaScript browser (apa pun yang disajikan ke tag script)',
  'subs.intro.protect.item2':
    'Biner aplikasi mobile (Android/iOS, termasuk yang diobfuskasi)',
  'subs.intro.protect.item3': 'Ekstensi browser',
  'subs.intro.protect.item4':
    'Aplikasi desktop Electron / yang didistribusikan ke pengguna akhir',
  'subs.intro.protect.item5':
    'Repositori Git publik, gist, situs paste, atau tangkapan layar',
  'subs.intro.protect.p2':
    'Jika kunci mencapai mesin pengguna akhir, anggap saja sudah publik. Ada dua pola yang aman:',
  'subs.intro.protect.opt1.h3': 'Opsi 1: Gunakan Wyzie Worker',
  'subs.intro.protect.opt1.p1':
    'Wyzie Worker adalah proxy Cloudflare Worker ringan yang menyuntikkan API key Anda di sisi server. Deploy ke Cloudflare Workers dan atur kunci Anda sebagai variabel lingkungan NITRO_API_TOKEN. Kemudian arahkan permintaan klien Anda ke URL worker Anda alih-alih sub.wyzie.io — worker akan meneruskannya dengan kunci Anda terlampir.',
  'subs.intro.protect.opt2.h3': 'Opsi 2: Buat Proxy Sendiri',
  'subs.intro.protect.opt2.p1':
    'Jika Anda tidak ingin menggunakan Wyzie Worker, Anda dapat membuat proxy sisi server sederhana dengan framework apa pun. Idenya sama: backend Anda menerima permintaan dari klien, menambahkan API key, dan meneruskannya ke sub.wyzie.io.',

  // Subs Sources Page
  'subs.sources.title': 'Sumber Wyzie Subs',
  'subs.sources.p1':
    'Wyzie Subs mengumpulkan subtitle dari berbagai penyedia. Ketersediaan sumber dapat bervariasi tergantung status penyedia atau jika suatu sumber sedang tidak tersedia. Saya selalu mencari sumber baru — hubungi kami untuk menyarankan satu.',

  'subs.sources.using.h2': 'Menggunakan Sumber',
  'subs.sources.using.bullet1':
    'Gunakan source=all untuk mengkueri semua sumber yang diaktifkan secara bersamaan',
  'subs.sources.using.bullet2':
    'Sumber default adalah opensubtitles jika tidak ditentukan',
  'subs.sources.using.bullet3':
    'Beberapa sumber dapat ditentukan sebagai daftar yang dipisahkan koma',

  'subs.sources.api.h2': 'Endpoint API',
  'subs.sources.api.p1':
    'Anda dapat secara programatik mengambil daftar sumber yang saat ini diaktifkan dan tingkatan paketnya:',
  'subs.sources.api.free':
    'sumber yang dapat dikueri oleh kunci mana pun, termasuk kunci gratis.',
  'subs.sources.api.paid': 'sumber yang memerlukan kunci Pro.',
  'subs.sources.api.allFree':
    'jika true, setiap sumber yang diaktifkan tersedia untuk semua kunci dan paid kosong.',

  'subs.sources.scope.h3': 'Membatasi ke sebuah kunci',
  'subs.sources.scope.p1':
    'Sertakan API key Anda untuk mendapatkan sumber yang sebenarnya dapat digunakan oleh kunci tersebut:',
  'subs.sources.scope.p2':
    'Ini menambahkan kolom khusus kunci tanpa menggunakan permintaan dari kuota Anda:',
  'subs.sources.scope.available':
    'sumber yang dapat dikueri oleh kunci ini sekarang.',
  'subs.sources.scope.restricted':
    'sumber yang diaktifkan yang tidak dapat dikueri oleh kunci ini (upgrade ke Pro untuk membukanya).',
  'subs.sources.scope.keyType': 'free atau paid.',
  'subs.sources.scope.keyValid':
    'bernilai false jika kunci salah format atau tidak ditemukan, dan null jika kunci tidak dapat diverifikasi (dalam hal ini available dan restricted dihilangkan).',

  'subs.sources.details.h2': 'Detail Sumber',

  'subs.sources.opensubtitles.desc':
    'Database subtitle terbesar secara online. Mendukung film dan acara TV dalam berbagai bahasa. Menggunakan API REST OpenSubtitles resmi.',
  'subs.sources.opensubtitles.content': 'Film & acara TV',
  'subs.sources.opensubtitles.languages': 'Dukungan multibahasa yang ekstensif',
  'subs.sources.opensubtitles.formats': 'SRT, ASS, SSA, VTT, SUB, dan lainnya',

  'subs.sources.subdl.desc':
    'Situs subtitle berbasis komunitas dengan pilihan film dan acara TV yang luas.',
  'subs.sources.subdl.content': 'Film & acara TV',
  'subs.sources.subdl.languages': 'Dukungan multibahasa yang ekstensif',
  'subs.sources.subdl.formats': 'SRT, ASS, SSA, VTT, SUB, dan lainnya',

  'subs.sources.subf2m.desc':
    'Repositori subtitle besar dengan cakupan bahasa yang luas untuk film dan acara TV.',
  'subs.sources.subf2m.content': 'Film & acara TV',
  'subs.sources.subf2m.languages': 'Dukungan multibahasa yang ekstensif',
  'subs.sources.subf2m.formats': 'SRT, ASS, SSA, VTT, SUB, dan lainnya',

  'subs.sources.podnapisi.desc':
    'Salah satu database subtitle tertua. Koleksi yang terkurasi dengan baik mencakup film dan acara TV.',
  'subs.sources.podnapisi.content': 'Film & acara TV',
  'subs.sources.podnapisi.languages': 'Dukungan multibahasa yang ekstensif',
  'subs.sources.podnapisi.formats': 'SRT, ASS, SSA, VTT, SUB, dan lainnya',

  'subs.sources.animetosho.desc':
    'Mengambil lampiran subtitle anime langsung dari rilis torrent yang diindeks di AnimeTosho.',
  'subs.sources.animetosho.content': 'Anime (acara TV)',
  'subs.sources.animetosho.languages':
    'Bahasa Jepang, Inggris, dan lainnya tergantung rilis',
  'subs.sources.animetosho.formats': 'ASS, SRT, SSA, dan lainnya',
  'subs.sources.animetosho.note':
    'AnimeTosho dijadwalkan untuk ditutup pada Mei 2026.',

  'subs.sources.gestdown.desc':
    'Menyediakan subtitle untuk acara TV melalui API Gestdown dengan dukungan bahasa yang luas.',
  'subs.sources.gestdown.content': 'Acara TV saja',
  'subs.sources.gestdown.languages': 'Dukungan multibahasa yang ekstensif',
  'subs.sources.gestdown.formats': 'SRT, ASS, dan lainnya',

  'subs.sources.jimaku.desc':
    'Mengambil jimaku.cc, repositori file subtitle anime yang dikelola komunitas. Mencocokkan judul menggunakan TMDB API.',
  'subs.sources.jimaku.content': 'Anime (film & acara TV)',
  'subs.sources.jimaku.languages':
    'Terutama bahasa Jepang; juga Inggris, Mandarin, dan lainnya tergantung file yang tersedia',
  'subs.sources.jimaku.formats': 'SRT, ASS, SSA, VTT, SUB, dan lainnya',

  'subs.sources.kitsunekko.desc':
    'Mengambil daftar direktori dari kitsunekko.net, repositori subtitle anime khusus. Mencocokkan judul menggunakan TMDB API.',
  'subs.sources.kitsunekko.content': 'Anime (acara TV)',
  'subs.sources.kitsunekko.languages':
    'Direktori subtitle bahasa Inggris dan Jepang',
  'subs.sources.kitsunekko.formats': 'SRT, ASS, SSA, VTT, SUB, dan lainnya',

  'subs.sources.yify.desc':
    'Mengambil yifysubtitles.ch untuk subtitle yang dicocokkan berdasarkan IMDB ID. Hanya untuk film.',
  'subs.sources.yify.content': 'Hanya film (acara TV tidak didukung)',
  'subs.sources.yify.languages':
    'Dukungan multibahasa yang ekstensif (Albania, Arab, Inggris, Prancis, Spanyol, dan banyak lagi)',
  'subs.sources.yify.formats': 'SRT (dikirimkan di dalam arsip ZIP)',

  'subs.sources.ajatttools.desc':
    'Mengambil subtitle dari repositori GitHub Ajatt-Tools/kitsunekko-mirror. Diorganisasi berdasarkan jenis media. Mencocokkan judul menggunakan TMDB API.',
  'subs.sources.ajatttools.content': 'Anime & drama (acara TV dan film)',
  'subs.sources.ajatttools.languages':
    'Terutama bahasa Jepang; juga Inggris, Mandarin, dan lainnya',
  'subs.sources.ajatttools.formats': 'SRT, ASS, SSA, VTT, SUB, dan lainnya',

  'subs.sources.ai.desc':
    'Bukan scraper. SRT hasil terjemahan AI yang dibuat sesuai permintaan dari subtitle sumber terbaik yang tersedia. Lihat panduan Terjemahan AI untuk detail lengkap.',
  'subs.sources.ai.content': 'Apa pun yang dapat ditemukan SRT-nya oleh Wyzie',
  'subs.sources.ai.languages': '80+ bahasa target',
  'subs.sources.ai.formats': 'Hanya SRT',

  // Subs Package Page
  'subs.pkg.title': 'Menggunakan Paket NPM Wyzie',
  'subs.pkg.p1':
    'Paket NPM Wyzie Subs menyediakan antarmuka yang sederhana dan mudah digunakan untuk mencari dan mengambil subtitle.',
  'subs.pkg.install.h2': 'Instalasi',
  'subs.pkg.important':
    'API key diperlukan untuk semua permintaan. Dapatkan kunci gratis di [store.wyzie.io/redeem](https://store.wyzie.io/redeem) dan sertakan melalui parameter key. Lihat halaman API Keys untuk detailnya.',
  'subs.pkg.usage.h2': 'Penggunaan',
  'subs.pkg.params.h3': 'Parameter',
  'subs.pkg.params.note':
    'Untuk informasi lebih lanjut (atau jika Anda mengalami kesulitan), silakan kunjungi [beranda Wyzie Subs](https://sub.wyzie.io).',

  'subs.pkg.param.tmdb':
    'TMDB ID dari film atau acara TV (tmdb_id atau imdb_id wajib diisi).',
  'subs.pkg.param.imdb':
    'IMDB ID dari film atau acara TV (imdb_id atau tmdb_id wajib diisi).',
  'subs.pkg.param.format':
    'Format file yang akan dikembalikan (mis., srt, ass). Menerima daftar.',
  'subs.pkg.param.season': 'Nomor musim (memerlukan episode).',
  'subs.pkg.param.episode': 'Nomor episode (memerlukan season).',
  'subs.pkg.param.language':
    'Kode ISO 639-1 untuk bahasa subtitle. Menerima daftar.',
  'subs.pkg.param.encoding':
    'Filter pengkodean karakter (mis., utf-8, latin-1).',
  'subs.pkg.param.hi':
    'Boolean untuk subtitle bagi pengguna dengan gangguan pendengaran.',
  'subs.pkg.param.source':
    'Penyedia subtitle yang dikueri (all untuk setiap sumber yang diaktifkan).',
  'subs.pkg.param.release': 'Filter rilis/scene (menerima daftar).',
  'subs.pkg.param.filename':
    'Filter nama file; alias file dan fileName didukung.',
  'subs.pkg.param.origin': 'Filter asal konten (mis., WEB, BLURAY, DVD).',
  'subs.pkg.param.key':
    'API key Anda (wajib). Dapatkan satu secara gratis di store.wyzie.io/redeem.',
  'subs.pkg.param.refresh': 'Lewati cache dan ambil hasil terbaru dari sumber.',

  'subs.pkg.helpers':
    'Paket ini juga menyertakan helper TMDB ringan: searchTmdb, getTvDetails, dan getSeasonDetails untuk menemukan ID dengan cepat sebelum mengakses /search. Selain itu, getSources dapat digunakan untuk mengambil daftar sumber subtitle yang saat ini diaktifkan.',
  'subs.pkg.types.h3': 'Tipe',
  'subs.pkg.type.search': 'Semua parameter valid yang dikenali oleh API.',
  'subs.pkg.type.query':
    'Semua parameter (opsional dan wajib) yang tersedia untuk API wyzie-subs.',
  'subs.pkg.type.subtitle':
    'Semua nilai yang dikembalikan dari API beserta tipe masing-masing.',
  'subs.pkg.type.sources': 'Tipe respons dari endpoint /sources.',
  'subs.pkg.types.end':
    'Tipe kami sangat sederhana dan terdokumentasi dengan baik. Lihat file types.ts yang tertaut di repositori GitHub.',
  'subs.pkg.config.h3': 'Konfigurasi',
  'subs.pkg.config.p1':
    'Seorang pengguna bertanya di Github tentang hostname API yang dapat dikonfigurasi dan saya pikir itu ide yang bagus, jadi berikut cara penggunaannya. Terima kasih semuanya!',

  // Subs Direct Page
  'subs.direct.title': 'Mengambil Wyzie Subs Secara Langsung',
  'subs.direct.caution':
    'Saya sangat menyarankan menggunakan paket NPM karena lebih mudah dan lebih andal.',
  'subs.direct.p1':
    'Jika Anda memutuskan untuk tidak menggunakan paket NPM, mari kita mulai. Saya hanya akan membahas parameter API dan data yang dikembalikan oleh API. Bagaimana Anda meminta API sepenuhnya terserah Anda.',
  'subs.direct.important':
    'API key diperlukan untuk semua permintaan. Dapatkan kunci gratis di [store.wyzie.io/redeem](https://store.wyzie.io/redeem) dan sertakan sebagai &key=YOUR_KEY di setiap permintaan. Lihat halaman API Keys untuk detailnya.',

  'subs.direct.params.h3': 'Parameter',
  'subs.direct.param.id': 'TMDB atau IMDB ID dari acara atau film (wajib).',
  'subs.direct.param.seasonEpisode':
    'Season dan episode untuk pencarian TV. Keduanya harus ada bersamaan.',
  'subs.direct.param.language':
    'Filter bahasa (kode ISO 639-1). Beberapa nilai dipisahkan dengan koma.',
  'subs.direct.param.format':
    'Format subtitle yang dikembalikan. Beberapa nilai diperbolehkan.',
  'subs.direct.param.hi':
    'Apakah ingin memprioritaskan subtitle untuk pengguna dengan gangguan pendengaran.',
  'subs.direct.param.encoding': 'Filter pengkodean karakter.',
  'subs.direct.param.source':
    'Penyedia subtitle yang dikueri (all untuk mengkueri setiap sumber yang diaktifkan; default opensubtitles).',
  'subs.direct.param.release':
    'Filter rilis atau nama scene (dipisahkan koma).',
  'subs.direct.param.file':
    'Filter nama file (alias: file, filename, fileName).',
  'subs.direct.param.origin':
    'Filter asal konten, dipisahkan koma (mis., WEB, BLURAY, DVD).',
  'subs.direct.param.key':
    'API key Anda (wajib). Dapatkan satu secara gratis di store.wyzie.io/redeem.',
  'subs.direct.param.refresh':
    'Lewati cache dan ambil hasil terbaru. Gunakan saat sumber mungkin telah diperbarui.',
  'subs.direct.important.imdb':
    "Saat menggunakan IMDB ID, pastikan dua karakter pertama ('tt') disertakan di awal ID.",

  'subs.direct.data.h3': 'Data yang Dikembalikan',
  'subs.direct.data.id': 'ID dari file subtitle.',
  'subs.direct.data.url': 'URL ke file subtitle.',
  'subs.direct.data.flagUrl': 'URL ke bendera lokal bahasa.',
  'subs.direct.data.format': 'Format dari file subtitle.',
  'subs.direct.data.encoding': 'Pengkodean karakter dari file subtitle.',
  'subs.direct.data.display': 'Bahasa subtitle, dengan huruf kapital.',
  'subs.direct.data.language': 'Kode ISO 3166-2 dari bahasa.',
  'subs.direct.data.media': 'Nama media yang subtitle-nya tersedia.',
  'subs.direct.data.isHearingImpaired':
    'Boolean yang menunjukkan apakah subtitle dapat diakses oleh pengguna dengan gangguan pendengaran.',
  'subs.direct.data.source': 'Sumber dari mana subtitle diambil.',
  'subs.direct.data.release': 'Nama rilis utama.',
  'subs.direct.data.releases':
    'Nama rilis lain yang kompatibel dengan subtitle.',
  'subs.direct.data.fileName': 'Nama file asli jika tersedia.',
  'subs.direct.data.downloadCount':
    'Jumlah unduhan di platform sumber (jika tersedia).',
  'subs.direct.data.origin': 'Asal konten (mis., WEB, BluRay, DVD).',
  'subs.direct.data.matchedRelease':
    'Nilai rilis yang cocok dengan filter Anda (jika disediakan).',
  'subs.direct.data.matchedFilter':
    'Filter yang disediakan pengguna yang cocok (jika disediakan).',
  'subs.direct.data.ai':
    'true jika entri adalah subtitle hasil terjemahan AI, false untuk subtitle yang diambil secara normal. Gunakan sebagai filter sisi klien saat Anda hanya menginginkan salah satunya.',

  // Subs Translate Page
  'subs.translate.title': 'Terjemahan Subtitle AI',
  'subs.translate.important':
    'Terjemahan AI adalah **fitur Pro**. Setiap terjemahan membutuhkan **100 permintaan** dari saldo kunci Anda, dikenakan biaya pada cache hit maupun terjemahan baru. Kunci gratis tidak dapat menggunakannya.',
  'subs.translate.p1':
    'Wyzie dapat menerjemahkan subtitle apa pun ke 80+ bahasa secara langsung. Terjemahan dialirkan kembali saat model menghasilkannya, sehingga pemutaran dapat dimulai dalam satu atau dua detik alih-alih menunggu seluruh file selesai. Hasil di-cache selama 30 hari, sehingga orang kedua yang meminta terjemahan yang sama akan mendapatkannya secara instan.',

  'subs.translate.ways.h2': 'Dua Cara untuk Menggunakannya',
  'subs.translate.way1.h3': '1. Pilih Bahasa dari Respons Pencarian',
  'subs.translate.way1.p1':
    'Setiap respons /search kini menyertakan satu entri tambahan per bahasa yang didukung dengan "ai": true dan url yang mengarah ke /translate. Perlakukan baris AI seperti baris subtitle lainnya di UI Anda: saat pengguna mengkliknya, ambil URL tersebut.',
  'subs.translate.way1.filter':
    'Jika Anda ingin menyembunyikan baris AI dari UI Anda, filter keluar:',
  'subs.translate.way2.h3': '2. Panggil /translate Secara Langsung',

  'subs.translate.param.id': 'TMDB atau IMDB ID (wajib).',
  'subs.translate.param.target':
    'Bahasa target dengan nama Inggris lengkapnya (mis. Spanish, Japanese, Brazilian Portuguese) (wajib).',
  'subs.translate.param.seasonEpisode':
    'Untuk TV. Keduanya harus ada bersamaan.',
  'subs.translate.param.key':
    'API key Anda. Gunakan tk sebagai gantinya jika Anda mendapatkan URL dari /search.',
  'subs.translate.param.tk':
    'Token bertanda tangan yang dikembalikan oleh /search. Setara dengan key, tetapi tidak mengekspos kunci mentah.',

  'subs.translate.headers.p':
    'Isi respons adalah file SRT yang dialirkan sebagai text/plain; charset=utf-8. Header respons yang berguna:',
  'subs.translate.header.xcache':
    'HIT-REDIS jika disajikan dari cache, MISS jika dibuat baru.',
  'subs.translate.header.xsourcelang':
    'bahasa subtitle yang digunakan penerjemah sebagai input.',
  'subs.translate.header.xtargetlang': 'echo dari parameter target Anda.',
  'subs.translate.header.xsourceprovider':
    'scraper mana yang menyediakan subtitle sumber.',

  'subs.translate.how.h2': 'Cara Kerjanya',
  'subs.translate.how.step1':
    'Wyzie mencari sumber normal untuk subtitle SRT, lebih memilih bahasa Inggris jika tersedia.',
  'subs.translate.how.step2':
    'SRT dibagi menjadi potongan 50 cue dan diterjemahkan secara berurutan. Setiap potongan di-cache secara individual saat selesai.',
  'subs.translate.how.step3':
    'Output dialirkan kembali kepada Anda cue per cue. Pemutar yang menerima isi SRT streaming dapat mulai menampilkan baris pertama sebelum sisanya selesai.',
  'subs.translate.how.step4':
    'Terjemahan lengkap di-cache di Redis selama 30 hari, dikunci berdasarkan id, season, episode, dan target.',

  'subs.translate.languages.h2': 'Bahasa Target yang Didukung',
  'subs.translate.languages.p':
    '80+ bahasa termasuk semua bahasa utama Eropa, Asia, Afrika, dan Timur Tengah. Sertakan nama Inggrisnya (Spanish, bukan es). Daftar ini juga dikembalikan sebagai baris ai: true dalam respons /search mana pun, yang merupakan sumber kebenaran kanonik.',

  'subs.translate.limitations.h2': 'Keterbatasan',
  'subs.translate.limit1':
    'Terjemahan AI memerlukan sumber SRT. Judul yang setiap subtitle tersedianya adalah .ass, .vtt, atau format lain akan mengembalikan 404 No SRT found.',
  'subs.translate.limit2':
    'Kualitas terjemahan bergantung pada subtitle sumber. Sumber yang waktunya buruk atau salah ketik akan menghasilkan terjemahan yang waktunya buruk atau salah ketik.',
  'subs.translate.limit3':
    'Beberapa pengguna mungkin ingin sepenuhnya menghindari baris AI. Filter pada ai === false di klien Anda.',
  'subs.translate.limit4':
    'Terjemahan ditagih pada cache hit juga. Baik yang baru dibuat maupun yang disajikan dari cache 30 hari, setiap permintaan /translate membutuhkan 100 permintaan.',

  // Subs API Keys Page
  'subs.keys.title': 'API Keys',
  'subs.keys.p1':
    'Wyzie Subs memerlukan API key untuk semua permintaan. Tingkatan gratis mencakup sebagian besar kasus penggunaan; paket berbayar menangani penggunaan yang lebih berat.',

  'subs.keys.tiers.h2': 'Tingkatan',
  'subs.keys.tier.free': 'Gratis (Gmail diperlukan)',
  'subs.keys.tier.free.limit': '1.000 permintaan / hari UTC',
  'subs.keys.tier.pro': '$5 sekali bayar',
  'subs.keys.tier.pro.limit': '400.000 permintaan',
  'subs.keys.tier.topup': 'mulai dari $0,0625 / 5K',
  'subs.keys.tier.topup.limit': 'Ditambahkan ke saldo berbayar Anda',
  'subs.keys.tiers.end':
    'Pro dan top-up tidak kedaluwarsa. Lebih suka pembayaran berulang? Langganan $32/bulan memberikan 6.000.000 permintaan/bulan (hanya kartu). Lihat store.wyzie.io untuk harga lengkap dan dasbor.',

  'subs.keys.free.h2': 'Mendapatkan Kunci Gratis',
  'subs.keys.free.p':
    'Kunjungi [store.wyzie.io/redeem](https://store.wyzie.io/redeem):',
  'subs.keys.free.step1':
    'Selesaikan captcha Cloudflare Turnstile dengan cepat.',
  'subs.keys.free.step2':
    'Masukkan alamat Gmail (hanya Gmail yang diterima untuk tingkatan gratis).',
  'subs.keys.free.step3':
    'Masukkan kode 6 digit yang kami kirimkan melalui email.',
  'subs.keys.free.step4':
    'Anda akan menerima API key yang terlihat seperti wyzie-abc123...',
  'subs.keys.free.gmail':
    'Setiap alamat Gmail hanya dapat menukarkan satu kunci gratis. Sudah pernah memiliki kunci gratis yang terhubung ke email tersebut? Verifikasi ulang hanya akan mengembalikan kunci Anda yang sudah ada.',

  'subs.keys.pro.h2': 'Upgrade ke Pro',
  'subs.keys.pro.p1':
    'Kunjungi [store.wyzie.io](https://store.wyzie.io) dan checkout dengan email yang sama yang Anda gunakan untuk kunci gratis. Kunci wyzie-... Anda yang sudah ada akan di-upgrade langsung dengan tambahan 400K permintaan berbayar. Lebih suka pembayaran berulang? Sebagai gantinya, langganan $32/bulan menambahkan jatah bulanan 6.000.000 permintaan (hanya kartu).',
  'subs.keys.pro.p2':
    'Jika Anda checkout dengan email baru (tanpa kunci sebelumnya), kunci wyzie-... baru akan dibuat dan dikirimkan ke email Anda.',

  'subs.keys.protect.h2': 'Jaga Kunci Anda dari Sisi Klien',
  'subs.keys.protect.important':
    '**Jangan pernah menyematkan API key Anda dalam kode sisi klien.** JavaScript browser, aplikasi mobile, ekstensi browser, aplikasi desktop bergaya Electron, dan repositori Git publik semuanya dianggap sisi klien. Apa pun yang Anda kirimkan kepada pengguna akhir dapat diperiksa oleh mereka, dan kami telah melihat kasus nyata di mana pengguna menempelkan kunci mereka ke frontend situs streaming, hanya untuk kemudian pihak ketiga mengambil bundel JS dan menguras saldo permintaan dalam hitungan jam. Kuota yang dikonsumsi dengan cara ini tidak dapat dikembalikan.',
  'subs.keys.protect.p2':
    'Dua cara aman menggunakan kunci dari aplikasi klien:',
  'subs.keys.protect.option1':
    'Gunakan [Wyzie Worker](https://github.com/wyziedevs/wyzie-worker): proxy Cloudflare Worker gratis yang menyimpan kunci Anda di sisi server. Arahkan klien Anda ke URL Worker alih-alih sub.wyzie.io.',
  'subs.keys.protect.option2':
    'Jalankan proxy Anda sendiri: endpoint backend apa pun yang menambahkan kunci sebelum meneruskan ke sub.wyzie.io berfungsi. Lihat halaman Intro untuk contoh 10 baris.',
  'subs.keys.protect.devtools':
    'Jika kunci muncul di tab jaringan di DevTools, itu berarti sudah terekspos. Anggap sudah publik dan ganti dengan menghubungi dukungan melalui email.',

  'subs.keys.using.h2': 'Menggunakan Kunci Anda',
  'subs.keys.using.p': 'Tambahkan &key=YOUR_KEY ke setiap permintaan API:',
  'subs.keys.using.npm.h3': 'Paket NPM',

  'subs.keys.limit.h2': 'Mencapai Batas',
  'subs.keys.limit.free':
    '**Tingkatan gratis** habis -> API mengembalikan 429 dengan header X-RateLimit-Reset dan Retry-After. Penghitung harian direset pada tengah malam UTC.',
  'subs.keys.limit.paid':
    '**Saldo berbayar** habis -> API mengembalikan 402. Isi ulang di [store.wyzie.io/topup](https://store.wyzie.io/topup) atau aktifkan **auto top-up** di dasbor Anda untuk mengisi ulang secara otomatis saat saldo Anda melewati ambang batas yang Anda tentukan.',

  'subs.keys.faq.h2': 'FAQ',
  'subs.keys.faq.q1':
    'Saya kehilangan kunci saya. Bisakah saya mendapatkan yang baru?',
  'subs.keys.faq.a1':
    'Kunjungi [store.wyzie.io](https://store.wyzie.io) dan gunakan alur "forgot key" dengan email terdaftar Anda; kami akan mengirim ulang kunci Anda yang sudah ada.',
  'subs.keys.faq.q2': 'Bisakah saya menggunakan satu kunci di beberapa proyek?',
  'subs.keys.faq.a2':
    'Ya. Kunci Anda berfungsi di mana pun Anda memanggil API.',
  'subs.keys.faq.q3': 'Apakah kunci saya akan kedaluwarsa?',
  'subs.keys.faq.a3':
    'Tidak. Kunci gratis maupun berbayar keduanya tidak memiliki kedaluwarsa. Kunci gratis dibatasi per hari; saldo berbayar bertahan hingga Anda menggunakannya.',
  'subs.keys.faq.q4': 'Apakah auto top-up aman?',
  'subs.keys.faq.a4':
    'Anda menetapkan batas pengeluaran bulanan. Kami tidak pernah menagih melebihi itu, dan nonaktifkan dengan satu klik tersedia di setiap email konfirmasi beserta dasbor Anda.',

  // Proxy Intro Page
  'proxy.intro.title': 'Pengantar Wyzie Proxy',
  'proxy.intro.note':
    'Versi produksi Wyzie Subs tidak lagi menggunakan proxy ini, melainkan menggunakan [i6.shark](https://github.com/wyziedevs/i6.shark).',
  'proxy.intro.p1':
    'Wyzie Proxy adalah API proxy yang powerful yang memungkinkan Anda membuat permintaan ke situs web mana pun tanpa CORS atau pembatasan lainnya. Karena Wyzie Proxy dibuat dengan Nitro, ia dapat di-host di platform berikut: AWS Amplify, Azure, Cloudflare, Netlify, Stormkit, Vercel, Zeabur.',
  'proxy.intro.btn.hosting': 'Hosting',
  'proxy.intro.btn.check': 'Lihat Selengkapnya',

  // Proxy Hosting Page
  'proxy.hosting.title': 'Hosting Wyzie Proxy',
  'proxy.hosting.p1':
    'Membangun Wyzie Proxy lebih mudah dari bernapas, berkat Nitro. Pertama, clone repositori Wyzie Proxy menggunakan:',
  'proxy.hosting.p2': 'Kemudian, instal semua paket yang diperlukan dengan:',
  'proxy.hosting.p3':
    'Setelah semua paket terinstal, Anda dapat membangun proxy:',
  'proxy.hosting.p4':
    'Output akan dibuat di folder /.output/server. Jika Anda men-deploy ke Cloudflare Workers, salin dan tempelkan file index.mjs ke worker; selain itu, Anda dapat men-deploy file-file tersebut seperti biasa.',

  // i6.shark Intro Page
  'i6shark.intro.title': 'Pengantar i6.shark',
  'i6shark.intro.p1':
    'i6.shark adalah server proxy IPv6 yang memungkinkan Anda membuat permintaan HTTP dari alamat IPv6 yang dibuat secara acak dalam subnet /48. Ini adalah proxy yang saat ini menggerakkan Wyzie Subs dalam produksi.',
  'i6shark.intro.p2':
    'Subnet /48 memiliki 1.208.925.819.614.629.174.706.176 (1,2 x 10^24) alamat IPv6, sehingga hampir tidak mungkin untuk diblokir melalui pemblokiran IP tradisional. Menggunakan satu subnet berarti mereka yang benar-benar ingin memblokir Anda dapat memblokir alamat ASN Anda, jadi berhati-hatilah dengan hal tersebut.',
  'i6shark.intro.btn.hosting': 'Hosting',
  'i6shark.intro.btn.github': 'GitHub',

  'i6shark.intro.features.h2': 'Fitur',
  'i6shark.intro.feature1':
    '**Pembuatan IPv6 Acak**: Membuat alamat IPv6 acak dari prefiks /48 Anda untuk setiap permintaan',
  'i6shark.intro.feature2':
    '**Dukungan Metode HTTP Penuh**: GET, POST, PUT, DELETE, dan semua metode HTTP lainnya',
  'i6shark.intro.feature3':
    '**Autentikasi HMAC-SHA256**: Autentikasi API key yang aman menggunakan token berbasis user-agent',
  'i6shark.intro.feature4':
    '**Manajemen Pool IP Cerdas**: Rotasi IP otomatis dengan ukuran pool yang dapat dikonfigurasi. Manajemen siklus hidup IP yang cerdas. Penghitungan permintaan per IP. Pembersihan IP yang tidak digunakan berdasarkan ambang batas tidak aktif.',
  'i6shark.intro.feature5':
    '**Penanganan Permintaan Lanjutan**: Penerusan header kustom. Penghapusan header Cloudflare dan CDN. Dukungan untuk berbagai format parameter URL. Fallback opsional ke IP default sistem.',
  'i6shark.intro.feature6':
    '**Whitelist Host**: Daftar putih domain bawaan untuk keamanan (dapat dikonfigurasi dalam kode)',
  'i6shark.intro.feature7':
    '**Pemeliharaan Otomatis**: Pembersihan pool IP secara berkala. Validasi dan pembersihan subnet. Optimasi connection pooling dan keepalive.',
  'i6shark.intro.feature8':
    '**Performa Tinggi**: Penanganan permintaan bersamaan dengan buffer pooling. Timeout dan batas koneksi yang dapat dikonfigurasi. Manajemen alamat IPv6 yang efisien.',
  'i6shark.intro.feature9':
    '**Mode Debug**: Logging terperinci untuk pemecahan masalah dan pemantauan',

  'i6shark.intro.requirements.h2': 'Persyaratan',
  'i6shark.intro.req1': 'Go 1.20 atau lebih tinggi',
  'i6shark.intro.req2':
    'Sistem Linux/Unix dengan dukungan IPv6 (lebih disukai Ubuntu)',
  'i6shark.intro.req3':
    'Hak akses root (untuk binding port 80 dan manipulasi IPv6)',
  'i6shark.intro.req4': 'Alokasi subnet IPv6 /48 dari penyedia hosting Anda',

  'i6shark.intro.providers.h2': 'Penyedia Hosting',
  'i6shark.intro.providers.p1':
    'Penyedia berikut diketahui menawarkan subnet IPv6 /48:',

  // i6.shark Hosting Page
  'i6shark.hosting.title': 'Hosting i6.shark',
  'i6shark.hosting.p1':
    'Menyiapkan i6.shark memerlukan VPS dengan subnet IPv6 /48. Setelah dikonfigurasi, ia berjalan secara otonom dengan pemeliharaan minimal.',

  'i6shark.hosting.steps.h2': 'Langkah-langkah',
  'i6shark.hosting.step1': 'Clone repositori ke /opt/i6.shark:',
  'i6shark.hosting.step2': 'Konfigurasikan konstanta di src/consts.go:',
  'i6shark.hosting.step2.note':
    'Perbarui SharedSecret, IPv6Prefix, dan Interface agar sesuai dengan server Anda. Konstanta penyetelan lainnya memiliki default yang wajar dan biasanya tidak perlu diubah.',
  'i6shark.hosting.step3': 'Build aplikasinya:',
  'i6shark.hosting.step4': 'Buat layanan systemd:',
  'i6shark.hosting.step5': 'Aktifkan dan mulai layanan:',
  'i6shark.hosting.step5.check': 'Periksa statusnya:',
  'i6shark.hosting.post':
    'Server proxy sekarang akan berjalan secara otomatis saat boot dan memulai ulang sendiri jika mengalami crash.',

  'i6shark.hosting.daily.h2': 'Restart Harian (Opsional)',
  'i6shark.hosting.daily.p':
    'Tambahkan cron job untuk me-restart server setiap hari pada waktu acak:',

  'i6shark.hosting.auth.h2': 'Autentikasi API',
  'i6shark.hosting.auth.p':
    'Token API dibuat menggunakan HMAC-SHA256 dengan kunci rahasia bersama. Input untuk pembuatan kunci adalah header user-agent. Lihat fungsi validateAPIToken dalam kode sumber untuk detail implementasi.',
};

export default messages;
