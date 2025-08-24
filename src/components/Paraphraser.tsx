'use client'

import { Box, Typography } from '@mui/material'
import { TEXT_CONTENT } from 'constants/textContent'

export default function Paraphraser() {
  return (
    <Box maxWidth="1128px" mx="auto" p={1} paddingTop="32px" paddingBottom="32px">
      <Typography variant="h4" component="h1" mb={2}>
        {TEXT_CONTENT.title}
      </Typography>

      <Typography variant="body1" mb={5}>
        {TEXT_CONTENT.subtitle}
      </Typography>
    </Box>
  )
}
