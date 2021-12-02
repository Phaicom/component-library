<script setup lang='ts'>
import { Button } from '../../src'
import ExampleIcon from '~icons/carbon/favorite'
</script>
<template>
  <div class="mb-4">
    <Button class="mr-4">
      Default
    </Button>
    <Button selected>
      Selected Default
    </Button>
  </div>
  <div class="mb-4">
    <Button outlined class="mr-4">
      Outlined
    </Button>
    <Button outlined selected>
      Selected Outlined
    </Button>
  </div>
  <div class="mb-4">
    <Button contained class="mr-4">
      Contained
    </Button>
    <Button contained selected>
      Selected Contained
    </Button>
  </div>
  <div class="mb-4">
    <Button disabled>
      Disabled
    </Button>
  </div>
  <div class="mb-4">
    <Button outlined :icon="ExampleIcon" class="mr-4">
      With Icon
    </Button>
    <Button outlined :icon="ExampleIcon" icon-color="red">
      With Red Icon
    </Button>
  </div>
</template>
