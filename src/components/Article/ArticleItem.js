import React from 'react';
import { Icon, Tag, TagGroup } from 'rsuite';
import parse from 'html-react-parser';
import BookmarkButton from './BookmarkButton';
import ArticleListStyles from './ArticleList.module.css';

const ArticleItem = ({ item }) => (
  <div className={ArticleListStyles.item}>
    <a href={item.link} target="_blank" rel="noopener noreferrer">
      <BookmarkButton item={item} />
      <h2>{item.title}</h2>
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
      {new Date(item.pubDate).toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })}
    </p>
    <hr />
  </div>
);

export default ArticleItem;
