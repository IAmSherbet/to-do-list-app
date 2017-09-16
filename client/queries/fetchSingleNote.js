import gql from 'graphql-tag';

export default gql`
  query fetchSingleNote($id: ID!) {
    todo(id: $id) {
      id
      title
      content
    }
  }
`
