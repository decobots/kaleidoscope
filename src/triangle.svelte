<script>
  import {height, side} from "./store.js";

  export let rotation = 0;
  export let rotate = true;
  $: divStyle = `
    width:${$side}px;
    height:${$side}px;
    position: relative;
    transform:rotate(${rotation}deg);
    animation: rotation 10s linear infinite;
  `;
  // if(rotate){
  //   divStyle+= 'animation: rotation 10s linear infinite; ';
  // }
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

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(359deg);
    }
  }
</style>
<div name="triangle" style={divStyle}>
  <slot></slot>
</div>


