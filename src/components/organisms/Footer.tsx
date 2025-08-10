import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Heart } from 'lucide-react';
import Logo from '../atoms/Logo';
import { quickLinks, services, companyInfo, socialLinks, emergencyInfo } from '../../data/footer';
import { contactInfo } from '../../data/navigation';
import { useScrollToSection } from '../../hooks';

export default function Footer() {
  const scrollToSection = useScrollToSection();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Logo showText={true} className="text-white" />
            <p className="text-gray-400 leading-relaxed">
              {companyInfo.description}
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
                  <p>{contactInfo.address.street}</p>
                  <p>{contactInfo.address.building}</p>
                  <p>{contactInfo.address.city}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <div className="text-gray-400">
                  <p>{contactInfo.phone}</p>
                  <p>{contactInfo.emergencyPhone}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <p className="text-gray-400">{contactInfo.email}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Banner */}
        <div className="mt-12 p-6 bg-red-600 rounded-2xl text-center">
          <h3 className="text-2xl font-bold mb-2">{emergencyInfo.title}</h3>
          <p className="text-xl mb-4">{emergencyInfo.description}</p>
          <a href={`tel:${emergencyInfo.phone}`} className="text-3xl font-bold hover:underline">
            {emergencyInfo.phone}
          </a>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 text-gray-400 mb-4 md:mb-0">
              <span>© {companyInfo.year} {companyInfo.name}. Todos los derechos reservados.</span>
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