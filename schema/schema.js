const graphql = require('graphql');
const _ = require('lodash');
const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLBoolean,
  GraphQLString,
  GraphQLSchema,
} = graphql;

const todos = [
  {
    id: '1234',
    title: 'Wash the dishes',
    content: 'Remember to use the meat sponge for the chopping board',
    done: false,
  },
  {
    id: '2345',
    title: 'Take a walk',
    content: 'Explore the other side of Marrickville',
    done: false,
  }
];

const TodoType = new GraphQLObjectType({
  name: 'Todo',
  fields: {
    id: { type: GraphQLString },
    title: { type: GraphQLString },
    content: { type: GraphQLString },
    done: { type: GraphQLBoolean },
    labels: { type: GraphQLString },
  }
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    todo: {
      type: TodoType,
      args: { id: { type: GraphQLString } },
      resolve(parentValue, args) {
        return _.find(todos, { id: args.id });
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
