import React, { useState } from 'react';
import { Navbar, Nav, Dropdown, Icon } from 'rsuite';
import { useQuery } from '@apollo/client';
import FEEDS_QUERY from '../../graphql/queries/Feeds';
import Loading from '../Loading';
import AuthSignIn from './AuthSignIn';
import SignInDropdown from './SignInDropdown';
import SignInModal from './SignInModal';
import AddFeedButton from './AddFeedButton';
import FeedsDropdown from './FeedsDropdown';
import useSession from '../../utils/hooks/useSession';
// import pic from '../../images/pic2.jpg';

const Header = () => {
  const session = useSession();
  const [showSignIn, toggleSignIn] = useState(false);

  const { loading, data, error, refetch } = useQuery(FEEDS_QUERY);

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
            <FeedsDropdown feeds={data?.feeds || []} refetch={refetch} />
            {loading ? (
              <Loading />
            ) : (
              <AddFeedButton refetch={refetch} error={error} />
            )}
            <Dropdown
              placement="bottomEnd"
              title={<Icon icon="user-circle-o" size="2x" />}
            >
              {session?.me && (
                <Dropdown.Item panel style={{ padding: 10 }}>
                  Welcome, {session.me?.name}
                </Dropdown.Item>
              )}
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

export default Header;
