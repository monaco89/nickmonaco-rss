import gql from 'graphql-tag';

const FEEDS = gql`
  query Feeds {
    feeds {
      id
      name
      rss
      icon
      bookmarks {
        title
        url
        user {
          id
          name
        }
      }
    }
  }
`;

export default FEEDS;
