import React from "react";
import { AIResponse } from "@/types/ai";
import { Flag, MapPin, Calendar } from "lucide-react";

interface F1CardProps {
  data: Extract<AIResponse, { type: "f1" }>;
}

const F1Card: React.FC<F1CardProps> = ({ data }) => {
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
       
        <div style={{ height: 3, background: "linear-gradient(to right, #e10600, #ff4d4d, transparent)" }} />
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
              Formula 1
            </p>
            <h2
              style={{
                fontSize: 22,
                fontWeight: 700,
                color: "#f5f5f5",
                letterSpacing: "-0.02em",
                fontFamily: "'DM Serif Display', serif",
                lineHeight: 1.2,
                maxWidth: 240,
              }}
            >
              {data.raceName}
            </h2>
          </div>
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 12,
              background: "#2a1a1a",
              border: "1px solid #3a1a1a",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <Flag size={20} color="#e10600" />
          </div>
        </div>

        {/* Details */}
        <div style={{ padding: "18px 24px 22px", display: "flex", flexDirection: "column", gap: 14 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: 8,
                background: "#242424",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <MapPin size={14} color="#888" />
            </div>
            <div>
              <p style={{ fontSize: 10, color: "#555", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 2 }}>Circuit</p>
              <p style={{ fontSize: 14, color: "#e0e0e0", fontWeight: 500 }}>{data.circuit}</p>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: 8,
                background: "#242424",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <Calendar size={14} color="#888" />
            </div>
            <div>
              <p style={{ fontSize: 10, color: "#555", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 2 }}>Date</p>
              <p style={{ fontSize: 14, color: "#e0e0e0", fontWeight: 500 }}>{data.date}</p>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: 8,
                background: "#242424",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                fontSize: 15,
              }}
            >
              🏁
            </div>
            <div>
              <p style={{ fontSize: 10, color: "#555", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 2 }}>Country</p>
              <p style={{ fontSize: 14, color: "#e0e0e0", fontWeight: 500 }}>{data.country}</p>
            </div>
          </div>
          <div style={{ height: 1, background: "linear-gradient(to right, #2e2e2e, transparent)", marginTop: 4 }} />
          <p style={{ fontSize: 11, color: "#444" }}>Live race data · Symmetri AI</p>
        </div>
      </div>
    </>
  );
};

export default F1Card;