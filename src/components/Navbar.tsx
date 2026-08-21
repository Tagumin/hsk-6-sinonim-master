import React from "react";
import {
  BookOpen,
  Layers,
  Sparkles,
  Search,
  Award,
  Brain,
  CheckCircle2,
  Bookmark,
} from "lucide-react";
import { AppMode } from "../types";

interface NavbarProps {
  currentMode: AppMode;
  onSelectMode: (mode: AppMode) => void;
  masteredCount: number;
  totalWordsCount: number;
  bookmarkedCount: number;
  onOpenSearch: () => void;
  onOpenBookmarks: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentMode,
  onSelectMode,
  masteredCount,
  totalWordsCount,
  bookmarkedCount,
  onOpenSearch,
  onOpenBookmarks,
}) => {
  const percentage = Math.round((masteredCount / totalWordsCount) * 100) || 0;

  const navItems: { id: AppMode; label: string; icon: React.ReactNode }[] = [
    {
      id: "browse",
      label: "Kosakata",
      icon: <BookOpen className="w-4 h-4" />,
    },
    {
      id: "contrast",
      label: "Bandingkan",
      icon: <Layers className="w-4 h-4" />,
    },
    {
      id: "quiz",
      label: "Latihan Kolokasi",
      icon: <Sparkles className="w-4 h-4" />,
    },
    {
      id: "flashcard",
      label: "Kartu Ulang",
      icon: <Brain className="w-4 h-4" />,
    },
    {
      id: "progress",
      label: "Kemajuan",
      icon: <Award className="w-4 h-4" />,
    },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-[rgba(31,45,53,0.08)] bg-[rgba(249,246,241,0.90)] backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3 py-3.5">
          <button
            type="button"
            aria-label="Buka kosakata"
            className="flex items-center gap-3 cursor-pointer group text-left"
            onClick={() => onSelectMode("browse")}
          >
            <div className="w-9 h-9 rounded-lg bg-[#edf4ef] border border-[#d6e5df] flex items-center justify-center text-[#285d52] font-bold text-base font-mono transition-transform group-hover:scale-[1.02]">
              六
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono uppercase tracking-[0.16em] text-[#526a6a]">
                  HSK 6
                </span>
                <span className="px-2 py-0.5 text-[9px] font-mono rounded-full bg-[#edf4ef] text-[#285d52] border border-[#d6e5df]">
                  同义词辨析
                </span>
              </div>
              <h1 className="text-sm sm:text-base font-semibold text-[#1f2d35] tracking-tight leading-tight">
                Mastering Sinonim Mandarin
              </h1>
            </div>
          </button>

          <nav className="hidden lg:flex items-center gap-1.5 bg-[#f5f0e8] p-1 rounded-lg border border-[rgba(31,45,53,0.08)]">
            {navItems.map((item) => {
              const isActive = currentMode === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-tab-${item.id}`}
                  onClick={() => onSelectMode(item.id)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-md text-[11px] font-medium transition-all ${
                    isActive
                      ? "bg-[#edf4ef] text-[#1f5d52] border border-[#d6e5df]"
                      : "text-[#53636d] hover:text-[#1f2d35] hover:bg-[#f8f5f0]"
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          <div className="flex items-center gap-2.5">
            <button
              id="global-search-btn"
              onClick={onOpenSearch}
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#f7f4ef] hover:bg-[#f1eadf] text-[#3f5360] text-xs font-medium border border-[rgba(31,45,53,0.08)] transition-all"
              title="Pencarian Cepat (Ctrl+K)"
            >
              <Search className="w-3.5 h-3.5 text-[#285d52]" />
              <span className="hidden sm:inline">Cari</span>
              <kbd className="hidden sm:inline px-1.5 py-0.5 text-[10px] font-mono bg-[#efe8dd] border border-[rgba(31,45,53,0.08)] rounded text-[#53636d]">
                ⌘K
              </kbd>
            </button>

            <button
              id="nav-bookmarks-btn"
              onClick={onOpenBookmarks}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium border transition-all ${
                bookmarkedCount > 0
                  ? "bg-[#f7f1e5] text-[#7a6545] border-[#e5dac7]"
                  : "bg-[#f7f4ef] text-[#5d6d75] border-[rgba(31,45,53,0.08)] hover:bg-[#f1eadf]"
              }`}
              title="Kosakata Ditandai"
            >
              <Bookmark
                className={`w-3.5 h-3.5 ${bookmarkedCount > 0 ? "text-[#7a6545]" : ""}`}
              />
              <span>{bookmarkedCount}</span>
            </button>

            <button
              type="button"
              onClick={() => onSelectMode("progress")}
              aria-label="Buka kemajuan belajar"
              className="flex items-center gap-2.5 px-3 py-2 bg-[#f7f4ef] border border-[rgba(31,45,53,0.08)] rounded-lg cursor-pointer hover:bg-[#f1eadf] transition-all"
              title="Lihat Detail Progres"
            >
              <div className="flex flex-col items-start">
                <span className="text-[9px] uppercase tracking-[0.12em] text-[#5d6d75] font-mono font-semibold">
                  Progres
                </span>
                <span className="text-xs font-mono font-semibold text-[#46685f]">
                  {masteredCount}
                  <span className="text-[#6a7a83] font-normal">
                    /{totalWordsCount}
                  </span>
                </span>
              </div>
              <div className="w-10 h-1.5 bg-[#e8e0d2] rounded-full overflow-hidden hidden sm:block">
                <div
                  className="h-full bg-[#2b6c5f] rounded-full transition-all duration-500"
                  style={{ width: `${percentage}%` }}
                />
              </div>
            </button>
          </div>
        </div>

        <div className="flex lg:hidden items-center justify-between py-2.5 border-t border-[rgba(31,45,53,0.08)] overflow-x-auto gap-2 scrollbar-none">
          {navItems.map((item) => {
            const isActive = currentMode === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onSelectMode(item.id)}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-[11px] font-semibold whitespace-nowrap transition-colors flex-shrink-0 ${
                  isActive
                    ? "bg-[#edf4ef] text-[#1f5d52] border border-[#d6e5df]"
                    : "text-[#53636d] hover:text-[#1f2d35] bg-[#f7f4ef] border border-[rgba(31,45,53,0.08)]"
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
};
