import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link, Redirect } from 'react-router-dom';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import fetchUndoneTodos from '../queries/fetchUndoneTodos';
import fetchDoneTodos from '../queries/fetchDoneTodos';
import addTodo from '../mutations/addTodo';
import s from './addTodo.css';

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: "",
      submitted: false,
    };
  }

  onSubmit() {
    event.preventDefault();

    this.props.mutate({
      variables: {
        title: this.state.title,
        content: this.state.content,
      },
      refetchQueries: [
        { query: fetchUndoneTodos },
        { query: fetchDoneTodos }
      ],
    })

    // Build in loading time here

    this.setState({ submitted: true });
  }

  render() {
    if (this.state.submitted) {
      return <Redirect to="/" />
    } else {
      return (
        <section className={ s.wrapper }>
          <Link to="/" className={ s.backButton }>Back</Link>
          <h4>Add new Todo</h4>
          <TextField
            floatingLabelText="Title"
            onChange={ event => this.setState({ title: event.target.value }) }
            value={ this.state.title }
            name="title"
            multiLine
            fullWidth
          /><br />
          <TextField
            floatingLabelText="Description"
            onChange={ event => this.setState({ content: event.target.value }) }
            value={ this.state.content }
            name="content"
            multiLine
            fullWidth
          /><br />
          <RaisedButton
            label="Done"
            primary
            onClick={ this.onSubmit.bind(this) }
            className={ s.button }
          />
        </section>
      )
    }
  }
}

export default graphql(addTodo)(AddTodo);
