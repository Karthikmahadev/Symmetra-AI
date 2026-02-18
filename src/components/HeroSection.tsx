import PreviewCard from "./PreviewCard";

export default function HeroSection() {
  return (
    <section className="w-full bg-gradient-to-b from-slate-50 to-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8">
          <div className="flex flex-col justify-center">
            
            <h1 className="mb-6 text-5xl font-bold leading-tight text-slate-900 lg:text-6xl">
              AI Assistant with Real-Time Tool Calling & Persistent Chat
            </h1>

            <p className="mb-4 text-slate-600">
              <span className="font-medium">
                Weather · F1 Races · Stock Prices
              </span>{" "}
              powered by live APIs and streamed responses.
            </p>

            <p className="mb-8 max-w-lg text-slate-600">
              Built with Next.js, NextAuth, Drizzle ORM, and the Vercel AI SDK.
              Authenticated users can interact with an AI assistant that calls
              real-world tools, streams structured responses, and stores
              conversation history securely in the database.
            </p>

            <div className="mt-8 flex flex-wrap gap-6 text-sm text-slate-600">
              <div>
                <span className="font-semibold text-slate-900">
                  OAuth Secured
                </span>{" "}
                · Google & GitHub login
              </div>
              <div>
                <span className="font-semibold text-slate-900">
                  Persistent History
                </span>{" "}
                · Stored via Server Actions + Drizzle ORM
              </div>
              <div>
                <span className="font-semibold text-slate-900">
                  Live Tool Calls
                </span>{" "}
                · OpenWeather · F1 · Stocks
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <PreviewCard />
          </div>
        </div>
      </div>
    </section>
  );
}
