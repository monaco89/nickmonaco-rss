import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import App from "../App";
import FEEDS_QUERY from "../graphql/queries/Feeds";

describe("<App />", () => {
  const mocks = [
    {
      request: {
        query: FEEDS_QUERY,
      },
      result: {
        data: {
          feeds: {
            name: "facebook",
            rss: "https://code.facebook.com/posts/rss/",
          },
        },
      },
    },
  ];

  it("Renders <App /> component correctly loads feeds", async () => {
    const { getByText } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <App />
      </MockedProvider>
    );

    await new Promise((resolve) => setTimeout(resolve, 0)); // wait for response
    const p = component.root.findByType("p");
    expect(p.children).toContain("Buck is a poodle");
  });
});

// TODO "Not logged in" message

// TODO Login form

// TODO Add feed form
