import React from "react";
import { useQuery } from "@apollo/client";
import MeQuery from "../graphql/queries/Me";

const withSession = (Component) => (props) => {
  const { refetch, data } = useQuery(MeQuery, {});

  return <Component {...props} session={data} refetch={refetch} />;
};

export default withSession;
