import { RiDashboard3Line } from 'react-icons/ri';
import { FiFileText } from 'react-icons/fi';
import { HiOutlineAnnotation } from 'react-icons/hi';
import { AiOutlineLogout } from 'react-icons/ai';
import Image from 'next/image';
function index() {
	return (
		<div className="sidebar-nav">
			<div style={{ margin:'3px 20px' }}>
				<Image src="/illustration/user.png" height="64" width="64" />
                <p>Username</p>
			</div>
			<div style={{ display: 'flex' }}>
				<div style={{ marginTop: '13px' }}>
					<RiDashboard3Line size={30} />
				</div>

				<p style={{ marginLeft: '10px' }}>Dashboard</p>
			</div>
			<div style={{ display: 'flex' }}>
				<div style={{ marginTop: '13px' }}>
					<HiOutlineAnnotation size={30} />
				</div>

				<p style={{ marginLeft: '10px' }}>Results</p>
			</div>
			<div style={{ display: 'flex' }}>
				<div style={{ marginTop: '13px' }}>
					<FiFileText size={30} />
				</div>

				<p style={{ marginLeft: '10px' }}>Application</p>
			</div>
			<div style={{ display: 'flex' }}>
				<div style={{ marginTop: '13px' }}>
					<AiOutlineLogout size={30} />
				</div>

				<p style={{ marginLeft: '10px' }}>Logout</p>
			</div>
            <div style={{ textAlign: 'center',marginTop:'3px' }}>
				<Image src="/illustration/std-b.png" height="256" width="330" />
                
			</div>
		</div>
	);
}

export default index;
