import React, { useContext } from 'react';
import { Formik } from 'formik';
import { useMutation } from '@apollo/client';
import {
  Form,
  FormGroup,
  ControlLabel,
  Button,
  ButtonToolbar,
  FormControl,
} from 'rsuite';
import { MessageContext } from '../../utils/context';
import SIGN_IN_MUTATION from '../../graphql/mutations/SignIn';

const SignInForm = ({ toggleSignIn }) => {
  const setMessage = useContext(MessageContext);
  const [signIn] = useMutation(SIGN_IN_MUTATION);

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        }
        if (!values.password) {
          errors.password = 'Required';
        }

        return errors;
      }}
      onSubmit={async (values, { setSubmitting }) => {
        try {
          const { data, error } = await signIn({
            variables: {
              email: values.email,
              password: values.password,
            },
          });

          if (error) {
            setSubmitting(false);
            setMessage({ type: 'error', message: error.message });
          } else {
            localStorage.setItem('rss_token', data.login.token);
            toggleSignIn(false);
            window.location.reload();
          }
        } catch (err) {
          setSubmitting(false);
          setMessage({ type: 'error', message: err.message });
        }
      }}
    >
      {({ handleSubmit, isSubmitting, touched, errors, setFieldValue }) => (
        <Form
          onSubmit={handleSubmit}
          onChange={(formValue) => {
            setFieldValue('email', formValue.email);
            setFieldValue('password', formValue.password);
          }}
          fluid
        >
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
