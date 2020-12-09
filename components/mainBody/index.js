import Image from 'next/image';
function index() {
	return (
		<div
			style={{
				height: '100vh',
				marginTop: '10px',
				textAlign: 'center',
				backgroundColor: 'linear-gradient(to right, #abbaab, #ffffff)',
                borderRadius: '10px',
                
			}}
		>
			<Image src="/illustration/std.png" alt="std" width="500" height="500" />
		</div>
	);
}

export default index;
