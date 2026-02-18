"use client";

import { Trash2, MessageSquare, Plus } from "lucide-react";
import { deleteChat } from "@/app/actions/deleteChat";
import { signOut } from "next-auth/react";

interface SidebarProps {
  chats: any[];
  selectedChat: string | null;
  setSelectedChat: (chatId: string | null) => void;
  session: any;
  setChats: (chats: any[]) => void;
}

export default function Sidebar({
  chats,
  selectedChat,
  setSelectedChat,
  session,
  setChats,
}: SidebarProps) {

  console.log("chats : ", chats);

  const handleDelete = async (chatId: string) => {
    const res = await deleteChat(chatId);

    if (res.success) {
      const updatedChats = chats.filter((c) => c.id !== chatId);
      setChats(updatedChats);
      if (selectedChat === chatId) setSelectedChat(updatedChats[0]?.id ?? null);
    } else {
      alert("Failed to delete chat: " + res.message);
    }
  };


  const initials = session?.user?.name
    ? session.user.name.split(" ").map((n: string) => n[0]).join("").toUpperCase().slice(0, 2)
    : session?.user?.email?.[0]?.toUpperCase() ?? "U";

  return (
    <>

      <aside
        className="flex flex-col"
        style={{
          width: 260,
          background: "#f7f7f5",
          borderRight:"1px solid #ededed",
          flexShrink: 0,
        }}
      >
        <div
          className="flex items-center gap-2 px-5 py-5"
          style={{ borderBottom: "1px solid #f5f5f5" }}
        >
          <div
            className="flex items-center justify-center rounded-lg"
            style={{
              width: 28,
              height: 28,
              background: "linear-gradient(135deg, #fff 60%, #ccc)",
              borderBottom:"1px solid #ededed",
              flexShrink: 0,
            }}
          >
           <img src="/logo.jpg" className="h-10 md:h-6 rounded" />
          </div>
          <span
            style={{
              fontSize: 15,
              fontWeight: 600,
              color: "black",
              letterSpacing: "-0.01em",
            }}
          >
            Symmetri AI
          </span>
        </div>
        <div className="px-3 pt-4 pb-2">
          <button
            onClick={() => setSelectedChat(null)}
            className="flex items-center gap-2 w-full px-3 py-2.5 rounded-xl text-sm font-medium transition-all"
            style={{
              background: "#2a2a2a",
              color: "#e0e0e0",
              border: "1px solid #333",
              cursor: "pointer",
            }}
            onMouseEnter={e => (e.currentTarget.style.background = "#333")}
            onMouseLeave={e => (e.currentTarget.style.background = "#2a2a2a")}
          >
            <Plus size={15} color="#aaa" />
            New Chat
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-3 pb-4">
          {chats.length > 0 && (
            <p
              className="px-2 mb-2 uppercase tracking-widest"
              style={{ fontSize: 10, color: "#555", fontWeight: 600 }}
            >
              Recent
            </p>
          )}
          <div className="space-y-0.5">
            {chats.map((chat) => {
              const isSelected = selectedChat === chat.id;
              return (
                <div
                  key={chat.id}
                  className="group flex items-center justify-between px-3 py-2.5 rounded-xl"
                  style={{
                    background: isSelected ? "#2e2e2e" : "transparent",
                    cursor: "pointer",
                    transition: "background 0.15s",
                  }}
                  onMouseEnter={e => {
                    if (!isSelected) e.currentTarget.style.background = "#242424";
                  }}
                  onMouseLeave={e => {
                    if (!isSelected) e.currentTarget.style.background = "transparent";
                  }}
                >
                  <button
                    className="flex items-center gap-2 flex-1 text-left truncate"
                    onClick={() => setSelectedChat(chat.id)}
                    style={{ background: "none", border: "none", cursor: "pointer" }}
                  >
                    <MessageSquare size={13} color={isSelected ? "#fff" : "#666"} />
                    <span
                      className="truncate text-sm"
                      style={{
                        color: isSelected ? "#f5f5f5" : "#999",
                        fontWeight: isSelected ? 500 : 400,
                      }}
                    >
                      {chat.title}
                    </span>
                  </button>

                  <button
                    className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ background: "none", border: "none", cursor: "pointer", padding: 2 }}
                    onClick={() => handleDelete(chat.id)}
                  >
                    <Trash2 size={13} color="#e55" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        <div
  className="px-4 py-4 flex items-center gap-3 justify-between"
  style={{ borderTop: "1px solid #e8e3e3" }}
>
  <div
    className="flex items-center justify-center rounded-full flex-shrink-0"
    style={{
      width: 32,
      height: 32,
      background: "#333",
      border: "1.5px solid #444",
    }}
  >
    <span style={{ fontSize: 12, fontWeight: 600, color: "#e0e0e0" }}>{initials}</span>
  </div>
  <div className="truncate flex-1">
    <p className="truncate text-sm" style={{ color: "black", fontWeight: 500 }}>
      {session?.user?.name ?? session?.user?.email ?? "User"}
    </p>
    {session?.user?.email && session?.user?.name && (
      <p className="truncate" style={{ fontSize: 11, color: "black" }}>
        {session.user.email}
      </p>
    )}
  </div>
  <button
    onClick={() => signOut({ callbackUrl: "/auth/login" })}
    style={{
      background: "#e55",
      color: "#fff",
      padding: "5px 10px",
      borderRadius: 6,
      fontSize: 12,
      fontWeight: 600,
      cursor: "pointer",
    }}
    onMouseEnter={e => (e.currentTarget.style.background = "#d33")}
    onMouseLeave={e => (e.currentTarget.style.background = "#e55")}
  >
    Logout
  </button>
</div>

      </aside>
    </>
  );
}