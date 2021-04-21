import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import styles from '../styles/Navigation.module.css'


export default function Navigation() {
  return (
    <div className="w-100 h-100">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">FED Feedback</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/reviews">Reviews</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}