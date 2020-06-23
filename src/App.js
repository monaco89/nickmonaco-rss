import React from "react";
import { Container, Header, Content, Footer, FlexboxGrid, Col } from "rsuite";
import FeedsList from "./components/FeedsList";
import ArticleList from "./components/ArticleList";

import "rsuite/dist/styles/rsuite-default.css";
import "./App.css";

const App = () => {
  const [rssUrl, setRssUrl] = React.useState(null);

  return (
    <Container>
      {/* <Header>Header</Header> */}
      <Content>
        <FlexboxGrid justify="space-around">
          <FlexboxGrid.Item componentClass={Col} colspan={24} md={10} xs={24}>
            <h1>Nick Monaco's RSS Feed</h1>
            <FeedsList setRssUrl={setRssUrl} rssUrl={rssUrl} />
          </FlexboxGrid.Item>
          <FlexboxGrid.Item
            componentClass={Col}
            colspan={24}
            md={14}
            xs={24}
            style={{ paddingLeft: "40px" }}
          >
            {rssUrl && <ArticleList rssUrl={rssUrl} />}
          </FlexboxGrid.Item>
        </FlexboxGrid>
      </Content>
      {/* <Footer>Footer</Footer> */}
    </Container>
  );
};

export default App;
