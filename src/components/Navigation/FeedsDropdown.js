import React, { useContext } from 'react';
import { Dropdown, Icon } from 'rsuite';
import { RssContext } from '../../utils/context';

const FeedsDropdown = ({ feeds }) => {
  const [rssUrl, setRssUrl] = useContext(RssContext);

  return (
    <Dropdown
      eventKey="3"
      title={feeds.find((feed) => feed.rss === rssUrl)?.name || 'Feeds'}
      id="feeds"
      icon={<Icon icon="rss" />}
    >
      {feeds?.map(({ rss, icon, name }, index) => (
        <Dropdown.Item
          eventKey={`3-${index}`}
          // eslint-disable-next-line
          key={`3-${index}`}
          onClick={() => setRssUrl(rssUrl === rss ? '' : rss)}
          icon={<Icon icon={icon || 'newspaper-o'} />}
          active={rssUrl === rss}
        >
          {name}
        </Dropdown.Item>
      ))}
      <Dropdown.Item divider />
      <Dropdown.Item panel style={{ padding: 10 }}>
        <Icon icon="podcast" /> Podcasts (Coming Soon)
      </Dropdown.Item>
    </Dropdown>
  );
};

export default FeedsDropdown;
