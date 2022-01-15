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
          imgScr:
            'https://tva1.sinaimg.cn/large/008f3Z8zgy1gyeo72ghydj31hc0u0wyp.jpg',
        },
        {
          imgScr:
            'https://tva1.sinaimg.cn/large/008f3Z8zgy1gyeob6ro2oj31wv13o4ah.jpg',
        },
        {
          imgScr:
            'https://tva1.sinaimg.cn/large/008f3Z8zgy1gyenz0u46cj32pg1ca4qp.jpg',
        },
        {
          imgScr:
            'https://tva1.sinaimg.cn/large/008f3Z8zgy1gyenljcycuj31hc0u0du5.jpg',
        },
        {
          imgScr:
            'https://tva1.sinaimg.cn/large/008f3Z8zgy1gyenlk15cjj33341y4b29.jpg',
        },
        {
          imgScr:
            'https://tva1.sinaimg.cn/large/008f3Z8zgy1gyenljowtpj33341sw1kx.jpg',
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
  object-position: 60% 5%;
  transform: scale(1.2);
  animation: ImgMove 6s infinite;
}
.w-100 {
  width: 100vw;
}
@keyframes ImgMove {
  form {
    transform: scale(1.2) translateX(0%);
  }
  to {
    transform: scale(1.2) translateX(-5%);
  }
}
</style>