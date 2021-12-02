import { theme } from './theme'

const { colors } = theme
const camelize = (str: string) => str.replace(/[A-Z]/g, m => `-${m.toLowerCase()}`)

export const generateColorSafelist = () => {
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

export const generateSafeList = (obj: Object) => {
  const results: string[] = []
  Object.keys(obj).filter(key => !['colors'].includes(key)).forEach((key) => {
    const value = (obj as any)[key]
    results.push(...Object.keys(value))
  })
  return results
}
