import { RGB, RGBA } from '@@/types/css'

export const hexToRgb = (hex: string): RGB | null => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16),
    }
    : null
}

export const hexToRgba = (hex: string, alpha: number): RGBA => {
  const rgb = hexToRgb(hex)
  return rgb ? { ...rgb, a: alpha } : {} as RGBA
}

export const rgbaToString = (rgba: RGBA): string | null => {
  return `rgba(${rgba.r},${rgba.g},${rgba.b},${rgba.a})`
}
