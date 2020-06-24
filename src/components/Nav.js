import React from "react";
import { Navbar, Nav, Avatar, Dropdown, Icon } from "rsuite";

const Header = () => (
  <Navbar>
    <Navbar.Header>
      {/* <a href='/'> */}
      <h1>Nick's RSS Feed</h1>
      {/* </a> */}
    </Navbar.Header>
    <Navbar.Body>
      <Nav pullRight>
        <Dropdown
          placement="bottomEnd"
          title={
            <Avatar
              circle
              src="https://avatars2.githubusercontent.com/u/12592949?s=460&v=4"
              size="md"
              alt="personal avatar"
            />
          }
        >
          <Dropdown.Item icon={<Icon icon="sign-in" />} title="SignIn">
            Sign In
          </Dropdown.Item>
          {/* <Dropdown.Item href='https://bitly.com/98K8eH' alt='Create Account' icon={<Icon icon='user-plus' />} /> */}
        </Dropdown>
      </Nav>
    </Navbar.Body>
  </Navbar>
);

export default Header;
