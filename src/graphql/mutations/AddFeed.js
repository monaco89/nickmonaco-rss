import gql from "graphql-tag";

const ADD_FEED = gql`
  mutation AddFeed($record: CreateOneFeedInput!) {
    feedCreateOne(record: $record) {
      recordId
    }
  }
`;

export default ADD_FEED;
