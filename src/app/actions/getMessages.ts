"use server";

import { db } from "@/lib/db";
import { messages } from "@/lib/schema";
import { eq, asc } from "drizzle-orm";

export async function getMessages(chatId: string) {
  return await db.query.messages.findMany({
    where: eq(messages.chatId, chatId),
    orderBy: [asc(messages.createdAt)],
  });
}
