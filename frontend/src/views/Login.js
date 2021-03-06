
import React, { useState } from "react";
import {login} from '../functions/user'
// reactstrap components
import { useToasts } from 'react-toast-notifications';
import {useHistory} from 'react-router-dom'
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
} from "reactstrap";

const Login = () => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const { addToast } = useToasts()
  const history = useHistory();
  const handleLogin = (e) => {
    e.preventDefault()
    login({ email:email, password:password })
      .then(res => {
        if (res.data.message) {
          addToast(` ${res.data.message}`, {
            appearance: 'error',
            autoDismiss: true
          });
        }
        if (res.data.email) {
          localStorage.setItem("user",res.data.email)
          addToast(` login successful`, {
            appearance: 'success',
            autoDismiss: true
          });
          history.push('/admin/index')
       }
      
        console.log("response", res.data)
      })
      .catch(er => {
        addToast(` ${er.message}`, {
					appearance: 'error',
					autoDismiss: true
				});
        console.log("error",er)
      })
  }
  console.log("user",localStorage.getItem("user"))
  console.log({email,password})
  return (
    <>
      <Col lg="5" md="7">
        <Card className="bg-secondary shadow border-0">
          <CardHeader className="bg-transparent pb-5">
           
          </CardHeader>
          <CardBody className="px-lg-5 py-lg-5">
            <div className="text-center text-muted mb-4">
              {/* <small>sign in with credentials</small> */}
            </div>
            <Form role="form" >
              <FormGroup className="mb-3">
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Email"
                    type="email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    autoComplete="new-email"
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    autoComplete="new-password"
                  />
                </InputGroup>
              </FormGroup>
              <div className="custom-control custom-control-alternative custom-checkbox">
                <input
                  className="custom-control-input"
                  id=" customCheckLogin"
                  type="checkbox"
                />
                <label
                  className="custom-control-label"
                  htmlFor=" customCheckLogin"
                >
                  <span className="text-muted">Remember me</span>
                </label>
              </div>
              <div className="text-center">
                <Button onClick={handleLogin} className="my-4" color="primary" type="button">
                  Sign in
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
        <Row className="mt-3">
          <Col xs="6">
            <a
              className="text-light"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              <small>Forgot password?</small>
            </a>
          </Col>
          <Col className="text-right" xs="6">
            <a
              className="text-light"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
            </a>
          </Col>
        </Row>
      </Col>
    </>
  );
};

export default Login;
