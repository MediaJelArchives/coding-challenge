import gql from "graphql-tag";
const CREATE_REVIEW = gql`
  mutation createReview(
    $wine: ID
    $wineTaster: ID!
    $tastingSession: ID!
    $score: Int
    $tastingNotes: [TastingNotes!]
    $yearPredict: String
    $pricePredict: String

  ) {
    createReview(
      data: {
        wine: { connect: { id: $wine } }
        wineTaster: { connect: { id: $wineTaster } }
        tastingSession: { connect: { id: $tastingSession } }
        score: $score
        tastingNotes: { set: $tastingNotes }
        yearPredict: $yearPredict
        pricePredict: $pricePredict
      }
    ) {
      id
    }
  }
`;

export default CREATE_REVIEW;
