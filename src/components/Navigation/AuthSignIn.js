import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Dropdown, Icon } from 'rsuite';

const AuthSignIn = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return !isAuthenticated ? (
    <Dropdown.Item
      icon={<Icon icon="sign-in" />}
      title="Sign In"
      onClick={loginWithRedirect}
    >
      Sign In
    </Dropdown.Item>
  ) : (
    <Dropdown.Item
      icon={<Icon icon="sign-out" />}
      title="Sign Out"
      onClick={() => {
        logout({ returnTo: window.location.origin });
      }}
    >
      Sign Out
    </Dropdown.Item>
  );
};

export default AuthSignIn;
