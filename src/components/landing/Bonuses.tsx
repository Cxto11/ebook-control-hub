import { FileSpreadsheet, MessageSquare, CheckSquare, AlertCircle, Gift } from "lucide-react";

const bonuses = [
  {
    icon: FileSpreadsheet,
    title: "Planilha ControleFácil Pronta",
    price: "R$ 97",
    description: "Fluxo de Caixa, Controle de Inadimplentes e Cálculo de Lucro"
  },
  {
    icon: MessageSquare,
    title: "Kit de Comunicação",
    price: "R$ 47",
    description: "Modelos de cobrança, agradecimento e ofertas VIP"
  },
  {
    icon: CheckSquare,
    title: "Checklist de Sobrevivência Mensal",
    price: "R$ 27",
    description: "15 minutos/dia para nunca mais se perder"
  },
  {
    icon: AlertCircle,
    title: "Guia Rápido de Emergência RFB",
    price: "R$ 26",
    description: "Fluxograma para situações críticas"
  }
];

const Bonuses = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container-custom">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Gift className="w-6 h-6 text-accent" />
          <span className="badge-accent">BÔNUS EXCLUSIVOS</span>
        </div>
        
        <h2 className="section-title">
          Leve Junto <span className="text-accent">Sem Pagar a Mais</span>
        </h2>
        <p className="section-subtitle">
          Valor total dos bônus: <span className="text-accent font-bold">R$ 197,00</span>
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bonuses.map((bonus, index) => (
            <div 
              key={index} 
              className="card-custom reveal text-center group"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-accent/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <bonus.icon className="w-7 h-7 text-accent" />
              </div>
              <div className="badge-accent mb-3">{bonus.price}</div>
              <h3 className="text-lg font-bold mb-2">{bonus.title}</h3>
              <p className="text-sm text-muted-foreground">{bonus.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bonuses;
