"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";
import ChatArea from "./ChatArea";

export default function ChatLayout({session}) {
  const [selectedChat, setSelectedChat] = useState("SF Weather Info");

  return (
    <div className="flex h-screen bg-white">
      <Sidebar selectedChat={selectedChat} setSelectedChat={setSelectedChat} session={session}/>
      <ChatArea session={session} />
    </div>
  );
}