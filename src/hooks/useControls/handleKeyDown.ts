import { tracks } from "@/data";
import { ActionTypes } from "@/state/actions";
import { speak } from "@/utils";

import { controls } from "./controls";
import { HandleKeyDownProps } from "./types";

export const handleKeyDown = ({ e, dispatch, song }: HandleKeyDownProps) => {
  // debugKeyboardEvent(e);

  if (e.repeat) {
    return;
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
        setTimeout(() => {
          dispatch({
            type: ActionTypes.setKeypressDisplay,
            payload: undefined,
          });
          dispatch({
            type: ActionTypes.setTrack,
            payload: { ...tracks[e.key], key: e.key },
          });
        }, 1500);
      },
    });
  }
};
