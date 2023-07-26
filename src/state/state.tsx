import React, {
  createContext,
  type Dispatch,
  type ReactNode,
  useReducer,
} from "react";

import { TrackData } from "@/data/trackMetadata";

import { Actions } from "./actions";
import { appReducer } from "./reducer";

export interface Track extends TrackData {
  key: string;
}

export interface StateInterface {
  globalAlerts: Error[];
  voices: SpeechSynthesisVoice[];
  song?: HTMLAudioElement;
  track?: Track;
  keypressDisplay?: string;
}

const initialState: StateInterface = {
  globalAlerts: [],
  voices: [],
};

interface StateProviderProps {
  children: ReactNode;
}

export const StateContext = createContext<StateInterface>(initialState);
export const DispatchContext = createContext<Dispatch<Actions>>(
  () => undefined
);

export const StateProvider = ({ children }: StateProviderProps) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>{children}</StateContext.Provider>
    </DispatchContext.Provider>
  );
};
