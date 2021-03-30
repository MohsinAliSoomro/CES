import React, { useRef,useState,useEffect } from 'react';
import ReactToPrint from 'react-to-print';
import ComponentToPrint from './data';
function PrintComponent() {
    const [result,setResult]=useState()
    useEffect(() => {
        fetch('http://localhost:4000/marks/marksStudent/6062c2a05cda4a2e94ce2452')
			.then((js) => js.json())
            .then((res) => {
                setResult(res)
			// this.setState({result:res})
			 console.log("result",res)
		});
    }, [])
	const componentRef = useRef();
	// const handlePrint = useReactToPrint({ content: () => componentRef.current });
	return (
        <div>
            <ReactToPrint trigger={() => <button>Print This Out</button>}
            content={()=>componentRef.current}
            />
			<ComponentToPrint name="mohsin" ref={componentRef} />
			
		</div>
	);
}

export default PrintComponent;
