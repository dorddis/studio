// src/app/contact/page.tsx
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function ContactPage() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Contact Us</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700">
            General contact information, a contact form, or details on how to reach support/sales will go here.
          </p>
          {/* Add contact form or details */}
        </CardContent>
      </Card>
    </div>
  );
}
