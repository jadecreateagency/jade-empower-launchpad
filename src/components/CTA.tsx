import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Instagram } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Main Heading */}
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Pare de Perder Tempo
            <span className="block">e Comece a Ver Resultados</span>
          </h2>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl opacity-95 mb-8 leading-relaxed">
            Sua presença digital pode ser o diferencial que seu negócio precisa. 
            Vamos construir isso juntas?
          </p>

          {/* Benefits */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
              <h3 className="font-semibold mb-2">✨ Estratégia Personalizada</h3>
              <p className="text-sm opacity-90">Criada especificamente para seu negócio e público</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
              <h3 className="font-semibold mb-2">🚀 Resultados Rápidos</h3>
              <p className="text-sm opacity-90">Veja mudanças já nas primeiras semanas</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
              <h3 className="font-semibold mb-2">💜 Parceria Real</h3>
              <p className="text-sm opacity-90">Cuidamos da sua marca como se fosse nossa</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="hero" size="lg" className="group">
              Quero Transformar Meu Negócio
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button variant="outline" size="lg" className="border-2 border-white/30 text-white hover:bg-white/10">
              <MessageCircle className="mr-2 h-5 w-5" />
              Conversar no WhatsApp
            </Button>
          </div>

          {/* Social */}
          <div className="flex justify-center items-center gap-4 text-white/80">
            <span>Nos siga:</span>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
              <Instagram className="h-5 w-5" />
              <span className="font-medium">@_jadecreate</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;