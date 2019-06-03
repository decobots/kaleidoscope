<script>
  export let side = 100;
  $: height = Math.floor((Math.sqrt(3) * side) / 2) - 1;
  $: imgStyle = `
  top:${side/2-2}px;
  left:0px;
    width:${height}px;
    height: ${side}px;
    background-color: #ffaaaa;
    clip-path: polygon(0 0 , 0 ${side}px, ${height}px ${side / 2}px);
    transform-origin: ${height}px ${side / 2}px;
    position: absolute;
    bottom:0;
    `;

  $: divStyle = `
  display:inline-block;
  width:${height*2 -2}px;
  height:${side*2 -2}px;
  position: relative;
  `;

  //clip-path: polygon(0 0 , ${side / 2}px ${height}px, ${side}px 0);
</script>
  <div style="{divStyle}">
    <div style="{imgStyle} transform: rotate(0deg);"></div>
    <div style="{imgStyle} transform: rotate(60deg) ;"></div>
    <div style="{imgStyle} transform: rotate(120deg);"></div>
    <div style="{imgStyle} transform: rotate(180deg);"></div>
    <div style="{imgStyle} transform: rotate(240deg) ;"></div>
    <div style="{imgStyle} transform: rotate(300deg);"></div>
  </div>
