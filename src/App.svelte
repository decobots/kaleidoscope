<svelte:head>
  <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
          integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
          crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
          integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
          crossorigin="anonymous"></script>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
          integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
          crossorigin="anonymous"></script>
</svelte:head>
<script>
  import KaleidoscopeTexture from './kaleidoscopeTexture.svelte';
  import Triangle from "./triangle.svelte"
  import Fun from './fun.svelte';

  let height = 140;
  let rotate = 0;
</script>

<style>
</style>

<div class="container-fluid">
  <div class="row">
    <div class="col-3">
      <div class="form-group">
        <label for="hR">Height</label>
        <input type="range" id="hR" class="form-control-range" min="200" max="300" bind:value={height}/>
      </div>
    </div>

    <div class="col-1"><p>{height}</p></div>
    <div class="col-3">
      <div class="form-group">
        <label for="rR">Rotation</label>
        <input type="range" id="rR" class="form-control-range" min="0" max="360" bind:value={rotate}>
      </div>
    </div>
    <div class="col-1"><p>{rotate}</p></div>
  </div>
</div>

<div style="width:100%; height:85vh;">
  <KaleidoscopeTexture bind:_height={height}>
    <Triangle rotation={rotate}>
      <img src="images.jpg" alt="back" />
      <Fun></Fun>
    </Triangle>
  </KaleidoscopeTexture>
</div>

