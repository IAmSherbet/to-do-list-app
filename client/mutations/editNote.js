import gql from 'graphql-tag';

export default gql`
  mutation EditNote($id: ID!, $title: String, $content: String) {
    editTodo(id: $id, title: $title, content: $content) {
      id
      title
      content
    }
  }
`
