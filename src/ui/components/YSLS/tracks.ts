const tracksURL = "/tracks/";

interface Tracks {
  [key: string]: {
    url: string;
    info: { display: string; tts: string }[];
  };
}

export const tracks: Tracks = {
  // TODO: custom gradients for each track
  q: {
    url: `${tracksURL}Tchaikovsky - Nutcracker - Overture.mp3`,
    info: [
      { display: "Overture", tts: "playing Overture" },
      { display: "The Nutcracker", tts: "from The Nutcracker" },
      { display: "Tchaikovsky", tts: "by Tchaikovsky" },
    ],
  },
  w: {
    url: `${tracksURL}Tchaikovsky - Nutcracker - Dance of the Sugar Plum Fairy.mp3`,
    info: [
      {
        display: "Dance of the",
        tts: "",
      },
      {
        display: "Sugar Plum Fairy",
        tts: "playing Dance of the Sugar Plum Fairy",
      },
      { display: "The Nutcracker", tts: "from The Nutcracker" },
      { display: "Tchaikovsky", tts: "by Tchaikovsky" },
    ],
  },
  r: {
    url: `${tracksURL}Tchaikovsky - Nutcracker - Entertainment and Dance of the Chayotes.mp3`,
    info: [
      {
        display: "Entertainment and",
        tts: "",
      },
      {
        display: "Dance of the Chayotes",
        tts: "playing Entertainment and Dance of the Chayotes",
      },
      { display: "The Nutcracker", tts: "from The Nutcracker" },
      { display: "Tchaikovsky", tts: "by Tchaikovsky" },
    ],
  },
};
