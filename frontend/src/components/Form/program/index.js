import { Form, Input,Select } from 'antd';
import { Button, Col } from 'reactstrap';
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

const ProgramForm = () => {
	const onFinish = (values) => {
		console.log('Success:', values);
	};

	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo);
	};

	return (
		<Form
			{...layout}
			style={{ padding: '10px 20px' }}
			name="basic"
			onFinish={onFinish}
			onFinishFailed={onFinishFailed}
		>
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
				<Input />
			</Form.Item>
            <Form.Item
				label="Department"
				name="Department"
				rules={[
					{
						required: true,
					}
				]}
			>
                <Select placeholder="Select the department" allowClear>
                    <Option value='cs'>CS</Option>
                    <Option value='bba'>BBA</Option>
                    <Option value='math'>MATH</Option>
                    <Option value='commerce'>COMMERCE</Option>
                </Select>
			</Form.Item>
			<Form.Item {...tailLayout}>
				<Col className="text-right" xs="4">
					<Button color="primary" href="#pablo" size="md">
						Save
					</Button>
				</Col>
			</Form.Item>
		</Form>
	);
};

export default ProgramForm;
