"use server";

import { db } from "@/lib/db";
import { messages } from "@/lib/schema";
import { runAI } from "@/lib/ai";
import { createChat } from "./createChat";
import { AIResponse } from "@/types/ai";

export async function sendMessage(
  chatId: string | null,
  userId: string,
  content: string
): Promise<{ chatId: string; ai: AIResponse }> {
  let activeChatId = chatId;

  if (!activeChatId) {
    const newChat = await createChat(userId, content);
    activeChatId = newChat.id;
  }

  await db.insert(messages).values({
    chatId: activeChatId,
    role: "user",
    content,
  });

  const aiResponse = await runAI(content);

  const responseText =
    aiResponse.type === "text"
      ? aiResponse.text
      : JSON.stringify(aiResponse);

  await db.insert(messages).values({
    chatId: activeChatId,
    role: "assistant",
    content: responseText,
  });

  return { chatId: activeChatId, ai: aiResponse };
}
