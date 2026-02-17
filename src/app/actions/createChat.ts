"use server";

import { db } from "@/lib/db";
import { chats } from "@/lib/schema";
import { genAI, GEMINI_MODEL } from "@/lib/gemini";

export async function createChat(userId: string, firstMessage: string) {
  // ✅ New SDK format
  const result = await genAI.models.generateContent({
    model: GEMINI_MODEL,
    contents: `Generate a short 4-5 word chat title for this message: ${firstMessage}`,
  });

  const title =
    result.text?.replace(/["']/g, "").slice(0, 40) || "New Chat";

  const newChat = await db
    .insert(chats)
    .values({
      userId,
      title,
    })
    .returning();

  return newChat[0];
}
