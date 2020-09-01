import React, { useState } from 'react';
import { Container, Header, Content, Footer, FlexboxGrid, Col } from 'rsuite';
import { useAuth0 } from '@auth0/auth0-react';
import { RssContext } from './utils/context';
import ArticleList from './components/Article/ArticleList';
import Nav from './components/Navigation/Nav';
import Foot from './components/Footer';
import Metadata from './components/Metadata';
import Sidebar from './components/Sidebar/Sidebar';

import 'rsuite/dist/styles/rsuite-default.css';
import './App.css';

const App = () => {
  const { isLoading, error } = useAuth0();
  const [rssUrl, setRssUrl] = useState(null);

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
        <Header>
          <Nav />
        </Header>
        <Content>
          <FlexboxGrid justify="space-around">
            <FlexboxGrid.Item componentClass={Col} colspan={24} md={6} xs={24}>
              <RssContext.Provider value={setRssUrl}>
                <Sidebar setRssUrl={setRssUrl} rssUrl={rssUrl} />
              </RssContext.Provider>
            </FlexboxGrid.Item>
            <FlexboxGrid.Item
              componentClass={Col}
              colspan={24}
              md={18}
              xs={24}
              style={{ paddingLeft: '40px' }}
            >
              {rssUrl && <ArticleList rssUrl={rssUrl} key={rssUrl} />}
            </FlexboxGrid.Item>
          </FlexboxGrid>
        </Content>
        <Footer>
          <Foot />
        </Footer>
      </Container>
    </>
  );
};

export default App;
