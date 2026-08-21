import { SynonymGroup } from '../types';

export const adjectivesData: SynonymGroup[] = [
  {
    id: 101,
    category_id: 'adjectives',
    title: '安静 vs 平静 vs 镇静 vs 镇定 (Tenang / Damai / Kalem)',
    key_difference_summary: 'Suasana hening tanpa suara (安静) vs Hati/alam tenang damai (平静) vs Emosi stabil tidak panik (镇静) vs Tetap tenang menghadapi krisis darurat (镇定)',
    words: [
      {
        hanzi: '安静',
        pinyin: 'ānjìng',
        meaning_id: 'Sunyi senyap, tidak ada keributan suara',
        collocations: ['病房里很安静。', '上课铃响了，教室立刻安静下来了。'],
        distinguishing_note: 'Kondisi akustik/lingkungan tanpa kegaduhan suara bising',
        formality: 'netral'
      },
      {
        hanzi: '平静',
        pinyin: 'píngjìng',
        meaning_id: 'Tenang, tenteram, permukaan air/suasana hati damai',
        collocations: ['保持平静', '平静的生活', '心情平静下来了。'],
        distinguishing_note: 'Suasana batin yang rileks, danau tenang tanpa gelombang besar',
        formality: 'netral'
      },
      {
        hanzi: '镇静',
        pinyin: 'zhènjìng',
        meaning_id: 'Sikap emosional stabil, tidak gugup saat ada kabar',
        collocations: ['神色镇静', '镇静自若', '内心很镇静', '神态镇静'],
        distinguishing_note: 'Raut wajah tetap tenang terkontrol, tidak meledak-ledak',
        formality: 'formal_tulis'
      },
      {
        hanzi: '镇定',
        pinyin: 'zhèndìng',
        meaning_id: 'Tidak panik dan tetap berkepala dingin di situasi bahaya darurat',
        collocations: ['保持镇定', '沉着镇定', '内心镇定'],
        distinguishing_note: 'Khusus menghadapi kondisi kritis darurat seperti kebakaran atau bencana',
        formality: 'netral'
      }
    ]
  },
  {
    id: 102,
    category_id: 'adjectives',
    title: '必定 vs 必然 vs 必需 vs 必要 (Pasti / Keniscayaan / Mutlak)',
    key_difference_summary: 'Keyakinan subjektif pembicara (必定) vs Hukum logika keniscayaan objektif (必然) vs Barang kebutuhan pokok fisik (必需) vs Syarat wajib mutlak (必要)',
    words: [
      {
        hanzi: '必定',
        pinyin: 'bìdìng',
        meaning_id: 'Pasti (penilaian subjektif pembicara yang mantap)',
        collocations: ['必定成功', '必定失败', '必定会发生'],
        distinguishing_note: 'Keyakinan teguh subjektif seseorang; sering sebagai kata keterangan',
        formality: 'formal_tulis'
      },
      {
        hanzi: '必然',
        pinyin: 'bìrán',
        meaning_id: 'Keniscayaan alamiah yang tak terelakkan secara hukum objektif',
        collocations: ['必然趋势', '必然的结果', '必然的联系', '成功必然属于坚持不懈努力的人。'],
        distinguishing_note: 'Hukum keniscayaan logika objektif (misal: lahir, tua, sakit, mati)',
        formality: 'formal_tulis'
      },
      {
        hanzi: '必需',
        pinyin: 'bìxū',
        meaning_id: 'Wajib ada, tidak boleh kurang (khusus barang/alat/material)',
        collocations: ['必需的物品', '必需的材料'],
        distinguishing_note: 'Sering memodifikasi barang kebutuhan fisik dasar hidup (sembako/bahan)',
        object_type: 'konkret',
        formality: 'netral'
      },
      {
        hanzi: '必要',
        pinyin: 'bìyào',
        meaning_id: 'Diperlukan, tidak boleh dilewatkan (syarat/langkah penting)',
        collocations: ['必要手段', '必要工具', '必要说明', '必要条件'],
        distinguishing_note: 'Syarat mutlak prosedural, penjelasan penting yang tak boleh luput',
        object_type: 'abstrak',
        formality: 'netral'
      }
    ]
  },
  {
    id: 103,
    category_id: 'adjectives',
    title: '充分 vs 充满 vs 充沛 vs 充实 vs 充足 (Cukup / Penuh / Melimpah)',
    key_difference_summary: 'Bukti/alasan kuat memadai (充分) vs Penuh terisi antusiasme/cahaya (充满) vs Energi stamina/hujan melimpah (充沛) vs Hidup kaya bermakna / stok padat (充实) vs Pasokan kuantitas waktu/dana cukup (充足)',
    words: [
      {
        hanzi: '充分',
        pinyin: 'chōngfèn',
        meaning_id: 'Cukup dalam kadar/derajat; sepenuhnya (khusus hal abstrak)',
        collocations: ['证据充分', '理由充分', '充分利用', '充分发挥'],
        distinguishing_note: 'Alasan kuat, bukti konkret persidangan lengkap, memanfaatkan secara optimal',
        object_type: 'abstrak',
        formality: 'formal_tulis'
      },
      {
        hanzi: '充满',
        pinyin: 'chōngmǎn',
        meaning_id: 'Penuh terisi sampai meluap (suasana batin/cahaya)',
        collocations: ['充满阳光', '充满想象', '充满活力', '充满力量', '充满希望'],
        distinguishing_note: 'Hati dipenuhi harapan baru, ruangan dipenuhi sinar hangat mentari',
        formality: 'netral'
      },
      {
        hanzi: '充沛',
        pinyin: 'chōngpèi',
        meaning_id: 'Melimpah ruah (stamina fisik, curah hujan deras)',
        collocations: ['雨水充沛', '充沛的创作热情', '精力充沛'],
        distinguishing_note: 'Curah air hujan tropis melimpah, stamina energi bekerja menggebu-gebu',
        formality: 'formal_tulis'
      },
      {
        hanzi: '充实',
        pinyin: 'chōngshí',
        meaning_id: 'Isi padat bermakna, tidak kosong hampa',
        collocations: ['内容充实', '库存充实', '生活充实', '内心充实', '思想充实', '充实自己', '充实干部队伍（动）'],
        distinguishing_note: 'Hari-hari yang diisi belajar produktif (hidup bermakna), gudang persediaan padat',
        formality: 'netral'
      },
      {
        hanzi: '充足',
        pinyin: 'chōngzú',
        meaning_id: 'Cukup secara kuantitas untuk memenuhi kebutuhan standar',
        collocations: ['光线充足', '经费充足', '人力充足', '阳光充足', '时间充足'],
        distinguishing_note: 'Kuantitas fisik mencukupi: dana anggaran cukup, kuota jam tidur cukup',
        formality: 'netral'
      }
    ]
  },
  {
    id: 104,
    category_id: 'adjectives',
    title: '朴实 vs 朴素 vs 简朴 (Sederhana / Bersahaja)',
    key_difference_summary: 'Karakter orang jujur bersahaja (朴实) vs Pakaian/hidup tidak bermewah-mewahan (朴素) vs Desain interior/perabotan minimalis sederhana (简朴)',
    words: [
      {
        hanzi: '朴实',
        pinyin: 'pǔshí',
        meaning_id: 'Sederhana, polos dan jujur dapat dipercaya (watak pribadi)',
        collocations: ['朴实的服饰', '朴实作风', '为人朴实', '风格朴实'],
        distinguishing_note: 'Kepribadian orang desa yang lugu dan tulus tanpa tipu daya',
        connotation: 'positif',
        formality: 'netral'
      },
      {
        hanzi: '朴素',
        pinyin: 'pǔsù',
        meaning_id: 'Gaya berpakaian tidak mencolok, hidup hemat tanpa kemewahan',
        collocations: ['衣着朴素', '文字朴素', '生活朴素', '艰苦朴素', '朴素的感情', '朴素的语言'],
        distinguishing_note: 'Pakaian tanpa riasan mahal, gaya hidup hemat tidak boros',
        connotation: 'positif',
        formality: 'netral'
      },
      {
        hanzi: '简朴',
        pinyin: 'jiǎnpǔ',
        meaning_id: 'Sederhana dan bersahaja (perabotan rumah, tulisan)',
        collocations: ['生活简朴', '作风简朴', '室内陈设简朴'],
        distinguishing_note: 'Dekorasi ruangan kamar minimalis tanpa ornamen mewah',
        connotation: 'positif',
        formality: 'formal_tulis'
      }
    ]
  },
  {
    id: 105,
    category_id: 'adjectives',
    title: '勤俭 vs 勤劳 vs 勤恳 (Rajin / Tekun / Hemat)',
    key_difference_summary: 'Rajin bekerja sekaligus hemat uang (勤俭) vs Bekerja keras tanpa takut lelah (勤劳) vs Tekun teliti berdedikasi tinggi (勤恳)',
    words: [
      {
        hanzi: '勤俭',
        pinyin: 'qínjiǎn',
        meaning_id: 'Rajin dan hidup hemat mengelola keuangan rumah tangga',
        collocations: ['勤俭节约', '勤俭持家', '勤俭建国', '勤俭度日'],
        distinguishing_note: 'Fokus gabungan: rajin (勤) + hemat cermat mengatur kas (俭)',
        connotation: 'positif',
        formality: 'formal_tulis'
      },
      {
        hanzi: '勤劳',
        pinyin: 'qínláo',
        meaning_id: 'Ulet bekerja keras dengan tenaga fisik tanpa mengeluh lelah',
        collocations: ['母亲很勤劳', '勤劳勇敢的人', '勤劳的双手'],
        distinguishing_note: 'Ketekunan fisik para petani/ibu rumah tangga membanting tulang',
        connotation: 'positif',
        formality: 'netral'
      },
      {
        hanzi: '勤恳',
        pinyin: 'qínkěn',
        meaning_id: 'Bekerja dengan sepenuh hati, teliti dan setia berdedikasi',
        collocations: ['工作勤恳', '勤恳地为人民服务', '他对工作勤勤恳恳。'],
        distinguishing_note: 'Dedikasi kerja yang cermat dan setia (bisa diulang 勤勤恳恳)',
        connotation: 'positif',
        formality: 'formal_tulis'
      }
    ]
  },
  {
    id: 106,
    category_id: 'adjectives',
    title: '确实 vs 确切 (Pasti / Akurat)',
    key_difference_summary: 'Benar adanya tanpa dusta (确实 - bisa kata keterangan) vs Angka/tanggal presisi tepat tanpa deviasi (确切)',
    words: [
      {
        hanzi: '确实',
        pinyin: 'quèshí',
        meaning_id: 'Sungguh-sungguh benar dan dapat diandalkan tanpa kebohongan',
        collocations: ['确实的消息', '确实的数字', '确实的情报', '确实是我错了（副）'],
        distinguishing_note: 'Bisa berfungsi sebagai kata keterangan penguat (确实是我……)',
        formality: 'netral'
      },
      {
        hanzi: '确切',
        pinyin: 'quèqiè',
        meaning_id: 'Presisi, tepat dan akurat tanpa ada selisih penyimpangan',
        collocations: ['确切的日期', '确切的消息', '用词确切'],
        distinguishing_note: 'Hanya kata sifat: penanggalan yang tepat presisi, pilihan diksi kata tepat',
        formality: 'formal_tulis'
      }
    ]
  },
  {
    id: 107,
    category_id: 'adjectives',
    title: '适合 vs 适宜 vs 合适 vs 适应 (Cocok / Sesuai / Beradaptasi)',
    key_difference_summary: 'Kata kerja transitif: cocok dengan kebutuhan (适合) vs Kata sifat: hawa cuaca pas (适宜) vs Kata sifat: pas tidak kebesaran/kekecilan (合适) vs Beradaptasi dengan lingkungan baru (适应)',
    words: [
      {
        hanzi: '适合',
        pinyin: 'shìhé',
        meaning_id: 'Cocok dengan kriteria atau kebutuhan (bisa diikuti objek langsung)',
        collocations: ['适合社会需求', '适合要求', '适合年轻人的特点'],
        distinguishing_note: 'Kata kerja transitif: langsung diikuti objek target sasaran (适合+Objek)',
        formality: 'netral'
      },
      {
        hanzi: '适宜',
        pinyin: 'shìyí',
        meaning_id: 'Sesuai dan ideal (iklim cuaca ramah bagi tanaman/kegiatan)',
        collocations: ['浓淡适宜', '气候适宜', '适宜种花草', '不适宜体力劳动'],
        distinguishing_note: 'Kondisi lingkungan/hawa udara yang cocok untuk budidaya',
        formality: 'formal_tulis'
      },
      {
        hanzi: '合适',
        pinyin: 'héshì',
        meaning_id: 'Pas dan tepat (tidak bisa diikuti objek langsung)',
        collocations: ['比较合适', '感到合适', '合适的条件', '合适的方法'],
        distinguishing_note: 'Kata sifat: ukuran baju pas, cara yang cocok (tidak bisa *合适你)',
        formality: 'netral'
      },
      {
        hanzi: '适应',
        pinyin: 'shìyìng',
        meaning_id: 'Melakukan penyesuaian diri terhadap perubahan iklim/situasi baru',
        collocations: ['适应环境', '适应社会', '适应过程', '适应形势'],
        distinguishing_note: 'Proses penyesuaian organisme atau perantau di tempat asing',
        formality: 'netral'
      }
    ]
  },
  {
    id: 108,
    category_id: 'adjectives',
    title: '妥当 vs 稳妥 vs 妥善 (Tepat / Mantap / Sempurna)',
    key_difference_summary: 'Pantas tidak canggung (妥当) vs Aman tidak berisiko gagal (稳妥) vs Penanganan tuntas menyeluruh (妥善)',
    words: [
      {
        hanzi: '妥当',
        pinyin: 'tuǒdang',
        meaning_id: 'Pantas, patut dan tidak canggung',
        collocations: ['用词妥当', '说话不妥当', '妥当的办法'],
        distinguishing_note: 'Tata krama tutur kata santun, cara yang beradab',
        formality: 'netral'
      },
      {
        hanzi: '稳妥',
        pinyin: 'wěntuǒ',
        meaning_id: 'Mantap, aman dan minim risiko spekulasi',
        collocations: ['稳妥可靠', '稳妥的解决办法', '稳妥一点儿'],
        distinguishing_note: 'Solusi aman minim risiko bagi investasi atau langkah mitigasi',
        formality: 'netral'
      },
      {
        hanzi: '妥善',
        pinyin: 'tuǒshàn',
        meaning_id: 'Ditangani dengan sangat rapi, tuntas dan sempurna',
        collocations: ['妥善的安排', '妥善保管', '妥善处理'],
        distinguishing_note: 'Pengaturan barang berharga, mediasi konflik dituntaskan secara rapi',
        formality: 'formal_tulis'
      }
    ]
  },
  {
    id: 109,
    category_id: 'adjectives',
    title: '严重 vs 严厉 vs 严肃 vs 严格 (Gawat / Keras / Serius / Ketat)',
    key_difference_summary: 'Situasi krisis gawat berbahaya (严重) vs Sikap tanpa ampun tegas galak (严厉) vs Suasana khidmat hening (严肃) vs Menjalankan SOP aturan ketat (严格)',
    words: [
      {
        hanzi: '严重',
        pinyin: 'yánzhòng',
        meaning_id: 'Gawat, darurat dan berdampak fatal',
        collocations: ['错误严重', '事态严重', '严重的后果'],
        distinguishing_note: 'Kondisi luka parah, krisis ekonomi genting, konsekuensi fatal',
        connotation: 'negatif',
        formality: 'netral'
      },
      {
        hanzi: '严厉',
        pinyin: 'yánlì',
        meaning_id: 'Keras dan tanpa kompromi (tatapan mata / hukuman disiplin)',
        collocations: ['严厉的目光', '态度很严厉', '严厉的面孔'],
        distinguishing_note: 'Sikap galak mendidik murid, tatapan mata mengintimidasi',
        formality: 'formal_tulis'
      },
      {
        hanzi: '严肃',
        pinyin: 'yánsù',
        meaning_id: 'Khidmat, bersahaja dan membuat orang segan',
        collocations: ['严肃的气氛', '表情严肃', '严肃处理', '严肃批评', '严肃军纪', '严肃法制（动）'],
        distinguishing_note: 'Raut muka tanpa senyum di pemakaman, menegakkan disiplin militer',
        formality: 'formal_tulis'
      },
      {
        hanzi: '严格',
        pinyin: 'yángé',
        meaning_id: 'Ketat dan cermat dalam mematuhi standar aturan',
        collocations: ['严格遵守', '严格执行', '严格要求', '严格控制'],
        distinguishing_note: 'Disiplin kepatuhan standar lab, pengawasan mutu tanpa kelonggaran',
        formality: 'netral'
      }
    ]
  },
  {
    id: 110,
    category_id: 'adjectives',
    title: '珍贵 vs 珍惜 vs 宝贵 (Berharga / Menghargai)',
    key_difference_summary: 'Nilai sejarah langka tinggi (珍贵) vs Kata kerja: sangat merawat menyayangi (珍惜) vs Nilai guna/pengalaman emas langka (宝贵)',
    words: [
      {
        hanzi: '珍贵',
        pinyin: 'zhēnguì',
        meaning_id: 'Bernilai tinggi dan sarat makna historis/emosional',
        collocations: ['珍贵的文物', '珍贵的历史资料', '珍贵的友谊'],
        distinguishing_note: 'Benda pusaka peninggalan purbakala, dokumen sejarah langka',
        connotation: 'positif',
        formality: 'formal_tulis'
      },
      {
        hanzi: '珍惜',
        pinyin: 'zhēnxī',
        meaning_id: 'Sangat menghargai, menjaga dan tidak menyia-nyiakan (kata kerja)',
        collocations: ['珍惜生命', '珍惜这次机会', '珍惜友谊'],
        distinguishing_note: 'Kata kerja aktif: menghargai waktu muda, menyayangi nyawa',
        connotation: 'positif',
        formality: 'netral'
      },
      {
        hanzi: '宝贵',
        pinyin: 'bǎoguì',
        meaning_id: 'Sangat bernilai tinggi dan sulit didapatkan kembali',
        collocations: ['宝贵的财富', '宝贵经验', '宝贵的时间', '宝贵建议'],
        distinguishing_note: 'Pengalaman berharga hidup, saran masukan emas, waktu emas',
        connotation: 'positif',
        formality: 'netral'
      }
    ]
  },
  {
    id: 111,
    category_id: 'adjectives',
    title: '神奇 vs 神秘 vs 奇妙 vs 巧妙 (Ajaib / Misterius / Unik / Cerdik)',
    key_difference_summary: 'Keajaiban spektakuler (神奇) vs Penuh teka-teki tak tertebak (神秘) vs Desain unik menakjubkan (奇妙) vs Trik cerdik di atas rata-rata (巧妙)',
    words: [
      {
        hanzi: '神奇',
        pinyin: 'shénqí',
        meaning_id: 'Ajaib dan membuat kagum luar biasa bagai mukjizat',
        collocations: ['神奇的效果', '神奇的魔术', '神奇的景观'],
        distinguishing_note: 'Khasiat obat ajaib, trik sulap memukau penonton',
        connotation: 'positif',
        formality: 'netral'
      },
      {
        hanzi: '神秘',
        pinyin: 'shénmì',
        meaning_id: 'Misterius, sulit ditebak dan belum terpecahkan',
        collocations: ['神秘的举动', '神秘的现象', '神秘的色彩', '神秘的表情'],
        distinguishing_note: 'UFO, ekspresi penuh teka-teki, tempat ritual rahasia',
        formality: 'netral'
      },
      {
        hanzi: '奇妙',
        pinyin: 'qímiào',
        meaning_id: 'Unik memukau dan menggugah rasa penasaran',
        collocations: ['奇妙无比', '设计奇妙', '奇妙的太空之旅'],
        distinguishing_note: 'Petualangan luar angkasa yang menakjubkan, inovasi unik',
        connotation: 'positif',
        formality: 'formal_tulis'
      },
      {
        hanzi: '巧妙',
        pinyin: 'qiǎomiào',
        meaning_id: 'Cerdik, terampil dan menemukan trik cerdas mengatasi masalah',
        collocations: ['巧妙的设计思路', '巧妙的方法', '他巧妙地把自己的想法告诉了她。'],
        distinguishing_note: 'Trik desain yang sangat cerdik melampaui cara konvensional',
        connotation: 'positif',
        formality: 'netral'
      }
    ]
  },
  {
    id: 112,
    category_id: 'adjectives',
    title: '周到 vs 周密 vs 严密 (Penuh Perhatian / Teliti / Rapat Ketat)',
    key_difference_summary: 'Pelayanan ramah detail ke tamu (周到) vs Rencana strategi matang detail (周密) vs Pertahanan rapat tanpa celah (严密)',
    words: [
      {
        hanzi: '周到',
        pinyin: 'zhōudào',
        meaning_id: 'Sangat ramah dan memperhatikan seluruh kenyamanan tamu',
        collocations: ['考虑周到', '说话周到', '安排周到', '服务周到'],
        distinguishing_note: 'Pelayanan hotel/jamuan ramah tanpa ada kekurangan bagi tamu',
        connotation: 'positif',
        formality: 'netral'
      },
      {
        hanzi: '周密',
        pinyin: 'zhōumì',
        meaning_id: 'Perencanaan matang, analisis detail tanpa ada celah terlewat',
        collocations: ['计划周密', '周密思考', '周密分析', '周密调查'],
        distinguishing_note: 'Penyusunan proposal taktik perang atau skema bisnis matang',
        connotation: 'positif',
        formality: 'formal_tulis'
      },
      {
        hanzi: '严密',
        pinyin: 'yánmì',
        meaning_id: 'Rapat ketat, terstruktur padat tanpa ada celah kebocoran',
        collocations: ['结构严密', '组织严密', '防守严密', '严密监视'],
        distinguishing_note: 'Pertahanan benteng rapat, logika esai kedap bantahan',
        formality: 'formal_tulis'
      }
    ]
  },
  {
    id: 113,
    category_id: 'adjectives',
    title: '庄严 vs 庄重 (Khidmat / Anggun)',
    key_difference_summary: 'Suasana upacara kenegaraan agung khidmat (庄严) vs Sikap gerak-gerik seseorang tenang berwibawa (庄重)',
    words: [
      {
        hanzi: '庄严',
        pinyin: 'zhuāngyán',
        meaning_id: 'Khidmat, sakral dan megah berwibawa tinggi',
        collocations: ['庄严的时刻', '气氛庄严', '庄严的场面', '庄严的表情'],
        distinguishing_note: 'Suasana saat lagu kebangsaan dikumandangkan, monumen sakral',
        connotation: 'positif',
        formality: 'formal_tulis'
      },
      {
        hanzi: '庄重',
        pinyin: 'zhuāngzhòng',
        meaning_id: 'Bersikap berwibawa santun, tidak sembrono atau petakilan',
        collocations: ['庄重宣布', '庄重的举止', '神态庄重', '庄重的仪式'],
        distinguishing_note: 'Gerak-gerik diplomat yang santun tenang dan berkelas',
        connotation: 'positif',
        formality: 'formal_tulis'
      }
    ]
  },
  {
    id: 114,
    category_id: 'adjectives',
    title: '自豪 vs 骄傲 vs 自满 (Bangga / Sombong / Berpuas Diri)',
    key_difference_summary: 'Bangga atas prestasi luhur (自豪 - positif) vs Bangga/Sombong meremehkan orang (骄傲 - netral/negatif) vs Berpuas diri enggan maju (自满 - negatif)',
    words: [
      {
        hanzi: '自豪',
        pinyin: 'zìháo',
        meaning_id: 'Bangga terhormat karena memiliki tradisi atau prestasi unggul',
        collocations: ['以此自豪', '感到自豪', '自豪地说'],
        distinguishing_note: 'Selalu bermakna positif: rasa bangga mewakili bangsa',
        connotation: 'positif',
        formality: 'netral'
      },
      {
        hanzi: '骄傲',
        pinyin: 'jiāo\'ào',
        meaning_id: 'Sombong memandang enteng orang lain (negatif) / Kebanggaan (positif)',
        collocations: ['他瞧不起人，太骄傲！（贬义）', '我以有这样的学生感到骄傲。（褒义）', '我是父母的骄傲。（名）'],
        distinguishing_note: 'Bisa berarti congkak sombong (negatif) atau kebanggaan keluarga (positif)',
        formality: 'netral'
      },
      {
        hanzi: '自满',
        pinyin: 'zìmǎn',
        meaning_id: 'Cepat puas diri dengan capaian awal sehingga malas belajar lagi',
        collocations: ['有了成绩也不要自满。', '骄傲自满就会落后。', '克服自满情绪'],
        distinguishing_note: 'Selalu bermakna negatif: terlena pada hasil dan berhenti berjuang',
        connotation: 'negatif',
        formality: 'formal_tulis'
      }
    ]
  },
  {
    id: 115,
    category_id: 'adjectives',
    title: '单独 vs 独自 vs 孤单 vs 孤独 (Sendiri / Kesepian / Terisolasi)',
    key_difference_summary: 'Terpisah tidak bareng kelompok (单独) vs Seorang diri tanpa teman (独自) vs Merasa sepi butuh teman (孤单) vs Jiwa terisolasi sunyi mendalam (孤独)',
    words: [
      {
        hanzi: '单独',
        pinyin: 'dāndú',
        meaning_id: 'Sendiri tanpa melibatkan departemen atau orang lain',
        collocations: ['单独跟他谈谈', '单独行动', '单独操作', '单独招生', '单独出门'],
        distinguishing_note: 'Kata keterangan: wawancara 4 mata, bergerak mandiri terpisah',
        formality: 'netral'
      },
      {
        hanzi: '独自',
        pinyin: 'dúzì',
        meaning_id: 'Seorang diri melakukan kegiatan tanpa ada kawan mendampingi',
        collocations: ['独自玩耍', '独自一个人在家', '独自经营', '独自完成任务'],
        distinguishing_note: 'Menyelesaikan tugas seorang diri, tinggal di rumah sendiri',
        formality: 'netral'
      },
      {
        hanzi: '孤单',
        pinyin: 'gūdān',
        meaning_id: 'Merasa sepi karena tidak ada sanak keluarga di samping',
        collocations: ['一个人生活，很孤单', '孤单一个人', '感到孤单', '非常孤单', '势力孤单'],
        distinguishing_note: 'Perasaan sepi emosional karena minimnya interaksi sosial',
        formality: 'netral'
      },
      {
        hanzi: '孤独',
        pinyin: 'gūdú',
        meaning_id: 'Terisolasi batin mendalam, sebatang kara tanpa sandaran',
        collocations: ['儿女出国了，他感到很孤独。', '孤独无依', '孤独的生活', '孤独的性格'],
        distinguishing_note: 'Kepribadian tertutup penyendiri atau lansia sebatang kara',
        formality: 'formal_tulis'
      }
    ]
  },
  {
    id: 116,
    category_id: 'adjectives',
    title: '长久 vs 永久 vs 悠久 (Lama / Abadi / Kuno Kuno)',
    key_difference_summary: 'Durasi panjang terbatas (长久) vs Abadi selamanya tak berujung (永久) vs Sejarah peradaban kuno ribuan tahun (悠久)',
    words: [
      {
        hanzi: '长久',
        pinyin: 'chángjiǔ',
        meaning_id: 'Berlangsung dalam rentang waktu yang lama namun ada batasnya',
        collocations: ['长久的打算', '长久之计', '长久下去'],
        distinguishing_note: 'Rencana jangka panjang, tidak bisa bertahan lama jika begini terus',
        formality: 'netral'
      },
      {
        hanzi: '永久',
        pinyin: 'yǒngjiǔ',
        meaning_id: 'Kekal abadi, selamanya tidak akan berubah',
        collocations: ['永久的纪念', '永久的遗憾', '永久不变'],
        distinguishing_note: 'Hak tinggal tetap/permanen, monumen pengingat abadi',
        formality: 'formal_tulis'
      },
      {
        hanzi: '悠久',
        pinyin: 'yōujiǔ',
        meaning_id: 'Berakar jauh dari zaman purba kuno (sejarah dan tradisi)',
        collocations: ['悠久的历史', '悠久的文化', '悠久传统'],
        distinguishing_note: 'Khusus mendeskripsikan sejarah peradaban, kebudayaan ribuan tahun',
        object_type: 'abstrak',
        connotation: 'positif',
        formality: 'formal_tulis'
      }
    ]
  },
  {
    id: 117,
    category_id: 'adjectives',
    title: '纯洁 vs 单纯 vs 天真 vs 幼稚 (Murni / Polos / Lugas / Kekanak-kanakan)',
    key_difference_summary: 'Pikiran suci tanpa pamrih (纯洁) vs Sederhana murni tidak berbelit (单纯) vs Polos ceria anak kecil (天真) vs Dangkal kekanak-kanakan belum matang (幼稚)',
    words: [
      {
        hanzi: '纯洁',
        pinyin: 'chúnjié',
        meaning_id: 'Putih bersih tanpa cela noda kiasan batin yang suci',
        collocations: ['纯洁的思想', '纯洁的品质', '纯洁的友情'],
        distinguishing_note: 'Persahabatan murni tanpa motif materi, moralitas suci',
        connotation: 'positif',
        formality: 'formal_tulis'
      },
      {
        hanzi: '单纯',
        pinyin: 'dānchún',
        meaning_id: 'Sederhana dan tidak rumit berbelit-belit',
        collocations: ['太单纯', '思想单纯', '关系单纯'],
        distinguishing_note: 'Hubungan kerja yang simpel, pola pikir yang lurus tidak licik',
        connotation: 'positif',
        formality: 'netral'
      },
      {
        hanzi: '天真',
        pinyin: 'tiānzhēn',
        meaning_id: 'Lugu, jujur dan ceria khas anak-anak (positif/kadang naif)',
        collocations: ['天真活泼', '天真可爱', '天真的孩子', '天真的想法'],
        distinguishing_note: 'Kepolosan anak-anak atau gagasan yang agak terlalu naif',
        formality: 'netral'
      },
      {
        hanzi: '幼稚',
        pinyin: 'yòuzhì',
        meaning_id: 'Kekanak-kanakan, dangkal dan minim pengalaman (negatif)',
        collocations: ['幼稚的声音', '幼稚的举动', '幼稚可笑', '幼稚的行为'],
        distinguishing_note: 'Tindakan orang dewasa yang konyol kekanak-kanakan dan belum matang',
        connotation: 'negatif',
        formality: 'netral'
      }
    ]
  },
  {
    id: 118,
    category_id: 'adjectives',
    title: '发达 vs 繁荣 vs 繁华 (Maju / Makmur / Gemerlap Ramai)',
    key_difference_summary: 'Kemajuan teknologi/industri/otot (发达) vs Kemakmuran ekonomi pasar melesat (繁荣) vs Keramaian toko lampu jalanan kota (繁华)',
    words: [
      {
        hanzi: '发达',
        pinyin: 'fādá',
        meaning_id: 'Maju pesat di berbagai bidang sains teknologi atau otot kekar',
        collocations: ['经济发达', '发达的科技', '发达的交通', '肌肉发达'],
        distinguishing_note: 'Negara maju, jaringan transportasi modern, perkembangan otot fisik',
        connotation: 'positif',
        formality: 'formal_tulis'
      },
      {
        hanzi: '繁荣',
        pinyin: 'fánróng',
        meaning_id: 'Ekonomi dan bisnis berkembang makmur dan jaya',
        collocations: ['繁荣昌盛', '繁荣富强', '繁荣经济', '繁荣市场'],
        distinguishing_note: 'Kemakmuran makro: perdagangan bergairah, negara adidaya makmur',
        connotation: 'positif',
        formality: 'formal_tulis'
      },
      {
        hanzi: '繁华',
        pinyin: 'fánhuá',
        meaning_id: 'Pusat kota/pasar yang ramai pengunjung dan semarak gemerlap',
        collocations: ['繁华的街道', '繁华的城市', '繁华的市场'],
        distinguishing_note: 'Khusus lokasi konkret: jalan protokol gemerlap, pusat perbelanjaan padat',
        object_type: 'konkret',
        connotation: 'positif',
        formality: 'formal_tulis'
      }
    ]
  },
  {
    id: 119,
    category_id: 'adjectives',
    title: '丰富 vs 富强 vs 富有 vs 富裕 (Melimpah / Kuat / Kaya Harta / Sejahtera)',
    key_difference_summary: 'Kekayaan wawasan/spesies melimpah (丰富) vs Negara kaya dan berdaya militer kuat (富强) vs Banyak harta / kaya pandangan visi (富有) vs Hidup berkecukupan sejahtera (富裕)',
    words: [
      {
        hanzi: '丰富',
        pinyin: 'fēngfù',
        meaning_id: 'Beraneka ragam dan melimpah kuantitas/kualitasnya',
        collocations: ['物产丰富', '资源丰富', '经验丰富', '丰富的想象力', '丰富的生活'],
        distinguishing_note: 'Sumber daya alam melimpah, pengalaman jam terbang tinggi, imajinasi liar',
        connotation: 'positif',
        formality: 'netral'
      },
      {
        hanzi: '富强',
        pinyin: 'fùqiáng',
        meaning_id: 'Negara makmur sejahtera dan berkekuatan besar',
        collocations: ['繁荣富强', '国家富强', '更加富强'],
        distinguishing_note: 'Khusus mendeskripsikan kejayaan dan kedaulatan suatu bangsa/negara',
        connotation: 'positif',
        formality: 'formal_tulis'
      },
      {
        hanzi: '富有',
        pinyin: 'fùyǒu',
        meaning_id: 'Memiliki banyak harta materi atau sarat akan nilai positif (bisa kata kerja)',
        collocations: ['富有的商人', '他很有远见。', '富有朝气', '富有代表性（动）'],
        distinguishing_note: 'Pengusaha konglomerat atau sarat semangat kemudaan',
        connotation: 'positif',
        formality: 'formal_tulis'
      },
      {
        hanzi: '富裕',
        pinyin: 'fùyù',
        meaning_id: 'Kondisi taraf hidup serba berkecukupan dan mapan',
        collocations: ['生活富裕', '富裕的地区', '富裕起来'],
        distinguishing_note: 'Taraf kehidupan rakyat yang makmur dan tidak kekurangan pangan',
        connotation: 'positif',
        formality: 'netral'
      }
    ]
  },
  {
    id: 120,
    category_id: 'adjectives',
    title: '激动 vs 兴奋 vs 高兴 vs 欢乐 (Terharu Menggebu / Bersemangat / Gembira / Suka Cita)',
    key_difference_summary: 'Gejolak emosi terharu mendalam (激动) vs Darah terpacu antusias (兴奋) vs Rasa senang harian (高兴) vs Suka cita kebersamaan pesta (欢乐)',
    words: [
      {
        hanzi: '激动',
        pinyin: 'jīdòng',
        meaning_id: 'Perasaan terguncang dan terharu hebat karena rangsangan',
        collocations: ['心情很激动', '激动万分', '情绪激动', '激动人心（动）'],
        distinguishing_note: 'Pidato yang menggetarkan hati nurani, air mata haru kemenangan',
        formality: 'netral'
      },
      {
        hanzi: '兴奋',
        pinyin: 'xīngfèn',
        meaning_id: 'Merasa sangat antusias dan bersemangat membara',
        collocations: ['令人兴奋', '极其兴奋', '过于兴奋', '兴奋的状态'],
        distinguishing_note: 'Detak jantung terpacu saat mau wisata atau memenangkan undian',
        connotation: 'positif',
        formality: 'netral'
      },
      {
        hanzi: '高兴',
        pinyin: 'gāoxìng',
        meaning_id: 'Bahagia dan senang santai dalam obrolan sehari-hari',
        collocations: ['非常高兴', '高兴极了', '高兴的样子'],
        distinguishing_note: 'Ragam percakapan akrab saat bertemu sahabat lama',
        connotation: 'positif',
        formality: 'lisan_percakapan'
      },
      {
        hanzi: '欢乐',
        pinyin: 'huānlè',
        meaning_id: 'Suka cita riang gembira dalam suasana bersama di keramaian',
        collocations: ['欢乐的歌声', '欢乐的场面', '欢乐的人群'],
        distinguishing_note: 'Suasana pesta festival perayaan tahun baru bersama rakyat',
        connotation: 'positif',
        formality: 'formal_tulis'
      }
    ]
  },
  {
    id: 121,
    category_id: 'adjectives',
    title: '紧张 vs 紧迫 vs 迫切 vs 急切 (Tegang / Mendesak Waktu / Butuh Mendesak / Gelisah Ingin Cepat)',
    key_difference_summary: 'Gugup tegang / stok menipis (紧张) vs Tenggat waktu deadline mepet (紧迫) vs Kebutuhan primer mendesak dipenuhi (迫切) vs Nada bicara gelisah terburu-buru (急切)',
    words: [
      {
        hanzi: '紧张',
        pinyin: 'jǐnzhāng',
        meaning_id: 'Saraf tegang tidak tenang atau pasokan logistik langka',
        collocations: ['心情紧张', '紧张的工作', '物资紧张', '资金紧张'],
        distinguishing_note: 'Gugup sebelum ujian atau kas keuangan perusahaan ketat',
        formality: 'netral'
      },
      {
        hanzi: '紧迫',
        pinyin: 'jǐnpò',
        meaning_id: 'Situasi darurat waktu mendesak yang tak dapat ditunda',
        collocations: ['时间紧迫', '任务紧迫', '紧迫的形势'],
        distinguishing_note: 'Waktu deadline tinggal sedikit, situasi krisis membutuhkan aksi instan',
        formality: 'formal_tulis'
      },
      {
        hanzi: '迫切',
        pinyin: 'pòqiè',
        meaning_id: 'Kebutuhan mendesak yang sudah tak tertahankan lagi',
        collocations: ['心情迫切', '迫切要求', '迫切希望', '迫切的愿望', '这个问题迫切需要解决。'],
        distinguishing_note: 'Harapan masyarakat yang sangat mendesak butuh reformasi segera',
        formality: 'formal_tulis'
      },
      {
        hanzi: '急切',
        pinyin: 'jíqiè',
        meaning_id: 'Perasaan dan nada bicara terburu-buru tidak sabar',
        collocations: ['语气急切', '声音急切', '心情急切', '急切的目光'],
        distinguishing_note: 'Sorot mata cemas mencari anak hilang, nada bicara tergesa-gesa',
        formality: 'formal_tulis'
      }
    ]
  },
  {
    id: 122,
    category_id: 'adjectives',
    title: '精彩 vs 精华 vs 精细 vs 精致 (Memukau / Intisari / Halus Teliti / Elok Indah)',
    key_difference_summary: 'Pertunjukan/artikel spektakuler (精彩) vs Bagian terbaik/intisari emas (精华) vs Pengerjaan ukiran mikro teliti (精细) vs Kerajinan tangan estetik mewah (精致)',
    words: [
      {
        hanzi: '精彩',
        pinyin: 'jīngcǎi',
        meaning_id: 'Luar biasa bagus memukau (penampilan panggung, artikel bacaan)',
        collocations: ['表演太精彩了！', '精彩的节目', '精彩的文章', '精彩的游泳比赛'],
        distinguishing_note: 'Gol spektakuler pertandingan sepak bola, akting drama memukau',
        connotation: 'positif',
        formality: 'netral'
      },
      {
        hanzi: '精华',
        pinyin: 'jīnghuá',
        meaning_id: 'Bagian terpenting, terbaik dan paling bernilai dari suatu karya',
        collocations: ['植物的精华', '这本诗集收的都是古典诗歌的精华。', '艺术精华', '文化精华'],
        distinguishing_note: 'Sari pati tumbuhan herbal, antologi puisi klasik pilihan terbaik',
        connotation: 'positif',
        formality: 'formal_tulis'
      },
      {
        hanzi: '精细',
        pinyin: 'jīngxì',
        meaning_id: 'Pengerjaan sangat teliti mikro atau sifat orang yang cermat',
        collocations: ['做工精细', '手工精细', '精细的雕刻', '他是一个很精细的人。'],
        distinguishing_note: 'Ukiran mikro kayu halus, teknisi jam tangan yang sangat cermat',
        connotation: 'positif',
        formality: 'formal_tulis'
      },
      {
        hanzi: '精致',
        pinyin: 'jīngzhì',
        meaning_id: 'Kualitas pengerjaan barang sangat estetik, elok dan cantik',
        collocations: ['这件家具十分精致。', '精致的工艺品', '精致的花纹', '精致的礼品'],
        distinguishing_note: 'Pola ukiran souvenir suvenir mewah, kotak kado kerajinan elegan',
        connotation: 'positif',
        formality: 'netral'
      }
    ]
  },
  {
    id: 123,
    category_id: 'adjectives',
    title: '宽敞 vs 宽广 vs 宽阔 (Lapang Ruangan / Luas Ladang / Lebar Terbuka)',
    key_difference_summary: 'Ruangan/kamar beratap luas terang (宽敞) vs Ladang luas tak bertepi / wawasan (宽广) vs Jalan raya lebar / lautan terbuka (宽阔)',
    words: [
      {
        hanzi: '宽敞',
        pinyin: 'kuānchǎng',
        meaning_id: 'Ruangan tertutup yang luas dan terang pencahayaannya',
        collocations: ['这间屋子很宽敞。', '宽敞的客厅', '宽敞的房间', '宽敞的教室'],
        distinguishing_note: 'Khusus arsitektur interior: ruang kelas, aula seminar, ruang tamu',
        object_type: 'konkret',
        connotation: 'positif',
        formality: 'netral'
      },
      {
        hanzi: '宽广',
        pinyin: 'kuānguǎng',
        meaning_id: 'Hamparan area tanah yang luas membentang atau kelapangan hati',
        collocations: ['宽广的田野', '宽广的道路', '宽广的发展前景', '题材宽广', '胸怀宽广'],
        distinguishing_note: 'Hamparan sawah padi membentang luas, prospek karier cerah luas',
        connotation: 'positif',
        formality: 'formal_tulis'
      },
      {
        hanzi: '宽阔',
        pinyin: 'kuānkuò',
        meaning_id: 'Permukaan area yang lapang dan terbuka tanpa rintangan',
        collocations: ['宽阔的大海', '宽阔的马路', '宽阔的胸怀', '思路宽阔'],
        distinguishing_note: 'Jalan raya 8 lajur, samudera lautan lepas membentang',
        connotation: 'positif',
        formality: 'netral'
      }
    ]
  },
  {
    id: 124,
    category_id: 'adjectives',
    title: '明显 vs 显然 (Nyata Gamblang / Jelas Terlihat)',
    key_difference_summary: 'Perbedaan/kesalahan terlihat nyata (明显 - bisa dimodifikasi 很/最) vs Logika sudah jelas tak terbantahkan (显然 - tidak bisa pakai 不/最)',
    words: [
      {
        hanzi: '明显',
        pinyin: 'míngxiǎn',
        meaning_id: 'Sangat jelas dan gampang diamati dengan mata/pikiran',
        collocations: ['十分明显', '明显的道理', '明显的目的', '这里有一个明显的错误。'],
        distinguishing_note: 'Dapat didahului kata keterangan derajat (十分明显, 最明显的)',
        formality: 'netral'
      },
      {
        hanzi: '显然',
        pinyin: 'xiǎnrán',
        meaning_id: 'Secara logika sudah jelas terbukti dan pasti demikian',
        collocations: ['这个办法显然不行。', '他们的看法显然不同。', '他显然在说谎。'],
        distinguishing_note: 'Sebagai penanda logika wacana: tidak bisa dimodifikasi kata 不 atau 最',
        formality: 'formal_tulis'
      }
    ]
  },
  {
    id: 125,
    category_id: 'adjectives',
    title: '满足 vs 满意 vs 自满 vs 得意 (Puas Hati / Cukup / Berbangga Pongah)',
    key_difference_summary: 'Merasa cukup tiada tuntutan lain (满足) vs Sesuai dengan harapan ekspektasi (满意) vs Cepat berpuas diri (自满) vs Berseri-seri senang permintaannya tercapai (得意)',
    words: [
      {
        hanzi: '满足',
        pinyin: 'mǎnzú',
        meaning_id: 'Merasa sudah cukup dan tidak meminta apa-apa lagi',
        collocations: ['满足于现在的地位', '满足要求', '我很满足'],
        distinguishing_note: 'Bisa kata kerja transitif langsung diikuti objek: memenuhi syarat kuota',
        formality: 'netral'
      },
      {
        hanzi: '满意',
        pinyin: 'mǎnyì',
        meaning_id: 'Hasil pekerjaan persis cocok dengan keinginan hati',
        collocations: ['非常满意这份工作', '对自己的情况感到满意', '表示满意', '满意的笑容', '满意的神色'],
        distinguishing_note: 'Bisa dipadukan dengan pola "对……感到满意"',
        connotation: 'positif',
        formality: 'netral'
      },
      {
        hanzi: '自满',
        pinyin: 'zìmǎn',
        meaning_id: 'Berpuas diri dengan capaian sehingga sombong',
        collocations: ['有了成绩也不要自满。', '克服自满情绪'],
        distinguishing_note: 'Selalu bernuansa negatif: enggan belajar lebih giat lagi',
        connotation: 'negatif',
        formality: 'formal_tulis'
      },
      {
        hanzi: '得意',
        pinyin: 'déyì',
        meaning_id: 'Merasa puas bangga dan menunjukkannya di raut wajah',
        collocations: ['得意的作品', '得意的样子', '感到得意', '得意的学生', '得意洋洋'],
        distinguishing_note: 'Raut muka tersenyum lebar berseri-seri karena menang (得意洋洋)',
        formality: 'netral'
      }
    ]
  },
  {
    id: 126,
    category_id: 'adjectives',
    title: '密切 vs 亲密 vs 亲切 (Rapat Erat / Akrab Intim / Ramah Hangat)',
    key_difference_summary: 'Kerja sama antar instansi rapat erat (密切) vs Sahabat karib intim tanpa sekat (亲密) vs Sapaan hangat bagai keluarga (亲切)',
    words: [
      {
        hanzi: '密切',
        pinyin: 'mìqiè',
        meaning_id: 'Hubungan kerja sama yang sangat rapat dan saling terhubung',
        collocations: ['他们的关系十分密切。', '联系密切', '密切配合', '密切关注'],
        distinguishing_note: 'Bisa untuk relasi manusia, antar lembaga, atau korelasi data statistik',
        formality: 'netral'
      },
      {
        hanzi: '亲密',
        pinyin: 'qīnmì',
        meaning_id: 'Persahabatan mesra intim tanpa jarak (khusus antar manusia)',
        collocations: ['他俩很亲密', '亲密的伙伴', '亲密的朋友', '亲密无间'],
        distinguishing_note: 'Khusus hubungan personal antar orang: sahabat sejati, pasangan hidup',
        connotation: 'positif',
        formality: 'netral'
      },
      {
        hanzi: '亲切',
        pinyin: 'qīnqiè',
        meaning_id: 'Sikap ramah hangat dan penuh kepedulian tulus',
        collocations: ['亲切的问候', '亲切慰问', '亲切关怀', '亲切的拥抱', '感到很亲切'],
        distinguishing_note: 'Nada suara guru yang kebapakan, pelukan hangat nenek tercinta',
        connotation: 'positif',
        formality: 'netral'
      }
    ]
  },
  {
    id: 127,
    category_id: 'adjectives',
    title: '和蔼 vs 和睦 vs 和谐 (Ramah Lembut / Rukun Harmonis / Selaras)',
    key_difference_summary: 'Raut wajah kakek ramah santun (和蔼) vs Hubungan keluarga rukun tanpa cekcok (和睦) vs Keharmonisan nada musik / tatanan sosial (和谐)',
    words: [
      {
        hanzi: '和蔼',
        pinyin: 'hé\'ǎi',
        meaning_id: 'Sikap dan tutur kata ramah, lembut dan kebapakan/keibuan',
        collocations: ['态度和蔼', '和蔼的面容'],
        distinguishing_note: 'Khusus mendeskripsikan ekspresi wajah atau pembawaan senior yang santun',
        connotation: 'positif',
        formality: 'formal_tulis'
      },
      {
        hanzi: '和睦',
        pinyin: 'hémù',
        meaning_id: 'Hidup rukun bertetangga/berkeluarga tanpa pertengkaran',
        collocations: ['家庭和睦', '关系和睦'],
        distinguishing_note: 'Khusus keharmonisan sosial: keluarga rukun, antar tetangga akur',
        connotation: 'positif',
        formality: 'netral'
      },
      {
        hanzi: '和谐',
        pinyin: 'héxié',
        meaning_id: 'Selaras dan proporsional (aransemen nada musik, tatanan masyarakat)',
        collocations: ['音调和谐', '和谐的气氛', '和谐的社会'],
        distinguishing_note: 'Harmoni komposisi nada piano, masyarakat yang damai selaras',
        connotation: 'positif',
        formality: 'formal_tulis'
      }
    ]
  },
  {
    id: 128,
    category_id: 'adjectives',
    title: '热烈 vs 热情 vs 热心 (Meriah Gegap Gempita / Ramah Hangat / Suka Menolong)',
    key_difference_summary: 'Tepuk tangan sambutan gegap gempita (热烈) vs Keramahan melayani tamu (热情) vs Jiwa sosial suka menolong orang (热心)',
    words: [
      {
        hanzi: '热烈',
        pinyin: 'rèliè',
        meaning_id: 'Meriah dan gegap gempita penuh gelora antusiasme massa',
        collocations: ['热烈欢迎', '热烈地讨论', '热烈庆祝', '热烈拥护', '会场的气氛很热烈。'],
        distinguishing_note: 'Suasana riuh tepuk tangan hadirin di aula perayaan pembukaan',
        connotation: 'positif',
        formality: 'formal_tulis'
      },
      {
        hanzi: '热情',
        pinyin: 'rèqíng',
        meaning_id: 'Sangat ramah tamah dan bersemangat menyambut orang',
        collocations: ['充满热情', '热情接待', '态度热情', '热情好客'],
        distinguishing_note: 'Keramahan warga tuan rumah menyajikan makanan enak bagi turis',
        connotation: 'positif',
        formality: 'netral'
      },
      {
        hanzi: '热心',
        pinyin: 'rèxīn',
        meaning_id: 'Berjiwa sosial tinggi dan antusias membantu sesama',
        collocations: ['她很热心。', '热心助人', '热心观众', '热心于某事'],
        distinguishing_note: 'Sifat sukarelawan yang gemar menolong tetangga tertimpa musibah',
        connotation: 'positif',
        formality: 'netral'
      }
    ]
  },
  {
    id: 129,
    category_id: 'adjectives',
    title: '细致 vs 细心 vs 认真 vs 仔细 (Mendetail / Penuh Perhatian / Bersungguh-sungguh / Teliti Rinci)',
    key_difference_summary: 'Analisis laporan mendalam terurai (细致) vs Perhatian merawat orang sakit (细心) vs Sikap kerja profesional tidak asal-asalan (认真) vs Memeriksa hitungan detail tak ada lolos (仔细)',
    words: [
      {
        hanzi: '细致',
        pinyin: 'xìzhì',
        meaning_id: 'Sangat terperinci, mendalam dan berstruktur halus',
        collocations: ['观察细致', '周到细致', '细致的分析', '耐心细致'],
        distinguishing_note: 'Analisis bedah kasus secara mendalam sampai poin-poin renik',
        connotation: 'positif',
        formality: 'formal_tulis'
      },
      {
        hanzi: '细心',
        pinyin: 'xìxīn',
        meaning_id: 'Penuh perhatian dan waspada (lawan dari 粗心 ceroboh)',
        collocations: ['细心照顾', '细心研究', '细心地观察', '细心的人', '细心周到的服务受到顾客的欢迎。'],
        distinguishing_note: 'Perawat merawat pasien dengan penuh kasih sayang dan kehati-hatian',
        connotation: 'positif',
        formality: 'netral'
      },
      {
        hanzi: '认真',
        pinyin: 'rènzhēn',
        meaning_id: 'Bersungguh-sungguh dan tidak asal-asalan dalam bekerja/belajar',
        collocations: ['学习认真刻苦', '对工作认真负责', '认真的态度', '认真的表情', '认真学习', '认真负责'],
        distinguishing_note: 'Sikap profesional yang tidak bermain-main saat bertugas',
        connotation: 'positif',
        formality: 'netral'
      },
      {
        hanzi: '仔细',
        pinyin: 'zǐxì',
        meaning_id: 'Cermat meneliti setiap detail kecil (lawan dari 马虎 lalai)',
        collocations: ['仔细听', '仔细思考', '仔细分析', '仔细琢磨'],
        distinguishing_note: 'Mendengarkan instruksi dengan cermat, mengecek lembar jawaban ujian',
        connotation: 'positif',
        formality: 'netral'
      }
    ]
  },
  {
    id: 130,
    category_id: 'adjectives',
    title: '壮观 vs 壮丽 vs 宏大 vs 宏伟 (Megah Spektakuler / Indah Megah / Skala Raksasa / Arsitektur Megah)',
    key_difference_summary: 'Pemandangan parade militer/ombak laut spektakuler (壮观) vs Pegunungan tanah air elok megah (壮丽) vs Skala adegan film/narasi raksasa (宏大) vs Konstruksi gedung pencakar langit megah (宏伟)',
    words: [
      {
        hanzi: '壮观',
        pinyin: 'zhuàngguān',
        meaning_id: 'Pemandangan atau parade peristiwa dahsyat yang sangat spektakuler',
        collocations: ['国庆阅兵式十分壮观。', '钱塘江大潮很壮观。'],
        distinguishing_note: 'Parade militer ribuan prajurit, deburan pasang ombak sungai Qiantang',
        connotation: 'positif',
        formality: 'formal_tulis'
      },
      {
        hanzi: '壮丽',
        pinyin: 'zhuànglì',
        meaning_id: 'Kemegahan panorama alam tanah air yang mempesona indah',
        collocations: ['壮丽河山', '壮丽的景色', '壮丽的山川'],
        distinguishing_note: 'Pemandangan barisan pegunungan Himalaya dan sungai abadi',
        connotation: 'positif',
        formality: 'formal_tulis'
      },
      {
        hanzi: '宏大',
        pinyin: 'hóngdà',
        meaning_id: 'Skala cakupan cerita/adegan raksasa dan menggelegar',
        collocations: ['宏大的场面', '气势宏大'],
        distinguishing_note: 'Setting peperangan kolosal di film sejarah, narasi epik berbobot',
        connotation: 'positif',
        formality: 'formal_tulis'
      },
      {
        hanzi: '宏伟',
        pinyin: 'hóngwěi',
        meaning_id: 'Besar megah dan kokoh (bangunan arsitektur/cetak biru masa depan)',
        collocations: ['宏伟的建筑', '宏伟蓝图', '宏伟的结构'],
        distinguishing_note: 'Konstruksi jembatan raksasa, cetak biru rencana pembangunan negara',
        object_type: 'konkret',
        connotation: 'positif',
        formality: 'formal_tulis'
      }
    ]
  }
];
