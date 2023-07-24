"use client";

import { Loading } from "./Loading";
import { tracks } from "./tracks";
import { MemoizedTrackUi } from "./TrackUi";
import { useLoadTime } from "./useLoadTime";
import { useVoices } from "./useVoices";

export const YSLS2 = () => {
  const { voices } = useVoices();
  const { loaded } = useLoadTime();

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      {voices.length === 0 || !loaded ? (
        <Loading />
      ) : (
        <MemoizedTrackUi trackInfo={tracks.r.info} />
      )}
    </div>
  );
};
