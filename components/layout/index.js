import Header from '../header';
import Footer from '../footer';
import Mainbody from '../mainBody';
import { useSelector } from 'react-redux';
import Sidebar from '../sidebar';
// import { selectShow } from '../../redux/slidebar/sidebar';
function Layout() {
	const isOpn = useSelector((state)=>state.toggle.isShow);

	console.log(isOpn);
	return (
		<div>
			<Header />
			<div className="grid_container">
				{isOpn ? <Sidebar /> : ''} 
				<Mainbody />
			</div>
			<Footer />
		</div>
	);
}

export default Layout;
