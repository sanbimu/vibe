import { ObjectId } from "mongodb";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  ObjectID: ObjectId;
};

export type Me = {
  __typename?: 'Me';
  avatar: Scalars['String'];
  email: Scalars['String'];
  id: Scalars['ObjectID'];
  username: Scalars['String'];
};

export type ModifySettingsInput = {
  avatar?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addComment?: Maybe<Vibe>;
  addFollow?: Maybe<User>;
  addSmile?: Maybe<Vibe>;
  createVibe?: Maybe<Vibe>;
  deleteVibe?: Maybe<Vibe>;
  modifySettings?: Maybe<User>;
  removeFollow?: Maybe<User>;
  removeSmile?: Maybe<Vibe>;
};


export type MutationAddCommentArgs = {
  id: Scalars['ObjectID'];
  message: Scalars['String'];
};


export type MutationAddFollowArgs = {
  id: Scalars['ObjectID'];
};


export type MutationAddSmileArgs = {
  id: Scalars['ObjectID'];
};


export type MutationCreateVibeArgs = {
  message: Scalars['String'];
};


export type MutationDeleteVibeArgs = {
  id: Scalars['ObjectID'];
};


export type MutationModifySettingsArgs = {
  input: ModifySettingsInput;
};


export type MutationRemoveFollowArgs = {
  id: Scalars['ObjectID'];
};


export type MutationRemoveSmileArgs = {
  id: Scalars['ObjectID'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  cursor: Scalars['String'];
  hasNext: Scalars['Boolean'];
};

export type PaginatedVibes = {
  __typename?: 'PaginatedVibes';
  pageInfo: PageInfo;
  vibes: Array<Vibe>;
};

export type Query = {
  __typename?: 'Query';
  comments: Array<Vibe>;
  followers: Array<User>;
  following: Array<User>;
  friends: Array<User>;
  me?: Maybe<Me>;
  timeline?: Maybe<PaginatedVibes>;
  user?: Maybe<User>;
  users: Array<User>;
  vibe?: Maybe<Vibe>;
  vibes: Array<Vibe>;
};


export type QueryCommentsArgs = {
  id: Scalars['ObjectID'];
};


export type QueryFollowersArgs = {
  id: Scalars['ObjectID'];
};


export type QueryFollowingArgs = {
  id: Scalars['ObjectID'];
};


export type QueryTimelineArgs = {
  after?: InputMaybe<Scalars['ObjectID']>;
};


export type QueryUserArgs = {
  id?: InputMaybe<Scalars['ObjectID']>;
  username?: InputMaybe<Scalars['String']>;
};


export type QueryUsersArgs = {
  query: Scalars['String'];
};


export type QueryVibeArgs = {
  id: Scalars['ObjectID'];
};


export type QueryVibesArgs = {
  id: Scalars['ObjectID'];
  type: VibeType;
};

export type RepliesNode = {
  __typename?: 'RepliesNode';
  count: Scalars['Int'];
  hasReplied: Scalars['Boolean'];
  vibes: Array<Scalars['ObjectID']>;
};

export type SmilesNode = {
  __typename?: 'SmilesNode';
  count: Scalars['Int'];
  hasSmiled: Scalars['Boolean'];
  users: Array<Scalars['ObjectID']>;
};

export type User = {
  __typename?: 'User';
  avatar: Scalars['String'];
  createdAt: Scalars['String'];
  email: Scalars['String'];
  followers: Array<Scalars['ObjectID']>;
  following: Array<Scalars['ObjectID']>;
  id: Scalars['ObjectID'];
  replies: Array<Scalars['ObjectID']>;
  smiles: Array<Scalars['ObjectID']>;
  username: Scalars['String'];
  vibes: Array<Scalars['ObjectID']>;
};

export type Vibe = {
  __typename?: 'Vibe';
  createdAt: Scalars['String'];
  id: Scalars['ObjectID'];
  message: Scalars['String'];
  replies: RepliesNode;
  reply?: Maybe<Vibe>;
  smiles: SmilesNode;
  user: User;
};

export enum VibeType {
  Comments = 'COMMENTS',
  Smiles = 'SMILES',
  Vibes = 'VIBES'
}
