export type AIResponse =
  | {
      role: string;
      type: "text";
      text: string;
    }
  | {
      type: "weather";
      location: string;
      temperature: number;
      condition: string;
      humidity: number;
      wind: number;
    }
  | {
      type: "f1";
      raceName: string;
      circuit: string;
      date: string;
      country: string;
    }
  | {
      type: "stock";
      symbol: string;
      price: string;
    };
