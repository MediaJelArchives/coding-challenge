import gql from "graphql-tag";

const SUBSCRIBE = gql`
  mutation subscribe(
    $query: String
    $variables: JSON
  ): ID! {
    subscribe(
      query: String
      variables: JSON
    ) @client
  }
`;

export default SUBSCRIBE;
