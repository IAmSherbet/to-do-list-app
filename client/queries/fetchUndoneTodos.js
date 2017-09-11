import gql from 'graphql-tag';

export default gql`
  {
    todosByDone(done: false) {
      id
      title
      content
    }
  }
`;
