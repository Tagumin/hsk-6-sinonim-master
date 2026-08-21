import React, { useState, useEffect } from "react";
import {
  Sparkles,
  Volume2,
  CheckCircle2,
  XCircle,
  RotateCcw,
  HelpCircle,
  Award,
  ArrowRight,
  Filter,
} from "lucide-react";
import { Category, QuizQuestion, SynonymGroup } from "../types";
import { generateQuizQuestions } from "../utils/quizGenerator";
import { playChineseAudio } from "../utils/speech";

interface QuizModeProps {
  categories: Category[];
  specificGroup?: SynonymGroup | null;
  onClearSpecificGroup?: () => void;
  onRecordQuizResult: (isCorrect: boolean) => void;
  onToggleMastered: (hanzi: string) => void;
  masteredWords: Record<string, boolean>;
}

export const QuizMode: React.FC<QuizModeProps> = ({
  categories,
  specificGroup,
  onClearSpecificGroup,
  onRecordQuizResult,
  onToggleMastered,
  masteredWords,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [questionCount, setQuestionCount] = useState<number>(10);
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState<boolean>(false);
  const [showHint, setShowHint] = useState<boolean>(false);

  // Results
  const [score, setScore] = useState<number>(0);
  const [answersHistory, setAnswersHistory] = useState<
    {
      question: QuizQuestion;
      userAnswer: string;
      isCorrect: boolean;
    }[]
  >([]);
  const [isQuizCompleted, setIsQuizCompleted] = useState<boolean>(false);

  // Initialize or start quiz
  const startQuiz = (
    catId = selectedCategory,
    count = questionCount,
    group = specificGroup,
  ) => {
    const qList = generateQuizQuestions(
      group ? undefined : catId,
      group ? group.words.length * 3 : count,
      group?.id,
    );

    setQuestions(qList);
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setIsAnswerSubmitted(false);
    setShowHint(false);
    setScore(0);
    setAnswersHistory([]);
    setIsQuizCompleted(false);
  };

  useEffect(() => {
    startQuiz();
  }, [specificGroup]);

  const currentQ = questions[currentIndex];

  const handleSelectOption = (option: string) => {
    if (isAnswerSubmitted) return;
    setSelectedAnswer(option);
  };

  const handleSubmitAnswer = () => {
    if (!selectedAnswer || !currentQ || isAnswerSubmitted) return;

    const isCorrect = selectedAnswer === currentQ.correct_word;
    setIsAnswerSubmitted(true);

    if (isCorrect) {
      setScore((prev) => prev + 1);
    }
    onRecordQuizResult(isCorrect);

    setAnswersHistory((prev) => [
      ...prev,
      {
        question: currentQ,
        userAnswer: selectedAnswer,
        isCorrect,
      },
    ]);
  };

  const handleNextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setIsAnswerSubmitted(false);
      setShowHint(false);
    } else {
      setIsQuizCompleted(true);
    }
  };

  if (questions.length === 0) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center">
        <div className="bg-[#fffdf9] p-8 rounded-2xl border border-[rgba(31,45,53,0.08)]">
          <Sparkles className="w-12 h-12 text-[#6d8a80] mx-auto mb-4" />
          <h2 className="text-xl font-bold text-[#1f2d35] mb-2">
            Kuis Kolokasi HSK 6
          </h2>
          <p className="text-xs text-[#53636d] mb-6 max-w-md mx-auto">
            Pilih kategori atau mulai kuis untuk menguji kemampuan membedakan
            pasangan kata.
          </p>
          <button
            onClick={() => startQuiz()}
            className="px-6 py-3 bg-[#2b6c5f] hover:bg-[#245d52] text-white font-semibold rounded-xl transition-colors"
          >
            Mulai Kuis Sekarang
          </button>
        </div>
      </div>
    );
  }

  // Quiz Finished Screen in Bento Style
  if (isQuizCompleted) {
    const accuracy = Math.round((score / questions.length) * 100) || 0;

    return (
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
        {/* Bento Completion Summary Card */}
        <div className="bg-[#fffdf9] rounded-2xl border border-[rgba(31,45,53,0.08)] overflow-hidden p-8 text-center">
          <div className="w-16 h-16 bg-[#f0f5f1] border border-[#d6e5df] text-[#6d8a80] rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Award className="w-8 h-8" />
          </div>

          <span className="text-xs font-mono uppercase tracking-wider text-[#5f8177] font-semibold block mb-1">
            Hasil Latihan
          </span>
          <h2 className="text-3xl font-bold text-[#1f2d35] mb-2">
            Kuis Selesai!
          </h2>
          <p className="text-xs text-[#53636d] mb-8 max-w-md mx-auto">
            Ringkasan latihan kolokasi dan pembedaan sinonim HSK 6:
          </p>

          {/* Bento Stats Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-lg mx-auto mb-8">
            <div className="bg-[#f7f4ef] p-4 rounded-xl border border-[rgba(31,45,53,0.08)]">
              <span className="text-[10px] text-[#718087] font-mono font-bold block mb-1 uppercase tracking-wider">
                Skor
              </span>
              <span className="text-3xl font-bold font-mono text-[#1f2d35]">
                {score}
                <span className="text-sm text-[#718087] font-normal">
                  /{questions.length}
                </span>
              </span>
            </div>
            <div className="bg-[#f7f4ef] p-4 rounded-xl border border-[rgba(31,45,53,0.08)]">
              <span className="text-[10px] text-[#718087] font-mono font-bold block mb-1 uppercase tracking-wider">
                Akurasi
              </span>
              <span className="text-3xl font-bold font-mono text-[#6f8d82]">
                {accuracy}%
              </span>
            </div>
            <div className="bg-[#f7f4ef] p-4 rounded-xl border border-[rgba(31,45,53,0.08)]">
              <span className="text-[10px] text-[#718087] font-mono font-bold block mb-1 uppercase tracking-wider">
                Hasil
              </span>
              <span className="text-xl font-bold text-[#6f6659] mt-1 block">
                {accuracy >= 80
                  ? "Sangat Baik"
                  : accuracy >= 60
                    ? "Bagus"
                    : "Perlu Ulang"}
              </span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => startQuiz()}
              className="flex items-center gap-2 px-6 py-3 bg-[#2b6c5f] hover:bg-[#245d52] text-white font-semibold text-xs sm:text-sm rounded-xl transition-all"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Ulangi Kuis</span>
            </button>
            {specificGroup && onClearSpecificGroup && (
              <button
                onClick={() => {
                  onClearSpecificGroup();
                  startQuiz("all");
                }}
                className="px-6 py-3 bg-[#f5f0e8] hover:bg-[#efe8dc] text-[#1f2d35] font-semibold text-xs sm:text-sm rounded-xl border border-[rgba(31,45,53,0.08)] transition-colors"
              >
                Kuis Semua Kategori
              </button>
            )}
          </div>
        </div>

        {/* Bento Review Answers Card */}
        <div className="bg-slate-800 rounded-3xl border border-slate-700/60 shadow-xl p-6 sm:p-8">
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-700/50">
            <h3 className="text-base font-bold text-slate-100 flex items-center gap-2">
              <span className="w-2 h-2 bg-sky-400 rounded-full" />
              <span>Pembahasan & Tinjauan Jawaban</span>
            </h3>
            <span className="text-xs font-mono text-[#718087]">
              Total {answersHistory.length} soal
            </span>
          </div>

          <div className="space-y-4">
            {answersHistory.map((item, idx) => {
              const isMastered = !!masteredWords[item.question.correct_word];

              return (
                <div
                  key={idx}
                  className={`p-5 rounded-2xl border ${
                    item.isCorrect
                      ? "bg-slate-900/80 border-[#91aaa0]"
                      : "bg-slate-900/80 border-rose-500/30"
                  }`}
                >
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      {item.isCorrect ? (
                        <div className="flex items-center gap-1.5 text-[#6f8d82] text-xs font-mono font-semibold">
                          <CheckCircle2 className="w-3.5 h-3.5" /> Benar
                        </div>
                      ) : (
                        <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-rose-500/10 text-rose-400 text-xs font-mono font-bold border border-rose-500/30">
                          <XCircle className="w-3.5 h-3.5" /> Salah
                        </div>
                      )}
                      <span className="font-mono text-xs text-slate-400">
                        Soal #{idx + 1}
                      </span>
                    </div>

                    <button
                      onClick={() =>
                        onToggleMastered(item.question.correct_word)
                      }
                      className={`text-xs font-mono px-3 py-1 rounded-xl font-medium transition-colors border ${
                        isMastered
                          ? "bg-[#f0f5f1] text-[#46685f] border-[#d6e5df]"
                          : "bg-slate-800 hover:bg-slate-700 text-slate-400 border-slate-700"
                      }`}
                    >
                      {isMastered ? "✓ Dikuasai" : "Tandai Dikuasai"}
                    </button>
                  </div>

                  <p className="text-base font-semibold text-slate-100 font-sans mb-3 leading-relaxed">
                    {item.question.sentence}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs mb-3 font-mono">
                    <div className="bg-slate-950/60 p-2.5 rounded-xl border border-slate-800">
                      <span className="text-slate-500 block text-[10px] uppercase">
                        Jawaban Anda:
                      </span>
                      <span
                        className={`font-bold text-sm ${item.isCorrect ? "text-[#6f8d82]" : "text-rose-400"}`}
                      >
                        {item.userAnswer}
                      </span>
                    </div>
                    <div className="bg-slate-950/60 p-2.5 rounded-xl border border-slate-800">
                      <span className="text-slate-500 block text-[10px] uppercase">
                        Jawaban Benar:
                      </span>
                      <span className="font-bold text-sm text-[#6f8d82]">
                        {item.question.correct_word}
                      </span>
                    </div>
                  </div>

                  {/* Explanation box */}
                  <div className="bg-slate-950/80 p-3.5 rounded-xl border border-slate-800 text-xs text-slate-300 whitespace-pre-line leading-relaxed">
                    {item.question.explanation}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // Active Quiz View in Bento Style
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {!specificGroup ? (
        <div className="flex flex-wrap items-center justify-between gap-4 bg-[#fffdf9] p-4 sm:p-5 rounded-2xl border border-[rgba(31,45,53,0.08)] shadow-[0_6px_22px_rgba(31,45,53,0.02)]">
          <div className="flex items-center gap-2.5">
            <Filter className="w-4 h-4 text-[#285d52]" />
            <select
              value={selectedCategory}
              onChange={(e) => {
                setSelectedCategory(e.target.value);
                startQuiz(e.target.value, questionCount);
              }}
              className="text-xs font-mono font-semibold px-3.5 py-2 bg-[#f7f4ef] border border-[rgba(31,45,53,0.10)] rounded-xl text-[#29414a] focus:outline-none focus:border-[#2b6c5f]"
            >
              <option value="all">Semua Kategori (Acak)</option>
              {categories.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-slate-400">
              Jumlah Soal:
            </span>
            {[5, 10, 20].map((count) => (
              <button
                key={count}
                onClick={() => {
                  setQuestionCount(count);
                  startQuiz(selectedCategory, count);
                }}
                className={`text-xs font-mono px-3 py-1.5 rounded-xl font-bold transition-all border ${
                  questionCount === count
                    ? "bg-[#e7f1ed] text-[#1f5d52] border-[#bfd7d1]"
                    : "bg-[#f7f4ef] hover:bg-[#f1eadf] text-[#53636d] border-[rgba(31,45,53,0.10)]"
                }`}
              >
                {count}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="bg-[#edf6f3] border border-[#bfd7d1] p-5 rounded-2xl flex items-center justify-between gap-4 shadow-[0_6px_22px_rgba(31,45,53,0.02)]">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 bg-[#2b6c5f] rounded-full" />
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#2b6c5f] block">
                Kuis Khusus Grup:
              </span>
              <span className="font-bold text-[#1f2d35] text-sm">
                {specificGroup.title}
              </span>
            </div>
          </div>
          {onClearSpecificGroup && (
            <button
              onClick={() => {
                onClearSpecificGroup();
                startQuiz("all");
              }}
              className="text-xs font-mono text-[#285d52] hover:text-[#1f5d52] underline font-semibold"
            >
              Keluar Kuis Grup
            </button>
          )}
        </div>
      )}

      <div className="bg-[#fffdf9] p-4 rounded-2xl border border-[rgba(31,45,53,0.08)] shadow-[0_6px_22px_rgba(31,45,53,0.02)]">
        <div className="flex items-center justify-between text-xs font-mono text-[#5d6d75] mb-2">
          <span>
            Soal <strong className="text-[#1f2d35]">{currentIndex + 1}</strong>{" "}
            dari {questions.length}
          </span>
          <span>
            Skor: <strong className="text-[#2f7d5d]">{score}</strong>
          </span>
        </div>
        <div className="w-full h-2 bg-[#e6e0d5] rounded-full overflow-hidden border border-[rgba(31,45,53,0.06)]">
          <div
            className="h-full bg-[#2b6c5f] transition-all duration-300 rounded-full"
            style={{
              width: `${((currentIndex + 1) / questions.length) * 100}%`,
            }}
          />
        </div>
      </div>

      <div className="bg-[#fffdf9] rounded-3xl border border-[rgba(31,45,53,0.08)] shadow-[0_10px_30px_rgba(31,45,53,0.04)] p-6 sm:p-8">
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-[rgba(31,45,53,0.08)]">
          <span className="px-3 py-1 rounded-full bg-[#f5f0e8] border border-[rgba(31,45,53,0.08)] text-[#5b716b] text-[10px] font-mono font-semibold uppercase tracking-wider">
            Isi Bagian Rumpang (填空)
          </span>
          <button
            onClick={() =>
              playChineseAudio(
                currentQ.sentence.replace(
                  "（ ______ ）",
                  currentQ.correct_word,
                ),
              )
            }
            className="flex items-center gap-1.5 text-xs text-[#46685f] hover:text-[#285d52] font-semibold bg-[#f0f5f1] border border-[#d6e5df] px-3 py-1.5 rounded-xl transition-colors"
            title="Dengarkan Kalimat Lengkap"
          >
            <Volume2 className="w-4 h-4" />
            <span>Audio Kalimat</span>
          </button>
        </div>

        {/* Chinese Sentence */}
        <div className="my-6 p-6 sm:p-8 rounded-2xl bg-[#f5f0e8] border border-[rgba(31,45,53,0.08)] text-center">
          <p className="text-xl sm:text-2xl font-bold text-[#1f2d35] font-sans tracking-wide leading-relaxed">
            {currentQ.sentence}
          </p>
        </div>

        {/* Multiple Choice Options in Bento Style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-6">
          {currentQ.options.map((option) => {
            const isSelected = selectedAnswer === option;
            const isCorrectAnswer = option === currentQ.correct_word;

            let optionStyle =
              "bg-[#f7f4ef] hover:bg-[#efe8dc] border-[rgba(31,45,53,0.08)] text-[#354b53]";

            if (isAnswerSubmitted) {
              if (isCorrectAnswer) {
                optionStyle =
                  "bg-[#f0f5f1] border-[#91aaa0] text-[#46685f] ring-2 ring-[#91aaa0]/30 font-bold";
              } else if (isSelected && !isCorrectAnswer) {
                optionStyle =
                  "bg-[#f9efee] border-[#c99b9b] text-[#8c4f4f] ring-2 ring-[#c99b9b]/30 font-bold";
              } else {
                optionStyle =
                  "opacity-40 border-[rgba(31,45,53,0.08)] bg-[#f1ece4] text-[#718087]";
              }
            } else if (isSelected) {
              optionStyle =
                "bg-[#edf4ef] text-[#285d52] border-[#bfd7d1] font-bold";
            }

            return (
              <button
                key={option}
                onClick={() => handleSelectOption(option)}
                disabled={isAnswerSubmitted}
                className={`p-4 rounded-2xl border text-center transition-all flex items-center justify-center gap-2 ${optionStyle}`}
              >
                <span className="text-2xl font-bold font-serif">{option}</span>
                {isAnswerSubmitted && isCorrectAnswer && (
                  <CheckCircle2 className="w-5 h-5 text-[#6f8d82] flex-shrink-0" />
                )}
                {isAnswerSubmitted && isSelected && !isCorrectAnswer && (
                  <XCircle className="w-5 h-5 text-rose-400 flex-shrink-0" />
                )}
              </button>
            );
          })}
        </div>

        {/* Hint button if not submitted */}
        {!isAnswerSubmitted && (
          <div className="flex items-center justify-between pt-2">
            <button
              onClick={() => setShowHint(!showHint)}
              className="flex items-center gap-1.5 text-xs font-semibold text-[#718087] hover:text-[#1f2d35] transition-colors"
            >
              <HelpCircle className="w-4 h-4 text-[#6d8a80]" />
              <span>
                {showHint
                  ? "Sembunyikan Petunjuk"
                  : "Petunjuk Pembeda Kolokasi"}
              </span>
            </button>

            <button
              onClick={handleSubmitAnswer}
              disabled={!selectedAnswer}
              className={`px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all shadow-md ${
                selectedAnswer
                  ? "bg-[#2b6c5f] hover:bg-[#245d52] text-white"
                  : "bg-[#f1ece4] text-[#9aa5a7] border border-[rgba(31,45,53,0.08)] cursor-not-allowed"
              }`}
            >
              Kirim Jawaban
            </button>
          </div>
        )}

        {/* Hint Box */}
        {showHint && !isAnswerSubmitted && (
          <div className="mt-4 p-4 bg-[#f7f1e5] border border-[#e5dac7] rounded-2xl text-xs text-[#6f6659] leading-relaxed">
            <strong>Petunjuk Pembeda:</strong> {currentQ.hint}
          </div>
        )}

        {/* Answer Feedback & Detailed Explanation */}
        {isAnswerSubmitted && (
          <div className="mt-6 pt-6 border-t border-[rgba(31,45,53,0.08)]">
            <div
              className={`p-4 rounded-2xl border mb-5 ${
                selectedAnswer === currentQ.correct_word
                  ? "bg-[#f0f5f1] border-[#d6e5df] text-[#46685f]"
                  : "bg-[#f9efee] border-[#ead0cf] text-[#8c4f4f]"
              }`}
            >
              <div className="flex items-center gap-2 font-bold text-sm mb-2">
                {selectedAnswer === currentQ.correct_word ? (
                  <>
                    <CheckCircle2 className="w-5 h-5 text-[#6f8d82]" />
                    <span>Tepat.</span>
                  </>
                ) : (
                  <>
                    <XCircle className="w-5 h-5 text-rose-400" />
                    <span>
                      Belum Tepat. Jawaban benar: {currentQ.correct_word}
                    </span>
                  </>
                )}
              </div>

              <div className="text-xs whitespace-pre-line leading-relaxed bg-[#fffdf9] p-4 rounded-xl border border-[rgba(31,45,53,0.08)] text-[#354b53] font-sans">
                {currentQ.explanation}
              </div>
            </div>

            <div className="flex justify-end">
              <button
                onClick={handleNextQuestion}
                className="flex items-center gap-2 px-6 py-3 bg-[#2b6c5f] hover:bg-[#245d52] text-white font-semibold text-xs sm:text-sm rounded-xl transition-all"
              >
                <span>
                  {currentIndex < questions.length - 1
                    ? "Soal Berikutnya"
                    : "Lihat Hasil Akhir"}
                </span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
