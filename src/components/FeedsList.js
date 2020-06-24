import React, { useState } from "react";
import { List, FlexboxGrid, Icon, IconButton } from "rsuite";
import { useQuery } from "@apollo/client";
import FEEDS_QUERY from "../graphql/queries/Feeds";
import FeedItem from "./FeedItem";
import AddFormModal from "./AddFeedFormModal";

const FeedsList = ({ rssUrl, setRssUrl }) => {
  const [editable, toggleEdit] = useState(false);
  const [showAddFeedForm, toggleAddFeedForm] = useState(false);
  const { loading, data, error } = useQuery(FEEDS_QUERY);

  if (loading) return "loading";
  if (error) return `Error ${error.message}`;

  console.log("feeds", data);

  return (
    <>
      {toggleAddFeedForm && (
        <AddFormModal
          showAddFeedForm={showAddFeedForm}
          toggleAddFeedForm={toggleAddFeedForm}
        />
      )}
      <List bordered hover>
        <List.Item>
          <FlexboxGrid>
            <FlexboxGrid.Item colspan={23}>
              <h3>Feeds</h3>
            </FlexboxGrid.Item>
            <FlexboxGrid.Item colspan={1}>
              <Icon
                icon="edit"
                className="addFeedIcon"
                onClick={() => toggleEdit(!editable)}
              />
            </FlexboxGrid.Item>
          </FlexboxGrid>
        </List.Item>
        {data.feedMany?.map((item, index) => (
          <FeedItem
            item={item}
            index={index}
            rssUrl={rssUrl}
            setRssUrl={setRssUrl}
            key={item._id}
          />
        ))}
        {editable && (
          <List.Item>
            <IconButton
              icon={<Icon icon="plus" />}
              placement="left"
              onClick={() => toggleAddFeedForm(true)}
            >
              Add Feed
            </IconButton>
          </List.Item>
        )}
      </List>
    </>
  );
};

export default FeedsList;
