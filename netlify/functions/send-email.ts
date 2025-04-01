import { Handler } from "@netlify/functions";

export const handler: Handler = async (event) => {
  try {
    const data = JSON.parse(event.body || "{}");

    // Simple response for testing
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Email function works!" }),
    };
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify({ error: "Internal Server Error" }) };
  }
};
