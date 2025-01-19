import Navbar from "@/components/Navbar";
import TemperatureGraph from "@/components/TemperatureGraph";
import Chatbot from "@/components/Chatbot";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto pt-24 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <TemperatureGraph />
          </div>
          <div className="lg:col-span-1">
            <Chatbot />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;