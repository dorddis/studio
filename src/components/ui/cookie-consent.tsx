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
    localStorage.setItem('cookie-consent', 'accepted');
    setVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full z-50 bg-gray-900 text-white px-4 py-3 flex flex-col md:flex-row items-center justify-between shadow-lg">
      <span className="mb-2 md:mb-0">This website uses cookies to enhance the user experience. By using our site, you agree to our <a href="/privacy-policy" className="underline text-blue-300">Privacy Policy</a>.</span>
      <div className="flex gap-2 ml-0 md:ml-4 mt-2 md:mt-0">
        <Button onClick={acceptCookies}>Accept</Button>
        <Button onClick={declineCookies} className="border border-white text-white bg-transparent hover:bg-gray-800">Decline</Button>
      </div>
    </div>
  );
} 