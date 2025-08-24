'use client'

import { Box, Typography } from '@mui/material'
import { useParaphraser } from 'hooks/useParaphraser'
import { TextForm } from 'components/TextForm'
import { ActionButtons } from 'components/ActionButtons'
import { StatusDisplay } from 'components/StatusDisplay'
import { TEXT_CONTENT } from 'constants/textContent'

export default function Paraphraser() {
  const {
    text,
    state,
    result,
    isTextEmpty,
    canParaphrase,
    setText,
    handlePasteText,
    handleSampleText,
    handleClearInput,
    handleParaphrase,
  } = useParaphraser()

  return (
    <Box maxWidth="1128px" mx="auto" p={1} paddingTop="32px" paddingBottom="32px">
      <Typography variant="h4" component="h1" mb={2}>
        {TEXT_CONTENT.title}
      </Typography>

      <Typography variant="body1" mb={5}>
        {TEXT_CONTENT.subtitle}
      </Typography>

      <Box sx={{ mx: 'auto' }}>
        <Box
          sx={(theme) => ({
            border: `1px solid ${theme.palette.grey[300]}`,
            borderRadius: theme.spacing(3.5),
            backgroundColor: theme.palette.common.white,
            overflow: 'hidden',
          })}
        >
          <TextForm
            text={text}
            state={state}
            result={result}
            isTextEmpty={isTextEmpty}
            onTextChange={setText}
            onPasteText={handlePasteText}
            onSampleText={handleSampleText}
          />

          <ActionButtons
            state={state}
            isTextEmpty={isTextEmpty}
            canParaphrase={canParaphrase}
            onClearInput={handleClearInput}
            onParaphrase={handleParaphrase}
          />
        </Box>
      </Box>

      <StatusDisplay state={state} />
    </Box>
  )
}
