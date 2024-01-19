<script setup lang="ts">
const nav = [
  /*{
    name: "Home",
    path: "/",
    icon: "i-lucide-home",
  },*/
  {
    name: "One Column",
    path: "/",
    icon: "i-lucide-square",
  },
  {
    name: "Two Column",
    path: "/two-column",
    icon: "i-lucide-columns",
  }
]
</script>

<template>
  <nav class="flex justify-center backdrop-filter backdrop-blur-lg bg-opacity-30 py-4 px-4 gap-4">
    <NuxtLink
      v-for="item in nav"
      :key="item.name"
      :to="item.path"
      class="text-base font-semibold text-primary hover:text-accent flex items-center gap-2 bg-primary rounded-md px-3 py-1.5 ring-1 ring-inset ring-accent focus:ring-2 focus:ring-accent sm:text-sm sm:leading-6"
      :class="{'bg-accent text-inverted': $route.path === item.path}"
    >
      <i
        :class="item.icon"
        class="text-xl text-accent"
      />
      {{ item.name }}
    </NuxtLink>
  </nav>
</template>

<style scoped lang="scss">

</style>
