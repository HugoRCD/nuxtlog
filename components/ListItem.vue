<script setup lang="ts">
import type { ParsedContent } from "@nuxt/content/dist/runtime/types";
import type { PropType } from "vue";

defineProps({
  content: {
    type: Object as PropType<ParsedContent>,
    required: true,
  },
});
</script>

<template>
  <div class="relative flex flex-col gap-1 cursor-pointer">
    <!--    <div class="absolute top-1 right-1">
      <Badge
        v-if="content.version"
        :label="`v${content.version}`"
        class="mb-2"
      />
    </div>-->
    <div class="overflow-hidden rounded-md">
      <img
        :src="content.image"
        :alt="content.title"
        class="rounded-md w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
      >
    </div>
    <div class="flex items-center gap-3">
      <h1 class="text-xl font-main sm:text-2xl font-bold text-primary">
        {{ content.title }}
      </h1>
      <span class="i-lucide-link text-primary text-lg hover:text-accent cursor-pointer" />
    </div>
    <span class="block text-muted text-sm">
      {{ new Date(content.date).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }) }}
    </span>
  </div>
</template>

<style scoped lang="scss">

</style>
