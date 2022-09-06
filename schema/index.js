import { GraphQLSchema, GraphQLObjectType } from "graphql"
import AccountQuery from "./queries/account.query.js"

const Schema = new GraphQLSchema({
    types: null,
    query: new GraphQLObjectType({
        name:"RootQueryType",
        fields: {
            ...AccountQuery,
            //...ClientQuery //another example
        }
    }),
    mutation: null
});

export default Schema;