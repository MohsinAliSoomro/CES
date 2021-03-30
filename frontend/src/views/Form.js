import React, { useEffect } from 'react';
import styles from './Program.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllSubject } from './FormSlice';
import { useHistory} from 'react-router-dom';
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
	Row
} from 'reactstrap';
import { ToastProvider } from 'react-toast-notifications';
// core components
import Header from 'components/Headers/Header.js';
import FormForm from 'components/Form/form';

const Form = () => {
	const dispatch = useDispatch();
	const subject = useSelector((state) => state.subject.subjects);
	const history = useHistory();
	useEffect(
		() => {
			dispatch(fetchAllSubject());
			if (localStorage.getItem("user")===null) {
				history.push('/auth/login')
			}
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
							<h2 className={styles.formHeading}>Form</h2>
							<ToastProvider>
								<FormForm />
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
										<th scope="col">Subject</th>
										<th scope="col">Type</th>
										<th scope="col">Credit hour</th>
										<th scope="col">Semester</th>
										<th scope="col">Options</th>
										<th scope="col" />
									</tr>
								</thead>
								<tbody>
									{subject.length > 0 &&
										subject[0].length > 0 &&
										subject[0].map((pro) => {
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
																<span className="mb-0 text-sm">{pro.name}</span>
															</Media>
														</Media>
													</th>
													<td>{pro.type}</td>
													<td>{pro.creditHour}</td>
													<td>{pro.semesterId.name}</td>
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
			</Container>
		</React.Fragment>
	);
};

export default Form;
