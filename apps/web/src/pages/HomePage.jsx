import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Zap, Leaf, TrendingUp, Wrench, Battery, ClipboardCheck, FileText, HardHat, PiggyBank, Users, Award, Settings, Shield, Headphones, Lightbulb } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import BenefitCard from '@/components/BenefitCard.jsx';
import StepCard from '@/components/StepCard.jsx';
import DifferentialCard from '@/components/DifferentialCard.jsx';
import WhatsAppButton from '@/components/WhatsAppButton.jsx';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
function HomePage() {
  const benefits = [{
    icon: PiggyBank,
    title: 'Economia na conta de luz',
    description: 'Reduza até 25% dos custos com energia elétrica e tenha retorno do investimento em poucos anos.'
  }, {
    icon: Leaf,
    title: 'Sustentabilidade',
    description: 'Contribua para um planeta mais limpo utilizando energia renovável e reduzindo emissões de CO₂.'
  }, {
    icon: TrendingUp,
    title: 'Valorização do imóvel',
    description: 'Imóveis com energia solar têm valorização média de 12% no mercado imobiliário.'
  }, {
    icon: Wrench,
    title: 'Baixa manutenção',
    description: 'Painéis solares requerem manutenção mínima, apenas limpeza periódica para máxima eficiência.'
  }, {
    icon: Battery,
    title: 'Independência energética',
    description: 'Produza sua própria energia e proteja-se contra aumentos nas tarifas de eletricidade.'
  }];
  const steps = [{
    number: '1',
    title: 'Análise do consumo',
    description: 'Avaliamos seu histórico de consumo e necessidades energéticas para dimensionar o sistema ideal.'
  }, {
    number: '2',
    title: 'Projeto personalizado',
    description: 'Desenvolvemos um projeto sob medida considerando área disponível, orientação solar e características do local.'
  }, {
    number: '3',
    title: 'Instalação profissional',
    description: 'Nossa equipe técnica realiza a instalação completa com equipamentos de alta qualidade e segurança.'
  }, {
    number: '4',
    title: 'Economia gerada',
    description: 'Comece a economizar imediatamente e monitore a geração de energia em tempo real pelo aplicativo.'
  }];
  const testimonials = [{
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    name: 'Carlos Mendes',
    location: 'São Paulo, SP',
    rating: 5,
    testimonial: 'Instalei o sistema há 8 meses e já economizei mais de R$ 3.200 na conta de luz. O atendimento foi impecável e a instalação muito rápida.'
  }, {
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
    name: 'Ana Paula Silva',
    location: 'Campinas, SP',
    rating: 5,
    testimonial: 'Melhor investimento que fiz para minha casa. A equipe é muito profissional e o sistema funciona perfeitamente, mesmo em dias nublados.'
  }, {
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
    name: 'Roberto Santos',
    location: 'Santos, SP',
    rating: 5,
    testimonial: 'Recomendo muito! Além da economia, tenho a satisfação de usar energia limpa. O suporte pós-venda é excelente.'
  }];
  const differentials = [{
    icon: Users,
    title: 'Atendimento personalizado',
    description: 'Consultoria completa desde o primeiro contato até o pós-venda, com acompanhamento dedicado.'
  }, {
    icon: Award,
    title: 'Equipamentos de qualidade',
    description: 'Trabalhamos apenas com marcas líderes de mercado, garantindo eficiência e durabilidade.'
  }, {
    icon: HardHat,
    title: 'Instalação profissional',
    description: 'Equipe técnica certificada e experiente, seguindo todas as normas de segurança.'
  }, {
    icon: Shield,
    title: 'Garantia completa',
    description: 'Garantia de 25 anos nos painéis e 10 anos nos inversores, além de seguro contra danos.'
  }, {
    icon: Headphones,
    title: 'Suporte técnico',
    description: 'Assistência técnica rápida e eficiente sempre que você precisar.'
  }, {
    icon: Lightbulb,
    title: 'Expertise comprovada',
    description: 'Mais de 750 projetos instalados com índice de satisfação de 98% dos clientes.'
  }];
  const faqs = [{
    question: 'Como funciona a energia solar em dias nublados?',
    answer: 'Os painéis solares continuam gerando energia em dias nublados, embora com eficiência reduzida (cerca de 25-40% da capacidade). O sistema é dimensionado considerando essas variações climáticas. Além disso, você permanece conectado à rede elétrica, que fornece energia quando necessário.'
  }, {
    question: 'Qual é o tempo de retorno do investimento?',
    answer: 'O retorno do investimento varia entre 4 a 7 anos, dependendo do consumo de energia, tamanho do sistema e tarifa local. Considerando que os painéis têm vida útil de 25+ anos, você terá muitos anos de economia após recuperar o investimento inicial.'
  }, {
    question: 'Qual é a manutenção necessária?',
    answer: 'A manutenção é mínima. Recomendamos limpeza dos painéis a cada 6 meses (ou após períodos de seca prolongada) e inspeção anual do sistema. A chuva já faz boa parte da limpeza naturalmente. Não há peças móveis que se desgastem.'
  }, {
    question: 'Qual é a vida útil dos painéis solares?',
    answer: 'Os painéis solares têm vida útil superior a 25 anos, mantendo cerca de 80% da eficiência original após esse período. Os inversores têm vida útil de 10-15 anos. Todos os equipamentos que fornecemos têm garantia do fabricante.'
  }, {
    question: 'Posso instalar energia solar em apartamento?',
    answer: 'Sim! Existem duas opções: instalação no telhado do condomínio (com aprovação em assembleia) ou participação em fazendas solares compartilhadas, onde você recebe créditos de energia sem precisar instalar painéis no local.'
  }];
  return <>
      <Helmet>
        <title>Light Energy Solar - Economia na Conta de Luz com Energia Solar</title>
        <meta name="description" content="Reduza até 95% da sua conta de luz com energia solar. Instalação profissional, equipamentos de qualidade e garantia completa. Solicite seu orçamento gratuito." />
      </Helmet>

      <Header />
      <WhatsAppButton variant="floating" />

      <main>
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1698755839143-b495b12e86ff)'
        }}>
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-gray-900/80 to-[#8DBA2F]/70" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8
          }}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight" style={{
              letterSpacing: '-0.02em',
              textWrap: 'balance'
            }}>
                Economia na conta de luz com energia solar
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed">
                Reduza até 95% dos seus custos com energia elétrica e contribua para um futuro mais sustentável
              </p>
              <WhatsAppButton variant="inline" text="Solicitar Orçamento no WhatsApp" className="text-lg" />
            </motion.div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent" />
        </section>

        <section id="sobre" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6" style={{
              textWrap: 'balance'
            }}>
                Sobre a Light Energy Solar
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Somos especialistas em energia solar fotovoltaica com mais de 750 projetos instalados em todo o estado de São Paulo. Nossa missão é tornar a energia limpa acessível para residências e empresas, oferecendo soluções personalizadas com os melhores equipamentos do mercado.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Com uma equipe técnica altamente qualificada e certificada, garantimos instalações seguras, eficientes e com o melhor custo-benefício. Nosso compromisso vai além da instalação: acompanhamos nossos clientes durante toda a vida útil do sistema, oferecendo suporte técnico e manutenção especializada.
              </p>
            </motion.div>
          </div>
        </section>

        <section id="beneficios" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" style={{
              textWrap: 'balance'
            }}>
                Benefícios da energia solar
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Descubra as vantagens de investir em energia solar para sua casa ou empresa
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.slice(0, 3).map((benefit, index) => <BenefitCard key={index} {...benefit} index={index} />)}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto">
              {benefits.slice(3).map((benefit, index) => <BenefitCard key={index + 3} {...benefit} index={index + 3} />)}
            </div>

            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6,
            delay: 0.5
          }} className="text-center mt-16">
              <WhatsAppButton variant="inline" text="Quero Economizar Agora" />
            </motion.div>
          </div>
        </section>

        <section id="como-funciona" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" style={{
              textWrap: 'balance'
            }}>
                Como funciona o processo
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Do primeiro contato até a economia na sua conta de luz
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {steps.map((step, index) => <StepCard key={index} {...step} index={index} />)}
            </div>
          </div>
        </section>

        <section id="projetos" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" style={{
              textWrap: 'balance'
            }}>
                Projetos
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Veja alguns dos nossos projetos instalados
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.5
            }} className="rounded-2xl overflow-hidden shadow-lg shadow-[#8DBA2F]/10 hover:shadow-xl hover:shadow-[#8DBA2F]/20 transition-all duration-300">
                <img src="https://images.unsplash.com/photo-1608806667067-66ebd8b169e8" alt="Instalação de painéis solares em telhado residencial" className="w-full h-64 object-cover" />
              </motion.div>
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.5,
              delay: 0.1
            }} className="rounded-2xl overflow-hidden shadow-lg shadow-[#8DBA2F]/10 hover:shadow-xl hover:shadow-[#8DBA2F]/20 transition-all duration-300">
                <img src="https://images.unsplash.com/photo-1550078233-6b76d560c924" alt="Sistema de energia solar fotovoltaica completo" className="w-full h-64 object-cover" />
              </motion.div>
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.5,
              delay: 0.2
            }} className="rounded-2xl overflow-hidden shadow-lg shadow-[#8DBA2F]/10 hover:shadow-xl hover:shadow-[#8DBA2F]/20 transition-all duration-300">
                <img src="https://images.unsplash.com/photo-1660330589211-a78be8472d73" alt="Painéis solares instalados em área comercial" className="w-full h-64 object-cover" />
              </motion.div>
            </div>

            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6,
            delay: 0.3
          }} className="text-center mt-16">
              <WhatsAppButton variant="inline" text="Solicitar Meu Orçamento" />
            </motion.div>
          </div>
        </section>

        <section id="diferenciais" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" style={{
              textWrap: 'balance'
            }}>
                Nossos diferenciais
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Por que escolher a Light Energy Solar para seu projeto
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {differentials.map((differential, index) => <DifferentialCard key={index} {...differential} index={index} />)}
            </div>
          </div>
        </section>

        <section id="faq" className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" style={{
              textWrap: 'balance'
            }}>
                Perguntas frequentes
              </h2>
              <p className="text-lg text-gray-600">
                Tire suas dúvidas sobre energia solar
              </p>
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6,
            delay: 0.2
          }}>
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => <AccordionItem key={index} value={`item-${index}`} className="bg-gray-50 rounded-2xl px-6 border-none shadow-sm hover:shadow-md transition-shadow duration-200">
                    <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-[#8DBA2F] py-6">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 leading-relaxed pb-6">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>)}
              </Accordion>
            </motion.div>
          </div>
        </section>

        <section id="contato" className="py-20 bg-gradient-to-br from-[#8DBA2F] to-[#7AA528]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }}>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{
              textWrap: 'balance'
            }}>
                Pronto para começar a economizar?
              </h2>
              <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
                Entre em contato agora e receba um orçamento personalizado sem compromisso
              </p>
              <WhatsAppButton variant="inline" text="Falar com Especialista" className="bg-white text-[#8DBA2F] hover:bg-gray-50 shadow-2xl" />
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>;
}
export default HomePage;