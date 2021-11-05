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
import Config from './config.json'
import { Link } from 'react-router-dom'
interface MainWrapperProps {
  children?: ReactChild
}

function MainWrapper(props: MainWrapperProps) {
  const { children } = props
  return (
    <div className="d-flex flex-column min-vh-100">
      <header>
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="light"
          className="border-bottom"
        >
          <Container>
            <Navbar.Brand href="/" className="d-flex align-items-center">
              <img src={logo} alt="Diem logo" />
              &nbsp;
              <span className="navbar-text">explorer</span>
              &nbsp;
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto align-items-center">
                <DropdownButton
                  id="dropdown-basic-button"
                  title={`${Config.DIEMX_CHAIN} ${Config.DIEMX_ENV}`}
                  className="d-inline"
                  size="sm"
                  variant="secondary"
                >
                  <Dropdown.Item href="#">DPN Premainnet</Dropdown.Item>
                </DropdownButton>{' '}
                <Nav.Link href="/">Home</Nav.Link>
                <NavDropdown title="Events" id="collasible-nav-dropdown">
                  <Link className="dropdown-item" to="/events/mint">
                    Mint Events
                  </Link>
                  <Link className="dropdown-item" to="/events/burn">
                    Burn Events
                  </Link>
                  <Link className="dropdown-item" to="/events/payment">
                    Payment Events
                  </Link>
                  <NavDropdown.Item href="#">Gas Events</NavDropdown.Item>
                  <NavDropdown.Item href="#">Preburn Events</NavDropdown.Item>
                  <NavDropdown.Item href="#">
                    Account Creation Events
                  </NavDropdown.Item>
                </NavDropdown>
                <Link className="nav-link" to="/diemincirculation">
                  Diem-In-Circulation
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>{' '}
      </header>

      <main className="flex-shrink-0">
        <div className="container">{children}</div>
      </main>

      <footer className="footer mt-auto py-3 bg-light">
        <div className="container">
          <span>© 2021 Diem Association</span>
        </div>
      </footer>
    </div>
  )
}

export default MainWrapper
