import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import TodoList from './components/TodoList';

const client = new ApolloClient({});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <MuiThemeProvider>
        <div>
          <BrowserRouter>
            <Route exact path="/" component={TodoList}/>
          </BrowserRouter>
        </div>
      </MuiThemeProvider>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.getElementById("root"));
