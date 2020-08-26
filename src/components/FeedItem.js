import React from "react";
import { Dropdown, Icon } from "rsuite";

const FeedItem = ({ item, index, setRssUrl, rssUrl }) => (
  console.log(item),
  (
    <Dropdown.Item
      eventKey={`3-${index}`}
      onClick={() => setRssUrl(item.rss)}
      // TODO Dont use name.toLowerCase()
      icon={
        <Icon icon={item.icon || item.name.toLowerCase() || "newspaper-o"} />
      }
      active={rssUrl === item.rss}
    >
      {item.name}
    </Dropdown.Item>
  )
);

export default FeedItem;
