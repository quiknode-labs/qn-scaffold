import {
  ApolloClient, InMemoryCache, ApolloProvider,
} from '@apollo/client'
  
const client = new ApolloClient({
  uri: 'https://graphql.icy.tools/graphql',
  headers: { 'x-api-key' : import.meta.env.VITE_API_KEY },
  fetchOptions: {
    mode: 'no-cors',
  },
  cache: new InMemoryCache({
    typePolicies: {
      ERC721Token: {
        keyFields: ['tokenId', 'contract', ['address']],
      },
      ERC721Contract: {
        keyFields: ['address'],
      },
      Wallet: {
        keyFields: ['address'],
      },
    },
  }),
})

export default function Apollo({ children }) {
  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  )
}