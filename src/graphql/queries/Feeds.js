import gql from "graphql-tag";

const FEEDS = gql`
  query Feeds {
    feeds {
      id
      name
      rss
      icon
    }
  }
`;

export default FEEDS;
