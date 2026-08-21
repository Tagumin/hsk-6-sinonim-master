import React, { useState, useMemo } from "react";
import {
  Volume2,
  Bookmark,
  CheckCircle2,
  Layers,
  Sparkles,
  ChevronDown,
  ChevronUp,
  Filter,
  BookOpen,
  Search,
} from "lucide-react";
import { Category, SynonymGroup, WordItem } from "../types";
import { playChineseAudio } from "../utils/speech";

interface BrowseModeProps {
  categories: Category[];
  selectedCategoryId: string;
  onSelectCategory: (id: string) => void;
  masteredWords: Record<string, boolean>;
  onToggleMastered: (hanzi: string) => void;
  bookmarkedWords: Record<string, boolean>;
  onToggleBookmark: (hanzi: string) => void;
  onOpenGroupInContrast: (group: SynonymGroup) => void;
  onStartGroupQuiz: (group: SynonymGroup) => void;
  highlightWord?: string | null;
}

export const BrowseMode: React.FC<BrowseModeProps> = ({
  categories,
  selectedCategoryId,
  onSelectCategory,
  masteredWords,
  onToggleMastered,
  bookmarkedWords,
  onToggleBookmark,
  onOpenGroupInContrast,
  onStartGroupQuiz,
  highlightWord,
}) => {
  const [expandedGroups, setExpandedGroups] = useState<Record<number, boolean>>(
    {},
  );
  const [filterFormality, setFilterFormality] = useState<string>("all");
  const [filterConnotation, setFilterConnotation] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const activeCategory = useMemo(() => {
    return categories.find((c) => c.id === selectedCategoryId) || categories[0];
  }, [categories, selectedCategoryId]);

  // Toggle single group expand
  const toggleGroup = (groupId: number) => {
    setExpandedGroups((prev) => ({
      ...prev,
      [groupId]: prev[groupId] === undefined ? false : !prev[groupId],
    }));
  };

  // Expand / Collapse all in current category
  const expandAll = () => {
    const next: Record<number, boolean> = {};
    activeCategory.groups.forEach((g) => {
      next[g.id] = true;
    });
    setExpandedGroups(next);
  };

  const collapseAll = () => {
    const next: Record<number, boolean> = {};
    activeCategory.groups.forEach((g) => {
      next[g.id] = false;
    });
    setExpandedGroups(next);
  };

  // Filter groups
  const filteredGroups = useMemo(() => {
    return activeCategory.groups.filter((group) => {
      // Search term filter
      if (searchTerm.trim()) {
        const term = searchTerm.toLowerCase();
        const matchesTitle = group.title.toLowerCase().includes(term);
        const matchesDiff = group.key_difference_summary
          .toLowerCase()
          .includes(term);
        const matchesWords = group.words.some(
          (w) =>
            w.hanzi.includes(term) ||
            w.pinyin.toLowerCase().includes(term) ||
            w.meaning_id.toLowerCase().includes(term) ||
            w.collocations.some((c) => c.toLowerCase().includes(term)),
        );
        if (!matchesTitle && !matchesDiff && !matchesWords) return false;
      }

      // Formality filter
      if (filterFormality !== "all") {
        const hasFormality = group.words.some(
          (w) => w.formality === filterFormality,
        );
        if (!hasFormality) return false;
      }

      // Connotation filter
      if (filterConnotation !== "all") {
        const hasConnotation = group.words.some(
          (w) => w.connotation === filterConnotation,
        );
        if (!hasConnotation) return false;
      }

      return true;
    });
  }, [activeCategory, searchTerm, filterFormality, filterConnotation]);

  const totalWordsInActiveCat = activeCategory.groups.reduce(
    (acc, g) => acc + g.words.length,
    0,
  );
  const masteredInActiveCat = activeCategory.groups.reduce((acc, g) => {
    return acc + g.words.filter((w) => masteredWords[w.hanzi]).length;
  }, 0);
  const categoryPercentage =
    Math.round((masteredInActiveCat / totalWordsInActiveCat) * 100) || 0;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-5">
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-[rgba(31,45,53,0.08)]">
        {categories.map((cat) => {
          const isSelected = cat.id === selectedCategoryId;
          const catWordsCount = cat.groups.reduce(
            (acc, g) => acc + g.words.length,
            0,
          );
          const catMastered = cat.groups.reduce(
            (acc, g) =>
              acc + g.words.filter((w) => masteredWords[w.hanzi]).length,
            0,
          );
          const catPercent =
            Math.round((catMastered / catWordsCount) * 100) || 0;

          return (
            <button
              key={cat.id}
              id={`cat-btn-${cat.id}`}
              onClick={() => onSelectCategory(cat.id)}
              className={`flex items-center gap-2.5 px-3.5 py-2.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all flex-shrink-0 border ${
                isSelected
                  ? "bg-[#edf4ef] border-[#d6e5df] text-[#1f5d52]"
                  : "bg-[#f9f6f1] hover:bg-[#f3efe7] text-[#4b5d68] border-[rgba(31,45,53,0.08)]"
              }`}
            >
              <span
                className={`w-2 h-2 rounded-full ${isSelected ? "bg-[#2b6c5f]" : "bg-[#a9b7be]"}`}
              />
              <span>{cat.name}</span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-full bg-[#f0eae1] text-[#53636d]">
                {catPercent}% ({cat.groups.length})
              </span>
            </button>
          );
        })}
      </div>

      <div className="bg-[#fffdf9] rounded-2xl p-4 border border-[rgba(31,45,53,0.08)] flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-[#5b716b]">
            {activeCategory.groups.length} Grup Sinonim
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1f2d35]">
            {activeCategory.name}
          </h1>
          <p className="text-xs sm:text-sm text-[#53636d] max-w-2xl leading-relaxed">
            {activeCategory.description}
          </p>
          <p className="mt-3 text-[11px] font-mono text-[#718087] max-w-xl leading-relaxed">
            Catatan meja: cari pembeda kecil yang mengubah kapan sebuah kata
            terasa tepat.
          </p>
        </div>

        <div className="flex items-center gap-3 text-[11px] text-[#53636d]">
          <span className="font-mono uppercase tracking-[0.12em] text-[#5b716b]">
            Kategori
          </span>
          <span className="font-mono font-semibold text-[#285d52]">
            {masteredInActiveCat}/{totalWordsInActiveCat}
          </span>
          <div className="w-16 h-1.5 bg-[#e8e0d2] rounded-full overflow-hidden">
            <div
              className="h-full bg-[#2b6c5f] rounded-full transition-all duration-500"
              style={{ width: `${categoryPercentage}%` }}
            />
          </div>
        </div>
      </div>

      <div className="bg-[#fffdf9] rounded-2xl p-4 border border-[rgba(31,45,53,0.08)] flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="relative flex-1 max-w-md">
          <input
            type="text"
            id="category-search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Cari Hanzi, Pinyin, arti, atau frasa kolokasi..."
            className="w-full pl-9 pr-4 py-2.5 text-xs sm:text-sm bg-[#f7f4ef] border border-[rgba(31,45,53,0.10)] rounded-xl text-[#1f2d35] placeholder:text-[#7a888f] focus:outline-none focus:border-[#2b6c5f] focus:ring-1 focus:ring-[#2b6c5f]/20 transition-all font-sans"
          />
          <Search className="w-4 h-4 text-[#285d52] absolute left-3 top-3" />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              className="absolute right-3 top-3 text-xs text-[#53636d] hover:text-[#1f2d35]"
            >
              Reset
            </button>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <select
            id="filter-formality"
            value={filterFormality}
            onChange={(e) => setFilterFormality(e.target.value)}
            className="text-xs font-mono font-medium px-3 py-2 bg-[#f7f4ef] border border-[rgba(31,45,53,0.10)] rounded-xl text-[#29414a] focus:outline-none focus:border-[#2b6c5f]"
          >
            <option value="all">Semua Formalitas</option>
            <option value="formal_tulis">书面语 (Bahasa Tulis)</option>
            <option value="lisan_percakapan">口语 (Bahasa Lisan)</option>
            <option value="netral">通用 (Netral)</option>
          </select>

          <select
            id="filter-connotation"
            value={filterConnotation}
            onChange={(e) => setFilterConnotation(e.target.value)}
            className="text-xs font-mono font-medium px-3 py-2 bg-[#f7f4ef] border border-[rgba(31,45,53,0.10)] rounded-xl text-[#29414a] focus:outline-none focus:border-[#2b6c5f]"
          >
            <option value="all">Semua Konotasi</option>
            <option value="positif">褒义 (Positif)</option>
            <option value="negatif">贬义 (Negatif)</option>
            <option value="netral">中性 (Netral)</option>
          </select>

          <div className="flex items-center gap-1.5 border-l border-[rgba(31,45,53,0.10)] pl-2">
            <button
              onClick={expandAll}
              className="px-3 py-1.5 text-xs font-semibold text-[#2d3d44] bg-[#f4efe7] hover:bg-[#ece4d7] border border-[rgba(31,45,53,0.08)] rounded-xl transition-colors"
            >
              Buka Semua
            </button>
            <button
              onClick={collapseAll}
              className="px-3 py-1.5 text-xs font-semibold text-[#2d3d44] bg-[#f4efe7] hover:bg-[#ece4d7] border border-[rgba(31,45,53,0.08)] rounded-xl transition-colors"
            >
              Tutup Semua
            </button>
          </div>
        </div>
      </div>

      {/* Bento Groups Grid List */}
      {filteredGroups.length === 0 ? (
        <div className="bg-slate-800/80 rounded-3xl border border-slate-700/50 p-12 text-center">
          <BookOpen className="w-12 h-12 text-slate-600 mx-auto mb-3" />
          <h3 className="text-base font-bold text-slate-300 mb-1">
            Tidak ada grup sinonim yang cocok
          </h3>
          <p className="text-xs text-slate-500">
            Coba ubah kata kunci pencarian atau reset pilihan filter.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredGroups.map((group, groupIndex) => {
            const isExpanded = expandedGroups[group.id] !== false; // default to expanded
            const allWordsMastered = group.words.every(
              (w) => masteredWords[w.hanzi],
            );

            return (
              <div
                key={group.id}
                id={`synonym-group-${group.id}`}
                style={{
                  animationDelay: `${Math.min(groupIndex * 65, 390)}ms`,
                }}
                className={`study-group-reveal bg-[#fffdf9] rounded-2xl border transition-all duration-200 overflow-hidden ${
                  allWordsMastered
                    ? "border-[#d1e7df] bg-[#fbf9f5]"
                    : "border-[rgba(31,45,53,0.08)]"
                }`}
              >
                <div className="p-5 border-b border-[rgba(31,45,53,0.08)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-start sm:items-center gap-3">
                    <button
                      onClick={() => toggleGroup(group.id)}
                      className="p-1.5 rounded-lg text-[#53636d] hover:bg-[#f4efe7] transition-colors mt-0.5 sm:mt-0"
                    >
                      {isExpanded ? (
                        <ChevronUp className="w-5 h-5 text-[#285d52]" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </button>
                    <div>
                      <div className="flex flex-wrap items-center gap-2.5">
                        <span className="text-[10px] font-mono text-[#5b716b] font-semibold uppercase tracking-[0.12em]">
                          #Grup {group.id}
                        </span>
                        <h2 className="text-lg font-bold text-[#1f2d35] tracking-tight">
                          {group.title}
                        </h2>
                        {allWordsMastered && (
                          <span className="inline-flex items-center gap-1 text-[10px] font-mono font-semibold text-[#5f8177]">
                            <CheckCircle2 className="w-3 h-3" /> Dikuasai
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-[#5d6d75] font-medium mt-1">
                        <span className="font-semibold text-[#1f2d35]">
                          Pembeda Utama:
                        </span>{" "}
                        {group.key_difference_summary}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 pl-9 sm:pl-0">
                    <button
                      onClick={() => onOpenGroupInContrast(group)}
                      className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium bg-[#f5f0e8] hover:bg-[#efe8dc] text-[#1f5d52] border border-[rgba(31,45,53,0.08)] rounded-lg transition-all"
                      title="Buka Tabel Kontras Lengkap"
                    >
                      <Layers className="w-3.5 h-3.5" />
                      <span>Bandingkan</span>
                    </button>

                    <button
                      onClick={() => onStartGroupQuiz(group)}
                      className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium bg-[#2b6c5f] hover:bg-[#245d52] text-white rounded-lg transition-all"
                      title="Kuis Khusus Grup Ini"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Latihan Grup</span>
                    </button>
                  </div>
                </div>

                {isExpanded && (
                  <div className="p-5">
                    <div
                      className="grid gap-5"
                      style={{
                        gridTemplateColumns: `repeat(auto-fit, minmax(280px, 1fr))`,
                      }}
                    >
                      {group.words.map((word) => {
                        const isMastered = !!masteredWords[word.hanzi];
                        const isBookmarked = !!bookmarkedWords[word.hanzi];
                        const isHighlighted = highlightWord === word.hanzi;

                        return (
                          <div
                            key={word.hanzi}
                            id={`word-card-${word.hanzi}`}
                            className={`flex flex-col justify-between p-4 rounded-2xl bg-[#f8f5f0] border transition-all ${
                              isHighlighted
                                ? "ring-2 ring-[#bfd7d1] border-[#bfd7d1] bg-white"
                                : isMastered
                                  ? "border-[#d1e7df] bg-[#fbf9f5]"
                                  : "border-[rgba(31,45,53,0.08)] hover:border-[rgba(31,45,53,0.12)]"
                            }`}
                          >
                            <div>
                              <div className="flex items-start justify-between gap-2 mb-3">
                                <div>
                                  <div className="flex items-baseline gap-2">
                                    <span className="text-3xl font-bold text-[#1f2d35] font-serif">
                                      {word.hanzi}
                                    </span>
                                    <button
                                      onClick={() =>
                                        playChineseAudio(word.hanzi)
                                      }
                                      className="p-1 rounded-lg text-[#53636d] hover:bg-[#efe8dc] transition-colors"
                                      title="Dengarkan Pelafalan Audio"
                                    >
                                      <Volume2 className="w-4 h-4" />
                                    </button>
                                  </div>
                                  <div className="text-sm font-mono font-semibold text-[#285d52] mt-0.5">
                                    {word.pinyin}
                                  </div>
                                </div>

                                <div className="flex items-center gap-1">
                                  <button
                                    onClick={() => onToggleBookmark(word.hanzi)}
                                    className={`p-1.5 rounded-xl transition-all ${
                                      isBookmarked
                                        ? "text-[#7a6545] bg-[#f7f1e5]"
                                        : "text-[#53636d] hover:bg-[#f4efe7]"
                                    }`}
                                    title="Tandai Kata Ini"
                                  >
                                    <Bookmark
                                      className={`w-4 h-4 ${isBookmarked ? "text-[#7a6545]" : ""}`}
                                    />
                                  </button>

                                  <button
                                    onClick={() => onToggleMastered(word.hanzi)}
                                    className={`p-1.5 rounded-xl transition-all ${
                                      isMastered
                                        ? "text-[#46685f] bg-[#f0f5f1]"
                                        : "text-[#53636d] hover:bg-[#f4efe7]"
                                    }`}
                                    title={
                                      isMastered
                                        ? "Sudah Dikuasai"
                                        : "Tandai Sudah Dikuasai"
                                    }
                                  >
                                    <CheckCircle2
                                      className={`w-4 h-4 ${isMastered ? "text-[#46685f]" : ""}`}
                                    />
                                  </button>
                                </div>
                              </div>

                              <div className="bg-white p-4 rounded-xl border border-[rgba(31,45,53,0.08)] mb-4">
                                <span className="text-[10px] uppercase font-mono font-bold text-[#5b716b] block mb-1">
                                  Arti:
                                </span>
                                <p className="text-sm sm:text-base font-semibold text-[#1f2d35] leading-relaxed">
                                  {word.meaning_id}
                                </p>
                              </div>

                              {word.distinguishing_note && (
                                <div className="p-3.5 rounded-xl bg-[#f3efe8] border border-[rgba(31,45,53,0.08)] mb-4 text-xs text-[#354b53] leading-relaxed">
                                  <span className="text-[10px] uppercase font-mono font-bold text-[#5b716b] block mb-0.5">
                                    🎯 Kapan & Dengan Apa Dipakai:
                                  </span>
                                  {word.distinguishing_note}
                                </div>
                              )}

                              <div className="flex flex-wrap items-center gap-1.5 mb-4">
                                {word.formality && (
                                  <span
                                    className={`text-[10px] font-mono font-semibold px-2 py-0.5 rounded-lg border ${
                                      word.formality === "formal_tulis"
                                        ? "bg-[#f2edf8] text-[#5c4b7f] border-[#d8d0eb]"
                                        : word.formality === "lisan_percakapan"
                                          ? "bg-[#edf4f8] text-[#3d5f78] border-[#d4dfeb]"
                                          : "bg-[#f5f0e8] text-[#5b6e74] border-[rgba(31,45,53,0.08)]"
                                    }`}
                                  >
                                    {word.formality === "formal_tulis"
                                      ? "书面语 (Tulis)"
                                      : word.formality === "lisan_percakapan"
                                        ? "口语 (Lisan)"
                                        : "通用 (Netral)"}
                                  </span>
                                )}

                                {word.connotation &&
                                  word.connotation !== "netral" && (
                                    <span
                                      className={`text-[10px] font-mono font-semibold px-2 py-0.5 rounded-lg border ${
                                        word.connotation === "positif"
                                          ? "bg-[#edf4ef] text-[#285d52] border-[#d6e5df]"
                                          : "bg-[#f9efee] text-[#8c4f4f] border-[#ead0cf]"
                                      }`}
                                    >
                                      {word.connotation === "positif"
                                        ? "褒义 (Positif)"
                                        : "贬义 (Negatif)"}
                                    </span>
                                  )}

                                {word.object_type && (
                                  <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-lg bg-[#f5f0e8] text-[#7a5d2d] border border-[#e6d6ac]">
                                    Objek: {word.object_type}
                                  </span>
                                )}
                              </div>
                            </div>

                            <div className="pt-3 border-t border-[rgba(31,45,53,0.08)]">
                              <span className="text-[10px] font-mono font-bold text-[#718087] uppercase tracking-widest block mb-2">
                                Contoh Kolokasi:
                              </span>
                              <ul className="space-y-2">
                                {word.collocations.map((colloc, idx) => (
                                  <li
                                    key={idx}
                                    className="text-xs text-[#53636d] bg-[#f5f0e8] hover:bg-[#efe8dc] p-2.5 rounded-lg border border-[rgba(31,45,53,0.08)] font-sans leading-relaxed flex items-start justify-between gap-2 group/item transition-colors"
                                  >
                                    <div className="flex items-start gap-2">
                                      <span className="w-1.5 h-1.5 rounded-full bg-[#9ab7ae] mt-1.5 flex-shrink-0" />
                                      <span>{colloc}</span>
                                    </div>
                                    <button
                                      onClick={() => playChineseAudio(colloc)}
                                      className="text-[#718087] hover:text-[#285d52] p-0.5 opacity-0 group-hover/item:opacity-100 transition-opacity flex-shrink-0"
                                      title="Audio Kalimat"
                                    >
                                      <Volume2 className="w-3.5 h-3.5" />
                                    </button>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
