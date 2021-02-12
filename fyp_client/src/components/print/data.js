import React from 'react';
import './style.scss';
export class ComponentToPrint extends React.PureComponent {
	render() {
		return (
			<div>
				{/* Term back formula and grading formula */}
				<div style={{ display: 'flex' }}>
					<div style={{ border: '1px solid black', marginRight: '100px' }}>
						<p style={{ textAlign: 'center', backgroundColor: '#c7c7c7', border: '1px solid black' }}>
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
										Blow 60 --- Fail
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				{/* Heading of department and name*/}
				<div>
					<h1 style={{ textAlign: 'center', fontWeight: 'bolder', fontSize: '30px' }}>
						Bachelor Studies (Computer Science) BSCS (4 Years)
					</h1>
					<div style={{ display: 'flex', justifyContent: 'space-between' }}>
						<p>Department of Computer science</p>
						<p>Session 2019</p>
					</div>
					{/* Name  */}
					<p>Mr / Miss : Name of student</p>
				</div>
				<table>
					<tbody>
						<tr>
							<td>Seventh semester Fresh </td>
							<td rowSpan="2">Credit hours</td>
							<td rowSpan="2">Obt</td>
							<td rowSpan="2">Grade</td>
							<td rowSpan="2">GP</td>
							<td rowSpan="2">Remarks</td>
						</tr>
						<tr>
							<td>Course </td>
						</tr>
						<tr>
							<td style={{fontWeight:'bolder'}}>Artificial Intelligence </td>
							<td>3</td>
							<td>60</td>
							<td>C</td>
							<td>2.0</td>
							<td rowSpan="5">Fails</td>
						</tr>
						<tr>
							<td style={{fontWeight:'bolder'}}>Artificial Intelligence </td>
							<td>3</td>
							<td>60</td>
							<td>C</td>
							<td>2.0</td>
						</tr>
						<tr>
							<td style={{fontWeight:'bolder'}}>Artificial Intelligence </td>
							<td>3</td>
							<td>60</td>
							<td>Fail</td>
							<td>2.0</td>
						</tr>
						<tr>
							<td style={{fontWeight:'bolder'}}>Artificial Intelligence </td>
							<td>3</td>
							<td>60</td>
							<td>Fail</td>
							<td>2.0</td>
						</tr>
						<tr>
							<td>Total Marks (a) </td>
							<td>12</td>
							<td>121</td>
							<td>GPA</td>
							<td>1.0</td>
						</tr>
						<tr>
							<td>Eighth semester Fresh </td>
							<td>Credit hours</td>
							<td>Obt</td>
							<td>Grade</td>
							<td>GP</td>
							<td />
						</tr>

						<tr>
							<td style={{fontWeight:'bolder'}}>Artificial Intelligence </td>
							<td>3</td>
							<td>60</td>
							<td>C</td>
							<td>2.0</td>
							<td rowSpan="5">Fails</td>
						</tr>
						<tr>
							<td style={{fontWeight:'bolder'}}>Artificial Intelligence </td>
							<td>3</td>
							<td>60</td>
							<td>C</td>
							<td>2.0</td>
						</tr>
						<tr>
							<td style={{fontWeight:'bolder'}}>Artificial Intelligence </td>
							<td>3</td>
							<td>60</td>
							<td>Fail</td>
							<td>2.0</td>
						</tr>
						<tr>
							<td style={{fontWeight:'bolder'}}>Artificial Intelligence </td>
							<td>3</td>
							<td>60</td>
							<td>Fail</td>
							<td>2.0</td>
						</tr>
						<tr>
							<td style={{fontWeight:'bolder'}}>Total Marks (b) </td>
							<td>12</td>
							<td>250</td>
							<td>GPA</td>
							<td>2.19</td>
						</tr>
						<tr>
							<td style={{fontWeight:'bolder'}}>Total Marks (a) + (b) </td>
							<td>24</td>
							<td>372</td>
							<td>CGPA</td>
							<td>1.59</td>
							<td> </td>
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
}
