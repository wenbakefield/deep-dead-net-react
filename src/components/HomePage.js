import React, { useState } from 'react';
import { Button, Container, Row, Col, Image } from 'react-bootstrap';
import './HomePage.css';

const HomePage = ({ images, onGenerate }) => {
    const [selectedImage, setSelectedImage] = useState(null);
  
    const handleImageClick = (index) => {
      setSelectedImage(index);
    };
  
    return (
      <Container className="home-page">
        <div className="row">
            <div className="col-12 text-center">
                <img src="/assets/deepdeadnet.png" alt="Logo" style={{ width: '50%', marginBottom: '1rem' }} />
            </div>
        </div>
        <Row>
        <h1>DeepDeadNet</h1>
        <h3>Select a generation model below!</h3>
        </Row>
        <Row>
          {images.map((img, index) => (
            <Col key={index}>
              <Image
                src={img}
                onClick={() => handleImageClick(index)}
                className={selectedImage === index ? 'selected' : ''}
                thumbnail
              />
            </Col>
          ))}
        </Row>
        <Button
          variant="dark"
          size="lg"
          disabled={selectedImage === null}
          onClick={() => onGenerate(selectedImage)}
        >
          Generate!
        </Button>
      </Container>
    );
  };

export default HomePage;