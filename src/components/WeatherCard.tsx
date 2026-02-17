import { Droplets, Wind, CloudSun } from "lucide-react";
import React from "react";
import { AIResponse } from "@/types/ai";

interface WeatherCardProps {
  data: Extract<AIResponse, { type: "weather" }>;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ data }) => {
  const temp = Number(data.temperature);

  // Pick a subtle tint based on temperature
  const accentColor =
    temp >= 30 ? "#fb923c"   // hot — orange
    : temp >= 18 ? "#6ee7b7" // warm — mint
    : temp >= 8  ? "#93c5fd" // cool — blue
    : "#c4b5fd";             // cold — violet

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=DM+Sans:wght@400;500;600&display=swap"
        rel="stylesheet"
      />
      <div
        style={{
          background: "#1a1a1a",
          borderRadius: 20,
          overflow: "hidden",
          boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
          fontFamily: "'DM Sans', sans-serif",
          width: "100%",
          maxWidth: 420,
        }}
      >
        {/* Accent top stripe */}
        <div style={{ height: 3, background: `linear-gradient(to right, ${accentColor}, transparent)` }} />

        {/* Header */}
        <div
          style={{
            padding: "18px 24px 16px",
            borderBottom: "1px solid #2e2e2e",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
          }}
        >
          <div>
            <p style={{ fontSize: 10, color: "#666", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 5 }}>
              Weather
            </p>
            <h2
              style={{
                fontSize: 22,
                fontWeight: 700,
                color: "#f5f5f5",
                letterSpacing: "-0.02em",
                fontFamily: "'DM Serif Display', serif",
                lineHeight: 1.2,
              }}
            >
              {data.location}
            </h2>
          </div>
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 12,
              background: "#242424",
              border: `1px solid #2e2e2e`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <CloudSun size={22} color={accentColor} />
          </div>
        </div>

        {/* Temperature + condition */}
        <div style={{ padding: "20px 24px 0" }}>
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 4 }}>
              <span
                style={{
                  fontSize: 64,
                  fontWeight: 700,
                  color: accentColor,
                  letterSpacing: "-0.04em",
                  lineHeight: 1,
                  fontFamily: "'DM Serif Display', serif",
                }}
              >
                {data.temperature}
              </span>
              <span
                style={{
                  fontSize: 22,
                  fontWeight: 500,
                  color: "#555",
                  marginTop: 8,
                }}
              >
                °C
              </span>
            </div>

            <div style={{ textAlign: "right", paddingTop: 6 }}>
              <p style={{ fontSize: 10, color: "#555", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 4 }}>
                Condition
              </p>
              <p style={{ fontSize: 15, fontWeight: 600, color: "#e0e0e0" }}>{data.condition}</p>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div
          style={{
            margin: "16px 24px 22px",
            borderRadius: 12,
            background: "#242424",
            padding: "14px 16px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 0,
          }}
        >
          {/* Humidity */}
          <div style={{ borderRight: "1px solid #2e2e2e", paddingRight: 16 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 6 }}>
              <Droplets size={13} color="#555" />
              <span style={{ fontSize: 10, color: "#555", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                Humidity
              </span>
            </div>
            <p style={{ fontSize: 20, fontWeight: 700, color: "#e0e0e0", fontFamily: "'DM Serif Display', serif" }}>
              {data.humidity}
              <span style={{ fontSize: 13, fontWeight: 400, color: "#666", marginLeft: 2 }}>%</span>
            </p>
          </div>

          {/* Wind */}
          <div style={{ paddingLeft: 16 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 6 }}>
              <Wind size={13} color="#555" />
              <span style={{ fontSize: 10, color: "#555", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                Wind
              </span>
            </div>
            <p style={{ fontSize: 20, fontWeight: 700, color: "#e0e0e0", fontFamily: "'DM Serif Display', serif" }}>
              {data.wind}
              <span style={{ fontSize: 13, fontWeight: 400, color: "#666", marginLeft: 2 }}>m/s</span>
            </p>
          </div>
        </div>

        {/* Footer */}
        <div style={{ padding: "0 24px 16px" }}>
          <div style={{ height: 1, background: "linear-gradient(to right, #2e2e2e, transparent)", marginBottom: 10 }} />
          <p style={{ fontSize: 11, color: "#444" }}>Live weather data · Symmetri AI</p>
        </div>
      </div>
    </>
  );
};

export default WeatherCard;