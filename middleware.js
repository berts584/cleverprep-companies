import { NextResponse } from 'next/server'

export function middleware(request) {
  const url = request.nextUrl.clone()
  const pathname = url.pathname
  
  // Skip middleware for Next.js internal routes and static files
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.') // Skip files with extensions
  ) {
    return NextResponse.next()
  }
  
  let needsRedirect = false
  let newPathname = pathname
  
  // 1. Remove trailing slash (except for root)
  if (pathname !== '/' && pathname.endsWith('/')) {
    newPathname = pathname.slice(0, -1)
    needsRedirect = true
  }
  
  // 2. Force lowercase URLs
  const lowercasePathname = newPathname.toLowerCase()
  if (newPathname !== lowercasePathname) {
    newPathname = lowercasePathname
    needsRedirect = true
  }
  
  // 3. Redirect if URL needs normalization
  if (needsRedirect) {
    url.pathname = newPathname
    return NextResponse.redirect(url, 301) // Permanent redirect
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (images, etc)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\..*$).*)',
  ],
}
