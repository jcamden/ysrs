import { tracksClassical } from "@/data";
import { ActionTypes } from "@/state/actions";
import { speak } from "@/utils";

import { controls } from "./controls";
import { HandleKeyDownProps } from "./types";

interface KeySpeech {
  display: string;
  speech: string;
}

const keySpeeches: { [key: string]: KeySpeech } = {
  a: {
    display: `APPLE`,
    speech: "a, p, p, l, e. Apple. Apple starts with a.",
  },
  b: {
    display: `BALL`,
    speech: "b, a, l, l. Ball. Ball starts with b.",
  },
  c: {
    display: `CAR`,
    speech: "c, a, r. Car. Car starts with c.",
  },
  d: {
    display: `DAD`,
    speech: "d, a, d. Dad. Dad starts with d.",
  },
  e: {
    display: `EGG`,
    speech: "e, g, g. Egg. Egg starts with e.",
  },
  f: {
    display: `FISH`,
    speech: "f, i, s, h. Fish. Fish starts with f.",
  },
  g: {
    display: `GO`,
    speech: "g, o. Go. Go starts with g.",
  },
  h: {
    display: `HAND`,
    speech: "h, a, n, d. Hand. Hand starts with h.",
  },
  i: {
    display: `IT`,
    speech: "i, t. It. It starts with i.",
  },
  j: {
    display: `JUMP`,
    speech: "j, u, m, p . Jump. Jump starts with j.",
  },
  k: {
    display: `KEY`,
    speech: "k, e, y. Key. Key starts with k.",
  },
  l: {
    display: `LOVE`,
    speech: "l, o, v, e. Love. Love starts with l.",
  },
  m: {
    display: `MOM`,
    speech: "m, o, m. Mom. Mom starts with m.",
  },
  n: {
    display: `NO`,
    speech: "n, o. No . No starts with n.",
  },
  o: {
    display: `ON`,
    speech: "o, n. On. On starts with n.",
  },
  p: {
    display: `PARK`,
    speech: "p, a, r, k. Park. Park starts with p.",
  },
  q: {
    display: `QUIET`,
    speech: "q, u, i, e, t. Quiet. Quiet starts with q.",
  },
  r: {
    display: `RED`,
    speech: "r, e, d. Red. Red starts with r.",
  },
  s: {
    display: `SKY`,
    speech: "s, k, y. Sky. Sky starts with s.",
  },
  t: {
    display: `TOWN`,
    speech: "t, o, w, n. Town. Town starts with t.",
  },
  u: {
    display: `UP`,
    speech: "u, p . Up. Up starts with u.",
  },
  v: {
    display: `VERY`,
    speech: "v, e, r, y. Very. Very starts with v.",
  },
  w: {
    display: `WHEEL`,
    speech: "w, h, e, e, l. Wheel. Wheel starts with w.",
  },
  x: {
    display: `X-RAY`,
    speech: "x, dash, r, a, y. X-ray. X-ray starts with X.",
  },
  y: {
    display: `YARYAR`,
    speech: "y, a, r, y, a, r. Yar yar. Yar yar starts with y.",
  },
  z: {
    display: `ZIP`,
    speech: "z, i, p, zip. Zip starts with z.",
  },
};

export const handleKeyDown = ({ e, dispatch, song }: HandleKeyDownProps) => {
  // debugKeyboardEvent(e);

  const { key } = e;

  if (e.repeat) {
    return;
  }

  // controls
  if (e.ctrlKey) {
    if (Object.keys(controls).includes(key)) {
      controls[key]({ dispatch, song });
    }
    return;
  }

  // play track
  if (Object.keys(tracksClassical).includes(key)) {
    const keySpeech = keySpeeches[key];

    dispatch({
      type: ActionTypes.setKeypressDisplay,
      payload: key,
    });
    speak({
      text: key,
      onEnd: () => {
        if (keySpeech) {
          setTimeout(() => {
            dispatch({
              type: ActionTypes.setKeypressDisplay,
              payload: keySpeech.display,
            });
          }, 1000);
        } else {
          setTimeout(() => {
            dispatch({
              type: ActionTypes.setKeypressDisplay,
              payload: undefined,
            });
            dispatch({
              type: ActionTypes.setTrack,
              payload: { ...tracksClassical[key], key: key },
            });
          }, 1500);
        }
      },
    });

    setTimeout(() => {
      if (keySpeech) {
        speak({
          text: keySpeech.speech,
          onEnd: () => {
            setTimeout(() => {
              dispatch({
                type: ActionTypes.setKeypressDisplay,
                payload: undefined,
              });
              dispatch({
                type: ActionTypes.setTrack,
                payload: { ...tracksClassical[key], key: key },
              });
            }, 2500);
          },
        });
      }
    }, 1400);
  }
};
