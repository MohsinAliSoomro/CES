import React, { useRef } from 'react';
import MainLayout from '../layout';
import ReactToPrint from 'react-to-print';
import {ComponentToPrint} from './data';
function PrintComponent() {
	const componentRef = useRef();
	// const handlePrint = useReactToPrint({ content: () => componentRef.current });
	return (
        <MainLayout>
            <ReactToPrint trigger={() => <button>Print This Out</button>}
            content={()=>componentRef.current}
            />
			<ComponentToPrint ref={componentRef} />
			
		</MainLayout>
	);
}

export default PrintComponent;
