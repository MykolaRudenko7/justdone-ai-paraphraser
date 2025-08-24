import { AIProvider, ParaphraseResult, ParaphraseResponse } from 'lib/ai-providers/types'
import { OpenAIProvider } from 'lib/ai-providers/openai-provider'
import { GeminiProvider } from 'lib/ai-providers/gemini-provider'

export class AIProviderManager {
  private providers: AIProvider[] = []

  constructor() {
    this.initializeProviders()
  }

  private initializeProviders() {
    const openaiKey = process.env.OPENAI_API_KEY
    const geminiKey = process.env.GEMINI_API_KEY
    const timeout = Number.parseInt(process.env.TIMEOUT ?? '3000', 10)

    if (openaiKey) {
      this.providers.push(new OpenAIProvider({ name: 'OpenAI', apiKey: openaiKey, timeout }))
    }

    if (geminiKey) {
      this.providers.push(new GeminiProvider({ name: 'Gemini', apiKey: geminiKey, timeout }))
    }
  }

  addProvider(provider: AIProvider) {
    this.providers.push(provider)
  }

  async paraphraseWithFallback(text: string): Promise<ParaphraseResult> {
    if (this.providers.length === 0) {
      return {
        error: 'No AI providers available',
        provider: 'System',
        details: 'Please configure at least one AI provider',
      }
    }

    const parallelProviderRequests = this.providers.map(async (provider) => {
      const requestStartTime = Date.now()
      const result = await provider.paraphrase(text)
      const duration = Date.now() - requestStartTime
      const payload: ParaphraseResponse = {
        result,
        provider: provider.name,
        duration,
      }

      return payload
    })

    try {
      const firstSuccessfulResponse = await Promise.any(parallelProviderRequests)
      return firstSuccessfulResponse
    } catch (aggregatedErrors) {
      return {
        error: 'All providers failed',
        provider: 'System',
        details:
          aggregatedErrors instanceof AggregateError &&
          (aggregatedErrors as AggregateError).errors?.length
            ? (aggregatedErrors as AggregateError).errors
                .map((error: unknown) => (error instanceof Error ? error.message : String(error)))
                .join(' | ')
            : 'No AI provider could process the request',
      }
    }
  }

  getProviders() {
    return this.providers.map((provider) => ({ name: provider.name }))
  }
}
