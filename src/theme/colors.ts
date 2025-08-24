export const colors = {
  primary: {
    main: '#3B5AAE',
    dark: '#254699',
  },
  secondary: {
    main: '#254699',
  },
  error: {
    main: '#FF3B30',
  },
  grey: {
    50: '#EEF0F5',
    300: '#DBDCDF',
    400: '#76777A',
    500: '#AEAFB1',
    600: '#76777A',
  },
  common: {
    white: '#FFFFFF',
  },
  text: {
    primary: '#171717',
    secondary: '#76777A',
  },
} as const

export type Colors = typeof colors
