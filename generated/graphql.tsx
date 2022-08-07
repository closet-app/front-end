import gql from "graphql-tag";
import * as Urql from "urql";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type FieldError = {
  __typename?: "FieldError";
  field: Scalars["String"];
  message: Scalars["String"];
};

export type Mutation = {
  __typename?: "Mutation";
  createReview: Review;
  deleteReview: Scalars["Boolean"];
  login: UserResponse;
  register: UserResponse;
  updateReview?: Maybe<Review>;
};

export type MutationCreateReviewArgs = {
  title: Scalars["String"];
};

export type MutationDeleteReviewArgs = {
  id: Scalars["Float"];
};

export type MutationLoginArgs = {
  options: UserInput;
};

export type MutationRegisterArgs = {
  options: UserInput;
};

export type MutationUpdateReviewArgs = {
  id: Scalars["Float"];
  title?: InputMaybe<Scalars["String"]>;
};

export type Query = {
  __typename?: "Query";
  hello: Scalars["String"];
  me?: Maybe<Users>;
  review?: Maybe<Review>;
  reviews: Array<Review>;
};

export type QueryMeArgs = {
  token: Scalars["String"];
};

export type QueryReviewArgs = {
  id: Scalars["Float"];
};

export type Review = {
  __typename?: "Review";
  createdAt: Scalars["DateTime"];
  id: Scalars["Float"];
  title: Scalars["String"];
  updatedAt: Scalars["DateTime"];
};

export type UserInput = {
  email: Scalars["String"];
  firstName: Scalars["String"];
  lastName: Scalars["String"];
  password: Scalars["String"];
};

export type UserResponse = {
  __typename?: "UserResponse";
  errors?: Maybe<Array<FieldError>>;
  token?: Maybe<Scalars["String"]>;
  user?: Maybe<Users>;
};

export type Users = {
  __typename?: "Users";
  createdAt: Scalars["DateTime"];
  email: Scalars["String"];
  firstName: Scalars["String"];
  id: Scalars["Float"];
  lastName: Scalars["String"];
  updatedAt: Scalars["DateTime"];
};

export type RegisterMutationVariables = Exact<{
  options: UserInput;
}>;

export type RegisterMutation = {
  __typename?: "Mutation";
  register: {
    __typename?: "UserResponse";
    token?: string | null;
    errors?: Array<{
      __typename?: "FieldError";
      message: string;
      field: string;
    }> | null;
    user?: { __typename?: "Users"; email: string; id: number } | null;
  };
};

export const RegisterDocument = gql`
  mutation Register($options: UserInput!) {
    register(options: $options) {
      errors {
        message
        field
      }
      token
      user {
        email
        id
      }
    }
  }
`;

export function useRegisterMutation() {
  return Urql.useMutation<RegisterMutation, RegisterMutationVariables>(
    RegisterDocument
  );
}
