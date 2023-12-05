import React from "react";
import { Formik, Form } from "formik";
import { Heading, InputField, Button } from "../components";
import { loginValidation } from "../data/validation";
const Login = () => {
  return (
    <>
      <div className="loginpage">
        <div className="loginpage-container">
          <Heading text="Sign in" />
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validateOnMount
            validationSchema={loginValidation}
            onSubmit={(values, { resetForm }) => {
              console.log(values);
              resetForm({ values: "" });
            }}
          >
            {(formik) => (
              <Form>
                <InputField
                  name="email"
                  label="Email"
                  place="Enter your email"
                  type="Email"
                />
                <InputField
                  name="password"
                  label="Password"
                  place="Enter your password"
                  type="password"
                />

                <Button >
                  Sign in
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default Login;
