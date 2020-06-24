import React from "react";
import { List, FlexboxGrid, Icon, IconButton } from "rsuite";

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
const FeedItem = ({ item, index, rssUrl, setRssUrl, activeTab }) => (
  <List.Item
    index={index}
    onClick={() => setRssUrl(item.rss)}
    style={{
      cursor: "pointer",
      backgroundColor: item.rss === rssUrl ? "#F7F7F7" : "white",
    }}
  >
    <FlexboxGrid>
      <FlexboxGrid.Item colspan={2} style={styleCenter}>
        <Icon
          icon={item.icon || item.name.toLowerCase() || "image"}
          style={{
            color: "darkgrey",
            fontSize: "1.5em",
          }}
        />
      </FlexboxGrid.Item>
      <FlexboxGrid.Item
        colspan={21}
        style={{
          ...styleCenter,
          flexDirection: "column",
          alignItems: "flex-start",
          overflow: "hidden",
        }}
      >
        <div style={titleStyle}>{item.name}</div>
      </FlexboxGrid.Item>
      <FlexboxGrid.Item colspan={1}>
        {activeTab === "edit" ? (
          <IconButton
            size="xs"
            icon={<Icon icon="trash-o" />}
            onClick={() => console.log("delete feed please...")}
          />
        ) : (
          <Icon icon="angle-right" />
        )}
      </FlexboxGrid.Item>
    </FlexboxGrid>
  </List.Item>
);

export default FeedItem;
