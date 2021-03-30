import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';
import {ComponentToPrint} from './data';
function PrintComponent() {
	const componentRef = useRef();
	// const handlePrint = useReactToPrint({ content: () => componentRef.current });
	return (
        <div>
            <ReactToPrint trigger={() => <button>Print This Out</button>}
            content={()=>componentRef.current}
            />
			<ComponentToPrint ref={componentRef} />
			
		</div>
	);
}

export default PrintComponent;
