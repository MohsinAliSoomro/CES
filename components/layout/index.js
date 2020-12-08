import React, { useState } from 'react';
import Header from '../header';
import Footer from '../footer';
import Sidebar from '../sidebar';
import Mainbody from '../mainBody';
function Layout() {
	const [ show, setShow ] = useState(true);
	return (
		<div>
			<Header />
			<button onClick={() => setShow((show) => !show)}>Show</button>
			<div className="grid_container">
				{show ? <Sidebar /> : ''}
				<Mainbody />
			</div>
			<Footer />
		</div>
	);
}

export default Layout;
