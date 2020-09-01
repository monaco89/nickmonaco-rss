import React from 'react';
import { Icon, Tag, TagGroup } from 'rsuite';
import parse from 'html-react-parser';
import moment from 'moment';
import ArticleListStyles from './ArticleList.module.css';

const ArticleItem = ({ item }) => (
  <div className={ArticleListStyles.item}>
    <a href={item.link} target="_blank" rel="noopener noreferrer">
      <h1>{item.title}</h1>
    </a>
    <div style={{ marginBottom: '5px' }}>
      <TagGroup>
        {item.categories?.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </TagGroup>
    </div>
    {parse(item.content || '')}
    <p>
      <Icon icon="clock-o" style={{ color: '#2296F3' }} />{' '}
      {moment(item.pubDate).calendar()}
    </p>
    <hr />
  </div>
);

export default ArticleItem;
