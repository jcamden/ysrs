import { Actions, ActionTypes } from "./actions";
import { StateInterface } from "./state";
import { updates } from "./updates";

const invalidActionPayload: Error = {
  name: "invalid action",
  message: "invalid action in global state reducer",
};
export const appReducer = (
  state: StateInterface,
  action: Actions
): StateInterface => {
  switch (action.type) {
    case ActionTypes.setKeypressDisplay:
      return updates.setKeypressDisplay(state, action.payload);
    case ActionTypes.setSong:
      return updates.setSong(state, action.payload);
    case ActionTypes.setTrack:
      return updates.setTrack(state, action.payload);
    case ActionTypes.setVoices:
      return updates.setVoices(state, action.payload);
    case ActionTypes.addGlobalAlert:
      return updates.addGlobalAlert(state, action.payload);
    default:
      return updates.addGlobalAlert(state, invalidActionPayload);
  }
};
