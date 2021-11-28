<script setup lang="ts">
const levels1 = [10, 20, 40, 60, 80, 100]
const levels2 = [100]
const colors1 = [
  'primary',
  'primary-variant',
  'secondary',
  'secondary-variant',
]
const colors2 = [
  'background',
  'surface',
  'error',
  'alert',
  'success',
  'infomation',
]
</script>

<template>
  <div class="my-8">
    <div v-for="color in colors1" :key="color">
      <div class="relative mb-3 mt-6">
        <span>
          {{ color }}
        </span>
      </div>
      <div class="flex gap-2 mb-2 overflow-y-auto">
        <SingleColor v-for="level in levels1" :key="level" :color="`bg-${color}-${level}`" />
      </div>
    </div>
    <div class="flex flex-row flex-wrap gap-2">
      <div v-for="color in colors2" :key="color" class="min-w-24">
        <div class="relative mb-3 mt-6">
          <span>
            {{ color }}
          </span>
        </div>
        <div class="flex gap-2 mb-2 overflow-y-auto">
          <SingleColor v-for="level in levels2" :key="level" :color="`bg-${color}-${level}`" />
        </div>
      </div>
    </div>
  </div>
</template>
