import gql from 'graphql-tag';

export default gql`
  {
    todosByDone(done: true) {
      id
      title
      content
    }
  }
`;
