import { graphql, compose, withApollo } from 'react-apollo';
import DELETE_WINE from "../graphql/mutations/DELETE_WINE";
import UPDATE_WINE from "../graphql/mutations/UPDATE_WINE";
import WINES from "../graphql/queries/WINES";
import WineForm from "../components/WineForm";

const updateMutationOptions = {
  name: 'UpdateWine',
  options: () => ({
    refetchQueries: [{
      query: WINES,
    }],
  }),
};

const queryOptions = {
    name: 'Wines',
    options: () => ({
      notifyOnNetworkStatusChange: true,
      fetchPolicy: 'cache-and-network',
    }),
    props: ({ Wines: { wines, loading, error }} ) => ({
      wines,
      loading,
      error
    }),
};

export default compose(
    withApollo,
    graphql(WINES, queryOptions),
    graphql(DELETE_WINE, 'DeleteWine'),
    graphql(UPDATE_WINE, updateMutationOptions),
)(WineForm);
  