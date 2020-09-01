import React from 'react';
import { useMutation } from '@apollo/client';
import { Icon, IconButton } from 'rsuite';
import REMOVE_FEED_MUTATION from '../../graphql/mutations/RemoveFeed';

const RemoveFeedButton = ({ id, refetch }) => {
  const [removeFeed] = useMutation(REMOVE_FEED_MUTATION);

  return (
    <IconButton
      style={{ float: 'right' }}
      color="red"
      appearance="subtle"
      size="xs"
      icon={<Icon icon="trash-o" />}
      onClick={() => {
        removeFeed({ variables: { id } });
        refetch();
      }}
    />
  );
};

export default RemoveFeedButton;
