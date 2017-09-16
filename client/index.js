import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

import TodoList from './components/TodoList';
import TodosListDone from './components/TodosListDone';
import TodosListUndone from './components/TodosListUndone';
import AddNote from './components/AddNote';
import EditNote from './components/EditNote';
import NoteDetail from './components/NoteDetail';

const client = new ApolloClient({});

class Root extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.setState({ open: !this.state.open });
  }

  render() {
    return (
      <div>
        <AppBar
          title={<Link to="/">Fortuity Keep</Link>}
          style={{marginBottom: "24px"}}
          onLeftIconButtonTouchTap={this.handleToggle}
        />
        <Drawer
          open={this.state.open}
          docked={false}
          onRequestChange={this.handleToggle}
        >
          <Link
            to="/"
            onClick={this.handleToggle}
          >
            <MenuItem>Notes</MenuItem>
          </Link>
          <Link
            to="/done"
            onClick={this.handleToggle}
          >
            <MenuItem>Done</MenuItem>
          </Link>
        </Drawer>
        <div>
          <Route exact path="/" component={TodosListUndone} />
          <Route path="/add" component={AddNote} />
          <Route path="/done" component={TodosListDone} />
          <Route path="/note/:id" component={EditNote} />
        </div>
      </div>
    );
  }
}

injectTapEventPlugin();

ReactDOM.render((
  <ApolloProvider client={client}>
    <MuiThemeProvider>
      <BrowserRouter>
        <Root />
      </BrowserRouter>
    </MuiThemeProvider>
  </ApolloProvider>
), document.getElementById("root"));
