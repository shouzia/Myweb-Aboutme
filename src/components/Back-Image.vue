<template>
  <div class="relative min-w-[100%] min-h-screen overflow-hidden">
    <div
      class="z-[2] bg-[#797979] bg-opacity-[0.45] absolute min-w-[100%] min-h-screen"
    ></div>
    <div
      class="z-[-1] absolute min-w-[100vw] min-h-screen overflow-hidden animate-ImgMove"
    >
      <transition-group enter-active-class="animate__animated animate__fadeIn">
        <img
          class="object-cover min-w-[100%] min-h-screen absolute top-0 object-[60%,5%] duration-1000"
          v-for="(item, index) in ImageData"
          :key="index"
          :src="item.Image"
          :class="index === ShowIndex ? ' opacity-100 ' : ' opacity-0 '"
        />
      </transition-group>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";
import Img1 from "@/assets/1.jpg";
import Img2 from "@/assets/2.jpg";
import Img3 from "@/assets/3.jpg";
import Img4 from "@/assets/4.jpg";

interface ImageType {
  Image: string;
}
const ImageData = ref<ImageType[]>([
  { Image: Img1 },
  { Image: Img2 },
  { Image: Img3 },
  { Image: Img4 },
]);
const ShowIndex = ref<number>(0);
function Show() {
  setInterval(() => {
    ShowIndex.value++;
    if (ShowIndex.value === ImageData.value.length) {
      ShowIndex.value = 0;
    }
  }, 5000);
}
onMounted(() => {
  Show();
});
</script>
<style></style>
