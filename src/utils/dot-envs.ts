export const dotEnvs = {
  SERVICE: import.meta.env.DEV ? import.meta.env.VITE_SERVICE_ID : import.meta.env.SERVICE_ID,
  TEMPLATE: import.meta.env.DEV ? import.meta.env.VITE_TEMPLATE_ID : import.meta.env.TEMPLATE_ID,
  EMAILJS_PUBLIC_KEY: import.meta.env.DEV ? import.meta.env.VITE_EMAILJS_PUBLIC_KEY : import.meta.env.EMAILJS_PUBLIC_KEY
};
