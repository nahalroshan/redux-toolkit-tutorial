import React from 'react'
import { Outlet } from 'react-router'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Link } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../store/store'
import carousel from './SignIn'
import NavbarHome from './NavbarHome'
import { Carousel } from 'bootstrap'
function RootLayout () {
 
  return (
    <>
      <Provider store={store}>
        
        <NavbarHome />
        <main>
          <Outlet />
        </main>
      </Provider>
    </>
  )
}

export default RootLayout
