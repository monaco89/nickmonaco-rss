import gql from 'graphql-tag';

const REMOVE_FEED = gql`
  mutation RemoveFeed($id: ID!) {
    removeFeed(id: $id)
  }
`;

export default REMOVE_FEED;
