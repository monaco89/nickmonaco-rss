import React from 'react';
import { Dropdown, Icon } from 'rsuite';

const SignInDropdown = ({ session, toggleSignIn }) => (
  <>
    {session && session.me ? (
      <Dropdown.Item
        icon={<Icon icon="sign-in" />}
        title="SignIn"
        onSelect={() => {
          localStorage.removeItem('rss_token');
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
  </>
);

export default SignInDropdown;
