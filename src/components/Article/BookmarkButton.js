import React from 'react';
import { useMutation } from '@apollo/client';
import { Icon, IconButton } from 'rsuite';
import ADD_BOOKMARK from '../../graphql/mutations/AddBookmark';
import REMOVE_BOOKMARK from '../../graphql/mutations/RemoveBookmark';

function BookmarkButton({ item }) {
  console.log('item', item);
  const [bookmarked, toggleBookmark] = React.useState(item.bookmarked || false);
  const [mutate] = useMutation(bookmarked ? REMOVE_BOOKMARK : ADD_BOOKMARK);

  return (
    <IconButton
      style={{ float: 'right' }}
      color="red"
      appearance="subtle"
      size="xs"
      icon={bookmarked ? <Icon icon="bookmark-o" /> : <Icon icon="bookmark" />}
      onClick={() => {
        toggleBookmark(!bookmarked);
        if (!bookmarked) {
          mutate({
            variables: {
              title: item.title,
              content: item.content,
              url: item.url,
              pubDate: item.pubDate,
            },
          });
        } else {
          mutate({ variables: { id: item.id } });
        }
      }}
    />
  );
}

export default BookmarkButton;
