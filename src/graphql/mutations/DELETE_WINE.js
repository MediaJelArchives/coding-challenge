import gql from "graphql-tag";
const DELETE_WINE = gql`
mutation deleteWine($id: ID){
    deleteManyReviews (where: {wine: {id:$id}})
    {
        count
    }
    deleteWine (where:{id:$id}) {
        id
    }
}
`;

export default DELETE_WINE;