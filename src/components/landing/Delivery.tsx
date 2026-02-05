import { Download, Gift, Users, Headphones, PartyPopper } from "lucide-react";

const deliveryItems = [
  { icon: Download, text: "Link para download do Ebook em PDF" },
  { icon: Gift, text: "Acesso aos bônus (Planilha, Modelos, Checklist)" },
  { icon: Users, text: "Acesso ao Grupo VIP exclusivo no Telegram" },
  { icon: Headphones, text: "Contato direto com o Suporte" }
];

const Delivery = () => {
  return (
    <section className="py-20">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center reveal">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">
            Como Você <span className="text-primary">Recebe</span>
          </h2>
          
          <p className="text-muted-foreground mb-8">
            Após a confirmação do pagamento, você receberá instantaneamente:
          </p>

          <div className="space-y-4 text-left mb-8">
            {deliveryItems.map((item, index) => (
              <div 
                key={index} 
                className="flex items-center gap-4 bg-card rounded-xl p-4 border border-border"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <span>{item.text}</span>
              </div>
            ))}
          </div>

          <div className="bg-primary/10 rounded-2xl p-6 border border-primary/30">
            <PartyPopper className="w-10 h-10 text-primary mx-auto mb-4" />
            <p className="text-lg font-semibold">
              Seja muito bem-vindo(a) à Comunidade ControleFácil!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Delivery;
