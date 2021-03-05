import gql from 'graphql-tag';

const REMOVE_FEED = gql`
  mutation CreateFeed($id: ID!) {
    removeFeed(id: $id)
  }
`;

export default REMOVE_FEED;
