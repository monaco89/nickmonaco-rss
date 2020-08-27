import React, { useState } from "react";
import { Container, Header, Content, Footer, FlexboxGrid, Col } from "rsuite";
import ArticleList from "./components/ArticleList";
import Nav from "./components/Nav";
import Foot from "./components/Footer";
import Metadata from "./components/Metadata";
import SignInForm from "./components//Forms/SignInForm";
import Sidebar from "./components/Sidebar";
// import AuthWrapper from './components/AuthWrapper';
import { useAuth0 } from "@auth0/auth0-react";

import "rsuite/dist/styles/rsuite-default.css";
import "./App.css";

const App = () => {
  const { isLoading, error } = useAuth0();
  const [showSignIn, toggleSignIn] = useState(false);
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
              <Sidebar setRssUrl={setRssUrl} rssUrl={rssUrl} />
            </FlexboxGrid.Item>
            <FlexboxGrid.Item
              componentClass={Col}
              colspan={24}
              md={18}
              xs={24}
              style={{ paddingLeft: "40px" }}
            >
              {showSignIn && <SignInForm toggleSignIn={toggleSignIn} />}
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
