import { Category, Hsk6Dataset } from '../types';
import { verbsData } from './verbs';
import { adjectivesData } from './adjectives';
import { nounsData } from './nouns';
import { adverbsData } from './adverbs';
import { prepositionsData } from './prepositions';
import { conjunctionsData } from './conjunctions';
import { fixedCollocationsData } from './fixed_collocations';
import { correlativesData } from './correlatives';
import { idiomsData } from './idioms';

export const categories: Category[] = [
  {
    id: 'verbs',
    name: '动词 - Kata Kerja',
    description: '50 grup sinonim verba HSK 6 dengan kontras objek, tingkatan aksi, dan kolokasi penting.',
    icon: 'Activity',
    color: 'emerald',
    groups: verbsData
  },
  {
    id: 'adjectives',
    name: '形容词 - Kata Sifat',
    description: '30 grup sinonim ajektiva HSK 6 dengan konotasi positif/negatif dan nuansa bahasa tulis/lisan.',
    icon: 'Sparkles',
    color: 'amber',
    groups: adjectivesData
  },
  {
    id: 'nouns',
    name: '名词 - Kata Benda',
    description: '18 grup sinonim nomina HSK 6 untuk membedakan konsep abstrak vs konkret, formal vs umum.',
    icon: 'Box',
    color: 'blue',
    groups: nounsData
  },
  {
    id: 'adverbs',
    name: '副词 - Kata Keterangan',
    description: '25 grup adverbia HSK 6: kepastian, frekuensi, dugaan, waktu, dan penekanan kalimat.',
    icon: 'Zap',
    color: 'purple',
    groups: adverbsData
  },
  {
    id: 'prepositions',
    name: '介词 - Kata Depan',
    description: '7 grup preposisi penting HSK 6: arah, perlakuan, dasar acuan, dan tujuan.',
    icon: 'Navigation',
    color: 'rose',
    groups: prepositionsData
  },
  {
    id: 'conjunctions',
    name: '连词 - Kata Sambung',
    description: '9 grup konjungsi logika HSK 6: konsesi, pilihan, progresif, dan sebab-akibat.',
    icon: 'GitFork',
    color: 'indigo',
    groups: conjunctionsData
  },
  {
    id: 'fixed_collocations',
    name: '固定搭配 - Kolokasi Tetap',
    description: 'Pola frasa tetap kunci HSK 6 untuk ujian menyusun kalimat dan struktur teks.',
    icon: 'Layers',
    color: 'cyan',
    groups: fixedCollocationsData
  },
  {
    id: 'correlatives',
    name: '关联词 - Kata Penghubung Korelatif',
    description: '10 relasi logika korelatif lengkap dengan struktur rumus pasangan kalimat HSK 6.',
    icon: 'Link',
    color: 'teal',
    groups: correlativesData
  },
  {
    id: 'idioms',
    name: '成语 - Idiom 4 Karakter',
    description: '90 peribahasa idiom 4 karakter (成语) frekuensi tinggi HSK 6 dengan latar belakang dan konteks.',
    icon: 'BookOpen',
    color: 'orange',
    groups: idiomsData
  }
];

export const allGroups = [
  ...verbsData,
  ...adjectivesData,
  ...nounsData,
  ...adverbsData,
  ...prepositionsData,
  ...conjunctionsData,
  ...fixedCollocationsData,
  ...correlativesData,
  ...idiomsData
];

export const allWords = allGroups.flatMap(group => 
  group.words.map(word => ({
    ...word,
    groupId: group.id,
    groupTitle: group.title,
    categoryId: group.category_id
  }))
);

export const hsk6Dataset: Hsk6Dataset = {
  categories
};
