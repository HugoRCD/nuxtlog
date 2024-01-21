<script setup lang="ts">
import type { ParsedContent } from "@nuxt/content/dist/runtime/types";
import type {PropType} from "vue";

defineProps({
  content: {
    type: Object as PropType<ParsedContent>,
    required: true,
  },
});
</script>

<template>
  <article
    :id="`v${content.version}`"
    class="bg-primary border-t-[1px] border-gray py-20 px-4 sm:px-6 lg:px-8 flex flex-col"
  >
    <h2>
      <Badge
        v-if="content.version"
        :label="`v${content.version}`"
        class="mb-2"
      />
    </h2>
    <h1 class="text-xl font-main sm:text-3xl font-bold text-primary">
      {{ content.title }}
    </h1>
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
.post {
  @apply prose max-w-none;
  @apply prose-h1:font-main prose-h1:text-3xl prose-h1:font-bold prose-h1:text-primary;
  @apply prose-h2:font-main prose-h2:text-2xl prose-h2:font-bold prose-h2:text-primary;
  @apply prose-h3:font-main prose-h3:text-xl prose-h3:font-bold prose-h3:text-primary;
  @apply prose-p:text-primary prose-pre:text-base prose-p:font-light;
  @apply prose-a:font-semibold prose-a:text-primary hover:prose-a:text-accent;
  @apply prose-ul:text-primary prose-ul:leading-5;
}

img {
  @apply mx-auto rounded-xl;
}
</style>
