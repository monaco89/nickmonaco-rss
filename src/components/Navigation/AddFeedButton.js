import React, { useState } from 'react';
import { Nav, Icon } from 'rsuite';
import AddFormModal from './AddFeedFormModal';
import useSession from '../../utils/hooks/useSession';

const AddFeedButton = ({ refetch, error }) => {
  const session = useSession();
  const [showAddFeedForm, toggleAddFeedForm] = useState(false);

  return (
    <>
      {toggleAddFeedForm && (
        <AddFormModal
          showAddFeedForm={showAddFeedForm}
          toggleAddFeedForm={toggleAddFeedForm}
          refetch={refetch}
        />
      )}
      <Nav.Item
        icon={<Icon icon="plus" />}
        disabled={!session?.me || error}
        onClick={() => toggleAddFeedForm(true)}
      >
        Add Feed
      </Nav.Item>
    </>
  );
};

export default AddFeedButton;
