// GraphQL client configuration (simplified without Apollo)
// This file can be used for future GraphQL implementations if needed

export const graphqlConfig = {
  endpoint: process.env.NEXT_PUBLIC_INDEXER_ENDPOINT || '',
  apiKey: process.env.NEXT_PUBLIC_INDEXER_API_KEY || '',
}

export default graphqlConfig 