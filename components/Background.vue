<template>
  <div class="Bg-Main">
    <div>
      <b-carousel
        id="carousel-fade"
        class="Big-Img-Box"
        style="text-shadow: 0px 0px 2px #000"
        fade
      >
        <b-carousel-slide
          v-for="index in ImgList"
          :key="index.imgScr"
          class="Big-Img-Box"
          :img-src="index.imgScr"
          style="width: 100vw"
        ></b-carousel-slide>
      </b-carousel>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Background',
  data() {
    return {
      ImgList: [
        {
          imgScr: 'https://s4.ax1x.com/2022/01/14/7GFpKs.jpg',
        },
        {
          imgScr: 'https://s4.ax1x.com/2022/01/14/7GPctS.md.jpg',
        },
        {
          imgScr: 'https://s4.ax1x.com/2022/01/14/7GF9rn.jpg',
        },
        {
          imgScr: 'https://s4.ax1x.com/2022/01/14/7GFiV0.jpg',
        },
      ],
    }
  },
}
</script>

<style>
.Big-Img-Box {
  height: 100vh;
}
.img-fluid {
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  filter: blur(4px);
  transform: scale(1.02);
}
.w-100 {
  width: 100vw;
}
</style>