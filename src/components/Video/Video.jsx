import React from "react";
import { useState, useRef } from "react";
import video from "../../assets/video/video.webm";
import "./video.css";

function Video() {
  const [playing, setPlaying] = useState(true);
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
      <video ref={videoRef} autoPlay loop muted={false}>
        <source src={video} />
      </video>
      <div className="btn">
        <button onClick={handlePlay}>Play/Stop</button>
      </div>
    </div>
  );
}

export default Video;
