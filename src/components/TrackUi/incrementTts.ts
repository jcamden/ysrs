import { Dispatch, SetStateAction } from "react";

import { TrackInfo } from "@/data/tracks";

export interface IncrementTts {
  indexDisplayed: number;
  setTtsText: Dispatch<SetStateAction<string>>;
  trackInfo: TrackInfo;
}

export const incrementTts = ({
  indexDisplayed,
  setTtsText,
  trackInfo,
}: IncrementTts) => {
  setTtsText(trackInfo[indexDisplayed + 1].tts);
};
