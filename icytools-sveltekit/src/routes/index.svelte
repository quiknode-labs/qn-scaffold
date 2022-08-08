<script context="module">
  export const load = async ({ fetch }) => {
    try {
      const response = await fetch('/graphql', {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      return {
        props: { ...(await response.json()) }
      }
    } catch (error) {
      console.error(`Error in load function for /: ${error}`)
    }
  }
</script>

<script>
  export let data
</script>

<main class="container">
  <h2>icy.tools+SvelteKit</h2>
  <p>Woot!</p>
  {#each data.contracts.edges as {
    node
  }}
    <ul>
      <li>{node.address} - {node.name}</li>
    </ul>
  {/each}
</main>