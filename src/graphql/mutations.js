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
// import { generateClient } from "aws-amplify/api";
// import { createUserdetasils } from './graphql/mutations';


// import { generateClient } from "aws-amplify/api";
// import { updateUserdetasils } from './graphql/mutations';

// // const client = generateClient()


// import { generateClient } from "aws-amplify/api";
// import { deleteUserdetasils } from './graphql/mutations';

// // const client = generateClient()
// const client = generateClient()
// const newUserdetasils = await client.graphql({
//   query: createUserdetasils,
//   variables: {
//       input: {
//   "email": "Lorem ipsum dolor sit amet",
//   "username": "Lorem ipsum dolor sit amet",
//   "password": "Lorem ipsum dolor sit amet"
// }
//   }
// });
// const updatedUserdetasils = await client.graphql({
//   query: updateUserdetasils,
//   variables: {
//       input: {
//   "email": "Lorem ipsum dolor sit amet",
//   "username": "Lorem ipsum dolor sit amet",
//   "password": "Lorem ipsum dolor sit amet"
// }
//   }
// });
// const deletedUserdetasils = await client.graphql({
//   query: deleteUserdetasils,
//   variables: {
//       input: {
//           id: "YOUR_RECORD_ID"
//       }
//   }
// });