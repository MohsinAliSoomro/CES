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

const FormForm = ({setStudent}) => {
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
			type: values.Type
		})
			.then((res) => {
				setStudent(res.data);
				console.log(res.data);

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
	};
	const handleSemester = (value) => {
		dispatch(fetchAllSubject(value));
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
					allowClear
					style={{ width: '100%' }}
					placeholder="Select the Subject"
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
						Search
					</Button>
				</Col>
			</Form.Item>
		</Form>
	);
};

export default FormForm;
