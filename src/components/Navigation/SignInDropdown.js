import React from 'react';
import { Dropdown, Icon } from 'rsuite';
import { ApolloConsumer } from '@apollo/client';

const SignInDropdown = ({ session, toggleSignIn }) => (
  <>
    {session && session.me ? (
      <ApolloConsumer>
        {(client) => (
          <Dropdown.Item
            icon={<Icon icon="sign-in" />}
            title="SignIn"
            onSelect={() => {
              localStorage.removeItem('rss_token');
              // clear out your cache and then re-executing all of your active queries
              client.resetStore();
            }}
          >
            Sign Out
          </Dropdown.Item>
        )}
      </ApolloConsumer>
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
