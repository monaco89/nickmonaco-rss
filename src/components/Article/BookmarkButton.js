import React from 'react';
import { useMutation } from '@apollo/client';
import { Icon, IconButton } from 'rsuite';
import ADD_BOOKMARK from '../../graphql/mutations/AddBookmark';
import REMOVE_BOOKMARK from '../../graphql/mutations/RemoveBookmark';

function BookmarkButton({ item }) {
  const [bookmarked, toggleBookmark] = React.useState(item.bookmarked);
  const [mutate] = useMutation(bookmarked ? REMOVE_BOOKMARK : ADD_BOOKMARK);

  return (
    <IconButton
      style={{ float: 'right' }}
      color="red"
      appearance="subtle"
      size="xs"
      icon={bookmarked ? <Icon icon="bookmark" /> : <Icon icon="bookmark-o" />}
      onClick={async () => {
        if (bookmarked) {
          await mutate({ variables: { url: item.link } });
        } else {
          await mutate({
            variables: {
              input: {
                title: item.title,
                content: item.content,
                url: item.link,
                pubDate: `${new Date(item.pubDate).getTime()}`,
              },
            },
          });
        }
        toggleBookmark(!bookmarked);
      }}
    />
  );
}

export default BookmarkButton;
