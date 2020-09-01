import React, { useContext } from 'react';
import { Dropdown, Icon } from 'rsuite';
import { RssContext } from '../../utils/context';
import RemoveFeedButton from './RemoveFeedButton';

const FeedsDropdown = ({ feeds, refetch }) => {
  const [rssUrl, setRssUrl] = useContext(RssContext);

  return (
    <Dropdown eventKey="3" title="Feeds" id="feeds" icon={<Icon icon="rss" />}>
      {feeds?.map(({ rss, icon, name, id }, index) => (
        <Dropdown.Item
          eventKey={`3-${index}`}
          // eslint-disable-next-line
          key={`3-${index}`}
          onClick={() => setRssUrl(rss)}
          icon={<Icon icon={icon || 'newspaper-o'} />}
          active={rssUrl === rss}
        >
          {name} <RemoveFeedButton id={id} refetch={refetch} />
        </Dropdown.Item>
      ))}
    </Dropdown>
  );
};

export default FeedsDropdown;
