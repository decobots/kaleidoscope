<script>
  import {height, side} from "./store.js";

  export let angle = 0;
  export let rotate = true;
  $: divStyle = `
    width:${$side}px;
    height:${$side}px;
    position: relative;
    transform: rotate(${angle}deg);
  `;
</script>
<style>
  div :first-child {
    transform-origin: center;
    display: inline-block;
    max-width: 125%;
    min-width: 125%;
    max-height: 125%;
    min-height: 125%;
    position: absolute;
    left: -25%;
  }
  .rotate {
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
</style>
<div name="triangle" style={divStyle} class:rotate>
  <slot></slot>
</div>


