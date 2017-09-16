import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import fetchSingleNote from '../queries/fetchSingleNote';
import editNote from '../mutations/editNote';

import NoteDetail from './NoteDetail';

class EditNote extends Component {
  render() {
    const { todo } =  this.props.data;
    if (!todo) { return <div>Loading...</div>; }

    return (
      <NoteDetail
        id={ todo.id }
        title={ todo.title }
        content={ todo.content }
        mutate={ this.props.mutate }
      />
    )
  }
}

export default graphql(editNote)(
  graphql(fetchSingleNote, {
    options: (props) => {
      return {
        variables: {
          id: props.match.params.id
        }
      }
    }
  })(EditNote)
);
