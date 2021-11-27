<template>
  <div style="margin-bottom: 16px">
    <Button label="Default" />
  </div>
  <div style="margin-bottom: 16px">
    <Button label="Outlined" type="outlined" />
  </div>
  <div style="margin-bottom: 16px">
    <Button label="Text" type="text" />
  </div>
  <div>
    <Button label="Disabled" type="text" disabled />
  </div>

  <span class="text-red-500">hello</span>
</template>
<script>
import { Button } from '@'

export default {
  name: 'ButtonExample',
  components: {
    Button,
  },
}
</script>
