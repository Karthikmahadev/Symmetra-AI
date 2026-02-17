import PreviewCard from "./PreviewCard";

export default function HeroSection() {
    return (
      <section className="w-full bg-gradient-to-b from-slate-50 to-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8">
            {/* Left Column - Content */}
            <div className="flex flex-col justify-center">
              {/* Badge */}
              <div className="mb-6 inline-flex">
                <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-medium text-slate-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-600"></span>
                  WEB DEVELOPER ASSESSMENT SUITE
                </span>
              </div>
  
              {/* Heading */}
              <h1 className="mb-6 text-5xl font-bold leading-tight text-slate-900 lg:text-6xl">
                AI-powered developer assistant for real-time tool calling.
              </h1>
  
              {/* Subheading */}
              <p className="mb-4 text-slate-600">
                <span className="font-medium">Weather · Markets · F1 telemetry</span> · streamed to live environment.
              </p>
  
              <p className="mb-8 max-w-lg text-slate-600">
                Observe how candidates orchestrate live APIs in a realistic environment. Capture how they reason, structure, and ship tool-integrated features — not just solve quizzes.
              </p>
  
              {/* Features */}
              <div className="mt-8 flex flex-wrap gap-6 text-sm text-slate-600">
                <div>
                  <span className="font-semibold text-slate-900">Real traffic sandbox</span> · Weather, stock & F1 tools wired in
                </div>
                <div>
                  <span className="font-semibold text-slate-900">No hotdals</span> · Runs in the browser
                </div>
              </div>
            </div>
  
            {/* Right Column - Preview Card */}
            <div className="flex items-center justify-center">
              <PreviewCard />
            </div>
          </div>
        </div>
      </section>
    );
  }