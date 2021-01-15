import { Row, Col, Typography, Form, Input, Button, Select, DatePicker } from 'antd';
import React, { useState } from 'react';
import MainLayout from '../layout';
const { Title } = Typography;

const { Option } = Select;
function StdFrom() {
    const [file, setFile] = useState(null);
    console.log(file)
	// const [ values, setValues ] = useState();

	const onFinish = (value) => {
		console.log(value);
	};
	const handleGenderChange = (value) => {
		console.log(value);
	};
	
	return (
		<MainLayout>
			<Title level={1}>Student form</Title>
			<Form name="basic" initialValues={{ required: true }} layout="vertical" onFinish={onFinish}>
				<Row>
					<Col span={18}>
						<Form.Item
							label="First Name"
							name="firstName"
							rules={[ { required: true, message: 'Please fill the First Name' } ]}
						>
							<Input placeholder="I'm the content" />
						</Form.Item>
						<Form.Item
							label="Last Name"
							name="lastName"
							rules={[ { required: true, message: 'Please fill the Last Name' } ]}
						>
							<Input placeholder="I'm the content" />
						</Form.Item>
						<Form.Item
							label="Father Name"
							name="fatherName"
							rules={[ { required: true, message: 'Please fill the Father Name' } ]}
						>
							<Input placeholder="I'm the content" />
						</Form.Item>
						<Form.Item
							label="Caste"
							name="caste"
							rules={[ { required: true, message: 'Please fill the Caste' } ]}
						>
							<Input placeholder="I'm the content" />
						</Form.Item>
						<Form.Item
							label="Date of birth"
							name="dob"
							rules={[ { required: true, message: 'Please fill the Date of birth' } ]}
						>
							<DatePicker />
						</Form.Item>
						<Form.Item
							label="Gender"
							name="gender"
							rules={[ { required: true, message: 'Please Select Gender' } ]}
						>
							<Select placeholder="Select Your Gender" onChange={handleGenderChange} allowClear>
								<Option value="male">Male</Option>
								<Option value="female">Female</Option>
								<Option value="other">Other</Option>
							</Select>
						</Form.Item>
						<Form.Item
							label="Religion"
							name="religion"
							rules={[ { required: true, message: 'Please Select Religion' } ]}
						>
							<Select placeholder="Select Your Religion" onChange={handleGenderChange} allowClear>
								<Option value="islam">Islam</Option>
								<Option value="hindhu">Hindhu</Option>
								<Option value="christian">Christian</Option>
							</Select>
						</Form.Item>
						<Form.Item
							label="Nationality"
							name="nationality"
							rules={[ { required: true, message: 'Please fill the Nationality' } ]}
						>
							<Input placeholder="I'm the content" />
						</Form.Item>
						<Form.Item
							label="City"
							name="city"
							rules={[ { required: true, message: 'Please fill the City' } ]}
						>
							<Input placeholder="I'm the content" />
						</Form.Item>
						<Form.Item
							label="Address"
							name="address"
							rules={[ { required: true, message: 'Please fill the Address' } ]}
						>
							<Input.TextArea placeholder="I'm the content" />
						</Form.Item>
					</Col>
					<Col span={6}>
						<input type="file" onChange={(e) => setFile(URL.createObjectURL(e.target.files[0]))} />
						<img width="200px" src={file} alt={file} />
					</Col>
				</Row>
				<Form.Item>
					<Button htmlType="submit">Submit</Button>
				</Form.Item>
			</Form>
		</MainLayout>
	);
}

export default StdFrom;
