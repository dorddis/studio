import Link from 'next/link'; // Import Link
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { CheckCircle, Database, Target, Zap, Map, Shuffle, Package, ArrowRight, BarChart, Users, LocateFixed } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="w-full py-20 md:py-28 lg:py-36 xl:py-48 bg-white border-b border-gray-200">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-8 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_650px]">
            <div className="flex flex-col justify-center space-y-6">
              <div className="space-y-3">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-gray-900">
                  Unlock India’s Constituency-Level Voter Data
                </h1>
                <p className="max-w-[650px] text-gray-600 md:text-xl">
                  Pure-random sampling frames, pre-parsed and ready for your market research, political analysis, and outreach campaigns. Access audit-grade data extracted directly from official sources.
                </p>
              </div>
              <div className="flex flex-col gap-3 min-[400px]:flex-row">
                <Link href="/download-sample" passHref legacyBehavior>
                  <Button asChild size="lg" className="bg-[#0070f3] text-white hover:bg-[#0056d1] hover:scale-[1.03] hover:shadow-md transition-transform duration-200 ease-in-out flex items-center gap-2">
                    <a>
                       See a Live Sample <ArrowRight size={18} />
                    </a>
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center p-6 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg shadow-inner">
               <Database size={250} className="text-[#0070f3] opacity-20" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">The Foundation for Reliable Insights</h2>
            <p className="max-w-[750px] text-gray-600 md:text-lg">
              Our meticulously prepared voter database provides the accuracy and coverage you need.
            </p>
          </div>
          <div className="mx-auto grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
            <Card className="shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col">
              <CardHeader className="flex flex-row items-center gap-4 pb-4">
                 <div className="bg-[#0070f3] p-3 rounded-full"> <Map size={24} className="text-white" /></div>
                <CardTitle className="text-xl font-semibold text-gray-900">Nationwide Coverage</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-gray-600">Access data across all 543 Lok Sabha & 4,122 Assembly Constituencies. Unparalleled reach for comprehensive analysis.</p>
              </CardContent>
            </Card>
            <Card className="shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col">
              <CardHeader className="flex flex-row items-center gap-4 pb-4">
                 <div className="bg-[#0070f3] p-3 rounded-full"> <Shuffle size={24} className="text-white" /></div>
                <CardTitle className="text-xl font-semibold text-gray-900">True Random Sampling</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-gray-600">Extracted directly from official electoral roll PDFs for audit-grade rigor. Ensure statistically sound sampling frames.</p>
              </CardContent>
            </Card>
             <Card className="shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col">
              <CardHeader className="flex flex-row items-center gap-4 pb-4">
                 <div className="bg-[#0070f3] p-3 rounded-full"> <Package size={24} className="text-white" /></div>
                <CardTitle className="text-xl font-semibold text-gray-900">Flexible Bundles</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-gray-600">Choose exactly what you need: state-level, specific constituency, or district-level packs available.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">From Official Rolls to Actionable Data</h2>
            <p className="max-w-[750px] text-gray-600 md:text-lg">
              Our process ensures data integrity and usability every step of the way.
            </p>
          </div>
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="absolute hidden md:block top-1/2 left-0 right-0 border-t-2 border-dashed border-gray-300 transform -translate-y-1/2 -z-10" style={{width: 'calc(100% - 10rem)', margin: '0 5rem'}}></div>
            <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-sm relative">
               <div className="absolute -top-4 bg-[#0070f3] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
              <Zap size={40} className="text-[#0070f3] mb-4 mt-4"/>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">PDF Extraction</h3>
              <p className="text-sm text-gray-600">Automated parsing of official, scanned electoral roll PDFs.</p>
            </div>
             <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-sm relative">
              <div className="absolute -top-4 bg-[#0070f3] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
              <CheckCircle size={40} className="text-[#0070f3] mb-4 mt-4"/>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Data Cleansing & Validation</h3>
              <p className="text-sm text-gray-600">Standardization, verification, and enrichment processes.</p>
            </div>
             <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-sm relative">
              <div className="absolute -top-4 bg-[#0070f3] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
              <Database size={40} className="text-[#0070f3] mb-4 mt-4"/>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Delivery (API/CSV)</h3>
              <p className="text-sm text-gray-600">Access data programmatically or via downloadable files.</p>
            </div>
          </div>
        </div>
      </section>

       {/* Use Cases Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
             <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">Powering Diverse Research Needs</h2>
            <p className="max-w-[750px] text-gray-600 md:text-lg">
              See how market research firms, political strategists, and academic institutions leverage our data.
            </p>
          </div>
          <div className="mx-auto grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
            <Card className="border-l-4 border-[#0070f3] shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardHeader className="pb-3">
                <BarChart size={28} className="text-[#0070f3] mb-2" />
                <CardTitle className="text-lg font-semibold text-gray-900">Market Segmentation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">Identify and profile specific voter demographics within constituencies for targeted product or service research.</p>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-[#0070f3] shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardHeader className="pb-3">
                 <Users size={28} className="text-[#0070f3] mb-2" />
                <CardTitle className="text-lg font-semibold text-gray-900">Political Campaign Strategy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">Develop data-driven outreach plans, understand voter sentiment shifts, and optimize resource allocation.</p>
              </CardContent>
            </Card>
             <Card className="border-l-4 border-[#0070f3] shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardHeader className="pb-3">
                 <LocateFixed size={28} className="text-[#0070f3] mb-2" />
                <CardTitle className="text-lg font-semibold text-gray-900">Geo-Spatial Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">Correlate voter data with geographic factors, infrastructure development, or socio-economic indicators.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Data Preview Section */}
       <section className="w-full py-12 md:py-20 lg:py-28 bg-white">
         <div className="container px-4 md:px-6 mx-auto">
           <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
             <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">Preview the Data Granularity</h2>
             <p className="max-w-[700px] text-gray-600 md:text-lg">
               Get a glimpse of the detailed voter attributes available within the database. *(Sample data below)*
             </p>
           </div>
           <Card className="overflow-hidden shadow-md">
            <CardContent className="p-0">
             <Table>
               <TableHeader>
                 <TableRow className="bg-gray-100 hover:bg-gray-100">
                   <TableHead className="w-[150px] text-gray-700 font-semibold">Voter ID</TableHead>
                   <TableHead className="text-gray-700 font-semibold">Constituency</TableHead>
                   <TableHead className="text-gray-700 font-semibold">Age Group</TableHead>
                   <TableHead className="text-gray-700 font-semibold">Likely Affiliation</TableHead>
                   <TableHead className="text-right text-gray-700 font-semibold">Last Turnout</TableHead>
                 </TableRow>
               </TableHeader>
               <TableBody>
                 <TableRow className="hover:bg-gray-100 transition-colors duration-200">
                   <TableCell className="font-medium">VTR7401</TableCell>
                   <TableCell>North Central</TableCell>
                   <TableCell>35-44</TableCell>
                   <TableCell>Party B</TableCell>
                   <TableCell className="text-right">2023 General</TableCell>
                 </TableRow>
                 <TableRow className="hover:bg-gray-100 transition-colors duration-200">
                   <TableCell className="font-medium">VTR8823</TableCell>
                   <TableCell>Coastal East</TableCell>
                   <TableCell>18-24</TableCell>
                   <TableCell>Undecided</TableCell>
                   <TableCell className="text-right">None</TableCell>
                 </TableRow>
                 <TableRow className="hover:bg-gray-100 transition-colors duration-200">
                   <TableCell className="font-medium">VTR5150</TableCell>
                   <TableCell>Western Plains</TableCell>
                   <TableCell>55-64</TableCell>
                   <TableCell>Party A</TableCell>
                   <TableCell className="text-right">2023 General</TableCell>
                 </TableRow>
                  <TableRow className="hover:bg-gray-100 transition-colors duration-200">
                   <TableCell className="font-medium">VTR6009</TableCell>
                   <TableCell>North Central</TableCell>
                   <TableCell>45-54</TableCell>
                   <TableCell>Party B</TableCell>
                   <TableCell className="text-right">2021 Primary</TableCell>
                 </TableRow>
               </TableBody>
             </Table>
             </CardContent>
              <CardFooter className="p-4 bg-gray-50 text-center">
                <p className="text-sm text-gray-600 w-full">This is a small sample. Full datasets include many more fields and voters per constituency.</p>
              </CardFooter>
           </Card>
         </div>
       </section>

      {/* Call to Action Section */}
      {/* <section className="w-full py-16 md:py-24 lg:py-32 bg-[#0070f3]">
        <div className="container grid items-center justify-center gap-6 px-4 text-center md:px-6 mx-auto">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-white">Ready to Elevate Your Research?</h2>
            <p className="mx-auto max-w-[650px] text-blue-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Access the most comprehensive assembly-constituency voter data available. Explore a live sample or request a personalized consultation.
            </p>
          </div>
          <div className="mx-auto w-full max-w-md flex flex-col sm:flex-row gap-4 justify-center">
             <Link href="/download-sample" passHref legacyBehavior>
               <Button asChild size="lg" className="bg-white text-[#0070f3] hover:bg-gray-100 hover:scale-[1.03] hover:shadow-md transition-transform duration-200 ease-in-out flex-1">
                  <a> See a Live Sample </a>
               </Button>
             </Link>
              --- Updated Contact Sales Button with Link and Transitions ---
              <Link href="/contact-sales" passHref legacyBehavior>
                <Button asChild size="lg" className="bg-white text-[#0070f3] hover:bg-gray-100 hover:scale-[1.03] hover:shadow-md transition-transform duration-200 ease-in-out flex-1">
                  <a> Contact Sales </a>
                </Button>
              </Link>
          </div>
           <p className="text-xs text-blue-200 mt-4">
              TODO: Add documentation link 
              Or explore our <a href="#" className="underline underline-offset-2 hover:text-white">detailed documentation</a>.
            </p>
        </div>
      </section> */}
      
      <section className="py-12 sm:py-16 bg-white border-b border-gray-200">
        <div className="container px-4 sm:px-6 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div className="space-y-6">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl text-gray-900">
                Unlock India’s Constituency-Level Voter Data
              </h1>
              <p className="max-w-prose text-gray-600 text-base sm:text-lg md:text-xl">
                Pure-random sampling frames, pre-parsed and ready for your market research, political analysis, and outreach campaigns.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link href="/download-sample">
                  <Button className="w-full sm:w-auto bg-[#0070f3] text-white hover:bg-[#0056d1] transform hover:scale-105 transition">
                    See a Live Sample <ArrowRight size={18} />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="hidden md:flex items-center justify-center p-6 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg shadow-inner">
              <Database className="w-40 h-40 opacity-20" />
            </div>
          </div>
        </div>
      </section>


      {/* Footer Section */}
      <footer className="py-8 md:py-10 border-t border-gray-200 bg-white">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
             <p>&copy; ${new Date().getFullYear()} VoterData Insights. All rights reserved.</p>
             <nav className="flex gap-4 sm:gap-6 mt-4 md:mt-0 flex-wrap justify-center">
               {/* --- Updated Footer Links --- */}
               <Link href="/about" className="hover:text-[#0070f3] hover:underline">About</Link>
               <Link href="/pricing" className="hover:text-[#0070f3] hover:underline">Pricing</Link>
               <Link href="/contact" className="hover:text-[#0070f3] hover:underline">Contact</Link>
               <Link href="/privacy-policy" className="hover:text-[#0070f3] hover:underline">Privacy Policy</Link>
               <Link href="/terms-of-service" className="hover:text-[#0070f3] hover:underline">Terms of Service</Link>
             </nav>
        </div>
       </footer>
    </div>
  );
}
