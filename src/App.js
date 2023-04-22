import React, { useState, useEffect } from 'react';
import './App.css';
import HomePage from './components/HomePage';
import LoadingScreen from './components/LoadingScreen';
import AudioMixer from './components/AudioMixer';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [audioTracks, setAudioTracks] = useState(null);

  const imageTrackMapping = [
    {
      image: `${process.env.PUBLIC_URL}/assets/veneta-1972.jpg`,
      tracks: [
        `${process.env.PUBLIC_URL}/assets/set1/Bass.mp3`,
        `${process.env.PUBLIC_URL}/assets/set1/Drums.mp3`,
        `${process.env.PUBLIC_URL}/assets/set1/Other.mp3`,
        `${process.env.PUBLIC_URL}/assets/set1/Vocals.mp3`,
      ],
    },
    {
      image: `${process.env.PUBLIC_URL}/assets/winterland-1973.jpg`,
      tracks: [
        `${process.env.PUBLIC_URL}/assets/set2/Bass.mp3`,
        `${process.env.PUBLIC_URL}/assets/set2/Drums.mp3`,
        `${process.env.PUBLIC_URL}/assets/set2/Other.mp3`,
        `${process.env.PUBLIC_URL}/assets/set2/Vocals.mp3`,
        // ...
      ],
    },
    {
      image: `${process.env.PUBLIC_URL}/assets/cornell-1977.jpg`,
      tracks: [
        `${process.env.PUBLIC_URL}/assets/set3/Bass.mp3`,
        `${process.env.PUBLIC_URL}/assets/set3/Drums.mp3`,
        `${process.env.PUBLIC_URL}/assets/set3/Other.mp3`,
        `${process.env.PUBLIC_URL}/assets/set3/Vocals.mp3`,
        // ...
      ],
    },
    {
      image: `${process.env.PUBLIC_URL}/assets/nassau-1990.jpg`,
      tracks: [
        `${process.env.PUBLIC_URL}/assets/set4/Bass.mp3`,
        `${process.env.PUBLIC_URL}/assets/set4/Drums.mp3`,
        `${process.env.PUBLIC_URL}/assets/set4/Other.mp3`,
        `${process.env.PUBLIC_URL}/assets/set4/Vocals.mp3`,
        // ...
      ],
    },
    // ... add more objects for the remaining images
  ];

  const handleGenerate = (imageIndex) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (imageIndex !== null && imageIndex >= 0 && imageIndex < imageTrackMapping.length) {
        setAudioTracks(imageTrackMapping[imageIndex].tracks);
      }
    }, 5000);
  };

  if (loading) {
    return <LoadingScreen />;
  } else if (audioTracks) {
    return <AudioMixer audioTracks={audioTracks} imageTrackMapping={imageTrackMapping} />;
  } else {
    return (
      <div className="App">
        <HomePage
          images={imageTrackMapping.map((item) => item.image)}
          onGenerate={handleGenerate}
        />
      </div>
    );
  }
};

export default App;
