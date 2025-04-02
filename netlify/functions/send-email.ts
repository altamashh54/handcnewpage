declare global {
  namespace NodeJS {
    interface ProcessEnv {
      EMAILJS_PUBLIC_KEY: string;
      EMAILJS_PRIVATE_KEY: string;
      EMAILJS_SERVICE_ID: string;
      EMAILJS_TEMPLATE_ID: string;
    }
  }
}

import { Handler } from "@netlify/functions";
import emailjs from "@emailjs/nodejs";

// Initialize with your EmailJS credentials - ADD TYPE ASSERTIONS HERE
emailjs.init({
  publicKey: process.env.EMAILJS_PUBLIC_KEY as string,
  privateKey: process.env.EMAILJS_PRIVATE_KEY as string,
});

export const handler: Handler = async (event) => {
  try {
    // Only allow POST requests
    if (event.httpMethod !== "POST") {
      return { statusCode: 405, body: "Method Not Allowed" };
    }

    const data = JSON.parse(event.body || "{}");
    const { name, email, phone, weddingDate, message } = data;

    // Send the welcome email - ADD TYPE ASSERTIONS HERE TOO
    const emailResponse = await emailjs.send(
      process.env.EMAILJS_SERVICE_ID as string,
      process.env.EMAILJS_TEMPLATE_ID as string,
      {
        to_name: name,
        to_email: email,
        phone: phone,
        wedding_date: weddingDate || "Not specified",
        message: message || "No message provided",
      }
    );

    console.log("Email sent successfully:", emailResponse);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Welcome email sent successfully!" }),
    };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to send email" }),
    };
  }
};
