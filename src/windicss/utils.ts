import { colors } from './colors'

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
          arr.push(`${type}-${color}-${level}`)
        })
      }
    })
  })

  return arr
}
