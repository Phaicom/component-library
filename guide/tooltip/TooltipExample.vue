<template>
  <Tooltip content="Hi 👋 I am a tooltip">
    <span>Hover me please</span>
  </Tooltip>
</template>
<script>
import { Tooltip } from '@@'

export default {
  name: 'TooltipExample',
  components: {
    Tooltip,
  },
}
</script>
