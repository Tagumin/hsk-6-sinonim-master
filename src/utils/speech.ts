export const playChineseAudio = (text: string) => {
  if (!('speechSynthesis' in window)) {
    return;
  }

  // Cancel any ongoing speech
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'zh-CN';
  utterance.rate = 0.85; // slightly slower for clear comprehension

  const voices = window.speechSynthesis.getVoices();
  const chineseVoice = voices.find(v => v.lang === 'zh-CN' || v.lang.startsWith('zh'));
  if (chineseVoice) {
    utterance.voice = chineseVoice;
  }

  window.speechSynthesis.speak(utterance);
};
