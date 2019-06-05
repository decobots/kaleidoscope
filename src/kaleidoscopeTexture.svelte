<script>
  import KaleidoscopeElement from './kaleidoscopeElement.svelte';
  import {toArray} from "./counter.js";
  import {height, side} from "./store.js";

  export let _height = 100;
  $: height.set(_height);

  let TextureWidth = 100;
  let TextureHeight = 100;


  $: NumberHorizontal = parseInt(TextureWidth / ($height * 2) + 2);
  $: NumberWertical = parseInt(TextureHeight / ($height * 2) + 2);

  $: oddStyle = `
    margin-top: -${$side / 2 + 2}px;
    margin-left: -${$height}px;
  `;
  $: evenStyle = `
    margin-top: -${$side / 2 + 2}px;
  `;
</script>

<style>
  .div {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    top: 0;
    bottom: 0;
    line-height: 0;
    font-size: 0;
    white-space: nowrap;
    overflow: hidden;
  }
</style>
<div class="div"
     bind:offsetWidth={TextureWidth}
     bind:offsetHeight={TextureHeight}>
  {#each toArray(NumberWertical) as row}
    <div style="{(row % 2 === 0)? oddStyle: evenStyle}">
      {#each toArray(NumberHorizontal) as _}
        <KaleidoscopeElement>
          <slot></slot>
        </KaleidoscopeElement>
      {/each}
    </div>
  {/each}
</div>



