<script setup lang="ts">
const { path } = useRoute();
const { data } = await useAsyncData("feed", () =>
    queryContent("/posts").where({
      _path: {
        $eq: path,
      },
    }).findOne(),
);
console.log(data)
</script>

<template>
  <section
      class="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8"
  >
    <h1 class="text-xl font-main sm:text-3xl font-bold text-primary">
      {{ data.title }}
    </h1>
    <ContentDoc />
  </section>
</template>

<style scoped lang="scss">

</style>
