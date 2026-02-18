export default function PreviewCard() {
  return (
    <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-xl">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex gap-1">
            <div className="h-3 w-3 rounded-full bg-red-400"></div>
            <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
            <div className="h-3 w-3 rounded-full bg-green-400"></div>
          </div>
        </div>
        <span className="text-xs text-slate-500">authenticated-session</span>
      </div>

      <div className="mb-4">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-sm font-medium text-slate-700">
            Available AI Tools
          </span>
          <span className="text-xs text-slate-500">3 connected</span>
        </div>

        <div className="flex flex-wrap gap-2">
          <span className="rounded-md bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-700">
            getWeather(location)
          </span>
          <span className="rounded-md bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-700">
            getF1Matches()
          </span>
          <span className="rounded-md bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-700">
            getStockPrice(symbol)
          </span>
        </div>
      </div>

      <div className="mb-4 rounded-lg bg-slate-900 p-4 font-mono text-xs text-slate-200">
        <div className="mb-1 text-blue-400">User:</div>
        <div className="mb-2">What's the weather in London?</div>

        <div className="mb-1 text-green-400">AI (tool call → getWeather)</div>
        <div className="pl-2 text-slate-400">
          Fetching live data from API...
        </div>

        <div className="mt-2 text-white">
          🌤 12°C · Partly Cloudy · Humidity 71%
        </div>
      </div>

      <div className="mb-4">
        <p className="text-xs text-slate-600">
          Streaming responses via Vercel AI SDK.{" "}
          <span className="inline-block rounded bg-slate-800 px-2 py-0.5 font-mono text-white">
            SSR + Server Actions
          </span>
        </p>
      </div>

      <div className="rounded-lg bg-slate-800 p-3">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-xs font-medium text-white">
            Tool Calls Executed
          </span>
          <span className="text-xs text-slate-400">Live</span>
        </div>
        <div className="mb-2 flex items-center justify-between">
          <span className="text-xs font-medium text-white">
            Chat History
          </span>
          <span className="text-xs text-slate-400">Persisted</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium text-white">
            Authentication
          </span>
          <span className="rounded bg-white px-2 py-0.5 text-xs font-semibold text-slate-900">
            OAuth Secured
          </span>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-1 text-xs text-slate-500">
        <span className="h-1.5 w-1.5 rounded-full bg-blue-600"></span>
        Built with Next.js · NextAuth · Drizzle ORM · Vercel AI SDK
      </div>
    </div>
  );
}
