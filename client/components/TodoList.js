import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class TodoList extends Component {
  renderSongs() {
    return this.props.data.todos.map(todo => {
      return (<li key={ todo.id }>{ todo.title }</li>)
    })
  }

  render() {
    if (this.props.data.loading) {
      return <div>Loading ... </div>
    } else {
      return (
        <ul>
          { this.renderSongs() }
        </ul>
      );
    }
  }
};

const query = gql`
  {
    todos {
      id
      title
    }
  }
`;

export default graphql(query)(TodoList);
