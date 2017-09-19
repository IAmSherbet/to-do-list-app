import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import IconButton from 'material-ui/IconButton';
import DoneIcon from 'material-ui/svg-icons/action/done';

import toggleCompletion from '../mutations/toggleCompletion';
import fetchUndoneTodos from '../queries/fetchUndoneTodos';
import fetchDoneTodos from '../queries/fetchDoneTodos';

class ButtonToggleCompletion extends Component {
  handleDone(id, done) {
    this.props.mutate({
      variables: { id, done },
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
        onClick={() => this.handleDone(this.props.id, this.props.done)}
      >
        <DoneIcon color={'rgba(0,0,0,0.54)'}/>
      </IconButton>
    )
  }
}

export default graphql(toggleCompletion)(ButtonToggleCompletion);
