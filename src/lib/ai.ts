import { genAI, GEMINI_MODEL } from "./gemini";
import { getWeather, getF1Matches, getStockPrice } from "./tools";
import { AIResponse } from "@/types/ai";

export async function runAI(userMessage: string): Promise<AIResponse> {
  const lower = userMessage.toLowerCase();

  // ================= WEATHER =================
  if (lower.includes("weather")) {
    let location = "Chennai"; // fallback if extraction fails

    // Regex to match "weather in <location>" or "weather <location>"
    const match = userMessage.match(/weather(?: in)? (.+)/i);
    if (match) location = match[1].trim();

    try {
      const data = await getWeather(location);
      return { type: "weather", ...data };
    } catch (err: any) {
      console.error("Weather API error:", err.message);
      return {
        role: "assistant",
        type: "text",
        text: `Unable to fetch weather for ${location}.`,
      };
    }
  }

  // ================= F1 =================
  if (lower.includes("f1")) {
    try {
      const data = await getF1Matches();
      return { type: "f1", ...data };
    } catch (err: any) {
      console.error("F1 API error:", err.message);
      return {
        role: "assistant",
        type: "text",
        text: "Unable to fetch F1 data right now.",
      };
    }
  }

  // ================= STOCK =================
  if (lower.includes("stock")) {
    const symbolMatch = userMessage.match(/stock(?: price)?(?: for)? ([A-Za-z]+)/i);
    const symbol = symbolMatch ? symbolMatch[1].toUpperCase() : null;

    if (!symbol) {
      return {
        role: "assistant",
        type: "text",
        text: "Please provide a valid stock symbol (e.g., AAPL, TSLA).",
      };
    }

    try {
      const data = await getStockPrice(symbol);
      return { type: "stock", ...data };
    } catch (err: any) {
      console.error("Stock API error:", err.message);
      return {
        role: "assistant",
        type: "text",
        text: `Unable to fetch stock data for ${symbol}.`,
      };
    }
  }

  // ================= GEMINI TEXT =================
  try {
    const result = await genAI.models.generateContent({
      model: GEMINI_MODEL,
      contents: userMessage,
    });

    return {
      role: "assistant",
      type: "text",
      text: result.text || "Sorry, I couldn't generate a response.",
    };
  } catch (err) {
    console.error("Gemini API error:", err);
    return {
      role: "assistant",
      type: "text",
      text: "Sorry, I couldn't generate a response due to an API error.",
    };
  }
}
