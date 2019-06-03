<script>
  import Fun from './fun.svelte';
  import {setContext} from 'svelte';
  import {Counter, Degree} from "./counter.js";

  export let height = 50;
  let side = Math.ceil(2 * height / (Math.sqrt(3)));
  setContext('side', side);

  const _triangles = [1, 2, 3, 4, 5, 6];
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
  {#each _triangles as _}
    <div style="{imgStyle} transform: rotate({_degree.next().value}deg);">
      <div style="transform: scaleY({(_counter.next().value % 2 == 0) ? -1 : 1});">
        <Fun></Fun>
      </div>
    </div>
  {/each}
</div>
