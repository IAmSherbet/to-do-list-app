import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar';

import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

const client = new ApolloClient({});

const Root = () => {
  return (
    <div>
      <AppBar
        title="My Todo List App"
        style={{marginBottom: "24px"}}
      />
      <Switch>
        <Route exact path="/" component={TodoList}/>
        <Route path="/add" component={AddTodo}/>
      </Switch>
    </div>
  );
};

ReactDOM.render((
  <ApolloProvider client={client}>
    <MuiThemeProvider>
      <BrowserRouter>
        <Root />
      </BrowserRouter>
    </MuiThemeProvider>
  </ApolloProvider>
), document.getElementById("root"));
