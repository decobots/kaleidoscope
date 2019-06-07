<svelte:head>
<!--  <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"-->
<!--          integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"-->
<!--          crossorigin="anonymous"></script>-->
<!--  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"-->
<!--          integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"-->
<!--          crossorigin="anonymous"></script>-->
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
<!--  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"-->
<!--          integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"-->
<!--          crossorigin="anonymous"></script>-->
  <meta name="apple-mobile-web-app-capable" content="yes">
</svelte:head>

<script>
  import KaleidoscopeTexture from './kaleidoscopeTexture.svelte';
  import Triangle from "./triangle.svelte"
  import Fun from './fun.svelte';

  let height = 150;
  let angle = 120;
  let rotate = 0;
  let file = "images.jpg";

  function handleFileSelect(evt) {
    let files = evt.target.files; // FileList object
    let reader = new FileReader();
    let f = files[0];
    reader.readAsDataURL(f);
    reader.onload = f => {
      file = f.target.result;
    };
  }
</script>

<style>
  .card {
    background-color: rgba(255, 255, 255, 0.6);
  }

  #main {
    width: 97vw;
    height: 97vh;
    position: absolute;
    top: 8px;
    z-index: -1;
  }
</style>

<div class="container-fluid p-0 pr-1">
  <div class="card mb-3 p-0">
    <div class="card-body p-1">
      <div class="row justify-content-between align-items-end">
        <div class="col-sm-3">
          <div class="form-group">
            <label for="hR">Height: {height}</label>
            <input type="range" id="hR" class="form-control-range" min="150" max="300" bind:value={height}/>
          </div>
        </div>
        <div class="col-sm-3">
          <div class="form-group">
            <label for="aR">Angle: {angle}</label>
            <input type="range" id="aR" class="form-control-range" min="0" max="360" bind:value={angle}/>
          </div>
        </div>
        <div class="col-sm-2">
          <div class="form-group">
            <label for="rR">Auto rotation: {rotate}</label>
            <input type="checkbox" id="rR" bind:checked={rotate}>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="form-group">
            <label for="fR">File:</label>
            <input type="file" id="fR" on:change="{handleFileSelect}">
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div id="main" on:click="{()=>{}}">
  <KaleidoscopeTexture bind:_height={height}>
    <Triangle bind:rotate={rotate} bind:angle={angle}>
<!--      <Fun></Fun>-->
      <img src={file} alt="back"/>
    </Triangle>
  </KaleidoscopeTexture>
</div>

