import React from 'react';
import { MapPin, Phone, Mail, Instagram, MessageCircle } from 'lucide-react';

function Footer() {
  const whatsappUrl = 'https://wa.me/message/27DNWQR3MTEZM1';

  return (
    <footer className="bg-gray-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img
                src="https://horizons-cdn.hostinger.com/95a23b10-fddd-4873-a058-6a7606035ad6/8d15df6e1dfbb9b5213d5dd9ad56ac61.png"
                alt="Light Energy Solar Logo"
                className="w-12 h-12 object-contain"
              />
              <span className="text-xl font-bold text-white">
                Light Energy Solar
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Transformando luz solar em economia e sustentabilidade para o seu lar ou empresa.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Contato</h3>
            <div className="space-y-4">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-400 hover:text-[#8DBA2F] transition-colors duration-200">
                <Phone className="w-5 h-5" />
                <span>(19) 98873-5696</span>
              </a>
              <a href="mailto:lightenergy@outlook.com.br" className="flex items-center gap-3 text-gray-400 hover:text-[#8DBA2F] transition-colors duration-200">
                <Mail className="w-5 h-5" />
                <span>lightenergy@outlook.com.br</span>
              </a>
              <div className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <span>Rua São José,1706 - Centro (Tupi), Piracicaba</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Links rápidos</h3>
            <nav className="space-y-3">
              <a href="#sobre" className="block text-gray-400 hover:text-[#8DBA2F] transition-colors duration-200">
                Sobre nós
              </a>
              <a href="#beneficios" className="block text-gray-400 hover:text-[#8DBA2F] transition-colors duration-200">
                Benefícios
              </a>
              <a href="#projetos" className="block text-gray-400 hover:text-[#8DBA2F] transition-colors duration-200">
                Projetos
              </a>
              <a href="#faq" className="block text-gray-400 hover:text-[#8DBA2F] transition-colors duration-200">
                FAQ
              </a>
            </nav>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Redes sociais</h3>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/light.energy.solar/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center text-gray-400 hover:bg-[#8DBA2F] hover:text-white transition-all duration-200" aria-label="Instagram">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://wa.me/message/27DNWQR3MTEZM1" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center text-gray-400 hover:bg-[#8DBA2F] hover:text-white transition-all duration-200" aria-label="WhatsApp">
                <MessageCircle className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 Light Energy Solar. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-500 hover:text-[#8DBA2F] transition-colors duration-200">
              Política de Privacidade
            </a>
            <a href="#" className="text-gray-500 hover:text-[#8DBA2F] transition-colors duration-200">
              Termos de Serviço
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;