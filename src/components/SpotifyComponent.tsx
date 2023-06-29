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
    <div
      className={`flex1 container2 mxAuto ${isSelected ? 'border4-1-1 roundedLg-1 overflowHidden-1' : ''} w1_3`} >
      <div className="mxAuto bgWhite shadowMd roundedLg">
        <img className="wFull roundedTmd" src={trackImage} alt={trackName} />
        <div className="padding4">
          <h2 className="fontSizeLg fontWeightBold">{trackName}</h2>
          <h3 className="textGray600 textSm">{artistName}</h3>
          <audio ref={audioRef} src={previewUrl} className="wFull mt4" onError={(e) => console.error('Audio error', e)} />
          <button
            onClick={togglePlayPause}
            className="bgBlue500 textColorWhite borderRadius paddingX2 paddingY1 marginTop4 hoverBgBlue600 textSm"
          >
            {isPlaying ? 'Pause' : 'Play'}
          </button>
          <button
            onClick={onClick}
            className="bgBlue500 textColorWhite borderRadius paddingX2 paddingY1 marginTop4 hoverBgBlue600 textSm right-align"
          >
            {isSelected ? 'Unselect' : 'Select'}
          </button>
        </div>
      </div>
    </div>

  );
};

export default SpotifyComponent;
