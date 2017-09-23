import React, { Component } from 'react';
import marked from 'marked';

import s from './prefilledTextfield.css';

class PrefilledTextfield extends Component {
  constructor(props) {
    super(props);
    this.handleMarkdown = this.handleMarkdown.bind(this);
  }

  handleMarkdown(content) {
    return {__html: marked(content)}
  }

  render() {
    return (
      <section
        className={s.container}
        onClick={this.props.onClick}
      >
        <h6 className={s.title}>Content</h6>
        <div
          dangerouslySetInnerHTML={this.handleMarkdown(this.props.content)}
        >
        </div>
      </section>
    )
  }
}

export default PrefilledTextfield;
