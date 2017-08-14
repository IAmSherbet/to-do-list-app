import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar';

import TodoList from './components/TodoList';

const client = new ApolloClient({});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <MuiThemeProvider>
        <div>
          <AppBar
            title="My Todo List App"
            style={{marginBottom: "24px"}}
          />
          <BrowserRouter>
            <Route exact path="/" component={TodoList}/>
          </BrowserRouter>
        </div>
      </MuiThemeProvider>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.getElementById("root"));
