import { memo, useContext, useEffect, useState } from "react";
import { v4 } from "uuid";

import { DispatchContext, StateContext, Track } from "@/state";
import { speak } from "@/utils";

import { incrementTts } from "./incrementTts";
import { playTrack } from "./playTrack";
import { useDisplay } from "./useDisplay";

interface TrackUiProps {
  track: Track;
}

export const TrackUI = ({ track }: TrackUiProps) => {
  const { info, url } = track;
  const [indexDisplayed, setIndexDisplayed] = useState(0);
  const [ttsText, setTtsText] = useState(info[0].tts);
  const { song } = useContext(StateContext);
  const dispatch = useContext(DispatchContext);
  const { display } = useDisplay({ trackInfo: info, indexDisplayed });

  useEffect(() => {
    speak({
      text: ttsText,
      onEnd: () => {
        if (indexDisplayed === info.length - 1 && song) {
          playTrack(song, url, dispatch);
        } else if (indexDisplayed < info.length - 1) {
          incrementTts({ indexDisplayed, setTtsText, trackInfo: info });
          setIndexDisplayed(indexDisplayed + 1);
        }
      },
    });
  }, [ttsText]);

  return (
    <div className="flex flex-col justify-center items-center text-9xl font-ubuntu font-bold">
      {display.map((item) => (
        <div key={v4()}>{item}</div>
      ))}
    </div>
  );
};

export const MemoizedTrackUi = memo(TrackUI);
