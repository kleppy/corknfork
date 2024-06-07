import { gql } from "@apollo/client";

//add user
export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_PAIR = gql`
  mutation addPair ($user: ID!, $foodId: ID!,  $wineId: ID!) {
    addPair(user: $user, foodId: $foodId,  wineId: $wineId){
      _id
      user
      food
      wine
    }
  }
`

export const CREATE_PAYMENT_INTENT = gql`
  mutation createPaymentIntent($amount: Int!) {
    createPaymentIntent(amount: $amount) {
      clientSecret
    }
  }
`;