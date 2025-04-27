"use client";

import React, {useState, useEffect, useRef, useCallback} from 'react';
import {VoterDataRow, getVoterData} from '@/services/voter-data-api';
import {Button} from '@/components/ui/button';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from '@/components/ui/select';
import {Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow} from '@/components/ui/table';
import {cn} from '@/lib/utils';
import {useToast} from "@/hooks/use-toast";
import { SparklesIcon, MapIcon, PackageIcon } from 'lucide-react';

interface StateConstituency {
  state: string;
  constituencies: string[];
}

const stateConstituencies: StateConstituency[] = [
  {
    state: "Delhi",
    constituencies: ["NERELA", "Burari", "Timarpur", "Adarsh Nagar", "Badli"],
  },
  {
    state: "Haryana",
    constituencies: ["Faridabad", "Gurugram", "Sonipat", "Panipat", "Karnal"],
  },
  {
    state: "Punjab",
    constituencies: ["Amritsar", "Ludhiana", "Jalandhar", "Patiala", "Bathinda"],
  },
];

const FeatureCard = ({title, description, icon}: {title: string, description: string, icon: React.ReactNode}) => (
  <Card className="scale-up-on-hover">
    <CardHeader>
      <CardTitle className="flex items-center">{icon} {title}</CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription>{description}</CardDescription>
    </CardContent>
  </Card>
);

const PricingCard = ({plan}: {plan: string}) => (
  <Card className="scale-up-on-hover">
    <CardHeader>
      <CardTitle>{plan}</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-muted-foreground">Price Placeholder</p>
      <Button className="w-full">Request Quote</Button>
    </CardContent>
  </Card>
);

const HowItWorksStep = ({step, description}: {step: number, description: string}) => (
  <div className="flex flex-col items-center">
    <div className="rounded-full bg-primary text-primary-foreground w-8 h-8 flex items-center justify-center mb-2">{step}</div>
    <p className="text-center">{description}</p>
  </div>
);

export default function Home() {
  const [voterData, setVoterData] = useState<VoterDataRow[]>([]);
  const [selectedState, setSelectedState] = useState<string>("Delhi");
  const [selectedConstituency, setSelectedConstituency] = useState<string>("NERELA");
  const [loading, setLoading] = useState(false);
  const {toast} = useToast();
  const tableRef = useRef(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const data = await getVoterData(selectedState, selectedConstituency);
      setVoterData(data);
      toast({
        title: "Data Loaded",
        description: "Voter data fetched successfully.",
      });
    } catch (error) {
      console.error("Error fetching data:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to fetch voter data.",
      });
    } finally {
      setLoading(false);
    }
  }, [selectedState, selectedConstituency, toast]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Intersection Observer for fade-in-slide-up animation
  const observer = useRef<IntersectionObserver | null>(null);
  const sectionTitleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            sectionTitleRef.current?.classList.add('in-view');
            observer.current?.disconnect();
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    if (sectionTitleRef.current) {
      observer.current.observe(sectionTitleRef.current);
    }

    return () => {
      observer.current?.disconnect();
    };
  }, []);

  const handleStateChange = (state: string) => {
    setSelectedState(state);
    // Reset constituency when state changes
    const defaultConstituency = stateConstituencies.find((sc) => sc.state === state)?.constituencies[0] || "";
    setSelectedConstituency(defaultConstituency);
  };

  const constituencies = stateConstituencies.find(sc => sc.state === selectedState)?.constituencies || [];

  return (
    <div className="container mx-auto py-12">

      {/* Hero Section */}
      <section className="mb-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Unlock India’s Constituency-Level Voter Data</h1>
        <p className="text-lg text-muted-foreground mb-8">Pure-random sampling frames, pre-parsed and ready for your research.</p>
        <Button className="scale-up-on-hover">See a Live Sample</Button>
      </section>

      {/* Features Section */}
      <section className="mb-16">
        <h2 ref={sectionTitleRef} className="text-3xl font-semibold mb-8 fade-in-slide-up">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard
            title="Nationwide Coverage"
            description="All 543 Lok Sabha & 4,122 Assembly Constituencies"
            icon={<MapIcon className="mr-2 h-5 w-5 text-primary" />}
          />
          <FeatureCard
            title="True Random Sampling"
            description="Extracted direct from official PDFs for audit-grade rigor."
            icon={<SparklesIcon className="mr-2 h-5 w-5 text-primary" />}
          />
          <FeatureCard
            title="Flexible Bundles"
            description="State, constituency or district-level packs, choose what you need."
            icon={<PackageIcon className="mr-2 h-5 w-5 text-primary" />}
          />
        </div>
      </section>

      {/* Live Data Preview Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 fade-in-slide-up">Live Data Preview</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-4">
          <Select onValueChange={handleStateChange}>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Select State" />
            </SelectTrigger>
            <SelectContent>
              {stateConstituencies.map((sc) => (
                <SelectItem key={sc.state} value={sc.state}>{sc.state}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select onValueChange={setSelectedConstituency}>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Select Constituency" />
            </SelectTrigger>
            <SelectContent>
              {constituencies.map((constituency) => (
                <SelectItem key={constituency} value={constituency}>{constituency}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="overflow-x-auto">
          <Table ref={tableRef} className="min-w-full">
            <TableCaption>Sample is blurred/truncated to protect full data integrity.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>AC No.</TableHead>
                <TableHead>AC Name</TableHead>
                <TableHead>Part No.</TableHead>
                <TableHead>No. of Voters</TableHead>
                <TableHead>Cumulative</TableHead>
                <TableHead>Sample Index</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="highlight-on-hover">
              {loading ? (
                <TableRow>
                  <TableCell colSpan={6} className="text-center">Loading data...</TableCell>
                </TableRow>
              ) : (
                voterData.map((row, index) => (
                  <TableRow key={index} className="transition-opacity duration-500 ease-in-out">
                    <TableCell>{row.acNo}</TableCell>
                    <TableCell>{row.acName}</TableCell>
                    <TableCell>{row.partNo}</TableCell>
                    <TableCell>{row.noOfVoters}</TableCell>
                    <TableCell>{row.cumulative}</TableCell>
                    <TableCell>{row.sampleIndex}</TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center fade-in-slide-up">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <HowItWorksStep step={1} description="Download voter PDF →"/>
          <HowItWorksStep step={2} description="Extract & normalize into MongoDB →"/>
          <HowItWorksStep step={3} description="Organize by constituency & part →"/>
          <HowItWorksStep step={4} description="Deliver via secure API or CSV"/>
        </div>
      </section>

      {/* Pricing & Bundles Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center fade-in-slide-up">Pricing &amp; Bundles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <PricingCard plan="State Bundle - All ACs in a state"/>
          <PricingCard plan="District Bundle - All ACs in a district"/>
          <PricingCard plan="Custom Bundle - Pick any 5 ACs"/>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="text-center text-muted-foreground">
        <nav className="mb-4">
          <a href="#" className="mx-2 hover:underline">About</a>
          <a href="#" className="mx-2 hover:underline">Contact</a>
          <a href="#" className="mx-2 hover:underline">Privacy Policy</a>
        </nav>
        <p>© 2025 VoterData Insights</p>
      </footer>
    </div>
  );
}
