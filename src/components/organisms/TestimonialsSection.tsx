import TestimonialCard from '../molecules/TestimonialCard';
import { testimonials, patientStats } from '../../data';

export default function TestimonialsSection() {
  return (
    <section 
      id="testimonials" 
      className="py-20 bg-white"
      aria-labelledby="testimonials-heading"
    >
      <div className="container mx-auto px-4">
        <header className="text-center mb-16">
          <h2 
            id="testimonials-heading"
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Testimonios de Nuestros Pacientes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            La satisfacción de nuestros pacientes es nuestro mayor logro y motivación para seguir mejorando
          </p>
        </header>

        <div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          role="list"
          aria-label="Testimonios de pacientes satisfechos"
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} role="listitem">
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>

        {/* Stats section */}
        <aside 
          className="mt-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white"
          role="complementary"
          aria-label="Estadísticas de satisfacción de pacientes"
        >
          <div 
            className="grid md:grid-cols-4 gap-8 text-center"
            role="list"
            aria-label="Métricas de calidad médica"
          >
            {patientStats.map((stat, index) => (
              <div key={index} role="listitem">
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}