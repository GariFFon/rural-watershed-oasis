import { Database, Upload, Download, Search, Filter } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const DataManagement = () => {
  const datasets = [
    {
      name: "Soil Quality Assessment",
      type: "Environmental Data",
      lastUpdated: "2024-01-15",
      records: 2340,
      status: "Active"
    },
    {
      name: "Water Level Monitoring",
      type: "Hydrological Data",
      lastUpdated: "2024-01-14",
      records: 1850,
      status: "Active"
    },
    {
      name: "Crop Yield Analysis",
      type: "Agricultural Data",
      lastUpdated: "2024-01-12",
      records: 3200,
      status: "Processing"
    },
    {
      name: "Rainfall Measurements",
      type: "Meteorological Data",
      lastUpdated: "2024-01-10",
      records: 5600,
      status: "Active"
    }
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Data Management</h1>
          <p className="text-muted-foreground">Centralized data collection and analysis system</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Upload className="h-4 w-4 mr-2" />
            Import Data
          </Button>
          <Button>
            <Download className="h-4 w-4 mr-2" />
            Export Reports
          </Button>
        </div>
      </div>

      {/* Data Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="shadow-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Records</CardTitle>
            <Database className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12,990</div>
            <p className="text-xs text-muted-foreground">Across all datasets</p>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Datasets</CardTitle>
            <Database className="h-4 w-4 text-secondary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">Currently monitored</p>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Data Quality</CardTitle>
            <Database className="h-4 w-4 text-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">96%</div>
            <p className="text-xs text-muted-foreground">Accuracy score</p>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Last Sync</CardTitle>
            <Database className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2h ago</div>
            <p className="text-xs text-muted-foreground">Real-time updates</p>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filter */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Dataset Explorer</CardTitle>
          <CardDescription>Search and filter available datasets</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-4 mb-6">
            <div className="flex-1 relative">
              <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <Input 
                placeholder="Search datasets..." 
                className="w-full pl-10"
              />
            </div>
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
          </div>

          <div className="space-y-4">
            {datasets.map((dataset, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center space-x-3">
                    <h4 className="font-medium">{dataset.name}</h4>
                    <Badge 
                      variant={dataset.status === "Active" ? "default" : "secondary"}
                      className="text-xs"
                    >
                      {dataset.status}
                    </Badge>
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {dataset.type} • {dataset.records} records • Updated {dataset.lastUpdated}
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">View</Button>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Data Collection Forms */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Quick Data Entry</CardTitle>
            <CardDescription>Common data collection forms</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <button className="p-4 bg-primary/10 hover:bg-primary/20 rounded-lg transition-colors text-left">
                <div className="font-medium text-sm">Water Quality</div>
                <div className="text-xs text-muted-foreground mt-1">pH, TDS, turbidity</div>
              </button>
              <button className="p-4 bg-secondary/10 hover:bg-secondary/20 rounded-lg transition-colors text-left">
                <div className="font-medium text-sm">Soil Analysis</div>
                <div className="text-xs text-muted-foreground mt-1">NPK, moisture, pH</div>
              </button>
              <button className="p-4 bg-accent/10 hover:bg-accent/20 rounded-lg transition-colors text-left">
                <div className="font-medium text-sm">Rainfall Data</div>
                <div className="text-xs text-muted-foreground mt-1">Daily measurements</div>
              </button>
              <button className="p-4 bg-primary/10 hover:bg-primary/20 rounded-lg transition-colors text-left">
                <div className="font-medium text-sm">Crop Survey</div>
                <div className="text-xs text-muted-foreground mt-1">Yield, area, health</div>
              </button>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Data Analytics</CardTitle>
            <CardDescription>Generate insights from collected data</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-gradient-water/10 rounded-lg">
                <h4 className="font-medium text-sm">Water Conservation Impact</h4>
                <p className="text-xs text-muted-foreground mt-1">23% increase in groundwater levels</p>
              </div>
              <div className="p-4 bg-gradient-nature/10 rounded-lg">
                <h4 className="font-medium text-sm">Soil Health Improvement</h4>
                <p className="text-xs text-muted-foreground mt-1">15% increase in organic matter</p>
              </div>
              <div className="p-4 bg-accent/10 rounded-lg">
                <h4 className="font-medium text-sm">Crop Productivity</h4>
                <p className="text-xs text-muted-foreground mt-1">18% yield improvement</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DataManagement;