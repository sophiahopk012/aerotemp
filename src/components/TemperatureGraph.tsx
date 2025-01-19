import { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { AlertTriangle } from "lucide-react";
import { toast } from "sonner";

const TemperatureGraph = () => {
  const [data, setData] = useState<Array<{ time: string; temperature: number }>>([]);
  const [currentTemp, setCurrentTemp] = useState<number>(25);

  const MIN_SAFE_TEMP = 15;
  const MAX_SAFE_TEMP = 35;

  useEffect(() => {
    // Simulate real-time data updates
    const interval = setInterval(() => {
      const now = new Date();
      const newTemp = currentTemp + (Math.random() - 0.5) * 2;
      setCurrentTemp(newTemp);

      if (newTemp < MIN_SAFE_TEMP || newTemp > MAX_SAFE_TEMP) {
        toast.error("Temperature Alert!", {
          description: `Temperature (${newTemp.toFixed(1)}°C) is outside safe range!`,
        });
      }

      setData(prev => [
        ...prev.slice(-19),
        {
          time: now.toLocaleTimeString(),
          temperature: newTemp,
        },
      ]);
    }, 2000);

    return () => clearInterval(interval);
  }, [currentTemp]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-primary">Temperature Monitor</h2>
        <div className="flex items-center space-x-2">
          <AlertTriangle className="h-5 w-5 text-alert" />
          <span className="text-sm text-gray-600">
            Safe Range: {MIN_SAFE_TEMP}°C - {MAX_SAFE_TEMP}°C
          </span>
        </div>
      </div>
      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis domain={[0, 50]} />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="temperature"
              stroke="#38BDF8"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TemperatureGraph;