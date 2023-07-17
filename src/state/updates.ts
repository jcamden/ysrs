import { StateInterface } from "./state";

export const updates = {
  setSong: (state: StateInterface, payload: HTMLAudioElement) => ({
    ...state,
    song: payload,
  }),
  setVoices: (state: StateInterface, payload: SpeechSynthesisVoice[]) => ({
    ...state,
    voices: payload,
  }),
  addGlobalAlert: (state: StateInterface, payload: Error) => ({
    ...state,
    globalAlerts: [...state.globalAlerts, payload],
  }),
};
