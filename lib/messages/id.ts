const messages: Record<string, string> = {
  // Navigation
  'nav.language': 'Bahasa',

  // Index / Landing Page
  'index.subtitle':
    'Wyzie adalah seperangkat alat untuk mengambil subtitle dan segala sesuatu di antaranya.',
  'index.cta.start': 'Mulai',
  'index.cta.store': 'Lihat Selengkapnya',

  'index.card.keys.title': 'API Key Gratis',
  'index.card.keys.body':
    'Dapatkan API key gratis di store.wyzie.io/redeem dengan verifikasi email cepat (Gmail, Outlook, Yahoo, iCloud, Proton, dan penyedia besar lainnya). 1.000 permintaan/hari tanpa biaya. Paket berbayar tersedia untuk penggunaan lebih tinggi.',

  'index.card.ai.title': 'Terjemahan AI',
  'index.card.ai.body':
    'Terjemahkan subtitle apa pun ke 80+ bahasa sesuai permintaan. SRT dialirkan kembali secara berurutan seiring batch selesai, sehingga baris pertama tiba dengan cepat. Tersedia untuk kunci Pro.',

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
    'Wyzie Subs adalah API scraping subtitle dengan tingkatan gratis. Ada dua cara untuk membuat permintaan ke API: menggunakan paket NPM kami atau langsung mengambil API Wyzie itu sendiri. Saya merekomendasikan menggunakan paket kami, tetapi sebagian orang mungkin merasa tipenya merepotkan. Untuk menggunakan API, Anda harus terlebih dahulu membuat keputusan tersebut.',
  'subs.intro.note.ai':
    'Terjemahan AI telah aktif untuk kunci Pro. Judul apa pun, 80+ bahasa target, dialirkan kembali sesuai urutan subtitle seiring batch selesai.',
  'subs.intro.important.apikey':
    'API key diperlukan untuk semua permintaan. Dapatkan kunci gratis di [store.wyzie.io/redeem](https://store.wyzie.io/redeem) (verifikasi email, 1.000 permintaan/hari). Untuk penggunaan lebih tinggi, tersedia [paket Pro dan top-up](https://store.wyzie.io). Lihat halaman API Keys untuk detailnya.',
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
    'Wyzie Worker adalah proxy Cloudflare Worker ringan yang menyuntikkan API key Anda di sisi server. Deploy ke Cloudflare Workers dan atur dua secret: `NITRO_API_TOKEN` (API key Wyzie Anda) dan `NITRO_WORKER_KEY` (secret yang Anda pilih sendiri). Setiap permintaan ke worker harus mengirim `Authorization: Bearer <NITRO_WORKER_KEY>`; tanpanya worker menjawab dengan 401, dan jika `NITRO_WORKER_KEY` tidak diatur, worker menolak setiap permintaan dengan 503. Kunci worker juga harus tetap berada di sisi server, jadi panggil worker dari backend Anda sendiri, jangan pernah dari kode browser atau aplikasi. Worker meneruskan setiap permintaan ke sub.wyzie.io dengan API key Anda terlampir.',
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
    'Sumber default adalah charlie jika tidak ditentukan',
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
    'Bukan scraper. SRT hasil terjemahan AI yang dibuat sesuai permintaan dari subtitle sumber terbaik yang tersedia. Hanya untuk kunci Pro. Lihat panduan Terjemahan AI untuk detail lengkap.',
  'subs.sources.ai.content':
    'Apa pun yang subtitle teksnya dapat ditemukan oleh Wyzie',
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
    'Jika true, hanya mengembalikan subtitle untuk pengguna dengan gangguan pendengaran. Sumber yang tidak memberi tanda gangguan pendengaran pada subtitle-nya tidak mengembalikan apa pun.',
  'subs.pkg.param.source':
    'Penyedia subtitle yang dikueri berdasarkan nama kode (all untuk setiap sumber aktif yang dapat digunakan kunci Anda; default charlie).',
  'subs.pkg.param.release': 'Filter rilis/scene (menerima daftar).',
  'subs.pkg.param.filename':
    'Filter nama file; alias file dan fileName didukung.',
  'subs.pkg.param.origin': 'Filter asal konten (mis., WEB, BLURAY, DVD).',
  'subs.pkg.param.key':
    'API key Anda (wajib). Dapatkan satu secara gratis di store.wyzie.io/redeem.',
  'subs.pkg.param.refresh': 'Lewati cache dan ambil hasil terbaru dari sumber.',

  'subs.pkg.helpers':
    'Paket ini juga menyertakan helper TMDB ringan: searchTmdb, getTvDetails, dan getSeasonDetails untuk menemukan ID dengan cepat sebelum mengakses /search. getSources mengembalikan nama kode sumber yang sedang aktif (sumber yang dijeda oleh health check-nya tidak disertakan hingga pulih kembali), dan getSourcesInfo mengembalikan respons /sources lengkap beserta tingkatannya, serta, jika diberi kunci, sumber mana saja yang dapat digunakan kunci tersebut. withDownloadOptions menambahkan opsi unduhan (output WebVTT, perbaikan waktu, bahasa kedua, dan lainnya) ke url sebuah hasil.',
  'subs.pkg.types.h3': 'Tipe',
  'subs.pkg.type.search': 'Semua parameter valid yang dikenali oleh API.',
  'subs.pkg.type.query':
    'Semua parameter (opsional dan wajib) yang tersedia untuk API wyzie-subs.',
  'subs.pkg.type.subtitle':
    'Semua nilai yang dikembalikan dari API beserta tipe masing-masing.',
  'subs.pkg.type.sources': 'Tipe respons dari endpoint /sources.',
  'subs.pkg.type.download':
    'Opsi untuk withDownloadOptions: to, offset, fps, plain, dan (Pro) sdh, clean, dual.',
  'subs.pkg.type.sync':
    'Input dan hasil dari syncSubtitle (Wyzie Synced, kunci Pro): subtitle yang mana (sebuah hasil, url-nya, atau tmdb_id/imdb_id beserta language), speech yang ditemukan detectSpeech atau file media, serta tautan unduhan hasil sinkronisasi beserta offset, fps, dan confidence-nya. Lihat [Wyzie Synced](/subs/usage/synced).',
  'subs.pkg.types.end':
    'Tipe kami sangat sederhana dan terdokumentasi dengan baik. Lihat [src/types.ts](https://github.com/wyziedevs/wyzie-lib/blob/main/src/types.ts) di repositori wyzie-lib.',
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
    'Jika true, hanya mengembalikan subtitle untuk pengguna dengan gangguan pendengaran (ini filter, bukan preferensi). Sumber yang tidak memberi tanda gangguan pendengaran pada subtitle-nya tidak mengembalikan apa pun.',
  'subs.direct.param.encoding': 'Filter pengkodean karakter.',
  'subs.direct.param.source':
    'Penyedia subtitle yang dikueri (all untuk mengkueri setiap sumber yang dapat digunakan kunci Anda; default charlie).',
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
  'subs.direct.param.page':
    'Halaman yang dikembalikan, dimulai dari 1. Hanya digunakan bersama limit.',
  'subs.direct.param.limit':
    'Hasil per halaman (1 hingga 200). Tanpa parameter ini, semua hasil dikembalikan dalam satu respons.',
  'subs.direct.important.imdb':
    "Saat menggunakan IMDB ID, pastikan dua karakter pertama ('tt') disertakan di awal ID.",

  'subs.direct.data.h3': 'Data yang Dikembalikan',
  'subs.direct.data.id': 'ID dari file subtitle.',
  'subs.direct.data.url':
    'Tautan unduhan di https://sub.wyzie.io/c/... yang membawa parameter tok terenkripsi. Setiap unduhan membutuhkan 1 permintaan; lihat bagian Mengunduh Subtitle di bawah.',
  'subs.direct.data.flagUrl': 'URL ke bendera lokal bahasa.',
  'subs.direct.data.format': 'Format dari file subtitle.',
  'subs.direct.data.encoding': 'Pengkodean karakter dari file subtitle.',
  'subs.direct.data.display': 'Bahasa subtitle, dengan huruf kapital.',
  'subs.direct.data.language': 'Kode ISO 639-1 dari bahasa.',
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
  'subs.direct.download.p':
    'Setiap url dalam respons /search mengarah ke https://sub.wyzie.io/c/... dan membawa parameter query tok. tok dienkripsi, sehingga tidak mengungkapkan API key Anda, dan tetap berlaku selama 60 hari. Gunakan URL apa adanya. Satu pencarian membutuhkan 1 permintaan dan setiap unduhan 1 permintaan lagi, yang ditagihkan ke kunci yang menjalankan pencarian. Jika kunci tersebut tidak dapat membayar sebuah unduhan, tautan akan ditolak:',
  'subs.direct.dl.p':
    'Tambahkan opsi ini ke URL unduhan untuk mengubah apa yang dikembalikannya. Opsi ini berlaku di setiap unduhan, baik dari cache maupun tidak, dan tidak dikenakan biaya tambahan (kecuali dual, di bawah). Header respons X-Subtitle-Transforms mencantumkan apa saja yang diterapkan, beserta jumlahnya.',
  'subs.direct.dl.param.to':
    'Format output: `srt` atau `vtt`. `vtt` dapat langsung diputar di elemen `<track>` browser. Default: format asli file.',
  'subs.direct.dl.param.offset':
    'Geser setiap baris sebanyak detik ini (nilai negatif berarti lebih awal).',
  'subs.direct.dl.param.fps':
    'Perbaiki pergeseran bertahap dari subtitle yang dibuat untuk rilis lain: `SUBTITLE_FPS:VIDEO_FPS`, mis. `25:23.976` untuk subtitle PAL pada video dengan frame rate film.',
  'subs.direct.dl.param.plain':
    'Baris polos dan rapi: kode gaya seperti `{\\an8}` dan `<font>` dihapus, baris kosong dan berulang dibuang, baris diurutkan menurut waktu, dan tumpang tindih kecil dipangkas.',
  'subs.direct.dl.param.sdh':
    'Hapus teks untuk pengguna dengan gangguan pendengaran: `[DOOR SLAMS]`, `(sighs)`, label pembicara `JOHN:`, dan lirik ♪.',
  'subs.direct.dl.param.clean':
    'Sensor kata-kata kasar yang berat, dengan mempertahankan huruf pertamanya (`f***`). Hanya untuk file bahasa Inggris.',
  'subs.direct.dl.param.dual':
    'Tambahkan bahasa kedua (kode ISO 639-1) di bawah setiap baris, diselaraskan dengan waktu file ini. Membutuhkan 1 permintaan tambahan, hanya jika ditemukan kecocokan; jika tidak, file dikembalikan sendiri dengan `X-Dual: unavailable`.',
  'subs.direct.dl.after':
    'Opsi dapat digabungkan, mis. `&to=vtt&sdh=strip&offset=-1.5`. Tautan sudah membawa `format`, `encoding`, `id`, dan (untuk episode) `season` serta `episode`: biarkan apa adanya. `autoUnzip=false` mengembalikan arsip apa adanya.',
  'subs.direct.headers.p':
    'Setiap respons /search menyertakan header X-Total-Count yang berisi jumlah total hasil. Jika Anda menyertakan limit, respons juga menyertakan:',
  'subs.direct.header.xpage': 'halaman yang dikembalikan.',
  'subs.direct.header.xperpage': 'limit yang berlaku.',
  'subs.direct.header.xtotalpages': 'jumlah total halaman.',
  'subs.direct.headers.rate':
    'Respons juga membawa X-RateLimit-Limit, X-RateLimit-Remaining, dan X-RateLimit-Reset. Anggap nilainya sebagai perkiraan: penggunaan diperhitungkan ke penagihan dalam batch kecil, sehingga nilainya bisa sedikit tertinggal dari penggunaan Anda yang sebenarnya.',

  // Subs Translate Page
  'subs.translate.title': 'Terjemahan Subtitle AI',
  'subs.translate.important':
    'Terjemahan AI adalah **fitur Pro**; kunci gratis mendapatkan 403 Upgrade required. Setiap panggilan membutuhkan **100 permintaan** dari saldo kunci Anda, termasuk cache hit. Jika panggilan gagal sebelum menghasilkan output apa pun (tidak ada subtitle yang ditemukan, pencarian atau unduhan gagal, atau server sedang sibuk), 100 permintaan tersebut dikembalikan secara otomatis.',
  'subs.translate.p1':
    'Wyzie dapat menerjemahkan subtitle apa pun ke 80+ bahasa secara langsung. SRT hasil terjemahan dialirkan kembali secara berurutan seiring batch selesai, sehingga cue pertama tiba dengan cepat alih-alih setelah seluruh file selesai. Terjemahan lengkap di-cache selama 30 hari, sehingga permintaan berikutnya untuk judul, episode, dan bahasa target yang sama disajikan dari cache.',

  'subs.translate.ways.h2': 'Dua Cara untuk Menggunakannya',
  'subs.translate.way1.h3': '1. Pilih Bahasa dari Respons Pencarian',
  'subs.translate.way1.p1':
    'Untuk kunci Pro, setiap respons /search juga menyertakan baris terjemahan AI dengan "ai": true dan url yang mengarah ke /translate: satu per bahasa yang didukung, atau hanya bahasa dalam filter language= Anda. Kunci gratis tidak pernah mendapatkan baris ini. Perlakukan baris AI seperti baris subtitle lainnya di UI Anda: saat pengguna mengkliknya, ambil URL tersebut.',
  'subs.translate.way1.filter':
    'Jika Anda ingin menyembunyikan baris AI dari UI Anda, filter keluar:',
  'subs.translate.way2.h3': '2. Panggil /translate Secara Langsung',

  'subs.translate.param.id': 'TMDB atau IMDB ID (wajib).',
  'subs.translate.param.target':
    'Bahasa target (wajib): nama dari daftar yang didukung (mis. Spanish, Japanese, Portuguese (Brazil)) atau kodenya (mis. es, ja, pt-BR).',
  'subs.translate.param.seasonEpisode':
    'Untuk TV. Keduanya harus ada bersamaan.',
  'subs.translate.param.key':
    'API key Anda. Gunakan tk sebagai gantinya jika Anda mendapatkan URL dari /search.',
  'subs.translate.param.tk':
    'Token terenkripsi dari URL baris AI di /search. Berfungsi seperti key, tidak mengungkapkan API key Anda, dan tetap berlaku selama 60 hari.',

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
    'Wyzie mencari sumber normal untuk subtitle teks, lebih memilih SRT bahasa Inggris jika tersedia. File VTT, ASS, SSA, dan SUB dikonversi ke SRT terlebih dahulu.',
  'subs.translate.how.step2':
    'SRT dibagi menjadi batch berukuran hingga sekitar 3.800 karakter dan diterjemahkan dengan Google Translate, 4 batch sekaligus.',
  'subs.translate.how.step3':
    'Output dialirkan kembali sesuai urutan SRT seiring batch selesai, sehingga cue pertama tiba dengan cepat. Pemutar yang menerima isi SRT streaming dapat mulai menampilkan baris pertama sebelum sisanya selesai.',
  'subs.translate.how.step4':
    'Terjemahan lengkap di-cache di Redis selama 30 hari, dikunci berdasarkan id, season, episode, dan target.',

  'subs.translate.languages.h2': 'Bahasa Target yang Didukung',
  'subs.translate.languages.p':
    '80+ bahasa termasuk semua bahasa utama Eropa, Asia, Afrika, dan Timur Tengah. Sertakan nama dari daftar (Spanish, Portuguese (Brazil)) atau kodenya (es, pt-BR). Untuk kunci Pro, daftar lengkapnya juga dikembalikan sebagai baris ai: true dalam respons /search mana pun tanpa filter language=, yang merupakan sumber kebenaran kanonik.',

  'subs.translate.limitations.h2': 'Keterbatasan',
  'subs.translate.limit1':
    'Terjemahan AI memerlukan subtitle teks sebagai titik awal. Sumber VTT, ASS, SSA, dan SUB dikonversi ke SRT terlebih dahulu; jika tidak ada subtitle teks, panggilan mengembalikan 404 No subtitle found dan 100 permintaan tersebut dikembalikan ke saldo Anda.',
  'subs.translate.limit2':
    'Kualitas terjemahan bergantung pada subtitle sumber. Sumber yang waktunya buruk atau salah ketik akan menghasilkan terjemahan yang waktunya buruk atau salah ketik.',
  'subs.translate.limit3':
    'Beberapa pengguna mungkin ingin sepenuhnya menghindari baris AI. Filter pada ai === false di klien Anda.',
  'subs.translate.limit4':
    'Terjemahan ditagih pada cache hit juga. Baik yang baru dibuat maupun yang disajikan dari cache 30 hari, setiap panggilan /translate membutuhkan 100 permintaan. Biaya hanya dikembalikan untuk panggilan yang gagal sebelum menghasilkan output apa pun.',

  // Subs Synced Page
  'subs.synced.title': 'Wyzie Synced',
  'subs.synced.important':
    'Wyzie Synced adalah **fitur Pro**: kunci gratis mendapatkan 403 Paid feature. Setiap sinkronisasi yang berhasil membutuhkan **1 permintaan**; sinkronisasi yang tidak menemukan kecocokan tidak dikenakan biaya. Mengunduh tautan hasil sinkronisasi kemudian dihitung seperti unduhan lainnya.',
  'subs.synced.p1':
    'Subtitle yang ditemukan online sering kali diatur waktunya untuk rilis yang berbeda dari video yang Anda miliki: subtitle dimulai beberapa detik terlalu awal atau terlambat, atau makin bergeser seiring film berjalan karena rilis tersebut berjalan pada frame rate yang berbeda. Wyzie Synced mendengarkan audio salinan Anda, menemukan bagian di mana orang berbicara, lalu menghitung offset dan perbaikan frame rate yang menyelaraskan subtitle dengannya. Anda mendapatkan tautan unduhan biasa dengan perbaikan yang sudah diterapkan (melalui [opsi unduhan](/subs/usage/direct#download-options) offset dan fps).',
  'subs.synced.web.p':
    'Cara termudah: buka [sub.wyzie.io/synced](https://sub.wyzie.io/synced), masukkan kunci Pro Anda, pilih file video dan judulnya, lalu unduh subtitle yang sudah disinkronkan. Audio dianalisis di browser Anda, sehingga video tidak pernah diunggah: hanya waktu ucapan yang dikirim. MKV, MP4, AVI, dan sebagian besar format lainnya didukung, termasuk audio AC3, E-AC3, dan DTS.',
  'subs.synced.api.p':
    'Kirim subtitle yang Anda inginkan (tautan unduhan, atau judul agar Wyzie memilih yang paling cocok) beserta audionya: baik waktu ucapan yang Anda deteksi sendiri, maupun file audio/video itu sendiri.',
  'subs.synced.param.url':
    'Tautan unduhan dari /search (https://sub.wyzie.io/c/…). Opsi unduhan lain di dalamnya (to, sdh, …) tetap dipertahankan pada tautan hasil sinkronisasi.',
  'subs.synced.param.id':
    'Sebagai pengganti url: TMDB atau IMDB ID. Wyzie mencoba 5 subtitle teks teratas dalam bahasa tersebut dan mengembalikan yang paling cocok dengan audio Anda.',
  'subs.synced.param.language':
    'Dengan id: kode ISO 639-1 untuk bahasa subtitle (wajib).',
  'subs.synced.param.seasonEpisode':
    'Dengan id, untuk TV. Keduanya harus ada bersamaan.',
  'subs.synced.param.key':
    'API key Pro Anda. Tanpa ini, kunci di balik tok pada url yang digunakan; tautan dari halaman unduhan tanpa kunci memerlukan key.',
  'subs.synced.param.speech':
    'Bagian di mana orang berbicara: [[start, end], …] dalam detik, dari detektor aktivitas suara apa pun (detectSpeech dari wyzie-lib, Silero VAD, webrtcvad). Film berdurasi 2 jam kira-kira berisi 2.000 segmen, sekitar 40 KB JSON.',
  'subs.synced.param.media':
    'Atau file audio/video itu sendiri: sebagai body permintaan mentah (dengan kolom lainnya di query string), atau sebagai kolom multipart media. Maksimal 95 MB, jadi untuk film penuh, unggah trek audionya saja.',
  'subs.synced.fields.note':
    'Kolom dikirim dalam body JSON, form multipart, atau query string (dengan body media mentah).',
  'subs.synced.response.p': 'Respons 200 berupa JSON:',
  'subs.synced.field.url':
    'tautan unduhan subtitle dengan perbaikan waktu (offset, fps) dan tok baru untuk kunci Anda. Gunakan seperti url /search lainnya: setiap unduhan membutuhkan 1 permintaan.',
  'subs.synced.field.offset':
    'detik yang ditambahkan ke setiap baris setelah perbaikan frame rate (nilai negatif berarti lebih awal).',
  'subs.synced.field.fps':
    'perbaikan frame rate dalam bentuk SUBTITLE_FPS:VIDEO_FPS (mis. "25:23.976"), atau null jika tidak diperlukan.',
  'subs.synced.field.confidence':
    '0 hingga 1: seberapa jelas waktu ini mengungguli semua kemungkinan lainnya. Apa pun yang dikembalikan sudah lolos uji kecocokan; makin tinggi, makin pasti.',
  'subs.synced.field.inSync':
    'true jika subtitle sudah cocok dengan salinan Anda.',
  'subs.synced.field.subtitle':
    'subtitle mana yang digunakan (release, fileName, format, source, …). Dengan url, hanya format-nya.',
  'subs.synced.errors.p':
    'Error berupa JSON dengan message dan details. Sinkronisasi yang ditolak atau gagal tidak dikenakan biaya.',
  'subs.synced.error.400':
    'Kolom hilang atau tidak valid: tidak ada subtitle, tidak ada audio, atau speech yang bukan berupa pasangan [start, end].',
  'subs.synced.error.401':
    'Tidak ada kunci, atau tautan unduhan pada url tidak valid atau sudah kedaluwarsa.',
  'subs.synced.error.403':
    'Kunci tersebut gratis (Wyzie Synced memerlukan Pro), tidak valid, atau sedang ditangguhkan.',
  'subs.synced.error.404':
    'Tidak ada subtitle teks dalam bahasa tersebut untuk judul ini.',
  'subs.synced.error.413':
    'File media lebih dari 95 MB. Unggah trek audionya saja, atau kirim speech.',
  'subs.synced.error.422':
    'Subtitle tidak selaras dengan audio pada offset atau frame rate mana pun (kemungkinan versi atau episode lain), audio terlalu sedikit mengandung ucapan, atau file tidak dapat didekode.',
  'subs.synced.error.429':
    'Kunci tidak dapat membayar permintaan ini, sama seperti panggilan lainnya.',
  'subs.synced.error.503':
    'Sedang sibuk mendekode unggahan lain, atau pencarian sementara tidak tersedia. Coba lagi sebentar lagi, atau kirim speech.',
  'subs.synced.lib.p':
    'wyzie-lib memiliki detectSpeech (detektor yang sama dengan yang dijalankan situs di browser Anda) dan syncSubtitle:',
  'subs.synced.how.step1':
    'Ucapan: audio didekode menjadi 8 kHz mono (hanya kanal tengah untuk mix 5.1 dan 7.1, tempat dialog berada), dan detektor aktivitas suara menandai bagian di mana orang berbicara: suara keras dalam rentang frekuensi ucapan yang naik turun mengikuti suku kata.',
  'subs.synced.how.step2':
    'Penyelarasan: waktu tampil subtitle di layar dikorelasikan silang dengan ucapan tersebut pada setiap offset dalam rentang ±10 menit, untuk ketidakcocokan frame rate yang umum (25 vs 23,976, 25 vs 24, 24 vs 23,976 fps).',
  'subs.synced.how.step3':
    'Penyempurnaan: waktu terbaik disempurnakan hingga ketelitian 10 ms dengan menyelaraskan awal baris dengan awal ucapan.',
  'subs.synced.how.step4':
    "Suatu waktu hanya dikembalikan jika jauh mengungguli semua offset lainnya, sehingga subtitle untuk versi atau episode lain mendapatkan 422 Couldn't sync alih-alih pergeseran yang salah.",
  'subs.synced.limit1':
    'Wyzie Synced memperbaiki offset yang konstan dan perbedaan frame rate. Subtitle untuk versi yang berbeda (ada adegan yang ditambahkan atau hilang) tidak dapat diperbaiki dengan satu pergeseran, sehingga ditolak.',
  'subs.synced.limit2':
    'Fitur ini membutuhkan ucapan: film dengan sedikit dialog, atau audio yang sebagian besar berisi musik, mungkin tidak dapat disinkronkan.',
  'subs.synced.limit3': 'Offset hingga ±10 menit dapat ditemukan.',

  // Subs API Keys Page
  'subs.keys.title': 'API Keys',
  'subs.keys.p1':
    'Wyzie Subs memerlukan API key untuk semua permintaan. Tingkatan gratis mencakup sebagian besar kasus penggunaan; paket berbayar menangani penggunaan yang lebih berat.',

  'subs.keys.tiers.h2': 'Tingkatan',
  'subs.keys.tier.free': 'Gratis (verifikasi email)',
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
    'Masukkan alamat dari penyedia email pribadi besar (Gmail, Outlook/Hotmail, Yahoo, iCloud, AOL, Proton, dan lainnya). Domain email sekali pakai ditolak.',
  'subs.keys.free.step3':
    'Masukkan kode 6 digit yang kami kirimkan melalui email.',
  'subs.keys.free.step4':
    'Anda akan menerima API key yang terlihat seperti wyzie-abc123...',
  'subs.keys.free.gmail':
    'Setiap alamat email dan setiap jaringan hanya dapat mengklaim satu kunci gratis; permintaan kedua mengembalikan 409. Kehilangan kunci Anda? Gunakan "Forgot key" di [dasbor](https://store.wyzie.io/dashboard) agar kunci Anda dikirim ulang.',

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
    'Gunakan [Wyzie Worker](https://github.com/wyziedevs/wyzie-worker): proxy Cloudflare Worker gratis yang menyimpan API key Anda sebagai secret `NITRO_API_TOKEN`. Setiap panggilan ke worker tersebut harus mengirim `Authorization: Bearer <NITRO_WORKER_KEY>`, secret kedua yang Anda tetapkan, jadi arahkan klien Anda melalui backend Anda sendiri dan simpan juga kunci worker di sisi server.',
  'subs.keys.protect.option2':
    'Jalankan proxy Anda sendiri: endpoint backend apa pun yang menambahkan kunci sebelum meneruskan ke sub.wyzie.io berfungsi. Lihat halaman Intro untuk contoh 10 baris.',
  'subs.keys.protect.devtools':
    'Jika kunci muncul di tab jaringan di DevTools, itu berarti sudah terekspos. Anggap sudah publik dan ganti melalui [dasbor](https://store.wyzie.io/dashboard) Anda.',

  'subs.keys.using.h2': 'Menggunakan Kunci Anda',
  'subs.keys.using.p': 'Tambahkan &key=YOUR_KEY ke setiap permintaan API:',
  'subs.keys.using.npm.h3': 'Paket NPM',

  'subs.keys.limit.h2': 'Mencapai Batas',
  'subs.keys.limit.p':
    'Satu pencarian membutuhkan 1 permintaan dan setiap unduhan subtitle membutuhkan 1 permintaan, jadi mencari sekali lalu mengunduh satu file menggunakan 2. Terjemahan AI membutuhkan 100 permintaan per panggilan.',
  'subs.keys.limit.free':
    '**Tingkatan gratis** habis -> pencarian dan tautan unduhan mengembalikan 429 Daily request limit reached, dengan reset_at di dalam JSON dan header Retry-After. Batas harian 1.000 permintaan direset pada tengah malam UTC.',
  'subs.keys.limit.paid':
    '**Saldo berbayar** habis -> pencarian dan tautan unduhan mengembalikan 402 dengan tautan top-up di dalam JSON. Isi ulang di [store.wyzie.io/topup](https://store.wyzie.io/topup) atau aktifkan **auto top-up** di dasbor Anda untuk mengisi ulang secara otomatis saat saldo Anda melewati ambang batas yang Anda tentukan.',
  'subs.keys.hold.p1':
    'Kunci yang mengirim volume sangat tinggi, sebagian besar dari IP datacenter atau hosting, dijeda secara otomatis. Kunci yang dijeda mendapatkan 403 Key on hold pada setiap permintaan, dengan tautan pemulihan (https://store.wyzie.io/verify) dan tautan dukungan (https://store.wyzie.io/contact) di dalam JSON.',
  'subs.keys.hold.p2':
    'Untuk segera memulihkan kunci, verifikasi situs web tempat Anda menggunakannya di [store.wyzie.io/verify](https://store.wyzie.io/verify) dengan record DNS TXT atau meta tag. Kunci dengan situs terverifikasi tidak akan pernah dijeda otomatis lagi, sehingga situs yang ramai dapat melakukan verifikasi sebelum sempat dijeda.',
  'subs.keys.hold.p3':
    'Tidak punya situs web, misalnya layanan backend atau aplikasi? [Hubungi dukungan](https://store.wyzie.io/contact) untuk memulihkan kunci Anda.',

  'subs.keys.files.h2': 'Apa Saja Isi File',
  'subs.keys.files.adfilter':
    '**Pemfilteran iklan** – setiap subtitle yang disajikan melalui sub.wyzie.io dibersihkan dari cue iklan penyedia (banner OpenSubtitles, promosi judi, baris "watch free at ..."). Cue SRT diberi nomor ulang sehingga tidak ada yang terlewat. Setiap penyedia, termasuk OpenSubtitles, disajikan melalui sub.wyzie.io sehingga filter berlaku untuk semuanya.',
  'subs.keys.files.promo':
    '**Kunci gratis dan dev** mendapatkan satu cue singkat di bagian paling awal setiap file (0–6 s) yang mengarah ke [store.wyzie.io](https://store.wyzie.io). Kunci berbayar menerima file bersih tanpa cue.',

  'subs.keys.faq.h2': 'FAQ',
  'subs.keys.faq.q1':
    'Saya kehilangan kunci saya. Bisakah saya mendapatkan yang baru?',
  'subs.keys.faq.a1':
    'Buka [dasbor](https://store.wyzie.io/dashboard) dan gunakan "Forgot key" dengan email terdaftar Anda; kami akan mengirim ulang kunci Anda yang sudah ada. Jika menurut Anda kunci tersebut bocor, sebaiknya ganti kunci melalui dasbor.',
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
  'i6shark.intro.req1': 'Go 1.22 atau lebih tinggi',
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

  // Plugins
  'plugins.common.required': 'Wajib',

  'plugins.index.intro':
    'Wyzie Subs terhubung langsung ke aplikasi media yang sudah Anda gunakan. Setiap plugin berkomunikasi dengan endpoint `https://sub.wyzie.io/search` yang sama dan memerlukan **Wyzie API key** gratis. Dapatkan satu di [store.wyzie.io](https://store.wyzie.io/#plans).',
  'plugins.index.tbl.stremio.for':
    'Menonton di Stremio pada desktop, ponsel, atau TV',
  'plugins.index.tbl.stremio.install':
    'Add-on terhosting: tempel kunci Anda, klik Install',
  'plugins.index.tbl.bazarr.for':
    'Pustaka Plex, Jellyfin, Emby, Sonarr, Radarr',
  'plugins.index.tbl.bazarr.install':
    'Penyedia siap-pakai untuk instansi Bazarr Anda',
  'plugins.index.tbl.kodi.for': 'Kodi 19+, LibreELEC, CoreELEC',
  'plugins.index.tbl.kodi.install': 'Instal dari zip atau repositori Wyzie',
  'plugins.index.use.stremio':
    'Gunakan **Stremio** jika Anda menonton di dalam aplikasi Stremio.',
  'plugins.index.use.bazarr':
    'Gunakan **Bazarr** jika Anda menjalankan Plex, Jellyfin, atau Emby. Bazarr mengunduh berkas subtitle ke disk dan server media Anda mengambilnya secara otomatis. Ini juga merupakan jalur yang direkomendasikan untuk Plex dan Jellyfin; tidak ada plugin native terpisah.',
  'plugins.index.use.kodi':
    'Gunakan **Kodi** untuk layanan subtitle native Kodi pada Android TV, Raspberry Pi, atau PC home theatre.',
  'plugins.index.shared.sources':
    '**Sumber:** setiap sumber yang dapat digunakan kunci Anda (`source=all`): charlie dan lima pada kunci gratis, ketujuh sumber pada kunci Pro.',
  'plugins.index.shared.matching':
    '**Pencocokan:** Wyzie didorong oleh ID IMDB dan TMDB plus musim dan episode, sehingga pencocokan akurat untuk film maupun serial.',
  'plugins.index.shared.quota':
    '**Kuota:** ketika kunci Anda habis, plugin menampilkan pesan ramah yang menautkan ke [store.wyzie.io](https://store.wyzie.io) alih-alih gagal secara diam-diam. Isi ulang atau berlangganan dan Anda kembali beraksi.',
  'plugins.index.shared.languages':
    '**Bahasa:** 100+, dapat dipilih per plugin.',
  'plugins.index.outro':
    'Pilih platform Anda di atas untuk memulai. Kode sumber setiap plugin ada di [repositori wyzie-plugins](https://github.com/wyziedevs/wyzie-plugins).',

  'plugins.stremio.intro':
    'Add-on subtitle sekali klik untuk [Stremio](https://www.stremio.com/). Ia mengkueri setiap sumber Wyzie yang dapat digunakan kunci Anda dan bekerja untuk film maupun serial, di setiap platform tempat Stremio berjalan.',
  'plugins.stremio.before':
    'Anda memerlukan Wyzie API key gratis. Dapatkan satu di [store.wyzie.io/redeem](https://store.wyzie.io/redeem), atau beli kunci Pro atau berlangganan di [store.wyzie.io](https://store.wyzie.io/#plans).',
  'plugins.stremio.install.1':
    'Buka [stremio.wyzie.io/configure](https://stremio.wyzie.io/configure).',
  'plugins.stremio.install.2': 'Tempel **API key** Anda.',
  'plugins.stremio.install.3':
    'Opsional: masukkan **bahasa** pilihan Anda sebagai kode ISO 639-1, dipisahkan koma (misalnya `en,es,fr`). Kosongkan untuk semua bahasa.',
  'plugins.stremio.install.4':
    'Opsional: aktifkan **hearing-impaired** untuk hanya mendapatkan subtitle hearing-impaired. Biarkan nonaktif untuk melihat semuanya; selama opsi ini aktif, sumber yang tidak menandai subtitle hearing-impaired tidak mengembalikan apa pun.',
  'plugins.stremio.install.5':
    'Klik **Install**. Stremio terbuka dan meminta Anda mengonfirmasi; terima, dan Anda selesai.',
  'plugins.stremio.install.after':
    'Kunci dan preferensi Anda dikodekan ke dalam add-on, jadi tidak ada lagi yang perlu disiapkan. Buka film atau episode apa pun dan pilih subtitle dari daftar.',
  'plugins.stremio.cfg.key.f': 'API key',
  'plugins.stremio.cfg.key.d': 'Kunci Wyzie Anda. Wajib.',
  'plugins.stremio.cfg.langs.f': 'Bahasa',
  'plugins.stremio.cfg.langs.d':
    'Kode ISO 639-1, dipisahkan koma. Kosong berarti semua bahasa.',
  'plugins.stremio.cfg.hi.f': 'Hearing-impaired',
  'plugins.stremio.cfg.hi.d':
    'Hanya kembalikan subtitle hearing-impaired (mengirim hi=true). Nonaktif secara default.',
  'plugins.stremio.cfg.note':
    'Untuk mengubah salah satu dari ini nanti, buka kembali [stremio.wyzie.io/configure](https://stremio.wyzie.io/configure), sesuaikan, dan instal ulang.',
  'plugins.stremio.local':
    'Lalu buka `http://127.0.0.1:7000/configure`, tempel kunci Anda, dan instal ke Stremio.',
  'plugins.stremio.quota':
    'Jika kunci Anda mencapai batasnya, add-on menampilkan satu entri subtitle yang menautkan ke [store.wyzie.io](https://store.wyzie.io) sehingga Anda dapat mengisi ulang atau berlangganan. Setelah Anda melakukannya, subtitle kembali segera.',
  'plugins.stremio.ts.none':
    '**Tidak ada subtitle yang muncul.** Pastikan judul memiliki ID IMDB di Stremio (sebagian besar item katalog memilikinya) dan bahwa bahasa yang Anda pilih benar-benar memiliki subtitle untuk judul tersebut. Coba hapus filter bahasa untuk melihat semuanya.',
  'plugins.stremio.ts.key':
    '**Kunci tidak valid, atau tidak ada yang termuat.** Buka kembali halaman configure dan tempel ulang kunci Anda; spasi yang tersesat akan merusaknya. Konfirmasikan kunci berfungsi di [store.wyzie.io/dashboard](https://store.wyzie.io/dashboard).',
  'plugins.stremio.ts.episode':
    '**Episode serial tidak cocok.** Wyzie mencocokkan berdasarkan musim dan episode; pastikan Stremio memutar entri episode yang benar, bukan halaman serial umum.',

  'plugins.bazarr.intro':
    '[Bazarr](https://www.bazarr.media/) mengelola subtitle untuk **Plex, Jellyfin, Emby, Sonarr, dan Radarr** di satu tempat. Menambahkan Wyzie sebagai penyedia memberi semua server tersebut akses ke setiap sumber Wyzie yang dapat digunakan kunci Anda, melalui satu kunci.',
  'plugins.bazarr.note':
    'Ini adalah cara yang direkomendasikan untuk menggunakan Wyzie dengan Plex dan Jellyfin. Bazarr mengunduh berkas subtitle di samping media Anda, dan server Anda mengambilnya secara otomatis, sehingga tidak diperlukan plugin native terpisah.',
  'plugins.bazarr.before':
    'Dapatkan Wyzie API key gratis di [store.wyzie.io/redeem](https://store.wyzie.io/redeem), dan miliki akses ke berkas instalasi Bazarr Anda (jalur Docker tipikal: `/opt/bazarr/bazarr/`).',
  'plugins.bazarr.install.1':
    'Unduh [bazarr/wyzie.py](https://github.com/wyziedevs/wyzie-plugins/blob/main/bazarr/wyzie.py) dari [repositori wyzie-plugins](https://github.com/wyziedevs/wyzie-plugins) (atau `git clone https://github.com/wyziedevs/wyzie-plugins.git`) dan salin ke `bazarr/subliminal_patch/providers/wyzie.py`.',
  'plugins.bazarr.install.2':
    'Edit `bazarr/subliminal_patch/extensions.py` dan tambahkan `wyzie` ke **kedua** `provider_registry` dan `provider_manager`.',
  'plugins.bazarr.install.3':
    'Edit `bazarr/list_subtitles.py` (atau `bazarr/config.py`, tergantung versi Anda) untuk mengekspos pengaturan `api_key`, `prefer_hi`, dan `sources`. Salin pola dari penyedia yang sudah ada seperti `opensubtitlescom`.',
  'plugins.bazarr.install.4': 'Mulai ulang Bazarr.',
  'plugins.bazarr.install.5':
    'Buka **Settings, Providers, Wyzie**, tempel API key Anda, dan simpan.',
  'plugins.bazarr.install.after':
    'Sebuah pull request kelas satu untuk mengirimkan penyedia ini ke hulu Bazarr sedang direncanakan. Sampai saat itu, ini adalah berkas siap-pakai yang Anda tambahkan ke instalasi Anda sendiri.',
  'plugins.bazarr.cfg.key': 'Kunci Wyzie Anda. Wajib.',
  'plugins.bazarr.cfg.hi':
    'Hanya kembalikan subtitle hearing-impaired (mengirim hi=true).',
  'plugins.bazarr.cfg.sources':
    'Daftar penyedia yang dipisahkan koma untuk dikueri, atau `all`.',
  'plugins.bazarr.quota.402':
    '**402 atau 429** (saldo kosong atau batas harian tercapai): Bazarr mencatat catatan dengan tautan ke [store.wyzie.io](https://store.wyzie.io) dan tidak mengembalikan hasil, sehingga dengan rapi beralih ke penyedia Anda yang lain. Tidak ada yang crash.',
  'plugins.bazarr.quota.401':
    '**401** (kunci tidak disertakan) atau **403** (kunci tidak dikenal, atau kunci yang sedang ditangguhkan): Bazarr memunculkan kesalahan autentikasi sehingga Anda tahu untuk memeriksa atau memasukkan ulang kunci.',
  'plugins.bazarr.ts.missing':
    '**Wyzie tidak muncul dalam daftar penyedia.** Periksa kembali langkah instalasi yang mengedit `extensions.py`; entri harus ada di kedua `provider_registry` dan `provider_manager`, lalu mulai ulang Bazarr.',
  'plugins.bazarr.ts.none':
    '**Tidak ada subtitle ditemukan.** Konfirmasikan item memiliki ID IMDB di Bazarr dan bahwa bahasa yang telah Anda aktifkan memiliki subtitle untuknya. Hanya persempit `sources` jika Anda bermaksud demikian.',
  'plugins.bazarr.ts.settings':
    '**Bidang pengaturan hilang.** Langkah pengaturan tidak diterapkan untuk versi Bazarr Anda; bandingkan dengan blok pengaturan penyedia yang berfungsi dan mulai ulang.',

  'plugins.kodi.intro':
    'Layanan subtitle untuk **Kodi 19+ (Matrix dan setelahnya)**, LibreELEC, dan CoreELEC. Ia menggunakan titik ekstensi `xbmc.subtitle.module` standar Kodi, sehingga muncul di mana pun Kodi mencari subtitle.',
  'plugins.kodi.before':
    'Dapatkan Wyzie API key gratis di [store.wyzie.io/redeem](https://store.wyzie.io/redeem).',
  'plugins.kodi.repo.intro':
    'Menginstal repositori sekali memungkinkan Kodi **memperbarui otomatis** add-on untuk Anda.',
  'plugins.kodi.repo.1':
    'Unduh penginstal repositori: [**repository.wyzie.zip**](https://kodi.wyzie.io/repository.wyzie.zip).',
  'plugins.kodi.repo.2':
    'Di Kodi: **Settings, Add-ons, Install from zip file**, lalu pilih `repository.wyzie.zip`. Jika Kodi memblokirnya, aktifkan **Settings, System, Add-ons, Unknown sources** terlebih dahulu.',
  'plugins.kodi.repo.3':
    '**Settings, Add-ons, Install from repository, Wyzie Repository, Subtitle services, Wyzie Subs, Install.**',
  'plugins.kodi.repo.4':
    '**Settings, Player, Language, Default subtitle service**, lalu pilih **Wyzie Subs**.',
  'plugins.kodi.repo.5':
    'Buka pengaturan add-on Wyzie Subs dan tempel **API key** Anda.',
  'plugins.kodi.zip.intro':
    'Gunakan ini jika Anda lebih memilih untuk tidak menambahkan repositori. Catatan: instalasi zip **tidak** memperbarui otomatis.',
  'plugins.kodi.zip.1':
    'Dapatkan zip add-on: `service.subtitles.wyzie-<version>.zip`. Untuk membuatnya sendiri, clone [repositori wyzie-plugins](https://github.com/wyziedevs/wyzie-plugins) (`git clone https://github.com/wyziedevs/wyzie-plugins.git`) dan zip folder `kodi/` di dalamnya sehingga zip berisi `addon.xml` di root-nya.',
  'plugins.kodi.zip.2':
    'Di Kodi: **Settings, Add-ons, Install from zip file**, lalu pilih zip-nya. Jika Kodi memblokirnya, aktifkan **Settings, System, Add-ons, Unknown sources** terlebih dahulu.',
  'plugins.kodi.zip.3':
    '**Settings, Player, Language, Default subtitle service**, lalu pilih **Wyzie Subs**.',
  'plugins.kodi.zip.4':
    'Buka pengaturan add-on Wyzie Subs dan tempel **API key** Anda.',
  'plugins.kodi.cfg.key': 'Kunci Wyzie Anda. Wajib.',
  'plugins.kodi.cfg.hi':
    'Hanya kembalikan subtitle hearing-impaired (mengirim hi=true).',
  'plugins.kodi.cfg.langs':
    'Bahasa diambil dari bahasa subtitle yang dipilih Kodi dan dipetakan ke ISO 639-1 secara otomatis.',
  'plugins.kodi.matching.1':
    'Saat sesuatu sedang diputar, Kodi mengekspos nomor IMDB, musim, dan episode. Add-on membaca itu, mengkueri `sub.wyzie.io/search`, dan mengembalikan subtitle yang cocok. Karena Wyzie didorong oleh ID (IMDB dan TMDB), pencocokan akurat untuk film maupun serial.',
  'plugins.kodi.matching.2':
    '**Pencarian manual** saat ini menampilkan notifikasi dan tidak melakukan apa-apa, karena Wyzie mencocokkan berdasarkan ID, bukan judul. Pencarian judul-ke-ID ada dalam roadmap. Untuk saat ini, biarkan Kodi mencari secara otomatis selama pemutaran.',
  'plugins.kodi.quota':
    'Respons 402 atau 429 menampilkan notifikasi toast Kodi yang mengarahkan Anda ke [store.wyzie.io](https://store.wyzie.io) untuk mengisi ulang atau berlangganan.',
  'plugins.kodi.ts.notoffered':
    '**Wyzie tidak ditawarkan selama pemutaran.** Konfirmasikan ia diatur sebagai **Default subtitle service** dan bahwa item yang diputar memiliki ID IMDB.',
  'plugins.kodi.ts.key':
    '**Kunci tidak valid.** Buka kembali pengaturan add-on dan tempel ulang kunci Anda.',
  'plugins.kodi.ts.episode':
    '**Tidak ada apa-apa untuk sebuah episode.** Pastikan Kodi memiliki metadata musim dan episode yang benar untuk berkas tersebut; item pustaka hasil scraping bekerja paling baik.',
};

export default messages;
