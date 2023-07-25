import { Dispatch, useContext, useEffect } from "react";

import { tracks } from "@/data/tracks";
import { DispatchContext, StateContext } from "@/state";
import { Actions, ActionTypes } from "@/state/actions";
import { speak } from "@/utils";

interface HandleKeyDownProps {
  e: KeyboardEvent;
  dispatch: Dispatch<Actions>;
  song: HTMLAudioElement | undefined;
}

interface ControlsArgs {
  dispatch: Dispatch<Actions>;
  song: HTMLAudioElement | undefined;
}

const controls: { [key: string]: (args: ControlsArgs) => void } = {
  Backspace: ({ dispatch, song }: ControlsArgs) => {
    if (song) {
      song.src = "";
      song.load;
    }
    dispatch({ type: ActionTypes.setTrack, payload: undefined });
  },
};

const debugKeyboardEvent = (e: KeyboardEvent) => {
  const {
    altKey,
    composed,
    ctrlKey,
    isComposing,
    key,
    location,
    metaKey,
    shiftKey,
    type,
  } = e;

  const test = {
    altKey,
    composed,
    ctrlKey,
    isComposing,
    key,
    location,
    metaKey,
    shiftKey,
    type,
  };

  console.log(JSON.stringify(test));
};

const handleKeyDown = ({ e, dispatch, song }: HandleKeyDownProps) => {
  debugKeyboardEvent(e);

  if (e.repeat) {
    return;
  }

  // pause
  if (e.key === " " && song) {
    if (song.paused) {
      song.play();
    } else {
      song.pause();
    }
  }

  // controls
  if (e.ctrlKey) {
    if (Object.keys(controls).includes(e.key)) {
      controls[e.key]({ dispatch, song });
    }
    return;
  }

  // play track
  if (Object.keys(tracks).includes(e.key)) {
    dispatch({
      type: ActionTypes.setKeypressDisplay,
      payload: e.key,
    });
    speak({
      text: e.key,
      onEnd: () => {
        dispatch({
          type: ActionTypes.setKeypressDisplay,
          payload: undefined,
        });
        dispatch({
          type: ActionTypes.setTrack,
          payload: { ...tracks[e.key], key: e.key },
        });
      },
    });
  }
};

export const useControls = () => {
  const { song, voices } = useContext(StateContext);
  const dispatch = useContext(DispatchContext);
  useEffect(() => {
    if (song && voices.length > 0) {
      document.addEventListener("keydown", (e) =>
        handleKeyDown({ e, dispatch, song })
      );

      // Don't forget to clean up
      return function cleanup() {
        document.removeEventListener("keydown", (e) =>
          handleKeyDown({ e, dispatch, song })
        );
      };
    }
  }, [song, voices]);
};
