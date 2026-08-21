import React, { useState, useEffect, useCallback } from "react";
import { Navbar } from "./components/Navbar";
import { BrowseMode } from "./components/BrowseMode";
import { ContrastMode } from "./components/ContrastMode";
import { QuizMode } from "./components/QuizMode";
import { FlashcardMode } from "./components/FlashcardMode";
import { ProgressDashboard } from "./components/ProgressDashboard";
import { SearchModal } from "./components/SearchModal";
import { categories, allGroups, allWords } from "./data";
import { AppMode, SynonymGroup, WordItem } from "./types";
import {
  getInitialProgress,
  saveProgress,
  UserProgress,
} from "./utils/storage";

export default function App() {
  const [currentMode, setCurrentMode] = useState<AppMode>("browse");
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>("verbs");
  const [selectedContrastGroup, setSelectedContrastGroup] =
    useState<SynonymGroup | null>(null);
  const [quizTargetGroup, setQuizTargetGroup] = useState<SynonymGroup | null>(
    null,
  );
  const [highlightWord, setHighlightWord] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  // User persistence state
  const [progress, setProgress] = useState<UserProgress>(getInitialProgress);

  // Save progress changes to localStorage
  useEffect(() => {
    saveProgress(progress);
  }, [progress]);

  // Global keyboard shortcut for search (Ctrl+K or Cmd+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Handlers for user interactions
  const handleToggleMastered = useCallback((hanzi: string) => {
    setProgress((prev) => {
      const nextMastered = {
        ...prev.masteredWords,
        [hanzi]: !prev.masteredWords[hanzi],
      };
      const nextBoxes = { ...prev.leitnerBoxes };
      if (nextMastered[hanzi]) {
        nextBoxes[hanzi] = 5; // Promote directly to box 5 if manually marked mastered
      }
      return {
        ...prev,
        masteredWords: nextMastered,
        leitnerBoxes: nextBoxes,
      };
    });
  }, []);

  const handleToggleBookmark = useCallback((hanzi: string) => {
    setProgress((prev) => ({
      ...prev,
      bookmarkedWords: {
        ...prev.bookmarkedWords,
        [hanzi]: !prev.bookmarkedWords[hanzi],
      },
    }));
  }, []);

  const handleUpdateLeitnerBox = useCallback(
    (hanzi: string, newBox: number) => {
      setProgress((prev) => ({
        ...prev,
        leitnerBoxes: {
          ...prev.leitnerBoxes,
          [hanzi]: newBox,
        },
        lastReviewed: {
          ...prev.lastReviewed,
          [hanzi]: Date.now(),
        },
      }));
    },
    [],
  );

  const handleRecordQuizResult = useCallback((isCorrect: boolean) => {
    setProgress((prev) => {
      const newAttempted = prev.quizStats.totalAttempted + 1;
      const newCorrect = prev.quizStats.totalCorrect + (isCorrect ? 1 : 0);
      const newStreak = isCorrect ? prev.quizStats.streak + 1 : 0;
      const newBestStreak = Math.max(prev.quizStats.bestStreak, newStreak);

      return {
        ...prev,
        quizStats: {
          totalAttempted: newAttempted,
          totalCorrect: newCorrect,
          streak: newStreak,
          bestStreak: newBestStreak,
        },
      };
    });
  }, []);

  const handleResetProgress = useCallback(() => {
    const fresh: UserProgress = {
      masteredWords: {},
      bookmarkedWords: {},
      leitnerBoxes: {},
      lastReviewed: {},
      quizStats: {
        totalAttempted: 0,
        totalCorrect: 0,
        streak: 0,
        bestStreak: 0,
      },
    };
    setProgress(fresh);
    saveProgress(fresh);
  }, []);

  // Jump handlers
  const handleOpenGroupInContrast = (group: SynonymGroup) => {
    setSelectedCategoryId(group.category_id);
    setSelectedContrastGroup(group);
    setCurrentMode("contrast");
  };

  const handleStartGroupQuiz = (group: SynonymGroup) => {
    setQuizTargetGroup(group);
    setCurrentMode("quiz");
  };

  const handleSelectWordFromSearch = (
    word: WordItem & { groupId: number; categoryId: string },
  ) => {
    setSelectedCategoryId(word.categoryId);
    const targetGroup = allGroups.find((g) => g.id === word.groupId);
    if (targetGroup) {
      setSelectedContrastGroup(targetGroup);
    }
    setHighlightWord(word.hanzi);
    setCurrentMode("browse");

    // Scroll to the word in view after brief mount delay
    setTimeout(() => {
      const element = document.getElementById(`word-card-${word.hanzi}`);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }, 150);
  };

  const masteredCount = Object.keys(progress.masteredWords).filter(
    (k) => progress.masteredWords[k],
  ).length;
  const bookmarkedCount = Object.keys(progress.bookmarkedWords).filter(
    (k) => progress.bookmarkedWords[k],
  ).length;

  return (
    <div className="min-h-screen bg-[#f7f3ec] text-[#1f2d35] font-sans flex flex-col antialiased">
      {/* Top Navbar */}
      <Navbar
        currentMode={currentMode}
        onSelectMode={setCurrentMode}
        masteredCount={masteredCount}
        totalWordsCount={allWords.length}
        bookmarkedCount={bookmarkedCount}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenBookmarks={() => {
          setCurrentMode("flashcard");
        }}
      />

      {/* Main Content View Switcher */}
      <main className="flex-1">
        {currentMode === "browse" && (
          <BrowseMode
            categories={categories}
            selectedCategoryId={selectedCategoryId}
            onSelectCategory={setSelectedCategoryId}
            masteredWords={progress.masteredWords}
            onToggleMastered={handleToggleMastered}
            bookmarkedWords={progress.bookmarkedWords}
            onToggleBookmark={handleToggleBookmark}
            onOpenGroupInContrast={handleOpenGroupInContrast}
            onStartGroupQuiz={handleStartGroupQuiz}
            highlightWord={highlightWord}
          />
        )}

        {currentMode === "contrast" && (
          <ContrastMode
            categories={categories}
            selectedGroup={selectedContrastGroup}
            onSelectGroup={setSelectedContrastGroup}
            masteredWords={progress.masteredWords}
            onToggleMastered={handleToggleMastered}
            bookmarkedWords={progress.bookmarkedWords}
            onToggleBookmark={handleToggleBookmark}
            onStartQuiz={handleStartGroupQuiz}
          />
        )}

        {currentMode === "quiz" && (
          <QuizMode
            categories={categories}
            specificGroup={quizTargetGroup}
            onClearSpecificGroup={() => setQuizTargetGroup(null)}
            onRecordQuizResult={handleRecordQuizResult}
            onToggleMastered={handleToggleMastered}
            masteredWords={progress.masteredWords}
          />
        )}

        {currentMode === "flashcard" && (
          <FlashcardMode
            categories={categories}
            leitnerBoxes={progress.leitnerBoxes}
            onUpdateLeitnerBox={handleUpdateLeitnerBox}
            masteredWords={progress.masteredWords}
            onToggleMastered={handleToggleMastered}
            bookmarkedWords={progress.bookmarkedWords}
            onToggleBookmark={handleToggleBookmark}
          />
        )}

        {currentMode === "progress" && (
          <ProgressDashboard
            categories={categories}
            progress={progress}
            onResetProgress={handleResetProgress}
            onNavigateToBrowseCategory={(catId) => {
              setSelectedCategoryId(catId);
              setCurrentMode("browse");
            }}
          />
        )}
      </main>

      {/* Global Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectWord={handleSelectWordFromSearch}
        masteredWords={progress.masteredWords}
        onToggleMastered={handleToggleMastered}
        bookmarkedWords={progress.bookmarkedWords}
        onToggleBookmark={handleToggleBookmark}
      />

      <footer className="py-5 border-t border-[rgba(31,45,53,0.08)] text-center text-xs text-[#718087]">
        <p className="font-mono">HSK 6 同义词辨析</p>
      </footer>
    </div>
  );
}
