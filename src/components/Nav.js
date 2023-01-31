import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Nav() {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="#home">Home</Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Nav;