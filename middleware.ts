import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Define public routes, including "/api/webhook"
const isPublicRoute = createRouteMatcher([
  "/",
  "/sign-in(.*)",
  "/sign-up(.*)",
  "/api/webhook",  // Make it public
]);

export default clerkMiddleware((auth, request) => {
  const pathname = request.nextUrl.pathname;

  // Ignore authentication and any processing for /api/webhook
  if (pathname === "/api/webhook") {
    return; // Completely bypass authentication and middleware logic
  }

  // Apply authentication for non-public routes
  if (!isPublicRoute(pathname)) {
    auth().protect();
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and static files
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Ensure middleware runs for API and TRPC routes
    "/(api|trpc)(.*)",
  ],
};
