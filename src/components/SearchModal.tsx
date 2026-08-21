import React, { useState, useMemo, useEffect, useRef } from "react";
import { Search, X, Volume2, Bookmark, CheckCircle2 } from "lucide-react";
import { WordItem } from "../types";
import { allWords } from "../data";
import { playChineseAudio } from "../utils/speech";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectWord: (
    word: WordItem & { groupId: number; categoryId: string },
  ) => void;
  masteredWords: Record<string, boolean>;
  onToggleMastered: (hanzi: string) => void;
  bookmarkedWords: Record<string, boolean>;
  onToggleBookmark: (hanzi: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectWord,
  masteredWords,
  onToggleMastered,
  bookmarkedWords,
  onToggleBookmark,
}) => {
  const [query, setQuery] = useState<string>("");

  const searchResults = useMemo(() => {
    if (!query.trim()) return [];

    const q = query.toLowerCase().trim();

    return allWords.filter((item) => {
      const matchHanzi = item.hanzi.includes(q);
      const matchPinyin =
        item.pinyin.toLowerCase().includes(q) ||
        item.pinyin
          .toLowerCase()
          .replace(/[^a-z]/g, "")
          .includes(q);
      const matchMeaning = item.meaning_id.toLowerCase().includes(q);
      const matchCollocations = item.collocations.some((c) =>
        c.toLowerCase().includes(q),
      );
      const matchGroup = item.groupTitle.toLowerCase().includes(q);
      const matchNote = item.distinguishing_note?.toLowerCase().includes(q);

      return (
        matchHanzi ||
        matchPinyin ||
        matchMeaning ||
        matchCollocations ||
        matchGroup ||
        matchNote
      );
    });
  }, [query]);

  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    dialogRef.current?.focus();
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 px-4 bg-[rgba(31,45,53,0.32)] animate-in fade-in duration-150"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="global-search-title"
        tabIndex={-1}
        className="w-full max-w-2xl bg-[#fffdf9] rounded-2xl border border-[rgba(31,45,53,0.12)] shadow-[0_18px_50px_rgba(31,45,53,0.16)] overflow-hidden flex flex-col max-h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4 sm:p-5 border-b border-[rgba(31,45,53,0.08)] flex items-center gap-3 bg-[#f7f4ef]">
          <span id="global-search-title" className="sr-only">
            Cari kosakata
          </span>
          <Search className="w-5 h-5 text-[#285d52] flex-shrink-0" />
          <input
            type="text"
            id="global-search-modal-input"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cari Hanzi (misal: 毕竟), Pinyin (misal: bìjìng), atau arti..."
            aria-label="Cari Hanzi, Pinyin, arti, atau kolokasi"
            className="w-full text-sm sm:text-base bg-transparent border-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2b6c5f]/30 text-[#1f2d35] placeholder:text-[#718087] font-sans"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="text-xs font-mono text-[#53636d] hover:text-[#1f2d35] px-2 py-0.5 rounded-lg bg-[#efe8dd]"
            >
              Hapus
            </button>
          )}
          <button
            onClick={onClose}
            aria-label="Tutup pencarian"
            className="p-1.5 rounded-xl text-[#53636d] hover:text-[#1f2d35] hover:bg-[#efe8dd] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2b6c5f]/30 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-4 overflow-y-auto flex-1 divide-y divide-[rgba(31,45,53,0.08)]">
          {!query.trim() ? (
            <div className="py-12 text-center text-[#718087]">
              <Search className="w-8 h-8 mx-auto mb-2 opacity-40 text-[#6d8a80]" />
              <p className="text-xs font-mono">
                Ketik Hanzi, Pinyin atau kata kunci arti dalam Bahasa Indonesia
              </p>
              <div className="flex flex-wrap justify-center gap-2 mt-4">
                {[
                  "爱戴",
                  "包括",
                  "本来",
                  "毕竟",
                  "不可思议",
                  "关于",
                  "为了",
                ].map((sample) => (
                  <button
                    key={sample}
                    onClick={() => setQuery(sample)}
                    className="text-xs font-mono px-3 py-1 rounded-xl bg-[#f5f0e8] hover:bg-[#efe8dc] text-[#53636d] border border-[rgba(31,45,53,0.08)] transition-colors"
                  >
                    {sample}
                  </button>
                ))}
              </div>
            </div>
          ) : searchResults.length === 0 ? (
            <div className="py-12 text-center text-[#53636d]">
              <p className="text-sm font-medium">
                Tidak ditemukan hasil untuk "{query}"
              </p>
            </div>
          ) : (
            searchResults.map((item) => {
              const isMastered = !!masteredWords[item.hanzi];
              const isBookmarked = !!bookmarkedWords[item.hanzi];

              return (
                <div
                  key={`${item.groupId}-${item.hanzi}`}
                  className="py-3.5 px-3 flex items-start justify-between gap-4 hover:bg-[#f7f4ef] rounded-xl transition-colors cursor-pointer"
                  onClick={() => {
                    onSelectWord(item);
                    onClose();
                  }}
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2.5 mb-1">
                      <span className="text-xl font-bold text-[#1f2d35] font-serif">
                        {item.hanzi}
                      </span>
                      <span className="text-xs font-mono font-semibold text-[#285d52]">
                        {item.pinyin}
                      </span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          playChineseAudio(item.hanzi);
                        }}
                        aria-label={`Dengarkan ${item.hanzi}`}
                        className="text-[#718087] hover:text-[#285d52] p-0.5"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                      </button>
                      <span className="text-[10px] font-mono px-2 py-0.5 bg-[#f5f0e8] text-[#718087] border border-[rgba(31,45,53,0.08)] rounded-lg ml-auto sm:ml-0">
                        {item.groupTitle}
                      </span>
                    </div>

                    <p className="text-xs text-[#354b53] font-medium mb-1 line-clamp-1">
                      {item.meaning_id}
                    </p>

                    {item.distinguishing_note && (
                      <p className="text-[11px] text-[#6f6659] line-clamp-1">
                        {item.distinguishing_note}
                      </p>
                    )}
                  </div>

                  <div
                    className="flex items-center gap-1.5"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button
                      onClick={() => onToggleBookmark(item.hanzi)}
                      className={`p-1.5 rounded-xl transition-colors ${
                        isBookmarked
                          ? "text-[#7a6545] bg-[#f7f1e5]"
                          : "text-[#718087] hover:text-[#7a6545]"
                      }`}
                      aria-label={
                        isBookmarked ? "Hapus penanda" : "Tandai kata"
                      }
                      aria-pressed={isBookmarked}
                    >
                      <Bookmark className="w-4 h-4" />
                    </button>

                    <button
                      onClick={() => onToggleMastered(item.hanzi)}
                      className={`p-1.5 rounded-xl transition-colors ${
                        isMastered
                          ? "text-[#46685f] bg-[#f0f5f1]"
                          : "text-[#718087] hover:text-[#46685f]"
                      }`}
                      aria-label={
                        isMastered ? "Hapus tanda dikuasai" : "Tandai dikuasai"
                      }
                      aria-pressed={isMastered}
                    >
                      <CheckCircle2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};
