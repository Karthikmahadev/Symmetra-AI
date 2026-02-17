import { Droplets, Wind, Eye, MapPin, CloudSun } from "lucide-react";

export default function WeatherCard() {
  return (
    <div className="w-full max-w-md overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      {/* Header */}
      <div className="border-b border-slate-200 p-4">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-xl font-semibold text-slate-900">San Francisco</h2>
            <p className="text-sm text-slate-500">California, United States</p>
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <span className="inline-flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>
              Live
            </span>
            <span>• Updated 2 min ago</span>
            <MapPin className="h-3.5 w-3.5" />
          </div>
        </div>
      </div>

      {/* Main Weather Info */}
      <div className="p-6">
        <div className="flex items-start justify-between">
          {/* Temperature */}
          <div>
            <div className="flex items-start">
              <span className="text-6xl font-bold text-slate-900">64</span>
              <span className="mt-2 text-2xl font-medium text-slate-500">°F</span>
            </div>
            <p className="mt-1 text-sm text-slate-500">FEELS LIKE 61°F</p>
          </div>

          {/* Condition */}
          <div className="text-right">
            <div className="mb-2 flex items-center justify-end gap-2">
              <span className="text-lg font-semibold text-slate-900">Partly Cloudy</span>
              <CloudSun className="h-8 w-8 text-yellow-500" />
            </div>
            <p className="text-sm text-slate-600">
              High 67° • Low 55°
            </p>
          </div>
        </div>

        {/* Weather Details Grid */}
        <div className="mt-6 grid grid-cols-3 gap-4">
          {/* Humidity */}
          <div>
            <div className="mb-1 flex items-center gap-1.5 text-xs font-medium uppercase tracking-wide text-slate-500">
              <Droplets className="h-3.5 w-3.5" />
              Humidity
            </div>
            <p className="text-lg font-semibold text-slate-900">62%</p>
            <p className="text-xs text-slate-500">Comfortable</p>
          </div>

          {/* Wind */}
          <div>
            <div className="mb-1 flex items-center gap-1.5 text-xs font-medium uppercase tracking-wide text-slate-500">
              <Wind className="h-3.5 w-3.5" />
              Wind
            </div>
            <p className="text-lg font-semibold text-slate-900">12 mph NW</p>
            <p className="text-xs text-slate-500">Gusts up to 18 mph</p>
          </div>

          {/* Visibility */}
          <div>
            <div className="mb-1 flex items-center gap-1.5 text-xs font-medium uppercase tracking-wide text-slate-500">
              <Eye className="h-3.5 w-3.5" />
              Visibility
            </div>
            <p className="text-lg font-semibold text-slate-900">9 mi</p>
            <p className="text-xs text-slate-500">Clear</p>
          </div>
        </div>
      </div>
    </div>
  );
}