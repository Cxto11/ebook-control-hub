import { CheckCircle, Shield, Zap, RefreshCw } from "lucide-react";

const Hero = () => {
  const scrollToOffer = () => {
    document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToIncluso = () => {
    document.getElementById("incluso")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center py-16 lg:py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-6">
              Você conhece{" "}
              <span className="text-primary">essa sensação</span>?
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              Milhares de microempreendedores (MEI, autônomos, informais) passam pela mesma coisa. 
              A boa notícia? <span className="text-foreground font-semibold">Tudo isso tem solução.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <button onClick={scrollToOffer} className="btn-primary pulse-glow">
                Quero o ControleFácil Agora
              </button>
              <button onClick={scrollToIncluso} className="btn-secondary">
                Ver o que está incluso
              </button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <div className="badge-primary">
                <Shield className="w-4 h-4" />
                Pagamento Seguro
              </div>
              <div className="badge-primary">
                <Zap className="w-4 h-4" />
                Acesso Imediato
              </div>
              <div className="badge-primary">
                <RefreshCw className="w-4 h-4" />
                Garantia 7 dias
              </div>
            </div>
          </div>

          {/* Ebook mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-75" />
              
              {/* Ebook mockup */}
              <div className="relative bg-gradient-to-br from-primary/30 to-primary/10 rounded-2xl p-8 border border-primary/30 shadow-2xl">
                <div className="w-64 sm:w-80 aspect-[3/4] bg-gradient-to-br from-card to-background rounded-lg flex flex-col items-center justify-center p-6 border border-border">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-center mb-2">ControleFácil</h3>
                  <p className="text-sm text-muted-foreground text-center">
                    O Guia Definitivo do Microempreendedor
                  </p>
                  <div className="mt-4 px-4 py-2 bg-accent/20 rounded-full">
                    <span className="text-accent text-sm font-semibold">EBOOK COMPLETO</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
