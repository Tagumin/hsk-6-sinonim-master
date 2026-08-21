import React from "react";
import {
  Award,
  Sparkles,
  Flame,
  Bookmark,
  ArrowRight,
  RotateCcw,
} from "lucide-react";
import { Category } from "../types";
import { allWords } from "../data";
import { UserProgress } from "../utils/storage";

interface ProgressDashboardProps {
  categories: Category[];
  progress: UserProgress;
  onResetProgress: () => void;
  onNavigateToBrowseCategory: (catId: string) => void;
}

export const ProgressDashboard: React.FC<ProgressDashboardProps> = ({
  categories,
  progress,
  onResetProgress,
  onNavigateToBrowseCategory,
}) => {
  const totalWords = allWords.length;
  const masteredCount = Object.keys(progress.masteredWords).filter(
    (k) => progress.masteredWords[k],
  ).length;
  const overallPercentage = Math.round((masteredCount / totalWords) * 100) || 0;
  const bookmarkedCount = Object.keys(progress.bookmarkedWords).filter(
    (k) => progress.bookmarkedWords[k],
  ).length;

  const boxCounts = [0, 0, 0, 0, 0, 0];
  allWords.forEach((w) => {
    const box = progress.leitnerBoxes[w.hanzi] || 1;
    boxCounts[box] = (boxCounts[box] || 0) + 1;
  });

  const quizAccuracy =
    progress.quizStats.totalAttempted > 0
      ? Math.round(
          (progress.quizStats.totalCorrect /
            progress.quizStats.totalAttempted) *
            100,
        )
      : 0;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      <div className="bg-[#fffdf9] rounded-3xl p-6 sm:p-8 border border-[rgba(31,45,53,0.08)] shadow-[0_10px_30px_rgba(31,45,53,0.04)] relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div>
            <span className="text-[10px] uppercase font-mono tracking-[0.18em] font-bold text-[#4f6a63] block mb-1 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-[#2b6c5f] rounded-full" />
              Catatan Belajar
            </span>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1f2d35]">
              Kemajuan HSK 6
            </h1>
            <p className="text-xs sm:text-sm text-[#53636d] mt-2 max-w-xl leading-relaxed">
              Lihat kata yang sudah dikuasai, tahap pengulangan, dan hasil
              latihan kolokasi.
            </p>
          </div>

          <div className="bg-[#f7f4ef] rounded-2xl p-5 flex items-center gap-6 border border-[rgba(31,45,53,0.08)]">
            <div>
              <span className="text-[10px] uppercase font-mono font-bold text-[#5d6d75] block mb-1">
                Kata Dikuasai
              </span>
              <div className="text-3xl font-bold font-mono text-[#46685f]">
                {masteredCount}{" "}
                <span className="text-sm font-normal text-[#6a7a83]">
                  / {totalWords}
                </span>
              </div>
            </div>
            <div className="w-16 h-16 rounded-2xl bg-[#f0f5f1] border border-[#d6e5df] flex items-center justify-center font-bold font-mono text-lg text-[#46685f]">
              {overallPercentage}%
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-[#fffdf9] p-5 rounded-2xl border border-[rgba(31,45,53,0.08)] shadow-[0_6px_22px_rgba(31,45,53,0.02)]">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-mono font-bold text-[#5d6d75] uppercase">
              Kuis Terjawab
            </span>
            <Sparkles className="w-4 h-4 text-[#2b6c5f]" />
          </div>
          <div className="text-3xl font-bold font-mono text-[#1f2d35]">
            {progress.quizStats.totalAttempted}
          </div>
          <span className="text-xs font-mono text-[#6a7a83] mt-1 block">
            Total soal latihan
          </span>
        </div>

        <div className="bg-[#fffdf9] p-5 rounded-2xl border border-[rgba(31,45,53,0.08)] shadow-[0_6px_22px_rgba(31,45,53,0.02)]">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-mono font-bold text-[#5d6d75] uppercase">
              Akurasi Kuis
            </span>
            <Award className="w-4 h-4 text-[#6d8a80]" />
          </div>
          <div className="text-3xl font-bold font-mono text-[#46685f]">
            {quizAccuracy}%
          </div>
          <span className="text-xs font-mono text-[#6a7a83] mt-1 block">
            {progress.quizStats.totalCorrect} jawaban benar
          </span>
        </div>

        <div className="bg-[#fffdf9] p-5 rounded-2xl border border-[rgba(31,45,53,0.08)] shadow-[0_6px_22px_rgba(31,45,53,0.02)]">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-mono font-bold text-[#5d6d75] uppercase">
              Streak Terbaik
            </span>
            <Flame className="w-4 h-4 text-[#8c7b61]" />
          </div>
          <div className="text-3xl font-bold font-mono text-[#6f6659]">
            {progress.quizStats.bestStreak}
          </div>
          <span className="text-xs font-mono text-[#6a7a83] mt-1 block">
            Jawaban berturut-turut
          </span>
        </div>

        <div className="bg-[#fffdf9] p-5 rounded-2xl border border-[rgba(31,45,53,0.08)] shadow-[0_6px_22px_rgba(31,45,53,0.02)]">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-mono font-bold text-[#5d6d75] uppercase">
              Ditandai
            </span>
            <Bookmark className="w-4 h-4 text-[#8c7b61]" />
          </div>
          <div className="text-3xl font-bold font-mono text-[#6f6659]">
            {bookmarkedCount}
          </div>
          <span className="text-xs font-mono text-[#6a7a83] mt-1 block">
            Kata butuh perhatian
          </span>
        </div>
      </div>

      <div className="bg-[#fffdf9] p-6 sm:p-7 rounded-3xl border border-[rgba(31,45,53,0.08)] shadow-[0_10px_30px_rgba(31,45,53,0.04)]">
        <h3 className="font-bold text-base text-[#1f2d35] mb-4 flex items-center gap-2">
          <span className="w-2 h-2 bg-[#2b6c5f] rounded-full" />
          <span>Tahap Pengulangan</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
          {[1, 2, 3, 4, 5].map((box) => {
            const count = boxCounts[box];
            const pct = Math.round((count / totalWords) * 100) || 0;

            return (
              <div
                key={box}
                className="bg-[#f7f4ef] p-4 rounded-2xl border border-[rgba(31,45,53,0.08)] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-mono font-bold text-[#425864]">
                      Kotak {box}
                    </span>
                    <span className="text-xs font-mono text-[#6a7a83]">
                      {pct}%
                    </span>
                  </div>
                  <div className="text-2xl font-bold font-mono text-[#1f2d35]">
                    {count} kata
                  </div>
                </div>

                <div className="w-full h-1.5 bg-[#e6e0d5] rounded-full mt-3 overflow-hidden border border-[rgba(31,45,53,0.06)]">
                  <div
                    className={`h-full ${
                      box === 1
                        ? "bg-[#b9a3a3]"
                        : box === 2
                          ? "bg-[#b9ad96]"
                          : box === 3
                            ? "bg-[#9daeb5]"
                            : box === 4
                              ? "bg-[#aaa9b8]"
                              : "bg-[#91aaa0]"
                    }`}
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="bg-[#fffdf9] p-6 sm:p-7 rounded-3xl border border-[rgba(31,45,53,0.08)] shadow-[0_10px_30px_rgba(31,45,53,0.04)]">
        <h3 className="font-bold text-base text-[#1f2d35] mb-4 flex items-center gap-2">
          <span className="w-2 h-2 bg-[#2b6c5f] rounded-full" />
          <span>Kemajuan per Kategori</span>
        </h3>

        <div className="space-y-3">
          {categories.map((cat) => {
            const catWords = cat.groups.reduce(
              (acc, g) => acc + g.words.length,
              0,
            );
            const catMastered = cat.groups.reduce(
              (acc, g) =>
                acc +
                g.words.filter((w) => progress.masteredWords[w.hanzi]).length,
              0,
            );
            const pct = Math.round((catMastered / catWords) * 100) || 0;

            return (
              <div
                key={cat.id}
                className="p-4 rounded-2xl bg-[#f7f4ef] border border-[rgba(31,45,53,0.08)] hover:border-[#bfd7d1] transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-bold text-sm text-[#1f2d35]">
                      {cat.name}
                    </span>
                    <span className="text-xs font-mono text-[#5d6d75]">
                      {catMastered} / {catWords} kata ({pct}%)
                    </span>
                  </div>
                  <div className="w-full h-2 bg-[#e6e0d5] rounded-full overflow-hidden border border-[rgba(31,45,53,0.06)]">
                    <div
                      className="h-full bg-[#2b6c5f] rounded-full transition-all duration-500"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>

                <button
                  onClick={() => onNavigateToBrowseCategory(cat.id)}
                  className="flex items-center gap-1 text-xs font-bold text-[#285d52] hover:text-[#1f5d52] self-end sm:self-center bg-[#edf6f3] px-3 py-1.5 rounded-xl border border-[#cfe1dc] transition-colors"
                >
                  <span>Buka Kategori</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>
      </div>

      <div className="p-4 rounded-2xl bg-[#f7f4ef] border border-[#e9d4d4] flex items-center justify-between">
        <div>
          <span className="text-xs font-mono font-bold text-[#8b4d4d] block">
            Hapus Catatan Belajar
          </span>
          <span className="text-[11px] text-[#5d6d75]">
            Menghapus kata dikuasai, tahap pengulangan, dan hasil latihan.
          </span>
        </div>
        <button
          onClick={() => {
            if (
              window.confirm("Yakin ingin mereset seluruh progres belajar?")
            ) {
              onResetProgress();
            }
          }}
          className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold text-[#8b4d4d] bg-[#fffdf9] border border-[#e9d4d4] rounded-xl hover:bg-[#f9f0f0] transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Hapus Catatan</span>
        </button>
      </div>
    </div>
  );
};
