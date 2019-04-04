import { graphql, compose, withApollo } from 'react-apollo';
import WINES from "../graphql/queries/WINES"
import WineList from "../components/WineList/index";

const queryOptions = {
    name: 'Wines',
    options: () => ({
      notifyOnNetworkStatusChange: true,
      fetchPolicy: 'cache-and-network',
    }),
    props: ({ Wines: { wines, loading, error } }) => ({
      wines,
      loading,
      error
    }),
};

export default compose(
    withApollo,
    graphql(WINES, queryOptions),
)(WineList);
  