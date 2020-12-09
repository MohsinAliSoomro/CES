import React from 'react';
import { connect } from 'react-redux';
import { ShowSidebar, HideSidebar } from '../../redux/slidebar/action';
import {AiOutlineBars} from 'react-icons/ai'
function index(props) {
	return (
		<div style={{ display: 'flex', justifyContent: 'space-between', boxShadow:'0px 0px 3px 2px grey' }}>
			{props.state ? (
				<button className="nav-btn" onClick={() => props.hide()}><AiOutlineBars size={30} /></button>
			) : (
				<button className="nav-btn" onClick={() => props.show()}><AiOutlineBars size={30} /></button>
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
