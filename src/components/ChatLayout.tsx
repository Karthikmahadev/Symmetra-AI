"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";
import ChatArea from "./ChatArea";

export default function ChatLayout({
  session,
  initialChats,
}: {
  session: any;
  initialChats: any[];
}) {
  const [selectedChat, setSelectedChat] = useState<string | null>(
    initialChats[0]?.id ?? null
  );

  const [chats, setChats] = useState(initialChats);

  return (
    <div className="flex h-screen bg-white">
      <Sidebar
        chats={chats}
        selectedChat={selectedChat}
        setSelectedChat={setSelectedChat}
        session={session}
        setChats={setChats} 
      />

      <ChatArea
        session={session}
        chatId={selectedChat}
        setChatId={setSelectedChat}
      />
    </div>
  );
}
