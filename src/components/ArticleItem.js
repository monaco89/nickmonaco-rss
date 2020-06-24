import React from "react";
import { Icon } from "rsuite";
import parse from "html-react-parser";
import ArticleListStyles from "./ArticleList.module.css";
import moment from "moment";

const ArticleItem = ({ item }) => (
  <div className={ArticleListStyles.item}>
    <a href={item.link} target="_blank" rel="noopener noreferrer">
      <h1>{item.title}</h1>
    </a>
    <p>{parse(item.content || "")}</p>
    <p>
      <Icon icon="clock-o" style={{ color: "#2296F3" }} />{" "}
      {moment(item.pubDate).calendar()}
    </p>
    <hr />
  </div>
);

export default ArticleItem;
