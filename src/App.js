import React, { useState } from 'react';
import './App.css';
import Container from './components/container';
import Slider from './components/slider';
import Header from './header';

function App() {
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [animate, setAnimate] = useState(false);

  const handleSelectCharacter = (character) => {
    setSelectedCharacter(character);
    setAnimate(true);
    setTimeout(() => {
      setAnimate(false);
    }, 500);
  };

  return (
    <main>
      <Header />
      <Container selectedCharacter={selectedCharacter} animate={animate} />
      <Slider onSelectCharacter={handleSelectCharacter} />
    </main>
  );
}

export default App;