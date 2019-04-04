import gql from "graphql-tag";
const UPDATE_WINE = gql`
  mutation updateWine(
    $id: ID
    $name: String    
    $winery: String
    $year: Int
    $alcohol: Float
    $price: Float
    $size: String
    $color: String
    $image: String
  ) {
    updateWine
        (
            data: {
                name:$name                
                winery:$winery
                year:$year
                alcohol:$alcohol
                price:$price
                size:$size
                color:$color
                image:$image
                } 
            where: {id: $id}
        )
            {
                id
                name
                grapes
                winery
                year
                alcohol
                price
                size
                color
                image   
            }
    
  }
`;

export default UPDATE_WINE;