import { SynonymGroup } from '../types';

export const verbsData: SynonymGroup[] = [
  {
    id: 1,
    category_id: 'verbs',
    title: '爱戴 vs 爱护 vs 保护 vs 维护 (Melindungi / Menyayangi)',
    key_difference_summary: 'Beda target objek: Tokoh dihormati (爱戴) vs Benda/hewan/manusia tersayang (爱护) vs Mencegah rusak/tercemar (保护) vs Kedaulatan/hak/martabat (维护)',
    words: [
      {
        hanzi: '爱戴',
        pinyin: 'àidài',
        meaning_id: 'Menghormati, mencintai, dan melindungi pemimpin/pahlawan',
        collocations: ['爱戴英雄', '爱戴领袖', '深受爱戴'],
        distinguishing_note: 'Objek terbatas pada tokoh yang dihormati (pemimpin/pahlawan)',
        object_type: 'orang',
        connotation: 'positif',
        formality: 'formal_tulis'
      },
      {
        hanzi: '爱护',
        pinyin: 'àihù',
        meaning_id: 'Menyayangi dan melindungi agar tidak terluka atau rusak',
        collocations: ['爱护老人', '爱护眼睛', '爱护动物', '爱护公共财产'],
        distinguishing_note: 'Objek berupa orang lemah/muda, organ tubuh, hewan, atau fasilitas umum',
        object_type: 'umum',
        connotation: 'positif',
        formality: 'netral'
      },
      {
        hanzi: '保护',
        pinyin: 'bǎohù',
        meaning_id: 'Merawat dengan sungguh-sungguh agar tidak rusak atau tercemar',
        collocations: ['保护文物', '保护环境卫生', '保护知识产权', '保护生态平衡'],
        distinguishing_note: 'Objek luas, bisa konkret (lingkungan/barang) maupun abstrak (hak cipta)',
        object_type: 'umum',
        connotation: 'positif',
        formality: 'netral'
      },
      {
        hanzi: '维护',
        pinyin: 'wéihù',
        meaning_id: 'Mempertahankan dan membela agar tidak dirusak/dilanggar',
        collocations: ['维护尊严', '维护利益', '维护主权', '维护领土完整'],
        distinguishing_note: 'Objek berupa konsep abstrak fundamental: martabat, kedaulatan, kepentingan wilayah',
        object_type: 'abstrak',
        connotation: 'positif',
        formality: 'formal_tulis'
      }
    ]
  },
  {
    id: 2,
    category_id: 'verbs',
    title: '安慰 vs 慰问 (Menenangkan / Menghibur)',
    key_difference_summary: 'Hubungan pembicara: Sesama yang berduka/gelisah (安慰) vs Atasan ke bawahan / instansi resmi (慰问)',
    words: [
      {
        hanzi: '安慰',
        pinyin: 'ānwèi',
        meaning_id: 'Menenangkan hati orang lain yang sedang gelisah atau sedih melalui kata-kata',
        collocations: ['安慰病人', '耐心地安慰', '安慰老人', '需要安慰', '寻求安慰'],
        distinguishing_note: 'Menghibur secara personal/psikologis kepada orang gelisah/sedih',
        object_type: 'orang',
        connotation: 'positif',
        formality: 'netral'
      },
      {
        hanzi: '慰问',
        pinyin: 'wèiwèn',
        meaning_id: 'Menghibur dan menyapa dengan kata-kata atau pemberian resmi',
        collocations: ['热情慰问', '慰问伤病员', '慰问家属', '亲切慰问'],
        distinguishing_note: 'Sering digunakan oleh pihak atasan, pejabat, atau organisasi kepada bawahan/korban',
        object_type: 'orang',
        connotation: 'positif',
        formality: 'formal_tulis'
      }
    ]
  },
  {
    id: 3,
    category_id: 'verbs',
    title: '颁布 vs 颁发 vs 发表 vs 公布 (Mengumumkan / Menerbitkan)',
    key_difference_summary: 'Undang-undang resmi negara (颁布) vs Menyerahkan sertifikat/hadiah (颁发) vs Menerbitkan artikel/pidato (发表) vs Publikasi informasi ke umum (公布)',
    words: [
      {
        hanzi: '颁布',
        pinyin: 'bānbù',
        meaning_id: 'Mengumumkan undang-undang atau peraturan resmi negara',
        collocations: ['颁布法令', '颁布宪法', '颁布条例'],
        distinguishing_note: 'Cakupan sempit: khusus hukum, undang-undang, tata tertib kenegaraan',
        object_type: 'abstrak',
        connotation: 'netral',
        formality: 'formal_tulis'
      },
      {
        hanzi: '颁发',
        pinyin: 'bānfā',
        meaning_id: 'Menganugerahkan atau mengeluarkan instruksi/penghargaan',
        collocations: ['颁发指示', '颁发条例', '颁发证书', '颁发奖金'],
        distinguishing_note: 'Memberikan secara formal dari atas ke bawah: piagam, piala, beasiswa, arahan',
        object_type: 'konkret',
        connotation: 'netral',
        formality: 'formal_tulis'
      },
      {
        hanzi: '发表',
        pinyin: 'fābiǎo',
        meaning_id: 'Menyampaikan pendapat ke publik; menerbitkan tulisan/media',
        collocations: ['发表意见', '发表演说', '发表声明', '发表宣言', '发表论文'],
        distinguishing_note: 'Menyatakan pandangan secara lisan atau publikasi karya ilmiah/makalah di media',
        object_type: 'abstrak',
        connotation: 'netral',
        formality: 'netral'
      },
      {
        hanzi: '公布',
        pinyin: 'gōngbù',
        meaning_id: 'Mengumumkan secara terbuka kepada khalayak umum',
        collocations: ['公布法令', '公布名单', '公布成绩', '公布方案'],
        distinguishing_note: 'Bisa digunakan instansi, sekolah maupun individu: mengumumkan hasil ujian, daftar nama',
        object_type: 'umum',
        connotation: 'netral',
        formality: 'netral'
      }
    ]
  },
  {
    id: 4,
    category_id: 'verbs',
    title: '保持 vs 维持 (Menjaga / Mempertahankan)',
    key_difference_summary: 'Menjaga kondisi prima agar tak berubah (保持) vs Mempertahankan kelanjutan agar tidak kolaps (维持)',
    words: [
      {
        hanzi: '保持',
        pinyin: 'bǎochí',
        meaning_id: 'Menjaga agar suatu kondisi baik/stabil tidak berubah',
        collocations: ['保持整洁', '保持联系', '保持距离', '保持沉默', '保持平衡'],
        distinguishing_note: 'Sering untuk kebiasaan aktif manusia, kontak komunikasi, atau kebersihan lingkungan',
        object_type: 'abstrak',
        connotation: 'positif',
        formality: 'netral'
      },
      {
        hanzi: '维持',
        pinyin: 'wéichí',
        meaning_id: 'Membuat sesuatu tetap berlanjut dan bertahan (makna lebih ringan)',
        collocations: ['维持生命', '维持现状', '维持秩序', '维持局面'],
        distinguishing_note: 'Bertahan agar tidak putus/kacau: mempertahankan napas hidup, situasi minimum, ketertiban',
        object_type: 'abstrak',
        connotation: 'netral',
        formality: 'netral'
      }
    ]
  },
  {
    id: 5,
    category_id: 'verbs',
    title: '保障 vs 保证 vs 担保 (Menjamin)',
    key_difference_summary: 'Perlindungan sistematis hukum/sosial (保障) vs Janji kepastian tindakan (保证) vs Menjadi penjamin finansial/hukum (担保)',
    words: [
      {
        hanzi: '保障',
        pinyin: 'bǎozhàng',
        meaning_id: 'Melindungi hak atau sistem agar tidak dilanggar',
        collocations: ['保障安全', '保障措施', '社会保障', '保障体系'],
        distinguishing_note: 'Objek hak asasi, keamanan, jaminan sosial (BPJS/sistem jaminan)',
        object_type: 'abstrak',
        connotation: 'positif',
        formality: 'formal_tulis'
      },
      {
        hanzi: '保证',
        pinyin: 'bǎozhèng',
        meaning_id: 'Berjanji pasti akan melakukan atau memastikan terwujudnya sesuatu',
        collocations: ['口头保证', '保证完成任务', '保证充足的睡眠'],
        distinguishing_note: 'Komitmen personal atau pernyataan kepastian menyelesaikan tugas',
        object_type: 'umum',
        connotation: 'netral',
        formality: 'netral'
      },
      {
        hanzi: '担保',
        pinyin: 'dānbǎo',
        meaning_id: 'Menyatakan bertanggung jawab secara hukum/finansial',
        collocations: ['担保书', '担保人', '向某人担保', '财产担保'],
        distinguishing_note: 'Memikul tanggung jawab jaminan kredit, penjamin aset pihak ketiga',
        object_type: 'konkret',
        connotation: 'netral',
        formality: 'formal_tulis'
      }
    ]
  },
  {
    id: 6,
    category_id: 'verbs',
    title: '避免 vs 难免 vs 省得 (Menghindari)',
    key_difference_summary: 'Tindakan aktif pencegahan (避免) vs Keniscayaan sulit dicegah (难免) vs Supaya tidak repot - lisan (省得)',
    words: [
      {
        hanzi: '避免',
        pinyin: 'bìmiǎn',
        meaning_id: 'Berusaha secara aktif agar situasi buruk tidak terjadi',
        collocations: ['避免传染', '避免事故', '避免犯错误'],
        distinguishing_note: 'Kata kerja aktif: mengambil langkah pencegahan dari hal negatif',
        connotation: 'netral',
        formality: 'netral'
      },
      {
        hanzi: '难免',
        pinyin: 'nánmiǎn',
        meaning_id: 'Menunjukkan situasi buruk secara objektif sulit dihindari',
        collocations: ['难免发生误会', '难免有差错', '难免失败'],
        distinguishing_note: 'Menyatakan keniscayaan objektif: lumrah/pasti sulit dielakkan',
        connotation: 'netral',
        formality: 'netral'
      },
      {
        hanzi: '省得',
        pinyin: 'shěngde',
        meaning_id: 'Supaya tidak, agar terhindar dari repot (ragam percakapan)',
        collocations: ['多穿点儿衣服，省得着凉。'],
        distinguishing_note: 'Sering dipakai dalam percakapan sehari-hari di klausa kedua untuk efisiensi',
        formality: 'lisan_percakapan'
      }
    ]
  },
  {
    id: 7,
    category_id: 'verbs',
    title: '遍布 vs 遍及 vs 普遍 vs 普及 (Tersebar / Menyeluruh)',
    key_difference_summary: 'Tersebar di mana-mana (遍布) vs Jangkauan jejak mencapai seluruh (遍及) vs Karakteristik umum (普遍) vs Menyebarkan edukasi/ilmu (普及)',
    words: [
      {
        hanzi: '遍布',
        pinyin: 'biànbù',
        meaning_id: 'Tersebar dan bertebaran di mana-mana',
        collocations: ['遍布全国', '遍布全球'],
        distinguishing_note: 'Distribusi titik lokasi fisik yang merata di banyak tempat',
        object_type: 'konkret',
        formality: 'netral'
      },
      {
        hanzi: '遍及',
        pinyin: 'biànjí',
        meaning_id: 'Mencapai secara merata hingga ke seluruh penjuru',
        collocations: ['足迹遍及全国'],
        distinguishing_note: 'Menekankan pergerakan jangkauan/jejak yang menyentuh seluruh tempat',
        formality: 'formal_tulis'
      },
      {
        hanzi: '普遍',
        pinyin: 'pǔbiàn',
        meaning_id: 'Meliputi segala aspek; bersifat umum dan berlaku universal',
        collocations: ['普遍真理', '普遍存在', '普遍提高'],
        distinguishing_note: 'Kata sifat/keterangan: prevalensi umum, hukum kebenaran umum',
        formality: 'netral'
      },
      {
        hanzi: '普及',
        pinyin: 'pǔjí',
        meaning_id: 'Menyebarkan pendidikan atau pengetahuan secara massal',
        collocations: ['普及教育', '普及文化', '普及卫生常识', '大力普及'],
        distinguishing_note: 'Tindakan mempopulerkan / mewajibkan edukasi agar dinikmati khalayak',
        connotation: 'positif',
        formality: 'formal_tulis'
      }
    ]
  },
  {
    id: 8,
    category_id: 'verbs',
    title: '表达 vs 表明 vs 表示 vs 表现 vs 体现 (Mengekspresikan / Menunjukkan)',
    key_difference_summary: 'Perasaan/tekad batin (表达) vs Sikap/posisi jelas (表明) vs Ucapan salam/terima kasih (表示) vs Perilaku unjuk diri (表现) vs Menjiwai/tercermin nyata (体现)',
    words: [
      {
        hanzi: '表达',
        pinyin: 'biǎodá',
        meaning_id: 'Menyampaikan isi hati dan perasaan lewat kata/gestur',
        collocations: ['表达感情', '表达决心', '表达心情'],
        distinguishing_note: 'Objek berupa emosi batin, rasa terima kasih, isi hati nurani',
        object_type: 'abstrak',
        formality: 'netral'
      },
      {
        hanzi: '表明',
        pinyin: 'biǎomíng',
        meaning_id: 'Menyatakan dengan tegas dan gamblang sikap atau pendirian',
        collocations: ['表明立场', '表明态度', '表明决心', '表明观点'],
        distinguishing_note: 'Menunjukkan posisi, sikap politis atau pandangan rasional yang jelas',
        object_type: 'abstrak',
        formality: 'formal_tulis'
      },
      {
        hanzi: '表示',
        pinyin: 'biǎoshì',
        meaning_id: 'Menyampaikan sikap kesopanan melalui tindakan/ucapan',
        collocations: ['表示谢意', '表示理解', '表示同情', '表示欢迎'],
        distinguishing_note: 'Bisa berarti tanda simbolis ucapan selamat, empati, apresiasi',
        formality: 'netral'
      },
      {
        hanzi: '表现',
        pinyin: 'biǎoxiàn',
        meaning_id: 'Menampilkan perilaku luar atau unjuk kebolehan diri',
        collocations: ['表现了', '表现出', '这种表现', '表现出色', '表现良好', '表现不好'],
        distinguishing_note: 'Bisa kata kerja atau kata benda performa/sikap kelakuan seseorang',
        formality: 'netral'
      },
      {
        hanzi: '体现',
        pinyin: 'tǐxiàn',
        meaning_id: 'Suatu nilai, prinsip, atau semangat terwujud nyata dalam suatu karya/hal',
        collocations: ['体现思想', '体现原则', '生动体现', '充分体现'],
        distinguishing_note: 'Pengejawantahan nilai luhur, asas peraturan, atau roh filosofi ke dalam wujud konkret',
        formality: 'formal_tulis'
      }
    ]
  },
  {
    id: 9,
    category_id: 'verbs',
    title: '采纳 vs 采取 vs 采用 (Menerima & Menerapkan)',
    key_difference_summary: 'Saran/masukan abstrak (采纳) vs Kebijakan/langkah/tindakan (采取) vs Teknologi/alat konkret atau metode (采用)',
    words: [
      {
        hanzi: '采纳',
        pinyin: 'cǎinà',
        meaning_id: 'Menerima dan mengakomodasi masukan/saran',
        collocations: ['采纳建议', '采纳意见', '采纳要求'],
        distinguishing_note: 'Objek sempit & abstrak: khusus usulan, kritik, masukan orang lain',
        object_type: 'abstrak',
        formality: 'formal_tulis'
      },
      {
        hanzi: '采取',
        pinyin: 'cǎiqǔ',
        meaning_id: 'Memilih dan mengambil langkah atau kebijakan',
        collocations: ['采取措施', '采取行动', '采取形式', '采取政策'],
        distinguishing_note: 'Objek berupa langkah (措施), tindakan (行动), strategi, sikap tegas',
        object_type: 'abstrak',
        formality: 'netral'
      },
      {
        hanzi: '采用',
        pinyin: 'cǎiyòng',
        meaning_id: 'Mengadopsi barang, teknologi, atau cara kerja tertentu',
        collocations: ['采用新技术', '采用手段', '采用方式'],
        distinguishing_note: 'Objek luas: bisa material/alat konkret (teknologi baru) atau metode pelaksanaan',
        object_type: 'umum',
        formality: 'netral'
      }
    ]
  },
  {
    id: 10,
    category_id: 'verbs',
    title: '操控 vs 操纵 vs 操作 vs 控制 (Mengontrol / Mengoperasikan)',
    key_difference_summary: 'Keahlian mengemudikan (操控) vs Dalang di balik layar/manipulasi negatif (操纵) vs Mengoperasikan mesin sesuai SOP (操作) vs Membatasi agar tak lepas kendali (控制)',
    words: [
      {
        hanzi: '操控',
        pinyin: 'cāokòng',
        meaning_id: 'Mengendalikan dan mengemudikan dengan sangat terampil',
        collocations: ['受操控', '操控电脑', '操控机器'],
        distinguishing_note: 'Kecakapan motorik/teknis mengendalikan setir atau panel kontrol',
        object_type: 'konkret',
        formality: 'netral'
      },
      {
        hanzi: '操纵',
        pinyin: 'cāozòng',
        meaning_id: 'Mengendalikan secara terselubung / manipulasi di balik layar',
        collocations: ['操纵机器', '操纵物价', '幕后操纵', '暗中操纵'],
        distinguishing_note: 'Sering bermakna manipulatif (negatif): mempermainkan harga pasar, mengendalikan boneka politik',
        connotation: 'negatif',
        formality: 'netral'
      },
      {
        hanzi: '操作',
        pinyin: 'cāozuò',
        meaning_id: 'Melakukan operasi manual pada mesin sesuai petunjuk teknis',
        collocations: ['操作机器', '操作电脑'],
        distinguishing_note: 'Pekerjaan tangan/SOP mekanik sehari-hari',
        object_type: 'konkret',
        formality: 'netral'
      },
      {
        hanzi: '控制',
        pinyin: 'kòngzhì',
        meaning_id: 'Memegang kendali ketat agar tidak melampaui batas batas',
        collocations: ['控制范围', '控制感情', '控制人口', '控制情绪', '控制局势'],
        distinguishing_note: 'Membatasi lonjakan: menahan emosi, menekan jumlah populasi, menstabilkan situasi kritis',
        object_type: 'abstrak',
        formality: 'netral'
      }
    ]
  },
  {
    id: 11,
    category_id: 'verbs',
    title: '产生 vs 发生 vs 生产 (Muncul / Terjadi / Memproduksi)',
    key_difference_summary: 'Tumbuh dari yang sudah ada (产生) vs Peristiwa tak terduga muncul (发生) vs Pabrik manufaktur barang (生产)',
    words: [
      {
        hanzi: '产生',
        pinyin: 'chǎnshēng',
        meaning_id: 'Muncul atau berkembang fenomena baru dari kondisi yang ada',
        collocations: ['产生误会', '产生问题', '产生矛盾', '产生变化'],
        distinguishing_note: 'Lahirnya efek/dampak sampingan: timbul salah paham, melahirkan gesekan',
        formality: 'netral'
      },
      {
        hanzi: '发生',
        pinyin: 'fāshēng',
        meaning_id: 'Terjadi peristiwa atau kejadian nyata dari ketiadaan',
        collocations: ['发生问题', '发生情况', '发生变化', '发生意外'],
        distinguishing_note: 'Kejadian konkret/insiden: terjadi kecelakaan lalu lintas, gempa, perubahan mendadak',
        formality: 'netral'
      },
      {
        hanzi: '生产',
        pinyin: 'shēngchǎn',
        meaning_id: 'Memproduksi barang komoditas melalui tenaga kerja',
        collocations: ['生产粮食', '生产药品', '生产过程', '生产技术'],
        distinguishing_note: 'Khusus aktivitas ekonomi industri/agrikultur menghasilkan produk nyata',
        object_type: 'konkret',
        formality: 'netral'
      }
    ]
  },
  {
    id: 12,
    category_id: 'verbs',
    title: '成立 vs 创立 vs 创造 vs 建立 vs 树立 vs 设立 (Mendirikan / Menciptakan)',
    key_difference_summary: 'Organisasi/negara resmi (成立) vs Pertama kali merintis ajaran/aliran (创立) vs Menciptakan mukjizat/karya baru (创造) vs Membangun relasi/rezim (建立) vs Menanamkan teladan/moral (树立) vs Membuka kantor cabang (设立)',
    words: [
      {
        hanzi: '成立',
        pinyin: 'chénglì',
        meaning_id: 'Diresmikan dan didirikan secara hukum/kelembagaan',
        collocations: ['成立国家', '成立政府', '宣布成立', '公开成立'],
        distinguishing_note: 'Badan resmi: mendirikan negara, partai, yayasan, kepengurusan',
        formality: 'formal_tulis'
      },
      {
        hanzi: '创立',
        pinyin: 'chuànglì',
        meaning_id: 'Mendirikan untuk pertama kali sebuah disiplin ilmu atau doktrin',
        collocations: ['创立学科', '创立学说', '创立军队', '创立理论'],
        distinguishing_note: 'Memulai fondasi inovatif: mencetuskan teori, mazhab pemikiran, disiplin baru',
        formality: 'formal_tulis'
      },
      {
        hanzi: '创造',
        pinyin: 'chuàngzào',
        meaning_id: 'Menciptakan sesuatu yang belum pernah ada sebelumnya',
        collocations: ['创造历史', '创造条件', '创造财富', '创造奇迹'],
        distinguishing_note: 'Membuat keajaiban: mengukir sejarah baru, menciptakan kekayaan materi/rohani',
        connotation: 'positif',
        formality: 'netral'
      },
      {
        hanzi: '建立',
        pinyin: 'jiànlì',
        meaning_id: 'Membangun dan mewujudkan melalui upaya sistematis',
        collocations: ['建立政权', '建立档案', '建立军队'],
        distinguishing_note: 'Membangun relasi diplomatik, membentuk arsip, memantapkan sistem',
        formality: 'netral'
      },
      {
        hanzi: '树立',
        pinyin: 'shùlì',
        meaning_id: 'Menanamkan dan menegakkan secara bertahap (karakter/teladan)',
        collocations: ['树立榜样', '树立形象', '树立信心', '树立理想'],
        distinguishing_note: 'Khusus nilai abstrak luhur: membangun reputasi, menegakkan rasa percaya diri, teladan',
        object_type: 'abstrak',
        connotation: 'positif',
        formality: 'formal_tulis'
      },
      {
        hanzi: '设立',
        pinyin: 'shèlì',
        meaning_id: 'Membuka unit kantor atau lembaga operasional',
        collocations: ['设立分公司', '设立医院', '设立办事处', '设立机构'],
        distinguishing_note: 'Digunakan instansi/perusahaan: mendirikan pos pelayanan, kantor cabang, divisi',
        object_type: 'konkret',
        formality: 'formal_tulis'
      }
    ]
  },
  {
    id: 13,
    category_id: 'verbs',
    title: '承担 vs 承受 vs 负担 vs 担任 (Memikul / Menanggung)',
    key_difference_summary: 'Memikul tanggung jawab/akibat hukum (承担) vs Menahan beban fisik/mental (承受) vs Menanggung biaya/pekerjaan (负担) vs Menjabat posisi (担任)',
    words: [
      {
        hanzi: '承担',
        pinyin: 'chéngdān',
        meaning_id: 'Memikul kewajiban dan konsekuensi secara bertanggung jawab',
        collocations: ['承担责任', '承担义务', '承担后果', '承担使命'],
        distinguishing_note: 'Tanggung jawab berkelanjutan atas konsekuensi moral atau hukum',
        formality: 'formal_tulis'
      },
      {
        hanzi: '承受',
        pinyin: 'chéngshòu',
        meaning_id: 'Menerima dan bertahan dari tekanan/beban berat',
        collocations: ['承受考验', '承受不住', '承受压力'],
        distinguishing_note: 'Daya tahan menghadapi ujian, stres emosional, atau beban mekanik',
        formality: 'netral'
      },
      {
        hanzi: '负担',
        pinyin: 'fùdān',
        meaning_id: 'Menanggung pengeluaran dana atau ongkos operasional',
        collocations: ['负担开支', '负担费用', '负担责任'],
        distinguishing_note: 'Bisa kata benda atau kerja pembiayaan hidup/pengeluaran uang',
        formality: 'netral'
      },
      {
        hanzi: '担任',
        pinyin: 'dānrèn',
        meaning_id: 'Memegang atau menjabat posisi pekerjaan tertentu',
        collocations: ['担任主任', '担任校长', '担任裁判', '担任某职务'],
        distinguishing_note: 'Khusus menduduki jabatan formal: menjadi kepala sekolah, wasit, direktur',
        formality: 'formal_tulis'
      }
    ]
  },
  {
    id: 14,
    category_id: 'verbs',
    title: '出生 vs 诞辰 vs 诞生 vs 问世 (Lahir / Terbit)',
    key_difference_summary: 'Kelahiran bayi umum (出生) vs Hari ulang tahun tokoh agung (诞辰) vs Lahirnya tokoh besar/kejayaan (诞生) vs Peluncuran karya seni/buku (问世)',
    words: [
      {
        hanzi: '出生',
        pinyin: 'chūshēng',
        meaning_id: 'Kelahiran biologis manusia dari kandungan ibu',
        collocations: ['小明是前年出生的，快两岁了。'],
        distinguishing_note: 'Bahasa umum untuk mencatat tanggal/tempat lahir bayi atau masyarakat umum',
        formality: 'netral'
      },
      {
        hanzi: '诞辰',
        pinyin: 'dànchén',
        meaning_id: 'Hari ulang tahun kelahiran tokoh besar (kata benda)',
        collocations: ['纪念毛泽东 120 周年诞辰'],
        distinguishing_note: 'Khusus peringatan hari lahir tokoh yang sangat dihormati; bernada khidmat',
        formality: 'formal_tulis'
      },
      {
        hanzi: '诞生',
        pinyin: 'dànshēng',
        meaning_id: 'Lahirnya tokoh agung atau kiasan lahirnya entitas baru penting',
        collocations: ['他诞生于 1900 年 2 月。'],
        distinguishing_note: 'Bernada khidmat: lahirnya pahlawan, berdirinya republik baru',
        formality: 'formal_tulis'
      },
      {
        hanzi: '问世',
        pinyin: 'wènshì',
        meaning_id: 'Karya baru resmi diterbitkan dan diluncurkan ke hadapan publik',
        collocations: ['新作品问世了。'],
        distinguishing_note: 'Khusus publikasi buku novel, paten teknologi, album musik baru',
        formality: 'formal_tulis'
      }
    ]
  },
  {
    id: 15,
    category_id: 'verbs',
    title: '持久 vs 继续 vs 持续 vs 连续 (Berlanjut / Bertahan)',
    key_difference_summary: 'Bertahan dalam durasi panjang (持久) vs Melanjutkan setelah terjeda (继续) vs Berlangsung kontinu tanpa putus (持续) vs Kejadian berturut-turut beruntun (连续)',
    words: [
      {
        hanzi: '持久',
        pinyin: 'chíjiǔ',
        meaning_id: 'Bertahan awet dalam kurun waktu lama',
        collocations: ['持久打算', '持久战', '持久和平'],
        distinguishing_note: 'Menekankan daya tahan masa pakai atau perdamaian langgeng',
        formality: 'formal_tulis'
      },
      {
        hanzi: '继续',
        pinyin: 'jìxù',
        meaning_id: 'Meneruskan kembali tindakan setelah sempat berhenti',
        collocations: ['春节放假回来后再继续干吧。', '继续努力', '继续前进'],
        distinguishing_note: 'Bisa ada jeda istirahat lalu diteruskan kembali',
        formality: 'netral'
      },
      {
        hanzi: '持续',
        pinyin: 'chíxù',
        meaning_id: 'Berlangsung terus-menerus tanpa henti sama sekali',
        collocations: ['持续发展', '持续增长', '持续干旱', '持续下去'],
        distinguishing_note: 'Kontinu tanpa jeda: tren pertumbuhan ekonomi, musim kemarau panjang',
        formality: 'netral'
      },
      {
        hanzi: '连续',
        pinyin: 'liánxù',
        meaning_id: 'Terjadi berturut-turut secara beruntun satu demi satu',
        collocations: ['连续三年获得奖学金', '这几天连续高温', '连续上升'],
        distinguishing_note: 'Kejadian berurutan beruntun: 3 tahun berturut-turut, beberapa hari non-stop',
        formality: 'netral'
      }
    ]
  },
  {
    id: 16,
    category_id: 'verbs',
    title: '促进 vs 促使 vs 推进 (Mendorong / Memajukan)',
    key_difference_summary: 'Membuat berkembang maju positif (促进) vs Memicu terjadinya keputusan perubahan (促使) vs Mendorong proyek ke depan pakai daya (推进)',
    words: [
      {
        hanzi: '促进',
        pinyin: 'cùjìn',
        meaning_id: 'Mendorong sesuatu berkembang lebih maju dan positif',
        collocations: ['改革开放政策促进了经济发展。', '老师的鼓励对他是一个促进。', '这次活动促进了团结。', '促进友谊', '促进合作'],
        distinguishing_note: 'Keluaran selalu positif: memajukan persahabatan, ekonomi, kerja sama',
        connotation: 'positif',
        formality: 'formal_tulis'
      },
      {
        hanzi: '促使',
        pinyin: 'cùshǐ',
        meaning_id: 'Mendorong seseorang/kondisi untuk mengambil langkah perubahan tertentu',
        collocations: ['这件事促使他下决心和她分手。', '市场的变化促使公司重新调整经营计划。'],
        distinguishing_note: 'Berfungsi seperti kata kerja kausatif: memicu seseorang memutuskan sesuatu',
        formality: 'netral'
      },
      {
        hanzi: '推进',
        pinyin: 'tuījìn',
        meaning_id: 'Mendorong pelaksanaan proyek/pekerjaan bergerak maju ke depan',
        collocations: ['国家的建设正以很快的速度向前推进。', '推进改革', '推进建设', '推进了一步'],
        distinguishing_note: 'Menekankan daya gerak mendorong jalannya reformasi atau proyek pembangunan',
        formality: 'formal_tulis'
      }
    ]
  },
  {
    id: 17,
    category_id: 'verbs',
    title: '导致 vs 引起 vs 造成 vs 致使 (Menyebabkan / Mengakibatkan)',
    key_difference_summary: 'Menyebabkan bencana/kematian buruk (导致) vs Memancing reaksi/perhatian netral-positif (引起) vs Membentuk konsekuensi negatif (造成) vs Karena sebab X berakibat Y dalam tulisan (致使)',
    words: [
      {
        hanzi: '导致',
        pinyin: 'dǎozhì',
        meaning_id: 'Menyebabkan hasil atau petaka yang buruk',
        collocations: ['连续几天的暴雨导致山洪暴发。', '酒后驾车导致了车祸。', '导致死亡'],
        distinguishing_note: 'Hampir selalu berujung pada kerugian fatal: banjir, korban jiwa, bangkrut',
        connotation: 'negatif',
        formality: 'formal_tulis'
      },
      {
        hanzi: '引起',
        pinyin: 'yǐnqǐ',
        meaning_id: 'Memicu timbulnya suatu respon atau reaksi',
        collocations: ['这场火灾是由一个烟头引起的。', '这部电影引起了巨大的反响。', '引起怀疑', '引起注意', '引起不适'],
        distinguishing_note: 'Hasil bisa positif, netral, maupun negatif: memancing perhatian, menimbulkan respon publik',
        formality: 'netral'
      },
      {
        hanzi: '造成',
        pinyin: 'zàochéng',
        meaning_id: 'Membentuk atau mendatangkan dampak negatif',
        collocations: ['造成一种假象', '造成局面', '造成地面下沉', '造成严重后果', '造成不良影响'],
        distinguishing_note: 'Hasil umumnya kerugian konkret: menimbulkan ilusi, dampak buruk, kerusakan',
        connotation: 'negatif',
        formality: 'netral'
      },
      {
        hanzi: '致使',
        pinyin: 'zhìshǐ',
        meaning_id: 'Mengakibatkan suatu kondisi macet/merugi karena kelalaian',
        collocations: ['由于管理不善，致使公司连年亏损。', '由于字迹模糊不清，致使邮件无法送达。'],
        distinguishing_note: 'Dipakai dalam teks berita formal dengan pola "由于……致使……"',
        formality: 'formal_tulis'
      }
    ]
  },
  {
    id: 18,
    category_id: 'verbs',
    title: '发挥 vs 发扬 (Mengembangkan / Menampilkan)',
    key_difference_summary: 'Mengoptimalkan kemampuan/potensi batin (发挥) vs Menjunjung & meneruskan tradisi baik (发扬)',
    words: [
      {
        hanzi: '发挥',
        pinyin: 'fāhuī',
        meaning_id: 'Mengeluarkan performa, potensi, dan bakat terpendam',
        collocations: ['发挥水平', '发挥特长', '发挥潜力', '充分发挥', '发挥想象力'],
        distinguishing_note: 'Objek berupa kapasitas kemampuan: imajinasi, talenta, performa skill',
        object_type: 'abstrak',
        connotation: 'positif',
        formality: 'netral'
      },
      {
        hanzi: '发扬',
        pinyin: 'fāyáng',
        meaning_id: 'Meneruskan dan menyebarluaskan semangat serta tradisi luhur',
        collocations: ['发扬风格', '发扬精神', '发扬传统', '发扬正气', '发扬民主作风'],
        distinguishing_note: 'Objek berupa tradisi mulia, semangat demokrasi, moralitas luhur',
        object_type: 'abstrak',
        connotation: 'positif',
        formality: 'formal_tulis'
      }
    ]
  },
  {
    id: 19,
    category_id: 'verbs',
    title: '发明 vs 发现 (Menemukan)',
    key_difference_summary: 'Menciptakan penemuan alat baru dari nol (发明) vs Menemukan hal yang sudah ada lewat observasi (发现)',
    words: [
      {
        hanzi: '发明',
        pinyin: 'fāmíng',
        meaning_id: 'Menciptakan alat atau metode baru yang belum pernah ada',
        collocations: ['发明汽车', '发明纸张', '发明专利', '一项发明', '发明权'],
        distinguishing_note: 'Invensi teknologi: menemukan mobil, kertas, bola lampu',
        object_type: 'konkret',
        formality: 'netral'
      },
      {
        hanzi: '发现',
        pinyin: 'fāxiàn',
        meaning_id: 'Mengamati dan mendeteksi sesuatu yang sudah ada sebelumnya',
        collocations: ['发现新事物', '发现问题', '发现错误', '发现秘密'],
        distinguishing_note: 'Observasi deteksi: menemukan kekeliruan, pulau baru, rahasia terpendam',
        formality: 'netral'
      }
    ]
  },
  {
    id: 20,
    category_id: 'verbs',
    title: '恭敬 vs 恭维 vs 尊敬 vs 尊重 (Sopan / Menghormati / Menyanjung)',
    key_difference_summary: 'Sopan santun beradab (恭敬) vs Menyanjung untuk ambil muka (恭维) vs Menaruh hormat pada senior/guru (尊敬) vs Menghargai hak & pendapat (尊重)',
    words: [
      {
        hanzi: '恭敬',
        pinyin: 'gōngjìng',
        meaning_id: 'Bersikap santun dan hormat secara fisik/tutur kata ke senior',
        collocations: ['恭敬地说', '恭敬地行了一个礼'],
        distinguishing_note: 'Menunjukkan gestur hormat: membungkuk hormat, berbicara santun',
        formality: 'formal_tulis'
      },
      {
        hanzi: '恭维',
        pinyin: 'gōngwei',
        meaning_id: 'Menyanjung atau memuji untuk menjilat/menyenangkan hati orang',
        collocations: ['曲意恭维', '恭维话'],
        distinguishing_note: 'Bernada sindiran / pamrih: pujian basa-basi untuk mengambil hati',
        connotation: 'negatif',
        formality: 'netral'
      },
      {
        hanzi: '尊敬',
        pinyin: 'zūnjìng',
        meaning_id: 'Menghargai dan menaruh rasa hormat tulus kepada senior/guru',
        collocations: ['尊敬长辈', '尊敬老师', '尊敬老人', '尊敬父母'],
        distinguishing_note: 'Objek orang yang lebih tua, guru, orang tua, tokoh terhormat',
        object_type: 'orang',
        connotation: 'positif',
        formality: 'netral'
      },
      {
        hanzi: '尊重',
        pinyin: 'zūnzhòng',
        meaning_id: 'Menghargai dan memperlakukan hak/pendapat orang lain dengan serius',
        collocations: ['尊重长辈', '尊重他人', '尊重你的意见', '尊重……决定', '尊重……的选择'],
        distinguishing_note: 'Objek berupa keputusan, privasi, hak asasi manusia, pandangan orang lain',
        object_type: 'umum',
        connotation: 'positif',
        formality: 'netral'
      }
    ]
  },
  {
    id: 21,
    category_id: 'verbs',
    title: '忽略 vs 忽视 vs 轻视 vs 漠视 (Mengabaikan / Meremehkan)',
    key_difference_summary: 'Terlewat tanpa sengaja (忽略) vs Lalai memperhatikan (忽视) vs Meremehkan dengan sengaja (轻视) vs Acuh tak acuh dingin (漠视)',
    words: [
      {
        hanzi: '忽略',
        pinyin: 'hūlüè',
        meaning_id: 'Terlewat dari perhatian karena dianggap hal kecil tak penting',
        collocations: ['忽略质量', '忽略过去', '忽略掉', '忽略不计'],
        distinguishing_note: 'Menyepelekan detail kecil atau tidak memperhitungkan parameter tertentu',
        formality: 'netral'
      },
      {
        hanzi: '忽视',
        pinyin: 'hūshì',
        meaning_id: 'Lalai dan tidak menganggap penting hal yang esensial',
        collocations: ['忽视教育', '忽视学习', '忽视身体健康', '不容忽视'],
        distinguishing_note: 'Kurang peduli pada kesehatan, mutu pendidikan generasi muda',
        formality: 'netral'
      },
      {
        hanzi: '轻视',
        pinyin: 'qīngshì',
        meaning_id: 'Meremehkan atau memandang rendah dengan sengaja',
        collocations: ['轻视劳动', '轻视错误', '轻视问题的严重性', '轻视困难'],
        distinguishing_note: 'Memandang enteng kerja keras buruh atau bobot rintangan',
        connotation: 'negatif',
        formality: 'netral'
      },
      {
        hanzi: '漠视',
        pinyin: 'mòshì',
        meaning_id: 'Bersikap dingin dan sama sekali tidak mempedulikan',
        collocations: ['漠视安全', '漠视群众的意见', '漠视他的存在'],
        distinguishing_note: 'Sangat dingin/apatis terhadap keselamatan kerja atau aspirasi warga',
        connotation: 'negatif',
        formality: 'formal_tulis'
      }
    ]
  },
  {
    id: 22,
    category_id: 'verbs',
    title: '记录 vs 记载 (Mencatat)',
    key_difference_summary: 'Mencatat ucapan lisan/kejadian langsung (记录) vs Menuliskan catatan sejarah resmi (记载)',
    words: [
      {
        hanzi: '记录',
        pinyin: 'jìlù',
        meaning_id: 'Menuliskan hal yang didengar langsung atau rekaman saat ini',
        collocations: ['记录口供', '记录岁月', '记录下来'],
        distinguishing_note: 'Bisa notulen rapat, berita acara kepolisian, atau rekor olahraga',
        formality: 'netral'
      },
      {
        hanzi: '记载',
        pinyin: 'jìzǎi',
        meaning_id: 'Menuliskan peristiwa untuk catatan dokumen sejarah',
        collocations: ['记载历史事件', '详细地记载', '记载下来', '回忆录记载了他的历史'],
        distinguishing_note: 'Dokumentasi formal kronik sejarah atau buku riwayat hidup',
        formality: 'formal_tulis'
      }
    ]
  },
  {
    id: 23,
    category_id: 'verbs',
    title: '交换 vs 交流 (Bertukar)',
    key_difference_summary: 'Tukar guling barang/tempat fisik (交换) vs Saling berbagi ide/budaya dua arah (交流)',
    words: [
      {
        hanzi: '交换',
        pinyin: 'jiāohuàn',
        meaning_id: 'Saling menukar barang atau posisi timbal balik',
        collocations: ['交换场地', '交换礼物', '交换意见', '交换看法'],
        distinguishing_note: 'Tukar kado, tukar sisi lapangan tanding, tukar kupon',
        formality: 'netral'
      },
      {
        hanzi: '交流',
        pinyin: 'jiāoliú',
        meaning_id: 'Berkomunikasi dua arah dan saling bertukar pengalaman batin',
        collocations: ['互相交流', '交流经验', '交流思想', '文化交流', '学术交流'],
        distinguishing_note: 'Pertukaran budaya, wawasan akademik, dialog diplomasi',
        formality: 'netral'
      }
    ]
  },
  {
    id: 24,
    category_id: 'verbs',
    title: '禁不起 vs 禁不住 vs 忍不住 (Tidak Tahan)',
    key_difference_summary: 'Benda/orang tak kuat menahan benturan fisik/ujian (禁不起) vs Manusia tak tahan terpaan/dorongan tangis (禁不住) vs Tak kuasa menahan gejolak emosi batin (忍不住)',
    words: [
      {
        hanzi: '禁不起',
        pinyin: 'jīnbùqǐ',
        meaning_id: 'Tidak tahan pukulan keras atau ujian berat (subjek manusia/benda)',
        collocations: ['禁不起打击', '禁不起考验'],
        distinguishing_note: 'Struktur rapuh, tidak kuat menahan cobaan keras atau pukulan',
        formality: 'netral'
      },
      {
        hanzi: '禁不住',
        pinyin: 'jīnbúzhù',
        meaning_id: 'Tidak tahan menahan beban fisik atau tak kuasa menahan reaksi',
        collocations: ['禁不住风雨', '禁不住这么大的分量', '她禁不住哭了起来。'],
        distinguishing_note: 'Bisa untuk fisik tak tahan badai, atau refleks spontan menangis',
        formality: 'netral'
      },
      {
        hanzi: '忍不住',
        pinyin: 'rěnbúzhù',
        meaning_id: 'Tidak bisa mengendalikan diri sehingga terpaksa melakukan aksi',
        collocations: ['他疼得几乎忍不住了。', '她忍不住掉下了眼泪。'],
        distinguishing_note: 'Khusus pengendalian batin terhadap rasa sakit, tawa, atau tangis',
        formality: 'netral'
      }
    ]
  },
  {
    id: 25,
    category_id: 'verbs',
    title: '拘束 vs 束缚 vs 限制 vs 约束 (Mengekang / Membatasi)',
    key_difference_summary: 'Canggung pemalu (拘束) vs Terbelenggu rantai pola pikir (束缚) vs Membatasi kuota/kadar (限制) vs Pengendalian disiplin diri (约束)',
    words: [
      {
        hanzi: '拘束',
        pinyin: 'jūshù',
        meaning_id: 'Membuat sikap kaku terkekang atau merasa canggung di depan orang',
        collocations: ['在陌生人面前他显得很拘束。', '小孩子爱活动，不要拘束他们。'],
        distinguishing_note: 'Bisa kata sifat canggung/pemalu, atau kata kerja mengekang anak kecil',
        formality: 'netral'
      },
      {
        hanzi: '束缚',
        pinyin: 'shùfù',
        meaning_id: 'Membelenggu ruang gerak tangan/kaki atau doktrin pikiran',
        collocations: ['束缚手脚', '束缚思想'],
        distinguishing_note: 'Kiasan belenggu feodal, aturan usang yang mengurung kreativitas',
        connotation: 'negatif',
        formality: 'formal_tulis'
      },
      {
        hanzi: '限制',
        pinyin: 'xiànzhì',
        meaning_id: 'Menetapkan batasan kuota kuantitatif agar tak dilampaui',
        collocations: ['限制人数', '限制范围', '限制规格', '受限制'],
        distinguishing_note: 'Aturan formal: membatasi jumlah penumpang, batas umur, kuota impor',
        formality: 'netral'
      },
      {
        hanzi: '约束',
        pinyin: 'yuēshù',
        meaning_id: 'Membatasi diri sesuai tata tertib atau perjanjian',
        collocations: ['受纪律的约束', '口头协议约束了他们'],
        distinguishing_note: 'Ikatan janji etika kesepakatan atau disiplin organisasi',
        formality: 'netral'
      }
    ]
  },
  {
    id: 26,
    category_id: 'verbs',
    title: '举办 vs 举行 (Menyelenggarakan)',
    key_difference_summary: 'Menggelar pameran/kursus/seminar (举办) vs Melaksanakan seremoni/pertandingan resmi (举行)',
    words: [
      {
        hanzi: '举办',
        pinyin: 'jǔbàn',
        meaning_id: 'Menyelenggarakan dan mengorganisir acara/pelatihan',
        collocations: ['举办培训班', '举办展览会', '举办讲座'],
        distinguishing_note: 'Fokus pada penyelenggaraan institusional: pameran seni, lokakarya, seminar',
        formality: 'netral'
      },
      {
        hanzi: '举行',
        pinyin: 'jǔxíng',
        meaning_id: 'Melaksanakan jalannya upacara atau pertandingan besar',
        collocations: ['举行比赛', '举行典礼', '举行集会'],
        distinguishing_note: 'Fokus pada pelaksanaan seremoni/kontes: upacara wisuda, laga final',
        formality: 'netral'
      }
    ]
  },
  {
    id: 27,
    category_id: 'verbs',
    title: '具备 vs 具有 vs 拥有 (Memiliki)',
    key_difference_summary: 'Memenuhi syarat kelayakan lengkap (具备) vs Memiliki sifat/karakteristik (具有) vs Menguasai aset tanah/populasi masif (拥有)',
    words: [
      {
        hanzi: '具备',
        pinyin: 'jùbèi',
        meaning_id: 'Memiliki kelengkapan kualifikasi atau syarat yang dibutuhkan',
        collocations: ['具备条件', '具备技能', '具备素质', '具备本领'],
        distinguishing_note: 'Memenuhi syarat standar: memenuhi kualifikasi pelamar, memiliki skill',
        formality: 'formal_tulis'
      },
      {
        hanzi: '具有',
        pinyin: 'jùyǒu',
        meaning_id: 'Memiliki sifat khusus atau arti signifikansi tertentu',
        collocations: ['具有耐心', '具有深远的历史意义', '具有时代特点'],
        distinguishing_note: 'Khusus menyandang kualitas abstrak: punya nilai historis, makna zaman',
        object_type: 'abstrak',
        formality: 'formal_tulis'
      },
      {
        hanzi: '拥有',
        pinyin: 'yōngyǒu',
        meaning_id: 'Memiliki kekayaan, tanah, atau populasi dalam jumlah besar',
        collocations: ['拥有土地', '拥有人口', '拥有优势', '拥有权势'],
        distinguishing_note: 'Kepemilikan aset besar, sumber daya kekuasaan atau keunggulan strategis',
        formality: 'netral'
      }
    ]
  },
  {
    id: 28,
    category_id: 'verbs',
    title: '考查 vs 考察 vs 考验 (Menguji / Meneliti / Meninjau)',
    key_difference_summary: 'Menguji nilai akademis berkala (考查) vs Studi banding lapangan (考察) vs Menguji keteguhan iman/tekad di krisis (考验)',
    words: [
      {
        hanzi: '考查',
        pinyin: 'kǎochá',
        meaning_id: 'Memeriksa dan mengevaluasi hasil kinerja/belajar dengan standar',
        collocations: ['考查成绩', '进行全面考查'],
        distinguishing_note: 'Penilaian rutin terhadap capaian prestasi belajar siswa/karyawan',
        formality: 'formal_tulis'
      },
      {
        hanzi: '考察',
        pinyin: 'kǎochá',
        meaning_id: 'Melakukan peninjauan mendalam langsung ke lapangan (survei)',
        collocations: ['考察结果', '考察工作', '考察工程', '实地考察'],
        distinguishing_note: 'Studi banding, peninjauan lokasi proyek, ekspedisi ilmiah geologis',
        formality: 'formal_tulis'
      },
      {
        hanzi: '考验',
        pinyin: 'kǎoyàn',
        meaning_id: 'Menguji keteguhan mental dan kesetiaan melalui situasi sulit',
        collocations: ['考验意志', '考验思想', '考验决心', '严峻考验'],
        distinguishing_note: 'Ujian hidup: menguji tekad juang, cobaan krisis berat',
        formality: 'netral'
      }
    ]
  },
  {
    id: 29,
    category_id: 'verbs',
    title: '可惜 vs 惋惜 vs 遗憾 (Sayang / Menyesal)',
    key_difference_summary: 'Sayang sekali barang rusak/peluang lepas (可惜) vs Menaruh iba pada nasib malang orang (惋惜) vs Penyesalan seumur hidup (遗憾)',
    words: [
      {
        hanzi: '可惜',
        pinyin: 'kěxī',
        meaning_id: 'Merasa sayang atas kekurangan atau rusaknya barang berharga',
        collocations: ['毫不可惜', '可惜时间不够', '这么好的照相机摔坏了，真可惜！'],
        distinguishing_note: 'Sayang waktu terbuang atau kamera bagus pecah berantakan',
        formality: 'netral'
      },
      {
        hanzi: '惋惜',
        pinyin: 'wǎnxī',
        meaning_id: 'Merasa prihatin dan bersedih atas kemalangan/kegagalan orang lain',
        collocations: ['感到惋惜', '觉得惋惜'],
        distinguishing_note: 'Rasa iba terhadap atlet berbakat yang gugur cedera sebelum tanding',
        formality: 'formal_tulis'
      },
      {
        hanzi: '遗憾',
        pinyin: 'yíhàn',
        meaning_id: 'Penyesalan mendalam karena kehilangan momen emas tak tergantikan',
        collocations: ['终生遗憾', '深表遗憾', '感到遗憾', '错过了观看奥运比赛的机会，太遗憾了！'],
        distinguishing_note: 'Penyesalan batin mendalam seumur hidup atas peluang yang terlewat',
        formality: 'netral'
      }
    ]
  },
  {
    id: 30,
    category_id: 'verbs',
    title: '利用 vs 运用 (Memanfaatkan)',
    key_difference_summary: 'Memanfaatkan sumber daya/waktu demi tujuan (利用) vs Menerapkan teori/rumus sesuai karakteristiknya (运用)',
    words: [
      {
        hanzi: '利用',
        pinyin: 'lìyòng',
        meaning_id: 'Memanfaatkan orang/peluang untuk melayani kepentingan tujuan',
        collocations: ['利用时间', '利用经验', '利用地位', '利用手中的权力', '利用他', '利用资源', '利用优势'],
        distinguishing_note: 'Bisa netral (memanfaatkan waktu) atau negatif (memanfaatkan orang demi jabatan)',
        formality: 'netral'
      },
      {
        hanzi: '运用',
        pinyin: 'yùnyòng',
        meaning_id: 'Mengaplikasikan prinsip teori, metode, atau teknologi',
        collocations: ['运用政策', '运用理论', '运用手段', '运用技术'],
        distinguishing_note: 'Khusus ranah metodologi ilmiah: menerapkan teori, formula bahasa, taktik',
        object_type: 'abstrak',
        formality: 'formal_tulis'
      }
    ]
  },
  {
    id: 31,
    category_id: 'verbs',
    title: '培养 vs 培育 vs 抚养 vs 赡养 (Mendidik / Merawat / Menafkahi)',
    key_difference_summary: 'Membina talenta SDM (培养) vs Mengembangbiakkan bibit/pohon (培育) vs Membesarkan anak kecil (抚养) vs Menafkahi orang tua lansia (赡养)',
    words: [
      {
        hanzi: '培养',
        pinyin: 'péiyǎng',
        meaning_id: 'Mendidik dan membina SDM secara sistematis',
        collocations: ['培养人才', '培养下一代', '培养细菌', '培养新品种'],
        distinguishing_note: 'Membina bakat anak bangsa atau kultur bakteri di laboratorium',
        connotation: 'positif',
        formality: 'netral'
      },
      {
        hanzi: '培育',
        pinyin: 'péiyù',
        meaning_id: 'Merawat bibit tanaman muda agar tumbuh mekar',
        collocations: ['培育新品种', '培育树苗', '辛勤培育', '培育青少年'],
        distinguishing_note: 'Khusus pembibitan botani atau pembinaan remaja tunas bangsa',
        connotation: 'positif',
        formality: 'formal_tulis'
      },
      {
        hanzi: '抚养',
        pinyin: 'fǔyǎng',
        meaning_id: 'Membesarkan dan merawat anak kecil hingga dewasa',
        collocations: ['抚养下一代', '父母把我抚养成人'],
        distinguishing_note: 'Arah hubungan: Orang tua merawat membesarkan anak kandung',
        formality: 'formal_tulis'
      },
      {
        hanzi: '赡养',
        pinyin: 'shànyǎng',
        meaning_id: 'Menafkahi dan merawat orang tua di masa tua secara berbakti',
        collocations: ['赡养父母', '赡养老人'],
        distinguishing_note: 'Arah hubungan: Anak dewasa wajib menafkahi orang tua yang lansia',
        formality: 'formal_tulis'
      }
    ]
  },
  {
    id: 32,
    category_id: 'verbs',
    title: '批判 vs 批评 vs 谴责 vs 责备 vs 责怪 (Mengkritik / Menegur / Menyalahkan)',
    key_difference_summary: 'Menolak ideologi secara keras ilmiah (批判) vs Menegur kesalahan untuk evaluasi (批评) vs Mengecam agresi secara internasional (谴责) vs Menegur nurani (责备) vs Menyalahkan dalam obrolan harian (责怪)',
    words: [
      {
        hanzi: '批判',
        pinyin: 'pīpàn',
        meaning_id: 'Mengkritik dan menyangkal doktrin/pemikiran yang dinilai keliru',
        collocations: ['严厉批判', '深入批判', '进行批判', '严肃批判'],
        distinguishing_note: 'Kritik tajam terhadap pandangan filosofis, sastra, atau paham keliru',
        formality: 'formal_tulis'
      },
      {
        hanzi: '批评',
        pinyin: 'pīpíng',
        meaning_id: 'Menyampaikan saran dan evaluasi atas kekurangan seseorang',
        collocations: ['诚恳地批评', '善意地批评', '坦率地批评', '自我批评', '批评教育'],
        distinguishing_note: 'Evaluasi konstruktif di sekolah atau kantor untuk perbaikan kinerja',
        formality: 'netral'
      },
      {
        hanzi: '谴责',
        pinyin: 'qiǎnzé',
        meaning_id: 'Mengecam dan mengutuk tindakan amoral/agresi dengan tegas',
        collocations: ['受到国际社会一致谴责', '谴责这一侵略行径', '他见死不救，受到大家强烈谴责。', '严厉谴责'],
        distinguishing_note: 'Kecaman diplomatik atau teguran keras masyarakat terhadap kejahatan',
        connotation: 'negatif',
        formality: 'formal_tulis'
      },
      {
        hanzi: '责备',
        pinyin: 'zébèi',
        meaning_id: 'Menegur kesalahan seseorang atau teguran dari hati nurani',
        collocations: ['责备别人', '责备自己', '受到良心的责备', '责备的目光'],
        distinguishing_note: 'Bisa teguran personal atau penyesalan batin nurani',
        formality: 'netral'
      },
      {
        hanzi: '责怪',
        pinyin: 'zéguài',
        meaning_id: 'Menyalahkan atau mengomel dalam percakapan sehari-hari',
        collocations: ['互相责怪', '责怪别人', '受到责怪'],
        distinguishing_note: 'Saling menyalahkan santai saat terjadi kekacauan kecil sehari-hari',
        formality: 'lisan_percakapan'
      }
    ]
  },
  {
    id: 33,
    category_id: 'verbs',
    title: '侵犯 vs 侵略 vs 掠夺 (Melanggar / Menginvasi / Menjarah)',
    key_difference_summary: 'Melanggar hak privasi/hak cipta (侵犯) vs Invasi militer antar negara (侵略) vs Merampok sumber daya secara paksa (掠夺)',
    words: [
      {
        hanzi: '侵犯',
        pinyin: 'qīnfàn',
        meaning_id: 'Melanggar hak orang lain atau melintasi perbatasan ilegal',
        collocations: ['侵犯人身自由', '侵犯著作权', '侵犯边境', '侵犯我国领空'],
        distinguishing_note: 'Objek berupa hak asasi, hak cipta lagu/buku, atau batas wilayah udara',
        connotation: 'negatif',
        formality: 'formal_tulis'
      },
      {
        hanzi: '侵略',
        pinyin: 'qīnlüè',
        meaning_id: 'Menyerang kedaulatan negara lain dengan agresi bersenjata',
        collocations: ['侵略政策', '侵略战争', '经济侵略', '文化侵略'],
        distinguishing_note: 'Perang ekspansi militer atau hegemoni ekonomi antar bangsa',
        connotation: 'negatif',
        formality: 'formal_tulis'
      },
      {
        hanzi: '掠夺',
        pinyin: 'lüèduó',
        meaning_id: 'Merampas dan menjarah harta/sumber daya dengan paksa',
        collocations: ['掠夺资源', '大肆掠夺'],
        distinguishing_note: 'Penjarahan masif barang tambang, emas, atau kekayaan alam',
        connotation: 'negatif',
        formality: 'formal_tulis'
      }
    ]
  },
  {
    id: 34,
    category_id: 'verbs',
    title: '缺乏 vs 缺少 (Kurang / Tidak Ada)',
    key_difference_summary: 'Kurang unsur abstrak (缺乏) vs Kurang benda konkret/orang fisik (缺少)',
    words: [
      {
        hanzi: '缺乏',
        pinyin: 'quēfá',
        meaning_id: 'Tidak ada atau kekurangan hal yang bersifat abstrak',
        collocations: ['缺乏斗志', '缺乏信心', '缺乏意志', '缺乏勇气', '缺乏安全感'],
        distinguishing_note: 'Objek kata benda abstrak: keberanian, tekad, rasa aman, pengalaman hidup',
        object_type: 'abstrak',
        formality: 'formal_tulis'
      },
      {
        hanzi: '缺少',
        pinyin: 'quēshǎo',
        meaning_id: 'Kekurangan barang konkret atau tenaga kerja fisik',
        collocations: ['缺少桌子', '缺少资金', '缺少设备', '缺少劳动力'],
        distinguishing_note: 'Objek kata benda konkret: kurang meja, kurang dana tunai, kurang mesin',
        object_type: 'konkret',
        formality: 'netral'
      }
    ]
  },
  {
    id: 35,
    category_id: 'verbs',
    title: '确保 vs 确定 vs 确立 vs 确认 (Memastikan / Menetapkan)',
    key_difference_summary: 'Menjamin 100% tanpa cela (确保) vs Menentukan tanggal/jadwal pasti (确定) vs Memantapkan ideologi kokoh (确立) vs Mengonfirmasi keabsahan (确认)',
    words: [
      {
        hanzi: '确保',
        pinyin: 'quèbǎo',
        meaning_id: 'Menjamin secara pasti tanpa ada kebocoran atau kegagalan',
        collocations: ['确保安全', '确保万无一失', '确保质量'],
        distinguishing_note: 'Memastikan keselamatan nol insiden (万无一失), jaminan mutu prima',
        connotation: 'positif',
        formality: 'formal_tulis'
      },
      {
        hanzi: '确定',
        pinyin: 'quèdìng',
        meaning_id: 'Menetapkan dan memutuskan rute atau skema rencana pasti',
        collocations: ['确定方案', '确定路线', '确定关系', '确定宗旨'],
        distinguishing_note: 'Memutuskan agenda: menentukan rundown acara, menetapkan status hubungan',
        formality: 'netral'
      },
      {
        hanzi: '确立',
        pinyin: 'quèlì',
        meaning_id: 'Membangun dan memantapkan secara teguh dan fundamental',
        collocations: ['确立人生观', '确立信心', '确立新制度'],
        distinguishing_note: 'Memantapkan pandangan hidup, sistem kenegaraan, fondasi hukum',
        formality: 'formal_tulis'
      },
      {
        hanzi: '确认',
        pinyin: 'quèrèn',
        meaning_id: 'Memverifikasi dan mengonfirmasi kebenaran data transaksi',
        collocations: ['经某部门确认', '确认一下', '再次确认'],
        distinguishing_note: 'Konfirmasi pemesanan tiket, validasi identitas nasabah oleh bank',
        formality: 'netral'
      }
    ]
  },
  {
    id: 36,
    category_id: 'verbs',
    title: '搜索 vs 探测 vs 探索 vs 寻找 (Mencari / Menjelajah)',
    key_difference_summary: 'Menyisir target tersembunyi (搜索) vs Sensor radar mendeteksi sinyal (探测) vs Riset filosofis menemukan jawaban (探索) vs Mencari barang hilang harian (寻找)',
    words: [
      {
        hanzi: '搜索',
        pinyin: 'sōusuǒ',
        meaning_id: 'Menyisir dengan teliti mencari orang/benda buronan tersembunyi',
        collocations: ['搜索残敌', '搜索前进', '四处搜索'],
        distinguishing_note: 'Penyisiran pasukan di hutan atau search engine internet mencari arsip',
        formality: 'netral'
      },
      {
        hanzi: '探测',
        pinyin: 'tàncè',
        meaning_id: 'Mendeteksi dan menyelidiki ada/tidaknya sinyal/radiasi/kedalaman',
        collocations: ['探测海底', '高空探测', '探测心里的秘密', '探测深度'],
        distinguishing_note: 'Penggunaan radar ilmiah: mendeteksi dasar laut, satelit cuaca antariksa',
        formality: 'formal_tulis'
      },
      {
        hanzi: '探索',
        pinyin: 'tànsuǒ',
        meaning_id: 'Merenungkan dan meneliti demi menemukan solusi/jawaban hakiki',
        collocations: ['探索宇宙的秘密', '探索真理', '探索途径'],
        distinguishing_note: 'Pencarian hakikat: menjelajahi rahasia alam semesta, mencari jalur inovasi',
        connotation: 'positif',
        formality: 'formal_tulis'
      },
      {
        hanzi: '寻找',
        pinyin: 'xúnzhǎo',
        meaning_id: 'Mencari sesuatu yang dibutuhkan atau orang yang ingin ditemui',
        collocations: ['寻找失物', '寻找真理', '寻找机会', '寻找孩子', '到处寻找'],
        distinguishing_note: 'Kata umum: mencari dompet hilang, mencari anak hilang, mencari lowongan kerja',
        formality: 'netral'
      }
    ]
  },
  {
    id: 37,
    category_id: 'verbs',
    title: '探讨 vs 研究 vs 钻研 (Mengkaji / Meneliti)',
    key_difference_summary: 'Diskusi bersama mencari solusi (探讨) vs Riset sistematis komprehensif (研究) vs Tekun mendalami ilmu secara mandiri (钻研)',
    words: [
      {
        hanzi: '探讨',
        pinyin: 'tàntǎo',
        meaning_id: 'Mendiskusikan bersama topik akademis atau isu penting',
        collocations: ['探讨问题', '共同探讨', '互相探讨', '从不同角度探讨'],
        distinguishing_note: 'Diskusi kolektif/seminar untuk membedah masalah dari berbagai sudut pandang',
        formality: 'formal_tulis'
      },
      {
        hanzi: '研究',
        pinyin: 'yánjiū',
        meaning_id: 'Mencari kebenaran dan hukum alamiah suatu bidang ilmu',
        collocations: ['研究学问', '研究历史', '研究领域', '刻苦研究', '调查研究'],
        distinguishing_note: 'Riset ilmiah formal atau mempertimbangkan keputusan secara matang',
        formality: 'netral'
      },
      {
        hanzi: '钻研',
        pinyin: 'zuānyán',
        meaning_id: 'Meneliti secara tekun mendalam secara mandiri',
        collocations: ['钻研学问', '钻研理论', '钻研业务', '努力钻研', '钻研精神', '刻苦钻研'],
        distinguishing_note: 'Konsentrasi tinggi individual: memeras otak tekun mendalami kitab kuno',
        connotation: 'positif',
        formality: 'formal_tulis'
      }
    ]
  },
  {
    id: 38,
    category_id: 'verbs',
    title: '提供 vs 提示 vs 提醒 vs 提议 (Menyediakan / Mengingatkan / Mengusulkan)',
    key_difference_summary: 'Menyediakan fasilitas/bantuan (提供) vs Memberi petunjuk/clue poin (提示) vs Mengingatkan agar tak lupa (提醒) vs Mengusulkan ide rapat (提议)',
    words: [
      {
        hanzi: '提供',
        pinyin: 'tígōng',
        meaning_id: 'Menyediakan fasilitas, data, atau bantuan logistik',
        collocations: ['提供经验', '提供援助', '为旅客提供方便'],
        distinguishing_note: 'Menyediakan data pendukung, akomodasi kemudahan bagi tamu',
        formality: 'netral'
      },
      {
        hanzi: '提示',
        pinyin: 'tíshì',
        meaning_id: 'Mengungkapkan poin petunjuk agar audiens memperhatikan',
        collocations: ['向学生提示课文要点', '提示大家', '提示一下'],
        distinguishing_note: 'Memberi hint/clue atau menampilkan kisi-kisi poin materi pelajaran',
        formality: 'netral'
      },
      {
        hanzi: '提醒',
        pinyin: 'tíxǐng',
        meaning_id: 'Mengingatkan seseorang agar tidak lupa atau waspada',
        collocations: ['请你提醒我', '到时候请你提个醒儿。'],
        distinguishing_note: 'Mengingatkan jadwal janji, jam minum obat',
        formality: 'netral'
      },
      {
        hanzi: '提议',
        pinyin: 'tíyì',
        meaning_id: 'Mengajukan proposal atau gagasan untuk dibahas bersama',
        collocations: ['我提议现在暂时休会。'],
        distinguishing_note: 'Inisiatif dalam musyawarah: mengusulkan rapat diskors sebentar',
        formality: 'formal_tulis'
      }
    ]
  },
  {
    id: 39,
    category_id: 'verbs',
    title: '调和 vs 调节 vs 调解 vs 调整 (Mendamaikan / Menyesuaikan)',
    key_difference_summary: 'Meredam kontradiksi (调和) vs Menyetel suhu/volume (调节) vs Mediasi hukum dua kubu (调解) vs Kalibrasi harga/jadwal (调整)',
    words: [
      {
        hanzi: '调和',
        pinyin: 'tiáohé',
        meaning_id: 'Mendamaikan konflik agar kedua pihak selaras kembali',
        collocations: ['调和矛盾', '多次调和'],
        distinguishing_note: 'Menyelaraskan kontradiksi batin/perselisihan internal',
        formality: 'formal_tulis'
      },
      {
        hanzi: '调节',
        pinyin: 'tiáojié',
        meaning_id: 'Menyesuaikan dan mengontrol takaran/parameter fisik',
        collocations: ['调节空气', '调节室温', '调节音量'],
        distinguishing_note: 'Mengatur sirkulasi udara, menyetel remote AC ruangan, volume audio',
        formality: 'netral'
      },
      {
        hanzi: '调解',
        pinyin: 'tiáojiě',
        meaning_id: 'Menjadi mediator membujuk pihak bersengketa untuk berdamai',
        collocations: ['调解纷争', '经过调解'],
        distinguishing_note: 'Mediasi formal atas perselisihan hukum atau pertengkaran warga',
        formality: 'formal_tulis'
      },
      {
        hanzi: '调整',
        pinyin: 'tiáozhěng',
        meaning_id: 'Mengubah dan mengalibrasi susunan agar sesuai kondisi baru',
        collocations: ['调整物价', '调整供求关系', '调整领导班子', '调整时间', '调整课程'],
        distinguishing_note: 'Penyesuaian kebijakan harga barang, susunan kabinet kerja, jam jadwal les',
        formality: 'netral'
      }
    ]
  },
  {
    id: 40,
    category_id: 'verbs',
    title: '吸取 vs 吸收 (Menyerap)',
    key_difference_summary: 'Menyerap hikmah pelajaran/pengalaman abstrak (吸取) vs Menyerap nutrisi cair/anggota baru (吸收)',
    words: [
      {
        hanzi: '吸取',
        pinyin: 'xīqǔ',
        meaning_id: 'Menyerap intisari pengalaman dan pelajaran hidup',
        collocations: ['吸取经验', '吸取精华', '吸取营养', '吸取教训'],
        distinguishing_note: 'Cakupan sempit: khusus petik pelajaran kegagalan (教训) atau intisari ide',
        object_type: 'abstrak',
        formality: 'formal_tulis'
      },
      {
        hanzi: '吸收',
        pinyin: 'xīshōu',
        meaning_id: 'Menyerap zat fisik atau menerima anggota baru ke organisasi',
        collocations: ['吸收营养', '吸收水分', '吸收能量', '吸收会员', '吸收新成员'],
        distinguishing_note: 'Bisa biologis (tanaman menyerap air/energi) atau rekrutmen kader/anggota baru',
        object_type: 'umum',
        formality: 'netral'
      }
    ]
  },
  {
    id: 41,
    category_id: 'verbs',
    title: '宣布 vs 宣传 vs 宣告 vs 宣扬 (Mengumumkan / Mempromosikan)',
    key_difference_summary: 'Mengumumkan acara dibuka/hasil juara (宣布) vs Edukasi sosialisasi kampanye (宣传) vs Deklarasi resmi pailit/vonis bebas (宣告) vs Gembar-gembor mempublikasikan (宣扬)',
    words: [
      {
        hanzi: '宣布',
        pinyin: 'xuānbù',
        meaning_id: 'Memberitahukan secara terbuka dan resmi kepada publik',
        collocations: ['宣布成绩', '宣布成立', '宣布大会开幕', '宣布法令', '宣布比赛结果'],
        distinguishing_note: 'Pengumuman pembukaan simposium, hasil kejuaraan, pemenang',
        formality: 'formal_tulis'
      },
      {
        hanzi: '宣传',
        pinyin: 'xuānchuán',
        meaning_id: 'Menjelaskan peraturan atau pesan kampanye agar publik paham',
        collocations: ['向群众宣传交通法规', '宣传节约用水', '宣传法律知识', '进行宣传', '广泛宣传', '宣传好人好事'],
        distinguishing_note: 'Sosialisasi UU lalu lintas, kampanye hemat air bersih kepada warga',
        formality: 'netral'
      },
      {
        hanzi: '宣告',
        pinyin: 'xuāngào',
        meaning_id: 'Menyatakan deklarasi resmi dengan kekuatan hukum/status khidmat',
        collocations: ['宣告破产', '宣告成立', '宣告无罪', '宣告无效'],
        distinguishing_note: 'Vonis pengadilan bebas murni (无罪), vonis pailit kebangkrutan perusahaan',
        formality: 'formal_tulis'
      },
      {
        hanzi: '宣扬',
        pinyin: 'xuānyáng',
        meaning_id: 'Mempromosikan dan menggembar-gemborkan ke seantero tempat',
        collocations: ['宣扬好人好事', '到处宣扬', '大肆宣扬'],
        distinguishing_note: 'Menyebarluaskan cerita keteladanan ke mana-mana, bisa bernada gembar-gembor',
        formality: 'netral'
      }
    ]
  },
  {
    id: 42,
    category_id: 'verbs',
    title: '压迫 vs 压制 vs 压抑 (Menindas / Menekan)',
    key_difference_summary: 'Penindasan politik/militer ke rakyat (压迫) vs Membungkam kebebasan berpendapat paksa (压制) vs Menahan gejolak depresi batin (压抑)',
    words: [
      {
        hanzi: '压迫',
        pinyin: 'yàpò',
        meaning_id: 'Pihak penguasa kuat menindas kaum lemah dengan kekuasaan',
        collocations: ['压迫老百姓', '压迫弱小群体', '阶级压迫', '受压迫'],
        distinguishing_note: 'Penindasan feodal/kolonial terhadap rakyat jelata',
        connotation: 'negatif',
        formality: 'formal_tulis'
      },
      {
        hanzi: '压制',
        pinyin: 'yàzhì',
        meaning_id: 'Membungkam secara paksa agar tidak leluasa bergerak',
        collocations: ['压制民主', '压制自由', '强行压制', '受压制'],
        distinguishing_note: 'Membungkam kebebasan bersuara, menekan suara kritis',
        connotation: 'negatif',
        formality: 'formal_tulis'
      },
      {
        hanzi: '压抑',
        pinyin: 'yàyì',
        meaning_id: 'Mengendalikan dan menahan gejolak perasaan/suasana tertekan',
        collocations: ['压抑感情', '环境压抑', '很压抑'],
        distinguishing_note: 'Kondisi psikologis: memendam emosi sedih, suasana kantor bikin sesak',
        formality: 'netral'
      }
    ]
  },
  {
    id: 43,
    category_id: 'verbs',
    title: '隐蔽 vs 隐藏 vs 隐瞒 (Bersembunyi / Menyembunyikan)',
    key_difference_summary: 'Menyamar/bersembunyi pakai tameng fisik (隐蔽) vs Menyimpan barang/rahasia agar tak ketemu (隐藏) vs Menutup-nutupi fakta kebenaran (隐瞒)',
    words: [
      {
        hanzi: '隐蔽',
        pinyin: 'yǐnbì',
        meaning_id: 'Bersembunyi berlindung di balik benda penutup',
        collocations: ['隐蔽在草丛中', '隐蔽得很好', '隐蔽起来'],
        distinguishing_note: 'Taktik militer/posisi fisik: menyelinap tiarap di balik semak rumput',
        formality: 'netral'
      },
      {
        hanzi: '隐藏',
        pinyin: 'yǐncáng',
        meaning_id: 'Menyembunyikan orang, benda, atau motif agar tidak ditemukan',
        collocations: ['隐藏着一个人', '隐藏着秘密', '隐藏在树林里', '隐藏起来'],
        distinguishing_note: 'Bisa langsung diikuti objek konkret maupun rahasia abstrak',
        formality: 'netral'
      },
      {
        hanzi: '隐瞒',
        pinyin: 'yǐnmán',
        meaning_id: 'Menyembunyikan fakta kebenaran agar orang lain tertipu',
        collocations: ['隐瞒历史', '隐瞒身份', '隐瞒事实真相', '对你没有任何隐瞒'],
        distinguishing_note: 'Menutupi identitas asli, menutup riwayat masa lalu kebenaran',
        connotation: 'negatif',
        formality: 'formal_tulis'
      }
    ]
  },
  {
    id: 44,
    category_id: 'verbs',
    title: '赞美 vs 赞叹 vs 称赞 (Memuji)',
    key_difference_summary: 'Memuji keindahan seni/tanah air (赞美) vs Takjub melongo berdecak kagum (赞叹) vs Pujian lisan atas perbuatan baik (称赞)',
    words: [
      {
        hanzi: '赞美',
        pinyin: 'zànměi',
        meaning_id: 'Memuji keindahan estetika atau kemuliaan jiwa seseorang',
        collocations: ['赞美雷锋', '赞美祖国', '赞美精神', '赞美生活', '赞美技艺'],
        distinguishing_note: 'Puisi memuji tanah air, mengagumi keindahan panorama alam dan seni',
        connotation: 'positif',
        formality: 'netral'
      },
      {
        hanzi: '赞叹',
        pinyin: 'zàntàn',
        meaning_id: 'Mengeluarkan decak kagum luar biasa atas keajaiban',
        collocations: ['令人赞叹', '发出赞叹', '心中赞叹', '赞叹不已'],
        distinguishing_note: 'Ekspresi kekaguman mendalam: tak henti-hentinya berdecak kagum',
        connotation: 'positif',
        formality: 'formal_tulis'
      },
      {
        hanzi: '称赞',
        pinyin: 'chēngzàn',
        meaning_id: 'Memuji perbuatan baik orang lain dalam bentuk perkataan',
        collocations: ['大加称赞', '受到称赞', '竭力称赞'],
        distinguishing_note: 'Apresiasi lisan: guru memuji kebaikan murid yang suka menolong',
        connotation: 'positif',
        formality: 'netral'
      }
    ]
  },
  {
    id: 45,
    category_id: 'verbs',
    title: '增长 vs 增加 vs 增强 vs 增添 (Bertambah / Meningkat)',
    key_difference_summary: 'Meningkat wawasan/output persentase (增长) vs Bertambah jumlah orang/barang (增加) vs Menguatkan stamina/daya tahan (增强) vs Menambah keceriaan/fasilitas (增添)',
    words: [
      {
        hanzi: '增长',
        pinyin: 'zēngzhǎng',
        meaning_id: 'Meningkat dari segi wawasan abstrak atau persentase angka',
        collocations: ['增长体质', '增长经验', '增长见识', '增长才干', '产值增长了 10%。'],
        distinguishing_note: 'Kenaikan wawasan intelektual atau persentase pertumbuhan ekonomi (增长 10%)',
        formality: 'netral'
      },
      {
        hanzi: '增加',
        pinyin: 'zēngjiā',
        meaning_id: 'Menambah kuantitas dari angka dasar yang sudah ada',
        collocations: ['增加品种', '增加力量', '增加收入', '人数增加了 1 倍'],
        distinguishing_note: 'Objek kuantitas konkret: menambah pendapatan gaji, menambah jumlah peserta',
        formality: 'netral'
      },
      {
        hanzi: '增强',
        pinyin: 'zēngqiáng',
        meaning_id: 'Memperkuat daya tahan fisik, ketahanan negara, atau keyakinan',
        collocations: ['增强体质', '增强团结', '增强实力', '增强国力', '增强信心'],
        distinguishing_note: 'Memperkokoh stamina tubuh, memperkuat pertahanan nasional dan rasa percaya diri',
        formality: 'formal_tulis'
      },
      {
        hanzi: '增添',
        pinyin: 'zēngtiān',
        meaning_id: 'Menambah warna suasana, sentuhan puitis, atau perlengkapan',
        collocations: ['增添设备', '增添力量', '增添光彩', '增添诗意', '增添麻烦'],
        distinguishing_note: 'Menambah fasilitas baru, menambah kilau keindahan atau merepotkan',
        formality: 'netral'
      }
    ]
  },
  {
    id: 46,
    category_id: 'verbs',
    title: '增援 vs 支援 vs 资助 vs 援助 (Membantu / Mengirim Bantuan)',
    key_difference_summary: 'Bantuan bala tentara tempur (增援) vs Dukungan logistik/tenaga ke garis depan (支援) vs Beasiswa finansial siswa miskin (资助) vs Bantuan kemanusiaan komprehensif (援助)',
    words: [
      {
        hanzi: '增援',
        pinyin: 'zēngyuán',
        meaning_id: 'Menambah pasukan bala bantuan tentara di medan tempur',
        collocations: ['火速增援', '增援部队', '增援他们'],
        distinguishing_note: 'Konteks militer: mengirim divisi bantuan kilat ke medan laga',
        formality: 'formal_tulis'
      },
      {
        hanzi: '支援',
        pinyin: 'zhīyuán',
        meaning_id: 'Memberikan bantuan nyata tenaga kerja atau logistik ke garda depan',
        collocations: ['支援灾民', '支援前线', '支援边区建设'],
        distinguishing_note: 'Dukungan gotong royong: sukarelawan ke garis depan bencana',
        formality: 'formal_tulis'
      },
      {
        hanzi: '资助',
        pinyin: 'zīzhù',
        meaning_id: 'Memberikan subsidi uang donasi atau perlengkapan belajar',
        collocations: ['资助贫困学生', '资助困难户'],
        distinguishing_note: 'Bantuan uang/beasiswa donatur kepada keluarga prasejahtera',
        formality: 'formal_tulis'
      },
      {
        hanzi: '援助',
        pinyin: 'yuánzhù',
        meaning_id: 'Memberikan paket bantuan kemanusiaan multidimensi',
        collocations: ['援助灾民', '援助困难学生', '援助行动'],
        distinguishing_note: 'Misi diplomasi bantuan internasional kepada korban bencana',
        formality: 'formal_tulis'
      }
    ]
  },
  {
    id: 47,
    category_id: 'verbs',
    title: '展开 vs 展示 vs 展现 vs 开展 (Membentangkan / Memamerkan / Melaksanakan)',
    key_difference_summary: 'Membentangkan sayap/debat besar-besaran (展开) vs Menampilkan produk di etalase (展示) vs Pemandangan indah terhampar di mata (展现) vs Mengembangkan gerakan kampanye (开展)',
    words: [
      {
        hanzi: '展开',
        pinyin: 'zhǎnkāi',
        meaning_id: 'Membuka membentangkan sayap atau melangsungkan debat seru',
        collocations: ['展开双臂', '展开画卷', '展开翅膀', '展开想象', '展开辩论', '全民健身运动在全国普遍展开。'],
        distinguishing_note: 'Merentangkan kedua lengan, menggelar gulungan lukisan, debat terbuka',
        formality: 'netral'
      },
      {
        hanzi: '展示',
        pinyin: 'zhǎnshì',
        meaning_id: 'Memperlihatkan produk karya atau busana secara nyata di display',
        collocations: ['展示图纸', '展示造型', '展示服装', '展示作品', '展示人物的内心世界'],
        distinguishing_note: 'Model memamerkan busana baru, peragaan maket arsitektur',
        formality: 'netral'
      },
      {
        hanzi: '展现',
        pinyin: 'zhǎnxiàn',
        meaning_id: 'Gambaran indah terbentang nyata di depan mata',
        collocations: ['美丽的校园展现在眼前。', '展现出美好的前景'],
        distinguishing_note: 'Pemandangan panorama kampus asri terhampar jelas di pelupuk mata',
        formality: 'formal_tulis'
      },
      {
        hanzi: '开展',
        pinyin: 'kāizhǎn',
        meaning_id: 'Melaksanakan dan mengembangkan aktivitas dari kecil menjadi besar',
        collocations: ['开展活动', '开展批评', '开展运动', '开展竞赛', '开展下去', '活动开展起来', '开展得轰轰烈烈', '开展了一年'],
        distinguishing_note: 'Bisa diikuti komplemen hasil (开展得轰轰烈烈), meluncurkan lomba',
        formality: 'formal_tulis'
      }
    ]
  },
  {
    id: 48,
    category_id: 'verbs',
    title: '证明 vs 证实 (Membuktikan)',
    key_difference_summary: 'Fakta membuktikan kebenaran (证明) vs Hasil penyelidikan mengonfirmasi kebenaran (证实)',
    words: [
      {
        hanzi: '证明',
        pinyin: 'zhèngmíng',
        meaning_id: 'Membuktikan atau memastikan kebenaran menggunakan bukti sahih',
        collocations: ['事实证明，你的判断是错误的。'],
        distinguishing_note: 'Fakta objektif membuktikan argumen atau surat keterangan sertifikasi',
        formality: 'netral'
      },
      {
        hanzi: '证实',
        pinyin: 'zhèngshí',
        meaning_id: 'Mengonfirmasi bahwa suatu kabar/dugaan memang 100% benar',
        collocations: ['调查的结果证实了他说的是谎言。'],
        distinguishing_note: 'Hasil investigasi membuktikan kebohongan tersangka terbukti nyata',
        formality: 'formal_tulis'
      }
    ]
  },
  {
    id: 49,
    category_id: 'verbs',
    title: '支撑 vs 支持 (Menopang / Mendukung)',
    key_difference_summary: 'Menopang fisik agar tak rubuh (支撑) vs Memberi dukungan semangat/moral (支持)',
    words: [
      {
        hanzi: '支撑',
        pinyin: 'zhīchēng',
        meaning_id: 'Menahan beban tekanan berat agar tidak roboh',
        collocations: ['木棍支撑着小树。', '支撑局面', '支撑场面', '支撑门户'],
        distinguishing_note: 'Tiang kayu menopang pohon agar tak tumbang, menopang beban finansial keluarga',
        formality: 'netral'
      },
      {
        hanzi: '支持',
        pinyin: 'zhīchí',
        meaning_id: 'Memberikan dukungan moril/dana atau bertahan dengan susah payah',
        collocations: ['大家支持你。', '支持正确意见', '给予精神上、物质上的大力支持', '累得支持不住了'],
        distinguishing_note: 'Mendukung usulan positif, menyokong kawan',
        formality: 'netral'
      }
    ]
  },
  {
    id: 50,
    category_id: 'verbs',
    title: '阻碍 vs 阻挡 vs 阻止 vs 妨碍 (Menghalangi / Menghentikan)',
    key_difference_summary: 'Menghambat kemajuan ekonomi/lalu lintas (阻碍) vs Memblokade serangan musuh (阻挡) vs Melarang orang minum alkohol (阻止) vs Mengganggu ketenangan kerja (妨碍)',
    words: [
      {
        hanzi: '阻碍',
        pinyin: 'zǔ\'ài',
        meaning_id: 'Membuat kelancaran terhambat sehingga tidak leluasa melaju',
        collocations: ['随便停车会阻碍交通。', '阻碍前进', '阻碍发展', '阻碍通行'],
        distinguishing_note: 'Parkir sembarangan merintangi laju lalu lintas, menghambat kemajuan teknologi',
        formality: 'netral'
      },
      {
        hanzi: '阻挡',
        pinyin: 'zǔdǎng',
        meaning_id: 'Menahan secara fisik agar tidak menerobos maju',
        collocations: ['阻挡进攻', '阻挡道路', '阻挡视线', '阻挡人群'],
        distinguishing_note: 'Benteng menghalau serangan militer musuh, menghalangi pandangan mata',
        formality: 'netral'
      },
      {
        hanzi: '阻止',
        pinyin: 'zǔzhǐ',
        meaning_id: 'Menghentikan orang agar tidak berbuat hal berbahaya',
        collocations: ['阻止他喝酒', '阻止别人', '阻止历史车轮的前进', '极力阻止', '设法阻止'],
        distinguishing_note: 'Tindakan aktif mengintervensi orang agar berhenti minum miras / berbuat salah',
        formality: 'netral'
      },
      {
        hanzi: '妨碍',
        pinyin: 'fáng\'ài',
        meaning_id: 'Mengganggu orang lain sehingga tidak bisa istirahat/bekerja lancar',
        collocations: ['妨碍交通', '妨碍了我', '妨碍休息', '上班不要打电话聊天儿，以免妨碍别人工作。', '妨碍发展'],
        distinguishing_note: 'Mengobrol telepon saat jam kantor mengganggu konsentrasi rekan kerja',
        formality: 'netral'
      }
    ]
  }
];
