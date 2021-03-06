import React from 'react';
import { useQuery } from '@apollo/client';
import ArticleItem from './ArticleItem';
import Loading from '../Loading';
import FETCH_FEED from '../../graphql/queries/FetchFeed';

const ArticleList = ({ rssUrl }) => {
  const { loading, data, error } = useQuery(FETCH_FEED, {
    variables: { url: rssUrl },
  });

  return (
    <div>
      <img src={data?.fetchFeed.image?.url} alt={data?.fetchFeed.title} />
      <h2>{data?.fetchFeed.title}</h2>
      <h3>{data?.fetchFeed.description}</h3>
      <p>{error?.message}</p>
      {loading && <Loading />}
      {data?.fetchFeed.items?.slice(0, 10).map((item) => (
        <ArticleItem key={item.guid || item.id || item.title} item={item} />
      ))}
    </div>
  );
};

export default ArticleList;
