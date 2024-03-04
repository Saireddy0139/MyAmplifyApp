/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUserDetails = /* GraphQL */ `
  query GetUserDetails($id: ID!) {
    getUserDetails(id: $id) {
      id
      email
      password
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listUserDetails = /* GraphQL */ `
  query ListUserDetails(
    $filter: ModelUserDetailsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserDetails(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        email
        password
        name
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
