import ChatLayout from "@/components/ChatLayout";
import { db } from "@/lib/db";
import { chats } from "@/lib/schema";
import { eq, desc } from "drizzle-orm";
import { getServerSession } from "next-auth";

import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";


export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session?.user?.id) {
    redirect("/auth/login");
  }

  const userChats = await db.query.chats.findMany({
    where: eq(chats.userId, session.user.id),
    orderBy: [desc(chats.createdAt)],
  });

  return (
    <ChatLayout
      session={session}
      initialChats={userChats}
    />
  );
}
