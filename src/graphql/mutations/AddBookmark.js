import gql from 'graphql-tag';

const ADD_BOOKMARK = gql`
  mutation CreateBookmark($input: CreateBookmarkInput!) {
    createBookmark(input: $input) {
      id
    }
  }
`;

export default ADD_BOOKMARK;
