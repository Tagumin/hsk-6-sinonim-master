export interface UserProgress {
  masteredWords: Record<string, boolean>; // hanzi -> true/false
  bookmarkedWords: Record<string, boolean>; // hanzi -> true/false
  leitnerBoxes: Record<string, number>; // hanzi -> box (1 to 5)
  lastReviewed: Record<string, number>; // hanzi -> timestamp
  quizStats: {
    totalAttempted: number;
    totalCorrect: number;
    streak: number;
    bestStreak: number;
  };
}

const STORAGE_KEY = 'hsk6_synonym_master_v1';

export const getInitialProgress = (): UserProgress => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      return JSON.parse(saved);
    }
  } catch {
    // fallback
  }

  return {
    masteredWords: {},
    bookmarkedWords: {},
    leitnerBoxes: {},
    lastReviewed: {},
    quizStats: {
      totalAttempted: 0,
      totalCorrect: 0,
      streak: 0,
      bestStreak: 0
    }
  };
};

export const saveProgress = (progress: UserProgress) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (err) {
    console.error('Failed to save progress', err);
  }
};
