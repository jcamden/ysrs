"use client";

import { useContext } from "react";

import { Char, Loading, MemoizedTrackUi } from "@/components";
import { useControls, useLoadTime, useSong, useVoices } from "@/hooks";
import { StateContext } from "@/state";

import { LogoImage } from "./Logo/LogoImage";
import { TrackDisplay } from "./TrackUi/useDisplay/TrackDisplay";
import { ColorChangingLetters, LogoDisplay } from "./Logo";
export const YSLS = () => {
  const { track, keypressDisplay } = useContext(StateContext);
  const { voices } = useVoices();
  const { loaded } = useLoadTime();
  useSong();
  useControls();

  return (
    <main>
      <div className="h-screen w-screen flex flex-col justify-center items-center bg-black">
        {voices.length === 0 || !loaded ? (
          <div className="w-96">
            <Loading color="progress-primary" />
          </div>
        ) : keypressDisplay ? (
          <Char>{keypressDisplay}</Char>
        ) : track ? (
          <MemoizedTrackUi track={track} />
        ) : (
          <div className="font-jammyCreamer text-9xl text-center">
            {/* <ColorChangingLetters text="YARYAR JUKEBOX 2" /> */}
            {/* <TrackDisplay text={["YARYAR JUKEBOX 2"]} /> */}
            {/* <span className="font-ubuntu text-5xl"> Welcome to</span> */}

            <LogoImage text={["♫"]} />

            <div className="mt-14">
              <LogoDisplay text={["YARYAR JUKEBOX 2"]} />
            </div>
          </div>
        )}
      </div>
    </main>
  );
};
