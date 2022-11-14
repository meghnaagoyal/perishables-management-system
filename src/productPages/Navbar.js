import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';


const AppNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <NavDropdown title="Go to" id="basic-nav-dropdown">
            <NavDropdown.Item href="/home">Products</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/home/aboutToExpire">About to Expire</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/home/expired">Expired</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Profile" id="basic-nav-dropdown">
            <NavDropdown.Item href="/Login">Login</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/Logout">Log out</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};
  
  export default AppNavbar;