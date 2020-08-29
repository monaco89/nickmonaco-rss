import React, { useState } from 'react';
import { Navbar, Nav, Avatar, Dropdown } from 'rsuite';
import AuthSignIn from './AuthSignIn';
import SignInDropdown from './SignInDropdown';
import SignInModal from '../SignInModal';
import withSession from '../../utils/Session';
import pic from '../../images/pic2.jpg';

const Header = ({ session }) => {
  const [showSignIn, toggleSignIn] = useState(false);

  return (
    <>
      {showSignIn && (
        <SignInModal showSignIn={showSignIn} toggleSignIn={toggleSignIn} />
      )}
      <Navbar>
        <Navbar.Header>
          <h1 className="rainbow-text">Nick&#39;s RSS Feed</h1>
        </Navbar.Header>
        <Navbar.Body>
          <Nav pullRight>
            <Dropdown
              placement="bottomEnd"
              title={
                <Avatar circle src={pic} size="md" alt="personal avatar" />
              }
            >
              {!session?.sub && (
                <SignInDropdown session={session} toggleSignIn={toggleSignIn} />
              )}
              {!session?.me && <AuthSignIn session={session} />}
            </Dropdown>
          </Nav>
        </Navbar.Body>
      </Navbar>
    </>
  );
};

export default withSession(Header);
