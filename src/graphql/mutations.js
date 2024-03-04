/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUserDetails = /* GraphQL */ `
  mutation CreateUserDetails(
    $input: CreateUserDetailsInput!
    $condition: ModelUserDetailsConditionInput
  ) {
    createUserDetails(input: $input, condition: $condition) {
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
export const updateUserDetails = /* GraphQL */ `
  mutation UpdateUserDetails(
    $input: UpdateUserDetailsInput!
    $condition: ModelUserDetailsConditionInput
  ) {
    updateUserDetails(input: $input, condition: $condition) {
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
export const deleteUserDetails = /* GraphQL */ `
  mutation DeleteUserDetails(
    $input: DeleteUserDetailsInput!
    $condition: ModelUserDetailsConditionInput
  ) {
    deleteUserDetails(input: $input, condition: $condition) {
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
