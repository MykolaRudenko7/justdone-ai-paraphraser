import { Box, Button } from '@mui/material'
import { Clear } from '@mui/icons-material'
import { TEXT_CONTENT } from 'constants/textContent'
import { ParaphraseState } from 'hooks/useParaphraser'
import { typography } from 'theme/typography'

interface ActionButtonsProps {
  state: ParaphraseState
  isTextEmpty: boolean
  canParaphrase: boolean
  onClearInput: () => void
  onParaphrase: () => void
}

export const ActionButtons = ({
  state,
  isTextEmpty,
  canParaphrase,
  onClearInput,
  onParaphrase,
}: ActionButtonsProps) => {
  const showClearButton = state === 'success' || (!isTextEmpty && state !== 'loading')

  return (
    <Box
      sx={(theme) => ({
        borderTop: `1px solid ${theme.palette.grey[300]}`,
        backgroundColor: theme.palette.common.white,
        p: theme.spacing(1),
        display: 'flex',
        justifyContent: 'flex-end',
        gap: theme.spacing(1.5),
        borderRadius: `0 0 ${theme.spacing(3.5)} ${theme.spacing(3.5)}`,
      })}
    >
      {showClearButton && (
        <Button
          variant="outlined"
          startIcon={
            <Clear
              sx={{
                fontSize: typography.fontSize.xxl,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            />
          }
          onClick={onClearInput}
          sx={(theme) => ({
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '140px',
            height: '48px',
            gap: '8px',
            opacity: 1,
            borderRadius: '51px',
            backgroundColor: theme.palette.grey[50],
            borderColor: 'transparent',
            color: theme.palette.primary.dark,
            fontWeight: typography.fontWeight.semibold,
            fontSize: typography.fontSize.sm,
            lineHeight: typography.lineHeight.sm,
            letterSpacing: typography.letterSpacing.wide,
            textAlign: typography.textAlign.center,
            '& .MuiButton-startIcon': {
              marginRight: 0,
              marginLeft: 0,
            },
            '&:hover': {
              backgroundColor: theme.palette.grey[50],
              borderColor: 'transparent',
            },
          })}
        >
          {TEXT_CONTENT.buttons.clearInput}
        </Button>
      )}

      {state !== 'success' && (
        <Button
          variant="contained"
          onClick={onParaphrase}
          disabled={!canParaphrase}
          sx={(theme) => ({
            padding: '14px 16px 14px 16px',
            height: '48px',
            gap: '8px',
            opacity: 1,
            borderRadius: '51px',
            fontWeight: typography.fontWeight.semibold,
            fontSize: typography.fontSize.sm,
            lineHeight: typography.lineHeight.sm,
            letterSpacing: typography.letterSpacing.wide,
            textAlign: typography.textAlign.center,
            backgroundColor: !canParaphrase ? theme.palette.grey[500] : theme.palette.primary.main,
            color: theme.palette.common.white,
            '&:hover': {
              backgroundColor: !canParaphrase
                ? theme.palette.grey[500]
                : theme.palette.primary.dark,
            },
            '&:disabled': {
              backgroundColor: theme.palette.grey[500],
              color: theme.palette.common.white,
            },
          })}
        >
          {state === 'loading'
            ? TEXT_CONTENT.buttons.paraphrasing
            : TEXT_CONTENT.buttons.paraphrase}
        </Button>
      )}
    </Box>
  )
}
