import gql from 'graphql-tag';

export default gql`
  mutation EditTodo($id: ID!) {
    editTodo(id: $id, done: false) {
      id
      title
      done
    }
  }
`;
