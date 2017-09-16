import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import IconButton from 'material-ui/IconButton';
import DoneIcon from 'material-ui/svg-icons/action/done';

import editTodoDone from '../mutations/editTodoDone';
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
        tooltip="Mark as complete"
        onClick={() => this.handleDone(this.props.id)}
      >
        <DoneIcon color={'rgba(0,0,0,0.54)'}/>
      </IconButton>
    )
  }
}

export default graphql(editTodoDone)(ButtonDone);
