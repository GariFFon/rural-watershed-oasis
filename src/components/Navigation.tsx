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
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";

const navigationItems = [
  { name: "Home", path: "/", icon: Home },
  { name: "Financials", path: "/financials", icon: DollarSign },
  { name: "Data", path: "/data", icon: Database },
  { name: "Maps", path: "/maps", icon: Map },
  { name: "Proformas", path: "/proformas", icon: FileText },
  { name: "Climatology", path: "/climatology", icon: Cloud },
  { name: "SCR", path: "/scr", icon: Shield },
  { name: "Interventions", path: "/interventions", icon: Settings },
  { name: "Timeline", path: "/timeline", icon: Calendar },
  { name: "Media", path: "/media", icon: Newspaper },
  { name: "Miscellaneous", path: "/miscellaneous", icon: FolderOpen },
  { name: "Results/KPIs", path: "/results", icon: BarChart3 },
];

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-primary-dark border-b border-primary/20">
      <div className="container mx-auto px-6">
        {/* Desktop Navigation */}
        <div className="hidden lg:flex space-x-1">
          {navigationItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center space-x-2 px-4 py-3 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-primary-foreground/10 text-primary-foreground border-b-2 border-accent"
                    : "text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/5"
                }`
              }
            >
              <item.icon className="h-4 w-4" />
              <span>{item.name}</span>
            </NavLink>
          ))}
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden flex items-center justify-between py-3">
          <span className="text-primary-foreground font-medium">Menu</span>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-primary-foreground hover:bg-primary-foreground/10"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-primary/20">
            <div className="py-2 space-y-1">
              {navigationItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center space-x-3 px-4 py-3 text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-primary-foreground/10 text-primary-foreground"
                        : "text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/5"
                    }`
                  }
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;