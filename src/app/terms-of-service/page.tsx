// src/app/terms-of-service/page.tsx
'use client';

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function TermsOfServicePage() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Terms of Service</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-2">1. Acceptance of Terms</h2>
            <p>By accessing or using our website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold mb-2">2. Use of Services</h2>
            <p>You agree to use our services only for lawful purposes and in accordance with these terms. You may not use our services to violate any laws or infringe on the rights of others.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold mb-2">3. Intellectual Property</h2>
            <p>All content, trademarks, and data on this site are the property of VoterData Insights or its licensors. You may not use, reproduce, or distribute any content without our written permission.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold mb-2">4. Disclaimers</h2>
            <p>Our services are provided "as is" without warranties of any kind. We do not guarantee the accuracy, completeness, or reliability of any content or data provided.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold mb-2">5. Limitation of Liability</h2>
            <p>VoterData Insights is not liable for any damages arising from your use of our services or website.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold mb-2">6. Changes to Terms</h2>
            <p>We may update these Terms of Service at any time. Continued use of our services constitutes acceptance of the updated terms.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold mb-2">7. Contact</h2>
            <p>If you have any questions about these Terms of Service, please contact us at <a href="mailto:contact@edownloaders.com" className="text-blue-600 underline">contact@edownloaders.com</a>.</p>
          </section>
        </CardContent>
      </Card>
    </div>
  );
}
