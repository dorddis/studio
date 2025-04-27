"use client";

import Link from 'next/link';

export function Footer() {
  return (
    <footer className="py-8 md:py-10 border-t border-gray-200 bg-white">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} VoterData Insights. All rights reserved.</p>
        <nav className="flex gap-4 sm:gap-6 mt-4 md:mt-0 flex-wrap justify-center">
          <Link href="/about" className="hover:text-[#0070f3] hover:underline">About</Link>
          <Link href="/pricing" className="hover:text-[#0070f3] hover:underline">Pricing</Link>
          <Link href="/contact" className="hover:text-[#0070f3] hover:underline">Contact</Link>
          <Link href="/api-docs" className="hover:text-[#0070f3] hover:underline">API Documentation</Link>
          <Link href="/privacy-policy" className="hover:text-[#0070f3] hover:underline">Privacy Policy</Link>
          <Link href="/terms-of-service" className="hover:text-[#0070f3] hover:underline">Terms of Service</Link>
        </nav>
      </div>
    </footer>
  );
} 