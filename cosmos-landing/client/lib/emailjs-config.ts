// EmailJS Configuration
// Get these values from your EmailJS dashboard: https://dashboard.emailjs.com/
// 1. Go to Integration > API Keys to get your Public Key
// 2. Go to Email Services to get your Service ID
// 3. Go to Email Templates to get your Template ID

export const EMAILJS_CONFIG = {
  // Your EmailJS Public Key (found in Integration > API Keys)
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "m66yXPmNcjX-t4xKf",
  
  // Your EmailJS Service ID (found in Email Services)
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_6gupzde",
  
  // Your EmailJS Template ID (found in Email Templates)
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_owyq72a",
  
  // Email address where you want to receive messages
  TO_EMAIL: "inspiredomkar@gmail.com",
};

