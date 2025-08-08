import { Award, Star, Calendar } from 'lucide-react';
import SpecialistCard from '../molecules/SpecialistCard';

const specialists = [
  {
    name: 'Dr. Carlos Mendoza',
    specialty: 'Cardiología',
    experience: '15 años',
    image: 'https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg?auto=compress&cs=tinysrgb&w=400',
    qualifications: ['MD Universidad Central de Venezuela', 'Especialización en Cardiología - Cleveland Clinic'],
    rating: 4.9,
    consultations: 1250
  },
  {
    name: 'Dra. María González',
    specialty: 'Neurología',
    experience: '12 años',
    image: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=400',
    qualifications: ['MD Universidad Católica', 'Fellowship en Neurología - Mayo Clinic'],
    rating: 4.8,
    consultations: 980
  },
  {
    name: 'Dr. Roberto Silva',
    specialty: 'Oftalmología',
    experience: '18 años',
    image: 'https://images.pexels.com/photos/6749778/pexels-photo-6749778.jpeg?auto=compress&cs=tinysrgb&w=400',
    qualifications: ['MD Universidad Simón Bolívar', 'Especialización en Cirugía Ocular - Barcelona'],
    rating: 4.9,
    consultations: 1540
  },
  {
    name: 'Dra. Ana Rodríguez',
    specialty: 'Pediatría',
    experience: '10 años',
    image: 'https://images.pexels.com/photos/4173239/pexels-photo-4173239.jpeg?auto=compress&cs=tinysrgb&w=400',
    qualifications: ['MD Universidad de Los Andes', 'Residencia Pediátrica - Hospital de Niños'],
    rating: 4.7,
    consultations: 820
  }
];

export default function SpecialistsSection() {
  return (
    <section 
      id="especialistas" 
      className="py-20 bg-gray-50"
      aria-labelledby="specialists-heading"
    >
      <div className="container mx-auto px-4">
        <header className="text-center mb-16">
          <h2 
            id="specialists-heading"
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Nuestros Especialistas Médicos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Médicos altamente calificados con formación internacional y años de experiencia en las mejores instituciones médicas del mundo
          </p>
        </header>

        <div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          role="list"
          aria-label="Lista de especialistas médicos certificados"
        >
          {specialists.map((doctor, index) => (
            <div key={index} role="listitem">
              <SpecialistCard {...doctor} />
            </div>
          ))}
        </div>

        {/* Additional info */}
        <aside 
          className="mt-16 text-center"
          role="complementary"
          aria-label="Información sobre la calidad de nuestros especialistas"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              ¿Por qué elegir nuestros especialistas?
            </h3>
            <div 
              className="grid md:grid-cols-3 gap-8"
              role="list"
              aria-label="Ventajas de nuestros especialistas"
            >
              <div className="text-center" role="listitem">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                  <Award className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Certificación Internacional</h4>
                <p className="text-gray-600">Formación en las mejores instituciones médicas del mundo</p>
              </div>
              <div className="text-center" role="listitem">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                  <Star className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Excelencia Comprobada</h4>
                <p className="text-gray-600">Más del 95% de satisfacción de nuestros pacientes</p>
              </div>
              <div className="text-center" role="listitem">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                  <Calendar className="w-8 h-8 text-yellow-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Disponibilidad</h4>
                <p className="text-gray-600">Citas disponibles en horarios flexibles para tu comodidad</p>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}