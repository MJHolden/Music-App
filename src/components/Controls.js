// icons
import { FaPlay, FaPause, FaForward, FaBackward } from "react-icons/fa";
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";
import { music } from "../tracklist.js";
import "./Controls.css";
import { useState } from "react";

function Controls({
  isPlaying,
  currentSongIndex,
  setIsPlaying,
  setCurrentSongIndex,
}) {
  //const [volume, setVolume] = useState(1);

  const handlePlayClick = () => {
    setIsPlaying(!isPlaying);
  };

  const handleForwardClick = () => {
    if (currentSongIndex === music.length - 1) {
      // if you are at the last song...
      setCurrentSongIndex(0); // ... go back to the first song
    } else {
      // ... else
      setCurrentSongIndex(currentSongIndex + 1); // ... goto the next song
    }
  };

  const handleBackClick = () => {
    setCurrentSongIndex(currentSongIndex - 1);
  };

  const handleRandomClick = () => {
    const min = 0;
    const max = music.length - 1;

    let randomNumber = Math.floor(Math.random() * (max - min + 1) + min);

    if (currentSongIndex === randomNumber) {
      handleRandomClick();
    } else {
      setCurrentSongIndex(randomNumber);
    }
  };

  return (
    <section>
      <button onClick={handleBackClick} disabled={currentSongIndex === 0}>
        <FaBackward />
      </button>
      <button className="play-btn" onClick={handlePlayClick}>
        {isPlaying ? <FaPause /> : <FaPlay />}
      </button>
      <button onClick={handleForwardClick}>
        <FaForward />
      </button>

      <button className="random-btn" onClick={handleRandomClick}>
        <GiPerspectiveDiceSixFacesRandom />
      </button>
    </section>
  );
}

export default Controls;
