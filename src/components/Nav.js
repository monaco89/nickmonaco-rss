import React from "react";
import { Navbar, Nav, Avatar, Dropdown, Icon } from "rsuite";
import { ApolloConsumer } from "@apollo/client";
import withSession from "./Session";
import pic from "../images/pic2.jpg";

const Header = ({ session, toggleSignIn }) => (
  <ApolloConsumer>
    {(client) => (
      <Navbar>
        <Navbar.Header>
          <h1 className="rainbow-text">Nick's RSS Feed</h1>
        </Navbar.Header>
        <Navbar.Body>
          <Nav pullRight>
            <Dropdown
              placement="bottomEnd"
              title={
                <Avatar circle src={pic} size="md" alt="personal avatar" />
              }
            >
              {session && session.me ? (
                <Dropdown.Item
                  icon={<Icon icon="sign-in" />}
                  title="SignIn"
                  onSelect={() => {
                    localStorage.removeItem("rss_token");
                    // client.resetStore();
                  }}
                >
                  Sign Out
                </Dropdown.Item>
              ) : (
                <Dropdown.Item
                  icon={<Icon icon="sign-in" />}
                  title="SignIn"
                  onSelect={() => toggleSignIn(true)}
                >
                  Sign In
                </Dropdown.Item>
              )}
            </Dropdown>
          </Nav>
        </Navbar.Body>
      </Navbar>
    )}
  </ApolloConsumer>
);

export default withSession(Header);
