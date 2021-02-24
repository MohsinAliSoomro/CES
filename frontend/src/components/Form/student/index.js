import { Form, Input, Select } from 'antd';
import { useEffect, useState } from 'react';
import { Button, Col } from 'reactstrap';
import { ListSemester } from '../../../functions/semester';
import { CreateSubject } from '../../../functions/subject';
import { useToasts } from 'react-toast-notifications';
import { ListProgram } from '../../../functions/program';
import { SemesterProgram } from '../../../functions/semester';
import { CreateStudent } from 'functions/student';
import { fetchAllStudent } from '../../../views/studentSlice'
import {useDispatch} from 'react-redux'
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
	const dispatch = useDispatch();
	const [ program, setProgram ] = useState([]);
	const [semester, setSemester] = useState([]);
	const { addToast } = useToasts();
	const [sub, setSub] = useState([]);
	const [selectPrgrm,setSelectProgram]=useState('')
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
		CreateStudent({
			firstName: values.firstName,
			lastName: values.lastName,
			fatherName: values.fatherName,
			surname: values.surname,
			religion: values.religion,
			nationality: values.nationality,
			address: values.address,
			programId: selectPrgrm,
			district:values.district
		})
			.then((res) => {
				dispatch(fetchAllStudent())
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
		values.CreditHour = '3';
		values.Subject = '';
		values.Semester = '';
		values.Type = '';
	};
	const selectProgram = (value) => {
		setSelectProgram(value)
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
				label="First Name"
				name="firstName"
				rules={[
					{
						required: true,
						message: 'Please input your First Name!'
					}
				]}
			>
				<Input />
			</Form.Item>
			<Form.Item
				label="Last Name"
				name="lastName"
				rules={[
					{
						required: true,
						message: 'Please input your Last Name!'
					}
				]}
			>
				<Input />
			</Form.Item>
			<Form.Item
				label="Father Name"
				name="fatherName"
				rules={[
					{
						required: true,
						message: 'Please input your Father Name!'
					}
				]}
			>
				<Input />
			</Form.Item>

			<Form.Item
				label="Surname"
				name="surname"
				rules={[
					{
						required: true,
						message: 'Please input your surname'
					}
				]}
			>
				<Input />
			</Form.Item>
			<Form.Item
				label="Religion"
				name="religion"
				rules={[
					{
						required: true,
						message: 'Please input your religion'
					}
				]}
			>
				<Input />
			</Form.Item>
			<Form.Item
				label="Nationality"
				name="nationality"
				rules={[
					{
						required: true,
						message: 'Please input your nationality'
					}
				]}
			>
				<Input />
			</Form.Item>
			<Form.Item
				label="Address"
				name="address"
				rules={[
					{
						required: true,
						message: 'Please input your address'
					}
				]}
			>
				<Input />
			</Form.Item>
			<Form.Item
				label="District"
				name="district"
				rules={[
					{
						required: true,
						message: 'Please input your District'
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
