import gql from "graphql-tag";

const SIGN_IN = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

export default SIGN_IN;
