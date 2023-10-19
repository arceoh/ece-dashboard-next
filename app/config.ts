const BASE_URL =
  process.env.NODE_ENV === "production"
    ? process.env.NEXT_PUBLIC_API_URL!
    : "http://localhost:3000";

const MONGODB_URI =
  process.env.NODE_ENV === "production"
    ? process.env.MONGODB_URI!
    : process.env.MONGODB_URI_DEV!;

export { BASE_URL, MONGODB_URI };
