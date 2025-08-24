import Link from 'next/link'
import { Box, Typography, Button, Container } from '@mui/material'
import { Home } from '@mui/icons-material'
import { TEXT_CONTENT } from 'constants/textContent'
import { typography } from 'theme/typography'

export default function NotFound() {
  return (
    <Container maxWidth="md">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          textAlign: typography.textAlign.center,
          gap: 2,
        }}
      >
        <Typography
          variant="h1"
          component="h1"
          sx={{
            fontSize: typography.fontSize.xxxl,
            fontWeight: typography.fontWeight.bold,
            color: 'text.primary',
          }}
        >
          404
        </Typography>

        <Typography
          variant="h4"
          component="h2"
          sx={{ fontWeight: typography.fontWeight.semibold, color: 'text.primary' }}
        >
          {TEXT_CONTENT.notFound.title}
        </Typography>

        <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 500 }}>
          {TEXT_CONTENT.notFound.description}
        </Typography>

        <Button
          aria-label={TEXT_CONTENT.notFound.buttonAriaLabel}
          tabIndex={0}
          component={Link}
          href="/"
          variant="contained"
          size="large"
          role="link"
          startIcon={<Home />}
          sx={{
            px: '16px',
            py: '14px',
            borderRadius: '51px',
            textTransform: 'none',
            fontSize: typography.fontSize.sm,
            fontWeight: typography.fontWeight.semibold,
            lineHeight: typography.lineHeight.sm,
            letterSpacing: typography.letterSpacing.wide,
            textAlign: typography.textAlign.center,
            backgroundColor: '#254699',
            color: '#FFFFFF',
            '&:hover': {
              backgroundColor: '#254699',
            },
          }}
        >
          {TEXT_CONTENT.notFound.buttonText}
        </Button>
      </Box>
    </Container>
  )
}
