import React from "react";
import { List, FlexboxGrid, Icon } from "rsuite";

const data = [
  {
    title: "ESPN",
    icon: "image",
    rss: "https://www.espn.com/espn/rss/news",
  },
  {
    title: "Celebration of the Mid-Autumn festival",
    icon: "image",
  },
  {
    title: "Live to play basketball",
    icon: "film",
  },
  {
    title: "2018 the legislature meeting broadcast live",
    icon: "film",
  },
  {
    title: "Aiwanke paster",
    icon: "image",
  },
];
const styleCenter = {
  display: "flex",
  justifyContent: "left",
  alignItems: "left",
  height: "20px",
};
const titleStyle = {
  paddingBottom: 5,
  whiteSpace: "nowrap",
  fontWeight: 500,
};

const FeedsList = () => (
  <List bordered hover>
    <List.Item>
      <h3>Feeds</h3>
    </List.Item>
    {data.map((item, index) => (
      <List.Item key={item["title"]} index={index}>
        <FlexboxGrid>
          {/*icon*/}
          <FlexboxGrid.Item colspan={2} style={styleCenter}>
            <Icon
              icon={item["icon"]}
              style={{
                color: "darkgrey",
                fontSize: "1.5em",
              }}
            />
          </FlexboxGrid.Item>
          {/*base info*/}
          <FlexboxGrid.Item
            colspan={18}
            style={{
              ...styleCenter,
              flexDirection: "column",
              alignItems: "flex-start",
              overflow: "hidden",
            }}
          >
            <div style={titleStyle}>{item["title"]}</div>
          </FlexboxGrid.Item>
          <FlexboxGrid.Item
            colspan={4}
            style={{
              ...styleCenter,
            }}
          >
            <a href="#">View</a>
          </FlexboxGrid.Item>
        </FlexboxGrid>
      </List.Item>
    ))}
  </List>
);

export default FeedsList;
