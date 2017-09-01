import gql from 'graphql-tag';

export default gql`
  mutation AddTodo($title: String, $content: String) {
    addTodo(title: $title, content:$content) {
      id
      title
      content
    }
  }
`;
