import { gql } from "@apollo/client";

const ME_QUERY = gql`
  query Me {
    me {
      name
    }
  }
`;

export default ME_QUERY;
