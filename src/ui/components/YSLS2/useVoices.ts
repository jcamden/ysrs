import { useContext, useEffect } from "react";

import { DispatchContext, StateContext } from "@/state";
import { ActionTypes } from "@/state/actions";

export const useVoices = () => {
  const dispatch = useContext(DispatchContext);
  const { voices } = useContext(StateContext);

  useEffect(() => {
    speechSynthesis.addEventListener("voiceschanged", () => {
      const voices = window.speechSynthesis.getVoices();
      dispatch({
        type: ActionTypes.setVoices,
        payload: voices,
      });
    });
  }, [voices]);

  return { voices };
};
