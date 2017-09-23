import React, { Component } from 'react';
import MUITextField from 'material-ui/TextField';

class TextField extends Component {
  componentDidMount() {
    this.input.focus();
  }

  render() {
    return (
      <MUITextField
        ref={(input) => { this.input = input }}
        floatingLabelText={ this.props.floatingLabelText }
        onChange={ this.props.onChange }
        value={ this.props.value }
        name={ this.props.name }
        onBlur={ this.props.onBlur }
        multiLine={ this.props.multiLine }
        fullWidth={ this.props.fullWidth }
      />
    )
  }
}

export default TextField;
