import { Box, TextField, Button } from '@mui/material'
import { ContentPaste, InsertDriveFileOutlined } from '@mui/icons-material'
import { TEXT_CONTENT } from 'constants/textContent'
import { ParaphraseState } from 'hooks/useParaphraser'
import { typography } from 'theme/typography'

interface TextFormProps {
  text: string
  state: ParaphraseState
  result: { result: string } | null
  isTextEmpty: boolean
  onTextChange: (value: string) => void
  onPasteText: () => void
  onSampleText: () => void
}

export const TextForm = ({
  text,
  state,
  result,
  isTextEmpty,
  onTextChange,
  onPasteText,
  onSampleText,
}: TextFormProps) => {
  return (
    <Box sx={{ position: 'relative' }}>
      <TextField
        multiline
        rows={13.5}
        fullWidth
        value={state === 'success' && result ? result.result : text}
        onChange={(e) => onTextChange(e.target.value)}
        placeholder={isTextEmpty ? TEXT_CONTENT.placeholder : ''}
        disabled={state === 'loading' || state === 'success'}
        variant="outlined"
        sx={(theme) => ({
          '& .MuiOutlinedInput-root': {
            border: 'none',
            borderRadius: `${theme.spacing(3.5)} ${theme.spacing(3.5)} 0 0`,
            backgroundColor: isTextEmpty ? theme.palette.grey[50] : theme.palette.common.white,
            '& fieldset': { border: 'none' },
            '&:hover fieldset': { border: 'none' },
            '&.Mui-focused fieldset': { border: 'none' },
            fontSize: typography.fontSize.md,
            lineHeight: typography.lineHeight.md,
            padding: '16px 16px 0 16px',
            '& .MuiInputBase-input::placeholder': {
              fontFamily: 'Inter',
              fontWeight: typography.fontWeight.semibold,
              fontSize: typography.fontSize.md,
              lineHeight: typography.lineHeight.md,
              letterSpacing: typography.letterSpacing.wider,
              color: theme.palette.text.secondary,
              opacity: 1,
            },
            '& .MuiInputBase-input': {
              '&::-webkit-scrollbar': {
                display: 'none',
              },
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            },
          },
          '& .MuiInputBase-input': {
            color:
              state === 'success'
                ? theme.palette.text.primary
                : state === 'loading'
                  ? theme.palette.grey[600]
                  : isTextEmpty
                    ? theme.palette.grey[600]
                    : theme.palette.text.primary,
            fontWeight:
              state === 'loading'
                ? typography.fontWeight.regular
                : isTextEmpty
                  ? typography.fontWeight.semibold
                  : typography.fontWeight.regular,
            fontFamily: 'Inter',
            fontSize: typography.fontSize.md,
            lineHeight: typography.lineHeight.md,
            letterSpacing: typography.letterSpacing.widest,
            '&.Mui-disabled': {
              color:
                state === 'success' ? theme.palette.text.primary : theme.palette.text.secondary,
              WebkitTextFillColor:
                state === 'success' ? theme.palette.text.primary : theme.palette.text.secondary,
              opacity: 1,
            },
          },
        })}
      />

      {isTextEmpty && state !== 'success' && (
        <Box
          sx={() => ({
            marginTop: '24px',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            display: 'flex',
            justifyContent: 'center',
            gap: '8px',
          })}
        >
          <Button
            variant="outlined"
            onClick={onPasteText}
            disabled={state === 'loading'}
            sx={(theme) => ({
              width: {
                xs: '130px',
                sm: '196px',
              },
              height: '80px',
              gap: '8px',
              opacity: 1,
              paddingTop: '16px',
              paddingRight: '8px',
              paddingBottom: '16px',
              paddingLeft: '8px',
              borderWidth: '1px',
              borderRadius: '11px',
              backgroundColor: theme.palette.common.white,
              border: `1px solid ${theme.palette.grey[300]}`,
              color: theme.palette.text.secondary,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              fontFamily: 'Inter',
              fontWeight: typography.fontWeight.medium,
              fontSize: typography.fontSize.sm,
              lineHeight: typography.lineHeight.sm,
              letterSpacing: typography.letterSpacing.wide,
              textAlign: typography.textAlign.center,
              '&:hover': {
                backgroundColor: theme.palette.grey[50],
              },
            })}
          >
            <ContentPaste sx={{ fontSize: typography.fontSize.lg }} />
            {TEXT_CONTENT.buttons.pasteText}
          </Button>
          <Button
            variant="outlined"
            onClick={onSampleText}
            disabled={state === 'loading'}
            sx={(theme) => ({
              width: {
                xs: '130px',
                sm: '196px',
              },
              height: '80px',
              gap: '8px',
              opacity: 1,
              paddingTop: '16px',
              paddingRight: '8px',
              paddingBottom: '16px',
              paddingLeft: '8px',
              borderWidth: '1px',
              borderRadius: '11px',
              backgroundColor: theme.palette.common.white,
              border: `1px solid ${theme.palette.grey[300]}`,
              color: theme.palette.text.secondary,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              fontFamily: 'Inter',
              fontWeight: typography.fontWeight.medium,
              fontSize: typography.fontSize.sm,
              lineHeight: typography.lineHeight.sm,
              letterSpacing: typography.letterSpacing.wide,
              textAlign: typography.textAlign.center,
              '&:hover': {
                backgroundColor: theme.palette.grey[50],
              },
            })}
          >
            <InsertDriveFileOutlined sx={{ fontSize: typography.fontSize.lg }} />
            {TEXT_CONTENT.buttons.sampleText}
          </Button>
        </Box>
      )}
    </Box>
  )
}
