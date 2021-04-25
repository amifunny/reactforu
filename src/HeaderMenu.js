import {Navbar, Nav} from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css';
import './HeaderMenu.css';

import logo from './logo.svg'

const HeaderMenu = () => {
	return (
		<Navbar bg="dark" variant="dark">
		    <Navbar.Brand href="#home">
		      <img
		        alt=""
		        src={logo}
		        width="30"
		        height="30"
		        className="d-inline-block align-top"
		      />
		      ReactForU
		    </Navbar.Brand>
		    <Nav className="mr-auto">
		      <Nav.Link href="#home" className="head-menu-link">Home</Nav.Link>
		      <Nav.Link href="#features" className="head-menu-link">Features</Nav.Link>
		      <Nav.Link href="#pricing" className="head-menu-link">Pricing</Nav.Link>
		    </Nav>
		</Navbar>
	)
}

export {HeaderMenu};