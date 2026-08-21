import React, { useState, useMemo } from "react";
import {
  Volume2,
  Bookmark,
  CheckCircle2,
  Sparkles,
  Search,
  Layers,
  ArrowRight,
  HelpCircle,
} from "lucide-react";
import { Category, SynonymGroup, WordItem } from "../types";
import { playChineseAudio } from "../utils/speech";

interface ContrastModeProps {
  categories: Category[];
  selectedGroup: SynonymGroup | null;
  onSelectGroup: (group: SynonymGroup) => void;
  masteredWords: Record<string, boolean>;
  onToggleMastered: (hanzi: string) => void;
  bookmarkedWords: Record<string, boolean>;
  onToggleBookmark: (hanzi: string) => void;
  onStartQuiz: (group: SynonymGroup) => void;
}

export const ContrastMode: React.FC<ContrastModeProps> = ({
  categories,
  selectedGroup,
  onSelectGroup,
  masteredWords,
  onToggleMastered,
  bookmarkedWords,
  onToggleBookmark,
  onStartQuiz,
}) => {
  const [selectedCatId, setSelectedCatId] = useState<string>(
    categories[0]?.id || "verbs",
  );
  const [groupSearch, setGroupSearch] = useState<string>("");

  const currentCategory = useMemo(() => {
    return categories.find((c) => c.id === selectedCatId) || categories[0];
  }, [categories, selectedCatId]);

  // If no group is explicitly passed or selected group belongs to another view, pick first in category
  const activeGroup = useMemo(() => {
    if (selectedGroup && selectedGroup.category_id === selectedCatId) {
      return selectedGroup;
    }
    return currentCategory.groups[0] || null;
  }, [selectedGroup, currentCategory, selectedCatId]);

  const filteredGroups = useMemo(() => {
    if (!groupSearch.trim()) return currentCategory.groups;
    const term = groupSearch.toLowerCase();
    return currentCategory.groups.filter(
      (g) =>
        g.title.toLowerCase().includes(term) ||
        g.key_difference_summary.toLowerCase().includes(term) ||
        g.words.some(
          (w) =>
            w.hanzi.includes(term) || w.pinyin.toLowerCase().includes(term),
        ),
    );
  }, [currentCategory, groupSearch]);

  if (!activeGroup) {
    return (
      <div className="p-8 text-center text-slate-500 font-mono">
        Pilih kategori untuk melihat tabel kontras.
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-[rgba(31,45,53,0.08)] scrollbar-none">
        {categories.map((cat) => {
          const isSelected = cat.id === selectedCatId;
          return (
            <button
              key={cat.id}
              onClick={() => {
                setSelectedCatId(cat.id);
                if (cat.groups.length > 0) {
                  onSelectGroup(cat.groups[0]);
                }
              }}
              className={`flex items-center gap-2 px-3.5 py-2.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all flex-shrink-0 border ${
                isSelected
                  ? "bg-[#edf4ef] border-[#d6e5df] text-[#1f5d52]"
                  : "bg-[#f9f6f1] hover:bg-[#f3efe7] text-[#4b5d68] border-[rgba(31,45,53,0.08)]"
              }`}
            >
              <span
                className={`w-2 h-2 rounded-full ${isSelected ? "bg-[#2b6c5f]" : "bg-[#a9b7be]"}`}
              />
              <span>{cat.name}</span>
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        <div className="lg:col-span-4 bg-[#fffdf9] rounded-2xl p-4 border border-[rgba(31,45,53,0.08)] flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-semibold text-[#1f2d35] flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#2b6c5f] rounded-full" />
              Pilih Grup
            </h2>
            <span className="text-[10px] font-mono uppercase tracking-[0.12em] text-[#5b716b]">
              {filteredGroups.length} grup
            </span>
          </div>

          {/* Quick Search */}
          <div className="relative mb-4">
            <input
              type="text"
              value={groupSearch}
              onChange={(e) => setGroupSearch(e.target.value)}
              placeholder="Cari grup sinonim..."
              className="w-full pl-8 pr-3 py-2 text-xs bg-[#f7f4ef] border border-[rgba(31,45,53,0.08)] rounded-lg text-[#1f2d35] placeholder:text-[#7a888f] focus:outline-none focus:border-[#2b6c5f] focus:ring-1 focus:ring-[#2b6c5f]/20"
            />
            <Search className="w-3.5 h-3.5 text-[#285d52] absolute left-2.5 top-3" />
          </div>

          {/* List of Groups */}
          <div className="space-y-2 max-h-[520px] overflow-y-auto pr-1.5 scrollbar-none">
            {filteredGroups.map((group) => {
              const isSelected = activeGroup.id === group.id;
              const allMastered = group.words.every(
                (w) => masteredWords[w.hanzi],
              );

              return (
                <button
                  key={group.id}
                  id={`contrast-group-pick-${group.id}`}
                  onClick={() => onSelectGroup(group)}
                  className={`w-full text-left p-3 rounded-xl transition-all border ${
                    isSelected
                      ? "bg-[#edf4ef] border-[#d6e5df] text-[#1f2d35]"
                      : "bg-[#f9f6f1] hover:bg-[#f3efe7] border-[rgba(31,45,53,0.08)] text-[#384d59]"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="font-bold text-xs line-clamp-1 flex items-center gap-1.5">
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${isSelected ? "bg-[#2b6c5f]" : "bg-[#a9b7be]"}`}
                      />
                      {group.title}
                    </span>
                    {allMastered && (
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#285d52] flex-shrink-0" />
                    )}
                  </div>
                  <p className="text-[11px] text-[#5d6d75] line-clamp-1">
                    {group.key_difference_summary}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Bento Group Stats Footer in Sidebar */}
        </div>

        <div className="lg:col-span-8 space-y-6">
          <div className="bg-[#fffdf9] rounded-2xl p-5 border border-[rgba(31,45,53,0.08)] flex flex-col">
            <div className="flex items-center justify-between mb-5 pb-4 border-b border-[rgba(31,45,53,0.08)]">
              <div className="flex items-center gap-2.5">
                <div className="px-2.5 py-1 bg-[#f5ecd7] text-[#7a5d2d] text-[10px] font-mono font-bold uppercase tracking-[0.12em] rounded-full border border-[#e3d3a6]">
                  Bandingkan
                </div>
                <h2 className="text-xl font-bold text-[#1f2d35] tracking-tight">
                  {activeGroup.title}
                </h2>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => onStartQuiz(activeGroup)}
                  className="hidden sm:flex items-center gap-1.5 px-3 py-2 bg-[#2b6c5f] hover:bg-[#245d52] text-white rounded-lg text-xs font-medium transition-all"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Latihan</span>
                </button>
              </div>
            </div>

            {/* Side by side columns for words */}
            <div
              className="grid gap-6 overflow-x-auto pb-2"
              style={{
                gridTemplateColumns: `repeat(${activeGroup.words.length}, minmax(250px, 1fr))`,
              }}
            >
              {activeGroup.words.map((word) => {
                const isMastered = !!masteredWords[word.hanzi];
                const isBookmarked = !!bookmarkedWords[word.hanzi];

                return (
                  <div key={word.hanzi} className="flex flex-col">
                    <div className="flex items-start justify-between mb-2">
                      <div className="text-4xl sm:text-5xl font-bold font-serif text-[#1f2d35] tracking-tight">
                        {word.hanzi}
                      </div>

                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => playChineseAudio(word.hanzi)}
                          className="p-1.5 rounded-lg text-[#53636d] hover:bg-[#f4efe7] transition-colors"
                          title="Pelafalan"
                        >
                          <Volume2 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => onToggleBookmark(word.hanzi)}
                          className={`p-1.5 rounded-lg transition-colors ${
                            isBookmarked
                              ? "text-[#7a6545] bg-[#f7f1e5]"
                              : "text-[#53636d] hover:bg-[#f4efe7]"
                          }`}
                          title="Tandai"
                        >
                          <Bookmark
                            className={`w-4 h-4 ${isBookmarked ? "text-[#7a6545]" : ""}`}
                          />
                        </button>
                        <button
                          onClick={() => onToggleMastered(word.hanzi)}
                          className={`p-1.5 rounded-lg transition-colors ${
                            isMastered
                              ? "text-[#46685f] bg-[#f0f5f1]"
                              : "text-[#53636d] hover:bg-[#f4efe7]"
                          }`}
                          title={isMastered ? "Dikuasai" : "Tandai Dikuasai"}
                        >
                          <CheckCircle2
                            className={`w-4 h-4 ${isMastered ? "text-[#46685f]" : ""}`}
                          />
                        </button>
                      </div>
                    </div>

                    <div className="font-mono text-base sm:text-lg mb-4 font-semibold text-[#285d52]">
                      {word.pinyin}
                    </div>

                    <div className="bg-[#f5f0e8] p-4 rounded-xl border border-[rgba(31,45,53,0.08)] mb-4">
                      <span className="text-[10px] uppercase font-mono font-bold text-[#5b716b] block mb-1">
                        Definisi & Arti:
                      </span>
                      <p className="text-sm sm:text-base text-[#1f2d35] leading-relaxed font-semibold">
                        {word.meaning_id}
                      </p>
                    </div>

                    {word.distinguishing_note && (
                      <div className="bg-[#fbf9f5] p-4 rounded-xl border border-[rgba(31,45,53,0.08)] mb-5">
                        <span className="text-[10px] font-mono font-bold text-[#5b716b] uppercase tracking-widest block mb-1">
                          🎯 Kapan & Dengan Apa Dipakai:
                        </span>
                        <p className="text-sm text-[#354b53] leading-relaxed">
                          {word.distinguishing_note}
                        </p>
                      </div>
                    )}

                    <div className="space-y-2 p-1 mb-4">
                      <span className="text-[10px] text-[#718087] uppercase font-bold font-mono tracking-widest block">
                        Ciri Pembeda Utama
                      </span>
                      {word.object_type && (
                        <div className="text-xs text-[#718087]">
                          <b className="text-[#53636d]">Objek:</b>{" "}
                          {word.object_type}
                        </div>
                      )}
                      {word.formality && (
                        <div className="text-xs text-[#718087]">
                          <b className="text-[#53636d]">Register:</b>{" "}
                          {word.formality === "formal_tulis"
                            ? "书面语 (Bahasa Tulis)"
                            : word.formality === "lisan_percakapan"
                              ? "口语 (Bahasa Lisan)"
                              : "通用 (Netral)"}
                        </div>
                      )}
                      {word.connotation && word.connotation !== "netral" && (
                        <div className="text-xs text-[#718087]">
                          <b className="text-[#53636d]">Konotasi:</b>{" "}
                          {word.connotation === "positif"
                            ? "褒义 (Positif)"
                            : "贬义 (Negatif)"}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-5 pt-4 border-t border-[rgba(31,45,53,0.08)] flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => onStartQuiz(activeGroup)}
                className="flex-1 py-3 bg-[#f5f0e8] hover:bg-[#efe8dc] rounded-xl text-xs sm:text-sm font-medium text-[#1f2d35] border border-[rgba(31,45,53,0.08)] transition-colors flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-[#285d52]" />
                <span>Latihan Kolokasi</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
