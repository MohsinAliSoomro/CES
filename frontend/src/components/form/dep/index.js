import { Form, Input, Checkbox } from 'antd';
import {
Button,
    Col,
  } from "reactstrap";
const layout = {
  labelCol: {
    span: 24,
  },
  wrapperCol: {
    span: 24,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const DepartmentForm = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      {...layout}
      style={{padding:"10px 20px"}}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Department"
        name="Department"
        rules={[
          {
            required: true,
            message: 'Please input your Department!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      
      

      <Form.Item {...tailLayout}>
      <Col className="text-right" xs="4">
                    <Button
                      color="primary"
                      href="#pablo"
                      
                      size="md"
                    >
                      Save
                    </Button>
                  </Col>
      </Form.Item>
    </Form>
  );
};

export default DepartmentForm;