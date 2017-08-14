import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Card, CardText, CardActions, CardHeader } from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import DoneIcon from 'material-ui/svg-icons/action/done';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import EditIcon from 'material-ui/svg-icons/editor/mode-edit';
import s from './todolist.css';

class TodoList extends Component {
  renderSongs() {
    return this.props.data.todos.map(todo => {
      return (
        <Card key={ todo.id } className={s.card}>
          <CardHeader
            title={ todo.title }
          />
          <CardText>{ todo.content }</CardText>
          <CardActions className={s.cardActions}>
            <IconButton>
              <DoneIcon color={'rgba(0,0,0,0.54)'}/>
            </IconButton>
            <IconButton>
              <DeleteIcon color={'rgba(0,0,0,0.54)'}/>
            </IconButton>
            <IconButton>
              <EditIcon color={'rgba(0,0,0,0.54)'}/>
            </IconButton>
          </CardActions>
        </Card>
      )
    })
  }

  render() {
    return (
      <div className={s.todoListWrapper}>
        { this.props.data.loading
          ? <div>Loading ... </div>
          : <div className={s.wrapper}>
            <div className={s.container}>
              { this.renderSongs() }
            </div>
          </div>
        }
        <FloatingActionButton
          className={s.actionButton}>
          <ContentAdd />
        </FloatingActionButton>
      </div>
    )
  }
};

const query = gql`
  {
    todos {
      id
      title
      content
    }
  }
`;

export default graphql(query)(TodoList);
