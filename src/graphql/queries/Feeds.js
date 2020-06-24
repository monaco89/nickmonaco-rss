import gql from "graphql-tag";

const FEEDS = gql`
  query Feeds {
    feedMany {
      _id
      name
      rss
      icon
    }
  }
`;

export default FEEDS;
