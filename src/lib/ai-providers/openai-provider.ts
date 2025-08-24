import OpenAI from 'openai'
import { AIProvider, AIProviderConfig } from 'lib/ai-providers/types'

export class OpenAIProvider implements AIProvider {
  private client: OpenAI
  public name: string
  private timeout: number

  constructor(config: AIProviderConfig) {
    this.name = config.name
    this.timeout = config.timeout || 3000
    this.client = new OpenAI({
      apiKey: config.apiKey,
    })
  }

  async paraphrase(text: string): Promise<string> {
    try {
      const createChatCompletionRequest = () =>
        this.client.chat.completions.create({
          model: 'gpt-4o-mini',
          messages: [
            {
              role: 'system',
              content:
                'You are a helpful assistant that paraphrases text while maintaining the original meaning and style.',
            },
            { role: 'user', content: `Paraphrase: ${text}` },
          ],
          max_tokens: 1000,
          temperature: 0.7,
        })

      const response = await Promise.race([
        createChatCompletionRequest(),
        new Promise<never>((_, reject) =>
          setTimeout(() => reject(new Error('Timeout')), this.timeout),
        ),
      ])

      return response.choices[0]?.message?.content || 'Failed to generate paraphrase'
    } catch (error) {
      throw new Error(`OpenAI error: ${error instanceof Error ? error.message : 'Unknown error'}`)
    }
  }
}
