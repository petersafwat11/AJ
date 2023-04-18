// import "jwplayer-video-element";
import React from "react";
import classes from "./video.module.css";

const VideoJs = () => {
  return (
    <div className={classes["wrapper"]}>
      {/* <jwplayer-video
        className={classes["video-player"]}
        controls
        src="https://cdn.jwplayer.com/players/C8YE48zj-IxzuqJ4M.html"
      ></jwplayer-video> */}

      {/* <Image
        className={classes["logo"]}
        src="/LOGO.svg"
        alt="logo"
        width="94"
        height="73"
      /> */}
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
