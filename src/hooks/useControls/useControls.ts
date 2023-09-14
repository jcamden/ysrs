import { useContext, useEffect, useMemo } from "react";

import { DispatchContext, StateContext } from "@/state";

import { handleKeyDown } from "./handleKeyDown";
import { handleKeyDownWithTrack } from "./handleKeyDownWithTrack";

export const useControls = () => {
  const { song, voices, track } = useContext(StateContext);
  const dispatch = useContext(DispatchContext);

  const memoizedHandleKeyDown = useMemo(
    () => (e: KeyboardEvent) => handleKeyDown({ e, dispatch, song }),
    // doesn't actually need song, just lazily leaving it;
    // song is used by controls, and right now, the only control is to stop the song (which is only relevant for ...WithTrack (below))
    []
  );

  const memoizedHandleKeyDownWithTrack = useMemo(
    () => (e: KeyboardEvent) => handleKeyDownWithTrack({ e, dispatch, song }),
    [song]
  );

  useEffect(() => {
    console.log("useControls");
    console.log(track);

    if (track && song) {
      console.log("removing event listener");
      document.removeEventListener("keydown", memoizedHandleKeyDown);
      document.addEventListener("keydown", memoizedHandleKeyDownWithTrack);

      // Don't forget to clean up
      return function cleanup() {
        document.removeEventListener("keydown", memoizedHandleKeyDownWithTrack);
      };
    } else {
      if (song && voices.length > 0) {
        document.addEventListener("keydown", memoizedHandleKeyDown);

        // Don't forget to clean up
        return function cleanup() {
          document.removeEventListener("keydown", memoizedHandleKeyDown);
        };
      }
    }
  }, [song, voices, track]);
};
