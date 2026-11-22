const apiBaseUrl = import.meta.env.VITE_API_URL?.trim().replace(/\/+$/, "");

export const ENQUIRY_API_URL =
  import.meta.env.VITE_ENQUIRY_API_URL?.trim() ||
  (apiBaseUrl ? `${apiBaseUrl}/api/enquiries` : "/api/enquiries");
