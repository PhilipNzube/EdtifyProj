import React, { useEffect } from "react";
//  mui components
import Box from "@mui/material/Box";
// type/interface and styles
// import { VideoPlayerFunc } from "./interfaceType";
import useVideoPlayerStyle from "@src/styles/videoPlayer";
// video player
import videojs from "video.js";
import "video.js/dist/video-js.css";
import "@videojs/themes/dist/city/index.css";

interface IVideoPlayerProps {
  options: videojs.PlayerOptions;
}

const VideoPlayer: React.FC<IVideoPlayerProps> = ({ options }) => {
  const videoPlayerStyle = useVideoPlayerStyle();
  const videoRef = React.useRef<HTMLVideoElement | null>(null);
  const playerRef = React.useRef<videojs.Player | null>(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    if (!videoElement) return;

    playerRef.current = videojs(videoElement, {
      ...options,
    }).ready(function () {
      // console.log('onPlayerReady', this);
    });
    return () => {
      if (playerRef.current) {
        playerRef.current.dispose();
      }
    };
  }, [options]);

  return (
    <Box data-vjs-player className={videoPlayerStyle.mainContainer}>
      <video
        ref={videoRef}
        className="video-js vjs-big-play-centered vjs-16-9 vjs-theme-city"
      />
    </Box>
  );
};

export default VideoPlayer;
