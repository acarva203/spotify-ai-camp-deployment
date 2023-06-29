import React, { useRef, useState, useEffect } from 'react';

type SpotifyComponentProps = {
  previewUrl: string;
  trackName: string;
  artistName: string;
  trackImage: string;
  isSelected: boolean;
  onClick: () => void; // onClick prop
  // onUnselect: () => void; // onUnselect prop
};


const SpotifyComponent: React.FC<SpotifyComponentProps> = ({
  previewUrl,
  trackName,
  artistName,
  trackImage,
  isSelected,
  onClick, // onClick prop
}) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        // Add logic to stop all other songs from playing 
        console.log("previewURL: ", previewUrl)
        audio.play().catch((error) => console.error("playback failed", error));
      }
      setIsPlaying(!isPlaying);
    } else {
      console.log("Failed previewURL: ", previewUrl)
      console.log("No audio previewURL")
    }

  };

  console.log("isSelected:", isSelected)

  return (
<div className={`card card-compact w-64 bg-base-100 shadow-sm ${isSelected ? 'selected-border' : ''}`}>
  <figure><img src={trackImage} alt={trackName} /></figure>
  <div className="card-body">
    <h2 className="card-title">{trackName}</h2>
    <p>{artistName}</p>
    <audio ref={audioRef} src={previewUrl} className="wFull mt4" onError={(e) => console.error('Audio error', e)} />
    <div className="card-actions justify-center">
      <div className="mr-4 card-actions justify-start">
        <button className="btn btn-primary" onClick={togglePlayPause}>{isPlaying ? 'Pause' : 'Play'}</button>
      </div>
      <div className="card-actions justify-end">
        <button className="btn btn-primary" onClick={onClick}>{isSelected ? 'Unselect' : 'Select'}</button>
      </div>
    </div>
  </div>
</div>
  );
};

export default SpotifyComponent;
