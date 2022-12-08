import type { Component } from 'solid-js';
import { A } from '@solidjs/router';

const Header: Component = () => {
	return (
		<header>
			<nav class='navbar navbar-expand-lg bg-dark navbar-dark'>
				<div class='container-fluid'>
					<A class='navbar-brand' href='/'>
						Service
					</A>
					<div class='collapse navbar-collapse'>
						<ul class='navbar-nav me-auto mb-2 mb-lg-0'>
							<div class='vr' />
							<li class='nav-item'>
								<A href='/orders' class='nav-link'>
									Orders
								</A>
							</li>
							<div class='vr' />
							<li class='nav-item'>
								<A href='/users' class='nav-link'>
									Users
								</A>
							</li>
							<div class='vr' />
						</ul>
						<div class='collapse navbar-collapse justify-content-end'>
							<li class='nav-item'>
								Signed in as:{' '}
								<A class='btn btn-primary pl-2 pr-2' href='/profile'>
									Guest
								</A>
							</li>
							<li class='nav-item'>
								<A href='/auth' class='btn btn-primary pl-2 pr-2'>
									Login
								</A>
							</li>
						</div>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Header;
