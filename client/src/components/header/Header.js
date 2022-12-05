import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../contexts/user';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
	const userContext = useContext(UserContext);
	return (
		<Navbar bg='dark' variant='dark' expand='lg'>
			<Container>
				<Navbar.Brand>Service</Navbar.Brand>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='me-auto'>
						<Nav.Link>
							<Link to='/'>Home</Link>
						</Nav.Link>
						<Nav.Link>
							<Link to='/service'>Service</Link>
						</Nav.Link>
						<Nav.Link>
							<Link to='/service/orders'>Orders</Link>
						</Nav.Link>
						<Nav.Link>
							<Link to='/service/users'>Users</Link>
						</Nav.Link>
					</Nav>
					<Navbar.Collapse className='justify-content-end'>
						<Navbar.Text>
							Signed in as: <Link to='#login'>{userContext.username}</Link>
						</Navbar.Text>
					</Navbar.Collapse>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Header;
