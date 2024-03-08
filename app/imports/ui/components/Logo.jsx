import React from 'react';
import { Navbar, Container, Nav, Image } from 'react-bootstrap';

const Logo = () => (
  <Navbar expand="lg" bg="light">
    <Container className="py-2">
      <Navbar.Brand>
        <Image src="https://courses.ics.hawaii.edu/ics314s24/morea/ui-frameworks/morning-brew-hawaii-logo-black.png" fluid className="d-block mx-auto" />
      </Navbar.Brand>
    </Container>
  </Navbar>
);

export default Logo;
