import { ActionTypes } from "@/state/actions";

import { ControlsArgs } from "./types";

export const controls: { [key: string]: (args: ControlsArgs) => void } = {
  Backspace: ({ dispatch, song }: ControlsArgs) => {
    if (song) {
      song.src = "";
      song.load;
    }
    dispatch({ type: ActionTypes.setTrack, payload: undefined });
  },
};
