import { Cloud, ChartCandlestick, Car, LucideIcon } from "lucide-react"

type Tool = {
  number: string
  name: string
  icon: LucideIcon
  title: string
  description: string
  tags: string[]
}

export default function ToolsSection() {
  const tools: Tool[] = [
    {
      number: "01",
      name: "Weather",
      icon: Cloud,
      title: "Weather intelligence surface",
      description:
        "Evaluate how candidates design control systems around live meteorological data, caching, and graceful fallbacks.",
      tags: [
        "Latency, retries, offline states",
        "Global coverage + JSON schema",
      ],
    },
    {
      number: "02",
      name: "Stock",
      icon: ChartCandlestick,
      title: "Market-aware scenarios",
      description:
        "Challenges around live pricing, streaming updates, and error boundaries when financial data is part of the user flow.",
      tags: [
        "Streaming & polling patterns",
        "Equities · Indices · FX (real-time simulation)",
      ],
    },
    {
      number: "03",
      name: "F1",
      icon: Car,
      title: "Telemetry-rich workflows",
      description:
        "Challenges candidates with race data, lap notes, and strategy calls to reveal how they structure complex, stateful UI.",
      tags: [
        "Time-series & derived metrics",
        "Drivers · circuits · standings (fresh via Redis)",
      ],
    },
  ]

  return (
    <section className="w-full bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12">
          <h2 className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
            Instrumented Tools
          </h2>
          <h3 className="text-3xl font-bold text-slate-900">
            Three production-grade APIs, one coherent assessment.
          </h3>
          <p className="mt-2 text-slate-600">
            Each tool is observable, rate-limited, and safe for live traffic.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {tools.map((tool) => {
            const Icon = tool.icon

            return (
              <div
                key={tool.number}
                className="rounded-xl border border-slate-200 bg-white p-6 transition-shadow hover:shadow-lg cursor-pointer"
              >
                <div className="mb-4 flex items-center justify-between">
                  <Icon className="h-6 w-6 text-slate-700" />
                  <span className="text-sm font-medium text-slate-400">
                    {tool.number} · {tool.name}
                  </span>
                </div>

                <h4 className="mb-3 text-xl font-semibold text-slate-900">
                  {tool.title}
                </h4>

                <p className="mb-4 text-sm text-slate-600">
                  {tool.description}
                </p>

                <div className="space-y-2">
                  {tool.tags.map((tag, idx) => (
                    <div
                      key={idx}
                      className="rounded-md bg-slate-50 px-3 py-2 text-xs text-slate-700"
                    >
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
