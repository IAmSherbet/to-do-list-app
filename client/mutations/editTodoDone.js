import gql from 'graphql-tag';

export default gql`
  mutation EditTodo($id: ID!) {
    editTodo(id: $id, done: true) {
      id
      title
      done
    }
  }
`;
