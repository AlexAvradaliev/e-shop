import { NextResponse }
from 'next/server';

import { auth }
from '@/lib/auth';

export default auth((req) => {
  const isAdminRoute =
    req.nextUrl.pathname.startsWith(
      '/admin'
    );

  if (
    isAdminRoute &&
    req.auth?.user?.role !==
      'ADMIN'
  ) {
    return NextResponse.redirect(
      new URL('/', req.url)
    );
  }
});

export const config = {
  matcher: ['/admin/:path*'],
};