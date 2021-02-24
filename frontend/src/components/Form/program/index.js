import { Form, Input, Select } from 'antd';
import { useEffect } from 'react';
import { Button, Col } from 'reactstrap';
import { CreateProgram } from '../../../functions/program';
import { useToasts } from 'react-toast-notifications';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllPrograms } from '../../../views/programSlice';
import { fetchAllDepartment } from '../dep/departmentSlice';
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
	const { addToast } = useToasts();
	const departments = useSelector((state) => state.department.departments);
	console.log('department=>', departments);
	const dispatch = useDispatch();
	useEffect(
		() => {
			dispatch(fetchAllDepartment());
		},
		[ dispatch ]
	);

	const onFinish = (values) => {
		CreateProgram({ name: values.Program, department: values.Department })
			.then((res) => {
				dispatch(fetchAllPrograms());
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
					{departments.length === 0 ? (
						'Loading'
					) : (
						departments[0].map((d) => {
							return (
								<Option key={d._id} value={d._id}>
									{d.name}
								</Option>
							);
						})
					)}
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
