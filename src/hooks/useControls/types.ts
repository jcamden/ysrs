import { Dispatch } from "react";

import { Actions } from "@/state/actions";

export interface HandleKeyDownProps {
  e: KeyboardEvent;
  dispatch: Dispatch<Actions>;
  song: HTMLAudioElement | undefined;
}

export interface ControlsArgs {
  dispatch: Dispatch<Actions>;
  song: HTMLAudioElement | undefined;
}
