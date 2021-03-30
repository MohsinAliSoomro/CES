import React, { useRef,useState,useEffect } from 'react';
import ReactToPrint from 'react-to-print';
import ComponentToPrint from './data';
function PrintComponent() {
    const [result,setResult]=useState()
    useEffect(() => {
        fetch('http://localhost:4000/marks/marksStudent/606337c2464ae73660ae80cc')
			.then((js) => js.json())
            .then((res) => {
                setResult(res)
			// this.setState({result:res})

		});
    }, [])
    
    const componentRef = useRef();
    if (!result) {
        return <div>loading...</div>
    }
	// const handlePrint = useReactToPrint({ content: () => componentRef.current });
	return (
        <div>
            <div>
                {result[0].studentId.firstName}
            </div>
            <div style={{marginTop:"200px"}}>
            <ReactToPrint trigger={() => <button>Print This Out</button>}
            content={()=>componentRef.current}
            />
			<ComponentToPrint data={result} ref={componentRef} />
			</div>
		</div>
	);
}

export default PrintComponent;
