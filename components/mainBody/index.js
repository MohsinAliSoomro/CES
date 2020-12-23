import Image from 'next/image';
import React from 'react';
import { Pane, Dialog, Button } from 'evergreen-ui';
function index() {
	const [ value, setValue ] = React.useState({ isShow: false });
	return (
		<div
			style={{
				height: '100vh',
				marginTop: '10px',
				textAlign: 'center',
				backgroundColor: 'linear-gradient(to right, #abbaab, #ffffff)',
				borderRadius: '10px'
			}}
		>
			<Image src="/illustration/std.png" alt="std" width="500" height="500" />

			<DialogComponent value={value} setValue={setValue} />
		</div>
	);
}

export default index;

const DialogComponent = ({value,setValue}) => {
	return (
		<Pane>
			<Dialog
				isShown={value.isShown}
				title="Dialog title"
				onCloseComplete={() => setValue({ isShown: false })}
				confirmLabel="Custom Label"
			>
				Dialog content
			</Dialog>

			<Button onClick={() => setValue({ isShown: true })}>Show Dialog</Button>
		</Pane>
	);
};
