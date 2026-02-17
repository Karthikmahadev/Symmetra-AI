"use server";

import { db } from "@/lib/db";
import { chats } from "@/lib/schema";
import { sql } from "drizzle-orm";

export async function deleteChat(chatId: string) {
  if (!chatId) throw new Error("Chat ID is required");

  try {
    await db.delete(chats).where(sql`${chats.id} = ${chatId}`);
    return { success: true };
  } catch (err: any) {
    console.error("Delete chat error:", err);
    return { success: false, message: err.message };
  }
}
