
import React from "react";

// reactstrap components
import { NavItem, NavLink, Nav, Container, Row, Col } from "reactstrap";

const Login = () => {
  return (
    <>
      <footer className="py-5">
        <Container>
          <Row className="align-items-center justify-content-xl-between">
            <Col xl="6">
              <div className="copyright text-center text-xl-left text-muted">
                © {new Date().getFullYear()}{" "}
                <NavLink
                  className="font-weight-bold ml-1"
                  href="#"
                  target="_blank"
                >
                  CES (Computerized Exam System)
                </NavLink>
              </div>
            </Col>
            <Col xl="6">
              <Nav className="nav-footer justify-content-center justify-content-xl-end">
              <NavItem>
              <NavLink
                href="#"
                rel="noopener noreferrer"
                target="_blank"
              >
                Developed By Mohsin Ali & Muhammad Aasim
              </NavLink>
            </NavItem>
              </Nav>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Login;
