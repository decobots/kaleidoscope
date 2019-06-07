<script>
  import {height, side} from "./store.js";

  export let angle = 0;
  export let rotate = true;
  export let speed = 10;
  let dif = $side - $height;
  $: divStyle = `
    width:${$side + dif * 2}px;
    height:${$side + dif * 2}px;
    left: -${2 * dif}px;
    top: -${dif}px;
    position: absolute;
    transform: rotate(${angle}deg);
    animation-duration: ${speed}s;
  `;
</script>
<style>

  div :first-child {
    transform-origin: center;
    display: inline-block;
    max-width: 100%;
    min-width: 100%;
    max-height: 100%;
    min-height: 100%;
  }

  .rotate {
    /*animation: rotation 3s linear infinite;*/
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


