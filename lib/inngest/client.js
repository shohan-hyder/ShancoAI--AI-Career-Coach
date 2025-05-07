import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "shancoai", // Unique app ID
  name: "Shanco AI", // App name
  credentials: {
    gemini: {
      apiKey: process.env.GEMINI_API_KEY,
    },
  },
});
