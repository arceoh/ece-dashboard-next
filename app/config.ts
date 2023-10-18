const BASE_URL =
  process.env.NODE_ENV === "production"
    ? process.env.NEXT_PUBLIC_API_URL!
    : "http://localhost:3000";

export { BASE_URL };
