import gql from 'graphql-tag';

export default gql`
  mutation toggleCompletion($id: ID!, $done: Boolean) {
    toggleCompletion(id: $id, done: $done) {
      id
      title
      done
    }
  }
`
