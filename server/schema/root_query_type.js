const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLID,
  GraphQLNonNull,
  GraphQLBoolean,
} = graphql;
const mongoose = require('mongoose');
const Todo = mongoose.model('todo');
const TodoType = require('./todo_type');

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    todos: {
      type: new GraphQLList(TodoType),
      resolve() {
        return Todo.find({});
      }
    },
    todosByDone: {
      type: new GraphQLList(TodoType),
      args: {
        done: {
          type: new GraphQLNonNull(GraphQLBoolean)
        }
      },
      resolve(parentValue, { done }) {
        return Todo.find({ done });
      }
    },
    todo: {
      type: TodoType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parentValue, { id }) {
        return Todo.findById(id);
      }
    }
  }
});


module.exports = RootQuery;
