// Copyright (c) The Diem Core Contributors
// SPDX-License-Identifier: Apache-2.0

import { ReactChild } from 'react'
import './MainWrapper.css'
import Navbar from 'react-bootstrap/Navbar'
import {
  Button,
  Container,
  /* Dropdown,
  DropdownButton,
  NavDropdown, */
} from 'react-bootstrap'
import logo from '../static/logo.svg'
interface MainWrapperProps {
  children?: ReactChild
}

function MainWrapper(props: MainWrapperProps) {
  const { children } = props
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
              <span className='navbar-text'>     explorer for DPN Team</span>
              <Button className="ml-15" size="sm" variant="warning">Testnet</Button>
              &nbsp;
            </Navbar.Brand>
          </Container>
        </Navbar>
      </header>

      <main className='flex-shrink-0'>
        <div className='container'>{children}</div>
      </main>

      <footer className='footer mt-auto py-3 bg-light'>
        <div className='container'>
          <span>© 2022 Diem Association</span>
        </div>
      </footer>
    </div>
  )
}

export default MainWrapper
