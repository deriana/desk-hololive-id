import React, { useRef, useState, useEffect } from "react";
import "./text.css";

function Text({ character }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    audioRef.current = new Audio(require(`./assets/${character.Sound}`));
  }, [character]);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="text">
      <div className="title-box">
        <button onClick={togglePlay}>
          <i class="fa-solid fa-microphone"></i>
        </button>
        <h1 className="title">{character.Name}</h1>
      </div>
      <h2 className="group">{character.Group}</h2>
      <p>{character.Desk}</p>
    </div>
  );
}

export default Text;
