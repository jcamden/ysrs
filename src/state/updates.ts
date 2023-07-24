import { StateInterface, Track } from "./state";

export const updates = {
  setKeypressDisplay: (state: StateInterface, payload: string | undefined) => ({
    ...state,
    keypressDisplay: payload,
  }),
  setSong: (state: StateInterface, payload: HTMLAudioElement) => ({
    ...state,
    song: payload,
  }),
  setTrack: (state: StateInterface, payload: Track | undefined) => ({
    ...state,
    track: payload,
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
