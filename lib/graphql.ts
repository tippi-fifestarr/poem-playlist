import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

// These will be set once your processor is ready
const INDEXER_ENDPOINT = process.env.NEXT_PUBLIC_INDEXER_ENDPOINT || "";
const INDEXER_API_KEY = process.env.NEXT_PUBLIC_INDEXER_API_KEY || "";

const httpLink = createHttpLink({
  uri: INDEXER_ENDPOINT,
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: INDEXER_API_KEY ? `Bearer ${INDEXER_API_KEY}` : "",
    },
  };
});

export const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          comment: {
            merge(existing = [], incoming) {
              return incoming;
            },
          },
        },
      },
    },
  }),
});

export default apolloClient;