import { controls } from "./controls";
import { HandleKeyDownProps } from "./types";

export const handleKeyDownWithTrack = ({
  dispatch,
  e,
  song,
}: HandleKeyDownProps) => {
  console.log(song);

  if (e.repeat) {
    return;
  }

  if (e.ctrlKey) {
    if (Object.keys(controls).includes(e.key)) {
      controls[e.key]({ dispatch, song });
    }
    return;
  }

  // pause
  if (e.key === " " && song) {
    if (song.paused) {
      song.play();
    } else {
      song.pause();
    }
  }

  // if array.includes(e.key) change colors
};
