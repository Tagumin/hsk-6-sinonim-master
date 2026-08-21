import { QuizQuestion, SynonymGroup, WordItem } from '../types';
import { allGroups } from '../data';

export const generateQuizQuestions = (
  categoryId?: string,
  count: number = 10,
  specificGroupId?: number
): QuizQuestion[] => {
  let candidateGroups: SynonymGroup[] = allGroups;

  if (specificGroupId) {
    candidateGroups = allGroups.filter(g => g.id === specificGroupId);
  } else if (categoryId && categoryId !== 'all') {
    candidateGroups = allGroups.filter(g => g.category_id === categoryId);
  }

  const pool: { group: SynonymGroup; word: WordItem; sentence: string }[] = [];

  candidateGroups.forEach(group => {
    // Only groups with at least 2 words make good synonym distinction quizzes
    if (group.words.length >= 2) {
      group.words.forEach(word => {
        // Clean and prepare collocation sentences
        word.collocations.forEach(rawSentence => {
          // Check if the sentence actually contains the word's hanzi
          const cleanSentence = rawSentence.replace(/（[^）]*）|\([^)]*\)/g, '').trim();
          if (cleanSentence.includes(word.hanzi)) {
            pool.push({
              group,
              word,
              sentence: cleanSentence
            });
          }
        });
      });
    }
  });

  if (pool.length === 0) {
    return [];
  }

  // Shuffle pool
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  const selected = shuffled.slice(0, count);

  return selected.map((item, index) => {
    const { group, word, sentence } = item;
    
    // Replace the target word in the sentence with blanks
    const maskedSentence = sentence.replace(new RegExp(word.hanzi, 'g'), '（ ______ ）');

    // Options are the words in the same synonym group
    const options = group.words.map(w => w.hanzi);

    // If options are fewer than 4, we can add distractor words from other similar groups or keep the clean contrast
    const shuffledOptions = [...options].sort(() => Math.random() - 0.5);

    const explanation = `
【Jawaban Benar】${word.hanzi} (${word.pinyin})
【Arti】${word.meaning_id}
【Pembeda Utama】${word.distinguishing_note || group.key_difference_summary}
【Grup Sinonim】${group.title}
    `.trim();

    return {
      id: `quiz_${index}_${word.hanzi}_${Date.now()}`,
      group_id: group.id,
      sentence: maskedSentence,
      correct_word: word.hanzi,
      options: shuffledOptions,
      explanation,
      category_id: group.category_id,
      hint: word.distinguishing_note || group.key_difference_summary
    };
  });
};
