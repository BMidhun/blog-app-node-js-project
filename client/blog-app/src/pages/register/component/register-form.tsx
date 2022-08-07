import React, { FormEvent } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

interface IRegisterFormRef {
  emailRef: React.MutableRefObject<HTMLInputElement | null>;
  passwordRef: React.MutableRefObject<HTMLInputElement | null>;
  confirmPasswordRef: React.MutableRefObject<HTMLInputElement | null>;
  firstNameRef: React.MutableRefObject<HTMLInputElement | null>;
  lastNameRef: React.MutableRefObject<HTMLInputElement | null>;
}

interface IProps {
  onSubmit: (e: FormEvent) => void;
  formRef: IRegisterFormRef;
}

function RegisterForm({ onSubmit, formRef }: IProps) {
  return (
    <main className="p-3 border m-3 shadow">
      <h2>Register | BlogApp</h2>
      <hr />
      <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            ref={formRef.emailRef}
            required
            type="email"
            placeholder="user@example.com"
          />
        </Form.Group>

        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formGroupFName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                ref={formRef.firstNameRef}
                required
                type="text"
                placeholder="John"
              />
            </Form.Group>
          </Col>

          <Col>
            <Form.Group className="mb-3" controlId="formGroupLName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                ref={formRef.lastNameRef}
                required
                type="text"
                placeholder="Doe"
              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            ref={formRef.passwordRef}
            required
            type="password"
            placeholder="******"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupCPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            ref={formRef.confirmPasswordRef}
            required
            type="password"
            placeholder="******"
          />
        </Form.Group>
        <Row className="align-items-center">
          <Col>
            <Button variant="primary w-100" type="submit">
              Register
            </Button>
          </Col>
          <Col>
            <div className="text-secondary text-center">Or signup using</div>
          </Col>
          <Col>
            <Button variant="outline-light">
              <FcGoogle size={20} />
            </Button>
          </Col>
        </Row>
      </Form>
      <hr />
      <div className="my-4">
        <p className="text-center text-secondary">
          Already have an account?{" "}
          <Link className="text-link" to={"/login"}>
            Login
          </Link>
        </p>
      </div>
    </main>
  );
}

export default RegisterForm;
