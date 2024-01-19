<script setup lang="ts">
import type {PropType} from "vue";

const props = defineProps({
  isIcon: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String as PropType<"features" | "bugs" | "improvements" | "refactor">,
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
      return "i-heroicons-sparkles";
    case "bugs":
      return "i-lucide-bug";
    case "improvements":
      return "i-lucide-lightbulb";
    case "refactor":
      return "i-lucide-wrench";
  }
});

const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);
</script>

<template>
  <div class="flex flex-col gap-2 my-10">
    <div class="flex items-center gap-2">
      <i
        v-if="isIcon"
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
