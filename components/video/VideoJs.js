// import React from "react";
// import JWPlayer from "@jwplayer/jwplayer-react";

// class PlayerContainer extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       loaded: false,
//     };
//     this.players = {};
//     this.onBeforePlay = this.onBeforePlay.bind(this);
//     this.didMountCallback = this.didMountCallback.bind(this);
//     this.loadPlayerLibrary();
//   }

//   // Load a player library
//   loadPlayerLibrary() {
//     const src = "https://cdn.jwplayer.com/libraries/lqsWlr4Z.js";
//     const script = document.createElement("script");
//     script.src = src;
//     script.type = "text/javascript";
//     script.onload = () => this.setState({ loaded: true }); // On load, we're ready to set up our player instances
//     document.body.append(script);
//   }

//   // Registers players to container as they mount
//   didMountCallback({ player, id }) {
//     this.players[id] = player;
//     const eventLog = document.getElementById("log");

//     // Log all events by player id.
//     player.on("all", (event) => {
//       const li = document.createElement("li");
//       li.innerText = `${id}: ${event}`;
//       eventLog.prepend(li);
//     });
//   }

//   // Prevent simultaneous playbacks
//   onBeforePlay(event) {
//     Object.keys(this.players).forEach((playerId) => {
//       const player = this.players[playerId];
//       const isPlaying = player.getState() === "playing";
//       if (isPlaying) {
//         player.pause();
//       }
//     });
//   }

//   render() {
//     // Re-usable defaults to use between multiple players.
//     const configDefaults = { width: 320, height: 180 };

//     return this.state.loaded ? (
//       <div className="players-container">
//         <JWPlayer
//           config={configDefaults}
//           onBeforePlay={this.onBeforePlay}
//           didMountCallback={this.didMountCallback}
//           playlist="/match.mp4"
//         />
//         {/* <JWPlayer
//           config={configDefaults}
//           onBeforePlay={this.onBeforePlay}
//           didMountCallback={this.didMountCallback}
//           playlist="https://cdn.jwplayer.com/v2/media/QcK3l9Uv"
//         />
//         <JWPlayer
//           config={configDefaults}
//           onBeforePlay={this.onBeforePlay}
//           didMountCallback={this.didMountCallback}
//           playlist="https://cdn.jwplayer.com/v2/playlists/B8FTSH9D"
//           playlistIndex="1"
//         /> */}
//       </div>
//     ) : (
//       "loading..."
//     );
//   }
// }
// export default PlayerContainer;

import "jwplayer-video-element";
import Image from "next/image";
import React from "react";
import classes from "./video.module.css";
const VideoJs = () => {
  return (
    <div className={classes["video-wrapper"]}>

      <jwplayer-video
        controls
        aspectRatio="inherit"
        image="/video-background.svg"
        className={classes["video-player"]}
        src="https://cdn.jwplayer.com/players/C8YE48zj-IxzuqJ4M.html"
      ></jwplayer-video>
      <Image
        className={classes["logo"]}
        src="/LOGO.svg"
        alt="logo"
        width="94"
        height="73"
      />
    </div>
  );
};

export default VideoJs;
