import React, { useEffect, useState } from "react";
import RSSParser from "rss-parser";
import ArticleListStyles from "./ArticleList.module.css";
import { Icon } from "rsuite";
import moment from "moment";

const ArticleList = ({ rssUrl }) => {
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
      <h2>{feed.title}</h2>
      {feed.items.slice(0, 10).map((item, i) => (
        <div key={i} className={ArticleListStyles.item}>
          <a href={item.link} target="_blank">
            <h1>{item.title}</h1>
          </a>
          <p>{item.content}</p>
          <p>
            <Icon icon="clock-o" style={{ color: "#2296F3" }} />{" "}
            {moment(item.pubDate).calendar()}
          </p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default ArticleList;
