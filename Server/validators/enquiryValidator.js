
export const validateEnquiry = (body) => {
  if (
    !body ||
    typeof body !== "object" ||
    Array.isArray(body)
  ) {
    return {
      valid: false,
      error: "Invalid request body",
    };
  }

  const fields = [
    ["name", 2, 80],
    ["email", 5, 120],
    ["phone", 10, 10],
    ["service", 2, 120],
    ["area", 2, 120],
    ["message", 1, 1500],
  ];

  const data = {};

  for (const [key, min, max] of fields) {
    const value = body[key];

    if (
      typeof value !== "string" ||
      value.trim().length < min ||
      value.trim().length > max
    ) {
      return {
        valid: false,
        error: `Invalid ${key}`,
      };
    }

    data[key] = value.trim();
  }

  const emailRegex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(data.email)) {
    return {
      valid: false,
      error: "Please enter a valid email",
    };
  }

  const phoneRegex = /^[6-9]\d{9}$/;

  if (!phoneRegex.test(data.phone)) {
    return {
      valid: false,
      error: "Enter a valid 10-digit Indian mobile number",
    };
  }

  data.email = data.email.toLowerCase();

  data.source =
    typeof body.source === "string" &&
    body.source.trim().length > 0
      ? body.source.trim().slice(0, 60)
      : "contact-page";

  return {
    valid: true,
    data,
  };
};
