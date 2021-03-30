import { Form, Input, Select } from 'antd';
import { Button, Col } from 'reactstrap';
import { useToasts } from 'react-toast-notifications';
import { CreateSemester } from '../../../functions/semester';
import { ListProgram } from '../../../functions//program';
import { useEffect, useState } from 'react';

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

const Semester = () => {
	const [ program, setProgram ] = useState([]);
	useEffect(() => {
		ListProgram().then((res) => setProgram(res.data));
	}, []);
	const { addToast } = useToasts();
	const onFinish = (values) => {
		CreateSemester({ name: values.Semester, programId: values.Program })
			.then((res) => {
				addToast(`${values.Semester} Added successfully...`, {
					appearance: 'success',
					autoDismiss: true
				});
				
				console.log('Success:', res);
			})
			.catch((err) => {
				addToast(`Something Errors check connecting`, {
					appearance: 'error',
					autoDismiss: true
				});
				console.log(err);
			});
	};

	return (
		<Form
			{...layout}
			style={{ padding: '10px 20px' }}
			name="basic"
			initialValues={{
				remember: true
			}}
			onFinish={onFinish}
		>
			<Form.Item
				label="Program"
				name="Program"
				rules={[
					{
						required: true,
						message: 'Please input your program!'
					}
				]}
			>
				<Select placeholder="Select the program" allowClear>
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
						required: true,
						message: 'Please input your Semester!'
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

export default Semester;
