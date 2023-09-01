import React from "react";
import VideoPlayer from "./VideoPlayer";
import classes from "./video.module.css";

const VideoJs = () => {
  return (
    <div className={classes["wrapper"]}>
      <VideoPlayer />
      {/* <jwplayer-video
        className={classes["video-player"]}
        controls
        src="https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8"
      >
        <Image
          className={classes["logo"]}
          src="/LOGO.svg"
          alt="logo"
          width="94"
          height="73"
        />
      </jwplayer-video> */}
      {/* <VideoJS options={videoJsOptions} onReady={handlePlayerReady} /> */}
    </div>
  );
};

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
