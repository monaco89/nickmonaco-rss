import React from 'react';
import { Modal } from 'rsuite';
import AddFeedForm from '../Forms/AddFeedForm';

const AddFeedFormModal = ({ showAddFeedForm, toggleAddFeedForm, refetch }) => (
  <Modal show={showAddFeedForm} full onHide={() => toggleAddFeedForm(false)}>
    <Modal.Header>
      <Modal.Title>Add New Feed</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <AddFeedForm toggleAddFeedForm={toggleAddFeedForm} refetch={refetch} />
    </Modal.Body>
  </Modal>
);

export default AddFeedFormModal;
