"use client";

import { useContext } from "react";

import { StateContext } from "@/state";

import { Char } from "./Char";
import { Loading } from "./Loading";
import { MemoizedTrackUi } from "./TrackUi";
import { useControls } from "./useControls";
import { useLoadTime } from "./useLoadTime";
import { useSong } from "./useSong";
import { useVoices } from "./useVoices";

export const YSLS2 = () => {
  const { track, keypressDisplay } = useContext(StateContext);
  const { voices } = useVoices();
  const { loaded } = useLoadTime();
  const { song } = useSong();
  useControls();

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      {voices.length === 0 || !loaded ? (
        <Loading />
      ) : keypressDisplay ? (
        <Char>{keypressDisplay}</Char>
      ) : track ? (
        <MemoizedTrackUi trackInfo={track.info} />
      ) : (
        <div>Welcome to Yaryar Symphonics Research Suite</div>
      )}
    </div>
  );
};
