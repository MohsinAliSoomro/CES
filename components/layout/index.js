import React, { useState } from 'react';
import Header from '../header';
import Footer from '../footer';
import { connect } from 'react-redux';
import Sidebar from '../sidebar';
import Mainbody from '../mainBody';
function Layout(props) {
	console.log(props.state)
	const [ show, setShow ] = useState(true);
	return (
		<div>
			<Header />
			<div className="grid_container">
				{props.state ? <Sidebar /> : ''}
				<Mainbody />
			</div>
			<Footer />
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		state: state.sidebar.isShow
	};
};

export default connect(mapStateToProps, null)(Layout);
