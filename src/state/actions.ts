export enum ActionTypes {
  setUser = 'setUser',
  addGlobalAlert = 'addGlobalAlert',
}

export type Actions =
  | { type: ActionTypes.setUser; payload: string }
  | { type: ActionTypes.addGlobalAlert; payload: Error };
