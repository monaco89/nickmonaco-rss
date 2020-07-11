import React, { useState } from "react";
import { List, FlexboxGrid, Message } from "rsuite";
import { useQuery } from "@apollo/client";
import FEEDS_QUERY from "../graphql/queries/Feeds";
import FeedItem from "./FeedItem";
import AddFormModal from "./AddFeedFormModal";
import TabMenu from "./TabMenu";
import Loading from "./Loading";

const FeedsList = ({ rssUrl, setRssUrl }) => {
  const [activeTab, setActiveTab] = useState("articles");
  const [showAddFeedForm, toggleAddFeedForm] = useState(false);
  const { loading, data, error } = useQuery(FEEDS_QUERY);

  if (loading) return <Loading />;
  if (error) return <Message type="error" description={error.message} />;

  console.log("feeds", data);

  return (
    <>
      <TabMenu activeTab={activeTab} setActiveTab={setActiveTab} />
      <br />
      {toggleAddFeedForm && (
        <AddFormModal
          showAddFeedForm={showAddFeedForm}
          toggleAddFeedForm={toggleAddFeedForm}
        />
      )}
      <List bordered hover className="feedlist">
        <List.Item>
          <FlexboxGrid>
            <FlexboxGrid.Item colspan={24}>
              <h2>Feeds</h2>
            </FlexboxGrid.Item>
          </FlexboxGrid>
        </List.Item>
        {data?.feeds?.map((item, index) => (
          <FeedItem
            item={item}
            index={index}
            rssUrl={rssUrl}
            setRssUrl={setRssUrl}
            key={item.id}
            activeTab={activeTab}
          />
        ))}
        {activeTab === "edit" && (
          <List.Item
            onClick={() => toggleAddFeedForm(true)}
            className="addFeedButton"
          >
            Add Feed
          </List.Item>
        )}
      </List>
    </>
  );
};

export default FeedsList;
