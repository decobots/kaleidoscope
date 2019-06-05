<script>
  import KaleidoscopeTexture from './kaleidoscopeTexture.svelte';
  import Fun from './fun.svelte';

  let height=251;
</script>

<style>
</style>
<input type="range" id="start" name="volume"
       min="100" max="300" bind:value={height}>
<p>{height}</p>
<div style="width:80vmax; height:80vmin">
  <KaleidoscopeTexture bind:_height={height}>

  </KaleidoscopeTexture>
</div>

