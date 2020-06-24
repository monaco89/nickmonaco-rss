import React from "react";
import { Container, Header, Content, Footer, FlexboxGrid, Col } from "rsuite";
import FeedsList from "./components/FeedsList";
import ArticleList from "./components/ArticleList";
import Nav from "./components/Nav";
import Foot from "./components/Footer";

import "rsuite/dist/styles/rsuite-default.css";
import "./App.css";

const App = () => {
  const [rssUrl, setRssUrl] = React.useState(null);

  return (
    <Container>
      <Header>
        <Nav />
      </Header>
      <Content>
        <FlexboxGrid justify="space-around">
          <FlexboxGrid.Item componentClass={Col} colspan={24} md={10} xs={24}>
            <FeedsList setRssUrl={setRssUrl} rssUrl={rssUrl} />
          </FlexboxGrid.Item>
          <FlexboxGrid.Item
            componentClass={Col}
            colspan={24}
            md={14}
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
  );
};

export default App;
