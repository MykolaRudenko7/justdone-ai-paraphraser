export interface AIProvider {
  name: string
  paraphrase(text: string): Promise<string>
}

export interface AIProviderConfig {
  name: string
  apiKey: string
  timeout?: number
}

export interface ParaphraseRequest {
  text: string
}

export interface ParaphraseResponse {
  result: string
  provider: string
  duration: number
}

export interface ParaphraseError {
  error: string
  provider: string
  details?: string
}

export type ParaphraseResult = ParaphraseResponse | ParaphraseError
