import React from 'react';
import { Navbar, Nav, Avatar, Dropdown } from 'rsuite';
import AuthSignIn from './AuthSignIn';
import pic from '../../images/pic2.jpg';

const Header = () => (
  <Navbar>
    <Navbar.Header>
      <h1 className="rainbow-text">Nick&#39;s RSS Feed</h1>
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
