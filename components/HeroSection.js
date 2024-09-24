import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const HeroSection = () => (
  <Card className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 py-8 my-16 bg-gradient-to-r from-blue-600 to-blue-400 text-white border-none">
    <CardContent className="p-8 md:p-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Connect, Collaborate, and Grow Your Business
      </h2>
      <p className="text-lg md:text-xl mb-6">
        Join our B2B networking platform to find the perfect business matches
        and opportunities.
      </p>
      <Button
        variant="default"
        size="lg"
        className="font-semibold bg-white text-black hover:bg-white hover:text-black"
      >
        Get Started
        <ArrowRight className="ml-2 h-5 w-5" />
      </Button>
    </CardContent>
  </Card>
);

export default HeroSection;
