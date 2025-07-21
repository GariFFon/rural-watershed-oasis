import { useState } from "react";
import { NavLink } from "react-router-dom";
import { 
  Home, 
  DollarSign, 
  Database, 
  Map, 
  FileText, 
  Cloud, 
  Shield, 
  Settings, 
  Calendar, 
  Newspaper,
  FolderOpen,
  BarChart3,
  Menu,
  X,
  ChevronDown,
  LogIn,
  UserPlus,
  User
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navigationGroups = {
  main: [
    { name: "Home", path: "/", icon: Home },
    { name: "Maps", path: "/maps", icon: Map },
    { name: "Timeline", path: "/timeline", icon: Calendar },
  ],
  management: [
    { name: "Financials", path: "/financials", icon: DollarSign },
    { name: "Data Management", path: "/data", icon: Database },
    { name: "Interventions", path: "/interventions", icon: Settings },
    { name: "Results/KPIs", path: "/results", icon: BarChart3 },
  ],
  technical: [
    { name: "Proformas", path: "/proformas", icon: FileText },
    { name: "Climatology", path: "/climatology", icon: Cloud },
    { name: "SCR Analysis", path: "/scr", icon: Shield },
  ],
  resources: [
    { name: "Media Center", path: "/media", icon: Newspaper },
    { name: "Documentation", path: "/miscellaneous", icon: FolderOpen },
  ]
};

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Simulate user authentication state
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const handleLogin = () => {
    // This would integrate with Supabase authentication
    setIsAuthenticated(true);
    setUser({ name: "John Doe", email: "john@watershed.gov" });
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <nav className="bg-gradient-primary border-b border-primary/20 shadow-primary/20 shadow-sm">
      <div className="container mx-auto px-6">
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center justify-between">
          <div className="flex space-x-1">
            {/* Main Navigation Items */}
            {navigationGroups.main.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center space-x-2 px-4 py-3 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-primary-foreground/20 text-primary-foreground border-b-2 border-accent"
                      : "text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"
                  }`
                }
              >
                <item.icon className="h-4 w-4" />
                <span>{item.name}</span>
              </NavLink>
            ))}

            {/* Management Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center space-x-2 px-4 py-3 text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10 transition-colors">
                  <Settings className="h-4 w-4" />
                  <span>Management</span>
                  <ChevronDown className="h-3 w-3" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56 bg-card shadow-card border-0">
                <DropdownMenuLabel>Project Management</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {navigationGroups.management.map((item) => (
                  <DropdownMenuItem key={item.name} asChild>
                    <NavLink to={item.path} className="flex items-center space-x-2 w-full">
                      <item.icon className="h-4 w-4" />
                      <span>{item.name}</span>
                    </NavLink>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Technical Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center space-x-2 px-4 py-3 text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10 transition-colors">
                  <Shield className="h-4 w-4" />
                  <span>Technical</span>
                  <ChevronDown className="h-3 w-3" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56 bg-card shadow-card border-0">
                <DropdownMenuLabel>Technical Analysis</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {navigationGroups.technical.map((item) => (
                  <DropdownMenuItem key={item.name} asChild>
                    <NavLink to={item.path} className="flex items-center space-x-2 w-full">
                      <item.icon className="h-4 w-4" />
                      <span>{item.name}</span>
                    </NavLink>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Resources Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center space-x-2 px-4 py-3 text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10 transition-colors">
                  <FolderOpen className="h-4 w-4" />
                  <span>Resources</span>
                  <ChevronDown className="h-3 w-3" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56 bg-card shadow-card border-0">
                <DropdownMenuLabel>Resources & Media</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {navigationGroups.resources.map((item) => (
                  <DropdownMenuItem key={item.name} asChild>
                    <NavLink to={item.path} className="flex items-center space-x-2 w-full">
                      <item.icon className="h-4 w-4" />
                      <span>{item.name}</span>
                    </NavLink>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* User Authentication Section */}
          <div className="flex items-center space-x-3">
            {isAuthenticated ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="flex items-center space-x-2 px-3 py-2 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-lg transition-colors">
                    <User className="h-4 w-4 text-primary-foreground" />
                    <span className="text-sm font-medium text-primary-foreground">
                      {user?.name}
                    </span>
                    <ChevronDown className="h-3 w-3 text-primary-foreground" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 bg-card shadow-card border-0">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile Settings</DropdownMenuItem>
                  <DropdownMenuItem>Preferences</DropdownMenuItem>
                  <DropdownMenuItem>Help & Support</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout} className="text-destructive">
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="flex items-center space-x-2">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={handleLogin}
                  className="text-primary-foreground hover:bg-primary-foreground/10"
                >
                  <LogIn className="h-4 w-4 mr-2" />
                  Login
                </Button>
                <Button 
                  variant="secondary" 
                  size="sm"
                  onClick={handleLogin}
                  className="shadow-secondary/30"
                >
                  <UserPlus className="h-4 w-4 mr-2" />
                  Sign Up
                </Button>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden flex items-center justify-between py-3">
          <span className="text-primary-foreground font-medium">Watershed System</span>
          <div className="flex items-center space-x-2">
            {isAuthenticated ? (
              <Button
                variant="ghost"
                size="sm"
                className="text-primary-foreground hover:bg-primary-foreground/10"
              >
                <User className="h-4 w-4" />
              </Button>
            ) : (
              <Button
                variant="ghost"
                size="sm"
                onClick={handleLogin}
                className="text-primary-foreground hover:bg-primary-foreground/10"
              >
                <LogIn className="h-4 w-4" />
              </Button>
            )}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-primary-foreground hover:bg-primary-foreground/10"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-primary/20">
            <div className="py-2 space-y-1">
              {Object.entries(navigationGroups).map(([groupName, items]) => (
                <div key={groupName}>
                  <div className="px-4 py-2 text-xs font-semibold text-primary-foreground/60 uppercase tracking-wider">
                    {groupName}
                  </div>
                  {items.map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={({ isActive }) =>
                        `flex items-center space-x-3 px-4 py-3 text-sm font-medium transition-colors ${
                          isActive
                            ? "bg-primary-foreground/20 text-primary-foreground"
                            : "text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"
                        }`
                      }
                    >
                      <item.icon className="h-4 w-4" />
                      <span>{item.name}</span>
                    </NavLink>
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;