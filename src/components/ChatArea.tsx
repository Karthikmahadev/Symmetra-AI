"use client";

import { useState } from "react";
import { ArrowUp, Share2, ChevronDown } from "lucide-react";
import WeatherCard from "./WeatherCard";

export default function ChatArea() {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim()) {
      // Handle send message
      console.log("Sending:", message);
      setMessage("");
    }
  };

  return (
    <div className="flex flex-1 flex-col">
      {/* Header */}
      <header className="flex items-center justify-between border-b border-slate-200 px-6 py-4">
        <div className="flex items-center gap-2">
          <h1 className="text-sm font-medium text-slate-700">DevAssist 4.0</h1>
          <ChevronDown className="h-4 w-4 text-slate-500" />
        </div>
        <button className="rounded-lg p-2 text-slate-500 hover:bg-slate-100">
          <Share2 className="h-4 w-4" />
        </button>
      </header>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto px-6 py-8">
        <div className="mx-auto max-w-3xl space-y-6">
          {/* User Message */}
          <div className="flex items-start gap-4">
            <div className="h-8 w-8 flex-shrink-0 overflow-hidden rounded-full bg-gradient-to-br from-orange-400 to-pink-600">
              <img src="/api/placeholder/32/32" alt="User" className="h-full w-full object-cover" />
            </div>
            <div className="flex-1">
              <p className="text-slate-900">What's the current weather in San Francisco?</p>
            </div>
          </div>

          {/* AI Response */}
          <div className="flex items-start gap-4">
            <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-600">
              <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM8 10a1 1 0 112 0v3a1 1 0 11-2 0v-3zm1-4a1 1 0 100 2 1 1 0 000-2z" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="mb-4 text-slate-900">
                Here is the current weather forecast for San Francisco, CA:
              </p>
              <WeatherCard />
            </div>
          </div>
        </div>
      </div>

      {/* Input Area */}
      <div className="border-t border-slate-200 px-6 py-4">
        <div className="mx-auto max-w-3xl">
          <div className="relative flex items-center gap-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
              placeholder="Message DevAssist..."
              className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 pr-12 text-sm text-slate-900 placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            <button
              onClick={handleSend}
              disabled={!message.trim()}
              className="absolute right-2 rounded-lg bg-blue-600 p-2 text-white hover:bg-blue-700 disabled:bg-slate-300 disabled:cursor-not-allowed"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}