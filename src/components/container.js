import React from 'react';
import './container.css';
import Image from './image';
import Text from './text';

const BgImage = (name) => {
  return require(`./assets/${name}`)
}

function Container({ selectedCharacter, animate }) {
  if (!selectedCharacter) return null;

  return (
    <div className="container" style={{
      backgroundImage: `url(${BgImage(selectedCharacter.Wallpaper)})`}}>
      <Image character={selectedCharacter} animate={animate} />
      <Text character={selectedCharacter} />
    </div>
  );
}

export default Container;