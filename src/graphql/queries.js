/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUserdetasils = /* GraphQL */ `
  query GetUserdetasils($id: ID!) {
    getUserdetasils(id: $id) {
      id
      email
      username
      password
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listUserdetasils = /* GraphQL */ `
  query ListUserdetasils(
    $filter: ModelUserdetasilsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserdetasils(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        email
        username
        password
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
