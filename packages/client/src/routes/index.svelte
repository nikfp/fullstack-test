<script lang="ts">
import { onMount } from "svelte";
import sayMyName from 'shared';

  const srvaddr = process.env.API_SRV;

  if(srvaddr) {
    console.log(`server address is: ${srvaddr}`) 
  } else {
    console.log("server address did not load correctly");
  };

  let time = "not yet defined"

  onMount(async () => {
    const result = await fetch(srvaddr);
    const body = await result.json();
    console.log(body);
    console.log(sayMyName());
    time = body.timestamp;
  })
</script>

<h1 class="red">Welcome to SvelteKit</h1>
<p style="color: green">Is it realistic to think this might work?</p>

<hr>
<h2 class="red">Time is: {time}</h2>
<hr>
<p>This was a change that Nik and Shaye made</p>

<style>
  .red {
    color: red;
  }
</style>
