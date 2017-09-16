import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router-dom';

import { Card, CardText, CardActions, CardHeader } from 'material-ui/Card';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import s from './todolist.css';
import fetchDoneTodos from '../queries/fetchDoneTodos';
import TodoList from './TodoList';

class TodosListDone extends Component {
  render() {
    return (
      <div className={s.todoListWrapper}>
        { this.props.data.loading
          ? <div>Loading ... </div>
          : <TodoList
             todos={this.props.data.todosByDone}
             done
            />
        }
        <Link to="/add">
          <FloatingActionButton
            className={s.actionButton}>
            <ContentAdd />
          </FloatingActionButton>
        </Link>
      </div>
    )
  }
};

export default graphql(fetchDoneTodos)(TodosListDone);
