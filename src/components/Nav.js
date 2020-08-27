import React from "react";
import { Navbar, Nav, Avatar, Dropdown, Icon } from "rsuite";
import { ApolloConsumer } from "@apollo/client";
import AuthSignIn from "./AuthSignIn";
import withSession from "./Session";
import pic from "../images/pic2.jpg";

const Header = () => (
  <Navbar>
    <Navbar.Header>
      <h1 className="rainbow-text">Nick's RSS Feed</h1>
    </Navbar.Header>
    <Navbar.Body>
      <Nav pullRight>
        <Dropdown
          placement="bottomEnd"
          title={<Avatar circle src={pic} size="md" alt="personal avatar" />}
        >
          <AuthSignIn />
        </Dropdown>
      </Nav>
    </Navbar.Body>
  </Navbar>
);

export default Header;
