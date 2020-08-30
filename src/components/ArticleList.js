import React, { useEffect, useState } from 'react';
import RSSParser from 'rss-parser';
import ArticleItem from './ArticleItem';
import Loading from './Loading';

const ArticleList = ({ rssUrl }) => {
  const [feed, setFeed] = useState({ title: '', items: [] });
  const [loading, setLoading] = useState(true);

  const rssData = async () => {
    const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';
    let parser = new RSSParser();

    try {
      const rssFeed = await parser.parseURL(`${CORS_PROXY}${rssUrl}`);
      setFeed(rssFeed);
    } catch (error) {
      // TODO Log error
      console.log(error);
    }
  };
  useEffect(() => {
    rssData();
    setLoading(false);
  }, [loading]);

  return (
    <div>
      <img src={feed.image?.url} alt={feed.title} />
      <h2>{feed.title}</h2>
      <h3>{feed.description}</h3>
      {loading && <Loading />}
      {feed.items.slice(0, 10).map((item) => (
        <ArticleItem key={item.guid || item.id || item.title} item={item} />
      ))}
    </div>
  );
};

export default ArticleList;
