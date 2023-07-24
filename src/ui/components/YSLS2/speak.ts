interface SpeakArgs {
  lang?: string;
  onEnd?: (e: SpeechSynthesisEvent) => void;
  // 0-2
  pitch?: number;
  // 0.1 - 10
  rate?: number;
  text: string;
  // 0-1
  volume?: number;
}

export const speak = ({
  lang = "en",
  onEnd,
  pitch = 1,
  rate = 1,
  text,
  volume = 1,
}: SpeakArgs) => {
  const speech = new SpeechSynthesisUtterance();

  speech.lang = lang;
  speech.pitch = pitch;
  speech.rate = rate;
  speech.text = text;
  speech.volume = volume;

  const voices = window.speechSynthesis.getVoices();

  if (voices.length < 1) {
    console.log("no voices yet");
    return;
  }

  speech.voice = voices[146];

  if (onEnd) {
    speech.addEventListener("end", onEnd);
  }

  window.speechSynthesis.speak(speech);
  // window.speechSynthesis.
};
