<script>
  import { onMount } from 'svelte';
  let canvasElement;
  onMount(() => {
    const ctx = canvasElement.getContext('2d');
    ctx.beginPath();
    ctx.fillStyle = "red";
    ctx.lineTo(50,84);
    ctx.lineTo(100,0);

ctx.fill();
  });




</script>
<!--<style>-->
<!--  .f {-->
<!--    background-image: url("./images.jpg");-->
<!--    background-size: 200px 168px;-->
<!--    background-repeat: repeat;-->
<!--    width: 200px;-->
<!--    height: 168px;-->
<!--    font-size: 0;-->
<!--    white-space: nowrap;-->
<!--    /*clip-path: polygon(0 0px, 50px 84px, 100px 0px);*/-->
<!--    clip-path: polygon(50px 0px, 150px 0px, 100px 84px,-->
<!--    200px 84px, 150px 168px, 100px 84px,-->
<!--    50px 164px, 0px 84px, 100px 84px);-->
<!--  }-->

<!--</style>-->

<canvas bind:this="{canvasElement}" width="200" height="168"></canvas>

