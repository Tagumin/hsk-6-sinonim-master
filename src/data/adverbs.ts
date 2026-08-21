import { SynonymGroup } from '../types';

export const adverbsData: SynonymGroup[] = [
  {
    id: 301,
    category_id: 'adverbs',
    title: '本来 vs 原来 (Semula / Ternyata)',
    key_difference_summary: 'Sudah semestinya sejak awal (本来) vs Baru menyadari fakta tak terduga (原来)',
    words: [
      {
        hanzi: '本来',
        pinyin: 'běnlái',
        meaning_id: 'Semula, sejak awal; memang sudah seharusnya',
        collocations: ['他本来身体很弱，现在很结实了。', '当天的作业本来就应当天完成。'],
        distinguishing_note: 'Kondisi awal sebelum berubah atau kewajiban yang semestinya',
        formality: 'netral'
      },
      {
        hanzi: '原来',
        pinyin: 'yuánlái',
        meaning_id: 'Menyadari pengetahuan baru tentang situasi yang tadinya tak diketahui (ternyata)',
        collocations: ['怪不得他没上班，原来是病了。'],
        distinguishing_note: 'Menemukan fakta sebenarnya setelah sebelumnya bingung (pola: 怪不得……原来……)',
        formality: 'netral'
      }
    ]
  },
  {
    id: 302,
    category_id: 'adverbs',
    title: '必然 vs 必定 vs 一定 (Keniscayaan Hukum Alam / Keyakinan Tegas Tulis / Kepastian Mantap)',
    key_difference_summary: 'Hukum keniscayaan objektif (必然) vs Sikap tegas bahasa tulis (必定) vs Dugaan positif logis mantap percakapan (一定)',
    words: [
      {
        hanzi: '必然',
        pinyin: 'bìrán',
        meaning_id: 'Keniscayaan logika atau hukum alam objektif',
        collocations: ['“生、老、病、死”是人生必然的规律。'],
        distinguishing_note: 'Sesuatu yang pasti terjadi menurut hukum alam, tak bisa ditolak manusia',
        formality: 'formal_tulis'
      },
      {
        hanzi: '必定',
        pinyin: 'bìdìng',
        meaning_id: 'Menekankan penilaian subjektif pembicara; sikap tegas',
        collocations: ['只要你肯努力，成功必定是属于你的。'],
        distinguishing_note: 'Penegasan tekad dalam bahasa tulis bermartabat',
        formality: 'formal_tulis'
      },
      {
        hanzi: '一定',
        pinyin: 'yídìng',
        meaning_id: 'Menyatakan sikap tegas, analisis positif yang mantap',
        collocations: ['他今天没来上课，一定是有什么事情了。'],
        distinguishing_note: 'Dugaan kuat dalam percakapan sehari-hari maupun tulisan',
        formality: 'netral'
      }
    ]
  },
  {
    id: 303,
    category_id: 'adverbs',
    title: '不免 vs 免得 vs 以免 vs 未免 (Tak Terhindarkan / Supaya Tidak / Keterlaluan)',
    key_difference_summary: 'Wajar terjadi sulit dihindari (不免) vs Supaya terhindar dari repot (免得) vs Mencegah dampak buruk formal (以免) vs Agak berlebihan/keterlaluan (未免)',
    words: [
      {
        hanzi: '不免',
        pinyin: 'bùmiǎn',
        meaning_id: 'Tidak bisa dihindari; hasil yang wajar karena sebab tertentu',
        collocations: ['我刚刚大学毕业，工作起来不免缺少经验。'],
        distinguishing_note: 'Hasil wajar pada klausa kedua (baru lulus wajar minim pengalaman)',
        formality: 'formal_tulis'
      },
      {
        hanzi: '免得',
        pinyin: 'miǎnde',
        meaning_id: 'Digunakan dalam kalimat tujuan agar tidak mengalami kesulitan',
        collocations: ['晚上冷，穿上件外衣再出去，免得着凉。'],
        distinguishing_note: 'Menjelaskan tindakan pencegahan sehari-hari (pakai jaket supaya tidak masuk angin)',
        formality: 'netral'
      },
      {
        hanzi: '以免',
        pinyin: 'yǐmiǎn',
        meaning_id: 'Agar terhindar dari risiko kerugian fatal (bahasa tulis)',
        collocations: ['工厂应该对产品的质量进行严格检查，以免造成不必要的损失。'],
        distinguishing_note: 'Gaya tulisan formal di awal klausa kedua; tidak bisa diikuti langsung predikat pendek',
        formality: 'formal_tulis'
      },
      {
        hanzi: '未免',
        pinyin: 'wèimiǎn',
        meaning_id: 'Rasanya agak keterlaluan/terlalu berlebihan (penilaian halus)',
        collocations: ['你吃一顿饭要花四个小时，也未免太浪费时间了吧。'],
        distinguishing_note: 'Pola: 未免太……了 (penilaian bahwa suatu tindakan terlalu berlebihan)',
        formality: 'netral'
      }
    ]
  },
  {
    id: 304,
    category_id: 'adverbs',
    title: '大概 vs 大约 vs 恐怕 (Perkiraan Situasi / Taksiran Angka Kuantitas / Khawatir Mengkhawatirkan)',
    key_difference_summary: 'Kemungkinan besar situasi umum (大概) vs Taksiran angka usia/berat (大约) vs Menduga disertai cemas/khawatir (恐 pas)',
    words: [
      {
        hanzi: '大概',
        pinyin: 'dàgài',
        meaning_id: 'Kemungkinan besar; tebakan terhadap situasi umum',
        collocations: ['很长时间没有见到安娜了，她大概回国了。'],
        distinguishing_note: 'Dugaan terhadap kabar/keberadaan orang',
        formality: 'netral'
      },
      {
        hanzi: '大约',
        pinyin: 'dàyuē',
        meaning_id: 'Kira-kira / taksiran kasar untuk angka waktu, usia, bobot',
        collocations: ['她的体重大约是 50 公斤。'],
        distinguishing_note: 'Bisa langsung diikuti kata bilangan kuantitas (大约 50 公斤)',
        formality: 'netral'
      },
      {
        hanzi: '恐怕',
        pinyin: 'kǒngpà',
        meaning_id: 'Menunjukkan perkiraan yang disertai kekhawatiran/cemas',
        collocations: ['她被车撞成重伤，恐怕活不了几天了。'],
        distinguishing_note: 'Perkiraan bernada cemas/takut akan kabar buruk yang fatal',
        connotation: 'negatif',
        formality: 'netral'
      }
    ]
  },
  {
    id: 305,
    category_id: 'adverbs',
    title: '差点儿 vs 差不多 vs 几乎 vs 简直 (Hampir Saja / Mirip / Nyaris / Benar-benar Keterlaluan)',
    key_difference_summary: 'Nyaris celaka tapi selamat (差点儿) vs Mirip memenuhi standar (差不多) vs Mendekati 100% total (几乎) vs Hiperbolik sungguh luar biasa (简直)',
    words: [
      {
        hanzi: '差点儿',
        pinyin: 'chàdiǎnr',
        meaning_id: 'Hampir saja terjadi (hal buruk tidak jadi / hal bagus gagal)',
        collocations: ['今天差点儿迟到。（没迟到）', '今天的比赛差点儿赢了。（没赢）'],
        distinguishing_note: 'Bila hal buruk: hampir terjadi tapi syukurlah luput (差点儿迟到 = tidak telat)',
        formality: 'lisan_percakapan'
      },
      {
        hanzi: '差不多',
        pinyin: 'chàbuduō',
        meaning_id: 'Hampir sama, lumayan bisa diterima',
        collocations: ['这个颜色还差不多。', '他们差不多高。'],
        distinguishing_note: 'Umumnya memodifikasi kata sifat positif (差不多高, bukan *差不多矮)',
        formality: 'netral'
      },
      {
        hanzi: '几乎',
        pinyin: 'jīhū',
        meaning_id: 'Sangat mendekati angka/cakupan tertentu (nyaris)',
        collocations: ['这三天，我们几乎没睡觉。', '他腿一软，几乎摔倒。', '礼堂里几乎有两千人。'],
        distinguishing_note: 'Menekankan proporsi kuantitas statistik mendekati penuh (hampir 2000 orang)',
        formality: 'netral'
      },
      {
        hanzi: '简直',
        pinyin: 'jiǎnzhí',
        meaning_id: 'Benar-benar / sungguh demikian (nada hiperbolik)',
        collocations: ['简直把人都要气死了！', '简直太不像话了！'],
        distinguishing_note: 'Memperkuat ungkapan emosi berlebih/kekagetan ekstrem',
        formality: 'netral'
      }
    ]
  },
  {
    id: 306,
    category_id: 'adverbs',
    title: '常常 vs 往往 vs 经常 vs 通常 (Sering Tindakan / Cenderung Pola / Berulang-ulang / Kebiasaan Normal)',
    key_difference_summary: 'Sering aktif kemauan sendiri (常常) vs Cenderung terjadi jika ada kondisi pemicu (往往) vs Frekuensi berulang kali (经常) vs Jadwal rutin kondisi normal (通常)',
    words: [
      {
        hanzi: '常常',
        pinyin: 'chángcháng',
        meaning_id: 'Menunjukkan tindakan yang sering terjadi atas kebiasaan diri',
        collocations: ['他脾气不好，常常为一点儿小事与人争吵。'],
        distinguishing_note: 'Tindakan harian yang sering dilakukan seseorang',
        formality: 'netral'
      },
      {
        hanzi: '往往',
        pinyin: 'wǎngwǎng',
        meaning_id: 'Kecenderungan yang sering muncul di bawah syarat/pola tertentu',
        collocations: ['她很忙，每天往往工作到深夜。'],
        distinguishing_note: 'Menunjukkan pola keteraturan yang sudah berulang di masa lampau',
        formality: 'formal_tulis'
      },
      {
        hanzi: '经常',
        pinyin: 'jīngcháng',
        meaning_id: 'Menunjukkan tindakan berulang kali; bisa jadi kata sifat rutin',
        collocations: ['他起床太晚，经常不吃早饭。'],
        distinguishing_note: 'Bisa dinegasikan dengan 不 (不经常), sedangkan 往往 tidak bisa *不往往',
        formality: 'netral'
      },
      {
        hanzi: '通常',
        pinyin: 'tōngcháng',
        meaning_id: 'Dalam kondisi normal/lazimnya (frekuensi tepat di bawah 总是)',
        collocations: ['他通常六点钟就起床。'],
        distinguishing_note: 'Standar kebiasaan normal jika tidak ada kejadian luar biasa',
        formality: 'netral'
      }
    ]
  },
  {
    id: 307,
    category_id: 'adverbs',
    title: '从来 vs 向来 vs 历来 vs 一向 vs 一直 vs 总是 (Dari Dulu Negatif / Konsistensi Sikap / Warisan Tradisi / Karakter Tetap / Kontinu / Selalu)',
    key_difference_summary: 'Dari dulu tak pernah - kalimat negatif (从来) vs Dari dulu prinsip sikap (向来) vs Tradisi bangsa turun-temurun (历来) vs Karakter konsisten masa lalu ke kini (一向) vs Terus-menerus tanpa jeda (一直) vs Selalu teratur tanpa luput (总是)',
    words: [
      {
        hanzi: '从来',
        pinyin: 'cónglái',
        meaning_id: 'Dari dulu hingga sekarang (hampir selalu dalam kalimat negatif)',
        collocations: ['这种事我从来没有听说过。'],
        distinguishing_note: 'Sering dipasangkan dengan kata negasi: 从来不, 从来没',
        formality: 'netral'
      },
      {
        hanzi: '向来',
        pinyin: 'xiànglái',
        meaning_id: 'Selalu demikian dari dulu (bisa bentuk positif maupun negatif)',
        collocations: ['向来如此', '他向来说话不算数。'],
        distinguishing_note: 'Menekankan konsistensi prinsip watak seseorang dari awal',
        formality: 'netral'
      },
      {
        hanzi: '历来',
        pinyin: 'lìlái',
        meaning_id: 'Dari zaman dahulu senantiasa (tradisi luhur sejarah bangsa)',
        collocations: ['我国人民历来就有勤劳勇敢的优良传统。'],
        distinguishing_note: 'Tradisi luhur bangsa/negara yang diwariskan dari generasi ke generasi',
        formality: 'formal_tulis'
      },
      {
        hanzi: '一向',
        pinyin: 'yíxiàng',
        meaning_id: 'Stabilitas perilaku dari masa lalu hingga kini (karakter orang)',
        collocations: ['他对顾客一向都非常热情。'],
        distinguishing_note: 'Rentang waktu dari masa lampau hingga saat ini untuk watak ramah',
        formality: 'netral'
      },
      {
        hanzi: '一直',
        pinyin: 'yìzhí',
        meaning_id: 'Kontinu tanpa henti dalam kurun waktu (lampau, kini, masa depan)',
        collocations: ['出国以前，他一直当老师。', '大雨一直下了三天三夜。', '只要身体可以，我就一直做下去。'],
        distinguishing_note: 'Bisa merujuk masa lalu, kini, maupun masa depan yang terus berlanjut',
        formality: 'netral'
      },
      {
        hanzi: '总是',
        pinyin: 'zǒngshì',
        meaning_id: 'Selalu berulang teratur tanpa terkecuali',
        collocations: ['每天清晨，他总是去操场锻炼身体。'],
        distinguishing_note: 'Frekuensi 100% mutlak dalam aktivitas rutin terjadwal',
        formality: 'netral'
      }
    ]
  },
  {
    id: 308,
    category_id: 'adverbs',
    title: '到底 vs 毕竟 vs 究竟 (Akhirnya Setelah Liku-liku / Bagaimanapun Faktanya / Penyelidikan Seluk Beluk)',
    key_difference_summary: 'Akhirnya berhasil setelah berliku / penekanan tanya (到底) vs Bagaimanapun juga intinya (毕竟) vs Menyelidiki akar masalah / kata benda seluk beluk (究竟)',
    words: [
      {
        hanzi: '到底',
        pinyin: 'dàodǐ',
        meaning_id: 'Akhirnya terwujud setelah proses panjang; penekanan kepastian pada tanya',
        collocations: ['你到底去不去呀？', '医生到底还是没有挽回他的生命。'],
        distinguishing_note: 'Menekankan proses penuh liku atau menuntut ketegasan jawaban lawan bicara',
        formality: 'netral'
      },
      {
        hanzi: '毕竟',
        pinyin: 'bìjìng',
        meaning_id: 'Bagaimanapun juga; menekankan fakta dasar yang tak terbantahkan',
        collocations: ['孩子毕竟是孩子，不懂事。', '钱虽不多，但毕竟是自己亲手赚的。'],
        distinguishing_note: 'Menarik kesimpulan bijak kembali ke akar realitas (namanya juga anak kecil)',
        formality: 'netral'
      },
      {
        hanzi: '究竟',
        pinyin: 'jiūjìng',
        meaning_id: 'Menyelidiki motif mendalam; juga bisa sebagai kata benda seluk-beluk',
        collocations: ['你究竟为什么这么难过？', '你究竟参不参加比赛？', '他很想知道事情的究竟。（名）'],
        distinguishing_note: 'Bisa sebagai kata benda (事情的究竟 = seluk-beluk masalah)',
        formality: 'formal_tulis'
      }
    ]
  },
  {
    id: 309,
    category_id: 'adverbs',
    title: '仿佛 vs 好像 vs 似乎 (Seolah-olah / Mirip / Agaknya)',
    key_difference_summary: 'Seolah-olah bahasa sastra (仿佛 - bisa kata kerja 相仿佛) vs Mirip dalam percakapan lisan (好像) vs Agaknya samar-samar (似乎)',
    words: [
      {
        hanzi: '仿佛',
        pinyin: 'fǎngfú',
        meaning_id: 'Seolah-olah, seperti (bisa kata kerja diawali 相)',
        collocations: ['他很能干，仿佛不知道什么是疲倦。', '他们俩的年龄相仿佛。（动）'],
        distinguishing_note: 'Bahasa sastra; bisa sebagai kata kerja kesetaraan (相仿佛)',
        formality: 'formal_tulis'
      },
      {
        hanzi: '好像',
        pinyin: 'hǎoxiàng',
        meaning_id: 'Rupanya, agak mirip dalam tuturan lisan santai',
        collocations: ['他好像有点儿生气了。'],
        distinguishing_note: 'Paling sering dipakai dalam obrolan santai sehari-hari',
        formality: 'lisan_percakapan'
      },
      {
        hanzi: '似乎',
        pinyin: 'sìhū',
        meaning_id: 'Tampaknya, sepertinya (kesan samar dalam teks tulisan)',
        collocations: ['这篇文章似乎在哪儿见过。'],
        distinguishing_note: 'Nuansa bahasa tulis elegan untuk menyatakan kesan samar',
        formality: 'formal_tulis'
      }
    ]
  },
  {
    id: 310,
    category_id: 'adverbs',
    title: '分明 vs 明明 (Jelas Sekali Fakta / Jelas-jelas Penegasan Bantahan)',
    key_difference_summary: 'Penilaian objektif jelas fakta (分明) vs Penegasan membantah kebohongan (明明)',
    words: [
      {
        hanzi: '分明',
        pinyin: 'fēnmíng',
        meaning_id: 'Jelas sekali; penilaian positif yang terang benderang',
        collocations: ['这件事分明是你错了。'],
        distinguishing_note: 'Menyatakan bahwa faktanya sudah sangat terang benderang',
        formality: 'netral'
      },
      {
        hanzi: '明明',
        pinyin: 'míngmíng',
        meaning_id: 'Jelas-jelas demikian; dipakai membantah penyangkalan orang',
        collocations: ['你明明说过，怎么就不承认呢？', '我的笔刚才明明放在这里了，怎么不见了呢？'],
        distinguishing_note: 'Sering dipakai dalam kalimat tanya retoris menyanggah orang yang mengelak',
        formality: 'netral'
      }
    ]
  },
  {
    id: 311,
    category_id: 'adverbs',
    title: '赶紧 vs 赶快 vs 赶忙 vs 连忙 (Segera Tanpa Tunda / Buru-buru Percepat / Bergegas / Spontan Langsung)',
    key_difference_summary: 'Jangan tunda waktu sebelum telat (赶紧) vs Mempercepat laju tindakan (赶快) vs Cepat melakukan tindakan deklaratif (赶忙) vs Spontan bergerak berurutan (连忙)',
    words: [
      {
        hanzi: '赶紧',
        pinyin: 'gǎnjǐn',
        meaning_id: 'Memanfaatkan waktu segera tanpa menunda (bisa tindakan belum terjadi)',
        collocations: ['电话铃响了，我赶紧去接电话。', '赶紧走，再晚就来不及了。'],
        distinguishing_note: 'Bisa untuk perintah/ajakan deklaratif dan imperatif agar tidak terlambat',
        formality: 'netral'
      },
      {
        hanzi: '赶快',
        pinyin: 'gǎnkuài',
        meaning_id: 'Mempercepat ritme gerakan agar cepat selesai',
        collocations: ['不早了，我得赶快走了。', '饭做好了，咱们赶快吃吧。'],
        distinguishing_note: 'Menekankan kecepatan tempo laju tindakan',
        formality: 'netral'
      },
      {
        hanzi: '赶忙',
        pinyin: 'gǎnmáng',
        meaning_id: 'Bergegas melakukan sesuatu yang sudah/sedang terjadi (khusus deklaratif)',
        collocations: ['看见孩子摔倒了，妈妈赶忙去扶。'],
        distinguishing_note: 'Hanya untuk kalimat berita/deklaratif atas kejadian yang sedang berlangsung',
        formality: 'netral'
      },
      {
        hanzi: '连忙',
        pinyin: 'liánmáng',
        meaning_id: 'Langsung spontan bergegas bertindak menyambung kejadian sebelumnya',
        collocations: ['见到长辈，他连忙起身问好。'],
        distinguishing_note: 'Menekankan kontinuitas spontanitas: begitu lihat senior langsung berdiri salam',
        formality: 'netral'
      }
    ]
  },
  {
    id: 312,
    category_id: 'adverbs',
    title: '何必 vs 何尝 vs 何苦 (Buat Apa Repot / Bukankah Mau / Mengapa Menyiksa Diri)',
    key_difference_summary: 'Buat apa marah tidak perlu (何必) vs Bukannya aku tak mau (何尝) vs Mengapa menyusahkan diri tak sepadan (何苦)',
    words: [
      {
        hanzi: '何必',
        pinyin: 'hébì',
        meaning_id: 'Tidak perlu; buat apa menyusahkan hal yang tidak penting (tanya balik)',
        collocations: ['为了这点儿小事，你何必生这么大的气呢？'],
        distinguishing_note: 'Menyatakan ketidakperluan: mengapa harus repot mempermasalahkan hal sepele',
        formality: 'netral'
      },
      {
        hanzi: '何尝',
        pinyin: 'hécháng',
        meaning_id: 'Bukannya tidak...; menyatakan pernah/ingin lewat nada tanya balik',
        collocations: ['我何尝不想去？只是没有工夫罢了。'],
        distinguishing_note: 'Sering dipadukan "何尝不……": bukannya saya tak ingin pergi, hanya tiada waktu',
        formality: 'formal_tulis'
      },
      {
        hanzi: '何苦',
        pinyin: 'hékǔ',
        meaning_id: 'Mengapa harus menyiksa diri sendiri demi hal yang tak sebanding',
        collocations: ['你何苦在这些小事上伤脑筋？', '跟小孩生这么大的气，何苦呢？'],
        distinguishing_note: 'Menilai bahwa pengorbanan batin yang dicurahkan sama sekali tidak bernilai/sepadan',
        formality: 'netral'
      }
    ]
  },
  {
    id: 313,
    category_id: 'adverbs',
    title: '未必 vs 忽然 vs 突然 vs 猛然 (Belum Tentu / Mendadak Waktu / Tiba-tiba Sifat / Sentakan Kencang)',
    key_difference_summary: 'Belum tentu akurat (未必) vs Perubahan cuaca mendadak cepat (忽然) vs Peristiwa mengejutkan tiba-tiba (突然 - bisa kata sifat) vs Sentakan tenaga tiba-tiba kencang (猛然)',
    words: [
      {
        hanzi: '未必',
        pinyin: 'wèibì',
        meaning_id: 'Belum tentu, boleh jadi tidak (penyangkalan halus)',
        collocations: ['这件事我也是听说的，未必准确。'],
        distinguishing_note: 'Penyangkalan santun terhadap rumor/klaim yang belum teruji',
        formality: 'netral'
      },
      {
        hanzi: '忽然',
        pinyin: 'hūrán',
        meaning_id: 'Tindakan atau perubahan cuaca terjadi sangat cepat di luar dugaan',
        collocations: ['刚才还是大晴天，忽然就下起雨来了。'],
        distinguishing_note: 'Perubahan situasi lingkungan secara mendadak',
        formality: 'netral'
      },
      {
        hanzi: '突然',
        pinyin: 'tūrán',
        meaning_id: 'Tiba-tiba mengejutkan; bisa juga berfungsi sebagai kata sifat',
        collocations: ['他突然大叫一声，周围的人都被吓了一跳。', '这件事来得很突然。（形）'],
        distinguishing_note: 'Bisa kata sifat (很突然), teriakan tiba-tiba bikin kaget',
        formality: 'netral'
      },
      {
        hanzi: '猛然',
        pinyin: 'měngrán',
        meaning_id: 'Gerakan sentakan yang tiba-tiba, sangat cepat dan bertenaga kuat',
        collocations: ['我用力猛然一拉，把它拉断了。'],
        distinguishing_note: 'Menekankan kekuatan tenaga fisik yang eksplosif seketika',
        formality: 'formal_tulis'
      }
    ]
  },
  {
    id: 314,
    category_id: 'adverbs',
    title: '终于 vs 终究 (Akhirnya Melegakan / Bagaimanapun Ujungnya Pasti Terjadi)',
    key_difference_summary: 'Akhirnya tuntas setelah lelah (终于 - masa lalu) vs Bagaimanapun akhirnya pasti terjadi (终究 - prediksi masa depan)',
    words: [
      {
        hanzi: '终于',
        pinyin: 'zhōngyú',
        meaning_id: 'Akhirnya peristiwa yang dinantikan berhasil tercapai setelah perjuangan',
        collocations: ['经过两天两夜的努力，终于完成了任务。'],
        distinguishing_note: 'Hanya untuk hal yang sudah terwujud di masa lampau/sekarang',
        formality: 'netral'
      },
      {
        hanzi: '终究',
        pinyin: 'zhōngjiū',
        meaning_id: 'Ujung-ujungnya pasti akan terjadi (prediksi hukum kepastian masa depan)',
        collocations: ['不按科学规律办事，终究会犯大错误的。'],
        distinguishing_note: 'Dipakai sebelum kata kerja bantu (会/要) untuk memperingatkan kepastian di masa depan',
        formality: 'formal_tulis'
      }
    ]
  },
  {
    id: 315,
    category_id: 'adverbs',
    title: '竟然 vs 居然 vs 果然 (Di Luar Nalar / Di Luar Dugaan Logika / Ternyata Memang Terbukti)',
    key_difference_summary: 'Di luar perkiraan konsisten (竟然) vs Melampaui logika/tanpa malu (居然) vs Terbukti sesuai ramalan (果然)',
    words: [
      {
        hanzi: '竟然',
        pinyin: 'jìngrán',
        meaning_id: 'Tak disangka-sangka di luar perkiraan kemampuan normal',
        collocations: ['他今天竟然做了三个人的工作。'],
        distinguishing_note: 'Kekagetan atas produktivitas atau keajaiban tak terduga',
        formality: 'netral'
      },
      {
        hanzi: '居然',
        pinyin: 'jūrán',
        meaning_id: 'Melampaui logika umum; bisa untuk perilaku tak tahu malu atau kemenangan ajaib',
        collocations: ['他居然赢了，真没想到。', '他居然当众撒谎，却一点儿都不觉得难为情。'],
        distinguishing_note: 'Kekagetan atas sesuatu yang dinilai tidak masuk akal atau berani berbuat tak tahu malu',
        formality: 'netral'
      },
      {
        hanzi: '果然',
        pinyin: 'guǒrán',
        meaning_id: 'Ternyata memang benar sesuai dengan yang diprediksikan sebelumnya',
        collocations: ['吃了这种药以后，妈妈的病果然好了。'],
        distinguishing_note: 'Hasil nyata sesuai 100% dengan omongan/resep dokter sebelumnya',
        formality: 'netral'
      }
    ]
  },
  {
    id: 316,
    category_id: 'adverbs',
    title: '千万 vs 万万 (Sungguh-sungguh Harus / Sama Sekali Jangan Sekali-kali)',
    key_difference_summary: 'Peringatan keras positif/negatif masa depan (千万) vs Penolakan mutlak negatif (万万 - hanya kalimat negatif)',
    words: [
      {
        hanzi: '千万',
        pinyin: 'qiānwàn',
        meaning_id: 'Sungguh-sungguh harus (hanya kalimat imperatif pesan amanat)',
        collocations: ['千万不要忘了给他打电话。', '一路上千万要小心啊！'],
        distinguishing_note: 'Bisa untuk pesan positif (千万要小心) maupun larangan (千万不要)',
        formality: 'netral'
      },
      {
        hanzi: '万万',
        pinyin: 'wànwàn',
        meaning_id: 'Sama sekali jangan/tak terbayangkan (hanya kalimat negatif)',
        collocations: ['我万万没想到会发生这样的事情。'],
        distinguishing_note: 'Nada lebih mutlak keras; hanya bisa dipasangkan dengan kata negasi (万万没/不)',
        formality: 'formal_tulis'
      }
    ]
  },
  {
    id: 317,
    category_id: 'adverbs',
    title: '悄悄 vs 偷偷 vs 暗暗 (Diam-diam Tak Mau Ganggu / Sembunyi-sembunyi Rahasia / Batin Nurani)',
    key_difference_summary: 'Melangkah pelan tanpa suara ganggu (悄悄) vs Menyelinap rahasia tak ingin ketahuan (偷偷) vs Bertekad dalam lubuk batin sendiri (暗暗)',
    words: [
      {
        hanzi: '悄悄',
        pinyin: 'qiāoqiāo',
        meaning_id: 'Bertindak pelan-pelan tanpa berisik agar tidak mengganggu orang tidur',
        collocations: ['他悄悄地穿好衣服，走出了房间。', '部队在夜里悄悄出了村。'],
        distinguishing_note: 'Menjaga ketenangan hening tanpa menimbulkan kegaduhan suara',
        formality: 'netral'
      },
      {
        hanzi: '偷偷',
        pinyin: 'tōutōu',
        meaning_id: 'Menyelinap sembunyi-sembunyi agar tidak terlihat oleh orang lain',
        collocations: ['趁人不注意，他偷偷地溜走了。'],
        distinguishing_note: 'Tindakan rahasia menyelinap keluar saat orang lain lengah',
        formality: 'netral'
      },
      {
        hanzi: '暗暗',
        pinyin: 'àn\'àn',
        meaning_id: 'Di dalam lubuk batin sendiri tanpa diperlihatkan ke luar',
        collocations: ['这次考砸了，他暗暗下决心，下一次一定考好。'],
        distinguishing_note: 'Khusus aktivitas psikologis di dalam pikiran: membulatkan tekad batin',
        formality: 'formal_tulis'
      }
    ]
  },
  {
    id: 318,
    category_id: 'adverbs',
    title: '略微 vs 稍微 (Sedikit / Agak Dangkal)',
    key_difference_summary: 'Sedikit dalam gaya bahasa tulis (略微) vs Agak sedikit takaran lisan (稍微)',
    words: [
      {
        hanzi: '略微',
        pinyin: 'lüèwēi',
        meaning_id: 'Sedikit; kadar yang dangkal (lebih sering gaya bahasa tulis)',
        collocations: ['事情略微有些进展了。', '身体略微好一点儿了。'],
        distinguishing_note: 'Gaya penulisan formal: ada kemajuan sedikit dalam perkara',
        formality: 'formal_tulis'
      },
      {
        hanzi: '稍微',
        pinyin: 'shāowēi',
        meaning_id: 'Sedikit, takaran ringan dalam percakapan sehari-hari',
        collocations: ['汤里稍微放一点儿盐就可以了。', '我稍微有点儿冷。'],
        distinguishing_note: 'Bumbu garam sedikit, merasa agak sedikit dingin',
        formality: 'netral'
      }
    ]
  },
  {
    id: 319,
    category_id: 'adverbs',
    title: '特别 vs 特地 vs 故意 vs 刻意 (Khusus Terutama / Sengaja Demi Tujuan / Sengaja Negatif / Sengaja Pamer Curi Perhatian)',
    key_difference_summary: 'Terutama sekali (特别) vs Sengaja datang untuk tujuan mulia (特地) vs Sengaja melanggar aturan buruk (故意) vs Bersolek sengaja demi curi perhatian (刻意)',
    words: [
      {
        hanzi: '特别',
        pinyin: 'tèbié',
        meaning_id: 'Secara khusus mengemukakan hal utama; terutama (bisa kata sifat)',
        collocations: ['工业，特别是重工业，在我国的经济中占有重要的地位。', '今天是一个特别的日子。（形）'],
        distinguishing_note: 'Menekankan komponen utama dalam rumpun umum atau hari spesial',
        formality: 'netral'
      },
      {
        hanzi: '特地',
        pinyin: 'tèdì',
        meaning_id: 'Sengaja datang/mengatur khusus untuk satu tujuan baik tertentu',
        collocations: ['为庆祝教师节，学校特地安排了这次活动。'],
        distinguishing_note: 'Sengaja meluangkan waktu demi menghormati acara/tamu',
        formality: 'formal_tulis'
      },
      {
        hanzi: '故意',
        pinyin: 'gùyì',
        meaning_id: 'Tahu salah namun sengaja melakukannya (sering bermakna negatif)',
        collocations: ['他今天是故意迟到的。'],
        distinguishing_note: 'Sengaja membolos, sengaja merusak suasana',
        connotation: 'negatif',
        formality: 'netral'
      },
      {
        hanzi: '刻意',
        pinyin: 'kèyì',
        meaning_id: 'Sengaja berdandan/berbuat demi menarik perhatian orang lain',
        collocations: ['为了约会，他刻意穿了件新夹克。'],
        distinguishing_note: 'Mencurahkan perhatian khusus demi memikat lawan bicara saat kencan',
        formality: 'formal_tulis'
      }
    ]
  },
  {
    id: 320,
    category_id: 'adverbs',
    title: '幸亏 vs 幸好 vs 好在 vs 多亏 (Untunglah Luput Bahaya / Untung Pas Waktunya / Untungnya Ada Penawar / Berkat Bantuan Jasa)',
    key_difference_summary: 'Untung bawa payung luput basah (幸亏) vs Untung pas roboh tak ada orang di dalam (幸好) vs Untung lukanya ringan (好在) vs Berkat bantuanmu aku berhasil (多亏)',
    words: [
      {
        hanzi: '幸亏',
        pinyin: 'xìngkuī',
        meaning_id: 'Untungnya ada faktor pemicu sehingga luput dari musibah besar',
        collocations: ['我幸亏带了把伞，否则早就被大雨淋成落汤鸡了。'],
        distinguishing_note: 'Pola: 幸亏……否则/不然…… (untung bawa payung kalau tidak basah kuyup)',
        formality: 'netral'
      },
      {
        hanzi: '幸好',
        pinyin: 'xìnghǎo',
        meaning_id: 'Untung pas pada saat genting tersebut luput dari bahaya',
        collocations: ['房子塌下来的时候，幸好没有人在里面。'],
        distinguishing_note: 'Menekankan faktor ketepatan waktu momen kritis',
        formality: 'netral'
      },
      {
        hanzi: '好在',
        pinyin: 'hǎozài',
        meaning_id: 'Untungnya masih ada sisi positif di tengah kondisi sulit',
        collocations: ['他受伤了，好在伤势不是很严重。'],
        distinguishing_note: 'Menghibur diri atas titik terang di balik musibah',
        formality: 'netral'
      },
      {
        hanzi: '多亏',
        pinyin: 'duōkuī',
        meaning_id: 'Berkat bantuan dan jasa orang lain berhasil meraih hasil baik',
        collocations: ['多亏了你的帮助，我才取得了今天的成绩。'],
        distinguishing_note: 'Pola: 多亏了……才…… (menyatakan rasa syukur atas jasa orang lain)',
        formality: 'netral'
      }
    ]
  },
  {
    id: 321,
    category_id: 'adverbs',
    title: '一律 vs 一概 vs 统统 (Semuanya Sama Rata / Seluruhnya Benda Gugur / Semuanya Ludes)',
    key_difference_summary: 'Sama rata tanpa pengecualian untuk orang/tindakan (一律) vs Berlaku mutlak seluruhnya untuk benda/penolakan (一概) vs Semuanya ludes dihabiskan dalam kalimat 把 (统统)',
    words: [
      {
        hanzi: '一律',
        pinyin: 'yílǜ',
        meaning_id: 'Sama semua tanpa pengecualian hukum/tata tertib',
        collocations: ['这些文章千篇一律，毫无特色。', '除病号外，其余同学一律参加劳动。'],
        distinguishing_note: 'Semua siswa wajib ikut kerja bakti sama rata',
        formality: 'formal_tulis'
      },
      {
        hanzi: '一概',
        pinyin: 'yígài',
        meaning_id: 'Seluruhnya tanpa pengecualian (khusus urusan benda / penolakan total)',
        collocations: ['对他的工作，我们不能一概否定。', '过期电话卡，一概作废。'],
        distinguishing_note: 'Tiket kedaluwarsa otomatis hangus total (一概作废)',
        formality: 'formal_tulis'
      },
      {
        hanzi: '统统',
        pinyin: 'tǒngtǒng',
        meaning_id: 'Semua tanpa sisa meliputi seluruh bagian (sering pola kalimat 把)',
        collocations: ['这个班的同学统统都考上了大学。', '他把一盘饺子统统都吃光了。'],
        distinguishing_note: 'Menghabiskan sepiring pangsit ludes sampai tak tersisa',
        formality: 'lisan_percakapan'
      }
    ]
  },
  {
    id: 322,
    category_id: 'adverbs',
    title: '一再 vs 再三 vs 屡次 (Berulang-ulang Kata / Menimbang Bolak-balik / Berkali-kali Mengalami)',
    key_difference_summary: 'Mengulang wanti-wanti ucapan (一再) vs Menimbang bolak-balik setelah predikat (再三) vs Mengalami kegagalan/rekor berkali-kali (屡次)',
    words: [
      {
        hanzi: '一再',
        pinyin: 'yízài',
        meaning_id: 'Satu kali lagi dan lagi (sering diikuti kata kerja ucapan: 强调, 邀请)',
        collocations: ['老师一再强调不许迟到，你还是迟到了。'],
        distinguishing_note: 'Guru berulang kali menekankan larangan (一再强调)',
        formality: 'formal_tulis'
      },
      {
        hanzi: '再三',
        pinyin: 'zàisān',
        meaning_id: 'Bolak-balik berkali-kali (bisa ditaruh SETELAH kata kerja)',
        collocations: ['他考虑再三，还是决定放弃了。'],
        distinguishing_note: 'Bisa di belakang predikat: 考虑再三 (menimbang bolak-balik)',
        formality: 'formal_tulis'
      },
      {
        hanzi: '屡次',
        pinyin: 'lǚcì',
        meaning_id: 'Berkali-kali mencatat rekor atau mengalami kegagalan',
        collocations: ['为什么我们的实验会屡次失败呢？'],
        distinguishing_note: 'Sering diikuti kata: 失败, 打破, 战胜',
        formality: 'formal_tulis'
      }
    ]
  },
  {
    id: 323,
    category_id: 'adverbs',
    title: '曾经 vs 已经 (Pernah Dulu Selesai / Sudah Terjadi Hingga Kini)',
    key_difference_summary: 'Dulu pernah terjadi masa lalu dan selesai (曾经) vs Sudah terjadi dan kondisinya berlanjut sekarang (已经)',
    words: [
      {
        hanzi: '曾经',
        pinyin: 'céngjīng',
        meaning_id: 'Dulu pernah terjadi, sekarang sudah berakhir total',
        collocations: ['看你很面熟，我们曾经在哪儿见过。'],
        distinguishing_note: 'Masa lalu yang sudah lampau dan tidak berkorelasi dengan status masa kini',
        formality: 'netral'
      },
      {
        hanzi: '已经',
        pinyin: 'yǐjīng',
        meaning_id: 'Sudah selesai atau statusnya masih berlangsung hingga masa kini',
        collocations: ['他已经三年没有回过老家了。'],
        distinguishing_note: 'Masih berkorelasi langsung dengan keadaan sekarang (sudah 3 tahun tidak pulang)',
        formality: 'netral'
      }
    ]
  },
  {
    id: 324,
    category_id: 'adverbs',
    title: '正好 vs 恰恰 vs 恰巧 vs 恰好 (Pas Banget / Tepat Sekali Titik / Kebetulan Pas / Cukup Pas)',
    key_difference_summary: 'Pas ukurannya/waktunya (正好) vs Tepat di menit itu / justru sebaliknya (恰恰) vs Kebetulan tak disengaja (恰巧) vs Tepat cukup kuantitasnya (恰好)',
    words: [
      {
        hanzi: '正好',
        pinyin: 'zhènghǎo',
        meaning_id: 'Tepat sekali, pas ukurannya tidak kebesaran/kekecilan',
        collocations: ['我正要去找她，正好她来了。', '这件衣服你穿起来正好。（形）'],
        distinguishing_note: 'Bisa kata sifat ukuran pas di badan',
        formality: 'netral'
      },
      {
        hanzi: '恰恰',
        pinyin: 'qiàqià',
        meaning_id: 'Tepat sekali pada detiknya; atau kontras justru kebalikannya',
        collocations: ['我到教室时，恰恰 8 点整。', '你认为这样做对吗？恰恰相反，完全是错误的。'],
        distinguishing_note: 'Dipakai pada frasa penegasan kontras mutlak (恰恰相反 = justru sebaliknya)',
        formality: 'formal_tulis'
      },
      {
        hanzi: '恰巧',
        pinyin: 'qiàqiǎo',
        meaning_id: 'Secara kebetulan tepat waktu tanpa disengaja sebelumnya',
        collocations: ['我正愁一个人拿不动，恰巧我同学来了。'],
        distinguishing_note: 'Faktor kebetulan takdir yang menyenangkan saat butuh bantuan',
        formality: 'netral'
      },
      {
        hanzi: '恰好',
        pinyin: 'qiàhǎo',
        meaning_id: 'Pas takarannya pas sesuai yang dicari',
        collocations: ['你要的那本书，恰好我这里有。', '这块木料恰好够做一张圆桌。'],
        distinguishing_note: 'Kayu pas cukup untuk bikin meja bundar tanpa sisa',
        formality: 'netral'
      }
    ]
  },
  {
    id: 325,
    category_id: 'adverbs',
    title: '逐步 vs 逐渐 vs 渐渐 (Bertahap Tahap Demi Tahap / Perlahan Teratur / Berangsur-angsur Natural)',
    key_difference_summary: 'Tahap demi tahap per fase terencana (逐步) vs Berubah lambat teratur seiring waktu (逐渐) vs Berangsur natural langit mulai terang (渐渐)',
    words: [
      {
        hanzi: '逐步',
        pinyin: 'zhúbù',
        meaning_id: 'Langkah demi langkah terencana (hanya memodifikasi kata kerja, tak bisa di awal kalimat)',
        collocations: ['随着经济的发展，人民的生活水平在逐步提高。'],
        distinguishing_note: 'Pola langkah kebijakan bertahap: 逐步提高, 逐步推进',
        formality: 'formal_tulis'
      },
      {
        hanzi: '逐渐',
        pinyin: 'zhújiàn',
        meaning_id: 'Berkembang/berubah perlahan secara teratur seiring waktu',
        collocations: ['大雨不停地下，眼见河水在逐渐上涨。'],
        distinguishing_note: 'Air sungai perlahan naik meluap secara berkelanjutan',
        formality: 'formal_tulis'
      },
      {
        hanzi: '渐渐',
        pinyin: 'jiànjiàn',
        meaning_id: 'Berangsur-angsur berubah pelan secara alami (suasana alam/waktu)',
        collocations: ['太阳慢慢地升起，天渐渐地亮了。'],
        distinguishing_note: 'Fajar menyingsing langit berangsur-angsur terang benderang',
        formality: 'netral'
      }
    ]
  }
];
