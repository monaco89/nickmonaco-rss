import React from 'react';
import { Dropdown, Icon } from 'rsuite';

const FeedItem = ({ item: { rss, icon, name }, index, setRssUrl, rssUrl }) => (
  <Dropdown.Item
    eventKey={`3-${index}`}
    onClick={() => setRssUrl(rss)}
    // TODO Dont use name.toLowerCase()
    icon={<Icon icon={icon || name.toLowerCase() || 'newspaper-o'} />}
    active={rssUrl === rss}
  >
    {name}
  </Dropdown.Item>
);

export default FeedItem;
