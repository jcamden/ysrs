"use client";

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useTheme } from "next-themes";

import { animated, easings, useSpring } from "@react-spring/web";

import { speak } from "./speak";

import "./char.css";

// import { ThemeChanger } from '../../organisms';

const handleKeyDown = (
  e: KeyboardEvent,
  voices: SpeechSynthesisVoice[],
  setCurrentKey: Dispatch<SetStateAction<string>>
) => {
  //   alert(e.key);
  if (voices.length === 0 && e.key.length === 1) {
    setCurrentKey(e.key);
    speak(e.key);
  }
};

export const YSLS = () => {
  const { setTheme } = useTheme();
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [currentKey, setCurrentKey] = useState("");

  const { x } = useSpring({
    from: {
      x: 0,
    },
    to: {
      x: 100,
    },
    delay: 0,
    config: {
      // mass: 1,
      // tension: 100,
      // friction: 10,
      duration: 1000,
      easing: easings.easeOutCirc,
    },
  });

  useEffect(() => {
    if (voices.length === 0) {
      setVoices(window.speechSynthesis.getVoices());
    }
  }, [voices]);

  console.log(voices);

  useEffect(() => {
    setTheme("dark");
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 1000);
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", (e) =>
      handleKeyDown(e, voices, setCurrentKey)
    );

    // Don't forget to clean up
    return function cleanup() {
      document.removeEventListener("keydown", (e) =>
        handleKeyDown(e, voices, setCurrentKey)
      );
    };
  }, []);

  return (
    <div>
      {/* <ThemeChanger /> */}

      {voices.length === 0 || !loaded ? (
        <div className="flex flex-col justify-center items-center">
          <div>Loading voices...</div>
          <animated.progress
            className="progress-secondary w-56"
            value={x}
            max="100"
          ></animated.progress>
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
            <div> Welcome to Yaryar Symphonic Research Suite!</div>
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
