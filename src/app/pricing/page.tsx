// src/app/pricing/page.tsx
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function PricingPage() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Pricing</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700">
            Details about data package pricing, custom quotes, etc., will go here.
          </p>
          {/* Add pricing tables or contact forms as needed */}
        </CardContent>
      </Card>
    </div>
  );
}
