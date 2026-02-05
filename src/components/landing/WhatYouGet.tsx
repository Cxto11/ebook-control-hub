import { Check, Shield, TrendingUp } from "lucide-react";

const frente1Items = [
  "O MEI Descomplicado: Direitos, Deveres e o Limite dos R$ 81 mil",
  "DAS na Veia: Guia Passo a Passo para Pagar Certo",
  "Nota Fiscal Eletrônica: Por Quê, Quando e Como Emitir",
  "A Separação que Salva: Ganhos PF vs PJ na Prática",
  "O Segredo do IR: Declarando Sem Erro",
  "Deduções que Valem Ouro: Despesas que Reduzem Imposto",
  "Bateu os R$ 81 mil? Migração para Simples Nacional",
  "Notificação da RFB: O Que Fazer (e NUNCA Fazer)",
  "Mitos: PIX Taxado? Declaração dos R$ 5 mil?",
  "Kit de Ferramentas Oficiais Gratuitas"
];

const frente2Items = [
  "Sistema Definitivo para Organizar Receitas e Despesas",
  "Do Papel ao Digital: Migre em 1 Hora",
  "Técnica \"Escudo Anti-Calote\": Da Análise à Cobrança",
  "Scripts Prontos de Cobrança para WhatsApp e Ligações",
  "A Fórmula Simples do Lucro Líquido Real",
  "Método \"3 Minutos por Dia\" para Guardar Comprovantes",
  "Negociação com Devedores: Recupere Mantendo o Cliente",
  "Reinvestimento Inteligente: Quanto Reinjetar para Crescer",
  "Fidelização: Ofertas VIP, Brindes, Agradecimentos",
  "Plano de Ação 30 Dias: Do Caos ao Controle Total"
];

const WhatYouGet = () => {
  return (
    <section id="incluso" className="py-20">
      <div className="container-custom">
        <h2 className="section-title">
          O Que Você <span className="text-primary">Vai Levar</span>
        </h2>
        <p className="section-subtitle">
          Este não é apenas mais um ebook. É um <strong className="text-foreground">Manual de Sobrevivência e Crescimento</strong> para o seu negócio.
        </p>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Frente 1 */}
          <div className="card-custom reveal-left">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                <Shield className="w-6 h-6 text-accent" />
              </div>
              <div>
                <span className="badge-accent text-xs">FRENTE 1</span>
                <h3 className="text-xl font-bold">Fim do Medo da Receita Federal</h3>
              </div>
            </div>
            <ul className="space-y-3">
              {frente1Items.map((item, index) => (
                <li key={index} className="checklist-item">
                  <span className="checklist-icon">
                    <Check className="w-3 h-3" />
                  </span>
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Frente 2 */}
          <div className="card-custom reveal-right">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <div>
                <span className="badge-primary text-xs">FRENTE 2</span>
                <h3 className="text-xl font-bold">Controle Financeiro Poderoso</h3>
              </div>
            </div>
            <ul className="space-y-3">
              {frente2Items.map((item, index) => (
                <li key={index} className="checklist-item">
                  <span className="checklist-icon">
                    <Check className="w-3 h-3" />
                  </span>
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouGet;
