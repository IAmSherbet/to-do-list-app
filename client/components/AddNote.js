import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import addTodo from '../mutations/addTodo';

import NoteDetail from './NoteDetail';

class AddNote extends Component {
  render() {
    return <NoteDetail mutate={this.props.mutate}/>
  }
}

export default graphql(addTodo)(AddNote);
