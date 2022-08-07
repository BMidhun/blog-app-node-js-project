import React, { useRef } from "react";
import LoginForm from "./component/login-form";

function Login() {
  let emailRef = useRef<HTMLInputElement | null>(null);
  let passwordRef = useRef<HTMLInputElement | null>(null);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formValue = {
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
    };

    console.log(formValue);
  };

  return (
    <LoginForm
      onSubmit={onSubmit}
      emailRef={emailRef}
      passwordRef={passwordRef}
    />
  );
}

export default Login;
