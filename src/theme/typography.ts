export const typography = {
  fontSize: {
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '20px',
    xl: '22px',
    xxl: '24px',
    xxxl: '44px',
  },
  lineHeight: {
    xs: '16px',
    sm: '20px',
    md: '24px',
    lg: '28px',
    xl: '60px',
  },
  fontWeight: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  letterSpacing: {
    tight: '-0.25px',
    normal: '0px',
    wide: '0.01px',
    wider: '0.15px',
    widest: '0.25px',
  },
  textAlign: {
    left: 'left',
    center: 'center',
    right: 'right',
    justify: 'justify',
  },
} as const

export type Typography = typeof typography
