import React, { useState } from 'react';
import styles from './Program.module.css';

import { UpdateMarks } from '../functions/marks';
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
	Modal,
	ModalBody,
	ModalFooter,
	ModalHeader,
	Button
} from 'reactstrap';
import { ToastProvider } from 'react-toast-notifications';
// core components
import Header from 'components/Headers/Header.js';
import MarksLedgerForm from 'components/MarksLedger/form';

const ImproveFailure = () => {
	const [ student, setStudent ] = useState([]);
	const [ subject, setSubject ] = useState();
	const [ isOpen, setIsOpen ] = useState({ isOpen: false, studentId: '', subjectId: '', formId: '' });

	const [ updatedMarks, setUpdatedMarks ] = useState(0);
	const form = [ { marks: '', formId: '', subjectId: '' } ];

	const handelUpdateMarks = (e) => {
		e.preventDefault();
		const data = { formId: isOpen.formId, marks: updatedMarks };
		UpdateMarks(isOpen.subjectId, isOpen.studentId, data)
			.then((res) => {
				alert('Marks Added');
				form.length = 0;
			})
			.catch((er) => alert(er));
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
								<MarksLedgerForm
									setStudent={setStudent}
									setSubject={setSubject}
									type="Improve/Failure"
								/>
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
														<Button
															color="secondary"
															onClick={() =>
																setIsOpen({
																	isOpen: true,
																	studentId: pro.studentId._id,
																	subjectId: subject,
																	formId: pro._id
																})}
														>
															Marks
														</Button>
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
							</CardFooter>
						</Card>
					</div>
				</Row>
				{/* Dark table */}
				<Modal isOpen={isOpen.isOpen} toggle={() => setIsOpen({ isOpen: false })}>
					<ModalHeader toggle={() => setIsOpen(!isOpen)}>Improve Marks</ModalHeader>
					<ModalBody>
						<h1>update Marks</h1>
						<form onSubmit={handelUpdateMarks}>
							<input
								type="number"
								value={updatedMarks}
								onChange={(e) => setUpdatedMarks(e.target.value)}
							/>
							<button>Submit</button>
						</form>
					</ModalBody>
					<ModalFooter>
						<Button color="primary" onClick={() => setIsOpen({ isOpen: false })}>
							Cancel
						</Button>
					</ModalFooter>
				</Modal>
			</Container>
		</React.Fragment>
	);
};

export default ImproveFailure;
