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
  <article
    :id="content.title"
    class="bg-primary border-t-[1px] border-gray py-20 px-4 sm:px-6 lg:px-8 flex flex-col max-w-3xl mx-auto"
  >
    <h2>
      <Badge
        v-if="content.version"
        :label="`v${content.version}`"
        class="mb-2"
      />
    </h2>
    <div class="flex items-center gap-3">
      <h1 class="text-xl font-main sm:text-3xl font-bold text-primary">
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
    <ContentRenderer
      :value="content"
      class="post"
    />
    <Authors
      v-if="content.authors"
      :authors="content.authors"
    />
  </article>
</template>

<style>
img {
  @apply mx-auto rounded-xl;
}
</style>
