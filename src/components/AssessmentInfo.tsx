export default function AssessmentInfo() {
    return (
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="rounded-xl border border-slate-200 bg-white p-8">
          <div className="mb-8 grid grid-cols-2 gap-8">
            <div>
              <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                Assessment Length
              </h3>
              <p className="text-lg font-semibold text-slate-900">25-90 minutes</p>
            </div>
            <div>
              <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                Scored Dimensions
              </h3>
              <p className="text-lg font-semibold text-slate-900">
                tooling · reasoning · shipping
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }