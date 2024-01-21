<script setup lang="ts">
import ListItem from "~/components/ListItem.vue";

const { data } = await useAsyncData("feed", () =>
    queryContent("/posts").sort({ date: -1 }).find()
);
</script>

<template>
  <div>
    <Hero />
    <section
      class="relative mx-auto max-w-sm sm:max-w-4xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-8 mt-8"
    >
      <ListItem
        v-for="(post, index) in data"
        :key="post.slug"
        :content="post"
        data-animate
        :style="{ '--stagger': index }"
      >
        {{ post }}
      </ListItem>
    </section>
  </div>
</template>

<style scoped lang="scss"></style>
