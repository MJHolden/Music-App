import { music } from "./tracklistArr.js";
import clsx from "clsx";
import "./Tracklist.css";
import { FaMusic } from "react-icons/fa";

function Tracklist({
  isTracklistShowing,
  setIsTracklistShowing,
  currentSongIndex,
  setCurrentSongIndex,
  isPlaying,
  setIsPlaying,
}) {
  const handleTracklistClick = () => {
    setIsTracklistShowing(!isTracklistShowing);
  };

  return (
    <>
      <button onClick={handleTracklistClick}>
        {isTracklistShowing ? "Hide Playlist" : "Show Playlist"}
      </button>
      {isTracklistShowing ? (
        <div>
          <ul>
            {music.map((track, index) => (
              <li
                //className={currentSongIndex === index ? "currentlyPlaying" : ""}
                className={clsx({
                  currentlyPlaying: currentSongIndex === index,
                  notPlaying: true,
                })}
                key={`${track.song} ${track.artist}`}
                onClick={() => {
                  // set current song to what was clicked
                  setCurrentSongIndex(index);

                  // start playing
                  setIsPlaying(true);
                }}
              >
                {`${track.song} by ${track.artist}`}{" "}
                {currentSongIndex === index ? <FaMusic /> : ""}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </>
  );
}

export default Tracklist;
