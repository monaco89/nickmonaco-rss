import gql from 'graphql-tag';

const ADD_BOOKMARK = gql`
  mutation CreateBookmark($input: CreateBookmarkInput!) {
    createBookmark(input: $input)
  }
`;

export default ADD_BOOKMARK;
