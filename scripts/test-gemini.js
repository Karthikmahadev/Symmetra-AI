require('dotenv').config({ path: __dirname + '/../.env.local' });

const { GoogleGenAI } = require('@google/genai');

const ai = new GoogleGenAI({
  apiKey: process.env.GOOGLE_API_KEY,
});

async function test() {
  try {
    // Example: using Gemini 2.5 Flash
    const result = await ai.models.generateContent({
      model: "models/gemini-2.5-flash", // ✅ replace with a valid model
      contents: "Say hello in 1 sentence",
    });

    console.log("Gemini API response:", result.text);
  } catch (err) {
    console.error("Error calling Gemini API:", err);
  }
}

test();
