import { GoogleGenerativeAI } from '@google/generative-ai';

// Note: Replace this with your actual Gemini API key from Google AI Studio
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY || 'YOUR_GEMINI_API_KEY_HERE';
const genAI = new GoogleGenerativeAI(API_KEY);

export class GeminiService {
  private model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

  async generateResponse(prompt: string): Promise<string> {
    try {
      // Check if API key is properly configured
      if (!API_KEY || API_KEY === 'YOUR_GEMINI_API_KEY_HERE') {
        throw new Error('Gemini API key is not configured. Please set VITE_GEMINI_API_KEY in your environment variables.');
      }

      const result = await this.model.generateContent(prompt);
      const response = await result.response;
      return response.text();
    } catch (error) {
      console.error('Error generating response:', error);
      if (error instanceof Error) {
        throw new Error(`Failed to generate response: ${error.message}`);
      }
      throw new Error('Failed to generate response. Please try again.');
    }
  }
}

export const geminiService = new GeminiService();