import React, { Component,useEffect,useState} from 'react';
import styles from './style.scss';
import data from './data.json';
import QRCode from 'qrcode.react';
export default class ComponentToPrint extends Component {
	constructor(props) {
		super(props);
		
		this.state={
			result: []
		}
	}
	
	componentDidMount() {
		if (this.props.data) {
			fetch(`http://localhost:4000/marks/marksStudent/${this.props.data.studentId._id}`)
			.then((js) => js.json())
				.then((res) => {
					console.log(res)
					if (res) {
						this.setState({result:res}) 
					}
				
			});
		}
		
	}
	
	render() {
		if (!this.props) {
			return <div>Loading...</div>
		}
		for (let i = 0; i < this.state.result.length; i++) {
			const element = this.state.result[i];
			console.log("element",element._id===this.props.data._id)
			
		}
		const filterData= this.state.result.filter(i=>i.studentId._id===this.props.data.studentId._id)
		console.log("props",filterData.map(i=>i.studentId))
		// console.log("result",this.state.result[this.props.data._id])
		let totSub = 0;
		let gp = 0;
		let gpa = 0;
		let credithr=0;
		var obttot=0;
			// let qrcode = ` Roll No : ${this.state.result[0].studentId.rollno} \n Name :  ${ this.props.data[0].studentId.firstName}  \n Programme : ${this.props.data[0].programId.name} \n Semester : ${this.props.data[0].semesterId.name}  \n Session: ${this.props.data[0].createdAt.slice(0,4)}  \n Exam Type : ${this.props.data[0].subjectId.type}  `;
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
		function remarks(obt, tot) {
			var obtper = (obt * 100) / tot;
			if (obtper > 59) {
			  return "PASS";
			} else {
			  return "FAIL";
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
		// if (!result) {
		// 	return <div>Loading....</div>;
		// }
	
		return (
			<div className={styles.container}>
				
			<div style={{ position: 'relative' }}>
		
				{/* Term back formula and grading formula */}
				<div style={{ display: 'flex' }}>
					<div style={{ border: '1px solid black', marginRight: '70px' }}>
						<p
							style={{
								textAlign: 'center',
								backgroundColor: '#c7c7c7',
									border: '1px solid black',
									fontSize: "11px",
								fontWeight:"bold"
							}}
						>
							Term back formula
					</p>
						<p style={{ padding: '2px', fontSize: "11px" }}>
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
				</h1>
					<div style={{ display: 'flex', justifyContent: 'space-between' }}>
						<p>Department of </p>
						<p>Session 2021</p>
					</div>
					{/* Name  */}
						<p>
							{/* {filterData && filterData[0].studentId.firstName} */}
							<span>Mr./ Miss.</span>
							<pre>
							{[...new Set(filterData.map(i=>i.studentId.firstName))]} {[...new Set(filterData.map(i=>i.studentId.lastName))]}
							</pre>
							
							
					</p>
				</div>
				<table>
					<tbody>
						<tr>
							<td>
								{this.props.data.semesterId.name} semester {this.props.data.createdAt.slice(0,4)} {this.props.data.formId.type}
							</td>
							<td rowSpan={2}>Credit hours</td>
                <td rowSpan={2}> Obt :</td>
                <td rowSpan={2}>Grade</td>
                <td rowSpan={2}>GP</td>
                <td rowSpan={2}>Remarks</td>
						</tr>
						<tr>
							<td> Courses</td>
						</tr>
						{filterData.map((sb) => {
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
									<td>
                      {sb.subjectId.type === "Theory"
                        ? remarks(sb.marks[0], 100)
                        : remarks(sb.marks[0], 50)}{" "}
                    </td>
									<td style={{ display: "none" }}>
                      {
                        (totSub++,
                        (gp +=
                          sb.subjectId.type == "Theory"
                            ? calcgp(sb.marks[0], 100)
                            : calcgp(sb.marks[0], 50)))
                      }
                    </td>
                    <td style={{ display: "none" }}>
                      {
                        (totSub++,
                        (gp +=
                          sb.subjectId.type == "Theory"
                            ? calcgp(sb.marks[0], 100)
                            : calcgp(sb.marks[0], 50)
							)),
							( credithr+=sb.subjectId.creditHour)
							,
							( obttot+=sb.marks[0])
					  }
                    </td>
								 </tr>
							 );
						})} 
						              <tr>
                <td>
                  <p className="h-2 text-right">                  <b>Total Marks</b></p>
                </td>
                <td>
                  <p className="h-2"> {credithr}</p>
                </td>
                <td>
                  <p className="h-2"> {obttot}</p>
                </td>
                <td><b>GPA</b>
                </td>{" "}
                <td>{(gpa = gp / totSub).toFixed(2)}</td>
                <td>
                  <p className="h-2"> </p>
                </td>
                <td style={{ display: "none" }}>
                  {/* {(qrcode += `\n GPA : ${gpa.toFixed(2)} `)} */}
                </td>
              </tr>
						{/* <tr> 
							<td><b>GPA</b></td> <td>{(gpa = gp / totSub).toFixed(2)}</td>
							<td style={{ display: 'none' }}>{(qrcode += `\n GPA : ${gpa.toFixed(2)} `)}</td>
						</tr> */}
						{/* {data.subjects.map((m) => (
						<tr>
					
					))} */}
					</tbody>
				</table>
				{/* <QRCode value={qrcode} /> */}
			</div>
			</div>
		);
	};
}
