import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const Header = () => {
    return (
        <Navbar className="bg-warning" collapseOnSelect expand="lg">
            <Container>
                <Navbar.Brand href="#home">原神</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    <Nav className='text-center'>
                        <Nav.Link as={Link} to="/" >
                            首頁
                        </Nav.Link>
                        <Nav.Link as={Link} to="/list" >
                            角色
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header