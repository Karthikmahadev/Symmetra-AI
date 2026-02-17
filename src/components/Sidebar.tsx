"use client";

import { MessageSquare, Plus, Settings, LogOut } from "lucide-react";
import { signOut } from "next-auth/react";

interface SidebarProps {
  selectedChat: string;
  setSelectedChat: (chat: string) => void;
  session: any;
}

export default function Sidebar({
  selectedChat,
  setSelectedChat,
  session,
}: SidebarProps) {
  const todayChats = [
    { id: 1, title: "SF Weather Info" },
    { id: 2, title: "React Component Help" },
  ];

  const previousChats = [
    { id: 3, title: "API Integration Docs" },
    { id: 4, title: "Database Schema" },
  ];

  return (
    <aside className="flex w-64 flex-col border-r border-slate-200 bg-white">
      {/* New Chat Button */}
      <div className="border-b border-slate-200 p-4">
        <button className="flex w-full items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50">
          <Plus className="h-4 w-4" />
          New chat
        </button>
      </div>

      {/* Chat History */}
      <div className="flex-1 overflow-y-auto p-4">
        <div className="mb-6">
          <h3 className="mb-2 px-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
            Today
          </h3>
          <div className="space-y-1">
            {todayChats.map((chat) => (
              <button
                key={chat.id}
                onClick={() => setSelectedChat(chat.title)}
                className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors ${
                  selectedChat === chat.title
                    ? "bg-slate-100 text-slate-900"
                    : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                <MessageSquare className="h-4 w-4 flex-shrink-0" />
                <span className="truncate">{chat.title}</span>
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-2 px-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
            Previous 7 Days
          </h3>
          <div className="space-y-1">
            {previousChats.map((chat) => (
              <button
                key={chat.id}
                onClick={() => setSelectedChat(chat.title)}
                className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
              >
                <MessageSquare className="h-4 w-4 flex-shrink-0" />
                <span className="truncate">{chat.title}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* User Profile + Logout */}
      <div className="border-t border-slate-200 p-4 space-y-3">
        <div className="flex items-center gap-3">
          <img
            src={session?.user?.image}
            alt="User"
            className="h-8 w-8 rounded-full object-cover"
          />
          <span className="text-sm font-medium text-slate-900">
            {session?.user?.name}
          </span>
        </div>

        <button
          onClick={() => signOut({ callbackUrl: "/" })}
          className="flex w-full items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm text-red-600 hover:bg-red-50"
        >
          <LogOut className="h-4 w-4" />
          Logout
        </button>
      </div>
    </aside>
  );
}
