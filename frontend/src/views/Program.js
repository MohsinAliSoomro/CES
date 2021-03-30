import React, { useEffect, useState } from 'react';
import DepartmentForm from '../components/Form/dep';
import styles from './Program.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllPrograms } from './programSlice';
import { fetchAllDepartment } from '../components/Form/dep/departmentSlice';
import { UpdateProgram, deleteProgram } from '../functions/program';
import {useHistory} from 'react-router-dom'
import {
	Card,
	Col,
	Button,
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
import { Modal, Form, Input, Select } from 'antd';
import { ToastProvider, useToasts } from 'react-toast-notifications';
// core components
import Header from 'components/Headers/Header.js';
import ProgramForm from 'components/Form/program';
const layout = {
	labelCol: {
		span: 24
	},
	wrapperCol: {
		span: 24
	}
};
const tailLayout = {
	wrapperCol: {
		offset: 8,
		span: 16
	}
};
const { Option } = Select;
const Program = () => {
	const dispatch = useDispatch();
	const [ isModalVisible, setIsModalVisible ] = useState(false);
	const program = useSelector((state) => state.program.programs);
	const { addToast } = useToasts();
	const departments = useSelector((state) => state.department.departments);
const [getD,setD]=useState()
	const [ editValue, setEditValue ] = useState();

	const showModal = (val) => {
		console.log("val",val)
		setEditValue(val);
		setD(val.department._id)
		setIsModalVisible(true);
	};

	const handleOk = () => {
		setIsModalVisible(false);
	};

	const handleCancel = () => {
		setIsModalVisible(false);
	};
	useEffect(
		() => {
			let mount = true;
			if (mount) {
				dispatch(fetchAllPrograms());
				dispatch(fetchAllDepartment());
			}
			return () => (mount = false);
		},
		[ dispatch ]
	);
	const onFinish = (values) => {
		UpdateProgram(editValue._id, { name: values.Program, department: values.Department })
			.then((res) => {
				addToast(`${values.Program} Update successfully...`, {
					appearance: 'success',
					autoDismiss: true
				});
				dispatch(fetchAllPrograms());
			})
			.catch((err) => {
				addToast(`Something Errors check connecting`, {
					appearance: 'error',
					autoDismiss: true
				});
			});
	};
	const dProgram = (values) => {
		deleteProgram(values)
			.then((res) => {
				addToast(` delete successfully...`, {
					appearance: 'success',
					autoDismiss: true
				});
				dispatch(fetchAllPrograms());
			})
			.catch((err) => {
				addToast(`Something Errors check connecting`, {
					appearance: 'error',
					autoDismiss: true
				});
			});
	};

	const handleSubmitUpdate = (e) => {
		e.preventDefault()
		UpdateProgram(editValue._id, {
			name: editValue && editValue.name,
			department: getD
		})
			.then((res) => {
				addToast(`Update successfully...`, {
					appearance: 'success',
					autoDismiss: true
				});
				console.log('UpdateResponse', res);
				dispatch(fetchAllPrograms());
			})
			.catch((err) => {
				addToast(`Something Errors check connecting`, {
					appearance: 'error',
					autoDismiss: true
				});
			});
	};
	const history = useHistory();
	useEffect(() => {
		if (localStorage.getItem("user") === null) {
			history.push('/auth/login')
		}
	},[])
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
							<ToastProvider>
								<DepartmentForm />
							</ToastProvider>
						</div>
					</div>
					<div className="col-sm-12 col-lg-6 col-md-6 mb-3">
						<div className=" shadow" style={{ backgroundColor: 'white', borderRadius: '6px' }}>
							<h2 className={styles.formHeading}>Program</h2>
							<ToastProvider>
								<ProgramForm />
							</ToastProvider>
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

										<th scope="col">Options</th>
										<th scope="col" />
									</tr>
								</thead>
								<tbody>
									{program &&
										program.length > 0 &&
										program[0].map((pro) => {
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
													<td>{pro.department.name}</td>
													{/* <td>
														<Badge color="" className="badge-dot mr-4">
															<i className={'bg-success'} />
															active
														</Badge>
													</td>
													<td>121</td> */}
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
																<DropdownItem onClick={() => dProgram(pro._id)}>
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
			<ToastProvider>
				<Modal title="Update Program" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
					<form onSubmit={handleSubmitUpdate}>
						<label>
							{' '}
							program
							<input value={editValue && editValue.name}
								onChange={(e) => setEditValue({ ...editValue,name:e.target.value })} />
							<select defaultValue={editValue && editValue.department.name}
								onChange={(e) =>setD(e.target.value)}>
								{departments.length === 0 ? (
									'loading'
								) : (
									departments[0].map((d) => {
										return (
											<option selected={editValue && editValue.department.name}  key={d._id} value={d._id}>
												{d.name}
											</option>
										);
									})
								)}

							</select>
							<button>Update</button>
						</label>
					</form>
					<Form {...layout} style={{ padding: '10px 20px' }} name="basic" onFinish={onFinish}>
						<Form.Item
							label="Program"
							name="Program"
							initialValue={editValue && editValue.name}
							rules={[
								{
									required: true,
									message: 'Please input your Program!'
								}
							]}
						>
							<Input defaultValue={editValue && editValue.name} />
						</Form.Item>
						<Form.Item
							label="Department"
							name="Department"
							initialValue={editValue && editValue.department.name}
							rules={[
								{
									required: true
								}
							]}
						>
							<Select placeholder="Select the department" allowClear>
								{departments.length === 0 ? (
									'Loading'
								) : (
									departments[0].map((d) => {
										return (
											<Option key={d._id} value={d._id}>
												{d.name}
											</Option>
										);
									})
								)}
							</Select>
						</Form.Item>
						<Form.Item {...tailLayout}>
							<Col className="text-right" xs="4">
								<Button color="primary" size="md">
									Update
								</Button>
							</Col>
						</Form.Item>
					</Form>
				</Modal>
			</ToastProvider>
		</React.Fragment>
	);
};

export default Program;
