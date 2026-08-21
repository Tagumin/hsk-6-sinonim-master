import { SynonymGroup } from '../types';

export const prepositionsData: SynonymGroup[] = [
  {
    id: 401,
    category_id: 'prepositions',
    title: '给 vs 为 vs 替 (Untuk / Kepada / Menggantikan)',
    key_difference_summary: 'Mengenalkan penerima/sasaran aksi (给) vs Demi tujuan/alasan luas (为) vs Menggantikan peran orang lain (替)',
    words: [
      {
        hanzi: '给',
        pinyin: 'gěi',
        meaning_id: 'Memperkenalkan objek penerima, korban tindakan, atau pelaku tindakan',
        collocations: ['医生正在给病人检查身体。', '刀给手弄破了。', '桌子上的报纸给风吹跑了。'],
        distinguishing_note: 'Mengenalkan penerima langsung bantuan/pemeriksaan atau kalimat pasif lisan',
        formality: 'netral'
      },
      {
        hanzi: '为',
        pinyin: 'wèi',
        meaning_id: 'Cakupan penggunaan lebih luas dari 为了: demi alasan, tujuan, atau demi seseorang',
        collocations: ['为学习汉语，他来到中国。', '大家都为他着急。'],
        distinguishing_note: 'Memperkenalkan motif tujuan: demi belajar bahasa Mandarin, cemas demi dia',
        formality: 'netral'
      },
      {
        hanzi: '替',
        pinyin: 'tì',
        meaning_id: 'Menggantikan posisi/peran orang lain dalam memikul sesuatu',
        collocations: ['孩子的书包太重了，妈妈替孩子拿书包。', '他考试没通过，同学们都在替他难过。'],
        distinguishing_note: 'Khusus mengambil alih beban peran orang lain (ibu menggantikan anak membawakan tas)',
        formality: 'netral'
      }
    ]
  },
  {
    id: 402,
    category_id: 'prepositions',
    title: '关于 vs 对于 vs 对 (Mengenai / Terhadap Topik / Terhadap Sikap)',
    key_difference_summary: 'Topik bahasan luas di awal kalimat (关于) vs Perlakuan sikap/analisis atas isu (对于) vs Sikap ramah/arah sasaran orang langsung (对)',
    words: [
      {
        hanzi: '关于',
        pinyin: 'guānyú',
        meaning_id: 'Memperkenalkan topik besar yang dibahas dalam buku/cerita',
        collocations: ['我正在读一本关于世界历史的书。', '关于中秋节，这里有一个美丽的传说。'],
        distinguishing_note: 'Bisa berdiri di awal kalimat; tidak bisa ditaruh setelah subjek bila menerangkan seluruh klausa',
        formality: 'netral'
      },
      {
        hanzi: '对于',
        pinyin: 'duìyú',
        meaning_id: 'Memperkenalkan hubungan perlakuan atas suatu isu permasalahan',
        collocations: ['对于这个问题，大家的看法是完全一致的。'],
        distinguishing_note: 'Fokus pada sudut pandang evaluasi terhadap masalah tertentu',
        formality: 'formal_tulis'
      },
      {
        hanzi: '对',
        pinyin: 'duì',
        meaning_id: 'Memperkenalkan objek sasaran perlakuan emosi/perilaku',
        collocations: ['你不要对别人说起这件事。', '老师对我们很关心。'],
        distinguishing_note: 'Bisa menghubungkan sikap personal: guru sangat perhatian terhadap murid (老师对我们)',
        formality: 'netral'
      }
    ]
  },
  {
    id: 403,
    category_id: 'prepositions',
    title: '从 vs 自 vs 自从 (Dari Titik / Sejak Waktu / Sejak Dulu Lampau)',
    key_difference_summary: 'Dari titik tempat/arah/waktu luas (从) vs Titik waktu/tempat formal (自) vs Khusus titik awal waktu masa lampau (自从)',
    words: [
      {
        hanzi: '从',
        pinyin: 'cóng',
        meaning_id: 'Menyatakan titik tolak awal tempat, rentang, jalur lintasan, atau acuan',
        collocations: ['从现在起，我要努力学习。', '你从桥上走，我从桥下走。', '从笔迹看，这字是老孙写的。'],
        distinguishing_note: 'Paling fleksibel: dari jembatan, dari tulisan tangan, dari sekarang',
        formality: 'netral'
      },
      {
        hanzi: '自',
        pinyin: 'zì',
        meaning_id: 'Menyatakan titik awal waktu dan tempat (gaya bahasa tulis ringkas)',
        collocations: ['自去年以来，他一共发表了三篇论文。', '校车是自东大门开进校园来的。'],
        distinguishing_note: 'Sering dipakai dalam tulisan: 自去年以来, 自东向西',
        formality: 'formal_tulis'
      },
      {
        hanzi: '自从',
        pinyin: 'zìcóng',
        meaning_id: 'Hanya menyatakan titik awal waktu di masa lampau (sejak dulu)',
        collocations: ['自从上了小学，这孩子懂事多了。'],
        distinguishing_note: 'Hanya untuk penanda waktu yang sudah terjadi di masa lalu (sejak masuk SD)',
        formality: 'netral'
      }
    ]
  },
  {
    id: 404,
    category_id: 'prepositions',
    title: '按照 vs 依照 vs 遵照 (Sesuai Arahan / Mengikuti UU Hukum / Mematuhi Petunjuk Atasan)',
    key_difference_summary: 'Berdasarkan fakta/aturan sekolah umum (按照) vs Berdasarkan pasal undang-undang hukum formal (依照) vs Menjalankan amanat perintah atasan (遵照)',
    words: [
      {
        hanzi: '按照',
        pinyin: 'ànzhào',
        meaning_id: 'Menekankan acuan dasar pedoman suatu tindakan umum',
        collocations: ['按照事实说话。', '按照学校的规定办。'],
        distinguishing_note: 'Pedoman harian: bicara berdasarkan fakta, mematuhi SOP sekolah',
        formality: 'netral'
      },
      {
        hanzi: '依照',
        pinyin: 'yīzhào',
        meaning_id: 'Mengikuti secara persis teks hukum atau mereplikasi sampel cetakan',
        collocations: ['依照中华人民共和国宪法办理。', '依照原样复制一件。'],
        distinguishing_note: 'Dipakai dalam naskah hukum/pasal konstitusi dan replika cetak barang',
        formality: 'formal_tulis'
      },
      {
        hanzi: '遵照',
        pinyin: 'zūnzhào',
        meaning_id: 'Mematuhi instruksi atasan, amanat pimpinan dan nilai luhur',
        collocations: ['遵照上级的指示办事。'],
        distinguishing_note: 'Tindakan bawahan yang patuh menjalankan instruksi perintah atasan',
        formality: 'formal_tulis'
      }
    ]
  },
  {
    id: 405,
    category_id: 'prepositions',
    title: '顺着 vs 沿着 vs 随着 (Menyusuri Jalan / Mengikuti Lintasan Proses / Seiring Perubahan Waktu)',
    key_difference_summary: 'Mengikuti arah tunjuk jalan (顺着) vs Menyusuri garis tepi jalan/alur reformasi (沿着) vs Seiring perubahan musim/iringan suara (随着)',
    words: [
      {
        hanzi: '顺着',
        pinyin: 'shùnzhe',
        meaning_id: 'Mengikuti jalur atau arah yang ditunjukkan seseorang',
        collocations: ['顺着大路往东走，就能找到了。', '顺着他指点的方向走，肯定没错儿。'],
        distinguishing_note: 'Mengikuti arah tunjuk jari atau menyusuri jalan besar ke timur',
        formality: 'netral'
      },
      {
        hanzi: '沿着',
        pinyin: 'yánzhe',
        meaning_id: 'Menyusuri tepian rute fisik atau menapaki jalan proses abstrak',
        collocations: ['沿着长安街向前走，就能看见天安门。', '沿着改革开放的道路继续走下去。'],
        distinguishing_note: 'Menyusuri jalan protokol Chang\'an Avenue atau menapaki jalur reformasi',
        formality: 'formal_tulis'
      },
      {
        hanzi: '随着',
        pinyin: 'suízhe',
        meaning_id: 'Seiring kondisi perubahan cuaca/waktu atau iringan suara keras',
        collocations: ['随着天气一天天变暖，人们的户外活动开始多了起来。', '随着一声巨响，整座楼倒塌了。'],
        distinguishing_note: 'Pola: 随着……的发展/变化 (seiring berjalannya waktu & cuaca menghangat)',
        formality: 'formal_tulis'
      }
    ]
  },
  {
    id: 406,
    category_id: 'prepositions',
    title: '为了 vs 以 vs 凭 vs 拿 (Demi Tujuan / Dengan Sarana Nilai / Berdasarkan Karcis / Menggunakan Objek)',
    key_difference_summary: 'Demi meraih target tujuan (为了) vs Dengan prestasi gemilang/semangat (以) vs Bermodalkan tiket/karcis (凭) vs Menjadikan objek candaan (拿)',
    words: [
      {
        hanzi: '为了',
        pinyin: 'wèile',
        meaning_id: 'Menyatakan target tujuan yang ingin dicapai (bisa di klausa 1 atau 2)',
        collocations: ['他为了养家不得不去拼命工作。', '我是为了他才来到这个城市的。'],
        distinguishing_note: 'Menerangkan motivasi tujuan (demi menafkahi keluarga kerja banting tulang)',
        formality: 'netral'
      },
      {
        hanzi: '以',
        pinyin: 'yǐ',
        meaning_id: 'Menyatakan dasar, sarana, atau sikap yang digunakan bertindak',
        collocations: ['他以优异的成绩通过了新HSK（六级）考试。', '同学们以饱满的热情参加了比赛。'],
        distinguishing_note: 'Dengan modal skor tinggi, dengan semangat membara (以饱满的热情)',
        formality: 'formal_tulis'
      },
      {
        hanzi: '凭',
        pinyin: 'píng',
        meaning_id: 'Bersandar pada, mengandalkan bukti karcis/tiket atau dasar hak',
        collocations: ['凭票才能看电影。', '你凭什么打人？'],
        distinguishing_note: 'Masuk bioskop wajib bawa karcis (凭票入场), atas dasar hak apa kamu memukul',
        formality: 'netral'
      },
      {
        hanzi: '拿',
        pinyin: 'ná',
        meaning_id: 'Memperkenalkan objek sasaran perlakuan (bermakna 把 / 对)',
        collocations: ['别拿我开玩笑。', '你能拿他怎么样呢？'],
        distinguishing_note: 'Ragam lisan: jangan jadikan aku bahan lelucon (别拿我开玩笑)',
        formality: 'lisan_percakapan'
      }
    ]
  },
  {
    id: 407,
    category_id: 'prepositions',
    title: '经过 vs 通过 (Melewati Proses Pembersihan / Melalui Perantara Sarana)',
    key_difference_summary: 'Melewati tahapan proses waktu pembersihan (经过) vs Menggunakan perantara media/studi untuk meraih tujuan (通过)',
    words: [
      {
        hanzi: '经过',
        pinyin: 'jīngguò',
        meaning_id: 'Memperkenalkan tahapan proses waktu yang mengubah situasi',
        collocations: ['屋子经过打扫，干净多了。', '经过多次找他谈话，他想通了。'],
        distinguishing_note: 'Setelah melalui tahapan pembersihan/konseling, kondisi berubah bersih',
        formality: 'netral'
      },
      {
        hanzi: '通过',
        pinyin: 'tōngguò',
        meaning_id: 'Menggunakan pihak ketiga, media atau belajar sebagai sarana perantara',
        collocations: ['通过学习，大家统一了认识。'],
        distinguishing_note: 'Melalui sarana penataran/diskusi, pemahaman bersama berhasil disatukan',
        formality: 'formal_tulis'
      }
    ]
  }
];
