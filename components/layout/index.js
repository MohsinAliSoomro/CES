import Header from '../header';
import Footer from '../footer';
import Mainbody from '../mainBody';
import { useSelector } from 'react-redux';
import Sidebar from '../sidebar';
function Layout() {
	const isShow = useSelector((state) => state.toggle.isShow);

	return (
		<div>
			<Header />
			<div className="grid_container">
				{isShow ? <Sidebar /> : ''}
				<Mainbody />
			</div>
			<Footer />
		</div>
	);
}

export default Layout;
