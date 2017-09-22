import React, { Component } from 'react';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { Link, Redirect } from 'react-router-dom';
import marked from 'marked';

import fetchUndoneTodos from '../queries/fetchUndoneTodos';
import fetchDoneTodos from '../queries/fetchDoneTodos';
import s from './noteDetail.css'

class NoteDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id ? this.props.id : "",
      title: this.props.title ? this.props.title : "",
      content: this.props.content ? this.props.content : "",
      editing: false,
      contentMarkdown: "",
      submitted: false,
    };
  }

  onSubmit() {
    event.preventDefault();

    if (this.props.mutate) {
      this.props.mutate({
        variables: {
          id: this.state.id,
          title: this.state.title,
          content: this.state.content,
        },
        refetchQueries: [
          { query: fetchUndoneTodos },
          { query: fetchDoneTodos }
        ],
      })
    }

    // Build in loading time here

    this.setState({ submitted: true });
  }

  handleMarkdown() {
    // window.alert(marked(this.state.content));
    this.setState({ editing: false, contentMarkdown: marked(this.state.content) });
  }

  render() {
    if (this.state.submitted) {
      return <Redirect to="/" />
    } else {
      return (
        <section className={ s.wrapper }>
          <Link to="/" className={ s.backButton }>Back</Link>
          <h4>Add new note</h4>
          <TextField
            floatingLabelText="Title"
            onChange={ event => this.setState({ title: event.target.value }) }
            value={ this.state.title }
            name="title"
            multiLine
            fullWidth
          /><br />
          <TextField
            floatingLabelText="Content"
            onChange={ event => this.setState({ content: event.target.value }) }
            value={ this.state.editing
              ? this.state.content
              : this.state.contentMarkdown }
            name="content"
            onFocus={ event => this.setState({ editing: true })}
            onBlur={this.handleMarkdown.bind(this)}
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
};

export default NoteDetail;
