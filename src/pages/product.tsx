import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios'
import SpotifyComponent from '@components/SpotifyComponent'
import ChatGPT from '@components/ChatGPT'

import { ScrollArea, ScrollBar } from "@components/ui/scroll-area"
import { Separator } from "@components/ui/separator"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@components/ui/tabs"

import { Button } from "@components/ui/button"

function ProductPage() {
  const [songs, setSongs] = useState<TrackInfoType[] | null>([{
    trackName: 'Test Track *Change after testing',
    artistName: 'Test Artist',
    previewUrl: 'https://p.scdn.co/mp3-preview/5d4c6f0b903074f5cc6cef58d2c2f67abb179d75?cid=f74d125a75774bb886fea891b2324a1a',
    spotifyUrl: 'https://open.spotify.com/track/5d4c6f0b903074f5cc6cef58d2c2f67abb179d75',
    trackImage: 'https://i.scdn.co/image/ab67616d0000b2732aa56b66dfc0e631ceca0ce2',
    trackId: null,
    explicit: null,
    danceability: null,
    energy: null,
    key: null,
    loudness: null,
    mode: null,
    speechiness: null,
    acousticness: null,
    instrumentalness: null,
    liveness: null,
    valence: null,
    tempo: null,
    render: false,
  }]);
  const [selectedSong, setSelectedSong] = useState<TrackInfoType | null>(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [message, setMessage] = useState({ text: 'Hello! You are one click away from finding your dream song. To get started, pick a song you like the most.' });
  const [isLoading, setIsLoading] = useState(false)
  const [isLoadingRecommended, setIsLoadingRecommended] = useState(false)
  const [button, setButton] = useState(false)
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [songFound, setSongFound] = useState(false)

  useEffect(() => {
    const fetchTestData = async () => {
      setIsLoading(true); // Set loading state to true before API call
      setSongs(null); // Clear songs state before API call
      try {
        const response = await axios.get('https://codermantester234.pythonanywhere.com/api/get-5-songs');
        // const response = await axios.get('http://localhost:5000/api/get-5-songs');
        // const response = await axios.get('/api/get-5-songs');
        console.log(response);
  
        const { data } = response;
        const tracks = data.tracks.map((track: TrackInfoResponse) => ({
          trackName: track.trackName,
          artistName: track.artistName,
          previewUrl: track.previewUrl,
          spotifyUrl: track.spotifyUrl,
          trackImage: track.trackImage,
          trackId: track.trackId,
          explicit: track.Explicit,
          danceability: track.Danceability,
          energy: track.Energy,
          key: track.Key,
          loudness: track.Loudness,
          mode: track.Mode,
          speechiness: track.Speechiness,
          acousticness: track.Acousticness,
          instrumentalness: track.Instrumentalness,
          liveness: track.Liveness,
          valence: track.Valence,
          tempo: track.Tempo,
          render: true,
        }));
  
        setSongs(tracks);
      } catch (error) {
        console.error(error);
        setErrorMessage("Error retrieving songs, please try again later")
      } finally {
        setIsLoading(false); // Set loading state to false after API call completes
      }
    };
  
    fetchTestData();
  }, [button]);
  
  const getNewRecommendedSongs = async () => {
    try {
      if (selectedSong) {
        setIsButtonDisabled(true);
        setMessage({text: `Ah, ${selectedSong.trackName}, great choice! Please wait while I find some songs for you...`});

        setSongs(null)
        setIsLoading(true)
        setIsLoadingRecommended(true)

        const response = await axios.post(
          'https://codermantester234.pythonanywhere.com/api/get-chosen-song-give-reccomended-songs',
          // 'http://localhost:5000/api/get-chosen-song-give-reccomended-songs',
          // '/api/get-chosen-song-give-reccomended-songs',
          {
            track: selectedSong, // Pass the selected song as the request body
          },
        );

        console.log("Requested!")

        const { data } = response;
        const recommendedSongs = data.tracks.map((track: TrackInfoResponse) => ({
          trackName: track.trackName,
          artistName: track.artistName, // Replace with the actual artist name if available
          previewUrl: track.previewUrl,
          spotifyUrl: track.spotifyUrl,
          trackImage: track.trackImage,
          trackId: track.trackId,
          explicit: track.Explicit,
          danceability: track.Danceability,
          energy: track.Energy,
          key: track.Key,
          loudness: track.Loudness,
          mode: track.Mode,
          speechiness: track.Speechiness,
          acousticness: track.Acousticness,
          instrumentalness: track.Instrumentalness,
          liveness: track.Liveness,
          valence: track.Valence,
          tempo: track.Tempo,
          render: true,
        }))

        setErrorMessage("")
        setMessage({text: `Here are some songs I think you might like. Have fun trying them out!`})
        setSongs(recommendedSongs)
        setIsLoading(false)
        setIsLoadingRecommended(false)
        setSongFound(true)
        setIsButtonDisabled(false)
        // Do something with the recommended songs

      } else {
        // Handle the case when no song is selected
        setErrorMessage("Please select a favorite song")
      }
    } catch (error) {
      // Handle any errors that occur during the request
      console.error('Error retrieving recommended songs:', error);
    }
  };

  const handleSongSelect = (song: TrackInfoType) => {
    if (selectedSong && selectedSong.trackId === song.trackId) {
      setSelectedSong(null); // Unselect the song
    } else {
      setSelectedSong(song);
    }
  };

  const getNewSongs = () => {
    setButton(!button);
    setSongFound(false);
    setIsButtonDisabled(true);
    setTimeout(() => setIsButtonDisabled(false), 30000); // 30000 milliseconds = 30 seconds
  };  
  
  // console.log(songs)
  // console.log(selectedSong)

  return (
    <div>
      <div>
        <div className="flex flex-col items-center justify-center marginY4 padding4 bgGray100">
          <h2 className="mt-12 mb-4 text-6xl font-bold tracking-tight">SoundSeeker</h2>
        </div>
        <div className="ml-4 mr-4">
          <ChatGPT message={message} />
        </div>
      </div>
      <div>

        <div className="flex flex-col justify-center">
          <Button onClick={getNewSongs} variant="link" className="text-black" disabled={isButtonDisabled}>
            {songFound
              ? "I don't like any of these songs (refresh songs)"
              : "I don't like any of these songs (restart song selection)"}
          </Button>
          {isLoading ? (
              <div className="mt-2 mb-2 flex justify-center">
                <span className="loading loading-spinner w-8 h-8">Finding Songs...</span>
              </div>
            ) : null}
        </div>

      <div className="mt-3 relative flex justify-center items-center">
        <ScrollArea>
          <div className="flex space-x-4 pb-4 ml-4">
            {songs && songs.length > 0 ? (
              songs.map((song, index) => (
                song.render && (
                  <SpotifyComponent
                    key={index}
                    previewUrl={song.previewUrl}
                    spotifyUrl={song.spotifyUrl}
                    trackName={song.trackName}
                    artistName={song.artistName}
                    trackImage={song.trackImage}
                    isSelected={selectedSong !== null && selectedSong.trackId === song.trackId}
                    onClick={() => handleSongSelect(song)}
                  />
                )
              ))
            ) : (
              <div></div>
            )}
            <ScrollBar orientation="horizontal" />
          </div>
        </ScrollArea>
      </div>
      </div>
        <div className="flex flex-col justify-center items-center mt-2">
          {errorMessage && (
            <div className="mt-2 items-center flex justify-center mb-1">
              <p className="fontSizeSm text-red-500">{errorMessage}</p>
            </div>
          )}

          {!songFound && (
            <button
              onClick={getNewRecommendedSongs}
              className="btn btn-wide btn-primary flex items-center justify-center"
              disabled={isLoadingRecommended} // Add the disabled attribute
            >
              {isLoadingRecommended && <span className="loading loading-spinner mr-2"></span>}
              Find My Song!
            </button>
          )}
        </div>
    </div>

  )
}


export default ProductPage