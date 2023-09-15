import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux/es/hooks/useSelector'

function NavbarHome() {
    const cartProducts = useSelector(state=>state.cart)
  return (
    <div>
        <Navbar
          collapseOnSelect
          expand='lg'
          className='bg-body-tertiary'
          style={{ color: 'blueviolet' }}
        >
          <Container>
            <Navbar.Brand href='#home'>React Redux</Navbar.Brand>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse id='responsive-navbar-nav'>
              <Nav className='me-auto'>
                <Nav.Link to='/' as={Link}>
                  products
                </Nav.Link>
                <NavDropdown title='Dropdown' id='collasible-nav-dropdown'>
                  <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
                  <NavDropdown.Item href='#action/3.2'>
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href='#action/3.3'>
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href='#action/3.4'>
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav>
                <Nav.Link to='/cart' as={Link}>
                  Cart{cartProducts.length}
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    </div>
  )
}

export default NavbarHome