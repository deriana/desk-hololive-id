import React, { useState } from 'react';
import './App.css';
import Container from './components/container';
import Slider from './components/slider';

function App() {
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  return (
    <main>
      <Container selectedCharacter={selectedCharacter} />
      <Slider onSelectCharacter={(character) => setSelectedCharacter(character)} />
    </main>
  );
}

export default App;