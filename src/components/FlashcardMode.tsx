import React, { useState, useMemo } from "react";
import {
  Volume2,
  RotateCw,
  CheckCircle2,
  Bookmark,
  Brain,
  ArrowLeft,
  ArrowRight,
  Filter,
} from "lucide-react";
import { Category, WordItem } from "../types";
import { allWords } from "../data";
import { playChineseAudio } from "../utils/speech";

interface FlashcardModeProps {
  categories: Category[];
  leitnerBoxes: Record<string, number>;
  onUpdateLeitnerBox: (hanzi: string, newBox: number) => void;
  masteredWords: Record<string, boolean>;
  onToggleMastered: (hanzi: string) => void;
  bookmarkedWords: Record<string, boolean>;
  onToggleBookmark: (hanzi: string) => void;
}

export const FlashcardMode: React.FC<FlashcardModeProps> = ({
  categories,
  leitnerBoxes,
  onUpdateLeitnerBox,
  masteredWords,
  onToggleMastered,
  bookmarkedWords,
  onToggleBookmark,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedBox, setSelectedBox] = useState<number | "all">("all");
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [onlyBookmarks, setOnlyBookmarks] = useState<boolean>(false);

  // Filter words
  const cardDeck = useMemo(() => {
    return allWords.filter((item) => {
      if (onlyBookmarks && !bookmarkedWords[item.hanzi]) return false;
      if (selectedCategory !== "all" && item.categoryId !== selectedCategory)
        return false;

      const currentBox = leitnerBoxes[item.hanzi] || 1;
      if (selectedBox !== "all" && currentBox !== selectedBox) return false;

      return true;
    });
  }, [
    allWords,
    selectedCategory,
    selectedBox,
    leitnerBoxes,
    onlyBookmarks,
    bookmarkedWords,
  ]);

  const currentWord = cardDeck[currentIndex] || cardDeck[0];

  // Box counters
  const boxStats = useMemo(() => {
    const counts = [0, 0, 0, 0, 0, 0]; // 1-indexed (1 to 5)
    allWords.forEach((w) => {
      const b = leitnerBoxes[w.hanzi] || 1;
      counts[b] = (counts[b] || 0) + 1;
    });
    return counts;
  }, [allWords, leitnerBoxes]);

  const handleNext = () => {
    setIsFlipped(false);
    if (currentIndex < cardDeck.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const handlePrev = () => {
    setIsFlipped(false);
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    } else {
      setCurrentIndex(cardDeck.length - 1);
    }
  };

  const handleRateCard = (quality: "hard" | "good" | "easy") => {
    if (!currentWord) return;

    const currentBox = leitnerBoxes[currentWord.hanzi] || 1;
    let nextBox = currentBox;

    if (quality === "hard") {
      nextBox = 1; // Reset to box 1 on mistake
    } else if (quality === "good") {
      nextBox = Math.min(5, currentBox + 1);
    } else if (quality === "easy") {
      nextBox = Math.min(5, currentBox + 2);
    }

    onUpdateLeitnerBox(currentWord.hanzi, nextBox);

    if (nextBox === 5) {
      if (!masteredWords[currentWord.hanzi]) {
        onToggleMastered(currentWord.hanzi);
      }
    }

    handleNext();
  };

  if (cardDeck.length === 0) {
    return (
      <div className="max-w-xl mx-auto px-4 py-16 text-center">
        <div className="bg-[#fffdf9] p-8 rounded-2xl border border-[rgba(31,45,53,0.08)]">
          <Brain className="w-12 h-12 text-[#9aabae] mx-auto mb-3" />
          <h3 className="text-base font-bold text-[#1f2d35] mb-1">
            Tidak ada kartu di filter ini
          </h3>
          <p className="text-xs text-[#53636d] mb-6">
            Coba reset filter kategori atau pilih Kotak Leitner lain.
          </p>
          <button
            onClick={() => {
              setSelectedCategory("all");
              setSelectedBox("all");
              setOnlyBookmarks(false);
            }}
            className="px-5 py-2.5 bg-[#2b6c5f] hover:bg-[#245d52] text-white rounded-xl text-xs font-semibold transition-colors"
          >
            Reset Semua Filter
          </button>
        </div>
      </div>
    );
  }

  const currentBoxNum = currentWord ? leitnerBoxes[currentWord.hanzi] || 1 : 1;
  const isMastered = currentWord ? !!masteredWords[currentWord.hanzi] : false;
  const isBookmarked = currentWord
    ? !!bookmarkedWords[currentWord.hanzi]
    : false;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      <div className="bg-[#fffdf9] rounded-3xl border border-[rgba(31,45,53,0.08)] p-6 shadow-[0_10px_30px_rgba(31,45,53,0.04)]">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#5d6d75] flex items-center gap-2">
            <span className="w-2 h-2 bg-[#2b6c5f] rounded-full" />
            Jadwal Ulang, 5 Tahap Leitner
          </h3>
          <span className="text-xs font-mono text-[#5f8177] font-semibold">
            Total {allWords.length} Kosakata
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
          {[1, 2, 3, 4, 5].map((box) => {
            const count = boxStats[box];
            const isSelected = selectedBox === box;

            return (
              <button
                key={box}
                onClick={() => {
                  setSelectedBox(selectedBox === box ? "all" : box);
                  setCurrentIndex(0);
                  setIsFlipped(false);
                }}
                className={`p-3.5 rounded-2xl border text-left transition-all ${
                  isSelected
                    ? "bg-[#f0f5f1] border-[#d6e5df]"
                    : "bg-[#f7f4ef] hover:bg-[#f1eadf] border-[rgba(31,45,53,0.08)]"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[11px] font-mono font-bold text-[#53636d]">
                    Kotak {box}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#a9b7be]" />
                </div>
                <div className="text-2xl font-bold font-mono text-[#1f2d35]">
                  {count}
                </div>
                <span className="text-[10px] font-mono text-[#718087] block truncate mt-0.5">
                  {box === 1
                    ? "Harian"
                    : box === 2
                      ? "Tiap 2 Hari"
                      : box === 3
                        ? "Tiap 4 Hari"
                        : box === 4
                          ? "Mingguan"
                          : "Dikuasai"}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Filter and Deck Bento Controls */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-[#fffdf9] p-4 rounded-2xl border border-[rgba(31,45,53,0.08)] shadow-[0_6px_22px_rgba(31,45,53,0.02)]">
        <div className="flex items-center gap-2.5">
          <Filter className="w-4 h-4 text-[#285d52]" />
          <select
            value={selectedCategory}
            onChange={(e) => {
              setSelectedCategory(e.target.value);
              setCurrentIndex(0);
              setIsFlipped(false);
            }}
            className="text-xs font-mono font-semibold px-3 py-1.5 bg-[#f7f4ef] border border-[rgba(31,45,53,0.10)] rounded-xl text-[#29414a] focus:outline-none focus:border-[#2b6c5f]"
          >
            <option value="all">Semua Kategori</option>
            {categories.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center gap-4">
          <label className="flex items-center gap-2 text-xs text-[#53636d] font-medium cursor-pointer">
            <input
              type="checkbox"
              checked={onlyBookmarks}
              onChange={(e) => {
                setOnlyBookmarks(e.target.checked);
                setCurrentIndex(0);
                setIsFlipped(false);
              }}
              className="rounded border-[rgba(31,45,53,0.18)] text-[#2b6c5f] focus:ring-[#2b6c5f]"
            />
            <span className="font-mono">
              Ditandai (
              {
                Object.keys(bookmarkedWords).filter((k) => bookmarkedWords[k])
                  .length
              }
              )
            </span>
          </label>

          <span className="text-xs font-mono font-semibold text-[#5f8177] px-3 py-1">
            {currentIndex + 1} / {cardDeck.length}
          </span>
        </div>
      </div>

      {/* Bento 3D Flashcard Container */}
      <div className="mb-6">
        <div
          onClick={() => setIsFlipped(!isFlipped)}
          onKeyDown={(event) => {
            if (event.target !== event.currentTarget) return;
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              setIsFlipped((previous) => !previous);
            }
          }}
          role="button"
          tabIndex={0}
          aria-label={
            isFlipped
              ? "Lihat sisi depan kartu"
              : "Balik kartu untuk melihat arti"
          }
          className={`study-card-surface w-full min-h-[380px] sm:min-h-[420px] rounded-[1.75rem] border border-[rgba(31,45,53,0.10)] p-8 cursor-pointer transition-all duration-300 flex flex-col justify-between relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2b6c5f]/40 ${
            isFlipped
              ? "bg-[#f7f4ef] ring-1 ring-[#cfe1dc]"
              : "hover:-translate-y-0.5 hover:border-[#bfd7d1]"
          }`}
        >
          {/* Card Top Bento Bar */}
          <div
            className="flex items-center justify-between"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-xl text-[10px] font-mono font-semibold bg-[#f5f0e8]/80 text-[#53636d] border border-[rgba(31,45,53,0.08)]">
                {currentWord.groupTitle}
              </span>
              <span className="px-3 py-1 rounded-xl text-[10px] font-mono font-semibold bg-[#f0f5f1]/80 text-[#5f8177] border border-[#d6e5df]">
                Tahap {currentBoxNum}
              </span>
            </div>

            <div className="flex items-center gap-1.5">
              <button
                onClick={() => onToggleBookmark(currentWord.hanzi)}
                className={`p-2 rounded-xl transition-colors ${
                  isBookmarked
                    ? "text-[#7a6545] bg-[#f7f1e5]"
                    : "text-slate-500 hover:text-[#7a6545] hover:bg-[#f4efe7]"
                }`}
                title="Tandai Kata"
              >
                <Bookmark
                  className={`w-4 h-4 ${isBookmarked ? "fill-amber-400" : ""}`}
                />
              </button>

              <button
                onClick={() => onToggleMastered(currentWord.hanzi)}
                className={`p-2 rounded-xl transition-colors ${
                  isMastered
                    ? "text-[#46685f] bg-[#f0f5f1]"
                    : "text-slate-500 hover:text-[#46685f] hover:bg-[#f4efe7]"
                }`}
                title="Tandai Dikuasai"
              >
                <CheckCircle2
                  className={`w-4 h-4 ${isMastered ? "text-[#46685f]" : ""}`}
                />
              </button>

              <button
                onClick={() => playChineseAudio(currentWord.hanzi)}
                aria-label={`Dengarkan ${currentWord.hanzi}`}
                className="p-2 rounded-xl text-[#718087] hover:text-[#285d52] hover:bg-[#f4efe7] transition-colors"
                title="Dengarkan Audio"
              >
                <Volume2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Card Center Content */}
          {!isFlipped ? (
            /* FRONT OF CARD */
            <div className="study-card-content text-center my-auto py-8 relative z-10">
              <div className="mb-5 text-[10px] font-mono uppercase tracking-[0.28em] text-[#718087]">
                Baca, lalu bandingkan
              </div>
              <div className="text-7xl sm:text-8xl font-black text-[#1f2d35] font-serif tracking-tight mb-4">
                {currentWord.hanzi}
              </div>
              <div className="text-2xl font-semibold text-[#285d52] font-mono tracking-wide">
                {currentWord.pinyin}
              </div>
              <div className="mt-10 flex items-center justify-center gap-1.5 text-xs font-mono text-[#718087]">
                <RotateCw className="w-3.5 h-3.5 text-[#6d8a80]" />
                <span>
                  Klik kartu untuk membalik & melihat arti serta pembeda
                </span>
              </div>
            </div>
          ) : (
            /* BACK OF CARD */
            <div className="study-card-content my-auto space-y-5 relative z-10 px-1 sm:px-5">
              <div className="mb-1">
                <span className="text-[10px] font-mono uppercase tracking-[0.28em] text-[#718087]">
                  Makna dan pembeda
                </span>
              </div>
              <div className="bg-[#f5f0e8]/85 p-5 rounded-xl border border-[rgba(31,45,53,0.08)]">
                <span className="text-[10px] font-mono font-bold text-[#5b716b] uppercase tracking-wider block mb-1">
                  Arti Bahasa Indonesia:
                </span>
                <p className="text-lg sm:text-xl font-bold text-[#1f2d35] leading-snug max-w-[34rem]">
                  {currentWord.meaning_id}
                </p>
              </div>

              {currentWord.distinguishing_note && (
                <div className="p-5 bg-[#fbf9f5]/90 border border-[rgba(31,45,53,0.08)] rounded-xl text-sm text-[#354b53] leading-relaxed">
                  <strong className="text-[#5b716b] block mb-1 font-mono uppercase text-[10px]">
                    Kapan dipakai
                  </strong>
                  {currentWord.distinguishing_note}
                </div>
              )}

              <div>
                <span className="text-[10px] font-mono font-bold text-[#718087] uppercase tracking-wider block mb-2">
                  Contoh Kolokasi:
                </span>
                <div className="space-y-2 max-h-36 overflow-y-auto pr-1 scrollbar-none">
                  {currentWord.collocations.map((c, i) => (
                    <div
                      key={i}
                      className="text-xs bg-[#f5f0e8] p-2.5 rounded-xl border border-[rgba(31,45,53,0.08)] text-[#53636d] flex items-start justify-between gap-2"
                    >
                      <div className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#9ab7ae] mt-1.5 flex-shrink-0" />
                        <span className="leading-relaxed">{c}</span>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          playChineseAudio(c);
                        }}
                        aria-label={`Dengarkan ${c}`}
                        className="text-[#718087] hover:text-[#285d52] p-0.5 flex-shrink-0"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Card Footer Navigation */}
          <div
            className="flex items-center justify-between border-t border-[rgba(31,45,53,0.08)] pt-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handlePrev}
              className="flex items-center gap-1.5 text-xs font-semibold text-[#718087] hover:text-[#1f2d35] p-2 rounded-xl hover:bg-[#f4efe7] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Sebelumnya</span>
            </button>

            <button
              onClick={() => setIsFlipped(!isFlipped)}
              className="text-xs font-mono font-semibold text-[#46685f] hover:text-[#285d52] flex items-center gap-1.5 bg-[#f0f5f1] border border-[#d6e5df] px-3.5 py-1.5 rounded-xl transition-all"
            >
              <RotateCw className="w-3.5 h-3.5" />
              <span>{isFlipped ? "Lihat Depan" : "Balik Kartu"}</span>
            </button>

            <button
              onClick={handleNext}
              className="flex items-center gap-1.5 text-xs font-semibold text-[#718087] hover:text-[#1f2d35] p-2 rounded-xl hover:bg-[#f4efe7] transition-colors"
            >
              <span>Berikutnya</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Bento Leitner Spaced Repetition Action Rating Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <button
          onClick={() => handleRateCard("hard")}
          className="flex flex-col items-center justify-center p-4 rounded-2xl bg-[#f7f4ef] hover:bg-[#f1eadf] border border-[#d8c8c8] text-[#8c6666] transition-all font-semibold text-xs sm:text-sm"
        >
          <span>Sulit / Lupa</span>
          <span className="text-[10px] font-mono font-normal text-[#8c6666]/80 mt-0.5">
            Kembali ke Kotak 1
          </span>
        </button>

        <button
          onClick={() => handleRateCard("good")}
          className="flex flex-col items-center justify-center p-4 rounded-2xl bg-[#f7f4ef] hover:bg-[#f1eadf] border border-[#cbd8dc] text-[#587481] transition-all font-semibold text-xs sm:text-sm"
        >
          <span>Ingat Baik</span>
          <span className="text-[10px] font-mono font-normal text-[#587481]/80 mt-0.5">
            +1 Kotak Leitner
          </span>
        </button>

        <button
          onClick={() => handleRateCard("easy")}
          className="flex flex-col items-center justify-center p-4 rounded-2xl bg-[#f7f4ef] hover:bg-[#f1eadf] border border-[#cbdad2] text-[#5f8177] transition-all font-semibold text-xs sm:text-sm"
        >
          <span>Sangat Mudah</span>
          <span className="text-[10px] font-mono font-normal text-[#5f8177]/80 mt-0.5">
            +2 Kotak (Mastered)
          </span>
        </button>
      </div>
    </div>
  );
};
