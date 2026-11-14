import { NextResponse, type NextRequest } from "next/server";

/**
 * PREVIEW-ONLY bridge to a protected Birth Designer Preview deployment.
 *
 * Vercel Preview deployments of Birth Designer sit behind Vercel Authentication. A rewrite from this
 * site is a server-side request without the visitor's login cookie, so it would be redirected to the
 * Vercel login page. When (and only when) BIRTH_DESIGNER_PROTECTION_BYPASS is set — a Vercel
 * "Protection Bypass for Automation" secret of the Birth Designer project, stored ONLY as a
 * Preview-scoped environment variable of this project — this proxy rewrites /birth/* to
 * BIRTH_DESIGNER_ORIGIN and adds the bypass header to that server-side request. The header never
 * reaches the browser.
 *
 * Production never sets the variable: the function then does nothing, and the plain rewrites in
 * next.config.ts serve /birth from the Birth Designer production deployment.
 */
export function proxy(request: NextRequest) {
  const secret = process.env.BIRTH_DESIGNER_PROTECTION_BYPASS;
  const origin = process.env.BIRTH_DESIGNER_ORIGIN;
  if (!secret || !origin || process.env.VERCEL_ENV === "production") return NextResponse.next();
  const { pathname, search } = request.nextUrl;
  const headers = new Headers(request.headers);
  headers.set("x-vercel-protection-bypass", secret);
  return NextResponse.rewrite(new URL(`${pathname}${search}`, origin), { request: { headers } });
}

export const config = { matcher: ["/birth", "/birth/:path*"] };
