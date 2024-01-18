<script setup lang="ts">
import type {PropType} from "vue";

const props = defineProps({
  icon: {
    type: String,
    default: "i-heroicons-sparkles",
  },
  type: {
    type: String as PropType<"features" | "bugs" | "improvements">,
    default: "feature",
  },
  items: {
    type: Array as PropType<string[]>,
    default: () => [],
  },
});

const iconClass = computed(() => {
  switch (props.type) {
    case "features":
      return `${props.icon || "i-heroicons-sparkles"}`;
    case "bugs":
      return `${props.icon || "i-lucide-bug"}`;
    case "improvements":
      return `${props.icon || "i-lucide-tools"}`;
  }
});

const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);
</script>

<template>
  <div class="flex flex-col gap-2 my-10">
    <div class="flex items-center gap-2">
      <i
        :class="iconClass"
        class="text-xl text-accent"
      />
      <span class="text-xl font-bold text-primary">{{ capitalize(props.type) }}</span>
    </div>
    <ul>
      <li
        v-for="item in items"
        :key="item"
        class="text-base"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">

</style>
