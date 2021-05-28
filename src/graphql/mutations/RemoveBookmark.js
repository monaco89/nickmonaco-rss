import gql from 'graphql-tag';

const REMOVE_BOOKMARK = gql`
  mutation RemoveBookmark($id: ID!) {
    removeBookmark(id: $id)
  }
`;

export default REMOVE_BOOKMARK;
