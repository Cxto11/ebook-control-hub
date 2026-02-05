import { AlertTriangle, DollarSign, Calendar, Brain } from "lucide-react";

const painPoints = [
  {
    icon: AlertTriangle,
    title: "Medo da Receita Federal",
    description: "Aquele frio na barriga ao pensar em impostos, multas e fiscalizações."
  },
  {
    icon: DollarSign,
    title: "Confusão Financeira",
    description: "Dificuldade em separar o dinheiro da empresa do pessoal."
  },
  {
    icon: Calendar,
    title: "Contas Esquecidas",
    description: "Medo de esquecer uma conta, tomar calote ou não saber se está lucrando."
  },
  {
    icon: Brain,
    title: "Sobrecarga Mental",
    description: "Anotar tudo em papéis soltos e confiar apenas na memória."
  }
];

const PainPoints = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container-custom">
        <h2 className="section-title">
          Você se identifica com <span className="text-accent">algum desses?</span>
        </h2>
        <p className="section-subtitle">
          Se você marcou pelo menos um, esse material foi feito para você.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {painPoints.map((pain, index) => (
            <div 
              key={index} 
              className="card-custom reveal group"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <pain.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-2">{pain.title}</h3>
              <p className="text-muted-foreground">{pain.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
