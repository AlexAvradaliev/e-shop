/** @type {import('next').NextConfig} */

const securityHeaders = [

  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },

  {
    key: 'Strict-Transport-Security',
    value:
      'max-age=63072000; includeSubDomains; preload',
  },

  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },

  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN',
  },

  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },

  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin',
  },

  {
    key: 'Permissions-Policy',
    value:
      'camera=(), microphone=(), geolocation=()',
  },

  {
    key: 'Content-Security-Policy',

    value: `
      default-src 'self';

      script-src
        'self'
        'unsafe-inline'
        'unsafe-eval'
        https://accounts.google.com
        https://apis.google.com;

      style-src
        'self'
        'unsafe-inline';

      img-src
        'self'
        data:
        blob:
        https:;

      font-src
        'self'
        data:;

      connect-src
        'self'
        https:;

      frame-src
        'self'
        https://accounts.google.com;

      object-src 'none';

      base-uri 'self';

      form-action 'self';

      frame-ancestors 'none';

      upgrade-insecure-requests;
    `
      .replace(/\n/g, '')
      .trim(),
  },
];



const nextConfig = {

  reactStrictMode: true,

  poweredByHeader: false,

  async headers() {

    return [

      {
        source: '/(.*)',

        headers: securityHeaders,
      },
    ];
  },
};



export default nextConfig;