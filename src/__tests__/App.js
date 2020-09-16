import React from 'react';
import { render } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import FeedsDropdown from '../components/Sidebar/FeedsDropdown';
import FEEDS_QUERY from '../graphql/queries/Feeds';

describe('<App />', () => {
  const mocks = [
    {
      request: {
        query: FEEDS_QUERY,
      },
      result: {
        data: {
          feeds: {
            name: 'facebook',
            rss: 'https://code.facebook.com/posts/rss/',
          },
        },
      },
    },
  ];

  it('Renders <App /> component correctly loads feeds', async () => {
    const { getByText, findByText } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <FeedsDropdown />
      </MockedProvider>,
    );

    expect(getByText('Feeds')).toBeInTheDocument();
    // const feedContent = await findByText('facebook');
    // expect(feedContent).toBeTruthy();
  });
});

// TODO "Not logged in" message

// TODO Login form

// TODO Add feed form
