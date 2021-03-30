import React, { useEffect, useState } from 'react';
import StudentForm from '../components/Form/student';
import styles from './Program.module.css';

import { useSelector, useDispatch } from 'react-redux';
import { fetchAllStudent } from './studentSlice';
import { ListStudent, DeleteStudent, UpdateStudent } from '../functions/student';
// reactstrap components
import { ListProgram } from '../functions/program';
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
import { ToastProvider, useToasts } from 'react-toast-notifications';
// core components
import Header from 'components/Headers/Header.js';
import { Modal } from 'antd';
const Student = () => {
	const dispatch = useDispatch();
	const { addToast } = useToasts();
	const [ isModalVisible, setIsModalVisible ] = useState(false);
	const [ students, setStudents ] = useState();
	const [ editValue, setEditValue ] = useState();
	const [ program, setProgram ] = useState();
	console.log('Students', students);
	useEffect(
		() => {
			ListStudent().then((res) => {
				setStudents(res.data);
			});
		},
		[ dispatch ]
	);
	const showModal = (val) => {
		// setEditValue(val);
		console.log(val);
		setEditValue(val);
		ListProgram()
			.then((res) => {
				console.log(res.data);
				setProgram(res.data);
			})
			.catch((er) => console.log(er));
		setIsModalVisible(true);
	};

	const handleOk = () => {
		setIsModalVisible(false);
	};

	const handleCancel = () => {
		setIsModalVisible(false);
	};
	console.log(editValue);
	const handleDelete = (id) => {
		DeleteStudent(id)
			.then((res) => {
				addToast(` delete successfully...`, {
					appearance: 'success',
					autoDismiss: true
				});
				ListStudent().then((res) => {
					setStudents(res.data);
				});
			})
			.catch((er) => {
				addToast(` Delete fail`, {
					appearance: 'error',
					autoDismiss: true
				});
			});
	};
	const handleSubmitUpdate = (e) => {
e.preventDefault()
		UpdateStudent(editValue._id, {
			firstName: editValue.firstName,
			lastName: editValue.lastName,
			fatherName: editValue.fatherName,
			religion: editValue.religion,
			surname: editValue.surname,
			nationality: editValue.nationality,
			address: editValue.address,
			district: editValue.district,
			programId: editValue.programId,
			rollno: editValue.rollno
		}).then(res => {
			addToast(` update successfully...`, {
				appearance: 'success',
				autoDismiss: true
			});
			ListStudent().then((res) => {
				setStudents(res.data);
			});
		}).catch(er => {
			addToast(` Update fail...`, {
				appearance: 'error',
				autoDismiss: true
			});
			
		})
	};
	console.log(editValue)
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
								<StudentForm setStudents={setStudents} />
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
									{students &&
										students.map((pro) => {
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
																	{pro.programId && pro.programId.name}
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
																<DropdownItem onClick={() => showModal(pro)}>
																	Edit
																</DropdownItem>
																<DropdownItem onClick={() => handleDelete(pro._id)}>
																	Delete
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
			<Modal title="Update Student" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
				<form onSubmit={handleSubmitUpdate}>
					<label>Program</label>
					<select defaultValue={editValue && editValue.programId.name} onChange={(e)=>setEditValue({ ...editValue, programId: e.target.value })}>
						{program &&
							program.map((p) => {
								return (
									<option selected={editValue && editValue.programId.name} key={p._id} value={p._id}>
										{p.name}
									</option>
								);
							})}
					</select>
					<label>
						{' '}
						Roll No
						<input
							value={editValue && editValue.rollno}
							placeholder="first Name"
							onChange={(e) => setEditValue({ ...editValue, rollno: e.target.value })}
						/>
					</label>
					<label>
						{' '}
						First Name
						<input
							value={editValue && editValue.firstName}
							placeholder="first Name"
							onChange={(e) => setEditValue({ ...editValue, firstName: e.target.value })}
						/>
					</label>
					<label>
						{' '}
						Last Name
						<input
							value={editValue && editValue.lastName}
							placeholder="first Name"
							onChange={(e) => setEditValue({ ...editValue, lastName: e.target.value })}
						/>
					</label>
					<label>
						{' '}
						Father Name
						<input
							value={editValue && editValue.fatherName}
							placeholder="first Name"
							onChange={(e) => setEditValue({ ...editValue, fatherName: e.target.value })}
						/>
					</label>

					<label>
						{' '}
						Surname
						<input
							value={editValue && editValue.surname}
							placeholder="first Name"
							onChange={(e) => setEditValue({ ...editValue, surname: e.target.value })}
						/>
					</label>
					<label>
						{' '}
						Religion
						<input
							value={editValue && editValue.religion}
							placeholder="first Name"
							onChange={(e) => setEditValue({ ...editValue, religion: e.target.value })}
						/>
					</label>
					<label>
						{' '}
						Nationality
						<input
							value={editValue && editValue.nationality}
							placeholder="first Name"
							onChange={(e) => setEditValue({ ...editValue, nationality: e.target.value })}
						/>
					</label>
					<label>
						{' '}
						Address
						<input
							value={editValue && editValue.address}
							placeholder="first Name"
							onChange={(e) => setEditValue({ ...editValue, address: e.target.value })}
						/>
					</label>
					<label>
						{' '}
						District
						<input
							value={editValue && editValue.district}
							placeholder="first Name"
							onChange={(e) => setEditValue({ ...editValue, district: e.target.value })}
						/>
					</label>
					<button>Update</button>
				</form>
			</Modal>
		</React.Fragment>
	);
};

export default Student;
