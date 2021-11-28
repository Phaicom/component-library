<script setup lang="ts">
import { onMounted } from 'vue'
import ThePage from './ThePage.vue'

onMounted(async() => {
  // @ts-expect-error
  await import('@/web-components/PreviewBox.ts')
})

</script>

<template>
  <div class="relative antialiased">
    <keep-alive>
      <component :is="ThePage" />
    </keep-alive>
  </div>
</template>
