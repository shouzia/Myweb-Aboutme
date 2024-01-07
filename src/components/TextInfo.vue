<template>
  <div class="flex justify-between w-full text-[1rem]">
    <div
      v-for="(item, index) in TextInfoData"
      :key="index"
      class="flex justify-between"
    >
      <span v-if="index === 0">
        &copy;2019-{{ new Date().getUTCFullYear() }}
      </span>
      <div v-if="item.title === '|'">{{ item.title }}</div>
      <a :href="item.link" target="_blank" class="hover:text-[#0099FF]">
        <span v-if="item.title !== '|' && item.title !== '2019'">{{
          item.title
        }}</span>
      </a>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
interface TextInfoType {
  title: string;
  link: string;
}

const TextInfoData = ref<TextInfoType[]>([
  { title: "2019", link: "/" },
  { title: "|", link: "/" },
  { title: "瘦子Blog", link: "http://blog.shouzi.xyz" },
  { title: "|", link: "/" },
  { title: "幻影官网", link: "http://hypin.cn" },
]);
</script>
<style lang=""></style>
