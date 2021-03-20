import React, { useContext } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import './Header.css';
import logo from '../../images/Ride With Us-logos_transparent.png';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import Button from 'react-bootstrap/Button';
import './Header.css';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <Navbar bg="transparent" expand="lg">
            <Navbar.Brand href="#home">
                <img src={logo} alt="logo" className="w-25" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="justify-content-end" activeKey="/home">
                    <Nav.Item>
                        <Nav.Link href="/">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/#">Destination</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/#">Blog</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/#">Contact</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link style={{fontSize:"20px"}} href="/#">{loggedInUser.name}</Nav.Link>
                    </Nav.Item>
                    <Link to={`/login`}>
                        {
                            loggedInUser.email ?
                                <Button onClick={() => setLoggedInUser({})}>Log Out</Button>
                                : <Button >Login</Button>
                        }
                    </Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;