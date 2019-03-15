import gql from "graphql-tag";
const ADD_MEDIA = gql`
  mutation addMedia(
    $id: ID
    $type: MediaTypes!
    $path: String
    $wine: Wine!
  ) {
    addMedia(
      media: {
        id: $id
        type: $type
        path: $path
        wine: $wine
      }
    ) @client
  }
`;

export default ADD_MEDIA;
