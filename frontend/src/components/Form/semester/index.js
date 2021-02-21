import { Form, Input } from 'antd';
import { Button, Col } from 'reactstrap';
import { useToasts } from 'react-toast-notifications';
import { CreateSemester } from '../../../functions/semester';
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
	const { addToast } = useToasts();
	const onFinish = (values) => {
		console.log('Success:', values);
		CreateSemester({ name: values.Semester })
			.then((res) => {
				addToast(`${values.Semester} Added successfully...`, {
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
