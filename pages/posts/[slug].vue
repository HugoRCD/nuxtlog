<script setup lang="ts">
</script>

<template>
  <section
    class="post mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 pt-32 pb-16"
  >
    <div>
      <NuxtLink
        to="/list"
        class="text-primary text-lg flex items-center gap-2 cursor-pointer"
      >
        <span class="i-lucide-arrow-left text-primary text-2xl cursor-pointer" />
        <span class="ml-2">Go back</span>
      </Nuxtlink>
    </div>
    <ContentDoc />
  </section>
</template>

