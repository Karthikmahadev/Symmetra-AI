import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import ChatLayout from "@/components/ChatLayout";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/auth/login");
  }

  return (
    <div>
      <ChatLayout session={session} />
    </div>
  );
}

