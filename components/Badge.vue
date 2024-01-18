<template>
  <NuxtLink
    :to="`#${label}`"
    class="group inline-flex items-center gap-x-1.5 rounded-full px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-accent hover:bg-accent hover:text-white"
  >
    <div class="size-1.5 rounded-full bg-accent group-hover:bg-white" />
    <span class="text-accent group-hover:text-white">{{ label }}</span>
  </NuxtLink>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    required: true,
  },
});
</script>
