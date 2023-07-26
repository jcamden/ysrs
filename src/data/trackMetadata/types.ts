export interface TrackInfoLine {
  display: string[];
  tts: string;
}

export type TrackInfo = TrackInfoLine[];

// limit the color ranges for track visualization?
export interface TrackData {
  filename: string;
  path: string;
  info: TrackInfo;
}

// TODO: change URL to filename
