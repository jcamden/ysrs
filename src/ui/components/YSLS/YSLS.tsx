"use client";

import {
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { useTheme } from "next-themes";

import { DispatchContext, StateContext } from "@/state";
import { ActionTypes } from "@/state/actions";
import { animated, easings, useSpring } from "@react-spring/web";

import { speak } from "./speak";

import "./char.css";

// import { ThemeChanger } from '../../organisms';

interface HandleKeyDown {
  e: KeyboardEvent;
  song?: HTMLAudioElement;
  voices: SpeechSynthesisVoice[];
  setCurrentKey: Dispatch<SetStateAction<string>>;
}
const handleKeyDown = ({ e, song, voices, setCurrentKey }: HandleKeyDown) => {
  if (voices.length !== 0 && e.key.length === 1 && song) {
    setCurrentKey(e.key);
    speak(e.key);
    song.src = "/songs/Tchaikovsky - Nutcracker - Overture.mp3";
    song.play();
  }
};

export const YSLS = () => {
  const { setTheme } = useTheme();

  const [loaded, setLoaded] = useState(false);
  const [currentKey, setCurrentKey] = useState("");

  const dispatch = useContext(DispatchContext);
  const { song, voices } = useContext(StateContext);

  const { x } = useSpring({
    from: {
      x: 0,
    },
    to: {
      x: 100,
    },
    delay: 0,
    config: {
      duration: 1000,
      easing: easings.easeOutCirc,
    },
  });

  useEffect(() => {
    speechSynthesis.addEventListener("voiceschanged", () => {
      const voices = window.speechSynthesis.getVoices();
      dispatch({
        type: ActionTypes.setVoices,
        payload: voices,
      });
    });
  }, [voices]);

  useEffect(() => {
    dispatch({ type: ActionTypes.setSong, payload: new Audio() });
  }, []);

  useEffect(() => {
    setTheme("dark");
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 1000);
  }, []);

  useEffect(() => {
    if (song && voices.length > 0) {
      document.addEventListener("keydown", (e) =>
        handleKeyDown({ e, song, voices, setCurrentKey })
      );

      // Don't forget to clean up
      return function cleanup() {
        document.removeEventListener("keydown", (e) =>
          handleKeyDown({ e, song, voices, setCurrentKey })
        );
      };
    }
  }, [song, voices]);

  return (
    <div>
      {/* <ThemeChanger /> */}

      {voices.length === 0 || !loaded ? (
        <div className="flex flex-col justify-center items-center">
          <div>Loading...</div>
          <div className="rounded-full">
            <animated.progress
              className="progress progress-primary w-56 rounded-full"
              value={x}
              max="100"
            ></animated.progress>
          </div>
        </div>
      ) : (
        <>
          {currentKey ? (
            <div>
              <div className="char-bg font-ubuntu">
                {currentKey.toUpperCase()}
              </div>
              <div
                className="char text-white font-ubuntu"
                style={{
                  fontSize: "32rem",
                  lineHeight: "0",
                  marginTop: "-23.5rem",
                  marginLeft: "1rem",
                }}
              >
                {currentKey.toUpperCase()}
              </div>
            </div>
          ) : (
            <div className="text-8xl font-ubuntu text-center">
              Welcome to <br /> Yaryar Symphonic Research Suite!
            </div>
          )}
          {/* {voices.map((voice, index) => (
            <div key={index + voice.name}>
              {index + ' '}
              {voice.name}
            </div>
          ))} */}
        </>
      )}
    </div>
  );
};
