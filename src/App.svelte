<svelty:header>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
        integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossorigin="anonymous">
</svelty:header>
<script>
  import Kaleidoscope from './kaleidoscope.svelte';
  let name = 'world';
</script>

<style>
  :root {
    --red: #ff0eff;
  }
</style>
<p class="text-danger">hi!</p>
<p class="text-primary">hi!</p>
<Kaleidoscope></Kaleidoscope>
