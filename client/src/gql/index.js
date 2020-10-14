import { gql } from "@apollo/client";

export const get_user = gql`
  query getUser($email: String) {
    user(email: $email) {
      email
      password
    }
  }
`;

export const get_coaches = gql`
  {
    coaches {
      name
      id
    }
  }
`;

// export const get_timestamps = gql`
// {
//   user()
// }
// `
