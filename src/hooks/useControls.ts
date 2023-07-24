import { Dispatch, useContext, useEffect } from "react";

import { tracks } from "@/data/tracks";
import { DispatchContext, StateContext } from "@/state";
import { Actions, ActionTypes } from "@/state/actions";
import { speak } from "@/utils";

interface HandleKeyDownProps {
  e: KeyboardEvent;
  dispatch: Dispatch<Actions>;
}

const handleKeyDown = ({ e, dispatch }: HandleKeyDownProps) => {
  if (e.repeat || !Object.keys(tracks).includes(e.key) || e.key.length !== 1) {
    return;
  }

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
};

export const useControls = () => {
  const { song, voices } = useContext(StateContext);
  const dispatch = useContext(DispatchContext);
  useEffect(() => {
    if (song && voices.length > 0) {
      document.addEventListener("keydown", (e) =>
        handleKeyDown({ e, dispatch })
      );

      // Don't forget to clean up
      return function cleanup() {
        document.removeEventListener("keydown", (e) =>
          handleKeyDown({ e, dispatch })
        );
      };
    }
  }, [song, voices]);
};
