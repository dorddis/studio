// src/app/pricing/page.tsx
'use client';

import Link from 'next/link';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

export default function PricingPage() {
  return (
    <div className="flex flex-col items-center bg-gray-50 min-h-screen py-16 px-4 md:px-6">
      {/* Page Header */}
      <div className="max-w-3xl text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Flexible Data Bundles
        </h1>
        <p className="text-gray-600 text-lg">
          Choose the plan that perfectly fits your research scope. All datasets
          are audit-grade, compliance-ready, and delivered within 48 hours.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl">
        {/* State Bundle */}
        <Card className="group shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-semibold">State Bundle</CardTitle>
            <CardDescription className="text-gray-500 mt-1">
              ₹ 1,00,000 +
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">
              All Assembly Constituencies within a specific state. Pricing
              scales with population and complexity. Data sourced from
              <strong>1 million+</strong> official PDFs.
            </p>
          </CardContent>
          <CardFooter className="text-center">
            <Link href="/contact-sales">
              <Button className="w-full group-hover:scale-105 transition-transform">
                Request Quote
              </Button>
            </Link>
          </CardFooter>
        </Card>

        {/* District Bundle */}
        <Card className="group shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-semibold">District Bundle</CardTitle>
            <CardDescription className="text-gray-500 mt-1">
              ₹ 50,000 +
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">
              All Assembly Constituencies within a specific district. Ideal
              for hyper-local market studies and pilot projects.
            </p>
          </CardContent>
          <CardFooter className="text-center">
            <Link href="/contact-sales">
              <Button className="w-full group-hover:scale-105 transition-transform">
                Request Quote
              </Button>
            </Link>
          </CardFooter>
        </Card>

        {/* Custom Bundle */}
        <Card className="group shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-semibold">Custom Bundle</CardTitle>
            <CardDescription className="text-gray-500 mt-1">
              ₹ 25,000 +
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">
              Hand-pick any 5 Assembly Constituencies of your choice. Perfect
              for targeted research or quick pilots.
            </p>
          </CardContent>
          <CardFooter className="text-center">
            <Link href="/contact-sales">
              <Button className="w-full group-hover:scale-105 transition-transform">
                Request Quote
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
