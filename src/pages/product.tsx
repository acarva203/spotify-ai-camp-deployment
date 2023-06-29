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
  const [message, setMessage] = useState({ text: 'Hello! You are one click away from finding your dream song' });
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchTestData = async () => {
      setIsLoading(true); // Set loading state to true before API call
      try {
        const response = await axios.get('https://codermantester234.pythonanywhere.com/api/get-5-songs');
        console.log(response);
  
        const { data } = response;
        const tracks = data.tracks.map((track) => ({
          trackName: track.trackName,
          artistName: track.artistName,
          previewUrl: track.previewUrl,
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
      } finally {
        setIsLoading(false); // Set loading state to false after API call completes
      }
    };
  
    fetchTestData();
  }, []);
  
  const getNewRecommendedSongs = async () => {
    try {
      if (selectedSong) {
        setMessage({text: `Ah, ${selectedSong.trackName}, great choice! Please wait while I find some songs for you...`});

        setSongs(null)
        setIsLoading(true)

        const response = await axios.post(
          'https://codermantester234.pythonanywhere.com/api/get-chosen-song-give-reccomended-songs',
          null,
          {
            params: {
              track: selectedSong, // Pass the selected song as a parameter
            },
          }
        );

        console.log("Requested!")

        const { data } = response;
        const recommendedSongs = data.tracks.map((track) => ({
          trackName: track.trackName,
          artistName: track.artistName, // Replace with the actual artist name if available
          previewUrl: track.previewUrl,
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

        setMessage({text: `Here are some songs I think you might like!`})
        setSongs(recommendedSongs)
        setIsLoading(false)
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

  
  // console.log(songs)
  // console.log(selectedSong)

  return (
    <div>
      <div>
        <div className="marginY4 padding4 bgGray100">
          <h2 className="mt-2 mb-2 text-3xl font-bold tracking-tight">SoundSeeker</h2>
          <p className="text">Hello! To get started, try out all the songs below and pick a song you like the most. </p>
          <p className="text">Dont like a song? No worries! Ask for another selection of songs by clicking the button below.</p>
        </div>
        <div className="ml-4 mr-4">
          <ChatGPT message={message} />
        </div>
      </div>
      <div>
        {errorMessage && (
          <div className="marginTop2 items-center flex justify-center">
            <p className="fontSizeSm textColorRed600">{errorMessage}</p>
          </div>
        )}

        <Separator className="my-4" />

        <div className="relative">
          <ScrollArea>
            <div className="flex space-x-4 pb-4 ml-4">
            {songs && songs.length > 0 ? (
              songs.map((song, index) => (
                song.render && (
                  <SpotifyComponent
                    key={index}
                    previewUrl={song.previewUrl}
                    trackName={song.trackName}
                    artistName={song.artistName}
                    trackImage={song.trackImage}
                    isSelected={selectedSong !== null && selectedSong.trackId === song.trackId} // Pass isSelected prop
                    onClick={() => handleSongSelect(song)} // Pass onClick handler
                  />
                )
              ))
            ) : (
              <div></div> // You can replace this with any placeholder component you want to show when songs is null or empty
            )}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
      </div>
      {isLoading ? (
        <div className="circleLoader">Finding songs...</div>
      ) : null}
        <button onClick={getNewRecommendedSongs} className="bgBlue500 textColorWhite borderRadius paddingX2 paddingY1 marginTop4 hoverBgBlue600 fontSizeSm">Find My Song!</button>
    </div>

  )
}


export default ProductPage