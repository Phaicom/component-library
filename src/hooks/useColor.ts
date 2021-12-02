import { hexToRgba, rgbaToString } from '@@/utils/color'
import { colors } from '../../windicss/theme/colors'

export const useColor = () => {
  const DEFAULT_RIPPLE_COLOR = 'rgba(255, 255, 255, 0.35)'
  const DISABLED_RIPPLE_COLOR = 'rgba(0,0,0,0)'

  const getRGBAFromPalette = (name: string): string => {
    const values = (colors as any)[name][100]
    const rgba = hexToRgba(values, 0.35)
    return rgbaToString(rgba) || DEFAULT_RIPPLE_COLOR
  }

  return {
    DISABLED_RIPPLE_COLOR,
    DEFAULT_RIPPLE_COLOR,
    getRGBAFromPalette,
  }
}
