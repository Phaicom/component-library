<script setup lang="ts">
const levels = [10, 20, 40, 60, 80, 100]
const colors = [
  'primary',
]
</script>

<template>
  <div class="my-8">
    <div v-for="color in colors" :key="color">
      <div class="relative mb-3 mt-6">
        <span>
          {{ color }}
        </span>
      </div>
      <div class="flex gap-2 mb-2 overflow-y-auto">
        <SingleColor v-for="level in levels" :key="level" :color="`bg-${color}-${level}`" />
      </div>
    </div>
  </div>
</template>
