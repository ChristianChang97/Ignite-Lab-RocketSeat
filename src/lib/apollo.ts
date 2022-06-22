import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4p2go4t1m0801z49rhq8btv/master',
    cache: new InMemoryCache()
})