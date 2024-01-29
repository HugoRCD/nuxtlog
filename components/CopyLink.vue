<script setup lang="ts">
const runtimeConfig = useRuntimeConfig();
const siteUrl = runtimeConfig.public.siteUrl;

defineProps({
  path: {
    type: String,
    required: true
  }
});

const copy = ref(false);

async function copyToClipboard(string: string) {
  copy.value = true;
  const input = document.createElement("input");
  input.setAttribute("value", string);
  document.body.appendChild(input);
  input.select();
  document.execCommand("copy");
  document.body.removeChild(input);
  await new Promise((resolve) => setTimeout(resolve, 500));
  copy.value = false;
  toast.success("Copied to clipboard!");
}
</script>

<template>
  <span
    v-if="!copy"
    class="i-lucide-link text-primary text-lg hover:text-accent cursor-pointer"
    @click="copyToClipboard(siteUrl + path)"
  />
  <span
    v-else
    class="i-lucide-check text-accent text-lg"
  />
</template>

<style scoped>

</style>
