import 'dotenv/config'

export const TRENDING_COLLECTIONS = `{
  contracts(orderBy: SALES, orderDirection: DESC) {
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
}`

export async function post() {
  const response = await fetch('https://graphql.icy.tools/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': process.env.API_KEY
    },
    body: JSON.stringify({
      query: TRENDING_COLLECTIONS
    })
  })

  const data = await response.json()

  if (data) {
    return {
      body: data
    }
  }
}