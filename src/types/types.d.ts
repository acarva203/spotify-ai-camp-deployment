type TrackInfoType = {
  trackName: string;
  artistName: string;
  previewUrl: string;
  trackImage: string;
  trackId: string | null;
  explicit: boolean | null;
  danceability: number | null;
  energy: number | null;
  key: number | null;
  loudness: number | null;
  mode: number | null;
  speechiness: number | null;
  acousticness: number | null;
  instrumentalness: number | null;
  liveness: number | null;
  valence: number | null;
  tempo: number | null;
  render: boolean;
};

type TrackInfoResponse = {
  trackName: string;
  artistName: string;
  previewUrl: string;
  trackImage: string;
  trackId: string | null;
  Explicit: boolean | null;
  Danceability: number | null;
  Energy: number | null;
  Key: number | null;
  Loudness: number | null;
  Mode: number | null;
  Speechiness: number | null;
  Acousticness: number | null;
  Instrumentalness: number | null;
  Liveness: number | null;
  Valence: number | null;
  Tempo: number | null;
  Render: boolean;
};

type Message = {
  trackName: string;
  message: string;
}