// src/app/privacy-policy/page.tsx
'use client';

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Privacy Policy</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-2">1. Information We Collect</h2>
            <p>We collect personal information you provide, such as your name, email address, company, and any other details you submit through our contact forms or services.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold mb-2">2. How We Use Your Information</h2>
            <p>Your information is used to respond to inquiries, provide services, improve our offerings, and communicate important updates. We do not sell or share your data with third parties except as required by law or to provide our services.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold mb-2">3. Data Security</h2>
            <p>We implement industry-standard security measures to protect your data. However, no method of transmission over the Internet is 100% secure.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold mb-2">4. Your Rights</h2>
            <p>You have the right to access, update, or delete your personal information. To exercise these rights, please contact us at <a href="mailto:contact@edownloaders.com" className="text-blue-600 underline">contact@edownloaders.com</a>.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold mb-2">5. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold mb-2">6. Contact</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at <a href="mailto:contact@edownloaders.com" className="text-blue-600 underline">contact@edownloaders.com</a>.</p>
          </section>
        </CardContent>
      </Card>
    </div>
  );
}
