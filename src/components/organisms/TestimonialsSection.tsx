import TestimonialCard from '../molecules/TestimonialCard';

const testimonials = [
  {
    name: 'María Pérez',
    age: 45,
    treatment: 'Cardiología',
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5,
    text: 'El Dr. Mendoza salvó mi vida. Su profesionalismo y dedicación son excepcionales. Todo el personal fue muy amable durante mi tratamiento.',
    date: 'Hace 2 meses'
  },
  {
    name: 'José Rodríguez',
    age: 38,
    treatment: 'Oftalmología',
    image: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5,
    text: 'Recuperé mi visión completamente gracias al Dr. Silva. La cirugía fue perfecta y el seguimiento post-operatorio excelente.',
    date: 'Hace 1 mes'
  },
  {
    name: 'Carmen López',
    age: 32,
    treatment: 'Pediatría',
    image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5,
    text: 'La Dra. Rodríguez ha cuidado a mis hijos desde pequeños. Su trato es maravilloso y siempre está disponible cuando la necesitamos.',
    date: 'Hace 3 semanas'
  },
  {
    name: 'Antonio Silva',
    age: 52,
    treatment: 'Neurología',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5,
    text: 'Después de meses de dolores de cabeza, la Dra. González encontró la causa y me ayudó a recuperar mi calidad de vida.',
    date: 'Hace 6 semanas'
  }
];

export default function TestimonialsSection() {
  return (
    <section 
      id="testimonios" 
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
            <div role="listitem">
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="opacity-90">Satisfacción del paciente</div>
            </div>
            <div role="listitem">
              <div className="text-4xl font-bold mb-2">50K+</div>
              <div className="opacity-90">Pacientes atendidos</div>
            </div>
            <div role="listitem">
              <div className="text-4xl font-bold mb-2">4.9</div>
              <div className="opacity-90">Calificación promedio</div>
            </div>
            <div role="listitem">
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="opacity-90">Años de experiencia</div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}