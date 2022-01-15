<template>
  <div class="Avatar-Main">
    <div v-b-hover="hoverHandler" class="Avatar-Style">
      <img class="Img-W" ref="Avatar" src="@/assets/Img/Avatar.jpg" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    hoverHandler(isHovered) {
      if (isHovered) {
        // Do something
        this.$refs.Avatar.className = 'Avatar-animation Img-W'
        console.log()
      } else {
        // Do something else
        if (this.$refs.Avatar.className != 'Img-W') {
          setTimeout(() => {
            this.$refs.Avatar.className = 'Img-W'
          }, 2000)
        } else {
          this.$refs.Avatar.className = 'Img-W'
        }
      }
    },
  },
}
</script>

<style>
.Avatar-Style img {
  border-radius: 100%;
}

.Avatar-animation {
  animation: Avatar-rotate 2s linear;
}
.Img-W {
  width: 190px;
}

@keyframes Avatar-rotate {
  0% {
    -ms-transform: rotate(0deg); /* IE 9 */
    -webkit-transform: rotate(0deg); /* Safari and Chrome */
    transform: rotate(0deg);
  }

  100% {
    -ms-transform: rotate(360deg); /* IE 9 */
    -webkit-transform: rotate(360deg); /* Safari and Chrome */
    transform: rotate(360deg);
  }
}
@media screen and (max-width: 800px) {
  .Img-W {
    width: 150px;
  }
}
</style>