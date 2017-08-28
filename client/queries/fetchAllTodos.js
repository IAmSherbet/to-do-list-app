import gql from 'graphql-tag';

export default gql`
  {
    todos {
      id
      title
      content
    }
  }
`;
