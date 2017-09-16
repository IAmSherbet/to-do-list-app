import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui/svg-icons/action/delete';

import deleteTodo from '../mutations/deleteTodo';
import fetchUndoneTodos from '../queries/fetchUndoneTodos';
import fetchDoneTodos from '../queries/fetchDoneTodos';

class ButtonDelete extends Component {
  handleDelete(id) {
    this.props.mutate({
      variables: { id },
      refetchQueries: [
        { query: fetchUndoneTodos },
        { query: fetchDoneTodos }
      ]
    })
  }

  render() {
    return (
      <IconButton
        tooltip="Delete"
        onClick={() => this.handleDelete(this.props.id)}
      >
        <DeleteIcon color={'rgba(0,0,0,0.54)'}/>
      </IconButton>
    )
  }
}

export default graphql(deleteTodo)(ButtonDelete);
