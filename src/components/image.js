import React from 'react';
import "./image.css";

function Image({ character }) {
  return (
    <div className="img-container">
      <a href={character.Link} target="blank">
        <img alt={character.Name} src={require(`./assets/${character.Image}`)} className="chara"></img>
      </a>
    </div>
  );
}

export default Image;