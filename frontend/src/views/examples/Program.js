import React from 'react';
import DepartmentForm from '../../components/Form/dep';
import styles from './Program.module.css';
// reactstrap components
import program from '../../json/program.json';
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
	Pagination,
	PaginationItem,
	PaginationLink,
	Table,
	Container,
	Row
} from 'reactstrap';
// core components
import Header from 'components/Headers/Header.js';
import ProgramForm from 'components/Form/program';

const Program = () => {
	console.log('Program', program);
	return (
		<React.Fragment>
			<Header />
			{/* Page content */}

			<Container className="mt--7" fluid>
				{/* Table */}
				<div className="row">
					<div className="col-sm-12 col-lg-6 col-md-6 mb-3">
						<div className=" shadow" style={{ backgroundColor: 'white', borderRadius: '6px' }}>
							<h2 className={styles.formHeading}>Department</h2>
							<DepartmentForm />
						</div>
					</div>
					<div className="col-sm-12 col-lg-6 col-md-6 mb-3">
						<div className=" shadow" style={{ backgroundColor: 'white', borderRadius: '6px' }}>
							<h2 className={styles.formHeading}>Program</h2>
							<ProgramForm />
						</div>
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
										<th scope="col">Department</th>
										<th scope="col">Status</th>
										<th scope="col">Users</th>
										<th scope="col">Options</th>
										<th scope="col" />
									</tr>
								</thead>
								<tbody>
									{program.program.map((pro) => {
										return (
											<tr>
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
																	require('../../assets/img/theme/bootstrap.jpg')
																		.default
																}
															/>
														</a>
														<Media>
															<span className="mb-0 text-sm">{pro.name}</span>
														</Media>
													</Media>
												</th>
												<td>{pro.department}</td>
												<td>
													<Badge color="" className="badge-dot mr-4">
														<i
															className={
																pro.status === 'active' ? 'bg-success' : 'bg-warning'
															}
														/>
														{pro.status}
													</Badge>
												</td>
												<td>{pro.student}</td>
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
								<nav aria-label="...">
									<Pagination
										className="pagination justify-content-end mb-0"
										listClassName="justify-content-end mb-0"
									>
										<PaginationItem className="disabled">
											<PaginationLink
												href="#pablo"
												onClick={(e) => e.preventDefault()}
												tabIndex="-1"
											>
												<i className="fas fa-angle-left" />
												<span className="sr-only">Previous</span>
											</PaginationLink>
										</PaginationItem>
										<PaginationItem className="active">
											<PaginationLink href="#pablo" onClick={(e) => e.preventDefault()}>
												1
											</PaginationLink>
										</PaginationItem>
										<PaginationItem>
											<PaginationLink href="#pablo" onClick={(e) => e.preventDefault()}>
												2 <span className="sr-only">(current)</span>
											</PaginationLink>
										</PaginationItem>
										<PaginationItem>
											<PaginationLink href="#pablo" onClick={(e) => e.preventDefault()}>
												3
											</PaginationLink>
										</PaginationItem>
										<PaginationItem>
											<PaginationLink href="#pablo" onClick={(e) => e.preventDefault()}>
												<i className="fas fa-angle-right" />
												<span className="sr-only">Next</span>
											</PaginationLink>
										</PaginationItem>
									</Pagination>
								</nav>
							</CardFooter>
						</Card>
					</div>
				</Row>
				{/* Dark table */}
			</Container>
		</React.Fragment>
	);
};

export default Program;
