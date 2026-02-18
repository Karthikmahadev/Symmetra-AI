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
      title: "Live Weather Data via Tool Calling",
      description:
        "Fetch real-time weather information using OpenWeatherMap. The AI automatically detects location queries and invokes the getWeather tool to return structured weather cards.",
      tags: [
        "Tool calling with location parameter",
        "Structured Weather Card UI output",
      ],
    },
    {
      number: "02",
      name: "Stock",
      icon: ChartCandlestick,
      title: "Real-Time Stock Price Retrieval",
      description:
        "Retrieve live market data using Alpha Vantage. The assistant extracts stock symbols from user prompts and calls getStockPrice to display formatted price cards.",
      tags: [
        "Symbol-based tool invocation",
        "Financial data formatting & error handling",
      ],
    },
    {
      number: "03",
      name: "F1",
      icon: Car,
      title: "Next Formula 1 Race Information",
      description:
        "Integrates with the Ergast API to fetch upcoming Formula 1 race details. The assistant calls getF1Matches and renders race information in a dedicated race card.",
      tags: [
        "API integration with live race data",
        "SSR-friendly data rendering",
      ],
    },
  ]

  return (
    <section className="w-full bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12">
          <h2 className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
            Integrated AI Tools
          </h2>
          <h3 className="text-3xl font-bold text-slate-900">
            Three real-world APIs powered by AI-driven tool calling.
          </h3>
          <p className="mt-2 text-slate-600">
            Each tool is securely invoked through the Vercel AI SDK and rendered
            with structured, user-friendly UI components.
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
