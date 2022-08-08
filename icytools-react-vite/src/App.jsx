import { useState } from "react"
import { useQuery, useLazyQuery } from '@apollo/client'
import { TRENDING_COLLECTIONS, SEARCH_COLLECTIONS } from './queries'
import './App.css'

export default function App() {
  const [searchTerm, setSearchTerm] = useState("")

  const { data } = useQuery(TRENDING_COLLECTIONS)
  const [searchCollections, { data: searchData }] = useLazyQuery(SEARCH_COLLECTIONS)

  const collectionsToShow = searchData?.contracts.edges.length
    ? searchData.contracts.edges
    : (data?.contracts.edges ?? [])

  return (
    <div>
      <h2>Using the Icy Tools GraphQL API for NFT Analytics</h2>
      <h3>Stats in last hour</h3>

      <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <button onClick={async () => {
        await searchCollections({ variables: { query: searchTerm } })
      }}>
        Search!
      </button>

      <table>
        <thead>
          <tr>
            <th><b>Collection</b></th>
            <th><b>Average</b></th>
            <th><b>Total Sales</b></th>
          </tr>
        </thead>
        
        <tbody>
          {collectionsToShow.map(
            (collection) => {
              return (
                <tr key={collection.node.address}>
                  <td>{collection.node.name}</td>
                  <td>{collection.node.stats.average.toFixed(3)}</td>
                  <td>{collection.node.stats.totalSales}</td>
                </tr>
              )
            }
          )}
        </tbody>
      </table>
    </div>
  )
}