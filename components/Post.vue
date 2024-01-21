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
.post {
  @apply prose max-w-none;
  @apply prose-h1:font-main prose-h1:text-2xl prose-h1:font-bold prose-h1:text-primary;
  @apply prose-h2:font-main prose-h2:text-xl prose-h2:font-medium prose-h2:text-primary prose-h2:mt-8 prose-h2:mb-4;
  @apply prose-h3:font-main prose-h3:text-lg prose-h3:font-medium prose-h3:text-primary prose-h3:mt-8 prose-h3:mb-4;
  @apply prose-p:text-primary prose-p:font-light;
  @apply prose-a:font-semibold prose-a:text-accent prose-a:no-underline hover:prose-a:underline;
  @apply prose-ul:text-primary prose-ul:font-light prose-ul:leading-5;
}

img {
  @apply mx-auto rounded-xl;
}
</style>
