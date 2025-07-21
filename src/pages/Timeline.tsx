import { Calendar, CheckCircle, Clock, MapPin, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Timeline = () => {
  const timelineEvents = [
    {
      id: 1,
      title: "Project Initiation & Planning",
      description: "Initial watershed assessment and stakeholder meetings completed",
      date: "2023-03-15",
      status: "completed",
      location: "Project Headquarters",
      participants: 45,
      category: "Planning"
    },
    {
      id: 2,
      title: "Soil Survey & Analysis",
      description: "Comprehensive soil testing across 500 hectares completed",
      date: "2023-05-20",
      status: "completed",
      location: "Field Sites A-C",
      participants: 12,
      category: "Assessment"
    },
    {
      id: 3,
      title: "Water Conservation Infrastructure",
      description: "Construction of check dams and retention ponds",
      date: "2023-08-10",
      status: "completed",
      location: "Zone 1 & 2",
      participants: 89,
      category: "Infrastructure"
    },
    {
      id: 4,
      title: "Community Training Program",
      description: "Farmer education on sustainable practices and water management",
      date: "2023-11-05",
      status: "in-progress",
      location: "Community Centers",
      participants: 156,
      category: "Training"
    },
    {
      id: 5,
      title: "Reforestation Initiative",
      description: "Planting of native species for watershed protection",
      date: "2024-01-15",
      status: "in-progress",
      location: "Upper Catchment Area",
      participants: 78,
      category: "Environment"
    },
    {
      id: 6,
      title: "Monitoring System Installation",
      description: "IoT sensors for real-time water level and quality monitoring",
      date: "2024-03-20",
      status: "upcoming",
      location: "Strategic Points",
      participants: 24,
      category: "Technology"
    },
    {
      id: 7,
      title: "Phase II Implementation",
      description: "Expansion to additional watershed areas",
      date: "2024-06-01",
      status: "upcoming",
      location: "Zone 3 & 4",
      participants: 120,
      category: "Expansion"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-secondary text-secondary-foreground";
      case "in-progress":
        return "bg-primary text-primary-foreground";
      case "upcoming":
        return "bg-accent text-accent-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Planning":
        return "bg-primary/20 text-primary-foreground";
      case "Assessment":
        return "bg-secondary/20 text-secondary-foreground";
      case "Infrastructure":
        return "bg-accent/20 text-accent-foreground";
      case "Training":
        return "bg-primary/30 text-primary-foreground";
      case "Environment":
        return "bg-secondary/30 text-secondary-foreground";
      case "Technology":
        return "bg-accent/30 text-accent-foreground";
      case "Expansion":
        return "bg-primary/40 text-primary-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Project Timeline</h1>
          <p className="text-muted-foreground">Watershed management project milestones and progress tracking</p>
        </div>
        <div className="flex space-x-2">
          <Badge variant="secondary" className={getStatusColor("completed")}>
            4 Completed
          </Badge>
          <Badge variant="secondary" className={getStatusColor("in-progress")}>
            2 In Progress
          </Badge>
          <Badge variant="secondary" className={getStatusColor("upcoming")}>
            2 Upcoming
          </Badge>
        </div>
      </div>

      {/* Timeline Overview */}
      <Card className="shadow-card bg-gradient-primary/5">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Calendar className="h-5 w-5 text-primary" />
            <span>Project Overview</span>
          </CardTitle>
          <CardDescription>
            Multi-phase watershed development initiative spanning 18 months
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">18</div>
              <div className="text-sm text-muted-foreground">Total Months</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-secondary">524</div>
              <div className="text-sm text-muted-foreground">Total Participants</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent">67%</div>
              <div className="text-sm text-muted-foreground">Progress Complete</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Timeline Events */}
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30"></div>

        <div className="space-y-8">
          {timelineEvents.map((event, index) => (
            <div key={event.id} className="relative flex items-start space-x-6">
              {/* Timeline dot */}
              <div className={`relative z-10 flex items-center justify-center w-16 h-16 rounded-full border-4 border-background shadow-card ${
                event.status === "completed" ? "bg-secondary" :
                event.status === "in-progress" ? "bg-primary" : "bg-accent"
              }`}>
                {event.status === "completed" ? (
                  <CheckCircle className="h-6 w-6 text-white" />
                ) : event.status === "in-progress" ? (
                  <Clock className="h-6 w-6 text-white" />
                ) : (
                  <Calendar className="h-6 w-6 text-white" />
                )}
              </div>

              {/* Event Card */}
              <Card className="flex-1 shadow-card hover:shadow-primary/10 transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-3">
                        <CardTitle className="text-lg">{event.title}</CardTitle>
                        <Badge className={getStatusColor(event.status)} variant="secondary">
                          {event.status.replace("-", " ")}
                        </Badge>
                        <Badge className={getCategoryColor(event.category)} variant="outline">
                          {event.category}
                        </Badge>
                      </div>
                      <CardDescription className="text-base">
                        {event.description}
                      </CardDescription>
                    </div>
                    <div className="text-right text-sm text-muted-foreground">
                      {new Date(event.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4" />
                      <span>{event.participants} participants</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Milestones */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Upcoming Milestones</CardTitle>
          <CardDescription>Next important events and deadlines</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 bg-primary/5 rounded-lg">
              <h4 className="font-medium text-primary mb-2">Monitoring System Installation</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Deploy IoT sensors across strategic monitoring points
              </p>
              <div className="flex items-center justify-between">
                <Badge variant="outline" className="text-primary border-primary">
                  March 2024
                </Badge>
                <div className="text-xs text-muted-foreground">24 days remaining</div>
              </div>
            </div>
            <div className="p-4 bg-accent/5 rounded-lg">
              <h4 className="font-medium text-accent-foreground mb-2">Phase II Implementation</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Begin expansion to additional watershed areas
              </p>
              <div className="flex items-center justify-between">
                <Badge variant="outline" className="text-accent-foreground border-accent">
                  June 2024
                </Badge>
                <div className="text-xs text-muted-foreground">118 days remaining</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Timeline;