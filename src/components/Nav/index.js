import React from 'react';

import { Link } from 'react-static';
import IconHome from './IconHome';
import './nav.css';


export default () => (
	<nav className="navigation">
		<Link className="navigation__link" to="/">
			<IconHome/>
		</Link>
		<Link className="navigation__link" to="/about">About</Link>
		<Link className="navigation__link" to="/blog">Blog</Link>
	</nav>
);