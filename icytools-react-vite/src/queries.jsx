import { gql } from '@apollo/client';

export const TRENDING_COLLECTIONS = gql`
  query TrendingCollections {
    contracts(orderBy: SALES, orderDirection: DESC, first: 10) {
      edges {
        node {
          address
          ... on ERC721Contract {
            name
            stats {
              totalSales
              average
            }
          }
        }
      }
    }
  }
`

export const SEARCH_COLLECTIONS = gql`
  query SearchCollections($query: String!) {
    contracts(filter: { name: { icontains: $query }}) {
      edges {
        node {
          address
          ... on ERC721Contract {
            name
            stats {
              totalSales
              average
            }
          }
        }
      }
    }
  }
`