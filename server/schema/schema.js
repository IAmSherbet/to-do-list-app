const graphql = require('graphql');
const _ = require('lodash');
const mongoose = require('mongoose');
const Todo = mongoose.model('todo');
const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLBoolean,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
} = graphql;

const TodoType = new GraphQLObjectType({
  name: 'Todo',
  fields: {
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    content: { type: GraphQLString },
    done: { type: GraphQLBoolean },
    labels: { type: GraphQLString },
  }
});

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

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    todos: {
      type: new GraphQLList(TodoType),
      resolve() {
        return Todo.find({});
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

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation,
});
