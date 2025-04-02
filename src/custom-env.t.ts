declare namespace NodeJS {
  interface ProcessEnv {
    EMAILJS_PUBLIC_KEY: string;
    EMAILJS_PRIVATE_KEY: string;
    EMAILJS_SERVICE_ID: string;
    EMAILJS_TEMPLATE_ID: string;
  }
}