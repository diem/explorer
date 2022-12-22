// Copyright (c) The Diem Core Contributors
// SPDX-License-Identifier: Apache-2.0

import { ReactChild } from 'react'
import './MainWrapper.css'
import Navbar from 'react-bootstrap/Navbar'
import {
  Container,
  Dropdown,
  DropdownButton,
  Nav,
  NavDropdown,
} from 'react-bootstrap'
import logo from '../static/logo.svg'
import { Link } from 'react-router-dom'
interface MainWrapperProps {
  children?: ReactChild
}



function MainWrapper(props: MainWrapperProps) {
  const { children } = props
  const host = window.location.host;
  function EnvDropDown() {
    let envVal = "Development";
    let envUrl = "http://localhost:3000"
    if (host.includes('siblockchain.net')) {
      if (host === 'aosdev.azure.siblockchain.net') {
        envVal = "Testnet"
        envUrl = "https://aosstg.azure.siblockchain.net"
      }
      else if (host === 'aosstg.azure.siblockchain.net') {
        envVal = "Premainnet"
        envUrl = "https://aosdev.azure.siblockchain.net"
      }
    }
    return (
      <DropdownButton className='d-inline'
        size='sm'
        variant='secondary'
        id="dropdown-basic-button" title={envVal}>
        <Dropdown.Item href={envUrl}>{envVal === "Testnet" ? "Premainnet" : "Testnet"}</Dropdown.Item>
      </DropdownButton>
    );
  }
  return (
    <div className='d-flex flex-column min-vh-100'>
      <header>
        <Navbar
          collapseOnSelect
          expand='lg'
          bg='light'
          className='border-bottom'
        >
          <Container>
            <Navbar.Brand href='/' className='d-flex align-items-center'>
              <img src={logo} alt='Diem logo' />
              &nbsp;
              <span className='navbar-text'>explorer</span>
              &nbsp;
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse id='responsive-navbar-nav'>
              <Nav className='me-auto align-items-center'>
                {host.includes('siblockchain.net') && <EnvDropDown />}
                <Nav.Link href='/'>Home</Nav.Link>
                <NavDropdown title='Events' id='collasible-nav-dropdown'>
                  <Link className='dropdown-item' to='/events/mint'>
                    Mint Events
                  </Link>
                  <Link className='dropdown-item' to='/events/burn'>
                    Burn Events
                  </Link>
                  <Link className='dropdown-item' to='/events/payment'>
                    Payment Events
                  </Link>
                  <Link className='dropdown-item' to='/events/gas'>
                    Gas Events
                  </Link>
                  <Link className='dropdown-item' to='/events/preburn'>
                    Preburn Events
                  </Link>
                  <Link className='dropdown-item' to='/events/accountcreation'>
                    Account Creation Events
                  </Link>
                </NavDropdown>
                <Link className='nav-link' to='/diemincirculation'>
                  Diem-In-Circulation
                </Link>
                <Link className='nav-link' to='/leaderboard'>
                  Leaderboard
                </Link>
                <Link className='nav-link' to='/vasps'>
                  VASPs
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>{' '}
      </header>

      <main className='flex-shrink-0'>
        <div className='container'>{children}</div>
      </main>

      <footer className='footer mt-auto py-3 bg-light'>
        <div className='container'>
          <span>© 2021 Diem Association</span>
        </div>
      </footer>
    </div>
  )
}

export default MainWrapper
