import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "O ebook serve para quem ainda não é MEI?",
    answer: "Sim! O conteúdo foi pensado para MEIs, autônomos e até quem trabalha na informalidade. Você vai aprender desde os primeiros passos de formalização até técnicas avançadas de controle financeiro."
  },
  {
    question: "Preciso de conhecimento prévio em contabilidade?",
    answer: "Não! O material foi escrito em linguagem simples, com exemplos práticos do dia a dia. Qualquer pessoa consegue aplicar as técnicas, mesmo sem formação na área."
  },
  {
    question: "Por quanto tempo terei acesso ao material?",
    answer: "O acesso é vitalício. Uma vez adquirido, o ebook e todos os bônus são seus para sempre, incluindo todas as atualizações futuras gratuitamente."
  },
  {
    question: "Como funciona o pagamento e a entrega?",
    answer: "O pagamento é processado de forma 100% segura. Após a confirmação, você recebe imediatamente o link de acesso por e-mail. É tudo digital, sem esperar entrega física."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container-custom">
        <div className="flex items-center justify-center gap-2 mb-4">
          <HelpCircle className="w-6 h-6 text-primary" />
          <span className="badge-primary">FAQ</span>
        </div>
        
        <h2 className="section-title">
          Perguntas <span className="text-primary">Frequentes</span>
        </h2>
        
        <div className="max-w-2xl mx-auto mt-12 space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="card-custom reveal cursor-pointer"
              style={{ transitionDelay: `${index * 50}ms` }}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="font-bold">{faq.question}</h3>
                <ChevronDown 
                  className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </div>
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-40 mt-4' : 'max-h-0'
                }`}
              >
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
