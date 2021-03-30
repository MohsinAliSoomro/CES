import { Form, Select } from 'antd';
import { useEffect } from 'react';
import { Button, Col } from 'reactstrap';
import { useToasts } from 'react-toast-notifications';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllPrograms } from '../../../views/programSlice';
import { fetchAllSemester } from './semesterSlice';
import { fetchAllSubject } from '../../../views/FormSlice';
import { fromSearch } from '../../../functions/marksLadger';
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

const FormForm = ({ setStudent, setSubject, type, setProgram, setSemester }) => {
	const { addToast } = useToasts();
	const subject = useSelector((state) => state.subject.subjects);
	const semester = useSelector((state) => state.semester.semesters);
	const program = useSelector((state) => state.program.programs);

	const dispatch = useDispatch();
	useEffect(
		() => {
			dispatch(fetchAllPrograms());
		},
		[ dispatch ]
	);
	const onFinish = (values) => {
		fromSearch({
			programId: values.Program,
			subjectId: values.Subject,
			semesterId: values.Semester,
			type: type
		})
			.then((res) => {
				setProgram(values.Program);
				setSemester(values.Semester);
				if (res.data.length === 0) {
					addToast(` form not found `, {
						appearance: 'error',
						autoDismiss: true
					});
				}

				if (res.data.length >0) {
					setStudent(res.data);
					addToast(` form loading `, {
						appearance: 'success',
						autoDismiss: true
					});
				}
				console.log(res.data);
			})
			.catch((err) => {
				addToast(err.message, {
					appearance: 'error',
					autoDismiss: true
				});
			});
	};
	const handleProgram = (value) => {
		dispatch(fetchAllSemester(value));
	};
	const handleSemester = (value) => {
		dispatch(fetchAllSubject(value));
	};
	const handleSubject = (value) => {
		setSubject(value);
	};

	return (
		<Form {...layout} style={{ padding: '10px 20px' }} name="basic" onFinish={onFinish}>
			{/* <Form.Item
				label="Session"
				name="Session"
				rules={[
					{
						required: true
					}
				]}
			></Form.Item> */}

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
					{program.length > 0 &&
						program[0].map((s) => {
							return (
								<Option key={s._id} value={s._id}>
									{s.name}
								</Option>
							);
						})}
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
					{semester.length > 0 &&
						semester[0].map((sm) => {
							return (
								<Option key={sm._id} value={sm._id}>
									{sm.name}
								</Option>
							);
						})}
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
					allowClear
					style={{ width: '100%' }}
					placeholder="Select the Subject"
					allowClear
					onChange={handleSubject}
				>
					{subject.length > 0 &&
						subject[0].length > 0 &&
						subject[0].map((s) => {
							return (
								<Option key={s._id} value={s._id}>
									{s.name}
								</Option>
							);
						})}
				</Select>
			</Form.Item>
			{/* <Form.Item
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
			</Form.Item> */}
			<Form.Item {...tailLayout}>
				<Col className="text-right" xs="4">
					<Button color="primary" size="md">
						Search
					</Button>
				</Col>
			</Form.Item>
		</Form>
	);
};

export default FormForm;
