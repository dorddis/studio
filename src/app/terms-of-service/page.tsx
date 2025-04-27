// src/app/terms-of-service/page.tsx
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function TermsOfServicePage() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Terms of Service</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-sm max-w-none">
          {/* Replace with your actual Terms of Service content */}
          <h2>1. Agreement to Terms</h2>
          <p>By accessing or using our services, you agree to be bound by these Terms...</p>
          <h2>2. Use License</h2>
          <p>Permission is granted to temporarily download one copy...</p>
          <h2>3. Disclaimer</h2>
          <p>The materials on VoterData Insights' website are provided on an 'as is' basis...</p>
          {/* Add all sections of your terms */}
        </CardContent>
      </Card>
    </div>
  );
}
