export interface TrackInfoLine {
  display: string[];
  tts: string;
}

export type TrackInfo = TrackInfoLine[];

const tracksURL = "/tracks/";

export interface TrackData {
  url: string;
  info: TrackInfo;
}

interface Tracks {
  [key: string]: TrackData;
}

export const tracks: Tracks = {
  F1: {
    url: `${tracksURL}Stream of Praise - Jesus, You're In My Heart.mp3`,
    info: [
      {
        display: ["Jesus,", "You're In My Heart"],
        tts: "Jesus, You're In My Heart",
      },
      {
        display: ["Stream of Praise"],
        tts: "by Stream of Praise",
      },
    ],
  },
  F2: {
    url: `${tracksURL}Stream of Praise - Love The Lord Your God.mp3`,
    info: [
      {
        display: ["Love The Lord,", "Your God"],
        tts: "Love The Lord Your God",
      },
      {
        display: ["Stream of Praise"],
        tts: "by Stream of Praise",
      },
    ],
  },
  F3: {
    url: `${tracksURL}Stream of Praise - The Sun is Shining Now.mp3`,
    info: [
      {
        display: ["The Sun is,", "Shining Now"],
        tts: "The Sun is Shining Now",
      },
      {
        display: ["Stream of Praise"],
        tts: "by Stream of Praise",
      },
    ],
  },
  F4: {
    url: `${tracksURL}Debussy - Rêverie pour Hautbois et Harpe.mp3`,
    info: [
      {
        display: ["Reverie for ", "Oboe and Harpe"],
        tts: "Reverie for Oboe and Harp",
      },
      {
        display: ["Debussy"],
        tts: "by dehbyoosee",
      },
    ],
  },
  "1": {
    url: `${tracksURL}Bach - Brandenburg Concerto - No 1, I Allegro.mp3`,
    info: [
      {
        display: ["No 1, I Allegro"],
        tts: "#1, 1 Allegro",
      },
      {
        display: ["Brandenburg", "Concertos"],
        tts: "from Brandenburg Concertos",
      },
      {
        display: ["Bach"],
        tts: "by Bach",
      },
    ],
  },

  // TODO: custom gradients for each track
  q: {
    url: `${tracksURL}Tchaikovsky - Nutcracker - Overture.mp3`,
    info: [
      {
        display: ["Overture"],
        tts: "Overture",
      },
      { display: ["The Nutcracker"], tts: "from The Nutcracker" },
      { display: ["Tchaikovsky"], tts: "by Tchaikovsky" },
    ],
  },
  w: {
    url: `${tracksURL}Tchaikovsky - Nutcracker - Dance of the Sugar Plum Fairy.mp3`,
    info: [
      {
        display: ["Dance of the", "Sugar Plum Fairy"],
        tts: "Dance of the Sugar Plum Fairy",
      },
      { display: ["The Nutcracker"], tts: "from The Nutcracker" },
      { display: ["Tchaikovsky"], tts: "by Tchaikovsky" },
    ],
  },
  r: {
    url: `${tracksURL}Tchaikovsky - Nutcracker - Entertainment and Dance of the Chayotes.mp3`,
    info: [
      {
        display: ["Entertainment and", "Dance of the Chayotes"],
        tts: "Entertainment and Dance of the Chayotes",
      },
      { display: ["The Nutcracker"], tts: "from The Nutcracker" },
      { display: ["Tchaikovsky"], tts: "by Tchaikovsky" },
    ],
  },
};
