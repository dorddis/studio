// src/app/about/page.tsx
'use client';

import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className="flex flex-col bg-gray-50 text-gray-800">
      <div className="container mx-auto py-8 px-4 md:px-6">
        <Card className="max-w-3xl mx-auto">
          <CardHeader>
            <CardTitle className="text-3xl font-bold">About Us</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              VoterData Insights was born from a simple yet powerful idea: that every market-research project deserves an unbiased, audit-grade sample frame. We witnessed how traditional sampling methods often fall short—introducing hidden biases, triggering audit risks, and undermining client confidence. Driven by a commitment to integrity, we set out to transform publicly available voter lists into truly random, constituency-level datasets.
            </p>
            <p className="text-gray-700 mb-4">
              Our platform leverages automated extraction pipelines and secure storage to convert millions of PDF pages into clean, structured data. By making this resource accessible, we empower research firms to focus on what they do best—crafting insights—rather than wrestling with manual data wrangling. Every record we serve supports more reliable conclusions, stronger client relationships, and higher project valuations.
            </p>
            <p className="text-gray-700">
              At VoterData Insights, we believe that better data leads to better decisions—across campaigns, consumer studies, and policy research. We're proud to fuel responsible research with technology designed for social good. Thank you for partnering with us on this mission: together, we're raising the bar for data quality and driving positive impact in communities nationwide.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
