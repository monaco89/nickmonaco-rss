import gql from 'graphql-tag';

const REMOVE_BOOKMARK = gql`
  mutation RemoveBookmark($url: String!) {
    removeBookmark(url: $url)
  }
`;

export default REMOVE_BOOKMARK;
