<template>
  <Html lang="en">
    <Body class="bg-primary selection:bg-accent selection:text-primary">
      <NuxtLoadingIndicator />
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
      <Toasts
        :toast-options="{
          style: {
            background: 'var(--primary)',
            borderColor: 'var(--gray)',
            color: 'var(--font-primary)'
          },
        }"
      />
    </Body>
  </Html>
</template>

<script setup lang="ts">
useHead({
  title: "NuxtLog",
  meta: [
    {
      name: "description",
      content: "NuxtLog is a changelog, newsletter, etc... built with Nuxt",
    }
  ]
})
</script>
