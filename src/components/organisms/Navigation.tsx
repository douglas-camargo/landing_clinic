import { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import Logo from '../atoms/Logo';
import Button from '../atoms/Button';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const menuItems = [
    { label: 'Inicio', id: 'inicio' },
    { label: 'Servicios', id: 'servicios' },
    { label: 'Especialistas', id: 'especialistas' },
    { label: 'Testimonios', id: 'testimonios' },
    { label: 'Contacto', id: 'contacto' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      {/* Top bar */}
      <div className="bg-blue-600 text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone className="w-4 h-4" />
              <span>+58 212 555-0123</span>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              <MapPin className="w-4 h-4" />
              <span>Caracas, Venezuela</span>
            </div>
          </div>
          <div className="text-sm">
            Lun - Vie: 8:00 AM - 6:00 PM | Sáb: 8:00 AM - 2:00 PM
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Logo />

          {/* Desktop menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                {item.label}
              </button>
            ))}
            <Button onClick={() => scrollToSection('contacto')}>
              Agendar Cita
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left py-2 text-gray-700 hover:text-blue-600"
              >
                {item.label}
              </button>
            ))}
            <Button 
              onClick={() => scrollToSection('contacto')}
              className="w-full mt-4"
            >
              Agendar Cita
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
}