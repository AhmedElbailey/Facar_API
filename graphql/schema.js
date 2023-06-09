const { buildSchema } = require("graphql");

module.exports = buildSchema(`
    schema{
        query: RootQuery
        mutation: RootMutation
    }


    type RootQuery{
        login(email:String!, password:String!): AuthData!
        getPosts(page:Int) : PostsData!
        post(id: ID!): Post!
        user: User!
    }

    type AuthData{
        token: String!
        userId: String!
    }
    type PostsData{
        posts: [Post!]!
        totalPosts: Int!
    }


    type RootMutation {
        createUser(userInput: UserInputData) : User!
        createPost(postInput: PostInputData): Post!
        updatePost(id:ID!,postInput: PostInputData): Post!
        deletePost(id:ID!): Boolean
        updateStatus(status: String!): User!
    }

    input UserInputData{
        name: String!
        email: String!
        password: String!
    }

    input PostInputData{
        title: String!
        content: String!
        imageUrl: String!
    }

    type User{
        _id: ID!
        name: String!
        email: String!
        password: String
        status: String!
        posts: [Post!]!
    }

    type Post{
        _id: ID!
        title: String!
        content: String!
        imageUrl: String!
        creator: User!
        createdAt: String!
        updatedAt: String!
    }

`);
