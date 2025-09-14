import { Heart, Users, Target, Trophy } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Heart className="h-8 w-8 text-secondary" />,
      title: "Feito com Propósito",
      description: "Nascemos para empoderar mulheres empreendedoras que querem expandir seus negócios na internet."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Time de Mulheres",
      description: "Somos formadas por mulheres empreendedoras que sabem exatamente os desafios que você enfrenta."
    },
    {
      icon: <Target className="h-8 w-8 text-accent" />,
      title: "Parceria Real",
      description: "Não somos apenas uma agência. Somos sua parceira de negócios, cuidando das suas redes como se fossem nossas."
    },
    {
      icon: <Trophy className="h-8 w-8 text-secondary" />,
      title: "Resultados Comprovados",
      description: "Nosso método já transformou centenas de pequenos e médios negócios em referências digitais."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Por Que a Jade Create
              <span className="block text-primary">Existe?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Sabemos como é frustrante investir tempo e dinheiro em marketing digital sem ver resultados. 
              É por isso que criamos um método que realmente funciona.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {values.map((value, index) => (
              <div 
                key={index}
                className="text-center p-6 rounded-2xl bg-gradient-card shadow-elegant hover:shadow-glow transition-all duration-300 group"
              >
                <div className="mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>

          {/* Mission Statement */}
          <div className="bg-gradient-primary rounded-3xl p-12 text-center text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Nossa Missão
            </h3>
            <p className="text-xl leading-relaxed max-w-4xl mx-auto opacity-95">
              Queremos que essas mulheres saiam do jogo de só perder tempo, dinheiro e ter frustração 
              achando que a internet não funciona e mostrar como o nosso método pode 
              <span className="font-semibold"> finalmente virar o jogo delas.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;