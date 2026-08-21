import { SynonymGroup } from '../types';

export const conjunctionsData: SynonymGroup[] = [
  {
    id: 501,
    category_id: 'conjunctions',
    title: '及 vs 以及 vs 连同 (Dan / Serta / Beserta Dengan)',
    key_difference_summary: 'Menghubungkan kata benda sejajar (及) vs Menghubungkan kata benda/frasa kerja luas (以及) vs Beserta dengan pasukan (连同)',
    words: [
      {
        hanzi: '及',
        pinyin: 'jí',
        meaning_id: 'Menghubungkan kata benda atau frasa benda yang sejajar',
        collocations: ['代表团访问了美国、德国、墨西哥及澳大利亚。'],
        distinguishing_note: 'Khusus menghubungkan kata benda nomina setara di urutan terakhir',
        formality: 'formal_tulis'
      },
      {
        hanzi: '以及',
        pinyin: 'yǐjí',
        meaning_id: 'Menghubungkan frasa nomina, frasa verba, maupun klausa panjang',
        collocations: ['由于自己的努力以及老师傅的帮助，他很快就掌握了新技术。'],
        distinguishing_note: 'Lebih fleksibel dari 及: bisa menghubungkan klausa tindakan',
        formality: 'formal_tulis'
      },
      {
        hanzi: '连同',
        pinyin: 'liántóng',
        meaning_id: 'Bersama-sama dengan; mengikutsertakan komponen tambahan',
        collocations: ['连同他们的兵力，我们一共十万人。'],
        distinguishing_note: 'Menghitung totalitas fisik (termasuk/beserta dengan bala bantuan mereka)',
        formality: 'formal_tulis'
      }
    ]
  },
  {
    id: 502,
    category_id: 'conjunctions',
    title: '不管 vs 不论 vs 无论 vs 尽管 (Apapun Kondisinya / Entah / Walaupun Konsesi)',
    key_difference_summary: 'Kondisi apapun tak peduli (不管) vs Bentuk kondisi hipotetis (不论) vs Ragam tulis elegan tak peduli kaya/miskin (无论) vs Walaupun sudah terjadi (尽管)',
    words: [
      {
        hanzi: '不管',
        pinyin: 'bùguǎn',
        meaning_id: 'Dalam kondisi apapun, situasi/kesimpulan tidak berubah',
        collocations: ['不管谁有困难，我们都应该帮助。'],
        distinguishing_note: 'Ragam lisan akrab: siapapun yang kesusahan wajib dibantu',
        formality: 'netral'
      },
      {
        hanzi: '不论',
        pinyin: 'búlùn',
        meaning_id: 'Kondisi berbeda apapun hasilnya tetap sama',
        collocations: ['不论我怎么劝他，他就是不听。'],
        distinguishing_note: 'Bisa dipadukan dengan kata tanya (不论怎么……)',
        formality: 'netral'
      },
      {
        hanzi: '无论',
        pinyin: 'wúlùn',
        meaning_id: 'Nuansa bahasa tulis formal: tak peduli opsi A atau B',
        collocations: ['无论他贫穷还是富有，你都愿意跟他在一起吗？'],
        distinguishing_note: 'Pola: 无论……还是…… (entah miskin maupun kaya raya)',
        formality: 'formal_tulis'
      },
      {
        hanzi: '尽管',
        pinyin: 'jǐnguǎn',
        meaning_id: 'Walaupun/meskipun fakta sudah terjadi; (adv) silakan leluasa',
        collocations: ['尽管已经是初春了，但是天气仍然像冬天一样冷。'],
        distinguishing_note: 'Menyatakan konsesi konsesi fakta yang berlawanan dengan realitas',
        formality: 'netral'
      }
    ]
  },
  {
    id: 503,
    category_id: 'conjunctions',
    title: '那么 vs 于是 (Maka Dari Itu / Lalu Kemudian Spontan)',
    key_difference_summary: 'Menarik kesimpulan kesepakatan (那么) vs Kelanjutan aksi kronologis sebab akibat jelas (于是)',
    words: [
      {
        hanzi: '那么',
        pinyin: 'nàme',
        meaning_id: 'Memperkenalkan klausa hasil penilaian (pola: 如果……那么……)',
        collocations: ['如果大家没意见的话，那么我们就按照这个规定实行了。'],
        distinguishing_note: 'Sering dipasangkan dengan 如果, 要是, 既然 untuk merangkum keputusan',
        formality: 'netral'
      },
      {
        hanzi: '于是',
        pinyin: 'yúshì',
        meaning_id: 'Memperkenalkan kelanjutan tindakan berurutan sebab-akibat langsung',
        collocations: ['汽车熄火了，于是，乘客们纷纷下车帮着推车。'],
        distinguishing_note: 'Di awal klausa kedua: mobil mogok, lalu para penumpang turun mendorong mobil',
        formality: 'formal_tulis'
      }
    ]
  },
  {
    id: 504,
    category_id: 'conjunctions',
    title: '何况 vs 况且 vs 甚至 vs 以至 vs 乃至 (Apalagi Tanya Balik / Lagipula Tambahan / Bahkan Ekstrem / Sampai-sampai / Hingga Bahkan)',
    key_difference_summary: 'Apalagi anak kecil dalam tanya balik (何况) vs Lagipula hujan malam (况且) vs Bahkan orang tua pun salah bedakan (甚至) vs Sampai-sampai sumpit jatuh (以至) vs Seluruh kelas hingga seantero sekolah (乃至)',
    words: [
      {
        hanzi: '何况',
        pinyin: 'hékuàng',
        meaning_id: 'Apalagi (menggunakan nada tanya balik untuk tingkat lebih jauh)',
        collocations: ['大人拿不动，何况孩子？'],
        distinguishing_note: 'Retoris: orang dewasa saja tak sanggup angkat, apalagi anak kecil?',
        formality: 'netral'
      },
      {
        hanzi: '况且',
        pinyin: 'kuàngqiě',
        meaning_id: 'Lagipula; menambahkan alasan penguat tambahan',
        collocations: ['上海那么大，况且你又不知道他的地址，怎么能找到他呢？'],
        distinguishing_note: 'Memberi argumen penyerta tambahan yang memperkuat kesulitan',
        formality: 'formal_tulis'
      },
      {
        hanzi: '甚至',
        pinyin: 'shènzhì',
        meaning_id: 'Bahkan (memperkenalkan komponen paling ekstrem/menonjol)',
        collocations: ['他们俩长得太像了，甚至于他们的父母有时候也分不清。'],
        distinguishing_note: 'Pola: 甚至于…… (bahkan orang tuanya sendiri kadang salah tebak)',
        formality: 'netral'
      },
      {
        hanzi: '以至',
        pinyin: 'yǐzhì',
        meaning_id: 'Perkembangan derajat berulang kali hingga sampai pada hasil mencengangkan',
        collocations: ['看一遍看不懂，就看两遍、三遍，以至七八遍，直到看懂为止。', '他吃了一惊，以至于吓得筷子都掉在了地上。'],
        distinguishing_note: 'Pola: 以至于…… (kaget sampai-sampai sumpit makan terlepas jatuh)',
        formality: 'formal_tulis'
      },
      {
        hanzi: '乃至',
        pinyin: 'nǎizhì',
        meaning_id: 'Hingga bahkan (meningkat dari lingkaran sempit ke lingkup makro)',
        collocations: ['全班乃至全校的师生都在关注着这件事。'],
        distinguishing_note: 'Skala bertingkat: satu kelas hingga bahkan seluruh sekolah',
        formality: 'formal_tulis'
      }
    ]
  },
  {
    id: 505,
    category_id: 'conjunctions',
    title: '宁可 vs 宁肯 vs 宁愿 (Lebih Baik Rela Berkorban)',
    key_difference_summary: 'Rela bayar harga susah demi prinsip (宁可) vs Pilihan bergantung kemauan keras (宁肯) vs Memilih sesuai kata hati nurani rela sengsara (宁愿)',
    words: [
      {
        hanzi: '宁可',
        pinyin: 'nìngkě',
        meaning_id: 'Memilih suatu opsi meski harus membayar harga pengorbanan',
        collocations: ['宁可早点儿出发，我也不要迟到。', '宁可不睡觉，也要把材料写完。'],
        distinguishing_note: 'Rela begadang tidak tidur asal berkas kerjaan tuntas tepat waktu',
        formality: 'netral'
      },
      {
        hanzi: '宁肯',
        pinyin: 'nìngkěn',
        meaning_id: 'Menyatakan keteguhan pilihan berdasarkan hasrat pribadi kuat',
        collocations: ['宁肯单身，也不嫁给那样的人。'],
        distinguishing_note: 'Lebih baik melajang daripada menikah dengan orang berwatak buruk',
        formality: 'netral'
      },
      {
        hanzi: '宁愿',
        pinyin: 'nìngyuàn',
        meaning_id: 'Menekankan kerelaan hati nurani berkorban demi orang tercinta',
        collocations: ['他宁愿牺牲自己的一切，也不愿让母亲受苦。'],
        distinguishing_note: 'Rela berkorban segalanya demi kebahagiaan sang ibu',
        formality: 'netral'
      }
    ]
  },
  {
    id: 506,
    category_id: 'conjunctions',
    title: '既然 vs 既 vs 因而 vs 从而 vs 因此 vs 进而 (Berhubung Premis Nyata / Sekaligus / Maka Dari Itu / Sehingga Menstimulasi / Oleh Karena Itu / Selanjutnya Bertahap)',
    key_difference_summary: 'Berhubung sudah telanjur faktanya (既然) vs Sekaligus A juga B (既) vs Hasil logis sebab-akibat (因而) vs Menghasilkan dampak terobosan baru (从而) vs Penghubung kalimat sebab-akibat umum (因此) vs Langkah tindakan lanjutan lebih dalam (进而)',
    words: [
      {
        hanzi: '既然',
        pinyin: 'jìrán',
        meaning_id: 'Mengangkat premis yang sudah pasti terjadi (klausa kedua pakai 就)',
        collocations: ['你既然想做这件事情，就一定要做好。'],
        distinguishing_note: 'Pola: 既然……就…… (berhubung kamu sudah bertekad, lakukanlah tuntas)',
        formality: 'netral'
      },
      {
        hanzi: '既',
        pinyin: 'jì',
        meaning_id: 'Bisa berarti 既然, atau pola sejajar "既……又……"',
        collocations: ['既来之，则安之。', '她的小女儿既漂亮又聪明。', '这件棉衣既不好看，也不暖和。'],
        distinguishing_note: 'Pola ganda: baik cantik maupun cerdas sekaligus (既漂亮又聪明)',
        formality: 'netral'
      },
      {
        hanzi: '因而',
        pinyin: 'yīn\'ér',
        meaning_id: 'Dipakai pada klausa hasil logis sebab-akibat yang tak terbantahkan',
        collocations: ['地球是我们的家园，因而我们要保护环境。'],
        distinguishing_note: 'Menghubungkan klausul deduksi logis langsung',
        formality: 'formal_tulis'
      },
      {
        hanzi: '从而',
        pinyin: 'cóng\'ér',
        meaning_id: 'Menghubungkan tujuan & sebab-akibat yang memicu perkembangan baru',
        collocations: ['由于这个村子修好了公路，从而带动了经济的发展。'],
        distinguishing_note: 'Nuansa bahasa tulis tinggi: jalan aspal selesai sehingga memicu pertumbuhan ekonomi',
        formality: 'formal_tulis'
      },
      {
        hanzi: '因此',
        pinyin: 'yīncǐ',
        meaning_id: 'Oleh karena itu; menghubungkan klausa, kalimat, atau paragraf',
        collocations: ['这些年由于重视了城市绿化，因此，空气污染情况大为改善。'],
        distinguishing_note: 'Paling umum di awal klausa kedua menyimpulkan hasil sebab-akibat',
        formality: 'netral'
      },
      {
        hanzi: '进而',
        pinyin: 'jìn\'ér',
        meaning_id: 'Menyatakan tindakan lanjutan yang meluas dari tahap rintisan',
        collocations: ['这种教学法先在初二年级试用，进而再在全校推开。'],
        distinguishing_note: 'Uji coba di kelas 2 SMP, selanjutnya diperluas ke seluruh sekolah',
        formality: 'formal_tulis'
      }
    ]
  },
  {
    id: 507,
    category_id: 'conjunctions',
    title: '只有 vs 只要 vs 除非 (Satu-satunya Syarat / Syarat Minimum Cukup / Kecuali Syarat Mutlak)',
    key_difference_summary: 'Hanya jika syarat ini terpenuhi (只有……才……) vs Asal syarat minimum terpenuhi (只要……就……) vs Tak akan terjadi kecuali ada aksi (除非……否则……)',
    words: [
      {
        hanzi: '只有',
        pinyin: 'zhǐyǒu',
        meaning_id: 'Satu-satunya kondisi mutlak yang memungkinkan hasil terwujud',
        collocations: ['只有父母同意付学费，我才能出国留学。'],
        distinguishing_note: 'Pola kaku berpasangan: 只有……才……',
        formality: 'netral'
      },
      {
        hanzi: '只要',
        pinyin: 'zhǐyào',
        meaning_id: 'Syarat minimum dasar yang cukup untuk mendatangkan hasil',
        collocations: ['只要把货物送到，我们就会马上付钱给你。'],
        distinguishing_note: 'Pola kaku berpasangan: 只要……就……',
        formality: 'netral'
      },
      {
        hanzi: '除非',
        pinyin: 'chúfēi',
        meaning_id: 'Kecuali; hanya dalam kondisi khusus inilah hal tersebut bisa terjadi',
        collocations: ['他是不会来的，除非你亲自去请他。'],
        distinguishing_note: 'Pola berpasangan: 除非……否则/不然……',
        formality: 'netral'
      }
    ]
  },
  {
    id: 508,
    category_id: 'conjunctions',
    title: '虽然 vs 固然 vs 即使 vs 哪怕 vs 就是 (Meskipun Fakta Nyata / Memang Diakui Tapi / Kendatipun Hipotetis / Walaupun Masuk Api / Biarpun Santai)',
    key_difference_summary: 'Meskipun fakta nyata terjadi (虽然) vs Mengakui fakta A tapi fokus ke B (固然) vs Konsesi pengandaian hipotetis (即使) vs Pengandaian ekstrem di klausa 1 atau 2 (哪怕) vs Ragam santai biarpun begadang (就是)',
    words: [
      {
        hanzi: '虽然',
        pinyin: 'suīrán',
        meaning_id: 'Mengakui suatu fakta nyata yang sudah ada/terjadi (konsesi realitas)',
        collocations: ['虽然身体不舒服，他仍然坚持工作。'],
        distinguishing_note: 'Kondisi riil: meskipun badan meriang demam, tetap bekerja',
        formality: 'netral'
      },
      {
        hanzi: '虽说',
        pinyin: 'suīshuō',
        meaning_id: 'Meskipun; varian tutur percakapan santai dari 虽然',
        collocations: ['虽说他很年轻，可是从事管理工作已经很多年了。'],
        distinguishing_note: 'Ragam lisan percakapan akrab (虽说……可是……)',
        formality: 'lisan_percakapan'
      },
      {
        hanzi: '固然',
        pinyin: 'gùrán',
        meaning_id: 'Mengakui fakta satu sisi benar, lalu beralih ke poin kontras yang lebih penting',
        collocations: ['产品的数量固然重要，但是质量更重要。'],
        distinguishing_note: 'Pola: 固然……但是…… (Kuantitas memang penting, tapi kualitas jauh lebih penting)',
        formality: 'formal_tulis'
      },
      {
        hanzi: '即使',
        pinyin: 'jíshǐ',
        meaning_id: 'Konsesi hipotetis pengandaian (kendatipun hasilnya tak berubah)',
        collocations: ['即使我们的工作取得了很大的成绩，也不能骄傲自满。'],
        distinguishing_note: 'Pola: 即使……也…… (kendatipun berhasil, jangan sombong)',
        formality: 'netral'
      },
      {
        hanzi: '哪怕',
        pinyin: 'nǎpà',
        meaning_id: 'Pengandaian situasi ekstrem (bisa ditaruh di klausa 2)',
        collocations: ['哪怕上刀山，下火海，我也在所不辞。', '今天我一定要把任务完成，哪怕一夜不睡呢！'],
        distinguishing_note: 'Bisa di klausa kedua: tugas wajib beres hari ini, biarpun semalaman tak tidur!',
        formality: 'netral'
      },
      {
        hanzi: '就是',
        pinyin: 'jiùshì',
        meaning_id: 'Biarpun/kendati dalam percakapan lisan santai',
        collocations: ['要考试了，就是不睡觉我也得复习完。'],
        distinguishing_note: 'Ragam lisan: mau ujian, biarpun begadang tak tidur tetap harus tuntas belajar',
        formality: 'lisan_percakapan'
      }
    ]
  },
  {
    id: 509,
    category_id: 'conjunctions',
    title: '为的是 vs 为了 vs 以便 (Tujuannya Adalah / Demi Tujuan / Supaya Mudah Terwujud)',
    key_difference_summary: 'Tujuannya adalah di klausa kedua (为的是) vs Demi tujuan di klausa 1 atau 2 (为了) vs Supaya mudah booking tiket di klausa 2 (以便)',
    words: [
      {
        hanzi: '为的是',
        pinyin: 'wèideshì',
        meaning_id: 'Tujuannya adalah... (HANYA digunakan di klausa kedua)',
        collocations: ['今晚我要早点儿休息，为的是明天有充沛的体力参加比赛。'],
        distinguishing_note: 'Posisi mutlak di awal klausa kedua untuk membeberkan tujuan utama',
        formality: 'netral'
      },
      {
        hanzi: '为了',
        pinyin: 'wèile',
        meaning_id: 'Demi tujuan; fleksibel bisa di awal kalimat klausa 1 atau 2',
        collocations: ['为了让同学们更好地准备期末考试，图书馆延长了开放时间。', '图书馆延长了开放时间，为了让同学们更好的准备期末考试。'],
        distinguishing_note: 'Bisa di depan klausa pertama maupun kedua',
        formality: 'netral'
      },
      {
        hanzi: '以便',
        pinyin: 'yǐbiàn',
        meaning_id: 'Supaya / agar tujuan yang diminta dapat dengan mudah direalisasikan',
        collocations: ['请把你的身份证号码告诉我，以便我帮你订飞机票。'],
        distinguishing_note: 'Klausa kedua saat meminta data bantuan: infokan nomor KTP agar mudah pesan tiket',
        formality: 'formal_tulis'
      }
    ]
  }
];
