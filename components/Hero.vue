<template>
  <div class="relative overflow-hidden bg-gradient-to-b from-gray flex flex-col justify-center items-center">
    <div class="absolute bg-accent size-[1000px] rounded-full blur-[200px] opacity-50 bottom-0 left-1/2 transform translate-x-[-50%] translate-y-[95%]" />
    <div class="mx-auto max-w-2xl text-center flex flex-col justify-center h-96 px-4 sm:px-6 lg:px-8 z-10">
      <h1
        class="text-primary
        font-main max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl lg:col-span-2 xl:col-auto"
      >
        What's <span class="bg-gradient-to-tl from-primary to-accent to-80% bg-clip-text text-transparent">New</span>
      </h1>
      <p class="text-muted text-lg leading-6 mt-4 text-balance">
        Discover the latest news and updates from the Nuxt community. Stay up to date with NuxtJS releases and upcoming events.
      </p>
      <div class="mt-6 flex justify-center">
        <input
          type="text"
          placeholder="Your email"
          class="w-full px-4 py-1 rounded-md shadow-sm sm:max-w-xs bg-primary text-primary outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary border-2 border-gray"
        >
        <button
          type="button"
          class="inline-flex items-center justify-center px-6 py-1 ml-4 text-base font-medium text-inverted bg-accent border border-transparent rounded-md shadow-sm hover:bg-accent-hover"
        >
          Subscribe
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>
