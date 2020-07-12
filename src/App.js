import React, { useState } from "react";
import { Container, Header, Content, Footer, FlexboxGrid, Col } from "rsuite";
import FeedsList from "./components/FeedsList";
import ArticleList from "./components/ArticleList";
import Nav from "./components/Nav";
import Foot from "./components/Footer";
import Metadata from "./components/Metadata";
import SignInForm from "./components//Forms/SignInForm";

import "rsuite/dist/styles/rsuite-default.css";
import "./App.css";

const App = () => {
  const [showSignIn, toggleSignIn] = useState(false);
  const [rssUrl, setRssUrl] = useState(null);

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
          <Nav toggleSignIn={toggleSignIn} />
        </Header>
        <Content>
          <FlexboxGrid justify="space-around">
            <FlexboxGrid.Item componentClass={Col} colspan={24} md={8} xs={24}>
              {showSignIn ? (
                <SignInForm toggleSignIn={toggleSignIn} />
              ) : (
                <FeedsList setRssUrl={setRssUrl} rssUrl={rssUrl} />
              )}
            </FlexboxGrid.Item>
            <FlexboxGrid.Item
              componentClass={Col}
              colspan={24}
              md={16}
              xs={24}
              style={{ paddingLeft: "40px" }}
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
