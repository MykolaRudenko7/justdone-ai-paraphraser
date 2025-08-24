import { NextRequest, NextResponse } from 'next/server'
import { AIProviderManager } from 'lib/ai-providers/provider-manager'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { text } = body

    if (!text || typeof text !== 'string') {
      return NextResponse.json(
        { error: 'Validation error', details: 'Text is required and must be a string' },
        { status: 400 },
      )
    }

    if (text.trim().length === 0) {
      return NextResponse.json(
        { error: 'Validation error', details: 'Text cannot be empty' },
        { status: 400 },
      )
    }

    if (text.length > 5000) {
      return NextResponse.json(
        { error: 'Validation error', details: 'Text too long (max 5000 characters)' },
        { status: 400 },
      )
    }

    const providerManager = new AIProviderManager()
    const result = await providerManager.paraphraseWithFallback(text.trim())

    if ('error' in result) {
      return NextResponse.json({ error: result.error, details: result.details }, { status: 500 })
    }

    return NextResponse.json(result)
  } catch {
    return NextResponse.json(
      { error: 'Internal server error', details: 'Something went wrong' },
      { status: 500 },
    )
  }
}
