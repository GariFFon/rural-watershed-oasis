import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
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
  LogOut,
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
import { useAuth } from "@/contexts/AuthContext";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

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
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const getUserInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
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
            {isAuthenticated && user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback className="bg-primary-foreground text-primary">
                        {getUserInitials(user.name)}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 bg-card shadow-card border-0">
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">{user.name}</p>
                      <p className="text-xs leading-none text-muted-foreground">
                        {user.email}
                      </p>
                      <p className="text-xs leading-none text-muted-foreground">
                        {user.role}
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout}>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : null}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden flex items-center justify-between py-3">
          <span className="text-primary-foreground font-medium">Watershed System</span>
          <div className="flex items-center space-x-2">
            {isAuthenticated && user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-foreground/10">
                    <Avatar className="h-6 w-6">
                      <AvatarFallback className="bg-primary-foreground text-primary text-xs">
                        {getUserInitials(user.name)}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 bg-card shadow-card border-0">
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">{user.name}</p>
                      <p className="text-xs leading-none text-muted-foreground">
                        {user.email}
                      </p>
                      <p className="text-xs leading-none text-muted-foreground">
                        {user.role}
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout}>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : null}
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