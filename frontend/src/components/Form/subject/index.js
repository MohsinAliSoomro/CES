import { Form, Input, Select } from 'antd';
import { useEffect, useState } from 'react';
import { Button, Col } from 'reactstrap';
import { ListSemester } from '../../../functions/semester';
import { CreateSubject } from '../../../functions/subject';
import { useToasts } from 'react-toast-notifications';
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
	const { addToast } = useToasts();
	const [ sub, setSub ] = useState([]);
	useEffect(() => {
		let mounted = true;
		if (mounted) {
			ListSemester().then((res) => {
				if (res.data) {
					setSub(res.data);
				}
			});
		}
		return () => {
			mounted = false;
		};
	}, []);

	const onFinish = (values) => {
		CreateSubject({ name: values.Subject, semester: values.Semster })
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
	};

	return (
		<Form {...layout} style={{ padding: '10px 20px' }} name="basic" onFinish={onFinish}>
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
				label="Semester"
				name="Semester"
				rules={[
					{
						required: true
					}
				]}>
				<Select placeholder="Select the Semester" allowClear>
					{sub.map((d) => {
						return <Option value={d._id}>{d.name}</Option>;
					})}
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

export default SubjectForm;
