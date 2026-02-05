import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Márcia",
    role: "Confeiteira MEI",
    text: "Finalmente entendi como declarar meu IR sem medo. O passo a passo é tão claro que até quem nunca mexeu com isso consegue seguir. Já recomendei para todas as minhas colegas!",
    stars: 5
  },
  {
    name: "Roberto",
    role: "Técnico em Informática",
    text: "Usei o script de cobrança e em 2 dias recuperei R$ 1.200 que já tinha dado como perdido. O tom das mensagens é perfeito, firme mas educado. Valeu muito mais do que investi.",
    stars: 5
  },
  {
    name: "Ana",
    role: "Designer Freelancer",
    text: "A planilha bônus organizou minha vida. Antes eu não sabia nem se estava tendo lucro ou prejuízo. Agora tenho controle total em 5 minutos por dia. Material indispensável!",
    stars: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container-custom">
        <h2 className="section-title">
          O Que Dizem <span className="text-primary">Nossos Alunos</span>
        </h2>
        <p className="section-subtitle">
          Resultados reais de empreendedores como você
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="card-custom reveal"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              
              <Quote className="w-8 h-8 text-primary/30 mb-4" />
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-bold text-lg">
                    {testimonial.name[0]}
                  </span>
                </div>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
