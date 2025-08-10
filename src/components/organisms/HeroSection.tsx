import { ArrowRight, Shield, Clock, Heart } from 'lucide-react';
import Button from '../atoms/Button';
import StatCard from '../molecules/StatCard';

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="pt-32 pb-16 bg-gradient-to-br from-blue-50 to-green-50 min-h-screen flex items-center"
      aria-labelledby="hero-heading"
      role="banner"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <header className="space-y-4">
              <h1 
                id="hero-heading"
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
              >
                <span className="block">Tu salud es</span>
                <span className="text-blue-600">nuestra prioridad</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Atención médica de calidad mundial en el corazón de Caracas. 
                Contamos con los mejores especialistas y tecnología de vanguardia.
              </p>
            </header>

            {/* Stats */}
            <div 
              className="grid md:grid-cols-3 gap-6"
              role="region"
              aria-label="Estadísticas de la clínica"
            >
              <StatCard 
                icon={Shield} 
                value="15+" 
                label="Años de experiencia" 
                iconColor="text-blue-600"
              />
              <StatCard 
                icon={Heart} 
                value="50K+" 
                label="Pacientes atendidos" 
                iconColor="text-green-600"
              />
              <StatCard 
                icon={Clock} 
                value="24/7" 
                label="Emergencias" 
                iconColor="text-yellow-600"
              />
            </div>

            {/* CTA buttons */}
            <nav 
              className="flex flex-col sm:flex-row gap-4"
              aria-label="Acciones principales"
            >
              <Button 
                onClick={() => scrollToSection('contact')}
                icon={ArrowRight}
                size="lg"
                aria-label="Agendar cita médica"
              >
                Agendar Cita
              </Button>
              <Button 
                onClick={() => scrollToSection('services')}
                variant="outline"
                size="lg"
                aria-label="Ver todos los servicios médicos"
              >
                Ver Servicios
              </Button>
            </nav>
          </div>

          {/* Right content - Image */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src="https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Equipo de profesionales médicos en la Clínica Caracas atendiendo pacientes con tecnología de vanguardia" 
                className="rounded-2xl shadow-2xl w-full h-[600px] object-cover"
                loading="eager"
                decoding="async"
              />
            </div>
            {/* Floating cards */}
            <div 
              className="absolute -top-6 -left-6 bg-white p-4 rounded-xl shadow-lg z-20 animate-bounce"
              role="status"
              aria-label="Estado de disponibilidad"
            >
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full" aria-hidden="true"></div>
                <span className="text-sm font-medium">Consulta disponible</span>
              </div>
            </div>
            <div 
              className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg z-20"
              role="status"
              aria-label="Nivel de satisfacción de pacientes"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">98%</div>
                <div className="text-sm text-gray-600">Satisfacción</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}