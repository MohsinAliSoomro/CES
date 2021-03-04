import React, { useEffect } from 'react';
import StudentForm from '../components/Form/student';
import styles from './Program.module.css';

import { useSelector, useDispatch } from 'react-redux';
import { fetchAllStudent } from './studentSlice';
// reactstrap components

import {
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
	Row
} from 'reactstrap';
import { ToastProvider } from 'react-toast-notifications';
// core components
import Header from 'components/Headers/Header.js';

const Student = () => {
	const dispatch = useDispatch();
	const students = useSelector((state) => state.student.students);
	console.log(students)
	useEffect(
		() => {
			dispatch(fetchAllStudent());
		},
		[ dispatch ]
	);
	return (
		<React.Fragment>
			<Header />
			{/* Page content */}

			<Container className="mt--7" fluid>
				{/* Table */}
				<div className="row">
					<div className="col-sm-12 col-lg-6 col-md-6 mb-3">
						<div className=" shadow" style={{ backgroundColor: 'white', borderRadius: '6px' }}>
							<h2 className={styles.formHeading}>Student</h2>
							<ToastProvider>
								<StudentForm />
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
								<h3 className="mb-0">Departments & Programs</h3>
							</CardHeader>
							<Table className="align-items-center table-flush" responsive>
								<thead className="thead-light">
									<tr>
										<th scope="col">Program</th>
										<th scope="col">First Name</th>
										<th scope="col">Last Name</th>
										<th scope="col">Father Name</th>
										<th scope="col">Surname</th>
										<th scope="col">Religion</th>
										<th scope="col">Nationality</th>
										<th scope="col">Address</th>
										<th scope="col">District</th>
										<th scope="col">Options</th>
									</tr>
								</thead>
								<tbody>
									{/* {students.length === 0 ? (
										<div>Load	ing...</div>
									) : (
										students[0].map((pro) => {
											return (
												<tr key={pro._id}>
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
																	{pro.programId.name ? pro.programId.name : ' '}
																</span>
															</Media>
														</Media>
													</th>
													<td>{pro.firstName}</td>
													<td>{pro.lastName}</td>
													<td>{pro.fatherName}</td>
													<td>{pro.surname}</td>
													<td>{pro.religion}</td>
													<td>{pro.nationality}</td>
													<td>{pro.address}</td>
													<td>{pro.district}</td>

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
																<DropdownItem
																	href="#pablo"
																	onClick={(e) => e.preventDefault()}
																>
																	Another action
																</DropdownItem>
																<DropdownItem
																	href="#pablo"
																	onClick={(e) => e.preventDefault()}
																>
																	Something else here
																</DropdownItem>
															</DropdownMenu>
														</UncontrolledDropdown>
													</td>
												</tr>
											);
										})
									)} */}
								</tbody>
							</Table>
							<CardFooter className="py-4">
								<nav aria-label="..." />
							</CardFooter>
						</Card>
					</div>
				</Row>
				{/* Dark table */}
			</Container>
		</React.Fragment>
	);
};

export default Student;
