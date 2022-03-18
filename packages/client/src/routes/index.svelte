<script lang="ts">
import { onMount } from "svelte";


  const srvaddr = process.env.API_SRV;

  let time = "not yet defined"

  onMount(async () => {
    const result = await fetch(srvaddr);
    const body = await result.json();
    console.log(body);
    time = body.timestamp;
  })
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<hr>
<h2>Time is: {time}</h2>
<hr>
<p>This was a change that Shaye made</p>

<style>
  h1 h2 {
    color: red;
  }
</style>
