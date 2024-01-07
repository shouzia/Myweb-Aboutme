<template>
  <div class="flex justify-between w-full">
    <a
      target="_blank"
      :href="item.link"
      class="hover:text-[#ff4848] w-[24px] h-[24px]"
      v-for="(item, index) in Icon"
      :key="index"
      @mouseenter="EnterColor(index)"
      @mouseleave="LeaveColor(index)"
    >
      <SvgIcon class="w-full h-full" :name="item.svg" :color="item.color" />
    </a>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";

interface IconType {
  link: string;
  svg: string;
  color: string;
}

const Icon = ref<IconType[]>([
  { link: "https://blog.shouzi.xyz/", svg: "blog", color: "#fff" },
  { link: "https://github.com/shouzia", svg: "github", color: "#fff" },
  {
    link: "https://music.163.com/#/user/home?id=356752802",
    svg: "music",
    color: "#fff",
  },
  { link: "mailto:saopipizhu@163.com", svg: "mail", color: "#fff" },
]);

function EnterColor(index: number) {
  Icon.value[index].color = "#0099FF";
}
function LeaveColor(index: number) {
  Icon.value[index].color = "#fff";
}
</script>
<style lang=""></style>
