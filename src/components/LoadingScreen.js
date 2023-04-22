import React from 'react';
import { Container } from 'react-bootstrap';

const LoadingScreen = () => {
  return (
    <Container className="loading-screen text-center">
      <h1>Jamming...</h1>
      <div className="row">
            <div className="col-12 text-center">
                <img src="/assets/bears.gif" alt="Dancing Bears" style={{ width: '100%', marginBottom: '1rem' }} />
            </div>
        </div>
    </Container>
  );
};

export default LoadingScreen;