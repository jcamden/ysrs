"use client";

import {
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { useTheme } from "next-themes";
import { v4 as uuidv4 } from "uuid";

import { DispatchContext, StateContext } from "@/state";
import { ActionTypes } from "@/state/actions";
import { animated, easings, useSpring } from "@react-spring/web";

import { Char } from "./Char";
import { speak } from "./speak";
import { tracks } from "./tracks";

import "./char.css";

// import { ThemeChanger } from '../../organisms';

interface HandleKeyDown {
  e: KeyboardEvent;
  song?: HTMLAudioElement;
  voices: SpeechSynthesisVoice[];
  setCurrentKey: Dispatch<SetStateAction<string>>;
  setCurrentDisplay: Dispatch<SetStateAction<JSX.Element[] | null>>;
}

const handleKeyDown = ({
  e,
  song,
  voices,
  setCurrentKey,
  setCurrentDisplay,
}: HandleKeyDown) => {
  if (
    e.repeat ||
    !song ||
    !Object.keys(tracks).includes(e.key) ||
    voices.length === 0 ||
    e.key.length !== 1
  ) {
    return;
  }

  const track = tracks[e.key];
  const { info } = track;

  setCurrentKey(e.key);

  const playTrack = (e: SpeechSynthesisEvent) => {
    song.src = track.url;
    song.play();
    song.addEventListener("ended", (e: Event) => {
      setCurrentKey("");
      setCurrentDisplay(null);
    });
  };

  let index = -1;
  let localDisplay: JSX.Element[] = [];
  info.forEach(() =>
    localDisplay.push(
      <>
        <br />
      </>
    )
  );

  const playTrackText = (e: SpeechSynthesisEvent) => {
    index++;
    localDisplay[index] = info[index].display;
    localDisplay = [...localDisplay];

    setCurrentDisplay(localDisplay);
    speak({
      text: info[index].tts,
      rate: 0.8,
      onEnd: index < info.length - 1 ? playTrackText : playTrack,
    });
  };

  speak({ text: e.key, onEnd: playTrackText });
};

export const YSLS = () => {
  const { setTheme } = useTheme();

  const [loaded, setLoaded] = useState(false);
  const [currentKey, setCurrentKey] = useState("");
  const [currentDisplay, setCurrentDisplay] = useState<JSX.Element[] | null>(
    null
  );

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
        handleKeyDown({
          e,
          setCurrentDisplay,
          setCurrentKey,
          song,
          voices,
        })
      );

      // Don't forget to clean up
      return function cleanup() {
        document.removeEventListener("keydown", (e) =>
          handleKeyDown({
            e,
            setCurrentDisplay,
            setCurrentKey,
            song,
            voices,
          })
        );
      };
    }
  }, [song, voices]);

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      {/* <ThemeChanger /> */}

      {voices.length === 0 || !loaded ? (
        <div className="h-full flex flex-col justify-center items-center">
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
          {currentDisplay ? (
            <div className="flex flex-col justify-center items-center text-9xl font-ubuntu font-bold">
              {currentDisplay.map((trackElement, index) => (
                <>
                  <div
                    key={uuidv4()}
                    className={`${
                      index === 0
                        ? ""
                        : currentDisplay.length > 3
                        ? "mt-16"
                        : "mt-24"
                    } char-bg`}
                  >
                    {trackElement}
                  </div>
                  <div
                    key={uuidv4()}
                    className="shadow"
                    style={{
                      marginTop: "-7.5rem",
                      marginLeft: "0.8rem",
                      textShadow: "rgb(0, 0, 0) -3px -7px 0px",
                    }}
                  >
                    {trackElement}
                  </div>
                </>
              ))}
            </div>
          ) : currentKey ? (
            <Char>{currentKey}</Char>
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
