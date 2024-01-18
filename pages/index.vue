<script setup lang="ts">
const { data } = await useAsyncData("feed", () =>
    queryContent("/posts").sort({ date: -1 }).find()
);
</script>

<template>
  <div>
    <Hero />
    <ThemeSelector />
    <section
      class="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8"
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
