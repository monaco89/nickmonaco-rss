import React from "react";
import { useQuery } from "@apollo/client";
import MeQuery from "../graphql/queries/Me";
import { useAuth0 } from "@auth0/auth0-react";

const withSession = (Component) => (props) => {
  const { user } = useAuth0();
  const { refetch, data } = useQuery(MeQuery, {});

  console.log("user", user);

  return <Component {...props} session={data} refetch={refetch} />;
};

export default withSession;
