export default function PreviewCard() {
    return (
      <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-xl">
        {/* Header */}
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              <div className="h-3 w-3 rounded-full bg-red-400"></div>
              <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
              <div className="h-3 w-3 rounded-full bg-green-400"></div>
            </div>
          </div>
          <span className="text-xs text-slate-500">session-candidate-42</span>
        </div>
  
        {/* Tools Section */}
        <div className="mb-4">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-sm font-medium text-slate-700">Active tools</span>
            <span className="text-xs text-slate-500">2 connected</span>
          </div>
          
          <div className="flex flex-wrap gap-2">
            <span className="rounded-md bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-700">
              weather-api-stream
            </span>
            <span className="rounded-md bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-700">
              stocks-api-stream
            </span>
            <span className="rounded-md bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-700">
              f1-gen-live-stream
            </span>
          </div>
        </div>
  
        {/* Code Terminal */}
        <div className="mb-4 rounded-lg bg-slate-900 p-4 font-mono text-xs">
          <div className="mb-1 text-blue-400">
            <span className="text-purple-400">async def</span> get_weather():
          </div>
          <div className="mb-1 pl-4 text-slate-300">
            <span className="text-yellow-400">assistant</span> = tool.call(
            <span className="text-green-400">"*london*"</span>)
          </div>
          <div className="mb-1 pl-4 text-slate-300">
            <span className="text-yellow-400">assistant</span> = tool.call(
            <span className="text-green-400">"*ìf*"</span>)
          </div>
          <div className="pl-4 text-slate-500">...</div>
        </div>
  
        {/* Status */}
        <div className="mb-4">
          <p className="text-xs text-slate-600">
            Solving latency, safety & concurrency. {" "}
            <span className="inline-block rounded bg-slate-800 px-2 py-0.5 font-mono text-white">
              Ogent seamanly, last 32 ms
            </span> time.
          </p>
        </div>
  
        {/* Bottom Overlay */}
        <div className="rounded-lg bg-slate-800 p-3">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-xs font-medium text-white">Valid tool calls</span>
            <span className="text-xs text-slate-400">28</span>
          </div>
          <div className="mb-2 flex items-center justify-between">
            <span className="text-xs font-medium text-white">API errors</span>
            <span className="text-xs text-slate-400">0</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-white">Reasoning depth</span>
            <span className="rounded bg-white px-2 py-0.5 text-xs font-semibold text-slate-900">High</span>
          </div>
        </div>
  
        {/* Bottom Info */}
        <div className="mt-4 flex items-center gap-1 text-xs text-slate-500">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-600"></span>
          Weather · Stock · F1 tools wired into every sandbox session.
        </div>
      </div>
    );
  }