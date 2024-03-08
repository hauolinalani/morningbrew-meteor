import React from 'react';
import { Container } from 'react-bootstrap';
import Logo from '../components/Logo';
import TopMenu from '../components/TopMenu';
import MiddleImage from '../components/MiddleImage';
import BottomFooter from '../components/BottomFooter';

const MorningBrew = () => (
  <Container fluid>
    <Logo />
    <TopMenu />
    <MiddleImage />
    <BottomFooter />
  </Container>
);

export default MorningBrew;

// Use createRoot instead of ReactDOM.render

