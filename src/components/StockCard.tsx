import React from "react";
import { AIResponse } from "@/types/ai";
import { TrendingUp } from "lucide-react";

interface StockCardProps {
  data: Extract<AIResponse, { type: "stock" }>;
}

const StockCard: React.FC<StockCardProps> = ({ data }) => {
  const price = Number(data.price);
  const formatted = isNaN(price)
    ? data.price
    : price.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

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
          padding: 0,
          overflow: "hidden",
          boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
          fontFamily: "'DM Sans', sans-serif",
          width: "100%",
          maxWidth: 420,
        }}
      >
       
        <div
          style={{
            background: "linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 100%)",
            padding: "20px 24px 16px",
            borderBottom: "1px solid #2e2e2e",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div>
            <p style={{ fontSize: 11, color: "#666", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 4 }}>
              Stock Quote
            </p>
            <h2
              style={{
                fontSize: 28,
                fontWeight: 700,
                color: "#f5f5f5",
                letterSpacing: "-0.02em",
                fontFamily: "'DM Serif Display', serif",
              }}
            >
              {data.symbol}
            </h2>
          </div>
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 12,
              background: "#2e2e2e",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TrendingUp size={20} color="#6ee7b7" />
          </div>
        </div>

        <div style={{ padding: "20px 24px 24px" }}>
          <p style={{ fontSize: 11, color: "#555", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 6 }}>
            Current Price
          </p>
          <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
            <span
              style={{
                fontSize: 36,
                fontWeight: 700,
                color: "#6ee7b7",
                letterSpacing: "-0.03em",
                fontFamily: "'DM Serif Display', serif",
              }}
            >
              ${formatted}
            </span>
            <span style={{ fontSize: 13, color: "#555" }}>USD</span>
          </div>

          <div
            style={{
              marginTop: 18,
              height: 1,
              background: "linear-gradient(to right, #2e2e2e, transparent)",
            }}
          />
          <p style={{ marginTop: 12, fontSize: 11, color: "#444" }}>
            Live market data · Symmetri AI
          </p>
        </div>
      </div>
    </>
  );
};

export default StockCard;