<script>
  import {getContext} from 'svelte';
  import {spring} from 'svelte/motion';

  let h = 0;
  let w = 0;
  let size = getContext('side');
  let coords = spring({x: 50, y: 50}, {
    stiffness: 0.1,
    damping: 0.1
  });

  let d = spring(size / 10);
</script>

<style>
  circle {
    fill: #ff3e00;
    animation: rainbowing 20s linear infinite;
  }

  .main {
    transform-origin: center;
    display: inline-block;
    animation: rotation 10s linear infinite;
  }


  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(359deg);
    }
  }

  @keyframes rainbowing {
    0% {
      fill: red;
    }
    20% {
      fill: orange;
    }
    40% {
      fill: yellow;
    }
    60% {
      fill: green;
    }
    80% {
      fill: blue;
    }
    100% {
      fill: blueviolet;
    }
  }
</style>

<svelte:body
  on:mousemove="{e => coords.set({ x: e.clientX*size/w, y: e.clientY*size/h })}"
  on:mousedown="{() => d.set(size/10)}"
  on:mouseup="{() => d.set(size/20)}"
/>
<svelte:window bind:innerWidth={w} bind:innerHeight={h}

/>
<svg width="{size}px" height="{size}px" class="main">
  <circle cx={$coords.x} cy={$coords.y} r={$d}></circle>
  <circle cy={$coords.x} cx={$coords.y} r={$d}></circle>
</svg>
