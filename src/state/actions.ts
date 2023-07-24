import { Track } from "./state";

export enum ActionTypes {
  addGlobalAlert = "addGlobalAlert",
  setKeypressDisplay = "setKeypressDisplay",
  setSong = "setSong",
  setTrack = "setTrack",
  setVoices = "setVoices",
}

export type Actions =
  | { type: ActionTypes.addGlobalAlert; payload: Error }
  | { type: ActionTypes.setKeypressDisplay; payload: string | undefined }
  | { type: ActionTypes.setSong; payload: HTMLAudioElement }
  | { type: ActionTypes.setTrack; payload: Track | undefined }
  | { type: ActionTypes.setVoices; payload: SpeechSynthesisVoice[] };
