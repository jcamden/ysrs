import { Bach__Brandenburg_Concerto_No_4_I_Allegro } from "./trackMetadata/Bach_Brandenbug-Concerto_No-4-I-Allegro";
import {
  Bach__Brandenburg_Concerto_No_1_I_Allegro,
  Bach__Brandenburg_Concerto_No_1_III_Allegro,
  Bach__Brandenburg_Concerto_No_1_IV_Menuetto,
  Bach__Brandenburg_Concerto_No_2_III_Allegro_assai,
  Bach__Brandenburg_Concerto_No_3_I_Allegro_moderato,
  Bach__Brandenburg_Concerto_No_3_III_Allegro,
  Bach__Brandenburg_Concerto_No_4_III_Presto,
  Bach__Brandenburg_Concerto_No_6_III_Allegro,
  Debussy__Reverie_for_Oboe_and_Harp,
  Paul_McCartney__Silly_Love_Songs,
  Shining_Force_II__Dwarf,
  Shining_Force_II__Elven_Town,
  Shining_Force_II__Warrior_of_the_Resurrection_Light,
  Shining_Force_II__Welcome_to_our_Town,
  Shining_Force_II__Wings,
  Stream_of_Praise__Jesus_Youre_In_MyHeart,
  Stream_of_Praise__Love_The_Lord_Your_God,
  Stream_of_Praise__The_Sun_is_Shining_Now,
  Tchaikovsky__The_Nutcracker__Dance_of_the_Sugar_Plum_Fairy,
  Tchaikovsky__The_Nutcracker__Entertainment_and_Dance_of_the_Chayotes,
  Tchaikovsky__The_Nutcracker__Entertainment_and_Russian_Trepak_Dance,
  Tchaikovsky__The_Nutcracker__March,
  Tchaikovsky__The_Nutcracker__Overture,
  Tchaikovsky__The_Nutcracker__Waltz_of_the_Flowers,
  TrackData,
  Vivaldi__Autumn_I,
  Vivaldi__Spring_I,
  Vivaldi__Spring_III,
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
  "3": Bach__Brandenburg_Concerto_No_1_IV_Menuetto,
  "4": Bach__Brandenburg_Concerto_No_2_III_Allegro_assai,
  "5": Bach__Brandenburg_Concerto_No_3_I_Allegro_moderato,
  "6": Bach__Brandenburg_Concerto_No_3_III_Allegro,
  "7": Bach__Brandenburg_Concerto_No_4_I_Allegro,
  "8": Bach__Brandenburg_Concerto_No_4_III_Presto,
  "9": Bach__Brandenburg_Concerto_No_6_III_Allegro,
  "0": Vivaldi__Spring_I,
  "-": Vivaldi__Spring_III,
  "=": Vivaldi__Autumn_I,
  //
  q: Tchaikovsky__The_Nutcracker__Overture,
  w: Tchaikovsky__The_Nutcracker__Dance_of_the_Sugar_Plum_Fairy,
  e: Tchaikovsky__The_Nutcracker__Entertainment_and_Russian_Trepak_Dance,
  r: Tchaikovsky__The_Nutcracker__Entertainment_and_Dance_of_the_Chayotes,
  t: Tchaikovsky__The_Nutcracker__March,
  y: Tchaikovsky__The_Nutcracker__Waltz_of_the_Flowers,
  u: Shining_Force_II__Warrior_of_the_Resurrection_Light,
  i: Shining_Force_II__Welcome_to_our_Town,
  o: Shining_Force_II__Dwarf,
  p: Shining_Force_II__Elven_Town,
  "[": Shining_Force_II__Wings,
  "]": Paul_McCartney__Silly_Love_Songs,
  //
};
