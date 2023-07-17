export enum ActionTypes {
  setVoices = "setVoices",
  addGlobalAlert = "addGlobalAlert",
  setSong = "setSong",
}

export type Actions =
  | { type: ActionTypes.setVoices; payload: SpeechSynthesisVoice[] }
  | { type: ActionTypes.addGlobalAlert; payload: Error }
  | { type: ActionTypes.setSong; payload: HTMLAudioElement };
