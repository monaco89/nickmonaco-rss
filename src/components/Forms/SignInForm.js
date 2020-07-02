import React from "react";
import { Formik } from "formik";
import { useMutation } from "@apollo/client";
import SIGN_IN_MUTATION from "../../graphql/mutations/SignIn";
import {
  Form,
  FormGroup,
  ControlLabel,
  Button,
  ButtonToolbar,
  FormControl,
} from "rsuite";

const SignInForm = ({ toggleSignIn }) => {
  const [signIn] = useMutation(SIGN_IN_MUTATION);

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validate={(values) => {
        let errors = {};
        if (!values.email) {
          errors.email = "Required";
        }
        if (!values.password) {
          errors.password = "Required";
        }

        return errors;
      }}
      onSubmit={async (values, { setSubmitting, setStatus }) => {
        const { data, error } = await signIn({
          variables: {
            email: values.email,
            password: values.password,
          },
        });

        if (error) {
          // console.log(error.message);
          setSubmitting(false);
          setStatus(error.message);
        } else {
          localStorage.setItem("rss_token", data.login.token);
          toggleSignIn(false);
        }
      }}
    >
      {({
        handleSubmit,
        isSubmitting,
        status,
        touched,
        errors,
        setFieldValue,
      }) => (
        <Form
          onSubmit={handleSubmit}
          fluid
          onChange={(formValue) => {
            setFieldValue("email", formValue.email);
            setFieldValue("password", formValue.password);
          }}
        >
          <p className="error">{status}</p>
          <FormGroup>
            <ControlLabel>Email</ControlLabel>
            <FormControl
              name="email"
              errorMessage={touched.email && errors.email}
            />
          </FormGroup>
          <FormGroup>
            <ControlLabel>Password</ControlLabel>
            <FormControl
              name="password"
              type="password"
              errorMessage={touched.password && errors.password}
            />
          </FormGroup>
          <FormGroup>
            <ButtonToolbar>
              <Button
                appearance="primary"
                type="submit"
                disabled={isSubmitting}
              >
                Submit
              </Button>
              <Button appearance="default" onClick={() => toggleSignIn(false)}>
                Cancel
              </Button>
            </ButtonToolbar>
          </FormGroup>
        </Form>
      )}
    </Formik>
  );
};

export default SignInForm;
