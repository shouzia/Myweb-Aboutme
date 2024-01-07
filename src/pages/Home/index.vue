<template>
  <div class="w-full relative flex justify-center items-center">
    <BackImage />
    <div
      class="w-full absolute z-10 h-full flex justify-center items-center text-[#fff]"
    >
      <div class="max-w-[375px] flex justify-center flex-col items-center">
        <Avatar />
        <Title class="mt-[30px]" />
        <IconInfo class="mt-[30px]" />
        <TextInfo class="mt-[30px]" />
        <LinkInfo class="mt-[30px]" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Avatar from "@/components/Avatar.vue";
import LinkInfo from "@/components/LinkInfo.vue";
import TextInfo from "@/components/TextInfo.vue";
</script>
<style></style>
