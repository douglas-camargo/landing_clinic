import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Heart } from 'lucide-react';
import Logo from '../atoms/Logo';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { label: 'Inicio', id: 'inicio' },
    { label: 'Servicios', id: 'servicios' },
    { label: 'Especialistas', id: 'especialistas' },
    { label: 'Testimonios', id: 'testimonios' },
    { label: 'Contacto', id: 'contacto' }
  ];

  const services = [
    'Cardiología', 'Neurología', 'Oftalmología', 'Pediatría',
    'Medicina General', 'Medicina Deportiva', 'Traumatología', 'Medicina Interna'
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Logo showText={true} className="text-white" />
            <p className="text-gray-400 leading-relaxed">
              Más de 15 años brindando atención médica de calidad mundial en el corazón de Caracas. 
              Tu salud es nuestra prioridad.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button 
                    onClick={() => scrollToSection(link.id)} 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Servicios</h3>
            <ul className="space-y-2 text-gray-400">
              {services.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contactar</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <div className="text-gray-400">
                  <p>Av. Francisco de Miranda</p>
                  <p>Torre Parque Cristal, Piso 15</p>
                  <p>Campo Alegre, Caracas</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <div className="text-gray-400">
                  <p>+58 212 555-0123</p>
                  <p>+58 412 555-0456</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <p className="text-gray-400">info@clinicacaracas.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Banner */}
        <div className="mt-12 p-6 bg-red-600 rounded-2xl text-center">
          <h3 className="text-2xl font-bold mb-2">🚨 Emergencias 24/7</h3>
          <p className="text-xl mb-4">Para emergencias médicas, llama inmediatamente</p>
          <a href="tel:+584125550456" className="text-3xl font-bold hover:underline">
            +58 412 555-0456
          </a>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 text-gray-400 mb-4 md:mb-0">
              <span>© 2025 Clínica Caracas. Todos los derechos reservados.</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400">
              <span>Hecho con</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>para tu salud</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}