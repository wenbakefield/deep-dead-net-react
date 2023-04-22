import React, { useState, useRef } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { FaPlay, FaPause } from 'react-icons/fa';

const AudioMixer = ({ audioTracks, imageTrackMapping }) => {
  const [playing, setPlaying] = useState(false);
  const audioRefs = useRef([]);

  const handlePlayPause = () => {
    setPlaying(!playing);
    audioRefs.current.forEach((audioRef, index) => {
      if (playing) {
        audioRef.pause();
      } else {
        audioRef.play();
      }
    });
  };

  // Helper function to get the file name without the extension from the file path
  const getFileNameWithoutExtension = (filePath) => {
    const fileName = filePath.split('/').pop();
    return fileName.substring(0, fileName.lastIndexOf('.'));
  };

  const handleVolumeChange = (index, event) => {
    const volume = event.target.value;
    audioRefs.current[index].volume = volume;
  };

  const selectedImage = imageTrackMapping.find(
    (mapping) => mapping.tracks[0] === audioTracks[0]
  ).image;

  return (
    <Container className="audio-mixer">
    <Row>
        <h1>Multitrack Player</h1>
        <h2>Refresh the page to try another model!</h2>
    </Row>
    <div className="row">
        <div className="col-12 text-center">
            <img src={selectedImage} alt="Album Art" style={{ width: '50%', marginBottom: '1rem' }} />
        </div>
    </div>
    <div className="row">
        <div className="col-12 text-center">
            <img src="/assets/deadthresh.png" alt="The Grateful Dead" style={{ width: '100%', marginBottom: '1rem' }} />
        </div>
    </div>
    <Row>
    {audioTracks.map((track, index) => (
        <Col key={index}>
        <audio ref={(el) => (audioRefs.current[index] = el)} src={track} />
        <h3>{getFileNameWithoutExtension(track)}</h3>
        <Form.Label></Form.Label>
        <Form.Range
            min="0"
            max="1"
            step="0.01"
            defaultValue="1"
            onChange={(event) => handleVolumeChange(index, event)}
        />
        </Col>
    ))}
    </Row>
    <Row>
        <Button variant="dark" onClick={handlePlayPause}>
        {playing ? <FaPause /> : <FaPlay />}
        </Button>
    </Row>
    </Container>
  );
};

export default AudioMixer;