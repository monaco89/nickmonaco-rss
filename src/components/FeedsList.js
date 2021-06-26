import React, { useContext } from 'react';
import { useQuery } from '@apollo/client';
import { List, Icon } from 'rsuite';
import FEEDS_QUERY from '../graphql/queries/Feeds';
import Loading from './Loading';
import { RssContext } from '../utils/context';
import useSession from '../utils/hooks/useSession';
import RemoveFeedButton from './RemoveFeedButton';

const FeedsList = () => {
  const session = useSession();
  const [rssUrl, setRssUrl] = useContext(RssContext);
  const { loading, data, error, refetch } = useQuery(FEEDS_QUERY);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return `Error! ${error.message}`;
  }

  console.log('feed', data);
  return (
    <>
      {!data.feeds ? (
        'No feeds to show'
      ) : (
        <List bordered hover key={rssUrl}>
          {data.feeds?.map(({ rss, icon, name, id }, index) => (
            <List.Item
              key={name}
              index={index}
              style={{ padding: '20px', cursor: 'pointer' }}
              onClick={() => setRssUrl(rss)}
            >
              <Icon icon={icon || 'newspaper-o'} /> {name}
              {(session?.me || session?.sub) && (
                <RemoveFeedButton id={id} refetch={refetch} />
              )}
            </List.Item>
          ))}
        </List>
      )}
    </>
  );
};

export default FeedsList;
