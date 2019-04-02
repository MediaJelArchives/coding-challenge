import React, { Component } from "react";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import "./App.css";
import Home from "../Home/index";
import CreateTastingSession from "../TastingSession";
import WineTasterForm from "../WineTasterForm/index";
import NavBar from "../NavBar";
import resolvers from "../../graphql/resolvers";
import initialState from "../../graphql/initialState";
import WineListContainer from "../../containers/WineListContainer";
import { BrowserRouter as Router, Route } from "react-router-dom";

const client = new ApolloClient({
  uri: "http://10.14.10.94:4466",
  clientState: {
    defaults: initialState,
    resolvers,
  },
});

class App extends Component {
  render() {
    return (
    <Router>
      <ApolloProvider client={client}>
        <div className="App">
          <NavBar />
          <Route exact path="/" component={Home} />
          <Route path="/wines" component={WineListContainer} />
          <Route path="/tastingSession" component={CreateTastingSession} />  
          <Route path="/WineTasters" component={WineTasterForm} />  
        </div>
      </ApolloProvider>
    </Router>
    );
  }
}

export default App;
