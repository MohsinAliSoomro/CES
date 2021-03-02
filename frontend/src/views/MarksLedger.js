import React, { useState } from 'react';
import styles from './Program.module.css';
import axios from 'axios';
import qs from 'qs';
import {
	Badge,
	Card,
	CardHeader,
	CardFooter,
	DropdownMenu,
	DropdownItem,
	UncontrolledDropdown,
	DropdownToggle,
	Media,
	Table,
	Container,
	Row,
	Button
} from 'reactstrap';
import { ToastProvider } from 'react-toast-notifications';
// core components
import Header from 'components/Headers/Header.js';
import MarksLedgerForm from 'components/MarksLedger/form';

const MarksLedger = () => {
	const [ student, setStudent ] = useState([]);
	const [ subject, setSubject ] = useState();
	const [ mark, setMark ] = useState({ mrk: '', formId: '', subject: '' });

	const form = [ { mark: '', formId: '', subjectId: '' } ];
	const handleInput = (e, index, frm) => {
		// markss.push({ mark: e.target.value, formId: frm });
		const mrk = form.map((i) => i.mark);
		const fr = form.map((i) => i.formId);
		const sb = form.map((i) => i.subjectId);
		if (mrk !== '' && fr !== '' && sb !== '') {
			// const removeDuplicate = [ ...new Set(form.map((i) => i.formId)) ];

			form.push({ marks: parseInt(e.target.value), formId: frm, subjectId: subject });
			console.log(form);
		}
	};

	const handleSubmit = () => {
		axios
			.post('http://localhost:4000/marks/marks', form)
			.then((res) => console.log('Successfully Created', res.data))
			.catch((er) => console.log(er));
	};
	return (
		<React.Fragment>
			<Header />
			{/* Page content */}
			<Container className="mt--7" fluid>
				{/* Table */}
				<div className="row">
					<div className="col-sm-12 col-lg-6 col-md-6 mb-3">
						<div className=" shadow" style={{ backgroundColor: 'white', borderRadius: '6px' }}>
							<h2 className={styles.formHeading}>Marks Ledger Form</h2>
							<ToastProvider>
								<MarksLedgerForm setStudent={setStudent} setSubject={setSubject} />
							</ToastProvider>
						</div>
					</div>
					<div className="col-sm-12 col-lg-6 col-md-6 mb-3">
						<div className=" shadow" style={{ backgroundColor: 'white', borderRadius: '6px' }} />
					</div>
				</div>
				<Row>
					<div className="col">
						<Card className="shadow">
							<CardHeader className="border-0">
								<h3 className="mb-0">Marks Ledger</h3>
							</CardHeader>
							<Table className="align-items-center table-flush" responsive>
								<thead className="thead-light">
									<tr>
										<th scope="col">Roll No</th>
										<th scope="col">Name</th>
										<th scope="col">Enter Marks</th>
										<th scope="col" />
									</tr>
								</thead>
								<tbody>
									{student.length > 0 &&
										student.map((pro, index) => {
											console.log(pro);
											return (
												<tr key={pro.studentId._id}>
													<th scope="row">
														<Media className="align-items-center">
															<a
																className="avatar rounded-circle mr-3"
																href="#pablo"
																onClick={(e) => e.preventDefault()}
															>
																<img
																	alt="..."
																	src={
																		require('../assets/img/theme/bootstrap.jpg')
																			.default
																	}
																/>
															</a>
															<Media>
																<span className="mb-0 text-sm">
																	{pro.studentId.firstName}
																</span>
															</Media>
														</Media>
													</th>
													<td>{pro.studentId.lastName}</td>
													<td>
														<input
															type="number"
															value={mark.mrk[index]}
															onBlur={(e) => handleInput(e, index, pro._id)}
														/>
														{/* <FormComponent value={mark[index].id} setValue={setMark} /> */}

														<button type="submit" onClick={handleSubmit}>
															Submit
														</button>
													</td>
													{/* <td>{pro.creditHour}</td>
                                                    <td>{pro.semesterId.name}</td> */}
													<td>
														<Badge color="" className="badge-dot mr-4">
															<i className={'bg-success'} />
															active
														</Badge>
													</td>
													<td>121</td>
													<td className="text-right">
														<UncontrolledDropdown>
															<DropdownToggle
																className="btn-icon-only text-light"
																href="#pablo"
																role="button"
																size="sm"
																color=""
																onClick={(e) => e.preventDefault()}
															>
																<i className="fas fa-ellipsis-v" />
															</DropdownToggle>
															<DropdownMenu className="dropdown-menu-arrow" right>
																<DropdownItem
																	href="#pablo"
																	onClick={(e) => e.preventDefault()}
																>
																	Action
																</DropdownItem>
															</DropdownMenu>
														</UncontrolledDropdown>
													</td>
												</tr>
											);
										})}
								</tbody>
							</Table>
							<CardFooter className="py-4">
								<nav aria-label="..." />
								<button onClick={handleSubmit}>Save</button>
							</CardFooter>
						</Card>
					</div>
				</Row>
				{/* Dark table */}
			</Container>
		</React.Fragment>
	);
};

const FormComponent = ({ value, setValue }) => {
	const handleInputs = (e, index) => {};
	console.log('value', value, 'Function', setValue);
	return (
		<div>
			<input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
		</div>
	);
};
export default MarksLedger;
