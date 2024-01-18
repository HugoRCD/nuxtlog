<script setup lang="ts">
import type { PropType } from "vue";

type Author = {
  name: string;
  avatar: string;
};

defineProps({
  authors: {
    type: Array as PropType<Author[]>,
    required: true,
  },
});
</script>

<template>
  <div class="flex -space-x-2 relative z-0 mt-6">
    <div class="flex -space-x-1 overflow-hidden">
      <div
        v-for="author in authors"
        :key="author.name"
      >
        <img
          class="inline-block size-8 rounded-full"
          :src="author.avatar"
          :alt="author.name"
        >
      </div>
    </div>
  </div>
</template>
