'use client';

import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { InfoIcon, AlertTriangle, Code, Database, Key, Lock, Search, Filter, FileJson } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function ApiDocs() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Warning Banner */}
      <div className="bg-yellow-50 border-b border-yellow-100">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center gap-2 text-yellow-800">
            <AlertTriangle size={20} />
            <p className="text-sm">This is a dummy API documentation for demonstration purposes. The actual documentation is currently being developed.</p>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">API Documentation</h1>
          <p className="text-gray-600">Access voter data through our MongoDB Atlas-powered API</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-6">
          {/* Sidebar */}
          <div className="col-span-12 lg:col-span-3">
            <div className="sticky top-20">
              <nav className="space-y-1">
                <Button 
                  variant={activeTab === "overview" ? "default" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setActiveTab("overview")}
                >
                  <InfoIcon className="mr-2 h-4 w-4" />
                  Overview
                </Button>
                <Button 
                  variant={activeTab === "authentication" ? "default" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setActiveTab("authentication")}
                >
                  <Key className="mr-2 h-4 w-4" />
                  Authentication
                </Button>
                <Button 
                  variant={activeTab === "endpoints" ? "default" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setActiveTab("endpoints")}
                >
                  <Code className="mr-2 h-4 w-4" />
                  Endpoints
                </Button>
                <Button 
                  variant={activeTab === "queries" ? "default" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setActiveTab("queries")}
                >
                  <Search className="mr-2 h-4 w-4" />
                  Queries
                </Button>
                <Button 
                  variant={activeTab === "filters" ? "default" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setActiveTab("filters")}
                >
                  <Filter className="mr-2 h-4 w-4" />
                  Filters
                </Button>
              </nav>
            </div>
          </div>

          {/* Content */}
          <div className="col-span-12 lg:col-span-9 space-y-6">
            {activeTab === "overview" && (
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Getting Started</CardTitle>
                    <CardDescription>Learn how to integrate with our MongoDB Atlas-powered API</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="prose max-w-none">
                      <p>Our API provides access to comprehensive voter data across India's constituencies. Built on MongoDB Atlas, it offers:</p>
                      <ul>
                        <li>Real-time access to voter demographics</li>
                        <li>Constituency-level aggregations</li>
                        <li>Historical voting patterns</li>
                        <li>Custom data filtering</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Base URL</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <code className="bg-gray-100 p-3 rounded-md block">
                      https://api.voterdata.example.com/v1
                    </code>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Quick Example</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <pre className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto">
{`// Fetch voter data for a specific constituency
const response = await fetch('https://api.voterdata.example.com/v1/constituencies/123', {
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  }
});

const data = await response.json();
console.log(data);`}
                    </pre>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeTab === "authentication" && (
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Authentication</CardTitle>
                    <CardDescription>Secure your API requests using API keys</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="prose max-w-none">
                      <p>All API requests must be authenticated using an API key. You can obtain your API key from your dashboard.</p>
                      <h3>API Key Example</h3>
                      <pre className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto">
{`// Include in HTTP header
'Authorization': 'Bearer YOUR_API_KEY'

// Example request
const headers = {
  'Authorization': 'Bearer YOUR_API_KEY',
  'Content-Type': 'application/json'
};

const response = await fetch('https://api.voterdata.example.com/v1/voters', { headers });`}
                      </pre>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeTab === "endpoints" && (
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Available Endpoints</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="border rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge className="bg-green-500">GET</Badge>
                          <code>/constituencies</code>
                        </div>
                        <p className="text-gray-600">Fetch list of all constituencies</p>
                      </div>

                      <div className="border rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge className="bg-green-500">GET</Badge>
                          <code>/constituencies/:id</code>
                        </div>
                        <p className="text-gray-600">Get details of a specific constituency</p>
                      </div>

                      <div className="border rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge className="bg-green-500">GET</Badge>
                          <code>/voters</code>
                        </div>
                        <p className="text-gray-600">Search voters with filters</p>
                      </div>

                      <div className="border rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge className="bg-blue-500">POST</Badge>
                          <code>/analytics/demographics</code>
                        </div>
                        <p className="text-gray-600">Generate demographic reports</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Endpoint Example</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <pre className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto">
{`// Fetch constituency details
const getConstituency = async (constituencyId) => {
  const response = await fetch(\`https://api.voterdata.example.com/v1/constituencies/\${constituencyId}\`, {
    headers: {
      'Authorization': 'Bearer YOUR_API_KEY',
      'Content-Type': 'application/json'
    }
  });

  const data = await response.json();
  return data;
};

// Example response
{
  "id": "123",
  "name": "North Central Delhi",
  "state": "Delhi",
  "totalVoters": 1500000,
  "demographics": {
    "ageGroups": {
      "18-25": 250000,
      "26-35": 400000,
      "36-50": 500000,
      "51+": 350000
    },
    "gender": {
      "male": 780000,
      "female": 720000
    }
  }
}`}
                    </pre>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeTab === "queries" && (
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>MongoDB Queries</CardTitle>
                    <CardDescription>Learn how to effectively query the voter database</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="prose max-w-none">
                      <h3>Basic Query Example</h3>
                      <pre className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto">
{`// Example MongoDB query
{
  "constituency": "North Central Delhi",
  "age": { "$gte": 25, "$lte": 35 },
  "lastVoted": { "$exists": true }
}

// API implementation
const response = await fetch('https://api.voterdata.example.com/v1/voters/search', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    query: {
      constituency: "North Central Delhi",
      age: { $gte: 25, $lte: 35 },
      lastVoted: { $exists: true }
    }
  })
});`}
                      </pre>

                      <h3>Aggregation Pipeline Example</h3>
                      <pre className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto">
{`// Complex aggregation example
const response = await fetch('https://api.voterdata.example.com/v1/analytics/aggregate', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    pipeline: [
      {
        $match: {
          constituency: "North Central Delhi"
        }
      },
      {
        $group: {
          _id: "$age_group",
          count: { $sum: 1 },
          avgTurnout: { $avg: "$turnout_percentage" }
        }
      },
      {
        $sort: { count: -1 }
      }
    ]
  })
});`}
                      </pre>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeTab === "filters" && (
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Available Filters</CardTitle>
                    <CardDescription>Filter voter data using various parameters</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <h3 className="font-semibold">Demographic Filters</h3>
                      <pre className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto">
{`// Example with multiple filters
const response = await fetch('https://api.voterdata.example.com/v1/voters/search', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    filters: {
      age: { $gte: 25, $lte: 35 },
      gender: "female",
      constituency: "North Central Delhi",
      votingHistory: { $exists: true }
    },
    sort: { age: 1 },
    limit: 100,
    skip: 0
  })
});`}
                      </pre>

                      <h3 className="font-semibold">Supported Filter Operations</h3>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <Badge>$eq</Badge>
                          <span>Equal to</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Badge>$gt</Badge>
                          <span>Greater than</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Badge>$lt</Badge>
                          <span>Less than</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Badge>$in</Badge>
                          <span>In array</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Badge>$exists</Badge>
                          <span>Field exists</span>
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 