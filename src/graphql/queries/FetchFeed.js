import gql from 'graphql-tag';

const FETCH_FEED = gql`
  query FetchFeeds($url: String!) {
    fetchFeed(url: $url) {
      feedUrl
      title
      description
      link
      items {
        title
        link
        pubDate
        content
        contentSnippet
        guid
        categories
        bookmarked
      }
    }
  }
`;

export default FETCH_FEED;
