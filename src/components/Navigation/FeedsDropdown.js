import React from 'react';
import { Dropdown, Icon } from 'rsuite';
import RemoveFeedButton from '../RemoveFeedButton';

const FeedsDropdown = ({ feeds, setRssUrl, rssUrl, refetch }) => (
  <Dropdown eventKey="3" title="Feeds" id="feeds" icon={<Icon icon="rss" />}>
    {feeds?.map(({ rss, icon, name, id }, index) => (
      <Dropdown.Item
        eventKey={`3-${index}`}
        key={`3-${index}`}
        onClick={() => setRssUrl(rss)}
        // TODO Dont use name.toLowerCase()
        icon={<Icon icon={icon || name.toLowerCase() || 'newspaper-o'} />}
        active={rssUrl === rss}
      >
        {name} <RemoveFeedButton id={id} refetch={refetch} />
      </Dropdown.Item>
    ))}
  </Dropdown>
);

export default FeedsDropdown;
