import React, { useRef, useState, useEffect } from 'react';
import ReactToPrint from 'react-to-print';

import ComponentToPrint from './data';


function PrintComponent() {
	const [ student, setStudent ] = useState();
	useEffect(() => {
		fetch('http://localhost:4000/marks/marks').then((js) => js.json()).then((res) => {
			const uniqueAddresses = Array.from(new Set(res.map((a) => a.studentId._id))).map((id) => {
				return res.find((a) => a.studentId._id === id);
			});
			setStudent(uniqueAddresses);

		});
	}, []);
	console.log('student', student);
	const componentRef = useRef();
	// if (!result) {
	// 	return <div>loading...</div>;
	// }

	// const handlePrint = useReactToPrint({ content: () => componentRef.current });
	return (
		<div>
			<div style={{ marginTop: '20px' }}>
				<div>
					{student &&
						student.map((std) => {
							return (
								<div key={std._id}>
                                    <h2>{std.studentId.firstName}</h2>
                                    <div style={{ marginTop: '200px' }}>
				<ReactToPrint trigger={() => <button>Print This Out</button>} content={() => componentRef.current} />
				<ComponentToPrint data={std} ref={componentRef} />
			</div>
								</div>
							);
						})}
				</div>
			</div>
			{/* <div style={{ marginTop: '200px' }}>
				<ReactToPrint trigger={() => <button>Print This Out</button>} content={() => componentRef.current} />
				<ComponentToPrint data={result} ref={componentRef} />
			</div> */}
		</div>
	);
}

export default PrintComponent;
