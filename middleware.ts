import middleware from "next-auth/middleware"


export default middleware;

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/dashboard/:path*',
}