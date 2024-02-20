<script setup lang="ts">
const open = ref(false);

const { data } = await useAsyncData("feed", () =>
    queryContent("/posts").sort({ date: -1 }).find()
);
</script>

<template>
  <Sidebar v-model="open">
    <template #trigger>
      <span
        class="fixed top-1/2 sm:top-4 left-4 z-50 px-2 py-1 rounded-md bg-accent text-sm cursor-pointer"
        @click="open = !open"
      >
        Open Widget
      </span>
    </template>
    <div class="flex flex-col gap-4 max-w-xs sm:max-w-md bg-primary p-4">
      <h2 class="text-2xl font-bold text-accent">
        Latest Posts
      </h2>
      <div class="overflow-y-scroll">
        <Post
          v-for="(post, index) in data"
          :key="post.slug"
          :content="post"
          data-animate
          :style="{ '--stagger': index }"
        >
          {{ post }}
        </Post>
      </div>
    </div>
  </Sidebar>
</template>
