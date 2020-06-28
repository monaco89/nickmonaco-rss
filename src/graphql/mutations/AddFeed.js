import gql from "graphql-tag";

const ADD_FEED = gql`
  mutation CreateFeed($input: CreateFeedInput!) {
    createFeed(input: $input) {
      id
    }
  }
`;

export default ADD_FEED;
