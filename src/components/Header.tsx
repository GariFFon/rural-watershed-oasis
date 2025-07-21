import { Droplets } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-gradient-primary text-primary-foreground shadow-primary">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center space-x-3">
          <Droplets className="h-8 w-8" />
          <div>
            <h1 className="text-2xl font-bold">Watershed Management System</h1>
            <p className="text-sm opacity-90">Rural Area Development Initiative</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;