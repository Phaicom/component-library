# Responsive

## Screen Variants

### Mobile First

| Variant | Rule | Description |
| :------ | :--- | :---------- |
| sm | @media (min-width: 640px) { ... } | Enable utility when the screen width is greater than 640px |
| md | @media (min-width: 768px) { ... } | Enable utility when the screen width is greater than 768px |
| lg | @media (min-width: 1024px) { ... } | Enable utility when the screen width is greater than 1024px |
| xl | @media (min-width: 1280px) { ... } | Enable utility when the screen width is greater than 1280px |
| 2xl | @media (min-width: 1920px) { ... } | Enable utility when the screen width is greater than 1920px |

### Desktop First

| Variant | Rule | Description |
| :------ | :--- | :---------- |
| <sm | @media (max-width: 640px) { ... } | Enable utility when the screen width is less than 640px |
| <md | @media (max-width: 768px) { ... } | Enable utility when the screen width is less than 768px |
| <lg | @media (max-width: 1024px) { ... } | Enable utility when the screen width is less than 1024px |
| <xl | @media (max-width: 1280px) { ... } | Enable utility when the screen width is less than 1280px |
| <2xl  | @media (max-width: 1920px) { ... } | Enable utility when the screen width is less than 1920px |

### Only Screen

| Variant | Rule | Description |
| :------ | :--- | :---------- |
| @sm | @media (min-width: 640px) and (max-width: 768px) { ... } | Enable utility when the screen width is greater than 640px and less than 768px |
| @md | @media (min-width: 768px) and (max-width: 1024px) { ... } | Enable utility when the screen width is greater than 768px and less than 1024px |
| @lg | @media (min-width: 1024px) and (max-width: 1280px) { ... } | Enable utility when the screen width is greater than 1024px and less than 1280px |
| @xl | @media (min-width: 1280px) and (max-width: 1920px) { ... } | Enable utility when the screen width is greater than 1280px and less than 1920px |
| @2xl | @media (min-width: 1920px) { ... } | Enable utility when the screen width is greater than 1920px |


## Usage
```
sm:bg-red-500 sm:hover:bg-green-300 dark:bg-white
```