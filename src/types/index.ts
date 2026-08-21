export type AppMode = 'browse' | 'contrast' | 'quiz' | 'flashcard' | 'progress';

export interface WordItem {
  id?: string;
  hanzi: string;
  pinyin: string;
  meaning_id: string;
  collocations: string[];
  distinguishing_note?: string;
  object_type?: 'konkret' | 'abstrak' | 'orang' | 'umum' | 'spesifik' | string;
  connotation?: 'positif' | 'negatif' | 'netral';
  formality?: 'formal_tulis' | 'lisan_percakapan' | 'netral';
  grammar_rule?: string;
}

export interface SynonymGroup {
  id: number;
  title: string;
  category_id: string;
  words: WordItem[];
  key_difference_summary: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon?: string;
  color?: string;
  groups: SynonymGroup[];
}

export interface Hsk6Dataset {
  categories: Category[];
}

export interface QuizQuestion {
  id: string;
  group_id: number;
  sentence: string;
  correct_word: string;
  options: string[];
  explanation: string;
  category_id: string;
  hint?: string;
}

export interface CardMastery {
  hanzi: string;
  groupId: number;
  box: number; // 1 to 5 (Leitner)
  lastReviewed: string;
  nextReview: string;
  timesCorrect: number;
  timesWrong: number;
  isHard: boolean;
}

export interface DailyStudyState {
  date: string;
  completedGroupIds: number[];
  targetGroupsPerDay: number;
  quizScoreToday: number;
  cardsReviewedToday: number;
  streakDays: number;
}
