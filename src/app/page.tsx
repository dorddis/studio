"use client";

import React, {useState, useEffect, useRef, useCallback} from 'react';
import {VoterDataRow, getVoterData} from '@/services/voter-data-api';
import {Button} from '@/components/ui/button';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from '@/components/ui/select';
import {Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow} from '@/components/ui/table';
import {cn} from '@/lib/utils';
import {useToast} from "@/hooks/use-toast";
import { MapIcon, PackageIcon } from 'lucide-react';
import Image from 'next/image';

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
  {
    state: "Uttar Pradesh",
    constituencies: ["Lucknow East", "Kanpur", "Varanasi", "Prayagraj", "Agra"],
  },
  {
    state: "Maharashtra",
    constituencies: ["Mumbai South", "Pune", "Nagpur", "Thane", "Nashik"],
  },
  {
    state: "West Bengal",
    constituencies: ["Kolkata North", "Bardhaman-Durgapur", "Howrah", "Medinipur", "Barrackpore"],
  },
  {
    state: "Tamil Nadu",
    constituencies: ["Chennai Central", "Coimbatore", "Madurai", "Tiruchirappalli", "Tirunelveli"],
  },
  {
    state: "Karnataka",
    constituencies: ["Bangalore Central", "Mysore", "Dharwad", "Gulbarga", "Belgaum"],
  },
  {
    state: "Gujarat",
    constituencies: ["Ahmedabad East", "Surat", "Vadodara", "Rajkot", "Bhavnagar"],
  },
  {
    state: "Rajasthan",
    constituencies: ["Jaipur", "Jodhpur", "Kota", "Ajmer", "Udaipur"],
  },
];

const PricingCard = ({plan, price, description, onClick}: {plan: string, price: string, description: string, onClick: () => void}) => (
  <Card className="scale-up-on-hover">
    <CardHeader>
      <CardTitle>{plan}</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-2xl font-bold mb-2">{price}</p>
      <p className="text-muted-foreground mb-4">{description}</p>
      <Button className="w-full" onClick={onClick}>Request Quote</Button>
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

  const handleLiveSampleClick = () => {
      fetchData();
  };

  const handleRequestQuote = (plan: string) => {
    toast({
      title: "Request Sent",
      description: `Quote requested for ${plan}. We will get back to you soon.`,
    });
  };

  return (
    <div className="container mx-auto py-12">

      {/* Hero Section */}
      <section className="mb-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Unlock India’s Constituency-Level Voter Data</h1>
        <p className="text-lg text-muted-foreground mb-8">Pure-random sampling frames, pre-parsed and ready for your research. Gain unparalleled insights with our meticulously curated database.</p>
        <Button className="scale-up-on-hover" onClick={handleLiveSampleClick}>See a Live Sample</Button>
      </section>

      {/* Benefits of Pure Random Sampling */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 fade-in-slide-up">The Power of True Random Sampling</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="mb-4">In market research, the quality of your insights depends directly on the quality of your data. That's why we employ a <b>true random sampling</b> methodology. Unlike convenience sampling or other biased approaches, our data is extracted directly from official PDFs, ensuring every voter has an equal chance of being included.</p>
            <p className="mb-4"><b>Why is this important?</b> Pure random sampling eliminates selection bias, providing a representative snapshot of voter demographics and preferences within each Assembly Constituency (AC). This rigor is essential for market research companies that need reliable, audit-grade data to inform their analyses and predictions.</p>
              <p className="mb-4">
                  With over 1 Million+ PDFs processed, our methodology guarantees the highest level of accuracy and validity.
              </p>
          </div>
          <div>
            <Image
              src="https://picsum.photos/id/237/500/300"
              alt="Random Sampling Illustration"
              width={500}
              height={300}
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Nationwide Coverage */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 fade-in-slide-up">Nationwide Coverage: Data from Every Corner of India</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="mb-4">Our database covers <b>all 543 Lok Sabha and 4,122 Assembly Constituencies (ACs)</b> across India. This comprehensive coverage allows you to conduct granular market research, identify regional trends, and understand voter behavior at a local level. Whether you're interested in urban centers, rural areas, or specific demographic segments, our data provides the insights you need.</p>
            <p className="mb-4">By leveraging our nationwide coverage, market research firms can offer their clients unparalleled insights into the Indian electorate, enabling them to make data-driven decisions and gain a competitive edge.</p>
          </div>
          <div>
            <Image
              src="https://picsum.photos/id/42/500/300"
              alt="Nationwide Coverage Map"
              width={500}
              height={300}
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Flexible Bundles */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 fade-in-slide-up">Flexible Bundles: Tailored Data Solutions for Your Unique Needs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="mb-4">We understand that market research companies have diverse data requirements. That's why we offer <b>flexible bundles</b> that allow you to choose the data you need, without paying for what you don't. Our bundles include:</p>
            <ul className="list-disc pl-5 mb-4">
              <li><b>State Bundles:</b> Access all ACs within a specific state.</li>
              <li><b>District Bundles:</b> Access all ACs within a specific district.</li>
              <li><b>Custom Bundles:</b> Select any 5 ACs of your choice.</li>
            </ul>
            <p className="mb-4">Our flexible bundles empower market research firms to optimize their data investments and focus on the insights that matter most to their clients.</p>
          </div>
          <div>
            <Image
              src="https://picsum.photos/id/63/500/300"
              alt="Flexible Data Bundles"
              width={500}
              height={300}
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Assembly Constituency (AC) Explained */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 fade-in-slide-up">Understanding Assembly Constituencies (ACs)</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="mb-4">An <b>Assembly Constituency (AC)</b> is a specific geographic area within a state or union territory that elects a representative to the Legislative Assembly. These constituencies are the building blocks of Indian elections, and understanding their composition is crucial for accurate market research.</p>
            <p className="mb-4">Our data is meticulously organized by AC, providing you with a clear and structured view of voter demographics, preferences, and trends at the local level. This granular data allows you to identify key insights and tailor your research to specific geographic areas.</p>
          </div>
          <div>
            <Image
              src="https://picsum.photos/id/94/500/300"
              alt="Assembly Constituency Map"
              width={500}
              height={300}
              className="rounded-lg shadow-md"
            />
          </div>
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
            <TableCaption>Sample is blurred/truncated to protect full data integrity. The data displayed is a sample from the Assembly Constituency (AC), which represents a specific geographic area for elections.</TableCaption>
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
          <PricingCard
            plan="State Bundle"
            price="₹ 1 Lakh+"
            description="Access all Assembly Constituencies (ACs) within a specific state. Pricing varies based on state population and data complexity. Access data extracted from 1,000,000+ PDFs."
            onClick={() => handleRequestQuote("State Bundle")}
          />
          <PricingCard
            plan="District Bundle"
            price="₹ 50,000+"
            description="Access all ACs within a specific district. Ideal for localized market research. "
            onClick={() => handleRequestQuote("District Bundle")}
          />
          <PricingCard
            plan="Custom Bundle"
            price="₹ 25,000+"
            description="Select any 5 ACs of your choice. Perfect for targeted research needs."
            onClick={() => handleRequestQuote("Custom Bundle")}
          />
        </div>
          <p className="text-muted-foreground text-center mt-4">
              Note: Pricing is indicative and may vary. We process over 1 Million+ PDFs to generate this data. Contact us for a detailed quote based on your specific requirements.
          </p>
           <div className="flex justify-center mt-4">
            <Image
              src="https://picsum.photos/800/200" // Replace with your actual image URL
              alt="Placeholder Image"
              width={800} // Adjust as needed
              height={200} // Adjust as needed
              className="rounded-lg shadow-md"
            />
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
