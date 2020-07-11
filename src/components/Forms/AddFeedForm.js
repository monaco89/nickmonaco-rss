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
  Message,
} from "rsuite";

const AddFeedForm = ({ toggleAddFeedForm, refetch }) => {
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

        if (!values.name) {
          errors.name = "Required";
        }
        if (!values.rss) {
          errors.rss = "Required";
        }

        return errors;
      }}
      onSubmit={async ({ name, icon, rss }, { setSubmitting, setStatus }) => {
        try {
          const { error } = await addFeed({
            variables: {
              input: {
                name,
                icon,
                rss,
              },
            },
          });

          if (error) {
            setSubmitting(false);
            setStatus(error.message);
          } else {
            setSubmitting(false);
            toggleAddFeedForm(false);
            refetch();
          }
        } catch (err) {
          setSubmitting(false);
          setStatus(err.message);
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
        <Form onSubmit={handleSubmit} fluid>
          {status && <Message type="error" description={status} />}
          <FormGroup>
            <ControlLabel>Name</ControlLabel>
            <Input
              name="name"
              onChange={(value) => setFieldValue("name", value)}
              onBlur={handleBlur}
            />
            <HelpBlock>Required</HelpBlock>
          </FormGroup>
          <FormGroup>
            <ControlLabel>RSS URL</ControlLabel>
            <Input
              name="rss"
              onChange={(value) => setFieldValue("rss", value)}
              onBlur={handleBlur}
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
      )}
    </Formik>
  );
};

export default AddFeedForm;
