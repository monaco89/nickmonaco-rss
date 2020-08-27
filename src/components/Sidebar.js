import React, { useState } from "react";
import { Sidenav, Nav, Icon, Dropdown, Message } from "rsuite";
import { useQuery } from "@apollo/client";
import FEEDS_QUERY from "../graphql/queries/Feeds";
import Loading from "./Loading";
import FeedItem from "./FeedItem";
import AddFormModal from "./AddFeedFormModal";

const Sidebar = ({ setRssUrl, rssUrl }) => {
  const [activeKey, setActiveKey] = useState("3");
  const [expanded, toggleExpand] = useState(true);
  const [showAddFeedForm, toggleAddFeedForm] = useState(false);
  const { loading, data, error, refetch } = useQuery(FEEDS_QUERY);

  if (loading) return <Loading />;
  // if (error) return <Message type='info' description={error.message} />;

  return (
    <div>
      {toggleAddFeedForm && (
        <AddFormModal
          showAddFeedForm={showAddFeedForm}
          toggleAddFeedForm={toggleAddFeedForm}
          refetch={refetch}
        />
      )}
      {error && (
        <Message
          type="info"
          description={error.message}
          style={{ backgroundColor: "#a3d2ca" }}
        />
      )}
      <br />
      <Sidenav
        expanded={expanded}
        defaultOpenKeys={["3"]}
        activeKey={activeKey}
        onSelect={(key) => setActiveKey(key)}
        style={{ backgroundColor: "white", borderRadius: "6px" }}
      >
        <Sidenav.Body>
          <Nav>
            <Dropdown eventKey="3" title="Feeds" icon={<Icon icon="rss" />}>
              {data?.feeds?.map((item, index) => (
                <FeedItem
                  item={item}
                  index={index}
                  setRssUrl={setRssUrl}
                  rssUrl={rssUrl}
                  key={item.id}
                />
              ))}
            </Dropdown>
            <Dropdown
              eventKey="4"
              title="Podcasts"
              icon={<Icon icon="podcast" />}
            />
            <Nav.Item
              eventKey="1"
              icon={<Icon icon="plus" />}
              onClick={() => toggleAddFeedForm(true)}
              disabled={!!error}
            >
              Add Feed
            </Nav.Item>
            <Nav.Item
              icon={
                expanded ? (
                  <Icon icon="angle-double-left" />
                ) : (
                  <Icon icon="angle-double-right" />
                )
              }
              onClick={() => toggleExpand(!expanded)}
            >
              {expanded ? "Hide" : "Show"}
            </Nav.Item>
            {/* <RemoveFeedButton id={item.id} refetch={refetch} /> */}
          </Nav>
        </Sidenav.Body>
      </Sidenav>
    </div>
  );
};

export default Sidebar;
