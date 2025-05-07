'use client';

import { useEffect, useState } from 'react';
import { Button } from './button';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) setVisible(true);
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'true');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full z-50 bg-gray-900 text-white px-4 py-3 flex flex-col md:flex-row items-center justify-between shadow-lg">
      <span className="mb-2 md:mb-0">This website uses cookies to enhance the user experience. By using our site, you agree to our <a href="/privacy-policy" className="underline text-blue-300">Privacy Policy</a>.</span>
      <Button onClick={acceptCookies} className="ml-0 md:ml-4 mt-2 md:mt-0">Accept</Button>
    </div>
  );
} 