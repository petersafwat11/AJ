import React from "react";
import videojs from "video.js";
import { VideoJS } from "./VideoPlayer";

// eslint-disable-next-line react/display-name
const VideoJs = React.memo(({ url, handleStarting }) => {
  const playerRef = React.useRef(null);

  const videoJsOptions = {
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: url || "https://s1.sportshub808.com:8443/hls/btsport3.m3u8",
        type: "application/x-mpegURL",
      },
    ],
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on("waiting", () => {
      videojs.log("player is waiting");
    });

    player.on("dispose", () => {
      handleStarting();
      videojs.log("player will dispose");
    });
  };

  return (
    <div className="wrapper">
      <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
    </div>
  );
});

export default VideoJs;

// const VideoJs = () => {
//   return (
//     <div className={classes["video-wrapper"]}>

//       <jwplayer-video
//         controls
//         aspectRatio="inherit"
//         image="/video-background.svg"
//         className={classes["video-player"]}
//         src="https://cdn.jwplayer.com/players/C8YE48zj-IxzuqJ4M.html"
//       ></jwplayer-video>
//     </div>
//   );
// };

// export default VideoJs;
