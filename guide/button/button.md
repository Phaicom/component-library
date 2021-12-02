# Button

The button component is a simple customizable button.

| Prop       | Description               | Accepted Values                 | Default     |
| :--------- | :------------------------ | :------------------------------ | :---------- |
| `color`    | The button's color         | `Color`                               | `primary` |
| `size`    | The button's size       | `small`, `medium` or `large`                               | `medium` |
| `outlined`     | The button's outlined    | `true` or `false`  | `false`   |
| `contained` | The button's contained  | `true` or `false`               | `false`     |
| `disabled` | The button's disabled  | `true` or `false`               | `false`     |
| `selected` | The button's contained  | `true`, `false` or `null`               | `null`     |
| `icon` | The button's icon  | `Object` or `null`               | `null`     |
| `iconColor` | The button's icon color  | `Color`               | `null`     |

| Event   | Description               | Parameters    |
| :------ | :------------------------ | :------------ |
| `click` | Triggered on button click | `$clickEvent` |

```vue
  <div class="mb-4">
    <Button class="mr-4">
      Default
    </Button>
    <Button selected>
      Selected Default
    </Button>
    <Button contained class="mr-4">
      Contained
    </Button>
    <Button disabled>
      Disabled
    </Button>
    <Button outlined :icon="ExampleIcon" icon-color="red">
      With Red Icon
    </Button>
  </div>
```

<ButtonExample />

<script setup>
import ButtonExample from './ButtonExample.vue'
</script>
