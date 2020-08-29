import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Dropdown, Icon } from 'rsuite';

const AuthSignIn = ({ session }) => {
  const { loginWithRedirect, logout } = useAuth0();

  // ? Should I be using sub here
  return session && session.sub ? (
    <Dropdown.Item
      icon={<Icon icon="sign-out" />}
      title="Sign Out"
      onClick={() => {
        logout({ returnTo: window.location.origin });
      }}
    >
      Auth Sign Out
    </Dropdown.Item>
  ) : (
    <Dropdown.Item
      icon={<Icon icon="sign-in" />}
      title="Sign In"
      onClick={loginWithRedirect}
    >
      Auth Sign In
    </Dropdown.Item>
  );
};

export default AuthSignIn;
