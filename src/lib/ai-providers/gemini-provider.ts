import { GoogleGenerativeAI, type GenerativeModel } from '@google/generative-ai'
import { AIProvider, AIProviderConfig } from './types'

export class GeminiProvider implements AIProvider {
  private client: GoogleGenerativeAI
  private model: GenerativeModel
  public name: string
  private timeout: number

  constructor(config: AIProviderConfig) {
    this.name = config.name
    this.timeout = config.timeout || 3000
    this.client = new GoogleGenerativeAI(config.apiKey)
    this.model = this.client.getGenerativeModel({ model: 'gemini-1.5-flash' })
  }

  async paraphrase(text: string): Promise<string> {
    try {
      const prompt = `Paraphrase the following text while maintaining the original meaning and style: ${text}`

      const generateContentRequest = () => this.model.generateContent(prompt)

      const response = await Promise.race([
        generateContentRequest(),
        new Promise<never>((_, reject) =>
          setTimeout(() => reject(new Error('Timeout')), this.timeout),
        ),
      ])

      const result = await response.response
      const generatedText = result.text()
      return generatedText && generatedText.trim().length > 0
        ? generatedText
        : 'Failed to generate paraphrase'
    } catch (error) {
      throw new Error(`Gemini error: ${error instanceof Error ? error.message : 'Unknown error'}`)
    }
  }
}
