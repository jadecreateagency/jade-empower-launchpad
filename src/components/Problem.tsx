import { AlertCircle, Clock, DollarSign, Frown } from "lucide-react";

const Problem = () => {
  const problems = [
    {
      icon: <Clock className="h-8 w-8 text-destructive" />,
      title: "Perdendo Tempo",
      description: "Horas criando conteúdo sem estratégia, sem saber se está no caminho certo."
    },
    {
      icon: <DollarSign className="h-8 w-8 text-destructive" />,
      title: "Gastando Sem Retorno",
      description: "Investindo em marketing digital mas não vendo o resultado esperado no faturamento."
    },
    {
      icon: <Frown className="h-8 w-8 text-destructive" />,
      title: "Frustração Constante",
      description: "Vendo outras empresas crescerem enquanto a sua permanece estagnada nas redes sociais."
    },
    {
      icon: <AlertCircle className="h-8 w-8 text-destructive" />,
      title: "Sem Direcionamento",
      description: "Não sabendo por onde começar ou como medir se está funcionando."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Você Está Cansada de
              <span className="block text-destructive">Não Ver Resultados?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Sabemos exatamente como você se sente. Estes são os principais problemas que 
              mulheres empreendedoras enfrentam todos os dias:
            </p>
          </div>

          {/* Problems Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {problems.map((problem, index) => (
              <div 
                key={index}
                className="flex items-start gap-6 p-8 rounded-2xl bg-background border border-border shadow-sm hover:shadow-elegant transition-all duration-300"
              >
                <div className="flex-shrink-0 p-3 rounded-xl bg-destructive/10">
                  {problem.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {problem.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Solution Teaser */}
          <div className="text-center bg-gradient-hero rounded-3xl p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Mas E Se Pudéssemos Mudar Isso?
            </h3>
            <p className="text-xl leading-relaxed max-w-4xl mx-auto opacity-95 mb-8">
              E se você pudesse ter uma parceira especializada que entende seu negócio, 
              conhece seu público e sabe exatamente como transformar sua presença digital 
              em uma máquina de gerar clientes?
            </p>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3">
              <span className="text-white font-medium">
                É exatamente isso que a Jade Create faz por você
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;