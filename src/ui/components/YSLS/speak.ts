export const speak = (text: string) => {
  // const voices = speechSynthesis.getVoices();
  // console.log(voices);
  // const utterance = { ...new SpeechSynthesisUtterance(text), voice: voices[0] };
  // speechSynthesis.speak(utterance);
  const speech = new SpeechSynthesisUtterance();
  speech.lang = "en";
  speech.text = `${text}`;
  // 0.1 - 10
  speech.rate = 1;
  // 0-1
  speech.volume = 1;
  // 0-2
  speech.pitch = 1;

  const voices = window.speechSynthesis.getVoices();
  console.log(voices);

  if (voices.length < 1) {
    console.log("no voices yet");
    return;
  }

  speech.voice = voices[146];

  window.speechSynthesis.speak(speech);
};
