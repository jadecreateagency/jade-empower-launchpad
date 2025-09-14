import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Instagram } from "lucide-react";
import jadeLogo from "@/assets/jade-logo.png";

const Hero = () => {
  const scrollToPlans = () => {
    const plansSection = document.getElementById('plans');
    if (plansSection) {
      plansSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-primary/30 blur-xl animate-pulse" />
        <div className="absolute bottom-32 right-32 w-24 h-24 rounded-full bg-secondary/30 blur-xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/3 w-16 h-16 rounded-full bg-accent/30 blur-xl animate-pulse delay-500" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <img 
              src={jadeLogo} 
              alt="Jade Create Logo" 
              className="h-16 w-auto drop-shadow-glow animate-pulse"
            />
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold font-playfair text-foreground mb-6 leading-tight">
            Transforme Sua Presença
            <span className="block bg-gradient-to-r from-foreground to-primary-light bg-clip-text text-transparent">
              Digital em Resultados
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Pare de perder tempo, dinheiro e energia achando que a internet não funciona. 
            Nosso método exclusivo transforma mulheres empreendedoras em referências digitais.
          </p>

          {/* Key Benefit */}
          <div className="inline-flex items-center gap-2 bg-card/50 backdrop-blur-sm border border-border rounded-full px-6 py-3 mb-10">
            <Sparkles className="h-5 w-5 text-secondary" />
            <span className="text-foreground font-medium">
              Feito por mulheres, para mulheres empreendedoras
            </span>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center mb-16">
            <Button variant="hero" size="lg" className="group" onClick={scrollToPlans}>
              Ver Nossos Planos
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Social */}
          <div className="flex justify-center items-center gap-2 text-muted-foreground">
            <Instagram className="h-5 w-5 text-primary" />
            <span className="text-xl font-medium text-primary">@_jadecreate</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;