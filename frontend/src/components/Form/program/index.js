import { Form, Input, Select } from 'antd';
import { useEffect, useState } from 'react';
import { Button, Col } from 'reactstrap';
import { ListDepartment } from '../../../functions/department';
import { CreateProgram } from '../../../functions/program';
import {useToasts} from 'react-toast-notifications'
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
	const {addToast } = useToasts();
	const [ dep, setDep ] = useState([]);
	useEffect(() => {
		let mounted = true;
		if (mounted) {
			ListDepartment().then((res) => {
				if (res.data) {
					setDep(res.data);
				}
			});
		}
		return () => {
			mounted = false;
		};
	}, []);
	
	const onFinish = (values) => {
	
		CreateProgram({ name: values.Program, department: values.Department }).then((res) => {
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

	

	return (
		<Form
			{...layout}
			style={{ padding: '10px 20px' }}
			name="basic"
			onFinish={onFinish}
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
						required: true
					}
				]}
			>
				<Select placeholder="Select the department" allowClear>
					{dep.map(d => {
						return (
							<Option value={d._id}>{ d.name}</Option>
						)
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

export default ProgramForm;