import React, { useEffect, useState } from "react";
import RSSParser from "rss-parser";

const ArticleList = ({ feedTitle = "ESPN" }) => {
  const [feed, setFeed] = useState({ title: "", items: [] });

  const rssData = async () => {
    const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";
    let parser = new RSSParser();

    try {
      const feed = await parser.parseURL(
        `${CORS_PROXY}https://www.espn.com/espn/rss/news`
      );
      setFeed(feed);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    rssData();
  }, []);

  console.log(feed);

  return (
    <div>
      <h2>{feedTitle} Feed</h2>
      <p>{feed.title}</p>
      {feed.items.slice(0, 10).map((item, i) => (
        <div key={i}>
          <h1>{item.title}</h1>
          <p>{item.content}</p>
          <p>{item.pubDate}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default ArticleList;
