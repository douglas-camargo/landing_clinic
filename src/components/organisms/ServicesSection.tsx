import ServiceCard from '../molecules/ServiceCard';
import Button from '../atoms/Button';
import { services } from '../../data/services';
import StaggeredAnimation from '../atoms/StaggeredAnimation';

export default function ServicesSection() {
  return (
    <section 
      id="services" 
      className="py-20 bg-white scroll-mt-10"
      aria-labelledby="services-heading"
    >
      <div className="container mx-auto px-4">
        <header className="text-center mb-16">
          <h2 
            id="services-heading"
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Nuestros Servicios Médicos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos una amplia gama de servicios médicos especializados con los más altos estándares de calidad y tecnología de vanguardia
          </p>
        </header>

        <StaggeredAnimation 
          direction="alternate"
          staggerDelay={0.15}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <div key={index} role="listitem">
              <ServiceCard {...service} />
            </div>
          ))}
        </StaggeredAnimation>

        {/* Call to action */}
        <aside 
          className="text-center mt-16"
          role="complementary"
          aria-label="Información de contacto para servicios médicos"
        >
          <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              ¿Necesitas atención médica especializada?
            </h3>
            <p className="text-xl mb-6 opacity-90">
              Nuestro equipo de especialistas está listo para atenderte con la mejor calidad médica
            </p>
            <Button 
              variant="outline" 
              className="bg-white text-blue-600 hover:bg-blue-600 hover:text-white border-blue-600"
              aria-label="Solicitar información sobre servicios médicos"
            >
              Solicitar Información
            </Button>
          </div>
        </aside>
      </div>
    </section>
  );
};
