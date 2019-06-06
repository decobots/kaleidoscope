<script>
  import {Counter, toArray} from "./counter.js";
  import {height, side} from "./store.js";


  const _counter = Counter();
  const degrees = [0, 60, 120, 180, 240, 300];

  $: imgStyle = `
    position: absolute;
    top:${$side / 2}px;
    left:0px;
    width:${$height}px;
    height: ${$side}px;
    background-color: #aaaaaa;
    clip-path: polygon(0 0 , 0 ${$side}px, ${$height}px ${$side / 2}px);
    -webkit-clip-path: polygon(0 0 , 0 ${$side}px, ${$height}px ${$side / 2}px);
    transform-origin: ${$height}px ${$side / 2}px;
   `;

  $: divStyle = `
    display:inline-block;
    width:${$height * 2}px;
    height:${$side * 2}px;
    position: relative;
  `;

</script>


<div style="{divStyle}">
  {#each degrees as degree}
    <div name="rotate and scale"
         style="{imgStyle} transform: rotate({degree}deg) scaleY({(degree % 120 === 0) ? -1 : 1});">
        <slot></slot>
    </div>
  {/each}
</div>
