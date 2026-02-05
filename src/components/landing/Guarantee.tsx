import { ShieldCheck } from "lucide-react";

const Guarantee = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center reveal">
          <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
            <ShieldCheck className="w-10 h-10 text-primary" />
          </div>
          
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Garantia "Controle ou Seu Dinheiro de Volta"
          </h2>
          
          <p className="text-muted-foreground leading-relaxed">
            Você tem <span className="text-primary font-bold">7 dias inteiros</span> para explorar todo o conteúdo, 
            aplicar as técnicas e ver os resultados. Se por qualquer motivo você não ficar satisfeito, 
            basta enviar um e-mail que <span className="text-primary font-bold">devolvo 100% do seu dinheiro</span>, 
            sem questionamentos, sem burocracia. O risco é todo meu.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;
