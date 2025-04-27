'use client';

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Download } from 'lucide-react';
// Placeholder for data fetching/handling library (like PapaParse for CSV)
// import Papa from 'papaparse';

// --- Updated Location Data (Sample) ---
// In a real app, fetch this from your API or a static file
const locations = {
  'Delhi': {
    'North Delhi': ['Burari', 'Narela', 'Adarsh Nagar'],
    'South Delhi': ['Mehrauli', 'Chhatarpur', 'Deoli'],
    'East Delhi': ['Trilokpuri', 'Kondli', 'Patparganj']
  },
  'Maharashtra': {
    'Mumbai City': ['Worli', 'Shivadi', 'Byculla'],
    'Pune': ['Vadgaon Sheri', 'Shivajinagar', 'Kothrud'],
    'Nagpur': ['Nagpur South West', 'Nagpur East', 'Nagpur North']
  },
  'Uttar Pradesh': {
      'Lucknow': ['Lucknow West', 'Lucknow North', 'Lucknow East'],
      'Varanasi': ['Varanasi North', 'Varanasi South', 'Varanasi Cantt.'],
      'Ghaziabad': ['Sahibabad', 'Ghaziabad', 'Loni']
  }
};

// --- Updated Function to Download the Specific Sample File ---
const downloadTruncatedExcel = (state: string, district: string, ac: string) => {
  console.log(`Attempting download for selection: ${state} > ${district} > ${ac}`);
  // Hardcoded filename and path as requested, since only one sample is available
  const filename = 'Delhi_NorthDelhi_Burari_sample.xlsx';
  const filePath = `/data/samples/${filename}`; // Path relative to the public folder

  console.log(`Triggering download for: ${filePath}`);

  // Create a link and click it to trigger download
  const link = document.createElement('a');
  link.href = filePath;
  link.download = filename; // Suggests the filename to the browser
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  alert(`Download initiated for the sample file: ${filename}.
Please check your downloads folder.
(Selection: ${state} > ${district} > ${ac})`);
};


export default function DownloadSamplePage() {
  const [selectedState, setSelectedState] = useState<string>('');
  const [selectedDistrict, setSelectedDistrict] = useState<string>('');
  const [selectedAC, setSelectedAC] = useState<string>('');

  const [districts, setDistricts] = useState<string[]>([]);
  const [acs, setAcs] = useState<string[]>([]);

  useEffect(() => {
    // Use type assertion for safety
    const stateData = locations[selectedState as keyof typeof locations];
    if (selectedState && stateData) {
      setDistricts(Object.keys(stateData));
      setSelectedDistrict(''); // Reset district on state change
      setAcs([]); // Reset ACs
      setSelectedAC(''); // Reset AC
    } else {
      setDistricts([]);
      setAcs([]);
    }
  }, [selectedState]);

  useEffect(() => {
      // Use type assertion and optional chaining for safety
    const districtData = locations[selectedState as keyof typeof locations]?.[selectedDistrict as keyof typeof locations[keyof typeof locations]];
    if (selectedState && selectedDistrict && districtData) {
      setAcs(districtData);
      setSelectedAC(''); // Reset AC on district change
    } else {
      setAcs([]);
    }
  }, [selectedDistrict, selectedState]);

  const handleDownload = () => {
    if (selectedState && selectedDistrict && selectedAC) {
      // Pass selected values, even though the downloaded file is hardcoded for now
      downloadTruncatedExcel(selectedState, selectedDistrict, selectedAC);
    } else {
      alert('Please select State, District, and Assembly Constituency.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 md:p-8">
      <Card className="w-full max-w-2xl shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-gray-800">Download Sample Voter Data</CardTitle>
          <CardDescription className="text-center text-gray-600">
            Select a State, District, and Assembly Constituency to download a truncated sample Excel file.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* State Selector */}
          <div className="space-y-2">
            <Label htmlFor="state-select">State</Label>
            <Select value={selectedState} onValueChange={setSelectedState}>
              <SelectTrigger id="state-select" className="w-full">
                <SelectValue placeholder="Select State..." />
              </SelectTrigger>
              <SelectContent>
                {Object.keys(locations).map(state => (
                  <SelectItem key={state} value={state}>{state}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* District Selector */}
          <div className="space-y-2">
            <Label htmlFor="district-select">District</Label>
            <Select value={selectedDistrict} onValueChange={setSelectedDistrict} disabled={!selectedState}>
              <SelectTrigger id="district-select" className="w-full">
                <SelectValue placeholder="Select District..." />
              </SelectTrigger>
              <SelectContent>
                {districts.map(district => (
                  <SelectItem key={district} value={district}>{district}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Assembly Constituency Selector */}
          <div className="space-y-2">
            <Label htmlFor="ac-select">Assembly Constituency</Label>
            <Select value={selectedAC} onValueChange={setSelectedAC} disabled={!selectedDistrict}>
              <SelectTrigger id="ac-select" className="w-full">
                <SelectValue placeholder="Select Assembly Constituency..." />
              </SelectTrigger>
              <SelectContent>
                {acs.map(ac => (
                  <SelectItem key={ac} value={ac}>{ac}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Download Button */}
          <Button
            onClick={handleDownload}
            disabled={!selectedAC || !selectedDistrict || !selectedState}
            className="w-full bg-[#0070f3] text-white hover:bg-[#0056d1] disabled:opacity-50 flex items-center justify-center gap-2"
            size="lg"
          >
            <Download size={18} /> Download Sample
          </Button>
           <p className="text-xs text-center text-gray-500 pt-4">
            Note: Currently, a single sample file ('Delhi_NorthDelhi_Burari_sample.xlsx') will be downloaded regardless of selection. For full data access, please contact sales.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
