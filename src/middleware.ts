import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  const token = request.cookies.get('auth_token')

  // MOCK MODE: For demo purposes, accept any token
  // In production, this would verify with backend
  if (!token) {
    return NextResponse.redirect(new URL('http://localhost:3000', request.url))
  }

  // Mock verification - accept token if it exists
  // In production: verify with backend API
  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|mock-login).*)'],
}
