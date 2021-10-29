import React from "react";
import { useState, useRef } from "react";
import video from "../../assets/video/video.webm";
import playIcon from "../../assets/images/play.png";
import "./video.css";

function Video() {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlay = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className="video-container">
      <video width="320" onClick={handlePlay} ref={videoRef} loop>
        <source src={video} />
      </video>
      {playing ? null : (
        <div onClick={handlePlay} className="control-container">
          <img className="play" src={playIcon} alt="" />
        </div>
      )}
    </div>
  );
}

export default Video;
