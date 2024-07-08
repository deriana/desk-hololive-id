import React from 'react';
import './container.css';
import Image from './image';
import Text from './text';

function Container({ selectedCharacter, animate }) {
  if (!selectedCharacter) return null;

  return (
    <div className="container">
      <Image character={selectedCharacter} animate={animate} />
      <Text character={selectedCharacter} />
    </div>
  );
}

export default Container;