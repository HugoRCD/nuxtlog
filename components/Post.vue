<template>
  <article
    :id="`v${content.version}`"
    class="md:flex"
  >
    <h2 class="pl-7 text-xs sm:text-sm leading-6 text-accent md:w-1/4 md:pl-0 md:pr-12 md:text-right h-full">
      <Badge
        :label="`v${content.version}`"
        class="absolute md:static mb-2"
      />
      <span class="block text-muted text-sm">
        {{ new Date(content.date).toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        }) }}
      </span>
    </h2>
    <div class="content-block">
      <div class="feed-border" />
      <div class="feed-dot" />
      <h1 class="text-xl font-main sm:text-3xl font-bold text-primary">
        {{ content.title }}
      </h1>
      <ContentRenderer
        :value="content"
        class="document"
      />
      <Authors
        v-if="content.authors"
        :authors="content.authors"
      />
    </div>
  </article>
</template>

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

<style>
img {
  @apply mx-auto rounded-xl;
}

.feed-dot {
  @apply absolute -top-[1.0625rem] -left-1 size-[0.5625rem] rounded-full bg-accent md:top-[0.4375rem];
}
.feed-border {
  @apply absolute -bottom-2 left-0 w-px bg-accent -top-3 md:top-2.5;
}
.content-block {
  @apply relative pt-2 pl-7 md:w-3/4 md:pt-0 md:pl-12 pb-16;
}
.document {
  @apply max-w-none prose-h3:mb-2 prose-h3:text-base prose-h3:text-muted prose-p:text-muted prose-h3:leading-6 prose-sm prose prose-pre:text-base prose-a:font-semibold prose-a:text-primary hover:prose-a:text-accent;
}

.document ul {
  @apply text-muted my-0;
}
</style>
