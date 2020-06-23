import React, { useEffect, useState } from "react";
import RSSParser from "rss-parser";
import ArticleListStyles from "./ArticleList.module.css";

const ArticleList = ({ feedTitle = "ESPN", rssUrl }) => {
  const [feed, setFeed] = useState({ title: "", items: [] });

  const rssData = async () => {
    console.log("fetching...");
    const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";
    let parser = new RSSParser();

    try {
      const feed = await parser.parseURL(`${CORS_PROXY}${rssUrl}`);
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
        <div key={i} className={ArticleListStyles.item}>
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
