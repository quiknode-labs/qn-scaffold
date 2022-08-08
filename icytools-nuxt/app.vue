<template>
  <h2>icy.tools+nuxt3</h2>
  <ul>
    <li
      v-for="contract of contracts.data.contracts.edges"
      v-bind:key="contract.node.address"
    >
      {{ contract.node.name }}
    </li>
  </ul>
</template>

<script setup>
  const TRENDING_COLLECTIONS = `{
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

  const { data: contracts } = await useFetch(
    'https://graphql.icy.tools/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.API_KEY
      },
      body: JSON.stringify({
        query: TRENDING_COLLECTIONS
      })
    }
  )
</script>