import React from 'react';

const SoundToggleButton = ({ toggleSound, isPlaying }) => {
  return (
    <button onClick={toggleSound} style={{ zIndex: '1', position: 'absolute', top: '20px', right: '20px' }}>
      {isPlaying ? 'Pause Sound' : 'Play Sound'}
    </button>
  );
};

export default SoundToggleButton;