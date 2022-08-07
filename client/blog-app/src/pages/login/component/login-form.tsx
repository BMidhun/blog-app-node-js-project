import React, { FormEvent, RefObject } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

type InputRefType = HTMLInputElement;

interface IProps {
  onSubmit: (e: FormEvent) => void;
  emailRef: RefObject<InputRefType>;
  passwordRef: RefObject<InputRefType>;
}

function LoginForm({ onSubmit, emailRef, passwordRef }: IProps) {
  return (
    <main className="p-3 border m-3 shadow">
      <h2>Login | BlogApp</h2>
      <hr />
      <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="user@gmail.com"
            ref={emailRef}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="****"
            ref={passwordRef}
            required
          />
        </Form.Group>
        <Row className="align-items-center">
          <Col>
            <Button variant="primary" type="submit" className="w-100">
              Login
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
          Don't have an account?{" "}
          <Link className="text-link" to={"/register"}>
            Register
          </Link>
        </p>
      </div>
    </main>
  );
}

export default LoginForm;
