<script setup lang="ts">
const { data } = await useAsyncData("feed", () =>
    queryContent("/posts").sort({ date: -1 }).find()
);
</script>

<template>
  <div class="sm:h-screen flex relative flex-col sm:flex-row sm:overflow-hidden">
    <Hero class="w-full sm:w-1/2" />
    <section
      class="w-full mx-auto px-4 sm:px-6 lg:px-8 overflow-y-auto sm:w-1/2"
    >
      <Post
        v-for="(post, index) in data"
        :key="post.slug"
        :content="post"
        data-animate
        :style="{ '--stagger': index }"
      >
        {{ post }}
      </Post>
    </section>
  </div>
</template>

<style scoped lang="scss"></style>
