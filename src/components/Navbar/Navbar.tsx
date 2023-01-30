import Button from 'react-bootstrap/Button';
import './Navbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from './images/froala-1.png';

function Navbars() {
  return (
    <Navbar  expand="lg">
      <Container>
        <img
            src={Logo}
            width="200"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
        />
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Overview</Nav.Link>
            <Nav.Link href="#action1">Features</Nav.Link>
            <Nav.Link href="#action1">Docs</Nav.Link>
            <Nav.Link href="#action1">Examples</Nav.Link>
          </Nav>
          
            <Button variant="outline-primary">Pricing</Button>
            <Button variant="primary">Download</Button>{' '}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;