// pages/_middleware.js
import { NextResponse } from 'next/server';

export function middleware(req) {
  const { hostname } = req.nextUrl;
  const subdomain = hostname.split('.')[0];

  // You can perform any necessary checks or lookups for the subdomain here
  if (subdomain && subdomain !== 'www' && subdomain !== 'localhost') {
    req.nextUrl.pathname = `/_company/${subdomain}${req.nextUrl.pathname}`;
  }

  return NextResponse.rewrite(req.nextUrl);
}
