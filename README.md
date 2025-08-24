# AI Text Paraphraser by JustDone

Advanced AI-powered text paraphrasing tool that preserves meaning while improving clarity and style. Powered by OpenAI and Google Gemini with intelligent fallback system.

## 🚀 Features

- **AI-Powered Paraphrasing**: Transform text while maintaining original meaning and style
- **Multi-Provider Support**: OpenAI GPT-4o-mini and Google Gemini 1.5 Flash
- **Intelligent Fallback**: Automatic provider switching with parallel requests for optimal performance
- **Modern UI**: Built with Next.js, Material-UI, and TypeScript
- **Responsive Design**: Works seamlessly on all devices
- **SEO Optimized**: Meta tags, sitemap, and proper semantic structure

## 🛠️ Tech Stack

- **Frontend**: Next.js 15 (App Router), TypeScript, Material-UI
- **AI Providers**: OpenAI API, Google Gemini API
- **Styling**: Tailwind CSS, Material-UI Theme
- **State Management**: React Hooks
- **Validation**: Built-in input validation with custom error handling
- **Architecture**: SOLID principles, component-based design

## 📋 Prerequisites

Before running this project, make sure you have:

- **Node.js** 18.17 or later
- **npm** or **yarn** package manager
- **OpenAI API Key** (optional, for OpenAI provider)
- **Google Gemini API Key** (optional, for Gemini provider)

## 🔧 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/justdone-ai-paraphraser.git
   cd justdone-ai-paraphraser
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**

   Create a `.env.local` file in the root directory:

   ```env
   # OpenAI API Key (optional)
   OPENAI_API_KEY=sk-your-openai-api-key-here

   # Google Gemini API Key (optional)
   GEMINI_API_KEY=your-gemini-api-key-here

   # Request timeout in milliseconds (optional, default: 3000)
   TIMEOUT=3000
   ```

   **Note**: At least one AI provider API key is required for the application to function.

## 🚀 Running the Project

### Development Mode

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
# Build the project
npm run build
# or
yarn build

# Start production server
npm start
# or
yarn start
```

### Linting

```bash
npm run lint
# or
yarn lint
```

## 🌐 How It Works

1. **Input Text**: Users can enter text manually, paste from clipboard, or use sample text
2. **Input Validation**: Text is validated for length (max 5000 characters) and content (non-empty)
3. **AI Processing**: Validated text is sent to configured AI providers in parallel
4. **Smart Fallback**: The fastest successful response is returned to the user
5. **Result Display**: Paraphrased text is shown with provider information and response time

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   │   └── paraphrase/    # Paraphrase endpoint with built-in validation
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/             # React components
│   ├── ActionButtons.tsx  # Action buttons (Clear, Paraphrase)
│   ├── Paraphraser.tsx    # Main paraphraser component
│   ├── StatusDisplay.tsx  # Loading/error status
│   └── TextForm.tsx       # Text input form
├── hooks/                  # Custom React hooks
│   └── useParaphraser.ts  # Main paraphraser logic
├── lib/                    # Utility libraries
│   └── ai-providers/      # AI provider implementations
│       ├── openai-provider.ts
│       ├── gemini-provider.ts
│       ├── provider-manager.ts
│       └── types.ts
├── theme/                  # Material-UI theme
│   ├── colors.ts          # Color palette
│   ├── typography.ts      # Typography constants
│   └── theme.ts           # Theme configuration
└── constants/              # Application constants
    └── textContent.ts      # Text content and messages
```

## 🔌 AI Provider Configuration

The application supports multiple AI providers with automatic fallback:

### OpenAI Provider

- **Model**: GPT-4o-mini
- **Features**: Advanced text understanding and paraphrasing
- **Timeout**: Configurable (default: 3 seconds)

### Google Gemini Provider

- **Model**: Gemini 1.5 Flash
- **Features**: Fast and efficient text processing
- **Timeout**: Configurable (default: 3 seconds)

### Adding New Providers

To add a new AI provider:

1. Create a new provider class implementing the `AIProvider` interface
2. Add the provider to `AIProviderManager.initializeProviders()`
3. Set the corresponding environment variable

## 🔒 Input Validation

The application includes built-in validation for user input:

- **Text Required**: Input must contain text
- **String Type**: Input must be a valid string
- **Non-Empty**: Text cannot be empty or contain only whitespace
- **Length Limit**: Maximum 5000 characters allowed
- **Error Handling**: User-friendly error messages for validation failures

## 🎨 Customization

### Theme Customization

- **Colors**: Modify `src/theme/colors.ts`
- **Typography**: Update `src/theme/typography.ts`
- **Material-UI Theme**: Customize `src/theme/theme.ts`

### Text Content

- **Messages**: Update `src/constants/textContent.ts`
- **Sample Text**: Modify the sample text in constants

**Happy Paraphrasing! 🚀**
