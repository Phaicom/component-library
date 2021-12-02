<script setup lang="ts">
import { computed, toRefs } from 'vue'
import { Color, Size } from '@@/types'

const props = defineProps({
  color: {
    type: String as () => Color,
    default: 'primary',
  },
  size: {
    type: String as () => Size,
    default: 'medium',
  },
  outlined: {
    type: Boolean,
    default: false,
  },
  contained: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  selected: {
    type: Boolean || null,
    default: null,
  },
  icon: {
    type: Object || null,
    default: null,
  },
})

defineEmits<{
  (event: 'click', $event: any): void
}>()

const rippleColor = computed(() => {
  return props.contained ? 'white' : props.color
})

const sizeClass = computed(() => {
  const size = props.size as unknown as Size
  const classes: string[] = ['font-500']
  switch (size) {
    case Size.SMALL:
      classes.push('p-2', 'text-size-14px')
      break
    case Size.MEDIUM:
      classes.push('btn-md')
      break
    case Size.LARGE:
      classes.push('px-4', 'py-3', 'text-size-16px')
      break
  }
  return classes
})

const typeClass = computed(() => {
  const { color, contained, outlined, disabled, selected } = toRefs(props)
  const classes: string[] = []
  classes.pop()

  if (disabled.value)
    return ['btn-disabled']

  if (contained.value) {
    classes.push(`bg-${color.value}-100`, 'text-white')
  } else {
    classes.push(selected.value ? 'bg-state-selected' : 'bg-white', `text-${color.value}-100`)
    classes.push(
      'hover:bg-state-hover',
      selected.value === null ? 'focus:bg-state-selected' : '',
    )
  }

  if (outlined.value) {
    classes.push(
      selected.value === null ? 'focus:zr-border-3' : '',
      selected.value ? 'zr-border-3' : 'zr-border-1',
    )
  }

  return classes
})
</script>

<template>
  <Button
    v-ripple="!disabled ? { class: `${rippleColor}--text` } : null"
    class="btn"
    :class="[...sizeClass, ...typeClass]"
    @click="$emit('click', $event)"
  >
    <component :is="icon" v-if="icon" />
    <span :class="{ 'mx-2': icon }">
      <slot />
    </span>
  </Button>
</template>
