import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Define protected routes
const isProtectedRoute = createRouteMatcher(["/", "/api/webhooks/clerk(.*)"]);

export default clerkMiddleware((auth, req, res) => {
  // Handle OPTIONS requests explicitly to avoid 404s
  if (req.method === "OPTIONS") {
    // @ts-ignore
    res.status(200).end();
    return;
  }

  // Apply authentication to protected routes
  if (isProtectedRoute(req)) {
    auth().protect();
  }
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
