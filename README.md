🚀 SymmetraAI – AI Powered Chat Tool System

An advanced AI chat application built with Next.js App Router, powered by Google Gemini, with real-time chat persistence, dynamic sidebar, authentication, and tool integrations.
✨ Features
🔐 Authentication
    User authentication using NextAuth
    Google OAuth login
    Session handling
    Protected dashboard routes

💬 AI Chat System
    Real-time AI responses using Google Gemini (gemini-1.5-flash-latest)
    Dynamic chat creation with unique chatId
    Server Actions for message handling
    Chat history stored in database

Persistent conversations per user

🧠 Auto Chat Title Generation
    First message automatically generates a short AI-powered title
    Titles saved in database
    Displayed dynamically in sidebar

📂 Dynamic Sidebar
    Sidebar loads chats from database
    Displays all user conversations
    Click to switch between chats
    Real-time updates

🗄️ Database Integration
    PostgreSQL database
    ORM: Drizzle ORM
    Chat table
    Messages table
    User-linked chat system

🛠 Tool Integrations (Custom AI Tools)
    🌤 Weather tool
    🏎 F1 matches tool
    📈 Stock price tool

Tool routing logic decides whether to:
    Call external API
    Or generate AI response

🎨 UI & Styling
    Tailwind CSS
    shadcn/ui components
    Responsive dashboard layout
    Modern chat interface
    Clean message bubbles

🧱 Architecture
    Next.js App Router
    Server Actions
    Modular AI layer (lib/ai.ts)
    Central Gemini config (lib/gemini.ts)
    Clean separation of DB, AI, and UI logic

🛠 Tech Stack
    Framework: Next.js (App Router)
    Language: TypeScript
    Auth: NextAuth
    Database: PostgreSQL
    ORM: Drizzle ORM
    AI: Google Gemini API
    Styling: Tailwind CSS + shadcn/ui
    Icons: Lucide React