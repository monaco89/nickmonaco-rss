import React, { useContext } from 'react';
import { Formik } from 'formik';
import {
  Form,
  FormGroup,
  Input,
  ControlLabel,
  HelpBlock,
  Button,
  ButtonToolbar,
} from 'rsuite';
import { useMutation } from '@apollo/client';
import { MessageContext } from '../../utils/context';
import ADD_FEED_MUTATION from '../../graphql/mutations/AddFeed';

const AddFeedForm = ({ toggleAddFeedForm, refetch }) => {
  const setMessage = useContext(MessageContext);
  const [addFeed] = useMutation(ADD_FEED_MUTATION);

  return (
    <Formik
      initialValues={{
        name: '',
        icon: '',
        rss: '',
      }}
      validate={(values) => {
        const errors = {};

        if (!values.name) {
          errors.name = 'Required';
        }
        if (!values.rss) {
          errors.rss = 'Required';
        }

        return errors;
      }}
      onSubmit={async ({ name, icon, rss }, { setSubmitting }) => {
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
            setMessage({ type: 'error', message: error.message });
          } else {
            setSubmitting(false);
            setMessage({ type: 'success', message: 'Feed as been added.' });
            toggleAddFeedForm(false);
            refetch();
          }
        } catch (err) {
          setSubmitting(false);
          setMessage({ type: 'error', message: err.message });
        }
      }}
    >
      {({ handleSubmit, handleBlur, isSubmitting, setFieldValue }) => (
        <Form onSubmit={handleSubmit} fluid>
          <FormGroup>
            <ControlLabel>Name</ControlLabel>
            <Input
              name="name"
              onChange={(value) => setFieldValue('name', value)}
              onBlur={handleBlur}
            />
            <HelpBlock>Required</HelpBlock>
          </FormGroup>
          <FormGroup>
            <ControlLabel>RSS URL</ControlLabel>
            <Input
              name="rss"
              onChange={(value) => setFieldValue('rss', value)}
              onBlur={handleBlur}
            />
            <HelpBlock>Required</HelpBlock>
          </FormGroup>

          <FormGroup>
            <ControlLabel>Icon</ControlLabel>
            <Input
              name="icon"
              onChange={(value) => setFieldValue('icon', value)}
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
