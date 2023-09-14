import * as tm from "./trackMetadata";

interface Tracks {
  [key: string]: tm.TrackData;
}

// TODO: custom gradients for each track
export const tracksClassical: Tracks = {
  //
  "`": tm.Bach__Minuet_in_G_Major,
  "1": tm.Bach__Brandenburg_Concerto_No_1_I_Allegro,
  "2": tm.Bach__Brandenburg_Concerto_No_1_III_Allegro,
  "3": tm.Bach__Brandenburg_Concerto_No_1_IV_Menuetto,
  "4": tm.Bach__Brandenburg_Concerto_No_2_III_Allegro_assai,
  "5": tm.Bach__Brandenburg_Concerto_No_3_I_Allegro_moderato,
  "6": tm.Bach__Brandenburg_Concerto_No_3_III_Allegro,
  "7": tm.Bach__Brandenburg_Concerto_No_4_I_Allegro,
  "8": tm.Bach__Brandenburg_Concerto_No_4_III_Presto,
  "9": tm.Bach__Brandenburg_Concerto_No_6_III_Allegro,
  "0": tm.Bach__Jesu_Joy_of_Mans_Desiring,
  "-": tm.Bach__Sheep_May_Safely_Graze,
  "=": tm.Bach__Air,
  //
  q: tm.Tchaikovsky__The_Nutcracker__Overture,
  w: tm.Tchaikovsky__The_Nutcracker__Dance_of_the_Sugar_Plum_Fairy,
  e: tm.Tchaikovsky__The_Nutcracker__Entertainment_and_Russian_Trepak_Dance,
  r: tm.Tchaikovsky__The_Nutcracker__Entertainment_and_Dance_of_the_Chayotes,
  t: tm.Tchaikovsky__The_Nutcracker__March,
  y: tm.Tchaikovsky__The_Nutcracker__Waltz_of_the_Flowers,
  u: tm.Tchaikovsky__Chanson_Napolitaine_Op_39,
  i: tm.Shining_Force_II__Warrior_of_the_Resurrection_Light,
  o: tm.Shining_Force_II__Welcome_to_our_Town,
  p: tm.Shining_Force_II__Dwarf,
  "[": tm.Shining_Force_II__Elven_Town,
  "]": tm.Shining_Force_II__Wings,
  //
  a: tm.Grieg__Morning_Mood,
  s: tm.Badelt__Hes_a_Pirate,
  d: tm.Faure_Pavane,
  f: tm.Boccherini__String_Quintet_in_E_Major,
  g: tm.Pachelbel__Canon,
  h: tm.Chopin__Nocturne_Op_9_No_2,
  j: tm.Handel__Water_Music,
  k: tm.Handel__Messiah,
  l: tm.Beethoven__Ode_to_Joy,
  ";": tm.Debussy__Clair_de_lune,
  "'": tm.Debussy__Reverie_for_Oboe_and_Harp,
  //
  z: tm.Mozart__Piano_Concerto_No_21,
  x: tm.Mozart__Piano_Sonata_No_11_Alla_Turca,
  c: tm.Mozart__Serenade_in_G_Major__Eine_kleine_Nachtmusik,
  v: tm.Mozart__Symphony_No_40,
  b: tm.Vivaldi__Spring_I,
  n: tm.Vivaldi__Spring_III,
  m: tm.Vivaldi__Autumn_I,
  ",": tm.Brahms__Hungarian_Dance_No_5,
  ".": tm.Brahms__16_Waltzes_No_1,
  "/": tm.Brahms__Lullaby,
};
