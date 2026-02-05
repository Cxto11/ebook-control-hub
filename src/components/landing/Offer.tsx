import { useEffect, useState } from "react";
import { Check, Clock, Star, ShieldCheck, Zap, CreditCard } from "lucide-react";

const included = [
  "20 Capítulos Práticos e Aplicáveis",
  "Planilha ControleFácil Editável (R$ 97)",
  "Kit de Comunicação com Scripts (R$ 47)",
  "Checklist de Sobrevivência Mensal (R$ 27)",
  "Guia Rápido de Emergência RFB (R$ 26)",
  "Acesso ao Grupo VIP no Telegram",
  "Atualizações Gratuitas"
];

const Offer = () => {
  const [timeLeft, setTimeLeft] = useState({ minutes: 55, seconds: 23 });

  useEffect(() => {
    // Check localStorage for saved time
    const savedTime = localStorage.getItem("controlefacil-countdown");
    const savedTimestamp = localStorage.getItem("controlefacil-timestamp");
    
    if (savedTime && savedTimestamp) {
      const elapsed = Math.floor((Date.now() - parseInt(savedTimestamp)) / 1000);
      const totalSaved = JSON.parse(savedTime);
      const totalSeconds = totalSaved.minutes * 60 + totalSaved.seconds - elapsed;
      
      if (totalSeconds > 0) {
        setTimeLeft({
          minutes: Math.floor(totalSeconds / 60),
          seconds: totalSeconds % 60
        });
      }
    }

    const interval = setInterval(() => {
      setTimeLeft(prev => {
        const totalSeconds = prev.minutes * 60 + prev.seconds - 1;
        
        if (totalSeconds <= 0) {
          // Reset to 55:23 when reaches 0
          return { minutes: 55, seconds: 23 };
        }
        
        const newTime = {
          minutes: Math.floor(totalSeconds / 60),
          seconds: totalSeconds % 60
        };
        
        // Save to localStorage
        localStorage.setItem("controlefacil-countdown", JSON.stringify(newTime));
        localStorage.setItem("controlefacil-timestamp", Date.now().toString());
        
        return newTime;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="oferta" className="py-20">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto">
          {/* Countdown */}
          <div className="text-center mb-8 reveal">
            <span className="badge-accent mb-4 inline-flex items-center gap-2">
              <Clock className="w-4 h-4" />
              PROMOÇÃO POR TEMPO LIMITADO
            </span>
            
            <div className="flex items-center justify-center gap-4 my-6">
              <div className="bg-card rounded-xl p-4 min-w-[80px]">
                <span className="countdown-digit">{String(timeLeft.minutes).padStart(2, '0')}</span>
                <p className="text-xs text-muted-foreground mt-1">minutos</p>
              </div>
              <span className="text-4xl font-bold text-accent">:</span>
              <div className="bg-card rounded-xl p-4 min-w-[80px]">
                <span className="countdown-digit">{String(timeLeft.seconds).padStart(2, '0')}</span>
                <p className="text-xs text-muted-foreground mt-1">segundos</p>
              </div>
            </div>
          </div>

          {/* Offer card */}
          <div className="card-custom reveal border-2 border-primary/30 relative overflow-hidden">
            {/* Best seller badge */}
            <div className="absolute top-4 right-4">
              <span className="badge-primary inline-flex items-center gap-1">
                <Star className="w-3 h-3 fill-primary" />
                MAIS VENDIDO
              </span>
            </div>

            <div className="text-center pt-4">
              <h3 className="text-2xl font-bold mb-2">ControleFácil – Ebook Completo</h3>
              
              {/* Price */}
              <div className="my-6">
                <p className="price-original">R$ 299,00</p>
                <div className="flex items-center justify-center gap-3 mt-2">
                  <span className="badge-accent">-87% OFF</span>
                </div>
                <p className="price-current mt-3">R$ 39,99</p>
                <p className="text-muted-foreground mt-2">Pagamento único • Acesso imediato</p>
              </div>

              {/* What's included */}
              <div className="text-left bg-background/50 rounded-xl p-6 mb-6">
                <p className="font-bold text-sm uppercase tracking-wider text-muted-foreground mb-4">
                  O que está incluso:
                </p>
                <ul className="space-y-3">
                  {included.map((item, index) => (
                    <li key={index} className="checklist-item">
                      <span className="checklist-icon">
                        <Check className="w-3 h-3" />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <button className="btn-primary w-full text-xl pulse-glow">
                <CreditCard className="w-6 h-6" />
                Comprar Agora
              </button>

              {/* Microcopy */}
              <div className="flex flex-wrap items-center justify-center gap-4 mt-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-primary" />
                  Pagamento seguro
                </span>
                <span className="flex items-center gap-1">
                  <Zap className="w-4 h-4 text-primary" />
                  Conteúdo digital
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4 text-primary" />
                  Acesso imediato
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
