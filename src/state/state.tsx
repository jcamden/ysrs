import React, {
  createContext,
  type Dispatch,
  type ReactNode,
  useReducer,
} from 'react';

import { Actions } from './actions';
import { appReducer } from './reducer';

export interface StateInterface {
  globalAlerts: Error[];
  user?: string;
}

const initialState: StateInterface = {
  globalAlerts: [],
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
