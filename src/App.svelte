<script>
  import Kaleidoscope2 from './kaleidoscope2.svelte';
import Fun from './fun.svelte';
  let name = 'world';
</script>

<style>
  :root {
    --red: #ff0eff;
  }
  div{
    margin: 0;
    padding: 0;
    top:0;
    bottom: 0;
    line-height: 0;
  }
  .even{
    padding-left:50px;
    margin-top:-30px;
  }

</style>

<div class="">
  <Kaleidoscope2  height="50"></Kaleidoscope2><Kaleidoscope2  height="50"></Kaleidoscope2><Kaleidoscope2  height="50"></Kaleidoscope2>
</div>
<div class="even">
  <Kaleidoscope2  height="50"></Kaleidoscope2><Kaleidoscope2  height="50"></Kaleidoscope2>
</div>
