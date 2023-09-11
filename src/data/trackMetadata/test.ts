import { trackPath } from "./common";
import { TrackData } from "./types";

export const Test: TrackData = {
  filename: `test.wav`,
  path: trackPath,
  info: [
    {
      display: ["Test"],
      tts: "test",
    },
  ],
};
