<script>
  import {height, side} from "./store.js";

  export let angle = 0;
  export let rotate = true;
  let dif = $side - $height;
  $: divStyle = `
    width:${$side + dif * 2}px;
    height:${$side + dif * 2}px;
    left: -${2 * dif}px;
    top: -${dif}px;
    position: absolute;
    transform: rotate(${angle}deg);
     animation-duration: 10s;
  `;
  console.log($height, $side, dif);
</script>
<style>
  div :first-child {
    transform-origin: center;
    display: inline-block;
    width: 100%;

    height: 100%;
    object-fit: cover;
  }

  .rotate {
    animation-name: rotation;

    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(359deg);
    }
  }
</style>
<div name="triangle" style={divStyle} class:rotate>
  <slot></slot>
</div>


