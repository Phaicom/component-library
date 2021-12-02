export enum Color {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  ERROR = 'error',
  ALERT = 'alert',
  SUCCESS = 'success',
  INFOMATION = 'infomation',
}

export enum Size {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}

export interface RGB {
  r: number
  g: number
  b: number
}

export interface RGBA extends RGB {
  a: number
}
