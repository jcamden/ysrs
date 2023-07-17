import { StateInterface } from './state';

export const updates = {
  setUser: (state: StateInterface, payload: string) => ({
    ...state,
    user: payload,
  }),
  addGlobalAlert: (state: StateInterface, payload: Error) => ({
    ...state,
    globalAlerts: [...state.globalAlerts, payload],
  }),
};
