import { Dispatch } from "react";

import { Actions, ActionTypes } from "@/state/actions";

export const playTrack = (
  song: HTMLAudioElement,
  url: string,
  dispatch: Dispatch<Actions>
) => {
  song.src = url;
  song.play();
  song.addEventListener("ended", (e: Event) => {
    dispatch({
      type: ActionTypes.setTrack,
      payload: undefined,
    });
  });
};
