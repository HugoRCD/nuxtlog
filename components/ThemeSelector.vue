<script setup lang="ts">
const themes = ['light', 'dark', 'linear', 'nexus', 'baselime', 'furn', 'bone', 'matcha', 'bnw', 'bnw-light']
</script>

<template>
  <div class="flex justify-center flex-wrap gap-2 absolute top-0 right-0 mt-2 mr-2">
    <div
      v-for="theme in themes"
      :key="theme"
      :class="`${theme} cursor-pointer px-3 py-1.5 rounded-md text-sm font-semibold text-inverted bg-accent ring-1 ring-inset ring-accent focus:ring-2 focus:ring-accent sm:text-sm sm:leading-6`"
      @click="$colorMode.preference = theme"
    >
      {{ theme }}
    </div>
  </div>
</template>
