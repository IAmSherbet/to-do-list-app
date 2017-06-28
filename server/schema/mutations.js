const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLNonNull,
} = graphql;
const mongoose = require('mongoose');
const Todo = mongoose.model('todo');
const TodoType = require('./todo_type');

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addTodo: {
      type: TodoType,
      args: {
        title: { type: GraphQLString },
        content: { type: GraphQLString },
        labels: { type: GraphQLString },
      },
      resolve(parentValue, { title, content, labels }) {
        return (new Todo({ title, content, labels, done: false })).save()
      }
    },
    deleteTodo: {
      type: TodoType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parentValue, { id }) {
        return Todo.remove({ _id: id });
      }
    }
  }
})

module.exports = mutation;
