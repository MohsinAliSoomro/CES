import { Form, Input, Select } from 'antd';
import { useEffect, useState } from 'react';
import { Button, Col } from 'reactstrap';
import { CreateSubject } from '../../../functions/subject';
import { useToasts } from 'react-toast-notifications';
import { ListProgram } from '../../../functions/program';
import { SemesterProgram } from '../../../functions/semester';
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

const SubjectForm = () => {
	const [ program, setProgram ] = useState([]);
	const [ semester, setSemester ] = useState([]);
	const { addToast } = useToasts();
	useEffect(() => {
		let mounted = true;
		if (mounted) {
			ListProgram().then((res) => setProgram(res.data));
		}
		return () => {
			mounted = false;
		};
	}, []);

	const onFinish = (values) => {
		CreateSubject({
			name: values.Subject,
			semesterId: values.Semester,
			creditHour: Number(values.CreditHour),
			type: values.Type
		})
			.then((res) => {
				addToast(`${values.Subject} Added successfully...`, {
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
		values.CreditHour = "3"
		values.Subject = ""
		values.Semester = ""
		values.Type=""
	};
	const selectProgram = (value) => {
		console.log(value);
		SemesterProgram(value).then((res) => {
			setSemester(res.data);
			console.log(res.data);
		});
	};
	return (
		<Form {...layout} style={{ padding: '10px 20px' }} name="basic" onFinish={onFinish}>
			<Form.Item
				label="Program"
				name="Program"
				rules={[
					{
						required: true,
						message: 'Please input your Program!'
					}
				]}
			>
				<Select placeholder="Select the program" onChange={selectProgram} allowClear>
					{program.map((d) => {
						return (
							<Option key={d._id} value={d._id}>
								{d.name}
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
				<Select placeholder="Select the Semester" allowClear>
					{semester.map((d) => {
						return <Option value={d._id}>{d.name}</Option>;
					})}
				</Select>
			</Form.Item>

			<Form.Item
				label="Subject"
				name="Subject"
				rules={[
					{
						required: true,
						message: 'Please input your Subject!'
					}
				]}
			>
				<Input />
			</Form.Item>
			<Form.Item
				label="Type"
				name="Type"
				rules={[
					{
						required: true,
						message: 'Please input subject Type!'
					}
				]}
			>
				<Select placeholder="Select the Type"  allowClear>
					<Option value="Theory">Theory</Option>
					<Option value="Practical">Practical</Option>
				</Select>
			</Form.Item>

			<Form.Item
				label="CreditHour"
				name="CreditHour"
				value="3"
				rules={[
					{
						required: true,
						message: 'Please input your CreditHour!'
					}
				]}
			>
				<Input />
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

export default SubjectForm;
