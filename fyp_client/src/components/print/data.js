import React, { Component, useEffect, useState } from 'react';
import './style.scss';
import data from './data.json';
import QRCode from 'qrcode.react';
export class ComponentToPrint extends Component {
	constructor() {
		super()
		this.state={
			result: []
		}
	}
	componentDidMount(){
		fetch('http://localhost:4000/marks/marksStudent/603fcad2bd31b833fce8c4e0')
			.then((js) => js.json())
			.then((res) => {
				this.setState({result:res})
				// console.log(res)
			});
	}
	render() {
		// const [result, setResult] = useState([]);
console.log(this.state.result)
		
		let totSub = 0;
		let gp = 0;
		let gpa = 0;
		let qrcode = ` Roll No : ${data.rollno} \n Name :  ${data.studentName}  \n Programme : ${data.program} \n Semester : ${data.semester}  \n Session: ${data.session}  \n Exam Type : ${data.papertype}  `;
		function calcgp(obt, tot) {
			let obtper = obt * 100 / tot;
			if (obtper >= 87) {
				return 4.0;
			} else if (obtper >= 85.5) {
				return 3.9;
			} else if (obtper >= 84) {
				return 3.8;
			} else if (obtper >= 82.5) {
				return 3.7;
			} else if (obtper >= 81) {
				return 3.6;
			} else if (obtper >= 79.5) {
				return 3.5;
			} else if (obtper >= 78) {
				return 3.4;
			} else if (obtper >= 76.5) {
				return 3.3;
			} else if (obtper >= 75) {
				return 3.2;
			} else if (obtper >= 73.5) {
				return 3.1;
			} else if (obtper >= 72) {
				return 3.0;
			} else if (obtper >= 70.5) {
				return 2.87;
			} else if (obtper >= 69) {
				return 2.75;
			} else if (obtper >= 67.5) {
				return 2.62;
			} else if (obtper >= 66) {
				return 2.5;
			} else if (obtper >= 64.5) {
				return 2.37;
			} else if (obtper >= 63) {
				return 2.25;
			} else if (obtper >= 61.5) {
				return 2.12;
			} else if (obtper >= 60) {
				return 2.0;
			} else {
				return 0.0;
			}
		}
		function grade(obt, tot) {
			var obtper = obt * 100 / tot;
			if (obtper > 86) {
				return 'A';
			} else if (obtper > 71) {
				return 'B';
			} else if (obtper > 59) {
				return 'C';
			} else {
				return 'Fail';
			}
		}
		if (this.state.result.length < -1) {
			return <div>Loading....</div>;
		}
		return (
			<div style={{ position: 'relative' }}>
				<div style={{ position: 'absolute', top: '50%', left: '90%' }}>
					<h1>Absolute</h1>
				</div>
				{/* Term back formula and grading formula */}
				<div style={{ display: 'flex' }}>
					<div style={{ border: '1px solid black', marginRight: '100px' }}>
						<p
							style={{
								textAlign: 'center',
								backgroundColor: '#c7c7c7',
								border: '1px solid black'
							}}
						>
							Term back formula
					</p>
						<p style={{ padding: '3px' }}>
							A student who is fail in four courses in any semester or did not maintain G.P.A. 1.33 in a
							semester or did not maintain continuity in appearing in tde Examinations but avails semester
							break he/she shall be placed on term back from tde rolls of tde department.
					</p>
					</div>
					<div>
						<table>
							<tbody>
								<tr>
									<td
										colSpan="3"
										className="tdata"
										style={{ textAlign: 'center', backgroundColor: '#c7c7c7' }}
									>
										Grading Formula
								</td>
								</tr>
								<tr>
									<td className="tdata">87-100</td>
									<td className="tdata">A</td>
									<td className="tdata">GP 4.00</td>
								</tr>
								<tr>
									<td className="tdata">72-86</td>
									<td className="tdata">B</td>
									<td className="tdata">GP 3.00 to 3.90</td>
								</tr>
								<tr>
									<td className="tdata">60-71</td>
									<td className="tdata">C</td>
									<td className="tdata">GP 2.00 to 2.90</td>
								</tr>
								<tr>
									<td style={{ textAlign: 'center' }} colSpan="3" className="tdata">
										Below 60 --- Fail
								</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				{/* Heading of department and name*/}
				<div>
					<h1
						style={{
							textAlign: 'center',
							fontWeight: 'bolder',
							fontSize: '30px'
						}}
					>
						{/* {data.ptype} Studies ({data.department}) {result[0].studentId.program} ( */}
					{/* {data.pduration} Years) */}
				</h1>
					<div style={{ display: 'flex', justifyContent: 'space-between' }}>
						<p>Department of {data.department}</p>
						<p>Session {data.session}</p>
					</div>
					{/* Name  */}
					<p>
						{data.gender === 0 ? <span>Mr.</span> : <span>Miss.</span>}
						{this.state.result.length > 0 && this.state.result[0].studentId.firstName}{' '}
						{this.state.result.length > 0 && this.state.result[0].studentId.lastName}
					</p>
				</div>
				<table>
					<tbody>
						<tr>
							<td>
								{data.semester} semester {data.session} {data.papertype}
							</td>
							<td>Credit hours</td>
							<td>Obt</td>
							<td>Grade</td>
							<td>GP</td>
							<td>Remarks</td>
						</tr>
						{/* <tr style={{padding:"100px"}}>
							{data.subjects.map((m) => {
								return (
									<td>
										{m.name}({m.type})
									</td>
								);
							})}
							<td />
						</tr> */}
						{this.state.result.map((sb) => {
							return (
								<tr> 
									 <td>{sb.subjectId.name}</td>
									<td>{sb.subjectId.creditHour}</td>
									<td>{sb.marks[0]}</td> 
									 <td>
										{sb.subjectId.type === 'Theory' ? grade(sb.marks[0], 100) : grade(sb.marks[0], 50)}
									</td>
									<td>
										{sb.subjectId.type === 'Theory' ? (
											calcgp(sb.marks[0], 100)
										) : (
												calcgp(sb.marks[0], 50)
											)}{' '}
									</td>
									<td style={{ display: 'none' }}>
										{(totSub++, (gp += sb.subjectId.type == 'Theory' ? calcgp(sb.marks[0], 100) : calcgp(sb.marks[0], 50)))}
									</td> 
								 </tr>
							);
						})}
						<tr> 
							<td><b>GPA</b></td> <td>{(gpa = gp / totSub).toFixed(2)}</td>
							<td style={{ display: 'none' }}>{(qrcode += `\n GPA : ${gpa.toFixed(2)} `)}</td>
						</tr>
						{/* {data.subjects.map((m) => (
						<tr>
							{' '}
							<td>
								{m.name}({m.type})
							</td>{' '}
							<td>{m.credithr}</td> <td>{m.marks}</td>{' '}
							<td>{m.type === 'TH' ? grade(m.marks, 100) : grade(m.marks, 50)}</td>
							<td>{m.type === 'TH' ? calcgp(m.marks, 100) : calcgp(m.marks, 50)} </td>
							<td style={{ display: 'none' }}>
								{(totSub++, (gp += m.type == 'TH' ? calcgp(m.marks, 100) : calcgp(m.marks, 50)))}
							</td>
							{}
						</tr>
					))} */}
					</tbody>
				</table>
				<QRCode value={qrcode} />
			</div>
		);
	};
}