// middleware.ts
import { auth } from './auth';

const protectedRoutes = ['/admin'];
const unprotectedRoutes = ['/auth/login', '/auth/register'];

export default auth((req) => {
  const isProtectedRoute = protectedRoutes.some((prefix) =>
    req.nextUrl.pathname.startsWith(prefix)
  );

  if (!req.auth && isProtectedRoute) {
    const callbackUrl = req.nextUrl.pathname;
    const signInURL = new URL('/auth/login', req.nextUrl.origin);
    signInURL.searchParams.set('callbackUrl', callbackUrl); // Include the callback URL
    return Response.redirect(signInURL.toString());
  }
});

export const config = {
  matcher: ['/((?!api|login|register|_next/static|_next/image|favicon.ico).*)'],
};
