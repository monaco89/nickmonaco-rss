import React, { useState } from 'react';
import {
  Container,
  Header,
  Content,
  Footer,
  FlexboxGrid,
  Col,
  Message,
} from 'rsuite';
import { useAuth0 } from '@auth0/auth0-react';
import { RssContext, MessageContext } from './utils/context';
import ArticleList from './components/Article/ArticleList';
import Nav from './components/Navigation/Nav';
import Foot from './components/Footer';
import Metadata from './components/Metadata';
import FeedsList from './components/FeedsList';

import 'rsuite/dist/styles/rsuite-default.css';
import './App.css';

const App = () => {
  const { isLoading, error } = useAuth0();
  const [rssUrl, setRssUrl] = useState(null);
  const [message, setMessage] = useState({});

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  return (
    <>
      <Metadata
        title="Nick's RSS Feed"
        description="Nick Monaco's personal rss feed"
        absoluteImageUrl=""
        canonicalLink="/"
        siteTitle="Nick Monaco RSS Feed"
        siteDescription="Nick Monaco's personal rss feed"
      />
      <Container>
        <RssContext.Provider value={[rssUrl, setRssUrl]}>
          <Header>
            <Nav />
            {message.type && (
              <Message
                showIcon
                type={message.type}
                description={message.message}
                closable
              />
            )}
          </Header>
          <Content style={{ paddingBottom: '20px' }}>
            <MessageContext.Provider value={setMessage}>
              <p>Welcome to my personal RSS feed.</p>
              <FlexboxGrid justify="center">
                <FlexboxGrid.Item
                  componentClass={Col}
                  colspan={24}
                  md={12}
                  xs={24}
                  // style={{ paddingLeft: '40px' }}
                >
                  {rssUrl ? <ArticleList rssUrl={rssUrl} /> : <FeedsList />}
                </FlexboxGrid.Item>
              </FlexboxGrid>
            </MessageContext.Provider>
          </Content>
          <Footer>
            <Foot />
          </Footer>
        </RssContext.Provider>
      </Container>
    </>
  );
};

export default App;
