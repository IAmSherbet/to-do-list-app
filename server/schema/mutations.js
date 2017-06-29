const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLNonNull,
  GraphQLBoolean,
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
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) }
      },
      resolve(parentValue, { id }) {
        return Todo.remove({ _id: id });
      }
    },
    editTodo: {
      type: TodoType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        title: { type: GraphQLString },
        content: { type: GraphQLString },
        labels: { type: GraphQLString },
        done: { type: GraphQLBoolean }
      },
      resolve(parentValue, args) {
        return Todo.findById(args.id, function(err, todo) {
          if (err) {
            console.log('Error:', err);
          } else {
            todo.title = args.title || todo.title;
            todo.content = args.content || todo.content;
            todo.labels = args.labels || todo.labels;
            todo.done = (args.done !== null) ? args.done : todo.done;
            todo.save()
          }
        });
      }
    },
  }
})

module.exports = mutation;
