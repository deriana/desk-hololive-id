import React from 'react';
import './container.css';
import Image from './image';
import Text from './text';

function Container({ selectedCharacter }) {
  if (!selectedCharacter) return null;

  return (
    <div className="container">
      <Image character={selectedCharacter} />
      <Text character={selectedCharacter} />
    </div>
  );
}

export default Container;