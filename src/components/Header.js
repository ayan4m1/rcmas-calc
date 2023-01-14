import { Link } from 'gatsby';
import { Navbar, Nav, Container } from 'react-bootstrap';

export default function Header() {
  return (
    <Navbar variant="primary">
      <Container>
        <Navbar.Brand>
          <Nav.Item as={Link} to="/">
            RCMAS
          </Nav.Item>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav>
            <Nav.Link as={Link} to="/calculator">
              Calculator
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
