import React from 'react';

const VideoPlayer = () => {
  return (
    <video width="320" height="240" controls>
      <source src="https://s1.sportshub808.com/espn.php" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoPlayer;
