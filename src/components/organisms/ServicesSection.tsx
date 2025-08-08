import { Heart, Brain, Eye, Baby, Stethoscope, Activity, Bone, Pill } from 'lucide-react';
import ServiceCard from '../molecules/ServiceCard';
import Button from '../atoms/Button';

const services = [
  {
    icon: Heart,
    title: 'Cardiología',
    description: 'Cuidado completo del corazón con tecnología de última generación.',
    features: ['Electrocardiogramas', 'Ecocardiogramas', 'Holter 24h', 'Cateterismo']
  },
  {
    icon: Brain,
    title: 'Neurología',
    description: 'Diagnóstico y tratamiento de trastornos del sistema nervioso.',
    features: ['Resonancia magnética', 'Electroencefalograma', 'Tomografía', 'Consulta especializada']
  },
  {
    icon: Eye,
    title: 'Oftalmología',
    description: 'Cuidado integral de la vista con equipos de vanguardia.',
    features: ['Cirugía de cataratas', 'Tratamiento de glaucoma', 'Corrección de miopía', 'Exámenes de fondo de ojo']
  },
  {
    icon: Baby,
    title: 'Pediatría',
    description: 'Atención especializada para el crecimiento saludable de los niños.',
    features: ['Control de crecimiento', 'Vacunación', 'Emergencias pediátricas', 'Consulta neonatal']
  },
  {
    icon: Stethoscope,
    title: 'Medicina General',
    description: 'Atención primaria integral para toda la familia.',
    features: ['Consulta general', 'Chequeos preventivos', 'Medicina preventiva', 'Seguimiento médico']
  },
  {
    icon: Activity,
    title: 'Medicina Deportiva',
    description: 'Especialistas en lesiones deportivas y rehabilitación.',
    features: ['Evaluación deportiva', 'Fisioterapia', 'Rehabilitación', 'Prevención de lesiones']
  },
  {
    icon: Bone,
    title: 'Traumatología',
    description: 'Tratamiento de lesiones del sistema musculoesquelético.',
    features: ['Cirugía ortopédica', 'Tratamiento de fracturas', 'Artroscopia', 'Rehabilitación']
  },
  {
    icon: Pill,
    title: 'Medicina Interna',
    description: 'Diagnóstico y tratamiento de enfermedades complejas.',
    features: ['Diagnóstico integral', 'Enfermedades crónicas', 'Medicina preventiva', 'Seguimiento especializado']
  }
];

export default function ServicesSection() {
  return (
    <section 
      id="servicios" 
      className="py-20 bg-white"
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

        <div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          role="list"
          aria-label="Lista de servicios médicos especializados"
        >
          {services.map((service, index) => (
            <div key={index} role="listitem">
              <ServiceCard {...service} />
            </div>
          ))}
        </div>

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
}