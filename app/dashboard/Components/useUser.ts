import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { BASE_URL } from "@/app/config";
import { getServerSession } from "next-auth/next";
import { headers } from "next/headers";
import { User } from "@/app/entities/User";

const getUser = async () => {
  const session = await getServerSession(authOptions);
  const headersInstance = new Headers(headers());

  const response = await fetch(`${BASE_URL}/api/users/${session!.user._id}`, {
    headers: headersInstance,
    cache: "no-cache",
    next: { tags: ["user"] },
  });
  const userData: User = await response.json();
  return userData;
};

export default getUser;
