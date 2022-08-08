import Head from 'next/head'
import { ApolloClient, InMemoryCache, gql } from '@apollo/client'
import styles from '../styles/Home.module.css'

export default function Home({ contracts }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>icy.tools+Next</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>icy.tools+Next ▲</h1>

        <div>
          {contracts.map(contract => {
            return (
              <ul key={contract.node.address}>
                <li>
                  <h3>{contract.node.name}</h3>
                  <p>{contract.node.symbol}</p>
                </li>
              </ul>
            )
          })}
        </div>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: 'https://graphql.icy.tools/graphql',
    headers: {
      'x-api-key': process.env.API_KEY,
    },
    cache: new InMemoryCache()
  })

  const { data } = await client.query({
    query: gql`
      query TrendingCollections {
        contracts(orderBy: SALES, orderDirection: DESC) {
          edges {
            node {
              address
              ... on ERC721Contract {
                name
                stats {
                  totalSales
                  average
                  ceiling
                  floor
                  volume
                }
                symbol
              }
            }
          }
        }
      }
    `
  })

  return {
    props: {
      contracts: data.contracts.edges
    }
  }
}