<template>
  <div class="Avatar-Main">
    <div v-b-hover="hoverHandler" class="Avatar-Style">
      <img ref="Avatar" width="220px" src="@/assets/Img/Avatar.jpg" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    hoverHandler(isHovered) {
      if (isHovered) {
        // Do something
        this.$refs.Avatar.className = 'Avatar-animation'
        console.log()
      } else {
        // Do something else
        if (this.$refs.Avatar.className != '') {
          setTimeout(() => {
            this.$refs.Avatar.className = ''
          }, 3000)
        } else {
          this.$refs.Avatar.className = ''
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
</style>