export interface TrackInfoLine {
  display: string[];
  tts: string;
}

export type TrackInfo = TrackInfoLine[];

export interface TrackData {
  filename: string;
  path: string;
  info: TrackInfo;
}

// TODO: change URL to filename
