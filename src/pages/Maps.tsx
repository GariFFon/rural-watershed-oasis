import { MapPin, Layers, Satellite, Navigation } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Maps = () => {
  const mapLayers = [
    { name: "Watershed Boundaries", active: true, color: "bg-primary" },
    { name: "Water Bodies", active: true, color: "bg-blue-500" },
    { name: "Agricultural Land", active: false, color: "bg-secondary" },
    { name: "Forest Cover", active: true, color: "bg-green-500" },
    { name: "Project Sites", active: true, color: "bg-accent" },
    { name: "Rainfall Stations", active: false, color: "bg-purple-500" }
  ];

  const projectSites = [
    {
      name: "Site A - Water Conservation",
      coordinates: "15.3173° N, 75.7139° E",
      status: "Active",
      progress: 85
    },
    {
      name: "Site B - Soil Management", 
      coordinates: "15.3520° N, 75.6850° E",
      status: "Planning",
      progress: 25
    },
    {
      name: "Site C - Infrastructure",
      coordinates: "15.2890° N, 75.7420° E", 
      status: "Completed",
      progress: 100
    }
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Geographic Information System</h1>
          <p className="text-muted-foreground">Interactive mapping and spatial analysis</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Satellite className="h-4 w-4 mr-2" />
            Satellite View
          </Button>
          <Button>
            <Navigation className="h-4 w-4 mr-2" />
            Navigate
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Map View */}
        <div className="lg:col-span-2">
          <Card className="shadow-card h-[600px]">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-primary" />
                <span>Watershed Project Locations</span>
              </CardTitle>
              <CardDescription>Interactive map showing project sites and coverage areas</CardDescription>
            </CardHeader>
            <CardContent className="h-full">
              <div className="w-full h-[500px] bg-gradient-sky/20 rounded-lg flex items-center justify-center border-2 border-dashed border-primary/30">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-primary">Interactive Map</h3>
                  <p className="text-sm text-muted-foreground">Map integration would display watershed boundaries,</p>
                  <p className="text-sm text-muted-foreground">project locations, and geographic data layers</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Map Controls */}
        <div className="space-y-6">
          {/* Layer Controls */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Layers className="h-5 w-5 text-secondary" />
                <span>Map Layers</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {mapLayers.map((layer, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`w-4 h-4 rounded ${layer.color}`} />
                      <span className="text-sm font-medium">{layer.name}</span>
                    </div>
                    <div className={`w-10 h-5 rounded-full ${layer.active ? 'bg-primary' : 'bg-muted'} relative transition-colors`}>
                      <div className={`w-4 h-4 bg-white rounded-full absolute top-0.5 transition-transform ${layer.active ? 'translate-x-5' : 'translate-x-0.5'}`} />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Project Sites */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Project Sites</CardTitle>
              <CardDescription>Active watershed project locations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {projectSites.map((site, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium text-sm">{site.name}</h4>
                      <Badge 
                        variant={site.status === "Active" ? "default" : site.status === "Completed" ? "secondary" : "outline"}
                        className="text-xs"
                      >
                        {site.status}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">{site.coordinates}</p>
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span>Progress</span>
                        <span>{site.progress}%</span>
                      </div>
                      <div className="bg-muted rounded-full h-2">
                        <div 
                          className="bg-primary h-2 rounded-full transition-all"
                          style={{ width: `${site.progress}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Map Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="shadow-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Area</CardTitle>
            <MapPin className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3,200 km²</div>
            <p className="text-xs text-muted-foreground">Watershed coverage</p>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Project Sites</CardTitle>
            <MapPin className="h-4 w-4 text-secondary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">Active locations</p>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Water Bodies</CardTitle>
            <MapPin className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">156</div>
            <p className="text-xs text-muted-foreground">Mapped features</p>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Monitoring Points</CardTitle>
            <MapPin className="h-4 w-4 text-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">89</div>
            <p className="text-xs text-muted-foreground">Data collection sites</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Maps;