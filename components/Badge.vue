<template>
  <div
    class="inline-flex items-center gap-x-1.5 rounded-full px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-accent"
  >
    <div class="size-1.5 rounded-full bg-accent" />
    <span class="text-accent">{{ label }}</span>
  </div>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    required: true,
  },
});
</script>
