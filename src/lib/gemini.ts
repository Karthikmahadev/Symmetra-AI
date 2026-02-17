import { GoogleGenAI } from "@google/genai";

export const GEMINI_MODEL = "models/gemini-2.5-flash"; // ✅ use a valid model

export const genAI = new GoogleGenAI({
  apiKey: process.env.GOOGLE_API_KEY,
});
