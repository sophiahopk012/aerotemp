import { useState } from "react";
import { MessageSquare, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  text: string;
  isBot: boolean;
}

const Chatbot = () => {
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hello! I can help you analyze temperature data. What would you like to know?", isBot: true },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages(prev => [...prev, { text: input, isBot: false }]);
    setInput("");

    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        {
          text: "Based on the current temperature readings, all systems are operating within normal parameters. The average temperature over the last hour has been stable.",
          isBot: true,
        },
      ]);
    }, 1000);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg h-full flex flex-col">
      <div className="flex items-center space-x-2 mb-4">
        <MessageSquare className="h-5 w-5 text-secondary" />
        <h2 className="text-xl font-semibold text-primary">AI Analysis Assistant</h2>
      </div>
      
      <ScrollArea className="flex-grow mb-4 pr-4">
        <div className="space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}
            >
              <div
                className={`rounded-lg px-4 py-2 max-w-[80%] ${
                  message.isBot
                    ? "bg-gray-100 text-primary"
                    : "bg-secondary text-white"
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>

      <div className="flex space-x-2">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about temperature data..."
          onKeyPress={(e) => e.key === "Enter" && handleSend()}
          className="flex-grow"
        />
        <Button onClick={handleSend} className="bg-secondary hover:bg-secondary/90">
          <Send className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default Chatbot;