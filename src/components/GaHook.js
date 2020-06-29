import React, { useEffect } from "react";
import ReactGA from "react-ga";

ReactGA.initialize(process.env.REACT_APP_GA);

export const withTracker = (WrappedComponent, options = {}) => {
  const trackPage = (page) => {
    ReactGA.set({
      page,
      ...options,
    });
    ReactGA.pageview(page);
  };

  const HOC = (props) => {
    useEffect(() => trackPage(window.location.pathname), [
      window.location.pathname,
    ]);

    return <WrappedComponent {...props} />;
  };

  return HOC;
};
