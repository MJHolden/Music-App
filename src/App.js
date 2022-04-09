import "./App.css";
import { useState } from "react";

import Controls from "./components/Controls";
import Tracklist from "./components/Tracklist";
import Player from "./components/Player";

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isTracklistShowing, setIsTracklistShowing] = useState(false);

  return (
    <>
      <div id="app-wrap">
        <Player currentSongIndex={currentSongIndex} isPlaying={isPlaying} />
        <Controls
          isPlaying={isPlaying}
          currentSongIndex={currentSongIndex}
          setIsPlaying={setIsPlaying}
          setCurrentSongIndex={setCurrentSongIndex}
        />
        <Tracklist
          isTracklistShowing={isTracklistShowing}
          setIsTracklistShowing={setIsTracklistShowing}
          currentSongIndex={currentSongIndex}
          setCurrentSongIndex={setCurrentSongIndex}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
        />
      </div>
    </>
  );
}

/*

MVP
1.  made sound come out using howler lib  --done--
2.  switch out for our mp3  --done--
3.  control isPlaying via state and button --done--
4.  switch out pause / play button  --done--
5.  hookup forward button and have it play the first song if you are at the last song -- done--
6.  hookup back button and have it be disabled if you on the first song
7.  hookup image, artist and song title to the array ==done--
8.  add randomize button
9.  add some more basic css to controls 
10. when individual track in tracklist is clicked, play the clicked track
11. when a track is playing,  make it standout in the tracklist -- done --
12. add volume slider - 
13. deploy add to netlify

REFACTORING PHASE
8.  making app.js smaller --done--
9.  update import statements to use relative pathing --done
10. auto format on save


*/

export default App;
