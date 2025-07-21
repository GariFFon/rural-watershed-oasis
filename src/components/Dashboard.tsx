import { CheckCircle, Activity, Users, MapPin, Calendar } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/contexts/AuthContext";

const Dashboard = () => {
  const { user } = useAuth();
  const stats = [
    {
      title: "Active Projects",
      value: "24",
      description: "Watershed projects in progress",
      icon: Activity,
      color: "bg-secondary"
    },
    {
      title: "Beneficiaries",
      value: "12,450",
      description: "Rural households supported",
      icon: Users,
      color: "bg-accent"
    },
    {
      title: "Coverage Area",
      value: "3,200 km²",
      description: "Total watershed area",
      icon: MapPin,
      color: "bg-gradient-nature"
    },
    {
      title: "Completion Rate",
      value: "89%",
      description: "Projects completed successfully",
      icon: CheckCircle,
      color: "bg-gradient-secondary"
    }
  ];

  const recentUpdates = [
    {
      title: "Water Conservation Project - Phase II",
      status: "Completed",
      date: "2024-01-15",
      location: "Dharwad District"
    },
    {
      title: "Soil Health Assessment",
      status: "In Progress",
      date: "2024-01-10",
      location: "Bellary Region"
    },
    {
      title: "Irrigation Infrastructure",
      status: "Planning",
      date: "2024-01-08",
      location: "Bagalkot Area"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Message */}
      {user && (
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6 border border-green-200">
          <h2 className="text-2xl font-bold text-green-800 mb-2">
            Welcome back, {user.name}! 👋
          </h2>
          <p className="text-green-700">
            Role: <span className="font-semibold">{user.role}</span> | 
            Ready to manage rural watershed projects and make a positive impact.
          </p>
        </div>
      )}

      {/* Hero Section */}
      <div className="bg-gradient-primary rounded-lg p-8 text-primary-foreground shadow-primary">
        <div className="flex items-center space-x-4 mb-4">
          <CheckCircle className="h-6 w-6 text-accent" />
          <Badge variant="secondary" className="bg-primary-foreground/20 text-primary-foreground">
            System Status: Operational
          </Badge>
        </div>
        <h2 className="text-3xl font-bold mb-2">Watershed Management Dashboard</h2>
        <p className="text-primary-foreground/90 text-lg">
          All headings, subheadings & Proformas (1-19) fully integrated. 
          Comprehensive rural development tracking and management system.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="border-0 shadow-card hover:shadow-primary transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <div className={`${stat.color} p-2 rounded-md`}>
                <stat.icon className="h-4 w-4 text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">{stat.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Updates */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Calendar className="h-5 w-5 text-primary" />
              <span>Recent Project Updates</span>
            </CardTitle>
            <CardDescription>Latest activities in watershed management projects</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentUpdates.map((update, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-muted/50 rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-medium text-sm">{update.title}</h4>
                    <p className="text-xs text-muted-foreground mt-1">{update.location}</p>
                    <div className="flex items-center justify-between mt-2">
                      <Badge 
                        variant={update.status === "Completed" ? "default" : update.status === "In Progress" ? "secondary" : "outline"}
                        className="text-xs"
                      >
                        {update.status}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{update.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Frequently used watershed management tools</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <button className="p-4 bg-primary/10 hover:bg-primary/20 rounded-lg transition-colors text-left">
                <div className="font-medium text-sm">Data Entry</div>
                <div className="text-xs text-muted-foreground mt-1">Update project data</div>
              </button>
              <button className="p-4 bg-secondary/10 hover:bg-secondary/20 rounded-lg transition-colors text-left">
                <div className="font-medium text-sm">Generate Reports</div>
                <div className="text-xs text-muted-foreground mt-1">Create KPI reports</div>
              </button>
              <button className="p-4 bg-accent/10 hover:bg-accent/20 rounded-lg transition-colors text-left">
                <div className="font-medium text-sm">Map View</div>
                <div className="text-xs text-muted-foreground mt-1">View project locations</div>
              </button>
              <button className="p-4 bg-primary/10 hover:bg-primary/20 rounded-lg transition-colors text-left">
                <div className="font-medium text-sm">Financial Tracking</div>
                <div className="text-xs text-muted-foreground mt-1">Budget monitoring</div>
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;