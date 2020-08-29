import React from 'react';
import { Dropdown, Icon } from 'rsuite';

const FeedsDropdown = ({ feeds, setRssUrl, rssUrl }) => (
  <Dropdown eventKey="3" title="Feeds" icon={<Icon icon="rss" />}>
    {feeds?.map(({ item: { rss, icon, name }, index }) => (
      <Dropdown.Item
        eventKey={`3-${index}`}
        onClick={() => setRssUrl(rss)}
        // TODO Dont use name.toLowerCase()
        icon={<Icon icon={icon || name.toLowerCase() || 'newspaper-o'} />}
        active={rssUrl === rss}
      >
        {name}
      </Dropdown.Item>
    ))}
  </Dropdown>
);

export default FeedsDropdown;
