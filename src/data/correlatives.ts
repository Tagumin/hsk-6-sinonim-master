import { SynonymGroup } from '../types';

export const correlativesData: SynonymGroup[] = [
  {
    id: 701,
    category_id: 'correlatives',
    title: '并列关系 (Hubungan Paralel / Setara)',
    key_difference_summary: 'Dua aksi bersamaan (一边……一边) vs Dua sudut pandang (一方面……另一方面) vs Alasan pertama & kedua (一来……二来)',
    words: [
      {
        hanzi: '(一)边……，(一)边……',
        pinyin: '(yì)biān ..., (yì)biān ...',
        meaning_id: 'Melakukan dua tindakan secara serentak bersamaan waktu',
        collocations: ['我们还是边吃边聊吧。'],
        distinguishing_note: 'Dua aktivitas simultan: makan sambil berbincang santai',
        formality: 'netral'
      },
      {
        hanzi: '一方面……，(另)一方面……',
        pinyin: 'yì fāngmiàn ..., (lìng) yì fāngmiàn ...',
        meaning_id: 'Di satu sisi... di sisi lain...',
        collocations: ['我来中国一方面是为了学习汉语，另一方面是想开阔一下眼界，感知中国文化。'],
        distinguishing_note: 'Memaparkan dua tujuan/sudut pandang yang saling melengkapi',
        formality: 'formal_tulis'
      },
      {
        hanzi: '一来……，二来……',
        pinyin: 'yīlái ..., èrlái ...',
        meaning_id: 'Alasan pertama adalah... alasan kedua adalah...',
        collocations: ['一来今天太晚了，二来我身体有点儿不舒服，我们还是改天吧。'],
        distinguishing_note: 'Menyebutkan deretan alasan penolakan dalam percakapan',
        formality: 'lisan_percakapan'
      }
    ]
  },
  {
    id: 702,
    category_id: 'correlatives',
    title: '承接关系 (Hubungan Berurutan Kronologis)',
    key_difference_summary: 'Langsung kemudian (便/就) vs Lalu terjadilah kelanjutan (于是) vs Semula begini baru kemudian begitu (起初……才)',
    words: [
      {
        hanzi: '……，便 (就) ……',
        pinyin: '..., biàn (jiù) ...',
        meaning_id: 'Maka langsung bertindak melanjutkan aksi sebelumnya',
        collocations: ['他觉得房间实在太闷了，便走了出去。'],
        distinguishing_note: 'Koneksi cepat: kamar terasa pengap, maka dia langsung melangkah keluar',
        formality: 'netral'
      },
      {
        hanzi: '……，于是……',
        pinyin: '..., yúshì ...',
        meaning_id: 'Lalu kemudian; peristiwa selanjutnya terjadi sebagai kelanjutan logis',
        collocations: ['我们请来了专家，于是问题很快就解决了。'],
        distinguishing_note: 'Hubungan sebab dan aksi lanjut yang mengalir alami',
        formality: 'formal_tulis'
      },
      {
        hanzi: '起初……，(才) ……',
        pinyin: 'qǐchū ..., (cái) ...',
        meaning_id: 'Pada mulanya sempat salah paham, baru belakangan mengerti',
        collocations: ['起初我对她有很多误解的地方，后来才慢慢地消除。'],
        distinguishing_note: 'Kontras perubahan persepsi dari masa awal hingga perkembangan akhir',
        formality: 'netral'
      }
    ]
  },
  {
    id: 703,
    category_id: 'correlatives',
    title: '递进关系 (Hubungan Progresif / Peningkatan Derajat)',
    key_difference_summary: 'Bukannya surut malah justru makin berani (不但不……反而……) vs Lagipula cuaca hujan (……，况且……)',
    words: [
      {
        hanzi: '不但 / 不光 / 不只 / 不单……，反而 (反倒)……',
        pinyin: 'búdàn / bùguāng ..., fǎn\'ér (fǎndào) ...',
        meaning_id: 'Bukan hanya tidak marah, malah sebaliknya justru tertawa',
        collocations: ['听了我的话，他不但没生气，反而笑了起来。', '敌人的气势不但没有吓倒他，反倒让他更坚强了。'],
        distinguishing_note: 'Perkembangan progresif yang arahnya bertolak belakang dengan reaksi normal',
        formality: 'netral'
      },
      {
        hanzi: '……，况且 (也 / 还 / 又) ……',
        pinyin: '..., kuàngqiě (yě / hái / yòu) ...',
        meaning_id: 'Lagipula; menambahkan alasan penguat yang membuat situasi makin jelas',
        collocations: ['天这么黑，况且还下着雨，我们明天再去拜访教授吧。'],
        distinguishing_note: 'Menambahkan argumen penjelas kedua yang memperkuat kesimpulan',
        formality: 'formal_tulis'
      }
    ]
  },
  {
    id: 704,
    category_id: 'correlatives',
    title: '选择关系 (Hubungan Pilihan Alternatif)',
    key_difference_summary: 'Bahkan ortu pun bingung (甚至) vs Lebih baik lapar daripada makan (宁愿……也不) vs Daripada menunggu lebih baik pergi (与其……不如)',
    words: [
      {
        hanzi: '……，甚至 (于) ……',
        pinyin: '..., shènzhì (yú) ...',
        meaning_id: 'Bahkan (mengangkat hal yang paling tak terduga)',
        collocations: ['这对双胞胎，别说外人，甚至父母有时候也会弄错。'],
        distinguishing_note: 'Komponen ekstrem yang menegaskan tingginya kemiripan/kesulitan',
        formality: 'netral'
      },
      {
        hanzi: '宁愿 (宁可 / 宁肯)，……也 (不 / 要) ……',
        pinyin: 'nìngyuàn (nìngkě / nìngkěn) ..., ... yě (bù / yào) ...',
        meaning_id: 'Rela memilih opsi sulit daripada harus melakukan hal yang bertentangan dengan prinsip',
        collocations: ['我宁愿饿死，也不会吃他给的东西。', '母亲宁可自己辛苦一点儿，也要供孩子上大学。'],
        distinguishing_note: 'Keteguhan memegang harga diri atau pengorbanan kasih sayang ibu',
        formality: 'netral'
      },
      {
        hanzi: '与其……，不如……',
        pinyin: 'yǔqí ..., bùrú ...',
        meaning_id: 'Daripada opsi A yang sia-sia, lebih baik mengambil opsi B yang produktif',
        collocations: ['与其这样每天傻等着她来，不如自己亲自去一趟。'],
        distinguishing_note: 'Menolak cara pasif demi mengambil inisiatif tindakan aktif',
        formality: 'netral'
      }
    ]
  },
  {
    id: 705,
    category_id: 'correlatives',
    title: '因果关系 (Hubungan Sebab - Akibat)',
    key_difference_summary: 'Berhubung ingin pergi maka silakan (既然……就) vs Begitu biasa sampai tak disadari (以至于) vs Karena mabuk fatal terjadi tabrakan (以致于) vs Wajar gugup (不免/难免)',
    words: [
      {
        hanzi: '既然……，那么 / 就……',
        pinyin: 'jìrán ..., nàme / jiù ...',
        meaning_id: 'Berhubung fakta sudah dipastikan, maka ambillah kesimpulan/tindakan',
        collocations: ['既然他那么想一个人去北京，那就放心地让他去吧。'],
        distinguishing_note: 'Premis fakta tak terbantahkan disusul saran/restu',
        formality: 'netral'
      },
      {
        hanzi: '……，以至于……',
        pinyin: '..., yǐzhìyú ...',
        meaning_id: 'Sedemikian rupa tingkatannya sehingga membuahkan akibat tak terduga',
        collocations: ['她长得太普通了，以至于大家似乎没有注意到她的存在。'],
        distinguishing_note: 'Menjelaskan derajat keparahan hingga mendatangkan hasil tertentu',
        formality: 'formal_tulis'
      },
      {
        hanzi: '……，以致于……',
        pinyin: '..., yǐzhìyú ...',
        meaning_id: 'Mengakibatkan dampak malapetaka/kecelakaan yang fatal (hasil buruk)',
        collocations: ['他酒后驾车，以致于发生了严重的交通事故。'],
        distinguishing_note: 'Khusus berujung pada kerugian berat, musibah, atau kecelakaan fatal',
        connotation: 'negatif',
        formality: 'formal_tulis'
      },
      {
        hanzi: '……，不免 / 难免……',
        pinyin: '..., bùmiǎn / nánmiǎn ...',
        meaning_id: 'Wajar dan sulit terhindarkan (misal: perdana bicara di panggung pasti gugup)',
        collocations: ['第一次面对这么多人讲话，我不免有些紧张。'],
        distinguishing_note: 'Perasaan manusiawi yang lumrah terjadi pada situasi perdana',
        formality: 'netral'
      }
    ]
  },
  {
    id: 706,
    category_id: 'correlatives',
    title: '假设关系 (Hubungan Hipotetis / Pengandaian)',
    key_difference_summary: 'Kendati besok hujan tetap tanding (就算/哪怕……也) vs Kereta telat kalau tidak sudah tiba (要不然/否则)',
    words: [
      {
        hanzi: '即使 / 即便 / 哪怕 / 就算……，也……',
        pinyin: 'jíshǐ / jíbiàn / nǎpà / jiùsuàn ..., yě ...',
        meaning_id: 'Kendatipun kondisi terburuk terjadi, rencana tindakan tak akan goyah',
        collocations: ['就算明天下雨，比赛也照常进行。', '哪怕走再远的路，我也得去看看。'],
        distinguishing_note: 'Pengandaian rintangan cuaca/jarak yang tak menggoyahkan tekad',
        formality: 'netral'
      },
      {
        hanzi: '……，要不然 (要不 / 不然 / 否则) ……',
        pinyin: '..., yàobùrán (yàobù / bùrán / fǒuzé) ...',
        meaning_id: 'Jika tidak demikian... (pengandaian kontrafaktual kondisi alternatif)',
        collocations: ['火车晚点了，要不然我们早就到地方了。'],
        distinguishing_note: 'Menjelaskan apa yang seharusnya terjadi jika tidak ada kendala kereta telat',
        formality: 'netral'
      }
    ]
  },
  {
    id: 707,
    category_id: 'correlatives',
    title: '条件关系 (Hubungan Syarat & Ketentuan)',
    key_difference_summary: 'Asal ada niat pasti bisa (只要……就) vs Hanya jika disetujui baru bisa (只有……才) vs Entah musim apapun selalu olahraga (不论……都) vs Setiap orang yang kenal memuji (凡是……都)',
    words: [
      {
        hanzi: '只要……，就……',
        pinyin: 'zhǐyào ..., jiù ...',
        meaning_id: 'Asal syarat minimum dipenuhi, hasil pasti akan terwujud',
        collocations: ['只要用心去做，你就完全可以把这件事情做好。'],
        distinguishing_note: 'Syarat kecukupan dasar: asal bersungguh-sungguh pasti berhasil',
        formality: 'netral'
      },
      {
        hanzi: '只有……，才……',
        pinyin: 'zhǐyǒu ..., cái ...',
        meaning_id: 'Hanya jika syarat mutlak satu-satunya ini ada, barulah hasil bisa dicapai',
        collocations: ['出国留学的事，只有爸爸同意了，你才能去。'],
        distinguishing_note: 'Syarat keharusan mutlak: izin ayah adalah kunci wajib',
        formality: 'netral'
      },
      {
        hanzi: '无论 (不论 / 不管) ……，还是……，都 / 也 / 总……',
        pinyin: 'wúlùn (búlùn / bùguǎn) ..., háishì ..., dōu / yě / zǒng ...',
        meaning_id: 'Tidak peduli variasi kondisi apapun, kesimpulan/tindakan tetap konsisten',
        collocations: ['不论是春夏秋冬，他都坚持早起锻炼身体。', '不管是谁，都得遵守交通规则。'],
        distinguishing_note: 'Konsistensi mutlak tanpa memandang pergantian musim atau status orang',
        formality: 'netral'
      },
      {
        hanzi: '凡是……，都 (没有不)……',
        pinyin: 'fánshì ..., dōu (méiyǒu bù) ...',
        meaning_id: 'Setiap / semua entitas tanpa kecuali yang memenuhi kriteria',
        collocations: ['凡是跟他打过交道的人，没有说他不好的。'],
        distinguishing_note: 'Generalisasi total: semua yang pernah berinteraksi dengannya pasti memuji',
        formality: 'formal_tulis'
      }
    ]
  },
  {
    id: 708,
    category_id: 'correlatives',
    title: '转折关系 (Hubungan Perlawanan / Kontras)',
    key_difference_summary: 'Meskipun banyak rintangan namun tetap ada jalan keluar (虽说……然而) vs Walaupun omonganmu benar tapi usulan tak bisa kuterima (尽管……可是)',
    words: [
      {
        hanzi: '虽然 / 虽说……，然而 (却) ……',
        pinyin: 'suīrán / suīshuō ..., rán\'ér (què) ...',
        meaning_id: 'Meskipun menghadapi kesulitan besar, namun masih ada secercah jalan keluar',
        collocations: ['虽说困难很多，然而我还是有办法解决的。'],
        distinguishing_note: 'Perlawanan elegan bahasa tulis menggunakan 然而 / 却',
        formality: 'formal_tulis'
      },
      {
        hanzi: '尽管……，可是……',
        pinyin: 'jǐnguǎn ..., kěshì ...',
        meaning_id: 'Kendatipun apa yang kau katakan benar, tapi aku tetap tak bisa menerima saran itu',
        collocations: ['尽管你说得非常对，可是我还是不能接受你的建议。'],
        distinguishing_note: 'Kontras perlawanan emosional atau benturan prinsip pemikiran',
        formality: 'netral'
      }
    ]
  },
  {
    id: 709,
    category_id: 'correlatives',
    title: '让步关系 (Hubungan Konsesif / Mengalah)',
    key_difference_summary: 'Barang bagus hanya saja agak mahal (……不过/只是) vs Kendatipun dia mengundang saya tak sudi pergi (即使……也) vs Karir memang penting tapi keluarga jangan diabaikan (固然……也) vs Biarpun suami istri perlu privasi (纵然……也)',
    words: [
      {
        hanzi: '……，不过 (只是 / 可) ……',
        pinyin: '..., búguò (zhǐshì / kě) ...',
        meaning_id: 'Memuji kualitas bagus terlebih dahulu, lalu menyisipkan catatan kekurangan kecil',
        collocations: ['东西是很不错，只是贵了点儿。'],
        distinguishing_note: 'Kritik halus: barangnya sangat bagus, hanya saja harganya agak kemahalan',
        formality: 'lisan_percakapan'
      },
      {
        hanzi: '即使 (哪怕 / 即便) ……，也……',
        pinyin: 'jíshǐ (nǎpà / jíbiàn) ..., yě ...',
        meaning_id: 'Kendatipun dia sendiri yang datang memohon, saya tak akan sudi pergi',
        collocations: ['即使他亲自来请我去，我也不会去的。'],
        distinguishing_note: 'Sikap tegas tak tergoyahkan oleh perlakuan khusus pihak lain',
        formality: 'netral'
      },
      {
        hanzi: '固然 (尽管) ……，也 / 都……',
        pinyin: 'gùrán (jǐnguǎn) ..., yě / dōu ...',
        meaning_id: 'Mengakui kebenaran sisi A, tapi menegaskan bahwa sisi B tak boleh dikorbankan',
        collocations: ['事业固然重要，也不能不顾家庭啊！'],
        distinguishing_note: 'Menyeimbangkan dua prioritas: karier memang penting, tapi jangan telantarkan keluarga',
        formality: 'formal_tulis'
      },
      {
        hanzi: '纵然……，也……',
        pinyin: 'zòngrán ..., yě ...',
        meaning_id: 'Biarpun; gaya bahasa tulis klasik untuk konsesi mendalam',
        collocations: ['纵然是夫妻，彼此也要有些隐私的。'],
        distinguishing_note: 'Nuansa sastra klasik berbobot: biarpun suami istri tetap butuh ruang privasi',
        formality: 'formal_tulis'
      }
    ]
  },
  {
    id: 710,
    category_id: 'correlatives',
    title: '目的关系 (Hubungan Tujuan & Maksud)',
    key_difference_summary: 'Demi meningkatkan kemampuan bahasa Inggris (为了……) vs Belajar Mandarin tujuannya mencari kerja (……为的是……) vs Jangan percaya iklan jalanan agar tak tertipu (……以免……)',
    words: [
      {
        hanzi: '为了……，……',
        pinyin: 'wèile ..., ...',
        meaning_id: 'Demi mewujudkan target kemampuan tertentu di masa depan',
        collocations: ['为了提高英语口语水平，她找了一个美国人做语伴。'],
        distinguishing_note: 'Di awal kalimat menyatakan motivasi target',
        formality: 'netral'
      },
      {
        hanzi: '……，为的是 (是为了 / 以便) ……',
        pinyin: '..., wèideshì (shì wèile / yǐbiàn) ...',
        meaning_id: 'Tindakan dipaparkan di klausa pertama, tujuannya dijelaskan di klausa kedua',
        collocations: ['他学习汉语，为的是找一份好工作。'],
        distinguishing_note: 'Menempatkan tujuan karir sebagai penjelasan di klausa kedua',
        formality: 'netral'
      },
      {
        hanzi: '……，以免 / 免得 / 省得……',
        pinyin: '..., yǐmiǎn / miǎnde / shěngde ...',
        meaning_id: 'Mengambil tindakan waspada agar terhindar dari risiko penipuan/kerugian',
        collocations: ['不要轻易相信街头小广告，以免上当受骗。'],
        distinguishing_note: 'Mencegah bahaya terselubung: jangan percaya iklan jalanan agar tak tertipu',
        formality: 'netral'
      }
    ]
  }
];
