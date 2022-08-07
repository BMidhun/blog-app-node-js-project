import React, { FormEvent, useRef } from "react";
import RegisterForm from "./component/register-form";

function Register() {
  const formRef = {
    emailRef: useRef<HTMLInputElement | null>(null),
    passwordRef: useRef<HTMLInputElement | null>(null),
    confirmPasswordRef: useRef<HTMLInputElement | null>(null),
    firstNameRef: useRef<HTMLInputElement | null>(null),
    lastNameRef: useRef<HTMLInputElement | null>(null),
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    const formValues = {
      email: formRef.emailRef.current?.value,
      firstName: formRef.firstNameRef.current?.value,
      lastName: formRef.lastNameRef.current?.value,
      passwordRef: formRef.passwordRef.current?.value,
      confirmPasswordRef: formRef.confirmPasswordRef.current?.value,
    };

    console.log(formValues);
  };

  return <RegisterForm onSubmit={onSubmit} formRef={formRef} />;
}

export default Register;
