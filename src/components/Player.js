import { music } from "../tracklist.js";
import Howler from "react-howler";
import { MdExplicit } from "react-icons/md";

function Player({ currentSongIndex, isPlaying }) {
  return (
    <>
      <Howler src={music[currentSongIndex].src} playing={isPlaying} />
      <h1>Roshi Music</h1>
      <img alt="" src={music[currentSongIndex].image}></img>
      <br></br>
      <br></br>
      <h1>
        {music[currentSongIndex].song}
        {music[currentSongIndex].song === "Super Gremlin" ? <MdExplicit /> : ""}
      </h1>
      <p>{music[currentSongIndex].artist}</p>
      <br></br>
    </>
  );
}

export default Player;
