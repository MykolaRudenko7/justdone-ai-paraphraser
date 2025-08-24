import { Box, Typography, CircularProgress } from '@mui/material'
import { ParaphraseState } from 'hooks/useParaphraser'
import { TEXT_CONTENT } from 'constants/textContent'
import { typography } from 'theme/typography'

interface StatusDisplayProps {
  state: ParaphraseState
}

export const StatusDisplay = ({ state }: StatusDisplayProps) => {
  if (state === 'loading') {
    return (
      <Box
        sx={{
          marginLeft: '16px',
          mt: '12px',
          textAlign: typography.textAlign.left,
        }}
      >
        <CircularProgress
          size={24}
          sx={{
            color: '#76777A',
          }}
        />
      </Box>
    )
  }

  if (state === 'error') {
    return (
      <Box
        sx={{
          marginLeft: '16px',
          mt: '12px',
          textAlign: typography.textAlign.left,
        }}
      >
        <Typography
          variant="body2"
          sx={(theme) => ({
            color: theme.palette.error.main,
            fontSize: typography.fontSize.xs,
            lineHeight: typography.lineHeight.xs,
            textAlign: typography.textAlign.left,
          })}
        >
          {TEXT_CONTENT.errors.userFriendlyError}
        </Typography>
      </Box>
    )
  }

  return null
}
