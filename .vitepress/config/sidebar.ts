import type { DefaultTheme } from '#/config'

export const sidebar: DefaultTheme.Config['sidebar'] = [
  {
    text: 'Introduction',
    link: '/',
  },
  {
    text: 'Utilities',
    children: [
      { text: 'Color', link: '/utilities/colors' },
    ],
  },
  {
    text: 'Components',
    children: [
      { text: 'Button', link: '/guide/button/button' },
      { text: 'Checkbox', link: '/guide/checkbox/checkbox' },
      { text: 'Input', link: '/guide/input/input' },
      { text: 'Link', link: '/guide/link/link' },
      { text: 'Modal', link: '/guide/modal/modal' },
      { text: 'ModalManager', link: '/guide/modal-manager/modal-manager' },
      { text: 'Progress', link: '/guide/progress/progress' },
      { text: 'Radio', link: '/guide/radio/radio' },
      { text: 'Sidebar', link: '/guide/sidebar/sidebar' },
      { text: 'SidebarManager', link: '/guide/sidebar-manager/sidebar-manager' },
      { text: 'Switch', link: '/guide/switch/switch' },
      { text: 'Textarea', link: '/guide/textarea/textarea' },
      { text: 'Tooltip', link: '/guide/tooltip/tooltip' },
    ],
  },
]
