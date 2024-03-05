


// /**
//  * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
//  */
// exports.handler = async (event) => {
//     console.log(`EVENT: ${JSON.stringify(event)}`);
//     return {
//         statusCode: 200,
//     //  Uncomment below to enable CORS requests
//     headers: {
//          "Access-Control-Allow-Origin": "*",
//          "Access-Control-Allow-Headers": "*"
//      },
//         body: JSON.stringify('Hello from Lambda!'),
//     };
// };
// /**
//  * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
//  */

import fetch from "node-fetch";

export async function handler(event, context) {
  const GRAPHQL_ENDPOINT = process.env.ADD_YOUR_API_ENDPOINT;
  const GRAPHQL_API_KEY = process.env.ADD_YOUR_API_KEY;

  const query = /* GraphQL */ `
    mutation CREATE_USER($input: CreateUserInput!) {
      createUser(input: $input) {
        email
      }
    }
  `;

  const variables = {
    input: {
      email: event.request.userAttributes.email,
    },
  };

  const options = {
    method: "POST",
    headers: {
      "x-api-key": GRAPHQL_API_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, variables }),
  };

  const response = {};

  try {
    const res = await fetch(GRAPHQL_ENDPOINT, options);
    response.data = await res.json();
    if (response.data.errors) response.statusCode = 400;
  } catch (error) {
    response.statusCode = 400;
    response.body = {
      errors: [
        {
          message: error.message,
          stack: error.stack,
        },
      ],
    };
  }
  exports.handler = async (event) => {
    console.log(`EVENT: ${JSON.stringify(event)}`);
    return {
        statusCode: 200,
    //  Uncomment below to enable CORS requests
    ...response,
    
    headers: {
         "Access-Control-Allow-Origin": "*",
         "Access-Control-Allow-Headers": "*"
     },
     body: JSON.stringify(response.body),
        // body: JSON.stringify('Hello from Lambda!'),
    };
};
  // return {
  //   ...response,
  //   body: JSON.stringify(response.body),
  // };
}