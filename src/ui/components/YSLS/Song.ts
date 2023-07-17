import { useContext, useEffect } from "react";

// import { StateContext } from '@djinndex/app/src';

export const Song = () => {
  // const state = useContext(StateContext);

  // useEffect(() => {}, []);

  const myAudio = new Audio();
  const playAudio = () => {
    myAudio.src = "/tracks/Tchaikovsky - Nutcracker - Overture.mp3";
    myAudio.play();
  };
  // functionpauseAudio(){
  //   alert('Now the audio will pause')
  //  myAudio.pause();
  //  }

  playAudio();
};
