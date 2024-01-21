<script setup lang="ts">
const themes = ['dark', 'linear', 'nexus', 'baselime', 'furn', 'bone', 'matcha', 'bnw', 'bnw-light'];

const open = ref(false);

const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);
</script>

<template>
  <div class="flex justify-center flex-wrap gap-2 fixed bottom-0 right-0 mb-2 mr-2 z-50 sm:flex-row flex-col-reverse">
    <button
      class="cursor-pointer px-3 py-1.5 rounded-md text-sm font-semibold text-inverted bg-accent ring-1 ring-inset ring-accent focus:ring-2 focus:ring-accent sm:text-sm sm:leading-6"
      @click="open = !open"
    >
      {{ open ? 'Close' : 'Open' }} Theme
    </button>
    <Transition name="slide">
      <div
        v-show="open"
        class="flex justify-center gap-2 sm:flex-row flex-col"
      >
        <div
          v-for="theme in themes"
          :key="theme"
          :class="`${theme} cursor-pointer px-3 py-1.5 rounded-md text-sm font-semibold text-inverted bg-accent ring-1 ring-inset ring-accent focus:ring-2 focus:ring-accent sm:text-sm sm:leading-6`"
          @click="$colorMode.preference = theme"
        >
          {{ capitalize(theme) }}
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.slide-enter-active {
  transition: all 0.3s ease;
}

.slide-leave-active {
  transition: all 0.3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}

.slide-enter-to,
.slide-leave-from {
  transform: translateX(0);
}
</style>

