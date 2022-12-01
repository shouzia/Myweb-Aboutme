<template>
  <div class="Index">
    <div class="Content">
      <Avatar />
      <Name-Title />
      <My-Link />
    </div>
    <Background class="Bg-index" />
  </div>
</template>

<script>
export default {
  name: "IndexPage",
};
</script>

<style>
.Index {
  -webkit-filter: grayscale(100%);
  -moz-filter: grayscale(100%);
  -ms-filter: grayscale(100%);
  -o-filter: grayscale(100%);
  filter: progid:DXImageTransform.Microsoft.BasicImage(grayscale=1);
  _filter: none;
  filter: grayscale(100%);
}
.Bg-index {
  z-index: -1;
  position: fixed;
  top: 0;
  left: 0;
}

.Content {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.35);
}
</style>
