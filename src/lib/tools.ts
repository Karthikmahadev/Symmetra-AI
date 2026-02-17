export async function getWeather(location: string) {
  const apiKey = process.env.OPENWEATHER_API_KEY;
  console.log("OPENWEATHER_API_KEY:", process.env.OPENWEATHER_API_KEY); // Debug
  if (!apiKey) throw new Error("OPENWEATHER_API_KEY not set in .env");

  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
        location
      )}&appid=${apiKey}&units=metric`
    );

    if (!res.ok) {
      const text = await res.text();
      throw new Error(`Weather fetch failed: ${text}`);
    }

    const data = await res.json();

    return {
      location: data.name,
      temperature: data.main.temp,
      condition: data.weather[0].main,
      humidity: data.main.humidity,
      wind: data.wind.speed,
    };
  } catch (err) {
    console.error("Weather API error:", err);
    return {
      location,
      temperature: null,
      condition: "Unavailable",
      humidity: null,
      wind: null,
    };
  }
}

export async function getF1Matches() {
  try {
    const res = await fetch("https://f1api.dev/api/current/next");

    if (!res.ok) {
      const text = await res.text();
      throw new Error(`F1 fetch failed: ${text}`);
    }

    const data = await res.json();
    const race = data.race?.[0];

    if (!race) {
      throw new Error("No upcoming F1 race found");
    }

    return {
      raceName: race.raceName || "Unknown Race",
      circuit: race.circuit?.circuitName || "Unknown Circuit",
      date: race.schedule?.race?.date || "Unknown Date",
      country: race.circuit?.country || "Unknown Country",
    };
  } catch (err: any) {
    console.error("F1 fetch error:", err.message);
    return {
      raceName: "Unavailable",
      circuit: "Unavailable",
      date: "Unavailable",
      country: "Unavailable",
    };
  }
}



export async function getStockPrice(symbol: string) {
  try {
    const res = await fetch(
      `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${process.env.ALPHAVANTAGE_API_KEY}`
    );

    if (!res.ok) {
      const text = await res.text();
      throw new Error(`Stock fetch failed: ${text}`);
    }

    const data = await res.json();
    const price = data["Global Quote"]?.["05. price"];

    if (!price) throw new Error("Invalid symbol or no data returned");

    return { symbol, price };
  } catch (err: any) {
    console.error("Stock fetch error:", err.message);
    throw err;
  }
}

