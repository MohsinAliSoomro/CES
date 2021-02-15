import { Form, Input } from 'antd';
import { Button, Col } from 'reactstrap';
import { useToasts } from 'react-toast-notifications';
import { CreateDepartment } from '../../../functions/department';
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

const DepartmentForm = () => {
	const { addToast } = useToasts();
	const onFinish = (values) => {
		console.log('Success:', values);
		CreateDepartment({ name: values.Department })
			.then((res) => {
				addToast(`${values.Department} Added successfully...`, {
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
				label="Department"
				name="Department"
				rules={[
					{
						required: true,
						message: 'Please input your Department!'
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

export default DepartmentForm;
