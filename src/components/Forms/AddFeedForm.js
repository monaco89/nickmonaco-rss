import React from "react";
import { Formik } from "formik";
import { useMutation } from "@apollo/client";
import ADD_FEED_MUTATION from "../../graphql/mutations/AddFeed";
import {
  Form,
  FormGroup,
  Input,
  ControlLabel,
  HelpBlock,
  Button,
  ButtonToolbar,
} from "rsuite";

const AddFeedForm = ({ toggleAddFeedForm }) => {
  const [addFeed] = useMutation(ADD_FEED_MUTATION);

  return (
    <Formik
      initialValues={{
        name: "",
        icon: "",
        rss: "",
      }}
      validate={(values) => {
        let errors = {};
        // Catch spam
        //   if (values.honeypot) {
        //     errors = true;
        //   }
        if (!values.name) {
          errors.name = "Required";
        }
        if (!values.rss) {
          errors.rss = "Required";
        }

        return errors;
      }}
      onSubmit={async (values, { setSubmitting, setStatus }) => {
        const { error } = await addFeed({
          variables: {
            record: {
              name: values.name,
              icon: values.icon,
              rss: values.rss,
              enabled: true,
            },
          },
        });

        if (error) {
          console.log(error.message);
          setSubmitting(false);
          setStatus(error.message);
        } else {
          setSubmitting(false);
          toggleAddFeedForm(false);
        }
      }}
    >
      {({
        handleChange,
        handleSubmit,
        handleBlur,
        values,
        errors,
        isSubmitting,
        status,
        touched,
        setFieldValue,
      }) => (
        console.log(values),
        (
          <Form onSubmit={handleSubmit} fluid>
            <p className="error">{status}</p>
            <FormGroup>
              <ControlLabel>Name</ControlLabel>
              <Input
                name="name"
                onChange={(value) => setFieldValue("name", value)}
                onBlur={handleBlur}
                // errorMessage={touched.name && errors.name}
              />
              <HelpBlock>Required</HelpBlock>
            </FormGroup>
            <FormGroup>
              <ControlLabel>RSS URL</ControlLabel>
              <Input
                name="rss"
                onChange={(value) => setFieldValue("rss", value)}
                onBlur={handleBlur}
                // errorMessage={touched.rss && errors.rss}
              />
              <HelpBlock>Required</HelpBlock>
            </FormGroup>

            <FormGroup>
              <ControlLabel>Icon</ControlLabel>
              <Input
                name="icon"
                onChange={(value) => setFieldValue("icon", value)}
                onBlur={handleBlur}
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
                <Button
                  appearance="default"
                  onClick={() => toggleAddFeedForm(false)}
                >
                  Cancel
                </Button>
              </ButtonToolbar>
            </FormGroup>
          </Form>
        )
      )}
    </Formik>
  );
};

export default AddFeedForm;
