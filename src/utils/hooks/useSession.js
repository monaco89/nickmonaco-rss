import { useQuery } from '@apollo/client';
import { useAuth0 } from '@auth0/auth0-react';
import MeQuery from '../../graphql/queries/Me';

function useSession() {
  const { user, isAuthenticated } = useAuth0();
  const { data } = useQuery(MeQuery, { skip: isAuthenticated });

  // console.log('user', user, isAuthenticated);
  // console.log('data', data);
  if (isAuthenticated) {
    // TODO Something safer
    // TODO Do this on sign in
    localStorage.setItem('rss_token', user.sub);
  }

  return isAuthenticated ? user : data;
}

export default useSession;
