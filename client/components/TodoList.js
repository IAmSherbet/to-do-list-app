import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router-dom';

import { Card, CardText, CardActions, CardHeader } from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import DoneIcon from 'material-ui/svg-icons/action/done';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import EditIcon from 'material-ui/svg-icons/editor/mode-edit';

import s from './todolist.css';
import ButtonDelete from './ButtonDelete';
import ButtonToggleCompletion from './ButtonToggleCompletion';

class TodoList extends Component {
  renderSongs() {
    return this.props.todos.map(todo => {
      return (
        <Card key={ todo.id } className={s.card}>
          <CardHeader
            title={ todo.title }
          />
          <CardText>{ todo.content }</CardText>
          <CardActions className={s.cardActions}>
            <ButtonToggleCompletion id={todo.id} done={this.props.done ? false : true}/>
            <Link to={`/note/${ todo.id }`}>
              <IconButton tooltip="Edit">
                <EditIcon color={'rgba(0,0,0,0.54)'}/>
              </IconButton>
            </Link>
            <ButtonDelete id={todo.id}/>
          </CardActions>
        </Card>
      )
    })
  }

  render() {
    return (
      <div className={s.todoListWrapper}>
        <div className={s.wrapper}>
          <div className={s.container}>
            { this.renderSongs() }
          </div>
        </div>
      </div>
    )
  }
};

export default TodoList;
