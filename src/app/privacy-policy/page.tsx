// src/app/privacy-policy/page.tsx
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Privacy Policy</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-sm max-w-none">
          {/* Replace with your actual Privacy Policy content */}
          <h2>1. Introduction</h2>
          <p>Welcome to VoterData Insights. We are committed to protecting your privacy...</p>
          <h2>2. Data Collection</h2>
          <p>Details on what data is collected...</p>
          <h2>3. Data Usage</h2>
          <p>How the collected data is used...</p>
          {/* Add all sections of your policy */}
        </CardContent>
      </Card>
    </div>
  );
}
