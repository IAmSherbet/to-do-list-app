import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import IconButton from 'material-ui/IconButton';
import DoneIcon from 'material-ui/svg-icons/action/done';

import editTodoUndo from '../mutations/editTodoUndo';
import fetchUndoneTodos from '../queries/fetchUndoneTodos';
import fetchDoneTodos from '../queries/fetchDoneTodos';

class ButtonDone extends Component {
  handleDone(id) {
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
        tooltip="Mark as incomplete"
        onClick={() => this.handleDone(this.props.id)}
      >
        <DoneIcon color={'#43A047'}/>
      </IconButton>
    )
  }
}

export default graphql(editTodoUndo)(ButtonDone);
