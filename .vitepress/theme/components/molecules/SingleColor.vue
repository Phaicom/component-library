<script setup lang="ts">
import { computed } from 'vue'
import { theme } from '@@/windicss/theme'

const props = withDefaults(defineProps<{
  color: string
}>(), {
  color: '',
})

const camelize = (str: string) => str.replace(/[A-Z]/g, m => `-${m.toLowerCase()}`)

const level = computed(() => props.color.split(/-/).slice(-1)[0])
const color = computed(() => props.color.split(/-/).slice(1, -1).join('-'))
// @ts-ignore
const hex = computed<string>(() => theme.colors[camelize(color.value)]?.[+level.value])
</script>

<template>
  <div>
    <div class="w-14 h-14 rounded" :class="props.color" />
    <div class="font-bold text-sm">
      {{ level }}
    </div>
    <div class="opacity-50 font-mono text-xs -mt-1">
      {{ hex }}
    </div>
  </div>
</template>
