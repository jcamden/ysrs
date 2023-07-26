import {
  Bach__Brandenburg_Concerto_No_1_I_Allegro,
  Bach__Brandenburg_Concerto_No_1_III_Allegro,
  Debussy__Reverie_for_Oboe_and_Harp,
  Stream_of_Praise__Jesus_Youre_In_MyHeart,
  Stream_of_Praise__Love_The_Lord_Your_God,
  Stream_of_Praise__The_Sun_is_Shining_Now,
  Tchaikovsky__The_Nutcracker__Dance_of_the_Sugar_Plum_Fairy,
  Tchaikovsky__The_Nutcracker__Entertainment_and_Dance_of_the_Chayotes,
  Tchaikovsky__The_Nutcracker__Overture,
  TrackData,
} from "./trackMetadata";

interface Tracks {
  [key: string]: TrackData;
}


// TODO: custom gradients for each track
export const tracks: Tracks = {
  F1: Stream_of_Praise__Jesus_Youre_In_MyHeart,
  F2: Stream_of_Praise__Love_The_Lord_Your_God,
  F3: Stream_of_Praise__The_Sun_is_Shining_Now,
  F4: Debussy__Reverie_for_Oboe_and_Harp,
  //
  "1": Bach__Brandenburg_Concerto_No_1_I_Allegro,
  "2": Bach__Brandenburg_Concerto_No_1_III_Allegro,
  //
  q: Tchaikovsky__The_Nutcracker__Overture,
  w: Tchaikovsky__The_Nutcracker__Dance_of_the_Sugar_Plum_Fairy,
  r: Tchaikovsky__The_Nutcracker__Entertainment_and_Dance_of_the_Chayotes,
};
