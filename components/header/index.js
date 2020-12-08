import React from 'react';
import { connect } from 'react-redux';
import { ShowSidebar, HideSidebar } from '../../redux/slidebar/action';

function index(props) {
	return (
		<div style={{ display: 'flex', justifyContent: 'space-around', backgroundColor: 'grey' }}>
			{props.state ? (
				<button onClick={() => props.hide()}>Close</button>
			) : (
				<button onClick={() => props.show()}>Open</button>
			)}
			<p>Logo</p>
			<p>The Shaikh Ayaz University</p>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		state: state.sidebar.isShow
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		show: () => dispatch(ShowSidebar()),
		hide: () => dispatch(HideSidebar())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(index);
