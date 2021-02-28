import { Form, Select } from 'antd';
import { useEffect, useState } from 'react';
import { Button, Col } from 'reactstrap';
import { CreateFrom } from '../../../functions/form';
import { useToasts } from 'react-toast-notifications';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllPrograms } from '../../../views/programSlice';
import { fetchAllSemester } from './semesterSlice';
import { fetchAllSubject } from '../../../views/FormSlice';
import { fetchAllStudent } from '../../../views/studentSlice';
const { Option } = Select;
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

const FormForm = () => {
	const { addToast } = useToasts();
	const subject = useSelector((state) => state.subject.subjects);
	const semester = useSelector((state) => state.semester.semesters);
	const program = useSelector((state) => state.program.programs);
	const student = useSelector((state) => state.student.students);
	const [ selectedSubject, setSelectedSubject ] = useState([]);
	const dispatch = useDispatch();
	useEffect(
		() => {
			dispatch(fetchAllPrograms());

			dispatch(fetchAllSemester());
			
		},
		[ dispatch ]
	);

	const onFinish = (values) => {
		CreateFrom({
			programId: values.Program,
			subjectId: selectedSubject,
			studentId: values.Student,
			semesterId: values.Semester,
			type: 'Fresh'
		})
			.then((res) => {
				addToast(`${values.Program} Added successfully...`, {
					appearance: 'success',
					autoDismiss: true
				});
			})
			.catch((err) => {
				addToast(`Something Errors check connecting`, {
					appearance: 'error',
					autoDismiss: true
				});
			});
	};
	const handleProgram = (value) => {
		dispatch(fetchAllSemester(value));
		dispatch(fetchAllStudent(value))
	};
	const handleSemester = (value) => {
		dispatch(fetchAllSubject(value));
	};
	const handleSubjects = (value) => {
		setSelectedSubject(value);
	};
	const handleStudent = (value) => {
		dispatch(fetchAllStudent());
	};

	return (
		<Form {...layout} style={{ padding: '10px 20px' }} name="basic" onFinish={onFinish}>
			<Form.Item
				label="Program"
				name="Program"
				rules={[
					{
						required: true
					}
				]}
			>
				<Select placeholder="Select the program" onChange={handleProgram} allowClear>
					{program.length === 0 ? (
						'Loading'
					) : (
						program[0].map((s) => {
							return (
								<Option key={s._id} value={s._id}>
									{s.name}
								</Option>
							);
						})
					)}
				</Select>
			</Form.Item>
			<Form.Item
				label="Semester"
				name="Semester"
				rules={[
					{
						required: true
					}
				]}
			>
				<Select placeholder="Select the Semester" onChange={handleSemester} allowClear>
					{semester.length === 0 ? (
						'Loading'
					) : (
						semester[0].map((sm) => {
							return (
								<Option key={sm._id} value={sm._id}>
									{sm.name}
								</Option>
							);
						})
					)}
				</Select>
			</Form.Item>

			<Form.Item
				label="Subject"
				name="Subject"
				rules={[
					{
						required: true
					}
				]}
			>
				<Select
					mode="multiple"
					allowClear
					style={{ width: '100%' }}
					placeholder="Please select"
					onChange={handleSubjects}
					placeholder="Select the program"
					allowClear
				>
					{subject.length === 0 ? (
						<div>Loading...</div>
					) : (
						subject[0].map((s) => {
							return (
								<Option key={s._id} value={s._id}>
									{s.name}
								</Option>
							);
						})
					)}
				</Select>
			</Form.Item>

			<Form.Item
				label="Student"
				name="Student"
				rules={[
					{
						required: true
					}
				]}
			>
				<Select placeholder="Select the Student" allowClear>
					{student.length === 0 ? (
						'Loading'
					) : (
						student[0].map((std) => {
							return (
								<Option key={std._id} value={std._id}>
									{std.firstName} {std.lastName}
								</Option>
							);
						})
					)}
				</Select>
			</Form.Item>
			<Form.Item
				label="Type"
				name="Type"
				rules={[
					{
						required: true
					}
				]}
			>
				<Select placeholder="Select the Type" allowClear>
					<Option value="Fresh">Fresh</Option>
					<Option value="Improve/Failure">Improve/Failure</Option>
				</Select>
			</Form.Item>
			<Form.Item {...tailLayout}>
				<Col className="text-right" xs="4">
					<Button color="primary" size="md">
						Save
					</Button>
				</Col>
			</Form.Item>
		</Form>
	);
};

export default FormForm;
