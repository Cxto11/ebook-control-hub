import { Download, BookOpen } from "lucide-react";

const FreeSample = () => {
  return (
    <section className="py-20">
      <div className="container-custom">
        <div className="flex items-center justify-center gap-2 mb-4">
          <BookOpen className="w-6 h-6 text-primary" />
          <span className="badge-primary">AMOSTRA GRÁTIS</span>
        </div>
        
        <h2 className="section-title">
          Veja a <span className="text-primary">Qualidade do Conteúdo</span>
        </h2>
        <p className="section-subtitle">
          Confira trechos reais do ebook antes de tomar sua decisão
        </p>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Trecho 1 */}
          <div className="quote-card reveal-left">
            <span className="badge-primary mb-4">Trecho do Capítulo 1</span>
            <h3 className="text-xl font-bold mb-4">O Limite Sagrado dos R$ 81 mil</h3>
            <p className="text-muted-foreground leading-relaxed">
              "A receita bruta é o total de tudo que você faturou, sem descontar despesas. 
              O prazo para pagamento do DAS é até o último dia do mês seguinte ao período de apuração. 
              Use a planilha para projetar seus ganhos e evitar surpresas..."
            </p>
          </div>

          {/* Trecho 2 */}
          <div className="quote-card reveal-right">
            <span className="badge-primary mb-4">Trecho do Capítulo 14</span>
            <h3 className="text-xl font-bold mb-4">Script de Cobrança WhatsApp</h3>
            <div className="space-y-4">
              <div className="bg-background/50 rounded-lg p-4">
                <p className="text-sm text-accent font-semibold mb-2">1ª Mensagem (Lembrete Amigável):</p>
                <p className="text-muted-foreground text-sm italic">
                  "Olá [Nome]! Tudo bem? 😊 Passando para lembrar que o pagamento de R$ [valor] referente a [serviço/produto] venceu em [data]. Aconteceu alguma coisa? Estou à disposição para ajudar!"
                </p>
              </div>
              <div className="bg-background/50 rounded-lg p-4">
                <p className="text-sm text-accent font-semibold mb-2">2ª Mensagem (3 dias depois - Firmeza Educada):</p>
                <p className="text-muted-foreground text-sm italic">
                  "Oi [Nome], vi que ainda não conseguimos resolver a pendência de R$ [valor]. Podemos combinar uma forma de pagamento? Preciso regularizar isso para manter nosso bom relacionamento."
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button className="btn-secondary">
            <Download className="w-5 h-5" />
            Baixar Amostra (PDF)
          </button>
        </div>
      </div>
    </section>
  );
};

export default FreeSample;
