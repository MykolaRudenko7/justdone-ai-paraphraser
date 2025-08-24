import { useState } from 'react'
import { TEXT_CONTENT } from 'constants/textContent'

export type ParaphraseState = 'initial' | 'loading' | 'success' | 'error'

export interface ParaphraseResponse {
  result: string
  provider: string
  duration: number
}

export interface ParaphraseError {
  error: string
  details?: string
}

export const useParaphraser = () => {
  const [text, setText] = useState('')
  const [state, setState] = useState<ParaphraseState>('initial')
  const [result, setResult] = useState<ParaphraseResponse | null>(null)
  const [error, setError] = useState<ParaphraseError | null>(null)

  const handlePasteText = async () => {
    try {
      const clipboardText = await navigator.clipboard.readText()
      setText(clipboardText)
    } catch (clipboardError) {
      console.error('Failed to read clipboard:', clipboardError)
    }
  }

  const handleSampleText = () => {
    setText(TEXT_CONTENT.sampleText)
  }

  const handleClearInput = () => {
    setText('')
    setState('initial')
    setResult(null)
    setError(null)
  }

  const handleParaphrase = async () => {
    if (!text.trim()) return

    setState('loading')
    setError(null)
    setResult(null)

    try {
      const response = await fetch('/api/paraphrase', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: text.trim() }),
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        throw new Error(
          errorData.details || errorData.error || `HTTP error! status: ${response.status}`,
        )
      }

      const paraphraseResponseData = await response.json()
      setResult(paraphraseResponseData)
      setState('success')
    } catch (paraphraseError) {
      console.error(paraphraseError)

      setError({
        error: TEXT_CONTENT.errors.userFriendlyError,
        details: '',
      })
      setState('error')
    }
  }

  const isTextEmpty = !text.trim()
  const canParaphrase = !isTextEmpty && state !== 'loading'

  return {
    text,
    state,
    result,
    error,
    isTextEmpty,
    canParaphrase,

    setText,
    handlePasteText,
    handleSampleText,
    handleClearInput,
    handleParaphrase,
  }
}
