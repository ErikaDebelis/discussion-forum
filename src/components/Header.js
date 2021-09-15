import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { FilePerson } from 'react-bootstrap-icons';

function Header() {
  return (
  <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand >FORUM</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          Signed in as: <FilePerson /> Your Momma
        </Navbar.Text>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default Header;