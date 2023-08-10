import * as tm from "./trackMetadata";

interface Tracks {
  [key: string]: tm.TrackData;
}

// TODO: custom gradients for each track
export const tracks: Tracks = {
  F1: tm.Stream_of_Praise__Jesus_Youre_In_MyHeart,
  F2: tm.Stream_of_Praise__Love_The_Lord_Your_God,
  F3: tm.Stream_of_Praise__The_Sun_is_Shining_Now,
  F4: tm.Debussy__Reverie_for_Oboe_and_Harp,
  //
  "1": tm.Bach__Brandenburg_Concerto_No_1_I_Allegro,
  "2": tm.Bach__Brandenburg_Concerto_No_1_III_Allegro,
  "3": tm.Bach__Brandenburg_Concerto_No_1_IV_Menuetto,
  "4": tm.Bach__Brandenburg_Concerto_No_2_III_Allegro_assai,
  "5": tm.Bach__Brandenburg_Concerto_No_3_I_Allegro_moderato,
  "6": tm.Bach__Brandenburg_Concerto_No_3_III_Allegro,
  "7": tm.Bach__Brandenburg_Concerto_No_4_I_Allegro,
  "8": tm.Bach__Brandenburg_Concerto_No_4_III_Presto,
  "9": tm.Bach__Brandenburg_Concerto_No_6_III_Allegro,
  "0": tm.Vivaldi__Spring_I,
  "-": tm.Vivaldi__Spring_III,
  "=": tm.Vivaldi__Autumn_I,
  //
  q: tm.Tchaikovsky__The_Nutcracker__Overture,
  w: tm.Tchaikovsky__The_Nutcracker__Dance_of_the_Sugar_Plum_Fairy,
  e: tm.Tchaikovsky__The_Nutcracker__Entertainment_and_Russian_Trepak_Dance,
  r: tm.Tchaikovsky__The_Nutcracker__Entertainment_and_Dance_of_the_Chayotes,
  t: tm.Tchaikovsky__The_Nutcracker__March,
  y: tm.Tchaikovsky__The_Nutcracker__Waltz_of_the_Flowers,
  u: tm.Shining_Force_II__Warrior_of_the_Resurrection_Light,
  i: tm.Shining_Force_II__Welcome_to_our_Town,
  o: tm.Shining_Force_II__Dwarf,
  p: tm.Shining_Force_II__Elven_Town,
  "[": tm.Shining_Force_II__Wings,
  "]": tm.Paul_McCartney__Silly_Love_Songs,
  //
  a: tm.LuluKids__Pussy_Cat_Pussy_Cat,
  s: tm.Beatles__Thank_You_Girl,
  d: tm.Tim_Hart_And_Friends__The_Grand_Old_Duke_of_York,
  f: tm.Tchaikovsky__Chanson_Napolitaine_Op_39,
  g: tm.Bach__Minuet_in_G_Major,
  h: tm.Chopin__Nocturne_Op_9_No_2,
  j: tm.Paul_McCartney__Listen_to_What_the_Man_Says,
  k: tm.Baby_Einstein_Music_Box_Orchestra__Teapot,
  l: tm.Patty_Shukla__Choo_Choo_Train,
  ";": tm.Satie__Gymnopedie_No_1,
  "'": tm.Bach__Well_Tempered_Clavier_Book_1,
};
