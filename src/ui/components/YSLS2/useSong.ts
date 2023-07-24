import { useContext, useEffect } from "react";

import { DispatchContext, StateContext } from "@/state";
import { ActionTypes } from "@/state/actions";

export const useSong = () => {
  const dispatch = useContext(DispatchContext);
  const { song } = useContext(StateContext);

  useEffect(() => {
    dispatch({ type: ActionTypes.setSong, payload: new Audio() });
  }, []);

  return { song };
};
