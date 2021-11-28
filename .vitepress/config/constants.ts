const isProd = process.env.NODE_ENV === 'production'

const site = isProd ? 'https://comp.zrch.dev' : 'http://localhost:3000'

export const metaData = {
  title: 'Zrch CSS',
  description: 'A lightweight Vue 3 component library.',
  site,
}
