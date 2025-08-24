'use client'

import { createTheme } from '@mui/material/styles'
import { colors } from './colors'
import { typography } from './typography'

const theme = createTheme({
  cssVariables: true,
  palette: {
    mode: 'light',
    primary: { main: colors.primary.main, dark: colors.primary.dark },
    secondary: { main: colors.secondary.main },
    error: { main: colors.error.main },
    grey: {
      50: colors.grey[50],
      300: colors.grey[300],
      400: colors.grey[400],
      500: colors.grey[500],
      600: colors.grey[600],
    },
    common: {
      white: colors.common.white,
    },
    text: {
      primary: colors.text.primary,
      secondary: colors.text.secondary,
    },
  },
  typography: {
    fontFamily: 'var(--font-inter)',
    h4: {
      fontFamily: 'Inter',
      fontWeight: typography.fontWeight.bold,
      fontSize: typography.fontSize.xxxl,
      lineHeight: typography.lineHeight.xl,
      letterSpacing: typography.letterSpacing.tight,
      textAlign: typography.textAlign.center,
    },
    body1: {
      fontFamily: 'Inter',
      fontWeight: typography.fontWeight.medium,
      fontSize: typography.fontSize.xl,
      lineHeight: typography.lineHeight.lg,
      letterSpacing: typography.letterSpacing.normal,
      textAlign: typography.textAlign.center,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: typography.fontWeight.semibold,
          fontSize: typography.fontSize.sm,
          lineHeight: typography.lineHeight.sm,
          letterSpacing: typography.letterSpacing.wide,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiInputBase-input': {
            fontFamily: 'var(--font-inter)',
          },
        },
      },
    },
  },
})

export default theme
