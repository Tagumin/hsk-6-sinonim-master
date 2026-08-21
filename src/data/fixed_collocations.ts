import { SynonymGroup } from '../types';

export const fixedCollocationsData: SynonymGroup[] = [
  {
    id: 601,
    category_id: 'fixed_collocations',
    title: '从……着手 vs 从……来看 (Mulai Dari / Ditinjau Dari)',
    key_difference_summary: 'Titik awal memulai pekerjaan (从……着手) vs Sudut pandang meninjau fakta situasi (从……来看)',
    words: [
      {
        hanzi: '从……着手',
        pinyin: 'cóng ... zhuóshǒu',
        meaning_id: 'Memulai penanganan pekerjaan dari titik/aspek tertentu',
        collocations: ['从细节着手，才能把事情办得圆满。'],
        distinguishing_note: 'Titik awal implementasi tindakan taktis (mulai dari detail)',
        formality: 'formal_tulis'
      },
      {
        hanzi: '从……来看',
        pinyin: 'cóng ... láikàn',
        meaning_id: 'Ditinjau / dipandang dari sudut kondisi tertentu',
        collocations: ['从当前现状来看，高素质的教师队伍建设还不是太乐观的。'],
        distinguishing_note: 'Sudut pandang pengamatan analisis data/situasi masa kini',
        formality: 'formal_tulis'
      }
    ]
  },
  {
    id: 602,
    category_id: 'fixed_collocations',
    title: '像……似的 vs 对……有益 vs 对……有害 (Bagaikan / Berfaedah Bagi / Berbahaya Bagi)',
    key_difference_summary: 'Perumpamaan metafora (像……似的) vs Bermanfaat positif bagi kesehatan (对……有益) vs Merusak/merugikan (对……有害)',
    words: [
      {
        hanzi: '像……似的',
        pinyin: 'xiàng ... shìde',
        meaning_id: 'Bagaikan, seolah-olah seperti (metafora perbandingan)',
        collocations: ['她对我像妈妈似的。', '武汉的夏天热得像火炉似的。'],
        distinguishing_note: 'Perbandingan kiasan (musim panas sepanas tungku api)',
        formality: 'netral'
      },
      {
        hanzi: '对……有益',
        pinyin: 'duì ... yǒuyì',
        meaning_id: 'Membawa faedah/manfaat kesehatan bagi tubuh atau lingkungan',
        collocations: ['有人说，穿高跟鞋对身体有益，其实不然。'],
        distinguishing_note: 'Dampak positif menyehatkan',
        connotation: 'positif',
        formality: 'formal_tulis'
      },
      {
        hanzi: '对……有害',
        pinyin: 'duì ... yǒuhài',
        meaning_id: 'Membawa dampak buruk beracun atau merusak tubuh',
        collocations: ['吸烟对身体有害。'],
        distinguishing_note: 'Dampak racun/polusi negatif (merokok merusak kesehatan)',
        connotation: 'negatif',
        formality: 'formal_tulis'
      }
    ]
  },
  {
    id: 603,
    category_id: 'fixed_collocations',
    title: '由……组成 / 构成 / 造成 (Terdiri Dari / Disusun Oleh / Disebabkan Oleh)',
    key_difference_summary: 'Terdiri dari anggota manusia/unit (由……组成) vs Komposisi atom/kimiawi molekul (由……构成) vs Disebabkan oleh kelalaian (由……造成)',
    words: [
      {
        hanzi: '由……组成',
        pinyin: 'yóu ... zǔchéng',
        meaning_id: 'Terdiri atas gabungan beberapa anggota orang/komponen organisasi',
        collocations: ['我们班由 40 名同学组成。'],
        distinguishing_note: 'Struktur tim atau anggota kelas rombel',
        formality: 'netral'
      },
      {
        hanzi: '由……构成',
        pinyin: 'yóu ... gòuchéng',
        meaning_id: 'Disusun atas partikel kimia/elemen mikroskopis',
        collocations: ['水是由两个氢原子、一个氧原子构成的。'],
        distinguishing_note: 'Struktur molekul atom sains atau unsur pembentuk konsep',
        formality: 'formal_tulis'
      }
    ]
  },
  {
    id: 604,
    category_id: 'fixed_collocations',
    title: '和 / 与……相比 vs 就……来看 vs 拿……来说 (Dibandingkan Dengan / Ditinjau Dari Masalah / Contohnya Kasus)',
    key_difference_summary: 'Perbandingan dua subjek (和/与……相比) vs Sudut pandang khusus masalah (就……来看) vs Mengambil contoh studi kasus (拿……来说)',
    words: [
      {
        hanzi: '和 / 与……相比',
        pinyin: 'hé / yǔ ... xiāngbǐ',
        meaning_id: 'Dibandingkan dengan pihak A, pihak B lebih...',
        collocations: ['和妹妹相比，姐姐更聪明些。'],
        distinguishing_note: 'Pola komparasi eksplisit dua hal atau orang',
        formality: 'netral'
      },
      {
        hanzi: '就……来看',
        pinyin: 'jiù ... láikàn',
        meaning_id: 'Khusus ditinjau dari perkara ini saja',
        collocations: ['就这件事来看，你做得有点儿欠考虑。'],
        distinguishing_note: 'Membatasi tinjauan analisis pada satu kasus spesifik',
        formality: 'formal_tulis'
      },
      {
        hanzi: '拿……来说',
        pinyin: 'ná ... láishuō',
        meaning_id: 'Mengambil contoh konkret hal tertentu sebagai perumpamaan',
        collocations: ['拿这件事来说，就是你做得不好。'],
        distinguishing_note: 'Menjadikan suatu contoh sebagai bukti nyata dalam pembicaraan',
        formality: 'lisan_percakapan'
      }
    ]
  },
  {
    id: 605,
    category_id: 'fixed_collocations',
    title: '动词 + 于 vs 跟……一样 / 相同 / 相似 (Verba + 于 / Persis Sama Mirip)',
    key_difference_summary: 'Menyatakan sebab/tempat formal (死于/生于) vs Tingkat kesamaan perbandingan (跟……一样/相同/相似)',
    words: [
      {
        hanzi: '动词 + 于',
        pinyin: 'dòngcí + yú',
        meaning_id: 'Menyatakan penyebab kematian, asal waktu, atau lokasi (mati karena diabetes: 死于)',
        collocations: ['他父亲死于糖尿病。', '诞生于1900年'],
        distinguishing_note: 'Kombinasi formal: 死于 (wafat karena), 来源于 (bersumber dari), 属于 (termasuk)',
        formality: 'formal_tulis'
      },
      {
        hanzi: '跟……一样 / 相同 / 相似',
        pinyin: 'gēn ... yíyàng / xiāngtóng / xiāngsì',
        meaning_id: 'Persis sama atau mirip dengan subjek pembanding',
        collocations: ['她长得跟妈妈一样漂亮。'],
        distinguishing_note: 'Menyatakan derajat kemiripan fisik atau sifat',
        formality: 'netral'
      }
    ]
  },
  {
    id: 606,
    category_id: 'fixed_collocations',
    title: '与 / 和 / 跟……有关 vs 应……邀请 vs 在……看来 vs 到……为止 (Terkait Dengan / Atas Undangan Resmi / Menurut Pandangan / Hingga Saat Ini)',
    key_difference_summary: 'Korelasi sebab (……有关) vs Memenuhi undangan kehormatan (应……邀请) vs Sudut pandang subjektif (在……看来) vs Batas tenggat waktu (到……为止)',
    words: [
      {
        hanzi: '与 / 和 / 跟……有关',
        pinyin: 'yǔ / hé / gēn ... yǒuguān',
        meaning_id: 'Memiliki korelasi atau keterkaitan dengan suatu faktor',
        collocations: ['孩子视力下降和室内光线不足有关。'],
        distinguishing_note: 'Hubungan korelasi sebab: penurunan visus mata terkait dengan pencahayaan redup',
        formality: 'netral'
      },
      {
        hanzi: '应……邀请',
        pinyin: 'yìng ... yāoqǐng',
        meaning_id: 'Memenuhi dan menyambut undangan resmi dari pihak pengundang',
        collocations: ['应韩方邀请，我们参加了这个会议。'],
        distinguishing_note: 'Protokol diplomasi dan kunjungan kehormatan kenegaraan',
        formality: 'formal_tulis'
      },
      {
        hanzi: '在……看来',
        pinyin: 'zài ... kànlái',
        meaning_id: 'Menurut sudut pandang orang tertentu (menurut saya / menurut publik)',
        collocations: ['在任何人看来，这件事都是你的错。'],
        distinguishing_note: 'Menyatakan opini dari kacamata orang yang bersangkutan',
        formality: 'netral'
      },
      {
        hanzi: '到……为止',
        pinyin: 'dào ... wéizhǐ',
        meaning_id: 'Hingga titik batas waktu/tempat tertentu saja',
        collocations: ['到目前为止，我们已经十天没有联系了。'],
        distinguishing_note: 'Pola baku: 到目前为止 (sampai saat ini), 到此为止 (cukup sampai di sini)',
        formality: 'netral'
      }
    ]
  },
  {
    id: 607,
    category_id: 'fixed_collocations',
    title: '为了……而…… vs 以……为…… vs 在……方面 vs 当……时 / 之际 / 的时候 vs 为……担心 (Pola Frasa Tetap Kunci HSK 6)',
    key_difference_summary: 'Berjuang demi tujuan (为了……而……) vs Menjadikan X sebagai Y (以……为……) vs Dalam ranah aspek (在……方面) vs Momen saat terjadinya peristiwa (当……之际) vs Mengkhawatirkan seseorang (为……担心)',
    words: [
      {
        hanzi: '为了……而……',
        pinyin: 'wèile ... ér ...',
        meaning_id: 'Melakukan perjuangan keras demi meraih cita-cita luhur',
        collocations: ['每个人都在为了拥有更好的生活品质而努力着。'],
        distinguishing_note: 'Pola retorika: berjuang keras demi mewujudkan mutu hidup lebih baik',
        formality: 'formal_tulis'
      },
      {
        hanzi: '以……为……',
        pinyin: 'yǐ ... wéi ...',
        meaning_id: 'Menjadikan suatu hal sebagai pedoman dasar / makanan pokok / pusat',
        collocations: ['南方人以大米为主食。'],
        distinguishing_note: 'Pola klasik: 以大米为主食 (menjadikan beras sebagai makanan pokok)',
        formality: 'formal_tulis'
      },
      {
        hanzi: '在……方面',
        pinyin: 'zài ... fāngmiàn',
        meaning_id: 'Ditinjau dalam aspek atau domain ranah tertentu',
        collocations: ['在人际关系方面，他不太会处理。'],
        distinguishing_note: 'Membatasi lingkup kompetensi: dalam urusan hubungan interpersonal',
        formality: 'netral'
      },
      {
        hanzi: '当……时 / 之际 / 的时候',
        pinyin: 'dāng ... shí / zhījì / deshíhou',
        meaning_id: 'Pada saat momen krusial/waktu peristiwa sedang berlangsung',
        collocations: ['当消息传来的时候，全场沸腾了。'],
        distinguishing_note: 'Saat kabar baik tiba, seluruh aula bersorak gemuruh',
        formality: 'netral'
      },
      {
        hanzi: '为……担心',
        pinyin: 'wèi ... dānxīn',
        meaning_id: 'Merasa cemas dan mengkhawatirkan keselamatan seseorang',
        collocations: ['我在这儿很好，不用为我担心。'],
        distinguishing_note: 'Pola tetap: jangan khawatirkan saya (不用为我担心)',
        formality: 'netral'
      }
    ]
  }
];
