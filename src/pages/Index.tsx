import Hero from "@/components/Hero";
import About from "@/components/About";
import Problem from "@/components/Problem";
import Plans from "@/components/Plans";
import CTA from "@/components/CTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Problem />
      <Plans />
      <CTA />
    </div>
  );
};

export default Index;
