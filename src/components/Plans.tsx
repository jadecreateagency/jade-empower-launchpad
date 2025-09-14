import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Crown, Compass } from "lucide-react";

const Plans = () => {
  const plans = [
    {
      id: 1,
      name: "Mapa da Direção",
      icon: <Compass className="h-8 w-8" />,
      price: "R$ 800",
      period: "Pagamento único",
      description: "O ponto de partida perfeito para quem precisa de clareza e direcionamento estratégico.",
      badge: "Iniciantes",
      badgeVariant: "secondary" as const,
      features: [
        "30 conteúdos personalizados para aplicar",
        "Ideias de enquetes e caixinhas de perguntas",
        "Guia prático: rotina comum em conteúdo",
        "Análise completa do seu perfil atual",
        "3 reuniões de alinhamento estratégico"
      ],
      highlight: false,
      cta: "Começar Agora"
    },
    {
      id: 2,
      name: "Gestão de Crescimento",
      icon: <Star className="h-8 w-8" />,
      price: "R$ 1.600",
      period: "Por mês",
      description: "Para negócios que querem consistência, engajamento e crescimento sustentável.",
      badge: "Mais Popular",
      badgeVariant: "default" as const,
      features: [
        "Criação de linha editorial completa",
        "Análise recorrente do perfil e conteúdo",
        "Calendário de conteúdo estratégico",
        "Criação de todas as redações",
        "Roteiros de vídeo e stories",
        "Relatório mensal de métricas",
        "Gestão de UGC (conteúdo dos clientes)",
        "Automações estratégicas implementadas"
      ],
      highlight: true,
      cta: "Escolher Este Plano"
    },
    {
      id: 3,
      name: "Performance Total",
      icon: <Crown className="h-8 w-8" />,
      price: "R$ 2.000",
      period: "Por mês",  
      description: "A solução definitiva para marcas que buscam liderança e domínio de mercado.",
      badge: "Premium",
      badgeVariant: "outline" as const,
      features: [
        "Tudo do plano Gestão de Crescimento",
        "Direcionamento criativo e branding contínuo",
        "Design completo e exclusivo",
        "Suporte diário prioritário via WhatsApp",
        "Agendamento e publicação automatizada",
        "Recursos de Inteligência Artificial",
        "Análise preditiva de tendências",
        "Otimização contínua de performance",
        "Personalização de conteúdo em escala"
      ],
      highlight: false,
      cta: "Quero o Premium"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Nossos Planos de
              <span className="block text-primary">Parceria</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Escolha o plano ideal para o momento do seu negócio. 
              Todos são pensados para mulheres empreendedoras que querem resultados reais.
            </p>
          </div>

          {/* Plans Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div 
                key={plan.id}
                className={`relative rounded-3xl p-8 border-2 transition-all duration-300 ${
                  plan.highlight 
                    ? 'border-primary bg-gradient-card shadow-glow scale-105' 
                    : 'border-border bg-background hover:border-primary/50 hover:shadow-elegant'
                }`}
              >
                {/* Badge */}
                <div className="flex justify-between items-start mb-6">
                  <div className={`p-3 rounded-xl ${
                    plan.highlight ? 'bg-primary text-primary-foreground' : 'bg-muted'
                  }`}>
                    {plan.icon}
                  </div>
                  <Badge variant={plan.badgeVariant}>
                    {plan.badge}
                  </Badge>
                </div>

                {/* Plan Info */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {plan.description}
                  </p>
                  
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-4xl font-bold text-primary">
                      {plan.price}
                    </span>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {plan.period}
                  </span>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <ul className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <Button 
                  variant={plan.highlight ? "default" : "outline"} 
                  size="lg" 
                  className="w-full"
                >
                  {plan.cta}
                </Button>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="bg-gradient-hero rounded-3xl p-12 text-white">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Não Sabe Qual Plano Escolher?
              </h3>
              <p className="text-xl leading-relaxed max-w-2xl mx-auto opacity-95 mb-8">
                Vamos conversar e encontrar a solução perfeita para o seu momento e objetivos.
              </p>
              <Button variant="hero" size="lg">
                Agendar Conversa Gratuita
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plans;