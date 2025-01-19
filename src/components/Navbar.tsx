import { Plane } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-primary p-4 fixed w-full top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Plane className="h-8 w-8 text-secondary" />
          <span className="text-white font-bold">AeroTemp</span>
        </div>
        <h1 className="text-white text-xl font-semibold hidden md:block">
          Aircraft Temperature Monitoring System
        </h1>
        <div className="w-8 md:w-24" /> {/* Spacer for balance */}
      </div>
    </nav>
  );
};

export default Navbar;