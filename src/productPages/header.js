import React from 'react';
import { withRouter } from "react-router-dom";
import { ACCESS_TOKEN_NAME } from '../constants/apiConstants';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header(props,  productDetails) {
    const capitalize = (s) => {
        if (typeof s !== 'string') return ''
        return s.charAt(0).toUpperCase() + s.slice(1)
    }
    let title = capitalize(props.location.pathname.substring(1,props.location.pathname.length))
    if(props.location.pathname === '/') {
        title = 'Welcome'
    }
    function renderLogout() {
        if(props.location.pathname === '/home' || '/expired' || '/aboutToExpire'){
            return(
                <div className="ml-auto">
                    <button className="btn btn-danger" onClick={() => handleLogout()}>Logout</button>
                </div>
            )
        }
    }
    function handleLogout() {
        localStorage.removeItem(ACCESS_TOKEN_NAME)
        props.history.push('/login')
    }
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">{props.title || title}</Navbar.Brand>
                    <Nav className="me-auto">
                        <NavDropdown title="Go to" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/allProducts">Products</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/aboutToExpire">About to Expire</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/expired">Expired</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/addNewProduct">Add new product</NavDropdown.Item>
                        </NavDropdown>
                        <div>
                        {renderLogout()}
                        </div>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}
export default withRouter(Header);