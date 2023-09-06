import ReactHlsPlayer from "react-hls-player";
import classes from "./hlcPlayer.module.css";

const HlcPlayer = ({ url }) => {
  console.log(url);
  const playerConfig = {
    // Enable/disable automatic recovery on media errors
    autoStartLoad: true,
    // Set the initial bitrate level to start with
    startLevel: -1,
    // Set the maximum buffer length in seconds
    maxBufferLength: 30,
    // Set the maximum buffer hole in seconds
    maxBufferHole: 0.5,
    // Set the maximum back buffer length in seconds
    maxMaxBufferLength: 600,
  };
  return (
    <div className={classes["container"]}>
      <ReactHlsPlayer
        src={url || "https://s1.sportshub808.com:8443/hls/btsport1.m3u8"}
        autoPlay={false}
        controls={true}
        width={"100%"}
        height={"100%"}
        playerConfig={{
          playerConfig,
        }}
      />
    </div>
  );
};

export default HlcPlayer;
