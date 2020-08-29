import React from 'react';
import { useQuery } from '@apollo/client';
import { useAuth0 } from '@auth0/auth0-react';
import MeQuery from '../graphql/queries/Me';

const withSession = (Component) => (props) => {
  const { user, isAuthenticated } = useAuth0();
  const { refetch, data } = useQuery(MeQuery, { skip: isAuthenticated });

  // console.log('user', user, isAuthenticated);
  // console.log('data', data);
  if (isAuthenticated) {
    // TODO Something safer
    // TODO Do this on sign in
    localStorage.setItem('rss_token', user.sub);
  }

  return (
    <Component
      {...props}
      session={isAuthenticated ? user : data}
      refetch={refetch}
    />
  );
};

export default withSession;
