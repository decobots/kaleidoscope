<script>
  import Fun from './fun.svelte';

  import {getContext} from 'svelte';
  import {Counter, Degree, toArray} from "./counter.js";

  let height = getContext('height');
  let side = getContext('side');
  const _counter = Counter();
  const _degree = Degree();

  $: imgStyle = `
    position: absolute;
    top:${side / 2 - 2}px;
    left:0px;
    width:${height}px;
    height: ${side}px;
    background-color: #ffaaaa;
    clip-path: polygon(0 0 , 0 ${side}px, ${height}px ${side / 2}px);
    transform-origin: ${height}px ${side / 2}px;
   `;

  $: divStyle = `
    display:inline-block;
    width:${height * 2}px;
    height:${side * 2}px;
    position: relative;
  `;

</script>
<div style="{divStyle}">
  {#each toArray(6) as _}
    <div style="{imgStyle} transform: rotate({_degree.next().value}deg);">
      <div style="transform: scaleY({(_counter.next().value % 2 == 0) ? -1 : 1});">
        <Fun></Fun>
      </div>
    </div>
  {/each}
</div>
