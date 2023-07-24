"use client";

import { useContext } from "react";

import { Char, Loading, MemoizedTrackUi } from "@/components";
import { useControls, useLoadTime, useSong, useVoices } from "@/hooks";
import { StateContext } from "@/state";
export const YSLS = () => {
  const { track, keypressDisplay } = useContext(StateContext);
  const { voices } = useVoices();
  const { loaded } = useLoadTime();
  useSong();
  useControls();

  return (
    <main>
      <div className="h-screen w-screen flex flex-col justify-center items-center">
        {voices.length === 0 || !loaded ? (
          <Loading />
        ) : keypressDisplay ? (
          <Char>{keypressDisplay}</Char>
        ) : track ? (
          <MemoizedTrackUi track={track} />
        ) : (
          <div className="font-ubuntu text-8xl text-center">
            Welcome to <br /> Yaryar Symphonics Research Suite
          </div>
        )}
      </div>
    </main>
  );
};
