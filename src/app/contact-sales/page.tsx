'use client';

import { useEffect } from 'react';
import Head from 'next/head'; // Import Head for script loading
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

const CALENDLY_URL = 'https://calendly.com/dorddis/30min';

export default function ContactSalesPage() {

  useEffect(() => {
    // Load Calendly's embed script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    // Cleanup function to remove script when component unmounts
    return () => {
       // Check if script exists before trying to remove
       const existingScript = document.querySelector(`script[src="${script.src}"]`);
       if (existingScript && document.body.contains(existingScript)) {
          document.body.removeChild(existingScript);
       }
      // Optional: Clean up any Calendly widgets if necessary
      const widget = document.querySelector('.calendly-inline-widget');
      if (widget) widget.innerHTML = ''; // Clear content
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <>
      <Head>
        {/* Preload Calendly CSS */}
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
      </Head>
      <div className="flex flex-col items-center justify-start min-h-screen bg-gray-100 p-4 md:p-8">
        <Card className="w-full max-w-4xl shadow-lg overflow-hidden">
          <CardHeader className="text-center bg-gray-50 p-6">
            <CardTitle className="text-2xl md:text-3xl font-bold text-gray-800">Book a Consultation</CardTitle>
            <CardDescription className="text-gray-600 mt-2">
              Schedule a 30-minute meeting with us to discuss your data needs and explore solutions.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            {/* Calendly inline widget embed - Increased height and removed inner loader */}
            <div
              className="calendly-inline-widget w-full h-[90vh]" 
              data-url={CALENDLY_URL}
              style={{ backgroundColor: 'white', height: '90vh' }}
            >
              {/* Loader removed - Calendly script handles this */}
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
