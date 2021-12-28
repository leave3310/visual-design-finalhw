import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <Navbar fixed="top" collapseOnSelect expand="lg">
            <Container>
                <Navbar.Brand href="#home">原神</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    <Nav className='text-center'>
                        <Link to="/" className='text-decoration-none'>
                            <Nav.Link>
                                首頁
                            </Nav.Link>
                        </Link>
                        <Link to="/character" className='text-decoration-none'>
                            <Nav.Link>
                                角色
                            </Nav.Link>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header