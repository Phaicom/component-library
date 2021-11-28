import { colors } from './colors'

const camelize = (str: string) => str.replace(/[A-Z]/g, m => `-${m.toLowerCase()}`)

export const getColorSafelist = () => {
  const types = [
    'bg',
    'text',
    'border',
  ]

  const arr: string[] = []
  Object.keys(colors).forEach((color) => {
    Object.keys((colors as { [key: string]: any })[color]).forEach((level) => {
      if (level !== 'DEFAULT') {
        types.forEach((type) => {
          arr.push(`${type}-${camelize(color)}-${level}`)
        })
      }
    })
  })

  return arr
}
